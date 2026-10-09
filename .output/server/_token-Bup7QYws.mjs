import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { t as BrandLogo } from "./_ssr/BrandLogo-BkzyhEtx.mjs";
import { C as MapPin, F as CircleAlert, M as Clock, P as CircleCheckBig, _ as Phone, i as Truck, w as LoaderCircle, y as Navigation } from "./_libs/lucide-react.mjs";
import { c as createServerFn } from "./_ssr/createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./_ssr/createSsrRpc-DqTMzYH5.mjs";
import { o as objectType, r as enumType, s as stringType } from "./_libs/zod.mjs";
import { t as Route } from "./_token-8zkbFWIx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_token-Bup7QYws.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var getDeliveryOrder = createServerFn({ method: "GET" }).validator(objectType({ token: stringType().min(8) })).handler(createSsrRpc("7c6d647b6f9e61f1dd19432e0ce31dfb70d3dd1840600bf36fabbc33694dfca9"));
var updateDeliveryStatus = createServerFn({ method: "POST" }).validator(objectType({
	token: stringType().min(8),
	status: enumType(["delivering", "completed"])
})).handler(createSsrRpc("ea990cd4d6bbc6fbf345b501afa62563c287d1be675cd2b95248e0177b34886f"));
function DeliveryTrackPage() {
	const { token } = Route.useParams();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [updating, setUpdating] = (0, import_react.useState)(false);
	const [order, setOrder] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchOrder = async () => {
		try {
			const res = await getDeliveryOrder({ data: { token } });
			if (res.found) setOrder(res.order);
			else setError("Commande introuvable ou lien expiré.");
		} catch (e) {
			console.error(e);
			setError("Impossible de charger les données de la commande.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchOrder();
		const interval = setInterval(fetchOrder, 15e3);
		return () => clearInterval(interval);
	}, [token]);
	const handleStatusChange = async (newStatus) => {
		setUpdating(true);
		try {
			await updateDeliveryStatus({ data: {
				token,
				status: newStatus
			} });
			await fetchOrder();
		} catch (e) {
			console.error(e);
			alert("Erreur lors de la mise à jour du statut.");
		} finally {
			setUpdating(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#ff705f]" })
	});
	if (error || !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-[#f7f4ec] px-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-[#ff705f]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-2xl font-black text-[#17231f]",
				children: "Lien invalide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-[#758079]",
				children: error ?? "Commande introuvable."
			})
		]
	});
	const fullAddress = `${order.address ?? ""}, ${order.postalCode ?? ""} ${order.city ?? ""}`.trim();
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
	const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-black/5 bg-[#f7f4ec]/95 px-5 py-3 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-lg items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-black bg-black/5 px-3 py-1 rounded-full",
					children: order.id
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-lg px-4 py-6 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: "Statut"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-[#fff5f3] px-3 py-1 text-xs font-black text-[#ff705f]",
							children: [
								order.status === "paid" && "Payée / En attente",
								order.status === "preparing" && "En préparation",
								order.status === "ready" && "Prête pour livraison",
								order.status === "delivering" && "En cours de livraison",
								order.status === "completed" && "Livrée",
								order.status === "cancelled" && "Annulée"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 text-sm text-[#7a847e]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Créneau demandé : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#17231f]",
							children: order.requestedTime
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
						children: "Client"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-black",
							children: order.customerName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#7a847e]",
							children: order.customerPhone
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${order.customerPhone}`,
							className: "flex items-center gap-2 rounded-xl bg-[#25D366]/15 text-[#189947] hover:bg-[#25D366]/25 px-4 py-3 font-bold text-sm transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Appeler"]
						})]
					})]
				}),
				order.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: "Adresse de Livraison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[#ff705f] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-base leading-snug",
								children: order.address
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-[#7a847e]",
								children: [
									order.postalCode,
									" ",
									order.city
								]
							})] })]
						}),
						order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-[#fff9ea] border border-[#f3d996] p-3 text-xs text-[#735311]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Instructions client :" }),
								" ",
								order.notes
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] text-white py-3 font-bold text-sm shadow hover:bg-[#3367d6] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Google Maps"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: wazeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] text-[#003d52] py-3 font-bold text-sm shadow hover:bg-[#2bb8e6] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Waze"]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
						children: "Mode de réception"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-bold text-base",
						children: "Retrait sur place (Poke N Bowl Visé)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: [
								"Articles (",
								order.items.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-black text-sm",
							children: [
								"Total: ",
								order.total.toFixed(2),
								" €"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-black/5",
						children: order.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between font-bold text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									item.quantity,
									"× ",
									item.name
								] })
							}), item.toppings && item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-[#7a847e] pl-4 border-l-2 border-[#ff705f]/40 space-y-0.5",
								children: item.toppings.map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: top }, tidx))
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pt-2 space-y-2",
					children: [
						order.status !== "delivering" && order.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleStatusChange("delivering"),
							disabled: updating,
							className: "w-full rounded-2xl bg-[#ff705f] py-4 text-white font-black text-base shadow-lg hover:bg-[#ff5a47] transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" }), updating ? "Mise à jour..." : "Partir en livraison"]
						}),
						order.status === "delivering" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleStatusChange("completed"),
							disabled: updating,
							className: "w-full rounded-2xl bg-[#10251f] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-5 w-5 text-[#d7ff45]" }), updating ? "Mise à jour..." : "Marquer comme Livrée"]
						}),
						order.status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-[#10251f] p-4 text-center text-[#d7ff45] font-black text-sm",
							children: "✓ Commande terminée et livrée"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { DeliveryTrackPage as component };
