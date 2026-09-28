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
    pickupTime: z.string().min(1),
  }),
  items: z.array(orderItemSchema).min(1),
  paymentMethod: z.enum(["online", "on_site"]),
  origin: z.string().url(),
});

function computeTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const submitCheckout = createServerFn({ method: "POST" })
  .validator(checkoutSchema)
  .handler(async ({ data }) => {
    const total = computeTotal(data.items);
    if (total <= 0) {
      throw new Error("Panier invalide");
    }

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
        pickupTime: data.customer.pickupTime,
      },
      items: data.items,
      total,
      currency: "EUR",
    };

    if (data.paymentMethod === "on_site") {
      upsertOrder(order);
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
        pickupTime: order.customer.pickupTime,
      },
      locale: "fr_BE",
    });

    order.molliePaymentId = payment.id;
    upsertOrder(order);

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
    let order = getOrderFromStore(data.orderId);

    if (order?.molliePaymentId && order.status === "pending_payment") {
      try {
        const payment = await getMolliePayment(order.molliePaymentId);
        if (payment.status === "paid") {
          order = { ...order, status: "paid" };
          upsertOrder(order);
        } else if (
          payment.status === "canceled" ||
          payment.status === "expired" ||
          payment.status === "failed"
        ) {
          order = {
            ...order,
            status: payment.status === "expired" ? "expired" : "cancelled",
          };
          upsertOrder(order);
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
