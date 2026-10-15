import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  listOrdersFromStore,
  getOrderFromStore,
  updateOrderStatus,
  requestOrderReprint,
  acknowledgePrint,
  upsertOrder,
} from "../lib/order-store";
import { buildKitchenReceipt, buildDeliveryReceipt } from "../lib/escpos";
import { generateOrderId, type Order } from "../lib/orders";

function verifyPin(pin?: string): boolean {
  const expectedPin = process.env.POS_PIN ?? "1234";
  return pin === expectedPin;
}

export const getPosOrders = createServerFn({ method: "POST" })
  .validator(z.object({ pin: z.string().optional() }))
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    const orders = await listOrdersFromStore(100);
    return { orders };
  });

export const setPosOrderStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
      status: z.enum([
        "pending_payment",
        "paid",
        "awaiting_pickup",
        "awaiting_delivery",
        "preparing",
        "ready",
        "delivering",
        "completed",
        "cancelled",
      ]),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    await updateOrderStatus(data.orderId, data.status);
    return { success: true };
  });

export const triggerReprint = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    await requestOrderReprint(data.orderId);
    return { success: true };
  });

export const getOrderReceipts = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
      origin: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    let order = await getOrderFromStore(data.orderId);
    if (!order) {
      throw new Error("Commande introuvable.");
    }

    // Backfill a secure tracking token for older orders before printing, so reprints
    // always receive a functional QR code as well.
    if (!order.deliveryToken) {
      order = { ...order, deliveryToken: crypto.randomUUID().replace(/-/g, "") };
      await upsertOrder(order);
    }

    const kitchenBytes = buildKitchenReceipt(order);
    const deliveryBytes = buildDeliveryReceipt(order, data.origin ?? "https://pokenbowl.be");

    const toBase64 = (bytes: Uint8Array) => {
      let binary = "";
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    };

    return {
      orderId: order.id,
      kitchenReceiptB64: toBase64(kitchenBytes),
      deliveryReceiptB64: toBase64(deliveryBytes),
    };
  });

export const ackPosPrint = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
      success: z.boolean(),
      error: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    await acknowledgePrint(data.orderId, data.success, data.error);
    return { success: true };
  });

export const createTestDeliveryOrder = createServerFn({ method: "POST" })
  .validator(z.object({ pin: z.string().optional() }))
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    const testId = generateOrderId();
    const deliveryToken = crypto.randomUUID().replace(/-/g, "");

    const testOrder: Order = {
      id: testId,
      createdAt: new Date().toISOString(),
      status: "paid",
      paymentMethod: "online",
      printStatus: "pending",
      deliveryToken,
      currency: "EUR",
      customer: {
        name: "Jean Dupont (TEST LIVREUR GPS)",
        phone: "+32 499 12 34 56",
        email: "livreur.test@pokenbowl.be",
        fulfillment: "delivery",
        requestedTime: "Dès que possible",
        address: "Avenue Reine Astrid 15",
        postalCode: "4600",
        city: "Visé",
        deliveryFee: 2.0,
        notes: "Test Waze & Google Maps - Sonner interphone 2B",
      },
      items: [
        {
          id: "spicy-chicken",
          name: "Spicy Chicken Poké (Grand)",
          price: 15.5,
          quantity: 1,
          toppings: ["Avocat", "Oignons frits", "Sauce Spicy Mayo"],
        },
        {
          id: "crousty-chicken",
          name: "Crousty Chicken Poké",
          price: 14.5,
          quantity: 1,
          toppings: ["Sauce Sésame", "Edamame", "Cacahuètes"],
        },
      ],
      total: 32.0,
    };

    await upsertOrder(testOrder);
    return { success: true, order: testOrder };
  });

