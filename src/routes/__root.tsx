import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { Suspense, useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../context/I18nContext";
import { CartProvider } from "../context/CartContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que tu recherches n’existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function isDynamicChunkError(err: unknown): boolean {
  const msg = String((err as Error)?.message ?? err ?? "").toLowerCase();
  return (
    msg.includes("failed to fetch dynamically imported module") ||
    msg.includes("importing a module script failed") ||
    msg.includes("error loading dynamically imported module") ||
    msg.includes("unable to preload css") ||
    msg.includes("chunkloaderror") ||
    msg.includes("loading chunk")
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const autoRetriedRef = useRef(false);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });

    if (typeof window === "undefined") return;

    // 1. Auto-recover once per route transition if a chunk or suspense boundary raced
    if (!autoRetriedRef.current) {
      autoRetriedRef.current = true;
      try {
        const retryKey = `pnb_auto_retry:${window.location.pathname}`;
        const lastRetry = Number(sessionStorage.getItem(retryKey) || "0");
        const now = Date.now();
        if (now - lastRetry > 10_000) {
          sessionStorage.setItem(retryKey, String(now));
          const timer = window.setTimeout(() => {
            router.invalidate();
            reset();
          }, 60);
          return () => window.clearTimeout(timer);
        }
      } catch {
        // Ignore sessionStorage errors
      }
    }

    // 2. If a deployment replaced chunk hashes, reload once to get the new manifest
    if (isDynamicChunkError(error)) {
      try {
        const reloadKey = `pnb_chunk_reload:${window.location.pathname}`;
        const lastReload = Number(sessionStorage.getItem(reloadKey) || "0");
        const now = Date.now();
        if (now - lastReload > 20_000) {
          sessionStorage.setItem(reloadKey, String(now));
          window.location.reload();
        }
      } catch {
        // Ignore sessionStorage errors
      }
    }
    return undefined;
  }, [error, reset, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Un problème est survenu. Tu peux réessayer ou revenir à l’accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Poke N Bowl Visé" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),

  wrapInSuspense: true,
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const resolvedPathname = useRouterState({
    select: (state) => state.resolvedLocation?.pathname ?? state.location.pathname,
  });

  useEffect(() => {
    // Always start each new route at the top of the viewport once resolved,
    // unless navigating directly to an in-page hash anchor (#carte, #composer).
    window.history.scrollRestoration = "manual";
    if (window.location.hash) return;

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [resolvedPathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <CartProvider>
          {/* Required: nested routes render here. Suspense prevents lazy route chunks from bubbling into CatchBoundary. */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </CartProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}
