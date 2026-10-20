import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as I18nProvider } from "./I18nContext-D9PoE_P1.mjs";
import { t as CartProvider } from "./CartContext-BoTWTco9.mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$21 } from "../_productId-BZ_KWAvj.mjs";
import { L as CircleCheckBig, N as CookingPot, _ as Printer, a as TriangleAlert, f as Shield, g as RefreshCw, h as Search, i as Truck, j as ExternalLink, n as VolumeX, r as Volume2, x as Navigation, y as Phone } from "../_libs/lucide-react.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createSsrRpc } from "./createSsrRpc-FRO4Y-P5.mjs";
import { n as booleanType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as BLOG_ARTICLES } from "./blogArticles-BE30Y8r4.mjs";
import { t as Route$22 } from "../_slug-D9SpbaG7.mjs";
import { t as Route$23 } from "../_token-DWVUZ5lC.mjs";
import { t as generateOrderId } from "./orders-CaaHT_fT.mjs";
import { a as listOrdersFromStore, c as upsertOrder, i as getOrderFromStore, n as claimNextPrintJob, r as getOrderByDeliveryToken, s as updateOrderStatus, t as acknowledgePrint } from "./order-store-0FsFo7Nl.mjs";
import { a as getCheckedFiles, c as getMolliePayment, i as getBancontactProPayment, l as loadAndGetEnv, n as getAllBankKeyCandidates, r as getBancontactProApiKey, s as getMollieApiKey, t as checkoutSchema, u as processCheckout } from "./checkout-service.server-CGx1EGbk.mjs";
import { t as Route$24 } from "./order.success-Dv0UdHuZ.mjs";
import { t as FAQ_ITEMS } from "./FaqNutritionSection-CgtPY2ns.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import crypto from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BJVRKPa3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var styles_default = "/assets/styles-DhJ82U4n.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page introuvable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La page que tu recherches n’existe pas ou a été déplacée."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Un problème est survenu. Tu peux réessayer ou revenir à l’accueil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$20 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Poke N Bowl Visé"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		window.history.scrollRestoration = "manual";
		const resetScroll = () => {
			window.scrollTo(0, 0);
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		};
		resetScroll();
		const frame = window.requestAnimationFrame(resetScroll);
		const frame2 = window.requestAnimationFrame(() => window.requestAnimationFrame(resetScroll));
		return () => {
			window.cancelAnimationFrame(frame);
			window.cancelAnimationFrame(frame2);
		};
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$7 = () => import("./routes-B5BBMXUm.mjs");
var RESTAURANT_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FastFoodRestaurant",
	"name": "Poke N Bowl Visé",
	"image": "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg",
	"telephone": "+32491281456",
	"url": "https://pokenbowl.be",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Avenue du Pont 12",
		"addressLocality": "Visé",
		"postalCode": "4600",
		"addressCountry": "BE"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 50.7333,
		"longitude": 5.6942
	},
	"servesCuisine": [
		"Poké bowl",
		"Fast casual",
		"Asian",
		"Halal"
	],
	"priceRange": "€€",
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "12:00",
			"closes": "14:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "17:00",
			"closes": "21:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Saturday"],
			"opens": "18:00",
			"closes": "21:00"
		}
	]
};
var FAQ_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": FAQ_ITEMS.map((item) => ({
		"@type": "Question",
		"name": item.q,
		"acceptedAnswer": {
			"@type": "Answer",
			"text": item.a
		}
	}))
};
var Route$19 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" }, {
			name: "description",
			content: "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon sashimi minute, Crousty Chicken chaud et desserts maison. Commande en ligne ou sur place !"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(RESTAURANT_SCHEMA)
		}, {
			type: "application/ld+json",
			children: JSON.stringify(FAQ_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./checkout-reXc3OH_.mjs");
var Route$18 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./commander-CqeU50cz.mjs");
var Route$17 = createFileRoute("/commander")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./contact-BtgKvkc7.mjs");
var Route$16 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./recrutement-BOmGs-pP.mjs");
var Route$15 = createFileRoute("/recrutement")({
	head: () => ({ meta: [{ title: "Recrutement — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sur-mesure-DXjcDUe9.mjs");
var Route$14 = createFileRoute("/sur-mesure")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./stocks-M9cB6iZC.mjs");
var Route$13 = createFileRoute("/admin/stocks")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$12 = createFileRoute("/api/bancontact-webhook")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const contentType = request.headers.get("content-type") ?? "";
		let paymentId = null;
		if (contentType.includes("application/json")) {
			const body = await request.json();
			paymentId = body.paymentId || body.id || null;
		} else {
			const text = await request.text();
			const params = new URLSearchParams(text);
			paymentId = params.get("paymentId") || params.get("id");
		}
		if (!paymentId) return new Response("Missing payment id", { status: 400 });
		const payment = await getBancontactProPayment(paymentId);
		const orderId = payment.reference;
		if (!orderId) return new Response("OK", { status: 200 });
		const order = await getOrderFromStore(orderId);
		if (!order) return new Response("OK", { status: 200 });
		if (payment.status === "SUCCEEDED") await upsertOrder({
			...order,
			status: "paid",
			molliePaymentId: `bancontact:${paymentId}`
		});
		else if (payment.status === "CANCELLED" || payment.status === "EXPIRED" || payment.status === "FAILED") await upsertOrder({
			...order,
			status: payment.status === "EXPIRED" ? "expired" : "cancelled",
			molliePaymentId: `bancontact:${paymentId}`
		});
		return new Response("OK", { status: 200 });
	} catch (e) {
		console.error("[bancontact-webhook]", e);
		return new Response("Error", { status: 500 });
	}
} } } });
var Route$11 = createFileRoute("/api/bank-status")({ server: { handlers: { GET: async () => {
	loadAndGetEnv();
	const candidates = getAllBankKeyCandidates();
	const bancontactKey = getBancontactProApiKey();
	const mollieKey = getMollieApiKey();
	const results = {
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		bancontactConfigured: Boolean(bancontactKey),
		mollieConfigured: Boolean(mollieKey),
		detectedVariables: candidates.map((c) => ({
			name: c.name,
			masked: c.maskedValue
		})),
		checkedEnvFiles: getCheckedFiles(),
		existingEnvKeys: Object.keys(process.env).filter((k) => !k.startsWith("npm_") && !k.startsWith("NVM_") && !k.startsWith("PASSENGER_") && ![
			"PATH",
			"PWD",
			"SHLVL",
			"_",
			"HOME",
			"USER",
			"SHELL",
			"LOGNAME"
		].includes(k))
	};
	if (mollieKey) try {
		const mRes = await fetch("https://api.mollie.com/v2/methods", { headers: { Authorization: `Bearer ${mollieKey}` } });
		const mData = await mRes.json().catch(() => null);
		results.mollieTest = {
			status: mRes.status,
			ok: mRes.ok,
			methods: mRes.ok && mData?._embedded?.methods ? mData._embedded.methods.map((m) => m.id) : void 0,
			error: !mRes.ok ? mData?.detail || mData?.title || mRes.statusText : void 0
		};
	} catch (e) {
		results.mollieTest = {
			status: 0,
			ok: false,
			error: e?.message ?? String(e)
		};
	}
	if (bancontactKey) {
		const endpoints = [
			{
				name: "Payconiq Prod",
				url: "https://api.payconiq.com/v3/payments"
			},
			{
				name: "Payconiq EXT (Sandbox/Test)",
				url: "https://api.ext.payconiq.com/v3/payments"
			},
			{
				name: "Bancontact Net Prod",
				url: "https://merchant.api.bancontact.net/v3/payments"
			},
			{
				name: "Bancontact Net Preprod (Test)",
				url: "https://merchant.api.preprod.bancontact.net/v3/payments"
			}
		];
		const bancontactTests = [];
		for (const ep of endpoints) try {
			const bRes = await fetch(ep.url, {
				method: "POST",
				headers: {
					Authorization: bancontactKey.toLowerCase().startsWith("bearer ") ? bancontactKey : `Bearer ${bancontactKey}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					amount: 1e3,
					currency: "EUR",
					description: "Test Poke N Bowl",
					reference: "TEST001"
				})
			});
			const bText = await bRes.text().catch(() => "");
			bancontactTests.push({
				name: ep.name,
				endpoint: ep.url,
				status: bRes.status,
				authorized: bRes.status !== 401 && bRes.status !== 403,
				rawResponse: bText.slice(0, 300)
			});
		} catch (e) {
			bancontactTests.push({
				name: ep.name,
				endpoint: ep.url,
				status: 0,
				error: e?.message ?? String(e)
			});
		}
		results.bancontactTest = bancontactTests;
	}
	return new Response(JSON.stringify(results, null, 2), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-store, max-age=0"
		}
	});
} } } });
var Route$10 = createFileRoute("/api/checkout")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		const parsed = checkoutSchema.safeParse(body);
		if (!parsed.success) return new Response(JSON.stringify({
			success: false,
			error: "Les informations de commande sont incomplètes ou invalides.",
			details: parsed.error.flatten()
		}), {
			status: 400,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
		const result = await processCheckout(parsed.data);
		if (result.type === "error") return new Response(JSON.stringify({
			success: false,
			error: result.message
		}), {
			status: 400,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
		return new Response(JSON.stringify({
			success: true,
			...result
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	} catch (error) {
		console.error("[API Checkout] Échec création commande:", error);
		return new Response(JSON.stringify({
			success: false,
			error: error instanceof Error ? error.message : "Erreur serveur pendant la création de commande."
		}), {
			status: 500,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	}
} } } });
var Route$9 = createFileRoute("/api/create-test-order")({ server: { handlers: {
	GET: async () => createHandler(),
	POST: async () => createHandler()
} } });
async function createHandler() {
	try {
		const testId = generateOrderId();
		const deliveryToken = typeof crypto?.randomUUID === "function" ? crypto.randomUUID().replace(/-/g, "") : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
		const testOrder = {
			id: testId,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "paid",
			paymentMethod: "online",
			printStatus: "pending",
			deliveryToken,
			currency: "EUR",
			customer: {
				name: "Jean Dupont (TEST LIVREUR GPS)",
				phone: "+32 499 12 34 56",
				email: "livreur.test@pokenbowl.be",
				fulfillment: "delivery",
				requestedTime: "Dès que possible",
				address: "Avenue Reine Astrid 15",
				postalCode: "4600",
				city: "Visé",
				deliveryFee: 2,
				notes: "Test Waze & Google Maps - Sonner interphone 2B"
			},
			items: [{
				id: "spicy-chicken",
				name: "Spicy Chicken Poké (Grand)",
				price: 15.5,
				quantity: 1,
				toppings: [
					"Avocat",
					"Oignons frits",
					"Sauce Spicy Mayo"
				]
			}, {
				id: "crousty-chicken",
				name: "Crousty Chicken Poké",
				price: 14.5,
				quantity: 1,
				toppings: [
					"Sauce Sésame",
					"Edamame",
					"Cacahuètes"
				]
			}],
			total: 32
		};
		await upsertOrder(testOrder);
		return new Response(JSON.stringify({
			success: true,
			order: testOrder
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	} catch (err) {
		console.error("[create-test-order] Error:", err);
		return new Response(JSON.stringify({
			success: false,
			error: err?.message ?? String(err),
			stack: err?.stack
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	}
}
var Route$8 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const contentType = request.headers.get("content-type") ?? "";
		let paymentId = null;
		if (contentType.includes("application/json")) paymentId = (await request.json()).id ?? null;
		else {
			const text = await request.text();
			paymentId = new URLSearchParams(text).get("id");
		}
		if (!paymentId) return new Response("Missing payment id", { status: 400 });
		const payment = await getMolliePayment(paymentId);
		const orderId = payment.metadata?.orderId;
		if (!orderId) return new Response("OK", { status: 200 });
		const order = await getOrderFromStore(orderId);
		if (!order) return new Response("OK", { status: 200 });
		if (payment.status === "paid") await upsertOrder({
			...order,
			status: "paid",
			molliePaymentId: paymentId
		});
		else if (payment.status === "canceled" || payment.status === "expired" || payment.status === "failed") await upsertOrder({
			...order,
			status: payment.status === "expired" ? "expired" : "cancelled",
			molliePaymentId: paymentId
		});
		return new Response("OK", { status: 200 });
	} catch (e) {
		console.error("[mollie-webhook]", e);
		return new Response("Error", { status: 500 });
	}
} } } });
var Route$7 = createFileRoute("/api/order-status")({ server: { handlers: { GET: async ({ request }) => {
	try {
		const url = new URL(request.url);
		const orderId = (url.searchParams.get("orderId") || url.searchParams.get("id") || "").trim();
		if (!orderId) return new Response(JSON.stringify({
			found: false,
			error: "Identifiant de commande manquant."
		}), {
			status: 400,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
		let order = await getOrderFromStore(orderId);
		if (order?.molliePaymentId && order.status === "pending_payment") if (order.molliePaymentId.startsWith("bancontact:")) {
			const paymentId = order.molliePaymentId.slice(11);
			try {
				const payment = await getBancontactProPayment(paymentId);
				if (payment.status === "SUCCEEDED") {
					order = {
						...order,
						status: "paid"
					};
					await upsertOrder(order);
				} else if (payment.status === "CANCELLED" || payment.status === "EXPIRED" || payment.status === "FAILED" || payment.status === "VOIDED") {
					order = {
						...order,
						status: payment.status === "EXPIRED" ? "expired" : "cancelled"
					};
					await upsertOrder(order);
				}
			} catch {}
		} else try {
			const payment = await getMolliePayment(order.molliePaymentId);
			if (payment.status === "paid") {
				order = {
					...order,
					status: "paid"
				};
				await upsertOrder(order);
			} else if (payment.status === "canceled" || payment.status === "expired" || payment.status === "failed") {
				order = {
					...order,
					status: payment.status === "expired" ? "expired" : "cancelled"
				};
				await upsertOrder(order);
			}
		} catch {}
		if (!order) return new Response(JSON.stringify({ found: false }), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
		return new Response(JSON.stringify({
			found: true,
			order: {
				id: order.id,
				status: order.status,
				paymentMethod: order.paymentMethod,
				total: order.total,
				customer: order.customer,
				items: order.items,
				createdAt: order.createdAt
			}
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	} catch (error) {
		console.error("[API order-status] Erreur:", error);
		return new Response(JSON.stringify({
			found: false,
			error: error instanceof Error ? error.message : "Erreur interne"
		}), {
			status: 500,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	}
} } } });
/**
* GET /api/orders
* Liste les commandes persistées.
*/
var Route$6 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
	const expected = process.env.ADMIN_SECRET;
	if (!expected || request.headers.get("x-admin-secret") !== expected) return new Response("Unauthorized", { status: 401 });
	const orders = await listOrdersFromStore();
	return new Response(JSON.stringify({ orders }), {
		status: 200,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
} } } });
var Route$5 = createFileRoute("/api/pos-orders")({ server: { handlers: {
	GET: async () => {
		try {
			const orders = await listOrdersFromStore(100);
			return new Response(JSON.stringify({
				success: true,
				orders
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err),
				orders: []
			}), {
				status: 200,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		}
	},
	POST: async ({ request }) => {
		try {
			const { orderId, status, printStatus, printError } = await request.json();
			if (!orderId) return new Response(JSON.stringify({
				success: false,
				error: "orderId manquant"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			if (status) await updateOrderStatus(orderId, status);
			if (printStatus) await acknowledgePrint(orderId, printStatus === "printed", printError);
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err)
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var Route$4 = createFileRoute("/api/track-order")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			const token = (new URL(request.url).searchParams.get("token") || "").trim();
			if (!token) return new Response(JSON.stringify({
				found: false,
				error: "Token ou ID manquant."
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
			if (token.toUpperCase().startsWith("TEST")) return new Response(JSON.stringify({
				found: true,
				order: {
					id: "TEST-TICKET",
					deliveryToken: "TEST-TICKET",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					status: "delivering",
					fulfillment: "delivery",
					requestedTime: "Dès que possible",
					customerName: "Jean Dupont (Client Démo)",
					customerPhone: "0499 12 34 56",
					notes: "Sonner à l'interphone 2B",
					address: "Rue Haute 38",
					postalCode: "4600",
					city: "Visé",
					deliveryFee: 2,
					total: 16,
					paymentMethod: "on_site",
					items: [{
						name: "Poké Saumon Classic (Medium)",
						quantity: 1,
						price: 12.5
					}, {
						name: "Boisson Aloe Vera",
						quantity: 1,
						price: 3.5
					}]
				}
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
			const order = await getOrderByDeliveryToken(token);
			if (!order) return new Response(JSON.stringify({
				found: false,
				error: "Commande introuvable pour ce lien."
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
			return new Response(JSON.stringify({
				found: true,
				order: {
					id: order.id,
					deliveryToken: order.deliveryToken,
					createdAt: order.createdAt,
					status: order.status,
					fulfillment: order.customer?.fulfillment ?? "delivery",
					requestedTime: order.customer?.requestedTime ?? "Dès que possible",
					customerName: order.customer?.name ?? "Client",
					customerPhone: order.customer?.phone ?? "",
					notes: order.customer?.notes ?? "",
					address: order.customer?.address ?? "",
					postalCode: order.customer?.postalCode ?? "",
					city: order.customer?.city ?? "",
					deliveryFee: order.customer?.deliveryFee,
					total: Number(order.total || 0),
					paymentMethod: order.paymentMethod,
					items: (order.items || []).map((i) => ({
						name: i.name,
						quantity: i.quantity,
						price: i.price,
						toppings: i.toppings
					}))
				}
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (err) {
			return new Response(JSON.stringify({
				found: false,
				error: err?.message || String(err)
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		}
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const token = (body?.token ?? "").trim();
			const status = body?.status;
			if (!token || !status) return new Response(JSON.stringify({
				success: false,
				error: "Paramètres token ou status manquants."
			}), {
				status: 400,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
			const order = await getOrderByDeliveryToken(token);
			if (!order) return new Response(JSON.stringify({
				success: false,
				error: "Commande introuvable."
			}), {
				status: 404,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
			await updateOrderStatus(order.id, status);
			return new Response(JSON.stringify({
				success: true,
				newStatus: status,
				orderId: order.id
			}), {
				status: 200,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err)
			}), {
				status: 500,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		}
	}
} } });
var $$splitComponentImporter = () => import("./blog-DcSJhVfA.mjs");
var BLOG_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Blog",
	"name": "Le Mag Poké · Poke N Bowl Visé",
	"description": "Guides nutrition, astuces bien-manger et recettes autour du Poké Bowl frais et de la cuisine saine à Visé en Belgique.",
	"url": "https://pokenbowl.be/blog",
	"publisher": {
		"@type": "Organization",
		"name": "Poke N Bowl Visé",
		"url": "https://pokenbowl.be"
	},
	"blogPost": BLOG_ARTICLES.map((article) => ({
		"@type": "BlogPosting",
		"headline": article.title,
		"description": article.summary,
		"datePublished": article.isoDate,
		"url": `https://pokenbowl.be/blog/${article.slug}`,
		"author": {
			"@type": "Person",
			"name": article.author.name
		}
	}))
};
var Route$3 = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Le Mag Poké · Articles, Guides & Nutrition | Poke N Bowl Visé" },
			{
				name: "description",
				content: "Découvrez nos articles et guides exclusifs : composition d'un poké bowl équilibré, bienfaits du saumon et de l'avocat, comparatif chirashi vs poké, et livraison à Visé."
			},
			{
				property: "og:title",
				content: "Le Mag Poké · Poke N Bowl Visé"
			},
			{
				property: "og:description",
				content: "Astuces nutrition, recettes et actualités saines et gourmandes à Visé."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://pokenbowl.be/blog"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(BLOG_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var getPosOrders = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(createSsrRpc("6df01f8264c863e15506dc49e8b2d2a94b806dd823923c9fc73a10634cf60562"));
var setPosOrderStatus = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	status: enumType([
		"pending_payment",
		"paid",
		"awaiting_pickup",
		"awaiting_delivery",
		"preparing",
		"ready",
		"delivering",
		"completed",
		"cancelled"
	])
})).handler(createSsrRpc("d448a7ae3667125e81da09dad6f6dec1c9565eb0f9398367da064dcdf0e9c039"));
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(createSsrRpc("6515ae2b4b334ce5935aaa2290fe5a760aa9de9e4dbd2160f973f92e3ad32045"));
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	origin: stringType().optional()
})).handler(createSsrRpc("ae058d51b0dbcb532d02de73a2c4d7357c52b93b90a304439be634b235fa5013"));
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(createSsrRpc("c9404c0b075a83418748a0c227e03f7d1395bb14f3a6f06bf310f5ce8548a74b"));
createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(createSsrRpc("a3e5772b7bda801cc22b7f7df7f8f1e4e6dfbbed57f002933f5dce0db2f42f5a"));
var DEFAULT_PRINTER_CONFIG = {
	printerIp: "192.168.0.5",
	printerPort: 8043,
	bridgeUrl: "",
	autoPrintKitchen: true,
	autoPrintDelivery: true,
	soundEnabled: true,
	printMode: "epos"
};
function loadPrinterConfig() {
	if (typeof window === "undefined") return DEFAULT_PRINTER_CONFIG;
	try {
		const raw = localStorage.getItem("pnb_printer_config");
		if (raw) {
			const parsed = JSON.parse(raw);
			const safePort = parsed.printerPort && [
				8043,
				80,
				8008,
				443
			].includes(Number(parsed.printerPort)) ? Number(parsed.printerPort) : 8043;
			const cleanConfig = {
				...DEFAULT_PRINTER_CONFIG,
				...parsed,
				printerPort: safePort,
				printMode: "epos"
			};
			if (parsed.printerPort === 9100 || !parsed.printerPort) localStorage.setItem("pnb_printer_config", JSON.stringify(cleanConfig));
			return cleanConfig;
		}
	} catch {}
	return DEFAULT_PRINTER_CONFIG;
}
function savePrinterConfig(config) {
	if (typeof window === "undefined") return;
	const safePort = config.printerPort && [
		8043,
		80,
		8008,
		443
	].includes(Number(config.printerPort)) ? Number(config.printerPort) : 8043;
	const cleanConfig = {
		...config,
		printerPort: safePort,
		printMode: "epos"
	};
	localStorage.setItem("pnb_printer_config", JSON.stringify(cleanConfig));
}
/**
* Nettoyage thermique ASCII sans accents pour éviter tout blocage ou bug de code page Epson
*/
function cleanThermalText(str = "") {
	if (!str) return "";
	return String(str).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/€/g, "EUR").replace(/[’‘`]/g, "'").replace(/[–—]/g, "-").replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[^\x20-\x7E\n\r]/g, "");
}
/**
* Nettoyage et échappement sécurisé des caractères pour le XML ePOS
*/
function escapeXml(str = "") {
	return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
/**
* Enveloppe SOAP standard pour ePOS-Print
*/
function buildEposSoapEnvelope(innerXml) {
	if (innerXml.includes("<s:Envelope") || innerXml.includes("<soap:Envelope")) return innerXml;
	return `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Header>
    <parameter xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <devid>local_printer</devid>
      <timeout>10000</timeout>
    </parameter>
  </s:Header>
  <s:Body>
    ${innerXml.trim()}
  </s:Body>
</s:Envelope>`;
}
/**
* Générateur XML ePOS natif pour le ticket de test (Bouton vert)
*/
function buildEposXmlTest(printerIp) {
	const now = /* @__PURE__ */ new Date();
	const timeStr = now.toLocaleTimeString("fr-BE");
	return `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
  <text align="center" em="true" dw="true" dh="true">POKE N BOWL VISE&#10;</text>
  <text align="center">Rue Haute 38, 4600 Vise&#10;</text>
  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>
  <text align="center" reverse="true" em="true" dw="true" dh="true"> *** TEST IMPRESSION *** &#10;</text>
  <text align="center">==========================================&#10;</text>
  <text align="center">Date : ${escapeXml(now.toLocaleDateString("fr-BE"))} a ${escapeXml(timeStr)}&#10;</text>
  <text align="center">IP Imprimante : ${escapeXml(printerIp)}&#10;</text>
  <text align="center" em="true">Epson TM-m30II Connectee !&#10;</text>
  <text align="center">==========================================&#10;</text>
  <text align="center">Pret pour la prise de commandes.&#10;&#10;</text>
  <text align="center" em="true">SCANNEZ POUR TESTER&#10;</text>
  <symbol type="qrcode_model_2" level="level_m" width="5">https://pokenbowl.be</symbol>
  <feed line="4" />
  <cut type="feed" />
</epos-print>`;
}
/**
* Générateur XML ePOS natif pour le ticket de commande officiel (Cuisine & Livreur)
*/
function buildEposXmlOrder(order, origin = "https://pokenbowl.be") {
	const isDelivery = order.customer.fulfillment === "delivery";
	const dateObj = new Date(order.createdAt);
	const dateStr = dateObj.toLocaleDateString("fr-BE");
	const timeStr = dateObj.toLocaleTimeString("fr-BE", {
		hour: "2-digit",
		minute: "2-digit"
	});
	const safeCustomerName = cleanThermalText(order.customer.name);
	const safeCustomerPhone = cleanThermalText(order.customer.phone);
	const safeAddress = cleanThermalText(order.customer.address || "Non precisee");
	const safeCity = cleanThermalText(`${order.customer.postalCode || ""} ${order.customer.city || ""}`.trim());
	const safeNotes = cleanThermalText(order.customer.notes || "");
	const safeRequestedTime = cleanThermalText(order.customer.requestedTime || "DES QUE POSSIBLE");
	let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;
	xml += `  <text align="center" em="true" dw="true" dh="true">POKE N BOWL VISE&#10;</text>\n`;
	xml += `  <text align="center">Rue Haute 38, 4600 Vise&#10;</text>\n`;
	xml += `  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>\n`;
	xml += `  <text align="center" reverse="true" em="true" dw="true" dh="true"> ${isDelivery ? "*** LIVRAISON ***" : "*** A EMPORTER ***"} &#10;</text>\n`;
	xml += `  <text align="center" reverse="true"> HEURE : ${escapeXml(safeRequestedTime)} &#10;</text>\n`;
	xml += `  <text>&#10;</text>\n`;
	xml += `  <text align="left" em="true" dw="true" dh="true">CMD : ${escapeXml(cleanThermalText(order.id))}&#10;</text>\n`;
	xml += `  <text align="left">Date : ${escapeXml(dateStr)} a ${escapeXml(timeStr)}&#10;</text>\n`;
	xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
	xml += `  <text align="left" em="true">CLIENT :&#10;</text>\n`;
	xml += `  <text align="left">Nom  : ${escapeXml(safeCustomerName)}&#10;</text>\n`;
	xml += `  <text align="left">Tel  : ${escapeXml(safeCustomerPhone)}&#10;</text>\n`;
	if (isDelivery) {
		xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
		xml += `  <text align="left" em="true">ADRESSE LIVRAISON :&#10;</text>\n`;
		xml += `  <text align="left">${escapeXml(safeAddress)}&#10;</text>\n`;
		if (safeCity) xml += `  <text align="left">${escapeXml(safeCity)}&#10;</text>\n`;
	}
	if (safeNotes) {
		xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
		xml += `  <text align="left" reverse="true" em="true"> ! REMARQUE / ALLERGIES ! &#10;</text>\n`;
		xml += `  <text align="left">${escapeXml(safeNotes)}&#10;</text>\n`;
	}
	xml += `  <text align="left">==========================================&#10;</text>\n`;
	xml += `  <text align="left" em="true">ARTICLES COMMANDES :&#10;&#10;</text>\n`;
	for (const item of order.items) {
		const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
		const safeItemName = cleanThermalText(item.name);
		const header = `${item.quantity}x ${safeItemName}`;
		const spaces = Math.max(1, 42 - header.length - itemTotal.length);
		const line = header + " ".repeat(spaces) + itemTotal;
		xml += `  <text align="left" em="true">${escapeXml(line)}&#10;</text>\n`;
		if (item.toppings && item.toppings.length > 0) for (const top of item.toppings) {
			const safeTop = cleanThermalText(top);
			if (safeTop.toLowerCase().startsWith("sans :") || safeTop.toLowerCase().includes("allerg")) xml += `  <text align="left" reverse="true" em="true">  ! ${escapeXml(safeTop)} &#10;</text>\n`;
			else xml += `  <text align="left">  + ${escapeXml(safeTop)}&#10;</text>\n`;
		}
		xml += `  <text>&#10;</text>\n`;
	}
	xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
	if (isDelivery && order.customer.deliveryFee && order.customer.deliveryFee > 0) {
		const feeStr = order.customer.deliveryFee.toFixed(2) + " EUR";
		const feeLine = "Frais de livraison";
		const spaces = Math.max(1, 24 - feeStr.length);
		const line = feeLine + " ".repeat(spaces) + feeStr;
		xml += `  <text align="left">${escapeXml(line)}&#10;</text>\n`;
	}
	xml += `  <text align="left" em="true" dw="true" dh="true">TOTAL : ${escapeXml(order.total.toFixed(2))} EUR&#10;</text>\n`;
	xml += `  <text>&#10;</text>\n`;
	const payLabel = order.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : `[ A REGLER SUR PLACE : ${order.total.toFixed(2)} EUR ]`;
	xml += `  <text align="center" reverse="true" em="true"> ${escapeXml(payLabel)} &#10;</text>\n`;
	xml += `  <text>&#10;</text>\n`;
	{
		const trackToken = order.deliveryToken || order.id;
		const cleanOrigin = origin.replace(/\/$/, "");
		const qrUrl = isDelivery ? `${cleanOrigin}/track/${trackToken}` : cleanOrigin;
		xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
		xml += `  <text align="center" em="true">${isDelivery ? "SCANNEZ POUR GPS LIVREUR" : "SCANNEZ POUR LE SITE WEB"}&#10;</text>\n`;
		xml += `  <text align="center">${isDelivery ? "Waze &amp; Google Maps en 1-clic" : "Menu et informations du restaurant"}&#10;&#10;</text>\n`;
		xml += `  <symbol type="qrcode_model_2" level="level_m" width="5">${escapeXml(qrUrl)}</symbol>\n`;
		xml += `  <text>&#10;</text>\n`;
	}
	xml += `  <text align="center">==========================================&#10;</text>\n`;
	xml += `  <text align="center">Merci pour votre commande !&#10;</text>\n`;
	xml += `  <text align="center">www.pokenbowl.be&#10;</text>\n`;
	xml += `  <feed line="4" />\n`;
	xml += `  <cut type="feed" />\n`;
	xml += `</epos-print>`;
	return xml;
}
/**
* Envoi réseau vers l'imprimante avec fetch + secours XMLHttpRequest
*/
async function sendHttpRequest(url, body, timeoutMs = 4e3) {
	try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "text/xml; charset=utf-8",
				"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
				SOAPAction: "\"\""
			},
			body,
			signal: AbortSignal.timeout(timeoutMs)
		});
		const text = await res.text();
		return {
			ok: res.ok,
			status: res.status,
			text
		};
	} catch (fetchErr) {
		if (typeof XMLHttpRequest !== "undefined") try {
			return await new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.open("POST", url, true);
				xhr.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
				xhr.setRequestHeader("SOAPAction", "\"\"");
				xhr.timeout = timeoutMs;
				xhr.onload = () => resolve({
					ok: xhr.status >= 200 && xhr.status < 300,
					status: xhr.status,
					text: xhr.responseText
				});
				xhr.onerror = () => reject(/* @__PURE__ */ new Error("Erreur réseau / Certificat non approuvé"));
				xhr.ontimeout = () => reject(/* @__PURE__ */ new Error(`Délai d'attente dépassé (${Math.round(timeoutMs / 1e3)}s)`));
				xhr.send(body);
			});
		} catch {}
		throw fetchErr;
	}
}
/**
* Envoie un flux d'impression à l'imprimante Epson :
* ePOS-Print XML direct (HTTP/HTTPS SOAP sur port 8043 ou 8008)
*/
async function sendReceiptToPrinter(payload, config) {
	let xmlContent = "";
	let base64Data = "";
	if (typeof payload === "string") if (payload.trim().startsWith("<")) xmlContent = payload.trim();
	else base64Data = payload;
	else if (payload && typeof payload === "object") {
		xmlContent = payload.xml?.trim() || "";
		base64Data = payload.base64?.trim() || "";
	}
	if (config.bridgeUrl && base64Data) try {
		const bridgeEndpoint = `${config.bridgeUrl.replace(/\/$/, "")}/print`;
		if ((await fetch(bridgeEndpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				printerIp: config.printerIp,
				printerPort: config.printerPort,
				dataBase64: base64Data
			})
		})).ok) return {
			success: true,
			message: "Imprimé avec succès via Print Bridge."
		};
	} catch (err) {
		console.warn("Print Bridge injoignable, essai ePOS-Print direct...", err);
	}
	if (!xmlContent) return {
		success: false,
		message: "Données du ticket invalides : flux ePOS XML manquant."
	};
	const soapEnvelope = buildEposSoapEnvelope(xmlContent);
	const ip = config.printerIp.trim();
	const candidateUrls = [
		`https://${ip}:${config.printerPort && [
			8043,
			80,
			8008,
			443
		].includes(Number(config.printerPort)) ? Number(config.printerPort) : 8043}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}:443/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${ip}:80/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${ip}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`
	];
	const targets = Array.from(new Set(candidateUrls));
	let lastErr = "";
	for (const url of targets) try {
		console.log(`[ePOS] Envoi requête vers ${url}...`);
		const { ok, status, text: resText } = await sendHttpRequest(url, soapEnvelope, 4e3);
		console.log(`[ePOS] Réponse reçue de ${url} (status ${status}):`, resText);
		if (resText.includes("success=\"true\"")) return {
			success: true,
			message: `Ticket imprimé avec succès sur ${ip} !`
		};
		if (ok && resText.includes("<response")) {
			const codeMatch = resText.match(/code="([^"]*)"/);
			const code = codeMatch ? codeMatch[1] : "";
			if (!code || code === "None" || code === "SUCCESS") return {
				success: true,
				message: `Ticket imprimé avec succès sur ${ip} !`
			};
			lastErr = `Code imprimante: ${code}`;
		} else if (!ok) lastErr = `HTTP ${status}`.trim();
	} catch (e) {
		lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (4s)" : e?.message ?? String(e);
		console.warn(`[ePOS] Échec sur ${url}:`, lastErr);
	}
	return {
		success: false,
		message: lastErr.includes("Failed to fetch") || lastErr.includes("NetworkError") || lastErr.includes("Certificat non approuvé") || lastErr.includes("Délai d'attente") ? `Certificat local non autorisé dans Chrome ou imprimante ${config.printerIp} injoignable.` : lastErr
	};
}
/**
* Test rapide d'accessibilité d'une IP pour scanner le réseau
*/
async function probePrinterIp(ip, port = 8043, timeoutMs = 1200) {
	const url = `https://${ip}:${port}/cgi-bin/epos/service.cgi`;
	try {
		await fetch(url, {
			method: "GET",
			mode: "no-cors",
			signal: AbortSignal.timeout(timeoutMs)
		});
		return true;
	} catch (err) {
		return err?.name !== "TimeoutError";
	}
}
/**
* Détection automatique de l'imprimante sur les sous-réseaux locaux usuels
*/
async function scanForPrinterIp(onProgress) {
	for (const ip of [
		"192.168.0.5",
		"192.168.0.2",
		"192.168.0.3",
		"192.168.0.4",
		"192.168.0.6",
		"192.168.0.10",
		"192.168.0.50",
		"192.168.0.100",
		"192.168.1.5",
		"192.168.1.2",
		"192.168.1.10",
		"192.168.1.50",
		"192.168.1.100"
	]) {
		onProgress?.(ip);
		if (await probePrinterIp(ip, 8043, 1e3)) return ip;
	}
	return null;
}
var Route$2 = createFileRoute("/pos/")({ component: PosApplicationPage });
function PosApplicationPage() {
	const [pin, setPin] = (0, import_react.useState)(() => {
		return typeof window !== "undefined" && localStorage.getItem("pnb_pos_pin") || "1234";
	});
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)(false);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedOrder, setSelectedOrder] = (0, import_react.useState)(null);
	const [activePrintOrder, setActivePrintOrder] = (0, import_react.useState)(null);
	const [printQrDataUrl, setPrintQrDataUrl] = (0, import_react.useState)("");
	const [modalQrDataUrl, setModalQrDataUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const token = selectedOrder?.deliveryToken || selectedOrder?.id;
		if (token) {
			const trackUrl = `${typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be"}/track/${token}`;
			import_lib.toDataURL(trackUrl, {
				errorCorrectionLevel: "H",
				margin: 4,
				width: 320,
				color: {
					dark: "#000000",
					light: "#ffffff"
				}
			}).then(setModalQrDataUrl).catch(() => {});
		} else setModalQrDataUrl("");
	}, [selectedOrder]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [config, setConfig] = (0, import_react.useState)(loadPrinterConfig);
	const [printingOrderId, setPrintingOrderId] = (0, import_react.useState)(null);
	const [testingPrinter, setTestingPrinter] = (0, import_react.useState)(false);
	const [printBannerError, setPrintBannerError] = (0, import_react.useState)(null);
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		if (config.printerPort !== 8043) {
			const fixed = {
				...config,
				printerPort: 8043,
				printMode: "epos"
			};
			setConfig(fixed);
			savePrinterConfig(fixed);
		}
	}, [config.printerPort]);
	const getPrintedOrderIds = () => {
		if (typeof window === "undefined") return /* @__PURE__ */ new Set();
		try {
			const raw = localStorage.getItem("pnb_printed_orders");
			if (raw) return new Set(JSON.parse(raw));
		} catch {}
		return /* @__PURE__ */ new Set();
	};
	const markOrderAsPrintedLocally = (id) => {
		if (typeof window === "undefined") return;
		try {
			const ids = getPrintedOrderIds();
			ids.add(id);
			const arr = Array.from(ids).slice(-200);
			localStorage.setItem("pnb_printed_orders", JSON.stringify(arr));
		} catch {}
	};
	(0, import_react.useRef)(/* @__PURE__ */ new Map());
	(0, import_react.useRef)(false);
	const autoPrintInFlight = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const [creatingTestOrder, setCreatingTestOrder] = (0, import_react.useState)(false);
	const handleCreateTestOrder = async () => {
		setCreatingTestOrder(true);
		try {
			const data = await (await fetch("/api/create-test-order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})).json();
			if (!data.success || !data.order) {
				alert("Erreur : " + (data.error ?? "Échec création"));
				return;
			}
			playAlertSound();
			const created = data.order;
			setOrders((prev) => [created, ...prev.filter((o) => o.id !== created.id)]);
			setSelectedOrder(created);
			loadOrders().catch(() => {});
		} catch (e) {
			alert("Erreur lors de la création de la commande test : " + (e?.message ?? String(e)));
		} finally {
			setCreatingTestOrder(false);
		}
	};
	const playAlertSound = () => {
		if (!config.soundEnabled) return;
		try {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (!AudioCtx) return;
			const ctx = new AudioCtx();
			if (ctx.state === "suspended") ctx.resume();
			const playChime = (startTime, freq1, freq2) => {
				const osc1 = ctx.createOscillator();
				const osc2 = ctx.createOscillator();
				const gain = ctx.createGain();
				osc1.type = "triangle";
				osc2.type = "sine";
				osc1.frequency.setValueAtTime(freq1, startTime);
				osc2.frequency.setValueAtTime(freq2, startTime + .12);
				gain.gain.setValueAtTime(.85, startTime);
				gain.gain.exponentialRampToValueAtTime(.01, startTime + .35);
				osc1.connect(gain);
				osc2.connect(gain);
				gain.connect(ctx.destination);
				osc1.start(startTime);
				osc1.stop(startTime + .15);
				osc2.start(startTime + .12);
				osc2.stop(startTime + .38);
			};
			const now = ctx.currentTime;
			playChime(now, 784, 1046.5);
			playChime(now + .42, 784, 1046.5);
			playChime(now + .84, 784, 1046.5);
		} catch (e) {
			console.warn("[POS] Audio non disponible:", e);
		}
	};
	const loadOrders = async () => {
		try {
			let newOrders = null;
			try {
				const resRest = await fetch("/api/pos-orders", {
					headers: { Accept: "application/json" },
					cache: "no-store"
				});
				if (resRest.ok) {
					const json = await resRest.json();
					if (json.success && Array.isArray(json.orders)) newOrders = json.orders;
				}
			} catch (err) {
				console.warn("[POS] Erreur REST /api/pos-orders, fallback RPC:", err);
			}
			if (!newOrders) newOrders = (await getPosOrders({ data: { pin } })).orders;
			const printableStatuses = [
				"paid",
				"awaiting_pickup",
				"awaiting_delivery"
			];
			const printedIds = getPrintedOrderIds();
			const nowMs = Date.now();
			const fourHoursMs = 144e5;
			const newlyPrintable = newOrders.filter((o) => {
				if (!printableStatuses.includes(o.status)) return false;
				if (o.printStatus === "printed") return false;
				if (printedIds.has(o.id)) return false;
				if (autoPrintInFlight.current.has(o.id)) return false;
				const createdAtMs = new Date(o.createdAt).getTime();
				if (!(!isNaN(createdAtMs) && nowMs - createdAtMs < fourHoursMs)) {
					markOrderAsPrintedLocally(o.id);
					return false;
				}
				return true;
			});
			if (newlyPrintable.length > 0) playAlertSound();
			setOrders(newOrders);
			for (const order of newlyPrintable) {
				if (autoPrintInFlight.current.has(order.id)) continue;
				autoPrintInFlight.current.add(order.id);
				(async () => {
					try {
						const res = await handleExecutePrint(order, true);
						if (!res.success) console.warn("[POS Auto-print] ePOS direct non disponible pour", order.id, res.message);
					} catch (err) {
						console.error("[POS Auto-print] Erreur :", err);
					} finally {
						autoPrintInFlight.current.delete(order.id);
					}
				})();
			}
		} catch (e) {
			console.error("[POS] Erreur globale loadOrders:", e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isUnlocked) {
			loadOrders();
			const timer = setInterval(loadOrders, 4e3);
			return () => clearInterval(timer);
		}
	}, [isUnlocked, pin]);
	const handleExecutePrint = async (order, silent = false) => {
		setPrintingOrderId(order.id);
		let result = {
			success: false,
			message: "Erreur inconnue"
		};
		try {
			const res = await sendReceiptToPrinter(buildEposXmlOrder(order, typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be"), config);
			result = res;
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (res.success) {
				markOrderAsPrintedLocally(order.id);
				setPrintBannerError(null);
				setPrintLog((prev) => [{
					time: now,
					msg: `Commande ${order.id} : ticket officiel imprimé sur ${config.printerIp}.`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				if (!silent) alert(`✅ Ticket de caisse commande ${order.id} imprimé avec succès sur l'Epson (${config.printerIp}) !`);
				try {
					await fetch("/api/pos-orders", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							orderId: order.id,
							printStatus: "printed"
						})
					});
				} catch (ackErr) {
					console.warn("[POS] Échec synchronisation ack print:", ackErr);
				}
			} else {
				setPrintLog((prev) => [{
					time: now,
					msg: `Échec commande ${order.id} : ${res.message}`,
					type: "err"
				}, ...prev.slice(0, 30)]);
				setPrintBannerError(`⚠️ L'imprimante Epson (${config.printerIp}) n'a pas répondu. Cliquez sur "Autoriser Chrome" ou vérifiez l'adresse IP.`);
				if (!silent) alert(`⚠️ Impossible d'imprimer sur l'Epson (${config.printerIp}) :\n\n${res.message}\n\n👉 Vérifiez que vous avez bien cliqué sur "Autoriser Chrome" dans l'onglet Paramètres et que l'imprimante est allumée.`);
			}
		} catch (err) {
			console.error("[POS] Erreur handleExecutePrint:", err);
			result = {
				success: false,
				message: err?.message || String(err)
			};
		} finally {
			setPrintingOrderId(null);
		}
		return result;
	};
	const handleManualReprint = async (orderId) => {
		const targetOrder = orders.find((o) => o.id === orderId) || (selectedOrder?.id === orderId ? selectedOrder : null);
		if (!targetOrder) {
			alert("Commande introuvable.");
			return;
		}
		await handleExecutePrint(targetOrder, false);
	};
	const handleUpdateStatus = async (orderId, status) => {
		try {
			try {
				const res = await fetch("/api/pos-orders", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						orderId,
						status
					})
				});
				if (res.ok) {
					if ((await res.json()).success) {
						setOrders((prev) => prev.map((o) => o.id === orderId ? {
							...o,
							status
						} : o));
						if (selectedOrder && selectedOrder.id === orderId) setSelectedOrder((prev) => prev ? {
							...prev,
							status
						} : null);
						loadOrders().catch(() => {});
						return;
					}
				}
			} catch {}
			await setPosOrderStatus({ data: {
				pin,
				orderId,
				status
			} });
			await loadOrders();
			if (selectedOrder && selectedOrder.id === orderId) setSelectedOrder((prev) => prev ? {
				...prev,
				status
			} : null);
		} catch (e) {
			alert("Erreur de mise à jour du statut.");
		}
	};
	const [scanningIp, setScanningIp] = (0, import_react.useState)(false);
	const [scanStatus, setScanStatus] = (0, import_react.useState)(null);
	const handleScanPrinter = async () => {
		if (scanningIp) return;
		setScanningIp(true);
		setScanStatus("Recherche de l'imprimante Epson en cours sur le réseau...");
		try {
			const foundIp = await scanForPrinterIp((testedIp) => {
				setScanStatus(`Test de ${testedIp}...`);
			});
			if (foundIp) {
				const updated = {
					...config,
					printerIp: foundIp
				};
				setConfig(updated);
				savePrinterConfig(updated);
				setScanStatus(`✅ Epson détectée à l'adresse ${foundIp} !`);
				alert(`✅ Imprimante Epson trouvée à l'adresse ${foundIp} !\n\nL'adresse IP a été mise à jour dans la configuration.`);
			} else {
				setScanStatus("Aucune Epson détectée sur les adresses habituelles.");
				alert("Aucune imprimante détectée automatiquement.\n\n💡 Pour vérifier son IP exacte : éteignez l'imprimante, maintenez le bouton FEED enfoncé et rallumez-la : elle imprime une bandelette avec son IP !");
			}
		} catch (e) {
			setScanStatus(`Erreur : ${e?.message}`);
		} finally {
			setScanningIp(false);
		}
	};
	const handleTestPrint = async () => {
		if (testingPrinter) return;
		setTestingPrinter(true);
		setPrintLog((prev) => [{
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
			msg: `Test ePOS vers ${config.printerIp}...`,
			type: "ok"
		}, ...prev.slice(0, 30)]);
		try {
			const res = await sendReceiptToPrinter(buildEposXmlTest(config.printerIp), config);
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (res.success) {
				setPrintBannerError(null);
				setPrintLog((prev) => [{
					time: now,
					msg: `Test ePOS direct REUSSI sur ${config.printerIp} !`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				alert(`✅ Succès ! Le ticket de test est sorti sur votre imprimante Epson (${config.printerIp}).`);
			} else {
				setPrintBannerError(`⚠️ Imprimante (${config.printerIp}) inaccessible : ${res.message}`);
				setPrintLog((prev) => [{
					time: now,
					msg: `Échec du test : ${res.message}`,
					type: "err"
				}, ...prev.slice(0, 30)]);
				alert(`⚠️ Échec de l'impression sur ${config.printerIp} :\n\n${res.message}\n\n👉 Vérifiez que vous avez bien cliqué sur "1. Ouvrir l'autorisation Chrome" ci-dessous pour approuver le certificat local, et que l'imprimante est allumée.`);
			}
		} catch (e) {
			console.error("Erreur test imprimante", e);
			const message = e?.message ?? "Erreur inconnue";
			setPrintLog((prev) => [{
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
				msg: `Erreur du test : ${message}`,
				type: "err"
			}, ...prev.slice(0, 30)]);
			alert(`Erreur test imprimante : ${message}`);
		} finally {
			setTestingPrinter(false);
		}
	};
	if (!isUnlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#2C1D16] flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-[#2C1D16]",
					children: "POKE N BOWL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-[#7a847e] mt-1",
					children: "Accès POS Caisse"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center gap-3",
					children: [
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-4 h-4 rounded-full transition-all ${pinInput.length > i ? "bg-[#ff705f] scale-110" : "bg-black/10"}` }, i))
				}),
				pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-red-500",
					children: "Code PIN incorrect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [
						[
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9
						].map((num) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pinInput.length < 4) {
									const next = pinInput + num;
									setPinInput(next);
									if (next.length === 4) if (next === pin) {
										setIsUnlocked(true);
										setPinError(false);
									} else {
										setPinError(true);
										setTimeout(() => setPinInput(""), 600);
									}
								}
							},
							className: "h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] hover:bg-black/5 active:scale-95 transition",
							children: num
						}, num)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPinInput(""),
							className: "h-16 rounded-2xl bg-black/5 text-sm font-extrabold text-[#7a847e]",
							children: "Effacer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pinInput.length < 4) {
									const next = pinInput + "0";
									setPinInput(next);
									if (next.length === 4) if (next === pin) {
										setIsUnlocked(true);
										setPinError(false);
									} else {
										setPinError(true);
										setTimeout(() => setPinInput(""), 600);
									}
								}
							},
							className: "h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] active:scale-95 transition",
							children: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setIsUnlocked(true);
							},
							className: "h-16 rounded-2xl bg-[#ff705f]/10 text-xs font-black text-[#ff705f]",
							children: "Entrée"
						})
					]
				})
			]
		})
	});
	const newOrdersList = orders.filter((o) => o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery");
	const preparingOrdersList = orders.filter((o) => o.status === "preparing");
	const readyOrdersList = orders.filter((o) => o.status === "ready");
	const deliveringOrdersList = orders.filter((o) => o.status === "delivering");
	orders.filter((o) => o.status === "completed" || o.status === "cancelled");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pos-screen-ui flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#2C1D16]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-3 w-3 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-black tracking-wider text-white",
							children: "POKENBOWL POS"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex rounded-xl bg-black/30 p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("kanban"),
								className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "kanban" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [
									"Commandes en direct (",
									newOrdersList.length + preparingOrdersList.length + readyOrdersList.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("history"),
								className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "history" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: "Historique"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("settings"),
								className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "settings" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: "Imprimante & Paramètres"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								const updated = {
									...config,
									soundEnabled: !config.soundEnabled
								};
								setConfig(updated);
								savePrinterConfig(updated);
							},
							className: `rounded-xl p-2.5 transition ${config.soundEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#6c7d76]"}`,
							title: "Activer/Désactiver son",
							children: config.soundEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: loadOrders,
							className: "rounded-xl bg-white/10 p-2.5 text-white hover:bg-white/20 active:scale-95 transition",
							title: "Rafraîchir",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-5 w-5 ${loading ? "animate-spin" : ""}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://${config.printerIp}:8043/cgi-bin/epos/service.cgi`,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 rounded-xl bg-black/40 hover:bg-black/60 px-3 py-1.5 text-xs font-bold border border-white/10 transition cursor-pointer",
							title: "Cliquez pour autoriser l'imprimante dans Chrome (permet l'impression 100% automatique)",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#98aba3]",
								children: config.printerIp
							})]
						})
					]
				})]
			}),
			printBannerError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 bg-amber-500/20 border-b border-amber-500/40 px-5 py-3 text-xs text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: printBannerError
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://${config.printerIp}:8043/cgi-bin/epos/service.cgi`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-3 py-1.5 rounded-lg text-xs font-black transition shadow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔒 1. Autoriser Chrome" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleTestPrint,
							disabled: testingPrinter,
							className: "inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs font-black transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2. Réessayer" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("settings"),
							className: "underline text-xs text-amber-300 hover:text-white px-2 py-1 font-bold",
							children: "Réglages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPrintBannerError(null),
							className: "rounded-lg bg-black/30 px-2 py-1 text-[10px] font-bold text-amber-200 hover:bg-black/50",
							children: "✕"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 min-h-0 overflow-hidden",
				children: [
					activeTab === "kanban" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 grid-cols-4 gap-3 p-3 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "Nouvelles",
								badgeCount: newOrdersList.length,
								color: "bg-[#ff705f]",
								orders: newOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => handleUpdateStatus(id, "preparing"),
								nextLabel: "Préparer",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookingPot, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "En Cuisine",
								badgeCount: preparingOrdersList.length,
								color: "bg-[#f59e0b]",
								orders: preparingOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => handleUpdateStatus(id, "ready"),
								nextLabel: "Prête",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "Prêtes / Comptoir",
								badgeCount: readyOrdersList.length,
								color: "bg-[#10b981]",
								orders: readyOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => {
									if (orders.find((o) => o.id === id)?.customer.fulfillment === "delivery") handleUpdateStatus(id, "delivering");
									else handleUpdateStatus(id, "completed");
								},
								nextLabel: "Départ Livr. / Remis",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "En Livraison",
								badgeCount: deliveringOrdersList.length,
								color: "bg-[#3b82f6]",
								orders: deliveringOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => handleUpdateStatus(id, "completed"),
								nextLabel: "Livrée",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4" })
							})
						]
					}),
					activeTab === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 p-6 overflow-y-auto space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 bg-white/5 p-4 rounded-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-[#7a847e]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Rechercher par n° de commande, client, téléphone...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "bg-transparent flex-1 text-white placeholder-[#7a847e] outline-none font-bold"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-white/10 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-black/30 text-xs uppercase text-[#8ea39b] font-black",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "N° Commande"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Date / Heure"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Client"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Mode"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Total"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Statut"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Impression"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4 text-right",
											children: "Actions"
										})
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
									className: "divide-y divide-white/5 font-semibold",
									children: orders.filter((o) => o.id.toLowerCase().includes(searchQuery.toLowerCase()) || o.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || o.customer.phone.includes(searchQuery)).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-white/5 transition",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-mono font-bold text-white",
												children: o.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 text-[#8ea39b]",
												children: [
													new Date(o.createdAt).toLocaleDateString("fr-BE"),
													" ",
													new Date(o.createdAt).toLocaleTimeString("fr-BE", {
														hour: "2-digit",
														minute: "2-digit"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: o.customer.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: o.customer.fulfillment === "delivery" ? "Livraison" : "Retrait"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 font-bold text-white",
												children: [o.total.toFixed(2), " €"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white/10 px-3 py-1 text-xs font-black",
													children: o.status
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-1 text-xs font-black ${o.printStatus === "printed" ? "bg-emerald-500/20 text-emerald-300" : o.printStatus === "failed" ? "bg-red-500/20 text-red-300" : "bg-amber-500/20 text-amber-300"}`,
													children: o.printStatus ?? "pending"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 text-right space-x-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setSelectedOrder(o),
													className: "rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black hover:bg-white/20",
													children: "Détail"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleManualReprint(o.id),
													className: "rounded-xl bg-[#ff705f] px-3 py-1.5 text-xs font-black text-white hover:bg-[#ff5a47]",
													children: "Réimprimer"
												})]
											})
										]
									}, o.id))
								})]
							})
						})]
					}),
					activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 min-h-0 w-full overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 pb-48",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl mx-auto space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sticky top-0 z-30 flex items-center justify-between bg-[#0d1a16]/95 backdrop-blur-md py-3 px-4 -mx-4 border-b border-white/10 rounded-2xl shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-black text-white",
										children: "Imprimante Epson TM-m30II"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#8ea39b] mt-0.5",
										children: "Impression thermique directe 80mm & QR Code GPS"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 text-xs font-bold",
											children: "Direct ePOS XML"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 p-6 space-y-4 shadow-lg shadow-amber-500/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-start justify-between gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "bg-amber-500 text-black font-black text-xs px-2 py-0.5 rounded-md",
												children: "ÉTAPE 1"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-black text-amber-200",
												children: "Autoriser la connexion locale dans Chrome"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-amber-200/90 mt-1.5 leading-relaxed",
											children: "Pour que votre tablette puisse communiquer directement avec l'imprimante Epson sans faire apparaître la fenêtre système Android, Chrome doit accepter le certificat de sécurité local :"
										})] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-black/30 p-4 rounded-xl space-y-3 border border-amber-500/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-[#dcdedc] space-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1." }), " Cliquez sur le bouton bleu ci-contre :"] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2." }),
														" Sur l'écran Chrome, cliquez sur ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"Paramètres avancés\"" }),
														" puis ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
															"\"Continuer vers ",
															config.printerIp,
															" (non sécurisé)\""
														] }),
														"."
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3." }), " Revenez ici : l'impression sera alors 100% automatique et instantanée !"] })
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `https://${config.printerIp}:8043/cgi-bin/epos/service.cgi`,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-5 py-3.5 rounded-xl text-xs font-black transition shadow-lg shrink-0 cursor-pointer active:scale-95",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔒 1. Ouvrir l'autorisation Chrome" })]
											})]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-white/20 text-white font-black text-xs px-2 py-0.5 rounded-md",
													children: "ÉTAPE 2"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-black text-white",
													children: "Adresse Réseau de l'Imprimante"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handleScanPrinter,
												disabled: scanningIp,
												className: "rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white px-3 py-1.5 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `w-3.5 h-3.5 ${scanningIp ? "animate-spin text-[#ff705f]" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: scanningIp ? "Recherche..." : "🔍 Détecter l'IP" })]
											})]
										}),
										scanStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-mono p-2.5 rounded-xl bg-black/40 text-emerald-300 border border-emerald-500/20",
											children: scanStatus
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-extrabold uppercase text-[#8ea39b]",
											children: "Adresse IP locale de l'Epson TM-m30II"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: config.printerIp,
												onChange: (e) => {
													const updated = {
														...config,
														printerIp: e.target.value.trim(),
														printerPort: 8043
													};
													setConfig(updated);
													savePrinterConfig(updated);
												},
												className: "flex-1 rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold text-base",
												placeholder: "192.168.0.5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-xs text-[#8ea39b] font-mono shrink-0 flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Port ePOS :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-emerald-400 font-bold",
													children: "8043 (HTTPS Direct)"
												})]
											})]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-black/30 p-3 text-[11px] text-[#8ea39b] leading-relaxed border border-white/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-white",
													children: "💡 Astuce pour vérifier l'IP :"
												}),
												" Éteignez l'imprimante Epson, maintenez le bouton ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "FEED" }),
												" enfoncé et rallumez-la : elle imprime une bandelette avec son adresse IP exacte."
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-white/20 text-white font-black text-xs px-2 py-0.5 rounded-md",
											children: "ÉTAPE 3"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: "Ticket complet automatique"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-black/20 p-4 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-white",
												children: "Un seul ticket complet par nouvelle commande"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#8ea39b] leading-relaxed",
												children: "Le ticket regroupe les informations de préparation et du client : commande, heure demandée, coordonnées, adresse si livraison, articles, suppléments, remarques, total et paiement. Un QR code est imprimé en bas de chaque ticket : suivi GPS pour les livraisons, site du restaurant pour les retraits."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-emerald-300 font-bold",
												children: "L'impression automatique reste activée dès qu'une nouvelle commande admissible est détectée."
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-emerald-500/20 text-emerald-300 font-black text-xs px-2 py-0.5 rounded-md",
													children: "TESTS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-black text-white",
													children: "Tester l'impression réelle"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#8ea39b] leading-relaxed",
											children: [
												"Testez la communication en direct sur l'Epson (",
												config.printerIp,
												") ou simulez une commande complète :"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid sm:grid-cols-2 gap-3 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handleTestPrint,
												disabled: testingPrinter,
												className: "flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 active:scale-95 py-3.5 px-4 text-white font-black text-xs shadow-lg transition cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: `w-4 h-4 ${testingPrinter ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🖨️ Imprimer un Ticket de Test Epson" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: handleCreateTestOrder,
												disabled: creatingTestOrder,
												className: "flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] disabled:opacity-50 active:scale-95 py-3.5 px-4 text-white font-black text-xs shadow-lg shadow-[#ff705f]/25 transition cursor-pointer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧪 Simuler une Commande Complète (GPS)" })
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-black text-white",
										children: "Journal d'impression en direct"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-36 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl border border-white/5",
										children: printLog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[#6c7d76]",
											children: "Aucune impression récente."
										}) : printLog.map((log, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: log.type === "ok" ? "text-emerald-400" : "text-rose-400",
											children: [
												"[",
												log.time,
												"] ",
												log.msg
											]
										}, idx))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-[#ff705f]/40 p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-[#8ea39b]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-white block font-bold",
											children: "Mémoriser les réglages"
										}), "Enregistre l'adresse IP et les préférences sur cette tablette."]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											savePrinterConfig(config);
											alert("✅ Configuration enregistrée avec succès !");
										},
										className: "rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] py-3 px-6 text-white font-black text-sm transition shadow-lg shadow-[#ff705f]/25 active:scale-95 cursor-pointer flex items-center gap-2 shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💾 Enregistrer les Réglages" })
									})]
								})
							]
						})
					})
				]
			}),
			selectedOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-xl rounded-3xl bg-[#142822] border border-white/15 p-6 shadow-2xl space-y-5 text-white max-h-[90vh] overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xl font-black",
								children: selectedOrder.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-[#8ea39b] mt-0.5",
								children: ["Créée à ", new Date(selectedOrder.createdAt).toLocaleTimeString("fr-BE")]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedOrder(null),
								className: "rounded-full bg-white/10 w-9 h-9 flex items-center justify-center text-sm font-black hover:bg-white/20",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-black/30 p-4 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base font-black",
										children: selectedOrder.customer.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${selectedOrder.customer.phone}`,
										className: "flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-xl",
										title: "Appeler le numéro du client",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Client : ", selectedOrder.customer.phone] })]
									})]
								}),
								selectedOrder.customer.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-[#8ea39b] pt-1 border-t border-white/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-white",
										children: selectedOrder.customer.address
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										selectedOrder.customer.postalCode,
										" ",
										selectedOrder.customer.city
									] })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#EADCC9] font-bold",
									children: "Retrait sur place"
								}),
								selectedOrder.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs bg-[#ff705f]/15 border border-[#ff705f]/30 p-2.5 rounded-xl text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note :" }),
										" ",
										selectedOrder.customer.notes
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase text-[#8ea39b]",
									children: "Articles commandés"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "divide-y divide-white/5 bg-black/20 rounded-2xl p-3",
									children: selectedOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "py-2 first:pt-0 last:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between font-bold text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												it.quantity,
												"× ",
												it.name
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(it.price * it.quantity).toFixed(2), " €"] })]
										}), it.toppings && it.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pl-4 text-xs text-[#8ea39b] space-y-0.5 mt-1 border-l border-[#ff705f]/50",
											children: it.toppings.map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: top }, tidx))
										})]
									}, idx))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center pt-2 px-2 font-black text-base",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [selectedOrder.total.toFixed(2), " €"] })]
								})
							]
						}),
						selectedOrder.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#1b322a] border border-white/10 p-4 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-emerald-400",
										children: "GPS & Navigation Livreur"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold",
										children: "1-Clic"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`)}`,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-2.5 text-xs font-black shadow transition active:scale-95",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Google Maps"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://waze.com/ul?q=${encodeURIComponent(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`)}`,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-2.5 text-xs font-black shadow transition active:scale-95",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Waze"]
									})]
								}),
								(selectedOrder.deliveryToken || selectedOrder.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 bg-black/40 p-4 rounded-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-white p-2.5 rounded-xl shadow-lg shrink-0",
										children: modalQrDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: modalQrDataUrl,
											alt: "QR Code GPS Livreur",
											className: "w-36 h-36 block",
											style: { imageRendering: "pixelated" }
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-36 h-36 flex items-center justify-center text-black text-xs font-bold",
											children: "Génération..."
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs space-y-2 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-black text-white text-sm",
												children: "QR Code GPS Haute Précision"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[#8ea39b] text-xs leading-relaxed",
												children: [
													"Scannez ce QR Code avec votre téléphone pour ouvrir instantanément l'itinéraire GPS ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Waze" }),
													" ou ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Google Maps" }),
													" vers :"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-white font-bold bg-white/10 p-2 rounded-xl border border-white/10",
												children: [
													"📍 ",
													selectedOrder.customer.address,
													", ",
													selectedOrder.customer.postalCode,
													" ",
													selectedOrder.customer.city
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-1 flex gap-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: `/track/${selectedOrder.deliveryToken || selectedOrder.id}`,
													target: "_blank",
													rel: "noreferrer",
													className: "inline-flex items-center gap-1.5 bg-[#ff705f] hover:bg-[#ff5a47] text-white px-3 py-2 rounded-xl font-black text-xs transition",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Ouvrir la navigation livreur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
												})
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky bottom-0 z-10 bg-[#142822]/95 backdrop-blur-md pt-3 -mx-6 px-6 -mb-6 pb-5 border-t border-white/10 rounded-b-3xl shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleManualReprint(selectedOrder.id),
								disabled: printingOrderId === selectedOrder.id,
								className: "w-full rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] disabled:opacity-60 text-white py-4 px-4 text-sm font-black transition flex items-center justify-center gap-2 shadow-lg shadow-[#ff705f]/20 active:scale-95 cursor-pointer",
								title: "Lancer l'impression directe du ticket thermique 80mm sur l'Epson TM-m30II",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: `w-5 h-5 ${printingOrderId === selectedOrder.id ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: printingOrderId === selectedOrder.id ? "Impression sur l'Epson..." : "🖨️ Imprimer Ticket Caisse (80mm)" })]
							})
						})
					]
				})
			})
		]
	}) });
}
function KanbanColumn({ title, badgeCount, color, orders, onSelect, onReprint, onNextStatus, nextLabel, nextIcon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-2xl bg-[#142822] border border-white/5 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between p-3.5 border-b border-white/5 bg-black/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-3 h-3 rounded-full ${color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-black tracking-wide text-white",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-black text-white",
				children: badgeCount
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-2.5 space-y-2.5",
			children: orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-32 items-center justify-center text-xs font-bold text-[#62776f]",
				children: "Aucune commande"
			}) : orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: () => onSelect(o),
				className: "rounded-2xl bg-black/40 border border-white/10 p-3.5 shadow hover:border-white/30 transition cursor-pointer space-y-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm font-black text-white",
							children: o.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase text-[#8ea39b]",
							children: o.customer.requestedTime
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-black text-white",
						children: o.customer.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold text-[#8ea39b]",
						children: [
							o.items.reduce((acc, it) => acc + it.quantity, 0),
							" articles · ",
							o.total.toFixed(2),
							" €"
						]
					})] }),
					o.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs bg-[#ff705f]/15 p-2 rounded-xl text-[#ff8e80] line-clamp-1 font-bold",
						children: ["! ", o.customer.notes]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1 flex items-center gap-2 border-t border-white/5",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onReprint(o.id),
							className: "rounded-xl bg-white/10 p-2 text-[#8ea39b] hover:text-white hover:bg-white/20 transition",
							title: "Réimprimer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNextStatus(o.id),
							className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff705f] py-2 text-xs font-black text-white hover:bg-[#ff5a47] active:scale-95 transition",
							children: [nextIcon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nextLabel })]
						})]
					})
				]
			}, o.id))
		})]
	});
}
var ackSchema = objectType({
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().max(500).optional()
});
function authorized$1(request) {
	const expected = process.env.PRINTER_AGENT_SECRET;
	return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}
