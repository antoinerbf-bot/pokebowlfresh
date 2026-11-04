import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-D7fTgwIa.mjs";
import { K as Check, M as Flame, P as CupSoda, b as Plus, u as Sparkles } from "../_libs/lucide-react.mjs";
import { a as bowl_crousty_mix_default, i as bowl_crousty_curry_default, r as bowl_crousty_blanche_default } from "./CartDrawer-CMD4JKDa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CroustyExperienceSection-qLoPBaYA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
var CROUSTY_RECIPES = [
	{
		id: "crousty-chicken-mix",
		name: "Crousty Chicken Mix (Curry & Blanche)",
		shortName: "Crousty Mix",
		tagline: "Le duo star incontournable : deux sauces signatures pour une explosion de saveurs",
		badge: "⭐ Formule Star · Duo Exclusif",
		badgeColor: "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white",
		price: 11,
		heroImage: "/assets/hero-crousty-mix-wide-BCJPyKG9.jpg",
		bowlImage: bowl_crousty_mix_default,
		sauceDescription: "Duo onctueux Sauce Curry douce mijotée + Sauce Blanche maison aux fines herbes & pointe d'aigre-douce",
		tastingNotes: [
			"🍗 Morceaux de poulet croustillant dorés minute",
			"🍛 Sauce curry mijotée douce et crémeuse",
			"🤍 Sauce blanche maison veloutée",
			"🧅 Oignons frits dorés extra croustillants",
			"🍚 Riz parfumé servi bien chaud",
			"🥤 Canette 33 cl incluse au choix"
		],
		description: "La création vedette qui fait l'unanimité : de généreux morceaux de poulet croustillant posés sur un lit de riz parfumé chaud, magnifiés par la rencontre unique de notre sauce curry dorée et de notre sauce blanche maison.",
		sauceAccent: {
			name: "Duo Curry & Blanche",
			emoji: "🍛🤍",
			color: "#f59e0b",
			bgBadge: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30"
		}
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Sauce Curry",
		shortName: "Crousty Curry",
		tagline: "L'onctuosité chaude et réconfortante d'un curry doux et savoureux",
		badge: "🍛 Classique Gourmand · Curry Doux",
		badgeColor: "bg-[#d97706] text-white",
		price: 11,
		heroImage: "/assets/hero-crousty-wide-DkYcLRjh.jpg",
		bowlImage: bowl_crousty_curry_default,
		sauceDescription: "Sauce curry maison riche, onctueuse et subtilement épicée sans piquant agressif",
		tastingNotes: [
			"🍗 Bouchées de poulet pané frites minute",
			"🍛 Nappage généreux sauce curry douce",
			"🍯 Touche subtile d'aigre-douce brillante",
			"🧅 Pluie d'oignons croustillants dorés",
			"🍚 Riz blanc parfumé fondant",
			"🥤 Boisson 33 cl fraîche comprise"
		],
		description: "Pour les amateurs de saveurs chaudes et enveloppantes : un nappage généreux de sauce curry maison, douce et soyeuse, qui enrobe chaque morceau de poulet croustillant.",
		sauceAccent: {
			name: "Curry Chaud Onctueux",
			emoji: "🍛",
			color: "#d97706",
			bgBadge: "bg-[#d97706]/15 text-[#d97706] border-[#d97706]/30"
		}
	},
	{
		id: "crousty-chicken-sauce-blanche",
		name: "Crousty Chicken Sauce Blanche",
		shortName: "Crousty Blanche",
		tagline: "La douceur crémeuse aux fines herbes et pointe d'ail doux",
		badge: "🤍 Velouté & Fraîcheur · Recette Maison",
		badgeColor: "bg-[#FAF5EE] text-[#2C1D16] border border-[#DECBB3]",
		price: 11,
		heroImage: "/assets/bowl-crousty-blanche-DbHS9siD.jpg",
		bowlImage: bowl_crousty_blanche_default,
		sauceDescription: "Sauce blanche fraîcheur aux herbes délicates, texture veloutée et équilibrée",
		tastingNotes: [
			"🍗 Blancs de poulet panés ultra croustillants",
			"🤍 Sauce blanche onctueuse aux fines herbes",
			"🧄 Légère pointe d'ail doux harmonieux",
			"🧅 Oignons croustillants caramélisés",
			"🍚 Riz chaud en barquette rectangulaire",
			"🥤 Canette 33 cl au choix offerte"
		],
		description: "Le mariage parfait de la texture croustillante et de la rondeur veloutée : une sauce blanche maison parfumée aux fines herbes qui adoucit chaque bouchée avec fraîcheur.",
		sauceAccent: {
			name: "Sauce Blanche Fines Herbes",
			emoji: "🤍",
			color: "#FAF5EE",
			bgBadge: "bg-white/20 text-[#FAF5EE] border-white/30"
		}
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
	const [selectedDrinks, setSelectedDrinks] = (0, import_react.useState)({
		"crousty-chicken-mix": "Coca-Cola (33 cl)",
		"crousty-chicken-curry": "Coca-Cola (33 cl)",
		"crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)"
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
			image: recipe.bowlImage
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
	const mixRecipe = CROUSTY_RECIPES[0];
	const curryRecipe = CROUSTY_RECIPES[1];
	const blancheRecipe = CROUSTY_RECIPES[2];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#23130A] via-[#311A0E] to-[#1C0F08] p-6 sm:p-10 text-[#FAF5EE] border-2 border-[#ea580c]/30 shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 -mt-12 -mr-12 h-80 w-80 rounded-full bg-[#ea580c]/20 blur-[90px] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 -mb-12 -ml-12 h-80 w-80 rounded-full bg-[#f59e0b]/15 blur-[90px] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ea580c] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 fill-white animate-pulse" }), "La Spécialité Chaude Pokénball"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-[#f59e0b] border border-[#f59e0b]/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Doré minute à la commande"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight",
								children: ["L'Expérience ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#f59e0b]",
									children: "Crousty Chicken"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-[#EADCC9]/85 font-medium leading-relaxed max-w-2xl",
								children: "Morceaux de blanc de poulet croustillant frits minute, généreusement nappés de nos sauces signatures maison, parsemés d'oignons dorés et servis bien chauds sur riz parfumé en barquette rectangulaire kraft."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shrink-0 flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#ea580c] text-white text-2xl shadow-sm",
							children: "🎓"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-black uppercase tracking-wider text-[#f59e0b]",
							children: "Formule Étudiant · Midi Uniquement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl sm:text-3xl font-black text-white",
								children: "11,00 €"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-[#EADCC9]/80",
								children: "Canette 33 cl incluse"
							})]
						})] })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "group relative overflow-hidden rounded-[34px] border-2 border-[#ea580c]/50 bg-gradient-to-br from-[#1C1008] via-[#2A160B] to-[#1F1109] text-[#FAF5EE] shadow-lift transition hover:border-[#ea580c] duration-500",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-0 items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-black",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mixRecipe.heroImage,
								alt: mixRecipe.name,
								className: "h-full w-full object-cover object-center transition duration-700 group-hover:scale-105 filter contrast-[1.06] saturate-[1.12]",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1C1008] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#1C1008]/20 lg:to-[#1C1008] pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-4 left-4 z-10 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ea580c] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md",
									children: ["⭐ ", mixRecipe.badge]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-black text-[#f59e0b] border border-[#f59e0b]/40 shadow",
									children: "11,00 € avec boisson"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 left-4 z-10 rounded-xl bg-black/70 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-[#EADCC9] border border-white/15",
								children: "🍗 Morceaux croustillants dorés minute · Barquette chaude"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#f59e0b]/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#f59e0b] border border-[#f59e0b]/30",
									children: "Duo de Sauces Exclusif"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-[#EADCC9]/70",
									children: "Recette Star"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug",
								children: mixRecipe.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs sm:text-sm text-[#EADCC9]/80 font-medium leading-relaxed",
								children: mixRecipe.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-2",
								children: mixRecipe.tastingNotes.slice(0, 4).map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-semibold text-[#FAF5EE]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#ea580c] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-5 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-black uppercase tracking-wider text-[#f59e0b] flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupSoda, { className: "h-3.5 w-3.5" }), " Boisson 33 cl incluse au choix :"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-bold text-white/60",
										children: "Formule Midi"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedDrinks[mixRecipe.id] || "Coca-Cola (33 cl)",
									onChange: (e) => handleDrinkChange(mixRecipe.id, e.target.value),
									className: "w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white backdrop-blur-md focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b] cursor-pointer",
									children: DRINK_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: d.label,
										className: "bg-[#2C1D16] text-white",
										children: [
											d.emoji,
											" ",
											d.label
										]
									}, d.id))
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-bold uppercase tracking-wider text-[#EADCC9]/60",
								children: "Formule complète"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl sm:text-3xl font-black text-[#f59e0b]",
								children: "11,00 €"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleAddCrousty(mixRecipe),
								className: `inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-md ${addedIds[mixRecipe.id] ? "bg-emerald-600 text-white" : "bg-[#ea580c] hover:bg-[#c2410c] text-white hover:scale-105"}`,
								children: addedIds[mixRecipe.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter le Mix" })] })
							})]
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-6 sm:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between overflow-hidden rounded-[30px] border-2 border-[#d97706]/40 bg-gradient-to-br from-[#231409] via-[#2F180B] to-[#1F1008] text-[#FAF5EE] shadow-card transition duration-500 hover:border-[#f59e0b] hover:-translate-y-1.5 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] w-full overflow-hidden bg-black",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: curryRecipe.heroImage,
								alt: curryRecipe.name,
								className: "h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#231409] via-transparent to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3.5 left-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#d97706] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md",
									children: "🍛 Sauce Curry Maison"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 right-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-black text-[#f59e0b] border border-[#f59e0b]/40 shadow",
									children: "11,00 € avec canette"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black uppercase tracking-wider text-[#d97706]",
								children: "Chaud & Réconfortant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-xl sm:text-2xl font-black text-white leading-snug",
								children: curryRecipe.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#EADCC9]/80 font-medium",
								children: curryRecipe.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🍗 Poulet croustillant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🍛 Curry onctueux"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🧅 Oignons frits"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🍚 Riz chaud"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-4 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[10px] font-bold uppercase tracking-wider text-[#f59e0b] mb-1.5",
									children: "Canette 33 cl incluse :"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedDrinks[curryRecipe.id] || "Coca-Cola (33 cl)",
									onChange: (e) => handleDrinkChange(curryRecipe.id, e.target.value),
									className: "w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-md focus:border-[#f59e0b] focus:outline-none cursor-pointer",
									children: DRINK_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: d.label,
										className: "bg-[#2C1D16] text-white",
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
						className: "p-6 pt-0 mt-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-white/10 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-black text-[#f59e0b]",
								children: "11,00 €"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleAddCrousty(curryRecipe),
								className: `inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 ${addedIds[curryRecipe.id] ? "bg-emerald-600 text-white" : "bg-[#d97706] hover:bg-[#b45309] text-white"}`,
								children: addedIds[curryRecipe.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander Curry" })] })
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between overflow-hidden rounded-[30px] border-2 border-white/20 bg-gradient-to-br from-[#1C140E] via-[#261A13] to-[#1A120B] text-[#FAF5EE] shadow-card transition duration-500 hover:border-white/50 hover:-translate-y-1.5 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] w-full overflow-hidden bg-black",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: blancheRecipe.heroImage,
								alt: blancheRecipe.name,
								className: "h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]",
								loading: "lazy",
								decoding: "async"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1C140E] via-transparent to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3.5 left-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-white/30",
									children: "🤍 Sauce Blanche Maison"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 right-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-black text-white border border-white/30 shadow",
									children: "11,00 € avec canette"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
								children: "Velouté & Fines Herbes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-xl sm:text-2xl font-black text-white leading-snug",
								children: blancheRecipe.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#EADCC9]/80 font-medium",
								children: blancheRecipe.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🍗 Poulet croustillant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🤍 Blanche fines herbes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🧅 Oignons frits"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10",
										children: "🍚 Riz chaud"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 pt-4 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[10px] font-bold uppercase tracking-wider text-[#EADCC9] mb-1.5",
									children: "Canette 33 cl incluse :"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedDrinks[blancheRecipe.id] || "Coca-Cola (33 cl)",
									onChange: (e) => handleDrinkChange(blancheRecipe.id, e.target.value),
									className: "w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-md focus:border-white focus:outline-none cursor-pointer",
									children: DRINK_OPTIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: d.label,
										className: "bg-[#2C1D16] text-white",
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
						className: "p-6 pt-0 mt-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-white/10 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-black text-white",
								children: "11,00 €"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleAddCrousty(blancheRecipe),
								className: `inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 ${addedIds[blancheRecipe.id] ? "bg-emerald-600 text-white" : "bg-[#EADCC9] hover:bg-white text-[#2C1D16]"}`,
								children: addedIds[blancheRecipe.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander Blanche" })] })
							})]
						})
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { tiramisu_nutella_default as n, CroustyExperienceSection as t };
