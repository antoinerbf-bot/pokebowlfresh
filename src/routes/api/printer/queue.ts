import { createFileRoute } from "@tanstack/react-router";
import { claimNextPrintJob } from "../../../lib/order-store";

function authorized(request: Request): boolean {
  const expected = process.env.PRINTER_AGENT_SECRET;
  return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}

export const Route = createFileRoute("/api/printer/queue")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        if (!authorized(request)) {
          return new Response("Unauthorized", { status: 401 });
        }

        try {
          const order = await claimNextPrintJob();
          return new Response(JSON.stringify({ job: order ?? null }), {
            status: 200,
            headers: {
              "content-type": "application/json",
              "cache-control": "no-store",
            },
          });
        } catch (error) {
          console.error("[printer-queue]", error);
          return new Response("Printer queue unavailable", { status: 500 });
        }
      },
    },
  },
});
