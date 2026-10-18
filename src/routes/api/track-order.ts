import { createFileRoute } from "@tanstack/react-router";
import { getOrderByDeliveryToken, updateOrderStatus } from "../../lib/order-store";

export const Route = createFileRoute("/api/track-order")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const rawToken = url.searchParams.get("token") || "";
          const token = rawToken.trim();

          if (!token) {
            return new Response(
              JSON.stringify({ found: false, error: "Token ou ID manquant." }),
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Cache-Control": "no-store",
                },
              },
            );
          }

          // Support immédiat pour le ticket test imprimé
          if (token.toUpperCase().startsWith("TEST")) {
            return new Response(
              JSON.stringify({
                found: true,
                order: {
                  id: "TEST-TICKET",
                  deliveryToken: "TEST-TICKET",
                  createdAt: new Date().toISOString(),
                  status: "delivering",
                  fulfillment: "delivery",
                  requestedTime: "Dès que possible",
                  customerName: "Test Ticket Caisse (GPS)",
                  customerPhone: "0499 00 00 00",
                  notes: "Test GPS Waze & Google Maps 1-Clic",
                  address: "Rue Haute 38",
                  postalCode: "4600",
                  city: "Visé",
                  deliveryFee: 2.0,
                  total: 16.0,
                  paymentMethod: "on_site",
                  items: [
                    { name: "Poké Saumon Classic (Medium)", quantity: 1, price: 12.5 },
                    { name: "Boisson Aloe Vera", quantity: 1, price: 3.5 },
                  ],
                },
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

          const order = await getOrderByDeliveryToken(token);
          if (!order) {
            return new Response(
              JSON.stringify({ found: false, error: "Commande introuvable pour ce lien." }),
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Cache-Control": "no-store",
                },
              },
            );
          }

          return new Response(
            JSON.stringify({
              found: true,
              order: {
                id: order.id,
                deliveryToken: order.deliveryToken,
                createdAt: order.createdAt,
                status: order.status,
                fulfillment: order.customer?.fulfillment ?? "delivery",
                requestedTime: order.customer?.requestedTime ?? "Dès que possible",
                customerName: order.customer?.name ?? "Client",
                customerPhone: order.customer?.phone ?? "",
                notes: order.customer?.notes ?? "",
                address: order.customer?.address ?? "",
                postalCode: order.customer?.postalCode ?? "",
                city: order.customer?.city ?? "",
                deliveryFee: order.customer?.deliveryFee,
                total: Number(order.total || 0),
                paymentMethod: order.paymentMethod,
                items: (order.items || []).map((i) => ({
                  name: i.name,
                  quantity: i.quantity,
                  price: i.price,
                  toppings: i.toppings,
                })),
              },
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            },
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({ found: false, error: err?.message || String(err) }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            },
          );
        }
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const token = (body?.token ?? "").trim();
          const status = body?.status;

          if (!token || !status) {
            return new Response(
              JSON.stringify({ success: false, error: "Paramètres token ou status manquants." }),
              {
                status: 400,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              },
            );
          }

          const order = await getOrderByDeliveryToken(token);
          if (!order) {
            return new Response(
              JSON.stringify({ success: false, error: "Commande introuvable." }),
              {
                status: 404,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              },
            );
          }

          await updateOrderStatus(order.id, status);
          return new Response(
            JSON.stringify({ success: true, newStatus: status, orderId: order.id }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            },
          );
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, error: err?.message || String(err) }),
            {
              status: 500,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            },
          );
        }
      },
    },
  },
});
