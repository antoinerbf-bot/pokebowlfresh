import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { acknowledgePrint } from "../../../lib/order-store";

const ackSchema = z.object({
  orderId: z.string().min(1),
  success: z.boolean(),
  error: z.string().max(500).optional(),
});

function authorized(request: Request): boolean {
  const expected = process.env.PRINTER_AGENT_SECRET;
  return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}

export const Route = createFileRoute("/api/printer/ack")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!authorized(request)) {
          return new Response("Unauthorized", { status: 401 });
        }

        try {
          const data = ackSchema.parse(await request.json());
          await acknowledgePrint(data.orderId, data.success, data.error);
          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "content-type": "application/json" },
          });
        } catch (error) {
          console.error("[printer-ack]", error);
          return new Response("Invalid printer acknowledgement", { status: 400 });
        }
      },
    },
  },
});
