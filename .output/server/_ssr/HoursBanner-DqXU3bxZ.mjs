import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-CfPib1Ml.mjs";
import { A as Moon, J as Clock } from "../_libs/lucide-react.mjs";
import { n as getServiceSchedule, t as formatCountdown } from "./opening-hours-DTFVo6EQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HoursBanner-DqXU3bxZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
function HoursBanner({ compact = false }) {
	const { language } = useTranslation();
	const [schedule, setSchedule] = (0, import_react.useState)(() => getServiceSchedule());
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setSchedule(getServiceSchedule());
		}, 1e3);
		return () => clearInterval(interval);
	}, []);
	const currentMsg = schedule.messages[language] || schedule.messages.fr;
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `px-3 py-1.5 text-[11px] font-bold flex flex-wrap items-center justify-between gap-2 border-b transition-colors ${schedule.status === "open" ? "bg-emerald-50 text-emerald-900 border-emerald-200" : schedule.status === "before_opening" ? "bg-[#FFF4E5] text-[#8C3B00] border-[#FFD8A8]" : "bg-slate-100 text-slate-800 border-slate-200"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [schedule.status === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex h-2 w-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
				}) : schedule.status === "before_opening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#ea580c]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5 text-slate-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentMsg })]
			}),
			schedule.status === "before_opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 text-[11px] font-black text-[#ea580c]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ouverture dans :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono bg-white/80 px-2 py-0.5 rounded-md border border-[#ea580c]/30",
					children: formatCountdown(schedule.secondsUntilOrderOpen)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] text-black/60 hidden sm:block",
				children: "Livraisons 18h00 – 20h30 · Pas de livraison le midi"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `w-full rounded-2xl border-2 p-3 sm:p-4 transition-all shadow-xs ${schedule.status === "open" ? "border-emerald-300 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 text-emerald-950" : schedule.status === "before_opening" ? "border-[#ea580c]/40 bg-gradient-to-r from-[#FFF6E8] via-[#FFFDF9] to-[#FFF4E5] text-[#2C1D16]" : "border-slate-300 bg-slate-50 text-slate-900"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start sm:items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg shadow-2xs ${schedule.status === "open" ? "bg-emerald-600 text-white" : schedule.status === "before_opening" ? "bg-[#ea580c] text-white" : "bg-slate-700 text-white"}`,
					children: schedule.status === "open" ? "🥢" : schedule.status === "before_opening" ? "⏳" : "🌙"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${schedule.status === "open" ? "bg-emerald-600 text-white" : schedule.status === "before_opening" ? "bg-[#2C1D16] text-[#EADCC9]" : "bg-slate-600 text-white"}`,
						children: schedule.status === "open" ? "Commandes Ouvertes" : schedule.status === "before_opening" ? "Ouverture ce soir à 17h30" : "Fermé pour aujourd'hui"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold text-[#7A6857]",
						children: "🛵 Livraisons 18h00 – 20h30 (aucune livraison le midi)"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm font-black text-[#2C1D16]",
					children: currentMsg
				})] })]
			}), schedule.status === "before_opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-start sm:self-center shrink-0 rounded-xl bg-white border border-[#ea580c]/30 px-3 py-1.5 shadow-2xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-black uppercase text-[#7A6857]",
					children: "Compte à rebours :"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm sm:text-base font-black text-[#ea580c]",
					children: formatCountdown(schedule.secondsUntilOrderOpen)
				})]
			})]
		})
	});
}
//#endregion
export { tiramisu_nutella_default as n, HoursBanner as t };
