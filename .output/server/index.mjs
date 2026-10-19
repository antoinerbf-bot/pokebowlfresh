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
		"mtime": "2026-10-19T17:08:32.695Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-19T17:08:32.696Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-19T17:08:32.695Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"cb-9IMuqvGfMQsqeWkcUF4+86J3su8\"",
		"mtime": "2026-10-19T17:08:32.695Z",
		"size": 203,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8c1-t3RYj4XVjqW9lYVU9fSXlJ0sZNk\"",
		"mtime": "2026-10-19T17:08:32.696Z",
		"size": 2241,
		"path": "../public/sitemap.xml"
	},
	"/version.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"42-T4mg37eiCRzadZxSDCFx8Ptszgc\"",
		"mtime": "2026-10-19T17:08:32.696Z",
		"size": 66,
		"path": "../public/version.txt"
	},
	"/assets/BrandLogo-CvDJu50B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-WgcjbhEyiWvj+e4h8MR0BU0scW0\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-CvDJu50B.js"
	},
	"/assets/_productId-BSn1YPba.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"644d-/WAxHEnJlnHE2zCSitgrMHTZx6U\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 25677,
		"path": "../public/assets/_productId-BSn1YPba.js"
	},
	"/assets/CartDrawer-Dn57SCak.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169de-4YKeV+UHhrRIsTo7Ob3WyxM6rr8\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 92638,
		"path": "../public/assets/CartDrawer-Dn57SCak.js"
	},
	"/assets/_token-Cdyj7Wa-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c41-fUbfChmk0xg0HAgs98FBF+cKVbg\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 11329,
		"path": "../public/assets/_token-Cdyj7Wa-.js"
	},
	"/assets/arrow-left-BCa9TLr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nWxtFac0ChgC352ptR1cv95N43M\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BCa9TLr_.js"
	},
	"/assets/blog-DNreZD2i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f6e-dpcYHYRtfv0ZrZQqmzS0VrUyLzU\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 12142,
		"path": "../public/assets/blog-DNreZD2i.js"
	},
	"/assets/book-open-BhYeDynW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-B6LNN6Z0i0La89fwHusEoFqfikM\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 279,
		"path": "../public/assets/book-open-BhYeDynW.js"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-19T17:08:32.699Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-crousty-chaud-D6T5g5zZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-19T17:08:31.737Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud-D6T5g5zZ.jpg"
	},
	"/assets/_slug-BXmNAiQq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d2a-BwuJh4VWo0UKNdAhQPlwiF+OIdo\"",
		"mtime": "2026-10-19T17:08:31.732Z",
		"size": 11562,
		"path": "../public/assets/_slug-BXmNAiQq.js"
	},
	"/assets/art-guide-vise-TJFaJ8ss.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-19T17:08:31.738Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise-TJFaJ8ss.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-19T17:08:32.698Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-repas-healthy-eKaeVqbF.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-19T17:08:31.748Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy-eKaeVqbF.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-19T17:08:32.698Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/art-saumon-avocat-B6OD39KW.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-19T17:08:31.752Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat-B6OD39KW.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T17:08:32.711Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-19T17:08:32.711Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-19T17:08:32.702Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/art-poke-vs-chirashi-ANfUYMoL.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-19T17:08:31.743Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi-ANfUYMoL.jpg"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-10-19T17:08:32.720Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T17:08:32.721Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T17:08:32.722Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-19T17:08:32.720Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampis-DlEe1YXf.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-19T17:08:31.755Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis-DlEe1YXf.jpg"
	},
	"/assets/bowl-saumon-CRYVYQxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-19T17:08:31.755Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon-CRYVYQxR.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T17:08:32.724Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T17:08:32.712Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-19T17:08:32.711Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-crousty-blanche-FPJS5FmA.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-19T17:08:31.754Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche-FPJS5FmA.jpg"
	},
	"/assets/briefcase-business-DJeAkziv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Icqw7COrVhO91vSmQRwPu6aynHU\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-DJeAkziv.js"
	},
	"/assets/check-PxzYpF26.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-IVHi0fxXA1mGTWe6eBid4wsv4HI\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 124,
		"path": "../public/assets/check-PxzYpF26.js"
	},
	"/assets/bowl-spicy-chicken-B-7nVWlP.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-19T17:08:31.759Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken-B-7nVWlP.jpg"
	},
	"/assets/checkout-C4RXj9ze.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4190-9YXl1KJo8sJaygc4AWf3Slmn3ok\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 16784,
		"path": "../public/assets/checkout-C4RXj9ze.js"
	},
	"/assets/chevron-right-Cuq8enpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-xE5o3jgKEMoYks6s+zDOB+zqOaM\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cuq8enpP.js"
	},
	"/assets/circle-alert-ClvmKOUA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-2kjAovRoSd1mtrV0pDXgDnuN8MQ\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 250,
		"path": "../public/assets/circle-alert-ClvmKOUA.js"
	},
	"/assets/circle-check-xE2Wlw9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-l6OrdSi43cVZdFQoU9pYyzz0x50\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 178,
		"path": "../public/assets/circle-check-xE2Wlw9j.js"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T17:08:31.763Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-19T17:08:32.735Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/clock-BrBAgSRU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-rTxuSmbLy+eupu13bqHm/UN2F2k\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 169,
		"path": "../public/assets/clock-BrBAgSRU.js"
	},
	"/assets/commander-T3BCAKG8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44d0-QYCSRoqCHV8lMvynuYEA4DwAxXE\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 17616,
		"path": "../public/assets/commander-T3BCAKG8.js"
	},
	"/assets/contact-DMurq65R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d5-h73uLme4TcUfgkMfSrdvqBKybvU\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 5077,
		"path": "../public/assets/contact-DMurq65R.js"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-19T17:08:32.732Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/createLucideIcon-zy-1MMUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e8-LsCvj+F3zoqFkM8XxEZQcRiVaMU\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 9960,
		"path": "../public/assets/createLucideIcon-zy-1MMUP.js"
	},
	"/assets/data-lJNOC6Y9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2000-wbee5lwp5jsoG2wvtDZpJ5liWV4\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 8192,
		"path": "../public/assets/data-lJNOC6Y9.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-10-19T17:08:31.767Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-eau-gazeuse-CayWkPyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"74df4-JOZFiB8pP/Kl6hjKmHuihgnGEng\"",
		"mtime": "2026-10-19T17:08:31.773Z",
		"size": 478708,
		"path": "../public/assets/drink-eau-gazeuse-CayWkPyq.jpg"
	},
	"/assets/drink-eau-plate-B76aUhfx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6c9-5xcdzBQyvuwL5Ek2SBrbxBt5HzY\"",
		"mtime": "2026-10-19T17:08:31.773Z",
		"size": 448201,
		"path": "../public/assets/drink-eau-plate-B76aUhfx.jpg"
	},
	"/assets/drink-ice-tea-DMqFJYm2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0-2xUP77I79Po02qcDsidbD97h4TU\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 192,
		"path": "../public/assets/drink-ice-tea-DMqFJYm2.js"
	},
	"/assets/drink-coca-cola-D83foBG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf65a-h2782mDQADKj1mVNTnKPFmSQaZM\"",
		"mtime": "2026-10-19T17:08:31.768Z",
		"size": 783962,
		"path": "../public/assets/drink-coca-cola-D83foBG1.jpg"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-19T17:08:31.770Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-19T17:08:31.773Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/link-D0rUQ_ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69c7-qOTBB+S12DVHaPFAwntEuA5TjaM\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 27079,
		"path": "../public/assets/link-D0rUQ_ra.js"
	},
	"/assets/loader-circle-m3U77eaX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-3AqCGdRCnx7R8qYcwhyiEMhIx1I\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 144,
		"path": "../public/assets/loader-circle-m3U77eaX.js"
	},
	"/assets/map-pin-CM6X10Il.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-L824M/PHpehm0n547HCa7FsPbSM\"",
		"mtime": "2026-10-19T17:08:31.733Z",
		"size": 259,
		"path": "../public/assets/map-pin-CM6X10Il.js"
	},
	"/assets/index-BJpslYZN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70ca2-VtGpU2Wq5zx2mQI/mve9RUIwE8M\"",
		"mtime": "2026-10-19T17:08:31.731Z",
		"size": 461986,
		"path": "../public/assets/index-BJpslYZN.js"
	},
	"/assets/phone-call-ZXsSJdfj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-YM27ZWpj/0zkz4+5eMrDVUv7dJI\"",
		"mtime": "2026-10-19T17:08:31.735Z",
		"size": 423,
		"path": "../public/assets/phone-call-ZXsSJdfj.js"
	},
	"/assets/order.success-3hu4MEqM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8e-XDs3DhBIh5XQj8Wx0vIXBQrCgHI\"",
		"mtime": "2026-10-19T17:08:31.735Z",
		"size": 64910,
		"path": "../public/assets/order.success-3hu4MEqM.js"
	},
	"/assets/recrutement-BRLEPgmU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-DIfMEg+XdhDWeyuATMGcrDWyqnQ\"",
		"mtime": "2026-10-19T17:08:31.735Z",
		"size": 3781,
		"path": "../public/assets/recrutement-BRLEPgmU.js"
	},
	"/assets/hero-saumon-clean-wide-CmteSWDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b6f-fD3s5WJC/JdK+sTz13anPpjV7w4\"",
		"mtime": "2026-10-19T17:08:31.782Z",
		"size": 621423,
		"path": "../public/assets/hero-saumon-clean-wide-CmteSWDC.jpg"
	},
	"/assets/hero-crousty-wide-DQZ1PYgR.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T17:08:31.777Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide-DQZ1PYgR.jpg"
	},
	"/assets/drink-ice-tea-CZgyxPov.jpg": {
		"type": "image/jpeg",
		"etag": "\"bc7b7-h+mR5Yv9rqDtFReS1JJ00P3daEg\"",
		"mtime": "2026-10-19T17:08:31.774Z",
		"size": 772023,
		"path": "../public/assets/drink-ice-tea-CZgyxPov.jpg"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-10-19T17:08:31.735Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-19T17:08:32.734Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/hero-scampis-wide-RPIUC85j.jpg": {
		"type": "image/jpeg",
		"etag": "\"b4330-vU/CkT4LGIfbRh+cFP10D9cXI00\"",
		"mtime": "2026-10-19T17:08:31.787Z",
		"size": 738096,
		"path": "../public/assets/hero-scampis-wide-RPIUC85j.jpg"
	},
	"/assets/routes-Dr4br2GF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e876-QwzkvyacnOzYve6zz5vadpNYDSc\"",
		"mtime": "2026-10-19T17:08:31.735Z",
		"size": 256118,
		"path": "../public/assets/routes-Dr4br2GF.js"
	},
	"/assets/hero-spicy-wide-_hM7Lcc8.jpg": {
		"type": "image/jpeg",
		"etag": "\"9efd7-3H5ZqELekp4fbUtDlIes1bowuCo\"",
		"mtime": "2026-10-19T17:08:31.788Z",
		"size": 651223,
		"path": "../public/assets/hero-spicy-wide-_hM7Lcc8.jpg"
	},
	"/assets/shield-check-qvFTR-Jy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-2ZqGAd62d2xkTCEF7hDEuBAg+do\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 320,
		"path": "../public/assets/shield-check-qvFTR-Jy.js"
	},
	"/assets/shopping-bag-Zw7p0j3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-ErUHeGKd58kSqcnv9PPlrFDjltU\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-Zw7p0j3b.js"
	},
	"/assets/hero-sweet-wide-CybbbKyX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177b-eQbq0v0z0PUZmXF/WWha1RidHD4\"",
		"mtime": "2026-10-19T17:08:31.790Z",
		"size": 595835,
		"path": "../public/assets/hero-sweet-wide-CybbbKyX.jpg"
	},
	"/assets/star-C7_5D-jp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-ip3V6dXSMumtXzbXCaUadHxIR3o\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 472,
		"path": "../public/assets/star-C7_5D-jp.js"
	},
	"/assets/stock-BRPSEyCi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c2-VG1BrHLR19bFvX/KtQWkYODII0Y\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 962,
		"path": "../public/assets/stock-BRPSEyCi.js"
	},
	"/assets/stocks-D00qkMmz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-6NSr+om0m80ZYoAG/A7zfIiJBw8\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 6226,
		"path": "../public/assets/stocks-D00qkMmz.js"
	},
	"/assets/store-B1OvIZWh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-UxZMUWdW4vSWBORMPcc5A5Gpe6o\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 652,
		"path": "../public/assets/store-B1OvIZWh.js"
	},
	"/assets/sur-mesure-BO23N2z0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"585d-MWXxwZPk31cZLP+KUMSnu1BAgWQ\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 22621,
		"path": "../public/assets/sur-mesure-BO23N2z0.js"
	},
	"/assets/styles-WGDkfrjR.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2a222-F7PO7pP80ADEzAdY09vFM60CyJE\"",
		"mtime": "2026-10-19T17:08:31.792Z",
		"size": 172578,
		"path": "../public/assets/styles-WGDkfrjR.css"
	},
	"/assets/useStock-BYmHD80U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-BgZ5b7NkA6nuCrlF/gTFLaqxrs4\"",
		"mtime": "2026-10-19T17:08:31.736Z",
		"size": 488,
		"path": "../public/assets/useStock-BYmHD80U.js"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-10-19T17:08:31.795Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-10-19T17:08:31.801Z",
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
var _lazy_gmTYTR = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_gmTYTR
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
