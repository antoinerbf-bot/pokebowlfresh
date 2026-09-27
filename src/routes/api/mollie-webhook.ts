import { createFileRoute } from "@tanstack/react-router";
import { getMolliePayment } from "../../lib/mollie.server";
import {
  getOrderFromStore,
  upsertOrder,
} from "../../server/checkout";

export const Route = createFileRoute("/api/mollie-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const contentType = request.headers.get("content-type") ?? "";
          let paymentId: string | null = null;

          if (contentType.includes("application/json")) {
            const body = (await request.json()) as { id?: string };
            paymentId = body.id ?? null;
          } else {
            // Mollie often sends application/x-www-form-urlencoded with id=
            const text = await request.text();
            const params = new URLSearchParams(text);
            paymentId = params.get("id");
          }

          if (!paymentId) {
            return new Response("Missing payment id", { status: 400 });
          }

          const payment = await getMolliePayment(paymentId);
          const orderId = payment.metadata?.orderId;

          if (!orderId) {
            return new Response("OK", { status: 200 });
          }

          const order = getOrderFromStore(orderId);
          if (!order) {
            // Order may have been lost after cold start — still acknowledge
            return new Response("OK", { status: 200 });
          }

          if (payment.status === "paid") {
            upsertOrder({ ...order, status: "paid", molliePaymentId: paymentId });
          } else if (
            payment.status === "canceled" ||
            payment.status === "expired" ||
            payment.status === "failed"
          ) {
            upsertOrder({
              ...order,
              status: payment.status === "expired" ? "expired" : "cancelled",
              molliePaymentId: paymentId,
            });
          }

          return new Response("OK", { status: 200 });
        } catch (err) {
          console.error("[mollie-webhook]", err);
          // Always 200 to avoid Mollie retries storm on transient errors
          return new Response("OK", { status: 200 });
        }
      },
    },
  },
});
