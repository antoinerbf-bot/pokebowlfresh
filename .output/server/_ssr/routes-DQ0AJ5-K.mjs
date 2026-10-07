import { i as __toESM } from "../_runtime.mjs";
import { c as desserts, p as drinks, r as bowls } from "./data-S05pcQad.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { D as BriefcaseBusiness, E as Check, O as ArrowRight, S as Clock, T as ChevronLeft, _ as Menu, b as Layers, l as ShoppingBag, m as Phone, n as Utensils, s as Sparkles, t as X, v as MapPin, w as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as DishImage, t as CartDrawer } from "./CartDrawer-D3RCKZlw.mjs";
import { t as dessert_default } from "./dessert-DNrt0Psl.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQ0AJ5-K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_poke_default = "/assets/hero-poke-Dk38LgOY.jpg";
var REEL_BOWLS = [
	{
		id: "sweet-chicken",
		name: "Sweet Chicken",
		price: 10,
		tag: "Best-seller",
		tagColor: "#d7ff45",
		headline: "Poulet maison, mangue douce & teriyaki",
		description: "Vrais morceaux de filet de poulet, guacamole, maïs, tomates cerises, mangue, feta, sauce teriyaki, oignons croustillants, sésame mix et nachos.",
		highlights: [
			"🍗 Poulet maison",
			"🥭 Mangue & Feta",
			"🌽 Nachos & Oignons frits"
		]
	},
	{
		id: "saumon-wasabi",
		name: "Saumon Wasabi",
		price: 11,
		tag: "Premium",
		tagColor: "#ff705f",
		headline: "Saumon noble & salade d'algues",
		description: "Cubes de saumon frais noble, avocat, salade d'algues, mangue, maïs, edamame, mayo wasabi, sésame mix et nachos croquants.",
		highlights: [
			"🐟 Saumon frais noble",
			"🥑 Avocat & Salade d'algues",
			"🌽 Nachos & Sésame mix"
		]
	},
	{
		id: "scampis-royaux",
		name: "Scampis Royal",
		price: 10,
		tag: "Signature",
		tagColor: "#d7ff45",
		headline: "Scampis, jalapeños & spicy mayo",
		description: "Scampis dorés, guacamole, edamame, tomates, concombre, poivrons, spicy mayo, jalapeños, nachos et flocons de chili.",
		highlights: [
			"🦐 Scampis dorés",
			"🌶️ Jalapeños & Spicy mayo",
			"🌽 Nachos & Flocons chili"
		]
	},
	{
		id: "mighty-gyros",
		name: "Mighty Gyros",
		price: 10,
		tag: "Signature",
		tagColor: "#f59e0b",
		headline: "Gyros maison & guacamole frais",
		description: "Gyros maison émincé, guacamole, maïs croquant, tomates cerises, concombre, oignons, spicy mayo et flocons de chili.",
		highlights: [
			"🥙 Gyros maison",
			"🥑 Guacamole & Maïs",
			"🔥 Flocons de chili"
		]
	},
	{
		id: "spicy-chicken",
		name: "Spicy Chicken",
		price: 10,
		tag: "Épicé",
		tagColor: "#ff705f",
		headline: "Poulet maison mariné & patates douces",
		description: "Poulet maison mariné, avocat, patates douces, maïs, jalapeños, feta, spicy mayo, flocons de chili, sésame mix et nachos.",
		highlights: [
			"🍗 Poulet maison",
			"🍠 Patates douces & Feta",
			"🌽 Nachos & Jalapeños"
		]
	}
];
var AUTOPLAY_DURATION_MS = 5e3;
function PokeCinematicReel() {
	const [currentIndex, setCurrentIndex] = import_react.useState(0);
	const [isPaused, setIsPaused] = import_react.useState(false);
	const currentBowl = REEL_BOWLS[currentIndex];
	import_react.useEffect(() => {
		if (isPaused) return;
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % REEL_BOWLS.length);
		}, AUTOPLAY_DURATION_MS);
		return () => clearInterval(interval);
	}, [isPaused, currentIndex]);
	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % REEL_BOWLS.length);
	};
	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + REEL_BOWLS.length) % REEL_BOWLS.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full select-none",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-[#d7ff45]/15 via-transparent to-[#ff705f]/15 blur-2xl transition-all duration-1000 -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[32px] border border-white/15 bg-[#10251f] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-4 inset-x-5 z-30 flex gap-2",
					children: REEL_BOWLS.map((bowl, index) => {
						const isActive = index === currentIndex;
						const isPassed = index < currentIndex;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCurrentIndex(index),
							className: "group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 transition hover:h-2",
							"aria-label": `Aller au bowl ${bowl.name}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full transition-all duration-300 ${isActive ? "bg-[#d7ff45]" : isPassed ? "bg-white/80" : "bg-transparent"}`,
								style: {
									width: isActive ? "100%" : isPassed ? "100%" : "0%",
									transitionDuration: isActive && !isPaused ? `${AUTOPLAY_DURATION_MS}ms` : "300ms",
									transitionTimingFunction: "linear"
								}
							})
						}, bowl.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] w-full overflow-hidden bg-[#071713] sm:aspect-[16/11]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: 1.08
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .98
								},
								transition: {
									duration: .75,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "absolute inset-0 h-full w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: currentBowl.id,
									alt: currentBowl.name,
									priority: true,
									className: "h-full w-full object-cover transition-transform duration-10000 ease-out hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#10251f] via-[#10251f]/20 to-black/35" })]
							}, currentBowl.id)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-10 left-5 right-5 z-20 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#10251f] shadow-md backdrop-blur-md",
								style: { backgroundColor: currentBowl.tagColor },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), currentBowl.tag]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-black/60 px-3 py-1 text-xs font-black text-white backdrop-blur-md border border-white/10",
								children: [currentBowl.price.toFixed(2), " €"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 left-5 right-5 z-20 hidden flex-wrap gap-2 sm:flex",
							children: currentBowl.highlights.map((highlight, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md",
								children: highlight
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handlePrev,
							"aria-label": "Bowl précédent",
							className: "absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleNext,
							"aria-label": "Bowl suivant",
							className: "absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-6 sm:p-7 bg-[#10251f] text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
								children: "Recette officielle · Fait minute"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-black tracking-tight sm:text-3xl",
								children: currentBowl.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-white/70 line-clamp-2 max-w-md",
								children: currentBowl.description
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2.5 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: currentBowl.id },
								className: "inline-flex items-center gap-2 rounded-2xl bg-[#ff705f] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white shadow-lg transition hover:bg-[#ff5542] hover:scale-105",
								children: ["Personnaliser", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-white/10 no-scrollbar",
						children: REEL_BOWLS.map((bowl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCurrentIndex(idx),
							className: `shrink-0 rounded-xl px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition ${idx === currentIndex ? "bg-white text-[#10251f] shadow" : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"}`,
							children: bowl.name
						}, bowl.id))
					})]
				})
			]
		})]
	});
}
var CRAFT_STEPS = [
	{
		number: "01",
		title: "Le Lit de Riz Basmati Aéré",
		subtitle: "La base parfaite",
		description: "Cuit vapeur avec précision, notre riz basmati aux grains fins et allongés reste léger, tiède et naturellement aéré. Zéro bloc compact, juste la texture idéale.",
		emoji: "🍚",
		ingredients: [
			"Riz basmati fin",
			"Grains détachés & légers",
			"Assaisonnement délicat"
		],
		focusDishId: "sweet-chicken",
		layerHighlight: "Fond du bowl · Riz vapeur aéré"
	},
	{
		number: "02",
		title: "La Protéine Noble Découpée Minute",
		subtitle: "Le cœur du goût",
		description: "Du saumon cru qualité sashimi découpé chaque matin, de vrais cubes de poulet doré au grill, des scampis saisis à la flamme ou du gyros artisanal.",
		emoji: "🍗",
		ingredients: [
			"Filet de poulet grillé",
			"Saumon frais sashimi",
			"Scampis à la flamme",
			"Gyros artisanal"
		],
		focusDishId: "sweet-chicken",
		layerHighlight: "Centre · Morceaux dorés juteux"
	},
	{
		number: "03",
		title: "L'Assortiment Fraîcheur & Fruits",
		subtitle: "Vitamines & couleurs",
		description: "Avocat Haas crémeux découpé en éventail, mangue mûre en cubes sucrés, fèves d'edamame croquantes, tomates cerises juteuses et guacamole maison.",
		emoji: "🥑",
		ingredients: [
			"Avocat frais crémeux",
			"Mangue mûre",
			"Guacamole maison",
			"Edamame & Maïs doux"
		],
		focusDishId: "saumon-wasabi",
		layerHighlight: "Couronne · Légumes et fruits frais"
	},
	{
		number: "04",
		title: "Les Sauces Signatures Maison",
		subtitle: "L'onctuosité & l'équilibre",
		description: "Nappées en filet élégant sur la composition : Spicy Mayo maison au piment doux, Mayo Wasabi subtilement relevée, ou Teriyaki sucrée-salée brillante.",
		emoji: "🌶️",
		ingredients: [
			"Spicy mayo maison",
			"Mayo wasabi",
			"Teriyaki glacée",
			"Sésame doux"
		],
		focusDishId: "scampis-royaux",
		layerHighlight: "Nappage · Sauce veloutée signature"
	},
	{
		number: "05",
		title: "Le Crunch & Finition Toppings",
		subtitle: "La signature croquante",
		description: "Oignons croustillants dorés, graines de sésame noir & blanc toastées, brisures de nachos et flocons de chili pour une texture irrésistible à chaque bouchée.",
		emoji: "🧅",
		ingredients: [
			"Oignons croustillants",
			"Sésame mix toasté",
			"Nachos croustillants",
			"Flocons de chili"
		],
		focusDishId: "spicy-chicken",
		layerHighlight: "Touche finale · Toppings ultra croquants"
	}
];
function PokeBowlCraftingExperience() {
	const [activeStep, setActiveStep] = import_react.useState(0);
	const current = CRAFT_STEPS[activeStep];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0d211b] p-6 sm:p-10 lg:p-12 text-white shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3" }), "Anatomie d'un Poké Bowl"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl",
						children: "Comment naît votre Poké Bowl sous vos yeux."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/65 leading-relaxed",
						children: "Chaque ingrédient est sélectionné le matin, préparé minute et assemblé couche après couche pour un équilibre gustatif parfait."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: CRAFT_STEPS.map((step, idx) => {
						const isActive = idx === activeStep;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveStep(idx),
							className: `group w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border ${isActive ? "bg-white/10 border-[#d7ff45]/50 shadow-lg" : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs transition ${isActive ? "bg-[#d7ff45] text-[#10251f]" : "bg-white/10 text-white/70 group-hover:bg-white/20"}`,
										children: step.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `text-[10px] font-black uppercase tracking-wider ${isActive ? "text-[#d7ff45]" : "text-white/45"}`,
										children: step.subtitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base sm:text-lg font-black text-white",
										children: step.title
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: step.emoji
								})]
							}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									height: 0
								},
								animate: {
									opacity: 1,
									height: "auto"
								},
								exit: {
									opacity: 0,
									height: 0
								},
								transition: { duration: .3 },
								className: "mt-3 pt-3 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-white/75",
									children: step.description
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: step.ingredients.map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-[#10251f] px-2.5 py-1 text-[10px] font-bold text-white/90 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#d7ff45]" }), ing]
									}, i))
								})]
							})]
						}, step.number);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[28px] border border-white/15 bg-[#10251f] p-3 shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: 1.05
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: {
											opacity: 0,
											scale: .98
										},
										transition: { duration: .55 },
										className: "h-full w-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: current.focusDishId,
											alt: current.title,
											className: "h-full w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" })]
									}, current.focusDishId + activeStep)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 right-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] backdrop-blur-md border border-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
											"Couche ",
											current.number,
											" / 05"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur-md",
										children: current.layerHighlight
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4 right-4 rounded-2xl bg-black/75 p-4 backdrop-blur-md border border-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] font-black uppercase tracking-[0.16em] text-[#d7ff45]",
											children: "Composition maîtrisée"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-black text-white",
											children: current.title
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/sur-mesure",
											className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] transition hover:scale-110",
											"aria-label": "Composer mon bowl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										})]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-4 w-4 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-white/80",
									children: "Composez chaque couche selon vos envies"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sur-mesure",
								className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#ff5542]",
								children: ["Créer mon Bowl", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						})]
					})
				})]
			})
		]
	});
}
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
var HOUR_ROWS = [
	["info.day.mon", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.tue", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.wed", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.thu", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.fri", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.sat", "18:00 – 21:00"],
	["info.day.sun", "closed"]
];
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 22
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function RevealScale({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .93
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .12
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Ticker() {
	const items = Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mx-5 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.14em] sm:text-[11px]",
		children: [
			"Poke N Bowl",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fresh food",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Visé, Belgique",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#d7ff45] py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 32,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex w-max whitespace-nowrap",
			children: [items, items]
		})
	});
}
function Index() {
	const { t, language, setLanguage } = useTranslation();
	const { items, setIsCartOpen } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
	const [activeTab, setActiveTab] = import_react.useState("all");
	const filteredPokeBowls = import_react.useMemo(() => {
		if (activeTab === "all") return pokeBowls;
		if (activeTab === "bestseller") return pokeBowls.filter((b) => b.tagColor === "bestseller");
		if (activeTab === "signature") return pokeBowls.filter((b) => b.tagColor === "signature");
		if (activeTab === "fish") return pokeBowls.filter((b) => b.id === "saumon-wasabi" || b.id === "scampis-royaux");
		if (activeTab === "spicy") return pokeBowls.filter((b) => b.id === "spicy-chicken" || b.id === "mighty-gyros" || b.id === "scampis-royaux");
		return pokeBowls;
	}, [pokeBowls, activeTab]);
	const closeMobile = () => setMobileOpen(false);
	const heroRef = import_react.useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
	const heroOpacity = useTransform(scrollYProgress, [0, .7], [1, 0]);
	import_react.useEffect(() => {
		const prev = window.history.scrollRestoration;
		window.history.scrollRestoration = "manual";
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
		const frame = window.requestAnimationFrame(() => window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		}));
		return () => {
			window.cancelAnimationFrame(frame);
			window.history.scrollRestoration = prev;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute inset-x-0 top-0 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "auto"
							}),
							className: "flex min-w-0 shrink-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
							"aria-label": "Poke N Bowl — Accueil",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-6 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#composer",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.create")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#infos",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.info")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block",
									children: t("nav.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur md:flex",
									children: [
										"fr",
										"en",
										"nl"
									].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLanguage(lang),
										className: `rounded-full px-2 py-1 text-[9px] font-bold uppercase transition ${language === lang ? "bg-white text-black" : "text-white/55 hover:text-white"}`,
										children: lang
									}, lang))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsCartOpen(true),
									"aria-label": "Panier",
									className: "relative rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
										children: cartCount
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Menu",
									onClick: () => setMobileOpen((o) => !o),
									className: "rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40 md:hidden",
									children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							]
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -8,
						scale: .97
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: { duration: .22 },
					className: "mx-3 mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#10251f]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1",
						children: [
							[
								{
									href: "#carte",
									label: t("nav.menu")
								},
								{
									href: "#composer",
									label: t("nav.create")
								},
								{
									href: "#infos",
									label: t("nav.info")
								}
							].map(({ href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								onClick: closeMobile,
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10",
								children: label
							}, href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/contact",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10",
								children: t("nav.contact")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/recrutement",
								className: "mt-1 rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white",
								children: t("nav.recruit")
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: heroRef,
					className: "relative isolate min-h-[700px] overflow-hidden bg-[#071713] text-white lg:min-h-[780px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: heroY },
							className: "absolute inset-0 -z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_poke_default,
								alt: "",
								"aria-hidden": "true",
								fetchPriority: "high",
								className: "h-full w-full object-cover object-center opacity-18"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_35%,rgba(215,255,69,.12),transparent_40%),radial-gradient(ellipse_at_20%_80%,rgba(255,112,95,.08),transparent_50%),linear-gradient(110deg,#071713_0%,rgba(7,23,19,.98)_50%,rgba(7,23,19,.85)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto grid min-h-[700px] max-w-[1340px] items-center gap-10 px-5 pb-12 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-8 lg:min-h-[780px] lg:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								style: { opacity: heroOpacity },
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 16
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .7,
											delay: .15
										},
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/30 bg-[#d7ff45]/10 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#d7ff45] animate-pulse" }), "Poké Bowls Frais & Sur-Mesure · Visé & Fléron"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
										initial: {
											opacity: 0,
											y: 22
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .75,
											delay: .28
										},
										className: "mt-4 font-sans text-[2.6rem] font-black leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-white",
												children: "L'art du"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-[#d7ff45]",
												children: "Poké Bowl."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block text-xl sm:text-2xl lg:text-3xl font-extrabold text-white/80",
												children: "Frais. Gourmand. Fait minute."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										transition: {
											duration: .7,
											delay: .4
										},
										className: "mt-5 max-w-lg text-[15px] leading-7 text-white/70",
										children: "Découvrez nos 5 recettes créations aux ingrédients nobles découpés chaque matin : saumon atlantique frais, scampis saisis au grill, émincé de gyros rôti, poulet doré fondant et notre riz basmati d’exception."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 14
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .7,
											delay: .5
										},
										className: "mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#carte",
											className: "btn-primary inline-flex h-13 items-center justify-center gap-2.5 px-7 text-sm font-black uppercase tracking-wider",
											children: ["Découvrir nos Bowls (dès 10€)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/sur-mesure",
											className: "inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#d7ff45]" }), "Composer Sur Mesure 🥣"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										transition: {
											duration: .7,
											delay: .6
										},
										className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-bold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#d7ff45]",
													children: "★ 4.9/5"
												}), " avis clients"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-bold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑" }), " 100% frais coupé du matin"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 font-bold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵" }), " Visé & Fléron"]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .8,
									delay: .2
								},
								className: "relative w-full max-w-xl lg:max-w-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeCinematicReel, {})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), " Recettes officielles du flyer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 max-w-2xl text-[1.9rem] font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[#10251f]",
								children: "Nos 5 Poké Bowls Signatures"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-[#7d8b83] text-xl sm:text-2xl lg:text-3xl font-extrabold",
								children: "Riz basmati parfumé, sauces maison & fraîcheur garantie"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-[#68756f]",
								children: "Chaque recette est soigneusement équilibrée et personnalisable. Retirez des ingrédients ou ajoutez vos toppings préférés en 1 clic."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sur-mesure",
									className: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#ff705f] hover:underline",
									children: "Ou compose ton bowl de A à Z →"
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2 pt-2",
						children: [
							{
								id: "all",
								label: "Tous nos Poké Bowls (5)"
							},
							{
								id: "bestseller",
								label: "Best-Seller ⭐"
							},
							{
								id: "signature",
								label: "Signatures ✦"
							},
							{
								id: "fish",
								label: "Saumon & Scampis 🦐"
							},
							{
								id: "spicy",
								label: "Touche Épicée 🌶️"
							}
						].map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab(filter.id),
							className: `rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${activeTab === filter.id ? "bg-[#10251f] text-white shadow-md scale-105" : "bg-white text-[#10251f]/75 hover:bg-[#10251f]/10 border border-black/5"}`,
							children: filter.label
						}, filter.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: filteredPokeBowls.map((bowl, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
							delay: index * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex h-full flex-col overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden bg-[#ece8dc]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: bowl.id,
											alt: bowl.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-tag absolute left-3.5 top-3.5 bg-white/95 text-[#10251f] shadow-card font-black",
											children: bowl.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute bottom-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1.5 text-xs font-black text-[#10251f] shadow-md",
											children: [bowl.price.toFixed(2), " €"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-start justify-between gap-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl sm:text-2xl font-black text-[#10251f] leading-tight",
												children: bowl.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs font-bold text-[#ff705f]",
												children: "Base riz basmati aéré · Fait minute"
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-5 text-[#68756f]",
											children: bowl.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-1.5",
											children: [bowl.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/80",
												children: [
													ing.emoji,
													" ",
													ing.name
												]
											}, i)), bowl.ingredients.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]",
												children: ["+", bowl.ingredients.length - 5]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-auto pt-6 flex items-center gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/product/$productId",
												params: { productId: bowl.id },
												className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff5542]",
												children: ["Personnaliser & Commander", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})
										})
									]
								})]
							})
						}, bowl.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1340px] px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeBowlCraftingExperience, {}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[#f0e6d6] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-y border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#8b5510]/10 px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#8b5510]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗" }), " Spécialités Chaudes & Croustillantes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-[1.9rem] font-black uppercase tracking-tight sm:text-4xl lg:text-5xl",
									children: "Le Bar à Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#6e6255] max-w-xl mx-auto",
									children: "Du poulet ultra croustillant pané minute, servi chaud sur riz parfumé avec oignons frits."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 inline-flex items-center gap-3 rounded-full bg-[#8b5510] px-5 py-2 text-white shadow-md text-xs font-black uppercase tracking-wider",
									children: "🎓 Formule Étudiant : 11 € · Boisson 33cl incluse"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto",
							children: croustyBowls.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
								delay: index * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: item.id },
									className: "group flex flex-col sm:flex-row overflow-hidden rounded-[26px] border border-[#8d5a18]/15 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] sm:w-48 shrink-0 overflow-hidden bg-[#e7d4b4]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: item.id,
											alt: item.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-3 top-3 rounded-full bg-[#8b5510] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white",
											children: "11 € · Menu"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col p-5 sm:p-6 justify-between flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] font-black uppercase tracking-wider text-[#a96b0d]",
												children: "Crousty Chicken"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 text-lg font-black text-[#241a12]",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs text-[#6e6255] line-clamp-2",
												children: item.desc
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#8b5510]",
												children: "Boisson incluse"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-xs font-black text-[#241a12] group-hover:text-[#a96b0d]",
												children: ["Commander ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})]
										})]
									})]
								})
							}, item.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "composer",
					className: "scroll-mt-10 bg-[#10251f] px-5 py-12 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
								children: t("journey.eyebrow")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 max-w-3xl text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("journey.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-white/35",
									children: t("journey.title2")
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-5",
								children: [
									{
										num: "01",
										title: "1. Ta Base",
										desc: "Riz blanc, riz brun, pâtes, nachos ou salade fraîche."
									},
									{
										num: "02",
										title: "2. Mix-in",
										desc: "5 ingrédients frais parmi 16 (avocat, mangue, feta, maïs...)."
									},
									{
										num: "03",
										title: "3. Protéine",
										desc: "Poulet mariné, gyros maison, saumon (+1€) ou scampis."
									},
									{
										num: "04",
										title: "4. Sauce",
										desc: "Spicy-mayo, teriyaki, mayo truffe, sésame, chili doux..."
									},
									{
										num: "05",
										title: "5. Toppings",
										desc: "Oignons frits, sésame seeds, noix de cajou, flocons chili..."
									}
								].map(({ num, title, desc }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										whileHover: { y: -4 },
										transition: { duration: .25 },
										className: "h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl font-black text-[#d7ff45]",
												children: num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-base font-black",
												children: title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs leading-relaxed text-white/55",
												children: desc
											})
										]
									})
								}, num))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]",
									children: "Formule Poke (n) Bowl sur mesure · 10.00 €"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/60",
									children: "Compose ton bol personnalisé en ligne ou découvre nos 7 recettes signatures."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/sur-mesure",
										className: "btn-primary inline-flex items-center justify-center gap-2",
										children: ["Composer mon bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commander",
										className: "rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-white/10",
										children: "Voir la carte"
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-white shadow-card sm:p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-black/5 px-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
									children: t("menu.drinks")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-black sm:text-3xl",
									children: t("menu.drinks_title")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 p-5 sm:grid-cols-2 sm:p-6",
								children: drinks.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "flex items-center justify-between gap-2 rounded-xl bg-[#f5f4ee] px-4 py-3 text-sm transition hover:bg-[#d7ff45] hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 break-words font-bold",
										children: drink.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 text-xs font-black",
										children: ["€ ", drink.price.toFixed(2)]
									})]
								}, drink.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-[#ff705f] text-white shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-white/15 px-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-white/60",
									children: t("menu.desserts")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-black sm:text-3xl",
									children: t("menu.desserts_title")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dessert_default,
									alt: "Tiramisu maison",
									loading: "lazy",
									className: "h-20 w-20 shrink-0 rounded-2xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/75",
										children: desserts.map((d) => d.name).join(" · ")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/commander",
										className: "mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4",
										children: [t("menu.desserts_cta"), " →"]
									})]
								})]
							})]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[30px] sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl font-black leading-snug sm:text-3xl",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "scroll-mt-10 bg-[#ece9df] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
								children: t("info.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("info.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[#7d8b83]",
									children: t("info.title2")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-2.5 sm:mt-8 sm:gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white p-4 shadow-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-black/5 pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-black uppercase tracking-[0.15em] text-[#ff705f]",
												children: "Restaurant Visé"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45] px-2 py-0.5 text-[9px] font-black",
												children: "Ouvert"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: MAPS_URL,
												target: "_blank",
												rel: "noreferrer",
												className: "flex items-center gap-2.5 text-xs font-bold hover:text-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Av. du Pont 12, 4600 Visé" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "tel:+32491281456",
												className: "flex items-center gap-2 text-xs font-black text-[#10251f] hover:text-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0491 28 14 56" })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-white p-4 shadow-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-black/5 pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-black uppercase tracking-[0.15em] text-[#ff705f]",
												children: "Restaurant Fléron"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45] px-2 py-0.5 text-[9px] font-black",
												children: "Ouvert"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://www.google.com/maps?q=Avenue+des+Martyrs+307,+4620+Fl%C3%A9ron",
												target: "_blank",
												rel: "noreferrer",
												className: "flex items-center gap-2.5 text-xs font-bold hover:text-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Av. des Martyrs 307, 4620 Fléron" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "tel:+32493423643",
												className: "flex items-center gap-2 text-xs font-black text-[#10251f] hover:text-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0493 42 36 43" })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-xl bg-[#f7f4ec] px-4 py-2 text-[10px] font-bold text-[#7d8b83]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵 Livraison à domicile disponible" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://instagram.com/POKE_NBOWL",
											target: "_blank",
											rel: "noreferrer",
											className: "text-[#10251f] font-black hover:underline",
											children: "@POKE_NBOWL"
										})]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-[24px] bg-[#10251f] text-white shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:px-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-black",
											children: t("info.hours")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-white/10 px-5 sm:px-7",
										children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3 py-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 font-bold text-white/60",
												children: t(dayKey)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `shrink-0 text-right font-black ${value === "closed" ? "text-[#ff705f]" : ""}`,
												children: value === "closed" ? t("info.closed") : value
											})]
										}, dayKey))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-5 py-4 sm:px-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45] transition hover:gap-3",
											children: [
												t("info.maps"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											]
										})
									})
								]
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#0b1a16] px-5 py-8 pb-24 text-white sm:px-6 sm:pb-8 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-white",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									className: "transition hover:text-white",
									children: t("nav.order")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "transition hover:text-white",
									children: t("footer.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "transition hover:text-white",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[9px] font-bold uppercase tracking-[0.12em] text-white/22",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/commander",
				className: "btn-primary fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 md:hidden",
				children: [
					t("hero.order"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				]
			})
		]
	});
}
//#endregion
export { Index as component };
