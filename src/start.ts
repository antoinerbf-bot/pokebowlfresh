import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    return await next();
  } catch (error: any) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error("[ServerError]", error);

    const accept = request?.headers?.get("accept") ?? "";
    const url = request?.url ?? "";
    const isJson =
      accept.includes("application/json") ||
      url.includes("/_serverFn/") ||
      url.includes("/api/");

    if (isJson) {
      return new Response(
        JSON.stringify({ error: error?.message ?? String(error) }),
        {
          status: 500,
          headers: { "content-type": "application/json; charset=utf-8" },
        },
      );
    }

    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
