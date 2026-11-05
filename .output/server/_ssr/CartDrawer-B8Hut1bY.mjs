import { i as __toESM } from "../_runtime.mjs";
import { a as bowls } from "./data-CpXeHGGg.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-BsLMWOZn.mjs";
import { n as useCart } from "./CartContext-D7fTgwIa.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Clock, Q as ArrowRight, b as Plus, f as ShoppingBag, i as Truck, o as Trash2, t as X, u as Sparkles, w as Minus, z as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartDrawer-B8Hut1bY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, hideCloseButton = false, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [!hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var bowl_sweet_chicken_default = "/assets/bowl-sweet-chicken-T1JJVtIT.jpg";
var bowl_scampis_default = "/assets/bowl-scampis-BPxsXKuI.jpg";
var bowl_saumon_default = "/assets/bowl-saumon-DM6umsVA.jpg";
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-B5NdQDhG.jpg";
var bowl_crousty_curry_default = "/assets/bowl-crousty-curry-DkYcLRjh.jpg";
var bowl_crousty_blanche_default = "/assets/bowl-crousty-blanche-DbHS9siD.jpg";
var bowl_crousty_mix_default = "/assets/bowl-crousty-mix-BNaau8f8.jpg";
var images = {
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
	"crousty-chicken-mix": bowl_crousty_mix_default,
	"crousty-mix": bowl_crousty_mix_default,
	"crousty-chicken-curry": bowl_crousty_curry_default,
	"crousty-curry": bowl_crousty_curry_default,
	"crousty-chicken-sauce-blanche": bowl_crousty_blanche_default,
	"crousty-blanche": bowl_crousty_blanche_default,
	"sur-mesure": bowl_saumon_default
};
function DishImage({ dishId, alt, className = "", priority = false }) {
	const src = images[dishId];
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`,
		children: "Photo produit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className: `h-full w-full object-cover object-center ${className}`,
		loading: priority ? "eager" : "lazy",
		decoding: "async",
		fetchPriority: priority ? "high" : "auto"
	});
}
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
var drink_coca_cola_default = "/assets/drink-coca-cola-CWOKerZY.jpg";
var drink_coca_zero_default = "/assets/drink-coca-zero-eyT1b9_N.jpg";
var drink_fanta_orange_default = "/assets/drink-fanta-orange-PDmbpAsA.jpg";
var drink_ice_tea_default = "/assets/drink-ice-tea-DMtxtUDf.jpg";
var drink_eau_plate_default = "/assets/drink-eau-plate-C5KCvpt5.jpg";
var drink_eau_gazeuse_default = "/assets/drink-eau-gazeuse-6sOWN-TD.jpg";
var CROSS_SELL_ITEMS = [
	{
		id: "tira-spec",
		name: "Tiramisu Spéculoos Maison",
		price: 4,
		emoji: "🧁",
		image: tiramisu_speculoos_default,
		subtitle: "Artisanal · Lotus"
	},
	{
		id: "tira-oreo",
		name: "Tiramisu Oreo Maison",
		price: 4,
		emoji: "🍪",
		image: tiramisu_oreo_default,
		subtitle: "Biscuits Oreo & Mascarpone"
	},
	{
		id: "coca",
		name: "Coca-Cola 33cl",
		price: 2,
		emoji: "🥤",
		image: drink_coca_cola_default,
		subtitle: "Servi givré"
	},
	{
		id: "coca-zero",
		name: "Coca-Cola Zéro 33cl",
		price: 2,
		emoji: "🥤",
		image: drink_coca_zero_default,
		subtitle: "Zéro sucre ultra frais"
	},
	{
		id: "fanta",
		name: "Fanta Orange 33cl",
		price: 2,
		emoji: "🍊",
		image: drink_fanta_orange_default,
		subtitle: "Pétillant à l'orange"
	},
	{
		id: "ice-tea",
		name: "Ice Tea Sparkling 33cl",
		price: 2,
		emoji: "🧊",
		image: drink_ice_tea_default,
		subtitle: "Pétillant bien frais"
	},
	{
		id: "eau-gaz",
		name: "SPA Intense 50cl",
		price: 2,
		emoji: "🫧",
		image: drink_eau_gazeuse_default,
		subtitle: "Eau pétillante"
	},
	{
		id: "eau-plate",
		name: "SPA Reine 50cl",
		price: 2,
		emoji: "💧",
		image: drink_eau_plate_default,
		subtitle: "Eau plate"
	}
];
var FREE_DELIVERY_THRESHOLD = 50;
function CartDrawer() {
	const { isCartOpen, setIsCartOpen, items, updateQuantityByIndex, removeItemByIndex, addItem, total, itemCount } = useCart();
	const { t } = useTranslation();
	const diffToFree = Math.max(0, FREE_DELIVERY_THRESHOLD - total);
	const progressPercent = Math.min(100, Math.round(total / FREE_DELIVERY_THRESHOLD * 100));
	const handleQuickAddCrossSell = (item) => {
		addItem({
			id: item.id,
			name: item.name,
			basePrice: item.price,
			price: item.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isCartOpen,
		onOpenChange: setIsCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			hideCloseButton: true,
			className: "flex h-full max-h-screen w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] flex-col bg-[#FAF7F2] p-0 gap-0 border-l-2 border-[#DECBB3] shadow-2xl overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "shrink-0 border-b border-[#DECBB3] bg-[#FFFDF9] px-5 py-4 sm:px-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C1D16] text-[#EADCC9] shadow-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-[#ff705f]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "text-base font-black text-[#2C1D16] leading-tight",
							children: t("cart.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-bold text-[#8A796E]",
							children: [
								itemCount,
								" ",
								itemCount > 1 ? "articles ajoutés" : "article ajouté"
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsCartOpen(false),
						className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF5EE] text-[#766358] hover:bg-[#2C1D16] hover:text-[#EADCC9] transition cursor-pointer active:scale-90 shadow-2xs border border-[#DECBB3]",
						"aria-label": "Fermer le panier",
						title: "Fermer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}), items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-[#DECBB3]/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs font-bold mb-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), diffToFree === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black text-emerald-700",
								children: "🎉 Livraison offerte à Visé !"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Plus que",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-[#ff705f]",
									children: [diffToFree.toFixed(2), " €"]
								}),
								" ",
								"pour la livraison offerte"
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-black text-[#7a847e]",
							children: [progressPercent, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 w-full overflow-hidden rounded-full bg-[#EADCC9]/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full transition-all duration-500 rounded-full ${diffToFree === 0 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-[#ff705f]"}`,
							style: { width: `${progressPercent}%` }
						})
					})]
				})]
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-5 px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#EFE6D8] border-2 border-[#DECBB3] shadow-card text-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-bounce",
							children: "🥣"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-xs font-black text-white shadow",
							children: "0"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-black text-[#2C1D16]",
							children: "Votre panier est vide"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-[#766358] leading-relaxed",
							children: "Envie d'un Poké frais découpé minute, d'un Crousty Chicken chaud ou de composer votre bowl sur-mesure ?"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						onClick: () => setIsCartOpen(false),
						className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#EADCC9] shadow-md hover:bg-[#ff705f] hover:text-white transition active:scale-95 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir la carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 sm:p-5 flex flex-col gap-3",
				children: [items.map((item, index) => {
					const isBowl = bowls.some((b) => b.id === item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group relative flex flex-col sm:flex-row gap-3.5 rounded-2xl border-2 border-[#DECBB3]/80 bg-[#FFFDF9] p-3.5 sm:p-4 shadow-xs transition hover:border-[#2C1D16]/40 hover:shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 w-full",
							children: [isBowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-[#2C1D16] shadow-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: item.id,
									alt: item.name,
									className: "h-full w-full object-cover"
								})
							}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								className: "h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-xl object-cover shadow-xs"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl bg-[#EFE6D8] text-2xl font-black text-[#2C1D16]",
								children: "🥣"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-between min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-black text-[#2C1D16] leading-tight pr-2",
											children: item.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => removeItemByIndex(index),
											className: "inline-flex items-center gap-1 shrink-0 rounded-full bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-200/80 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-2xs",
											title: "Retirer ce produit du panier",
											"aria-label": `Retirer ${item.name} du panier`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3 stroke-[2.5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Retirer" })]
										})]
									}),
									item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 line-clamp-2 text-[11px] font-semibold text-[#766358] leading-snug",
										children: ["+ ", item.toppings.join(", ")]
									}),
									item.removedIngredients && item.removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 truncate text-[11px] font-bold text-[#e11d48] line-through",
										children: ["✕ ", item.removedIngredients.join(", ")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center justify-between gap-2 pt-2 border-t border-[#DECBB3]/40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-black text-[#2C1D16]",
											children: ["€ ", (item.price * item.quantity).toFixed(2)]
										}), item.quantity > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-1.5 text-[10px] font-bold text-[#8A796E]",
											children: [
												"(",
												item.price.toFixed(2),
												" € / u)"
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 bg-[#FAF7F2] border border-[#DECBB3] rounded-full p-0.5 shadow-2xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": item.quantity === 1 ? "Supprimer l'article" : "Diminuer la quantité",
													onClick: () => updateQuantityByIndex(index, item.quantity - 1),
													className: `flex h-7 w-7 items-center justify-center rounded-full transition cursor-pointer active:scale-90 ${item.quantity === 1 ? "bg-red-50 text-[#e11d48] hover:bg-red-500 hover:text-white" : "bg-[#FFFDF9] text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#EADCC9]"}`,
													title: item.quantity === 1 ? "Supprimer cet article" : "Diminuer la quantité",
													children: item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-5 text-center text-xs font-black text-[#2C1D16]",
													children: item.quantity
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													"aria-label": "Augmenter la quantité",
													onClick: () => updateQuantityByIndex(index, item.quantity + 1),
													className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer active:scale-90 shadow-2xs",
													title: "Ajouter un exemplaire",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
												})
											]
										})]
									})
								]
							})]
						})
					}, `${item.id}-${index}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-2xl bg-white border border-[#DECBB3] p-4 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Envie d'une douceur ou d'une boisson ?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#8A796E]",
							children: "Ajout 1 clic"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2.5 overflow-x-auto no-scrollbar pb-1",
						children: CROSS_SELL_ITEMS.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleQuickAddCrossSell(cs),
							className: "group flex flex-col items-center justify-between rounded-xl bg-[#FAF8F4] border border-[#DECBB3]/70 p-2.5 w-28 shrink-0 text-center transition hover:border-[#ff705f] hover:bg-white hover:scale-[1.02] shadow-2xs cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-12 w-12 overflow-hidden rounded-lg bg-[#eee8dc]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cs.image,
										alt: cs.name,
										className: "h-full w-full object-cover transition group-hover:scale-110"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 text-[10px] font-extrabold leading-tight text-[#17231f] line-clamp-1",
									children: cs.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-[#7a847e]",
									children: cs.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 flex items-center gap-1 rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] group-hover:bg-[#ff705f] group-hover:text-white transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-2.5 w-2.5" }),
										cs.price.toFixed(2),
										" €"
									]
								})
							]
						}, cs.id))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 border-t border-[#DECBB3] bg-[#FFFDF9] px-5 py-4 sm:px-6 shadow-[0_-10px_25px_-10px_rgba(44,29,22,0.06)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between text-[11px] font-semibold text-[#5a6760] bg-[#FAF8F4] px-3 py-1.5 rounded-xl border border-[#DECBB3]/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-emerald-600" }), "Prêt en 15-20 min"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-emerald-600" }), "Fait minute à Visé"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3.5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-[#7a847e]",
							children: "Sous-total commande"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-[#a09a92]",
							children: "TVA incluse"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-black text-[#2C1D16]",
							children: ["€ ", total.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						onClick: () => setIsCartOpen(false),
						className: "flex items-center justify-center gap-2 w-full rounded-full bg-[#2C1D16] hover:bg-[#ff705f] text-[#EADCC9] hover:text-white text-center no-underline py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider transition active:scale-98 shadow-md cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t("cart.checkout"),
							" · € ",
							total.toFixed(2)
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 stroke-[3]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-[10px] font-semibold text-[#a09a92]",
						children: "Paiement sécurisé en ligne ou sur place · Avenue du Pont 12, Visé"
					})
				]
			})] })]
		})
	});
}
//#endregion
export { bowl_crousty_mix_default as a, bowl_sweet_chicken_default as c, drink_eau_gazeuse_default as d, drink_eau_plate_default as f, tiramisu_speculoos_default as g, tiramisu_oreo_default as h, bowl_crousty_curry_default as i, drink_coca_cola_default as l, drink_ice_tea_default as m, DishImage as n, bowl_saumon_default as o, drink_fanta_orange_default as p, bowl_crousty_blanche_default as r, bowl_scampis_default as s, CartDrawer as t, drink_coca_zero_default as u };
