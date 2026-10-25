import { r as __toESM } from "./_runtime.mjs";
import { r as bowls } from "./_ssr/data-C6E8j-go.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./_ssr/CartContext-BoTWTco9.mjs";
import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./_ssr/BrandLogo-f92236nt.mjs";
import { P as Clock, U as Check, W as Calendar, X as ArrowLeft, d as ShoppingBag, m as Share2, v as Plus, z as ChevronRight } from "./_libs/lucide-react.mjs";
import { t as CartDrawer } from "./_ssr/CartDrawer-mRmW0_pA.mjs";
import { t as BLOG_ARTICLES } from "./_ssr/blogArticles-DCjyMFYL.mjs";
import { t as Route } from "./_slug-Bgzgrkoi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-8_00b1t0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogArticlePage() {
	const { article } = Route.useLoaderData();
	const { items, addItem, setIsCartOpen } = useCart();
	const [copiedLink, setCopiedLink] = import_react.useState(false);
	const [addedNotice, setAddedNotice] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const relatedArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
	import_react.useMemo(() => {
		if (!article.recommendedDish) return null;
		return bowls.find((b) => b.id === article.recommendedDish?.id) || null;
	}, [article.recommendedDish]);
	const handleCopyShare = () => {
		if (typeof window !== "undefined") {
			navigator.clipboard.writeText(window.location.href);
			setCopiedLink(true);
			setTimeout(() => setCopiedLink(false), 2e3);
		}
	};
	const handleQuickAddRecommended = () => {
		if (!article.recommendedDish) return;
		addItem({
			id: `${article.recommendedDish.id}-blog`,
			name: article.recommendedDish.name,
			basePrice: article.recommendedDish.price,
			price: article.recommendedDish.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: article.image
		});
		setAddedNotice(true);
		setTimeout(() => setAddedNotice(false), 2e3);
		setIsCartOpen(true);
	};
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
								to: "/blog",
								className: "inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Le Mag Poké"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FAF4EB] shadow-sm hover:bg-[#8D522A] transition",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-[#E2D6C5]/60 bg-[#FAF4EB]/50 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl px-4 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-2 text-[11px] font-semibold text-[#766358]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[#2C1D16] transition",
								children: "Accueil"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "hover:text-[#2C1D16] transition",
								children: "Le Mag Poké"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#2C1D16] font-bold truncate max-w-[220px] sm:max-w-none",
								children: article.title
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-[#EADCC9] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD]",
										children: article.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-bold text-[#766358]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#ff705f]" }), article.readTime]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#A49286]",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-bold text-[#766358]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-[#766358]" }), article.date]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16] leading-tight",
								children: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base sm:text-lg font-medium text-[#766358] leading-relaxed border-l-4 border-[#ff705f] pl-4 py-1 italic bg-[#F3ECE1]/40 rounded-r-2xl",
								children: article.deck
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-y border-[#E2D6C5] py-4 my-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#2C1D16] text-white font-black text-sm shadow-sm",
										children: "🥗"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-black text-[#2C1D16]",
										children: article.author.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] text-[#766358] font-medium",
										children: article.author.role
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleCopyShare,
									className: "inline-flex items-center gap-1.5 rounded-full border border-[#D9C5AD] bg-white px-3.5 py-1.5 text-xs font-bold text-[#2C1D16] hover:bg-[#F3ECE1] transition shadow-sm",
									children: copiedLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-600 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lien copié !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5 text-[#766358]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Partager" })] })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-8 overflow-hidden rounded-[32px] border border-[#E2D6C5] shadow-lift bg-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: article.image,
							alt: article.title,
							className: "w-full h-auto max-h-[500px] object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-[#FAF4EB] p-3 text-center text-[11px] font-medium text-[#766358] border-t border-[#E2D6C5]",
							children: "Préparation minute dans notre restaurant Poke N Bowl à Visé · Saumon noble et ingrédients frais."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-lg max-w-none text-[#2C1D16]\n              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#2C1D16]\n              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4\n              prose-p:text-[#4A3B32] prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg\n              prose-ul:my-6 prose-li:my-2 prose-li:text-[#4A3B32]\n              prose-blockquote:border-l-4 prose-blockquote:border-[#ff705f] prose-blockquote:bg-[#FFF7EC] prose-blockquote:p-4 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-[#2C1D16]\n              prose-strong:text-[#2C1D16] prose-strong:font-black",
						dangerouslySetInnerHTML: { __html: article.contentHtml }
					}),
					article.recommendedDish && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-12 overflow-hidden rounded-[28px] border-2 border-[#ff705f]/30 bg-gradient-to-br from-[#FFF7EC] to-[#FAF4EB] p-6 sm:p-8 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff705f] text-white text-2xl shadow-md",
									children: "🥢"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-[#ff705f]/15 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
										children: article.recommendedDish.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-xl font-black text-[#2C1D16]",
										children: article.recommendedDish.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#766358] font-medium",
										children: "Disponible dès maintenant en retrait express ou livraison à Visé."
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xl font-black text-[#2C1D16]",
									children: [article.recommendedDish.price.toFixed(2), " €"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleQuickAddRecommended,
									className: "group inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-5 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-[#8D522A] hover:scale-105 transition shadow-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander ce bol" })]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 pt-6 border-t border-[#E2D6C5]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-[#766358] uppercase tracking-wider block mb-2",
							children: "Thématiques abordées :"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: article.seoKeywords.map((kw) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-[#F3ECE1] border border-[#E2D6C5] px-3 py-1 text-[11px] font-semibold text-[#766358]",
								children: ["#", kw]
							}, kw))
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16 pt-12 border-t border-[#E2D6C5]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black text-[#2C1D16]",
							children: "À lire également sur Le Mag Poké"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "text-xs font-black uppercase tracking-wider text-[#ff705f] hover:underline",
							children: "Tous les articles →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-3",
						children: relatedArticles.map((rel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: rel.slug },
							className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2D6C5] bg-white shadow-sm hover:shadow-md transition hover:-translate-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-36 w-full overflow-hidden bg-black/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: rel.image,
									alt: rel.title,
									className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-bold text-[#766358]",
									children: [
										rel.category,
										" · ",
										rel.readTime
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-sm font-black text-[#2C1D16] group-hover:text-[#ff705f] transition line-clamp-2",
									children: rel.title
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-4 pb-4 pt-1 text-[11px] font-bold text-[#ff705f]",
								children: "Lire →"
							})]
						}, rel.slug))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#1C120C] px-4 py-12 text-[#EADCC9] sm:px-6 lg:px-8 border-t border-[#352117] mt-16",
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
export { BlogArticlePage as component };
