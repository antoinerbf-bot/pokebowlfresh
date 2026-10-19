import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as I18nProvider } from "./I18nContext-D9PoE_P1.mjs";
import { t as CartProvider } from "./CartContext-BoTWTco9.mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$21 } from "../_productId-Cveb8C_O.mjs";
import { L as CircleCheckBig, N as CookingPot, _ as Printer, a as TriangleAlert, f as Shield, g as RefreshCw, h as Search, i as Truck, j as ExternalLink, n as VolumeX, r as Volume2, x as Navigation, y as Phone } from "../_libs/lucide-react.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DJWmS5qJ.mjs";
import { n as booleanType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as BLOG_ARTICLES } from "./blogArticles-BE30Y8r4.mjs";
import { t as Route$22 } from "../_slug-D9SpbaG7.mjs";
import { t as Route$23 } from "../_token-3VEr36o5.mjs";
import { t as generateOrderId } from "./orders-CaaHT_fT.mjs";
import { a as listOrdersFromStore, c as upsertOrder, i as getOrderFromStore, n as claimNextPrintJob, r as getOrderByDeliveryToken, s as updateOrderStatus, t as acknowledgePrint } from "./order-store-0FsFo7Nl.mjs";
import { a as getCheckedFiles, c as getMolliePayment, i as getBancontactProPayment, l as loadAndGetEnv, n as getAllBankKeyCandidates, r as getBancontactProApiKey, s as getMollieApiKey, t as checkoutSchema, u as processCheckout } from "./checkout-service.server-IJA-OeCd.mjs";
import { t as Route$24 } from "./order.success-BR2UEEp7.mjs";
import { i as buildOrderReceipt, t as EscPosBuilder } from "./escpos-DM3KzaqQ.mjs";
import { t as FAQ_ITEMS } from "./FaqNutritionSection-CgtPY2ns.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import crypto from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C5_1gXVC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var styles_default = "/assets/styles-_4ZtNunm.css";
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
var $$splitComponentImporter$7 = () => import("./routes-Bf1oyWQS.mjs");
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
var $$splitComponentImporter$6 = () => import("./checkout-CHFQKvm-.mjs");
var Route$18 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./commander-BHCVEoum.mjs");
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
var $$splitComponentImporter$1 = () => import("./stocks-C_vWILl5.mjs");
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
					customerName: "Test Ticket Caisse (GPS)",
					customerPhone: "0499 00 00 00",
					notes: "Test GPS Waze & Google Maps 1-Clic",
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
		if (raw) return {
			...DEFAULT_PRINTER_CONFIG,
			...JSON.parse(raw)
		};
	} catch {}
	return DEFAULT_PRINTER_CONFIG;
}
function savePrinterConfig(config) {
	if (typeof window === "undefined") return;
	localStorage.setItem("pnb_printer_config", JSON.stringify(config));
}
/**
* Envoie un flux de données binaires à l'imprimante :
* Tente d'abord le Print Bridge si configuré, sinon ePOS-Print direct.
*/
async function sendReceiptToPrinter(base64Data, config) {
	if (config.bridgeUrl) try {
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
		console.warn("Print Bridge injoignable, essai ePOS-Print...", err);
	}
	let commandHex = "";
	try {
		const binary = atob(base64Data);
		for (let i = 0; i < binary.length; i++) commandHex += binary.charCodeAt(i).toString(16).padStart(2, "0");
	} catch {
		return {
			success: false,
			message: "Données du ticket invalides (Base64)."
		};
	}
	const xml = `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <command>${commandHex}</command>
    </epos-print>
  </s:Body>
</s:Envelope>`;
	const port = config.printerPort || 8043;
	typeof window !== "undefined" && window.location.protocol;
	const candidateUrls = [
		`https://${config.printerIp}:${port}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${config.printerIp}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${config.printerIp}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`
	];
	const targets = Array.from(new Set(candidateUrls));
	let lastErr = "";
	for (const url of targets) try {
		if ((await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "text/xml; charset=utf-8",
				"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
				SOAPAction: "\"\""
			},
			body: xml,
			signal: AbortSignal.timeout(5e3)
		})).ok) return {
			success: true,
			message: `Ticket imprimé avec succès sur ${config.printerIp} !`
		};
	} catch (e) {
		lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (5s)" : e?.message ?? String(e);
	}
	const detail = lastErr.includes("Failed to fetch") || lastErr.includes("NetworkError") ? `Certificat non approuvé dans Chrome ou IP (${config.printerIp}) injoignable.` : lastErr;
	return {
		success: false,
		message: `Impossible d'envoyer à l'Epson ${config.printerIp} : ${detail}`
	};
}
function bytesToBase64(bytes) {
	let binary = "";
	const len = bytes.byteLength;
	for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
	return btoa(binary);
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
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	const [printBannerError, setPrintBannerError] = (0, import_react.useState)(null);
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
	const playAlertSound = () => {
		if (!config.soundEnabled) return;
		try {
			const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			const osc = audioCtx.createOscillator();
			const gain = audioCtx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
			osc.frequency.setValueAtTime(880, audioCtx.currentTime + .15);
			gain.gain.setValueAtTime(.3, audioCtx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, audioCtx.currentTime + .4);
			osc.connect(gain);
			gain.connect(audioCtx.destination);
			osc.start();
			osc.stop(audioCtx.currentTime + .45);
		} catch (e) {
			console.warn("Audio non disponible", e);
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
				if (config.printMode === "browser") printThermalTicket(order).finally(() => {
					autoPrintInFlight.current.delete(order.id);
					markOrderAsPrintedLocally(order.id);
				});
				else handleExecutePrint(order, true).finally(() => {
					autoPrintInFlight.current.delete(order.id);
				});
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
		try {
			const origin = typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be";
			let receiptB64 = "";
			try {
				receiptB64 = bytesToBase64(buildOrderReceipt(order, origin));
			} catch (genErr) {
				console.error("[POS] Erreur génération ESC/POS:", genErr);
			}
			if (!receiptB64) throw new Error("Erreur de génération des données binaires du ticket.");
			const res = await sendReceiptToPrinter(receiptB64, config);
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (res.success) {
				markOrderAsPrintedLocally(order.id);
				setPrintBannerError(null);
				setPrintLog((prev) => [{
					time: now,
					msg: `Commande ${order.id} : ticket imprimé (${config.printerIp}).`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				if (!silent) alert(`✅ Ticket de la commande ${order.id} imprimé avec succès sur ${config.printerIp} !`);
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
				if (!silent) alert(`⚠️ Échec de l'envoi à l'Epson (${config.printerIp}) :\n\n${res.message}`);
				else setPrintBannerError(`⚠️ L'imprimante réseau (${config.printerIp}) n'a pas répondu pour la commande ${order.id}. Cliquez sur la commande pour réimprimer.`);
			}
		} catch (err) {
			console.error("[POS] Erreur handleExecutePrint:", err);
		} finally {
			setPrintingOrderId(null);
			loadOrders();
		}
	};
	const handleManualReprint = async (orderId) => {
		const targetOrder = orders.find((o) => o.id === orderId) || (selectedOrder?.id === orderId ? selectedOrder : null);
		if (!targetOrder) {
			alert("Commande introuvable.");
			return;
		}
		await printThermalTicket(targetOrder);
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
	const printThermalTicket = async (order, isTest = false) => {
		if (!order && !isTest) return;
		let qrData = "";
		const token = order?.deliveryToken || order?.id;
		if (token) {
			const trackUrl = `${typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be"}/track/${token}`;
			try {
				qrData = await import_lib.toDataURL(trackUrl, {
					errorCorrectionLevel: "H",
					margin: 4,
					width: 280,
					color: {
						dark: "#000000",
						light: "#ffffff"
					}
				});
			} catch (err) {
				console.warn("QR Code local gen error", err);
			}
		}
		setActivePrintOrder(order);
		setPrintQrDataUrl(qrData);
		const html = isTest ? `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Test Impression - Poke N Bowl</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 10px; font-size: 14px; text-align: center; color: #000; background: #fff; }
    h1 { font-size: 19px; margin: 0 0 4px 0; font-weight: 900; }
    hr { border: none; border-top: 1px dashed #000; margin: 8px 0; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <h1>POKE N BOWL VISE</h1>
  <p>TEST IMPRIMANTE REUSSI</p>
  <hr>
  <p>Date : ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-BE")}</p>
  <p>Epson TM-m30II Connectee !</p>
  <hr>
  <p>Pret pour les commandes.</p>
  <br><br>.
</body>
</html>` : `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ticket Commande ${order?.id}</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 8px; font-size: 13px; color: #000; background: #fff; line-height: 1.3; }
    .center { text-align: center; }
    h1 { font-size: 20px; margin: 0 0 2px 0; font-weight: 900; letter-spacing: 1px; }
    h2 { font-size: 16px; margin: 4px 0; font-weight: 900; }
    .bold { font-weight: bold; }
    hr { border: none; border-top: 1px dashed #000; margin: 6px 0; }
    .item { display: flex; justify-content: space-between; font-weight: bold; margin: 4px 0; }
    .topping { font-size: 11px; padding-left: 10px; color: #222; }
    .qr { margin-top: 10px; text-align: center; }
    .qr img { width: 140px; height: 140px; display: block; margin: 4px auto; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <div class="center">
    <h1>POKE N BOWL</h1>
    <p>Rue Haute 38, 4600 Vise</p>
    <p>Tel: 0491 28 14 56</p>
    <hr>
    <h2>${order?.customer.fulfillment === "delivery" ? "*** TICKET LIVRAISON ***" : "*** TICKET RETRAIT ***"}</h2>
    <p class="bold">COMMANDE : ${order?.id}</p>
    <p>Horaire : ${order?.customer.requestedTime}</p>
  </div>
  <hr>
  <p><span class="bold">Client :</span> ${order?.customer.name}</p>
  <p><span class="bold">Tel    :</span> ${order?.customer.phone}</p>
  ${order?.customer.fulfillment === "delivery" ? `<p><span class="bold">Adresse:</span> ${order.customer.address || ""}</p>
         <p>${order.customer.postalCode || ""} ${order.customer.city || ""}</p>` : ""}
  ${order?.customer.notes ? `<p class="bold">Note   : ${order.customer.notes}</p>` : ""}
  <hr>
  <p class="bold">ARTICLES :</p>
  ${order?.items.map((it) => `
    <div class="item">
      <span>${it.quantity}x ${it.name}</span>
      <span>${(it.price * it.quantity).toFixed(2)} E</span>
    </div>
    ${(it.toppings || []).map((t) => `<div class="topping">+ ${t}</div>`).join("")}
  `).join("")}
  <hr>
  ${order?.customer.deliveryFee ? `<div class="item"><span>Frais de livraison</span><span>${order.customer.deliveryFee.toFixed(2)} EUR</span></div>` : ""}
  <div class="item" style="font-size: 16px; margin-top: 4px;">
    <span>TOTAL :</span>
    <span>${order?.total.toFixed(2)} EUR</span>
  </div>
  <div class="center bold" style="margin-top: 6px;">
    ${order?.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"}
  </div>
  ${qrData ? `
    <hr>
    <div class="qr">
      <p style="font-size: 11px; font-weight: bold; margin: 0 0 2px 0;">SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)</p>
      <img src="${qrData}" alt="QR Code GPS">
      <p style="font-size: 10px; color: #333; margin: 2px 0 0 0;">Itinéraire 1-clic livreur</p>
    </div>
  ` : ""}
  <div class="center" style="margin-top: 10px;">
    <p>Merci pour votre commande !</p>
  </div>
  <br><br>.
</body>
</html>`;
		try {
			const printWindow = window.open("", "_blank", "width=420,height=700");
			if (printWindow) {
				printWindow.document.open();
				printWindow.document.write(html);
				printWindow.document.close();
				printWindow.focus();
				setTimeout(() => {
					printWindow.print();
				}, 300);
				return;
			}
		} catch {}
		setTimeout(() => {
			window.print();
		}, 150);
	};
	const handleTestPrint = async () => {
		if (testingPrinter) return;
		setTestingPrinter(true);
		setPrintLog((prev) => [{
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
			msg: "Test lancé : connexion à l’imprimante…",
			type: "err"
		}, ...prev.slice(0, 30)]);
		try {
			const b = new EscPosBuilder();
			b.align("center").bold(true).doubleSize(true).line("POKE N BOWL VISE");
			b.doubleSize(false).bold(false).line("TEST IMPRIMANTE REUSSI");
			b.divider("=");
			b.line(`Date: ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-BE")}`);
			b.line(`IP: ${config.printerIp}`);
			b.line("Epson TM-m30II Connectee !");
			b.divider("=");
			b.line("Pret pour les commandes.");
			b.feed(4).cut(true);
			const res = await sendReceiptToPrinter(b.toBase64(), config);
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (res.success) {
				setPrintLog((prev) => [{
					time: now,
					msg: `Test ePOS direct REUSSI sur ${config.printerIp} !`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				alert("Succes ! Le ticket de test sort sur l'imprimante.");
			} else {
				setPrintLog((prev) => [{
					time: now,
					msg: `Échec du test : ${res.message}`,
					type: "err"
				}, ...prev.slice(0, 30)]);
				alert(`Échec de l'impression directe : ${res.message}\n\nVérifie l'adresse IP et la connexion réseau de l'imprimante.`);
			}
		} catch (e) {
			console.error("Erreur test imprimante", e);
			const message = e?.message ?? "Erreur inconnue";
			setPrintLog((prev) => [{
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
				msg: `Erreur du test : ${message}`,
				type: "err"
			}, ...prev.slice(0, 30)]);
			alert(`Le test d'impression a rencontré une erreur : ${message}`);
		} finally {
			setTestingPrinter(false);
		}
	};
	const handleTestSystemPrint = async () => {
		const dummyOrder = {
			id: "TEST-TICKET",
			deliveryToken: "TEST-TICKET",
			status: "delivering",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			customer: {
				name: "Test Ticket Caisse (GPS)",
				phone: "0499 00 00 00",
				fulfillment: "delivery",
				address: "Rue Haute 38",
				postalCode: "4600",
				city: "Visé",
				deliveryFee: 2,
				notes: "Test GPS Waze & Google Maps 1-Clic",
				requestedTime: "Dès que possible",
				paymentMethod: "on_site"
			},
			items: [{
				name: "Poké Saumon Classic (Medium)",
				quantity: 1,
				price: 12.5,
				toppings: [
					"Avocat",
					"Edamame",
					"Sauce Ponzu"
				]
			}, {
				name: "Boisson Aloe Vera",
				quantity: 1,
				price: 3.5
			}],
			total: 16,
			pinValidated: true
		};
		await printThermalTicket(dummyOrder);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @media print {
          @page {
            size: 80mm auto;
            margin: 0mm;
          }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          .pos-screen-ui {
            display: none !important;
          }
          #thermal-print-area {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 72mm !important;
            margin: 0 auto !important;
            padding: 2mm 1mm !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
        }
      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "thermal-print-area",
			className: "hidden print:block text-black bg-white",
			children: activePrintOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					width: "72mm",
					margin: "0 auto",
					padding: "4mm 0",
					fontFamily: "'Courier New', Courier, monospace",
					fontSize: "12px",
					lineHeight: "1.3"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: "18px",
									fontWeight: "900",
									margin: "0 0 2px 0"
								},
								children: "POKE N BOWL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: { margin: "1px 0" },
								children: "Rue Haute 38, 4600 Vise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: { margin: "1px 0" },
								children: "Tel: 0491 28 14 56"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								borderTop: "1px dashed #000",
								margin: "6px 0"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontSize: "15px",
									fontWeight: "900",
									margin: "4px 0"
								},
								children: activePrintOrder.customer.fulfillment === "delivery" ? "*** LIVRAISON ***" : "*** RETRAIT ***"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: { fontWeight: "bold" },
								children: ["COMMANDE : ", activePrintOrder.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Horaire : ", activePrintOrder.customer.requestedTime] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Client :" }),
						" ",
						activePrintOrder.customer.name
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tel    :" }),
						" ",
						activePrintOrder.customer.phone
					] }),
					activePrintOrder.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Adresse:" }),
						" ",
						activePrintOrder.customer.address
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						activePrintOrder.customer.postalCode,
						" ",
						activePrintOrder.customer.city
					] })] }),
					activePrintOrder.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: { fontWeight: "bold" },
						children: ["Note   : ", activePrintOrder.customer.notes]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { fontWeight: "bold" },
						children: "ARTICLES :"
					}),
					activePrintOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { margin: "3px 0" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								fontWeight: "bold"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								it.quantity,
								"x ",
								it.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(it.price * it.quantity).toFixed(2), " E"] })]
						}), (it.toppings || []).map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								paddingLeft: "10px",
								fontSize: "11px",
								color: "#333"
							},
							children: ["+ ", top]
						}, tidx))]
					}, idx)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					activePrintOrder.customer.deliveryFee ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Frais de livraison" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [activePrintOrder.customer.deliveryFee.toFixed(2), " EUR"] })]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							fontSize: "15px",
							fontWeight: "900",
							marginTop: "4px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TOTAL :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [activePrintOrder.total.toFixed(2), " EUR"] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							textAlign: "center",
							fontWeight: "bold",
							marginTop: "6px"
						},
						children: activePrintOrder.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"
					}),
					printQrDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "10px",
									fontWeight: "bold",
									margin: "0 0 2px 0"
								},
								children: "SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: printQrDataUrl,
								alt: "QR Code GPS",
								style: {
									width: "140px",
									height: "140px",
									display: "block",
									margin: "4px auto"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "9px",
									color: "#333",
									margin: "2px 0 0 0"
								},
								children: "Itinéraire 1-clic livreur"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							textAlign: "center",
							marginTop: "8px"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Merci pour votre commande !" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"."
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl bg-black/40 px-3 py-1.5 text-xs font-bold border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#98aba3]",
									children: config.printerIp
								})]
							})
						]
					})]
				}),
				printBannerError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-amber-500/20 border-b border-amber-500/40 px-5 py-2.5 text-xs text-amber-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: printBannerError })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("settings"),
							className: "underline font-bold text-amber-300 hover:text-white",
							children: "Paramètres & Déblocage Chrome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPrintBannerError(null),
							className: "rounded-lg bg-amber-500/30 px-2 py-1 text-[10px] font-bold text-amber-100 hover:bg-amber-500/50",
							children: "Fermer"
						})]
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
											children: "Configuration Matériel & POS"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#8ea39b] mt-0.5",
											children: "Imprimantes de caisse & réseau"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handleTestSystemPrint,
												className: "rounded-xl bg-white/10 hover:bg-white/20 py-2 px-3 text-white font-bold text-xs transition border border-white/10 flex items-center gap-1.5",
												title: "Imprimer un ticket de test 80mm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: "Test Ticket"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													savePrinterConfig(config);
													alert("✅ Configuration enregistrée avec succès !");
												},
												className: "rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] py-2 px-4 text-white font-black text-xs transition shadow-lg shadow-[#ff705f]/25 active:scale-95 cursor-pointer flex items-center gap-1.5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💾 Enregistrer" })
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-black text-[#ff705f]",
												children: "Mode d'Impression Principal"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-[#8ea39b]",
												children: "Choisissez comment le POS déclenche vos tickets de caisse :"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														const upd = {
															...config,
															printMode: "browser"
														};
														setConfig(upd);
														savePrinterConfig(upd);
													},
													className: `p-4 rounded-xl border text-left transition cursor-pointer ${config.printMode === "browser" ? "bg-[#ff705f]/20 border-[#ff705f] text-white" : "bg-black/30 border-white/10 text-[#8ea39b] hover:border-white/30"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 font-black text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ticket Direct / Boîte Système" })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] mt-1.5 text-[#a5b4ae] leading-snug",
														children: "Format thermique 80mm avec QR Code. Utilise le pilote de l'imprimante (USB ou réseau Mac). Recommandé & infaillible."
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														const upd = {
															...config,
															printMode: "epos"
														};
														setConfig(upd);
														savePrinterConfig(upd);
													},
													className: `p-4 rounded-xl border text-left transition cursor-pointer ${config.printMode !== "browser" ? "bg-[#ff705f]/20 border-[#ff705f] text-white" : "bg-black/30 border-white/10 text-[#8ea39b] hover:border-white/30"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 font-black text-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Réseau direct ePOS XML" })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] mt-1.5 text-[#a5b4ae] leading-snug",
														children: "Envoi silencieux par requête HTTP/HTTPS directe à l'adresse IP de l'Epson."
													})]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-base font-black text-[#ff705f]",
													children: "Adresse Réseau de l'Imprimante"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold",
													children: "Epson TM-m30II"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-amber-500/10 border border-amber-500/30 p-4 space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-amber-300",
														children: "🔒 Étape Chrome : Autoriser le certificat local"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: `https://${config.printerIp}:${config.printerPort || 8043}/cgi-bin/epos/service.cgi`,
														target: "_blank",
														rel: "noreferrer",
														className: "inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-3 py-1.5 rounded-lg text-xs font-black transition shrink-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ouvrir l'autorisation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11px] text-amber-200/90 leading-relaxed",
													children: [
														"Cliquez sur ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Ouvrir l'autorisation\"" }),
														", puis dans l'avertissement Chrome cliquez sur ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Paramètres avancés\"" }),
														" puis ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "\"Continuer vers le site (non sécurisé)\"" }),
														"."
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-3 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-extrabold uppercase text-[#8ea39b]",
														children: "Adresse IP de l'Epson"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: config.printerIp,
														onChange: (e) => setConfig({
															...config,
															printerIp: e.target.value
														}),
														className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
														placeholder: "192.168.0.5"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-extrabold uppercase text-[#8ea39b]",
													children: "Port ePOS"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "number",
													value: config.printerPort,
													onChange: (e) => setConfig({
														...config,
														printerPort: Number(e.target.value)
													}),
													className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
													placeholder: "8043"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-black/30 p-3 text-[11px] text-[#8ea39b] leading-relaxed border border-white/5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-white",
														children: "💡 Trouver l'adresse IP réelle :"
													}),
													" Éteignez l'imprimante, maintenez ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "FEED" }),
													" enfoncé et rallumez-la : elle imprime une bandelette avec son IP."
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: "Tickets à générer"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-3 cursor-pointer p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: config.autoPrintKitchen,
													onChange: (e) => {
														const updated = {
															...config,
															autoPrintKitchen: e.target.checked
														};
														setConfig(updated);
														savePrinterConfig(updated);
													},
													className: "h-4 w-4 rounded accent-[#ff705f]"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-white",
													children: "Ticket Cuisine (Bon de préparation)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-3 cursor-pointer p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: config.autoPrintDelivery,
													onChange: (e) => {
														const updated = {
															...config,
															autoPrintDelivery: e.target.checked
														};
														setConfig(updated);
														savePrinterConfig(updated);
													},
													className: "h-4 w-4 rounded accent-[#ff705f]"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-white",
													children: "Ticket Livreur / Client (Avec QR Code GPS Waze)"
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: "Tests d'Impression"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: handleTestSystemPrint,
												className: "flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 py-3.5 px-4 text-white font-black text-sm border border-white/10 transition cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tester Ticket Démo (80mm)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: handleTestPrint,
												disabled: testingPrinter,
												className: "flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 py-3.5 px-4 text-white font-black text-sm shadow-lg shadow-emerald-900/30 transition-all cursor-pointer disabled:opacity-60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: testingPrinter ? "Test en cours…" : "Tester Réseau ePOS" })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-white",
											children: "Journal d'impression"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-36 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl",
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
												children: "Sauvegarde des réglages"
											}), "Cliquez sur Enregistrer pour mémoriser ces réglages sur ce navigateur."]
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
											className: "flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 px-3 py-1.5 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-[#ff705f]" }), selectedOrder.customer.phone]
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
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Tester la page livreur en direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
													})
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky bottom-0 z-10 bg-[#142822]/95 backdrop-blur-md pt-3 -mx-6 px-6 -mb-6 pb-5 border-t border-white/10 space-y-2 rounded-b-3xl shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => printThermalTicket(selectedOrder),
									className: "w-full rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] text-white py-3.5 px-4 text-sm font-black transition flex items-center justify-center gap-2 shadow-lg shadow-[#ff705f]/20 active:scale-95 cursor-pointer",
									title: "Lancer l'impression directe du ticket thermique 80mm avec QR Code",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🖨️ Imprimer Ticket Caisse (Direct & QR)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => handleExecutePrint(selectedOrder, false),
									disabled: printingOrderId === selectedOrder.id,
									className: "w-full rounded-xl bg-white/10 hover:bg-white/20 text-[#8ea39b] hover:text-white py-2.5 px-3 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer",
									title: `Envoyer le flux ePOS directement à l'adresse IP réseau (${config.printerIp})`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: printingOrderId === selectedOrder.id ? "Envoi ePOS en cours…" : `Option Réseau direct ePOS (${config.printerIp})` })]
								})]
							})
						]
					})
				})
			]
		})
	] });
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
