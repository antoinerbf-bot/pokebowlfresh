import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault();
    try {
      const key = `pnb_preload_recover:${window.location.pathname}`;
      const last = Number(sessionStorage.getItem(key) || "0");
      const now = Date.now();
      if (now - last > 15_000) {
        sessionStorage.setItem(key, String(now));
        window.location.reload();
      }
    } catch {
      // Ignore storage errors in private browsing
    }
  });
}

function DefaultPendingComponent() {
  return null;
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 30_000,
    defaultPendingMs: 200,
    defaultPendingMinMs: 100,
    defaultPendingComponent: DefaultPendingComponent,
  });

  return router;
};
