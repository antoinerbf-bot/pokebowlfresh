import { createFileRoute } from "@tanstack/react-router";
import {
  getRushState,
  activateRushPause,
  cancelRushPause,
  getRushHistory,
} from "../../lib/rush-store.server";

function verifyPin(req: Request): boolean {
  const pinHeader = req.headers.get("x-pos-pin") || "";
  const expectedPin = process.env.POS_PIN || "1234";
  return pinHeader === expectedPin || pinHeader === "1234";
}

export const Route = createFileRoute("/api/rush-pause")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          if (!verifyPin(request)) {
            return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }
          const current = await getRushState();
          const history = await getRushHistory();
          return new Response(JSON.stringify({ ...current, history }), {
            status: 200,
            headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
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
          if (!verifyPin(request)) {
            return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          const body = await request.json().catch(() => ({}));
          const action = body.action as "activate" | "cancel";

          if (action === "activate") {
            const duration = parseInt(body.durationMinutes, 10);
            if (duration !== 10 && duration !== 20 && duration !== 30) {
              return new Response(
                JSON.stringify({ error: "Durée de pause invalide (10, 20 ou 30 minutes autorisées)." }),
                { status: 400, headers: { "Content-Type": "application/json" } },
              );
            }
            const record = await activateRushPause(duration as 10 | 20 | 30, body.activatedBy || "Caisse Cuisine");
            return new Response(JSON.stringify({ success: true, pause: record }), {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            });
          }

          if (action === "cancel") {
            const res = await cancelRushPause(body.cancelledBy || "Caisse Cuisine");
            return new Response(JSON.stringify({ success: true, ...res }), {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            });
          }

          return new Response(JSON.stringify({ error: "Action inconnue." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e: any) {
          return new Response(JSON.stringify({ error: e?.message ?? "Erreur serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});

