import { createServerFn } from "@tanstack/react-start";
import { processCheckout } from "../lib/checkout-service.server";
import { z } from "zod";
import { getBancontactProPayment } from "../lib/bancontact-pro.server";
import { getMolliePayment } from "../lib/mollie.server";
import { getOrderFromStore, upsertOrder } from "../lib/order-store";

const orderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  toppings: z.array(z.string()),
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

export const submitCheckout = createServerFn({ method: "POST" })
  .validator(checkoutSchema)
  .handler(async ({ data }) => processCheckout(data));

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
