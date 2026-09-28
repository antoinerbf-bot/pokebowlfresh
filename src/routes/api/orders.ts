import { createFileRoute } from "@tanstack/react-router";
import { listOrdersFromStore } from "../../lib/order-store";

/**
 * GET /api/orders
 * Liste les commandes en mémoire (MVP).
 */
export const Route = createFileRoute("/api/orders")({
  server: {
    handlers: {
      GET: async () => {
        const orders = listOrdersFromStore();
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
