import "../_runtime.mjs";
import { a as customMixIns, c as desserts, i as customBases, m as toppings, o as customProteins, p as drinks, r as bowls, s as customSauces } from "./data-Bi2irjzU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { G as ArrowLeft, W as ArrowRight, c as Sparkles, u as ShoppingBag } from "../_libs/lucide-react.mjs";
import { n as DishImage, t as CartDrawer } from "./CartDrawer-B2PhVEb9.mjs";
import { t as useStock } from "./useStock-K1JsIZMi.mjs";
import { a as drink_fanta_orange_default, c as tiramisu_oreo_default, i as drink_eau_plate_default, l as tiramisu_speculoos_default, n as drink_coca_zero_default, o as drink_ice_tea_default, r as drink_eau_gazeuse_default, s as tiramisu_nutella_default, t as drink_coca_cola_default } from "./drink-eau-gazeuse-BNz0q5PT.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var DESSERT_IMAGES = {
	"tira-spec": tiramisu_speculoos_default,
	"tira-nutella": tiramisu_nutella_default,
	"tira-oreo": tiramisu_oreo_default
};
var DRINK_IMAGES = {
	coca: drink_coca_cola_default,
	"coca-zero": drink_coca_zero_default,
	fanta: drink_fanta_orange_default,
	"ice-tea": drink_ice_tea_default,
	"eau-plate": drink_eau_plate_default,
	"eau-gaz": drink_eau_gazeuse_default
};
var TAG_STYLES = {
	signature: "bg-[#10251f] text-[#d7ff45]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#d7ff45] text-[#10251f]"
};
function CommanderPage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
	const quickAdd = (item) => {
		if (!available(item.id)) return;
		addItem({
			id: item.id,
			name: item.name,
			basePrice: item.price,
			price: item.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image || "/assets/dessert-9PIP1ns9.jpg"
		});
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-black/10 bg-white p-1 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex",
								children: t("nav.home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#10251f] p-3 text-white transition hover:bg-[#1e3d33]",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
									children: count
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-[#10251f] px-5 py-14 text-white sm:px-8 sm:py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d7ff45]/5 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-[#ff705f]/8 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-6 inline-flex items-center gap-2 text-xs font-bold text-white/45 transition hover:text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
								" ",
								t("cmd.back")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]",
									children: t("cmd.eyebrow")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-2 text-[clamp(2rem,8vw,4rem)] font-black leading-[1.06] tracking-[-0.025em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: t("cmd.title1")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-white/35",
										children: t("cmd.title2")
									})]
								})]
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#10251f] via-[#153028] to-[#1c3a31] p-6 text-white shadow-lift sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-28 sm:w-28",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
										dishId: "sur-mesure",
										alt: "Poke Bowl sur mesure",
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-1.5 left-1.5 rounded-full bg-[#10251f]/90 px-2 py-0.5 text-[9px] font-black uppercase text-[#d7ff45]",
										children: "5 étapes"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Fiche officielle restaurant"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-2xl font-black sm:text-3xl",
										children: "Poke (n) Bowl sur mesure"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-lg text-xs leading-relaxed text-white/75 sm:text-sm",
										children: "Compose ton bowl idéal selon tes envies : 1 base, 5 mix-ins frais, 1 protéine, 1 sauce et tes toppings croustillants."
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] font-bold uppercase tracking-wider text-white/50",
										children: "Formule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-black text-[#d7ff45]",
										children: "10.00 €"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sur-mesure",
									className: "btn-primary inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-md transition hover:scale-105 active:scale-95",
									children: ["Composer mon bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-end justify-between gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]",
							children: t("cmd.bowls_eyebrow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
							children: t("cmd.bowls_title")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-[200px] text-right text-sm text-[#7a847e] sm:block",
							children: t("cmd.bowls_hint")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3",
						children: pokeBowls.map((bowl) => {
							const ok = available(bowl.id);
							const tagStyle = TAG_STYLES[bowl.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";
							return ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: "group block overflow-hidden rounded-[28px] bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
									bowl,
									ok: true,
									tagStyle,
									soldOut: t("cmd.sold_out")
								})
							}, bowl.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "block cursor-not-allowed overflow-hidden rounded-[28px] bg-white opacity-55 shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
									bowl,
									ok: false,
									tagStyle,
									soldOut: t("cmd.sold_out")
								})
							}, bowl.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 sm:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Formule Étudiant 11€"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl",
									children: "Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm text-[#7a847e]",
									children: "Petits morceaux de poulet croustillant dorés · Riz chaud · Boisson 33cl fraîche incluse"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-2",
							children: croustyBowls.map((bowl) => {
								const ok = available(bowl.id);
								const tagStyle = TAG_STYLES[bowl.tagColor ?? "bestseller"] ?? "bg-[#ff705f] text-white";
								return ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: bowl.id },
									className: "group block overflow-hidden rounded-[28px] bg-white shadow-card ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec] transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
										bowl,
										ok: true,
										tagStyle,
										soldOut: t("cmd.sold_out")
									})
								}, bowl.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "block cursor-not-allowed overflow-hidden rounded-[28px] bg-white opacity-55 shadow-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
										bowl,
										ok: false,
										tagStyle,
										soldOut: t("cmd.sold_out")
									})
								}, bowl.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 overflow-hidden rounded-[28px] bg-[#10251f] sm:mt-16 lg:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]",
									children: t("cmd.customization_title")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm text-white/55",
									children: t("cmd.customization_note")
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sur-mesure",
								className: "btn-primary inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-xs font-black uppercase",
								children: ["Composer en 5 étapes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-5",
							children: [
								{
									label: t("cmd.bases"),
									items: customBases,
									emoji: "🍚"
								},
								{
									label: t("cmd.mixins"),
									items: customMixIns,
									emoji: "🥗"
								},
								{
									label: t("cmd.protein"),
									items: customProteins,
									emoji: "🍗"
								},
								{
									label: t("cmd.sauces"),
									items: customSauces,
									emoji: "🍶"
								},
								{
									label: t("cmd.toppings"),
									items: toppings.map((t) => `${t.emoji} ${t.name}`),
									emoji: "✨"
								}
							].map(({ label, items, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#d7ff45]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }),
										" ",
										label
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-1.5",
									children: items.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] leading-4 text-white/65",
										children: value
									}, value))
								})]
							}, label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Douceurs Artisanales"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
									children: t("cmd.desserts")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
									children: "4,00 € la pièce"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
								children: desserts.map((d) => {
									const ok = available(d.id);
									const imgSrc = DESSERT_IMAGES[d.id] || "/assets/dessert-9PIP1ns9.jpg";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#eee8dc]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imgSrc,
													alt: d.name,
													className: `h-full w-full object-cover transition duration-500 group-hover:scale-105 ${!ok ? "grayscale contrast-75" : ""}`
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute top-2 right-2 rounded-full bg-[#d7ff45] px-2.5 py-0.5 text-xs font-black text-[#10251f] shadow",
													children: "4.00 €"
												}),
												!ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute inset-0 flex items-center justify-center bg-black/60",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase text-white",
														children: t("cmd.sold_out")
													})
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black text-[#10251f]",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAdd({
													id: d.id,
													name: d.name,
													price: d.price,
													image: imgSrc
												}),
												className: `rounded-xl px-3.5 py-2 text-xs font-black transition ${ok ? "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
												children: ok ? "Ajouter" : "Épuisé"
											})]
										})]
									}, d.id);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0284c7]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), " Servies Glacées"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
									children: t("cmd.drinks")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
									children: "2,00 € la canette / bouteille"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
								children: drinks.map((drink) => {
									const ok = available(drink.id);
									const imgSrc = DRINK_IMAGES[drink.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#eee8dc]",
											children: [imgSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imgSrc,
												alt: drink.name,
												className: `h-full w-full object-cover transition duration-500 group-hover:scale-105 ${!ok ? "grayscale contrast-75" : ""}`
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-full w-full items-center justify-center text-3xl",
												children: "🥤"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#d7ff45] px-2 py-0.5 text-[10px] font-black text-[#10251f] shadow",
												children: "2.00 €"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#10251f] truncate",
												children: drink.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAdd({
													id: drink.id,
													name: drink.name,
													price: drink.price,
													image: imgSrc
												}),
												className: `mt-2 flex w-full items-center justify-center rounded-xl py-1.5 text-[11px] font-black transition ${ok ? "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
												children: ok ? "Ajouter" : "Épuisé"
											})]
										})]
									}, drink.id);
								})
							})]
						})]
					})
				]
			})] }),
			count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsCartOpen(true),
					className: "flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white shadow-glow-coral",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
						t("cart.title"),
						" (",
						count,
						") →"
					]
				})
			})
		]
	});
}
function BowlCard({ bowl, ok, tagStyle, soldOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[4/3] overflow-hidden bg-[#ece8dc]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
				dishId: bowl.id,
				alt: bowl.name,
				className: `h-full w-full object-cover transition duration-700 ${ok ? "group-hover:scale-[1.06]" : "grayscale"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `badge-tag absolute left-3 top-3 shadow-card sm:left-4 sm:top-4 ${tagStyle}`,
				children: ok ? bowl.tag : soldOut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] sm:bottom-4 sm:right-4",
				children: ["€ ", bowl.price.toFixed(2)]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "min-w-0 flex-1 break-words text-[17px] font-black leading-[1.22] sm:text-xl",
					children: bowl.name
				}), ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f4ee] transition-colors duration-300 group-hover:bg-[#ff705f] group-hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-2 text-[13px] leading-5 text-[#68756f]",
				children: bowl.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
						children: "🍚 Base au choix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
						children: "🛡️ Allergies : modifiable"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#ff705f]",
						children: "✨ Toppings à volonté"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-4 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${ok ? "text-[#ff705f]" : "text-[#9aa39c]"}`,
				children: ok ? "Personnaliser & Commander →" : soldOut
			})
		]
	})] });
}
//#endregion
export { CommanderPage as component };
