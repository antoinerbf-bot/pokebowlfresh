import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as logo_default } from "./logo-C4WRcUkf.mjs";
import { o as ShoppingBag, p as MapPin, u as PhoneCall, x as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BvrEJfBM.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2.5",
					"aria-label": "Poke N Bowl — Accueil",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Logo Poke N Bowl",
							className: "h-full w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-base font-black",
						children: "Poke N Bowl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Accueil"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-coral",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 break-words text-5xl font-black leading-[1.1] tracking-[-0.02em] md:text-7xl",
							children: "On se parle ?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: "Une question, une commande ou une demande particulière ? Retrouve-nous à Visé ou appelle directement l’équipe."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+32491281456",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Téléphone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-words text-xl font-black",
									children: "+32 491 28 14 56"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
							target: "_blank",
							rel: "noreferrer",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Adresse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xl font-black",
									children: "Av. du Pont 12"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "4600 Visé, Belgique"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/commander",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Commande"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xl font-black",
									children: "Commander en ligne"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Compose ton bowl"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-[2rem] border border-border shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Poke N Bowl Visé",
						src: "https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed",
						width: "100%",
						height: "420",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						style: { border: 0 }
					})
				})
			]
		})]
	});
}
//#endregion
export { ContactPage as component };
