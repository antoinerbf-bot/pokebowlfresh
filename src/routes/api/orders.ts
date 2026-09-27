import { createFileRoute } from "@tanstack/react-router";
import { listOrdersFromStore } from "../../server/checkout";

/**
 * GET /api/orders
 * Liste les commandes en mémoire (MVP).
 * Quand le logiciel d'impression sera prêt, on branchera une vraie base
 * et éventuellement une clé API (header Authorization).
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
