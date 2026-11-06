import { createFileRoute } from "@tanstack/react-router";
import { loadStock, updateStockItem } from "../../lib/stock-store";

export const Route = createFileRoute("/api/stock")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const stock = await loadStock();
          const items = Object.values(stock.items || {});
          return new Response(
            JSON.stringify({
              success: true,
              stock,
              items,
              totalCount: items.length,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store, no-cache, must-revalidate",
              },
            },
          );
        } catch (e: any) {
          return new Response(JSON.stringify({ success: false, error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          const { id, available, qty, status, user } = body;
          if (!id) {
            return new Response(JSON.stringify({ success: false, error: "Identifiant d'article requis." }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const targetAvailable =
            status === "out_of_stock"
              ? false
              : status === "available"
              ? true
              : available !== undefined
              ? Boolean(available)
              : undefined;

          const updated = await updateStockItem(
            id,
            {
              available: targetAvailable,
              qty: qty !== undefined ? (qty === null ? null : parseInt(qty, 10)) : undefined,
              status,
            },
            user || "Caisse POS",
          );

          const stock = await loadStock();
          const items = Object.values(stock.items || {});
          return new Response(
            JSON.stringify({
              success: true,
              updated,
              stock,
              items,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            },
          );
        } catch (e: any) {
          return new Response(JSON.stringify({ success: false, error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
