import { i as __toESM } from "./_runtime.mjs";
import { l as toppings, n as bowls } from "./_ssr/data-DketkIQF.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./_ssr/I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./_ssr/CartContext-BoTWTco9.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_productId-BkdZTSO8.mjs";
import { t as logo_default } from "./_ssr/logo-C4WRcUkf.mjs";
import { C as ArrowLeft, b as Check, o as ShoppingCart, p as Minus, t as X, u as Plus } from "./_libs/lucide-react.mjs";
import { n as DishImage, t as CartDrawer } from "./_ssr/CartDrawer-s-37Mt9u.mjs";
import { t as useStock } from "./_ssr/useStock-ByxBv9wY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-BOJGCRyj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAG_STYLES = {
	signature: "bg-[#10251f] text-[#d7ff45]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#d7ff45] text-[#10251f]"
};
function ToppingChip({ topping, selected, disabled, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		disabled: disabled && !selected,
		"aria-pressed": selected,
		"aria-label": `${topping.name}${topping.price > 0 ? ` +${topping.price.toFixed(2)}€` : " inclus"}`,
		className: ["topping-chip relative select-none", selected ? "border-[#ff705f] bg-[#fff1ee] shadow-[0_4px_14px_-6px_rgba(255,112,95,.55)]" : disabled ? "cursor-not-allowed opacity-40" : "border-[#e8e2d9] hover:border-[#ff705f]/50"].join(" "),
		children: [
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-2.5 w-2.5 text-white",
					strokeWidth: 3
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl leading-none",
				role: "img",
				"aria-hidden": "true",
				children: topping.emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-bold leading-tight text-[#2e2619]",
				children: topping.name
			}),
			topping.price > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[10px] font-black text-[#ff705f]",
				children: [
					"+",
					topping.price.toFixed(2),
					"€"
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-semibold text-[#a09a92]",
				children: "inclus"
			})
		]
	});
}
function IngredientPill({ name, emoji, removable, removed, onToggle }) {
	if (!removable) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "ingredient-pill ingredient-pill--locked",
		title: "Ingrédient fixe",
		children: [emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			role: "img",
			"aria-hidden": "true",
			children: emoji
		}), name]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": removed,
		"aria-label": removed ? `Remettre ${name}` : `Retirer ${name}`,
		className: ["ingredient-pill", removed ? "ingredient-pill--removed" : ""].join(" "),
		children: [
			emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "img",
				"aria-hidden": "true",
				children: emoji
			}),
			name,
			removed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-[#ff705f]",
				children: "✕"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 shrink-0 text-[#a09a92] opacity-60" })
		]
	});
}
function QuantitySelector({ qty, onMinus, onPlus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onMinus,
				"aria-label": "Diminuer la quantité",
				className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 text-center text-lg font-black tabular-nums",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onPlus,
				"aria-label": "Augmenter la quantité",
				className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
			})
		]
	});
}
function ProductPage() {
	const { productId } = Route.useParams();
	const product = bowls.find((b) => b.id === productId);
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [removedIngredients, setRemovedIngredients] = import_react.useState([]);
	const [extraSauce, setExtraSauce] = import_react.useState(false);
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec] px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-4 text-3xl font-black",
				children: t("product.not_found")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/commander",
				className: "text-[#ff705f] underline font-bold",
				children: t("product.back")
			})]
		})
	});
	const productOk = available(product.id);
	const isCrousty = product.id.startsWith("crousty-");
	const toppingExtra = selectedToppings.reduce((sum, tid) => {
		return sum + (toppings.find((t) => t.id === tid || t.name === tid)?.price ?? 0);
	}, 0);
	const extraSaucePrice = isCrousty && extraSauce ? 1 : 0;
	const unitPrice = product.price + toppingExtra + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleTopping = (topping) => {
		setSelectedToppings((cur) => {
			if (cur.includes(topping.name)) return cur.filter((t) => t !== topping.name);
			if (cur.length >= 2) return cur;
			return [...cur, topping.name];
		});
	};
	const toggleIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const options = [...selectedToppings.map((t) => "Topping : " + t), ...isCrousty && extraSauce ? ["Sauce extra +1€"] : []];
		addItem({
			id: product.id,
			name: product.name,
			basePrice: product.price,
			price: unitPrice,
			quantity: qty,
			toppings: options,
			removedIngredients
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1800);
		setIsCartOpen(true);
	};
	const removableIngredients = product.ingredients.filter((i) => i.removable);
	const fixedIngredients = product.ingredients.filter((i) => !i.removable);
	const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center gap-2.5",
						"aria-label": "Poke N Bowl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-card p-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Logo Poke N Bowl",
								className: "h-full w-full object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-base font-black tracking-tight sm:text-lg",
							children: "Poke N Bowl"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							className: "relative rounded-full bg-[#10251f] p-2.5 text-white transition hover:bg-[#1e3d33]",
							"aria-label": t("cart.title"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
								children: cartItemsCount
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-32 sm:px-6 sm:pb-10 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "mb-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#7a847e] transition hover:text-[#17231f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("product.back")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-lift sm:rounded-[36px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: product.id,
								alt: product.name,
								priority: true,
								className: `h-full w-full object-cover transition duration-700 ${!productOk ? "grayscale" : ""}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `badge-tag absolute left-4 top-4 shadow-card ${tagStyle}`,
								children: productOk ? product.tag : t("cmd.sold_out")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] shadow-card",
								children: ["€ ", product.price.toFixed(2)]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-black leading-tight sm:text-4xl",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[15px] leading-relaxed text-[#68756f]",
								children: product.desc
							})] }),
							product.menuNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/40 px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-black text-[#8f5b12]",
									children: product.menuNote
								})
							}),
							!productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 px-4 py-3 text-sm font-bold text-[#ff705f]",
								children: t("product.unavailable")
							}),
							productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"aria-labelledby": "composition-title",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												id: "composition-title",
												className: "text-base font-black text-[#17231f]",
												children: "Composition du bowl"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold text-[#a09a92]",
												children: isCrousty ? "Recette signature" : "Recette originale"
											})]
										}),
										fixedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#a09a92]",
												children: "Inclus · non modifiables"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: fixedIngredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngredientPill, {
													name: ing.name,
													emoji: ing.emoji,
													removable: false,
													removed: false
												}, ing.name))
											})]
										}),
										removableIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
												children: "Retirer un ingrédient — appuie pour supprimer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: removableIngredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngredientPill, {
													name: ing.name,
													emoji: ing.emoji,
													removable: true,
													removed: removedIngredients.includes(ing.name),
													onToggle: () => toggleIngredient(ing.name)
												}, ing.name))
											}),
											removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-[11px] font-bold text-[#ff705f]",
												children: ["Retiré : ", removedIngredients.join(", ")]
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"aria-labelledby": "toppings-title",
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												id: "toppings-title",
												className: "text-base font-black text-[#17231f]",
												children: "Ajoute ta touche"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[11px] text-[#a09a92]",
												children: "Jusqu'à 2 toppings inclus"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#f5f4ee] px-3 py-1 text-[10px] font-black text-[#8f5b12]",
												children: [selectedToppings.length, "/2"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2 sm:grid-cols-3",
											children: toppings.filter((t) => t.available).map((topping) => {
												const selected = selectedToppings.includes(topping.name);
												const disabled = !selected && selectedToppings.length >= 2;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToppingChip, {
													topping,
													selected,
													disabled,
													onToggle: () => toggleTopping(topping)
												}, topping.id);
											})
										}),
										isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setExtraSauce((v) => !v),
											"aria-pressed": extraSauce,
											className: ["mt-3 flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm font-black transition", extraSauce ? "border-[#ff705f] bg-[#fff1ee] text-[#ff705f]" : "border-[#e8e2d9] bg-white text-[#2e2619] hover:border-[#ff705f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sauce extra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+1.00€" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-[20px] border border-[#e8e2d9] bg-white p-4 shadow-card sm:p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
											qty,
											onMinus: () => setQty((q) => Math.max(1, q - 1)),
											onPlus: () => setQty((q) => Math.min(20, q + 1))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-[0.14em] text-[#a09a92]",
												children: qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix total"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-2xl font-black text-[#17231f]",
												children: ["€ ", totalPrice.toFixed(2)]
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleAddToCart,
										className: ["btn-primary w-full", added ? "bg-[#10251f]" : ""].join(" "),
										children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }),
											"Ajouter au panier · € ",
											totalPrice.toFixed(2)
										] })
									})
								})
							] })
						]
					})]
				})]
			}),
			productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-[#f7f4ec]/95 p-3 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleAddToCart,
					className: ["btn-primary w-full", added ? "bg-[#10251f]" : ""].join(" "),
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }),
						"Ajouter · € ",
						totalPrice.toFixed(2)
					] })
				})
			})
		]
	});
}
//#endregion
export { ProductPage as component };
