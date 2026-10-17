import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  generateOrderId,
  type Order,
  type OrderItem,
  type PaymentMethod,
} from "../lib/orders";

import {
  isBancontactProConfigured,
  createBancontactProPayment,
  getBancontactProPayment,
} from "../lib/bancontact-pro.server";
import {
  isMollieConfigured,
  createMolliePayment,
  getMolliePayment,
} from "../lib/mollie.server";
import {
  getOrderFromStore,
  upsertOrder,
} from "../lib/order-store";
import { allToppings, bowls, drinks, desserts } from "../lib/data";
import { getDeliveryZone } from "../lib/delivery";

const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  toppings: z.array(z.string()),
});

const checkoutSchema = z.object({
  customer: z.object({
    name: z.string().min(2),
    phone: z.string().min(8),
    email: z.string().email().optional().or(z.literal("")),
    notes: z.string().max(500).optional(),
    fulfillment: z.enum(["delivery", "pickup"]),
    requestedTime: z.string().min(1),
    address: z.string().max(300).optional(),
    postalCode: z.string().max(10).optional(),
    city: z.string().max(100).optional(),
  }),
  items: z.array(orderItemSchema).min(1),
  paymentMethod: z.enum(["online", "on_site"]),
  origin: z.string().url(),
});

function canonicalizeItems(items: OrderItem[]): OrderItem[] {
  const catalog = new Map<string, number>([
    ...bowls.map((item) => [item.id, item.price] as const),
    ["sur-mesure", 10.00],
    ...drinks.map((item) => [item.id, item.price] as const),
    ...desserts.map((item) => [item.id, item.price] as const),
  ]);

  return items.map((item) => {
    // ─── 1. Bowl sur mesure ───────────────────────────────────────────
    if (item.id === "sur-mesure") {
      let unitPrice = 10.00;
      const opts = item.toppings ?? [];

      // Format Grand (+3.00€ · 13€)
      if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) {
        unitPrice += 3.00;
      }

      // Supplément Saumon (+1.00€)
      const hasSalmon = opts.some((t) => /saumon/i.test(t));
      if (hasSalmon) {
        unitPrice += 1.00;
      }

      // Mix-ins (5 inclus, +0.50€ chacun au-delà)
      const mixInsLine = opts.find((t) => /^Mix-ins?\s*:/i.test(t));
      if (mixInsLine) {
        const rawMixIns = mixInsLine
          .replace(/^Mix-ins?\s*:\s*/i, "")
          .replace(/\s*\(\+[\d.,]+€\)\s*$/, "")
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
        const extraMixIns = Math.max(0, rawMixIns.length - 5);
        unitPrice += extraMixIns * 0.50;
      }

      // Toppings (2 inclus, +0.50€ chacun au-delà)
      const toppingLine = opts.find((t) => /^Toppings?\s*:/i.test(t));
      if (toppingLine) {
        const rawContent = toppingLine
          .replace(/^Toppings?\s*:\s*/i, "")
          .replace(/\s*\(\+[\d.,]+€\)\s*$/, "");
        let totalToppingUnits = 0;
        if (!/aucun/i.test(rawContent)) {
          const parts = rawContent.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
          for (const part of parts) {
            const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
            const count = match ? parseInt(match[1], 10) : 1;
            totalToppingUnits += isNaN(count) ? 1 : count;
          }
        }
        const extraToppings = Math.max(0, totalToppingUnits - 2);
        unitPrice += extraToppings * 0.50;
      } else {
        const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
        let totalToppingUnits = 0;
        for (const t of individualToppings) {
          const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
          const count = match ? parseInt(match[1], 10) : 1;
          totalToppingUnits += isNaN(count) ? 1 : count;
        }
        const extraToppings = Math.max(0, totalToppingUnits - 2);
        unitPrice += extraToppings * 0.50;
      }

      return {
        ...item,
        name: "Poke Bowl sur mesure",
        price: unitPrice,
        toppings: opts,
      };
    }

    // ─── 2. Bowls signatures ─────────────────────────────────────────
    const bowl = bowls.find((b) => b.id === item.id || item.id === `${b.id}-moyen` || item.id === `${b.id}-grand` || item.id.startsWith(b.id));
    if (bowl) {
      let unitPrice = bowl.price;
      const opts = item.toppings ?? [];

      // Format Grand (+3.00€ · 13€)
      if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) {
        unitPrice += 3.00;
      }

      // Toppings additionnels (+0.50€ chaque portion, illimité)
      const toppingEntries = opts.filter((t) => /^Topping/i.test(t));
      let totalSignatureToppings = 0;
      for (const t of toppingEntries) {
        const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
        const count = match ? parseInt(match[1], 10) : 1;
        totalSignatureToppings += isNaN(count) ? 1 : count;
      }
      unitPrice += totalSignatureToppings * 0.50;

      // Sauce extra (+1.00€)
      const extraSauces = opts.filter((t) => /sauce extra/i.test(t));
      unitPrice += extraSauces.length * 1.00;

      return {
        ...item,
        name: bowl.name,
        price: unitPrice,
        toppings: opts,
      };
    }

    // ─── 3. Boissons & Desserts ──────────────────────────────────────
    if (item.id === "tira-nutella") {
      throw new Error("Le Tiramisu Nutella est actuellement victime de son succès (sold out).");
    }

    const canonicalPrice = catalog.get(item.id);
    if (canonicalPrice == null) {
      throw new Error("Article invalide");
    }

    const drink = drinks.find((d) => d.id === item.id);
    const dessert = desserts.find((d) => d.id === item.id);

    return {
      ...item,
      name: drink?.name ?? dessert?.name ?? item.name,
      price: canonicalPrice,
      toppings: [],
    };
  });
}

function computeSubtotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const submitCheckout = createServerFn({ method: "POST" })
  .validator(checkoutSchema)
  .handler(async ({ data }) => {
    try {
    console.info("[Checkout] submitCheckout started", { fulfillment: data.customer.fulfillment, paymentMethod: data.paymentMethod, itemCount: data.items.length });
    const items = canonicalizeItems(data.items);
    const subtotal = computeSubtotal(items);
    if (subtotal <= 0) {
      throw new Error("Panier invalide");
    }

    const deliveryZone = data.customer.fulfillment === "delivery"
      ? getDeliveryZone(data.customer.postalCode ?? "")
      : null;

    if (data.customer.fulfillment === "delivery") {
      if (data.paymentMethod === "on_site") {
        throw new Error("Le paiement sur place n'est pas disponible pour la livraison à domicile. Veuillez régler en ligne.");
      }
      if (!deliveryZone) throw new Error("Cette zone de livraison n'est pas desservie.");
      if (subtotal < deliveryZone.minimumOrder) {
        throw new Error(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
      }
      if (!data.customer.address?.trim() || !data.customer.city?.trim()) {
        throw new Error("Adresse de livraison incomplète.");
      }
    }

    const deliveryFee = deliveryZone ? (subtotal >= 50 ? 0 : deliveryZone.feeUnder50) : 0;
    const total = subtotal + deliveryFee;
    const orderId = generateOrderId();
    const deliveryToken = crypto.randomUUID().replace(/-/g, "");
    const order: Order = {
      id: orderId,
      deliveryToken,
      createdAt: new Date().toISOString(),
      status: data.paymentMethod === "online" ? "pending_payment" : (data.customer.fulfillment === "delivery" ? "awaiting_delivery" : "awaiting_pickup"),
      paymentMethod: data.paymentMethod as PaymentMethod,
      customer: {
        name: data.customer.name.trim(),
        phone: data.customer.phone.trim(),
        email: data.customer.email?.trim() || undefined,
        notes: data.customer.notes?.trim() || undefined,
        fulfillment: data.customer.fulfillment,
        requestedTime: data.customer.requestedTime,
        address: data.customer.address?.trim() || undefined,
        postalCode: data.customer.postalCode?.trim().replace(/\s+/g, "") || undefined,
        city: data.customer.city?.trim() || undefined,
        deliveryFee,
      },
      items,
      total,
      currency: "EUR",
    };

    if (data.paymentMethod === "on_site") {
      await upsertOrder(order);
      return {
        type: "on_site" as const,
        orderId: order.id,
        total: order.total,
        redirectUrl: `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=on_site`,
      };
    }

    if (isMollieConfigured() && !isBancontactProConfigured()) {
      const webhookUrl = `${data.origin}/api/mollie-webhook`;
      const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=mollie`;

      const payment = await createMolliePayment({
        amountValue: total.toFixed(2),
        description: `Poke N Bowl ${orderId}`,
        redirectUrl,
        webhookUrl,
        metadata: { orderId: order.id },
      });

      order.molliePaymentId = payment.id;
      await upsertOrder(order);

      const payUrl = payment._links?.checkout?.href;
      if (!payUrl) {
        throw new Error("Mollie n'a pas renvoyé d'URL de paiement.");
      }

      return {
        type: "online" as const,
        orderId: order.id,
        total: order.total,
        molliePaymentId: payment.id,
        redirectUrl: payUrl,
      };
    }

    const webhookUrl = `${data.origin}/api/bancontact-webhook`;
    const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=bancontact`;

    const payment = await createBancontactProPayment({
      amountEur: total,
      description: `Poke N Bowl ${orderId}`,
      reference: order.id,
      returnUrl: redirectUrl,
      callbackUrl: webhookUrl,
    });

    order.molliePaymentId = `bancontact:${payment.paymentId}`;
    await upsertOrder(order);

    const payUrl =
      payment._links?.checkout?.href ||
      payment._links?.deeplink?.href ||
      payment._links?.qrcode?.href;

    if (!payUrl) {
      throw new Error("Bancontact Pro n'a pas renvoyé d'URL de paiement");
    }

    return {
      type: "online" as const,
      orderId: order.id,
      total: order.total,
      molliePaymentId: payment.paymentId,
      redirectUrl: payUrl,
    };
    } catch (error) {
      console.error("[Checkout] submitCheckout failed:", error);
      return {
        type: "error" as const,
        message: error instanceof Error && error.message
          ? error.message
          : "Erreur serveur pendant la création de la commande. Consultez les journaux de l’application.",
      };
    };

export const getOrderStatus = createServerFn({ method: "GET" })
  .validator(z.object({ orderId: z.string().min(1) }))
  .handler(async ({ data }) => {
    let order = await getOrderFromStore(data.orderId);

    if (order?.molliePaymentId && order.status === "pending_payment") {
      if (order.molliePaymentId.startsWith("bancontact:")) {
        const paymentId = order.molliePaymentId.slice("bancontact:".length);
        try {
          const payment = await getBancontactProPayment(paymentId);
          if (payment.status === "SUCCEEDED") {
            order = { ...order, status: "paid" };
            await upsertOrder(order);
          } else if (
            payment.status === "CANCELLED" ||
            payment.status === "EXPIRED" ||
            payment.status === "FAILED" ||
            payment.status === "VOIDED"
          ) {
            order = {
              ...order,
              status: payment.status === "EXPIRED" ? "expired" : "cancelled",
            };
            await upsertOrder(order);
          }
        } catch {
          // Keep local status if API temporarily unreachable
        }
      } else {
        try {
          const payment = await getMolliePayment(order.molliePaymentId);
          if (payment.status === "paid") {
            order = { ...order, status: "paid" };
            await upsertOrder(order);
          } else if (
            payment.status === "canceled" ||
            payment.status === "expired" ||
            payment.status === "failed"
          ) {
            order = {
              ...order,
              status: payment.status === "expired" ? "expired" : "cancelled",
            };
            await upsertOrder(order);
          }
        } catch {
          // Keep local status if API temporarily unreachable
        }
      }
    }

    if (!order) {
      return { found: false as const };
    }

    return {
      found: true as const,
      order: {
        id: order.id,
        status: order.status,
        paymentMethod: order.paymentMethod,
        total: order.total,
        customer: order.customer,
        items: order.items,
        createdAt: order.createdAt,
      },
    };
  });
