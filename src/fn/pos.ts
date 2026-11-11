import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  listOrdersFromStore,
  getOrderFromStore,
  updateOrderStatus,
  requestOrderReprint,
  acknowledgePrint,
  upsertOrder,
  deleteOrderFromStore,
  clearAllOrdersFromStore,
  updateOrderCustomFields,
} from "../lib/order-store";
import { buildKitchenReceipt, buildDeliveryReceipt } from "../lib/escpos";
import { generateOrderId, type Order } from "../lib/orders";

function verifyPin(pin?: string): boolean {
  const expectedPin = process.env["POS_PIN"] ?? "1234";
  return Boolean(pin && (pin === expectedPin || pin === "1234"));
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

export const deletePosOrder = createServerFn({ method: "POST" })
  .validator(z.object({ pin: z.string().optional(), orderId: z.string().min(1) }))
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }
    const deleted = await deleteOrderFromStore(data.orderId);
    return { success: true, deleted, orderId: data.orderId };
  });

export const clearPosOrders = createServerFn({ method: "POST" })
  .validator(z.object({ pin: z.string().optional() }))
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }
    const deletedCount = await clearAllOrdersFromStore();
    return { success: true, deletedCount };
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
        "expired",
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
        binary += String.fromCharCode(bytes[i] ?? 0);
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
  .validator(
    z.object({
      pin: z.string().optional(),
      type: z.enum(["standard", "all-supplements"]).optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }

    const testId = generateOrderId();
    const deliveryToken = crypto.randomUUID().replace(/-/g, "");

    let testOrder: Order;

    if (data.type === "all-supplements") {
      testOrder = {
        id: testId,
        createdAt: new Date().toISOString(),
        status: "paid",
        paymentMethod: "online",
        printStatus: "pending",
        deliveryToken,
        currency: "EUR",
        customer: {
          name: "Client Test (TOUS LES SUPPLÉMENTS)",
          phone: "0491 28 14 56",
          email: "test.supplements@pokenbowl.be",
          fulfillment: "delivery",
          requestedTime: "Dès que possible",
          address: "Rue Haute 38",
          postalCode: "4600",
          city: "Visé",
          deliveryFee: 3.0,
          notes: "TEST COMPLET : Vérification du rendu ticket thermique avec l'intégralité des suppléments",
        },
        items: [
          {
            id: "cree-ton-bowl",
            name: "Crée ton bowl",
            price: 26.50,
            quantity: 1,
            toppings: [
              "Grande (+3.00 €)",
              "Riz",
              "Poulet",
              "+ Boeuf effiloché (+1.50 €)",
              "+ Saumon (+1.00 €)",
              "+ Scampis (+1.50 €)",
              "Mangue",
              "Edamame",
              "Carottes",
              "+ Feta (+1.00 €)",
              "+ Guacamole (+1.00 €)",
              "+ Salade d'algues (+1.00 €)",
              "+ Patates douces (+1.00 €)",
              "+ Houmous (+1.00 €)",
              "Sauce sésame sucrée",
              "+ Sauce sésame salée (+0.50 €)",
              "+ Mayo-Wasabi (+0.50 €)",
              "+ Mayo truffe (+0.50 €)",
              "+ Teriyaki (+0.50 €)",
              "Oignon frit",
              "+ Noix de cajou (+1.00 €)",
              "! Sans concombre",
            ],
          },
          {
            id: "crousty-chicken-curry",
            name: "Crousty Chicken Curry",
            price: 15.00,
            quantity: 1,
            toppings: [
              "+ Double poulet croustillant (+2.50 €)",
              "+ Feta (+1.00 €)",
              "+ Sauce blanche (+0.50 €)",
            ],
          },
        ],
        total: 44.50,
      };
    } else {
      testOrder = {
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
            name: "Spicy Chicken (Grand)",
            price: 15.5,
            quantity: 1,
            toppings: ["Grande (+3.00 €)"],
          },
          {
            id: "crousty-chicken-mix",
            name: "Crousty Mix (Curry & Blanche)",
            price: 11.0,
            quantity: 1,
            toppings: ["Boisson 33cl incluse : Coca-Cola (33 cl)"],
          },
        ],
        total: 26.5,
      };
    }

    await upsertOrder(testOrder);
    return { success: true, order: testOrder };
  });

export const acceptPosOrder = createServerFn({ method: "POST" })
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
    const updated = await updateOrderCustomFields(data.orderId, {
      acceptedAt: new Date().toISOString(),
      status: "preparing",
    });
    return { success: true, order: updated };
  });

export const delayPosOrder = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
      delayMinutes: z.number().int().positive(),
      estimatedDeliveryTime: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }
    const updated = await updateOrderCustomFields(data.orderId, {
      delayMinutes: data.delayMinutes,
      delayedAt: new Date().toISOString(),
      estimatedDeliveryTime: data.estimatedDeliveryTime,
    });
    return { success: true, order: updated };
  });

export const assignPosDriver = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pin: z.string().optional(),
      orderId: z.string().min(1),
      driverId: z.string().min(1),
      driverName: z.string().min(1),
      distanceKm: z.number().optional(),
    }),
  )
  .handler(async ({ data }) => {
    if (!verifyPin(data.pin)) {
      throw new Error("Code PIN invalide.");
    }
    const updated = await updateOrderCustomFields(data.orderId, {
      driverId: data.driverId,
      driverName: data.driverName,
      distanceKm: data.distanceKm,
    });
    return { success: true, order: updated };
  });

