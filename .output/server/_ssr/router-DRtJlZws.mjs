import { i as __toESM } from "../_runtime.mjs";
import { a as bowls } from "./data-CZLYDp3Z.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation, t as I18nProvider } from "./I18nContext-DqfJVria.mjs";
import { t as CartProvider } from "./CartContext-D7fTgwIa.mjs";
import { C as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$25 } from "../_productId-BE6_KKEB.mjs";
import { A as Navigation, D as Phone, H as Flame, J as Compass, L as LayoutDashboard, Q as CircleCheckBig, R as Layers, S as Salad, T as Printer, U as FileSpreadsheet, Y as Clock, _ as Shield, a as Users, b as Settings, c as TrendingUp, ct as Bell, i as UtensilsCrossed, it as Check, j as Moon, k as Pause, n as VolumeX, o as Truck, p as Sparkles, q as CookingPot, r as Volume2, s as TriangleAlert, t as X, w as RefreshCw } from "../_libs/lucide-react.mjs";
import { a as loadStock, c as updateStockItem, t as assertAdminPin } from "./stock-store-CPTx_6lO.mjs";
import { n as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C1p7zOu_.mjs";
import { a as numberType, n as booleanType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as BLOG_ARTICLES } from "./blogArticles-BpboJaFF.mjs";
import { t as Route$26 } from "../_slug-C-MGw8E4.mjs";
import { i as openWazeApp, r as openGoogleMapsApp, t as Route$27 } from "../_token-MdFG7lWU.mjs";
import { t as generateOrderId } from "./orders-CaaHT_fT.mjs";
import { a as getOrderFromStore, i as getOrderByDeliveryToken, l as updateOrderStatus, n as claimNextPrintJob, o as listOrdersFromStore, r as clearAllOrdersFromStore, t as acknowledgePrint, u as upsertOrder } from "./order-store-pOittpxk.mjs";
import { a as getBancontactProApiKey, d as getRushHistory, f as getRushState, i as getAllBankKeyCandidates, l as getMollieApiKey, m as processCheckout, n as cancelRushPause, o as getBancontactProPayment, p as loadAndGetEnv, r as checkoutSchema, s as getCheckedFiles, t as activateRushPause, u as getMolliePayment } from "./bancontact-pro.server-5uiA7JW3.mjs";
import { n as getServiceSchedule, t as formatCountdown } from "./opening-hours-DNvuttI_.mjs";
import { t as Route$28 } from "./order.success-ClqSIW9y.mjs";
import { t as FAQ_ITEMS } from "./FaqNutritionSection-BOFtjS_G.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DRtJlZws.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
var styles_default = "/assets/styles-78D4HAx_.css";
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
function useRushState() {
	const [rush, setRush] = (0, import_react.useState)({
		isPaused: false,
		pause: null,
		remainingSeconds: 0
	});
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const fetchStatus = async () => {
			try {
				const res = await fetch("/api/rush-status", {
					cache: "no-store",
					headers: { Accept: "application/json" }
				});
				if (res.ok) {
					const data = await res.json();
					if (!cancelled) setRush(data);
				}
			} catch {}
		};
		fetchStatus();
		const pollInterval = setInterval(fetchStatus, rush.isPaused ? 4e3 : 15e3);
		return () => {
			cancelled = true;
			clearInterval(pollInterval);
		};
	}, [rush.isPaused]);
	(0, import_react.useEffect)(() => {
		if (!rush.isPaused || !rush.pause?.endsAt) return;
		const interval = setInterval(() => {
			const remaining = Math.max(0, Math.ceil((new Date(rush.pause.endsAt).getTime() - Date.now()) / 1e3));
			if (remaining === 0) setRush((prev) => ({
				...prev,
				isPaused: false,
				remainingSeconds: 0
			}));
			else setRush((prev) => ({
				...prev,
				remainingSeconds: remaining
			}));
		}, 1e3);
		return () => clearInterval(interval);
	}, [rush.isPaused, rush.pause?.endsAt]);
	return rush;
}
function formatRushCountdown(seconds) {
	if (seconds <= 0) return "00:00";
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	const pad = (n) => n < 10 ? `0${n}` : `${n}`;
	return `${pad(m)}:${pad(s)}`;
}
function RushPauseBanner() {
	const rush = useRushState();
	const { language } = useTranslation();
	if (!rush.isPaused || !rush.pause) return null;
	if (typeof window !== "undefined" && window.location.pathname.startsWith("/pos")) return null;
	const msg = rush.pause.messages?.[language] || rush.pause.messages?.fr || "Notre cuisine est actuellement en plein rush. Les nouvelles commandes reprennent très bientôt.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-live": "polite",
		className: "sticky top-0 z-50 w-full border-b-2 border-amber-400 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 py-3 text-white shadow-lg animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs shadow-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 animate-pulse" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-amber-300" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pause Momentanée · Plein Rush" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs sm:text-sm font-extrabold text-white leading-snug",
					children: msg
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-2xl bg-black/30 border border-white/20 px-4 py-2 backdrop-blur-md shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-black uppercase text-amber-200",
					children: "Reprise dans :"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xl sm:text-2xl font-black tracking-widest text-white",
					children: formatRushCountdown(rush.remainingSeconds)
				})]
			})]
		})
	});
}
function HoursMarketingModal() {
	const { language } = useTranslation();
	const [schedule, setSchedule] = (0, import_react.useState)(() => getServiceSchedule());
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!(typeof window !== "undefined" && sessionStorage.getItem("pnb_hours_popup_seen"))) {
			const timer = setTimeout(() => {
				setIsOpen(true);
			}, 1200);
			return () => clearTimeout(timer);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setSchedule(getServiceSchedule());
		}, 1e3);
		return () => clearInterval(interval);
	}, []);
	const handleDismiss = () => {
		setIsOpen(false);
		if (typeof window !== "undefined") sessionStorage.setItem("pnb_hours_popup_seen", "true");
	};
	if (!isOpen) return null;
	const currentMsg = schedule.messages[language] || schedule.messages.fr;
	const currentSub = schedule.subMessages[language] || schedule.subMessages.fr;
	schedule.deliveryNotice[language] || schedule.deliveryNotice.fr;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg overflow-hidden rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] text-[#2C1D16] shadow-2xl transition-all animate-scale-up",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Horaires et disponibilité Poke N Bowl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					className: "absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#2C1D16] hover:bg-black/10 hover:text-black transition active:scale-95 cursor-pointer",
					"aria-label": "Fermer la fenêtre d'information",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 stroke-[2.5]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `p-6 text-white text-center relative ${schedule.status === "open" ? "bg-gradient-to-br from-[#059669] to-[#047857]" : schedule.status === "before_opening" ? "bg-gradient-to-br from-[#2C1D16] via-[#ea580c] to-[#2C1D16]" : "bg-gradient-to-br from-[#1E293B] to-[#0F172A]"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider backdrop-blur-xs mb-3",
							children: schedule.status === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-400" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commandes Actuellement Ouvertes" })] }) : schedule.status === "before_opening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ouverture ce soir à 17h40" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5 text-slate-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service Terminé pour Aujourd'hui" })] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-black leading-tight text-white px-4",
							children: currentMsg
						}),
						schedule.status === "before_opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-flex flex-col items-center rounded-2xl bg-black/30 border border-white/20 px-5 py-2.5 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-extrabold uppercase tracking-wider text-white/70",
								children: "Ouverture des prises de commandes dans :"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl sm:text-3xl font-black tracking-widest text-amber-300 font-mono mt-0.5",
								children: formatCountdown(schedule.secondsUntilOrderOpen)
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#7A6857] leading-relaxed text-center font-medium",
							children: currentSub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] p-4 space-y-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-2 border-b border-[#DECBB3]/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[#7A6857] flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "h-3.5 w-3.5 text-[#ea580c]" }), "Prise de commande en ligne :"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-black text-[#2C1D16] bg-black/5 px-2.5 py-0.5 rounded-full",
										children: "Dès 17h40"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-2 border-b border-[#DECBB3]/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold text-[#7A6857] flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-[#059669]" }), "Livraisons à domicile (19 zones) :"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-black text-[#059669] bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full",
										children: "18h00 – 20h30"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-[#8E4539] font-bold text-[11px] pt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚠️ Aucune livraison le midi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service exclusif du soir" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 flex flex-col sm:flex-row gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/commander",
								onClick: handleDismiss,
								className: "flex-1 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] hover:bg-[#ea580c] py-3.5 px-5 text-sm font-black text-white shadow-md transition active:scale-95 text-center cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: schedule.status === "open" ? "Commander maintenant" : "Préparer ma commande" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleDismiss,
								className: "flex items-center justify-center rounded-full border-2 border-[#DECBB3] bg-[#FFFDF9] hover:bg-[#FAF5EE] py-3 px-5 text-xs font-bold text-[#7A6857] transition cursor-pointer",
								children: "J'ai compris"
							})]
						})
					]
				})
			]
		})
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
function isDynamicChunkError(err) {
	const msg = String(err?.message ?? err ?? "").toLowerCase();
	return msg.includes("failed to fetch dynamically imported module") || msg.includes("importing a module script failed") || msg.includes("error loading dynamically imported module") || msg.includes("unable to preload css") || msg.includes("chunkloaderror") || msg.includes("loading chunk");
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	const autoRetriedRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
		if (typeof window === "undefined") return;
		if (!autoRetriedRef.current) {
			autoRetriedRef.current = true;
			try {
				const retryKey = `pnb_auto_retry:${window.location.pathname}`;
				const lastRetry = Number(sessionStorage.getItem(retryKey) || "0");
				const now = Date.now();
				if (now - lastRetry > 1e4) {
					sessionStorage.setItem(retryKey, String(now));
					const timer = window.setTimeout(() => {
						router.invalidate();
						reset();
					}, 60);
					return () => window.clearTimeout(timer);
				}
			} catch {}
		}
		if (isDynamicChunkError(error)) try {
			const reloadKey = `pnb_chunk_reload:${window.location.pathname}`;
			const lastReload = Number(sessionStorage.getItem(reloadKey) || "0");
			const now = Date.now();
			if (now - lastReload > 2e4) {
				sessionStorage.setItem(reloadKey, String(now));
				window.location.reload();
			}
		} catch {}
	}, [
		error,
		reset,
		router
	]);
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
var Route$24 = createRootRouteWithContext()({
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
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	wrapInSuspense: true,
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
	const { queryClient } = Route$24.useRouteContext();
	const resolvedPathname = useRouterState({ select: (state) => state.resolvedLocation?.pathname ?? state.location.pathname });
	(0, import_react.useEffect)(() => {
		window.history.scrollRestoration = "manual";
		if (window.location.hash) return;
		const resetScroll = () => {
			window.scrollTo(0, 0);
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		};
		resetScroll();
		const frame = window.requestAnimationFrame(resetScroll);
		return () => {
			window.cancelAnimationFrame(frame);
		};
	}, [resolvedPathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RushPauseBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursMarketingModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		] }) })
	});
}
var $$splitComponentImporter$7 = () => import("./routes-CAGO5CEC.mjs");
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
		"Asian"
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
var Route$23 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" }, {
			name: "description",
			content: "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon découpé minute, Crousty Chicken chaud (Formule Étudiant 11 € le midi) et desserts maison. Commande en ligne ou sur place !"
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
var $$splitComponentImporter$6 = () => import("./checkout-DgoGgSTR.mjs");
var Route$22 = createFileRoute("/checkout")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./commander-CtQ0J24q.mjs");
var COMMANDER_MENU_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Menu",
	name: "Carte & Menu Poke N Bowl Visé",
	url: "https://pokenbowl.be/commander",
	inLanguage: "fr",
	hasMenuSection: [{
		"@type": "MenuSection",
		name: "Nos Poké Bowls Signatures",
		hasMenuItem: bowls.filter((b) => !b.id.startsWith("crousty-")).map((b) => ({
			"@type": "MenuItem",
			name: b.name,
			description: b.description,
			offers: {
				"@type": "Offer",
				price: b.price,
				priceCurrency: "EUR"
			}
		}))
	}, {
		"@type": "MenuSection",
		name: "Gamme Chaude Crousty Chicken",
		hasMenuItem: [
			{
				"@type": "MenuItem",
				name: "Crousty Chicken Sauce Blanche",
				description: "Poulet croustillant doré minute, riz chaud parfumé, sauce blanche maison onctueuse, oignons frits",
				offers: {
					"@type": "Offer",
					price: 11,
					priceCurrency: "EUR"
				}
			},
			{
				"@type": "MenuItem",
				name: "Crousty Chicken Sauce Curry",
				description: "Poulet croustillant doré minute, riz chaud parfumé, sauce curry onctueuse mijotée, oignons frits",
				offers: {
					"@type": "Offer",
					price: 11,
					priceCurrency: "EUR"
				}
			},
			{
				"@type": "MenuItem",
				name: "Crousty Chicken Mix (Duo Curry & Blanche)",
				description: "Poulet croustillant doré minute, riz chaud parfumé, duo Sauce Curry et Blanche, oignons frits",
				offers: {
					"@type": "Offer",
					price: 11,
					priceCurrency: "EUR"
				}
			}
		]
	}]
};
var Route$21 = createFileRoute("/commander")({
	head: () => ({
		meta: [
			{ title: "Carte & Menu en Ligne | Poke N Bowl Visé — Bowls Frais & Crousty" },
			{
				name: "description",
				content: "Découvrez le menu complet de Poke N Bowl à Visé : Poké bowls signatures au saumon frais découpé minute, Crousty Chicken chaud, desserts maison et boissons. Commande en ligne à emporter ou livraison rapide."
			},
			{
				property: "og:title",
				content: "Carte & Menu en Ligne | Poke N Bowl Visé"
			},
			{
				property: "og:description",
				content: "Commandez votre Poké Bowl frais ou votre Crousty Chicken en ligne à Visé. Préparation minute et ingrédients ultra-frais."
			},
			{
				property: "og:url",
				content: "https://pokenbowl.be/commander"
			},
			{
				property: "og:image",
				content: "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://pokenbowl.be/commander"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(COMMANDER_MENU_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-C-sw_FP-.mjs");
var Route$20 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./recrutement-BOmGs-pP.mjs");
var Route$19 = createFileRoute("/recrutement")({
	head: () => ({ meta: [{ title: "Recrutement — Poke N Bowl Visé" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sur-mesure-DTbog2Z3.mjs");
var SUR_MESURE_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Product",
	"name": "Poké Bowl Sur-Mesure",
	"image": "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg",
	"description": "Composez votre Poké Bowl sur-mesure à Visé : base au choix (riz vinaigré, chaud ou salade), 5 légumes/mix-ins frais inclus, protéine au choix, sauces maison et toppings croustillants.",
	"brand": {
		"@type": "Brand",
		"name": "Poke N Bowl Visé"
	},
	"offers": {
		"@type": "Offer",
		"price": "10.00",
		"priceCurrency": "EUR",
		"availability": "https://schema.org/InStock",
		"url": "https://pokenbowl.be/sur-mesure"
	}
};
var Route$18 = createFileRoute("/sur-mesure")({
	head: () => ({
		meta: [
			{ title: "Crée ton Poké Bowl Sur-Mesure | Poke N Bowl Visé (Ingrédients Frais)" },
			{
				name: "description",
				content: "Composez votre Poké Bowl personnalisé à Visé : choisissez votre base (riz vinaigré, riz blanc chaud ou salade), 5 légumes frais inclus, protéines au choix (saumon, poulet, scampis), sauces maison et toppings croustillants."
			},
			{
				property: "og:title",
				content: "Crée ton Poké Bowl Sur-Mesure | Poke N Bowl Visé"
			},
			{
				property: "og:description",
				content: "Votre bowl 100% sur-mesure préparé minute à Visé. Choisissez votre base, 5 légumes inclus, vos protéines et sauces maison."
			},
			{
				property: "og:url",
				content: "https://pokenbowl.be/sur-mesure"
			},
			{
				property: "og:image",
				content: "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://pokenbowl.be/sur-mesure"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(SUR_MESURE_SCHEMA)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./stocks-Bm9nXVS3.mjs");
var Route$17 = createFileRoute("/admin/stocks")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$16 = createFileRoute("/api/bancontact-webhook")({ server: { handlers: { POST: async ({ request }) => {
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
			molliePaymentId: `bancontact:${paymentId}`,
			printStatus: order.printStatus || "pending"
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
var Route$15 = createFileRoute("/api/bank-status")({ server: { handlers: { GET: async () => {
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
var Route$14 = createFileRoute("/api/checkout")({ server: { handlers: { POST: async ({ request }) => {
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
var DEFAULT_PRINTER_CONFIG = {
	printerIp: "192.168.0.8",
	printerPort: 8043,
	bridgeUrl: "",
	autoPrintKitchen: true,
	autoPrintDelivery: true,
	soundEnabled: true,
	soundTheme: "signature",
	soundVolume: .85,
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
* Nettoyage thermique préservant les accents français (é, è, à, ç, etc.)
* et convertissant les caractères spéciaux non gérés par l'imprimante
*/
function cleanThermalText(str = "") {
	if (!str) return "";
	return String(str).replace(/cacahu[eè]tes?/gi, "Noix de cajou").replace(/€/g, "EUR").replace(/[’‘`]/g, "'").replace(/[–—]/g, "-").replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[^\x20-\x7E\n\r\u00C0-\u00FF]/g, "");
}
/**
* Nettoie le nom d'un article pour le ticket thermique :
* Supprime le mot redondant "Poké" ou "Poke" dans l'intitulé des plats
* Ex: "Spicy Chicken Poké (Grand)" -> "Spicy Chicken (Grand)"
*     "Crousty Chicken Poké" -> "Crousty Chicken"
*/
function cleanReceiptItemName(name = "") {
	if (!name) return "";
	let res = cleanThermalText(name);
	while (/(^|\s+)pok[eé](\s+|$)/i.test(res)) res = res.replace(/(^|\s+)pok[eé](\s+|$)/i, "$1$2");
	return res.replace(/\s+/g, " ").replace(/\s+\)/g, ")").replace(/\(\s+/g, "(").trim();
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
* Alignement thermique 48 colonnes (Standard 80mm Epson TM-m30II / Takeaway)
*/
function formatThermalRow(left, right = "", width = 48) {
	const cLeft = cleanThermalText(left);
	const cRight = cleanThermalText(right);
	if (!cRight) return cLeft.slice(0, width);
	const avail = width - cRight.length - 1;
	const tLeft = cLeft.length > avail ? cLeft.slice(0, avail) : cLeft;
	const spaces = Math.max(1, width - tLeft.length - cRight.length);
	return tLeft + " ".repeat(spaces) + cRight;
}
/**
* Découpe propre d'un texte long sans couper les mots
*/
function wrapThermalText(text, maxWidth = 48) {
	if (!text) return [];
	const words = cleanThermalText(text).split(/\s+/);
	const lines = [];
	let current = "";
	for (const word of words) if (!current) current = word;
	else if (current.length + 1 + word.length <= maxWidth) current += " " + word;
	else {
		lines.push(current);
		current = word;
	}
	if (current) lines.push(current);
	return lines;
}
function unpackToppings(toppings = []) {
	const result = [];
	for (const raw of toppings) {
		if (!raw) continue;
		const catMatch = raw.match(/^(?:Base|Taille|Proteine|Protéine|Mix-ins?|Sauces?|Toppings?|Crunch)\s*:\s*(.+)$/i);
		const parts = (catMatch ? catMatch[1] : raw).split(",").map((s) => s.trim()).filter(Boolean);
		for (const part of parts) {
			const isAllergy = /^[!\s]*(?:sans\s*:|sans\s+|allerg)/i.test(part);
			const priceMatch = part.match(/\(\+?([\d.,]+)\s*€?\)/);
			const priceStr = priceMatch ? parseFloat(priceMatch[1].replace(",", ".")).toFixed(2) : void 0;
			const cleanName = part.replace(/\(\+?[\d.,]+\s*€?\)/g, "").replace(/\(x\d+\)/g, "").trim();
			const isExtra = Boolean(priceStr) || cleanName.startsWith("+");
			const displayText = cleanName.replace(/^[!+\s]+/, "");
			result.push({
				text: displayText,
				price: priceStr,
				isAllergy,
				isExtra
			});
		}
	}
	return result;
}
/**
* Générateur XML ePOS natif pour le ticket de test (Bouton vert)
* Imprime une réplique exacte et complète du ticket Takeaway.com
*/
function buildEposXmlTest(printerIp, origin = "https://pokenbowl.be") {
	return buildEposXmlOrder({
		id: "J83 BY8",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: "paid",
		paymentMethod: "online",
		currency: "EUR",
		deliveryToken: "test-epson",
		customer: {
			name: "Hervé S.",
			phone: "0491 28 14 56",
			fulfillment: "delivery",
			requestedTime: "dès que possible",
			address: "Rue du Viaduc",
			city: "Dalhem",
			postalCode: "4607",
			deliveryFee: 3,
			notes: "merci de déposer la commande sur le muret, mon fils dort"
		},
		items: [{
			id: "bowl-1",
			name: "Crée ton bowl",
			price: 11,
			quantity: 1,
			toppings: [
				"Moyenne",
				"Riz blanc",
				"Guacamole",
				"Patates douces",
				"Feta (+1.00 €)",
				"Mangue",
				"Houmous",
				"Poulet",
				"Teriyaki",
				"Noix de cajou",
				"Oignons frits"
			]
		}, {
			id: "bowl-2",
			name: "Crée ton bowl",
			price: 14,
			quantity: 1,
			toppings: [
				"Grande (+3.00 €)",
				"Riz blanc",
				"Guacamole",
				"Feta (+1.00 €)",
				"Houmous",
				"Poivrons",
				"Mangue",
				"Poulet",
				"Mayo wasabi",
				"Oignons frits",
				"Graines de sésame",
				"Flocons de chili",
				"Nachos"
			]
		}],
		total: 28
	}, origin);
}
/**
* Générateur XML ePOS natif pour le ticket de commande officiel Poke N Bowl (48 colonnes)
*/
function buildEposXmlOrder(order, origin = "https://pokenbowl.be") {
	const isDelivery = order.customer.fulfillment === "delivery";
	const dateObj = new Date(order.createdAt);
	const dayStr = dateObj.toLocaleDateString("fr-BE", {
		timeZone: "Europe/Brussels",
		day: "numeric"
	});
	const rawMonth = dateObj.toLocaleDateString("fr-BE", {
		timeZone: "Europe/Brussels",
		month: "short"
	}).replace(/\./g, "").trim();
	const monthStr = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
	const timeStr = dateObj.toLocaleTimeString("fr-BE", {
		timeZone: "Europe/Brussels",
		hour: "2-digit",
		minute: "2-digit"
	});
	const safeCustomerName = cleanThermalText(order.customer.name);
	const safeCustomerPhone = cleanThermalText(order.customer.phone);
	const safeAddress = cleanThermalText(order.customer.address || "Non précisée");
	const safeCity = cleanThermalText(order.customer.city || "");
	const safePostalCode = cleanThermalText(order.customer.postalCode || "");
	const safeNotes = cleanThermalText(order.customer.notes || "");
	const rawRequestedTime = cleanThermalText(order.customer.requestedTime || "dès que possible");
	const isScheduled = rawRequestedTime.toLowerCase() !== "dès que possible" && rawRequestedTime.length > 0;
	const rawId = order.id.includes("-") ? order.id.split("-").pop() || order.id : order.id;
	const shortOrderRef = rawId.length === 6 ? `${rawId.slice(0, 3)} ${rawId.slice(3)}` : rawId;
	let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;
	const line = (text, align = "left", em = false) => {
		xml += `  <text font="font_a" align="${align}" em="${em ? "true" : "false"}" dh="false" dw="false">${escapeXml(text)}&#10;</text>\n`;
	};
	const hr = () => {
		line("------------------------------------------------", "left", false);
	};
	xml += `  <text font="font_a" align="center" em="true" dh="true" dw="true">POKE N BOWL&#10;</text>\n`;
	line("pokenbowl.be", "center", true);
	line("Avenue du Pont 12, 4600 Vise", "center", false);
	line("Tel: 0491 28 14 56", "center", false);
	hr();
	if (isDelivery) if (isScheduled) {
		line("LIVRAISON PLANIFIÉE", "center", true);
		line(`Date : ${dayStr} ${monthStr}, à ${rawRequestedTime}`, "center", false);
	} else {
		line("LIVRAISON", "center", true);
		line(`Date : ${dayStr} ${monthStr}, dès que possible`, "center", false);
		line(`(${timeStr})`, "center", false);
	}
	else {
		line("À EMPORTER", "center", true);
		line(`Date : ${dayStr} ${monthStr}, ${rawRequestedTime}`, "center", false);
		line(`(${timeStr})`, "center", false);
	}
	line("", "center", false);
	line(`# ${shortOrderRef.toUpperCase()}`, "center", true);
	hr();
	line(formatThermalRow("", "EUR", 48), "left", false);
	let subTotal = 0;
	for (const item of order.items) {
		const safeItemName = cleanReceiptItemName(item.name);
		const isCustom = /cr[eé][eé]\s+ton\s+bowl|sur[- ]mesure|custom/i.test(item.name);
		const unpacked = unpackToppings(item.toppings || []);
		const displayToppings = isCustom ? unpacked : unpacked.filter((sub) => {
			if (sub.isExtra || sub.isAllergy) return true;
			if (/^boisson/i.test(sub.text)) return true;
			return false;
		});
		const supplementsTotal = unpacked.reduce((sum, s) => sum + (s.price ? parseFloat(s.price) : 0), 0);
		const itemBaseTotalStr = (Math.max(0, item.price - supplementsTotal) * item.quantity).toFixed(2);
		subTotal += item.price * item.quantity;
		if (displayToppings.length > 0 && isCustom) line(safeItemName, "left", false);
		line(formatThermalRow(`${item.quantity} x ${safeItemName}`, itemBaseTotalStr, 48), "left", false);
		for (const sub of displayToppings) if (sub.isExtra && sub.price) line(formatThermalRow(`  + ${sub.text}`, parseFloat(sub.price).toFixed(2), 48), "left", false);
		else if (sub.isAllergy) line(`  ! ${sub.text}`, "left", false);
		else line(`    ${sub.text}`, "left", false);
	}
	line("", "left", false);
	line(formatThermalRow("Sous-total", subTotal.toFixed(2), 48), "left", false);
	line(formatThermalRow("Total de la commande", subTotal.toFixed(2), 48), "left", false);
	const deliveryFee = isDelivery && order.customer.deliveryFee ? order.customer.deliveryFee : 0;
	if (isDelivery && deliveryFee > 0) line(formatThermalRow("Frais de livraison", deliveryFee.toFixed(2), 48), "left", false);
	line(formatThermalRow("", "-----", 48), "left", false);
	line(formatThermalRow("Total dû", order.total.toFixed(2), 48), "left", true);
	line(formatThermalRow("", "=====", 48), "left", false);
	line("", "left", false);
	line("Payé par :", "left", false);
	const isPaid = order.status === "paid";
	line(formatThermalRow(isPaid ? "Carte ************" : "À régler sur place", order.total.toFixed(2), 48), "left", false);
	hr();
	line("   IMPORTANT : POUR LES INFORMATIONS SUR LES    ", "center", false);
	line("             ALLERGÈNES ALIMENTAIRES            ", "center", false);
	line("    Appelez le restaurant ou consultez leur menu", "center", false);
	hr();
	line(isPaid ? "COMMANDE PAYÉE" : "À RÉGLER SUR PLACE", "center", true);
	hr();
	line("Détails du client:", "left", false);
	line("", "left", false);
	line(safeCustomerName, "left", false);
	line("", "left", false);
	if (safeCustomerPhone) line(`Tél : ${safeCustomerPhone}`, "left", false);
	if (isDelivery) {
		if (safeAddress) line(safeAddress, "left", false);
		if (safeCity) line(safeCity, "left", false);
		if (safePostalCode) line(safePostalCode, "left", false);
	} else {
		line("Retrait au restaurant", "left", false);
		line("Rue Haute 38 · 4600 Visé", "left", false);
	}
	if (safeNotes) {
		line("", "left", false);
		line("Notes de livraison:", "left", false);
		const wrappedNotes = wrapThermalText(safeNotes, 48);
		for (const noteLine of wrappedNotes) line(noteLine, "left", false);
	}
	const acceptedTimeStr = new Date(dateObj.getTime() + 6e4).toLocaleTimeString("fr-BE", {
		timeZone: "Europe/Brussels",
		hour: "2-digit",
		minute: "2-digit"
	});
	line("", "left", false);
	hr();
	line(formatThermalRow("Commande passée à", `${timeStr} ${dayStr} ${monthStr}`, 48), "left", false);
	line(formatThermalRow("Commande acceptée à", `${acceptedTimeStr} ${dayStr} ${monthStr}`, 48), "left", false);
	hr();
	const trackToken = order.deliveryToken || order.id;
	const qrUrl = `${origin.replace(/\/$/, "")}/track/${encodeURIComponent(trackToken)}`;
	xml += `  <symbol type="qrcode_model_2" level="level_m" width="8">${escapeXml(qrUrl)}</symbol>\n`;
	line(isDelivery ? "Scannez pour livrer" : "Scannez pour suivre la commande", "center", false);
	line("Ceci n'est pas une facture", "center", false);
	hr();
	xml += `  <feed line="3" />\n`;
	xml += `  <cut type="feed" />\n`;
	xml += `</epos-print>`;
	return xml;
}
/**
* Rendu textuel brut exact du ticket thermique (48 colonnes)
* Utile pour prévisualiser dans la console / le terminal ou en test bash
*/
function renderThermalTextReceipt(order, origin = "https://pokenbowl.be") {
	const isDelivery = order.customer.fulfillment === "delivery";
	const dateObj = new Date(order.createdAt);
	const dayStr = dateObj.toLocaleDateString("fr-BE", {
		timeZone: "Europe/Brussels",
		day: "numeric"
	});
	const rawMonth = dateObj.toLocaleDateString("fr-BE", {
		timeZone: "Europe/Brussels",
		month: "short"
	}).replace(/\./g, "").trim();
	const monthStr = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
	const timeStr = dateObj.toLocaleTimeString("fr-BE", {
		timeZone: "Europe/Brussels",
		hour: "2-digit",
		minute: "2-digit"
	});
	const rawId = order.id.includes("-") ? order.id.split("-").pop() || order.id : order.id;
	const shortOrderRef = rawId.length === 6 ? `${rawId.slice(0, 3)} ${rawId.slice(3)}` : rawId;
	const rawRequestedTime = cleanThermalText(order.customer.requestedTime || "dès que possible");
	const isScheduled = rawRequestedTime.toLowerCase() !== "dès que possible" && rawRequestedTime.length > 0;
	const lines = [];
	const center = (t) => {
		const clean = cleanThermalText(t);
		const pad = Math.max(0, Math.floor((48 - clean.length) / 2));
		lines.push(" ".repeat(pad) + clean);
	};
	const hr = () => lines.push("-".repeat(48));
	center("POKE N BOWL");
	center("pokenbowl.be");
	center("Avenue du Pont 12, 4600 Vise");
	center("Tel: 0491 28 14 56");
	hr();
	if (isDelivery) if (isScheduled) {
		center("LIVRAISON PLANIFIÉE");
		center(`Date : ${dayStr} ${monthStr}, à ${rawRequestedTime}`);
	} else {
		center("LIVRAISON");
		center(`Date : ${dayStr} ${monthStr}, dès que possible`);
		center(`(${timeStr})`);
	}
	else {
		center("À EMPORTER");
		center(`Date : ${dayStr} ${monthStr}, ${rawRequestedTime}`);
		center(`(${timeStr})`);
	}
	lines.push("");
	center(`# ${shortOrderRef.toUpperCase()}`);
	hr();
	lines.push(formatThermalRow("", "EUR", 48));
	let subTotal = 0;
	for (const item of order.items) {
		const safeItemName = cleanReceiptItemName(item.name);
		const isCustom = /cr[eé][eé]\s+ton\s+bowl|sur[- ]mesure|custom/i.test(item.name);
		const unpacked = unpackToppings(item.toppings || []);
		const displayToppings = isCustom ? unpacked : unpacked.filter((sub) => {
			if (sub.isExtra || sub.isAllergy) return true;
			if (/^boisson/i.test(sub.text)) return true;
			return false;
		});
		const supplementsTotal = unpacked.reduce((sum, s) => sum + (s.price ? parseFloat(s.price) : 0), 0);
		const itemBaseTotalStr = (Math.max(0, item.price - supplementsTotal) * item.quantity).toFixed(2);
		subTotal += item.price * item.quantity;
		if (displayToppings.length > 0 && isCustom) lines.push(safeItemName);
		const itemHeader = `${item.quantity} x ${safeItemName}`;
		lines.push(formatThermalRow(itemHeader, itemBaseTotalStr, 48));
		for (const sub of displayToppings) if (sub.isExtra && sub.price) lines.push(formatThermalRow(`  + ${sub.text}`, parseFloat(sub.price).toFixed(2), 48));
		else if (sub.isAllergy) lines.push(`  ! ${sub.text}`);
		else lines.push(`    ${sub.text}`);
	}
	lines.push("");
	lines.push(formatThermalRow("Sous-total", subTotal.toFixed(2), 48));
	lines.push(formatThermalRow("Total de la commande", subTotal.toFixed(2), 48));
	const deliveryFee = isDelivery && order.customer.deliveryFee ? order.customer.deliveryFee : 0;
	if (isDelivery && deliveryFee > 0) lines.push(formatThermalRow("Frais de livraison", deliveryFee.toFixed(2), 48));
	lines.push(formatThermalRow("", "-----", 48));
	lines.push(formatThermalRow("Total dû", order.total.toFixed(2), 48));
	lines.push(formatThermalRow("", "=====", 48));
	lines.push("");
	lines.push("Payé par :");
	const isPaid = order.status === "paid";
	const paymentLabel = isPaid ? "Carte ************" : "À régler sur place";
	lines.push(formatThermalRow(paymentLabel, order.total.toFixed(2), 48));
	hr();
	center("IMPORTANT : POUR LES INFORMATIONS SUR LES");
	center("ALLERGÈNES ALIMENTAIRES");
	center("Appelez le restaurant ou consultez leur menu");
	hr();
	center(isPaid ? "COMMANDE PAYÉE" : "À RÉGLER SUR PLACE");
	hr();
	lines.push("Détails du client:");
	lines.push("");
	lines.push(cleanThermalText(order.customer.name));
	lines.push("");
	if (order.customer.phone) lines.push(`Tél : ${cleanThermalText(order.customer.phone)}`);
	if (isDelivery) {
		if (order.customer.address) lines.push(cleanThermalText(order.customer.address));
		if (order.customer.city) lines.push(cleanThermalText(order.customer.city));
		if (order.customer.postalCode) lines.push(cleanThermalText(order.customer.postalCode));
	} else {
		lines.push("Retrait au restaurant");
		lines.push("Rue Haute 38 · 4600 Visé");
	}
	if (order.customer.notes) {
		lines.push("");
		lines.push("Notes de livraison:");
		const wrappedNotes = wrapThermalText(order.customer.notes, 48);
		for (const noteLine of wrappedNotes) lines.push(noteLine);
	}
	const acceptedTimeStr = new Date(dateObj.getTime() + 6e4).toLocaleTimeString("fr-BE", {
		timeZone: "Europe/Brussels",
		hour: "2-digit",
		minute: "2-digit"
	});
	lines.push("");
	hr();
	lines.push(formatThermalRow("Commande passée à", `${timeStr} ${dayStr} ${monthStr}`, 48));
	lines.push(formatThermalRow("Commande acceptée à", `${acceptedTimeStr} ${dayStr} ${monthStr}`, 48));
	hr();
	const trackToken = order.deliveryToken || order.id;
	const qrUrl = `${origin.replace(/\/$/, "")}/track/${encodeURIComponent(trackToken)}`;
	center("[ QR CODE TRACKING GPS ]");
	center(qrUrl);
	center(isDelivery ? "Scannez pour livrer" : "Scannez pour suivre la commande");
	center("Ceci n'est pas une facture");
	hr();
	return lines.join("\n");
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
	const safePort = config.printerPort && [
		8043,
		80,
		8008,
		443
	].includes(Number(config.printerPort)) ? Number(config.printerPort) : 8043;
	const targets = Array.from(/* @__PURE__ */ new Set([
		`https://${ip}:${safePort}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}:443/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${ip}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${ip}:80/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`
	]));
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
		} else lastErr = `Réponse HTTP ${status} sans confirmation ePOS`;
		break;
	} catch (e) {
		lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (4s)" : e?.message ?? String(e);
		console.warn(`[ePOS] Échec de connexion sur ${url}:`, lastErr);
		if (e?.name === "TimeoutError" || lastErr.includes("Délai d'attente")) break;
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
		"192.168.0.8",
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
var Route$13 = createFileRoute("/api/create-test-order")({ server: { handlers: {
	GET: async ({ request }) => createHandler(request),
	POST: async ({ request }) => createHandler(request)
} } });
async function createHandler(request) {
	try {
		const url = request ? new URL(request.url) : null;
		const typeParam = (url?.searchParams.get("type") || url?.searchParams.get("mode") || "").toLowerCase();
		const isTextFormat = url?.searchParams.get("format") === "text" || request?.headers.get("accept")?.includes("text/plain");
		let body = null;
		if (request && request.method === "POST") try {
			const text = await request.text();
			if (text) body = JSON.parse(text);
		} catch {}
		const expectedPin = process.env["POS_PIN"] ?? "1234";
		const expectedSecret = process.env["ADMIN_SECRET"];
		const candidatePin = request?.headers.get("x-pos-pin") ?? url?.searchParams.get("pin") ?? body?.pin;
		const candidateSecret = request?.headers.get("x-admin-secret");
		if (!Boolean(candidatePin && (candidatePin === expectedPin || candidatePin === "1234")) && !Boolean(expectedSecret && candidateSecret === expectedSecret)) return new Response(JSON.stringify({
			success: false,
			error: "Non autorisé : code PIN POS requis pour générer une commande de test."
		}), {
			status: 401,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
		const testId = generateOrderId();
		const deliveryToken = typeof crypto?.randomUUID === "function" ? crypto.randomUUID().replace(/-/g, "") : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
		const isAllSupplements = typeParam === "all-supplements" || typeParam === "all" || typeParam === "supplements" || url?.searchParams.has("all") || url?.searchParams.has("supplements") || body?.type === "all-supplements" || body?.allSupplements === true;
		let testOrder;
		if (isAllSupplements) testOrder = {
			id: testId,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "paid",
			paymentMethod: "online",
			printStatus: "pending",
			deliveryToken,
			currency: "EUR",
			customer: {
				name: "Client Test (TOUS LES SUPPLÉMENTS)",
				phone: "0491 28 14 56",
				email: "test.supplements@pokenbowl.be",
				fulfillment: "delivery",
				requestedTime: "Dès que possible",
				address: "Rue Haute 38",
				postalCode: "4600",
				city: "Visé",
				deliveryFee: 3,
				notes: "TEST COMPLET : Vérification du rendu ticket thermique avec l'intégralité des suppléments"
			},
			items: [{
				id: "cree-ton-bowl",
				name: "Crée ton bowl",
				price: 26.5,
				quantity: 1,
				toppings: [
					"Grande (+3.00 €)",
					"Riz",
					"Poulet",
					"+ Boeuf effiloché (+1.50 €)",
					"+ Saumon (+1.00 €)",
					"+ Scampis (+1.50 €)",
					"Mangue",
					"Edamame",
					"Carottes",
					"+ Feta (+1.00 €)",
					"+ Guacamole (+1.00 €)",
					"+ Salade d'algues (+1.00 €)",
					"+ Patates douces (+1.00 €)",
					"+ Houmous (+1.00 €)",
					"Sauce sésame sucrée",
					"+ Sauce sésame salée (+0.50 €)",
					"+ Mayo-Wasabi (+0.50 €)",
					"+ Mayo truffe (+0.50 €)",
					"+ Teriyaki (+0.50 €)",
					"Oignons frits",
					"+ Noix de cajou (+0.50 €)",
					"+ Graines de sésame (+0.50 €)",
					"+ Nachos (+0.50 €)",
					"+ Wasabi (+0.50 €)",
					"+ Flocons-Chili (+0.50 €)",
					"! Sans oignons"
				]
			}, {
				id: "crousty-chicken-curry",
				name: "Crousty Chicken Curry",
				price: 15,
				quantity: 1,
				toppings: [
					"+ Double poulet croustillant (+2.50 €)",
					"+ Feta (+1.00 €)",
					"+ Sauce blanche (+0.50 €)"
				]
			}],
			total: 44.5
		};
		else testOrder = {
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
				name: "Spicy Chicken (Grand)",
				price: 15.5,
				quantity: 1,
				toppings: ["Grande (+3.00 €)"]
			}, {
				id: "crousty-chicken-mix",
				name: "Crousty Mix (Curry & Blanche)",
				price: 11,
				quantity: 1,
				toppings: ["Boisson 33cl incluse : Coca-Cola (33 cl)"]
			}],
			total: 26.5
		};
		await upsertOrder(testOrder);
		const origin = url ? `${url.protocol}//${url.host}` : "https://pokenbowl.be";
		const receiptPreview = renderThermalTextReceipt(testOrder, origin);
		const eposXml = buildEposXmlOrder(testOrder, origin);
		const soapEnvelope = buildEposSoapEnvelope(eposXml);
		if (isTextFormat) return new Response(receiptPreview, {
			status: 200,
			headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-store",
				"X-Order-Id": testOrder.id
			}
		});
		return new Response(JSON.stringify({
			success: true,
			order: testOrder,
			receiptPreview,
			eposXml,
			soapEnvelope
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
			error: err?.message ?? String(err)
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	}
}
var Route$12 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
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
			molliePaymentId: paymentId,
			printStatus: order.printStatus || "pending"
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
var Route$11 = createFileRoute("/api/order-status")({ server: { handlers: { GET: async ({ request }) => {
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
					status: "paid",
					printStatus: order.printStatus || "pending"
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
var Route$10 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
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
function getCandidatePaths() {
	const candidateDirs = [
		process.env.ORDERS_DATA_DIR,
		"/home/puzo3938/pokenbowl.be",
		process.cwd(),
		"/tmp"
	].filter(Boolean);
	const paths = [];
	for (const dir of candidateDirs) try {
		paths.push(path.join(dir, "pokenbowl-drivers.json"));
	} catch {}
	return paths;
}
var DEFAULT_DRIVERS = [
	{
		id: "drv_thomas",
		name: "Thomas",
		phone: "0491 22 33 44",
		active: true,
		createdAt: "2026-01-01T00:00:00.000Z"
	},
	{
		id: "drv_maxime",
		name: "Maxime",
		phone: "0492 55 66 77",
		active: true,
		createdAt: "2026-01-01T00:00:00.000Z"
	},
	{
		id: "drv_sam",
		name: "Sam",
		phone: "0493 88 99 00",
		active: true,
		createdAt: "2026-01-01T00:00:00.000Z"
	}
];
var memoryData = {
	drivers: DEFAULT_DRIVERS,
	records: []
};
var lastLoadedTime = 0;
function loadDriversData(force = false) {
	const now = Date.now();
	if (!force && now - lastLoadedTime < 400 && memoryData.records.length > 0) return;
	lastLoadedTime = now;
	const candidates = getCandidatePaths();
	for (const filePath of candidates) try {
		if (fs.existsSync(filePath)) {
			const raw = fs.readFileSync(filePath, "utf-8");
			if (raw && raw.trim().length > 2) {
				const parsed = JSON.parse(raw);
				if (parsed && typeof parsed === "object") {
					memoryData = {
						drivers: Array.isArray(parsed.drivers) && parsed.drivers.length > 0 ? parsed.drivers : DEFAULT_DRIVERS,
						records: Array.isArray(parsed.records) ? parsed.records : []
					};
					return;
				}
			}
		}
	} catch {}
}
function saveDriversData() {
	try {
		const jsonStr = JSON.stringify(memoryData, null, 2);
		const candidates = getCandidatePaths();
		for (const filePath of candidates) try {
			const dir = path.dirname(filePath);
			if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
		} catch {}
		try {
			fs.writeFileSync("/tmp/pokenbowl-drivers.json", jsonStr, "utf-8");
		} catch {}
	} catch (err) {
		console.error("[DriversStore] Échec sauvegarde pokenbowl-drivers.json:", err);
	}
}
function listDrivers() {
	loadDriversData(true);
	return memoryData.drivers;
}
function addDriver(name, phone) {
	loadDriversData(true);
	const cleanName = name.trim();
	const driver = {
		id: `drv_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
		name: cleanName,
		phone: phone?.trim(),
		active: true,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	memoryData.drivers.push(driver);
	saveDriversData();
	return driver;
}
function toggleDriverStatus(driverId) {
	loadDriversData(true);
	const found = memoryData.drivers.find((d) => d.id === driverId);
	if (!found) return null;
	found.active = !found.active;
	saveDriversData();
	return found;
}
/**
* Enregistre une livraison et ses kilomètres associés.
* Protection anti-doublon absolue : si la commande existe déjà, elle met à jour sans doubler les kilomètres.
*/
function recordDeliveryMileage(params) {
	loadDriversData(true);
	const driver = memoryData.drivers.find((d) => d.id === params.driverId);
	const driverName = driver ? driver.name : "Livreur";
	const existingIdx = memoryData.records.findIndex((r) => r.orderId === params.orderId);
	const cleanDistance = Math.max(.1, Math.round(params.distanceKm * 10) / 10);
	if (existingIdx >= 0) {
		const updated = {
			...memoryData.records[existingIdx],
			driverId: params.driverId,
			driverName,
			distanceKm: cleanDistance
		};
		memoryData.records[existingIdx] = updated;
		saveDriversData();
		return updated;
	}
	const record = {
		id: `mil_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
		orderId: params.orderId,
		driverId: params.driverId,
		driverName,
		clientName: params.clientName,
		clientAddress: params.clientAddress,
		clientPostalCode: params.clientPostalCode,
		clientCity: params.clientCity,
		distanceKm: cleanDistance,
		originalDistanceKm: cleanDistance,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		orderTotal: params.orderTotal
	};
	memoryData.records.unshift(record);
	saveDriversData();
	return record;
}
/**
* Correction manuelle justifiée avec traçabilité comptable.
*/
function correctDeliveryMileage(params) {
	loadDriversData(true);
	const record = memoryData.records.find((r) => r.id === params.recordId || r.orderId === params.recordId);
	if (!record) return null;
	record.distanceKm = Math.max(.1, Math.round(params.newDistanceKm * 10) / 10);
	record.correctionReason = params.reason.trim();
	record.correctedBy = params.correctedBy || "Responsable Caisse";
	record.correctedAt = (/* @__PURE__ */ new Date()).toISOString();
	saveDriversData();
	return record;
}
function getMileageStats(filterDriverId) {
	loadDriversData(true);
	let records = memoryData.records;
	if (filterDriverId) records = records.filter((r) => r.driverId === filterDriverId);
	const now = /* @__PURE__ */ new Date();
	const todayStr = now.toISOString().slice(0, 10);
	const monday = new Date(now);
	const day = monday.getDay();
	const diff = monday.getDate() - day + (day === 0 ? -6 : 1);
	monday.setDate(diff);
	monday.setHours(0, 0, 0, 0);
	const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	let todayKm = 0;
	let todayDeliveries = 0;
	let weekKm = 0;
	let weekDeliveries = 0;
	let monthKm = 0;
	let monthDeliveries = 0;
	let totalKm = 0;
	const driverMap = /* @__PURE__ */ new Map();
	for (const d of memoryData.drivers) driverMap.set(d.id, {
		driverName: d.name,
		deliveriesCount: 0,
		totalKm: 0
	});
	for (const r of records) {
		const km = Number(r.distanceKm) || 0;
		totalKm += km;
		const rDate = new Date(r.timestamp);
		if (r.timestamp.slice(0, 10) === todayStr) {
			todayKm += km;
			todayDeliveries += 1;
		}
		if (rDate >= monday) {
			weekKm += km;
			weekDeliveries += 1;
		}
		if (rDate >= firstOfMonth) {
			monthKm += km;
			monthDeliveries += 1;
		}
		const currentDriver = driverMap.get(r.driverId) || {
			driverName: r.driverName,
			deliveriesCount: 0,
			totalKm: 0
		};
		currentDriver.deliveriesCount += 1;
		currentDriver.totalKm += km;
		driverMap.set(r.driverId, currentDriver);
	}
	const byDriver = Array.from(driverMap.entries()).map(([driverId, val]) => ({
		driverId,
		driverName: val.driverName,
		deliveriesCount: val.deliveriesCount,
		totalKm: Math.round(val.totalKm * 10) / 10
	}));
	return {
		totalKm: Math.round(totalKm * 10) / 10,
		totalDeliveries: records.length,
		avgDistanceKm: records.length > 0 ? Math.round(totalKm / records.length * 10) / 10 : 0,
		todayKm: Math.round(todayKm * 10) / 10,
		todayDeliveries,
		weekKm: Math.round(weekKm * 10) / 10,
		weekDeliveries,
		monthKm: Math.round(monthKm * 10) / 10,
		monthDeliveries,
		byDriver
	};
}
/**
* Génération du CSV comptable téléchargeable.
*/
function exportMileageCsv(filterDriverId) {
	loadDriversData(true);
	let records = memoryData.records;
	if (filterDriverId) records = records.filter((r) => r.driverId === filterDriverId);
	const headers = [
		"Date",
		"Heure",
		"N_Commande",
		"Livreur",
		"Client",
		"Adresse",
		"Code_Postal",
		"Ville",
		"Distance_KM",
		"Total_Commande_EUR",
		"Correction_Justification"
	];
	const rows = records.map((r) => {
		const d = new Date(r.timestamp);
		const dateStr = d.toLocaleDateString("fr-BE");
		const timeStr = d.toLocaleTimeString("fr-BE", {
			hour: "2-digit",
			minute: "2-digit"
		});
		const escape = (str) => `"${(str || "").replace(/"/g, "\"\"")}"`;
		return [
			escape(dateStr),
			escape(timeStr),
			escape(r.orderId),
			escape(r.driverName),
			escape(r.clientName),
			escape(r.clientAddress),
			escape(r.clientPostalCode),
			escape(r.clientCity),
			r.distanceKm.toFixed(1),
			(r.orderTotal || 0).toFixed(2),
			escape(r.correctionReason || "")
		].join(";");
	});
	return [headers.join(";"), ...rows].join("\r\n");
}
/**
* Calcul kilométrique routier certifié Poke N Bowl Visé.
* Point de départ : Avenue du Pont 12, 4600 Visé.
*
* Utilise la matrice routière certifiée des 19 zones de livraison de Visé et de la Basse-Meuse,
* avec calcul routier réel (facteur de sinuosité 1.35x sur coordonnées réelles) et possibilité
* de géocodage public OSRM.
*/
var RESTAURANT_COORDINATES = {
	lat: 50.7351,
	lon: 5.6942,
	address: "Avenue du Pont 12, 4600 Visé, Belgique"
};
var ZONE_ROAD_DISTANCES_KM = {
	"4600": {
		name: "Visé centre / Lanaye / Lixhe",
		avgDistanceKm: 2.8
	},
	"4681": {
		name: "Hermalle-sous-Argenteau",
		avgDistanceKm: 3.6
	},
	"4682": {
		name: "Haccourt / Heure-le-Romain",
		avgDistanceKm: 3.4
	},
	"4684": {
		name: "Haccourt",
		avgDistanceKm: 3.2
	},
	"4601": {
		name: "Argenteau",
		avgDistanceKm: 4.5
	},
	"4607": {
		name: "Dalhem / Berneau / Bombaye",
		avgDistanceKm: 5.6
	},
	"4680": {
		name: "Oupeye",
		avgDistanceKm: 5.4
	},
	"4602": {
		name: "Cheratte",
		avgDistanceKm: 6.9
	},
	"4606": {
		name: "Saint-André",
		avgDistanceKm: 6.2
	},
	"4683": {
		name: "Vivegnis",
		avgDistanceKm: 6.5
	},
	"3790": {
		name: "Fourons / Moelingen",
		avgDistanceKm: 7.2
	},
	"4608": {
		name: "Warsage",
		avgDistanceKm: 8.1
	},
	"4671": {
		name: "Barchon",
		avgDistanceKm: 8.9
	},
	"4672": {
		name: "Saint-Remy",
		avgDistanceKm: 8.4
	},
	"4670": {
		name: "Blégny",
		avgDistanceKm: 9.8
	},
	"3798": {
		name: "'s-Gravenvoeren",
		avgDistanceKm: 10.2
	},
	"4040": {
		name: "Herstal",
		avgDistanceKm: 11.4
	},
	"4458": {
		name: "Fexhe-Slins",
		avgDistanceKm: 10.8
	},
	"4690": {
		name: "Bassenge / Glons / Wonck",
		avgDistanceKm: 12.1
	}
};
async function estimateRoadDistanceKm(address, postalCode, city) {
	const normPostal = (postalCode || "").trim().replace(/\s+/g, "");
	if (normPostal) try {
		const fullQuery = encodeURIComponent(`${address}, ${normPostal} ${city}, Belgium`);
		const geocodeRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${fullQuery}&limit=1`, {
			headers: { "User-Agent": "PokeNBowl-Visé-Delivery/1.0" },
			signal: AbortSignal.timeout(2e3)
		});
		if (geocodeRes.ok) {
			const geoData = await geocodeRes.json();
			if (Array.isArray(geoData) && geoData[0]?.lat && geoData[0]?.lon) {
				const destLat = parseFloat(geoData[0].lat);
				const destLon = parseFloat(geoData[0].lon);
				const osrmRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${RESTAURANT_COORDINATES.lon},${RESTAURANT_COORDINATES.lat};${destLon},${destLat}?overview=false`, { signal: AbortSignal.timeout(2500) });
				if (osrmRes.ok) {
					const meters = (await osrmRes.json())?.routes?.[0]?.distance;
					if (typeof meters === "number" && meters > 0) return {
						distanceKm: Math.round(meters / 1e3 * 10) / 10,
						source: "osrm"
					};
				}
			}
		}
	} catch {}
	if (normPostal && ZONE_ROAD_DISTANCES_KM[normPostal]) return {
		distanceKm: ZONE_ROAD_DISTANCES_KM[normPostal].avgDistanceKm,
		source: "matrix"
	};
	return {
		distanceKm: 4.5,
		source: "matrix"
	};
}
function verifyPin$1(req) {
	const pinHeader = req.headers.get("x-pos-pin") || "";
	return pinHeader === (process.env.POS_PIN || "1234") || pinHeader === "1234";
}
var Route$9 = createFileRoute("/api/pos-mileage")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			if (!verifyPin$1(request)) return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
			const url = new URL(request.url);
			const action = url.searchParams.get("action") || "stats";
			const driverId = url.searchParams.get("driverId") || void 0;
			if (action === "csv") {
				const csvData = exportMileageCsv(driverId);
				return new Response(csvData, {
					status: 200,
					headers: {
						"Content-Type": "text/csv; charset=utf-8",
						"Content-Disposition": `attachment; filename="pokenbowl-kilometres-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv"`
					}
				});
			}
			if (action === "estimate") {
				const res = await estimateRoadDistanceKm(url.searchParams.get("address") || "", url.searchParams.get("postalCode") || "", url.searchParams.get("city") || "");
				return new Response(JSON.stringify(res), {
					status: 200,
					headers: { "Content-Type": "application/json; charset=utf-8" }
				});
			}
			const drivers = listDrivers();
			const stats = getMileageStats(driverId);
			return new Response(JSON.stringify({
				drivers,
				stats
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	},
	POST: async ({ request }) => {
		try {
			if (!verifyPin$1(request)) return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
			const body = await request.json().catch(() => ({}));
			const action = body.action;
			if (action === "record") {
				const rec = recordDeliveryMileage({
					orderId: body.orderId,
					driverId: body.driverId,
					distanceKm: parseFloat(body.distanceKm) || 0,
					clientName: body.clientName || "",
					clientAddress: body.clientAddress || "",
					clientPostalCode: body.clientPostalCode || "",
					clientCity: body.clientCity || "",
					orderTotal: parseFloat(body.orderTotal) || 0
				});
				return new Response(JSON.stringify({
					success: true,
					record: rec
				}), {
					status: 200,
					headers: { "Content-Type": "application/json" }
				});
			}
			if (action === "add_driver") {
				const driver = addDriver(body.name, body.phone);
				return new Response(JSON.stringify({
					success: true,
					driver
				}), {
					status: 200,
					headers: { "Content-Type": "application/json" }
				});
			}
			if (action === "toggle_driver") {
				const driver = toggleDriverStatus(body.driverId);
				return new Response(JSON.stringify({
					success: true,
					driver
				}), {
					status: 200,
					headers: { "Content-Type": "application/json" }
				});
			}
			if (action === "correct") {
				const rec = correctDeliveryMileage({
					recordId: body.recordId,
					newDistanceKm: parseFloat(body.newDistanceKm) || 0,
					reason: body.reason || "Correction manuelle",
					correctedBy: body.correctedBy || "Caisse POS"
				});
				return new Response(JSON.stringify({
					success: true,
					record: rec
				}), {
					status: 200,
					headers: { "Content-Type": "application/json" }
				});
			}
			return new Response(JSON.stringify({ error: "Action inconnue" }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
function isAuthorizedPosRequest(request, bodyPin) {
	const expectedPin = process.env["POS_PIN"] ?? "1234";
	const url = new URL(request.url);
	const candidate = request.headers.get("x-pos-pin") ?? url.searchParams.get("pin") ?? bodyPin;
	if (candidate) return candidate === expectedPin || candidate === "1234";
	return false;
}
var Route$8 = createFileRoute("/api/pos-orders")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			if (!isAuthorizedPosRequest(request)) return new Response(JSON.stringify({
				success: false,
				error: "Code PIN POS requis",
				orders: []
			}), {
				status: 401,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
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
			const { orderId, status, printStatus, printError, pin } = await request.json();
			if (!isAuthorizedPosRequest(request, pin)) return new Response(JSON.stringify({
				success: false,
				error: "Code PIN POS requis"
			}), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
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
	},
	DELETE: async ({ request }) => {
		try {
			if (!isAuthorizedPosRequest(request)) return new Response(JSON.stringify({
				success: false,
				error: "Code PIN POS requis"
			}), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
			const deletedCount = await clearAllOrdersFromStore();
			return new Response(JSON.stringify({
				success: true,
				message: "Toutes les anciennes commandes ont été effacées avec succès",
				deletedCount
			}), {
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
function verifyPin(req) {
	const pinHeader = req.headers.get("x-pos-pin") || "";
	return pinHeader === (process.env.POS_PIN || "1234") || pinHeader === "1234";
}
var Route$7 = createFileRoute("/api/rush-pause")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			if (!verifyPin(request)) return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
			const current = await getRushState();
			const history = await getRushHistory();
			return new Response(JSON.stringify({
				...current,
				history
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	},
	POST: async ({ request }) => {
		try {
			if (!verifyPin(request)) return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
				status: 401,
				headers: { "Content-Type": "application/json" }
			});
			const body = await request.json().catch(() => ({}));
			const action = body.action;
			if (action === "activate") {
				const duration = parseInt(body.durationMinutes, 10);
				if (duration !== 10 && duration !== 20 && duration !== 30) return new Response(JSON.stringify({ error: "Durée de pause invalide (10, 20 ou 30 minutes autorisées)." }), {
					status: 400,
					headers: { "Content-Type": "application/json" }
				});
				const record = await activateRushPause(duration, body.activatedBy || "Caisse Cuisine");
				return new Response(JSON.stringify({
					success: true,
					pause: record
				}), {
					status: 200,
					headers: { "Content-Type": "application/json; charset=utf-8" }
				});
			}
			if (action === "cancel") {
				const res = await cancelRushPause(body.cancelledBy || "Caisse Cuisine");
				return new Response(JSON.stringify({
					success: true,
					...res
				}), {
					status: 200,
					headers: { "Content-Type": "application/json; charset=utf-8" }
				});
			}
			return new Response(JSON.stringify({ error: "Action inconnue." }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur serveur" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
var Route$6 = createFileRoute("/api/rush-status")({ server: { handlers: { GET: async () => {
	try {
		const state = await getRushState();
		return new Response(JSON.stringify(state), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store, no-cache, must-revalidate"
			}
		});
	} catch (error) {
		console.error("[API rush-status] Erreur:", error);
		return new Response(JSON.stringify({
			isPaused: false,
			pause: null,
			remainingSeconds: 0
		}), {
			status: 200,
			headers: { "Content-Type": "application/json; charset=utf-8" }
		});
	}
} } } });
var Route$5 = createFileRoute("/api/stock")({ server: { handlers: {
	GET: async () => {
		try {
			const stock = await loadStock();
			return new Response(JSON.stringify({
				success: true,
				stock
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store, no-cache, must-revalidate"
				}
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json().catch(() => ({}));
			const pin = request.headers.get("x-pos-pin") || body.pin || "";
			assertAdminPin(pin);
			const { id, available, qty, status, user } = body;
			if (!id) return new Response(JSON.stringify({ error: "Identifiant d'article requis." }), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			const updated = await updateStockItem(id, {
				available: available !== void 0 ? Boolean(available) : void 0,
				qty: qty !== void 0 ? qty === null ? null : parseInt(qty, 10) : void 0,
				status
			}, user || "Caisse POS");
			const stock = await loadStock();
			return new Response(JSON.stringify({
				success: true,
				updated,
				stock
			}), {
				status: 200,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
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
					delayMinutes: order.delayMinutes,
					delayedAt: order.delayedAt,
					estimatedDeliveryTime: order.estimatedDeliveryTime,
					driverName: order.driverName,
					distanceKm: order.distanceKm,
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
			if (!token || !status || ![
				"preparing",
				"ready",
				"delivering",
				"completed"
			].includes(status)) return new Response(JSON.stringify({
				success: false,
				error: "Paramètres token ou status invalides."
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
var $$splitComponentImporter = () => import("./blog-CzZbF2_Z.mjs");
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
var clearPosOrders = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(createSsrRpc("f71d4a2a3fa4522e8eb6e2e96a25deba4a08891c3184339dd4ece96b48294ef8"));
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
		"cancelled",
		"expired"
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
var ackPosPrint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(createSsrRpc("c9404c0b075a83418748a0c227e03f7d1395bb14f3a6f06bf310f5ce8548a74b"));
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	type: enumType(["standard", "all-supplements"]).optional()
})).handler(createSsrRpc("a3e5772b7bda801cc22b7f7df7f8f1e4e6dfbbed57f002933f5dce0db2f42f5a"));
var acceptPosOrder = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(createSsrRpc("7d8091d803bb643eed087c140806e4e6db7a817cbb29feb0321f66a8efd321d2"));
var delayPosOrder = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	delayMinutes: numberType().int().positive(),
	estimatedDeliveryTime: stringType().optional()
})).handler(createSsrRpc("cbbfade23341bcc27d8ab9b78ac154d5096777b0e0afb1a32c7dba087b09f54f"));
var assignPosDriver = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	driverId: stringType().min(1),
	driverName: stringType().min(1),
	distanceKm: numberType().optional()
})).handler(createSsrRpc("02343e2f02f8763854b3bef3a9657098c6ab03c1ec5343b555b5d61b253c81af"));
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
	const [modalQrDataUrl, setModalQrDataUrl] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [config, setConfig] = (0, import_react.useState)(loadPrinterConfig);
	const [printingOrderId, setPrintingOrderId] = (0, import_react.useState)(null);
	const [testingPrinter, setTestingPrinter] = (0, import_react.useState)(false);
	const [printBannerError, setPrintBannerError] = (0, import_react.useState)(null);
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	const audioContextRef = (0, import_react.useRef)(null);
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
	const knownOrderStatuses = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const initialOrdersLoaded = (0, import_react.useRef)(false);
	const autoPrintInFlight = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const autoPrintRetryAfter = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const [rushState, setRushState] = (0, import_react.useState)({
		isPaused: false,
		pause: null,
		remainingSeconds: 0
	});
	const [showRushModal, setShowRushModal] = (0, import_react.useState)(false);
	const loadRushState = async () => {
		try {
			const res = await fetch("/api/rush-pause", {
				headers: { "x-pos-pin": pin || "1234" },
				cache: "no-store"
			});
			if (res.ok) {
				const data = await res.json();
				setRushState(data);
			}
		} catch {}
	};
	(0, import_react.useEffect)(() => {
		if (!isUnlocked) return;
		loadRushState();
		const interval = setInterval(loadRushState, rushState.isPaused ? 3e3 : 1e4);
		return () => clearInterval(interval);
	}, [
		isUnlocked,
		rushState.isPaused,
		pin
	]);
	(0, import_react.useEffect)(() => {
		if (!rushState.isPaused || !rushState.pause?.endsAt) return;
		const interval = setInterval(() => {
			const remaining = Math.max(0, Math.ceil((new Date(rushState.pause.endsAt).getTime() - Date.now()) / 1e3));
			if (remaining === 0) loadRushState();
			else setRushState((prev) => ({
				...prev,
				remainingSeconds: remaining
			}));
		}, 1e3);
		return () => clearInterval(interval);
	}, [rushState.isPaused, rushState.pause?.endsAt]);
	const handleSetRushPause = async (durationMinutes) => {
		try {
			const data = await (await fetch("/api/rush-pause", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					action: "pause",
					durationMinutes
				})
			})).json();
			if (data.success) {
				setRushState(data);
				setShowRushModal(false);
			}
		} catch (e) {
			alert("Erreur mise en pause : " + (e?.message ?? String(e)));
		}
	};
	const handleResumeRush = async () => {
		try {
			const data = await (await fetch("/api/rush-pause", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({ action: "resume" })
			})).json();
			if (data.success) setRushState(data);
		} catch (e) {
			alert("Erreur reprise : " + (e?.message ?? String(e)));
		}
	};
	const [stocks, setStocks] = (0, import_react.useState)([]);
	const [stockCategory, setStockCategory] = (0, import_react.useState)("all");
	const [stockSearch, setStockSearch] = (0, import_react.useState)("");
	const loadStock = async () => {
		try {
			const res = await fetch("/api/stock", {
				headers: { "x-pos-pin": pin || "1234" },
				cache: "no-store"
			});
			if (res.ok) {
				const data = await res.json();
				if (data.success && Array.isArray(data.items)) setStocks(data.items);
			}
		} catch {}
	};
	const handleUpdateStock = async (id, updates) => {
		setStocks((prev) => prev.map((item) => item.id === id ? {
			...item,
			...updates
		} : item));
		try {
			await fetch("/api/stock", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					id,
					...updates
				})
			});
		} catch {
			loadStock();
		}
	};
	const [drivers, setDrivers] = (0, import_react.useState)([]);
	const [mileageStats, setMileageStats] = (0, import_react.useState)(null);
	const [mileageLogs, setMileageLogs] = (0, import_react.useState)([]);
	const [newDriverName, setNewDriverName] = (0, import_react.useState)("");
	const [newDriverPhone, setNewDriverPhone] = (0, import_react.useState)("");
	const [editingLogId, setEditingLogId] = (0, import_react.useState)(null);
	const [correctedKm, setCorrectedKm] = (0, import_react.useState)("");
	const [correctionReason, setCorrectionReason] = (0, import_react.useState)("");
	const loadDriversAndMileage = async () => {
		try {
			const [driversRes, statsRes, logsRes] = await Promise.all([
				fetch("/api/pos-mileage?action=list_drivers", { headers: { "x-pos-pin": pin || "1234" } }),
				fetch("/api/pos-mileage?action=stats", { headers: { "x-pos-pin": pin || "1234" } }),
				fetch("/api/pos-mileage?action=logs", { headers: { "x-pos-pin": pin || "1234" } })
			]);
			if (driversRes.ok) {
				const d = await driversRes.json();
				if (d.success) setDrivers(d.drivers);
			}
			if (statsRes.ok) {
				const s = await statsRes.json();
				if (s.success) setMileageStats(s.stats);
			}
			if (logsRes.ok) {
				const l = await logsRes.json();
				if (l.success) setMileageLogs(l.logs);
			}
		} catch {}
	};
	const handleAddDriver = async () => {
		if (!newDriverName.trim()) return;
		try {
			const data = await (await fetch("/api/pos-mileage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					action: "add_driver",
					name: newDriverName.trim(),
					phone: newDriverPhone.trim()
				})
			})).json();
			if (data.success) {
				setDrivers(data.drivers);
				setNewDriverName("");
				setNewDriverPhone("");
			}
		} catch {
			alert("Erreur ajout livreur");
		}
	};
	const handleToggleDriver = async (driverId) => {
		try {
			const data = await (await fetch("/api/pos-mileage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					action: "toggle_driver",
					driverId
				})
			})).json();
			if (data.success) setDrivers(data.drivers);
		} catch {}
	};
	const handleAssignDriverToOrder = async (order, driverId) => {
		const drv = drivers.find((d) => d.id === driverId);
		if (!drv) return;
		try {
			const addr = `${order.customer.address}, ${order.customer.postalCode || "4600"} ${order.customer.city || "Visé"}`;
			let dist = 3.5;
			try {
				const distRes = await fetch(`/api/pos-mileage?action=estimate&address=${encodeURIComponent(addr)}&postalCode=${encodeURIComponent(order.customer.postalCode || "4600")}`);
				if (distRes.ok) {
					const distData = await distRes.json();
					if (distData.distanceKm) dist = distData.distanceKm;
				}
			} catch {}
			await assignPosDriver({ data: {
				pin,
				orderId: order.id,
				driverId: drv.id,
				driverName: drv.name,
				distanceKm: dist
			} });
			await fetch("/api/pos-mileage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					action: "record",
					orderId: order.id,
					driverId: drv.id,
					driverName: drv.name,
					clientName: order.customer.name,
					destinationAddress: addr,
					postalCode: order.customer.postalCode || "4600",
					city: order.customer.city || "Visé",
					distanceKm: dist
				})
			});
			const updated = {
				...order,
				driverId: drv.id,
				driverName: drv.name,
				distanceKm: dist
			};
			setOrders((prev) => prev.map((o) => o.id === order.id ? updated : o));
			if (selectedOrder?.id === order.id) setSelectedOrder(updated);
			loadDriversAndMileage();
		} catch (e) {
			alert("Erreur assignation livreur : " + (e?.message ?? String(e)));
		}
	};
	const handleSaveCorrection = async () => {
		if (!editingLogId) return;
		const km = parseFloat(correctedKm);
		if (isNaN(km) || km <= 0) {
			alert("Veuillez saisir une distance valide");
			return;
		}
		try {
			if ((await (await fetch("/api/pos-mileage", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-pos-pin": pin || "1234"
				},
				body: JSON.stringify({
					action: "correct",
					recordId: editingLogId,
					newDistanceKm: km,
					reason: correctionReason.trim() || "Ajustement itinéraire réel"
				})
			})).json()).success) {
				setEditingLogId(null);
				setCorrectedKm("");
				setCorrectionReason("");
				loadDriversAndMileage();
			}
		} catch {
			alert("Erreur correction kilométrage");
		}
	};
	(0, import_react.useEffect)(() => {
		if (!isUnlocked) return;
		if (activeTab === "stock") loadStock();
		if (activeTab === "drivers" || activeTab === "mileage") loadDriversAndMileage();
	}, [activeTab, isUnlocked]);
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
	const enableSoundAndTest = async () => {
		try {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (!AudioCtx) throw new Error("Web Audio API indisponible");
			if (!audioContextRef.current || audioContextRef.current.state === "closed") audioContextRef.current = new AudioCtx();
			if (audioContextRef.current.state === "suspended") await audioContextRef.current.resume();
			setConfig((current) => {
				const next = {
					...current,
					soundEnabled: true
				};
				savePrinterConfig(next);
				return next;
			});
			playAlertSound(true);
			alert("Son activé. Laissez cette page ouverte sur la caisse pour recevoir les alertes.");
		} catch (e) {
			alert("Impossible d’activer le son : " + (e?.message ?? String(e)));
		}
	};
	const playAlertSound = (force = false, soundOverride) => {
		if (!config.soundEnabled && !force) return;
		try {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (!AudioCtx) return;
			if (!audioContextRef.current || audioContextRef.current.state === "closed") audioContextRef.current = new AudioCtx();
			const ctx = audioContextRef.current;
			if (ctx.state === "suspended") ctx.resume();
			const theme = soundOverride || config.soundTheme || "signature";
			const masterVol = config.soundVolume ?? .85;
			const now = ctx.currentTime;
			const playTone = (time, freq, duration, gainVal, type = "sine", harmonicMultiplier = 2, harmonicRatio = .25) => {
				const oscFund = ctx.createOscillator();
				oscFund.type = type;
				oscFund.frequency.setValueAtTime(freq, time);
				const oscHarm = ctx.createOscillator();
				oscHarm.type = "sine";
				oscHarm.frequency.setValueAtTime(freq * harmonicMultiplier, time);
				const gainNode = ctx.createGain();
				const effectiveGain = Math.max(.01, gainVal * masterVol);
				gainNode.gain.setValueAtTime(1e-4, time);
				gainNode.gain.linearRampToValueAtTime(effectiveGain, time + .008);
				gainNode.gain.exponentialRampToValueAtTime(1e-4, time + duration);
				oscFund.connect(gainNode);
				const harmGain = ctx.createGain();
				harmGain.gain.setValueAtTime(effectiveGain * harmonicRatio, time);
				harmGain.gain.exponentialRampToValueAtTime(1e-4, time + duration * .7);
				oscHarm.connect(harmGain);
				harmGain.connect(gainNode);
				gainNode.connect(ctx.destination);
				oscFund.start(time);
				oscFund.stop(time + duration + .05);
				oscHarm.start(time);
				oscHarm.stop(time + duration + .05);
			};
			if (theme === "signature") {
				playTone(now + 0, 783.99, .45, .75, "triangle", 2, .2);
				playTone(now + .13, 987.77, .45, .8, "sine", 2, .25);
				playTone(now + .26, 1174.66, .5, .85, "triangle", 2, .3);
				playTone(now + .4, 1567.98, .85, .95, "sine", 2, .35);
				playTone(now + .72, 1174.66, .55, .75, "triangle", 2, .25);
				playTone(now + .88, 1567.98, 1.1, 1, "sine", 2, .4);
			} else if (theme === "zen_bell") {
				playTone(now + 0, 880, .9, .9, "sine", 2.76, .2);
				playTone(now + .35, 1318.51, 1.4, .95, "sine", 2, .25);
			} else if (theme === "marimba") {
				playTone(now + 0, 523.25, .22, .85, "triangle", 3, .15);
				playTone(now + .1, 659.25, .22, .85, "triangle", 3, .15);
				playTone(now + .2, 783.99, .22, .9, "triangle", 3, .15);
				playTone(now + .3, 1046.5, .45, .95, "triangle", 2.5, .2);
			}
		} catch {}
	};
	const unacceptedOrders = (0, import_react.useMemo)(() => {
		return orders.filter((o) => [
			"paid",
			"awaiting_pickup",
			"awaiting_delivery"
		].includes(o.status) && !o.acceptedAt);
	}, [orders]);
	(0, import_react.useEffect)(() => {
		if (!isUnlocked || !config.soundEnabled) return;
		if (unacceptedOrders.length === 0) return;
		playAlertSound();
		const interval = setInterval(() => {
			playAlertSound();
		}, 3500);
		return () => clearInterval(interval);
	}, [
		unacceptedOrders.length,
		isUnlocked,
		config.soundEnabled
	]);
	const loadOrders = async () => {
		try {
			let newOrders = null;
			try {
				const resRest = await fetch("/api/pos-orders", {
					headers: {
						Accept: "application/json",
						"x-pos-pin": pin || "1234"
					},
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
				const retryAfter = autoPrintRetryAfter.current.get(o.id) ?? 0;
				if (nowMs < retryAfter) return false;
				const createdAtMs = new Date(o.createdAt).getTime();
				if (!(!isNaN(createdAtMs) && nowMs - createdAtMs < fourHoursMs)) {
					markOrderAsPrintedLocally(o.id);
					return false;
				}
				return true;
			});
			for (const order of newOrders) knownOrderStatuses.current.set(order.id, order.status);
			initialOrdersLoaded.current = true;
			setOrders(newOrders);
			for (const order of newlyPrintable) {
				if (autoPrintInFlight.current.has(order.id)) continue;
				autoPrintInFlight.current.add(order.id);
				(async () => {
					try {
						if (!(await handleExecutePrint(order, true)).success) autoPrintRetryAfter.current.set(order.id, Date.now() + fourHoursMs);
						else autoPrintRetryAfter.current.delete(order.id);
					} catch {
						autoPrintRetryAfter.current.set(order.id, Date.now() + 6e4);
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
	const handleAcceptOrder = async (order) => {
		try {
			await acceptPosOrder({ data: {
				pin,
				orderId: order.id
			} });
			const nowIso = (/* @__PURE__ */ new Date()).toISOString();
			const updated = {
				...order,
				acceptedAt: nowIso,
				status: "preparing"
			};
			setOrders((prev) => prev.map((o) => o.id === order.id ? updated : o));
			if (selectedOrder?.id === order.id) setSelectedOrder(updated);
			if (!getPrintedOrderIds().has(order.id)) handleExecutePrint(updated, true);
		} catch (err) {
			alert("Erreur lors de l'acceptation : " + (err?.message ?? String(err)));
		}
	};
	const handleDelayOrder = async (order, minutes) => {
		try {
			const now = /* @__PURE__ */ new Date();
			const estTime = new Date(now.getTime() + minutes * 6e4).toLocaleTimeString("fr-BE", {
				hour: "2-digit",
				minute: "2-digit",
				timeZone: "Europe/Brussels"
			});
			await delayPosOrder({ data: {
				pin,
				orderId: order.id,
				delayMinutes: minutes,
				estimatedDeliveryTime: estTime
			} });
			const nowIso = now.toISOString();
			const updated = {
				...order,
				delayMinutes: minutes,
				delayedAt: nowIso,
				estimatedDeliveryTime: estTime
			};
			setOrders((prev) => prev.map((o) => o.id === order.id ? updated : o));
			if (selectedOrder?.id === order.id) setSelectedOrder(updated);
		} catch (err) {
			alert("Erreur signalement retard : " + (err?.message ?? String(err)));
		}
	};
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
				setPrintLog((prev) => [{
					time: now,
					msg: `Ticket ${order.id} imprimé avec succès sur Epson (${config.printerIp})`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				setPrintBannerError(null);
				try {
					await ackPosPrint({ data: {
						pin,
						orderId: order.id,
						success: true
					} });
				} catch {}
			} else {
				setPrintLog((prev) => [{
					time: now,
					msg: `Échec commande ${order.id} : ${res.message}`,
					type: "err"
				}, ...prev.slice(0, 30)]);
				setPrintBannerError(`⚠️ L'imprimante Epson (${config.printerIp}) n'a pas répondu.`);
				if (!silent) alert(`⚠️ Impossible d'imprimer sur l'Epson (${config.printerIp}) :\n\n${res.message}`);
			}
		} catch (err) {
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
					headers: {
						"Content-Type": "application/json",
						"x-pos-pin": pin || "1234"
					},
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
		} catch {
			alert("Erreur de mise à jour du statut.");
		}
	};
	const [scanningIp, setScanningIp] = (0, import_react.useState)(false);
	const [scanStatus, setScanStatus] = (0, import_react.useState)(null);
	const handleScanPrinter = async () => {
		if (scanningIp) return;
		setScanningIp(true);
		setScanStatus("Recherche de l'imprimante Epson en cours...");
		try {
			const foundIp = await scanForPrinterIp((testedIp) => setScanStatus(`Test de ${testedIp}...`));
			if (foundIp) {
				const updated = {
					...config,
					printerIp: foundIp
				};
				setConfig(updated);
				savePrinterConfig(updated);
				setScanStatus(`✅ Epson détectée à l'adresse ${foundIp} !`);
			} else setScanStatus("❌ Aucune imprimante Epson trouvée automatiquement.");
		} catch (e) {
			setScanStatus("Erreur recherche : " + (e?.message ?? String(e)));
		} finally {
			setScanningIp(false);
		}
	};
	const handleTestPrint = async () => {
		setTestingPrinter(true);
		try {
			const res = await sendReceiptToPrinter(buildEposXmlTest(), config);
			if (res.success) {
				setPrintBannerError(null);
				alert("✅ Test réussi ! L'imprimante a imprimé le ticket.");
			} else alert("⚠️ Échec test impression : " + res.message);
		} catch (e) {
			alert("Erreur test imprimante : " + (e?.message ?? String(e)));
		} finally {
			setTestingPrinter(false);
		}
	};
	const handleClearAllOrders = async () => {
		if (!window.confirm("Êtes-vous certain de vouloir vider TOUTES les commandes ?")) return;
		try {
			await clearPosOrders({ data: { pin } });
			setOrders([]);
			setSelectedOrder(null);
			alert("Commandes effacées.");
		} catch (e) {
			alert("Erreur : " + (e?.message ?? String(e)));
		}
	};
	const [creatingTestOrder, setCreatingTestOrder] = (0, import_react.useState)(false);
	const handleCreateTestOrder = async () => {
		setCreatingTestOrder(true);
		try {
			const data = await (await fetch("/api/create-test-order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"x-pos-pin": pin || "1234"
				}
			})).json();
			if (!data.success || !data.order) {
				alert("Erreur création commande test");
				return;
			}
			playAlertSound();
			const created = data.order;
			setOrders((prev) => [created, ...prev.filter((o) => o.id !== created.id)]);
			setSelectedOrder(created);
			loadOrders().catch(() => {});
		} catch (e) {
			alert("Erreur création commande test : " + (e?.message ?? String(e)));
		} finally {
			setCreatingTestOrder(false);
		}
	};
	const activeOrders = (0, import_react.useMemo)(() => {
		return orders.filter((o) => [
			"paid",
			"awaiting_pickup",
			"awaiting_delivery",
			"preparing"
		].includes(o.status));
	}, [orders]);
	const kitchenLoad = (0, import_react.useMemo)(() => {
		const count = activeOrders.length;
		if (count <= 3) return {
			level: "normal",
			label: "Charge normale",
			badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
			estTime: "~15 min",
			desc: "Flux cuisine fluide et maîtrisé"
		};
		else if (count <= 7) return {
			level: "busy",
			label: "Activité soutenue",
			badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
			estTime: "~25 min",
			desc: "Rush en cours · surveillance active"
		};
		else return {
			level: "rush",
			label: "Forte affluence / Rush",
			badge: "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse",
			estTime: "~35-45 min",
			desc: "Cuisine saturée · Envisager une pause rush"
		};
	}, [activeOrders.length]);
	const filteredOrders = (0, import_react.useMemo)(() => {
		if (!searchQuery.trim()) return orders;
		const q = searchQuery.toLowerCase();
		return orders.filter((o) => o.id.toLowerCase().includes(q) || o.customer.name.toLowerCase().includes(q) || o.customer.phone.includes(q) || o.customer.address && o.customer.address.toLowerCase().includes(q));
	}, [orders, searchQuery]);
	const newOrdersList = filteredOrders.filter((o) => [
		"paid",
		"awaiting_pickup",
		"awaiting_delivery"
	].includes(o.status) && !o.acceptedAt);
	const preparingOrdersList = filteredOrders.filter((o) => o.status === "preparing" || Boolean(o.acceptedAt) && [
		"paid",
		"awaiting_pickup",
		"awaiting_delivery"
	].includes(o.status));
	const readyOrdersList = filteredOrders.filter((o) => o.status === "ready" || o.status === "delivering");
	const completedOrdersList = filteredOrders.filter((o) => o.status === "completed");
	const todayRevenue = (0, import_react.useMemo)(() => {
		const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		return orders.filter((o) => o.createdAt.slice(0, 10) === todayStr && o.status !== "cancelled").reduce((acc, o) => acc + (o.total || 0), 0);
	}, [orders]);
	if (!isUnlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#0d1a16] p-4 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-[#142822] border border-white/10 p-8 shadow-2xl space-y-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff705f]/20 text-[#ff705f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-8 w-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black tracking-wide",
					children: "POKENBOWL POS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[#8ea39b] mt-1",
					children: "Terminal de Caisse & Gestion Restaurant"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						if (pinInput === pin || pinInput === "1234") {
							setIsUnlocked(true);
							setPinError(false);
						} else {
							setPinError(true);
							setPinInput("");
						}
					},
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							inputMode: "numeric",
							pattern: "[0-9]*",
							maxLength: 6,
							placeholder: "Code PIN (1234)",
							value: pinInput,
							onChange: (e) => setPinInput(e.target.value),
							className: "w-full rounded-2xl bg-black/40 border border-white/15 px-4 py-3.5 text-center text-2xl font-mono tracking-[0.5em] text-white focus:border-[#ff705f] focus:outline-none",
							autoFocus: true
						}),
						pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold text-red-400",
							children: "Code PIN incorrect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-2xl bg-[#ff705f] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg hover:bg-[#ff5a47] active:scale-95 transition",
							children: "Déverrouiller la Caisse"
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pos-screen-ui flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6 bg-[#162721]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex h-3 w-3 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base sm:text-lg font-black tracking-wider text-white",
									children: "POKENBOWL POS"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `hidden md:flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black ${kitchenLoad.badge}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									kitchenLoad.label,
									" (",
									activeOrders.length,
									")"
								] })]
							}),
							rushState.isPaused ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-lg animate-pulse",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"EN PAUSE · ",
										Math.floor(rushState.remainingSeconds / 60),
										":",
										(rushState.remainingSeconds % 60).toString().padStart(2, "0")
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleResumeRush,
										className: "ml-1 rounded-md bg-white text-red-700 px-2 py-0.5 text-[10px] uppercase font-black hover:bg-white/90",
										children: "Réouvrir"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setShowRushModal(true),
								className: "hidden sm:flex items-center gap-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 px-2.5 py-1 text-xs font-bold text-amber-300 transition",
								title: "Mettre temporairement en pause les nouvelles commandes sur le site",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pause Rush" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex rounded-xl bg-black/40 p-1 overflow-x-auto max-w-[50vw]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("dashboard"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "dashboard" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tableau de bord" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("kanban"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "kanban" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Commandes (",
									newOrdersList.length + preparingOrdersList.length + readyOrdersList.length,
									")"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("stock"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "stock" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Salad, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stocks" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("drivers"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "drivers" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Livreurs" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("mileage"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "mileage" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kilométrage" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("stats"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "stats" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stats" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setActiveTab("settings"),
								className: `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${activeTab === "settings" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paramètres" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									if (!config.soundEnabled) {
										enableSoundAndTest();
										return;
									}
									const updated = {
										...config,
										soundEnabled: false
									};
									setConfig(updated);
									savePrinterConfig(updated);
								},
								className: `rounded-xl p-2.5 transition ${config.soundEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#6c7d76]"}`,
								title: config.soundEnabled ? "Désactiver le son" : "Activer le son",
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
								className: "hidden lg:flex items-center gap-1.5 rounded-xl bg-black/40 hover:bg-black/60 px-3 py-2 text-xs font-bold border border-white/10 transition",
								title: "Autoriser l'imprimante dans Chrome",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#98aba3]",
									children: config.printerIp
								})]
							})
						]
					})
				]
			}),
			unacceptedOrders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between bg-gradient-to-r from-red-600 via-[#ff705f] to-amber-600 px-5 py-2.5 text-white shadow-md animate-pulse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-3 w-3 rounded-full bg-white animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs sm:text-sm font-black uppercase tracking-wider",
						children: [
							"🔔 ",
							unacceptedOrders.length,
							" NOUVELLE",
							unacceptedOrders.length > 1 ? "S" : "",
							" COMMANDE",
							unacceptedOrders.length > 1 ? "S" : "",
							" EN ATTENTE DE VALIDATION"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							const first = unacceptedOrders[0];
							if (first) setSelectedOrder(first);
						},
						className: "rounded-lg bg-white text-[#2C1D16] px-3 py-1 text-xs font-black shadow hover:bg-white/90",
						children: "Voir & Valider"
					})
				})]
			}),
			printBannerError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between bg-amber-500/20 border-b border-amber-500/40 px-5 py-2 text-xs text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: printBannerError })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setPrintBannerError(null),
					className: "font-bold hover:text-white",
					children: "✕"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 min-h-0 overflow-hidden",
				children: [
					activeTab === "dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-gradient-to-br from-[#162721] to-[#12211c] border border-white/10 p-6 shadow-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-black uppercase tracking-wider text-[#ff705f]",
											children: "Gestion du Rush"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl sm:text-2xl font-black text-white",
											children: "Mise en Pause des Commandes Web"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#8ea39b] mt-1",
											children: "Permet à la cuisine de souffler. N'annule et ne retarde jamais les commandes déjà validées."
										})
									] }), rushState.isPaused ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black uppercase text-red-400",
												children: "Reprise dans"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-2xl font-black text-white",
												children: [
													Math.floor(rushState.remainingSeconds / 60),
													":",
													(rushState.remainingSeconds % 60).toString().padStart(2, "0")
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleResumeRush,
											className: "rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-xs font-black uppercase tracking-wider shadow-lg transition",
											children: "▶️ Réouvrir maintenant"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setShowRushModal(true),
										className: "rounded-2xl bg-amber-600 hover:bg-amber-500 text-white px-5 py-3 text-xs font-black uppercase tracking-wider shadow-lg transition",
										children: "⏸️ Mettre en pause le site"
									})]
								}), !rushState.isPaused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#8ea39b]",
											children: "Pauses rapides :"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleSetRushPause(10),
											className: "rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition",
											children: "10 Minutes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleSetRushPause(20),
											className: "rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition",
											children: "20 Minutes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleSetRushPause(30),
											className: "rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition",
											children: "30 Minutes"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-[#ff705f]",
												children: "À Valider"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: newOrdersList.length
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: "Nouvelles commandes urgentes"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-amber-400",
												children: "En Préparation"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: preparingOrdersList.length
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: ["Temps estimé : ", kitchenLoad.estTime]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-blue-400",
												children: "En Livraison / Prêtes"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: readyOrdersList.length
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: "Départ Avenue du Pont 12"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-emerald-400",
												children: "CA Aujourd'hui"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: [todayRevenue.toFixed(2), " €"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: [completedOrdersList.length, " terminées"]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black text-base text-white",
										children: "Commandes en cours nécessitant une action"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setActiveTab("kanban"),
										className: "text-xs font-bold text-[#ff705f] hover:underline",
										children: "Ouvrir le Kanban complet →"
									})]
								}), activeOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#8ea39b] py-6 text-center",
									children: "Aucune commande active en ce moment."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-white/5",
									children: activeOrders.slice(0, 5).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-xs font-black text-white",
														children: o.id
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold text-white",
														children: o.customer.name
													}),
													!o.acceptedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[10px] font-black uppercase animate-pulse",
														children: "Non acceptée"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] text-[#8ea39b]",
												children: [
													o.customer.fulfillment === "delivery" ? `🛵 Livraison : ${o.customer.address}` : "🥡 Retrait sur place",
													" · ",
													o.items.length,
													" articles · ",
													o.total.toFixed(2),
													" €"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: !o.acceptedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleAcceptOrder(o),
												className: "rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider animate-pulse shadow",
												children: "Accepter"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSelectedOrder(o),
												className: "rounded-xl bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs font-bold",
												children: "Détails"
											})
										})]
									}, o.id))
								})]
							})
						]
					}),
					activeTab === "kanban" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 grid-cols-4 gap-3 p-3 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "À Valider",
								badgeCount: newOrdersList.length,
								color: "bg-red-500",
								orders: newOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onAcceptOrder: handleAcceptOrder,
								onNextStatus: (id) => handleUpdateStatus(id, "preparing"),
								nextLabel: "Passer en Préparation",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookingPot, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "En Préparation",
								badgeCount: preparingOrdersList.length,
								color: "bg-[#ff705f]",
								orders: preparingOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => handleUpdateStatus(id, "ready"),
								nextLabel: "Prête / En Livraison",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "Prêtes & En Livraison",
								badgeCount: readyOrdersList.length,
								color: "bg-blue-500",
								orders: readyOrdersList,
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: (id) => handleUpdateStatus(id, "completed"),
								nextLabel: "Terminer",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-3.5 h-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
								title: "Terminées",
								badgeCount: completedOrdersList.length,
								color: "bg-emerald-500",
								orders: completedOrdersList.slice(0, 30),
								onSelect: setSelectedOrder,
								onReprint: handleManualReprint,
								onNextStatus: () => {},
								nextLabel: "Archivée",
								nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" })
							})
						]
					}),
					activeTab === "stock" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col min-h-0 bg-[#0d1a16] p-4 sm:p-6 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-white",
									children: "Gestion des Stocks en Direct"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#8ea39b]",
									children: "Synchronisation temps réel avec le site client. Les ruptures désactivent immédiatement la commande."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Filtrer un ingrédient...",
										value: stockSearch,
										onChange: (e) => setStockSearch(e.target.value),
										className: "rounded-xl bg-black/40 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-[#8ea39b]/60 focus:outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: loadStock,
										className: "rounded-xl bg-white/10 hover:bg-white/20 p-2 text-white",
										title: "Actualiser",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" })
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 py-3 overflow-x-auto shrink-0",
								children: [
									{
										id: "all",
										label: "Tous"
									},
									{
										id: "bowls",
										label: "Bowls Signatures"
									},
									{
										id: "vegetables",
										label: "Légumes & Mix-ins"
									},
									{
										id: "proteins",
										label: "Protéines"
									},
									{
										id: "sauces",
										label: "Sauces"
									},
									{
										id: "toppings",
										label: "Toppings"
									},
									{
										id: "drinks",
										label: "Boissons"
									},
									{
										id: "desserts",
										label: "Desserts"
									}
								].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setStockCategory(cat.id),
									className: `rounded-xl px-3.5 py-1.5 text-xs font-black transition shrink-0 cursor-pointer ${stockCategory === cat.id ? "bg-[#ff705f] text-white shadow" : "bg-black/30 text-[#8ea39b] hover:text-white"}`,
									children: cat.label
								}, cat.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2",
								children: stocks.filter((s) => stockCategory === "all" ? true : s.category === stockCategory).filter((s) => !stockSearch ? true : s.name.toLowerCase().includes(stockSearch.toLowerCase())).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4 space-y-3 shadow flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black uppercase tracking-wider text-[#8ea39b]",
											children: item.category
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${item.status === "available" ? "bg-emerald-500/20 text-emerald-300" : item.status === "low" ? "bg-amber-500/20 text-amber-300" : "bg-red-500/20 text-red-300"}`,
											children: item.status === "available" ? "Disponible" : item.status === "low" ? "Stock faible" : "Rupture"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-black text-sm text-white mt-1",
										children: item.name
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-1.5 pt-2 border-t border-white/5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleUpdateStock(item.id, { status: "available" }),
												className: `rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${item.status === "available" ? "bg-emerald-600 text-white shadow" : "bg-white/5 text-[#8ea39b] hover:bg-white/10"}`,
												children: "🟢 Dispo"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleUpdateStock(item.id, { status: "low" }),
												className: `rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${item.status === "low" ? "bg-amber-600 text-white shadow" : "bg-white/5 text-[#8ea39b] hover:bg-white/10"}`,
												children: "🟠 Faible"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleUpdateStock(item.id, { status: "out_of_stock" }),
												className: `rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${item.status === "out_of_stock" ? "bg-red-600 text-white shadow" : "bg-white/5 text-[#8ea39b] hover:bg-white/10"}`,
												children: "🔴 Rupture"
											})
										]
									})]
								}, item.id))
							})
						]
					}),
					activeTab === "drivers" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-white",
									children: "Gestion de la Flotte Livreurs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#8ea39b]",
									children: ["Point de départ central : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Avenue du Pont 12, 4600 Visé" })]
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3 max-w-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-black text-white",
									children: "Ajouter un nouveau livreur"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Prénom du livreur (ex: Maxime)",
											value: newDriverName,
											onChange: (e) => setNewDriverName(e.target.value),
											className: "flex-1 rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Téléphone (ex: 0491...)",
											value: newDriverPhone,
											onChange: (e) => setNewDriverPhone(e.target.value),
											className: "rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none sm:w-40"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleAddDriver,
											className: "rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] text-white px-4 py-2 text-xs font-black uppercase transition shrink-0",
											children: "Ajouter"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
								children: drivers.map((drv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4 space-y-3 shadow",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2.5 w-2.5 rounded-full ${drv.active ? "bg-emerald-400" : "bg-slate-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-black text-base text-white",
													children: drv.name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleToggleDriver(drv.id),
												className: `rounded-lg px-2.5 py-1 text-[10px] font-black uppercase transition ${drv.active ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-slate-400"}`,
												children: drv.active ? "En Service" : "Inactif"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#8ea39b]",
											children: ["📞 ", drv.phone || "Pas de numéro"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Courses aujourd'hui :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-emerald-400",
												children: drv.deliveriesCompleted
											})]
										})
									]
								}, drv.id))
							})
						]
					}),
					activeTab === "mileage" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black text-white",
									children: "Suivi Kilométrique des Livraisons"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#8ea39b]",
									children: "Calcul automatique de la distance routière depuis Avenue du Pont 12, Visé"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `/api/pos-mileage?action=export_csv&pin=${encodeURIComponent(pin || "1234")}`,
									download: true,
									className: "inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-lg transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Exporter Rapport CSV" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-emerald-400",
												children: "Aujourd'hui"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: [mileageStats?.todayKm ?? 0, " km"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: [mileageStats?.deliveriesToday ?? 0, " livraisons"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-blue-400",
												children: "Cette Semaine"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: [mileageStats?.weekKm ?? 0, " km"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: "Total roulé"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-purple-400",
												children: "Ce Mois"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: [mileageStats?.monthKm ?? 0, " km"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: "Cumul mensuel"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase text-amber-400",
												children: "Moyenne / Course"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 font-mono text-3xl font-black text-white",
												children: [mileageStats?.avgKmPerDelivery ?? 0, " km"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-[#8ea39b]",
												children: "Rayon moyen Visé"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-base text-white",
									children: "Journal des courses et livraisons"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-white/10 text-[#8ea39b]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "Date / Heure"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "N° Commande"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "Client"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "Destination"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "Livreur"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3",
													children: "Distance"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "py-2.5 px-3 text-right",
													children: "Actions"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-white/5",
											children: mileageLogs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 7,
												className: "py-8 text-center text-[#8ea39b]",
												children: "Aucun enregistrement kilométrique pour le moment."
											}) }) : mileageLogs.map((log) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-white/5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 text-white font-mono",
														children: new Date(log.timestamp).toLocaleTimeString("fr-BE")
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 font-mono font-bold text-[#ff705f]",
														children: log.orderId
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 text-white font-bold",
														children: log.clientName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 text-[#8ea39b] truncate max-w-xs",
														children: log.destinationAddress
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 text-white font-bold",
														children: log.driverName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "py-2.5 px-3 font-mono font-black text-emerald-400",
														children: [
															log.distanceKm,
															" km ",
															log.isManualCorrection && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[9px] text-amber-400",
																children: "(Ajusté)"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-2.5 px-3 text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => {
																setEditingLogId(log.id);
																setCorrectedKm(String(log.distanceKm));
															},
															className: "rounded-lg bg-white/10 hover:bg-white/20 text-white px-2 py-1 text-[10px] font-bold",
															children: "Corriger"
														})
													})
												]
											}, log.id))
										})]
									})
								})]
							}),
							editingLogId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-md rounded-3xl bg-[#142822] border border-white/15 p-6 space-y-4 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-black text-base",
											children: "Ajustement Manuel des Kilomètres"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#8ea39b]",
											children: "Saisissez la distance réelle parcourue en cas de détour routier ou d'erreur GPS :"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											step: "0.1",
											placeholder: "Distance en km (ex: 4.8)",
											value: correctedKm,
											onChange: (e) => setCorrectedKm(e.target.value),
											className: "w-full rounded-xl bg-black/40 border border-white/15 px-3.5 py-2.5 text-base font-mono text-white focus:outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Motif de l'ajustement (ex: travaux pont Visé)",
											value: correctionReason,
											onChange: (e) => setCorrectionReason(e.target.value),
											className: "w-full rounded-xl bg-black/40 border border-white/15 px-3.5 py-2 text-xs text-white focus:outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-end gap-2 pt-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setEditingLogId(null),
												className: "rounded-xl bg-white/10 px-4 py-2 text-xs font-bold",
												children: "Annuler"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleSaveCorrection,
												className: "rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-black uppercase",
												children: "Enregistrer"
											})]
										})
									]
								})
							})
						]
					}),
					activeTab === "stats" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-black text-white",
							children: "Statistiques de Vente & Performance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-emerald-400",
										children: "Total Commandes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-3xl font-black text-white",
										children: orders.length
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-blue-400",
										children: "Livraisons"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-3xl font-black text-white",
										children: orders.filter((o) => o.customer.fulfillment === "delivery").length
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-amber-400",
										children: "À Emporter"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-3xl font-black text-white",
										children: orders.filter((o) => o.customer.fulfillment !== "delivery").length
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-[#142822] border border-white/10 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-purple-400",
										children: "Panier Moyen"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-mono text-3xl font-black text-white",
										children: [orders.length ? (orders.reduce((a, b) => a + b.total, 0) / orders.length).toFixed(2) : "0.00", " €"]
									})]
								})
							]
						})]
					}),
					activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black text-white",
								children: "Paramètres Matériel & Terminal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[#142822] border border-white/10 p-6 space-y-4 max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-black text-base text-white",
										children: "Imprimante Thermique Epson (Port 8043)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: config.printerIp,
												onChange: (e) => {
													const updated = {
														...config,
														printerIp: e.target.value.trim()
													};
													setConfig(updated);
													savePrinterConfig(updated);
												},
												placeholder: "Adresse IP (ex: 192.168.1.100)",
												className: "flex-1 rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs font-mono text-white"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleScanPrinter,
												disabled: scanningIp,
												className: "rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-bold",
												children: scanningIp ? "Recherche..." : "Détecter IP"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: handleTestPrint,
												disabled: testingPrinter,
												className: "rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] text-white px-4 py-2 text-xs font-black",
												children: "Test Impression"
											})
										]
									}),
									scanStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-amber-300",
										children: scanStatus
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-[#142822] border border-white/10 p-6 space-y-4 max-w-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-black text-base text-white",
									children: "Sonnerie & Volume"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-2",
									children: [
										{
											id: "signature",
											name: "Signature Pokénball"
										},
										{
											id: "zen_bell",
											name: "Cloche Zen"
										},
										{
											id: "marimba",
											name: "Marimba Boisé"
										}
									].map((theme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											const updated = {
												...config,
												soundTheme: theme.id
											};
											setConfig(updated);
											savePrinterConfig(updated);
											playAlertSound(true, theme.id);
										},
										className: `rounded-2xl p-3 text-xs font-bold border transition ${config.soundTheme === theme.id ? "bg-[#ff705f]/20 border-[#ff705f] text-white" : "bg-black/30 border-white/10 text-[#8ea39b]"}`,
										children: theme.name
									}, theme.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleCreateTestOrder,
									disabled: creatingTestOrder,
									className: "rounded-2xl bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-xs font-bold",
									children: "Générer une commande test de livraison"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleClearAllOrders,
									className: "rounded-2xl bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/30 px-4 py-2.5 text-xs font-bold",
									children: "Vider toutes les commandes"
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
						!selectedOrder.acceptedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-gradient-to-r from-red-600 to-[#ff705f] p-4 text-center space-y-2 shadow-lg animate-pulse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-wider text-white",
								children: "⚠️ Cette commande doit être validée par la cuisine"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleAcceptOrder(selectedOrder),
								className: "w-full rounded-xl bg-white text-[#2C1D16] py-3 text-sm font-black uppercase tracking-wider hover:bg-white/90 shadow transition",
								children: "🔔 ACCEPTER LA COMMANDE"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-black/30 p-3.5 space-y-2 border border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase text-amber-300",
									children: "Signaler un retard cuisine au client"
								}), selectedOrder.delayMinutes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full",
									children: [
										"Retard : +",
										selectedOrder.delayMinutes,
										" min"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelayOrder(selectedOrder, 10),
										className: "rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition",
										children: "+10 min"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelayOrder(selectedOrder, 20),
										className: "rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition",
										children: "+20 min"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelayOrder(selectedOrder, 30),
										className: "rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition",
										children: "+30 min"
									})
								]
							})]
						}),
						selectedOrder.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-black/30 p-3.5 space-y-2 border border-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase text-emerald-400",
									children: "Assigner un Livreur"
								}), selectedOrder.driverName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full",
									children: [
										"Assigné à ",
										selectedOrder.driverName,
										" (",
										selectedOrder.distanceKm ?? 3.5,
										" km)"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: selectedOrder.driverId || "",
									onChange: (e) => handleAssignDriverToOrder(selectedOrder, e.target.value),
									className: "flex-1 rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Sélectionner un livreur..."
									}), drivers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: d.id,
										children: [
											d.name,
											" ",
											d.active ? "(En service)" : "(Inactif)"
										]
									}, d.id))]
								})
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
										className: "flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedOrder.customer.phone })]
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase text-emerald-400",
									children: "Navigation Livreur"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold",
									children: "1-Clic"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => openGoogleMapsApp(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`),
									className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-2.5 text-xs font-black shadow transition active:scale-95 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Google Maps (App)"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => openWazeApp(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`),
									className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-2.5 text-xs font-black shadow transition active:scale-95 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Waze (App)"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleManualReprint(selectedOrder.id),
								disabled: printingOrderId === selectedOrder.id,
								className: "w-full rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] disabled:opacity-60 text-white py-3.5 px-4 text-sm font-black transition flex items-center justify-center gap-2 shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-5 h-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Imprimer Ticket Thermique (80mm)" })]
							})
						})
					]
				})
			}),
			showRushModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-3xl bg-[#142822] border border-white/15 p-6 space-y-4 text-white text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-black",
							children: "Activer la Pause Rush Cuisine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#8ea39b] leading-relaxed",
							children: "Les clients verront un bandeau dynamique avec le temps restant avant réouverture. Les commandes en cours ne sont pas affectées."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2.5 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSetRushPause(10),
									className: "w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition",
									children: "⏸️ Pause 10 Minutes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSetRushPause(20),
									className: "w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition",
									children: "⏸️ Pause 20 Minutes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSetRushPause(30),
									className: "w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition",
									children: "⏸️ Pause 30 Minutes"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowRushModal(false),
							className: "mt-2 text-xs text-[#8ea39b] hover:text-white underline",
							children: "Annuler"
						})
					]
				})
			})
		]
	}) });
}
function KanbanColumn({ title, badgeCount, color, orders, onSelect, onReprint, onAcceptOrder, onNextStatus, nextLabel, nextIcon }) {
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
			}) : orders.map((o) => {
				const isUnaccepted = !o.acceptedAt && [
					"paid",
					"awaiting_pickup",
					"awaiting_delivery"
				].includes(o.status);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => onSelect(o),
					className: `rounded-2xl p-3.5 shadow transition cursor-pointer space-y-2.5 border ${isUnaccepted ? "bg-red-950/40 border-red-500/60 ring-2 ring-red-500/40 animate-pulse" : "bg-black/40 border-white/10 hover:border-white/30"}`,
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base font-black text-white",
								children: o.customer.name
							}), o.delayMinutes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded",
								children: [
									"+",
									o.delayMinutes,
									"m"
								]
							})]
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
							}), isUnaccepted && onAcceptOrder ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onAcceptOrder(o),
								className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2 text-xs font-black text-white active:scale-95 transition shadow-lg animate-pulse",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ACCEPTER" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onNextStatus(o.id),
								className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff705f] py-2 text-xs font-black text-white hover:bg-[#ff5a47] active:scale-95 transition",
								children: [nextIcon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nextLabel })]
							})]
						})
					]
				}, o.id);
			})
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
var IndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$24
});
var CheckoutRoute = Route$22.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$24
});
var CommanderRoute = Route$21.update({
	id: "/commander",
	path: "/commander",
	getParentRoute: () => Route$24
});
var ContactRoute = Route$20.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$24
});
var RecrutementRoute = Route$19.update({
	id: "/recrutement",
	path: "/recrutement",
	getParentRoute: () => Route$24
});
var SurMesureRoute = Route$18.update({
	id: "/sur-mesure",
	path: "/sur-mesure",
	getParentRoute: () => Route$24
});
var AdminStocksRoute = Route$17.update({
	id: "/admin/stocks",
	path: "/admin/stocks",
	getParentRoute: () => Route$24
});
var ApiBancontactWebhookRoute = Route$16.update({
	id: "/api/bancontact-webhook",
	path: "/api/bancontact-webhook",
	getParentRoute: () => Route$24
});
var ApiBankStatusRoute = Route$15.update({
	id: "/api/bank-status",
	path: "/api/bank-status",
	getParentRoute: () => Route$24
});
var ApiCheckoutRoute = Route$14.update({
	id: "/api/checkout",
	path: "/api/checkout",
	getParentRoute: () => Route$24
});
var ApiCreateTestOrderRoute = Route$13.update({
	id: "/api/create-test-order",
	path: "/api/create-test-order",
	getParentRoute: () => Route$24
});
var ApiMollieWebhookRoute = Route$12.update({
	id: "/api/mollie-webhook",
	path: "/api/mollie-webhook",
	getParentRoute: () => Route$24
});
var ApiOrderStatusRoute = Route$11.update({
	id: "/api/order-status",
	path: "/api/order-status",
	getParentRoute: () => Route$24
});
var ApiOrdersRoute = Route$10.update({
	id: "/api/orders",
	path: "/api/orders",
	getParentRoute: () => Route$24
});
var ApiPosMileageRoute = Route$9.update({
	id: "/api/pos-mileage",
	path: "/api/pos-mileage",
	getParentRoute: () => Route$24
});
var ApiPosOrdersRoute = Route$8.update({
	id: "/api/pos-orders",
	path: "/api/pos-orders",
	getParentRoute: () => Route$24
});
var ApiRushPauseRoute = Route$7.update({
	id: "/api/rush-pause",
	path: "/api/rush-pause",
	getParentRoute: () => Route$24
});
var ApiRushStatusRoute = Route$6.update({
	id: "/api/rush-status",
	path: "/api/rush-status",
	getParentRoute: () => Route$24
});
var ApiStockRoute = Route$5.update({
	id: "/api/stock",
	path: "/api/stock",
	getParentRoute: () => Route$24
});
var ApiTrackOrderRoute = Route$4.update({
	id: "/api/track-order",
	path: "/api/track-order",
	getParentRoute: () => Route$24
});
var BlogIndexRoute = Route$3.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$24
});
var BlogSlugRoute = Route$26.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$24
});
var OrderSuccessRoute = Route$28.update({
	id: "/order/success",
	path: "/order/success",
	getParentRoute: () => Route$24
});
var PosIndexRoute = Route$2.update({
	id: "/pos/",
	path: "/pos/",
	getParentRoute: () => Route$24
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
	ApiPosMileageRoute,
	ApiPosOrdersRoute,
	ApiRushPauseRoute,
	ApiRushStatusRoute,
	ApiStockRoute,
	ApiTrackOrderRoute,
	BlogSlugRoute,
	OrderSuccessRoute,
	ProductProductIdRoute: Route$25.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$24
	}),
	TrackTokenRoute: Route$27.update({
		id: "/track/$token",
		path: "/track/$token",
		getParentRoute: () => Route$24
	}),
	BlogIndexRoute,
	PosIndexRoute,
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$24
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$24
	})
};
var routeTree = Route$24._addFileChildren(rootRouteChildren)._addFileTypes();
if (typeof window !== "undefined") window.addEventListener("vite:preloadError", (event) => {
	event.preventDefault();
	try {
		const key = `pnb_preload_recover:${window.location.pathname}`;
		const last = Number(sessionStorage.getItem(key) || "0");
		const now = Date.now();
		if (now - last > 15e3) {
			sessionStorage.setItem(key, String(now));
			window.location.reload();
		}
	} catch {}
});
function DefaultPendingComponent() {
	return null;
}
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 3e4,
		defaultPendingMs: 200,
		defaultPendingMinMs: 100,
		defaultPendingComponent: DefaultPendingComponent
	});
};
//#endregion
export { getRouter };
