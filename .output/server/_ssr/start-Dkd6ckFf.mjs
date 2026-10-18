import { t as createMiddleware } from "./createMiddleware-B_4t7rW1.mjs";
import { t as renderErrorPage } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-Dkd6ckFf.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
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
