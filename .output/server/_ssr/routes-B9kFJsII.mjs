import { i as __toESM } from "../_runtime.mjs";
import { c as desserts, l as drinks, n as bowls } from "./data-Cqojtvnm.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-D9PoE_P1.mjs";
import { n as useCart } from "./CartContext-v6B2RrbN.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as logo_default } from "./logo-C4WRcUkf.mjs";
import { b as ArrowRight, f as Menu, o as ShoppingBag, p as MapPin, t as X, y as BriefcaseBusiness } from "../_libs/lucide-react.mjs";
import { n as CartDrawer, r as DishImage } from "./CartDrawer-DQNXeaNT.mjs";
import { t as dessert_default } from "./dessert-DNrt0Psl.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9kFJsII.js
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
			y: 18
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
			duration: .5,
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
	const { items, setIsCartOpen } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => b.id.startsWith("crousty-")), ...bowls.filter((b) => !b.id.startsWith("crousty-"))];
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
		className: "min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute inset-x-0 top-0 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							onClick: goHome,
							className: "flex min-w-0 shrink-0 items-center gap-2.5",
							"aria-label": "Poke N Bowl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,.25)] sm:h-14 sm:w-14",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Logo Poke N Bowl",
									className: "h-full w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block truncate text-[15px] font-black leading-none tracking-tight sm:text-lg",
									children: "Poke N Bowl"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block truncate text-[7px] font-bold uppercase tracking-[0.18em] text-white/65 sm:text-[8px]",
									children: "Visé · Fresh food"
								})]
							})]
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
					className: "relative isolate overflow-hidden bg-[#071713] text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_poke_default,
								alt: "",
								"aria-hidden": "true",
								className: "h-full w-full object-cover object-center opacity-30"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(215,255,69,.13),transparent_28%),linear-gradient(90deg,#071713_0%,rgba(7,23,19,.96)_48%,rgba(7,23,19,.78)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-8 px-5 pb-10 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#d7ff45]" }), "Crousty Chicken · best-seller"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45",
										children: t("hero.location")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 font-sans text-[2.25rem] font-black leading-[.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: t("hero.title1")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block text-[#d7ff45]",
											children: t("hero.title2")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-md text-sm leading-6 text-white/70 sm:text-base",
										children: t("hero.desc")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-7 flex flex-col gap-2.5 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/commander",
											className: "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-7 text-sm font-black shadow-[0_18px_45px_-16px_rgba(255,112,95,.9)] transition hover:brightness-110",
											children: [
												t("hero.order"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#carte",
											className: "inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold backdrop-blur-sm transition hover:bg-white/10",
											children: t("hero.menu")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35",
										children: [
											t("hero.recipes"),
											" · ",
											t("hero.from"),
											" · ",
											t("hero.city")
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 rounded-[50px] bg-[#d7ff45]/5 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative grid gap-3 sm:grid-cols-[1.12fr_.88fr] sm:items-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: "crousty-chicken-curry" },
											className: "group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#f7f4ec] shadow-[0_35px_90px_-35px_rgba(0,0,0,.95)] transition duration-500 hover:-translate-y-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-[.9] overflow-hidden sm:aspect-[.82]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
														dishId: "crousty-chicken-curry",
														alt: t("feature.curry"),
														className: "h-full w-full scale-[1.02] transition duration-700 group-hover:scale-[1.08]"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.03)_30%,rgba(0,0,0,.78)_100%)]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute left-4 top-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#10251f]",
														children: "11€ · menu étudiant"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute bottom-5 left-5 right-5 text-white",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[9px] font-black uppercase tracking-[0.16em] text-white/65",
																children: "Signature · Crousty Chicken"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
																className: "mt-1 text-3xl font-black leading-none tracking-tight sm:text-4xl",
																children: t("feature.curry")
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 max-w-xs text-xs leading-5 text-white/75",
																children: t("feature.curry_desc")
															})
														]
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$productId",
												params: { productId: "crousty-chicken-sauce-blanche" },
												className: "group overflow-hidden rounded-[26px] border border-white/10 bg-[#f7f4ec] shadow-[0_25px_65px_-30px_rgba(0,0,0,.9)] transition duration-500 hover:-translate-y-1",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative aspect-[1.18] overflow-hidden",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
															dishId: "crousty-chicken-sauce-blanche",
															alt: t("feature.white"),
															className: "h-full w-full transition duration-700 group-hover:scale-[1.08]"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.72)_100%)]" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "absolute bottom-4 left-4 right-4 text-white",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[8px] font-black uppercase tracking-[0.14em] text-white/65",
																children: "Signature"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "mt-1 text-xl font-black leading-none",
																children: t("feature.white")
															})]
														})
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[24px] border border-[#d7ff45]/15 bg-white/[0.05] p-4 backdrop-blur-sm sm:p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[8px] font-black uppercase tracking-[0.16em] text-[#d7ff45]",
														children: "Crousty Mix"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm font-black text-white",
														children: "Curry + Sauce blanche"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-[11px] leading-5 text-white/45",
													children: t("feature.hero_hint")
												})]
											})]
										})]
									})]
								})
							})]
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
							children: ["Poke N Bowl · Fresh food · Visé ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-6",
								children: "✦"
							})]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[#ead9bb] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1180px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#8f5b12]",
										children: "Poke N Bowl · Signature"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl",
										children: "Le croustillant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-[1.9rem] font-black uppercase leading-none tracking-tight text-[#a96b0d] sm:text-4xl lg:text-5xl",
										children: "qui fait la différence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.08em] sm:text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦ Fait maison" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#a96b0d]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔥 Ultra croustillant" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#a96b0d]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡ Healthy" })
										]
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 grid gap-6 md:grid-cols-2",
								children: [{
									id: "crousty-chicken-sauce-blanche",
									name: "Crousty Chicken · Sauce blanche",
									label: "Riz jasmin",
									desc: "Riz jasmin parfumé, poulet croustillant, sauce blanche maison et oignons frits."
								}, {
									id: "crousty-chicken-curry",
									name: "Crousty Chicken · Curry",
									label: "Riz curry",
									desc: "Riz au curry onctueux, poulet croustillant, sauce curry maison et oignons frits."
								}].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * .06,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/product/$productId",
										params: { productId: item.id },
										className: "group block overflow-hidden rounded-[30px] border border-[#8d5a18]/15 bg-[#f8f0df] shadow-[0_22px_60px_-35px_rgba(55,30,10,.55)] transition duration-300 hover:-translate-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[1.22] overflow-hidden bg-[#e7d4b4]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: item.id,
												alt: item.name,
												className: "h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.06]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-x-0 top-0 flex items-center justify-between p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "bg-[#8b5510] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white",
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
													className: "text-[10px] font-black uppercase tracking-[0.16em] text-[#a96b0d]",
													children: "Crousty Chicken"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl",
													children: item.name.split(" · ")[1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mx-auto mt-3 max-w-md text-sm leading-6 text-[#6e6255]",
													children: item.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[#241a12] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#a96b0d]",
													children: ["Découvrir la recette ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
										className: "inline-flex items-center gap-3 bg-[#a96b0d] px-6 py-3 text-white shadow-lg",
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
										className: "mt-3 text-xs font-bold text-[#6e6255]",
										children: "Sauce extra +1€ · Viens goûter la différence."
									})]
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 mx-auto max-w-[1320px] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
								className: "mt-0.5 block text-[#7d8b83]",
								children: t("menu.title2")
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
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
												className: "min-w-0 flex-1 break-words text-[16px] font-black leading-tight sm:text-xl",
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
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto pt-5 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff705f]",
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
					})]
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
					className: "scroll-mt-10 bg-[#ece9df] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
								children: t("info.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
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
								src: logo_default,
								alt: "Poke N Bowl",
								className: "h-11 w-auto max-w-[170px] object-contain object-left"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-black",
								children: "Poke N Bowl"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] font-bold uppercase tracking-[0.18em] text-white/35",
								children: "Visé · Fresh food"
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
