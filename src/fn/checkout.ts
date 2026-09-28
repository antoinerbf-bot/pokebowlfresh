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
    ...drinks.map((item) => [item.id, item.price] as const),
    ...desserts.map((item) => [item.id, item.price] as const),
  ]);
  const toppingSet = new Set(allToppings);

  return items.map((item) => {
    const canonicalPrice = catalog.get(item.id);
    if (canonicalPrice == null) {
      throw new Error("Article invalide");
    }

    const toppings = [...new Set(item.toppings ?? [])];
    if (!bowls.some((bowl) => bowl.id === item.id) && toppings.length > 0) {
      throw new Error("Garnitures invalides");
    }
    if (toppings.length > 5 || toppings.some((topping) => !toppingSet.has(topping))) {
      throw new Error("Garnitures invalides");
    }

    return {
      ...item,
      name: bowls.find((bowl) => bowl.id === item.id)?.name
        ?? drinks.find((drink) => drink.id === item.id)?.name
        ?? desserts.find((dessert) => dessert.id === item.id)?.name
        ?? item.name,
      price: canonicalPrice,
      toppings,
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
      status: data.paymentMethod === "online" ? "pending_payment" : "awaiting_pickup",
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
