import { i as __toESM } from "../_runtime.mjs";
import { r as bowls } from "./data-DDklX-19.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { A as ArrowRight, C as Clock, D as Check, E as ChevronLeft, O as BriefcaseBusiness, T as ChevronRight, _ as Menu, b as Layers, k as Bell, l as ShoppingBag, m as Phone, n as Utensils, p as Plus, s as Sparkles, t as X, v as MapPin, x as Flame } from "../_libs/lucide-react.mjs";
import { n as DishImage, t as CartDrawer } from "./CartDrawer-gaMOO_qx.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvEzLlcI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_poke_default = "/assets/hero-poke-Dk38LgOY.jpg";
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
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
		title: "Le Lit de Riz à Sushi",
		subtitle: "La base parfaite",
		description: "Préparé selon la tradition, notre riz à sushi est délicatement vinaigré et assaisonné pour une texture fondante et savoureuse, parfait sous vos ingrédients frais.",
		emoji: "🍚",
		ingredients: [
			"Riz à sushi traditionnel",
			"Assaisonnement délicat",
			"Texture fondante"
		],
		focusDishId: "sweet-chicken",
		layerHighlight: "Fond du bowl · Riz à sushi assaisonné"
	},
	{
		number: "02",
		title: "La Protéine Noble Découpée Minute",
		subtitle: "Le cœur du goût",
		description: "Du saumon cru qualité sashimi découpé chaque matin, de vrais cubes de poulet doré au grill ou des scampis saisis à la flamme.",
		emoji: "🍗",
		ingredients: [
			"Filet de poulet grillé",
			"Saumon frais sashimi",
			"Scampis à la flamme"
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
						className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3" }), "Anatomie d'un Poké Bowl"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl",
						children: "Comment naît votre Poké Bowl sous vos yeux"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70 leading-relaxed",
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
function NotificationBellMenu() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [hasUnread, setHasUnread] = (0, import_react.useState)(true);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
		}
		if (isOpen) document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);
	const handleToggle = () => {
		setIsOpen((prev) => !prev);
		if (!isOpen) setHasUnread(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: menuRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			id: "bell-icon",
			type: "button",
			onClick: handleToggle,
			"aria-label": "Afficher les nouveautés et offres",
			"aria-expanded": isOpen,
			className: "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40 hover:scale-105 active:scale-95",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4.5 w-4.5" }), hasUnread && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-1.5 right-1.5 flex h-2.5 w-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff705f] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff705f]" })]
			})]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-12 z-50 w-[340px] sm:w-[380px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-black/5 bg-[#10251f] px-5 py-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]",
							children: "🔔"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-extrabold",
							children: "Nouveautés & Offres"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-white/70",
							children: "Poke N Bowl Visé"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsOpen(false),
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/75 hover:bg-white/20 hover:text-white transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[380px] overflow-y-auto p-3 space-y-2.5",
					children: [
						{
							id: "notif-crousty",
							tag: "Spécialité Chaude",
							tagColor: "bg-[#8b5510] text-white",
							title: "Crousty Chicken Curry & Blanche",
							desc: "Poulet pané ultra croustillant, oignons frits. Boisson 33cl incluse au choix !",
							dishId: "crousty-chicken-curry",
							price: "11,00 €",
							badge: "Formule Étudiant",
							link: "/product/crousty-chicken-curry"
						},
						{
							id: "notif-saumon",
							tag: "Best-Seller",
							tagColor: "bg-[#d7ff45] text-[#10251f]",
							title: "Poké Bowls Frais du Jour",
							desc: "5 recettes signatures préparées à la commande : Saumon Wasabi, Sweet Chicken, Scampis Royal...",
							dishId: "bowl-saumon",
							price: "Dès 10,00 €",
							badge: "100% Frais",
							link: "/#carte"
						},
						{
							id: "notif-custom",
							tag: "Création",
							tagColor: "bg-[#ff705f] text-white",
							title: "Composez votre Bowl Sur-Mesure",
							desc: "Choisissez votre base, 5 mix-ins frais inclus, votre protéine et votre sauce maison.",
							dishId: "bowl-sweet-chicken",
							price: "Dès 10,00 €",
							badge: "Personnalisable",
							link: "/sur-mesure"
						}
					].map((notif) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: notif.link,
						onClick: () => setIsOpen(false),
						className: "group flex items-start gap-3 rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#ece8dc]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: notif.dishId === "bowl-saumon" ? "saumon-wasabi" : notif.dishId === "bowl-sweet-chicken" ? "sweet-chicken" : notif.dishId,
								alt: notif.title,
								className: "h-full w-full object-cover transition group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${notif.tagColor}`,
										children: notif.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-extrabold text-[#10251f]",
										children: notif.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 text-xs font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition",
									children: notif.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[11px] leading-tight text-[#68756f] line-clamp-2",
									children: notif.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1.5 flex items-center gap-1 text-[10px] font-bold text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-2.5 w-2.5 group-hover:translate-x-0.5 transition" })]
								})
							]
						})]
					}, notif.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-black/5 bg-[#faf8f4] p-3 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						onClick: () => setIsOpen(false),
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10251f] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f]",
						children: ["Voir toute la carte en ligne", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
var NOTIFICATIONS = [
	{
		id: "crousty-curry",
		tag: "Spécialité Chaude",
		tagColor: "bg-[#8b5510] text-white",
		title: "Crousty Chicken Curry",
		desc: "Poulet ultra croustillant doré, sauce curry maison & oignons frits. Boisson 33cl incluse !",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🍗",
		productId: "crousty-chicken-curry"
	},
	{
		id: "crousty-blanche",
		tag: "Nouveau au Menu",
		tagColor: "bg-[#10251f] text-white",
		title: "Crousty Sauce Blanche",
		desc: "Tenders croustillants panés minute, sauce blanche onctueuse et oignons frits croquants.",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Étudiant",
		tagColor: "bg-[#d7ff45] text-[#10251f]",
		title: "Formule Crousty à 11 €",
		desc: "1 Crousty Bowl au choix + 1 boisson 33cl offerte incluse (Coca, Ice-Tea, Fanta...).",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🎓",
		productId: "crousty-chicken-curry"
	}
];
function CroustyNotificationToast() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const [isDismissed, setIsDismissed] = (0, import_react.useState)(false);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initialTimer = setTimeout(() => {
			if (!isDismissed) setIsVisible(true);
		}, 3500);
		return () => clearTimeout(initialTimer);
	}, [isDismissed]);
	(0, import_react.useEffect)(() => {
		if (!isVisible || isHovered) return;
		const hideTimer = setTimeout(() => {
			setIsVisible(false);
			const nextTimer = setTimeout(() => {
				if (!isDismissed) {
					setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
					setIsVisible(true);
				}
			}, 9e3);
			return () => clearTimeout(nextTimer);
		}, 7e3);
		return () => clearTimeout(hideTimer);
	}, [
		isVisible,
		isHovered,
		isDismissed
	]);
	const activeNotif = NOTIFICATIONS[currentIndex];
	const handleDismiss = () => {
		setIsVisible(false);
		setIsDismissed(true);
		setTimeout(() => setIsDismissed(false), 45e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 z-40 max-w-[370px] pointer-events-none sm:bottom-6 sm:left-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30,
				scale: .94
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .94
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 280
			},
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			className: "pointer-events-auto relative overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#d7ff45]/20 blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					"aria-label": "Fermer la notification",
					className: "absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[#10251f]/60 hover:bg-black/10 hover:text-[#10251f] transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3.5 pr-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] border border-black/5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
							dishId: activeNotif.dishId,
							alt: activeNotif.title,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] shadow-sm",
							children: activeNotif.badgeEmoji
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${activeNotif.tagColor}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-2.5 w-2.5" }), activeNotif.tag]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold text-[#8b5510]",
									children: activeNotif.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-sm font-extrabold text-[#10251f] leading-snug",
								children: activeNotif.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] leading-relaxed text-[#68756f] line-clamp-2",
								children: activeNotif.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: activeNotif.productId },
									onClick: () => setIsVisible(false),
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f] hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Commander (",
										activeNotif.price,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold text-[#7d8b83]",
									children: "Boisson incluse"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2.5 h-1 w-full overflow-hidden rounded-full bg-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "100%" },
						animate: { width: isHovered ? "100%" : "0%" },
						transition: {
							duration: 7,
							ease: "linear"
						},
						className: "h-full bg-[#ff705f]"
					})
				})
			]
		}) })
	});
}
function PokeBowlMarqueeCarousel() {
	const scrollRef = (0, import_react.useRef)(null);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const [isAutoScrolling, setIsAutoScrolling] = (0, import_react.useState)(true);
	const checkScroll = () => {
		if (!scrollRef.current) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
		setCanScrollLeft(scrollLeft > 10);
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", checkScroll);
		checkScroll();
		return () => el.removeEventListener("scroll", checkScroll);
	}, []);
	const scroll = (direction) => {
		if (!scrollRef.current) return;
		const scrollAmount = direction === "left" ? -340 : 340;
		scrollRef.current.scrollBy({
			left: scrollAmount,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		if (!isAutoScrolling) return;
		const interval = setInterval(() => {
			if (!scrollRef.current) return;
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			if (scrollLeft >= scrollWidth - clientWidth - 15) scrollRef.current.scrollTo({
				left: 0,
				behavior: "smooth"
			});
			else scrollRef.current.scrollBy({
				left: 320,
				behavior: "smooth"
			});
		}, 4500);
		return () => clearInterval(interval);
	}, [isAutoScrolling]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		onMouseEnter: () => setIsAutoScrolling(false),
		onMouseLeave: () => setIsAutoScrolling(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-1 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" }), "✦ Le Défilé de nos Bowls Signatures"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10251f]",
					children: "Découvrez tous nos Poké Bowls en un coup d'œil"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm text-[#68756f]",
					children: "70% de nos commandes : des bowls ultra-garnis, faits minute avec notre riz à sushi délicat."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-start sm:self-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scroll("left"),
					disabled: !canScrollLeft,
					"aria-label": "Faire défiler vers la gauche",
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scroll("right"),
					disabled: !canScrollRight,
					"aria-label": "Faire défiler vers la droite",
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory px-1",
			style: {
				scrollbarWidth: "none",
				msOverflowStyle: "none"
			},
			children: bowls.map((bowl, index) => {
				const isCrousty = bowl.id.startsWith("crousty-");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden bg-[#ece8dc]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: bowl.id,
								alt: bowl.name,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3.5 left-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${isCrousty ? "bg-[#8b5510] text-white" : bowl.tagColor === "bestseller" ? "bg-[#d7ff45] text-[#10251f]" : "bg-white/95 text-[#10251f]"}`,
									children: [isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }), bowl.tag]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3.5 right-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-[#10251f] px-3.5 py-1.5 text-xs font-black text-white shadow-md border border-white/20",
									children: [bowl.price.toFixed(2), " €"]
								})
							}),
							isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-3.5 left-3.5 rounded-full bg-[#d7ff45] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md",
								children: "Boisson incluse 🥤"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5 sm:p-6 justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-[#ff705f]",
									children: isCrousty ? "Spécialité Chaude" : "Poké Bowl Signature"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-[#7d8b83]",
									children: "Fait minute"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-lg font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition",
								children: bowl.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2",
								children: bowl.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 flex flex-wrap gap-1",
								children: [bowl.ingredients.slice(0, 4).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-md bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-semibold text-[#10251f]/80",
									children: [
										ing.emoji,
										" ",
										ing.name
									]
								}, i)), bowl.ingredients.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-md bg-[#f7f4ec] px-1.5 py-0.5 text-[10px] font-semibold text-[#7d8b83]",
									children: ["+", bowl.ingredients.length - 4]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 pt-4 border-t border-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-[1.02] active:scale-[0.98]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser & Commander" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						})]
					})]
				}, bowl.id);
			})
		})]
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
	const { items, setIsCartOpen, addItem } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
	const [activeTab, setActiveTab] = import_react.useState("all");
	const filteredPokeBowls = import_react.useMemo(() => {
		if (activeTab === "all") return pokeBowls;
		if (activeTab === "bestseller") return pokeBowls.filter((b) => b.tagColor === "bestseller");
		if (activeTab === "signature") return pokeBowls.filter((b) => b.tagColor === "signature");
		if (activeTab === "crousty") return croustyBowls;
		if (activeTab === "fish") return pokeBowls.filter((b) => b.id === "saumon-wasabi" || b.id === "scampis-royaux");
		if (activeTab === "spicy") return pokeBowls.filter((b) => b.id === "spicy-chicken" || b.id === "scampis-royaux");
		return pokeBowls;
	}, [
		pokeBowls,
		croustyBowls,
		activeTab
	]);
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#d7ff45] px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#10251f] shadow-md transition hover:bg-white hover:scale-105 active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block",
									children: t("nav.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBellMenu, {}),
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
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/30 bg-[#d7ff45]/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#d7ff45] animate-pulse" }), "Poké Bowls Frais & Sur-Mesure · Visé, Belgique"]
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
										className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight",
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
												className: "mt-2 block text-xl sm:text-2xl lg:text-3xl font-extrabold text-white/85",
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
										className: "mt-5 max-w-lg text-[15px] leading-relaxed text-white/75",
										children: "Découvrez nos recettes créations aux ingrédients nobles découpés chaque matin : saumon atlantique frais, scampis saisis au grill, poulet doré fondant et notre riz à sushi délicatement assaisonné."
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
											className: "btn-primary inline-flex h-13 items-center justify-center gap-2.5 px-7 text-sm font-bold uppercase tracking-wider",
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
										className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/65",
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
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵" }), " Visé, Belgique"]
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white/70 py-12 sm:py-16 border-b border-black/5 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeBowlMarqueeCarousel, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), " Recettes officielles du flyer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[#10251f]",
								children: "Nos Poké Bowls Signatures"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-[#4e5c55] text-base sm:text-lg lg:text-xl font-medium",
								children: "Riz à sushi traditionnel, sauces maison & fraîcheur garantie"
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
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff705f] hover:underline",
									children: "Ou compose ton bowl de A à Z →"
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2 pt-2",
						children: [
							{
								id: "all",
								label: `Tous nos Poké Bowls (${pokeBowls.length})`
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
								id: "crousty",
								label: "Gamme Chaude Crousty 🍗 (11€)"
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
							className: `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${activeTab === filter.id ? "bg-[#10251f] text-white shadow-md scale-105" : "bg-white text-[#10251f]/75 hover:bg-[#10251f]/10 border border-black/5"}`,
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
											className: "badge-tag absolute left-3.5 top-3.5 bg-white/95 text-[#10251f] shadow-card font-bold",
											children: bowl.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute bottom-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1.5 text-xs font-extrabold text-[#10251f] shadow-md",
											children: [bowl.price.toFixed(2), " €"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-start justify-between gap-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg sm:text-xl font-extrabold text-[#10251f] leading-snug",
												children: bowl.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs font-bold text-[#ff705f]",
												children: "Base riz à sushi · Fait minute"
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
									className: "inline-flex items-center gap-2 rounded-full bg-[#8b5510]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5510]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗" }), " Spécialités Chaudes & Croustillantes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#241a12]",
									children: "Le Bar à Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#6e6255] max-w-xl mx-auto",
									children: "Du poulet ultra croustillant pané minute, servi chaud sur riz parfumé avec oignons frits."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 inline-flex items-center gap-3 rounded-full bg-[#8b5510] px-5 py-2 text-white shadow-md text-xs font-bold uppercase tracking-wider",
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
											className: "absolute left-3 top-3 rounded-full bg-[#8b5510] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white",
											children: "11 € · Menu"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col p-5 sm:p-6 justify-between flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold uppercase tracking-wider text-[#a96b0d]",
												children: "Crousty Chicken"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 text-lg font-bold text-[#241a12]",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "composer",
					className: "scroll-mt-10 relative overflow-hidden bg-[#0d211b] px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8 border-y border-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-[100px] pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-[100px] pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto max-w-[1280px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/30 bg-[#d7ff45]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Comment ça marche · 5 gestes gourmands"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white",
											children: "Votre Poké Bowl sur mesure,"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-[#d7ff45]",
											children: "composé sous vos yeux."
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "max-w-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-white/70",
											children: "Chaque ingrédient est sélectionné et découpé le matin même à Visé. Choisissez votre base aérée, vos légumes frais, votre protéine chaude ou fraîche, votre sauce et le crunch final."
										})
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
									children: [
										{
											num: "01",
											title: "Ta Base",
											tag: "Traditionnelle & aérée",
											desc: "Riz à sushi délicatement assaisonné, riz brun complet, salade fraîche croquante, pâtes ou nachos.",
											pills: [
												"🍚 Riz à sushi",
												"🌾 Riz brun",
												"🥗 Salade",
												"🍝 Pâtes",
												"🫓 Nachos"
											]
										},
										{
											num: "02",
											title: "5 Mix-in Frais",
											tag: "5 inclus dans le prix !",
											desc: "Vitamines & fraîcheur parmi 16 découpes du jour : avocat mûr, mangue, edamame, feta, maïs doux, tomates...",
											pills: [
												"🥑 Avocat",
												"🥭 Mangue",
												"🧀 Feta",
												"🫘 Edamame",
												"🌽 Maïs"
											]
										},
										{
											num: "03",
											title: "Ta Protéine",
											tag: "Préparée minute",
											desc: "Poulet doré mariné, véritable saumon atlantique sashimi (+1€) ou scampis grillés saisis minute.",
											pills: [
												"🍗 Poulet doré",
												"🐟 Saumon (+1€)",
												"🦐 Scampis"
											]
										},
										{
											num: "04",
											title: "Sauce Signature",
											tag: "Recettes maison",
											desc: "Spicy Mayo onctueuse, Teriyaki brillante caramélisée, Mayo Wasabi subtile, sauce sésame ou chili doux.",
											pills: [
												"🌶️ Spicy Mayo",
												"🍯 Teriyaki",
												"🟢 Wasabi",
												"🌱 Sésame"
											]
										},
										{
											num: "05",
											title: "Crunch Toppings",
											tag: "La touche croustillante",
											desc: "Oignons frits ultra dorés, graines de sésame noir & blanc toastées, brisures de nachos ou flocons chili.",
											pills: [
												"🧅 Oignons frits",
												"🌱 Sésame mix",
												"🥜 Noix cajou",
												"🔥 Chili"
											]
										}
									].map(({ num, title, tag, desc, pills }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: index * .06,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											whileHover: {
												y: -6,
												scale: 1.02
											},
											transition: {
												duration: .3,
												ease: "easeOut"
											},
											className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#d7ff45]/40 hover:bg-white/[0.07] hover:shadow-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xs font-black text-[#d7ff45] border border-white/10 group-hover:bg-[#d7ff45] group-hover:text-[#10251f] transition",
															children: num
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold text-white/80",
															children: tag
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-4 text-base sm:text-lg font-extrabold text-white group-hover:text-[#d7ff45] transition",
														children: title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-xs leading-relaxed text-white/65",
														children: desc
													})
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-5 pt-4 border-t border-white/10",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-1",
														children: pills.map((pill, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/80",
															children: pill
														}, pIdx))
													})
												})
											]
										})
									}, num))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.02] p-6 sm:p-8 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#d7ff45] px-3 py-1 text-xs font-black text-[#10251f]",
													children: "Dès 10,00 €"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-white/70",
													children: "Format Moyen (10€) ou Grand (13€)"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-xl sm:text-2xl font-extrabold text-white",
												children: "Envie de créer votre bowl signature sur mesure ?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs sm:text-sm text-white/60",
												children: "Personnalisez chaque ingrédient en ligne, retirez les allergènes et récupérez votre commande prête minute à Visé."
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/sur-mesure",
												className: "btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider",
												children: ["Composer mon bowl en ligne ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#carte",
												className: "rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition",
												children: "Voir les 5 recettes signatures"
											})]
										})]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Douceurs & Rafraîchissements"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
								children: "Complétez votre repas avec nos incontournables"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#5a6760]",
								children: "Des tiramisus artisanaux préparés chaque matin et vos boissons fraîches préférées."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-black/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]",
									children: "Pâtisserie Maison · Fait chaque matin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1",
									children: "Nos 3 Tiramisus Gourmands"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#ff705f]/10 px-3 py-1 text-xs font-black text-[#ff705f]",
									children: "4,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: [
									{
										id: "tira-spec",
										name: "Tiramisu Spéculoos",
										badge: "Grand Classique ⭐",
										desc: "Crème mascarpone légère, biscuits Lotus caramélisés croustillants & voile de spéculoos.",
										image: tiramisu_speculoos_default,
										price: 4,
										soldOut: false
									},
									{
										id: "tira-nutella",
										name: "Tiramisu Nutella",
										badge: "Sold Out ⚠️",
										desc: "Tourbillons généreux de Nutella fondant, éclats de noisettes torréfiées & mascarpone.",
										image: tiramisu_nutella_default,
										price: 4,
										soldOut: true
									},
									{
										id: "tira-oreo",
										name: "Tiramisu Oreo",
										badge: "Crunch & Crème 🍪",
										desc: "Brisures croustillantes de biscuits Oréo noir et crème fouettée maison onctueuse.",
										image: tiramisu_oreo_default,
										price: 4,
										soldOut: false
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `group flex items-center gap-4 rounded-2xl border border-black/5 p-3.5 transition duration-200 ${item.soldOut ? "bg-[#f2efe9]/70 opacity-80" : "bg-[#faf8f4] hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.name,
											className: `h-full w-full object-cover shadow-sm transition duration-300 ${item.soldOut ? "grayscale contrast-75" : "group-hover:scale-105"}`
										}), item.soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 flex items-center justify-center bg-black/60 text-[10px] font-black uppercase tracking-wider text-white",
											children: "Épuisé"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-extrabold text-[#10251f] text-sm sm:text-base",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-[10px] font-bold rounded-md px-2 py-0.5 ${item.soldOut ? "bg-black/10 text-[#68756f]" : "text-[#ff705f] bg-[#ff705f]/10"}`,
													children: item.badge
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-[#68756f] line-clamp-2 leading-relaxed",
												children: item.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2.5 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-black text-[#10251f]",
													children: [item.price.toFixed(2), " €"]
												}), item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-full bg-black/10 px-3 py-1 text-[11px] font-bold text-[#68756f] cursor-not-allowed",
													children: "Victime de son succès"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														addItem({
															id: item.id,
															name: item.name,
															basePrice: item.price,
															price: item.price,
															quantity: 1,
															toppings: [],
															removedIngredients: []
														});
													},
													className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#ff705f]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), "Ajouter"]
												})]
											})
										]
									})]
								}, item.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-black/5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff705f] hover:underline",
									children: "Commander un dessert seul ou en menu →"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-black/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]",
									children: "Canettes & Eaux · Servies très fraîches"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1",
									children: "Nos Boissons Fraîches"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#d7ff45] px-3 py-1 text-xs font-black text-[#10251f]",
									children: "2,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [
									{
										id: "coca",
										name: "Coca-Cola",
										size: "33 cl",
										icon: "🥤",
										tag: "Classique givré",
										price: 2
									},
									{
										id: "coca-zero",
										name: "Coca-Cola Zero",
										size: "33 cl",
										icon: "✨",
										tag: "Zéro sucre",
										price: 2
									},
									{
										id: "fanta",
										name: "Fanta Orange",
										size: "33 cl",
										icon: "🍊",
										tag: "Fruité pétillant",
										price: 2
									},
									{
										id: "ice-tea",
										name: "Ice-Tea Pêche",
										size: "33 cl",
										icon: "🍑",
										tag: "Douceur glacée",
										price: 2
									},
									{
										id: "eau-plate",
										name: "Eau plate",
										size: "50 cl",
										icon: "💧",
										tag: "Pureté minérale",
										price: 2
									},
									{
										id: "eau-gaz",
										name: "Eau gazeuse",
										size: "50 cl",
										icon: "🫧",
										tag: "Bulles vives",
										price: 2
									}
								].map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex flex-col justify-between rounded-2xl border border-black/5 bg-[#faf8f4] p-4 transition duration-200 hover:border-[#d7ff45] hover:bg-white hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: drink.icon
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
												children: drink.size
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-extrabold text-[#10251f] text-sm",
												children: drink.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#7d8b83]",
												children: drink.tag
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-black text-[#10251f]",
												children: [drink.price.toFixed(2), " €"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													addItem({
														id: drink.id,
														name: `${drink.name} (${drink.size})`,
														basePrice: drink.price,
														price: drink.price,
														quantity: 1,
														toppings: [],
														removedIngredients: []
													});
												},
												className: "inline-flex items-center gap-1 rounded-full bg-[#10251f] px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#d7ff45] hover:text-[#10251f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), "Ajouter"]
											})]
										})
									]
								}, drink.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-black/5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 text-xs font-bold text-[#68756f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), " Boisson 33cl incluse dans la formule Étudiant (11 €)"]
								})
							})]
						})]
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[30px] sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#465313]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#10251f]",
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
					className: "scroll-mt-10 bg-[#ece9df] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1340px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Visé, Belgique · Avenue du Pont 12"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#5a6760]",
									children: "À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé."
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col h-full overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-[#faf8f4] p-5 sm:px-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]",
												children: "📍"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-extrabold text-[#10251f] text-base",
												children: "Poke N Bowl Visé"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#68756f] mt-0.5",
											children: "Avenue du Pont 12, 4600 Visé, Belgique"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#ff705f]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Itinéraire Google Maps" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative min-h-[380px] sm:min-h-[420px] flex-1 w-full bg-[#e5e3df]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: "Carte interactive Google Maps Poké N Bowl Visé",
											src: "https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed",
											className: "absolute inset-0 h-full w-full border-0",
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 bg-[#faf8f4] p-4 text-[11px] font-semibold text-[#5a6760] border-t border-black/5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🚗 Parking facile à proximité" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🚶 Au cœur de Visé" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵 Retrait Click & Collect express" })
										]
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between h-full space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-[32px] bg-[#10251f] text-white shadow-lift p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-white/10 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-extrabold",
													children: "Horaires d'ouverture"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45]/20 border border-[#d7ff45]/40 px-3 py-1 text-[10px] font-bold text-[#d7ff45]",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-white/10 py-2",
											children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3 py-3 text-xs sm:text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-white/70",
													children: t(dayKey)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `font-extrabold ${value === "closed" ? "text-[#ff705f]" : "text-white"}`,
													children: value === "closed" ? "Fermé" : value
												})]
											}, dayKey))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-7 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold uppercase tracking-wider text-[#ff705f]",
														children: "Commandes & Renseignements"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-[#7d8b83] font-bold",
													children: "Appel direct"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "tel:+32491281456",
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#ff705f] py-3.5 px-4 text-xs font-bold text-white shadow-soft transition hover:bg-[#ff5542]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0491 28 14 56" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://instagram.com/POKE_NBOWL",
													target: "_blank",
													rel: "noreferrer",
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#faf8f4] py-3.5 px-4 text-xs font-bold text-[#10251f] transition hover:bg-black/5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram @POKE_NBOWL" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-[#f7f4ec] px-4 py-2.5 text-xs text-[#68756f] flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "🛵 Livraison à domicile disponible"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/commander",
													className: "font-bold text-[#10251f] hover:underline",
													children: "Commander en ligne →"
												})]
											})
										]
									})]
								})
							})]
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CroustyNotificationToast, {})
		]
	});
}
//#endregion
export { Index as component };
