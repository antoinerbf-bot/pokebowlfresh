import { i as __toESM } from "../_runtime.mjs";
import { r as bowls } from "./data-BjIJOWvY.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { A as Check, C as Flame, D as ChevronRight, M as Bell, N as ArrowRight, O as ChevronLeft, S as Layers, T as Clock, b as MapPin, c as Sparkles, f as ShieldCheck, g as Phone, h as Plus, j as BriefcaseBusiness, k as ChefHat, n as Utensils, p as RotateCcw, s as Star, t as X, u as ShoppingBag, y as Menu } from "../_libs/lucide-react.mjs";
import { a as bowl_scampis_default, i as bowl_saumon_default, n as DishImage, r as bowl_crousty_curry_default, s as bowl_sweet_chicken_default, t as CartDrawer } from "./CartDrawer-crEbLLNk.mjs";
import { a as motion, i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BwIDW225.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
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
		description: "Oignons croustillants dorés, graines de sésame noir & blanc toastées et flocons de chili pour une texture irrésistible à chaque bouchée.",
		emoji: "🧅",
		ingredients: [
			"Oignons croustillants",
			"Sésame mix toasté",
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
	const { addItem } = useCart();
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
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-4 border-t border-black/5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => addItem({
									id: bowl.id,
									name: `${bowl.name} (Moyen)`,
									basePrice: bowl.price,
									price: bowl.price,
									quantity: 1,
									toppings: [],
									removedIngredients: []
								}),
								title: "Ajouter direct au panier",
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] shadow-sm transition hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95 font-black",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#10251f] py-3 px-3 text-[11px] font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-[1.02] active:scale-[0.98]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})]
						})]
					})]
				}, bowl.id);
			})
		})]
	});
}
var HERO_DISHES = [
	{
		id: "sweet-chicken",
		name: "Sweet Chicken",
		price: 10,
		grandPrice: 13,
		tag: "Best-Seller ⭐",
		tagColor: "#d7ff45",
		glowColor: "rgba(215, 255, 69, 0.22)",
		tasteProfile: "Doux, fruité & umami caramélisé",
		description: "Morceaux tendres de poulet mariné doré, mangue mûre juteuse, avocat crémeux, maïs croquant, feta et nappage teriyaki brillant sur riz à sushi.",
		freshCuts: [
			"Poulet doré mariné",
			"Avocat Hass mûr",
			"Mangue juteuse",
			"Feta émiettée",
			"Sauce Teriyaki"
		],
		floatingIngredients: [
			{
				name: "Poulet Mariné Doré",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 45
			},
			{
				name: "Avocat Hass Crémeux",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 55
			},
			{
				name: "Mangue Mûre Juteuse",
				emoji: "🥭",
				x: "-6%",
				y: "70%",
				depth: 38
			},
			{
				name: "Oignons Croustillants",
				emoji: "🧅",
				x: "80%",
				y: "68%",
				depth: 48
			},
			{
				name: "Graines Sésame Toastées",
				emoji: "🌱",
				x: "42%",
				y: "88%",
				depth: 30
			}
		]
	},
	{
		id: "saumon-wasabi",
		name: "Saumon Wasabi",
		price: 11,
		grandPrice: 14,
		tag: "Coup de Cœur Sashimi ✦",
		tagColor: "#ff705f",
		glowColor: "rgba(255, 112, 95, 0.25)",
		tasteProfile: "Ultra-frais, fondant avec un kick wasabi maîtrisé",
		description: "Épais dés de saumon atlantique sashimi frais coupés chaque matin, avocat, salade d'algues wakame, mangue, edamame et notre mayo wasabi onctueuse.",
		freshCuts: [
			"Saumon Atlantique frais",
			"Salade Wakame",
			"Avocat fondant",
			"Edamame vapeur",
			"Mayo Wasabi"
		],
		floatingIngredients: [
			{
				name: "Saumon Sashimi Frais",
				emoji: "🐟",
				x: "-8%",
				y: "14%",
				depth: 55
			},
			{
				name: "Avocat Hass Découpé",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 40
			},
			{
				name: "Salade Wakame Iodée",
				emoji: "🌿",
				x: "-6%",
				y: "70%",
				depth: 50
			},
			{
				name: "Edamame Croquant",
				emoji: "🫘",
				x: "80%",
				y: "68%",
				depth: 35
			},
			{
				name: "Mayo Wasabi Veloutée",
				emoji: "🟢",
				x: "42%",
				y: "88%",
				depth: 45
			}
		]
	},
	{
		id: "scampis-royaux",
		name: "Scampis Royal",
		price: 10,
		grandPrice: 13,
		tag: "Saisi au Grill 🦐",
		tagColor: "#d7ff45",
		glowColor: "rgba(215, 255, 69, 0.22)",
		tasteProfile: "Scampis saisis, guacamole onctueux & spicy mayo",
		description: "Succulents scampis royaux dorés au grill, guacamole maison velouté, tomates cerises, edamame, concombre frais, poivrons et spicy mayo.",
		freshCuts: [
			"Scampis grillés saisis",
			"Guacamole maison",
			"Tomates cerises",
			"Jalapeños frais",
			"Spicy Mayo"
		],
		floatingIngredients: [
			{
				name: "Scampis Royaux Saisis",
				emoji: "🦐",
				x: "-8%",
				y: "14%",
				depth: 52
			},
			{
				name: "Guacamole Velouté",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 42
			},
			{
				name: "Tomates Cerises Juteuses",
				emoji: "🍅",
				x: "-6%",
				y: "70%",
				depth: 48
			},
			{
				name: "Jalapeños Épicés",
				emoji: "🌶️",
				x: "80%",
				y: "68%",
				depth: 36
			},
			{
				name: "Spicy Mayo Onctueuse",
				emoji: "🌶️",
				x: "42%",
				y: "88%",
				depth: 40
			}
		]
	},
	{
		id: "spicy-chicken",
		name: "Spicy Chicken",
		price: 10,
		grandPrice: 13,
		tag: "Touche Pimentée 🔥",
		tagColor: "#ff705f",
		glowColor: "rgba(255, 112, 95, 0.22)",
		tasteProfile: "Fondant, caramélisé & piquant addictif",
		description: "Poulet mariné rôti aux épices douces, patates douces rôties au four, avocat, maïs, feta grecque, jalapeños et notre spicy mayo signature.",
		freshCuts: [
			"Poulet mariné rôti",
			"Patates douces rôties",
			"Avocat crémeux",
			"Feta émiettée",
			"Flocons de Chili"
		],
		floatingIngredients: [
			{
				name: "Poulet Rôti aux Épices",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 48
			},
			{
				name: "Patates Douces Rôties",
				emoji: "🍠",
				x: "82%",
				y: "18%",
				depth: 54
			},
			{
				name: "Jalapeños Frais",
				emoji: "🌶️",
				x: "-6%",
				y: "70%",
				depth: 36
			},
			{
				name: "Feta Émiettée",
				emoji: "🧀",
				x: "80%",
				y: "68%",
				depth: 44
			},
			{
				name: "Flocons de Chili",
				emoji: "🔥",
				x: "42%",
				y: "88%",
				depth: 42
			}
		]
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Curry",
		price: 11,
		grandPrice: 11,
		tag: "Formule 11€ Boisson Comprise 🥤",
		tagColor: "#f59e0b",
		glowColor: "rgba(245, 158, 11, 0.28)",
		tasteProfile: "Chaud, ultra-croustillant & sauce curry veloutée",
		description: "Notre plat signature chaud : poulet pané extra croustillant coupé minute, sauce curry onctueuse parfumée, oignons frits et boisson 33cl offerte incluse !",
		freshCuts: [
			"Poulet pané croustillant",
			"Sauce Curry onctueuse",
			"Oignons frits",
			"Boisson 33cl incluse"
		],
		floatingIngredients: [
			{
				name: "Poulet Extra Croustillant",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 52
			},
			{
				name: "Sauce Curry Chaude",
				emoji: "🍛",
				x: "82%",
				y: "18%",
				depth: 42
			},
			{
				name: "Oignons Frits Croustillants",
				emoji: "🧅",
				x: "-6%",
				y: "70%",
				depth: 46
			},
			{
				name: "Boisson 33cl Offerte",
				emoji: "🥤",
				x: "80%",
				y: "68%",
				depth: 48
			},
			{
				name: "Riz Chaud Parfumé",
				emoji: "🍚",
				x: "42%",
				y: "88%",
				depth: 32
			}
		],
		isHotCombo: true
	}
];
function Hero3DParallaxPoke() {
	const [currentIndex, setCurrentIndex] = import_react.useState(0);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [addedSuccess, setAddedSuccess] = import_react.useState(false);
	const { addItem } = useCart();
	const currentDish = HERO_DISHES[currentIndex];
	const activePrice = selectedSize === "grand" && !currentDish.isHotCombo ? currentDish.grandPrice : currentDish.price;
	const containerRef = import_react.useRef(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = {
		damping: 25,
		stiffness: 120,
		mass: .5
	};
	const smoothMouseX = useSpring(mouseX, springConfig);
	const smoothMouseY = useSpring(mouseY, springConfig);
	const rotateX = useTransform(smoothMouseY, [-.5, .5], [12, -12]);
	const rotateY = useTransform(smoothMouseX, [-.5, .5], [-14, 14]);
	const handleMouseMove = (e) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		mouseX.set(x);
		mouseY.set(y);
	};
	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};
	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + HERO_DISHES.length) % HERO_DISHES.length);
	};
	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % HERO_DISHES.length);
	};
	const handleQuickAdd = () => {
		addItem({
			id: currentDish.id,
			name: `${currentDish.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
			basePrice: activePrice,
			price: activePrice,
			quantity: 1,
			toppings: [],
			removedIngredients: []
		});
		setAddedSuccess(true);
		setTimeout(() => setAddedSuccess(false), 2200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className: "relative isolate min-h-screen overflow-hidden bg-[#071713] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center",
		style: { perspective: 1200 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { background: `radial-gradient(ellipse 65% 55% at 30% 45%, ${currentDish.glowColor}, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(215,255,69,0.06), transparent 70%), linear-gradient(135deg, #071713 0%, #0d221c 50%, #071713 100%)` },
				transition: {
					duration: 1.2,
					ease: "easeOut"
				},
				className: "absolute inset-0 -z-20 pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#d7ff45] animate-ping" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d7ff45] font-extrabold",
								children: "EN DIRECT DE VISÉ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Avenue du Pont 12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/70",
								children: "Préparé minute en 10 min"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-xs text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 font-bold text-[#d7ff45]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#d7ff45]" }), " 4.9/5"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/40",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline font-semibold",
								children: "Plus de 150 avis gourmands"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative order-1 flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								rotateX,
								rotateY,
								transformStyle: "preserve-3d"
							},
							className: "relative aspect-square w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { transform: "translateZ(-40px)" },
									className: "absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-[85%] rounded-[100%] bg-black/65 blur-2xl pointer-events-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { transform: "translateZ(-20px)" },
									className: "absolute inset-4 rounded-full blur-3xl opacity-40 transition-colors duration-1000 pointer-events-none",
									style: { backgroundColor: currentDish.tagColor }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { y: [
										-6,
										6,
										-6
									] },
									transition: {
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut"
									},
									style: {
										transform: "translateZ(30px)",
										transformStyle: "preserve-3d"
									},
									className: "relative h-full w-full rounded-[42px] p-3 transition-transform duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-full w-full overflow-hidden rounded-[38px] border-2 border-white/20 bg-[#0d221c] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.9)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											mode: "wait",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												initial: {
													opacity: 0,
													scale: 1.08,
													filter: "blur(6px)"
												},
												animate: {
													opacity: 1,
													scale: 1,
													filter: "blur(0px)"
												},
												exit: {
													opacity: 0,
													scale: .94,
													filter: "blur(4px)"
												},
												transition: {
													duration: .65,
													ease: [
														.22,
														1,
														.36,
														1
													]
												},
												className: "relative h-full w-full",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
														dishId: currentDish.id,
														alt: currentDish.name,
														priority: true,
														className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-white/10 pointer-events-none" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute top-5 left-5 right-5 z-20 flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#10251f] shadow-lg backdrop-blur-md",
															style: { backgroundColor: currentDish.tagColor },
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), currentDish.tag]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "rounded-full bg-black/65 px-3.5 py-1.5 text-xs font-black text-white backdrop-blur-md border border-white/15 shadow-lg",
															children: [
																"Dès ",
																currentDish.price.toFixed(2),
																" €"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute bottom-5 inset-x-5 z-20",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-2xl border border-white/20 bg-black/75 p-3.5 text-xs text-white backdrop-blur-md shadow-xl flex items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-[9px] font-black uppercase tracking-widest text-[#d7ff45]",
																	children: "Notes Gustatives"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate font-bold text-white/95 text-xs",
																	children: currentDish.tasteProfile
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																to: "/product/$productId",
																params: { productId: currentDish.id },
																className: "shrink-0 rounded-xl bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white hover:bg-white hover:text-black transition",
																children: "Détails →"
															})]
														})
													})
												]
											}, currentDish.id)
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: currentDish.floatingIngredients.map((item, idx) => {
										const depthX = useTransform(smoothMouseX, [-.5, .5], [-item.depth * .7, item.depth * .7]);
										const depthY = useTransform(smoothMouseY, [-.5, .5], [-item.depth * .7, item.depth * .7]);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												scale: .6
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: {
												opacity: 0,
												scale: .6
											},
											transition: {
												duration: .5,
												delay: idx * .08
											},
											style: {
												left: item.x,
												top: item.y,
												x: depthX,
												y: depthY,
												transform: `translateZ(${item.depth}px)`
											},
											className: "pointer-events-none absolute z-30 hidden sm:flex items-center gap-2 rounded-2xl border border-white/20 bg-[#0d221c]/85 px-3.5 py-2 shadow-2xl backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base",
												children: item.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-extrabold text-white tracking-wide whitespace-nowrap",
												children: item.name
											})]
										}, `${currentDish.id}-${idx}`);
									}) }, currentDish.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handlePrev,
									"aria-label": "Plat précédent",
									className: "absolute -left-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleNext,
									"aria-label": "Plat suivant",
									className: "absolute -right-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex w-full max-w-[560px] items-center justify-center gap-1.5 overflow-x-auto pb-1 no-scrollbar",
							children: HERO_DISHES.map((dish, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setCurrentIndex(idx),
								className: `group relative shrink-0 rounded-2xl px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${idx === currentIndex ? "bg-[#d7ff45] text-[#10251f] shadow-lg scale-105" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dish.name })
							}, dish.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-2 flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .7 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Expérience Culinaire 100% Fraîcheur" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white",
											children: "L'art du Poké Bowl"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[#d7ff45]",
											children: "généreux & fait minute."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80",
										children: [
											"Oubliez les bowls fades remplis de riz. Chez ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Poke N Bowl Visé"
											}),
											", chaque recette déborde d'ingrédients nobles coupés le matin même : saumon atlantique sashimi, scampis grillés saisis, poulet doré caramélisé et riz à sushi fondant."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .4 },
								className: "mt-6 rounded-3xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-xl shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black uppercase tracking-widest text-[#d7ff45]",
											children: currentDish.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-black text-white",
											children: currentDish.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-3xl font-black text-[#d7ff45] tracking-tight",
												children: [activePrice.toFixed(2), " €"]
											}), currentDish.isHotCombo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase text-[#f59e0b]",
												children: "Boisson 33cl offerte incluse"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-semibold text-white/60",
												children: ["Format ", selectedSize === "grand" ? "Grand (13€)" : "Moyen (10€)"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-1.5",
										children: currentDish.freshCuts.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold text-white/90",
											children: ["✓ ", item]
										}, i))
									}),
									!currentDish.isHotCombo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between gap-3 rounded-2xl bg-black/35 p-2 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-white/75 pl-2",
											children: "Choisir le format :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedSize("moyen"),
												className: `rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${selectedSize === "moyen" ? "bg-[#d7ff45] text-[#10251f] shadow" : "text-white/70 hover:text-white"}`,
												children: "Moyen (10 €)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedSize("grand"),
												className: `rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${selectedSize === "grand" ? "bg-[#d7ff45] text-[#10251f] shadow" : "text-white/70 hover:text-white"}`,
												children: "Grand (13 €)"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-col sm:flex-row gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: handleQuickAdd,
											className: "flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.35)] transition hover:bg-white hover:scale-[1.02] active:scale-98",
											children: addedSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-emerald-600 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Ajouter au Panier · ",
												activePrice.toFixed(2),
												" €"
											] })] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/product/$productId",
											params: { productId: currentDish.id },
											className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 py-4 px-5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-white/60 pt-3 border-t border-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#d7ff45]" }), " Prêt en 10-15 min"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#d7ff45]" }), " Ingrédients frais garantis"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵" }), " Livraison à domicile dispo"]
											})
										]
									})
								]
							}, currentDish.id),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-3 text-xs text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Envie de créer votre propre combinaison de A à Z ?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sur-mesure",
									className: "font-black text-[#d7ff45] hover:underline flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Créer Sur-Mesure (10€)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
var BASES = [
	{
		id: "riz-sushi",
		name: "Riz à sushi",
		emoji: "🍚",
		desc: "Vinaigré et fondant"
	},
	{
		id: "riz-brun",
		name: "Riz brun",
		emoji: "🌾",
		desc: "Complet & parfumé"
	},
	{
		id: "salade",
		name: "Salade fraîche",
		emoji: "🥗",
		desc: "Légère & croquante"
	},
	{
		id: "pates",
		name: "Pâtes",
		emoji: "🍝",
		desc: "Gourmandes"
	}
];
var PROTEINES = [
	{
		id: "poulet",
		name: "Poulet doré",
		emoji: "🍗",
		extra: 0,
		tag: "Cuisiné maison"
	},
	{
		id: "saumon",
		name: "Saumon sashimi",
		emoji: "🐟",
		extra: 1,
		tag: "+1,00 € · Extra frais"
	},
	{
		id: "scampis",
		name: "Scampis grillés",
		emoji: "🦐",
		extra: 0,
		tag: "Saisis minute"
	},
	{
		id: "vege",
		name: "Double Avocat & Feta",
		emoji: "🥑",
		extra: 0,
		tag: "100% Végé"
	}
];
var MIXINS = [
	{
		id: "avocat",
		name: "Avocat Hass",
		emoji: "🥑"
	},
	{
		id: "mangue",
		name: "Mangue mûre",
		emoji: "🥭"
	},
	{
		id: "edamame",
		name: "Edamame",
		emoji: "🫘"
	},
	{
		id: "feta",
		name: "Feta grecque",
		emoji: "🧀"
	},
	{
		id: "tomates",
		name: "Tomates cerises",
		emoji: "🍅"
	},
	{
		id: "mais",
		name: "Maïs doux",
		emoji: "🌽"
	},
	{
		id: "wakame",
		name: "Algues Wakame",
		emoji: "🌿"
	},
	{
		id: "concombre",
		name: "Concombre frais",
		emoji: "🥒"
	},
	{
		id: "jalapenos",
		name: "Jalapeños",
		emoji: "🌶️"
	},
	{
		id: "patates-douces",
		name: "Patates douces rôties",
		emoji: "🍠"
	}
];
var SAUCES = [
	{
		id: "teriyaki",
		name: "Teriyaki caramélisée",
		emoji: "🍯"
	},
	{
		id: "spicy-mayo",
		name: "Spicy Mayo piquante",
		emoji: "🌶️"
	},
	{
		id: "mayo-wasabi",
		name: "Mayo Wasabi veloutée",
		emoji: "🟢"
	},
	{
		id: "sesame",
		name: "Sésame toasté",
		emoji: "🌰"
	}
];
var TOPPINGS = [
	{
		id: "oignons-frits",
		name: "Oignons frits croustillants",
		emoji: "🧅"
	},
	{
		id: "sesame-mix",
		name: "Sésame noir & blanc",
		emoji: "🌱"
	},
	{
		id: "flocons-chili",
		name: "Flocons de chili",
		emoji: "🔥"
	}
];
function InteractiveBowlBuilder() {
	const [size, setSize] = import_react.useState("moyen");
	const [base, setBase] = import_react.useState(BASES[0]);
	const [proteine, setProteine] = import_react.useState(PROTEINES[1]);
	const [selectedMixins, setSelectedMixins] = import_react.useState([
		"avocat",
		"mangue",
		"edamame",
		"wakame",
		"tomates"
	]);
	const [sauce, setSauce] = import_react.useState(SAUCES[0]);
	const [topping, setTopping] = import_react.useState(TOPPINGS[0]);
	const [added, setAdded] = import_react.useState(false);
	const { addItem } = useCart();
	const basePrice = size === "grand" ? 13 : 10;
	const proteinExtra = proteine.extra;
	const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
	const extraMixinsPrice = extraMixinsCount * .5;
	const totalPrice = basePrice + proteinExtra + extraMixinsPrice;
	const toggleMixin = (id) => {
		if (selectedMixins.includes(id)) {
			if (selectedMixins.length > 1) setSelectedMixins((prev) => prev.filter((m) => m !== id));
		} else setSelectedMixins((prev) => [...prev, id]);
	};
	const resetSelection = () => {
		setSize("moyen");
		setBase(BASES[0]);
		setProteine(PROTEINES[0]);
		setSelectedMixins([
			"avocat",
			"mangue",
			"edamame",
			"tomates",
			"mais"
		]);
		setSauce(SAUCES[0]);
		setTopping(TOPPINGS[0]);
	};
	const handleAddToCart = () => {
		const mixinNames = selectedMixins.map((id) => MIXINS.find((m) => m.id === id)?.name || id);
		`${base.name}${proteine.name}${mixinNames.join(", ")}${sauce.name}${topping.name}`;
		addItem({
			id: `custom-live-${Date.now()}`,
			name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
			basePrice: totalPrice,
			price: totalPrice,
			quantity: 1,
			toppings: [
				`Base : ${base.name}`,
				`Protéine : ${proteine.name}`,
				...mixinNames,
				`Sauce : ${sauce.name}`,
				`Topping : ${topping.name}`
			],
			removedIngredients: []
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 2200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "composer",
		className: "scroll-mt-12 bg-[#0c1f19] py-16 sm:py-24 text-white relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#d7ff45]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mini-Simulateur Ludique" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight",
							children: ["Compose ton bowl en live. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d7ff45]",
								children: "Fait minute pour toi."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm sm:text-base text-white/75",
							children: "Choisis ta base, ta protéine fraîche et tes 5 mix-ins préférés. Visualise ta recette en temps réel et commande-la en un seul clic !"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "1"
									}), "Format du Bowl"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "Moyen ou Grand (+3€)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSize("moyen"),
									className: `rounded-2xl p-3.5 text-left border transition-all ${size === "moyen" ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-sm",
										children: "Moyen (10,00 €)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/60",
										children: "Généreux & complet"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSize("grand"),
									className: `rounded-2xl p-3.5 text-left border transition-all ${size === "grand" ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-sm text-[#d7ff45]",
										children: "Grand (13,00 €) 🔥"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/60",
										children: "Portion XXL très gourmande"
									})]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "2"
									}), "Ta Base Fondante"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "1 base incluse"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
								children: BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBase(b),
									className: `rounded-2xl p-3 text-center border transition-all ${base.id === b.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl block",
										children: b.emoji
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold block mt-1",
										children: b.name
									})]
								}, b.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "3"
									}), "Ta Protéine Fraîche"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "Découpée du matin"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
								children: PROTEINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setProteine(p),
									className: `rounded-2xl p-3 text-center border transition-all ${proteine.id === p.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl block",
											children: p.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold block mt-1",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] block opacity-80 mt-0.5",
											children: p.tag
										})
									]
								}, p.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
											children: "4"
										}),
										"Tes Mix-ins (",
										selectedMixins.length,
										" sélectionnés)"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/60",
									children: selectedMixins.length <= 5 ? `${5 - selectedMixins.length} inclus restants` : `+${(selectedMixins.length - 5) * .5}€ (${selectedMixins.length - 5} extras)`
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-5 gap-2",
								children: MIXINS.map((m) => {
									const isSelected = selectedMixins.includes(m.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleMixin(m.id),
										className: `rounded-xl p-2.5 text-center border transition-all text-xs font-bold flex items-center justify-center gap-1.5 ${isSelected ? "border-[#d7ff45] bg-[#d7ff45]/20 text-white" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.emoji }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: m.name
											}),
											isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#d7ff45] shrink-0" })
										]
									}, m.id);
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2",
									children: "5. Sauce Signature"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-1.5",
									children: SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSauce(s),
										className: `rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${sauce.id === s.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											s.emoji,
											" ",
											s.name
										] })
									}, s.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2",
									children: "6. Crunch Topping"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-1.5",
									children: TOPPINGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTopping(t),
										className: `rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${topping.id === t.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											t.emoji,
											" ",
											t.name
										] })
									}, t.id))
								})] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 rounded-[32px] border-2 border-white/20 bg-gradient-to-b from-[#102720] to-[#0a1b16] p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-5 w-5 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase tracking-widest text-[#d7ff45]",
										children: "Ta Création Minute"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: resetSelection,
									className: "flex items-center gap-1 text-[11px] font-bold text-white/50 hover:text-white transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3 w-3" }), "Réinitialiser"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-6 aspect-square max-w-[260px] mx-auto rounded-full border-4 border-white/15 bg-gradient-to-br from-[#1a382e] to-[#071713] p-4 shadow-[inset_0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,255,69,0.15),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 text-center space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-4xl animate-bounce duration-1000",
											children: proteine.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black tracking-tight text-white bg-black/50 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md",
											children: base.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap justify-center gap-1 max-w-[190px]",
											children: [
												selectedMixins.slice(0, 5).map((id) => {
													const m = MIXINS.find((item) => item.id === id);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-lg",
														children: m?.emoji
													}, id);
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg",
													children: sauce.emoji
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg",
													children: topping.emoji
												})
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-xs text-white/80 border-t border-white/10 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Format ", size === "grand" ? "Grand" : "Moyen"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [basePrice.toFixed(2), " €"]
										})]
									}),
									proteinExtra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[#ff705f]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supplément Saumon Sashimi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [
												"+",
												proteinExtra.toFixed(2),
												" €"
											]
										})]
									}),
									extraMixinsPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Mix-ins extras (",
											extraMixinsCount,
											")"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [
												"+",
												extraMixinsPrice.toFixed(2),
												" €"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-base font-black text-white pt-2 border-t border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total de ta commande" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#d7ff45] text-2xl font-black",
											children: [totalPrice.toFixed(2), " €"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: "mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-[1.02] active:scale-98",
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-emerald-600 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Commander cette création · ",
									totalPrice.toFixed(2),
									" €"
								] })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sur-mesure",
								className: "mt-3 block text-center text-xs font-bold text-white/60 hover:text-white transition",
								children: "Ouvrir le configurateur avancé plein écran →"
							})
						]
					})]
				})]
			})
		]
	});
}
var INGREDIENTS_SHOWCASE = [
	{
		id: "saumon",
		title: "Le Saumon Atlantique Sashimi",
		subtitle: "Pêche responsable · Zéro congélation",
		desc: "Découpé au couteau chaque matin en gros cubes fondants. Une texture soyeuse et beurrée qui sublime nos bowls signature.",
		badge: "100% Frais Découpé Minute",
		badgeColor: "#ff705f",
		image: bowl_saumon_default,
		linkDish: "saumon-wasabi",
		stats: "Riche en Oméga-3 & Protéines"
	},
	{
		id: "avocat",
		title: "L'Avocat Hass Ultra-Fondant",
		subtitle: "Sélectionné à maturité parfaite",
		desc: "Un avocat crémeux tranché minute en éventail ou écrasé en guacamole maison. Aucun avocat dur ou sans saveur.",
		badge: "Maturité Contrôlée",
		badgeColor: "#d7ff45",
		image: bowl_sweet_chicken_default,
		linkDish: "sweet-chicken",
		stats: "Vitamines E & Bons Lipides"
	},
	{
		id: "crousty",
		title: "Le Fameux Crousty Chicken",
		subtitle: "Panure dorée croustillante minute",
		desc: "Notre recette secrète de poulet mariné et pané ultra croustillant, nappé de sauce curry chaude onctueuse ou sauce blanche.",
		badge: "Spécialité Chaude · Formule 11€",
		badgeColor: "#f59e0b",
		image: bowl_crousty_curry_default,
		linkDish: "crousty-chicken-curry",
		stats: "Boisson 33cl offerte incluse"
	},
	{
		id: "scampis",
		title: "Les Scampis Royaux au Grill",
		subtitle: "Saisis à haute température",
		desc: "De généreux scampis bien dorés avec une subtile note fumée, combinés aux jalapeños frais et à notre spicy mayo maison.",
		badge: "Saisi Minute",
		badgeColor: "#d7ff45",
		image: bowl_scampis_default,
		linkDish: "scampis-royaux",
		stats: "Protéines maigres & Saveur grill"
	}
];
function DishTasteExplorer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#faf8f4] py-16 sm:py-24 border-y border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#10251f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#10251f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pourquoi c'est si addictif ?" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#10251f] tracking-tight",
					children: ["L'exigence de la fraîcheur. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#ff705f]",
						children: "Zéro compromis."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm sm:text-base text-[#64746d] leading-relaxed",
					children: "Ici, pas de produits industriels pré-emballés ni de chips sans valeur. Chaque ingrédient est sélectionné pour sa fraîcheur brute et préparé sur place à Visé."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: INGREDIENTS_SHOWCASE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/5 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-2xl bg-[#eee8dc]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3 left-3 z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md backdrop-blur-md",
								style: { backgroundColor: item.badgeColor },
								children: item.badge
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black uppercase tracking-widest text-[#7d8b83]",
								children: item.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg font-black text-[#10251f] leading-snug",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#64746d]",
								children: item.desc
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-3 border-t border-black/5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold text-[#10251f]",
							children: item.stats
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$productId",
							params: { productId: item.linkDish },
							className: "inline-flex items-center gap-1 text-xs font-black text-[#ff705f] hover:underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Goûter →" })
						})]
					})]
				}, item.id))
			})]
		})
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
	useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
	useTransform(scrollYProgress, [0, .7], [1, 0]);
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero3DParallaxPoke, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white/70 py-12 sm:py-16 border-b border-black/5 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeBowlMarqueeCarousel, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishTasteExplorer, {}),
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto pt-6 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => addItem({
													id: bowl.id,
													name: `${bowl.name} (Moyen)`,
													basePrice: bowl.price,
													price: bowl.price,
													quantity: 1,
													toppings: [],
													removedIngredients: []
												}),
												title: `Ajouter direct au panier (${bowl.price.toFixed(2)} €)`,
												className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] shadow-soft transition hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95 font-black",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/product/$productId",
												params: { productId: bowl.id },
												className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
												children: ["Personnaliser & Commander", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})]
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBowlBuilder, {}),
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
