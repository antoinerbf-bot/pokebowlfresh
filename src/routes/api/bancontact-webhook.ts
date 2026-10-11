import { createFileRoute } from "@tanstack/react-router";
import { getBancontactProPayment } from "../../lib/bancontact-pro.server";
import {
  getOrderFromStore,
  upsertOrder,
} from "../../lib/order-store";

export const Route = createFileRoute("/api/bancontact-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const contentType = request.headers.get("content-type") ?? "";
          let paymentId: string | null = null;

          if (contentType.includes("application/json")) {
            const body = (await request.json()) as { paymentId?: string; id?: string };
            paymentId = body.paymentId || body.id || null;
          } else {
            const text = await request.text();
            const params = new URLSearchParams(text);
            paymentId = params.get("paymentId") || params.get("id");
          }

          if (!paymentId) {
            return new Response("Missing payment id", { status: 400 });
          }

          const payment = await getBancontactProPayment(paymentId);
          const orderId = payment.reference;
          if (!orderId) {
            return new Response("OK", { status: 200 });
          }

          const order = await getOrderFromStore(orderId);
          if (!order) {
            return new Response("OK", { status: 200 });
          }

          if (payment.status === "SUCCEEDED") {
            await upsertOrder({ ...order, status: "paid", molliePaymentId: paymentId });
          } else if (
            payment.status === "CANCELLED" ||
            payment.status === "EXPIRED" ||
            payment.status === "FAILED"
          ) {
            await upsertOrder({
              ...order,
              status: payment.status === "EXPIRED" ? "expired" : "cancelled",
              molliePaymentId: paymentId,
            });
          }

          return new Response("OK", { status: 200 });
        } catch (e) {
          console.error("[bancontact-webhook]", e);
          return new Response("Error", { status: 500 });
        }
      },
    },
  },
});
