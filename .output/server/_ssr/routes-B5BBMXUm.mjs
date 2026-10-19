import { i as __toESM } from "../_runtime.mjs";
import { c as desserts, p as drinks, r as bowls } from "./data-Bi2irjzU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { A as Flame, B as ChevronLeft, C as MessageCircle, D as Instagram, G as BriefcaseBusiness, H as ChefHat, I as CircleCheck, J as Award, K as BookOpen, O as Heart, P as Clock, T as MapPin, U as Check, V as ChevronDown, Y as ArrowRight, c as Star, d as ShoppingBag, h as Search, j as ExternalLink, k as Funnel, l as Sparkles, p as ShieldCheck, q as Bell, t as X, v as Plus, w as Menu, y as Phone, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as bowl_scampis_default, c as drink_coca_cola_default, d as tiramisu_nutella_default, f as tiramisu_speculoos_default, i as bowl_saumon_default, l as drink_eau_gazeuse_default, n as DishImage, o as bowl_spicy_chicken_default, r as bowl_crousty_curry_default, s as bowl_sweet_chicken_default, t as CartDrawer, u as drink_eau_plate_default } from "./CartDrawer--vUyBS_x.mjs";
import { t as BLOG_ARTICLES } from "./blogArticles-BE30Y8r4.mjs";
import { i as tiramisu_oreo_default, n as drink_fanta_orange_default, r as drink_ice_tea_default, t as drink_coca_zero_default } from "./drink-ice-tea-D8ISS0Pg.mjs";
import { n as FaqNutritionSection } from "./FaqNutritionSection-CgtPY2ns.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B5BBMXUm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NOTIFICATIONS = [
	{
		id: "crousty-curry",
		tag: "Spécialité Chaude",
		title: "Crousty Chicken Curry",
		desc: "Poulet croustillant doré, curry maison doux & oignons frits. Boisson 33cl incluse !",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🍗",
		productId: "crousty-chicken-curry"
	},
	{
		id: "crousty-blanche",
		tag: "Nouveau au Menu",
		title: "Crousty Sauce Blanche",
		desc: "Bouchées croustillantes dorées, sauce blanche onctueuse & oignons frits. Boisson 33cl incluse !",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Populaire",
		title: "Menu Crousty + Boisson 11 €",
		desc: "1 Crousty Chicken chaud au choix + boisson 33cl fraîche incluse (Coca, Ice-Tea...).",
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
		}, 1800);
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
			}, 3200);
			return () => clearTimeout(nextTimer);
		}, 6500);
		return () => clearTimeout(hideTimer);
	}, [
		isVisible,
		isHovered,
		isDismissed
	]);
	const activeNotif = NOTIFICATIONS[currentIndex];
	const handleDismiss = (e) => {
		e.stopPropagation();
		setIsVisible(false);
		setIsDismissed(true);
		setTimeout(() => setIsDismissed(false), 45e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-20 right-3 z-40 max-w-[calc(100vw-24px)] pointer-events-none sm:bottom-6 sm:right-6 sm:max-w-[370px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				x: 70,
				scale: .94
			},
			animate: {
				opacity: 1,
				x: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				x: 50,
				scale: .94
			},
			transition: {
				type: "spring",
				damping: 24,
				stiffness: 280
			},
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			className: "pointer-events-auto relative overflow-hidden rounded-3xl border-2 border-[#ff705f]/50 bg-[#1e120b]/95 p-3.5 sm:p-4 text-white shadow-[0_22px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(255,112,95,0.28)] backdrop-blur-2xl transition hover:border-[#ff705f] hover:shadow-[0_25px_65px_rgba(0,0,0,0.9),0_0_45px_rgba(255,112,95,0.4)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#ff705f]/30 blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#ffaa44]/20 blur-xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					"aria-label": "Fermer la notification",
					className: "absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/25 hover:text-white transition cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-2 pr-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/25 text-[#ffb4a6] border border-[#ff705f]/50 px-2.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3 text-[#ff705f] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: activeNotif.tag })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex items-center rounded-full bg-[#3a2012] border border-[#ffaa44]/40 px-2 py-0.5 text-[10.5px] font-black text-[#ffb055]",
						children: activeNotif.price
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$productId",
						params: { productId: activeNotif.productId },
						onClick: () => setIsVisible(false),
						className: "group relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl bg-black/40 border-2 border-[#ff705f]/30 shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
							dishId: activeNotif.dishId,
							alt: activeNotif.title,
							className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#1e120b] text-[10px] sm:text-xs border border-white/20 shadow",
							children: activeNotif.badgeEmoji
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/product/$productId",
							params: { productId: activeNotif.productId },
							onClick: () => setIsVisible(false),
							className: "block group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs sm:text-sm font-black text-white group-hover:text-[#ff705f] transition leading-tight",
								children: activeNotif.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10.5px] sm:text-[11px] leading-snug text-[#EADCC9] line-clamp-2",
								children: activeNotif.desc
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: activeNotif.productId },
								onClick: () => setIsVisible(false),
								className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff705f] to-[#ff523d] hover:from-[#ff5a47] hover:to-[#ff3d26] px-3.5 py-1.5 text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-white shadow-md shadow-[#ff705f]/30 transition hover:scale-105 active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Commander (",
									activeNotif.price,
									")"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] sm:text-[9.5px] font-bold text-[#EADCC9]/80 hidden sm:inline",
								children: "🥤 Boisson 33cl incluse"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "100%" },
						animate: { width: isHovered ? "100%" : "0%" },
						transition: {
							duration: 6.5,
							ease: "linear"
						},
						className: "h-full bg-gradient-to-r from-[#ff705f] via-[#ffaa44] to-[#ff705f]"
					})
				})
			]
		}) })
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
					className: "flex items-center justify-between border-b border-black/5 bg-[#2C1D16] px-5 py-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#EADCC9] text-xs font-black text-[#2C1D16]",
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
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
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
										className: "text-[10px] font-extrabold text-[#2C1D16]",
										children: notif.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 text-xs font-extrabold text-[#2C1D16] group-hover:text-[#ff705f] transition",
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
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2C1D16] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f]",
						children: ["Voir toute la carte en ligne", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
var CATEGORIES$1 = [
	{
		id: "pokes",
		label: "Pokés Signatures",
		badge: "Bols en Bambou",
		icon: "🥗",
		sub: "Dès 10 € · Saumon & Poulet frais"
	},
	{
		id: "crousty",
		label: "Crousty Chicken",
		badge: "Formule 11 €",
		icon: "🍗",
		sub: "Chaud · Boisson 33cl offerte"
	},
	{
		id: "composer",
		label: "Atelier Sur-Mesure",
		badge: "100% Personnalisé",
		icon: "🥣",
		sub: "Base + Protéine + 5 Mix-ins"
	},
	{
		id: "desserts",
		label: "Tiramisus Maison",
		badge: "Artisanal",
		icon: "🧁",
		sub: "4,00 € · Spéculoos, Nutella, Oreo"
	},
	{
		id: "boissons",
		label: "Boissons Fraîches",
		badge: "Extra Frais",
		icon: "🥤",
		sub: "2,00 € · Canettes & Eaux SPA"
	}
];
function PokawaMegaMenu({ isOpen, onClose }) {
	const [activeCat, setActiveCat] = import_react.useState("pokes");
	const [addedDishId, setAddedDishId] = import_react.useState(null);
	const { addItem, setIsCartOpen } = useCart();
	const handleQuickAdd = (dish, isCrousty = false) => {
		addItem({
			id: `${dish.id}-mega`,
			name: dish.name,
			basePrice: dish.price,
			price: dish.price,
			quantity: 1,
			toppings: isCrousty ? ["Boisson 33cl incluse"] : [],
			removedIngredients: [],
			image: dish.image
		});
		setAddedDishId(dish.id);
		setTimeout(() => setAddedDishId(null), 1500);
		setIsCartOpen(true);
	};
	const pokesList = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyList = bowls.filter((b) => b.id.startsWith("crousty-"));
	const dessertItems = [
		{
			id: "tira-spec",
			name: "Tiramisu Spéculoos",
			price: 4,
			desc: "Véritables biscuits Lotus & mascarpone artisanal.",
			image: tiramisu_speculoos_default
		},
		{
			id: "tira-nutella",
			name: "Tiramisu Nutella",
			price: 4,
			desc: "Nutella coulant & éclats de noisettes.",
			image: tiramisu_nutella_default
		},
		{
			id: "tira-oreo",
			name: "Tiramisu Oreo",
			price: 4,
			desc: "Biscuits Oreo noir et crème fouettée.",
			image: tiramisu_oreo_default
		}
	];
	const drinkItems = [
		{
			id: "coca",
			name: "Coca-Cola 33cl",
			price: 2,
			desc: "Servi givré.",
			image: drink_coca_cola_default
		},
		{
			id: "coca-zero",
			name: "Coca-Cola Zéro 33cl",
			price: 2,
			desc: "Zéro sucre, ultra frais.",
			image: drink_coca_zero_default
		},
		{
			id: "ice-tea",
			name: "Ice-Tea Pêche 33cl",
			price: 2,
			desc: "Lipton pêche pétillant.",
			image: drink_ice_tea_default
		},
		{
			id: "eau-gaz",
			name: "SPA Intense 50cl",
			price: 2,
			desc: "Eau pétillante de source.",
			image: drink_eau_gazeuse_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: -8,
			scale: .98
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -8,
			scale: .98
		},
		transition: {
			duration: .22,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[94vw] max-w-[1100px] z-50 pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[32px] bg-[#fffaf2]/95 backdrop-blur-2xl border border-white/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] text-[#2C1D16]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-black/5 bg-[#faf4ea] px-6 py-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-black uppercase tracking-wider text-[#2C1D16]",
							children: "La Carte Pokawa-Style · Poke N Bowl Visé"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-[#758079] font-medium text-[11px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Avenue du Pont 12, Visé" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-emerald-700 font-bold",
								children: "100% Fait Minute"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#carte",
								onClick: onClose,
								className: "font-black uppercase tracking-wider text-[#2431eb] hover:underline",
								children: "Voir toute la carte →"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-[380px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-r border-black/5 p-4 space-y-1 bg-[#f9f3e9]/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7a847e]",
								children: "Catégories"
							}),
							CATEGORIES$1.map((cat) => {
								const isActive = activeCat === cat.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onMouseEnter: () => setActiveCat(cat.id),
									onClick: () => {
										setActiveCat(cat.id);
										const el = document.getElementById(cat.id === "composer" ? "composer" : "carte");
										if (el) el.scrollIntoView({ behavior: "smooth" });
										onClose();
									},
									className: `group w-full flex items-center justify-between rounded-2xl p-3 text-left transition duration-200 ${isActive ? "bg-[#2C1D16] text-white shadow-md scale-[1.02]" : "hover:bg-black/5 text-[#2C1D16]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl group-hover:scale-110 transition-transform",
											children: cat.icon
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black uppercase tracking-wide",
												children: cat.label
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-[10px] font-medium ${isActive ? "text-white/70" : "text-[#7a847e]"}`,
											children: cat.sub
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${isActive ? "bg-[#2C1D16] text-[#EADCC9]" : "bg-black/5 text-[#7a847e]"}`,
										children: cat.badge
									})]
								}, cat.id);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-3 border-t border-black/5 px-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#composer",
									onClick: onClose,
									className: "flex items-center justify-between rounded-xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm hover:scale-[1.02] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Composer son Bowl"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 overflow-y-auto max-h-[460px]",
						children: [
							activeCat === "pokes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
									children: "Poké Bowls Signatures"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#7a847e]",
									children: "Servis en bols sculptés en bambou naturel · Saumon découpé minute"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#ff705f]",
									children: "Format Moyen dès 10 €"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
								children: pokesList.slice(0, 6).map((poke) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
													dishId: poke.id,
													alt: poke.name,
													className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "absolute top-1.5 right-1.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2 py-0.5 text-[10px] font-black text-[#2C1D16] shadow",
													children: [poke.price.toFixed(2), " €"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-1.5 left-1.5 rounded-md bg-black/60 px-1.5 py-0.5 text-[8px] font-bold text-white",
													children: poke.tag
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "text-xs font-black text-[#2C1D16] group-hover:text-[#ff705f] transition line-clamp-1",
											children: poke.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#7a847e] line-clamp-1 mt-0.5",
											children: poke.desc
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 mt-2.5 pt-2 border-t border-black/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleQuickAdd({
													id: poke.id,
													name: poke.name,
													price: poke.price
												}),
												className: "flex-1 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
												children: addedDishId === poke.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$productId",
												params: { productId: poke.id },
												onClick: onClose,
												className: "flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 text-[#2C1D16] transition",
												title: "Personnaliser ce bowl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
											})]
										})
									]
								}, poke.id))
							})] }),
							activeCat === "crousty" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-[#ea580c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-black uppercase tracking-wider text-[#ea580c]",
										children: "Crousty Chicken Chaud"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#9a3412]",
									children: "Petits morceaux de poulet croustillant dorés · Boisson 33cl incluse"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#ea580c] px-3 py-1 text-[11px] font-black text-white shadow-sm",
									children: "Formule 11,00 € Complète"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: croustyList.map((crousty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-[#fed7aa] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
													dishId: crousty.id,
													alt: crousty.name,
													className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute top-2 right-2 rounded-full bg-[#ea580c] px-2.5 py-0.5 text-xs font-black text-white shadow",
													children: "11.00 €"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold text-white",
													children: "🥤 Canette 33cl Offerte"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "text-sm font-black text-[#2C1D16]",
											children: crousty.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#7a847e] mt-0.5 line-clamp-2",
											children: crousty.desc
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 mt-3 pt-2 border-t border-black/5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleQuickAdd({
													id: crousty.id,
													name: crousty.name,
													price: crousty.price
												}, true),
												className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ea580c] py-2 text-xs font-black uppercase text-white hover:bg-[#c2410c] transition active:scale-95 shadow-sm",
												children: addedDishId === crousty.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), " Commander la formule 11 €"] })
											})
										})
									]
								}, crousty.id))
							})] }),
							activeCat === "composer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-gradient-to-br from-[#2C1D16] to-[#1c3830] text-white p-6 shadow-md flex flex-col justify-between h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full bg-[#EADCC9] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[3] text-[#ff705f]" }), "Créativité Illimitée"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-3 text-2xl font-black text-white",
											children: "Compose Ton Poké de A à Z"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-white/80 max-w-md",
											children: "Choisis ta base (Riz sushi, quinoa ou jeunes pousses), ta protéine fraîche (Saumon noble, poulet rôti, scampis grillés, falafels), 5 mix-ins croquants parmi plus de 15 ingrédients du jour, ta sauce signature et tes toppings croustillants !"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 sm:grid-cols-4 gap-2 my-5 text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-white/10 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl",
													children: "🍚"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
													children: "1. Base"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-white/10 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl",
													children: "🐟"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
													children: "2. Protéine"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-white/10 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl",
													children: "🥑"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
													children: "3. 5 Mix-ins"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-white/10 p-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl",
													children: "✨"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
													children: "4. Sauce & Seeds"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#composer",
										onClick: onClose,
										className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#EADCC9] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-lg hover:bg-[#F2E5D4] transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lancer l'atelier Sur-Mesure maintenant" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							}),
							activeCat === "desserts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
									children: "Tiramisus Maison Gourmands"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#7a847e]",
									children: "Préparés chaque matin par notre chef · Mascarpone aérien"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]",
									children: "4,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
								children: dessertItems.map((dessert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: dessert.image,
												alt: dessert.name,
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow",
												children: [dessert.price.toFixed(2), " €"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "text-xs font-black text-[#2C1D16]",
											children: dessert.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-[#7a847e] mt-0.5 line-clamp-1",
											children: dessert.desc
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleQuickAdd(dessert),
											className: "mt-2.5 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
											children: addedDishId === dessert.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
										})
									]
								}, dessert.id))
							})] }),
							activeCat === "boissons" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
									children: "Boissons Fraîches Givron"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-[#7a847e]",
									children: "Canettes 33cl et eaux SPA minérales 50cl servies très fraîches"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]",
									children: "2,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: drinkItems.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2 flex items-center justify-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: drink.image,
												alt: drink.name,
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow",
												children: [drink.price.toFixed(2), " €"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "text-[11px] font-black text-[#2C1D16] truncate",
											children: drink.name
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleQuickAdd(drink),
											className: "mt-2 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
											children: addedDishId === drink.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
										})
									]
								}, drink.id))
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-[#E2D6C5] bg-[#F7F2EB] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-[#766358] font-bold text-[11px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🌱 Saumon frais découpé du matin" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥢 Riz sushi artisanal maison" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑 100% Frais minute" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						onClick: onClose,
						className: "inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[#ff705f] hover:text-[#2C1D16] transition text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir Le Mag Poké & Nutrition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			]
		})
	}) });
}
function PokawaFloatingNavbar() {
	const { items, setIsCartOpen } = useCart();
	const { language, setLanguage } = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = import_react.useState(false);
	const [isMegaMenuOpen, setIsMegaMenuOpen] = import_react.useState(false);
	const timeoutRef = import_react.useRef(null);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsMegaMenuOpen(true);
	};
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsMegaMenuOpen(false);
		}, 220);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		onMouseLeave: handleMouseLeave,
		className: "absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full flex items-center justify-between pointer-events-auto relative gap-2 sm:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex flex-1 justify-start items-center min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 xl:gap-3.5 rounded-full bg-[#FAF4EB]/95 px-3.5 py-1.5 xl:px-4.5 xl:py-2 shadow-xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16] shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#composer",
								className: "flex items-center gap-1 text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] text-[#2C1D16] hover:text-[#ff705f] transition shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-2.5 w-2.5 xl:h-3 xl:w-3 stroke-[2.5]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onMouseEnter: handleMouseEnter,
								className: "relative shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#carte",
									className: `flex items-center gap-1 text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] transition ${isMegaMenuOpen ? "text-[#ff705f]" : "hover:text-[#ff705f]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notre Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-2.5 w-2.5 xl:h-3 xl:w-3 stroke-[2.5] transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-[#ff705f]" : ""}` })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] text-[#2C1D16] hover:text-[#ff705f] transition shrink-0",
								children: "Le Mag"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#valeurs",
								className: "text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] hover:text-[#ff705f] transition shrink-0",
								children: "Engagements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
								target: "_blank",
								rel: "noreferrer",
								title: "Restaurant Poke N Bowl à Visé, Avenue du Pont 12",
								className: "flex h-6 w-6 xl:h-7 xl:w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] shadow-md hover:bg-[#8D522A] hover:scale-110 transition shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 xl:h-3.5 xl:w-3.5 fill-current" })
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 justify-center items-center px-1 sm:px-3 xl:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex flex-col items-center group transition hover:scale-105 duration-200 pointer-events-auto",
						"aria-label": "Poke N Bowl Visé",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_4px_22px_rgba(0,0,0,0.85)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl sm:text-2xl lg:text-2xl xl:text-[28px] font-black uppercase tracking-[0.2em] text-white",
									children: "POKE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-6 w-6 sm:h-7 sm:w-7 lg:h-7.5 lg:w-7.5 xl:h-8.5 xl:w-8.5 items-center justify-center rounded-full bg-[#EADCC9] text-xs sm:text-xs lg:text-sm font-black text-[#2C1D16] shadow-xl ring-2 ring-white/30",
									children: "N"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl sm:text-2xl lg:text-2xl xl:text-[28px] font-black uppercase tracking-[0.2em] text-white",
									children: "BOWL"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[7.5px] sm:text-[8px] lg:text-[8.5px] xl:text-[9.5px] font-black uppercase tracking-[0.42em] text-[#EADCC9] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-0.5",
							children: "VISÉ · BELGIQUE"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex flex-1 justify-end items-center min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 xl:gap-3 rounded-full bg-[#FAF4EB]/95 px-3 py-1.5 xl:px-4 xl:py-2 shadow-xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16] shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/recrutement",
								className: "text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] hover:text-[#ff705f] transition shrink-0",
								children: "Recrutement"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-[10.5px] xl:text-[11.5px] font-black uppercase tracking-[0.08em] xl:tracking-[0.12em] hover:text-[#ff705f] transition shrink-0",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBellMenu, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								"aria-label": "Panier",
								className: "relative flex h-7 w-7 xl:h-8 xl:w-8 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5 xl:h-4 xl:w-4 text-[#2C1D16]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow",
									children: cartCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "inline-flex items-center gap-1 rounded-full bg-[#2C1D16] px-3.5 py-1.5 xl:px-5 xl:py-2 text-[10.5px] xl:text-xs font-black uppercase tracking-[0.12em] text-[#FAF4EB] shadow-lg transition hover:bg-[#482F22] hover:scale-105 active:scale-95 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" })
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1 rounded-full bg-[#2C1D16] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-[#FAF4EB] shadow-lg",
							children: "Commander"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Menu",
							onClick: () => setMobileMenuOpen((o) => !o),
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onMouseEnter: handleMouseEnter,
					onMouseLeave: handleMouseLeave,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaMegaMenu, {
						isOpen: isMegaMenuOpen,
						onClose: () => setIsMegaMenuOpen(false)
					})
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 max-w-sm rounded-[28px] bg-[#fff8ee] p-4 shadow-2xl border border-white/80 pointer-events-auto lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🥗"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pokés & Chirashis" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#ff705f]",
							children: "Dès 10 € →"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🍗"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crousty Chicken" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[#ea580c] text-white px-2 py-0.5 text-[9px] font-black",
							children: "Formule 11 €"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#composer",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🥣"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer son Bowl" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] bg-[#2C1D16] text-white px-2 py-0.5 rounded-full font-black",
							children: "Personnalisé"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "📖"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Le Mag Poké · Articles" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#ff705f]",
							children: "Conseils & SEO →"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#valeurs",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2C1D16] hover:bg-black/5",
						children: "Nos Engagements & Qualité"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2 border-t border-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setMobileMenuOpen(false),
							className: "flex-1 text-center rounded-xl border border-black/10 py-2.5 text-xs font-bold uppercase text-[#2C1D16]",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recrutement",
							onClick: () => setMobileMenuOpen(false),
							className: "flex-1 text-center rounded-xl bg-[#ff705f] py-2.5 text-xs font-black uppercase text-white shadow-sm",
							children: "Recrutement"
						})]
					})
				]
			})
		})]
	});
}
var SLIDES = [
	{
		id: "saumon-wasabi",
		image: "/assets/hero-saumon-clean-wide-CmteSWDC.jpg",
		titleLine1: "SAUMON WASABI",
		titleLine2: "FRAÎCHEUR NOBLE",
		dishName: "Saumon Wasabi",
		badge: "Signature Premium · Saumon Sashimi",
		ingredientCallout: {
			text: "SAUMON NOBLE FRAIS",
			subtext: "DÉCOUPÉ DU MATIN",
			emoji: "🐟"
		},
		statBadge: {
			main: "11.00 €",
			sub: "PREMIUM FRAÎCHEUR"
		},
		price: 11,
		ingredients: "Saumon noble atlantique en dés généreux, avocat Hass fondant, mangue mûre, edamame croquant, salade d'algues wakame & mayo wasabi veloutée."
	},
	{
		id: "sweet-chicken",
		image: "/assets/hero-sweet-wide-CybbbKyX.jpg",
		titleLine1: "SWEET CHICKEN",
		titleLine2: "TERIYAKI MAISON",
		dishName: "Sweet Chicken",
		badge: "Best-Seller · Poulet Doré Teriyaki",
		ingredientCallout: {
			text: "POULET DORÉ MAISON",
			subtext: "MARINADE TERIYAKI",
			emoji: "🍗"
		},
		statBadge: {
			main: "10.00 €",
			sub: "BEST-SELLER"
		},
		price: 10,
		ingredients: "Poulet maison doré, guacamole velouté, mangue, maïs doux, tomates cerises, feta crémeuse, oignons croustillants & sauce teriyaki."
	},
	{
		id: "crousty-chicken-curry",
		image: "/assets/hero-crousty-wide-DQZ1PYgR.jpg",
		titleLine1: "CROUSTY CHICKEN",
		titleLine2: "CURRY DORÉ",
		dishName: "Crousty Chicken Curry",
		badge: "Formule 11 € · Boisson 33cl Incluse",
		ingredientCallout: {
			text: "PETITS MORCEAUX CROUSTILLANTS",
			subtext: "SAUCE CURRY ONCTUEUSE",
			emoji: "🍛"
		},
		statBadge: {
			main: "11.00 €",
			sub: "BOISSON 33CL INCLUSE"
		},
		price: 11,
		ingredients: "Petits morceaux de poulet croustillant dorés, sauce curry onctueuse maison bien généreuse, oignons frits croustillants & riz à sushi chaud.",
		isCrousty: true
	},
	{
		id: "scampis-royaux",
		image: "/assets/hero-scampis-wide-RPIUC85j.jpg",
		titleLine1: "SCAMPIS ROYAUX",
		titleLine2: "SPICY MAYO",
		dishName: "Scampis Royal",
		badge: "Coup de Cœur · Grillé Minute",
		ingredientCallout: {
			text: "SCAMPIS ROYAUX GRILLÉS",
			subtext: "SAISIS AU GRILL",
			emoji: "🦐"
		},
		statBadge: {
			main: "10.00 €",
			sub: "SIGNATURE"
		},
		price: 10,
		ingredients: "Scampis saisis au grill, guacamole maison velouté, edamame croquant, tomates fraîches, concombre, poivrons, jalapeños & spicy mayo."
	},
	{
		id: "spicy-chicken",
		image: "/assets/hero-spicy-wide-_hM7Lcc8.jpg",
		titleLine1: "SPICY CHICKEN",
		titleLine2: "KICK ÉPICÉ",
		dishName: "Spicy Chicken",
		badge: "Épicé Gourmand · Kick Pimenté",
		ingredientCallout: {
			text: "POULET ÉPICÉ MAISON",
			subtext: "FLOCONS DE CHILI",
			emoji: "🔥"
		},
		statBadge: {
			main: "10.00 €",
			sub: "ÉPICÉ GOURMAND"
		},
		price: 10,
		ingredients: "Poulet mariné épicé, avocat Hass, patates douces rôties, maïs doux, feta, jalapeños, sauce spicy mayo onctueuse & sésame mix."
	}
];
var AUTOPLAY_MS = 6e3;
function PokawaHeroExact() {
	const [currentIdx, setCurrentIdx] = import_react.useState(0);
	const [addedNotice, setAddedNotice] = import_react.useState(false);
	const { addItem, setIsCartOpen } = useCart();
	const slide = SLIDES[currentIdx];
	import_react.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
		}, AUTOPLAY_MS);
		return () => clearInterval(interval);
	}, [currentIdx]);
	const handlePrev = () => {
		setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
	};
	const handleNext = () => {
		setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
	};
	const handleQuickAdd = () => {
		const isCrousty = slide.isCrousty;
		addItem({
			id: isCrousty ? slide.id : `${slide.id}-moyen`,
			name: isCrousty ? slide.dishName : `${slide.dishName} (Moyen)`,
			basePrice: slide.price,
			price: slide.price,
			quantity: 1,
			toppings: isCrousty ? ["Boisson 33cl incluse au choix"] : [],
			removedIngredients: [],
			image: slide.image
		});
		setAddedNotice(true);
		setTimeout(() => setAddedNotice(false), 2e3);
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Accueil Poké N Bowl Visé — Poké bowls frais & Crousty Chicken",
		className: "relative w-full h-auto min-h-[780px] sm:h-[96vh] sm:min-h-[680px] max-h-none sm:max-h-[1050px] overflow-hidden bg-[#0a1713] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: 1.04
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: .75,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "absolute inset-0 z-0 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: slide.image,
							alt: `Bol ${slide.dishName} — Poké N Bowl Visé`,
							className: "h-full w-full object-cover object-center filter brightness-100 contrast-102"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" })
					]
				}, `bg-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-20 sm:top-24 right-4 sm:right-8 z-20 hidden md:flex items-center gap-2.5 rounded-full bg-black/45 backdrop-blur-md px-4 py-1.5 border border-white/20 text-white shadow-lg pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-amber-400 font-black text-xs",
					children: "★ 4.9 / 5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold text-[#EADCC9]/90 tracking-wide",
					children: "Google · Fait minute à Visé"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-10 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: {
								duration: .4,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "max-w-xl space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#EBDCCB] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-[#D9C5AD]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#ff705f]" }), slide.badge]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold text-white/90 drop-shadow",
										children: slide.isCrousty ? "Gamme Chaude" : "Découpe minute"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]",
									children: slide.dishName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-lg line-clamp-2",
									children: slide.ingredients
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 pt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleQuickAdd,
											className: "group relative inline-flex items-center gap-2 rounded-full bg-[#EBDCCB] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#2C1D16] shadow-[0_8px_25px_rgba(44,29,22,0.45)] transition hover:bg-[#F5ECE0] hover:scale-105 active:scale-95 border border-[#D9C5AD]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3] text-[#2C1D16]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"Ajouter · ",
													slide.price.toFixed(2),
													" €"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition group-hover:translate-x-1" }),
												addedNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "absolute -top-9 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-black text-white shadow-xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté !"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: slide.id },
											className: "inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-white/30 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow",
											children: "Personnaliser"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#carte",
											className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#EADCC9] hover:underline ml-1 drop-shadow",
											children: "La Carte →"
										})
									]
								})
							]
						}, `content-${slide.id}`)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2 pointer-events-auto",
				children: SLIDES.map((s, idx) => {
					const isActive = idx === currentIdx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentIdx(idx),
						"aria-label": `Aller au plat ${s.dishName}`,
						className: `transition-all duration-300 rounded-full ${isActive ? "w-8 h-2.5 bg-[#EBDCCB] shadow-[0_0_12px_rgba(235,220,203,0.9)]" : "w-2.5 h-2.5 bg-white/40 hover:bg-[#EBDCCB]"}`
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handlePrev,
				"aria-label": "Plat précédent",
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handleNext,
				"aria-label": "Plat suivant",
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})
		]
	});
}
var BASES = [
	{
		id: "riz-sushi",
		name: "Riz à sushi japonais",
		emoji: "🍚",
		desc: "Vinaigré et fondant"
	},
	{
		id: "riz-brun",
		name: "Riz brun complet",
		emoji: "🌾",
		desc: "Riche en fibres & parfumé"
	},
	{
		id: "salade",
		name: "Salade fraîche croquante",
		emoji: "🥗",
		desc: "Légère & désaltérante"
	},
	{
		id: "pates",
		name: "Pâtes gourmandes",
		emoji: "🍝",
		desc: "Savoureuses & consistantes"
	}
];
var PROTEINES = [
	{
		id: "poulet",
		name: "Poulet mariné doré",
		emoji: "🍗",
		extra: 0,
		tag: "Petits morceaux tendres"
	},
	{
		id: "saumon",
		name: "Saumon sashimi noble",
		emoji: "🐟",
		extra: 1,
		tag: "+1,00 € · Découpé minute"
	},
	{
		id: "scampis",
		name: "Scampis royaux grillés",
		emoji: "🦐",
		extra: 0,
		tag: "Saisis au grill minute"
	},
	{
		id: "vege",
		name: "Double Avocat Hass & Feta",
		emoji: "🥑",
		extra: 0,
		tag: "100% Végétarien"
	}
];
var MIXINS = [
	{
		id: "avocat",
		name: "Avocat Hass fondant",
		emoji: "🥑"
	},
	{
		id: "mangue",
		name: "Mangue mûre juteuse",
		emoji: "🥭"
	},
	{
		id: "edamame",
		name: "Edamame croquant",
		emoji: "🫘"
	},
	{
		id: "feta",
		name: "Feta grecque AOP",
		emoji: "🧀"
	},
	{
		id: "wakame",
		name: "Salade d'algues Wakame",
		emoji: "🌿"
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
		id: "concombre",
		name: "Concombre frais",
		emoji: "🥒"
	},
	{
		id: "jalapenos",
		name: "Jalapeños marinés",
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
		name: "Teriyaki caramélisée maison",
		emoji: "🍯",
		desc: "Sucré-salé savoureux"
	},
	{
		id: "spicy-mayo",
		name: "Spicy Mayo piquante",
		emoji: "🌶️",
		desc: "Relevée & onctueuse"
	},
	{
		id: "mayo-wasabi",
		name: "Mayo Wasabi veloutée",
		emoji: "🟢",
		desc: "Fraîche avec du caractère"
	},
	{
		id: "sesame",
		name: "Sésame toasté crémeux",
		emoji: "🌰",
		desc: "Rondeur délicate"
	}
];
var TOPPINGS = [
	{
		id: "oignons-frits",
		name: "Oignons frits dorés",
		emoji: "🧅",
		desc: "Croustillant irrésistible"
	},
	{
		id: "sesame-mix",
		name: "Mélange sésame noir & blanc",
		emoji: "🌱",
		desc: "Arômes torréfiés"
	},
	{
		id: "noix-cajou",
		name: "Noix de cajou",
		emoji: "🥜",
		desc: "Croquant délicat"
	},
	{
		id: "nachos",
		name: "Nachos croustillants",
		emoji: "🌽",
		desc: "Crunch maïs salé"
	},
	{
		id: "flocons-chili",
		name: "Flocons de chili crunchy",
		emoji: "🔥",
		desc: "Kick épicé vivifiant"
	},
	{
		id: "wazabi",
		name: "Wazabi peas crunchy",
		emoji: "🟢",
		desc: "Piquant japonais"
	}
];
function InteractiveBowlBuilder() {
	const [activeStep, setActiveStep] = import_react.useState(1);
	const [size, setSize] = import_react.useState("moyen");
	const [base, setBase] = import_react.useState(BASES[0]);
	const [proteine, setProteine] = import_react.useState(PROTEINES[1]);
	const [selectedMixins, setSelectedMixins] = import_react.useState([
		"avocat",
		"mangue",
		"edamame",
		"wakame",
		"feta"
	]);
	const [sauce, setSauce] = import_react.useState(SAUCES[0]);
	const [selectedToppings, setSelectedToppings] = import_react.useState(["oignons-frits"]);
	const [added, setAdded] = import_react.useState(false);
	const { addItem, setIsCartOpen } = useCart();
	const basePrice = size === "grand" ? 13 : 10;
	const proteinExtra = proteine.extra;
	const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
	const extraMixinsPrice = extraMixinsCount * .5;
	const extraToppingsCount = Math.max(0, selectedToppings.length - 1);
	const extraToppingsPrice = extraToppingsCount * .5;
	const totalPrice = basePrice + proteinExtra + extraMixinsPrice + extraToppingsPrice;
	const activeBowlImage = {
		poulet: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg",
		saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
		scampis: "/assets/bowl-scampis-DlEe1YXf.jpg",
		vege: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	}[proteine.id] || "/assets/bowl-sweet-chicken-T1JJVtIT.jpg";
	const toggleMixin = (id) => {
		if (selectedMixins.includes(id)) {
			if (selectedMixins.length > 1) setSelectedMixins((prev) => prev.filter((m) => m !== id));
		} else setSelectedMixins((prev) => [...prev, id]);
	};
	const toggleTopping = (id) => {
		if (selectedToppings.includes(id)) {
			if (selectedToppings.length > 1) setSelectedToppings((prev) => prev.filter((t) => t !== id));
		} else setSelectedToppings((prev) => [...prev, id]);
	};
	const handleAddToCart = () => {
		const mixinNames = selectedMixins.map((id) => MIXINS.find((m) => m.id === id)?.name || id);
		const toppingNames = selectedToppings.map((id) => TOPPINGS.find((t) => t.id === id)?.name || id);
		addItem({
			id: `custom-live-${Date.now()}`,
			name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
			basePrice: totalPrice,
			price: totalPrice,
			quantity: 1,
			toppings: [
				`Taille : ${size === "grand" ? "Grand (13€)" : "Moyen (10€)"}`,
				`Base : ${base.name}`,
				`Protéine : ${proteine.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
				`Mix-ins : ${mixinNames.join(", ")}${extraMixinsCount > 0 ? ` (+${extraMixinsPrice.toFixed(2)}€)` : ""}`,
				`Sauce : ${sauce.name}`,
				`Toppings : ${toppingNames.join(", ")}${extraToppingsCount > 0 ? ` (+${extraToppingsPrice.toFixed(2)}€)` : ""}`
			],
			removedIngredients: [],
			image: activeBowlImage
		});
		setAdded(true);
		setIsCartOpen(true);
		setTimeout(() => {
			setAdded(false);
			setActiveStep(1);
			setSize("moyen");
			setBase(BASES[0]);
			setProteine(PROTEINES[1]);
			setSelectedMixins([
				"avocat",
				"mangue",
				"edamame",
				"wakame",
				"feta"
			]);
			setSauce(SAUCES[0]);
			setSelectedToppings(["oignons-frits"]);
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1340px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[36px] bg-white border border-[#E2D6C5] shadow-lift p-6 sm:p-10 lg:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-black/5 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#EADCC9] shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atelier Créatif · Bol en Bambou Naturel" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
								children: ["Composez votre bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#ff705f]",
									children: "sur-mesure."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm sm:text-base text-[#5a6760] font-medium leading-relaxed",
								children: "Assemblez vos ingrédients favoris en 4 étapes simples. Fait minute sous vos yeux avec découpes fraîches du jour."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 px-5 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]",
								children: "Prix calculé en direct"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl sm:text-3xl font-black text-[#2C1D16]",
								children: [totalPrice.toFixed(2), " €"]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5",
					children: [
						{
							step: 1,
							title: "1. Format & Base",
							detail: `${base.name} (${size})`
						},
						{
							step: 2,
							title: "2. Protéine",
							detail: proteine.name
						},
						{
							step: 3,
							title: "3. Mix-ins Frais",
							detail: `${selectedMixins.length} légumes / fruits`
						},
						{
							step: 4,
							title: "4. Sauce & Toppings",
							detail: `${sauce.name} · ${selectedToppings.length} topping(s)`
						}
					].map((s) => {
						const isCurrent = activeStep === s.step;
						const isDone = activeStep > s.step;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveStep(s.step),
							className: `relative rounded-2xl p-3.5 text-left transition duration-200 border ${isCurrent ? "bg-[#2C1D16] text-white border-[#2C1D16] shadow-md scale-[1.02]" : isDone ? "bg-[#F3ECE1] text-[#2C1D16] border-[#E2D6C5] hover:border-black/20" : "bg-white text-[#7d8b83] border-black/5 hover:border-black/15"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-black uppercase tracking-wider ${isCurrent ? "text-[#EADCC9]" : isDone ? "text-[#ff705f]" : "text-[#7d8b83]"}`,
									children: s.title
								}), isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#ff705f]" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-1 block text-xs font-bold truncate ${isCurrent ? "text-white/80" : isDone ? "text-[#2C1D16]" : "text-[#7d8b83]/70"}`,
								children: s.detail
							})]
						}, s.step);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-[#F3ECE1] border border-[#E2D6C5] p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[340px]",
							children: [
								activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📏" }), " Choisissez la taille de votre bol"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("moyen"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "moyen" ? "bg-white border-[#2C1D16] shadow-md ring-2 ring-[#2C1D16]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#2C1D16]",
													children: "Format Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]",
													children: "10.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Portion régulière généreuse · Idéal repas midi ou soir"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("grand"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "grand" ? "bg-white border-[#2C1D16] shadow-md ring-2 ring-[#2C1D16]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#2C1D16]",
													children: "Grand Format"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9]",
													children: "13.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Maxi faim (+3 €) · Double base & portions renforcées"
											})]
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍚" }), " Choisissez votre base (incluse)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setBase(b),
											className: `flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${base.id === b.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: b.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16]",
												children: b.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-medium",
												children: b.desc
											})] })]
										}, b.id))
									})] })]
								}),
								activeStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗" }), " Choisissez votre protéine principale"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
										children: PROTEINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setProteine(p),
											className: `flex items-center gap-3 rounded-2xl p-4 border text-left transition ${proteine.id === p.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl",
												children: p.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-xs text-[#2C1D16]",
														children: p.name
													}), p.extra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-black text-[#ff705f] bg-[#ff705f]/10 px-2 py-0.5 rounded-full",
														children: [
															"+",
															p.extra.toFixed(2),
															" €"
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#7d8b83] font-medium block mt-0.5",
													children: p.tag
												})]
											})]
										}, p.id))
									})]
								}),
								activeStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-base font-black text-[#2C1D16] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑" }), " Choisissez vos mix-ins frais (5 inclus)"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-[#ff705f]",
												children: [
													selectedMixins.length,
													" sélectionné(s) ",
													extraMixinsCount > 0 ? `(+${extraMixinsPrice.toFixed(2)} €)` : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#7d8b83]",
											children: "5 mix-ins sont inclus dans votre bol. Vous pouvez en ajouter autant que vous voulez (+0.50 € par mix-in supplémentaire)."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2",
											children: MIXINS.map((m) => {
												const isSelected = selectedMixins.includes(m.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleMixin(m.id),
													className: `flex items-center gap-2 rounded-2xl p-3 border text-left transition ${isSelected ? "bg-white border-[#2C1D16] shadow-sm ring-2 ring-[#2C1D16]/10 font-black text-[#2C1D16]" : "bg-white/60 border-black/5 hover:bg-white text-[#5a6760] font-medium"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-lg",
															children: m.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs truncate",
															children: m.name
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-auto h-3.5 w-3.5 text-[#059669]" })
													]
												}, m.id);
											})
										})
									]
								}),
								activeStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍶" }), " Choisissez votre sauce signature (incluse)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSauce(s),
											className: `flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${sauce.id === s.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: s.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16]",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-medium",
												children: s.desc
											})] })]
										}, s.id))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-base font-black text-[#2C1D16] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧅" }), " Choisissez vos toppings croustillants (1 inclus · illimités)"]
											}), selectedToppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-[#ff705f]",
												children: [
													selectedToppings.length,
													" sélectionné(s) ",
													extraToppingsCount > 0 ? `(+${extraToppingsPrice.toFixed(2)} €)` : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#7d8b83] mb-3",
											children: "Ajoutez autant de toppings croustillants que vous souhaitez (+0.50 € par topping supplémentaire)."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
											children: TOPPINGS.map((tp) => {
												const isSelected = selectedToppings.includes(tp.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleTopping(tp.id),
													className: `flex items-center gap-2.5 rounded-2xl p-3 border text-left transition ${isSelected ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: tp.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block text-xs font-black text-[#2C1D16] truncate",
																children: tp.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[9px] text-[#7d8b83] block truncate",
																children: tp.desc
															})]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#ff705f] shrink-0" })
													]
												}, tp.id);
											})
										})
									] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between pt-4 border-t border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: activeStep === 1,
								onClick: () => setActiveStep((curr) => Math.max(1, curr - 1)),
								className: `text-xs font-black px-4 py-2 rounded-full transition ${activeStep === 1 ? "opacity-30 cursor-not-allowed text-[#7d8b83]" : "text-[#2C1D16] hover:bg-black/5"}`,
								children: "← Étape précédente"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveStep((curr) => curr < 4 ? curr + 1 : 1),
								className: "text-xs font-black px-4 py-2 rounded-full bg-[#2C1D16] text-white hover:bg-[#ff705f] transition",
								children: activeStep < 4 ? `Étape suivante (${activeStep + 1}/4) →` : "Revenir au début"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-white border border-[#E2D6C5] p-6 sm:p-7 shadow-card flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: "🥣"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-black text-[#2C1D16]",
										children: "Votre Recette en Direct"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-bold text-[#059669]",
										children: ["Bol en bambou naturel · Format ", size === "grand" ? "Grand" : "Moyen"]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]",
										children: "Total Recette"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-2xl font-black text-[#2C1D16]",
										children: [totalPrice.toFixed(2), " €"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#F3ECE1] shadow-md group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeBowlImage,
										alt: "Bol composé Poke N Bowl",
										className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2.5 left-2.5 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] border border-white/20 shadow",
										children: "Bol Bambou Débordant 🌿"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-black drop-shadow flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.name })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#2431eb] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow",
											children: size === "grand" ? "Grand (13 €)" : "Moyen (10 €)"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Base choisie :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: base.emoji }),
												" ",
												base.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Protéine :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.emoji }),
												" ",
												proteine.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 pt-1 border-t border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-[#7d8b83]",
												children: [
													"Mix-ins (",
													selectedMixins.length,
													") :"
												]
											}), extraMixinsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-black text-[#ff705f]",
												children: [
													"+",
													extraMixinsPrice.toFixed(2),
													" €"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: selectedMixins.map((id) => {
												const m = MIXINS.find((mix) => mix.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-lg bg-[#F3ECE1] border border-[#E2D6C5] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]",
													children: [
														m?.emoji,
														" ",
														m?.name
													]
												}, id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Sauce :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sauce.emoji }),
												" ",
												sauce.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 pt-1 border-t border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-[#7d8b83]",
												children: [
													"Toppings (",
													selectedToppings.length,
													") :"
												]
											}), extraToppingsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-black text-[#ff705f]",
												children: [
													"+",
													extraToppingsPrice.toFixed(2),
													" €"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: selectedToppings.map((id) => {
												const tp = TOPPINGS.find((t) => t.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-lg bg-[#F3ECE1] border border-[#E2D6C5] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]",
													children: [
														tp?.emoji,
														" ",
														tp?.name
													]
												}, id);
											})
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-2xl bg-[#F3ECE1] p-3 text-[11px] text-[#5a6760] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bol en bambou véritable, 100% recyclable & réutilisable." })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-4 border-t border-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: `btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lift transition duration-200 ${added ? "bg-[#2C1D16]" : ""}`,
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22c55e]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté ! Retour à l'étape 1..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Ajouter mon bowl (",
										totalPrice.toFixed(2),
										" €)"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								] })
							})
						})]
					})]
				})
			]
		})
	});
}
function FluidInteractiveMenu() {
	const { addItem } = useCart();
	const [activeSection, setActiveSection] = import_react.useState("all");
	const [activeTaste, setActiveTaste] = import_react.useState("all");
	const [searchQuery, setSearchQuery] = import_react.useState("");
	const [selectedSizes, setSelectedSizes] = import_react.useState({});
	const [recentlyAddedId, setRecentlyAddedId] = import_react.useState(null);
	const pokeItems = import_react.useMemo(() => {
		return bowls.filter((b) => !b.id.startsWith("crousty-")).map((b) => {
			let tasteTag = "fresh";
			if (b.id === "spicy-chicken") tasteTag = "spicy";
			if (b.id === "sweet-chicken") tasteTag = "sweet";
			return {
				id: b.id,
				name: b.name,
				category: "poke",
				price: b.price,
				grandPrice: b.price + 3,
				desc: b.desc,
				badge: b.tag,
				dishId: b.id,
				ingredients: b.ingredients,
				tasteTag,
				packagingNote: "Bol en bambou naturel · Fait minute"
			};
		});
	}, []);
	const croustyItems = import_react.useMemo(() => {
		return bowls.filter((b) => b.id.startsWith("crousty-")).map((b) => ({
			id: b.id,
			name: b.name,
			category: "crousty",
			price: b.price,
			desc: b.desc,
			badge: "Formule 11 € · Boisson Offerte 🥤",
			dishId: b.id,
			ingredients: b.ingredients,
			tasteTag: "crispy",
			isCombo: true,
			packagingNote: "Packaging Kraft Takeaway chaud · Boisson 33cl incluse"
		}));
	}, []);
	const dessertItems = import_react.useMemo(() => {
		const imagesMap = {
			"tira-spec": tiramisu_speculoos_default,
			"tira-nutella": tiramisu_nutella_default,
			"tira-oreo": tiramisu_oreo_default
		};
		return desserts.map((d) => ({
			id: d.id,
			name: d.name,
			category: "dessert",
			price: d.price,
			desc: d.id === "tira-spec" ? "Crème mascarpone ultra-légère, véritables biscuits Lotus caramélisés & voile de spéculoos artisanal." : d.id === "tira-nutella" ? "Généreux tourbillons de Nutella fondant, éclats de noisettes torréfiées et crème fouettée maison." : "Éclats croustillants de biscuits Oreo noir plongés dans une onctueuse crème mascarpone fraîche.",
			badge: d.soldOut ? "Victime de son succès" : "Fait Maison du Matin ⭐",
			image: imagesMap[d.id],
			soldOut: d.soldOut,
			tasteTag: "sweet",
			packagingNote: "Pot artisanal individuel fraîcheur"
		}));
	}, []);
	const drinkItems = import_react.useMemo(() => {
		const imagesMap = {
			coca: drink_coca_cola_default,
			"coca-zero": drink_coca_zero_default,
			fanta: drink_fanta_orange_default,
			"ice-tea": drink_ice_tea_default,
			"eau-plate": drink_eau_plate_default,
			"eau-gaz": drink_eau_gazeuse_default
		};
		const notesMap = {
			coca: "Canette 33cl servie glacée",
			"coca-zero": "Canette 33cl zéro sucre ultra-fraîche",
			fanta: "Canette 33cl pétillante à l'orange",
			"ice-tea": "Canette Lipton Ice-Tea Pêche 33cl fraîche",
			"eau-plate": "Bouteille plastique SPA Reine 50cl plate",
			"eau-gaz": "Bouteille plastique SPA Intense 50cl pétillante"
		};
		return drinks.map((dr) => ({
			id: dr.id,
			name: dr.name,
			category: "drink",
			price: dr.price,
			desc: notesMap[dr.id] || "Boisson fraîche 33cl / 50cl.",
			badge: "Extra Frais 🧊",
			image: imagesMap[dr.id],
			tasteTag: "drink",
			packagingNote: notesMap[dr.id]
		}));
	}, []);
	const handleAddToCart = (item) => {
		if (item.soldOut) return;
		const size = selectedSizes[item.id] || "moyen";
		const isGrand = size === "grand" && item.grandPrice;
		const finalPrice = isGrand ? item.grandPrice : item.price;
		const displayName = item.grandPrice ? `${item.name} (${isGrand ? "Grand" : "Moyen"})` : item.name;
		addItem({
			id: `${item.id}-${size}`,
			name: displayName,
			basePrice: finalPrice,
			price: finalPrice,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image
		});
		setRecentlyAddedId(item.id);
		setTimeout(() => {
			setRecentlyAddedId((curr) => curr === item.id ? null : curr);
		}, 1800);
	};
	const toggleSize = (itemId, size) => {
		setSelectedSizes((prev) => ({
			...prev,
			[itemId]: size
		}));
	};
	const filterList = (items) => {
		return items.filter((item) => {
			if (activeTaste !== "all" && item.tasteTag !== activeTaste && item.tasteTag !== "drink") return false;
			if (searchQuery.trim() !== "") {
				const query = searchQuery.toLowerCase();
				const matchesName = item.name.toLowerCase().includes(query);
				const matchesDesc = item.desc.toLowerCase().includes(query);
				const matchesIng = item.ingredients?.some((ing) => ing.name.toLowerCase().includes(query));
				if (!matchesName && !matchesDesc && !matchesIng) return false;
			}
			return true;
		});
	};
	const filteredPokes = filterList(pokeItems);
	const filteredCrousty = filterList(croustyItems);
	const filteredDesserts = filterList(dessertItems);
	const filteredDrinks = filterList(drinkItems);
	const totalResults = (activeSection === "all" || activeSection === "pokes" ? filteredPokes.length : 0) + (activeSection === "all" || activeSection === "crousty" ? filteredCrousty.length : 0) + (activeSection === "all" || activeSection === "desserts" ? filteredDesserts.length : 0) + (activeSection === "all" || activeSection === "boissons" ? filteredDrinks.length : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "carte",
		className: "scroll-mt-16 mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
		"aria-label": "La carte Poke N Bowl Visé",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C1D16]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Carte Officielle & Recettes Visétoises"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
						children: ["Une carte claire, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f]",
							children: "organisée & gourmande."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-[#766358] max-w-2xl font-medium",
						children: "Pokés servis dans de véritables bols en bambou naturel, Crousty Chicken chaud en boîte kraft avec boisson, desserts du jour et rafraîchissements givrés."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A796E]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Rechercher saumon, crousty, oreo...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-[#E2D6C5] bg-[#FAF7F2] py-2.5 pl-10 pr-4 text-xs font-semibold text-[#2C1D16] placeholder-[#8A796E] shadow-sm focus:border-[#A25F30] focus:outline-none focus:ring-2 focus:ring-[#A25F30]/25"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8A796E] hover:text-[#2C1D16]",
							children: "✕"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2",
				children: [
					{
						id: "all",
						label: "Toute la Carte",
						icon: "✨",
						count: pokeItems.length + croustyItems.length + dessertItems.length + drinkItems.length
					},
					{
						id: "pokes",
						label: "Poké Bowls Signatures",
						icon: "🥗",
						count: pokeItems.length
					},
					{
						id: "crousty",
						label: "Crousty Chicken",
						icon: "🍗",
						count: croustyItems.length
					},
					{
						id: "composer",
						label: "Sur-Mesure",
						icon: "🥣",
						count: 1
					},
					{
						id: "desserts",
						label: "Tiramisus Maison",
						icon: "🧁",
						count: dessertItems.length
					},
					{
						id: "boissons",
						label: "Boissons Fraîches",
						icon: "🥤",
						count: drinkItems.length
					}
				].map((cat) => {
					const isActive = activeSection === cat.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setActiveSection(cat.id);
							setActiveTaste("all");
						},
						className: `relative flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition shrink-0 ${isActive ? "bg-[#2C1D16] text-[#FAF7F2] shadow-lg scale-[1.02]" : "bg-[#FAF7F2] text-[#2C1D16]/80 hover:bg-[#EFE8DC] border border-[#E2D6C5]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: cat.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-[#EADCC9] text-[#2C1D16]" : "bg-[#EFE8DC] text-[#766358]"}`,
								children: cat.count
							})
						]
					}, cat.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] font-bold uppercase tracking-wider text-[#7d8b83] flex items-center gap-1 mr-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3 w-3" }), " Saveur :"]
				}), [
					{
						id: "all",
						label: "Toutes les envies"
					},
					{
						id: "fresh",
						label: "Frais & Léger 🥑"
					},
					{
						id: "crispy",
						label: "Croustillant & Chaud 🍗"
					},
					{
						id: "spicy",
						label: "Touche Piquante 🌶️"
					},
					{
						id: "sweet",
						label: "Douceur Teriyaki / Sucre 🍯"
					}
				].map((taste) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActiveTaste(taste.id),
					className: `rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${activeTaste === taste.id ? "bg-[#ff705f] text-white shadow-sm" : "bg-white/80 text-[#5a6760] hover:bg-black/5 border border-black/5"}`,
					children: taste.label
				}, taste.id))]
			}),
			totalResults === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-[32px] bg-white border border-black/5 p-12 text-center shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-4xl",
						children: "🔍"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-xl font-bold text-[#2C1D16]",
						children: "Aucun plat ne correspond à votre recherche"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-[#7d8b83]",
						children: "Essayez avec un autre mot-clé ou réinitialisez les filtres."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setActiveSection("all");
							setActiveTaste("all");
							setSearchQuery("");
						},
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-5 py-2.5 text-xs font-bold text-white shadow-sm",
						children: "Réinitialiser les filtres"
					})
				]
			}),
			(activeSection === "all" || activeSection === "pokes") && filteredPokes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16]/5 px-3 py-1 text-[11px] font-extrabold text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bols en Bois / Bambou Sculpté" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Poké Bowls Signatures"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Saumon découpé minute, poulet mariné en petits morceaux tendres, scampis grillés & légumes croquants."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-extrabold text-[#ff705f]",
						children: "Format Moyen dès 10 € · Grand +3 €"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4",
					children: filteredPokes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: selectedSizes[item.id] || "moyen",
						onToggleSize: (s) => toggleSize(item.id, s),
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "crousty") && filteredCrousty.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[32px] bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border border-[#fed7aa] p-6 sm:p-8 mb-6 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 fill-white" }), "Crousty Chicken · Chaud & Croustillant"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl sm:text-3xl font-black text-[#7c2d12]",
								children: "Crousty Chicken"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs sm:text-sm text-[#9a3412] max-w-2xl font-medium",
								children: "Petits morceaux de poulet croustillant dorés, généreusement nappés de sauce maison onctueuse (curry ou blanche) et oignons frits croustillants sur riz chaud."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-[#fed7aa] shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: "🥤"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-black uppercase tracking-wider text-[#ea580c]",
								children: "Formule Étudiant Complète"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-black text-[#7c2d12]",
								children: ["11,00 € ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-[#9a3412]",
									children: "(Boisson 33cl incluse)"
								})]
							})] })]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: filteredCrousty.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: "moyen",
						onToggleSize: () => {},
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id,
						isCroustySpecial: true
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "composer") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "composer",
				className: "mt-16 pt-8 border-t border-black/5 scroll-mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBowlBuilder, {})
			}),
			(activeSection === "all" || activeSection === "desserts") && filteredDesserts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Douceurs Artisanales" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Tiramisus Maison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#766358] mt-0.5",
							children: "Préparés chaque matin par notre chef. Mascarpone fouetté, biscuits croustillants & sauces gourmandes."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
						children: "4,00 € l'unité"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredDesserts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: "moyen",
						onToggleSize: () => {},
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "boissons") && filteredDrinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E2D6C5]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0284c7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Servies Très Fraîches" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Boissons Fraîches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#766358] mt-0.5",
							children: "Canettes givrées 33cl et bouteilles d'eau SPA 50cl pour accompagner vos plats."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
						children: "2,00 € l'unité"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
					children: filteredDrinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrinkCard, {
						item,
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			})
		]
	});
}
function DishCard({ item, selectedSize, onToggleSize, onAdd, isAdded, isCroustySpecial = false }) {
	const effectivePrice = selectedSize === "grand" && item.grandPrice ? item.grandPrice : item.price;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		layout: true,
		className: `group flex flex-col justify-between overflow-hidden rounded-[28px] border bg-[#FAF7F2] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${isCroustySpecial ? "border-[#fed7aa] ring-2 ring-[#ea580c]/15" : "border-[#E2D6C5]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden bg-[#e9e5dc]",
			children: [
				item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
					dishId: item.dishId,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-700 group-hover:scale-108"
				}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: `h-full w-full object-cover transition duration-700 group-hover:scale-108 ${item.soldOut ? "grayscale contrast-75" : ""}`
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center bg-[#f4f0e6] text-4xl",
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur ${isCroustySpecial ? "bg-[#ea580c] text-white" : "bg-[#FAF7F2]/95 text-[#2C1D16] border border-[#E2D6C5]"}`,
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-3.5 right-3.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1 text-xs font-black text-[#2C1D16] shadow-md",
					children: [effectivePrice.toFixed(2), " €"]
				}),
				item.packagingNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-2.5 left-3.5 rounded-md bg-black/65 backdrop-blur-sm px-2 py-0.5 text-[9px] font-extrabold text-white/90",
					children: item.packagingNote
				}),
				item.soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg",
						children: "Victime de son succès"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-lg sm:text-xl font-black text-[#2C1D16] leading-snug",
					children: item.name
				}),
				item.isCombo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs font-extrabold text-[#ea580c]",
					children: "🥤 Formule chaude : Canette 33cl offerte au choix"
				}) : item.category === "poke" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs font-bold text-[#059669]",
					children: "🥣 Servi en bol bambou sculpté · Riz japonais vinaigré"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-[#766358] line-clamp-2",
					children: item.desc
				}),
				item.ingredients && item.ingredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex flex-wrap gap-1.5",
					children: [item.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#F3ECE1] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]/85 border border-[#E2D6C5]",
						children: [
							ing.emoji,
							" ",
							ing.name
						]
					}, i)), item.ingredients.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]",
						children: ["+", item.ingredients.length - 5]
					})]
				}),
				item.grandPrice && !item.isCombo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#7d8b83]",
						children: "Format :"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-full bg-[#f2ede4] p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("moyen"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "moyen" ? "bg-[#2C1D16] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Moyen (",
								item.price.toFixed(0),
								" €)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("grand"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "grand" ? "bg-[#2C1D16] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Grand (",
								item.grandPrice.toFixed(0),
								" €)"
							]
						})]
					})]
				})
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-5 sm:p-6 pt-0 mt-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 pt-2 border-t border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: item.soldOut,
					onClick: onAdd,
					className: `relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${item.soldOut ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-[#2C1D16] text-emerald-400 scale-105" : "bg-[#EADCC9] border border-[#D9C5AD] text-[#2C1D16] hover:bg-[#A25F30] hover:text-[#FFFDF9] hover:border-[#A25F30] hover:scale-105 active:scale-95"}`,
					title: `Ajouter au panier (${effectivePrice.toFixed(2)} €)`,
					children: [isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 stroke-[3]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" }), isAdded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 0,
							scale: .6
						},
						animate: {
							opacity: 1,
							y: -24,
							scale: 1
						},
						exit: { opacity: 0 },
						className: "absolute -top-1 font-black text-xs text-white bg-emerald-600 px-1.5 py-0.5 rounded-full shadow",
						children: "+1"
					})]
				}), item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$productId",
					params: { productId: item.dishId },
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2C1D16] py-3 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				}) : item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-center py-3 text-xs font-bold text-[#766358]",
					children: "Épuisé aujourd'hui"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2C1D16] py-3 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
	});
}
function DrinkCard({ item, onAdd, isAdded }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#E2D6C5] bg-[#FAF7F2] p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#e9e5dc]",
				children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center text-3xl",
					children: "🥤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2 py-0.5 text-[10px] font-black text-[#2C1D16] shadow",
					children: [item.price.toFixed(2), " €"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-xs font-black text-[#2C1D16] leading-tight line-clamp-1",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[10px] text-[#766358] line-clamp-1",
					children: item.packagingNote || "33 cl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				className: `mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[11px] font-black transition ${isAdded ? "bg-[#2C1D16] text-emerald-400" : "bg-[#2C1D16] text-[#FAF7F2] hover:bg-[#8D522A]"}`,
				children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter (2 €)" })] })
			})
		]
	});
}
function PokawaBrandValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-y border-[#E2D6C5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Nos Engagements & Notre Philosophie"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
							children: "Un poké plein de qualités"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium",
							children: "Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé minute avec les meilleurs produits."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							id: "freshness",
							emoji: "🐟",
							tag: "Exigence fraîcheur",
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
							title: "Fraîcheur Quotidienne",
							desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
							perk: "Découpe chaque matin à Visé",
							image: bowl_saumon_default
						},
						{
							id: "rice",
							emoji: "🍚",
							tag: "Authenticité",
							tagColor: "bg-[#ff705f] text-white",
							title: "Riz à Sushi Artisanal",
							desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
							perk: "Assaisonnement équilibré",
							image: bowl_sweet_chicken_default
						},
						{
							id: "crousty",
							emoji: "🍗",
							tag: "Gamme Chaude",
							tagColor: "bg-[#ea580c] text-white",
							title: "Crousty Chicken",
							desc: "Petits morceaux de poulet croustillant dorés, oignons frits et sauces chaudes maison curry ou blanche généreuses.",
							perk: "Formule étudiant 11 € avec boisson",
							image: bowl_crousty_curry_default
						},
						{
							id: "custom",
							emoji: "✨",
							tag: "Sur-Mesure",
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
							title: "Liberté & Transparence",
							desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
							perk: "Zéro compromis sur vos goûts",
							image: bowl_scampis_default
						}
					].map((val) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col justify-between overflow-hidden rounded-[32px] min-h-[380px] sm:min-h-[420px] p-6 text-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift border border-black/10 select-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: val.image,
								alt: val.title,
								className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 transition-opacity duration-300 group-hover:opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-md text-xl border border-white/20 shadow",
									children: val.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider shadow ${val.tagColor}`,
									children: val.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mt-auto pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow",
										children: val.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-white/85 font-medium line-clamp-3 drop-shadow",
										children: val.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-3 border-t border-white/20 flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-[#EADCC9] drop-shadow",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), val.perk]
										})
									})
								]
							})
						]
					}, val.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A] hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander en ligne à Visé" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
	});
}
function PokawaPerksBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#2C1D16] via-[#142d26] to-[#0b1a16] p-7 sm:p-10 lg:p-14 text-white shadow-lift border border-white/10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ff705f]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EADCC9] backdrop-blur-md border border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Service Express Poke N Bowl Visé"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
								children: "Commandez en direct au meilleur prix"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs sm:text-sm text-white/75 leading-relaxed",
								children: "Pas d'intermédiaire, préparation prioritaire en cuisine et ingrédients 100% personnalisables selon vos préférences et allergies."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EADCC9] text-[#2C1D16] text-sm font-black",
											children: "⚡"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Retrait Express"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Zéro attente au 12 Av. du Pont"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ff705f] text-white text-sm font-black",
											children: "🛵"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Livraison Locale"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Dès 2 € selon distance (0 € dès 50 €)"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#EADCC9] text-sm font-black",
											children: "🎓"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Formule 11 €"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Crousty Chicken + boisson 33cl"
											})]
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/commander",
							className: "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#EADCC9] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander en ligne" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sur-mesure",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Créer mon Poké sur-mesure" })
						})]
					})]
				})
			]
		})
	});
}
var INSTA_POSTS = [
	{
		id: "post-1",
		image: bowl_saumon_default,
		likes: 248,
		comments: 19,
		caption: "Le Saumon Wasabi dans toute sa fraîcheur : avocat fondant, edamames croquants & sésame doré 🥑✨",
		tag: "#PokeBowlVisé"
	},
	{
		id: "post-2",
		image: bowl_sweet_chicken_default,
		likes: 312,
		comments: 24,
		caption: "Poulet mariné sweet & mangue fraîche du jour : le mix sucré-salé qui met tout le monde d'accord 🥭🍗",
		tag: "#SweetChicken"
	},
	{
		id: "post-3",
		image: bowl_scampis_default,
		likes: 195,
		comments: 14,
		caption: "Scampis Royaux sautés minute sur lit de riz à sushi vinaigré. Prêt en moins de 3 minutes pour votre pause déj 🦐",
		tag: "#FraisDuJour"
	},
	{
		id: "post-4",
		image: bowl_spicy_chicken_default,
		likes: 276,
		comments: 22,
		caption: "Pour ceux qui aiment quand ça réveille les papilles : Spicy Chicken et sauce pimentée maison 🔥",
		tag: "#SpicyVibes"
	}
];
function PokawaInstagramWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-16 sm:py-20 lg:py-24 border-b border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5" }), "La Communauté Poke N Bowl"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#2C1D16]",
							children: "L’actu sur nos réseaux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: [
								"Partagez vos bowls à Visé en story et taguez ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#2C1D16]",
									children: "@POKE_NBOWL"
								}),
								" pour être reposté !"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: INSTA_POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com/POKE_NBOWL",
						target: "_blank",
						rel: "noreferrer",
						className: "group relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#faf8f4] shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square w-full overflow-hidden bg-[#ece8dc]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.image,
									alt: post.caption,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-108",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 text-xs font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-[#ff705f] text-[#ff705f]" }), post.likes]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 fill-white" }), post.comments]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-center text-[11px] leading-snug line-clamp-3 text-white/90",
											children: post.caption
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md",
											children: "Voir sur Instagram →"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-3 left-3 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-white shadow-sm group-hover:opacity-0 transition-opacity",
									children: post.tag
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 flex items-center justify-between text-xs text-[#68756f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-extrabold text-[#2C1D16]",
								children: "@POKE_NBOWL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 text-[#ff705f] group-hover:scale-110 transition-transform" })]
						})]
					}, post.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com/POKE_NBOWL",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2.5 rounded-full border-2 border-[#2C1D16] bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-soft transition hover:bg-[#2C1D16] hover:text-white hover:scale-105 active:scale-95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 text-[#ff705f]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Suivez-nous sur Instagram @POKE_NBOWL" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 opacity-60" })
						]
					})
				})
			]
		})
	});
}
function SocialProofBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Avis clients et gages de qualité Poke N Bowl Visé",
		className: "border-y border-[#E2D6C5] bg-[#FAF6F0] py-6 px-4 sm:px-6 lg:px-8 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECE1] border border-[#DFCDB8] shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "🌟"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-black text-[#2C1D16]",
						children: "4.9 / 5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex text-amber-500",
						children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500 text-amber-500" }, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-bold text-[#766358]",
					children: [
						"Sur Google · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f] font-black",
							children: "+350 clients conquis"
						}),
						" à Visé"
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full md:w-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-emerald-700 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "Prêt en 15-20 min"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Retrait express sans file"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "100% Fait Minute"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Saumon découpé du matin"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "Cœur de Visé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Avenue du Pont 12"
						})] })]
					})
				]
			})]
		})
	});
}
function MobileAppStickyBar() {
	const { items, total, setIsCartOpen } = useCart();
	const [isVisible, setIsVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250 || items.length > 0) setIsVisible(true);
			else setIsVisible(false);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [items.length]);
	const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const handleAction = () => {
		if (totalItemCount > 0) setIsCartOpen(true);
		else {
			const el = document.getElementById("carte");
			if (el) el.scrollIntoView({ behavior: "smooth" });
			else window.location.href = "/commander";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			y: 80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 80,
			opacity: 0
		},
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 280
		},
		className: "fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[26px] bg-[#2C1D16]/95 backdrop-blur-xl border border-white/20 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2.5 text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#composer",
				className: "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] border border-white/15 active:scale-95 transition shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sur-mesure" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleAction,
				className: "flex-1 flex items-center justify-between rounded-full bg-[#EADCC9] px-4 py-2.5 text-[#2C1D16] shadow-lg transition active:scale-95 min-w-0 hover:bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 truncate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2C1D16] text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), totalItemCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
							children: totalItemCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black uppercase tracking-wider truncate",
						children: totalItemCount > 0 ? `${totalItemCount} article${totalItemCount > 1 ? "s" : ""}` : "Commander"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 font-black text-xs shrink-0 ml-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: total > 0 ? `${total.toFixed(2)} €` : "La Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 stroke-[3]" })]
				})]
			})]
		})
	}) });
}
var CATEGORIES = [
	{
		id: "pokes",
		title: "Pokés & Chirashis",
		badge: "Dès 10,00 €",
		badgeColor: "bg-[#2C1D16] text-[#EADCC9]",
		image: bowl_saumon_default,
		targetId: "carte",
		desc: "Saumon atlantique minute, poulet doré & scampis royaux"
	},
	{
		id: "crousty",
		title: "Gamme Chaude",
		badge: "Formule 11 € · Boisson Offerte",
		badgeColor: "bg-[#ea580c] text-white",
		image: bowl_crousty_curry_default,
		targetId: "carte",
		desc: "Crousty chicken chaud nappé de sauce curry ou blanche"
	},
	{
		id: "composer",
		title: "Atelier Sur-Mesure",
		badge: "Création Libre",
		badgeColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
		image: bowl_sweet_chicken_default,
		targetId: "composer",
		desc: "Composez votre recette de A à Z avec 5 mix-ins frais"
	},
	{
		id: "desserts",
		title: "Tiramisus Maison",
		badge: "4,00 € · Fait Maison",
		badgeColor: "bg-[#ff705f] text-white",
		image: tiramisu_speculoos_default,
		targetId: "carte",
		desc: "Spéculoos Lotus, Nutella fondant & Oreo croustillant"
	},
	{
		id: "boissons",
		title: "Boissons Fraîches",
		badge: "2,00 € · Extra Frais",
		badgeColor: "bg-[#0284c7] text-white",
		image: drink_coca_cola_default,
		targetId: "carte",
		desc: "Canettes 33cl servies givrées & eaux minérales SPA"
	}
];
function PokawaCategoriesCarousel() {
	const scrollRef = import_react.useRef(null);
	const handleScroll = (direction) => {
		if (scrollRef.current) {
			const offset = direction === "left" ? -340 : 340;
			scrollRef.current.scrollBy({
				left: offset,
				behavior: "smooth"
			});
		}
	};
	const scrollToTarget = (targetId) => {
		const el = document.getElementById(targetId);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Catégories gourmandes Poke N Bowl Visé",
		className: "py-14 sm:py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#E2D6C5] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C1D16] border border-[#D9C5AD]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Fraîcheur & Gourmandise à Visé"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
						children: [
							"Vivez sainement, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:inline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#ff705f]",
								children: "soyez gourmands."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium max-w-xl",
						children: "Chaque univers est préparé minute avec des produits rigoureusement sélectionnés. Glissez pour explorer :"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-start sm:self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleScroll("left"),
						"aria-label": "Catégories précédentes",
						className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleScroll("right"),
						"aria-label": "Catégories suivantes",
						className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -6 },
					transition: { duration: .25 },
					onClick: () => scrollToTarget(cat.targetId),
					className: "group flex-shrink-0 w-[270px] sm:w-[290px] snap-start cursor-pointer select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-[30px] bg-[#e9e5dc] shadow-card transition-all duration-300 group-hover:shadow-lift border border-[#E2D6C5]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: cat.title,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md ${cat.badgeColor}`,
								children: cat.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 inset-x-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold text-white/90 drop-shadow line-clamp-1",
									children: cat.desc
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2C1D16] group-hover:text-[#ff705f] transition",
							children: cat.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] transition duration-300 group-hover:bg-[#2C1D16] group-hover:text-[#FAF7F2] group-hover:translate-x-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				}, cat.id))
			})]
		})
	});
}
function PokawaMagSection() {
	const topArticles = BLOG_ARTICLES.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Le Mag Poké N Bowl Visé — Articles & Nutrition",
		className: "bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-b border-[#E2D6C5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#2C1D16] border border-[#D9C5AD]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Le Mag Poké · Nutrition & Savoir-Faire"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
						children: "Des articles pour mieux manger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium max-w-xl",
						children: "Conseils nutrition, secrets de nos recettes fait minute et guides pour composer votre bowl idéal au cœur de Visé."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ff705f] hover:text-[#2C1D16] transition group shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voir tous les articles du Mag" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: topArticles.map((art) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: art.slug },
					className: "group flex flex-col justify-between overflow-hidden rounded-[30px] border border-[#E2D6C5] bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-56 w-full overflow-hidden bg-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: art.image,
							alt: art.title,
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-108"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3.5 left-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[#FAF4EB]/95 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD] shadow-sm",
								children: art.category
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[11px] font-bold text-[#766358]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#ff705f]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: art.readTime }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: art.date })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2.5 text-lg sm:text-xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition leading-snug",
								children: art.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-[#766358] font-medium leading-relaxed line-clamp-3",
								children: art.deck
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 pb-6 pt-3 border-t border-[#E2D6C5]/60 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-bold text-[#2C1D16]",
							children: ["Par ", art.author.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition",
							children: "Lire l'article →"
						})]
					})]
				}, art.slug))
			})]
		})
	});
}
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
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
	const renderedItems = [
		{
			icon: "🌱",
			text: "Saumon atlantique découpé du matin"
		},
		{
			icon: "🥢",
			text: "Riz à sushi assaisonné maison"
		},
		{
			icon: "🥑",
			text: "Avocats Hass mûrs à point"
		},
		{
			icon: "🍗",
			text: "Gamme Chaude Crousty Chicken 11 €"
		},
		{
			icon: "📍",
			text: "Centre de Visé · Avenue du Pont 12"
		},
		{
			icon: "🛵",
			text: "Click & Collect express en 15 min"
		}
	].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mx-6 inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-[#FAF4EB]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				children: item.icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.text }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#ff705f] font-bold text-xs",
				children: "/"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#1C120C] py-3.5 text-[#EADCC9] border-y border-[#3A261D] shadow-inner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 32,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex w-max whitespace-nowrap select-none",
			children: [renderedItems, renderedItems]
		})
	});
}
function Index() {
	const { t } = useTranslation();
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
		className: "min-h-screen overflow-x-clip bg-[#F6F1E9] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaFloatingNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaHeroExact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaCategoriesCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProofBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluidInteractiveMenu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "valeurs",
					className: "scroll-mt-12 bg-[#FAF6F0]/80 py-14 sm:py-20 border-b border-[#E2D6C5]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaBrandValues, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaMagSection, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaPerksBanner, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaInstagramWall, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqNutritionSection, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1240px] items-center justify-between gap-5 rounded-[28px] bg-gradient-to-r from-[#2C1D16] via-[#16332b] to-[#1c3e34] text-white p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[34px] sm:p-9 shadow-card border border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-black text-white",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EADCC9] text-[#2C1D16] transition group-hover:scale-110 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "scroll-mt-10 bg-[#ece9df] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1340px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Visé, Belgique · Avenue du Pont 12"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm sm:text-base text-[#766358] font-medium",
									children: "À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé."
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col h-full overflow-hidden rounded-[32px] border border-[#E2D6C5] bg-[#FAF7F2] shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-b border-[#E2D6C5] bg-[#F3ECE1] p-5 sm:px-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#EADCC9] border border-[#D9C5AD] text-xs font-black text-[#2C1D16]",
												children: "📍"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-extrabold text-[#2C1D16] text-base",
												children: "Poke N Bowl Visé"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#766358] mt-0.5",
											children: "Avenue du Pont 12, 4600 Visé, Belgique"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-bold text-[#FAF7F2] shadow-sm transition hover:bg-[#8D522A]",
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
										className: "flex flex-wrap items-center justify-between gap-3 bg-[#F3ECE1] p-4 text-[11px] font-semibold text-[#766358] border-t border-[#E2D6C5]",
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
										className: "overflow-hidden rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-[#E2D6C5] pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2C1D16] text-[#EADCC9]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[#ff705f]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-black text-[#2C1D16]",
													children: "Horaires d'ouverture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-[#766358]",
													children: "Poke N Bowl Visé · En plein centre"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] px-3 py-1 text-[10px] font-bold uppercase",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Du Lundi au Vendredi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Service midi & soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#2C1D16]",
															children: "12:00 – 14:00"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#2C1D16]",
															children: "17:00 – 21:00"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Samedi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Service du soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-[#2C1D16]",
														children: "18:00 – 21:00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Dimanche"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Fermeture hebdomadaire"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-extrabold text-[#ff705f]",
														children: "Fermé"
													})]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7 space-y-4",
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
													className: "text-xs text-[#766358] font-bold",
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
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#E2D6C5] bg-[#F3ECE1] py-3.5 px-4 text-xs font-bold text-[#2C1D16] transition hover:bg-[#EAE0D2]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram @POKE_NBOWL" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-[#F3ECE1] px-4 py-2.5 text-xs text-[#766358] flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "🛵 Livraison à domicile disponible"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/commander",
													className: "font-bold text-[#2C1D16] hover:underline",
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
				className: "bg-[#1C120C] pt-16 pb-28 sm:pb-16 text-[#EADCC9] px-4 sm:px-6 lg:px-8 border-t border-[#352117]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1340px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "inline-block transition hover:opacity-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#EADCC9]/70 leading-relaxed font-medium",
										children: "Le spécialiste du Poké Bowl frais et du Crousty Chicken chaud en Basse-Meuse. Ingrédients nobles, découpe minute et emballages éco-responsables."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3.5 py-2 text-xs font-bold text-[#FAF4EB]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-amber-400",
											children: "★ 4.9 / 5"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#EADCC9]/60",
											children: "· +350 avis Google à Visé"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-black uppercase tracking-[0.2em] text-[#ff705f] mb-4",
								children: "Notre Carte"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2.5 text-xs font-semibold text-[#EADCC9]/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#carte",
										className: "hover:text-white transition",
										children: "Pokés Signatures"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#carte",
										className: "hover:text-white transition",
										children: "Gamme Chaude Crousty (11 €)"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sur-mesure",
										className: "hover:text-white transition",
										children: "Atelier Sur-Mesure"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#carte",
										className: "hover:text-white transition",
										children: "Tiramisus Maison Spéculoos"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#carte",
										className: "hover:text-white transition",
										children: "Boissons Fraîches"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commander",
										className: "hover:text-white text-[#ff705f] font-bold transition",
										children: "Commander en ligne →"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-black uppercase tracking-[0.2em] text-[#ff705f] mb-4",
								children: "Le Mag Poké & Nutrition"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2.5 text-xs font-semibold text-[#EADCC9]/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: "un-repas-healthy-et-gourmand" },
										className: "hover:text-white transition line-clamp-1",
										children: "Un repas healthy et gourmand"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: "guide-poke-bowl-vise-liege" },
										className: "hover:text-white transition line-clamp-1",
										children: "Guide Poké Bowl Visé & Liège"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: "bienfaits-saumon-avocat-omega3" },
										className: "hover:text-white transition line-clamp-1",
										children: "Bienfaits saumon & avocat"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: "poke-bowl-vs-chirashi-vs-salade" },
										className: "hover:text-white transition line-clamp-1",
										children: "Poké Bowl vs Chirashi vs Salade"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog/$slug",
										params: { slug: "crousty-chicken-gamme-chaude" },
										className: "hover:text-white transition line-clamp-1",
										children: "Gamme Chaude Crousty Chicken"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/blog",
										className: "hover:text-white text-[#ff705f] font-bold transition",
										children: "Tous les articles du Mag →"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-black uppercase tracking-[0.2em] text-[#ff705f] mb-4",
								children: "Restaurant Visé"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5 text-xs text-[#EADCC9]/80 font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-white",
										children: "Avenue du Pont 12, 4600 Visé"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "📞 0491 28 14 56" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] leading-relaxed text-[#EADCC9]/60",
										children: [
											"Lun - Ven : 12h00 – 14h00 · 17h00 – 21h00",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Samedi : 18h00 – 21h00",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Dimanche : Fermé"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-bold text-white hover:bg-white/20 transition",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Itinéraire Google Maps 📍" })
										})
									})
								]
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EADCC9]/50 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Poke N Bowl Visé · Poké bowls frais & Crousty Chicken. Tous droits réservés."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-white transition",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hover:text-white transition",
									children: "Recrutement"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "hover:text-white transition",
									children: "Blog & SEO"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileAppStickyBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CroustyNotificationToast, {})
		]
	});
}
//#endregion
export { Index as component };
