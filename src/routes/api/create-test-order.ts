import { createFileRoute } from "@tanstack/react-router";
import { upsertOrder } from "../../lib/order-store";
import { generateOrderId, type Order } from "../../lib/orders";
import crypto from "node:crypto";

export const Route = createFileRoute("/api/create-test-order")({
  server: {
    handlers: {
      GET: async () => createHandler(),
      POST: async () => createHandler(),
    },
  },
});

async function createHandler() {
        try {
          const testId = generateOrderId();
          const deliveryToken =
            typeof crypto?.randomUUID === "function"
              ? crypto.randomUUID().replace(/-/g, "")
              : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

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

          return new Response(JSON.stringify({ success: true, order: testOrder }), {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        } catch (err: any) {
          console.error("[create-test-order] Error:", err);
          return new Response(
            JSON.stringify({
              success: false,
              error: err?.message ?? String(err),
              stack: err?.stack,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            },
          );
        }
}
