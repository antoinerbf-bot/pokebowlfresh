import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  generateOrderId,
  type Order,
  type OrderItem,
  type PaymentMethod,
} from "../lib/orders";
import {
  createMolliePayment,
  formatEurAmount,
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
        const parsed = toppingLine
          .replace(/^Toppings?\s*:\s*/i, "")
          .replace(/\s*\(\+[\d.,]+€\)\s*$/, "")
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0 && !/aucun/i.test(s));
        const extraToppings = Math.max(0, parsed.length - 2);
        unitPrice += extraToppings * 0.50;
      } else {
        const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
        const extraToppings = Math.max(0, individualToppings.length - 2);
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
    const bowl = bowls.find((b) => b.id === item.id);
    if (bowl) {
      let unitPrice = bowl.price;
      const opts = item.toppings ?? [];

      // Format Grand (+3.00€ · 13€)
      if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) {
        unitPrice += 3.00;
      }

      // Toppings additionnels (+0.50€ chacun)
      const toppingEntries = opts.filter((t) => /^Topping\s*:/i.test(t));
      unitPrice += toppingEntries.length * 0.50;

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
    const items = canonicalizeItems(data.items);
    const subtotal = computeSubtotal(items);
    if (subtotal <= 0) {
      throw new Error("Panier invalide");
    }

    const deliveryZone = data.customer.fulfillment === "delivery"
      ? getDeliveryZone(data.customer.postalCode ?? "")
      : null;

    if (data.customer.fulfillment === "delivery") {
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
    const order: Order = {
      id: orderId,
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

    const webhookUrl = `${data.origin}/api/mollie-webhook`;
    const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=online`;

    const payment = await createMolliePayment({
      amountValue: formatEurAmount(total),
      description: `Poke N Bowl ${orderId}`,
      redirectUrl,
      webhookUrl,
      metadata: {
        orderId: order.id,
        customerName: order.customer.name,
        customerPhone: order.customer.phone,
        requestedTime: order.customer.requestedTime,
      },
      locale: "fr_BE",
    });

    order.molliePaymentId = payment.id;
    await upsertOrder(order);

    const checkoutUrl = payment._links?.checkout?.href;
    if (!checkoutUrl) {
      throw new Error("Mollie n'a pas renvoyé d'URL de paiement");
    }

    return {
      type: "online" as const,
      orderId: order.id,
      total: order.total,
      molliePaymentId: payment.id,
      redirectUrl: checkoutUrl,
    };
  });

export const getOrderStatus = createServerFn({ method: "GET" })
  .validator(z.object({ orderId: z.string().min(1) }))
  .handler(async ({ data }) => {
    let order = await getOrderFromStore(data.orderId);

    if (order?.molliePaymentId && order.status === "pending_payment") {
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
        // Keep local status if Mollie unreachable
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
