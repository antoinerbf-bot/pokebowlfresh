import { i as __toESM } from "../_runtime.mjs";
import { n as bowls } from "./data-0rV8x1Fg.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-DJzdD15j.mjs";
import { n as useCart } from "./CartContext-v6B2RrbN.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Menu, o as ShoppingBag, t as X, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as logo_poke_n_bowl_default, n as CartDrawer, r as DishImage } from "./CartDrawer-jcLDvjhu.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bs_z561_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function Index() {
	const { t, language, setLanguage } = useTranslation();
	const { scrollY } = useScroll();
	useTransform(scrollY, [0, 800], [0, 105]);
	useTransform(scrollY, [0, 800], [0, -34]);
	const { items, setIsCartOpen } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => !b.id.startsWith("crousty-")), ...bowls.filter((b) => b.id.startsWith("crousty-"))];
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute inset-x-0 top-0 z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
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
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative isolate min-h-[720px] overflow-hidden bg-[#10251f] text-white sm:min-h-[780px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 pb-12 pt-28 sm:min-h-[780px] sm:px-6 lg:px-10 lg:pt-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
											className: "h-auto w-full max-w-[610px] object-contain object-left"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-5 block font-display text-[clamp(1.05rem,2.6vw,1.8rem)] font-semibold text-white/70",
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
											className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-7 py-3.5 text-sm font-black",
											children: ["Commander ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#carte",
											className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-black",
											children: "Voir nos plats"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto w-full max-w-[760px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid items-end gap-3 sm:grid-cols-[1.15fr_.85fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$productId",
										params: { productId: "sweet-chicken" },
										className: "group relative overflow-hidden rounded-[34px] border border-white/15 bg-[#eee8dc]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-square overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
													dishId: "sweet-chicken",
													alt: "Sweet Chicken",
													priority: true,
													className: "h-full w-full"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.78)_100%)]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute bottom-5 left-5 right-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[9px] font-black uppercase tracking-[0.18em] text-white/65",
														children: "Le classique généreux"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
														className: "mt-1 font-display text-3xl font-bold sm:text-4xl",
														children: "Sweet Chicken"
													})]
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: "crousty-chicken-curry" },
											className: "group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-[1.08] overflow-hidden",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
														dishId: "crousty-chicken-curry",
														alt: "Crusty Chicken",
														priority: true,
														className: "h-full w-full"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,.78)_100%)]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute bottom-4 left-4 right-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[8px] font-black uppercase tracking-[0.15em] text-white/65",
															children: "Krusty Chicken"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "mt-1 text-xl font-black",
															children: "Curry croustillant"
														})]
													})
												]
											})
										})
									})]
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "overflow-hidden bg-[#d7ff45] py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative overflow-hidden bg-[#0b1a16] px-5 py-16 text-white sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-[1200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]",
										children: "Les signatures"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "mt-3 font-display text-3xl font-black sm:text-4xl lg:text-5xl",
										children: [
											"Poké Bowls ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#ff705f]",
												children: "+"
											}),
											" Krusty Chicken"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-xl text-base leading-7 text-white/70",
										children: "Deux univers, une seule exigence : des produits frais, généreux et qui donnent vraiment envie de commander."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: "sweet-chicken" },
									className: "group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[5/4] overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: "sweet-chicken",
												alt: "Sweet Chicken",
												className: "h-full w-full transition duration-700 group-hover:scale-[1.04]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#d7ff45] px-3 py-1.5 text-[9px] font-black uppercase text-[#10251f]",
													children: "Poké Bowl"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-5 left-5 right-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl font-bold text-white sm:text-3xl",
													children: "Sweet Chicken"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-white/75",
													children: "Le classique généreux · 10 €"
												})]
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: "crousty-chicken-curry" },
									className: "group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[5/4] overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: "crousty-chicken-curry",
												alt: "Krusty Chicken",
												className: "h-full w-full transition duration-700 group-hover:scale-[1.04]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-5 top-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#ff705f] px-3 py-1.5 text-[9px] font-black uppercase text-white",
													children: "Krusty Chicken"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute bottom-5 left-5 right-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl font-bold text-white sm:text-3xl",
													children: "Curry croustillant"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-white/75",
													children: "Ultra croustillant · 11 €"
												})]
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f] px-8 py-4 text-sm font-black",
									children: ["Voir toute la carte ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 bg-white px-5 py-14 sm:px-6 sm:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
							children: t("menu.eyebrow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-[1.625rem] font-black sm:text-3xl lg:text-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: t("menu.title1")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[#ff705f]",
								children: "Poké Bowls · nos recettes maison"
							})]
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: displayedBowls.map((bowl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/product/$productId",
							params: { productId: bowl.id },
							className: "group overflow-hidden rounded-[24px] border border-[#e8ebe6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[4/3] overflow-hidden bg-[#f4f1e9]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: bowl.id,
									alt: bowl.name,
									className: "h-full w-full transition duration-500 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-black uppercase tracking-[0.12em] text-[#ff705f]",
										children: bowl.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-bold",
										children: bowl.name
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 font-black",
										children: ["€ ", bowl.price.toFixed(2)]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 text-sm text-[#68756f]",
									children: bowl.desc
								})]
							})]
						}, bowl.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "bg-[#f5f6f4] px-5 py-14 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px] grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] bg-white p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-black",
									children: "Passe nous voir à Visé"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-[#68756f]",
									children: "Avenue du Pont 12, 4600 Visé"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]",
									children: ["Google Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] bg-[#10251f] p-5 text-white sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-black",
								children: t("info.hours")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 divide-y divide-white/10",
								children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 py-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-white/65",
										children: t(dayKey)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-black ${value === "closed" ? "text-[#ff705f]" : ""}`,
										children: value === "closed" ? t("info.closed") : value
									})]
								}, dayKey))
							})]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#0b1a16] px-5 py-8 text-white sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-black",
						children: "Poke N Bowl · Poké Bowls · Crusty Chicken"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[9px] font-bold uppercase tracking-[0.12em] text-white/25",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Poke N Bowl"
						]
					})]
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
