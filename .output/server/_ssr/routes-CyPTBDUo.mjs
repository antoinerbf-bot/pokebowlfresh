import { i as __toESM } from "../_runtime.mjs";
import { c as desserts, p as drinks, r as bowls } from "./data-Bi2irjzU.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BkzyhEtx.mjs";
import { B as Check, C as MapPin, D as Funnel, E as Heart, H as Bell, I as ChevronRight, L as ChevronLeft, M as Clock, N as CircleCheck, O as Flame, R as ChevronDown, S as Menu, T as Instagram, U as Award, V as BriefcaseBusiness, W as ArrowRight, _ as Phone, c as Sparkles, f as ShieldCheck, g as Plus, k as ExternalLink, p as Search, t as X, u as ShoppingBag, x as MessageCircle, z as ChefHat } from "../_libs/lucide-react.mjs";
import { a as bowl_scampis_default, i as bowl_saumon_default, n as DishImage, o as bowl_spicy_chicken_default, r as bowl_crousty_curry_default, s as bowl_sweet_chicken_default, t as CartDrawer } from "./CartDrawer-u5LFB_zB.mjs";
import { a as drink_fanta_orange_default, c as tiramisu_oreo_default, i as drink_eau_plate_default, l as tiramisu_speculoos_default, n as drink_coca_zero_default, o as drink_ice_tea_default, r as drink_eau_gazeuse_default, s as tiramisu_nutella_default, t as drink_coca_cola_default } from "./drink-eau-gazeuse-BNz0q5PT.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CyPTBDUo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
		desc: "Petits morceaux de poulet croustillant dorés, sauce blanche onctueuse et oignons frits croquants.",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Étudiant",
		tagColor: "bg-[#d7ff45] text-[#10251f]",
		title: "Formule Crousty Chicken à 11 €",
		desc: "1 Crousty Chicken au choix + 1 boisson 33cl offerte incluse (Coca, Ice-Tea, Fanta...).",
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
function PokawaFloatingNavbar() {
	const { items, setIsCartOpen } = useCart();
	const { language, setLanguage } = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-5 rounded-full bg-[#fff8ee] px-6 py-2.5 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#composer",
							className: "flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#10251f] hover:text-[#ff705f] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer son Bowl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 stroke-[2.5]" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#carte",
							className: "flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notre Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 stroke-[2.5]" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#valeurs",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Engagements"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
							target: "_blank",
							rel: "noreferrer",
							title: "Restaurant Poke N Bowl à Visé, Avenue du Pont 12",
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2431eb] text-white shadow-md hover:scale-110 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 fill-current" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col items-center group transition hover:scale-105 duration-200",
					"aria-label": "Poke N Bowl Visé",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white",
								children: "POKE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f] shadow-md",
								children: "N"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white",
								children: "BOWL"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] font-black uppercase tracking-[0.35em] text-[#d7ff45] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-0.5",
						children: "VISÉ · BELGIQUE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-4 rounded-full bg-[#fff8ee] px-5 py-2 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recrutement",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Recrutement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBellMenu, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#10251f]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#2431eb] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-[#1a25b5] hover:scale-105 active:scale-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1 rounded-full bg-[#2431eb] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-lg",
							children: "Commander"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Menu",
							onClick: () => setMobileMenuOpen((o) => !o),
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 max-w-sm rounded-3xl bg-[#fff8ee] p-4 shadow-2xl border border-white/60 pointer-events-auto lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Notre Carte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#composer",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Sur-Mesure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#valeurs",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Nos Engagements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Contact & Accès"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/recrutement",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl bg-[#ff705f] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white",
						children: "Recrutement"
					})
				]
			})
		})]
	});
}
var SLIDES = [
	{
		id: "saumon-wasabi",
		image: bowl_saumon_default,
		titleLine1: "SAUMON WASABI",
		titleLine2: "FRAÎCHEUR NOBLE",
		dishName: "Saumon Wasabi",
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
		image: bowl_sweet_chicken_default,
		titleLine1: "SWEET CHICKEN",
		titleLine2: "TERIYAKI MAISON",
		dishName: "Sweet Chicken",
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
		image: bowl_crousty_curry_default,
		titleLine1: "CROUSTY CHICKEN",
		titleLine2: "CURRY DORÉ",
		dishName: "Crousty Chicken Curry",
		ingredientCallout: {
			text: "PETITS MORCEAUX CROUSTILLANTS",
			subtext: "SAUCE CURRY ONCTUEUSE",
			emoji: "🍛"
		},
		statBadge: {
			main: "FORMULE 11 €",
			sub: "BOISSON 33CL INCLUSE"
		},
		price: 11,
		ingredients: "Petits morceaux de poulet croustillant dorés, sauce curry onctueuse maison bien généreuse, oignons frits croustillants & riz à sushi chaud.",
		isCrousty: true
	},
	{
		id: "scampis-royaux",
		image: bowl_scampis_default,
		titleLine1: "SCAMPIS ROYAUX",
		titleLine2: "SPICY MAYO",
		dishName: "Scampis Royal",
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
		image: bowl_spicy_chicken_default,
		titleLine1: "SPICY CHICKEN",
		titleLine2: "KICK ÉPICÉ",
		dishName: "Spicy Chicken",
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
var AUTOPLAY_MS = 5500;
function PokawaHeroExact() {
	const [currentIdx, setCurrentIdx] = import_react.useState(0);
	const [addedNotice, setAddedNotice] = import_react.useState(false);
	const { addItem } = useCart();
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
		addItem({
			id: `${slide.id}-moyen`,
			name: `${slide.dishName} (Moyen)`,
			basePrice: slide.price,
			price: slide.price,
			quantity: 1,
			toppings: [],
			removedIngredients: []
		});
		setAddedNotice(true);
		setTimeout(() => setAddedNotice(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Accueil Poké N Bowl Visé — Bowls Frais & Crousty Chicken",
		className: "relative w-full h-[94vh] sm:h-[98vh] min-h-[640px] max-h-[1050px] overflow-hidden bg-[#101e18] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
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
					exit: { opacity: 0 },
					transition: {
						duration: .85,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "absolute inset-0 z-0 flex items-center justify-center bg-[#15231e]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: slide.image,
							alt: slide.dishName,
							className: "h-full w-full object-cover object-center filter brightness-105 contrast-102"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-1/2 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" })
					]
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 30
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: 20
					},
					transition: {
						duration: .5,
						delay: .15
					},
					className: "absolute top-28 right-4 sm:right-8 lg:right-12 z-20 hidden md:flex items-center gap-3 rounded-2xl bg-black/40 backdrop-blur-md px-4 py-2.5 border border-white/20 text-white shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: slide.ingredientCallout.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] font-black uppercase tracking-wider text-[#d7ff45]",
							children: slide.ingredientCallout.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[9px] font-bold uppercase tracking-widest text-white/80",
							children: slide.ingredientCallout.subtext
						})]
					})]
				}, `badge-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .9
					},
					transition: {
						duration: .5,
						delay: .25
					},
					className: "absolute top-44 right-6 sm:right-10 lg:right-16 z-20 hidden lg:flex flex-col items-center justify-center rounded-3xl bg-[#d7ff45] text-[#10251f] px-5 py-4 shadow-2xl border-2 border-white/40 rotate-3 hover:rotate-0 transition-transform duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none",
						children: slide.statBadge.main
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] font-black uppercase tracking-widest text-[#10251f]/80 mt-1",
						children: slide.statBadge.sub
					})]
				}, `stat-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-12 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] flex flex-col lg:flex-row lg:items-end justify-between gap-6 pointer-events-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -20
								},
								transition: {
									duration: .55,
									ease: [
										.16,
										1,
										.3,
										1
									]
								},
								className: "space-y-2 sm:space-y-3 rounded-[30px] bg-black/40 backdrop-blur-md p-6 sm:p-7 border border-white/20 shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md border border-white/30",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#d7ff45]",
												children: "✦"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slide.dishName }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/60",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[#d7ff45]",
												children: [slide.price.toFixed(2), " €"]
											}),
											slide.isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-1 rounded-md bg-[#ff705f] px-2 py-0.5 text-[9px] font-black text-white",
												children: "BOISSON INCLUSE"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: slide.titleLine1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white",
											children: slide.titleLine2
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-white/90 max-w-xl font-medium drop-shadow leading-relaxed pt-1",
										children: slide.ingredients
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-3 pt-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: handleQuickAdd,
												className: "group relative inline-flex items-center gap-2 rounded-full bg-[#d7ff45] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-2xl transition hover:bg-white hover:scale-105 active:scale-95",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														"Ajouter ce bowl (",
														slide.price.toFixed(2),
														" €)"
													] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" }),
													addedNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "absolute -top-10 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-[#2431eb] px-3.5 py-1 text-xs font-black text-white shadow-2xl",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté !"]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$productId",
												params: { productId: slide.id },
												className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/40 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/30",
												children: "Personnaliser"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#composer",
												className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow",
												children: "Composer votre bowl →"
											})
										]
									})
								]
							}, `title-${slide.id}`)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white p-4 shadow-2xl border border-black/10 flex items-center gap-4 max-w-sm text-[#10251f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#f5ebe1]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: tiramisu_speculoos_default,
									alt: "Dessert maison",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-0 inset-x-0 bg-[#2431eb] text-center text-[8px] font-black text-white uppercase",
									children: "Maison"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#ea580c]/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#ea580c]",
											children: "Crousty Chicken · 11 € Menu 🍗"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-xs font-black text-[#10251f] uppercase tracking-tight",
										children: "Petits Morceaux Dorés & Sauce"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[#68756f] leading-snug line-clamp-2 mt-0.5",
										children: "Poulet croustillant pané minute + riz + sauce maison + boisson 33cl !"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#crousty",
										className: "mt-1.5 inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#ea580c] hover:underline",
										children: "Voir les formules →"
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2",
				children: SLIDES.map((s, idx) => {
					const isActive = idx === currentIdx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentIdx(idx),
						"aria-label": `Aller au plat ${s.dishName}`,
						className: `transition-all duration-300 rounded-full ${isActive ? "w-8 h-2.5 bg-white shadow-lg" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handlePrev,
				"aria-label": "Plat précédent",
				className: "absolute left-3 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handleNext,
				"aria-label": "Plat suivant",
				className: "absolute right-3 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})
		]
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
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#d7ff45]/40 border border-[#b2db16] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10251f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#10251f]" }), "Carte Officielle & Recettes Visétoises"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
						children: ["Une carte claire, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f]",
							children: "organisée & gourmande."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-[#5a6760] max-w-2xl font-medium",
						children: "Pokés servis dans de véritables bols en bambou naturel, Crousty Chicken chaud en boîte kraft avec boisson, desserts du jour et rafraîchissements givrés."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7d8b83]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Rechercher saumon, crousty, oreo...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold text-[#10251f] placeholder-[#7d8b83] shadow-sm focus:border-[#d7ff45] focus:outline-none focus:ring-2 focus:ring-[#d7ff45]/40"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7d8b83] hover:text-black",
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
						className: `relative flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition shrink-0 ${isActive ? "bg-[#10251f] text-white shadow-lg scale-[1.02]" : "bg-white text-[#10251f]/80 hover:bg-[#10251f]/10 border border-black/5"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: cat.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-[#d7ff45] text-[#10251f]" : "bg-black/5 text-[#5a6760]"}`,
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
						className: "mt-3 text-xl font-bold text-[#10251f]",
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
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#10251f] px-5 py-2.5 text-xs font-bold text-white shadow-sm",
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
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f]/5 px-3 py-1 text-[11px] font-extrabold text-[#10251f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bols en Bois / Bambou Sculpté" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
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
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
							children: "Nos Tiramisus Maison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Préparés chaque matin par notre chef. Mascarpone fouetté, biscuits croustillants & sauces gourmandes."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0284c7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Servies Très Fraîches" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
							children: "Nos Boissons Fraîches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Canettes givrées 33cl et bouteilles d'eau SPA 50cl pour accompagner vos plats."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
		className: `group flex flex-col justify-between overflow-hidden rounded-[28px] border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${isCroustySpecial ? "border-[#fed7aa] ring-2 ring-[#ea580c]/15" : "border-black/5"}`,
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
					className: `absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur ${isCroustySpecial ? "bg-[#ea580c] text-white" : "bg-white/95 text-[#10251f]"}`,
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-xs font-black text-[#10251f] shadow-md",
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
					className: "text-lg sm:text-xl font-black text-[#10251f] leading-snug",
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
					className: "mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2",
					children: item.desc
				}),
				item.ingredients && item.ingredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex flex-wrap gap-1.5",
					children: [item.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/85 border border-[#e8dfcf]",
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
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "moyen" ? "bg-[#10251f] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Moyen (",
								item.price.toFixed(0),
								" €)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("grand"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "grand" ? "bg-[#10251f] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
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
				className: "flex items-center gap-2 pt-2 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: item.soldOut,
					onClick: onAdd,
					className: `relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${item.soldOut ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-[#10251f] text-[#d7ff45] scale-105" : "bg-[#d7ff45] text-[#10251f] hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95"}`,
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
						className: "absolute -top-1 font-black text-xs text-[#10251f] bg-[#d7ff45] px-1.5 py-0.5 rounded-full shadow",
						children: "+1"
					})]
				}), item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$productId",
					params: { productId: item.dishId },
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				}) : item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-center py-3 text-xs font-bold text-[#7d8b83]",
					children: "Épuisé aujourd'hui"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
	});
}
function DrinkCard({ item, onAdd, isAdded }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col justify-between overflow-hidden rounded-[22px] border border-black/5 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f0eee9]",
				children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center text-3xl",
					children: "🥤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#d7ff45] px-2 py-0.5 text-[10px] font-black text-[#10251f] shadow",
					children: [item.price.toFixed(2), " €"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-xs font-black text-[#10251f] leading-tight line-clamp-1",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[10px] text-[#7d8b83] line-clamp-1",
					children: item.packagingNote || "33 cl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				className: `mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[11px] font-black transition ${isAdded ? "bg-[#10251f] text-[#d7ff45]" : "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]"}`,
				children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter (2 €)" })] })
			})
		]
	});
}
function PokawaBrandValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#faf8f4] py-16 sm:py-20 lg:py-24 border-y border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Nos Engagements & Notre Philosophie"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
							children: "Un Poké plein de qualités"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: "Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé avec les meilleurs ingrédients."
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
							tagColor: "bg-[#d7ff45] text-[#10251f]",
							title: "Fraîcheur Quotidienne",
							desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
							perk: "Découpe chaque matin à Visé"
						},
						{
							id: "rice",
							emoji: "🍚",
							tag: "Authenticité",
							tagColor: "bg-[#ff705f] text-white",
							title: "Riz à Sushi Artisanal",
							desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
							perk: "Assaisonnement équilibré"
						},
						{
							id: "crousty",
							emoji: "🍗",
							tag: "Gamme Chaude",
							tagColor: "bg-[#8b5510] text-white",
							title: "Crousty Chicken",
							desc: "Pour les amateurs de réconfort : petits morceaux de poulet croustillant dorés, oignons frits et sauces chaudes maison généreuses.",
							perk: "Formule étudiant 11€ avec boisson"
						},
						{
							id: "custom",
							emoji: "✨",
							tag: "Sur-Mesure",
							tagColor: "bg-[#10251f] text-[#d7ff45]",
							title: "Liberté & Transparence",
							desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
							perk: "Zéro compromis sur vos goûts"
						}
					].map((val) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col justify-between rounded-[32px] border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f4ec] text-2xl shadow-inner group-hover:scale-110 transition-transform",
									children: val.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${val.tagColor}`,
									children: val.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg sm:text-xl font-extrabold text-[#10251f]",
								children: val.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#68756f]",
								children: val.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-4 border-t border-black/5 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-[#10251f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), val.perk]
							})
						})]
					}, val.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "inline-flex items-center gap-2 rounded-full bg-[#10251f] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Goûter la différence en ligne" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
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
		id: "flocons-chili",
		name: "Flocons de chili crunchy",
		emoji: "🔥",
		desc: "Kick épicé vivifiant"
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
	const [topping, setTopping] = import_react.useState(TOPPINGS[0]);
	const [added, setAdded] = import_react.useState(false);
	const { addItem } = useCart();
	const basePrice = size === "grand" ? 13 : 10;
	const proteinExtra = proteine.extra;
	const extraMixinsPrice = Math.max(0, selectedMixins.length - 5) * .5;
	const totalPrice = basePrice + proteinExtra + extraMixinsPrice;
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
	const handleAddToCart = () => {
		const mixinNames = selectedMixins.map((id) => MIXINS.find((m) => m.id === id)?.name || id);
		addItem({
			id: `custom-live-${Date.now()}`,
			name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
			basePrice: totalPrice,
			price: totalPrice,
			quantity: 1,
			toppings: [
				`Taille : ${size === "grand" ? "Grand (13€)" : "Moyen (10€)"}`,
				`Base : ${base.name}`,
				`Protéine : ${proteine.name}`,
				`Mix-ins : ${mixinNames.join(", ")}`,
				`Sauce : ${sauce.name}`,
				`Topping : ${topping.name}`
			],
			removedIngredients: [],
			image: activeBowlImage
		});
		setAdded(true);
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
			setTopping(TOPPINGS[0]);
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1340px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[36px] bg-white border border-[#e8dfcf] shadow-lift p-6 sm:p-10 lg:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d7ff45]/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#10251f] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#d7ff45] shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atelier Créatif · Bol en Bambou Naturel" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
								children: ["Composez votre bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#ff705f]",
									children: "sur-mesure."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm sm:text-base text-[#5a6760] font-medium leading-relaxed",
								children: "Sélectionnez vos ingrédients étape par étape. Chaque bowl est préparé à la minute dans un bol en bois sculpté, avec vos 5 mix-ins frais inclus."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sur-mesure",
							className: "inline-flex items-center gap-2.5 rounded-full bg-[#faf8f4] border border-[#d8cfbe] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white hover:scale-105 active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Accéder au grand configurateur 5 étapes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-[#ff705f]" })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5",
					children: [
						{
							num: 1,
							title: "1. Format & Base",
							icon: "🍚"
						},
						{
							num: 2,
							title: "2. Protéine Fraîche",
							icon: "🐟"
						},
						{
							num: 3,
							title: `3. Mix-Ins (${selectedMixins.length}/5)`,
							icon: "🥑"
						},
						{
							num: 4,
							title: "4. Sauce & Croustillant",
							icon: "🍯"
						}
					].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveStep(st.num),
						className: `flex items-center gap-2.5 rounded-2xl p-3.5 text-left transition-all ${activeStep === st.num ? "bg-[#10251f] text-white shadow-md scale-[1.02]" : "bg-[#f7f4ec] text-[#10251f]/80 hover:bg-[#ede7da] border border-black/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: st.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-black truncate",
								children: st.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[10px] font-bold ${activeStep === st.num ? "text-[#d7ff45]" : "text-[#7d8b83]"}`,
								children: activeStep === st.num ? "En cours d'édition" : "Cliquer pour modifier"
							})]
						})]
					}, st.num))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-[#faf8f4] border border-[#e8dfcf] p-6 sm:p-7 shadow-sm min-h-[440px] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-lg font-black text-[#10251f] flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍚" }), " Étape 1 : Choisissez le format et la base"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#7d8b83]",
											children: "1 choix obligatoire"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-black uppercase tracking-wider text-[#7d8b83] mb-2",
											children: "Taille du Bol en Bambou :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSize("moyen"),
												className: `flex items-center justify-between rounded-2xl p-4 border transition ${size === "moyen" ? "bg-[#10251f] text-white border-[#10251f] shadow-md" : "bg-white text-[#10251f] border-black/10 hover:border-black/25"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-sm font-black",
														children: "Format Moyen"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs ${size === "moyen" ? "text-white/70" : "text-[#7d8b83]"}`,
														children: "Généreux & complet"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-base font-black text-[#d7ff45]",
													children: "10,00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSize("grand"),
												className: `flex items-center justify-between rounded-2xl p-4 border transition ${size === "grand" ? "bg-[#10251f] text-white border-[#10251f] shadow-md" : "bg-white text-[#10251f] border-black/10 hover:border-black/25"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-sm font-black",
														children: "Grand Format"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs ${size === "grand" ? "text-white/70" : "text-[#7d8b83]"}`,
														children: "Maxi faim gourmande"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-base font-black text-[#d7ff45]",
													children: "13,00 €"
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-black uppercase tracking-wider text-[#7d8b83] mb-2",
										children: "Votre base au choix :"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5",
										children: BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setBase(b),
											className: `flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${base.id === b.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: b.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs sm:text-sm font-black text-[#10251f]",
												children: b.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-medium",
												children: b.desc
											})] })]
										}, b.id))
									})
								]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-lg font-black text-[#10251f] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🐟" }), " Étape 2 : Choisissez votre protéine principale"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-[#7d8b83]",
										children: "1 protéine incluse"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: PROTEINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setProteine(p),
										className: `flex items-center justify-between rounded-2xl p-4 border text-left transition ${proteine.id === p.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: p.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs sm:text-sm font-black text-[#10251f]",
												children: p.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-bold",
												children: p.tag
											})] })]
										}), proteine.id === p.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-[#ff705f] shrink-0" })]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-lg font-black text-[#10251f] flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑" }), " Étape 3 : Vos mix-ins frais (5 inclus)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-black/10 text-xs font-black",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: selectedMixins.length > 5 ? "text-[#ea580c]" : "text-[#059669]",
											children: [selectedMixins.length, " sélectionnés"]
										}), selectedMixins.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] text-[#ea580c]",
											children: [
												"(+",
												(selectedMixins.length - 5) * .5,
												" €)"
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
									children: MIXINS.map((m) => {
										const isSelected = selectedMixins.includes(m.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => toggleMixin(m.id),
											className: `flex items-center gap-2 rounded-2xl p-2.5 border text-left transition ${isSelected ? "bg-[#10251f] text-white border-[#10251f] shadow-sm scale-[1.02]" : "bg-white text-[#10251f] border-black/10 hover:border-black/25"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg",
												children: m.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-black truncate",
												children: m.name
											})]
										}, m.id);
									})
								})]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍯" }), " Choisissez votre sauce onctueuse"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5",
										children: SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSauce(s),
											className: `flex items-center gap-2.5 rounded-2xl p-3 border text-left transition ${sauce.id === s.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: s.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#10251f]",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-[#7d8b83] font-medium",
												children: s.desc
											})] })]
										}, s.id))
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧅" }), " Choisissez votre topping croustillant"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
									children: TOPPINGS.map((tp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setTopping(tp),
										className: `flex items-center gap-2 rounded-2xl p-3 border text-left transition ${topping.id === tp.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl",
											children: tp.emoji
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-black text-[#10251f]",
											children: tp.name
										})]
									}, tp.id))
								})] })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between pt-4 border-t border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: activeStep === 1,
								onClick: () => setActiveStep((curr) => Math.max(1, curr - 1)),
								className: `text-xs font-black px-4 py-2 rounded-full transition ${activeStep === 1 ? "opacity-30 cursor-not-allowed text-[#7d8b83]" : "text-[#10251f] hover:bg-black/5"}`,
								children: "← Étape précédente"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveStep((curr) => curr < 4 ? curr + 1 : 1),
								className: "text-xs font-black px-4 py-2 rounded-full bg-[#10251f] text-white hover:bg-[#ff705f] transition",
								children: activeStep < 4 ? `Étape suivante (${activeStep + 1}/4) →` : "Revenir au début"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-white border border-[#e8dfcf] p-6 sm:p-7 shadow-card flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: "🥣"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-black text-[#10251f]",
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
										className: "text-2xl font-black text-[#10251f]",
										children: [totalPrice.toFixed(2), " €"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f4] shadow-md group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeBowlImage,
										alt: "Bol composé Poke N Bowl",
										className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2.5 left-2.5 rounded-full bg-[#10251f]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] border border-white/20 shadow",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.emoji }),
												" ",
												proteine.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold text-[#7d8b83] block mb-1.5",
											children: [
												"Mix-ins frais (",
												selectedMixins.length,
												") :"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: selectedMixins.map((id) => {
												const m = MIXINS.find((mix) => mix.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-lg bg-[#f7f4ec] border border-[#e8dfcf] px-2 py-0.5 text-[10px] font-bold text-[#10251f]",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sauce.emoji }),
												" ",
												sauce.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Topping :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#10251f] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: topping.emoji }),
												" ",
												topping.name
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-2xl bg-[#f7f4ec] p-3 text-[11px] text-[#5a6760] flex items-center gap-2 border border-[#e8dfcf]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: "🌿"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Préparé minute sous vos yeux avec des ingrédients frais du jour à Visé." })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: `w-full flex items-center justify-center gap-2 rounded-2xl py-4 text-xs font-black uppercase tracking-wider shadow-lg transition active:scale-98 ${added ? "bg-[#059669] text-white" : "bg-[#d7ff45] text-[#10251f] hover:bg-[#10251f] hover:text-[#d7ff45]"}`,
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Ajouter mon bowl (",
									totalPrice.toFixed(2),
									" €)"
								] })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sur-mesure",
								className: "mt-2.5 block text-center text-[11px] font-black text-[#7d8b83] hover:text-[#10251f] underline",
								children: "Ouvrir la page configurateur 100% dédiée →"
							})]
						})]
					})]
				})
			]
		})
	});
}
function PokawaPerksBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#10251f] via-[#142d26] to-[#0b1a16] p-7 sm:p-10 lg:p-14 text-white shadow-lift border border-white/10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#d7ff45]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ff705f]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45] backdrop-blur-md border border-white/10",
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
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] text-sm font-black",
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
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45]/20 text-[#d7ff45] text-sm font-black",
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
							className: "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#d7ff45] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95",
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
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
							children: "L’actu sur nos réseaux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: [
								"Partagez vos bowls à Visé en story et taguez ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#10251f]",
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
								className: "font-extrabold text-[#10251f]",
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
						className: "inline-flex items-center gap-2.5 rounded-full border-2 border-[#10251f] bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-soft transition hover:bg-[#10251f] hover:text-white hover:scale-105 active:scale-95",
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
	const items = Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mx-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] sm:text-[11px]",
		children: [
			"Poke N Bowl",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fresh Food Visé",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fait Minute",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Crousty Chicken",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#d7ff45] py-3 text-[#10251f] shadow-inner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 28,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex w-max whitespace-nowrap",
			children: [items, items]
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
		className: "min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaFloatingNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaHeroExact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "composer",
					className: "scroll-mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBowlBuilder, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "valeurs",
					className: "scroll-mt-12 bg-white/70 py-14 sm:py-20 border-b border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaBrandValues, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluidInteractiveMenu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaPerksBanner, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaInstagramWall, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1240px] items-center justify-between gap-5 rounded-[28px] bg-[#d7ff45] p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[34px] sm:p-9 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#36420c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-black text-[#10251f]",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110 shadow-md",
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
									className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm sm:text-base text-[#5a6760] font-medium",
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
										className: "overflow-hidden rounded-[32px] bg-white border border-black/10 shadow-card p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-black/5 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-9 w-9 items-center justify-center rounded-2xl bg-[#10251f] text-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[#d7ff45]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-black text-[#10251f]",
													children: "Horaires d'ouverture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-[#7d8b83]",
													children: "Poke N Bowl Visé · En plein centre"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45]/40 border border-[#b8e612] px-3 py-1 text-[10px] font-black uppercase text-[#10251f]",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Du Lundi au Vendredi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Service midi & soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#10251f]",
															children: "12:00 – 14:00"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#10251f]",
															children: "17:00 – 21:00"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Samedi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Service du soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-[#10251f]",
														children: "18:00 – 21:00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Dimanche"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Fermeture hebdomadaire"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-extrabold text-[#ff705f]",
														children: "Fermé"
													})]
												})
											]
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
				className: "bg-[#081512] px-4 py-10 pb-24 text-white sm:px-6 sm:pb-10 lg:px-8 border-t border-white/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1340px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-5 text-[10px] font-black uppercase tracking-[0.14em] text-white/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-white",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#composer",
									className: "transition hover:text-white",
									children: "Sur-Mesure"
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
							className: "text-[10px] font-bold uppercase tracking-[0.12em] text-white/30",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl Visé · Tous droits réservés"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/commander",
				className: "btn-primary fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 md:hidden shadow-2xl",
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
