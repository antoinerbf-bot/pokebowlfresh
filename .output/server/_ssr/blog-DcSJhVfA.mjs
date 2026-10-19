import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { K as BookOpen, P as Clock, X as ArrowLeft, Y as ArrowRight, d as ShoppingBag, h as Search, l as Sparkles } from "../_libs/lucide-react.mjs";
import { t as CartDrawer } from "./CartDrawer--vUyBS_x.mjs";
import { t as BLOG_ARTICLES } from "./blogArticles-BE30Y8r4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DcSJhVfA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogHubPage() {
	const { items, setIsCartOpen } = useCart();
	const [selectedCategory, setSelectedCategory] = import_react.useState("Tous");
	const [searchFilter, setSearchFilter] = import_react.useState("");
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const categories = [
		"Tous",
		"Nutrition & Santé",
		"Guides & Visé",
		"Recettes & Savoir-Faire",
		"Tendances Poké"
	];
	const filteredArticles = import_react.useMemo(() => {
		return BLOG_ARTICLES.filter((art) => {
			const matchCat = selectedCategory === "Tous" || art.category === selectedCategory;
			const matchSearch = searchFilter.trim() === "" || art.title.toLowerCase().includes(searchFilter.toLowerCase()) || art.deck.toLowerCase().includes(searchFilter.toLowerCase()) || art.seoKeywords.some((k) => k.toLowerCase().includes(searchFilter.toLowerCase()));
			return matchCat && matchSearch;
		});
	}, [selectedCategory, searchFilter]);
	const featuredArticle = BLOG_ARTICLES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#FAF6F0] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-[#E2D6C5] bg-[#FAF4EB]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3 transition hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " La Carte"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FAF4EB] shadow-sm hover:bg-[#8D522A] transition",
								children: "Commander"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								"aria-label": "Panier",
								className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#2C1D16]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow",
									children: cartCount
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-gradient-to-b from-[#FAF4EB] to-[#FAF6F0] pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E2D6C5]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Le Mag Poké · Inspirations & Bien-Manger"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2C1D16] leading-tight",
								children: "Manger sain, vivre gourmand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm sm:text-base text-[#766358] font-medium leading-relaxed max-w-2xl mx-auto",
								children: "Retrouvez nos guides nutritionnels, les secrets de fabrication de nos bols frais du jour à Visé, et nos conseils pour équilibrer vos repas sans aucune frustration."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 max-w-md mx-auto relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#766358]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Rechercher un sujet (ex: saumon, calories, chirashi, visé)...",
									value: searchFilter,
									onChange: (e) => setSearchFilter(e.target.value),
									className: "w-full rounded-full border border-[#D9C5AD] bg-white py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-[#2C1D16] placeholder-[#A49286] focus:border-[#ff705f] focus:outline-none focus:ring-2 focus:ring-[#ff705f]/20 shadow-sm"
								})]
							})
						]
					})
				})
			}),
			selectedCategory === "Tous" && searchFilter === "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/blog/$slug",
					params: { slug: featuredArticle.slug },
					className: "group block overflow-hidden rounded-[32px] border border-[#E2D6C5] bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 items-stretch",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-[280px] sm:min-h-[380px] lg:col-span-7 overflow-hidden bg-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: featuredArticle.image,
								alt: featuredArticle.title,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 z-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#2C1D16] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] shadow-md",
									children: "★ À la Une"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-white to-[#FAF6F0]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs font-bold text-[#766358]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-[#EADCC9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#2C1D16]",
										children: featuredArticle.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#ff705f]" }), featuredArticle.readTime]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 text-2xl sm:text-3xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition leading-snug",
									children: featuredArticle.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs sm:text-sm text-[#766358] font-medium leading-relaxed line-clamp-3",
									children: featuredArticle.deck
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 pt-5 border-t border-[#E2D6C5] flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-[#2C1D16]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Par ", featuredArticle.author.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-[10px] text-[#766358] font-normal",
										children: ["Publié le ", featuredArticle.date]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition",
									children: ["Lire l'article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
					children: categories.map((cat) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedCategory(cat),
							className: `rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${selectedCategory === cat ? "bg-[#2C1D16] text-[#FAF4EB] shadow-md" : "bg-[#F3ECE1] text-[#766358] hover:bg-[#EADCC9] hover:text-[#2C1D16] border border-[#E2D6C5]"}`,
							children: cat
						}, cat);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
				children: filteredArticles.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-16 bg-white rounded-3xl border border-[#E2D6C5] p-8 max-w-md mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-10 w-10 text-[#A49286] mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg font-bold text-[#2C1D16]",
							children: "Aucun article ne correspond à votre recherche"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[#766358]",
							children: "Essayez un autre mot-clé ou réinitialisez les filtres."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setSelectedCategory("Tous");
								setSearchFilter("");
							},
							className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-bold text-white hover:bg-[#8D522A]",
							children: "Réinitialiser"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredArticles.map((art) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: art.slug },
						className: "group flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#E2D6C5] bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-52 sm:h-60 w-full overflow-hidden bg-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: art.image,
								alt: art.title,
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 left-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#FAF4EB]/95 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD] shadow-sm",
									children: art.category
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 sm:p-6",
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
							className: "px-5 sm:px-6 pb-5 pt-3 border-t border-[#E2D6C5]/60 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] font-bold text-[#2C1D16]",
								children: ["Par ", art.author.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition",
								children: "Lire →"
							})]
						})]
					}, art.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[34px] bg-[#2C1D16] text-[#FAF4EB] p-8 sm:p-12 relative shadow-lift border border-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#2C1D16]",
								children: "🥢 Passez à la pratique"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl sm:text-4xl font-black tracking-tight text-white",
								children: "Une envie de Poké frais à Visé ?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs sm:text-sm text-[#EADCC9]/80 font-medium leading-relaxed",
								children: "Commandez votre bowl favori en 3 clics ou composez votre recette personnalisée avec notre sélection de saumon découpé minute, scampis grillés et légumes de saison."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-md hover:bg-white hover:scale-105 transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander maintenant" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sur-mesure",
									className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition border border-white/20",
									children: "Composer son bowl"
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#1C120C] px-4 py-12 text-[#EADCC9] sm:px-6 lg:px-8 border-t border-[#352117]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-xs font-bold text-[#EADCC9]/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-white transition",
									children: "La Carte"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									className: "hover:text-white transition",
									children: "Commander"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "hover:text-white text-[#ff705f] transition",
									children: "Le Mag Poké"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-white transition",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hover:text-white transition",
									children: "Recrutement"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[11px] text-[#EADCC9]/40",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl Visé · Tous droits réservés"
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { BlogHubPage as component };
