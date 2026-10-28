import { createFileRoute } from "@tanstack/react-router";
import { getOrderFromStore, upsertOrder } from "../../lib/order-store";
import { isBancontactProConfigured, getBancontactProPayment } from "../../lib/bancontact-pro.server";
import { isMollieConfigured, getMolliePayment } from "../../lib/mollie.server";

export const Route = createFileRoute("/api/order-status")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const rawId = url.searchParams.get("orderId") || url.searchParams.get("id") || "";
          const orderId = rawId.trim();

          if (!orderId) {
            return new Response(
              JSON.stringify({ found: false, error: "Identifiant de commande manquant." }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Cache-Control": "no-store",
                },
              },
            );
          }

          let order = await getOrderFromStore(orderId);

          // Si commande en attente de paiement bancaire, vérifier auprès du prestataire
          if (order?.molliePaymentId && order.status === "pending_payment") {
            if (order.molliePaymentId.startsWith("bancontact:")) {
              const paymentId = order.molliePaymentId.slice("bancontact:".length);
              try {
                const payment = await getBancontactProPayment(paymentId);
                if (payment.status === "SUCCEEDED") {
                  order = { ...order, status: "paid" };
                  await upsertOrder(order);
                } else if (
                  payment.status === "CANCELLED" ||
                  payment.status === "EXPIRED" ||
                  payment.status === "FAILED" ||
                  payment.status === "VOIDED"
                ) {
                  order = {
                    ...order,
                    status: payment.status === "EXPIRED" ? "expired" : "cancelled",
                  };
                  await upsertOrder(order);
                }
              } catch {
                // Conserver le statut local si prestataire temporairement indisponible
              }
            } else {
              try {
                const payment = await getMolliePayment(order.molliePaymentId);
                if (payment.status === "paid") {
                  order = { ...order, status: "paid" };
                  await upsertOrder(order);
                } else if (
                  payment.status === "canceled" ||
                  payment.status === "expired" ||
                  payment.status === "failed"
                ) {
                  order = {
                    ...order,
                    status: payment.status === "expired" ? "expired" : "cancelled",
                  };
                  await upsertOrder(order);
                }
              } catch {
                // Conserver le statut local si prestataire temporairement indisponible
              }
            }
          }

          if (!order) {
            return new Response(JSON.stringify({ found: false }), {
              status: 200,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            });
          }

          return new Response(
            JSON.stringify({
              found: true,
              order: {
                id: order.id,
                status: order.status,
                paymentMethod: order.paymentMethod,
                total: order.total,
                customer: order.customer,
                items: order.items,
                createdAt: order.createdAt,
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
        } catch (error) {
          console.error("[API order-status] Erreur:", error);
          return new Response(
            JSON.stringify({
              found: false,
              error: error instanceof Error ? error.message : "Erreur interne",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            },
          );
        }
      },
    },
  },
});
