import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-v6B2RrbN.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as logo_default } from "./logo-C4WRcUkf.mjs";
import { b as ArrowLeft, h as CreditCard, i as Store, m as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as getDeliveryZone } from "./delivery-P4X_oDrn.mjs";
import { n as submitCheckout } from "./checkout-zuulX8Hk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CWyHNEBL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { items, total, clearCart } = useCart();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [fulfillment, setFulfillment] = (0, import_react.useState)("delivery");
	const [requestedTime, setRequestedTime] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [postalCode, setPostalCode] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("online");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const pickupOptions = (0, import_react.useMemo)(() => buildPickupSlots(), []);
	const deliveryZone = (0, import_react.useMemo)(() => getDeliveryZone(postalCode), [postalCode]);
	const deliveryFee = fulfillment === "delivery" && deliveryZone ? total >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const orderTotal = total + deliveryFee;
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] flex flex-col items-center justify-center px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-bold text-[#17231f]",
			children: "Votre panier est vide."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/commander",
			className: "mt-6 rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
			children: "Voir la carte"
		})]
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			const origin = window.location.origin;
			const result = await submitCheckout({ data: {
				customer: {
					name,
					phone,
					email: email || "",
					notes: notes || void 0,
					fulfillment,
					requestedTime,
					address: address || void 0,
					postalCode: postalCode || void 0,
					city: city || void 0
				},
				items: items.map((item) => ({
					id: item.id,
					name: item.name,
					price: item.price,
					quantity: item.quantity,
					toppings: item.toppings
				})),
				paymentMethod,
				origin
			} });
			if (result.type === "online") {
				window.location.href = result.redirectUrl;
				return;
			}
			clearCart();
			navigate({
				to: "/order/success",
				search: {
					orderId: result.orderId,
					method: "on_site"
				}
			});
		} catch (err) {
			console.error(err);
			setError(err instanceof Error ? err.message : "Une erreur est survenue. Réessaie ou choisis « Payer sur place ».");
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "Accueil",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Logo",
							className: "h-full w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-black sm:text-lg",
						children: "Poke N Bowl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] hover:text-[#17231f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-[900px] px-5 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#ff705f]",
					children: "Finaliser"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-black tracking-tight sm:text-5xl",
					children: "Ta commande."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-[#758079]",
					children: "Renseigne tes coordonnées, ton adresse de livraison et le mode de paiement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-10 grid gap-8 lg:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Mode de réception"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setFulfillment("delivery"),
										className: `rounded-2xl border-2 p-4 text-left ${fulfillment === "delivery" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "Livraison"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "À domicile selon ton code postal"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setFulfillment("pickup"),
										className: `rounded-2xl border-2 p-4 text-left ${fulfillment === "pickup" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "Retrait sur place"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "Poke N Bowl Visé"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Coordonnées"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Nom *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												value: name,
												onChange: (e) => setName(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "Prénom Nom"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Téléphone *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "tel",
												value: phone,
												onChange: (e) => setPhone(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "04xx xx xx xx"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Email (optionnel)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "toi@email.com"
											})]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Adresse *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: address,
													onChange: (e) => setAddress(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Rue et numéro"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Code postal *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													inputMode: "numeric",
													value: postalCode,
													onChange: (e) => setPostalCode(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "4600"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Ville *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: city,
													onChange: (e) => setCity(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Visé"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-2 rounded-xl bg-[#f7f4ec] px-4 py-3 text-xs font-bold text-[#17231f]",
												children: deliveryZone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													"Minimum : € ",
													deliveryZone.minimumOrder.toFixed(2),
													" · Livraison : ",
													total >= 50 ? "gratuite" : `€ ${deliveryZone.feeUnder50.toFixed(2)}`
												] }) : "Entre ton code postal pour connaître les frais de livraison."
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: fulfillment === "delivery" ? "Créneau souhaité *" : "Heure de retrait *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												required: true,
												value: requestedTime,
												onChange: (e) => setRequestedTime(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Choisir un créneau"
												}), pickupOptions.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: slot,
													children: slot
												}, slot))]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Notes (allergies, etc.)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: notes,
												onChange: (e) => setNotes(e.target.value),
												rows: 3,
												className: "mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "Optionnel"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Paiement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("online"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "online" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer en ligne"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Bancontact, carte — via Mollie"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("on_site"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "on_site" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer sur place"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "À la récupération — sans frais en ligne"
											})
										]
									})]
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
								children: error
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-[24px] bg-[#10251f] p-6 text-white lg:sticky lg:top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-black",
								children: "Récapitulatif"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold",
											children: [
												item.quantity,
												"× ",
												item.name
											]
										}), item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/50",
											children: item.toppings.join(", ")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 font-bold",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									})]
								}, `${item.id}-${JSON.stringify(item.toppings)}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center justify-between border-t border-white/10 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-white/50",
											children: ["Sous-total · € ", total.toFixed(2)]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-white/50",
											children: ["Livraison · ", deliveryFee === 0 ? "Gratuite" : `€ ${deliveryFee.toFixed(2)}`]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-black text-[#d7ff45]",
											children: ["€ ", orderTotal.toFixed(2)]
										})
									]
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white transition hover:bg-[#ff705f]/90 disabled:opacity-60",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Traitement…"] }) : paymentMethod === "online" ? "Payer en ligne" : "Confirmer la commande"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-[10px] text-white/40",
								children: "Livraison selon zone · retrait possible à Poke N Bowl Visé"
							})
						]
					})]
				})
			]
		})]
	});
}
function buildPickupSlots() {
	const slots = [];
	const now = /* @__PURE__ */ new Date();
	const windows = [
		{
			day: 1,
			start: 720,
			end: 840
		},
		{
			day: 1,
			start: 1020,
			end: 1260
		},
		{
			day: 2,
			start: 720,
			end: 840
		},
		{
			day: 2,
			start: 1020,
			end: 1260
		},
		{
			day: 3,
			start: 720,
			end: 840
		},
		{
			day: 3,
			start: 1020,
			end: 1260
		},
		{
			day: 4,
			start: 720,
			end: 840
		},
		{
			day: 4,
			start: 1020,
			end: 1260
		},
		{
			day: 5,
			start: 720,
			end: 840
		},
		{
			day: 5,
			start: 1020,
			end: 1260
		},
		{
			day: 6,
			start: 1080,
			end: 1260
		}
	];
	for (let dayOffset = 0; dayOffset <= 7; dayOffset += 1) {
		const d = new Date(now);
		d.setDate(now.getDate() + dayOffset);
		const day = d.getDay();
		const dayWindows = windows.filter((w) => w.day === day);
		for (const window of dayWindows) for (let minute = window.start; minute <= window.end; minute += 15) {
			const slotDate = new Date(d);
			slotDate.setHours(Math.floor(minute / 60), minute % 60, 0, 0);
			if (slotDate.getTime() < now.getTime() + 12e5) continue;
			const labelDay = dayOffset === 0 ? "Aujourd'hui" : dayOffset === 1 ? "Demain" : d.toLocaleDateString("fr-BE", {
				weekday: "short",
				day: "2-digit",
				month: "2-digit"
			});
			slots.push(labelDay + " " + slotDate.toLocaleTimeString("fr-BE", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: false
			}));
		}
	}
	return slots.slice(0, 48);
}
//#endregion
export { CheckoutPage as component };
