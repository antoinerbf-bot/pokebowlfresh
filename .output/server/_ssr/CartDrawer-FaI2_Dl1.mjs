import { i as __toESM } from "../_runtime.mjs";
import { a as bowls } from "./data-CG1MxHsK.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTranslation } from "./I18nContext-DIxAve94.mjs";
import { n as useCart } from "./CartContext-C3Z6ywuE.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Clock, R as CircleCheck, Z as ArrowRight, b as Plus, f as ShoppingBag, i as Truck, o as Trash2, t as X, u as Sparkles, w as Minus } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartDrawer-FaI2_Dl1.js
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
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
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
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
var bowl_sweet_chicken_default = "/assets/bowl-sweet-chicken-T1JJVtIT.jpg";
var bowl_scampis_default = "/assets/bowl-scampis-BPxsXKuI.jpg";
var bowl_saumon_default = "/assets/bowl-saumon-DM6umsVA.jpg";
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-B5NdQDhG.jpg";
var bowl_crousty_curry_default = "/assets/hero-crousty-wide-DkYcLRjh.jpg";
var bowl_crousty_blanche_default = "/assets/bowl-crousty-blanche-DbHS9siD.jpg";
var images = {
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
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
	const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, addItem, total } = useCart();
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
			className: "flex w-full flex-col bg-[#f7f4ec] p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "border-b border-black/5 bg-white px-6 py-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
						className: "flex items-center gap-2 text-base font-black text-[#17231f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-[#ff705f]" }), t("cart.title")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9]",
						children: [
							items.reduce((s, i) => s + i.quantity, 0),
							" ",
							items.length > 1 ? "articles" : "article"
						]
					})]
				}), items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-black/5",
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
						className: "h-2 w-full overflow-hidden rounded-full bg-black/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full transition-all duration-500 rounded-full ${diffToFree === 0 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-[#ff705f]"}`,
							style: { width: `${progressPercent}%` }
						})
					})]
				})]
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card text-4xl",
						children: "🥣"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-black text-[#17231f]",
						children: "Ton panier est vide"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-[#7a847e]",
						children: t("cart.empty")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsCartOpen(false),
						className: "btn-primary mt-2",
						type: "button",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							children: t("cart.empty_cta")
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col divide-y divide-black/5 px-6",
					children: items.map((item) => {
						const isBowl = bowls.some((b) => b.id === item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 py-4",
							children: [isBowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: item.id,
									alt: item.name,
									className: "h-full w-full object-cover"
								})
							}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								className: "h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 shrink-0 rounded-2xl bg-[#ece8dc]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-between min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "truncate text-sm font-black text-[#17231f]",
										children: item.name
									}),
									item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 truncate text-[11px] text-[#7a847e]",
										children: ["+ ", item.toppings.join(", ")]
									}),
									item.removedIngredients && item.removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 truncate text-[11px] text-[#ff705f] line-through decoration-[#ff705f]/50",
										children: ["✕ ", item.removedIngredients.join(", ")]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-black text-[#17231f]",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Diminuer",
												onClick: () => updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity - 1),
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm",
												children: item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-5 text-center text-sm font-black",
												children: item.quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Augmenter",
												onClick: () => updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity + 1),
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
											})
										]
									})]
								})]
							})]
						}, `${item.id}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-6 my-4 rounded-2xl bg-white border border-black/5 p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Envie d'une douceur ou d'une boisson ?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#7a847e]",
							children: "1 clic"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2.5 overflow-x-auto no-scrollbar pb-1",
						children: CROSS_SELL_ITEMS.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleQuickAddCrossSell(cs),
							className: "group flex flex-col items-center justify-between rounded-xl bg-[#faf8f4] border border-black/5 p-2 w-28 shrink-0 text-center transition hover:border-[#ff705f] hover:bg-white hover:scale-[1.02] shadow-sm",
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
				className: "border-t border-black/5 bg-white px-6 pb-safe pt-4 shadow-[0_-12px_30px_-15px_rgba(0,0,0,.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between text-[11px] font-semibold text-[#5a6760] bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-emerald-600" }), "Prêt en 15-20 min"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-emerald-600" }), "Fait minute à Visé"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-[#7a847e]",
							children: "Sous-total commande"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-[#a09a92]",
							children: "TVA incluse"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-black text-[#17231f]",
							children: ["€ ", total.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						onClick: () => setIsCartOpen(false),
						className: "btn-primary flex items-center justify-center gap-2 w-full text-center no-underline py-4 text-sm font-black uppercase tracking-wider shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("cart.checkout") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-center text-[10px] font-semibold text-[#a09a92]",
						children: "Paiement sécurisé en ligne ou sur place · Avenue du Pont 12, Visé"
					})
				]
			})] })]
		})
	});
}
//#endregion
export { bowl_scampis_default as a, drink_coca_zero_default as c, drink_fanta_orange_default as d, drink_ice_tea_default as f, bowl_saumon_default as i, drink_eau_gazeuse_default as l, tiramisu_speculoos_default as m, DishImage as n, bowl_sweet_chicken_default as o, tiramisu_oreo_default as p, bowl_crousty_curry_default as r, drink_coca_cola_default as s, CartDrawer as t, drink_eau_plate_default as u };
