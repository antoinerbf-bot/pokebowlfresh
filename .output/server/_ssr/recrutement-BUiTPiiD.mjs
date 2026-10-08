import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { F as BriefcaseBusiness, b as MapPin, g as PhoneCall, z as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recrutement-BUiTPiiD.js
var import_jsx_runtime = require_jsx_runtime();
function RecruitmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Accueil"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,oklch(0.24_0.045_195),oklch(0.38_0.08_175))] p-8 text-white shadow-lift md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }), " On recrute"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 break-words text-5xl font-black leading-[1.08] tracking-[-0.02em] md:text-7xl",
								children: "Rejoins l’aventure Poke N Bowl."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/75",
								children: "Nous cherchons des personnes énergiques, fiables et souriantes pour faire vivre l’expérience Poke N Bowl à Visé."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "À Visé"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "Av. du Pont 12, 4600 Visé, Belgique."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "Un premier contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+32491281456",
									className: "mt-2 inline-block text-sm font-bold hover:text-coral",
									children: "+32 491 28 14 56"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "Candidature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "CV + quelques lignes sur toi pour commencer l’échange."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 rounded-3xl border border-coral/20 bg-coral/5 p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black",
							children: "Envoyer ma candidature"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "Envoie ton CV et quelques lignes sur toi directement à notre équipe."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:pokenbowl1@gmail.com?subject=Candidature%20—%20Poke%20N%20Bowl",
							className: "mt-6 inline-flex rounded-full bg-coral px-6 py-3 font-black text-white shadow-lift transition hover:scale-105",
							children: "pokenbowl1@gmail.com"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { RecruitmentPage as component };
