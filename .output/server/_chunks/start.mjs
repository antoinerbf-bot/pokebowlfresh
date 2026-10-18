import { n as createMiddleware } from "../_libs/@tanstack/react-start+[...].mjs";
import { t as renderErrorPage } from "../index.mjs";
import { t as createStart } from "../_libs/tanstack__start-client-core.mjs";
//#region src/start.ts
var errorMiddleware = createMiddleware().server(async ({ next, request }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error("[ServerError]", error);
		const accept = request?.headers?.get("accept") ?? "";
		const url = request?.url ?? "";
		if (accept.includes("application/json") || url.includes("/_serverFn/") || url.includes("/api/")) return new Response(JSON.stringify({ error: error?.message ?? String(error) }), {
			status: 500,
			headers: { "content-type": "application/json; charset=utf-8" }
		});
		return new Response(renderErrorPage(error), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware] }));
//#endregion
export { startInstance };
