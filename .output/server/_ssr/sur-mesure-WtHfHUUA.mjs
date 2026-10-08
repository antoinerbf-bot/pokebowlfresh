import { i as __toESM } from "../_runtime.mjs";
import { d as detailedProteins, f as detailedSauces, l as detailedBases, m as toppings, u as detailedMixIns } from "./data-Dp1oIeBt.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { L as ArrowLeft, M as Check, a as Sparkles, f as Plus, h as Minus, s as ShoppingBag } from "../_libs/lucide-react.mjs";
import { i as bowl_saumon_default, t as CartDrawer } from "./CartDrawer-DyxMD8dP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sur-mesure-WtHfHUUA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BASE_PRICE = 10;
var INCLUDED_MIX_INS = 5;
function SurMesurePage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	useNavigate();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(detailedBases[0]);
	const [selectedMixIns, setSelectedMixIns] = import_react.useState([]);
	const [selectedProtein, setSelectedProtein] = import_react.useState(detailedProteins[0]);
	const [selectedSauce, setSelectedSauce] = import_react.useState(detailedSauces[0]);
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const activeBowlImage = selectedProtein ? {
		poulet: "/assets/bowl-sweet-chicken-CKSwb_XP.jpg",
		saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
		scampis: "/assets/bowl-scampis-BK5Y7tTW.jpg",
		vege: "/assets/bowl-sweet-chicken-CKSwb_XP.jpg"
	}[selectedProtein.id] || "/assets/bowl-saumon-CRYVYQxR.jpg" : bowl_saumon_default;
	const toggleMixIn = (name) => {
		setSelectedMixIns((cur) => cur.includes(name) ? cur.filter((item) => item !== name) : [...cur, name]);
	};
	const toggleTopping = (name) => {
		setSelectedToppings((cur) => cur.includes(name) ? cur.filter((t) => t !== name) : [...cur, name]);
	};
	const sizeExtra = selectedSize === "grand" ? 3 : 0;
	const proteinExtra = selectedProtein?.extraPrice ?? 0;
	const extraMixInsCount = Math.max(0, selectedMixIns.length - INCLUDED_MIX_INS);
	const mixInsExtra = extraMixInsCount * .5;
	const extraToppingsCount = Math.max(0, selectedToppings.length - 2);
	const toppingsExtra = extraToppingsCount * .5;
	const unitPrice = BASE_PRICE + sizeExtra + proteinExtra + mixInsExtra + toppingsExtra;
	const totalPrice = unitPrice * qty;
	const isBaseReady = selectedBase !== null;
	const isMixInsReady = selectedMixIns.length >= 1;
	const isProteinReady = selectedProtein !== null;
	const isSauceReady = selectedSauce !== null;
	const isValid = isBaseReady && isMixInsReady && isProteinReady && isSauceReady;
	const getMissingReason = () => {
		if (!isBaseReady) return "Étape 1 : Choisis une base";
		if (selectedMixIns.length === 0) return "Étape 2 : Choisis tes mix-ins (5 inclus dans le prix)";
		if (!isProteinReady) return "Étape 3 : Choisis une protéine";
		if (!isSauceReady) return "Étape 4 : Choisis une sauce";
		return null;
	};
	const handleAddToCart = () => {
		if (!isValid) return;
		const options = [
			`Taille : ${selectedSize === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
			`Base : ${selectedBase.name}`,
			`Mix-ins : ${selectedMixIns.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)}€)` : ""}`,
			`Protéine : ${selectedProtein.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
			`Sauce : ${selectedSauce.name}`,
			...selectedToppings.length > 0 ? [`Toppings : ${selectedToppings.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`] : ["Toppings : Aucun"]
		];
		const activeBowlImage = selectedProtein ? {
			poulet: "/assets/bowl-sweet-chicken-CKSwb_XP.jpg",
			saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
			scampis: "/assets/bowl-scampis-BK5Y7tTW.jpg",
			vege: "/assets/bowl-sweet-chicken-CKSwb_XP.jpg"
		}[selectedProtein.id] || "/assets/bowl-saumon-CRYVYQxR.jpg" : bowl_saumon_default;
		addItem({
			id: "sur-mesure",
			name: "Poke Bowl sur mesure",
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
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
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
								to: "/commander",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex",
								children: "La carte"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "mb-6 inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] transition hover:text-[#17231f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour aux bowls signatures"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 overflow-hidden rounded-[28px] bg-[#10251f] p-6 text-white shadow-lift sm:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Fiche officielle restaurant"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 text-3xl font-black tracking-tight sm:text-5xl",
										children: ["Poke (n) Bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#ff705f]",
											children: "sur mesure"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-white/70 sm:text-base",
										children: "Compose ton bol personnalisé en 5 étapes exactement comme sur le ticket du restaurant : 1 base, 5 mix-ins frais, 1 protéine, 1 sauce onctueuse et tes toppings croustillants !"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl bg-white/[0.07] p-5 backdrop-blur-md sm:flex-col sm:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold uppercase tracking-wider text-white/50",
									children: "Formule de base"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-black text-[#d7ff45] sm:text-4xl",
									children: "10.00 €"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-white/60",
									children: "Base + 5 mix-ins + protéine + sauce"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-8 lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Taille"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "Moyen ou Grand"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("moyen"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "moyen" ? "border-[#10251f] bg-[#10251f] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "moyen" ? "text-[#d7ff45]" : "text-[#7a847e]"}`,
													children: "Inclus (10.00€)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "moyen" ? "text-white/70" : "text-[#7a847e]"}`,
												children: "Format régulier généreux"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("grand"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "grand" ? "border-[#10251f] bg-[#10251f] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Grand"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "grand" ? "text-[#d7ff45]" : "text-[#ff705f]"}`,
													children: "+3.00 € (13 €)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "grand" ? "text-white/70" : "text-[#7a847e]"}`,
												children: "Grand format maxi faim"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Base"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: detailedBases.map((base) => {
											const isSelected = selectedBase?.id === base.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedBase(base),
												className: ["flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-2xl",
														children: base.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-bold text-[#17231f]",
															children: base.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold text-[#7a847e]",
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
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
												children: "Étape 2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Mix-Ins Frais"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: ["rounded-full px-3 py-1 text-xs font-black transition-colors", selectedMixIns.length >= INCLUDED_MIX_INS ? "bg-[#10251f] text-[#d7ff45]" : "bg-[#ff705f]/10 text-[#ff705f]"].join(" "),
												children: selectedMixIns.length <= INCLUDED_MIX_INS ? `${selectedMixIns.length} / ${INCLUDED_MIX_INS} inclus` : `${selectedMixIns.length} choisis (${INCLUDED_MIX_INS} inclus + ${extraMixInsCount} extra à +0,50€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedMixIns.length < INCLUDED_MIX_INS ? `5 ingrédients inclus dans la formule (encore ${INCLUDED_MIX_INS - selectedMixIns.length} gratuit${INCLUDED_MIX_INS - selectedMixIns.length > 1 ? "s" : ""}) :` : `5 mix-ins inclus · Choisissez-en autant que vous voulez (+0,50 € par ingrédient supplémentaire) :` }), extraMixInsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#d7ff45]/30 px-2 py-0.5 text-[10px] font-extrabold text-[#10251f]",
												children: [
													"+",
													mixInsExtra.toFixed(2),
													" € de suppléments mix-ins"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
											children: detailedMixIns.map((mixIn) => {
												const isSelected = selectedMixIns.includes(mixIn.name);
												const isExtra = !isSelected && selectedMixIns.length >= INCLUDED_MIX_INS;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleMixIn(mixIn.name),
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-150", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm scale-[1.01]" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: mixIn.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block truncate text-xs font-bold text-[#17231f]",
																	children: mixIn.name
																}),
																isExtra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-bold text-[#ff705f]",
																	children: "+0,50 €"
																}),
																isSelected && selectedMixIns.indexOf(mixIn.name) >= INCLUDED_MIX_INS && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[9px] font-bold text-[#ff705f]",
																	children: "+0,50 €"
																})
															]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
														})
													]
												}, mixIn.id);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 3"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Protéine"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
										children: detailedProteins.map((prot) => {
											const isSelected = selectedProtein?.id === prot.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedProtein(prot),
												className: ["flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-3xl mb-1",
														children: prot.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-bold text-[#17231f]",
														children: prot.name
													}),
													prot.extraPrice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-1 rounded-full bg-[#ff705f] px-2 py-0.5 text-[10px] font-black text-white",
														children: [
															"+",
															prot.extraPrice.toFixed(2),
															" €"
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 text-[10px] font-semibold text-[#7a847e]",
														children: "Inclus"
													})
												]
											}, prot.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Sauce"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-4",
										children: detailedSauces.map((sauce) => {
											const isSelected = selectedSauce?.id === sauce.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSauce(sauce),
												className: ["flex items-center gap-2 rounded-2xl border-2 p-3 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl",
														children: sauce.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "min-w-0 flex-1 truncate text-xs font-bold text-[#17231f]",
														children: sauce.name
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
													})
												]
											}, sauce.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
												children: "Étape 5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Toppings croustillants"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#10251f] px-3 py-1 text-xs font-black text-[#d7ff45]",
												children: selectedToppings.length <= 2 ? `${selectedToppings.length} / 2 inclus` : `2 inclus + ${selectedToppings.length - 2} extra (+${((selectedToppings.length - 2) * .5).toFixed(2)}€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mb-4 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 toppings inclus dans la formule" }), " · Toppings supplémentaires à volonté (+0.50€ chaque) :"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: toppings.map((top) => {
												const isSelected = selectedToppings.includes(top.name);
												const isExtra = isSelected && selectedToppings.indexOf(top.name) >= 2;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleTopping(top.name),
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xl",
															children: top.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "truncate text-xs font-bold text-[#17231f]",
																children: top.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] font-black text-[#ff705f]",
																children: isSelected ? isExtra ? "+0.50 € (extra)" : "Inclus" : "+0.50 € extra"
															})]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
														})
													]
												}, top.id);
											})
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-24 rounded-[28px] border border-[#e8e2d9] bg-white p-6 shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-2xl mb-5 shadow-sm aspect-[4/3] bg-[#faf8f4] group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: activeBowlImage,
												alt: "Poke Bowl sur mesure",
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2.5 left-2.5 rounded-full bg-[#10251f]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase text-[#d7ff45] border border-white/20 shadow",
												children: "Bol Bambou Débordant 🌿"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white text-xs font-black drop-shadow",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Protéine au choix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded bg-[#2431eb] px-2 py-0.5 text-[10px] font-black uppercase text-white shadow",
													children: selectedSize === "grand" ? "Grand (13€)" : "Moyen (10€)"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-black text-[#17231f]",
										children: "Ton Poke Bowl sur mesure"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-[#7a847e]",
										children: "Récapitulatif de ta composition :"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-5 space-y-3 divide-y divide-[#f0ece1] text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Format :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedSize === "grand" ? "Grand (+3.00€ · 13€)" : "Moyen (10€)"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Base :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedBase ? `${selectedBase.emoji} ${selectedBase.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Mix-ins :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedMixIns.length > 0 ? `${selectedMixIns.join(", ")} (${Math.min(INCLUDED_MIX_INS, selectedMixIns.length)} inclus${extraMixInsCount > 0 ? ` + ${extraMixInsCount} extra (+${mixInsExtra.toFixed(2)}€)` : ""})` : "0 sélectionné"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Protéine :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Sauce :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedSauce ? `${selectedSauce.emoji} ${selectedSauce.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Toppings :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedToppings.length > 0 ? `${selectedToppings.join(", ")} (${Math.min(2, selectedToppings.length)} inclus${extraToppingsCount > 0 ? ` + ${extraToppingsCount} extra` : ""})` : "Aucun topping"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-[#e8e2d9] pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Quantité"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => Math.max(1, q - 1)),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-5 text-center font-black",
															children: qty
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => q + 1),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-5 flex items-baseline justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-[#7a847e]",
													children: "Total"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-3xl font-black text-[#17231f]",
													children: [totalPrice.toFixed(2), " €"]
												})]
											}),
											!isValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-3 rounded-xl bg-[#fff1ee] p-3 text-center text-xs font-bold text-[#ff705f]",
												children: getMissingReason()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !isValid,
												onClick: handleAddToCart,
												className: ["btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center text-sm font-black transition-all", !isValid ? "cursor-not-allowed bg-black/20 text-white/60 hover:bg-black/20" : "active:scale-[0.98]"].join(" "),
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
