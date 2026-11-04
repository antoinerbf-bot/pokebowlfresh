import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-D7fTgwIa.mjs";
import { K as Check, M as Flame, P as CupSoda, b as Plus } from "../_libs/lucide-react.mjs";
import { a as bowl_crousty_mix_default, i as bowl_crousty_curry_default, r as bowl_crousty_blanche_default } from "./CartDrawer-BPEpFSET.mjs";
import { n as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CroustyExperienceSection-Z2oZh_2X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
var CROUSTY_RECIPES = [
	{
		id: "crousty-chicken-sauce-blanche",
		name: "Crousty Chicken Sauce Blanche",
		shortTitle: "Sauce Blanche",
		badge: "🤍 Velouté & Fines Herbes",
		badgeIcon: "🤍",
		badgeClass: "bg-[#2C1D16] text-[#EADCC9]",
		accentColor: "#2C1D16",
		price: 11,
		image: bowl_crousty_blanche_default,
		tasteNote: "Douceur crémeuse veloutée aux herbes fraîches et pointe d'ail doux",
		desc: "Morceaux de poulet croustillant dorés minute sur riz chaud parfumé, nappés de sauce blanche onctueuse maison et parsemés d'oignons frits croquants. Formule 11 € avec canette 33 cl incluse le midi.",
		chips: [
			"🍗 Poulet doré minute",
			"🤍 Blanche maison",
			"🧅 Oignons frits",
			"🍚 Riz chaud"
		]
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Sauce Curry",
		shortTitle: "Sauce Curry",
		badge: "🍛 Curry Doux Onctueux",
		badgeIcon: "🍛",
		badgeClass: "bg-[#d97706] text-white",
		accentColor: "#d97706",
		price: 11,
		image: bowl_crousty_curry_default,
		tasteNote: "Onctuosité chaude et réconfortante d'un curry doux mijoté",
		desc: "Morceaux de poulet croustillant dorés minute sur riz chaud parfumé, généreusement nappés de notre sauce curry maison onctueuse et d'oignons frits. Formule 11 € avec canette 33 cl incluse le midi.",
		chips: [
			"🍗 Poulet doré minute",
			"🍛 Curry doux",
			"🧅 Oignons frits",
			"🍚 Riz chaud"
		]
	},
	{
		id: "crousty-chicken-mix",
		name: "Crousty Chicken Mix (Curry & Blanche)",
		shortTitle: "Le Mix Duo",
		badge: "⭐ Duo Curry & Blanche",
		badgeIcon: "⭐",
		badgeClass: "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white shadow-xs",
		accentColor: "#ea580c",
		price: 11,
		image: bowl_crousty_mix_default,
		tasteNote: "Le duo star : Sauce Curry dorée + Sauce Blanche maison réunies",
		desc: "La formule vedette : morceaux de poulet croustillant dorés minute sur riz chaud, duo Sauce Curry onctueuse + Sauce Blanche maison, pointe d'aigre-douce et oignons frits. Formule 11 € avec canette 33 cl incluse le midi.",
		chips: [
			"🍗 Poulet croustillant",
			"🍛 Curry onctueux",
			"🤍 Blanche maison",
			"🧅 Oignons frits"
		]
	}
];
var DRINK_OPTIONS = [
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
function CroustyExperienceSection({ className = "" }) {
	const { addItem, setIsCartOpen } = useCart();
	const [selectedFilter, setSelectedFilter] = (0, import_react.useState)("all");
	const [selectedDrinks, setSelectedDrinks] = (0, import_react.useState)({
		"crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)",
		"crousty-chicken-curry": "Coca-Cola (33 cl)",
		"crousty-chicken-mix": "Coca-Cola (33 cl)"
	});
	const [addedIds, setAddedIds] = (0, import_react.useState)({});
	const handleAddCrousty = (recipe) => {
		const chosenDrink = selectedDrinks[recipe.id] || "Coca-Cola (33 cl)";
		addItem({
			id: recipe.id,
			name: recipe.name,
			basePrice: recipe.price,
			price: recipe.price,
			quantity: 1,
			toppings: [`Boisson 33cl incluse : ${chosenDrink}`],
			removedIngredients: [],
			image: recipe.image
		});
		setAddedIds((prev) => ({
			...prev,
			[recipe.id]: true
		}));
		setTimeout(() => {
			setAddedIds((prev) => ({
				...prev,
				[recipe.id]: false
			}));
		}, 1800);
		setIsCartOpen(true);
	};
	const handleDrinkChange = (recipeId, drinkLabel) => {
		setSelectedDrinks((prev) => ({
			...prev,
			[recipeId]: drinkLabel
		}));
	};
	const displayedRecipes = selectedFilter === "all" ? CROUSTY_RECIPES : CROUSTY_RECIPES.filter((r) => r.id === selectedFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 pb-5 border-b border-[#DECBB3]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#2C1D16]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 text-[#ea580c] animate-pulse" }), "La Gamme Chaude Crousty Chicken"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2C1D16]",
						children: "Doré minute sur riz chaud parfumé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs sm:text-sm text-[#766358] max-w-2xl font-medium",
						children: ["Blancs de poulet panés croustillants, servis bien chauds en barquette rectangulaire kraft avec oignons frits.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#ea580c] ml-1",
							children: "Formule Étudiant 11 € avec canette 33 cl incluse le midi."
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 flex items-center gap-3 rounded-2xl bg-[#FFFDF9] border border-[#DECBB3] p-3 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C1D16] text-[#EADCC9] text-base font-black",
						children: "🎓"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[10px] font-black uppercase tracking-wider text-[#ea580c]",
						children: "Midi uniquement"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-base font-black text-[#2C1D16]",
						children: ["11,00 € ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-[#766358]",
							children: "+ boisson 33 cl"
						})]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelectedFilter("all"),
						className: `flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${selectedFilter === "all" ? "bg-[#2C1D16] text-white shadow-xs" : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗 Toutes les recettes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-black/10 px-1.5 py-0.2 text-[10px]",
							children: "3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedFilter("crousty-chicken-sauce-blanche"),
						className: `flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${selectedFilter === "crousty-chicken-sauce-blanche" ? "bg-[#2C1D16] text-white shadow-xs" : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🤍 1. Sauce Blanche" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedFilter("crousty-chicken-curry"),
						className: `flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${selectedFilter === "crousty-chicken-curry" ? "bg-[#d97706] text-white shadow-xs" : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍛 2. Sauce Curry" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSelectedFilter("crousty-chicken-mix"),
						className: `flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${selectedFilter === "crousty-chicken-mix" ? "bg-[#ea580c] text-white shadow-xs" : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⭐ 3. Le Mix (Duo)" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid gap-6 ${displayedRecipes.length === 1 ? "max-w-xl mx-auto" : displayedRecipes.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`,
				children: displayedRecipes.map((recipe, idx) => {
					const isAdded = addedIds[recipe.id];
					const isMix = recipe.id === "crousty-chicken-mix";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .35,
							delay: idx * .08
						},
						className: `group flex flex-col justify-between overflow-hidden rounded-[26px] border-2 bg-[#FFFDF9] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${isMix ? "border-[#ea580c]/60 ring-2 ring-[#ea580c]/10" : "border-[#DECBB3] hover:border-[#2C1D16]/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/11] w-full overflow-hidden bg-[#2C1D16]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: recipe.image,
									alt: recipe.name,
									className: "h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 left-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm ${recipe.badgeClass}`,
										children: recipe.badge
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 right-3 flex items-center gap-1.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16] shadow-sm",
										children: "11,00 €"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 left-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[9px] font-extrabold text-[#EADCC9]",
										children: "Boisson 33 cl incluse 🥤"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-black uppercase tracking-wider text-[#ea580c]",
										children: isMix ? "Formule Duo Vedette" : "Recette Phare"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold text-[#766358]",
										children: "Barquette Chaude"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 text-lg sm:text-xl font-black text-[#2C1D16] group-hover:text-[#ea580c] transition",
									children: recipe.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs text-[#766358] leading-relaxed line-clamp-2",
									children: recipe.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3.5 flex flex-wrap gap-1.5",
									children: recipe.chips.map((chip, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-0.5 text-[10px] font-bold text-[#2C1D16]",
										children: chip
									}, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-3 border-t border-[#DECBB3]/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-[10px] font-black uppercase tracking-wider text-[#766358] mb-1 flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupSoda, { className: "h-3 w-3 text-[#ea580c]" }), " Canette 33 cl incluse :"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedDrinks[recipe.id] || "Coca-Cola (33 cl)",
										onChange: (e) => handleDrinkChange(recipe.id, e.target.value),
										className: "w-full rounded-xl border border-[#DECBB3] bg-[#FAF5EE] px-3 py-1.5 text-xs font-bold text-[#2C1D16] focus:border-[#2C1D16] focus:outline-none cursor-pointer",
										children: DRINK_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
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
							className: "p-5 sm:p-6 pt-0 mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-[#DECBB3]/60 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-black text-[#2C1D16]",
									children: "11,00 €"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleAddCrousty(recipe),
									className: `inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-xs ${isAdded ? "bg-emerald-600 text-white" : isMix ? "bg-[#ea580c] hover:bg-[#c2410c] text-white" : "bg-[#2C1D16] hover:bg-[#ea580c] text-[#EADCC9] hover:text-white"}`,
									children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })] })
								})]
							})
						})]
					}, recipe.id);
				})
			})
		]
	});
}
//#endregion
export { tiramisu_nutella_default as n, CroustyExperienceSection as t };
