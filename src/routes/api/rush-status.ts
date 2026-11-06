import { createFileRoute } from "@tanstack/react-router";
import { getRushState } from "../../lib/rush-store.server";

export const Route = createFileRoute("/api/rush-status")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const state = await getRushState();
          return new Response(JSON.stringify(state), {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Cache-Control": "no-store, no-cache, must-revalidate",
            },
          });
        } catch (error) {
          console.error("[API rush-status] Erreur:", error);
          return new Response(
            JSON.stringify({ isPaused: false, pause: null, remainingSeconds: 0 }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            },
          );
        }
      },
    },
  },
});

