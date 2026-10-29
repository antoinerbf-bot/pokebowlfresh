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
  upsertOrder,
} from "../lib/order-store";
import { allToppings, bowls, drinks, desserts, EXTRA_PROTEIN_PRICE, EXTRA_SAUCE_PRICE } from "../lib/data";
import { getDeliveryZone } from "../lib/delivery";

export const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  toppings: z.array(z.string()).default([]),
});

export const checkoutSchema = z.object({
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
    const rawId = item.id.trim();

    // ─── 1. Bowl sur mesure (page /sur-mesure ou composeur #composer) ───
    if (
      rawId === "sur-mesure" ||
      rawId.startsWith("custom-live-") ||
      rawId.startsWith("sur-mesure-")
    ) {
      let unitPrice = 10.00;
      const opts = item.toppings ?? [];

      // Format Grand (+3.00€ · 13€)
      const isGrand =
        rawId.endsWith("-grand") ||
        /\(Grand\)/i.test(item.name) ||
        opts.some((t) => /Taille\s*:\s*Grand/i.test(t) || /Format\s+Grand/i.test(t));
      if (isGrand) {
        unitPrice += 3.00;
      }

      // Supplément Saumon sur la protéine principale (+1.00€)
      const hasMainSalmon = opts.some(
        (t) =>
          !/^Suppl[ée]ment\s*Prot[ée]ine/i.test(t) &&
          (/^Prot[ée]ine\s*:.*saumon/i.test(t) || /saumon/i.test(t)),
      );
      if (hasMainSalmon) {
        unitPrice += 1.00;
      }

      // Suppléments Protéines additionnels (+2.50€ par portion, illimité)
      const customExtraProteins = opts.filter((t) =>
        /^Suppl[ée]ment\s*Prot[ée]ine/i.test(t),
      );
      let totalCustomExtraProteinUnits = 0;
      for (const ep of customExtraProteins) {
        const match = ep.match(/\(x(\d+)\)/i) || ep.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalCustomExtraProteinUnits += isNaN(count) ? 1 : count;
      }
      unitPrice += totalCustomExtraProteinUnits * EXTRA_PROTEIN_PRICE;

      // Mix-ins (5 hors feta inclus, +1.00€ par portion au-delà ; feta = +1.00€ par portion)
      const mixInsLine = opts.find((t) => /^Mix-ins?\s*:/i.test(t));
      if (mixInsLine) {
        const fetaSuffixMatch = mixInsLine.match(/·\s*Feta(?:\s*\(x(\d+)\))?\s*\(\+[\d.,]+€\)/i);

        const cleanedMixIns = mixInsLine
          .replace(/^Mix-ins?\s*:\s*/i, "")
          .replace(/·\s*Feta(?:\s*\(x\d+\))?\s*\(\+[\d.,]+€\)/gi, "")
          .replace(/\(\+[\d.,]+€\)/g, "");

        const rawParts = cleanedMixIns
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0 && !/^aucun/i.test(s));

        let fetaUnits = 0;
        let nonFetaUnits = 0;
        for (const part of rawParts) {
          const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
          const count = match?.[1] ? parseInt(match[1], 10) : 1;
          const units = isNaN(count) ? 1 : count;
          const itemName = part.replace(/\s*\(x\d+\)/gi, "").trim();
          if (/^feta$/i.test(itemName)) {
            fetaUnits += units;
          } else {
            nonFetaUnits += units;
          }
        }

        if (fetaUnits === 0 && fetaSuffixMatch) {
          const suffixCount = fetaSuffixMatch[1] ? parseInt(fetaSuffixMatch[1], 10) : 1;
          fetaUnits = isNaN(suffixCount) ? 1 : suffixCount;
        }

        const extraMixInUnits = Math.max(0, nonFetaUnits - 5);
        unitPrice += (extraMixInUnits + fetaUnits) * 1.00;
      }

      // Toppings (1 inclus, +0.50€ chacun au-delà — aligné sur le composeur)
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
            const count = match?.[1] ? parseInt(match[1], 10) : 1;
            totalToppingUnits += isNaN(count) ? 1 : count;
          }
        }
        const extraToppings = Math.max(0, totalToppingUnits - 1);
        unitPrice += extraToppings * 0.50;
      } else {
        const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
        let totalToppingUnits = 0;
        for (const t of individualToppings) {
          const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
          const count = match?.[1] ? parseInt(match[1], 10) : 1;
          totalToppingUnits += isNaN(count) ? 1 : count;
        }
        const extraToppings = Math.max(0, totalToppingUnits - 1);
        unitPrice += extraToppings * 0.50;
      }

      // Suppléments de sauce (+0.50€ par pot supplémentaire, illimité, ex: x3 = +1.50€)
      const extraSauces = opts.filter((t) =>
        /sauce\s+(suppl[ée]mentaire|extra|2[èe]me\s+pot)/i.test(t),
      );
      let totalExtraSauceUnits = 0;
      for (const es of extraSauces) {
        const match = es.match(/\(x(\d+)\)/i) || es.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalExtraSauceUnits += isNaN(count) ? 1 : count;
      }
      unitPrice += totalExtraSauceUnits * EXTRA_SAUCE_PRICE;

      return {
        ...item,
        id: "sur-mesure",
        name: isGrand ? "Poke Bowl sur mesure (Grand)" : "Poke Bowl sur mesure",
        price: unitPrice,
        toppings: opts,
      };
    }

    // Normalisation des suffixes ajoutés côté UI (-moyen, -grand, -mega, -blog, -timestamp)
    const strippedId = rawId.replace(/-(moyen|grand|mega|blog|\d{10,})$/i, "");

    // ─── 2. Bowls signatures & Crousty ───────────────────────────────
    const bowl = bowls.find((b) => b.id === rawId || b.id === strippedId);
    if (bowl) {
      const isCrousty = bowl.id.startsWith("crousty-");
      let unitPrice = bowl.price;
      const opts = item.toppings ?? [];

      // Format Grand (+3.00€ pour les poké bowls)
      const isGrand =
        !isCrousty &&
        (rawId.endsWith("-grand") ||
          /\(Grand\)/i.test(item.name) ||
          opts.some((t) => /Taille\s*:\s*Grand/i.test(t) || /Format\s+Grand/i.test(t)));
      if (isGrand) {
        unitPrice = bowl.grandPrice ?? bowl.price + 3.00;
      }

      // Supplément Protéine / Poulet Croustillant / Saumon / Scampis (+2.50€ par portion, illimité)
      const extraProteins = opts.filter((t) =>
        /(Suppl[ée]ment\s*Prot[ée]ine|Prot[ée]ine\s*suppl[ée]mentaire|Portion\s+extra\s+Poulet|Suppl[ée]ment\s+Poulet\s+Croustillant|Suppl[ée]ment\s+Saumon|Suppl[ée]ment\s+Scampis)/i.test(t),
      );
      let totalExtraProteinUnits = 0;
      for (const ep of extraProteins) {
        const match = ep.match(/\(x(\d+)\)/i) || ep.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalExtraProteinUnits += isNaN(count) ? 1 : count;
      }
      unitPrice += totalExtraProteinUnits * EXTRA_PROTEIN_PRICE;

      // Suppléments Légumes / Mix-ins sur bowl signature (+1.00€ par portion, illimité)
      const extraMixins = opts.filter((t) => /^L[ée]gume\s*\/\s*Mix-in/i.test(t));
      let totalExtraMixinUnits = 0;
      for (const m of extraMixins) {
        const match = m.match(/\(x(\d+)\)/i) || m.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalExtraMixinUnits += isNaN(count) ? 1 : count;
      }
      unitPrice += totalExtraMixinUnits * 1.00;

      // Toppings additionnels (+0.50€ chaque portion, illimité)
      const toppingEntries = opts.filter((t) => /^Topping/i.test(t));
      let totalSignatureToppings = 0;
      for (const t of toppingEntries) {
        const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalSignatureToppings += isNaN(count) ? 1 : count;
      }
      unitPrice += totalSignatureToppings * 0.50;

      // Suppléments de sauce (+0.50€ par pot supplémentaire, illimité, ex: x3 = +1.50€)
      const extraSauces = opts.filter((t) =>
        /sauce\s+(extra|suppl[ée]mentaire|2[èe]me\s+pot)/i.test(t),
      );
      let totalExtraSauceUnits = 0;
      for (const es of extraSauces) {
        const match = es.match(/\(x(\d+)\)/i) || es.match(/x(\d+)/i);
        const count = match?.[1] ? parseInt(match[1], 10) : 1;
        totalExtraSauceUnits += isNaN(count) ? 1 : count;
      }
      unitPrice += totalExtraSauceUnits * EXTRA_SAUCE_PRICE;

      return {
        ...item,
        id: isCrousty ? bowl.id : `${bowl.id}-${isGrand ? "grand" : "moyen"}`,
        name: isCrousty ? bowl.name : `${bowl.name} (${isGrand ? "Grand" : "Moyen"})`,
        price: unitPrice,
        toppings: opts,
      };
    }

    // ─── 3. Boissons & Desserts ──────────────────────────────────────
    if (rawId === "tira-nutella" || strippedId === "tira-nutella") {
      throw new Error("Le Tiramisu Nutella est actuellement victime de son succès (sold out).");
    }

    const canonicalId = catalog.has(rawId) ? rawId : strippedId;
    const canonicalPrice = catalog.get(canonicalId);
    if (canonicalPrice == null) {
      throw new Error("Article invalide");
    }

    const drink = drinks.find((d) => d.id === canonicalId);
    const dessert = desserts.find((d) => d.id === canonicalId);

    return {
      ...item,
      id: canonicalId,
      name: drink?.name ?? dessert?.name ?? item.name,
      price: canonicalPrice,
      toppings: [],
    };
  });
}

function computeSubtotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export async function processCheckout(data: z.infer<typeof checkoutSchema>) {
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
    }
}
