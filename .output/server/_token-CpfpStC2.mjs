import { i as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { t as BrandLogo } from "./_ssr/BrandLogo-f92236nt.mjs";
import { E as LoaderCircle, L as CircleCheckBig, P as Clock, R as CircleAlert, T as MapPin, i as Truck, x as Navigation, y as Phone } from "./_libs/lucide-react.mjs";
import { c as createServerFn } from "./_ssr/createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./_ssr/createSsrRpc-CMOm1nba.mjs";
import { o as objectType, r as enumType, s as stringType } from "./_libs/zod.mjs";
import { t as Route } from "./_token-C58jnZqF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_token-CpfpStC2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var getDeliveryOrder = createServerFn({ method: "GET" }).validator(objectType({ token: stringType().min(1) })).handler(createSsrRpc("7c6d647b6f9e61f1dd19432e0ce31dfb70d3dd1840600bf36fabbc33694dfca9"));
var updateDeliveryStatus = createServerFn({ method: "POST" }).validator(objectType({
	token: stringType().min(1),
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
			if (token.toUpperCase().startsWith("TEST")) {
				setOrder({
					id: "TEST-TICKET",
					deliveryToken: "TEST-TICKET",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					status: "delivering",
					fulfillment: "delivery",
					requestedTime: "Dès que possible",
					customerName: "Jean Dupont (Client Exemple)",
					customerPhone: "0499 12 34 56",
					notes: "Bâtiment B, interphone 12",
					address: "Rue Haute 38",
					postalCode: "4600",
					city: "Visé",
					deliveryFee: 2,
					total: 16,
					paymentMethod: "on_site",
					items: [{
						name: "Poké Saumon Classic (Medium)",
						quantity: 1,
						price: 12.5
					}, {
						name: "Boisson Aloe Vera",
						quantity: 1,
						price: 3.5
					}]
				});
				setError(null);
				setLoading(false);
				return;
			}
			const raw = await fetch(`/api/track-order?token=${encodeURIComponent(token)}`, {
				headers: { Accept: "application/json" },
				cache: "no-store"
			});
			if (raw.ok) {
				const data = await raw.json();
				if (data.found && data.order) {
					setOrder(data.order);
					setError(null);
					setLoading(false);
					return;
				}
			}
			const res = await getDeliveryOrder({ data: { token } });
			if (res.found) {
				setOrder(res.order);
				setError(null);
			} else setError("Commande introuvable ou lien expiré.");
		} catch (e) {
			console.warn("[Track] Erreur API REST, fallback createServerFn:", e);
			try {
				const res = await getDeliveryOrder({ data: { token } });
				if (res.found) {
					setOrder(res.order);
					setError(null);
					return;
				}
			} catch {}
			setError("Impossible de charger les données de la commande.");
		} finally {
			setLoading(false);
		}
	};
	const hasAddress = Boolean(order?.address && String(order.address).trim().length > 0);
	const fullAddress = `${order?.address ?? ""}, ${order?.postalCode ?? ""} ${order?.city ?? ""}`.trim();
	const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;
	const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}&navigate=yes`;
	const appleMapsUrl = `https://maps.apple.com/?daddr=${encodeURIComponent(fullAddress)}`;
	(0, import_react.useEffect)(() => {
		fetchOrder();
		const interval = setInterval(fetchOrder, 1e4);
		return () => clearInterval(interval);
	}, [token]);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && order && fullAddress) {
			const search = window.location.search;
			const auto = new URLSearchParams(search).get("auto");
			if (auto === "waze") window.location.href = wazeUrl;
			else if (auto === "maps") window.location.href = mapsUrl;
		}
	}, [
		order,
		fullAddress,
		wazeUrl,
		mapsUrl
	]);
	const handleStatusChange = async (newStatus) => {
		setUpdating(true);
		try {
			if ((await fetch("/api/track-order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					token,
					status: newStatus
				})
			})).ok) {
				await fetchOrder();
				return;
			}
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
		className: "flex min-h-screen items-center justify-center bg-[#F6F1E9]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-[#ff705f] mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-wider text-[#758079]",
				children: "Chargement de la livraison..."
			})]
		})
	});
	if (error || !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-[#F6F1E9] px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-full bg-[#ff705f]/15 flex items-center justify-center mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-9 w-9 text-[#ff705f]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-black text-[#17231f]",
				children: "Lien invalide ou expiré"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-[#758079] max-w-sm",
				children: error ?? "La commande demandée est introuvable."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-xs bg-black/5 px-3 py-1.5 rounded-lg text-[#17231f]",
				children: ["Réf : ", token]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setLoading(true);
					setError(null);
					fetchOrder();
				},
				className: "mt-6 rounded-2xl bg-[#ff705f] px-6 py-3 font-black text-white text-sm shadow hover:bg-[#ff5a47] transition active:scale-95",
				children: "🔄 Réessayer la recherche"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-black/5 bg-[#F6F1E9]/95 px-5 py-3 backdrop-blur-md",
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
				hasAddress ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-3xl bg-gradient-to-br from-[#1b322a] to-[#0d1a16] p-5 shadow-2xl border border-white/10 text-white space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex h-3 w-3 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wider text-emerald-400",
									children: "Navigation GPS Livreur (1-Clic)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono bg-white/10 px-2.5 py-1 rounded-full text-emerald-300 font-bold",
								children: "Itinéraire Direct"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 bg-black/40 p-4 rounded-2xl border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-[#ff705f] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-black text-xl leading-tight text-white",
										children: order.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-bold text-[#EADCC9]",
										children: [
											order.postalCode,
											" ",
											order.city
										]
									}),
									order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-amber-300 mt-2 bg-amber-500/10 p-2 rounded-xl border border-amber-500/20 font-medium",
										children: ["🔔 ", order.notes]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: wazeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-2xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-4 px-3 font-black text-base shadow-xl transition active:scale-95 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lancer WAZE" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-2xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-4 px-3 font-black text-base shadow-xl transition active:scale-95 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Maps" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-1 text-xs text-[#8ea39b]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: appleMapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-white underline font-medium",
								children: "Ou ouvrir avec Apple Plans"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-[#8ea39b]/80",
								children: "Ouvre le GPS du smartphone"
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: "Client à livrer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-[#7a847e] font-medium",
							children: "Contact direct"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-black truncate",
								children: order.customerName || "Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-[#7a847e]",
								children: order.customerPhone || "Numéro non renseigné"
							})]
						}), order.customerPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${order.customerPhone}`,
							className: "flex items-center gap-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] px-4 py-3 font-bold text-sm shadow-md transition active:scale-95 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Appeler le client" })]
						})]
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
								(order?.items || []).length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-black text-sm",
							children: [
								"Total: ",
								Number(order?.total || 0).toFixed(2),
								" €"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-black/5",
						children: (order?.items || []).map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between font-bold text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									item.quantity || 1,
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
							className: "w-full rounded-2xl bg-[#2C1D16] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-5 w-5 text-[#22c55e]" }), updating ? "Mise à jour..." : "Marquer comme Livrée"]
						}),
						order.status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-[#2C1D16] p-4 text-center text-[#EADCC9] font-black text-sm",
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
