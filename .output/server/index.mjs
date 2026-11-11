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
	"/favicon-vibrant-bowl.svg": {
		"type": "image/svg+xml",
		"etag": "\"172b-Xk5om5BsZMwLp3yGdUZ0YZX0UJ8\"",
		"mtime": "2026-11-11T16:06:13.674Z",
		"size": 5931,
		"path": "../public/favicon-vibrant-bowl.svg"
	},
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"aef0-VWLMyQiO1+1dNuBhLEH43HREWVc\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 44784,
		"path": "../public/apple-touch-icon.png"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"494d-UxLerUGldwsiOqP7+CcJlktsVbE\"",
		"mtime": "2026-11-11T16:06:13.674Z",
		"size": 18765,
		"path": "../public/favicon.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"172b-Xk5om5BsZMwLp3yGdUZ0YZX0UJ8\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 5931,
		"path": "../public/favicon.svg"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"9b21-YFSBMVsf2GVHZm6DGL6auk3moww\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 39713,
		"path": "../public/logo.png"
	},
	"/favicon-brand-squircle.svg": {
		"type": "image/svg+xml",
		"etag": "\"fb5-IFdPvG9+qcO2g4J73XoIbZ3C2l4\"",
		"mtime": "2026-11-11T16:06:13.674Z",
		"size": 4021,
		"path": "../public/favicon-brand-squircle.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"3c0-qdClvi5Xhi9leWPIZw6rxV9V69s\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 960,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1103e-pxP1GMn93eXsGNkfszg46XW6kBY\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 69694,
		"path": "../public/favicon.ico"
	},
	"/version.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"42-T4mg37eiCRzadZxSDCFx8Ptszgc\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 66,
		"path": "../public/version.txt"
	},
	"/logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"59c-Df8a7OZ1AOBNdEwVWfOUUdISEY8\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 1436,
		"path": "../public/logo.svg"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"e49-qpPgJpHPZ09xrphujLlWeVmMmoQ\"",
		"mtime": "2026-11-11T16:06:13.675Z",
		"size": 3657,
		"path": "../public/sitemap.xml"
	},
	"/assets/BrandLogo-U0RymHuS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df-AFM0zwQFk1IKUZTA9T+ZhEH0Bpg\"",
		"mtime": "2026-11-11T16:06:12.728Z",
		"size": 1503,
		"path": "../public/assets/BrandLogo-U0RymHuS.js"
	},
	"/assets/HoursBanner-Cf88S69K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc1-qXo0GvoYBrRePbSiSxqfMXNfD6o\"",
		"mtime": "2026-11-11T16:06:12.731Z",
		"size": 4033,
		"path": "../public/assets/HoursBanner-Cf88S69K.js"
	},
	"/assets/_productId-Cr7AHHCw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9095-6XUIkuKpnYPZsXxsW24u3B4InbY\"",
		"mtime": "2026-11-11T16:06:12.732Z",
		"size": 37013,
		"path": "../public/assets/_productId-Cr7AHHCw.js"
	},
	"/assets/arrow-left-Dyuwrwe5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-EqY85nk/bXRcgYzfDjTY5T5TqQc\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 165,
		"path": "../public/assets/arrow-left-Dyuwrwe5.js"
	},
	"/assets/_slug-DaNJdcCw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e59-1eCYC48kvphrPZpoPVuUKftHzhw\"",
		"mtime": "2026-11-11T16:06:12.732Z",
		"size": 11865,
		"path": "../public/assets/_slug-DaNJdcCw.js"
	},
	"/assets/_token-D1vL_98p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3065-qSzbFLk13XL4jUSgnTZdOR5keBY\"",
		"mtime": "2026-11-11T16:06:12.733Z",
		"size": 12389,
		"path": "../public/assets/_token-D1vL_98p.js"
	},
	"/assets/CartDrawer-CBCl48TN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140df-w6Tk3vYPwWsT+M9IOQpbRitkEjc\"",
		"mtime": "2026-11-11T16:06:12.731Z",
		"size": 82143,
		"path": "../public/assets/CartDrawer-CBCl48TN.js"
	},
	"/assets/art-crousty-chaud.jpg": {
		"type": "image/jpeg",
		"etag": "\"d156c-ri9bF5uzc+JY/EWLrZXneKT6IJQ\"",
		"mtime": "2026-11-11T16:06:13.709Z",
		"size": 857452,
		"path": "../public/assets/art-crousty-chaud.jpg"
	},
	"/assets/art-guide-vise.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-11-11T16:06:13.705Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise.jpg"
	},
	"/assets/art-guide-vise-TJFaJ8ss.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2a64-BvOt1lQtUPm9+tvhMkYW+lnhiYA\"",
		"mtime": "2026-11-11T16:06:12.753Z",
		"size": 928356,
		"path": "../public/assets/art-guide-vise-TJFaJ8ss.jpg"
	},
	"/assets/art-repas-healthy-eKaeVqbF.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-11-11T16:06:12.755Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy-eKaeVqbF.jpg"
	},
	"/assets/art-crousty-chaud-CRSo9x6W.jpg": {
		"type": "image/jpeg",
		"etag": "\"c914a-EYLAvMqoqW7b06u7xcXbt2RH1os\"",
		"mtime": "2026-11-11T16:06:12.752Z",
		"size": 823626,
		"path": "../public/assets/art-crousty-chaud-CRSo9x6W.jpg"
	},
	"/assets/art-poke-vs-chirashi.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-11-11T16:06:13.708Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi.jpg"
	},
	"/assets/art-poke-vs-chirashi-ANfUYMoL.jpg": {
		"type": "image/jpeg",
		"etag": "\"125872-4s3xIXSsRt7mKx6Cy4PaWH2E6Os\"",
		"mtime": "2026-11-11T16:06:12.754Z",
		"size": 1202290,
		"path": "../public/assets/art-poke-vs-chirashi-ANfUYMoL.jpg"
	},
	"/assets/book-open-wkVtoW8e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-+eTR+mBUG6FgUkjMtbbvh0w+Qjg\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 279,
		"path": "../public/assets/book-open-wkVtoW8e.js"
	},
	"/assets/blog-DYqnzHVj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301c-4o4/vqHqM+armX+xYdfCB43MgiY\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 12316,
		"path": "../public/assets/blog-DYqnzHVj.js"
	},
	"/assets/bowl-gyros.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d3e8-fGfsRrRVp0UZyMBY6zf39Xn4ZZk\"",
		"mtime": "2026-11-11T16:06:13.748Z",
		"size": 185320,
		"path": "../public/assets/bowl-gyros.jpg"
	},
	"/assets/bowl-crousty-blanche-DbHS9siD.jpg": {
		"type": "image/jpeg",
		"etag": "\"6bebf-nSZs/ZfcMhNKWVQYeA0ap4epeto\"",
		"mtime": "2026-11-11T16:06:12.759Z",
		"size": 442047,
		"path": "../public/assets/bowl-crousty-blanche-DbHS9siD.jpg"
	},
	"/assets/bowl-saumon.jpg": {
		"type": "image/jpeg",
		"etag": "\"52b62-lOZer4spqo488GoRD1CS20SUNyg\"",
		"mtime": "2026-11-11T16:06:13.751Z",
		"size": 338786,
		"path": "../public/assets/bowl-saumon.jpg"
	},
	"/assets/bowl-scampi.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-11-11T16:06:13.752Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampi.jpg"
	},
	"/assets/bowl-saumon-DM6umsVA.jpg": {
		"type": "image/jpeg",
		"etag": "\"52b62-lOZer4spqo488GoRD1CS20SUNyg\"",
		"mtime": "2026-11-11T16:06:12.768Z",
		"size": 338786,
		"path": "../public/assets/bowl-saumon-DM6umsVA.jpg"
	},
	"/assets/bowl-crousty-curry-DkYcLRjh.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ad35-tMxX/eBVzmfxQ6teo0Muw0TquHE\"",
		"mtime": "2026-11-11T16:06:12.760Z",
		"size": 437557,
		"path": "../public/assets/bowl-crousty-curry-DkYcLRjh.jpg"
	},
	"/assets/bowl-scampis.jpg": {
		"type": "image/jpeg",
		"etag": "\"4be0b-BT7H6oUL10i1fY2DeX7N1G4fyyY\"",
		"mtime": "2026-11-11T16:06:13.764Z",
		"size": 310795,
		"path": "../public/assets/bowl-scampis.jpg"
	},
	"/assets/art-repas-healthy.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb1f6-lkyPR4ElCBvvV0CfM2HG1LN0Ulg\"",
		"mtime": "2026-11-11T16:06:13.732Z",
		"size": 831990,
		"path": "../public/assets/art-repas-healthy.jpg"
	},
	"/assets/bowl-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-11-11T16:06:13.736Z",
		"size": 851032,
		"path": "../public/assets/bowl-chicken.jpg"
	},
	"/assets/art-saumon-avocat.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-11-11T16:06:13.701Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat.jpg"
	},
	"/assets/art-saumon-avocat-B6OD39KW.jpg": {
		"type": "image/jpeg",
		"etag": "\"d97fb-axDUYvSl22Y0CJ16SVw6HU6LaSQ\"",
		"mtime": "2026-11-11T16:06:12.757Z",
		"size": 890875,
		"path": "../public/assets/art-saumon-avocat-B6OD39KW.jpg"
	},
	"/assets/bowl-crousty-blanche.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfba2-p/9uI+LraL++5GrQGAYlIeOxpoU\"",
		"mtime": "2026-11-11T16:06:13.744Z",
		"size": 850850,
		"path": "../public/assets/bowl-crousty-blanche.jpg"
	},
	"/assets/bowl-crousty-curry.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-11-11T16:06:13.738Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty-curry.jpg"
	},
	"/assets/bowl-crousty.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-11-11T16:06:13.756Z",
		"size": 855170,
		"path": "../public/assets/bowl-crousty.jpg"
	},
	"/assets/bowl-crousty-mix-BNaau8f8.jpg": {
		"type": "image/jpeg",
		"etag": "\"cd8c6-Hq+Qu0KNpIIKuLnvnoqRpIurnkE\"",
		"mtime": "2026-11-11T16:06:12.762Z",
		"size": 841926,
		"path": "../public/assets/bowl-crousty-mix-BNaau8f8.jpg"
	},
	"/assets/bowl-scampis-BPxsXKuI.jpg": {
		"type": "image/jpeg",
		"etag": "\"d3d55-8kRqzdKb6KSafbWx1o/Pd7yodbg\"",
		"mtime": "2026-11-11T16:06:12.769Z",
		"size": 867669,
		"path": "../public/assets/bowl-scampis-BPxsXKuI.jpg"
	},
	"/assets/bowl-spicy-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"f9520-jFBU224PWC6e0XW3P+MueFBkWug\"",
		"mtime": "2026-11-11T16:06:13.779Z",
		"size": 1021216,
		"path": "../public/assets/bowl-spicy-chicken.jpg"
	},
	"/assets/briefcase-business-D93Q2jPt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145-Vd+cHaGY2h869Zj5RN9uigMuZF0\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 325,
		"path": "../public/assets/briefcase-business-D93Q2jPt.js"
	},
	"/assets/checkout-DYDosEt3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c5f-isdvhUhd/jfYhT86K1bvddYKk1M\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 23647,
		"path": "../public/assets/checkout-DYDosEt3.js"
	},
	"/assets/bowl-spicy-chicken-B5NdQDhG.jpg": {
		"type": "image/jpeg",
		"etag": "\"d49d5-yvOLaSdMng+2KTSoeKAlStjjY2A\"",
		"mtime": "2026-11-11T16:06:12.770Z",
		"size": 870869,
		"path": "../public/assets/bowl-spicy-chicken-B5NdQDhG.jpg"
	},
	"/assets/chef-hat-Y59weHxi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-c4Tl5IIcELQ+jUGh2T4KfObJI84\"",
		"mtime": "2026-11-11T16:06:12.747Z",
		"size": 308,
		"path": "../public/assets/chef-hat-Y59weHxi.js"
	},
	"/assets/bowl-sweet-chicken.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-11-11T16:06:13.784Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken.jpg"
	},
	"/assets/bowl-sweet-chicken-T1JJVtIT.jpg": {
		"type": "image/jpeg",
		"etag": "\"cfc58-NzD/zxNOkVlXKLiHGG8dlkJBuA0\"",
		"mtime": "2026-11-11T16:06:12.770Z",
		"size": 851032,
		"path": "../public/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	},
	"/assets/chevron-right-Cnj3luwS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-BbD27G0zey7mC63+RKVbLXsvS60\"",
		"mtime": "2026-11-11T16:06:12.748Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Cnj3luwS.js"
	},
	"/assets/circle-check-BKVHuuRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-TQxO0YxXdneXTt2Ls0r79sJWxUo\"",
		"mtime": "2026-11-11T16:06:12.748Z",
		"size": 178,
		"path": "../public/assets/circle-check-BKVHuuRY.js"
	},
	"/assets/circle-alert-BvofYqlP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-rtVkail/NplzYhskUkdtEtIxZjE\"",
		"mtime": "2026-11-11T16:06:12.748Z",
		"size": 250,
		"path": "../public/assets/circle-alert-BvofYqlP.js"
	},
	"/assets/contact-C4qzhKht.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1271-cEvJWG3RIchL+WkS2g0lvBwIJjw\"",
		"mtime": "2026-11-11T16:06:12.748Z",
		"size": 4721,
		"path": "../public/assets/contact-C4qzhKht.js"
	},
	"/assets/commander-Ds8vngqO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6d1f-VDjUBLIlwjMPhxjs/QFtgZo9F8w\"",
		"mtime": "2026-11-11T16:06:12.748Z",
		"size": 27935,
		"path": "../public/assets/commander-Ds8vngqO.js"
	},
	"/assets/createLucideIcon-Cwt3h4uJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26b0-QL/0llq96fUvti1uSeI/NIWXwnU\"",
		"mtime": "2026-11-11T16:06:12.749Z",
		"size": 9904,
		"path": "../public/assets/createLucideIcon-Cwt3h4uJ.js"
	},
	"/assets/dessert-9PIP1ns9.jpg": {
		"type": "image/jpeg",
		"etag": "\"d822-kPW8+rCCVPZwYCa7Y1iWSvRF7Sc\"",
		"mtime": "2026-11-11T16:06:12.770Z",
		"size": 55330,
		"path": "../public/assets/dessert-9PIP1ns9.jpg"
	},
	"/assets/drink-coca-cola.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0758-MatyKnCcIwi6Ia6Ie9wVV1vsxw0\"",
		"mtime": "2026-11-11T16:06:13.794Z",
		"size": 788312,
		"path": "../public/assets/drink-coca-cola.jpg"
	},
	"/assets/drink-coca-zero.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-11-11T16:06:13.785Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero.jpg"
	},
	"/assets/drink-eau-gazeuse.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce0cc-QUdE+rYuJKpGBu69BopqSlKGqLs\"",
		"mtime": "2026-11-11T16:06:13.788Z",
		"size": 843980,
		"path": "../public/assets/drink-eau-gazeuse.jpg"
	},
	"/assets/drink-eau-plate.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0f9e-mNd7A2/Vr6Wpo/Lf5XkgfXv+dXc\"",
		"mtime": "2026-11-11T16:06:13.801Z",
		"size": 790430,
		"path": "../public/assets/drink-eau-plate.jpg"
	},
	"/assets/drink-coca-cola-CWOKerZY.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0758-MatyKnCcIwi6Ia6Ie9wVV1vsxw0\"",
		"mtime": "2026-11-11T16:06:12.771Z",
		"size": 788312,
		"path": "../public/assets/drink-coca-cola-CWOKerZY.jpg"
	},
	"/assets/drink-fanta-orange.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-11-11T16:06:13.802Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange.jpg"
	},
	"/assets/drink-coca-zero-eyT1b9_N.jpg": {
		"type": "image/jpeg",
		"etag": "\"bde13-/ANkwG+geAOO7dNnfYaI5efF9kE\"",
		"mtime": "2026-11-11T16:06:12.772Z",
		"size": 777747,
		"path": "../public/assets/drink-coca-zero-eyT1b9_N.jpg"
	},
	"/assets/drink-eau-gazeuse-6sOWN-TD.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce0cc-QUdE+rYuJKpGBu69BopqSlKGqLs\"",
		"mtime": "2026-11-11T16:06:12.772Z",
		"size": 843980,
		"path": "../public/assets/drink-eau-gazeuse-6sOWN-TD.jpg"
	},
	"/assets/drink-eau-plate-C5KCvpt5.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0f9e-mNd7A2/Vr6Wpo/Lf5XkgfXv+dXc\"",
		"mtime": "2026-11-11T16:06:12.773Z",
		"size": 790430,
		"path": "../public/assets/drink-eau-plate-C5KCvpt5.jpg"
	},
	"/assets/drink-ice-tea.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb7dc-1BX/cI58hUoTUSRSdmbtWRvNKvc\"",
		"mtime": "2026-11-11T16:06:13.803Z",
		"size": 833500,
		"path": "../public/assets/drink-ice-tea.jpg"
	},
	"/assets/hero-crousty-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"d0c82-siM8QLeIEiLAAiKppouJvN7rsak\"",
		"mtime": "2026-11-11T16:06:13.806Z",
		"size": 855170,
		"path": "../public/assets/hero-crousty-wide.jpg"
	},
	"/assets/drink-fanta-orange-PDmbpAsA.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca7df-JU4Lg/04kowGPPKAd+GzYwlyVkE\"",
		"mtime": "2026-11-11T16:06:12.773Z",
		"size": 829407,
		"path": "../public/assets/drink-fanta-orange-PDmbpAsA.jpg"
	},
	"/assets/drink-ice-tea-DMtxtUDf.jpg": {
		"type": "image/jpeg",
		"etag": "\"cb7dc-1BX/cI58hUoTUSRSdmbtWRvNKvc\"",
		"mtime": "2026-11-11T16:06:12.774Z",
		"size": 833500,
		"path": "../public/assets/drink-ice-tea-DMtxtUDf.jpg"
	},
	"/assets/invariant-BeDuhpwN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"235-rR9gkZqcx7mMWwmrfaH0iWEeehY\"",
		"mtime": "2026-11-11T16:06:12.749Z",
		"size": 565,
		"path": "../public/assets/invariant-BeDuhpwN.js"
	},
	"/assets/link-DNNmk_Uj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c25-diX6fFriyp9wdGo7ft8oMx+GZMw\"",
		"mtime": "2026-11-11T16:06:12.749Z",
		"size": 11301,
		"path": "../public/assets/link-DNNmk_Uj.js"
	},
	"/assets/hero-saumon-clean-wide-CmteSWDC.jpg": {
		"type": "image/jpeg",
		"etag": "\"97b6f-fD3s5WJC/JdK+sTz13anPpjV7w4\"",
		"mtime": "2026-11-11T16:06:12.775Z",
		"size": 621423,
		"path": "../public/assets/hero-saumon-clean-wide-CmteSWDC.jpg"
	},
	"/assets/loader-circle-DWi0hMJw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-bBVf2uXJG5+kJTWo6pq/z0edAfs\"",
		"mtime": "2026-11-11T16:06:12.749Z",
		"size": 144,
		"path": "../public/assets/loader-circle-DWi0hMJw.js"
	},
	"/assets/hero-scampis-wide-JFtZnAiD.jpg": {
		"type": "image/jpeg",
		"etag": "\"b1fdc-dVIjLTfyvCOFQwpWASIAlpmnBmc\"",
		"mtime": "2026-11-11T16:06:12.775Z",
		"size": 729052,
		"path": "../public/assets/hero-scampis-wide-JFtZnAiD.jpg"
	},
	"/assets/opening-hours-oEWS93vw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de4-9qlscZ5XnWmdKFwD8wHFSf7z1rw\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 3556,
		"path": "../public/assets/opening-hours-oEWS93vw.js"
	},
	"/assets/map-pin-CkDOt-0u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-UuocdUg78HthrpGNqfXcFmj2res\"",
		"mtime": "2026-11-11T16:06:12.749Z",
		"size": 259,
		"path": "../public/assets/map-pin-CkDOt-0u.js"
	},
	"/assets/phone-call-HqyBMYkB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a7-Q8/9Wd1nkeC4mvieZas5VUbleYc\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 423,
		"path": "../public/assets/phone-call-HqyBMYkB.js"
	},
	"/assets/order.success-SNfw9oDk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd6d-juJTo1FSEYma4YVPGuNay5NpEYs\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 64877,
		"path": "../public/assets/order.success-SNfw9oDk.js"
	},
	"/assets/index-vPGFNxiY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87c31-fxrM55USk5Sw1iui919gKRQoxuY\"",
		"mtime": "2026-11-11T16:06:12.720Z",
		"size": 556081,
		"path": "../public/assets/index-vPGFNxiY.js"
	},
	"/assets/hero-sweet-wide-CybbbKyX.jpg": {
		"type": "image/jpeg",
		"etag": "\"9177b-eQbq0v0z0PUZmXF/WWha1RidHD4\"",
		"mtime": "2026-11-11T16:06:12.775Z",
		"size": 595835,
		"path": "../public/assets/hero-sweet-wide-CybbbKyX.jpg"
	},
	"/assets/hero-spicy-wide-CgbNmIRt.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2800-urSvGZMNHlUnhX1fdf1ZEauioe4\"",
		"mtime": "2026-11-11T16:06:12.775Z",
		"size": 731136,
		"path": "../public/assets/hero-spicy-wide-CgbNmIRt.jpg"
	},
	"/assets/poke_n_bowl_app_icon_v2_1794126063415.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f1a6-4eMJ191bLx0vs8oPZrGZspx21wI\"",
		"mtime": "2026-11-11T16:06:13.809Z",
		"size": 455078,
		"path": "../public/assets/poke_n_bowl_app_icon_v2_1794126063415.jpg"
	},
	"/assets/recrutement-CYHG8Bkx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec5-pEQam0SvwN7+bHRYx50X/PTiyx4\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 3781,
		"path": "../public/assets/recrutement-CYHG8Bkx.js"
	},
	"/assets/routes-wPwabw4P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"466f4-L88R6AArY+Df3qvzd3JawQinITM\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 288500,
		"path": "../public/assets/routes-wPwabw4P.js"
	},
	"/assets/shopping-bag-CxA4XNWa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"154-JbUqjQN6n0kwSkcKmJv1mXMFwGo\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 340,
		"path": "../public/assets/shopping-bag-CxA4XNWa.js"
	},
	"/assets/shield-check-DPCK8fus.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-jiS8oue31MkJWwQhKwMF6cQty40\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 320,
		"path": "../public/assets/shield-check-DPCK8fus.js"
	},
	"/assets/stock-DLecNBNK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dc-KkL+nwsut/iRcMq7G9heYvnpYWY\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 476,
		"path": "../public/assets/stock-DLecNBNK.js"
	},
	"/assets/stocks-CCxH41d1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1852-S+5D0X9IninICYhuFI+qBJFuHEc\"",
		"mtime": "2026-11-11T16:06:12.751Z",
		"size": 6226,
		"path": "../public/assets/stocks-CCxH41d1.js"
	},
	"/assets/star-D8D0kTfC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d8-lbyIAKoQtDHZqsfy8YSEVppgolY\"",
		"mtime": "2026-11-11T16:06:12.750Z",
		"size": 472,
		"path": "../public/assets/star-D8D0kTfC.js"
	},
	"/assets/store-BT49HRsR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-+Wrrc94xiMI1/N2njGuZqSF+YbM\"",
		"mtime": "2026-11-11T16:06:12.751Z",
		"size": 652,
		"path": "../public/assets/store-BT49HRsR.js"
	},
	"/assets/sur-mesure-B_vvb_3a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7dfb-9xru4pPXiewV+yEHwcdtYY6aD28\"",
		"mtime": "2026-11-11T16:06:12.751Z",
		"size": 32251,
		"path": "../public/assets/sur-mesure-B_vvb_3a.js"
	},
	"/assets/styles-DG890Gas.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"33dc8-hmu6buDIFSyY3QqtnH7RrAevizk\"",
		"mtime": "2026-11-11T16:06:12.776Z",
		"size": 212424,
		"path": "../public/assets/styles-DG890Gas.css"
	},
	"/assets/useStock-CTUpw4XH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"209-BgkFgZGi8AfeXZjhjSj6+A/EI00\"",
		"mtime": "2026-11-11T16:06:12.751Z",
		"size": 521,
		"path": "../public/assets/useStock-CTUpw4XH.js"
	},
	"/assets/tiramisu-nutella-Cq3EXNhL.jpg": {
		"type": "image/jpeg",
		"etag": "\"b3e21-z4hdaY7Tn/ukPVQQVxgaggzbteQ\"",
		"mtime": "2026-11-11T16:06:12.776Z",
		"size": 736801,
		"path": "../public/assets/tiramisu-nutella-Cq3EXNhL.jpg"
	},
	"/assets/tiramisu-speculoos-CUQsAiGk.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2cff-r0Ka031bdqB5wUJuB6wwzxfQcWk\"",
		"mtime": "2026-11-11T16:06:12.777Z",
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
