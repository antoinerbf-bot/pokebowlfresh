import { i as __toESM } from "../_runtime.mjs";
import { f as drinks, i as bowls, s as desserts } from "./data-DrqaM212.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-CfPib1Ml.mjs";
import { n as useCart } from "./CartContext-D7fTgwIa.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { F as MapPin, H as Flame, T as Plus, Y as Clock, b as Search, f as Sparkles, h as ShoppingBag, it as Check, p as SlidersHorizontal, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as drink_eau_gazeuse_default, f as drink_eau_plate_default, g as tiramisu_speculoos_default, h as tiramisu_oreo_default, l as drink_coca_cola_default, m as drink_ice_tea_default, n as DishImage, p as drink_fanta_orange_default, t as CartDrawer, u as drink_coca_zero_default } from "./CartDrawer-CUw3aYqz.mjs";
import { t as useStock } from "./useStock-CmhMz0nb.mjs";
import { n as tiramisu_nutella_default, t as HoursBanner } from "./HoursBanner-DqXU3bxZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commander-CWYyFEI5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
var CROUSTY_DRINKS = [
	{
		id: "coca",
		label: "Coca-Cola (33 cl)",
		emoji: "🥤"
	},
	{
		id: "coca-zero",
		label: "Coca-Cola Zéro (33 cl)",
		emoji: "🥤"
	},
	{
		id: "fanta",
		label: "Fanta Orange (33 cl)",
		emoji: "🍊"
	},
	{
		id: "ice-tea",
		label: "Ice Tea Sparkling (33 cl)",
		emoji: "🧊"
	},
	{
		id: "eau-plate",
		label: "SPA Reine Eau plate (50 cl)",
		emoji: "💧"
	},
	{
		id: "eau-gaz",
		label: "SPA Intense Eau pétillante (50 cl)",
		emoji: "🫧"
	}
];
var TAG_STYLES = {
	signature: "bg-[#2C1D16] text-[#EADCC9]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]"
};
function CommanderPage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const [activeTab, setActiveTab] = import_react.useState("all");
	const [searchQuery, setSearchQuery] = import_react.useState("");
	const [recentlyAddedId, setRecentlyAddedId] = import_react.useState(null);
	const [croustyDrinks, setCroustyDrinks] = import_react.useState({
		"crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)",
		"crousty-chicken-curry": "Coca-Cola (33 cl)",
		"crousty-chicken-mix": "Coca-Cola (33 cl)"
	});
	const pokeBowls = import_react.useMemo(() => {
		return bowls.filter((b) => !b.id.startsWith("crousty-"));
	}, []);
	const croustyBowls = import_react.useMemo(() => {
		return [
			"crousty-chicken-sauce-blanche",
			"crousty-chicken-curry",
			"crousty-chicken-mix"
		].map((id) => bowls.find((b) => b.id === id)).filter(Boolean);
	}, []);
	const query = searchQuery.trim().toLowerCase();
	const filteredPokes = pokeBowls.filter((b) => !query || b.name.toLowerCase().includes(query) || b.desc.toLowerCase().includes(query));
	const filteredCrousty = croustyBowls.filter((b) => !query || b.name.toLowerCase().includes(query) || b.desc.toLowerCase().includes(query));
	const filteredDesserts = desserts.filter((d) => !query || d.name.toLowerCase().includes(query));
	const filteredDrinks = drinks.filter((d) => !query || d.name.toLowerCase().includes(query));
	const triggerAddEffect = (id) => {
		setRecentlyAddedId(id);
		setTimeout(() => {
			setRecentlyAddedId(null);
		}, 1500);
		setIsCartOpen(true);
	};
	const quickAddPoke = (bowl) => {
		if (!available(bowl.id)) return;
		addItem({
			id: `${bowl.id}-moyen`,
			name: `${bowl.name} (Moyen)`,
			basePrice: bowl.price,
			price: bowl.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: bowl.image
		});
		triggerAddEffect(bowl.id);
	};
	const quickAddCrousty = (bowl) => {
		if (!available(bowl.id)) return;
		const chosenDrink = croustyDrinks[bowl.id] || "Coca-Cola (33 cl)";
		addItem({
			id: bowl.id,
			name: bowl.name,
			basePrice: bowl.price,
			price: bowl.price,
			quantity: 1,
			toppings: [`Boisson 33cl incluse : ${chosenDrink}`],
			removedIngredients: [],
			image: bowl.image
		});
		triggerAddEffect(bowl.id);
	};
	const quickAddGeneric = (item) => {
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
		triggerAddEffect(item.id);
	};
	const scrollToSection = (sectionId) => {
		const el = document.getElementById(sectionId);
		if (el) {
			const y = el.getBoundingClientRect().top + window.pageYOffset + -120;
			window.scrollTo({
				top: y,
				behavior: "smooth"
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6EFE5] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-[#DECBB3] bg-[#F6EFE5]/95 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1300px] items-center justify-between px-4 py-2.5 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center transition hover:opacity-95 duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "sm" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-[#DECBB3] bg-[#FAF5EE] p-0.5 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-0.5 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-white" : "text-[#766358] hover:text-[#2C1D16]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "text-xs font-bold text-[#766358] hover:text-[#2C1D16] transition hidden md:inline-block",
								children: "Accueil"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sur-mesure",
								className: "hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#DECBB3] bg-[#FAF5EE] px-3 py-1.5 text-xs font-black text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-[#ff705f]" }), "Sur-Mesure (10 €)"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative flex items-center gap-2 rounded-full bg-[#2C1D16] px-3.5 py-2 text-white transition hover:bg-[#ff705f] active:scale-95 shadow-xs",
								"aria-label": t("cart.title"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black hidden sm:inline",
										children: "Panier"
									}),
									count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff705f] px-1 text-[10px] font-black leading-none",
										children: count
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-[#DECBB3]/70 bg-[#FAF5EE]/95 px-4 py-2 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-[1300px] items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5",
							children: [
								{
									id: "all",
									label: "Tout",
									icon: "✨"
								},
								{
									id: "pokes",
									label: "Pokés Signatures",
									icon: "🥗",
									anchor: "pokes-section"
								},
								{
									id: "crousty",
									label: "Crousty Chicken",
									icon: "🍗",
									anchor: "crousty-section"
								},
								{
									id: "sur-mesure",
									label: "Sur-Mesure",
									icon: "🥣",
									href: "/sur-mesure"
								},
								{
									id: "desserts",
									label: "Desserts",
									icon: "🧁",
									anchor: "desserts-section"
								},
								{
									id: "boissons",
									label: "Boissons",
									icon: "🥤",
									anchor: "boissons-section"
								}
							].map((tab) => {
								const isActive = activeTab === tab.id;
								if (tab.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: tab.href,
									className: "shrink-0 flex items-center gap-1 rounded-full border border-[#DECBB3] bg-[#FFFDF9] px-3 py-1 text-xs font-black text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label })]
								}, tab.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveTab(tab.id);
										if (tab.anchor) scrollToSection(tab.anchor);
									},
									className: `shrink-0 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black transition cursor-pointer ${isActive ? "bg-[#2C1D16] text-[#EADCC9] shadow-xs" : "border border-[#DECBB3] bg-[#FFFDF9] text-[#766358] hover:text-[#2C1D16] hover:border-[#2C1D16]/40"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label })]
								}, tab.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative shrink-0 w-36 sm:w-56",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#766358]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Rechercher...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full rounded-full border border-[#DECBB3] bg-[#FFFDF9] py-1 pl-8 pr-6 text-xs font-medium text-[#2C1D16] placeholder-[#766358]/70 focus:border-[#2C1D16] focus:outline-none"
								}),
								searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSearchQuery(""),
									className: "absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#766358] hover:text-[#2C1D16]",
									children: "✕"
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1300px] px-4 py-5 sm:px-6 sm:py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursBanner, { compact: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#DECBB3]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#ea580c]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥢" }), " Commande en Ligne & Retrait Rapide"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#2C1D16]",
							children: "La Carte Poke N Bowl Visé"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs font-bold text-[#766358]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-1 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-[#ea580c]" }), " Prêt en 15 min"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-1 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-[#ea580c]" }), " Visé & Livraison"]
							})]
						})]
					}),
					(activeTab === "all" || activeTab === "pokes") && !searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-8 overflow-hidden rounded-3xl border-2 border-[#ea580c]/70 bg-gradient-to-br from-[#1C120C] via-[#2A1810] to-[#170E08] p-5 sm:p-7 text-white shadow-[0_12px_40px_-10px_rgba(234,88,12,0.35)] ring-1 ring-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ea580c]/25 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 max-w-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm animate-pulse",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " N°1 DES VENTES"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase text-[#FAF5EE] backdrop-blur-xs",
													children: "🥣 100% PERSONNALISABLE"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-1 text-[11px] font-bold text-emerald-300",
													children: "🥑 5 Légumes frais inclus dès 10,00 €"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight",
											children: "Crée ton Poké Bowl de A à Z !"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs sm:text-sm text-[#EADCC9]/90 font-medium leading-relaxed",
											children: "Compose librement selon tes envies du jour : choisis ta base, ta protéine fraîche (saumon minute, poulet rôti, scampis), tes 5 mix-ins croquants, tes sauces maison et tes toppings croustillants."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold text-[#EADCC9]/80",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-white/10 px-2.5 py-1",
													children: "1. Base riz"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#ea580c]",
													children: "→"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-white/10 px-2.5 py-1",
													children: "2. Protéine"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#ea580c]",
													children: "→"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1",
													children: "3. 5 Légumes au choix"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#ea580c]",
													children: "→"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-white/10 px-2.5 py-1",
													children: "4. Sauces & Crunch"
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:items-center lg:items-end justify-center shrink-0 pt-2 lg:pt-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 hidden sm:flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#ea580c]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✨" }),
												" Crée ta recette sur-mesure ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "👇" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sur-mesure",
											className: "group relative flex w-full sm:w-auto items-center justify-center gap-3.5 rounded-2xl bg-gradient-to-r from-[#FF5722] via-[#ea580c] to-[#d9480f] px-8 py-4 sm:px-10 sm:py-5 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-[0_0_30px_rgba(234,88,12,0.65)] hover:shadow-[0_0_45px_rgba(234,88,12,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ring-2 ring-white/40 cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "relative flex h-3 w-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-white" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMPOSER MON BOWL" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-center sm:text-right text-[11px] font-extrabold text-[#EADCC9]/70",
											children: "Moyen 10,00 € · Grand 13,00 € · Prêt en 15 min"
										})
									]
								})]
							})
						]
					}),
					(activeTab === "all" || activeTab === "pokes") && filteredPokes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "pokes-section",
						className: "mb-8 scroll-mt-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-lg sm:text-xl font-black text-[#2C1D16] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), " Nos Poké Bowls Signatures"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#766358]",
								children: "Saumon frais découpé minute, poulet mariné tendre & scampis grillés."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-extrabold text-[#ff705f] shrink-0",
								children: "Format Moyen dès 10 € · Grand +3 €"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: filteredPokes.map((bowl) => {
								const ok = available(bowl.id);
								const isAdded = recentlyAddedId === bowl.id;
								const tagStyle = TAG_STYLES[bowl.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] shadow-xs transition duration-300 hover:shadow-md hover:border-[#2C1D16]/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/product/$productId",
										params: { productId: bowl.id },
										className: "relative block aspect-[16/10] w-full overflow-hidden bg-[#2C1D16]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: bowl.id,
												alt: bowl.name,
												className: `h-full w-full object-cover transition duration-500 group-hover:scale-105 ${ok ? "" : "grayscale"}`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `absolute left-2.5 top-2.5 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-xs ${tagStyle}`,
												children: ok ? bowl.tag : t("cmd.sold_out")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute bottom-2 right-2.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16] shadow-xs",
												children: [bowl.price.toFixed(2), " €"]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$productId",
												params: { productId: bowl.id },
												className: "block text-sm font-black text-[#2C1D16] hover:text-[#ff705f] transition line-clamp-1",
												children: bowl.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] leading-snug text-[#766358] line-clamp-2",
												children: bowl.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2.5 flex flex-wrap gap-1",
												children: bowl.ingredients.slice(0, 3).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]",
													children: [
														ing.emoji,
														" ",
														ing.name
													]
												}, i))
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-3.5 pt-0 mt-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2.5 border-t border-[#DECBB3]/60 flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/product/$productId",
												params: { productId: bowl.id },
												className: "text-[11px] font-extrabold text-[#766358] hover:text-[#2C1D16] transition flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Détails" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAddPoke(bowl),
												className: `inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer active:scale-95 shadow-xs ${!ok ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-emerald-600 text-white" : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"}`,
												children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })] })
											})]
										})
									})]
								}, bowl.id);
							})
						})]
					}),
					(activeTab === "all" || activeTab === "crousty") && filteredCrousty.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "crousty-section",
						className: "mb-8 scroll-mt-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3.5 pb-2 border-b border-[#DECBB3]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#ea580c]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3 text-[#ea580c] animate-pulse" }), "Gamme Chaude"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-1 text-lg sm:text-xl font-black text-[#2C1D16]",
										children: "🍗 Crousty Chicken · Formule Étudiant 11 €"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-[#766358]",
										children: "Poulet croustillant doré minute, riz parfumé chaud, oignon frit & canette 33 cl incluse au choix."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1.5 text-xs font-black text-[#ea580c] shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-[#ea580c] text-white px-2.5 py-0.5 text-[10px] uppercase",
										children: "Boisson 33 cl incluse 🥤"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-3 gap-4",
								children: filteredCrousty.map((bowl) => {
									const ok = available(bowl.id);
									const isAdded = recentlyAddedId === bowl.id;
									const isMix = bowl.id === "crousty-chicken-mix";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex flex-col justify-between overflow-hidden rounded-2xl border-2 bg-[#FFFDF9] shadow-xs transition duration-300 hover:shadow-md ${isMix ? "border-[#ea580c]/50 ring-1 ring-[#ea580c]/10" : "border-[#DECBB3]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/product/$productId",
											params: { productId: bowl.id },
											className: "relative block aspect-[16/10] w-full overflow-hidden bg-[#2C1D16]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
													dishId: bowl.id,
													alt: bowl.name,
													className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-xs ${isMix ? "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white" : bowl.id === "crousty-chicken-curry" ? "bg-[#d97706] text-white" : "bg-[#2C1D16] text-[#EADCC9]"}`,
													children: isMix ? "⭐ Mix Duo Curry & Blanche" : bowl.id === "crousty-chicken-curry" ? "🍛 Sauce Curry" : "🤍 Sauce Blanche"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-2 right-2.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16] shadow-xs",
													children: "11,00 €"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-2 left-2.5 rounded-md bg-black/70 backdrop-blur-sm px-1.5 py-0.5 text-[8.5px] font-black text-[#EADCC9]",
													children: "Boisson 33 cl incluse"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-3.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/product/$productId",
													params: { productId: bowl.id },
													className: "block text-sm font-black text-[#2C1D16] hover:text-[#ea580c] transition line-clamp-1",
													children: bowl.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-[11px] leading-snug text-[#766358] line-clamp-2",
													children: bowl.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-2.5 flex flex-wrap gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]",
															children: "✓ Poulet croustillant"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]",
															children: "✓ Riz parfumé"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]",
															children: "✓ Oignon frit"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]",
															children: "✓ Aigre douce"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 pt-2.5 border-t border-[#DECBB3]/60",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "block text-[9.5px] font-black uppercase tracking-wider text-[#766358] mb-1",
														children: "Canette 33 cl incluse :"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
														value: croustyDrinks[bowl.id] || "Coca-Cola (33 cl)",
														onChange: (e) => setCroustyDrinks((prev) => ({
															...prev,
															[bowl.id]: e.target.value
														})),
														className: "w-full rounded-lg border border-[#DECBB3] bg-[#FAF5EE] px-2 py-1 text-xs font-bold text-[#2C1D16] focus:border-[#2C1D16] focus:outline-none cursor-pointer",
														children: CROUSTY_DRINKS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
															value: d.label,
															children: [
																d.emoji,
																" ",
																d.label
															]
														}, d.id))
													})]
												})
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-3.5 pt-0 mt-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 border-t border-[#DECBB3]/60 flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/product/$productId",
													params: { productId: bowl.id },
													className: "text-[11px] font-extrabold text-[#766358] hover:text-[#2C1D16] transition flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Détails" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													disabled: !ok,
													onClick: () => quickAddCrousty(bowl),
													className: `inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[11px] font-black transition cursor-pointer active:scale-95 shadow-xs ${!ok ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-emerald-600 text-white" : isMix ? "bg-[#ea580c] hover:bg-[#c2410c] text-white" : "bg-[#2C1D16] hover:bg-[#ea580c] text-[#EADCC9] hover:text-white"}`,
													children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter 11 €" })] })
												})]
											})
										})]
									}, bowl.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center text-[10.5px] font-semibold text-[#766358]",
								children: "* Pour toute sauce supplémentaire : disponible en supplément lors de la commande (+1,00 €)."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8",
						children: [(activeTab === "all" || activeTab === "desserts") && filteredDesserts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "desserts-section",
							className: "rounded-2xl border border-[#DECBB3] bg-[#FAF5EE] p-4 shadow-xs scroll-mt-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-[#DECBB3]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-base sm:text-lg font-black text-[#2C1D16] flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Tiramisus Maison"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#766358]",
									children: "Recette artisanale crémeuse"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]",
									children: "4,00 €"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3",
								children: filteredDesserts.map((d) => {
									const ok = available(d.id);
									const isAdded = recentlyAddedId === d.id;
									const imgSrc = DESSERT_IMAGES[d.id] || "/assets/dessert-9PIP1ns9.jpg";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-between overflow-hidden rounded-xl border border-[#DECBB3]/80 bg-[#FFFDF9] p-2.5 shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#2C1D16]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imgSrc,
												alt: d.name,
												className: `h-full w-full object-cover transition duration-300 hover:scale-105 ${!ok ? "grayscale" : ""}`
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.2 text-[9px] font-black text-[#EADCC9]",
												children: "4.00 €"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center justify-between gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black text-[#2C1D16] truncate",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAddGeneric({
													id: d.id,
													name: d.name,
													price: d.price,
													image: imgSrc
												}),
												className: `shrink-0 flex h-7 w-7 items-center justify-center rounded-lg transition active:scale-90 ${!ok ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-emerald-600 text-white" : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"}`,
												title: "Ajouter au panier",
												children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" })
											})]
										})]
									}, d.id);
								})
							})]
						}), (activeTab === "all" || activeTab === "boissons") && filteredDrinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "boissons-section",
							className: "rounded-2xl border border-[#DECBB3] bg-[#FAF5EE] p-4 shadow-xs scroll-mt-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-[#DECBB3]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-base sm:text-lg font-black text-[#2C1D16] flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥤" }), " Boissons Fraîches"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#766358]",
									children: "Servies bien fraîches"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]",
									children: "2,00 €"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid grid-cols-3 sm:grid-cols-3 gap-2.5",
								children: filteredDrinks.map((drink) => {
									const ok = available(drink.id);
									const isAdded = recentlyAddedId === drink.id;
									const imgSrc = DRINK_IMAGES[drink.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-between overflow-hidden rounded-xl border border-[#DECBB3]/80 bg-[#FFFDF9] p-2 shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square w-full overflow-hidden rounded-lg bg-[#FAF5EE]",
											children: [imgSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imgSrc,
												alt: drink.name,
												loading: "lazy",
												className: `h-full w-full object-cover transition duration-300 hover:scale-105 ${!ok ? "grayscale" : ""}`
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-full w-full items-center justify-center text-2xl",
												children: "🥤"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1 right-1 rounded-full bg-[#2C1D16] px-1.5 py-0.2 text-[8.5px] font-black text-[#EADCC9]",
												children: "2.00 €"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1.5 flex items-center justify-between gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-black text-[#2C1D16] truncate",
												title: drink.name,
												children: drink.name.split(" ")[0]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAddGeneric({
													id: drink.id,
													name: drink.name,
													price: drink.price,
													image: imgSrc
												}),
												className: `shrink-0 flex h-6 w-6 items-center justify-center rounded-lg transition active:scale-90 ${!ok ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-emerald-600 text-white" : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"}`,
												title: "Ajouter au panier",
												children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
											})]
										})]
									}, drink.id);
								})
							})]
						})]
					}),
					filteredPokes.length === 0 && filteredCrousty.length === 0 && filteredDesserts.length === 0 && filteredDrinks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-12 rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] p-8 text-center shadow-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: "🔍"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-2 text-base font-black text-[#2C1D16]",
								children: [
									"Aucun plat ne correspond à « ",
									searchQuery,
									" »"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-[#766358]",
								children: "Vérifiez l'orthographe ou essayez un autre mot-clé (saumon, poulet, curry, tiramisu...)."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSearchQuery(""),
								className: "mt-3 rounded-full bg-[#2C1D16] px-4 py-1.5 text-xs font-black text-white",
								children: "Effacer la recherche"
							})
						]
					})
				]
			}),
			count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-[#DECBB3] bg-[#FFFDF9]/95 p-3 backdrop-blur-md sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsCartOpen(true),
					className: "flex w-full items-center justify-between rounded-full bg-[#2C1D16] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voir mon panier" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-[#ff705f] px-2.5 py-0.5 text-xs font-black text-white",
						children: [
							count,
							" ",
							count > 1 ? "articles" : "article"
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { CommanderPage as component };
