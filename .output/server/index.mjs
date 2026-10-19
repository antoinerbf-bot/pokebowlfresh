globalThis.__nitro_main__ = import.meta.url;
import { _ as NodeResponse, v as serve } from "./_libs/@tanstack/react-start+[...].mjs";
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
function renderErrorPage(error) {
	const detail = error ? String(error?.stack || error?.message || error) : "";
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 32rem; width: 100%; text-align: center; padding: 2rem; }
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
      ${detail ? `<details style="margin-top:1.5rem;margin-bottom:1.5rem;text-align:left;font-size:11px;background:#f3f4f6;padding:0.75rem;border-radius:0.5rem;overflow:auto;max-height:16rem;"><summary style="cursor:pointer;font-weight:600;color:#374151;">Détails techniques (admin)</summary><pre style="margin-top:0.5rem;white-space:pre-wrap;color:#b91c1c;">${detail.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre></details>` : ""}
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
	const err = consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`);
	console.error(err);
	return new Response(renderErrorPage(err), {
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
	const isApiOrServerFn = request.url.includes("/api/") || request.url.includes("/_server") || Boolean(request.headers.get("accept")?.includes("application/json"));
	try {
		const response = await (await getServerEntry()).fetch(request, env, ctx);
		if (isApiOrServerFn) return response;
		return await normalizeCatastrophicSsrResponse(response);
	} catch (error) {
		console.error(error);
		if (isApiOrServerFn) return new Response(JSON.stringify({ error: error?.message ?? String(error) }), {
			status: 500,
			headers: { "content-type": "application/json" }
		});
		return new Response(renderErrorPage(error), {
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
		"mtime": "2026-10-19T09:32:55.230Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-19T09:32:55.229Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"cb-9IMuqvGfMQsqeWkcUF4+86J3su8\"",
		"mtime": "2026-10-19T09:32:55.229Z",
		"size": 203,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8c1-t3RYj4XVjqW9lYVU9fSXlJ0sZNk\"",
		"mtime": "2026-10-19T09:32:55.232Z",
		"size": 2241,
		"path": "../public/sitemap.xml"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-19T09:32:55.232Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/assets/BrandLogo-CvDJu50B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-WgcjbhEyiWvj+e4h8MR0BU0scW0\"",
		"mtime": "2026-10-19T09:32:54.438Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-CvDJu50B.js"
	},
	"/assets/_productId-CtlCg1mk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"644d-zjvNWWmRpj+XljXc/o4kSfcRK24\"",
		"mtime": "2026-10-19T09:32:54.440Z",
		"size": 25677,
		"path": "../public/assets/_productId-CtlCg1mk.js"
	},
	"/assets/CartDrawer-WtcuWrZ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169de-qfeFX7T+a3jy21QIlSqdOMcMC78\"",
		"mtime": "2026-10-19T09:32:54.440Z",
		"size": 92638,
		"path": "../public/assets/CartDrawer-WtcuWrZ0.js"
	},
	"/assets/_slug-BpsmwGKK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2a-RlCeHur+VGSi4oDIDM15kb33bW0\"",
		"mtime": "2026-10-19T09:32:54.440Z",
		"size": 11562,
		"path": "../public/assets/_slug-BpsmwGKK.js"
	},
	"/assets/arrow-left-BCa9TLr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nWxtFac0ChgC352ptR1cv95N43M\"",
		"mtime": "2026-10-19T09:32:54.440Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BCa9TLr_.js"
	},
	"/assets/_token-CSsM42to.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c41-OyOIB0MiiVt86W3KXplWOOL9XR8\"",
		"mtime": "2026-10-19T09:32:54.440Z",
		"size": 11329,
		"path": "../public/assets/_token-CSsM42to.js"
	},
	"/assets/blog-BwdpUB9d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f6e-Jmfwu0ea7KcWwCiY0gMmv1OPBfw\"",
		"mtime": "2026-10-19T09:32:54.449Z",
		"size": 12142,
		"path": "../public/assets/blog-BwdpUB9d.js"
	},
	"/assets/book-open-BhYeDynW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-B6LNN6Z0i0La89fwHusEoFqfikM\"",
		"mtime": "2026-10-19T09:32:54.449Z",
		"size": 279,
		"path": "../public/assets/book-open-BhYeDynW.js"
	},
	"/assets/art-crousty-chaud-D6T5g5zZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-19T09:32:54.454Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud-D6T5g5zZ.jpg"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-19T09:32:55.241Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-19T09:32:55.243Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-guide-vise-TJFaJ8ss.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-19T09:32:54.454Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise-TJFaJ8ss.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-19T09:32:55.243Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-19T09:32:55.256Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/art-repas-healthy-eKaeVqbF.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-19T09:32:54.461Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy-eKaeVqbF.jpg"
	},
	"/assets/art-saumon-avocat-B6OD39KW.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-19T09:32:54.464Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat-B6OD39KW.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T09:32:55.256Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/bowl-crousty-blanche-FPJS5FmA.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-19T09:32:54.468Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche-FPJS5FmA.jpg"
	},
	"/assets/art-poke-vs-chirashi-ANfUYMoL.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-19T09:32:54.455Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi-ANfUYMoL.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-19T09:32:55.245Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-10-19T09:32:55.268Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-saumon-CRYVYQxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-19T09:32:54.471Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon-CRYVYQxR.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-19T09:32:55.268Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T09:32:55.280Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-scampis-DlEe1YXf.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T09:32:54.473Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis-DlEe1YXf.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T09:32:55.276Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T09:32:55.258Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T09:32:55.276Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-19T09:32:55.262Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-spicy-chicken-B-7nVWlP.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-19T09:32:54.473Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken-B-7nVWlP.jpg"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-19T09:32:55.285Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/briefcase-business-DJeAkziv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Icqw7COrVhO91vSmQRwPu6aynHU\"",
		"mtime": "2026-10-19T09:32:54.450Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-DJeAkziv.js"
	},
	"/assets/check-PxzYpF26.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-IVHi0fxXA1mGTWe6eBid4wsv4HI\"",
		"mtime": "2026-10-19T09:32:54.450Z",
		"size": 124,
		"path": "../public/assets/check-PxzYpF26.js"
	},
	"/assets/checkout-B9Di2oJv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"458b-WJYvPVZML4hgJM9H2UI2F9D+ZSs\"",
		"mtime": "2026-10-19T09:32:54.450Z",
		"size": 17803,
		"path": "../public/assets/checkout-B9Di2oJv.js"
	},
	"/assets/chevron-right-Cuq8enpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-xE5o3jgKEMoYks6s+zDOB+zqOaM\"",
		"mtime": "2026-10-19T09:32:54.450Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cuq8enpP.js"
	},
	"/assets/circle-alert-ClvmKOUA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-2kjAovRoSd1mtrV0pDXgDnuN8MQ\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 250,
		"path": "../public/assets/circle-alert-ClvmKOUA.js"
	},
	"/assets/circle-check-xE2Wlw9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-l6OrdSi43cVZdFQoU9pYyzz0x50\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 178,
		"path": "../public/assets/circle-check-xE2Wlw9j.js"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T09:32:54.474Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/clock-BrBAgSRU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-rTxuSmbLy+eupu13bqHm/UN2F2k\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 169,
		"path": "../public/assets/clock-BrBAgSRU.js"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T09:32:55.294Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/commander-CH0QiLeP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44d0-U9ue4u3pgn6TIFySHL1IMn12wUc\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 17616,
		"path": "../public/assets/commander-CH0QiLeP.js"
	},
	"/assets/contact-DMurq65R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d5-h73uLme4TcUfgkMfSrdvqBKybvU\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 5077,
		"path": "../public/assets/contact-DMurq65R.js"
	},
	"/assets/createLucideIcon-zy-1MMUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e8-LsCvj+F3zoqFkM8XxEZQcRiVaMU\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 9960,
		"path": "../public/assets/createLucideIcon-zy-1MMUP.js"
	},
	"/assets/data-lJNOC6Y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2000-wbee5lwp5jsoG2wvtDZpJ5liWV4\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 8192,
		"path": "../public/assets/data-lJNOC6Y9.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-10-19T09:32:54.479Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-eau-plate-B76aUhfx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6c9-5xcdzBQyvuwL5Ek2SBrbxBt5HzY\"",
		"mtime": "2026-10-19T09:32:54.487Z",
		"size": 448201,
		"path": "../public/assets/drink-eau-plate-B76aUhfx.jpg"
	},
	"/assets/drink-eau-gazeuse-CayWkPyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"74df4-JOZFiB8pP/Kl6hjKmHuihgnGEng\"",
		"mtime": "2026-10-19T09:32:54.486Z",
		"size": 478708,
		"path": "../public/assets/drink-eau-gazeuse-CayWkPyq.jpg"
	},
	"/assets/drink-ice-tea-DMqFJYm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-2xUP77I79Po02qcDsidbD97h4TU\"",
		"mtime": "2026-10-19T09:32:54.451Z",
		"size": 192,
		"path": "../public/assets/drink-ice-tea-DMqFJYm2.js"
	},
	"/assets/drink-coca-cola-D83foBG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf65a-h2782mDQADKj1mVNTnKPFmSQaZM\"",
		"mtime": "2026-10-19T09:32:54.479Z",
		"size": 783962,
		"path": "../public/assets/drink-coca-cola-D83foBG1.jpg"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-19T09:32:54.483Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/drink-ice-tea-CZgyxPov.jpg": {
		"type": "image/jpeg",
		"etag": "\"bc7b7-h+mR5Yv9rqDtFReS1JJ00P3daEg\"",
		"mtime": "2026-10-19T09:32:54.492Z",
		"size": 772023,
		"path": "../public/assets/drink-ice-tea-CZgyxPov.jpg"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-19T09:32:54.489Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/loader-circle-m3U77eaX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-3AqCGdRCnx7R8qYcwhyiEMhIx1I\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 144,
		"path": "../public/assets/loader-circle-m3U77eaX.js"
	},
	"/assets/map-pin-CM6X10Il.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-L824M/PHpehm0n547HCa7FsPbSM\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 259,
		"path": "../public/assets/map-pin-CM6X10Il.js"
	},
	"/assets/phone-call-ZXsSJdfj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-YM27ZWpj/0zkz4+5eMrDVUv7dJI\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 423,
		"path": "../public/assets/phone-call-ZXsSJdfj.js"
	},
	"/assets/recrutement-BRLEPgmU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-DIfMEg+XdhDWeyuATMGcrDWyqnQ\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 3781,
		"path": "../public/assets/recrutement-BRLEPgmU.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/link-D0rUQ_ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69c7-qOTBB+S12DVHaPFAwntEuA5TjaM\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 27079,
		"path": "../public/assets/link-D0rUQ_ra.js"
	},
	"/assets/order.success-D1tSJIK7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8e-varP2wv6gGlgGqedQyeCSoQeF2U\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 64910,
		"path": "../public/assets/order.success-D1tSJIK7.js"
	},
	"/assets/index-Drvk9l0d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7320a-TKWUSp1JZPRueFESDvFJ+z+Q1oY\"",
		"mtime": "2026-10-19T09:32:54.438Z",
		"size": 471562,
		"path": "../public/assets/index-Drvk9l0d.js"
	},
	"/assets/hero-saumon-clean-wide-CmteSWDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b6f-fD3s5WJC/JdK+sTz13anPpjV7w4\"",
		"mtime": "2026-10-19T09:32:54.493Z",
		"size": 621423,
		"path": "../public/assets/hero-saumon-clean-wide-CmteSWDC.jpg"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T09:32:55.290Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/hero-crousty-wide-DQZ1PYgR.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T09:32:54.492Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide-DQZ1PYgR.jpg"
	},
	"/assets/hero-scampis-wide-RPIUC85j.jpg": {
		"type": "image/jpeg",
		"etag": "\"b4330-vU/CkT4LGIfbRh+cFP10D9cXI00\"",
		"mtime": "2026-10-19T09:32:54.495Z",
		"size": 738096,
		"path": "../public/assets/hero-scampis-wide-RPIUC85j.jpg"
	},
	"/assets/hero-spicy-wide-_hM7Lcc8.jpg": {
		"type": "image/jpeg",
		"etag": "\"9efd7-3H5ZqELekp4fbUtDlIes1bowuCo\"",
		"mtime": "2026-10-19T09:32:54.498Z",
		"size": 651223,
		"path": "../public/assets/hero-spicy-wide-_hM7Lcc8.jpg"
	},
	"/assets/hero-sweet-wide-CybbbKyX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177b-eQbq0v0z0PUZmXF/WWha1RidHD4\"",
		"mtime": "2026-10-19T09:32:54.499Z",
		"size": 595835,
		"path": "../public/assets/hero-sweet-wide-CybbbKyX.jpg"
	},
	"/assets/shield-check-qvFTR-Jy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-2ZqGAd62d2xkTCEF7hDEuBAg+do\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 320,
		"path": "../public/assets/shield-check-qvFTR-Jy.js"
	},
	"/assets/star-C7_5D-jp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-ip3V6dXSMumtXzbXCaUadHxIR3o\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 472,
		"path": "../public/assets/star-C7_5D-jp.js"
	},
	"/assets/shopping-bag-Zw7p0j3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-ErUHeGKd58kSqcnv9PPlrFDjltU\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-Zw7p0j3b.js"
	},
	"/assets/routes-CDMGfABh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e876-Jk1S1vJdJC1UXPcZ4/ifv0B6H4Y\"",
		"mtime": "2026-10-19T09:32:54.452Z",
		"size": 256118,
		"path": "../public/assets/routes-CDMGfABh.js"
	},
	"/assets/stock-S2r-865K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c2-iP4K8xkJosQfivY9legZGKruOok\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 962,
		"path": "../public/assets/stock-S2r-865K.js"
	},
	"/assets/stocks-C4eOEJLb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-M9ynaeqILUc+Ol4YsjnvNIv9wkc\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 6226,
		"path": "../public/assets/stocks-C4eOEJLb.js"
	},
	"/assets/store-B1OvIZWh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-UxZMUWdW4vSWBORMPcc5A5Gpe6o\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 652,
		"path": "../public/assets/store-B1OvIZWh.js"
	},
	"/assets/sur-mesure-I6AY6KYH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"585d-5Lkx5dyvdix8rgSjwb7hn5GRCs0\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 22621,
		"path": "../public/assets/sur-mesure-I6AY6KYH.js"
	},
	"/assets/styles-V_VO0YJl.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2a33e-JwOW4UF/JT46C8rLPnzI7m68/TU\"",
		"mtime": "2026-10-19T09:32:54.503Z",
		"size": 172862,
		"path": "../public/assets/styles-V_VO0YJl.css"
	},
	"/assets/useStock-DtiYvWdt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-3iDVkkg/UyFwWKnSkZm2f/e35sg\"",
		"mtime": "2026-10-19T09:32:54.453Z",
		"size": 488,
		"path": "../public/assets/useStock-DtiYvWdt.js"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-10-19T09:32:54.504Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-10-19T09:32:54.505Z",
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
