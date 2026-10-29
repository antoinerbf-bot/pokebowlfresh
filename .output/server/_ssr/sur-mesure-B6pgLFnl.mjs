import { i as __toESM } from "../_runtime.mjs";
import { d as detailedBases, f as detailedMixIns, g as toppings, m as detailedSauces, p as detailedProteins } from "./data-mCirCFa_.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-DIxAve94.mjs";
import { n as useCart } from "./CartContext-C3Z6ywuE.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { G as Check, Q as ArrowLeft, W as ChefHat, b as Plus, f as ShoppingBag, w as Minus } from "../_libs/lucide-react.mjs";
import { i as bowl_saumon_default, t as CartDrawer } from "./CartDrawer-CeFxutzH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sur-mesure-B6pgLFnl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BASE_PRICE = 10;
var INCLUDED_MIX_INS = 5;
function SurMesurePage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(detailedBases[0] ?? null);
	const [mixinQuantities, setMixinQuantities] = import_react.useState({
		Avocat: 1,
		Mangue: 1,
		Edamame: 1,
		"Salade d'algues": 1,
		Maïs: 1
	});
	const [selectedProtein, setSelectedProtein] = import_react.useState(detailedProteins[0] ?? null);
	const [extraProteins, setExtraProteins] = import_react.useState({});
	const [sauceQuantities, setSauceQuantities] = import_react.useState({ "Teriyaki": 1 });
	const [toppingQuantities, setToppingQuantities] = import_react.useState({ "Oignons frits": 1 });
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const activeBowlImage = selectedProtein ? {
		poulet: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg",
		saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
		scampis: "/assets/bowl-scampis-BPxsXKuI.jpg"
	}[selectedProtein.id] || "/assets/bowl-saumon-CRYVYQxR.jpg" : bowl_saumon_default;
	const addMixIn = (name) => {
		setMixinQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeMixIn = (name) => {
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
	const sizeExtra = selectedSize === "grand" ? 3 : 0;
	const mainProteinExtra = selectedProtein?.extraPrice ?? 0;
	const totalExtraProteinUnits = Object.values(extraProteins).reduce((sum, q) => sum + q, 0);
	const extraProteinsPrice = totalExtraProteinUnits * 2.5;
	const fetaUnits = mixinQuantities["Feta"] ?? 0;
	const nonFetaUnits = Object.entries(mixinQuantities).reduce((sum, [name, q]) => name.trim().toLowerCase() === "feta" ? sum : sum + q, 0);
	const totalMixInUnits = nonFetaUnits + fetaUnits;
	const extraMixInsCount = Math.max(0, nonFetaUnits - INCLUDED_MIX_INS) + fetaUnits;
	const mixInsExtra = extraMixInsCount * 1;
	const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
	const extraToppingsCount = Math.max(0, totalToppingsCount - 1);
	const toppingsExtra = extraToppingsCount * .5;
	const totalSauceUnits = Object.values(sauceQuantities).reduce((sum, q) => sum + q, 0);
	const extraSauceCount = Math.max(0, totalSauceUnits - 1);
	const extraSaucePrice = extraSauceCount * .5;
	const unitPrice = BASE_PRICE + sizeExtra + mainProteinExtra + extraProteinsPrice + mixInsExtra + toppingsExtra + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const mixinsFormatted = Object.entries(mixinQuantities).filter(([, q]) => q > 0).map(([name, q]) => q > 1 ? `${name} (x${q})` : name);
	const toppingsFormatted = Object.entries(toppingQuantities).filter(([, q]) => q > 0).map(([name, q]) => q > 1 ? `${name} (x${q})` : name);
	const extraProteinsFormatted = Object.entries(extraProteins).filter(([, q]) => q > 0).map(([name, q]) => q > 1 ? `${name} (x${q})` : name);
	const saucesFormatted = Object.entries(sauceQuantities).filter(([, q]) => q > 0).map(([name, q]) => q > 1 ? `${name} (x${q})` : name);
	const isBaseReady = selectedBase !== null;
	const isMixInsReady = totalMixInUnits >= 1;
	const isProteinReady = selectedProtein !== null;
	const isValid = isBaseReady && isMixInsReady && isProteinReady;
	const getMissingReason = () => {
		if (!isBaseReady) return "Étape 1 : Choisis une base";
		if (!isProteinReady) return "Étape 2 : Choisis une protéine";
		if (!isMixInsReady) return "Étape 3 : Sélectionne au moins 1 légume ou mix-in";
		return null;
	};
	const handleAddToCart = () => {
		if (!isValid || !selectedBase || !selectedProtein) return;
		const extraProteinLines = Object.entries(extraProteins).filter(([, q]) => q > 0).map(([name, q]) => `Supplément Protéine (+2.50€) : ${name}${q > 1 ? ` (x${q})` : ""}`);
		const activeSauces = Object.entries(sauceQuantities).filter(([, q]) => q > 0);
		const mainSauceName = activeSauces[0]?.[0] || "Sans sauce";
		const extraSauceLines = [];
		if (activeSauces[0] && activeSauces[0][1] > 1) {
			const extraQ = activeSauces[0][1] - 1;
			extraSauceLines.push(`Sauce extra (+${(extraQ * .5).toFixed(2)}€) : ${activeSauces[0][0]}${extraQ > 1 ? ` (x${extraQ})` : ""}`);
		}
		for (let i = 1; i < activeSauces.length; i++) {
			const [name, q] = activeSauces[i];
			extraSauceLines.push(`Sauce extra (+${(q * .5).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`);
		}
		const options = [
			`Taille : ${selectedSize === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
			`Base : ${selectedBase.name}`,
			`Protéine : ${selectedProtein.name}${mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)}€)` : ""}`,
			...extraProteinLines,
			`Mix-ins : ${mixinsFormatted.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)}€)` : ""}`,
			`Sauce : ${mainSauceName}`,
			...extraSauceLines,
			...toppingsFormatted.length > 0 ? [`Toppings : ${toppingsFormatted.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`] : ["Toppings : Aucun"]
		];
		addItem({
			id: "sur-mesure",
			name: `Poke Bowl sur mesure (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
			basePrice: BASE_PRICE,
			price: unitPrice,
			quantity: qty,
			toppings: options,
			removedIngredients: [],
			image: activeBowlImage
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1500);
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#EFE6D8] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-[#D9C5AD] bg-[#EFE6D8]/95 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-[#D9C5AD] bg-[#FAF5EE] p-1 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-[#EADCC9]" : "text-[#6E5A49] hover:text-[#2C1D16]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] sm:flex",
								children: "La carte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#2C1D16] p-3 text-[#EADCC9] transition hover:bg-[#ff705f] hover:text-white",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
									children: count
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "mb-6 inline-flex items-center gap-2 text-xs font-bold text-[#6E5A49] transition hover:text-[#2C1D16]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour aux bowls signatures"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2C1D16] via-[#3A251B] to-[#2C1D16] p-6 text-white shadow-lift sm:p-10 border border-[#4D3428]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9]/15 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#EADCC9] border border-[#EADCC9]/25",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-3.5 w-3.5 text-[#ff705f]" }), " Atelier Poké Sur-Mesure"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 text-3xl font-black tracking-tight sm:text-5xl",
										children: ["Ton poké, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#ff705f]",
											children: "tes envies."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-[#EADCC9]/80 sm:text-base",
										children: "Compose un bowl généreux, choisis tes ingrédients préférés et crée ton association idéale. 5 légumes frais inclus, protéines au choix (+2,50 € par portion supplémentaire) et sauces savoureuses (1ère offerte, +0,50 € par portion supplémentaire)."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl bg-[#FAF5EE]/10 border border-[#EADCC9]/20 p-5 backdrop-blur-md sm:flex-col sm:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold uppercase tracking-wider text-[#EADCC9]/70",
									children: "Formule de base"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-black text-[#ff705f] sm:text-4xl",
									children: "10,00 €"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-[#EADCC9]/80",
									children: "Base + 5 légumes + protéine + sauce + 1 topping"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-7 lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
											children: "Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1.5 text-xl font-black text-[#2C1D16]",
											children: "Choisis ta Taille"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-black text-[#ff705f]",
											children: "Moyen ou Grand"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("moyen"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer", selectedSize === "moyen" ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md" : "border-[#DECBB3] bg-[#F3E9DA]/60 text-[#2C1D16] hover:border-[#2C1D16]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-0.5 text-xs font-black ${selectedSize === "moyen" ? "bg-[#EADCC9] text-[#2C1D16]" : "bg-[#2C1D16] text-[#EADCC9]"}`,
													children: "10,00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "moyen" ? "text-[#EADCC9]/80" : "text-[#6E5A49]"}`,
												children: "Format régulier généreux"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("grand"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer", selectedSize === "grand" ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md" : "border-[#DECBB3] bg-[#F3E9DA]/60 text-[#2C1D16] hover:border-[#2C1D16]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Grand"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#ff705f] px-2.5 py-0.5 text-xs font-black text-white",
													children: "13,00 € (+3 €)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "grand" ? "text-[#EADCC9]/80" : "text-[#6E5A49]"}`,
												children: "Grand format maxi faim"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
											children: "Étape 1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1.5 text-xl font-black text-[#2C1D16]",
											children: "Choisis ta Base"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "Incluse"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: detailedBases.map((base) => {
											const isSelected = selectedBase?.id === base.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedBase(base),
												className: ["flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200 cursor-pointer", isSelected ? "border-[#ff705f] bg-[#FFF3EF] shadow-sm" : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-2xl",
														children: base.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-black text-[#2C1D16]",
															children: base.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-bold text-[#6E5A49]",
															children: "Inclus"
														})]
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" })
													})
												]
											}, base.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1.5 text-xl font-black text-[#2C1D16]",
												children: "Choisis ta Protéine"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#ff705f]",
												children: "1 incluse · Extras à +2,50 €"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 gap-3 sm:grid-cols-3",
											children: detailedProteins.map((prot) => {
												const isSelected = selectedProtein?.id === prot.id;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => setSelectedProtein(prot),
													className: ["flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200 cursor-pointer", isSelected ? "border-[#ff705f] bg-[#FFF3EF] shadow-sm" : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-3xl mb-1",
															children: prot.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-black text-[#2C1D16]",
															children: prot.name
														}),
														prot.extraPrice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "mt-1 rounded-full bg-[#ff705f] px-2.5 py-0.5 text-[10px] font-black text-white",
															children: [
																"+",
																prot.extraPrice.toFixed(2),
																" €"
															]
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mt-1 rounded-full bg-[#EADCC9] px-2.5 py-0.5 text-[10px] font-black text-[#2C1D16]",
															children: "Inclus"
														})
													]
												}, prot.id);
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center justify-between gap-2 mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-sm font-black text-[#2C1D16]",
													children: "💪 Ajouter des portions de protéines supplémentaires (+2,50 € / portion)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-[#6E5A49] font-medium",
													children: "Ajoute autant de portions que tu veux (+2,50 € à chaque fois, ex : 3× = +7,50 €)."
												})] }), totalExtraProteinUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
													children: [
														"+",
														totalExtraProteinUnits,
														" portion",
														totalExtraProteinUnits > 1 ? "s" : "",
														" (+",
														extraProteinsPrice.toFixed(2),
														" €)"
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
												children: detailedProteins.map((prot) => {
													const q = extraProteins[prot.name] ?? 0;
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `flex items-center justify-between rounded-xl border-2 p-3 transition ${q > 0 ? "border-[#ff705f] bg-white shadow-sm" : "border-[#DECBB3] bg-[#FAF5EE]"}`,
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
																	className: "text-[10px] font-bold text-[#ff705f]",
																	children: q > 0 ? `${q}× (+${(q * 2.5).toFixed(2)} €)` : "+2,50 € / portion"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5 shrink-0",
															children: [q > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => removeExtraProtein(prot.name),
																className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "w-4 text-center text-xs font-black text-[#2C1D16]",
																children: q
															})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => addExtraProtein(prot.name),
																className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" })
															})]
														})]
													}, `extra-${prot.id}`);
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 3"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1.5 text-xl font-black text-[#2C1D16]",
												children: "Légumes & Mix-Ins Frais (5 inclus)"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]",
												children: [
													Math.min(INCLUDED_MIX_INS, nonFetaUnits),
													" / ",
													INCLUDED_MIX_INS,
													" inclus",
													extraMixInsCount > 0 ? ` · +${extraMixInsCount} extra (+${mixInsExtra.toFixed(2)} €)` : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-black text-[#2C1D16]",
													children: "Tes 5 portions incluses :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1.5",
													children: Array.from({ length: INCLUDED_MIX_INS }).map((_, idx) => {
														const flatNonFeta = [];
														for (const [name, q] of Object.entries(mixinQuantities)) if (name.trim().toLowerCase() !== "feta") {
															const found = detailedMixIns.find((m) => m.name === name);
															for (let i = 0; i < q; i++) flatNonFeta.push(found?.emoji || "🥗");
														}
														const emoji = flatNonFeta[idx];
														return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: `flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-all ${emoji ? "bg-white border-[#ff705f] shadow-sm scale-105" : "bg-[#FAF5EE]/60 border-dashed border-[#C8B296] text-[10px] font-bold text-[#8A7665]"}`,
															children: emoji || idx + 1
														}, idx);
													})
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-[#6E5A49]",
												children: [
													"Chaque portion supplémentaire = ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-[#ff705f]",
														children: "+1,00 €"
													}),
													" (à volonté !)"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: detailedMixIns.map((mixIn) => {
												const q = mixinQuantities[mixIn.name] ?? 0;
												const isFeta = mixIn.id === "feta" || mixIn.name.trim().toLowerCase() === "feta";
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: ["flex items-center justify-between gap-2 rounded-2xl border-2 p-2.5 transition-all duration-150", q > 0 ? "border-[#ff705f] bg-white shadow-sm" : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:bg-[#F3E9DA]"].join(" "),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => addMixIn(mixIn.name),
														className: "flex items-center gap-2 min-w-0 flex-1 text-left cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl shrink-0",
															children: mixIn.emoji
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block truncate text-xs font-black text-[#2C1D16]",
																children: mixIn.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block text-[10px] font-bold text-[#6E5A49]",
																children: isFeta ? "+1,00 € / portion" : q > 0 ? `${q} portion${q > 1 ? "s" : ""}` : nonFetaUnits < INCLUDED_MIX_INS ? "Inclus (5 max)" : "+1,00 €"
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1 shrink-0",
														children: [q > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => removeMixIn(mixIn.name),
															className: "flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-4 text-center text-xs font-black text-[#2C1D16]",
															children: q
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => addMixIn(mixIn.name),
															className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
														})]
													})]
												}, mixIn.id);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 4"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1.5 text-xl font-black text-[#2C1D16]",
												children: "Choisis tes Sauces"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-[#7A6857]",
												children: [
													"1ère portion offerte · portions supplémentaires à ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+0,50 €" }),
													" chacune."
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]",
												children: totalSauceUnits === 0 ? "Sans sauce" : totalSauceUnits === 1 ? "1 sauce offerte (0,00 €)" : `${totalSauceUnits} sauces (1 offerte + ${extraSauceCount} extra · +${extraSaucePrice.toFixed(2)} €)`
											}), totalSauceUnits > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: setZeroSauce,
												className: "rounded-full border border-[#DECBB3] bg-[#FAF5EE] px-2.5 py-1 text-[10px] font-bold text-[#7A6857] hover:bg-[#2C1D16] hover:text-white transition cursor-pointer",
												children: "Sans sauce"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4",
										children: detailedSauces.map((sauce) => {
											const count = sauceQuantities[sauce.name] ?? 0;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `flex items-center justify-between gap-1.5 rounded-2xl border-2 p-2.5 transition-all ${count > 0 ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm" : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#ff705f]/40"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													onClick: () => addSauce(sauce.name),
													className: "flex items-center gap-2 min-w-0 flex-1 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl shrink-0",
														children: sauce.emoji
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#2C1D16] truncate",
															children: sauce.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-[#7A6857]",
															children: count === 0 ? totalSauceUnits === 0 ? "Offerte" : "+0,50 €" : count === 1 && totalSauceUnits === 1 ? "Offerte" : `${count}x (+${(count * .5).toFixed(2)}€)`
														})]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 shrink-0",
													children: count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => removeSauce(sauce.name),
															"aria-label": `Diminuer sauce ${sauce.name}`,
															className: "flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-95 cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-4 text-center text-xs font-black text-[#2C1D16]",
															children: count
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => addSauce(sauce.name),
															"aria-label": `Ajouter sauce ${sauce.name}`,
															className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#ff705f] text-white font-black hover:bg-[#ff5542] transition active:scale-95 shadow-sm cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
														})
													] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => addSauce(sauce.name),
														"aria-label": `Choisir sauce ${sauce.name}`,
														className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-95 cursor-pointer",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
													})
												})]
											}, sauce.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1.5 text-xl font-black text-[#2C1D16]",
												children: "Toppings croustillants"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-1 text-xs font-black text-[#EADCC9]",
												children: totalToppingsCount <= 1 ? `${totalToppingsCount} / 1 inclus` : `1 inclus + ${extraToppingsCount} extra (+${toppingsExtra.toFixed(2)} €)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mb-4 text-xs font-semibold text-[#6E5A49]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 portion incluse dans la formule" }), " · Prenez autant de portions que vous souhaitez (+0,50 € chaque portion extra) :"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: toppings.map((top) => {
												const q = toppingQuantities[top.name] ?? 0;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: ["flex flex-col justify-between rounded-2xl border-2 p-3 transition-all duration-200", q > 0 ? "border-[#ff705f] bg-white shadow-sm" : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40"].join(" "),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xl",
															children: top.emoji
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "truncate text-xs font-black text-[#2C1D16]",
																children: top.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] font-black text-[#ff705f]",
																children: q === 0 ? "0,50 € / portion" : `${q} portion${q > 1 ? "s" : ""}`
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2.5 flex items-center justify-between border-t border-[#DECBB3] pt-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-[#6E5A49]",
															children: q > 0 ? `x${q}` : "Extra +0,50 €"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-1.5",
															children: q > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => removeTopping(top.name),
																	className: "flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm cursor-pointer",
																	"aria-label": "Diminuer",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "w-5 text-center text-xs font-black text-[#2C1D16]",
																	children: q
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => addTopping(top.name),
																	className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm cursor-pointer",
																	"aria-label": "Augmenter",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
																})
															] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => addTopping(top.name),
																className: "flex items-center gap-1 rounded-full bg-[#2C1D16] px-2.5 py-1 text-[10px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm cursor-pointer",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })]
															})
														})]
													})]
												}, top.id);
											})
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-24 rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-2xl mb-5 shadow-sm aspect-[4/3] bg-[#2C1D16] group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: activeBowlImage,
												alt: "Poke Bowl sur mesure",
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2.5 left-2.5 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase text-[#EADCC9] border border-white/20 shadow",
												children: "Bowl sur-mesure 🌿"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white text-xs font-black drop-shadow",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Protéine au choix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-[#ff705f] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow",
													children: selectedSize === "grand" ? "Grand (13 €)" : "Moyen (10 €)"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-black text-[#2C1D16]",
										children: "Ton Poke Bowl sur mesure"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-[#6E5A49]",
										children: "Récapitulatif de ta composition :"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-5 space-y-3 divide-y divide-[#DECBB3] text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Format :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: selectedSize === "grand" ? "Grand (+3,00 € · 13 €)" : "Moyen (10 €)"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Base :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: selectedBase ? `${selectedBase.emoji} ${selectedBase.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Protéine :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}${mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)} €)` : ""}` : "Non choisie"
												})]
											}),
											extraProteinsFormatted.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Extras Protéines :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-[#ff705f] text-right",
													children: [
														extraProteinsFormatted.join(", "),
														" (+",
														extraProteinsPrice.toFixed(2),
														" €)"
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Légumes & Mix-ins :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: mixinsFormatted.length > 0 ? `${mixinsFormatted.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)} €)` : ""}` : "0 sélectionné"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Sauces :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: saucesFormatted.length > 0 ? `${saucesFormatted.join(", ")}${extraSaucePrice > 0 ? ` (+${extraSaucePrice.toFixed(2)} €)` : ""}` : "Sans sauce"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#6E5A49]",
													children: "Toppings :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#2C1D16] text-right",
													children: totalToppingsCount > 0 ? `${toppingsFormatted.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)} €)` : ""}` : "Aucun topping"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-[#DECBB3] pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#6E5A49]",
													children: "Quantité"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => Math.max(1, q - 1)),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#DECBB3] bg-white text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-5 text-center font-black",
															children: qty
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => q + 1),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#DECBB3] bg-white text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-5 flex items-baseline justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-[#6E5A49]",
													children: "Total"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-3xl font-black text-[#2C1D16]",
													children: [totalPrice.toFixed(2), " €"]
												})]
											}),
											!isValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-3 rounded-xl bg-[#FFF3EF] p-3 text-center text-xs font-bold text-[#ff705f]",
												children: getMissingReason()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !isValid,
												onClick: handleAddToCart,
												className: ["btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center text-sm font-black transition-all cursor-pointer", !isValid ? "cursor-not-allowed bg-black/20 text-white/60 hover:bg-black/20" : "active:scale-[0.98]"].join(" "),
												children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Ajouté au panier !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													"Ajouter au panier · ",
													totalPrice.toFixed(2),
													" €"
												] })
											})
										]
									})
								]
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { SurMesurePage as component };
