import { createFileRoute } from "@tanstack/react-router";
import { getMolliePayment } from "../../lib/mollie.server";
import {
  getOrderFromStore,
  upsertOrder,
} from "../../lib/order-store";

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

          const order = await getOrderFromStore(orderId);
          if (!order) {
            return new Response("OK", { status: 200 });
          }

          if (payment.status === "paid") {
            await upsertOrder({ ...order, status: "paid", molliePaymentId: paymentId });
          } else if (
            payment.status === "canceled" ||
            payment.status === "expired" ||
            payment.status === "failed"
          ) {
            await upsertOrder({
              ...order,
              status: payment.status === "expired" ? "expired" : "cancelled",
              molliePaymentId: paymentId,
            });
          }

          return new Response("OK", { status: 200 });
        } catch (e) {
          console.error("[mollie-webhook]", e);
          return new Response("Error", { status: 500 });
        }
      },
    },
  },
});
