import { i as __toESM } from "./_runtime.mjs";
import { a as croustyMixIns, c as detailedBases, d as detailedSauces, f as drinks, i as bowls, l as detailedMixIns, o as croustySauces, p as toppings, r as bowlSizes, u as detailedProteins } from "./_ssr/data-DrqaM212.mjs";
import { a as isIngredientAvailable } from "./_ssr/stock-store-CCPbgyY-.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./_ssr/I18nContext-CfPib1Ml.mjs";
import { n as useCart } from "./_ssr/CartContext-D7fTgwIa.mjs";
import { b as Link, x as Navigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_productId-c5r0iU0-.mjs";
import { t as BrandLogo } from "./_ssr/BrandLogo-f92236nt.mjs";
import { T as Plus, _ as ShieldCheck, f as Sparkles, j as Minus, l as Sun, m as ShoppingCart, o as TriangleAlert, rt as Check, ut as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as DishImage, t as CartDrawer } from "./_ssr/CartDrawer-CUw3aYqz.mjs";
import { t as useStock } from "./_ssr/useStock-CmhMz0nb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-yinBYWen.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAG_STYLES = {
	signature: "bg-[#2C1D16] text-[#EADCC9]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]"
};
function ToppingChip({ topping, qty, onAdd, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: ["relative flex flex-col justify-between rounded-2xl border-2 p-3 text-center transition-all duration-200 select-none", qty > 0 ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm" : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#ff705f]/50 hover:bg-[#FAF5EE]"].join(" "),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl leading-none",
					role: "img",
					"aria-hidden": "true",
					children: topping.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold leading-tight text-[#2C1D16]",
					children: topping.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-black text-[#ff705f]",
					children: qty === 0 ? `+${topping.price.toFixed(2)} €` : `${qty} portion${qty > 1 ? "s" : ""} (+${(qty * topping.price).toFixed(2)}€)`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2.5 flex items-center justify-center border-t border-[#E6D7C3] pt-2",
			children: qty > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onRemove,
						"aria-label": `Diminuer ${topping.name}`,
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-5 text-center text-xs font-black text-[#2C1D16]",
						children: qty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onAdd,
						"aria-label": `Ajouter ${topping.name}`,
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onAdd,
				className: "flex items-center gap-1 rounded-full bg-[#2C1D16] px-3 py-1 text-[11px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })]
			})
		})]
	});
}
function RemovableIngredientButton({ name, emoji, isRemoved, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": isRemoved,
		"aria-label": isRemoved ? `Remettre ${name}` : `Retirer ${name} (allergie)`,
		className: ["group inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-200", isRemoved ? "border-[#ff705f] bg-[#ff705f]/15 text-[#c0350f] line-through decoration-[#c0350f]" : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] hover:border-[#ff705f]/60 hover:bg-[#FFF4F1] shadow-sm"].join(" "),
		children: [
			emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "img",
				"aria-hidden": "true",
				className: "text-sm",
				children: emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
			isRemoved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#c0350f] text-[9px] font-black text-white not-italic no-underline",
				children: "✕"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/5 text-[9px] font-bold text-[#7A6857] opacity-70 group-hover:bg-[#ff705f]/20 group-hover:text-[#ff705f]",
				children: "✕"
			})
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
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center text-xl font-black tabular-nums",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onPlus,
				"aria-label": "Augmenter la quantité",
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
			})
		]
	});
}
function ProductPage() {
	const { productId } = Route.useParams();
	const product = bowls.find((b) => b.id === productId || productId === "crousty-mix" && b.id === "crousty-chicken-mix");
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available, stock } = useStock();
	const isCrousty = Boolean(product && (product.id.startsWith("crousty-") || product.id === "crousty-mix"));
	const isCroustyMix = Boolean(product && (product.id === "crousty-chicken-mix" || product.id === "crousty-mix" || productId === "crousty-mix"));
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(isCrousty ? "Riz" : product?.defaultBase || "Riz");
	const [sauceQuantities, setSauceQuantities] = import_react.useState(() => {
		if (isCrousty) return {};
		const defaultS = product?.defaultSauce || "Spicy-Mayo";
		return defaultS ? { [defaultS]: 1 } : {};
	});
	const [removedIngredients, setRemovedIngredients] = import_react.useState([]);
	const [extraProteins, setExtraProteins] = import_react.useState({});
	const [mixinQuantities, setMixinQuantities] = import_react.useState({});
	const [toppingQuantities, setToppingQuantities] = import_react.useState({});
	const [selectedDrink, setSelectedDrink] = import_react.useState(drinks[0]?.name || "Coca-Cola (33 cl)");
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	import_react.useEffect(() => {
		setSelectedSize("moyen");
		setSelectedBase(isCrousty ? "Riz" : product?.defaultBase || "Riz");
		if (isCrousty) setSauceQuantities({});
		else {
			const defaultS = product?.defaultSauce || "Spicy-Mayo";
			setSauceQuantities(defaultS ? { [defaultS]: 1 } : {});
		}
		setRemovedIngredients([]);
		setExtraProteins({});
		setMixinQuantities({});
		setToppingQuantities({});
		setSelectedDrink(drinks[0]?.name || "Coca-Cola (33 cl)");
		setQty(1);
		setAdded(false);
	}, [
		productId,
		isCrousty,
		product?.defaultBase,
		product?.defaultSauce
	]);
	if (productId === "sur-mesure") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/sur-mesure",
		replace: true
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#EFE6D8] px-5",
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
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	const sizeExtra = !isCrousty && selectedSize === "grand" ? 3 : 0;
	const totalExtraProteinUnits = Object.values(extraProteins).reduce((sum, q) => sum + q, 0);
	const extraProteinPrice = totalExtraProteinUnits * 2.5;
	const totalMixinUnits = Object.values(mixinQuantities).reduce((sum, q) => sum + q, 0);
	const mixinsExtraPrice = totalMixinUnits * 1;
	const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
	const toppingsExtraPrice = Object.entries(toppingQuantities).reduce((sum, [name, count]) => {
		const top = toppings.find((t) => t.name.toLowerCase() === name.toLowerCase());
		return sum + count * (top ? top.price : name.toLowerCase().includes("cajou") ? 1 : .5);
	}, 0);
	const totalSauceUnits = Object.values(sauceQuantities).reduce((sum, q) => sum + q, 0);
	const extraSauceCount = isCrousty ? totalSauceUnits : Math.max(0, totalSauceUnits - 1);
	const extraSaucePrice = extraSauceCount * .5;
	const unitPrice = product.price + sizeExtra + extraProteinPrice + mixinsExtraPrice + toppingsExtraPrice + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleRemovedIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const addExtraProtein = (name) => {
		setExtraProteins((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeExtraProtein = (name) => {
		setExtraProteins((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const addMixin = (name) => {
		setMixinQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeMixin = (name) => {
		setMixinQuantities((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const addTopping = (name) => {
		setToppingQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeTopping = (name) => {
		setToppingQuantities((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const addSauce = (name) => {
		if (!isCrousty && totalSauceUnits === 1 && !sauceQuantities[name]) {
			setSauceQuantities({ [name]: 1 });
			return;
		}
		setSauceQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeSauce = (name) => {
		setSauceQuantities((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const setZeroSauce = () => {
		setSauceQuantities({});
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const optionsList = [];
		if (isCrousty) {
			optionsList.push(isCroustyMix ? "Format : Barquette rectangulaire · Formule Étudiant 11€ (Crousty Mix Curry & Blanche)" : "Format : Barquette rectangulaire · Formule Étudiant 11€ (Boisson 33cl incluse)");
			optionsList.push(`Boisson 33cl incluse : ${selectedDrink}`);
		} else if (selectedSize === "grand") optionsList.push("Taille : Grand (+3.00€)");
		else optionsList.push("Taille : Moyen (Standard)");
		Object.entries(extraProteins).forEach(([name, q]) => {
			if (q > 0) optionsList.push(`Supplément Protéine (+${(q * 2.5).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`);
		});
		optionsList.push(`Base : ${selectedBase}`);
		if (isCrousty) {
			optionsList.push("Sauce de base : Incluse dans le produit (0,00 €)");
			const activeSauces = Object.entries(sauceQuantities).filter(([, q]) => q > 0);
			if (activeSauces.length > 0) {
				const sauceSummary = activeSauces.map(([name, q]) => `${name}${q > 1 ? ` (x${q})` : ""}`).join(" + ");
				optionsList.push(`Supplément Sauce (+${extraSaucePrice.toFixed(2)}€) : ${sauceSummary} (x${extraSauceCount})`);
			}
		} else {
			const activeSauces = Object.entries(sauceQuantities).filter(([, q]) => q > 0);
			if (activeSauces.length === 0) optionsList.push("Sauce : Sans sauce");
			else {
				const sauceSummary = activeSauces.map(([name, q]) => q > 1 ? `${name} (x${q})` : name).join(" + ");
				optionsList.push(`Sauce : ${sauceSummary}`);
				if (extraSauceCount > 0) optionsList.push(`Sauce extra (+${extraSaucePrice.toFixed(2)}€) : ${extraSauceCount} portion${extraSauceCount > 1 ? "s" : ""}`);
			}
		}
		Object.entries(mixinQuantities).forEach(([name, q]) => {
			if (q > 0) optionsList.push(`Légume / Mix-in (+${(q * 1).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`);
		});
		Object.entries(toppingQuantities).forEach(([t, q]) => {
			if (q > 0) optionsList.push(`Topping (+0.50€) : ${t}${q > 1 ? ` (x${q})` : ""}`);
		});
		addItem({
			id: isCrousty ? `${product.id}` : `${product.id}-${selectedSize}`,
			name: isCrousty ? product.name : `${product.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
			basePrice: product.price,
			price: unitPrice,
			quantity: qty,
			toppings: optionsList,
			removedIngredients
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1800);
		setIsCartOpen(true);
	};
	const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";
	extraProteins["Poulet croustillant"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-[#EFE6D8] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-[#DECBB3] bg-[#EFE6D8]/95 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-[#DECBB3] bg-[#FAF5EE] p-1 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-[#EADCC9]" : "text-[#7A6857] hover:text-[#2C1D16]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] sm:flex",
								children: "La Carte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#2C1D16] p-2.5 text-[#EADCC9] transition hover:bg-[#3d2920]",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
									children: cartItemsCount
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-6 pb-36 sm:px-6 sm:py-8 sm:pb-12 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#7A6857] transition hover:text-[#2C1D16]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
						" ",
						t("product.back")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-[32px] border-2 border-[#DECBB3] shadow-lift sm:rounded-[36px] bg-[#2C1D16]",
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
									className: "absolute bottom-4 right-4 rounded-full bg-[#FAF5EE]/95 backdrop-blur-sm border border-[#DECBB3] px-4 py-2 text-base font-black text-[#2C1D16] shadow-card",
									children: ["€ ", unitPrice.toFixed(2)]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2C1D16]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Préparé minute sur commande à Visé" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#6E5A49] leading-relaxed",
								children: isCrousty ? "Servi dans une barquette rectangulaire avec du riz chaud, des morceaux de poulet croustillant dorés minute, notre sauce signature et des oignons frits. La Formule Étudiant à 11,00 € avec canette 33 cl incluse est valable uniquement le midi." : "Chaque bowl est assemblé à la commande à Visé avec du poisson frais, du poulet mariné et des légumes du jour. Vous pouvez retirer n'importe quel ingrédient ou ajouter autant de protéines (+2,50 €) et de légumes (+1 €) que vous le souhaitez."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
										children: isCrousty ? "Barquette Chaude · Crousty Chicken" : "Poké Bowl Signature"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center gap-1 rounded-full border border-[#b9d7c3] bg-[#123D2A] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm",
										children: "☾ 100% HALAL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 text-3xl font-black leading-tight sm:text-4xl text-[#2C1D16]",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-[#6E5A49]",
									children: product.desc
								})
							] }),
							product.menuNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border-2 border-[#ea580c]/30 bg-[#FFF3E4] p-4 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-black text-[#9A3412] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 shrink-0 text-[#ea580c]" }), product.menuNote]
								})
							}),
							!productOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 p-4 text-sm font-bold text-[#ff705f]",
								children: t("product.unavailable")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								isCrousty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border-2 border-[#F59E0B]/40 bg-[#FFF6E8] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-1.5 mb-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex items-center gap-1 rounded-full bg-[#2C1D16] text-[#EADCC9] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider",
														children: "🥡 Barquette Rectangulaire"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex items-center gap-1 rounded-full bg-[#ea580c] text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm",
														children: "⚡ Formule Étudiant 11 € · Boisson 33 cl incluse"
													}),
													isCroustyMix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex items-center gap-1 rounded-full bg-[#F59E0B] text-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm",
														children: "⭐ Duo Signature Curry & Blanche"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-sm font-black text-[#2C1D16]",
												children: isCroustyMix ? "Crousty Mix : Duo Curry & Blanche · Poulet croustillant + Riz parfumé" : "Portion Généreuse Chaude · Morceaux de poulet croustillant + Riz"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[11px] font-semibold text-[#7A542E] mt-1",
												children: [
													"🎓 ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Formule Étudiant à 11,00 € avec canette 33 cl incluse :" }),
													" poulet croustillant doré minute, riz chaud parfumé, oignons frits croquants & sauces maison."
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl font-black text-[#ea580c] shrink-0",
											children: "11.00 €"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 pt-3 border-t border-[#F59E0B]/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black uppercase tracking-wider text-[#2C1D16]",
												children: "Suppléments Protéines (+2,50 € / portion)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-semibold text-[#7A542E]",
												children: "Portion supplémentaire de poulet croustillant doré minute"
											})] }), totalExtraProteinUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#ea580c] px-3 py-1 text-xs font-black text-white shadow-sm",
												children: [
													"+",
													totalExtraProteinUnits,
													" portion",
													totalExtraProteinUnits > 1 ? "s" : "",
													" (+",
													extraProteinPrice.toFixed(2),
													"€)"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
											children: [{
												id: "crousty-poulet",
												name: "Poulet croustillant",
												emoji: "🍗"
											}].map((prot) => {
												const count = extraProteins[prot.name] ?? 0;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: `flex items-center justify-between rounded-2xl border-2 p-2.5 transition-all ${count > 0 ? "border-[#ea580c] bg-[#FFF4F1] shadow-sm" : "border-[#E6C79C] bg-[#FFFDF9]"}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: prot.emoji
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block text-xs font-black text-[#2C1D16] truncate",
																children: prot.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-black text-[#ea580c]",
																children: count > 0 ? `${count}x (+${(count * 2.5).toFixed(2)}€)` : "+2,50 €"
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 shrink-0",
														children: [count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => removeExtraProtein(prot.name),
															"aria-label": `Diminuer ${prot.name}`,
															className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#ea580c]/40 bg-white text-[#ea580c] font-black hover:bg-[#ea580c] hover:text-white transition",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-4 text-center text-xs font-black text-[#2C1D16]",
															children: count
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => addExtraProtein(prot.name),
															"aria-label": `Ajouter ${prot.name}`,
															className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ea580c] hover:text-white transition",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
														})]
													})]
												}, prot.id);
											})
										})]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
												children: "1. Format & Taille"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-[#7A6857]",
												children: "Format personnalisable"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-3",
											children: bowlSizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSize(size.id),
												className: ["flex flex-col items-start rounded-2xl border-2 p-3.5 text-left transition-all", selectedSize === size.id ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md" : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] hover:border-[#2C1D16]/40"].join(" "),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex w-full items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-sm uppercase",
														children: size.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs font-black ${selectedSize === size.id ? "text-[#EADCC9]" : "text-[#ff705f]"}`,
														children: size.extraPrice === 0 ? "Inclus" : `+${size.extraPrice.toFixed(2)}€`
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `mt-1 text-[11px] leading-tight ${selectedSize === size.id ? "text-white/70" : "text-[#7A6857]"}`,
													children: size.description
												})]
											}, size.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-[#DECBB3]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[11px] font-black uppercase tracking-wider text-[#2C1D16]",
													children: "Suppléments Protéines (+2,50 € / portion)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-semibold text-[#7A6857]",
													children: "Poulet, Saumon frais ou Scampis royaux"
												})] }), totalExtraProteinUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
													children: [
														"+",
														totalExtraProteinUnits,
														" portion",
														totalExtraProteinUnits > 1 ? "s" : "",
														" (+",
														extraProteinPrice.toFixed(2),
														"€)"
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-1 gap-2 sm:grid-cols-3",
												children: detailedProteins.map((pr) => {
													const count = extraProteins[pr.name] ?? 0;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `flex items-center justify-between rounded-2xl border-2 p-2.5 transition-all ${count > 0 ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm" : "border-[#DECBB3] bg-[#FFFDF9]"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2 min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xl",
																children: pr.emoji
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-xs font-black text-[#2C1D16] truncate",
																	children: pr.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-black text-[#ff705f]",
																	children: count > 0 ? `${count}x (+${(count * 2.5).toFixed(2)}€)` : "+2,50 €"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5 shrink-0",
															children: [count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => removeExtraProtein(pr.name),
																"aria-label": `Diminuer ${pr.name}`,
																className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "w-4 text-center text-xs font-black text-[#2C1D16]",
																children: count
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => addExtraProtein(pr.name),
																"aria-label": `Ajouter ${pr.name}`,
																className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ff705f] hover:text-white transition",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
															})]
														})]
													}, pr.id);
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
											children: isCrousty ? "Base" : "2. Base au choix"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7A6857]",
											children: isCrousty ? "Le Crossy Chicken est systématiquement servi avec du riz chaud" : "Incluse · change selon tes envies"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-[10px] font-black text-[#2C1D16]",
											children: selectedBase
										})]
									}), isCrousty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-2xl border-2 border-[#ea580c] bg-[#FFF4F1] p-3.5 text-left shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: "🍚"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16]",
												children: "Riz parfumé chaud"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-[#ea580c]",
												children: "Base exclusive · Servie systématiquement avec du riz"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#ea580c] px-3 py-1 text-[10px] font-black uppercase text-white shadow-xs",
											children: "Inclus"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
										children: detailedBases.map((b) => {
											const isAvailable = isIngredientAvailable(stock, b.name);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												disabled: !isAvailable,
												onClick: () => isAvailable && setSelectedBase(b.name),
												className: ["flex flex-col items-center justify-center rounded-xl border-2 p-2.5 text-center transition-all", !isAvailable ? "border-red-300/40 bg-gray-100 opacity-60 cursor-not-allowed" : selectedBase === b.name ? "border-[#ff705f] bg-[#FFF4F1] font-black text-[#c0350f] cursor-pointer" : "border-[#DECBB3] bg-[#FFFDF9] font-bold text-[#2C1D16] hover:border-[#ff705f]/40 cursor-pointer"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl",
														children: b.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 text-[11px] leading-tight",
														children: b.name
													}),
													!isAvailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 text-[9px] font-black text-red-500",
														children: "Rupture"
													})
												]
											}, b.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
													className: "text-sm font-black uppercase tracking-wider text-[#2C1D16] flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#ff705f]" }), "Composition de la recette & Allergies"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold text-[#ff705f]",
													children: "100% Modifiable"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-[#7A6857] leading-relaxed",
												children: [
													"Clique sur un ingrédient pour le ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "retirer" }),
													" si tu as une allergie ou une intolérance."
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2 pt-1",
											children: product.ingredients.map((ing) => {
												const isRemoved = removedIngredients.includes(ing.name);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemovableIngredientButton, {
													name: ing.name,
													emoji: ing.emoji,
													isRemoved,
													onToggle: () => toggleRemovedIngredient(ing.name)
												}, ing.name);
											})
										}),
										removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 rounded-xl border border-[#ff705f]/30 bg-[#FFF1EE] p-3 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-black text-[#c0350f] flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚠️ Préparation sans :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-extrabold",
													children: removedIngredients.join(", ")
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[10px] text-[#8e4539]",
												children: "La consigne sera transmise avec soin en cuisine."
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#2C1D16] flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base",
												children: "🥫"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isCrousty ? "Sauces et Nappages disponibles" : isCroustyMix ? "Duo de Sauces Signature (Curry & Blanche)" : "4. Sauces au choix" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7A6857] mt-0.5",
											children: isCrousty ? "Votre Crossy Chicken contient déjà sa sauce de base (incluse et gratuite). Vous pouvez ajouter autant de suppléments de sauce que vous le souhaitez (+0,50 € par portion)." : isCroustyMix ? "Le duo Sauce Curry onctueuse + Sauce Blanche maison est inclus dans la formule · sauces supplémentaires à +0,50 €." : "La 1ère sauce est offerte (gratuite) · chaque portion supplémentaire est à +0,50 € (cumulable sans limite)."
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9] shadow-sm",
												children: isCrousty ? extraSauceCount === 0 ? "Sauce de base incluse (0,00 €)" : `${extraSauceCount} supplément${extraSauceCount > 1 ? "s" : ""} de sauce (+${extraSaucePrice.toFixed(2)} €)` : totalSauceUnits === 0 ? "Sans sauce" : isCroustyMix ? totalSauceUnits <= 2 ? "Duo de sauces inclus (0,00 €)" : `${totalSauceUnits} sauces (Duo inclus + ${extraSauceCount} extra · +${extraSaucePrice.toFixed(2)} €)` : totalSauceUnits === 1 ? "1 sauce offerte (0,00 €)" : `${totalSauceUnits} sauces (1 offerte + ${extraSauceCount} extra · +${extraSaucePrice.toFixed(2)} €)`
											}), totalSauceUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: setZeroSauce,
												className: "rounded-full border border-[#DECBB3] bg-[#FFFDF9] px-3 py-1 text-[11px] font-bold text-[#7A6857] hover:bg-[#2C1D16] hover:text-[#EADCC9] transition cursor-pointer shadow-2xs",
												children: isCrousty ? "Retirer suppléments" : "Sans sauce"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid gap-3 ${isCrousty ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`,
										children: (isCrousty ? croustySauces : detailedSauces).map((s) => {
											const count = sauceQuantities[s.name] ?? 0;
											const isSelected = count > 0;
											const isAvailable = isIngredientAvailable(stock, s.name);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `group relative flex flex-col justify-between rounded-2xl border-2 p-3.5 transition-all duration-150 ${!isAvailable ? "border-red-300/40 bg-gray-100 opacity-60" : isSelected ? "border-[#ea580c] bg-[#FFF5F2] shadow-sm ring-1 ring-[#ea580c]/25" : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#ea580c]/50 hover:bg-white"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start justify-between gap-2 mb-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EE] border border-[#DECBB3] text-2xl shadow-2xs group-hover:scale-105 transition-transform",
															children: s.emoji
														}), !isAvailable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full px-2.5 py-0.5 text-[10px] font-black bg-red-100 text-red-600 border border-red-200",
															children: "Rupture"
														}) : s.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${isSelected ? "bg-[#ea580c]/15 text-[#c2410c] border-[#ea580c]/30" : "bg-[#FAF5EE] text-[#7A6857] border-[#DECBB3]"}`,
															children: s.badge
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														onClick: () => isAvailable && addSauce(s.name),
														className: `flex-1 mb-2.5 ${isAvailable ? "cursor-pointer" : "cursor-not-allowed"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-sm font-black text-[#2C1D16] leading-tight",
															children: s.name
														}), s.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-[11px] text-[#7A6857] leading-snug line-clamp-2",
															children: s.description
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pt-2 border-t border-[#DECBB3]/50 mt-auto",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `text-[11px] font-black ${!isAvailable ? "text-red-500 font-bold" : isSelected ? "text-[#ea580c]" : "text-[#7A6857]"}`,
															children: !isAvailable ? "Victime de son succès" : isCrousty ? count === 0 ? "+0,50 € / portion" : `${count} portion${count > 1 ? "s" : ""} (+${(count * .5).toFixed(2)} €)` : isCroustyMix && (s.name === "Sauce curry" || s.name === "Sauce blanche") ? count === 1 ? "Incluse dans le Mix (0 €)" : count > 1 ? `${count}x (+${((count - 1) * .5).toFixed(2)}€)` : "Incluse dans le Mix" : count === 0 ? totalSauceUnits < (isCroustyMix ? 2 : 1) ? "Incluse" : "+0,50 €" : count === 1 && totalSauceUnits <= (isCroustyMix ? 2 : 1) ? "Offerte (0 €)" : `${count}x (+${(count * .5).toFixed(2)}€)`
														}), isAvailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-1.5 shrink-0",
															children: count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1 bg-white rounded-full border border-[#ea580c]/40 p-0.5 shadow-2xs",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => removeSauce(s.name),
																		"aria-label": `Diminuer sauce ${s.name}`,
																		className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF5EE] text-[#ea580c] font-black hover:bg-[#ea580c] hover:text-white transition active:scale-90 cursor-pointer",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "w-5 text-center text-xs font-black text-[#2C1D16]",
																		children: count
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "button",
																		onClick: () => addSauce(s.name),
																		"aria-label": `Ajouter sauce ${s.name}`,
																		className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#ea580c] text-white font-black hover:bg-[#c2410c] transition active:scale-90 shadow-2xs cursor-pointer",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
																	})
																]
															}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => addSauce(s.name),
																"aria-label": `Choisir sauce ${s.name}`,
																className: "flex items-center gap-1 rounded-full bg-[#2C1D16] px-2.5 py-1 text-[11px] font-black text-[#EADCC9] hover:bg-[#ea580c] hover:text-white transition active:scale-95 shadow-2xs cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ 0,50 €" })]
															})
														})]
													})
												]
											}, s.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
											children: isCrousty ? "Légumes & Ingrédients Crossy Chicken (+1,00 € / portion)" : "Suppléments Légumes & Fruits Frais (+1,00 € / portion)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7A6857]",
											children: isCrousty ? "Sélection exclusive : Feta, Avocat, Mangue, Brocoli, Jalapeños" : "Avocat, mangue, edamame, patates douces, grenade..."
										})] }), totalMixinUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#059669] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												"+",
												totalMixinUnits,
												" portion",
												totalMixinUnits > 1 ? "s" : "",
												" (+",
												mixinsExtraPrice.toFixed(2),
												"€)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: (isCrousty ? croustyMixIns : detailedMixIns).map((mix) => {
											const count = mixinQuantities[mix.name] ?? 0;
											const isAvailable = isIngredientAvailable(stock, mix.name);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `flex items-center justify-between gap-2 rounded-2xl border-2 p-2.5 text-left transition ${!isAvailable ? "border-red-300/40 bg-gray-100 opacity-60" : count > 0 ? "border-[#059669] bg-[#ECFDF5] text-[#065F46] shadow-sm" : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16]"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl",
														children: mix.emoji
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-bold truncate",
															children: mix.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `text-[10px] font-black ${!isAvailable ? "text-red-500" : "text-[#059669]"}`,
															children: !isAvailable ? "Rupture" : count > 0 ? `${count}x (+${(count * 1).toFixed(2)}€)` : "+1,00 €"
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1 shrink-0",
													children: [count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => removeMixin(mix.name),
														"aria-label": `Diminuer ${mix.name}`,
														className: "flex h-6 w-6 items-center justify-center rounded-full border border-[#059669]/40 bg-white text-[#059669] font-black hover:bg-[#059669] hover:text-white transition cursor-pointer",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-4 text-center text-xs font-black text-[#065F46]",
														children: count
													})] }), isAvailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => addMixin(mix.name),
														"aria-label": `Ajouter ${mix.name}`,
														className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#059669] hover:text-white transition cursor-pointer",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
													})]
												})]
											}, mix.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
											children: "Toppings Croustillants (+0,50 € / portion)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7A6857]",
											children: "Oignon frit (+0,50 €), Noix de cajou (+1,00 €)"
										})] }), totalToppingsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												totalToppingsCount,
												" portion",
												totalToppingsCount > 1 ? "s" : "",
												" (+",
												toppingsExtraPrice.toFixed(2),
												"€)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: toppings.map((topping) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToppingChip, {
											topping,
											qty: toppingQuantities[topping.name] ?? 0,
											onAdd: () => addTopping(topping.name),
											onRemove: () => removeTopping(topping.name)
										}, topping.id))
									})]
								}),
								isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border-2 border-[#F59E0B]/40 bg-[#FFF6E8] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#2C1D16] flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ea580c]" }), "Canette 33 cl Incluse (Formule Étudiant 11 € · Boisson incluse)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] font-semibold text-[#7A542E]",
											children: "Comprise dans la formule à 11,00 € · sélectionne ta boisson fraîche parmi notre sélection 33 cl"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: drinks.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedDrink(d.name),
											className: ["flex items-center justify-between rounded-xl border-2 p-2.5 text-left text-xs font-bold transition-all", selectedDrink === d.name ? "border-[#ea580c] bg-[#FFFDF9] text-[#ea580c] shadow-sm font-black" : "border-[#E6C79C] bg-[#FFFDF9]/80 text-[#2C1D16] hover:border-[#ea580c]/50"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: d.name
											}), selectedDrink === d.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#ea580c]" })]
										}, d.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
											qty,
											onMinus: () => setQty((q) => Math.max(1, q - 1)),
											onPlus: () => setQty((q) => Math.min(20, q + 1))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-[0.14em] text-[#7A6857]",
												children: qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix unitaire calculé"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-3xl font-black text-[#2C1D16]",
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
										className: ["btn-primary w-full text-sm font-black py-4 shadow-lift transition-all", added ? "bg-[#2C1D16] scale-[0.99]" : "hover:scale-[1.01] active:scale-95"].join(" "),
										children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-[#22c55e]" }), " Ajouté au panier !"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }),
												"Ajouter au panier · € ",
												totalPrice.toFixed(2)
											]
										})
									})
								})
							] })
						]
					})]
				})]
			}),
			productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-[#DECBB3] bg-[#FAF5EE]/95 p-3.5 backdrop-blur-xl sm:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.1)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleAddToCart,
					className: ["btn-primary w-full py-3.5 text-sm font-black shadow-glow-coral", added ? "bg-[#2C1D16]" : ""].join(" "),
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22c55e]" }), " Ajouté !"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }),
							"Ajouter · € ",
							totalPrice.toFixed(2)
						]
					})
				})
			})
		]
	});
}
//#endregion
export { ProductPage as component };
