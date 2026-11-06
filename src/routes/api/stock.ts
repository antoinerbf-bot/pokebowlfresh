import { createFileRoute } from "@tanstack/react-router";
import { loadStock, updateStockItem, assertAdminPin } from "../../lib/stock-store";

export const Route = createFileRoute("/api/stock")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const stock = await loadStock();
          return new Response(JSON.stringify({ success: true, stock }), {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store, no-cache, must-revalidate",
            },
          });
        } catch (e: any) {
          return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          const pin = request.headers.get("x-pos-pin") || body.pin || "";
          assertAdminPin(pin);

          const { id, available, qty, status, user } = body;
          if (!id) {
            return new Response(JSON.stringify({ error: "Identifiant d'article requis." }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const updated = await updateStockItem(
            id,
            {
              available: available !== undefined ? Boolean(available) : undefined,
              qty: qty !== undefined ? (qty === null ? null : parseInt(qty, 10)) : undefined,
              status,
            },
            user || "Caisse POS",
          );

          const stock = await loadStock();
          return new Response(JSON.stringify({ success: true, updated, stock }), {
            status: 200,
            headers: { "Content-Type": "application/json; charset=utf-8" },
          });
        } catch (e: any) {
          return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
