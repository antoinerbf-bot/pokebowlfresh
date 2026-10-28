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
		"mtime": "2026-10-28T12:09:04.050Z",
		"size": 806,
		"path": "../public/favicon.png"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-10-28T12:09:04.051Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-10-28T12:09:04.050Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"cb-9IMuqvGfMQsqeWkcUF4+86J3su8\"",
		"mtime": "2026-10-28T12:09:04.050Z",
		"size": 203,
		"path": "../public/robots.txt"
	},
	"/version.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"42-T4mg37eiCRzadZxSDCFx8Ptszgc\"",
		"mtime": "2026-10-28T12:09:04.050Z",
		"size": 66,
		"path": "../public/version.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"8c1-t3RYj4XVjqW9lYVU9fSXlJ0sZNk\"",
		"mtime": "2026-10-28T12:09:04.050Z",
		"size": 2241,
		"path": "../public/sitemap.xml"
	},
	"/assets/BrandLogo-CvDJu50B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-WgcjbhEyiWvj+e4h8MR0BU0scW0\"",
		"mtime": "2026-10-28T12:09:03.132Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-CvDJu50B.js"
	},
	"/assets/_productId-C3_9NNax.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"789d-15F2NZtQ09A27bqRhq7T0zqAhy0\"",
		"mtime": "2026-10-28T12:09:03.132Z",
		"size": 30877,
		"path": "../public/assets/_productId-C3_9NNax.js"
	},
	"/assets/CartDrawer-BUwI7av8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"169c1-68xlZtYR1Hqa4yQQPXNL7ejvORQ\"",
		"mtime": "2026-10-28T12:09:03.132Z",
		"size": 92609,
		"path": "../public/assets/CartDrawer-BUwI7av8.js"
	},
	"/assets/arrow-left-BCa9TLr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-nWxtFac0ChgC352ptR1cv95N43M\"",
		"mtime": "2026-10-28T12:09:03.133Z",
		"size": 165,
		"path": "../public/assets/arrow-left-BCa9TLr_.js"
	},
	"/assets/_slug-F0xyZlAP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ebb-cczEEGi72l6NjMP2wvGgx86DLyU\"",
		"mtime": "2026-10-28T12:09:03.132Z",
		"size": 11963,
		"path": "../public/assets/_slug-F0xyZlAP.js"
	},
	"/assets/_token-BG8Og5aF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c41-24yzUpwFFmWI0tcVPgSBb30FJjU\"",
		"mtime": "2026-10-28T12:09:03.133Z",
		"size": 11329,
		"path": "../public/assets/_token-BG8Og5aF.js"
	},
	"/assets/blog-CGJHT5Lb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"303d-6DDed3TFmG1dt1T48Ch3kpD6gVs\"",
		"mtime": "2026-10-28T12:09:03.133Z",
		"size": 12349,
		"path": "../public/assets/blog-CGJHT5Lb.js"
	},
	"/assets/book-open-BhYeDynW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-B6LNN6Z0i0La89fwHusEoFqfikM\"",
		"mtime": "2026-10-28T12:09:03.133Z",
		"size": 279,
		"path": "../public/assets/book-open-BhYeDynW.js"
	},
	"/assets/art-repas-healthy-eKaeVqbF.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-28T12:09:03.164Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy-eKaeVqbF.jpg"
	},
	"/assets/art-crousty-chaud-CRSo9x6W.jpg": {
		"type": "image/jpeg",
		"etag": "\"c914a-EYLAvMqoqW7b06u7xcXbt2RH1os\"",
		"mtime": "2026-10-28T12:09:03.140Z",
		"size": 823626,
		"path": "../public/assets/art-crousty-chaud-CRSo9x6W.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-28T12:09:04.054Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-guide-vise-TJFaJ8ss.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-10-28T12:09:03.145Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise-TJFaJ8ss.jpg"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-10-28T12:09:04.053Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-28T12:09:04.072Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-10-28T12:09:04.055Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/art-saumon-avocat-B6OD39KW.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-10-28T12:09:03.167Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat-B6OD39KW.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-28T12:09:04.073Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/art-poke-vs-chirashi-ANfUYMoL.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-28T12:09:03.150Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi-ANfUYMoL.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-10-28T12:09:04.054Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/bowl-saumon-CRYVYQxR.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-28T12:09:03.174Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon-CRYVYQxR.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"33b41-kmxkI+v19URLzSyHi+mUmIeJmiU\"",
		"mtime": "2026-10-28T12:09:04.081Z",
		"size": 211777,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-28T12:09:04.097Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-10-28T12:09:04.087Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/briefcase-business-DJeAkziv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Icqw7COrVhO91vSmQRwPu6aynHU\"",
		"mtime": "2026-10-28T12:09:03.133Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-DJeAkziv.js"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-10-28T12:09:04.082Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-28T12:09:04.095Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/bowl-scampis-BPxsXKuI.jpg": {
		"type": "image/jpeg",
		"etag": "\"d3d55-8kRqzdKb6KSafbWx1o/Pd7yodbg\"",
		"mtime": "2026-10-28T12:09:03.175Z",
		"size": 867669,
		"path": "../public/assets/bowl-scampis-BPxsXKuI.jpg"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-10-28T12:09:04.074Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-crousty-blanche-BqIaQK1T.jpg": {
		"type": "image/jpeg",
		"etag": "\"c799e-VD7Op4eu5P9ik4j4G+KAxz51YAE\"",
		"mtime": "2026-10-28T12:09:03.170Z",
		"size": 817566,
		"path": "../public/assets/bowl-crousty-blanche-BqIaQK1T.jpg"
	},
	"/assets/check-PxzYpF26.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-IVHi0fxXA1mGTWe6eBid4wsv4HI\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 124,
		"path": "../public/assets/check-PxzYpF26.js"
	},
	"/assets/chef-hat-IZWjPyhx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-k1KEwj7mejlN2UpHkJrvk+PP5qY\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 308,
		"path": "../public/assets/chef-hat-IZWjPyhx.js"
	},
	"/assets/chevron-right-Cuq8enpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-xE5o3jgKEMoYks6s+zDOB+zqOaM\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cuq8enpP.js"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-28T12:09:03.179Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/circle-check-xE2Wlw9j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-l6OrdSi43cVZdFQoU9pYyzz0x50\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 178,
		"path": "../public/assets/circle-check-xE2Wlw9j.js"
	},
	"/assets/clock-BrBAgSRU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-rTxuSmbLy+eupu13bqHm/UN2F2k\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 169,
		"path": "../public/assets/clock-BrBAgSRU.js"
	},
	"/assets/checkout-Cp2As_Z1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4781-7ZtnhnDkv5ooRGiRuznbhWsIEYE\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 18305,
		"path": "../public/assets/checkout-Cp2As_Z1.js"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-10-28T12:09:04.093Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-10-28T12:09:04.090Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/contact-DDJbQ8iH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1271-07z92HZPLHI+APo3ZTwPgsnOa0o\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 4721,
		"path": "../public/assets/contact-DDJbQ8iH.js"
	},
	"/assets/circle-alert-ClvmKOUA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-2kjAovRoSd1mtrV0pDXgDnuN8MQ\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 250,
		"path": "../public/assets/circle-alert-ClvmKOUA.js"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-28T12:09:04.073Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/commander-B6pNVDmV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4629-8zt9/MXle7Stb4/581DH1eG+Om0\"",
		"mtime": "2026-10-28T12:09:03.134Z",
		"size": 17961,
		"path": "../public/assets/commander-B6pNVDmV.js"
	},
	"/assets/createLucideIcon-zy-1MMUP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e8-LsCvj+F3zoqFkM8XxEZQcRiVaMU\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 9960,
		"path": "../public/assets/createLucideIcon-zy-1MMUP.js"
	},
	"/assets/data-DqG3sNO_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22b1-m7RYsNDPPMoLxsO20J5ANokj42s\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 8881,
		"path": "../public/assets/data-DqG3sNO_.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-10-28T12:09:03.185Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-eau-gazeuse-CayWkPyq.jpg": {
		"type": "image/jpeg",
		"etag": "\"74df4-JOZFiB8pP/Kl6hjKmHuihgnGEng\"",
		"mtime": "2026-10-28T12:09:03.193Z",
		"size": 478708,
		"path": "../public/assets/drink-eau-gazeuse-CayWkPyq.jpg"
	},
	"/assets/drink-fanta-orange-s7Uhokuj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a0-0gRVtbcEE9sNsyP6EaZjlatHrqM\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 160,
		"path": "../public/assets/drink-fanta-orange-s7Uhokuj.js"
	},
	"/assets/drink-eau-plate-B76aUhfx.jpg": {
		"type": "image/jpeg",
		"etag": "\"6d6c9-5xcdzBQyvuwL5Ek2SBrbxBt5HzY\"",
		"mtime": "2026-10-28T12:09:03.196Z",
		"size": 448201,
		"path": "../public/assets/drink-eau-plate-B76aUhfx.jpg"
	},
	"/assets/drink-coca-cola-D83foBG1.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf65a-h2782mDQADKj1mVNTnKPFmSQaZM\"",
		"mtime": "2026-10-28T12:09:03.186Z",
		"size": 783962,
		"path": "../public/assets/drink-coca-cola-D83foBG1.jpg"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-10-28T12:09:03.188Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/link-D0rUQ_ra.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69c7-qOTBB+S12DVHaPFAwntEuA5TjaM\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 27079,
		"path": "../public/assets/link-D0rUQ_ra.js"
	},
	"/assets/map-pin-CM6X10Il.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-L824M/PHpehm0n547HCa7FsPbSM\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 259,
		"path": "../public/assets/map-pin-CM6X10Il.js"
	},
	"/assets/order.success-BZtcQ70g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd8e-rmbemShCOKr5nekaZnZvPa1mp9c\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 64910,
		"path": "../public/assets/order.success-BZtcQ70g.js"
	},
	"/assets/phone-call-ZXsSJdfj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-YM27ZWpj/0zkz4+5eMrDVUv7dJI\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 423,
		"path": "../public/assets/phone-call-ZXsSJdfj.js"
	},
	"/assets/recrutement-BRLEPgmU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-DIfMEg+XdhDWeyuATMGcrDWyqnQ\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 3781,
		"path": "../public/assets/recrutement-BRLEPgmU.js"
	},
	"/assets/redirect-DCb_aIiF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"271-AJO48VqfkUfrNYq6mvZqsvvYRKY\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 625,
		"path": "../public/assets/redirect-DCb_aIiF.js"
	},
	"/assets/routes-BvXv_l81.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40831-127tBON7VK4NFw1oFVT/q/Bv44s\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 264241,
		"path": "../public/assets/routes-BvXv_l81.js"
	},
	"/assets/index-VUxBHBHx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72ebc-WIN2jEi4GeYv9h0evD9znU7CpQM\"",
		"mtime": "2026-10-28T12:09:03.128Z",
		"size": 470716,
		"path": "../public/assets/index-VUxBHBHx.js"
	},
	"/assets/loader-circle-m3U77eaX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-3AqCGdRCnx7R8qYcwhyiEMhIx1I\"",
		"mtime": "2026-10-28T12:09:03.135Z",
		"size": 144,
		"path": "../public/assets/loader-circle-m3U77eaX.js"
	},
	"/assets/hero-saumon-clean-wide-CmteSWDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b6f-fD3s5WJC/JdK+sTz13anPpjV7w4\"",
		"mtime": "2026-10-28T12:09:03.200Z",
		"size": 621423,
		"path": "../public/assets/hero-saumon-clean-wide-CmteSWDC.jpg"
	},
	"/assets/shield-check-qvFTR-Jy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-2ZqGAd62d2xkTCEF7hDEuBAg+do\"",
		"mtime": "2026-10-28T12:09:03.136Z",
		"size": 320,
		"path": "../public/assets/shield-check-qvFTR-Jy.js"
	},
	"/assets/shopping-bag-Zw7p0j3b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-ErUHeGKd58kSqcnv9PPlrFDjltU\"",
		"mtime": "2026-10-28T12:09:03.136Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-Zw7p0j3b.js"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-10-28T12:09:03.197Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/star-C7_5D-jp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-ip3V6dXSMumtXzbXCaUadHxIR3o\"",
		"mtime": "2026-10-28T12:09:03.136Z",
		"size": 472,
		"path": "../public/assets/star-C7_5D-jp.js"
	},
	"/assets/stock-Iew1LpSo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c2-o8E5M0c+97gYjOWNyBeXocwxlF8\"",
		"mtime": "2026-10-28T12:09:03.136Z",
		"size": 962,
		"path": "../public/assets/stock-Iew1LpSo.js"
	},
	"/assets/stocks-DVYO4-1M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-ms0qAeW86lD+AEDU/BlkwfuO5dw\"",
		"mtime": "2026-10-28T12:09:03.137Z",
		"size": 6226,
		"path": "../public/assets/stocks-DVYO4-1M.js"
	},
	"/assets/hero-spicy-wide-B5NdQDhG.jpg": {
		"type": "image/jpeg",
		"etag": "\"d49d5-yvOLaSdMng+2KTSoeKAlStjjY2A\"",
		"mtime": "2026-10-28T12:09:03.201Z",
		"size": 870869,
		"path": "../public/assets/hero-spicy-wide-B5NdQDhG.jpg"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-10-28T12:09:04.093Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/hero-sweet-wide-CybbbKyX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177b-eQbq0v0z0PUZmXF/WWha1RidHD4\"",
		"mtime": "2026-10-28T12:09:03.204Z",
		"size": 595835,
		"path": "../public/assets/hero-sweet-wide-CybbbKyX.jpg"
	},
	"/assets/store-B1OvIZWh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-UxZMUWdW4vSWBORMPcc5A5Gpe6o\"",
		"mtime": "2026-10-28T12:09:03.137Z",
		"size": 652,
		"path": "../public/assets/store-B1OvIZWh.js"
	},
	"/assets/styles-DLR6ucm4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2b42e-1kgJly+EkbbCgMa4sjlSz7XaCwg\"",
		"mtime": "2026-10-28T12:09:03.204Z",
		"size": 177198,
		"path": "../public/assets/styles-DLR6ucm4.css"
	},
	"/assets/sur-mesure-B5_Fe1Uz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"711d-f31Ge1PSUgUomz6AAjyUFvG3zkQ\"",
		"mtime": "2026-10-28T12:09:03.140Z",
		"size": 28957,
		"path": "../public/assets/sur-mesure-B5_Fe1Uz.js"
	},
	"/assets/useStock-BuSVu4Dd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8-dl/ggEZ1Fv7xitJfLXQRI6J8uxo\"",
		"mtime": "2026-10-28T12:09:03.140Z",
		"size": 488,
		"path": "../public/assets/useStock-BuSVu4Dd.js"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-10-28T12:09:03.208Z",
		"size": 732415,
		"path": "../public/assets/tiramisu-speculoos-CUQsAiGk.jpg"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-10-28T12:09:03.204Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
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
var _lazy_G_LDkt = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_G_LDkt
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
