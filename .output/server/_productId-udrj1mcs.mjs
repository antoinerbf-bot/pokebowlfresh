import { i as __toESM } from "./_runtime.mjs";
import { n as bowls, s as customToppings, u as toppingPrices } from "./_ssr/data-DX5L1H23.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./_ssr/I18nContext-DJzdD15j.mjs";
import { n as useCart } from "./_ssr/CartContext-v6B2RrbN.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_productId-BMC64CoF.mjs";
import { t as logo_default } from "./_ssr/logo-C4WRcUkf.mjs";
import { a as ShoppingCart, v as Check, x as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as CartDrawer, r as DishImage, t as Button } from "./_ssr/CartDrawer-DrtzwuJ4.mjs";
import { t as useStock } from "./_ssr/useStock-BnqFMs3d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-udrj1mcs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { productId } = Route.useParams();
	const product = bowls.find((b) => b.id === productId);
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [extraSauce, setExtraSauce] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-4 break-words text-3xl font-bold",
				children: t("product.not_found")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/commander",
				className: "text-coral underline",
				children: t("product.back")
			})]
		})
	});
	const productOk = available(product.id);
	const isCrousty = product.id.startsWith("crousty-");
	const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + (toppingPrices[topping] ?? 0), 0);
	const finalPrice = product.price + toppingsPrice + (isCrousty && extraSauce ? 1 : 0);
	const toppingLabel = (topping) => `Topping : ${topping}`;
	const toggleTopping = (topping) => {
		setSelectedToppings((current) => current.includes(topping) ? current.filter((item) => item !== topping) : current.length < 2 ? [...current, topping] : current);
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const options = [...selectedToppings.map((item) => `${toppingLabel(item)} +${(toppingPrices[item] ?? 0).toFixed(2)}€`), ...isCrousty && extraSauce ? ["Sauce extra +1€"] : []];
		addItem({
			id: product.id,
			name: product.name,
			price: finalPrice,
			quantity: 1,
			toppings: options
		});
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center gap-2.5",
						"aria-label": "Poke N Bowl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Logo",
								className: "h-full w-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-base font-black tracking-tight sm:text-lg",
							children: "Poke N Bowl"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 rounded-full bg-secondary p-1",
							children: [
								"fr",
								"en",
								"nl"
							].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLanguage(lang),
								className: `rounded-full px-2 py-1 text-xs font-bold uppercase transition-colors ${language === lang ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
								children: lang
							}, lang))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							className: "relative rounded-full bg-secondary p-2 transition-colors hover:bg-secondary/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }), cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white",
								children: cartItemsCount
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-5 py-8 pb-28 sm:pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }),
						" ",
						t("product.back")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[1.48] overflow-hidden rounded-3xl shadow-lift sm:max-h-[500px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
							dishId: product.id,
							alt: product.name,
							className: `h-full w-full transition duration-500 ${!productOk ? "grayscale" : ""}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-primary shadow-sm",
							children: productOk ? product.tag : t("cmd.sold_out")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "min-w-0 flex-1 break-words pb-1 text-3xl font-extrabold leading-[1.15]",
									children: product.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 text-2xl font-display font-bold text-coral",
									children: ["€ ", product.price.toFixed(2)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 text-[15px] leading-relaxed text-muted-foreground",
								children: product.desc
							}),
							product.menuNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/35 px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-black text-[#8f5b12]",
									children: product.menuNote
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-semibold text-[#6e6255]",
									children: "Sauce extra disponible : +1€"
								})]
							}),
							!productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-bold text-coral",
								children: t("product.unavailable")
							}),
							productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 rounded-3xl border border-[#a96b0d]/20 bg-[#ead9bb]/35 p-5 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#8f5b12]",
											children: t("toppings.title")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#241a12]",
											children: "Ajoute ta touche"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#8f5b12]",
											children: "+ supplément"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-5 text-[#6e6255]",
										children: isCrousty ? "La recette reste signature. Ajoute jusqu’à 2 toppings payants et, si tu veux, une sauce supplémentaire." : "Garde la recette du restaurant et ajoute jusqu’à 2 toppings payants."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: customToppings.map((topping) => {
											const selected = selectedToppings.includes(topping);
											const disabled = !selected && selectedToppings.length >= 2;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => toggleTopping(topping),
												disabled,
												className: `flex min-h-11 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs font-bold transition ${selected ? "border-[#a96b0d] bg-[#a96b0d] text-white" : disabled ? "cursor-not-allowed border-[#8d5a18]/10 bg-white/60 text-[#9a8e80]" : "border-[#8d5a18]/15 bg-white text-[#4d4134] hover:border-[#a96b0d]/40"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: topping }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "shrink-0 text-[10px] font-black",
														children: ["+€ ", (toppingPrices[topping] ?? 0).toFixed(2)]
													}),
													selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0" })
												]
											}, topping);
										})
									}),
									isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setExtraSauce((value) => !value),
										className: `mt-3 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition ${extraSauce ? "border-[#a96b0d] bg-[#a96b0d] text-white" : "border-[#8d5a18]/15 bg-white text-[#4d4134]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sauce extra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+1€" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/50 bg-secondary/50 p-5 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-lg font-bold",
											children: "Composition"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-xs font-semibold text-muted-foreground",
											children: isCrousty ? "Recette signature" : "Recette originale"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-sm leading-relaxed text-muted-foreground",
										children: product.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: product.composition.map((ingredient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-background px-3 py-1.5 text-xs font-bold text-foreground shadow-sm",
											children: ingredient
										}, ingredient))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 rounded-xl bg-background/70 px-4 py-3 text-xs font-semibold text-muted-foreground",
										children: "Jusqu’à 2 toppings supplémentaires peuvent être ajoutés. Leur supplément est calculé automatiquement dans le total."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 hidden sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: handleAddToCart,
									disabled: !productOk,
									size: "lg",
									className: "h-14 w-full rounded-xl bg-coral text-lg text-white shadow-lift transition-transform hover:scale-[1.02] hover:bg-coral/90 disabled:opacity-50",
									children: productOk ? "Ajouter au panier · € " + finalPrice.toFixed(2) : t("product.out_of_stock")
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-background/95 p-3 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: handleAddToCart,
					disabled: !productOk,
					size: "lg",
					className: "h-12 w-full rounded-full bg-coral text-base font-black text-white hover:bg-coral/90 disabled:opacity-50",
					children: productOk ? "Ajouter au panier · € " + finalPrice.toFixed(2) : t("product.out_of_stock")
				})
			})
		]
	});
}
//#endregion
export { ProductPage as component };
