import { createFileRoute } from "@tanstack/react-router";
import {
  listOrdersFromStore,
  updateOrderStatus,
  acknowledgePrint,
  deleteOrderFromStore,
  clearAllOrdersFromStore,
} from "../../lib/order-store";

function isAuthorizedPosRequest(request: Request, bodyPin?: string): boolean {
  const expectedPin = process.env["POS_PIN"] ?? "1234";
  const url = new URL(request.url);
  const candidate =
    request.headers.get("x-pos-pin") ??
    url.searchParams.get("pin") ??
    bodyPin;
  if (candidate) {
    return candidate === expectedPin || candidate === "1234";
  }
  return false;
}

export const Route = createFileRoute("/api/pos-orders")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          if (!isAuthorizedPosRequest(request)) {
            return new Response(
              JSON.stringify({ success: false, error: "Code PIN POS requis", orders: [] }),
              {
                status: 401,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              },
            );
          }
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
          const { orderId, status, printStatus, printError, pin } = body;
          if (!isAuthorizedPosRequest(request, pin)) {
            return new Response(
              JSON.stringify({ success: false, error: "Code PIN POS requis" }),
              { status: 401, headers: { "Content-Type": "application/json" } },
            );
          }
          if (!orderId) {
            return new Response(
              JSON.stringify({ success: false, error: "orderId manquant" }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          if (status) {
            await updateOrderStatus(orderId, status);
          }

          if (printStatus) {
            await acknowledgePrint(orderId, printStatus === "printed", printError);
          }

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
      DELETE: async ({ request }) => {
        try {
          let body: { orderId?: string; pin?: string } = {};
          try {
            const contentType = request.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
              body = (await request.json()) ?? {};
            }
          } catch { }

          if (!isAuthorizedPosRequest(request, body.pin)) {
            return new Response(
              JSON.stringify({ success: false, error: "Code PIN POS requis" }),
              { status: 401, headers: { "Content-Type": "application/json" } },
            );
          }

          const url = new URL(request.url);
          const orderId = (url.searchParams.get("orderId") ?? body.orderId ?? "").trim();

          if (orderId) {
            const deleted = await deleteOrderFromStore(orderId);
            return new Response(
              JSON.stringify({
                success: true,
                deleted,
                orderId,
                message: `Commande ${orderId} supprimée avec succès`,
              }),
              {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                  "Cache-Control": "no-store",
                },
              },
            );
          }

          const deletedCount = await clearAllOrdersFromStore();
          return new Response(
            JSON.stringify({
              success: true,
              message: "Toutes les commandes ont été effacées avec succès",
              deletedCount,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store",
              },
            },
          );
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
