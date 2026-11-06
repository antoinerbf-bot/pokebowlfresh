import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-CfPib1Ml.mjs";
import { J as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RushPauseBanner-DtN6tzRr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔥 Victime de notre succès · Pause momentanée" })]
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
//#endregion
export { formatRushCountdown as n, useRushState as r, RushPauseBanner as t };
