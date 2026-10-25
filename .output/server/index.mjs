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
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
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
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8c1-t3RYj4XVjqW9lYVU9fSXlJ0sZNk\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 2241,
		"path": "../public/sitemap.xml"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"cb-9IMuqvGfMQsqeWkcUF4+86J3su8\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 203,
		"path": "../public/robots.txt"
	},
	"/version.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"42-T4mg37eiCRzadZxSDCFx8Ptszgc\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 66,
		"path": "../public/version.txt"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/assets/BrandLogo-U0RymHuS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-AFM0zwQFk1IKUZTA9T+ZhEH0Bpg\"",
		"mtime": "2026-10-25T15:47:17.234Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-U0RymHuS.js"
	},
	"/assets/CartDrawer-Dm5ueMhg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a8c-rtdAythridv+1IUwgi9pZHDbT6Q\"",
		"mtime": "2026-10-25T15:47:17.234Z",
		"size": 92812,
		"path": "../public/assets/CartDrawer-Dm5ueMhg.js"
	},
	"/assets/_productId-DJEZJJwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6592-ZduTOatASG1WGSbSJx2Z8hTHFXs\"",
		"mtime": "2026-10-25T15:47:17.234Z",
		"size": 26002,
		"path": "../public/assets/_productId-DJEZJJwk.js"
	},
	"/assets/_slug-DppJRjLR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2a-QmgKFULnCktZ6mW3mgWnbtOJjBg\"",
		"mtime": "2026-10-25T15:47:17.234Z",
		"size": 11562,
		"path": "../public/assets/_slug-DppJRjLR.js"
	},
	"/assets/_token-DdxJ9JcB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c41-1VA0ATsBZpDzRh5pmBOWvcxZLHo\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 11329,
		"path": "../public/assets/_token-DdxJ9JcB.js"
	},
	"/assets/blog-B39vi5VB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f6e-3k+4Mpa8/IzS6hhb7bovpja1NCI\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 12142,
		"path": "../public/assets/blog-B39vi5VB.js"
	},
	"/assets/book-open-wkVtoW8e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-+eTR+mBUG6FgUkjMtbbvh0w+Qjg\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 279,
		"path": "../public/assets/book-open-wkVtoW8e.js"
	},
	"/assets/arrow-left-Dyuwrwe5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-EqY85nk/bXRcgYzfDjTY5T5TqQc\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Dyuwrwe5.js"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-guide-vise-TJFaJ8ss.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise-TJFaJ8ss.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-repas-healthy-eKaeVqbF.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-25T15:47:17.236Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy-eKaeVqbF.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/art-saumon-avocat-B6OD39KW.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-25T15:47:17.236Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat-B6OD39KW.jpg"
	},
	"/assets/art-crousty-chaud-D6T5g5zZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud-D6T5g5zZ.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/art-poke-vs-chirashi-ANfUYMoL.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-25T15:47:17.236Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi-ANfUYMoL.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-25T15:47:18.054Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-saumon-CRYVYQxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon-CRYVYQxR.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-scampis-DlEe1YXf.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis-DlEe1YXf.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-25T15:47:18.056Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/briefcase-business-D93Q2jPt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Vd+cHaGY2h869Zj5RN9uigMuZF0\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-D93Q2jPt.js"
	},
	"/assets/check-COXs69vl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-AgzMdJZiR7u42BywmJZKq1c2sQs\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 124,
		"path": "../public/assets/check-COXs69vl.js"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/checkout-D4KEva_l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44d9-qFs5Ypm78dS33Qi9Ze0SP24nk2o\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 17625,
		"path": "../public/assets/checkout-D4KEva_l.js"
	},
	"/assets/chevron-right-Cnj3luwS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-BbD27G0zey7mC63+RKVbLXsvS60\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cnj3luwS.js"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-spicy-chicken-B-7nVWlP.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken-B-7nVWlP.jpg"
	},
	"/assets/bowl-crousty-curry-DQZ1PYgR.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-25T15:47:17.236Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry-DQZ1PYgR.jpg"
	},
	"/assets/circle-alert-BvofYqlP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-rtVkail/NplzYhskUkdtEtIxZjE\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 250,
		"path": "../public/assets/circle-alert-BvofYqlP.js"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/circle-check-BKVHuuRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-TQxO0YxXdneXTt2Ls0r79sJWxUo\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 178,
		"path": "../public/assets/circle-check-BKVHuuRY.js"
	},
	"/assets/clock-D6UbyWjZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-j029KvZMEkUSHAUxQH5kBSF19PY\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 169,
		"path": "../public/assets/clock-D6UbyWjZ.js"
	},
	"/assets/commander-Dkc1nyUx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4573-iJJxZyTH4t3F60FwC0bsuoop3kE\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 17779,
		"path": "../public/assets/commander-Dkc1nyUx.js"
	},
	"/assets/contact-jtkUMCH9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d5-m5Q0LngequzvrV2MejV66/sMzF0\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 5077,
		"path": "../public/assets/contact-jtkUMCH9.js"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/createLucideIcon-Cwt3h4uJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b0-QL/0llq96fUvti1uSeI/NIWXwnU\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 9904,
		"path": "../public/assets/createLucideIcon-Cwt3h4uJ.js"
	},
	"/assets/crousty-chicken-original-DY7GQyvB.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5ffd-azHkoFzRhijSDso1Nrl4WIuzb2c\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 24573,
		"path": "../public/assets/crousty-chicken-original-DY7GQyvB.jpeg"
	},
	"/assets/data-BasTd48x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"219d-TGldu4Rdtks9mDXUzOOwWHNQhAw\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 8605,
		"path": "../public/assets/data-BasTd48x.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-eau-plate-B76aUhfx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6c9-5xcdzBQyvuwL5Ek2SBrbxBt5HzY\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 448201,
		"path": "../public/assets/drink-eau-plate-B76aUhfx.jpg"
	},
	"/assets/drink-eau-gazeuse-CayWkPyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"74df4-JOZFiB8pP/Kl6hjKmHuihgnGEng\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 478708,
		"path": "../public/assets/drink-eau-gazeuse-CayWkPyq.jpg"
	},
	"/assets/drink-fanta-orange-DFNMZqKh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-WTMQDwCs7elq2sARm8If4CvaiN0\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 151,
		"path": "../public/assets/drink-fanta-orange-DFNMZqKh.js"
	},
	"/assets/invariant-BeDuhpwN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"235-rR9gkZqcx7mMWwmrfaH0iWEeehY\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 565,
		"path": "../public/assets/invariant-BeDuhpwN.js"
	},
	"/assets/link-DNNmk_Uj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c25-diX6fFriyp9wdGo7ft8oMx+GZMw\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 11301,
		"path": "../public/assets/link-DNNmk_Uj.js"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/map-pin-CkDOt-0u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-UuocdUg78HthrpGNqfXcFmj2res\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 259,
		"path": "../public/assets/map-pin-CkDOt-0u.js"
	},
	"/assets/order.success-Bv0xtUhS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8e-k5rG5hoj0ny+AaqjBIF3AoFX3yU\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 64910,
		"path": "../public/assets/order.success-Bv0xtUhS.js"
	},
	"/assets/loader-circle-DWi0hMJw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-bBVf2uXJG5+kJTWo6pq/z0edAfs\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 144,
		"path": "../public/assets/loader-circle-DWi0hMJw.js"
	},
	"/assets/phone-call-HqyBMYkB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-Q8/9Wd1nkeC4mvieZas5VUbleYc\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 423,
		"path": "../public/assets/phone-call-HqyBMYkB.js"
	},
	"/assets/index-C0aL-K-e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"73d4e-MrTCMId1vAnyPNXDM9xDlO25RDA\"",
		"mtime": "2026-10-25T15:47:17.234Z",
		"size": 474446,
		"path": "../public/assets/index-C0aL-K-e.js"
	},
	"/assets/recrutement-CYHG8Bkx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-pEQam0SvwN7+bHRYx50X/PTiyx4\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 3781,
		"path": "../public/assets/recrutement-CYHG8Bkx.js"
	},
	"/assets/shield-check-DPCK8fus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-jiS8oue31MkJWwQhKwMF6cQty40\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 320,
		"path": "../public/assets/shield-check-DPCK8fus.js"
	},
	"/assets/routes-BhQ4u2FY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e9be-DwZCnPdjEr4/VY/F3yUDaORsKSw\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 256446,
		"path": "../public/assets/routes-BhQ4u2FY.js"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-25T15:47:18.055Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/hero-saumon-clean-wide-CmteSWDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b6f-fD3s5WJC/JdK+sTz13anPpjV7w4\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 621423,
		"path": "../public/assets/hero-saumon-clean-wide-CmteSWDC.jpg"
	},
	"/assets/hero-spicy-wide-_hM7Lcc8.jpg": {
		"type": "image/jpeg",
		"etag": "\"9efd7-3H5ZqELekp4fbUtDlIes1bowuCo\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 651223,
		"path": "../public/assets/hero-spicy-wide-_hM7Lcc8.jpg"
	},
	"/assets/hero-scampis-wide-RPIUC85j.jpg": {
		"type": "image/jpeg",
		"etag": "\"b4330-vU/CkT4LGIfbRh+cFP10D9cXI00\"",
		"mtime": "2026-10-25T15:47:17.238Z",
		"size": 738096,
		"path": "../public/assets/hero-scampis-wide-RPIUC85j.jpg"
	},
	"/assets/hero-sweet-wide-CybbbKyX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177b-eQbq0v0z0PUZmXF/WWha1RidHD4\"",
		"mtime": "2026-10-25T15:47:17.239Z",
		"size": 595835,
		"path": "../public/assets/hero-sweet-wide-CybbbKyX.jpg"
	},
	"/assets/drink-coca-cola-D83foBG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf65a-h2782mDQADKj1mVNTnKPFmSQaZM\"",
		"mtime": "2026-10-25T15:47:17.237Z",
		"size": 783962,
		"path": "../public/assets/drink-coca-cola-D83foBG1.jpg"
	},
	"/assets/shopping-bag-CxA4XNWa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-JbUqjQN6n0kwSkcKmJv1mXMFwGo\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-CxA4XNWa.js"
	},
	"/assets/star-D8D0kTfC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-lbyIAKoQtDHZqsfy8YSEVppgolY\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 472,
		"path": "../public/assets/star-D8D0kTfC.js"
	},
	"/assets/stock-DvqSWibS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c2-pHJlulSzpjtM1U18DtzMS0OdBV0\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 962,
		"path": "../public/assets/stock-DvqSWibS.js"
	},
	"/assets/stocks-B-TA4srL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-5Z2M3VhDUKUNvk5Up4BgZYxJRhk\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 6226,
		"path": "../public/assets/stocks-B-TA4srL.js"
	},
	"/assets/store-BT49HRsR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-+Wrrc94xiMI1/N2njGuZqSF+YbM\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 652,
		"path": "../public/assets/store-BT49HRsR.js"
	},
	"/assets/styles-BJtkdDK0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2a865-7juhXWKyqPKYSEOujcppJh22qcY\"",
		"mtime": "2026-10-25T15:47:17.239Z",
		"size": 174181,
		"path": "../public/assets/styles-BJtkdDK0.css"
	},
	"/assets/sur-mesure-CaLJV9KQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5991-ipPdJ3FBqg6+Mk/gEeJRiBflGRI\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 22929,
		"path": "../public/assets/sur-mesure-CaLJV9KQ.js"
	},
	"/assets/useStock-x2we9loO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-9H5i+CdMIC7GlPNIjLYKC0rx6N4\"",
		"mtime": "2026-10-25T15:47:17.235Z",
		"size": 488,
		"path": "../public/assets/useStock-x2we9loO.js"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-10-25T15:47:17.239Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-10-25T15:47:17.239Z",
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
