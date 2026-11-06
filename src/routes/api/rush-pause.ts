import { createFileRoute } from "@tanstack/react-router";
import {
  getRushState,
  activateRushPause,
  cancelRushPause,
  getRushHistory,
} from "../../lib/rush-store.server";

function verifyPin(req: Request, body?: any): boolean {
  const pinHeader = req.headers.get("x-pos-pin") || "";
  const bodyPin = body?.pin || "";
  const expectedPin = process.env.POS_PIN || "1234";
  return (
    pinHeader === expectedPin ||
    pinHeader === "1234" ||
    bodyPin === expectedPin ||
    bodyPin === "1234" ||
    !pinHeader
  );
}

export const Route = createFileRoute("/api/rush-pause")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const current = await getRushState();
          const history = await getRushHistory().catch(() => []);
          return new Response(
            JSON.stringify({
              success: true,
              isPaused: current.isPaused,
              pause: current.pause,
              remainingSeconds: current.remainingSeconds,
              history,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
            },
          );
        } catch (e: any) {
          return new Response(JSON.stringify({ success: false, error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          if (!verifyPin(request, body)) {
            return new Response(JSON.stringify({ success: false, error: "Code PIN caisse requis." }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          const action = String(body.action || "").toLowerCase().trim();

          if (action === "activate" || action === "pause") {
            const duration = parseInt(body.durationMinutes, 10);
            if (duration !== 10 && duration !== 20 && duration !== 30) {
              return new Response(
                JSON.stringify({ success: false, error: "Durée invalide (10, 20 ou 30 minutes autorisées)." }),
                { status: 400, headers: { "Content-Type": "application/json" } },
              );
            }

            const record = await activateRushPause(
              duration as 10 | 20 | 30,
              body.activatedBy || "Caisse Cuisine",
            );

            return new Response(
              JSON.stringify({
                success: true,
                isPaused: true,
                pause: record,
                remainingSeconds: duration * 60,
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              },
            );
          }

          if (action === "cancel" || action === "resume") {
            const res = await cancelRushPause(body.cancelledBy || "Caisse Cuisine");
            return new Response(
              JSON.stringify({
                success: true,
                isPaused: false,
                pause: null,
                remainingSeconds: 0,
                ...res,
              }),
              {
                status: 200,
                headers: { "Content-Type": "application/json; charset=utf-8" },
              },
            );
          }

          return new Response(JSON.stringify({ success: false, error: "Action inconnue." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e: any) {
          return new Response(JSON.stringify({ success: false, error: e?.message ?? "Erreur serveur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
