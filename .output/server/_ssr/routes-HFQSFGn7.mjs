import { i as __toESM } from "../_runtime.mjs";
import { c as desserts, l as drinks, n as bowls, u as toppingMeta } from "./data-0rV8x1Fg.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-DJzdD15j.mjs";
import { n as useCart } from "./CartContext-v6B2RrbN.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Menu, o as ShoppingBag, p as MapPin, t as X, v as BriefcaseBusiness, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as logo_poke_n_bowl_default, n as CartDrawer, r as DishImage } from "./CartDrawer-B18P274B.mjs";
import { t as dessert_default } from "./dessert-DNrt0Psl.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-HFQSFGn7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_poke_default = "/assets/hero-poke-Dk38LgOY.jpg";
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
var PHONE = "+32491281456";
var HOUR_ROWS = [
	["info.day.mon", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.tue", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.wed", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.thu", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.fri", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.sat", "18:00 – 21:00"],
	["info.day.sun", "closed"]
];
function Reveal({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .1
		},
		transition: {
			duration: .75,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Index() {
	const { t, language, setLanguage } = useTranslation();
	const { scrollY } = useScroll();
	const heroImageY = useTransform(scrollY, [0, 800], [0, 105]);
	const heroContentY = useTransform(scrollY, [0, 800], [0, -34]);
	const { items, setIsCartOpen } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => !b.id.startsWith("crousty-")), ...bowls.filter((b) => b.id.startsWith("crousty-"))];
	const toppingHighlights = [
		"Oignons frits",
		"Sésame seeds",
		"Noix de cajou",
		"Nachos",
		"Flocons-Chili",
		"Wazabi"
	];
	const closeMobile = () => setMobileOpen(false);
	const goHome = () => {
		setMobileOpen(false);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
	};
	import_react.useEffect(() => {
		const previous = window.history.scrollRestoration;
		window.history.scrollRestoration = "manual";
		const reset = () => window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
		reset();
		const frame = window.requestAnimationFrame(reset);
		return () => {
			window.cancelAnimationFrame(frame);
			window.history.scrollRestoration = previous;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-[#f5f6f4] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute inset-x-0 top-0 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: goHome,
							className: "flex min-w-0 shrink-0 items-center gap-2.5",
							"aria-label": "Poke N Bowl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-14 w-[190px] shrink-0 items-center overflow-hidden sm:h-16 sm:w-[220px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_poke_n_bowl_default,
									alt: "Logo Poke N Bowl",
									className: "h-full w-full object-contain object-left drop-shadow-[0_8px_24px_rgba(0,0,0,.28)]"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-7 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "hover:text-[#d7ff45]",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#composer",
									className: "hover:text-[#d7ff45]",
									children: t("nav.create")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#infos",
									className: "hover:text-[#d7ff45]",
									children: t("nav.info")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-[#d7ff45]",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white sm:block",
									children: t("nav.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur md:flex",
									children: [
										"fr",
										"en",
										"nl"
									].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLanguage(lang),
										className: `rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language === lang ? "bg-white text-black" : "text-white/60"}`,
										children: lang
									}, lang))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsCartOpen(true),
									"aria-label": "Cart",
									className: "relative rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
										children: cartCount
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Menu",
									onClick: () => setMobileOpen((o) => !o),
									className: "rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur md:hidden",
									children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							]
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-3 max-h-[calc(100vh-88px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#10251f]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								onClick: closeMobile,
								href: "#carte",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white",
								children: t("nav.menu")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								onClick: closeMobile,
								href: "#composer",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white",
								children: t("nav.create")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								onClick: closeMobile,
								href: "#infos",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white",
								children: t("nav.info")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/contact",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white",
								children: t("nav.contact")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/recrutement",
								className: "rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white",
								children: t("nav.recruit")
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative isolate min-h-[720px] overflow-hidden bg-[#10251f] text-white sm:min-h-[780px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: heroImageY },
							className: "absolute -inset-y-[105px] -z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: hero_poke_default,
								alt: "",
								"aria-hidden": "true",
								className: "h-full w-full object-cover object-center opacity-80 saturate-[1.08]",
								animate: {
									scale: [
										1.02,
										1.08,
										1.02
									],
									x: [
										0,
										-10,
										0
									]
								},
								transition: {
									duration: 18,
									repeat: Infinity,
									ease: "easeInOut"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_42%,rgba(215,255,69,.2),transparent_28%),linear-gradient(110deg,rgba(8,23,19,.96)_0%,rgba(8,23,19,.72)_42%,rgba(8,23,19,.18)_78%,rgba(8,23,19,.52)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,23,19,.94)_0%,rgba(8,23,19,.72)_38%,rgba(8,23,19,.18)_72%,rgba(8,23,19,.42)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_55%,rgba(255,112,95,.18),transparent_25%),radial-gradient(circle_at_28%_45%,rgba(215,255,69,.08),transparent_28%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 pb-12 pt-28 sm:min-h-[780px] sm:px-6 lg:px-10 lg:pt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								style: { y: heroContentY },
								className: "grid w-full items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-black uppercase tracking-[0.34em] text-white/60",
												children: "FRESH FOOD · GOOD MOOD"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45] px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#17231f]",
												children: "80% Poké · 20% Crusty"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-5 max-w-[720px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: logo_poke_n_bowl_default,
												alt: "Poke N Bowl",
												className: "h-auto w-full max-w-[610px] object-contain object-left drop-shadow-[0_14px_30px_rgba(0,0,0,.28)]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-5 block max-w-[560px] break-words font-display text-[clamp(1.05rem,2.6vw,1.8rem)] font-semibold tracking-[-0.015em] text-white/70",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#ff705f]",
													children: "+"
												}), " Crusty Chicken en signature"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg",
											children: "Des poké bowls frais, généreux et colorés. Et pour les plus gourmands, notre Crusty Chicken fait la différence."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/commander",
												className: "inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-7 py-3.5 text-sm font-black shadow-[0_20px_50px_-18px_rgba(255,112,95,.95)] transition hover:-translate-y-0.5 hover:brightness-110",
												children: ["Commander ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#carte",
												className: "inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-black backdrop-blur-md transition hover:bg-white/15",
												children: ["Voir nos plats ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.16em] text-white/65",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦ Ingrédients frais" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡ Recettes maison" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⌁ Livraison rapide" })
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .06,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mx-auto w-full max-w-[760px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-[60px] bg-[#d7ff45]/10 blur-3xl" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative grid items-end gap-3 sm:grid-cols-[1.15fr_.85fr]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/product/$productId",
													params: { productId: "sweet-chicken" },
													className: "group relative overflow-hidden rounded-[34px] border border-white/15 bg-[#eee8dc] shadow-[0_45px_100px_-40px_rgba(0,0,0,.95)]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative aspect-[.88] overflow-hidden",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
																dishId: "sweet-chicken",
																alt: "Sweet Chicken — guacamole, maïs, tomates cerises, mangue, feta, poulet maison, teriyaki, oignons croustillants, sésame et nachos",
																priority: true,
																className: "h-full w-full transition duration-700 group-hover:scale-[1.045]"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.78)_100%)]" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#10251f]",
																children: "Poke N Bowl · Maison"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "absolute bottom-5 left-5 right-5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[9px] font-black uppercase tracking-[0.18em] text-white/65",
																	children: "Le classique généreux"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
																	className: "mt-1 break-words font-script text-3xl font-bold tracking-[-0.02em] sm:text-4xl",
																	children: "Sweet Chicken"
																})]
															})
														]
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														to: "/product/$productId",
														params: { productId: "scampis-royaux" },
														className: "group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "relative aspect-[1.08] overflow-hidden",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
																	dishId: "scampis-royaux",
																	alt: "Scampis Royal — guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, nachos et chili",
																	priority: true,
																	className: "h-full w-full transition duration-700 group-hover:scale-[1.06]"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.72)_100%)]" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "absolute bottom-4 left-4 right-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-[8px] font-black uppercase tracking-[0.15em] text-white/65",
																		children: "Poke N Bowl · Premium"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																		className: "mt-1 break-words font-script text-2xl font-bold tracking-[-0.015em]",
																		children: "Scampis Royal"
																	})]
																})
															]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														to: "/product/$productId",
														params: { productId: "crousty-chicken-curry" },
														className: "group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "relative aspect-[1.08] overflow-hidden",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
																	dishId: "crousty-chicken-curry",
																	alt: "Crusty Chicken Curry — poulet croustillant, riz basmati, sauce curry et oignons frits",
																	priority: true,
																	className: "h-full w-full transition duration-700 group-hover:scale-[1.06]"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,.78)_100%)]" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "absolute bottom-4 left-4 right-4",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																		className: "text-[8px] font-black uppercase tracking-[0.15em] text-white/65",
																		children: "Crusty Chicken · Maison"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																		className: "mt-1 text-xl font-black",
																		children: "Curry croustillant"
																	})]
																})
															]
														})
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 rounded-[22px] border border-white/10 bg-white/[0.08] px-5 py-3 backdrop-blur-md",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[9px] font-black uppercase tracking-[0.18em] text-[#d7ff45]",
														children: "Notre ADN · Poké Bowls d’abord · Crusty Chicken en signature"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-white/60" })]
												})
											})
										]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[8px] font-black uppercase tracking-[0.28em] text-white/55 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir nos plats" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-white/40" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden bg-[#d7ff45] py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { x: ["0%", "-50%"] },
						transition: {
							duration: 24,
							repeat: Infinity,
							ease: "linear"
						},
						className: "flex w-max whitespace-nowrap",
						children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mx-6 text-[9px] font-black uppercase tracking-[0.12em] sm:text-xs",
							children: ["Poke N Bowl · Cuisine fraîche · Visé ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-6",
								children: "✦"
							})]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
								children: t("menu.eyebrow")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 max-w-2xl text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("menu.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[#ff705f]",
									children: "Poké Bowls · nos recettes maison"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-6 text-[#68756f]",
									children: t("menu.desc")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]",
									children: [
										t("menu.order"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})]
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-7 flex flex-wrap gap-2",
							children: toppingHighlights.map((item, i) => {
								const tone = i % 4;
								const meta = toppingMeta[item];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: tone === 0 ? "group inline-flex items-center gap-2 rounded-full border border-[#ff705f]/20 bg-[#fff0ec] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#c94e3f] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" : tone === 1 ? "group inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/60 bg-[#f2ffd0] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#536018] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" : tone === 2 ? "group inline-flex items-center gap-2 rounded-full border border-[#ffb347]/30 bg-[#fff5e5] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#9b5d16] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md" : "group inline-flex items-center gap-2 rounded-full border border-[#35c7b5]/25 bg-[#e9fffb] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#17796e] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base transition group-hover:scale-110",
											"aria-hidden": "true",
											children: meta?.emoji ?? "✦"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white/80 px-2 py-0.5 text-[8px] font-black",
											children: "+€ 0,50"
										})
									]
								}, item);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-[#e7dfd1]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#17231f] px-4 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white",
									children: "Tous nos bowls · toppings disponibles"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-[#e7dfd1]" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-5 max-w-3xl text-sm leading-6 text-[#68756f]",
							children: "Même direction photo sur toute la carte : lumière naturelle maîtrisée, textures réalistes, couleurs franches et présentation premium. Le riz est toujours présenté en grains longs, fins et bien séparés, façon basmati."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: displayedBowls.map((bowl, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: index * .03,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: bowl.id },
									className: `group block h-full overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_-32px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1 ${bowl.id.startsWith("crousty-") ? "ring-2 ring-[#d7ff45] ring-offset-2" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[1.18] overflow-hidden bg-[#ece8dc]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: bowl.id,
												alt: bowl.name,
												className: "h-full w-full transition duration-700 group-hover:scale-[1.04]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_35%,rgba(0,0,0,.5)_100%)]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em]",
												children: bowl.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black",
												children: ["€ ", bowl.price.toFixed(2)]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex h-full flex-col p-5 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "min-w-0 flex-1 break-words font-display text-[18px] font-bold leading-[1.05] tracking-[-0.015em] sm:text-[21px]",
													children: bowl.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f1ea] transition group-hover:bg-[#ff705f] group-hover:text-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 line-clamp-3 text-[13px] leading-5 text-[#68756f]",
												children: bowl.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-4 flex flex-wrap gap-1.5",
												children: bowl.composition.slice(0, 4).map((ingredient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#f4f2eb] px-2.5 py-1 text-[9px] font-bold text-[#66736d]",
													children: ingredient
												}, ingredient))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-auto pt-5 font-display text-[9px] font-semibold uppercase tracking-[0.14em] text-[#ff705f]",
												children: [
													t("menu.customize"),
													" · ",
													t("menu.order"),
													" →"
												]
											})
										]
									})]
								})
							}, bowl.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[linear-gradient(135deg,#fffaf0_0%,#f5f0e7_55%,#fff3ee_100%)] px-5 py-14 text-[#17231f] sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1180px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#ff705f]",
										children: "Poke N Bowl · Maison"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl",
										children: "Le croustillant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-[1.9rem] font-black uppercase leading-none tracking-tight text-[#ff705f] sm:text-4xl lg:text-5xl",
										children: "qui fait la différence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.08em] sm:text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦ Fait maison" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#ff705f]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔥 Ultra croustillant" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#ff705f]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡ Frais" })
										]
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 grid gap-6 md:grid-cols-2",
								children: [{
									id: "crousty-chicken-sauce-blanche",
									name: "Crousty Chicken · Sauce blanche",
									label: "Riz basmati",
									desc: "Riz basmati aux grains longs et séparés, poulet croustillant, sauce blanche maison et oignons frits."
								}, {
									id: "crousty-chicken-curry",
									name: "Crousty Chicken · Curry",
									label: "Riz basmati · curry",
									desc: "Riz au curry onctueux, poulet croustillant, sauce curry maison et oignons frits."
								}].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * .06,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/product/$productId",
										params: { productId: item.id },
										className: "group block overflow-hidden rounded-[30px] border border-[#8d5a18]/15 bg-white shadow-[0_22px_60px_-35px_rgba(55,30,10,.55)] transition duration-300 hover:-translate-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[1.22] overflow-hidden bg-[#eee8dc]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: item.id,
												alt: item.name,
												className: "h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.06]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-x-0 top-0 flex items-center justify-between p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-[#17231f] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white",
													children: item.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white px-3 py-1.5 text-xs font-black",
													children: "11€"
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 text-center sm:p-7",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] font-black uppercase tracking-[0.16em] text-[#ff705f]",
													children: "Crousty Chicken"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl",
													children: item.name.split(" · ")[1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mx-auto mt-3 max-w-md text-sm leading-6 text-[#68756f]",
													children: item.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[#17231f] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#ff705f]",
													children: ["Découvrir le plat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})
											]
										})]
									})
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-3 bg-[#ff705f] px-6 py-3 text-white shadow-lg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-black uppercase tracking-[0.14em]",
												children: "Menu étudiant"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl font-black",
												children: "11€"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-black uppercase tracking-[0.1em]",
												children: "· boisson incluse"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs font-bold text-[#68756f]",
										children: "Sauce extra +1€ · Viens goûter la différence."
									})]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "composer",
					className: "scroll-mt-10 bg-[#17231f] px-5 py-12 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
								children: t("journey.eyebrow")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 max-w-3xl text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("journey.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-white/40",
									children: t("journey.title2")
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									[
										"01",
										"journey.s1",
										"journey.s1d"
									],
									[
										"02",
										"journey.s2",
										"journey.s2d"
									],
									[
										"03",
										"journey.s3",
										"journey.s3d"
									],
									[
										"04",
										"journey.s4",
										"journey.s4d"
									]
								].map(([num, titleKey, descKey], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl font-black text-[#ff705f]",
												children: num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-5 text-lg font-black",
												children: t(titleKey)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-5 text-white/55",
												children: t(descKey)
											})
										]
									})
								}, num))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]",
									children: t("journey.ready")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/55",
									children: t("journey.ready_desc")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3 text-sm font-black",
									children: [
										t("journey.cta"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
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
							className: "rounded-[24px] bg-white p-5 shadow-[0_15px_50px_-35px_rgba(0,0,0,.3)] sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
									children: t("menu.drinks")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-black sm:text-3xl",
									children: t("menu.drinks_title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid gap-2 sm:grid-cols-2",
									children: drinks.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/commander",
										className: "flex items-center justify-between gap-2 rounded-xl bg-[#f5f4ee] px-4 py-3 hover:bg-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 break-words text-sm font-bold",
											children: drink.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "shrink-0 text-xs font-black",
											children: ["€ ", drink.price.toFixed(2)]
										})]
									}, drink.id))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] bg-[#ff705f] p-5 text-white sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-white/70",
									children: t("menu.desserts")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-2xl font-black sm:text-3xl",
									children: t("menu.desserts_title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: dessert_default,
										alt: "",
										loading: "lazy",
										className: "h-20 w-20 shrink-0 rounded-2xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-white/75",
											children: desserts.map((item) => item.name).join(" · ")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/commander",
											className: "mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4",
											children: [t("menu.desserts_cta"), " →"]
										})]
									})]
								})
							]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition hover:-translate-y-1 sm:rounded-[30px] sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-balance text-xl font-black leading-snug sm:text-3xl",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "scroll-mt-10 bg-[#f0f3f1] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
								children: t("info.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 break-words font-display text-[1.7rem] font-bold leading-[1.02] tracking-[-0.02em] sm:text-3xl lg:text-4xl",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "flex min-w-0 items-center gap-4 rounded-2xl bg-white p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]",
											children: t("info.address")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block break-words text-sm font-bold",
											children: "Av. du Pont 12, 4600 Visé, Belgique"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE}`,
									className: "flex items-center gap-4 rounded-2xl bg-white p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
										children: "☎"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]",
										children: t("info.phone")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm font-bold",
										children: "+32 491 28 14 56"
									})] })]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[24px] bg-[#10251f] p-5 text-white sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-black",
										children: t("info.hours")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 divide-y divide-white/10",
										children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3 py-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 font-bold text-white/65",
												children: t(dayKey)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `shrink-0 text-right font-black ${value === "closed" ? "text-[#ff705f]" : ""}`,
												children: value === "closed" ? t("info.closed") : value
											})]
										}, dayKey))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: MAPS_URL,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45]",
										children: [
											t("info.maps"),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_poke_n_bowl_default,
								alt: "Poke N Bowl",
								className: "h-12 w-auto max-w-[220px] object-contain object-left"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-black",
								children: "Poke N Bowl"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] font-bold uppercase tracking-[0.18em] text-white/35",
								children: "Poké Bowls · Crusty Chicken"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/45",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									children: t("nav.order")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									children: t("footer.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[9px] font-bold uppercase tracking-[0.12em] text-white/25",
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
				className: "fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white shadow-xl md:hidden",
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
