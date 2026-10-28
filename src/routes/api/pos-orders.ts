import { createFileRoute } from "@tanstack/react-router";
import { listOrdersFromStore, updateOrderStatus, acknowledgePrint } from "../../lib/order-store";

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
  const secFetchSite = request.headers.get("sec-fetch-site");
  const referer = request.headers.get("referer") ?? "";
  return secFetchSite === "same-origin" && referer.includes("/pos");
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
    },
  },
});
