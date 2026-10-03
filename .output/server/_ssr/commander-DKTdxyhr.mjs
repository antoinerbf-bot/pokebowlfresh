import { a as customProteins, c as desserts, i as customMixIns, l as drinks, n as bowls, o as customSauces, r as customBases, s as customToppings, u as toppingMeta } from "./data-0rV8x1Fg.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-DJzdD15j.mjs";
import { n as useCart } from "./CartContext-v6B2RrbN.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as UtensilsCrossed, o as ShoppingBag, v as ArrowRight, y as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as useStock, i as logo_poke_n_bowl_default, n as CartDrawer, r as DishImage } from "./useStock-BgGM-cHy.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commander-DKTdxyhr.js
var import_jsx_runtime = require_jsx_runtime();
var dessert_default = "/assets/dessert-9PIP1ns9.jpg";
function CommanderPage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => b.id.startsWith("crousty-")), ...bowls.filter((b) => !b.id.startsWith("crousty-"))];
	const quickAdd = (item) => {
		if (!available(item.id)) return;
		addItem({
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: 1,
			toppings: [],
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
						className: "flex min-w-0 items-center",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-[170px] shrink-0 items-center overflow-hidden sm:h-12 sm:w-[190px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_poke_n_bowl_default,
								alt: "Logo Poke N Bowl",
								className: "h-full w-full object-contain object-left"
							})
						})
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
									className: `rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider sm:flex",
								children: t("nav.home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#10251f] p-3 text-white",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[#10251f] px-5 py-12 text-white sm:px-8 sm:py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1200px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
								" ",
								t("cmd.back")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_poke_n_bowl_default,
								alt: "Poke N Bowl",
								className: "h-auto w-[210px] object-contain object-left sm:w-[250px]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]",
									children: t("cmd.eyebrow")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-3 text-[clamp(2.25rem,9vw,4.5rem)] font-black leading-[1.08] tracking-[-0.02em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: t("cmd.title1")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-white/40",
										children: t("cmd.title2")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-[15px] leading-6 text-white/60 sm:text-base sm:leading-7",
									children: t("cmd.desc")
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-end justify-between gap-5 sm:mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]",
							children: t("cmd.bowls_eyebrow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
							children: t("cmd.bowls_title")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden max-w-[200px] text-right text-sm text-[#7a847e] sm:block",
							children: t("cmd.bowls_hint")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
						children: displayedBowls.map((bowl, i) => {
							const ok = available(bowl.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 1,
									y: 0
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: { delay: i * .04 },
								className: `overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_-38px_rgba(0,0,0,.4)] sm:rounded-[28px] ${!ok ? "opacity-55" : bowl.id.startsWith("crousty-") ? "ring-2 ring-[#d7ff45]/70 shadow-[0_25px_70px_-35px_rgba(215,255,69,.55)]" : ""}`,
								children: ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: bowl.id },
									className: "group block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
										bowl,
										ok: true,
										composeLabel: t("cmd.compose"),
										soldOut: t("cmd.sold_out")
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "block cursor-not-allowed",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
										bowl,
										ok: false,
										composeLabel: t("cmd.compose"),
										soldOut: t("cmd.sold_out")
									})
								})
							}, bowl.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 rounded-[28px] bg-[#10251f] p-6 text-white sm:mt-16 sm:p-8 lg:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]",
								children: t("cmd.customization_title")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-white/60",
								children: t("cmd.customization_note")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: [
								[t("cmd.bases"), customBases],
								[t("cmd.mixins"), customMixIns],
								[t("cmd.protein"), customProteins],
								[t("cmd.sauces"), customSauces],
								[t("cmd.toppings"), customToppings]
							].map(([title, values]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[10px] font-black uppercase tracking-[0.12em] text-[#d7ff45]",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-1.5",
									children: values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1.5 text-[11px] leading-4 text-white/70",
										children: [
											title === t("cmd.toppings") && toppingMeta[value] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												children: toppingMeta[value].emoji
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value }),
											title === t("cmd.toppings") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-auto rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-black text-[#d7ff45]",
												children: "+0,50€"
											}) : null
										]
									}, value))
								})]
							}, title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-5 sm:mt-6 lg:grid-cols-2 lg:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] bg-white p-6 sm:rounded-[28px] sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black sm:text-2xl",
									children: t("cmd.drinks")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-2 sm:grid-cols-2",
								children: drinks.map((drink) => {
									const ok = available(drink.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: !ok,
										onClick: () => quickAdd(drink),
										className: `flex min-h-[48px] items-center justify-between gap-2 rounded-2xl px-4 py-3 text-left ${ok ? "bg-[#f5f4ee] hover:bg-[#d7ff45] active:scale-[0.99]" : "cursor-not-allowed bg-[#f0f0ea] opacity-60"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 break-words text-sm font-bold",
											children: drink.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-xs font-black",
											children: ok ? `€ ${drink.price.toFixed(2)}` : t("cmd.sold_out")
										})]
									}, drink.id);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] bg-[#ff705f] p-6 text-white sm:rounded-[28px] sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-black sm:text-2xl",
								children: t("cmd.desserts")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-4 sm:flex-row sm:gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dessert_default,
									alt: "",
									className: "h-24 w-full rounded-2xl object-cover sm:h-28 sm:w-28 sm:shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 space-y-2",
									children: desserts.map((d) => {
										const ok = available(d.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !ok,
											onClick: () => quickAdd(d),
											className: `flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm ${ok ? "bg-white/10 hover:bg-white/20 active:scale-[0.99]" : "cursor-not-allowed bg-white/5 opacity-60"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 break-words",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-black",
												children: ok ? `€ ${d.price.toFixed(2)}` : t("cmd.sold_out")
											})]
										}, d.id);
									})
								})]
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
					className: "flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white shadow-lg",
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
function BowlCard({ bowl, ok, composeLabel, soldOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[1.48] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
				dishId: bowl.id,
				alt: bowl.name,
				className: `h-full w-full transition duration-700 ${ok ? "group-hover:scale-105" : "grayscale"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider sm:left-4 sm:top-4 sm:text-[9px]",
				children: ok ? bowl.tag : soldOut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-2.5 py-1 text-xs font-black sm:bottom-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-sm",
				children: ["€ ", bowl.price.toFixed(2)]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "min-w-0 flex-1 break-words text-[17px] font-black leading-[1.2] sm:text-xl",
					children: bowl.name
				}), ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f1ea] group-hover:bg-[#ff705f] group-hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[13px] leading-5 text-[#758079]",
				children: bowl.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-4 text-[9px] font-black uppercase tracking-[0.14em] ${ok ? "text-[#ff705f]" : "text-[#9aa39c]"}`,
				children: ok ? composeLabel : soldOut
			})
		]
	})] });
}
//#endregion
export { CommanderPage as component };
