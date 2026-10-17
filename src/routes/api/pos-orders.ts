import { createFileRoute } from "@tanstack/react-router";
import { listOrdersFromStore, updateOrderStatus } from "../../lib/order-store";

export const Route = createFileRoute("/api/pos-orders")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const orders = await listOrdersFromStore(100);
          return new Response(JSON.stringify({ success: true, orders }), {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, error: err?.message || String(err), orders: [] }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            },
          );
        }
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { orderId, status } = body;
          if (!orderId || !status) {
            return new Response(
              JSON.stringify({ success: false, error: "orderId ou status manquant" }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }
          await updateOrderStatus(orderId, status);
          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err: any) {
          return new Response(
            JSON.stringify({ success: false, error: err?.message || String(err) }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
