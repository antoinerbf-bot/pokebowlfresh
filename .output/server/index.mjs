globalThis.__nitro_main__ = import.meta.url;
import { v as NodeResponse, y as serve } from "./_libs/@tanstack/react-start+[...].mjs";
import { c as HTTPError, i as toEventHandler, n as defineHandler, o as callMiddleware, r as defineLazyEventHandler, s as toMiddleware, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region src/lib/error-capture.ts
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
//#endregion
//#region src/lib/error-page.ts
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
//#endregion
//#region src/server.ts
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./_libs/@tanstack/react-start+[...].mjs").then((n) => n.t).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"afb-tCnsqfoByDjPJra2TTOEkUz56mw\"",
		"mtime": "2026-09-30T08:22:00.367Z",
		"size": 2811,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-30T08:22:00.367Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/_productId-D058-ksA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1697-cAu7MHSW00xz6cS+dYMnV6EGbqE\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 5783,
		"path": "../public/assets/_productId-D058-ksA.js"
	},
	"/assets/arrow-left-yEuU5fmX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-qCPBanJqTCCRbsCMg7z31uZXLNU\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 165,
		"path": "../public/assets/arrow-left-yEuU5fmX.js"
	},
	"/assets/CartDrawer-PzlakF1G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15585-iLVkBdFwnxypUvLYSBfSjjN0wGI\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 87429,
		"path": "../public/assets/CartDrawer-PzlakF1G.js"
	},
	"/assets/bowl-chicken-DVKFm73l.jpg": {
		"type": "image/jpeg",
		"etag": "\"1559b-2rAKYplhX+yfnnkMKKxA2R/LEbM\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 87451,
		"path": "../public/assets/bowl-chicken-DVKFm73l.jpg"
	},
	"/assets/bowl-crousty-DhSdFdMk.jpg": {
		"type": "image/jpeg",
		"etag": "\"119fe-MRAnEGKrHHjKm1sDgNEjQOix390\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 72190,
		"path": "../public/assets/bowl-crousty-DhSdFdMk.jpg"
	},
	"/assets/briefcase-business-cl_nnMkC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-UFWHFClsTZ+ZGMpLgstdOw45IqU\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-cl_nnMkC.js"
	},
	"/assets/bowl-scampi-CKbANxtN.jpg": {
		"type": "image/jpeg",
		"etag": "\"15e54-c4W+1gPFuI9pmyyvj62zbaEcHq8\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 89684,
		"path": "../public/assets/bowl-scampi-CKbANxtN.jpg"
	},
	"/assets/checkout-BwteDum0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bf-heafz28MBDvVgPMkPUJ9ZrlbYMc\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 959,
		"path": "../public/assets/checkout-BwteDum0.js"
	},
	"/assets/checkout-DxnJzc7Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3407-AqNlRDVCS8bq+9xwnWae7UPA/fQ\"",
		"mtime": "2026-09-30T08:21:59.697Z",
		"size": 13319,
		"path": "../public/assets/checkout-DxnJzc7Y.js"
	},
	"/assets/commander-nSwyAQIu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"251f-bsxPjR8b0rM2StEuUFb0SLee6Yc\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 9503,
		"path": "../public/assets/commander-nSwyAQIu.js"
	},
	"/assets/contact-BTqNyuKS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e86-tjjhe6yIfFJduIEqpIDBh8u2HIg\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 3718,
		"path": "../public/assets/contact-BTqNyuKS.js"
	},
	"/assets/createLucideIcon-COA0CdbU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ab-JbElSmUzt4aKtqUn1FdEZDhaxps\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 1195,
		"path": "../public/assets/createLucideIcon-COA0CdbU.js"
	},
	"/assets/createClientRpc-2_3ILrZT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c09-b30s6TM2BEP8efuJw955VZ6i3KE\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 35849,
		"path": "../public/assets/createClientRpc-2_3ILrZT.js"
	},
	"/assets/data-DGhscJDh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76d-dGbfA9tGeIdmOWpQ8cbeyXf4dXc\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 1901,
		"path": "../public/assets/data-DGhscJDh.js"
	},
	"/assets/createServerFn-DLLtPDRW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1128-z2doi3tsho9fxxfabLW0raXVtIU\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 4392,
		"path": "../public/assets/createServerFn-DLLtPDRW.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/dessert-BHgCVeJF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e1c0-ppZ8pO5b6J1WxQX19lk74XOk/zg\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 123328,
		"path": "../public/assets/dessert-BHgCVeJF.js"
	},
	"/assets/jsx-runtime-D0jjRW8V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"227e-64Xr7Rrp+2Yg5IEFWmk5+FyRrGY\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 8830,
		"path": "../public/assets/jsx-runtime-D0jjRW8V.js"
	},
	"/assets/link-D67qQejj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69bd-enPqJhIrEpE4aIC1tEOEYlT1C4g\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 27069,
		"path": "../public/assets/link-D67qQejj.js"
	},
	"/assets/hero-poke-Dk38LgOY.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e327-xzy11VwJy+GF9TJQNnFEoprFkk8\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 320295,
		"path": "../public/assets/hero-poke-Dk38LgOY.jpg"
	},
	"/assets/index-D2SWUS8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e066-/6nhrVPQGMevE+u92GThoZluXCk\"",
		"mtime": "2026-09-30T08:21:59.696Z",
		"size": 319590,
		"path": "../public/assets/index-D2SWUS8a.js"
	},
	"/hero-video.webm": {
		"type": "video/webm",
		"etag": "\"15fe25-vp0mgH56yNMsXi8UUACSafJe3Yo\"",
		"mtime": "2026-09-30T08:22:00.367Z",
		"size": 1441317,
		"path": "../public/hero-video.webm"
	},
	"/assets/loader-circle-B18aKRCt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-dwaTzd1ncn+RGW5kvlhy/IiKUOs\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 144,
		"path": "../public/assets/loader-circle-B18aKRCt.js"
	},
	"/assets/logo-eLcls0dV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31-QeBJ+edbqLgttr0qUDsJiYJb6EQ\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 49,
		"path": "../public/assets/logo-eLcls0dV.js"
	},
	"/assets/logo-yR8iNRjN.png": {
		"type": "image/png",
		"etag": "\"c5f7-peATkSf9iLef/RI3EQbudnGllc8\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 50679,
		"path": "../public/assets/logo-yR8iNRjN.png"
	},
	"/assets/order.success-CTN-4-rI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d5-mgoe5cRIGL+R+yHcEoty3rHBhH0\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 6101,
		"path": "../public/assets/order.success-CTN-4-rI.js"
	},
	"/assets/map-pin-CoTcGAvL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-j7ueoLEJWvr3EjgyklLPeKwD9fM\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 259,
		"path": "../public/assets/map-pin-CoTcGAvL.js"
	},
	"/assets/phone-call-BZr4v2ld.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-DZfZyl+wqpQO1NT1cd+ZwRDjnUo\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 423,
		"path": "../public/assets/phone-call-BZr4v2ld.js"
	},
	"/assets/recrutement-DpTraa7O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fac-7hQ5p2uvzCOUwoi+YefuoR3dYNU\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 4012,
		"path": "../public/assets/recrutement-DpTraa7O.js"
	},
	"/assets/routes-DGaSLKOv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c9a-+EbTYjXTzkU5jZJgdy7AdUkEZbI\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 19610,
		"path": "../public/assets/routes-DGaSLKOv.js"
	},
	"/assets/shopping-bag-B79euKEH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-aN3dLjk5jgxTJxWx29tkBC1bwIY\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-B79euKEH.js"
	},
	"/assets/stock-DAhyfPgz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c8-FGFUHGmtf7/WMtOoYg1sLS3abv4\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 968,
		"path": "../public/assets/stock-DAhyfPgz.js"
	},
	"/assets/stocks-SUqU96BW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a20-qk+dRdWHOtCzaihtGUY1XPlKDu8\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 6688,
		"path": "../public/assets/stocks-SUqU96BW.js"
	},
	"/assets/styles-oTBj5r19.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19aad-en8L9Z5HSSfOPU43Qn45vsrHB0k\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 105133,
		"path": "../public/assets/styles-oTBj5r19.css"
	},
	"/assets/useStock-BUe1KqQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-eotdHnkSGAWQNpKf0P7j+KlzDBw\"",
		"mtime": "2026-09-30T08:21:59.698Z",
		"size": 483,
		"path": "../public/assets/useStock-BUe1KqQw.js"
	},
	"/hero-video.mp4": {
		"type": "video/mp4",
		"etag": "\"9886e0-qE9ssThH8K8D+LWwp6I6gcUI0jQ\"",
		"mtime": "2026-09-30T08:22:00.369Z",
		"size": 9996e3,
		"path": "../public/hero-video.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var multiHandler = (...handlers) => {
	const final = handlers.pop();
	const middleware = handlers.filter(Boolean).map((h) => toMiddleware(h));
	return (ev) => callMiddleware(ev, middleware, final);
};
var _lazy_XAhvdF = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/**",
		handler: multiHandler(toEventHandler(server_default), _lazy_XAhvdF)
	};
	return (m, p) => {
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		s.length;
		return {
			data: $0,
			params: { "_": s.slice(1).join("/") }
		};
	};
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default, renderErrorPage as t };
