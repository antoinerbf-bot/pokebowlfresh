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
		"etag": "\"326-ybB5iNJOL2fyURXRtKUxkQa+d1o\"",
		"mtime": "2026-10-09T15:20:30.337Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-09T15:20:30.345Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-09T15:20:30.337Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-09T15:20:30.337Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/BrandLogo-CABpttBX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-jnHWmNwAyjIseSBRmIl64RjzTE8\"",
		"mtime": "2026-10-09T15:20:29.197Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-CABpttBX.js"
	},
	"/assets/_productId-DzjG9CtA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d37-iFbQ4h1O6juG9ouU+Nnvx7ymihM\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 19767,
		"path": "../public/assets/_productId-DzjG9CtA.js"
	},
	"/assets/CartDrawer-DY8JSF7Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"156ea-WC39cttGqGoxgqFlKmPRm2264gw\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 87786,
		"path": "../public/assets/CartDrawer-DY8JSF7Z.js"
	},
	"/assets/_token-BfAQ9S22.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f25-uH04bIdbg5ug8wCydFOSYSyyPP8\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 7973,
		"path": "../public/assets/_token-BfAQ9S22.js"
	},
	"/assets/arrow-left-BCa9TLr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nWxtFac0ChgC352ptR1cv95N43M\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BCa9TLr_.js"
	},
	"/assets/bowl-crousty-curry-CRZGKMUK.jpg": {
		"type": "image/jpeg",
		"etag": "\"408ef-GVw1m8DoVCRKTfsKjSAQs7P0WLs\"",
		"mtime": "2026-10-09T15:20:29.213Z",
		"size": 264431,
		"path": "../public/assets/bowl-crousty-curry-CRZGKMUK.jpg"
	},
	"/assets/bowl-saumon-CRYVYQxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-09T15:20:29.213Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon-CRYVYQxR.jpg"
	},
	"/assets/bowl-crousty-blanche-BliNigHA.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bec3-7aICU1/iy1hRywYMDfZeRxk29CQ\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 245443,
		"path": "../public/assets/bowl-crousty-blanche-BliNigHA.jpg"
	},
	"/assets/briefcase-business-DJeAkziv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Icqw7COrVhO91vSmQRwPu6aynHU\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-DJeAkziv.js"
	},
	"/assets/check-PxzYpF26.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-IVHi0fxXA1mGTWe6eBid4wsv4HI\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 124,
		"path": "../public/assets/check-PxzYpF26.js"
	},
	"/assets/checkout-BiChzkUN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"345c-2QEYxQ6ZYktWoNTxC/fTccbd+6Q\"",
		"mtime": "2026-10-09T15:20:29.199Z",
		"size": 13404,
		"path": "../public/assets/checkout-BiChzkUN.js"
	},
	"/assets/checkout-CMIV77ms.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"399-GKHrm6rQpiwAmhEeCO+zk9NVMtg\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 921,
		"path": "../public/assets/checkout-CMIV77ms.js"
	},
	"/assets/circle-check-xE2Wlw9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-l6OrdSi43cVZdFQoU9pYyzz0x50\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 178,
		"path": "../public/assets/circle-check-xE2Wlw9j.js"
	},
	"/assets/clock-BrBAgSRU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-rTxuSmbLy+eupu13bqHm/UN2F2k\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 169,
		"path": "../public/assets/clock-BrBAgSRU.js"
	},
	"/assets/commander-CeXBFcYR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"445b-xrBrot5RGnFHDY7KwjSAiGNQhVw\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 17499,
		"path": "../public/assets/commander-CeXBFcYR.js"
	},
	"/assets/contact-D5yQ9CbS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13bd-3wn9mdL0H7592hqoQ7Jlbse34Tg\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 5053,
		"path": "../public/assets/contact-D5yQ9CbS.js"
	},
	"/assets/createServerFn-C1JWGbHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9cfe-C6kZ3+bK2FsxzAR/igl4+AEvoE8\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 40190,
		"path": "../public/assets/createServerFn-C1JWGbHh.js"
	},
	"/assets/createLucideIcon-zy-1MMUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e8-LsCvj+F3zoqFkM8XxEZQcRiVaMU\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 9960,
		"path": "../public/assets/createLucideIcon-zy-1MMUP.js"
	},
	"/assets/bowl-spicy-chicken-Bko5BGRq.jpg": {
		"type": "image/jpeg",
		"etag": "\"325f7-I7MrQM23GvyXdYg6yA/826IdOoc\"",
		"mtime": "2026-10-09T15:20:29.228Z",
		"size": 206327,
		"path": "../public/assets/bowl-spicy-chicken-Bko5BGRq.jpg"
	},
	"/assets/bowl-scampis-DlEe1YXf.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-09T15:20:29.227Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis-DlEe1YXf.jpg"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-09T15:20:29.230Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/data-lJNOC6Y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2000-wbee5lwp5jsoG2wvtDZpJ5liWV4\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 8192,
		"path": "../public/assets/data-lJNOC6Y9.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-10-09T15:20:29.256Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-eau-gazeuse-DdbV8FcS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259-iSYBWnXkZjIC7sxTsGFRTmDRSTE\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 601,
		"path": "../public/assets/drink-eau-gazeuse-DdbV8FcS.js"
	},
	"/assets/drink-eau-gazeuse-CayWkPyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"74df4-JOZFiB8pP/Kl6hjKmHuihgnGEng\"",
		"mtime": "2026-10-09T15:20:29.278Z",
		"size": 478708,
		"path": "../public/assets/drink-eau-gazeuse-CayWkPyq.jpg"
	},
	"/assets/link-D0rUQ_ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69c7-qOTBB+S12DVHaPFAwntEuA5TjaM\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 27079,
		"path": "../public/assets/link-D0rUQ_ra.js"
	},
	"/assets/drink-eau-plate-B76aUhfx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6c9-5xcdzBQyvuwL5Ek2SBrbxBt5HzY\"",
		"mtime": "2026-10-09T15:20:29.292Z",
		"size": 448201,
		"path": "../public/assets/drink-eau-plate-B76aUhfx.jpg"
	},
	"/assets/loader-circle-m3U77eaX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-3AqCGdRCnx7R8qYcwhyiEMhIx1I\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 144,
		"path": "../public/assets/loader-circle-m3U77eaX.js"
	},
	"/assets/map-pin-CM6X10Il.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-L824M/PHpehm0n547HCa7FsPbSM\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 259,
		"path": "../public/assets/map-pin-CM6X10Il.js"
	},
	"/assets/order.success-CQHkuZwH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"167d-GGuGny6j3kctIGcB5nByQLTvNn8\"",
		"mtime": "2026-10-09T15:20:29.200Z",
		"size": 5757,
		"path": "../public/assets/order.success-CQHkuZwH.js"
	},
	"/assets/phone-call-ZXsSJdfj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-YM27ZWpj/0zkz4+5eMrDVUv7dJI\"",
		"mtime": "2026-10-09T15:20:29.201Z",
		"size": 423,
		"path": "../public/assets/phone-call-ZXsSJdfj.js"
	},
	"/assets/recrutement-DuhWk8Uo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec4-G3zlh2Qv2BT55GwyDqo+G6qJIX8\"",
		"mtime": "2026-10-09T15:20:29.201Z",
		"size": 3780,
		"path": "../public/assets/recrutement-DuhWk8Uo.js"
	},
	"/assets/shield-check-qvFTR-Jy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-2ZqGAd62d2xkTCEF7hDEuBAg+do\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 320,
		"path": "../public/assets/shield-check-qvFTR-Jy.js"
	},
	"/assets/shopping-bag-Zw7p0j3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-ErUHeGKd58kSqcnv9PPlrFDjltU\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-Zw7p0j3b.js"
	},
	"/assets/stock-CaiRIRLh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c6-aE0z8l8w2AVq54aoYgrNNRE6+fw\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 966,
		"path": "../public/assets/stock-CaiRIRLh.js"
	},
	"/assets/index-CWPRGIBI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"550d5-0WXr8DmBfAKMIb4xhsei9k1ud0E\"",
		"mtime": "2026-10-09T15:20:29.197Z",
		"size": 348373,
		"path": "../public/assets/index-CWPRGIBI.js"
	},
	"/assets/routes-DgalotEj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35144-Vcu7uH7N8F6XkJ7kbBvkyGIV4lI\"",
		"mtime": "2026-10-09T15:20:29.201Z",
		"size": 217412,
		"path": "../public/assets/routes-DgalotEj.js"
	},
	"/assets/stocks-BdKGslqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"184d-rgkqgeKeFJE1Vw4pRQ5uLEplAcE\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 6221,
		"path": "../public/assets/stocks-BdKGslqn.js"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-09T15:20:29.264Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/sur-mesure-e_1olj4x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52ee-/6nqQH7xGv8baLJzoexwQ7qtGTc\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 21230,
		"path": "../public/assets/sur-mesure-e_1olj4x.js"
	},
	"/assets/drink-coca-cola-D83foBG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf65a-h2782mDQADKj1mVNTnKPFmSQaZM\"",
		"mtime": "2026-10-09T15:20:29.257Z",
		"size": 783962,
		"path": "../public/assets/drink-coca-cola-D83foBG1.jpg"
	},
	"/assets/styles-BHisMPwI.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2549b-nD4qh7CInj4E0G6hgePNZOnFpm8\"",
		"mtime": "2026-10-09T15:20:29.315Z",
		"size": 152731,
		"path": "../public/assets/styles-BHisMPwI.css"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-09T15:20:29.300Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/drink-ice-tea-CZgyxPov.jpg": {
		"type": "image/jpeg",
		"etag": "\"bc7b7-h+mR5Yv9rqDtFReS1JJ00P3daEg\"",
		"mtime": "2026-10-09T15:20:29.307Z",
		"size": 772023,
		"path": "../public/assets/drink-ice-tea-CZgyxPov.jpg"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-10-09T15:20:29.315Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
	},
	"/assets/useStock-CYuKnEsX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-6Upexz5TXGKApBV0BGkkF4w9ukM\"",
		"mtime": "2026-10-09T15:20:29.212Z",
		"size": 488,
		"path": "../public/assets/useStock-CYuKnEsX.js"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-10-09T15:20:29.330Z",
		"size": 732415,
		"path": "../public/assets/tiramisu-speculoos-CUQsAiGk.jpg"
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
var _lazy_gmTYTR = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/**",
		handler: multiHandler(toEventHandler(server_default), _lazy_gmTYTR)
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
