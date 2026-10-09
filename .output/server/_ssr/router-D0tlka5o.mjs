import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as I18nProvider } from "./I18nContext-D9PoE_P1.mjs";
import { t as CartProvider } from "./CartContext-BoTWTco9.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$13 } from "../_productId-FMM7Qziz.mjs";
import { P as CircleCheckBig, _ as Phone, d as Shield, h as Printer, i as Truck, j as CookingPot, k as ExternalLink, m as RefreshCw, n as VolumeX, p as Search, r as Volume2 } from "../_libs/lucide-react.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DqTMzYH5.mjs";
import { n as booleanType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as Route$14 } from "../_token-8zkbFWIx.mjs";
import { r as getMolliePayment } from "./mollie.server-BK3UfBAZ.mjs";
import { a as listOrdersFromStore, c as upsertOrder, i as getOrderFromStore, n as claimNextPrintJob, t as acknowledgePrint } from "./order-store-4tO4OvTG.mjs";
import { t as Route$15 } from "./order.success-DGzS6tAt.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D0tlka5o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C7Lpa6AF.css";
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
var Route$12 = createRootRouteWithContext()({
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
	const { queryClient } = Route$12.useRouteContext();
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
var $$splitComponentImporter$6 = () => import("./routes-B-Mldj55.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" }, {
		name: "description",
		content: "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon sashimi minute, Crousty Chicken chaud et desserts maison. Commande en ligne ou sur place !"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./checkout-BOwoRE3D.mjs");
var Route$10 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./commander-BXmdiYZi.mjs");
var Route$9 = createFileRoute("/commander")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-ebvlFhhM.mjs");
var Route$8 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./recrutement-BUiTPiiD.mjs");
var Route$7 = createFileRoute("/recrutement")({
	head: () => ({ meta: [{ title: "Recrutement — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sur-mesure-PUGGCNL4.mjs");
var Route$6 = createFileRoute("/sur-mesure")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./stocks-Di4hLRvd.mjs");
var Route$5 = createFileRoute("/admin/stocks")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route$4 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
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
/**
* GET /api/orders
* Liste les commandes persistées.
*/
var Route$3 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
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
var triggerReprint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(createSsrRpc("6515ae2b4b334ce5935aaa2290fe5a760aa9de9e4dbd2160f973f92e3ad32045"));
var getOrderReceipts = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	origin: stringType().optional()
})).handler(createSsrRpc("ae058d51b0dbcb532d02de73a2c4d7357c52b93b90a304439be634b235fa5013"));
var ackPosPrint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(createSsrRpc("c9404c0b075a83418748a0c227e03f7d1395bb14f3a6f06bf310f5ce8548a74b"));
var DEFAULT_PRINTER_CONFIG = {
	printerIp: "192.168.1.100",
	printerPort: 9100,
	bridgeUrl: "http://localhost:3001",
	autoPrintKitchen: true,
	autoPrintDelivery: true,
	soundEnabled: true
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
	try {
		const xml = `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <command>${base64Data}</command>
    </epos-print>
  </s:Body>
</s:Envelope>`;
		const eposUrl = `http://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`;
		const res = await fetch(eposUrl, {
			method: "POST",
			headers: {
				"Content-Type": "text/xml; charset=utf-8",
				"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
				SOAPAction: "\"\""
			},
			body: xml
		});
		if (res.ok) return {
			success: true,
			message: "Imprimé avec succès via Epson ePOS."
		};
		else throw new Error(`Erreur ePOS HTTP ${res.status}`);
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		return {
			success: false,
			message: `Échec d'impression vers ${config.printerIp} : ${msg}. Vérifiez l'adresse IP ou lancez le Print Bridge.`
		};
	}
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
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [config, setConfig] = (0, import_react.useState)(loadPrinterConfig);
	const [printingOrderId, setPrintingOrderId] = (0, import_react.useState)(null);
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	const knownOrderIds = (0, import_react.useRef)(/* @__PURE__ */ new Set());
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
			const newOrders = (await getPosOrders({ data: { pin } })).orders;
			if (knownOrderIds.current.size > 0) {
				if (newOrders.some((o) => !knownOrderIds.current.has(o.id) && (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"))) playAlertSound();
			}
			newOrders.forEach((o) => knownOrderIds.current.add(o.id));
			setOrders(newOrders);
			const pendingPrint = newOrders.find((o) => o.printStatus === "pending" && (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"));
			if (pendingPrint && printingOrderId !== pendingPrint.id) handleExecutePrint(pendingPrint);
		} catch (e) {
			console.error(e);
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
	const handleExecutePrint = async (order) => {
		setPrintingOrderId(order.id);
		try {
			const origin = window.location.origin;
			const receipts = await getOrderReceipts({ data: {
				pin,
				orderId: order.id,
				origin
			} });
			let successCount = 0;
			let errorMsg = "";
			if (config.autoPrintKitchen && receipts.kitchenReceiptB64) {
				const resKitchen = await sendReceiptToPrinter(receipts.kitchenReceiptB64, config);
				if (resKitchen.success) successCount++;
				else errorMsg += `[Cuisine] ${resKitchen.message} `;
			}
			if (config.autoPrintDelivery && receipts.deliveryReceiptB64) {
				const resDelivery = await sendReceiptToPrinter(receipts.deliveryReceiptB64, config);
				if (resDelivery.success) successCount++;
				else errorMsg += `[Livreur] ${resDelivery.message} `;
			}
			const isOk = (config.autoPrintKitchen ? 1 : 0) + (config.autoPrintDelivery ? 1 : 0) === 0 || successCount > 0;
			await ackPosPrint({ data: {
				pin,
				orderId: order.id,
				success: isOk,
				error: errorMsg || void 0
			} });
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (isOk) setPrintLog((prev) => [{
				time: now,
				msg: `Commande ${order.id} imprimée.`,
				type: "ok"
			}, ...prev.slice(0, 30)]);
			else setPrintLog((prev) => [{
				time: now,
				msg: `Échec ${order.id} : ${errorMsg}`,
				type: "err"
			}, ...prev.slice(0, 30)]);
		} catch (err) {
			console.error(err);
			await ackPosPrint({ data: {
				pin,
				orderId: order.id,
				success: false,
				error: err?.message ?? "Erreur inattendue"
			} });
		} finally {
			setPrintingOrderId(null);
			loadOrders();
		}
	};
	const handleManualReprint = async (orderId) => {
		if (!confirm("Voulez-vous réimprimer le ticket de cette commande ?")) return;
		try {
			await triggerReprint({ data: {
				pin,
				orderId
			} });
			await loadOrders();
		} catch (e) {
			alert("Erreur lors de la demande de réimpression.");
		}
	};
	const handleUpdateStatus = async (orderId, status) => {
		try {
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
	const handleTestPrint = async () => {
		const res = await sendReceiptToPrinter(btoa("\x1B@\x1B!\x1BaTEST POKENBOWL\n\nIMPRESSION REUSSIE\n\x1B!\0\x1BdV"), config);
		alert(res.message);
	};
	if (!isUnlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#10251f] flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-[#10251f]",
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
							className: "h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] hover:bg-black/5 active:scale-95 transition",
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
							className: "h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] active:scale-95 transition",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#10251f]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-3 w-3 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d7ff45] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-[#d7ff45]" })]
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
							className: `rounded-xl p-2.5 transition ${config.soundEnabled ? "bg-[#d7ff45]/20 text-[#d7ff45]" : "bg-white/5 text-[#6c7d76]"}`,
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 overflow-hidden",
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
					activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 p-8 max-w-2xl mx-auto overflow-y-auto space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black",
								children: "Configuration Matériel & POS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-black text-[#ff705f]",
										children: "Imprimante Réseau (Epson TM-m30III)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-extrabold uppercase text-[#8ea39b]",
										children: "Adresse IP"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: config.printerIp,
										onChange: (e) => setConfig({
											...config,
											printerIp: e.target.value
										}),
										className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
										placeholder: "192.168.1.100"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-extrabold uppercase text-[#8ea39b]",
										children: "Port TCP ESC/POS"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										value: config.printerPort,
										onChange: (e) => setConfig({
											...config,
											printerPort: Number(e.target.value)
										}),
										className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
										placeholder: "9100"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-extrabold uppercase text-[#8ea39b]",
										children: "URL Print Bridge Local (Optionnel)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: config.bridgeUrl ?? "",
										onChange: (e) => setConfig({
											...config,
											bridgeUrl: e.target.value
										}),
										className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
										placeholder: "http://localhost:3001"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 flex gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												savePrinterConfig(config);
												alert("Configuration enregistrée.");
											},
											className: "flex-1 rounded-xl bg-[#ff705f] py-3 text-white font-black text-sm",
											children: "Enregistrer"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleTestPrint,
											className: "flex-1 rounded-xl bg-white/10 py-3 text-white font-black text-sm hover:bg-white/20",
											children: "Tester l'impression (Test Print)"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-black text-white",
									children: "Journal d'impression direct"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-44 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl",
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
							})
						]
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
										className: "flex items-center gap-1.5 text-xs font-bold text-[#d7ff45] bg-[#d7ff45]/15 px-3 py-1.5 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), selectedOrder.customer.phone]
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
									className: "text-xs text-[#d7ff45] font-bold",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleManualReprint(selectedOrder.id),
								className: "rounded-2xl bg-white/10 py-3.5 text-sm font-black hover:bg-white/20 transition flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-[#ff705f]" }), "Réimprimer Ticket"]
							}), selectedOrder.deliveryToken && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/track/${selectedOrder.deliveryToken}`,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-2xl bg-[#ff705f]/20 text-[#ff705f] py-3.5 text-sm font-black hover:bg-[#ff705f]/30 transition flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" }), "Vue Livreur QR"]
							})]
						})
					]
				})
			})
		]
	});
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
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var CheckoutRoute = Route$10.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$12
});
var CommanderRoute = Route$9.update({
	id: "/commander",
	path: "/commander",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var RecrutementRoute = Route$7.update({
	id: "/recrutement",
	path: "/recrutement",
	getParentRoute: () => Route$12
});
var SurMesureRoute = Route$6.update({
	id: "/sur-mesure",
	path: "/sur-mesure",
	getParentRoute: () => Route$12
});
var AdminStocksRoute = Route$5.update({
	id: "/admin/stocks",
	path: "/admin/stocks",
	getParentRoute: () => Route$12
});
var ApiMollieWebhookRoute = Route$4.update({
	id: "/api/mollie-webhook",
	path: "/api/mollie-webhook",
	getParentRoute: () => Route$12
});
var ApiOrdersRoute = Route$3.update({
	id: "/api/orders",
	path: "/api/orders",
	getParentRoute: () => Route$12
});
var OrderSuccessRoute = Route$15.update({
	id: "/order/success",
	path: "/order/success",
	getParentRoute: () => Route$12
});
var PosIndexRoute = Route$2.update({
	id: "/pos/",
	path: "/pos/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	CheckoutRoute,
	CommanderRoute,
	ContactRoute,
	RecrutementRoute,
	SurMesureRoute,
	AdminStocksRoute,
	ApiMollieWebhookRoute,
	ApiOrdersRoute,
	OrderSuccessRoute,
	ProductProductIdRoute: Route$13.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$12
	}),
	TrackTokenRoute: Route$14.update({
		id: "/track/$token",
		path: "/track/$token",
		getParentRoute: () => Route$12
	}),
	PosIndexRoute,
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$12
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
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