var Route$1 = createFileRoute("/api/printer/ack")({ server: { handlers: { POST: async ({ request }) => {
	if (!authorized$1(request)) return new Response("Unauthorized", { status: 401 });
	try {
		const data = ackSchema.parse(await request.json());
		await acknowledgePrint(data.orderId, data.success, data.error);
		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
	} catch (error) {
		console.error("[printer-ack]", error);
		return new Response("Invalid printer acknowledgement", { status: 400 });
	}
} } } });
function authorized(request) {
	const expected = process.env.PRINTER_AGENT_SECRET;
	return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}
var Route = createFileRoute("/api/printer/queue")({ server: { handlers: { GET: async ({ request }) => {
	if (!authorized(request)) return new Response("Unauthorized", { status: 401 });
	try {
		const order = await claimNextPrintJob();
		return new Response(JSON.stringify({ job: order ?? null }), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		console.error("[printer-queue]", error);
		return new Response("Printer queue unavailable", { status: 500 });
	}
} } } });
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var CheckoutRoute = Route$18.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$20
});
var CommanderRoute = Route$17.update({
	id: "/commander",
	path: "/commander",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$16.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var RecrutementRoute = Route$15.update({
	id: "/recrutement",
	path: "/recrutement",
	getParentRoute: () => Route$20
});
var SurMesureRoute = Route$14.update({
	id: "/sur-mesure",
	path: "/sur-mesure",
	getParentRoute: () => Route$20
});
var AdminStocksRoute = Route$13.update({
	id: "/admin/stocks",
	path: "/admin/stocks",
	getParentRoute: () => Route$20
});
var ApiBancontactWebhookRoute = Route$12.update({
	id: "/api/bancontact-webhook",
	path: "/api/bancontact-webhook",
	getParentRoute: () => Route$20
});
var ApiBankStatusRoute = Route$11.update({
	id: "/api/bank-status",
	path: "/api/bank-status",
	getParentRoute: () => Route$20
});
var ApiCheckoutRoute = Route$10.update({
	id: "/api/checkout",
	path: "/api/checkout",
	getParentRoute: () => Route$20
});
var ApiCreateTestOrderRoute = Route$9.update({
	id: "/api/create-test-order",
	path: "/api/create-test-order",
	getParentRoute: () => Route$20
});
var ApiMollieWebhookRoute = Route$8.update({
	id: "/api/mollie-webhook",
	path: "/api/mollie-webhook",
	getParentRoute: () => Route$20
});
var ApiOrderStatusRoute = Route$7.update({
	id: "/api/order-status",
	path: "/api/order-status",
	getParentRoute: () => Route$20
});
var ApiOrdersRoute = Route$6.update({
	id: "/api/orders",
	path: "/api/orders",
	getParentRoute: () => Route$20
});
var ApiPosOrdersRoute = Route$5.update({
	id: "/api/pos-orders",
	path: "/api/pos-orders",
	getParentRoute: () => Route$20
});
var ApiTrackOrderRoute = Route$4.update({
	id: "/api/track-order",
	path: "/api/track-order",
	getParentRoute: () => Route$20
});
var BlogIndexRoute = Route$3.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$20
});
var BlogSlugRoute = Route$22.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$20
});
var OrderSuccessRoute = Route$24.update({
	id: "/order/success",
	path: "/order/success",
	getParentRoute: () => Route$20
});
var PosIndexRoute = Route$2.update({
	id: "/pos/",
	path: "/pos/",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	CheckoutRoute,
	CommanderRoute,
	ContactRoute,
	RecrutementRoute,
	SurMesureRoute,
	AdminStocksRoute,
	ApiBancontactWebhookRoute,
	ApiBankStatusRoute,
	ApiCheckoutRoute,
	ApiCreateTestOrderRoute,
	ApiMollieWebhookRoute,
	ApiOrderStatusRoute,
	ApiOrdersRoute,
	ApiPosOrdersRoute,
	ApiTrackOrderRoute,
	BlogSlugRoute,
	OrderSuccessRoute,
	ProductProductIdRoute: Route$21.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$20
	}),
	TrackTokenRoute: Route$23.update({
		id: "/track/$token",
		path: "/track/$token",
		getParentRoute: () => Route$20
	}),
	BlogIndexRoute,
	PosIndexRoute,
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$20
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$20
	})
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
