import { createFileRoute } from "@tanstack/react-router";
import { listOrdersFromStore } from "../../lib/order-store";

/**
 * GET /api/orders
 * Liste les commandes persistées.
 */
export const Route = createFileRoute("/api/orders")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const expected = process.env.ADMIN_SECRET;
        if (!expected || request.headers.get("x-admin-secret") !== expected) {
          return new Response("Unauthorized", { status: 401 });
        }
        const orders = await listOrdersFromStore();
        return new Response(JSON.stringify({ orders }), {
          status: 200,
          headers: {
            "content-type": "application/json",
            "cache-control": "no-store",
          },
        });
      },
    },
  },
});
