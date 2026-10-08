import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getOrderByDeliveryToken, updateOrderStatus } from "../lib/order-store";

export const getDeliveryOrder = createServerFn({ method: "GET" })
  .validator(z.object({ token: z.string().min(8) }))
  .handler(async ({ data }) => {
    const order = await getOrderByDeliveryToken(data.token);
    if (!order) {
      return { found: false as const };
    }

    return {
      found: true as const,
      order: {
        id: order.id,
        createdAt: order.createdAt,
        status: order.status,
        fulfillment: order.customer.fulfillment,
        requestedTime: order.customer.requestedTime,
        customerName: order.customer.name,
        customerPhone: order.customer.phone,
        notes: order.customer.notes,
        address: order.customer.address,
        postalCode: order.customer.postalCode,
        city: order.customer.city,
        deliveryFee: order.customer.deliveryFee,
        total: order.total,
        paymentMethod: order.paymentMethod,
        items: order.items.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          toppings: i.toppings,
        })),
      },
    };
  });

export const updateDeliveryStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      token: z.string().min(8),
      status: z.enum(["delivering", "completed"]),
    }),
  )
  .handler(async ({ data }) => {
    const order = await getOrderByDeliveryToken(data.token);
    if (!order) {
      throw new Error("Commande introuvable");
    }

    await updateOrderStatus(order.id, data.status);
    return { success: true };
  });
