import { createFileRoute } from "@tanstack/react-router";
import { checkoutSchema, processCheckout } from "../../lib/checkout-service.server";

export const Route = createFileRoute("/api/checkout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body: unknown = await request.json();
          const parsed = checkoutSchema.safeParse(body);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({
                success: false,
                error: "Les informations de commande sont incomplètes ou invalides.",
                details: parsed.error.flatten(),
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Cache-Control": "no-store",
                },
              },
            );
          }

          const result = await processCheckout(parsed.data);
          if (result.type === "error") {
            return new Response(JSON.stringify({ success: false, error: result.message }), {
              status: 400,
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-store",
              },
            });
          }

          return new Response(JSON.stringify({ success: true, ...result }), {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        } catch (error) {
          console.error("[API Checkout] Échec création commande:", error);
          return new Response(
            JSON.stringify({
              success: false,
              error: error instanceof Error ? error.message : "Erreur serveur pendant la création de commande.",
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
