import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-BCQM-qk1.mjs";
import { _ as CreditCard, g as LoaderCircle, i as Store, v as Clock, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as getOrderStatus } from "./checkout-CS1MY3WN.mjs";
import { t as Route } from "./order.success-WmDUOy1u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order.success-W29EaDLI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderSuccessPage() {
	const { orderId, method } = Route.useSearch();
	const { clearCart } = useCart();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [order, setOrder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!orderId) {
			setLoading(false);
			return;
		}
		let cancelled = false;
		let attempts = 0;
		const poll = async () => {
			try {
				const res = await getOrderStatus({ data: { orderId } });
				if (!cancelled && res.found) {
					setOrder(res.order);
					if (res.order.status === "paid" || res.order.paymentMethod === "on_site") clearCart();
					if (res.order.status !== "pending_payment") {
						setLoading(false);
						return;
					}
				}
			} catch (e) {
				console.error(e);
			}
			if (!cancelled && attempts < 20) {
				attempts += 1;
				window.setTimeout(poll, 3e3);
			} else if (!cancelled) setLoading(false);
		};
		poll();
		return () => {
			cancelled = true;
		};
	}, [orderId, clearCart]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#ff705f]" })
	});
	const isPaid = order?.status === "paid";
	const isOnSite = order?.paymentMethod === "on_site" || method === "on_site";
	const isPending = order?.status === "pending_payment";
	const isFailed = order?.status === "cancelled" || order?.status === "expired";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-black/5 bg-[#f7f4ec]/90",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-[700px] items-center px-5 py-3 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-[700px] px-5 py-12 sm:px-8",
			children: !orderId || !order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-black",
					children: "Commande introuvable"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/commander",
					className: "mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
					children: "Retour à la carte"
				})]
			}) : isFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 text-center shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black",
						children: "Paiement non finalisé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[#758079]",
						children: "Le paiement a été annulé ou a expiré. Tu peux réessayer depuis le panier."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
						children: "Réessayer"
					})
				]
			}) : isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 text-center shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-12 w-12 text-[#ff705f]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl font-black",
						children: "Paiement en cours…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[#758079]",
						children: "Si tu as payé, cette page se mettra à jour. Sinon, retourne sur Mollie ou choisis « Payer sur place »."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-sm font-bold",
						children: order.id
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-14 w-14 text-[#d7ff45]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-3xl font-black sm:text-4xl",
								children: isPaid ? "Commande payée !" : "Commande confirmée !"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[#758079]",
								children: [
									"Merci ",
									order.customer.name,
									".",
									" ",
									order.customer.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"On prépare ta commande pour la livraison à ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: order.customer.requestedTime }),
										"."
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"On prépare ton bowl pour ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: order.customer.requestedTime }),
										"."
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-full bg-[#f7f4ec] px-4 py-2 font-mono text-sm font-black",
								children: order.id
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3 border-t border-black/5 pt-6",
						children: [
							order.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#f7f4ec] p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Livraison" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[#758079]",
										children: order.customer.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[#758079]",
										children: [
											order.customer.postalCode,
											" ",
											order.customer.city
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 font-bold",
										children: ["Frais de livraison : ", order.customer.deliveryFee ? `€ ${order.customer.deliveryFee.toFixed(2)}` : "Gratuits"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 text-sm",
								children: isOnSite && !isPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payer sur place" }),
									" à la récupération — €",
									" ",
									order.total.toFixed(2)
								] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payé en ligne" }),
									" — € ",
									order.total.toFixed(2)
								] })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: order.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										item.quantity,
										"× ",
										item.name,
										item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-[#7a847e]",
											children: item.toppings.join(", ")
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									})]
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-full bg-[#10251f] px-6 py-3 text-center text-sm font-black text-white",
							children: "Retour à l'accueil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "rounded-full bg-[#ff705f] px-6 py-3 text-center text-sm font-black text-white",
							children: "Commander encore"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
export { OrderSuccessPage as component };
