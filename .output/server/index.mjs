globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.i)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"326-ybB5iNJOL2fyURXRtKUxkQa+d1o\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"cb-9IMuqvGfMQsqeWkcUF4+86J3su8\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 203,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8c1-t3RYj4XVjqW9lYVU9fSXlJ0sZNk\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 2241,
		"path": "../public/sitemap.xml"
	},
	"/version.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"42-T4mg37eiCRzadZxSDCFx8Ptszgc\"",
		"mtime": "2026-10-29T16:11:11.390Z",
		"size": 66,
		"path": "../public/version.txt"
	},
	"/assets/BrandLogo-U0RymHuS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-AFM0zwQFk1IKUZTA9T+ZhEH0Bpg\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-U0RymHuS.js"
	},
	"/assets/CartDrawer-DPQcKwl3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16ba1-jSjEl5g1KXSSS6zAxRYQWT+UA0I\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 93089,
		"path": "../public/assets/CartDrawer-DPQcKwl3.js"
	},
	"/assets/_productId-DldxNGbw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8435-C8qnY2gmYFWdBPmS/9xJ2uaTF8g\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 33845,
		"path": "../public/assets/_productId-DldxNGbw.js"
	},
	"/assets/_slug-BiLb9YBP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ebb-eqfWiX63/lZnbsJ32Ci9wD9NIaw\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 11963,
		"path": "../public/assets/_slug-BiLb9YBP.js"
	},
	"/assets/_token-BeaGO8FF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c41-jHKFcNOC9ol/3hgLsazStGP0Ryw\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 11329,
		"path": "../public/assets/_token-BeaGO8FF.js"
	},
	"/assets/arrow-left-Dyuwrwe5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-EqY85nk/bXRcgYzfDjTY5T5TqQc\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Dyuwrwe5.js"
	},
	"/assets/blog-Dno4_DvI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303d-LXApIRKlgKpCrs8bEB4NwlqKARg\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 12349,
		"path": "../public/assets/blog-Dno4_DvI.js"
	},
	"/assets/book-open-wkVtoW8e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-+eTR+mBUG6FgUkjMtbbvh0w+Qjg\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 279,
		"path": "../public/assets/book-open-wkVtoW8e.js"
	},
	"/assets/art-crousty-chaud-D8cbURaY.jpg": {
		"type": "image/jpeg",
		"etag": "\"c9141-bSAlMdryDv0wPJgQVQJWuMIfHP8\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 823617,
		"path": "../public/assets/art-crousty-chaud-D8cbURaY.jpg"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-29T16:11:11.391Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-guide-vise-RzC6m3dL.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a59-0TXI92bM6nktFHFKzsZL7ma7dVM\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 928345,
		"path": "../public/assets/art-guide-vise-RzC6m3dL.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-29T16:11:11.391Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-repas-healthy-plF8Pxrv.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1ee-ZrqkFMnzTU/W1Ttkk8RLSaRGV+c\"",
		"mtime": "2026-10-29T16:11:09.692Z",
		"size": 831982,
		"path": "../public/assets/art-repas-healthy-plF8Pxrv.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-29T16:11:11.393Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/art-saumon-avocat-D8nS1eay.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97f4-WtWHrVBZmPn40PZNzg7Xn6+hd+w\"",
		"mtime": "2026-10-29T16:11:09.692Z",
		"size": 890868,
		"path": "../public/assets/art-saumon-avocat-D8nS1eay.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-29T16:11:11.391Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-29T16:11:11.392Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/art-poke-vs-chirashi-SGptxgro.jpg": {
		"type": "image/jpeg",
		"etag": "\"12585e-96e6AQPqzdyfbd/E3W6jyMysGys\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 1202270,
		"path": "../public/assets/art-poke-vs-chirashi-SGptxgro.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-29T16:11:11.391Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-10-29T16:11:11.393Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-saumon-jAR9in4r.jpg": {
		"type": "image/jpeg",
		"etag": "\"52b60-xRYm00TMLaP92uxC4gTrMobhS6Q\"",
		"mtime": "2026-10-29T16:11:09.693Z",
		"size": 338784,
		"path": "../public/assets/bowl-saumon-jAR9in4r.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"52b62-lOZer4spqo488GoRD1CS20SUNyg\"",
		"mtime": "2026-10-29T16:11:11.393Z",
		"size": 338786,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-29T16:11:11.393Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-29T16:11:11.392Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-29T16:11:11.393Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/bowl-scampis-kylQ3WuD.jpg": {
		"type": "image/jpeg",
		"etag": "\"d3d45-sImLgHZjg7O1VKkEgA+9Zv6U73s\"",
		"mtime": "2026-10-29T16:11:09.693Z",
		"size": 867653,
		"path": "../public/assets/bowl-scampis-kylQ3WuD.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-29T16:11:11.392Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/bowl-spicy-chicken-JeSY1Y7I.jpg": {
		"type": "image/jpeg",
		"etag": "\"d49ce-+kuC9G7q6hL/i1LC4KOY5QiEja8\"",
		"mtime": "2026-10-29T16:11:09.693Z",
		"size": 870862,
		"path": "../public/assets/bowl-spicy-chicken-JeSY1Y7I.jpg"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/briefcase-business-D93Q2jPt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Vd+cHaGY2h869Zj5RN9uigMuZF0\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-D93Q2jPt.js"
	},
	"/assets/check-COXs69vl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-AgzMdJZiR7u42BywmJZKq1c2sQs\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 124,
		"path": "../public/assets/check-COXs69vl.js"
	},
	"/assets/checkout-DxM7TL35.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"477e-16QirM8QI2+nefkb0wW9G8R68iQ\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 18302,
		"path": "../public/assets/checkout-DxM7TL35.js"
	},
	"/assets/chef-hat-Y59weHxi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-c4Tl5IIcELQ+jUGh2T4KfObJI84\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 308,
		"path": "../public/assets/chef-hat-Y59weHxi.js"
	},
	"/assets/chevron-right-Cnj3luwS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-BbD27G0zey7mC63+RKVbLXsvS60\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cnj3luwS.js"
	},
	"/assets/circle-alert-BvofYqlP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-rtVkail/NplzYhskUkdtEtIxZjE\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 250,
		"path": "../public/assets/circle-alert-BvofYqlP.js"
	},
	"/assets/circle-check-BKVHuuRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-TQxO0YxXdneXTt2Ls0r79sJWxUo\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 178,
		"path": "../public/assets/circle-check-BKVHuuRY.js"
	},
	"/assets/clock-D6UbyWjZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-j029KvZMEkUSHAUxQH5kBSF19PY\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 169,
		"path": "../public/assets/clock-D6UbyWjZ.js"
	},
	"/assets/bowl-sweet-chicken-BdKPLwmu.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc4a-IB9/G4BZv/ztkqlg/cgQiaKwtuI\"",
		"mtime": "2026-10-29T16:11:09.693Z",
		"size": 851018,
		"path": "../public/assets/bowl-sweet-chicken-BdKPLwmu.jpg"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/commander-PV0kvAF_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49ca-LnlopdM6nhLrLM9bwbw/ZqwcYaw\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 18890,
		"path": "../public/assets/commander-PV0kvAF_.js"
	},
	"/assets/bowl-crousty-blanche-CgG4fzk2.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0f4a-qDBoHwo28G7b2DvfcrXjJBtYgtU\"",
		"mtime": "2026-10-29T16:11:09.692Z",
		"size": 855882,
		"path": "../public/assets/bowl-crousty-blanche-CgG4fzk2.jpg"
	},
	"/assets/contact-C4qzhKht.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1271-cEvJWG3RIchL+WkS2g0lvBwIJjw\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 4721,
		"path": "../public/assets/contact-C4qzhKht.js"
	},
	"/assets/createLucideIcon-Cwt3h4uJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b0-QL/0llq96fUvti1uSeI/NIWXwnU\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 9904,
		"path": "../public/assets/createLucideIcon-Cwt3h4uJ.js"
	},
	"/assets/data-Bu0renR_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27a9-fbNQ9yI121oGV+AP7fvbonW5rn8\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 10153,
		"path": "../public/assets/data-Bu0renR_.js"
	},
	"/assets/dessert-DxeN3S54.jpg": {
		"type": "image/jpeg",
		"etag": "\"d821-iM1oTjhEsNucrxF7Vtoiu8E0YR0\"",
		"mtime": "2026-10-29T16:11:09.694Z",
		"size": 55329,
		"path": "../public/assets/dessert-DxeN3S54.jpg"
	},
	"/assets/drink-coca-cola-DG8izIRl.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0754-rgZ5QbRYNhguNxGSW/xyqb9gebc\"",
		"mtime": "2026-10-29T16:11:09.694Z",
		"size": 788308,
		"path": "../public/assets/drink-coca-cola-DG8izIRl.jpg"
	},
	"/assets/drink-coca-cola.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0758-MatyKnCcIwi6Ia6Ie9wVV1vsxw0\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 788312,
		"path": "../public/assets/drink-coca-cola.jpg"
	},
	"/assets/drink-coca-zero-DuBxfUw0.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde0f-wPill9U9rk5GPWW712EEP2B4XQE\"",
		"mtime": "2026-10-29T16:11:09.694Z",
		"size": 777743,
		"path": "../public/assets/drink-coca-zero-DuBxfUw0.jpg"
	},
	"/assets/index-aap9KJMN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"749e9-wU8obTwZsR3DDwuvmKTuklCLFEA\"",
		"mtime": "2026-10-29T16:11:09.689Z",
		"size": 477673,
		"path": "../public/assets/index-aap9KJMN.js"
	},
	"/assets/invariant-BeDuhpwN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"235-rR9gkZqcx7mMWwmrfaH0iWEeehY\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 565,
		"path": "../public/assets/invariant-BeDuhpwN.js"
	},
	"/assets/link-DNNmk_Uj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c25-diX6fFriyp9wdGo7ft8oMx+GZMw\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 11301,
		"path": "../public/assets/link-DNNmk_Uj.js"
	},
	"/assets/drink-coca-zero.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero.jpg"
	},
	"/assets/drink-eau-plate-Bu_gVeVG.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0f93-ZuvpGh4tzJHqkiVDSLjS9nHQeHc\"",
		"mtime": "2026-10-29T16:11:09.695Z",
		"size": 790419,
		"path": "../public/assets/drink-eau-plate-Bu_gVeVG.jpg"
	},
	"/assets/drink-eau-plate.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0f9e-mNd7A2/Vr6Wpo/Lf5XkgfXv+dXc\"",
		"mtime": "2026-10-29T16:11:11.395Z",
		"size": 790430,
		"path": "../public/assets/drink-eau-plate.jpg"
	},
	"/assets/drink-fanta-orange-a1tIxem0.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7d6-pRbM4ydeAiD/AZMW0IBhHrO/9OE\"",
		"mtime": "2026-10-29T16:11:09.695Z",
		"size": 829398,
		"path": "../public/assets/drink-fanta-orange-a1tIxem0.jpg"
	},
	"/assets/drink-fanta-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-29T16:11:11.395Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange.jpg"
	},
	"/assets/drink-ice-tea.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb7dc-1BX/cI58hUoTUSRSdmbtWRvNKvc\"",
		"mtime": "2026-10-29T16:11:11.395Z",
		"size": 833500,
		"path": "../public/assets/drink-ice-tea.jpg"
	},
	"/assets/loader-circle-DWi0hMJw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-bBVf2uXJG5+kJTWo6pq/z0edAfs\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 144,
		"path": "../public/assets/loader-circle-DWi0hMJw.js"
	},
	"/assets/map-pin-CkDOt-0u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-UuocdUg78HthrpGNqfXcFmj2res\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 259,
		"path": "../public/assets/map-pin-CkDOt-0u.js"
	},
	"/assets/drink-ice-tea-Bzflj3rk.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb7d4-x1ZHklbWR3mD4lj6/4atiGUj0ok\"",
		"mtime": "2026-10-29T16:11:09.695Z",
		"size": 833492,
		"path": "../public/assets/drink-ice-tea-Bzflj3rk.jpg"
	},
	"/assets/hero-crousty-wide-NVZZ2NN_.jpg": {
		"type": "image/jpeg",
		"etag": "\"db2e1-GmBjXEn5vshY9vpKkEL0TgJaUjs\"",
		"mtime": "2026-10-29T16:11:09.696Z",
		"size": 897761,
		"path": "../public/assets/hero-crousty-wide-NVZZ2NN_.jpg"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-29T16:11:11.395Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/hero-saumon-clean-wide-C2XTdQhv.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b68-ioX/MN3EQ7BvnnS7nRMn8cWkuJ4\"",
		"mtime": "2026-10-29T16:11:09.696Z",
		"size": 621416,
		"path": "../public/assets/hero-saumon-clean-wide-C2XTdQhv.jpg"
	},
	"/assets/hero-scampis-wide-bH2QMXO3.jpg": {
		"type": "image/jpeg",
		"etag": "\"b1fd1-1UyAwrWD+6EX5ZQQdiW/cmiDabE\"",
		"mtime": "2026-10-29T16:11:09.696Z",
		"size": 729041,
		"path": "../public/assets/hero-scampis-wide-bH2QMXO3.jpg"
	},
	"/assets/hero-spicy-wide-BXenSZXJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"b27f5-hZ0pk0kajij75chJd2s4X7KLoP8\"",
		"mtime": "2026-10-29T16:11:09.697Z",
		"size": 731125,
		"path": "../public/assets/hero-spicy-wide-BXenSZXJ.jpg"
	},
	"/assets/hero-sweet-wide-BOQIsR22.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177a-hdtzyX1KRVEFnjQfYEYnQN2okUM\"",
		"mtime": "2026-10-29T16:11:09.697Z",
		"size": 595834,
		"path": "../public/assets/hero-sweet-wide-BOQIsR22.jpg"
	},
	"/assets/drink-eau-gazeuse.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce0cc-QUdE+rYuJKpGBu69BopqSlKGqLs\"",
		"mtime": "2026-10-29T16:11:11.394Z",
		"size": 843980,
		"path": "../public/assets/drink-eau-gazeuse.jpg"
	},
	"/assets/drink-eau-gazeuse-2huZeMl6.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce0c3-vl2j1j0vgN5RE2N/L9lMUA0Nens\"",
		"mtime": "2026-10-29T16:11:09.694Z",
		"size": 843971,
		"path": "../public/assets/drink-eau-gazeuse-2huZeMl6.jpg"
	},
	"/assets/order.success-DWTJcWBF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8e-EH/7iaBUb5gX0uFky1H2ca8vQzo\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 64910,
		"path": "../public/assets/order.success-DWTJcWBF.js"
	},
	"/assets/phone-call-HqyBMYkB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-Q8/9Wd1nkeC4mvieZas5VUbleYc\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 423,
		"path": "../public/assets/phone-call-HqyBMYkB.js"
	},
	"/assets/recrutement-CYHG8Bkx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-pEQam0SvwN7+bHRYx50X/PTiyx4\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 3781,
		"path": "../public/assets/recrutement-CYHG8Bkx.js"
	},
	"/assets/routes-rv9kBX2c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"439f0-IuQ9p2lQgPIcYenono8cqus3HS8\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 276976,
		"path": "../public/assets/routes-rv9kBX2c.js"
	},
	"/assets/shield-check-DPCK8fus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-jiS8oue31MkJWwQhKwMF6cQty40\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 320,
		"path": "../public/assets/shield-check-DPCK8fus.js"
	},
	"/assets/shopping-bag-CxA4XNWa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-JbUqjQN6n0kwSkcKmJv1mXMFwGo\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-CxA4XNWa.js"
	},
	"/assets/star-D8D0kTfC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-lbyIAKoQtDHZqsfy8YSEVppgolY\"",
		"mtime": "2026-10-29T16:11:09.690Z",
		"size": 472,
		"path": "../public/assets/star-D8D0kTfC.js"
	},
	"/assets/stock-CtuC9Vxs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c2-/B4SzzTkDe9PwMwsduUd1oDXCt0\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 962,
		"path": "../public/assets/stock-CtuC9Vxs.js"
	},
	"/assets/stocks-353Q9qJr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-2/qzRz0H8DtaAsr6GR97hdTJ+so\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 6226,
		"path": "../public/assets/stocks-353Q9qJr.js"
	},
	"/assets/store-BT49HRsR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-+Wrrc94xiMI1/N2njGuZqSF+YbM\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 652,
		"path": "../public/assets/store-BT49HRsR.js"
	},
	"/assets/styles-B9FbZuUv.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2acae-TiG8anlIqOhFRzxDw7ETJ6C3VoU\"",
		"mtime": "2026-10-29T16:11:09.697Z",
		"size": 175278,
		"path": "../public/assets/styles-B9FbZuUv.css"
	},
	"/assets/sur-mesure-CamwK30-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"791d-xRz3VNx06HtrKcmhF6hBPQ1sLZU\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 31005,
		"path": "../public/assets/sur-mesure-CamwK30-.js"
	},
	"/assets/tiramisu-nutella-C3YlSQbH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d-8wqWQQ8yc48TF23uy6UaTAjQimM\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 61,
		"path": "../public/assets/tiramisu-nutella-C3YlSQbH.js"
	},
	"/assets/useStock-BPtg3vwp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-LH1X6sqPfz+8NRIHDbnxSPCm+qs\"",
		"mtime": "2026-10-29T16:11:09.691Z",
		"size": 488,
		"path": "../public/assets/useStock-BPtg3vwp.js"
	},
	"/assets/tiramisu-nutella-pyhQjNRy.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e1d-qIzeEyO0zDnaW19mjVjN6wg5zoA\"",
		"mtime": "2026-10-29T16:11:09.697Z",
		"size": 736797,
		"path": "../public/assets/tiramisu-nutella-pyhQjNRy.jpg"
	},
	"/assets/tiramisu-speculoos-ClrsTeI9.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cf9-HWk2MdH4XklsjoYE036q5tVl6Ek\"",
		"mtime": "2026-10-29T16:11:09.697Z",
		"size": 732409,
		"path": "../public/assets/tiramisu-speculoos-ClrsTeI9.jpg"
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
var _lazy_XAhvdF = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_XAhvdF
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
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
export { node_server_default as default };
