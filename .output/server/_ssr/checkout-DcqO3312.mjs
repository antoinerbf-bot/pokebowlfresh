import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-BoTWTco9.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { E as LoaderCircle, L as CircleCheckBig, M as CreditCard, R as CircleAlert, X as ArrowLeft, p as ShieldCheck, s as Store } from "../_libs/lucide-react.mjs";
import { o as getDeliveryZone } from "./checkout-service.server-B8TqvJpA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DcqO3312.js
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
	const pickupOptions = (0, import_react.useMemo)(() => buildPickupSlots(), []);
	const [requestedTime, setRequestedTime] = (0, import_react.useState)(() => buildPickupSlots()[0] ?? "");
	const [address, setAddress] = (0, import_react.useState)("");
	const [postalCode, setPostalCode] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("online");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const normalizedPostal = postalCode.trim().replace(/\s+/g, "");
	const deliveryZone = (0, import_react.useMemo)(() => getDeliveryZone(postalCode), [postalCode]);
	const deliveryFee = fulfillment === "delivery" && deliveryZone ? total >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const orderTotal = total + deliveryFee;
	const handleFulfillmentChange = (method) => {
		setFulfillment(method);
		if (method === "delivery") setPaymentMethod("online");
	};
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] flex flex-col items-center justify-center px-5",
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
		if (fulfillment === "delivery") {
			if (paymentMethod === "on_site") {
				setError("Le paiement sur place n'est pas autorisé pour la livraison à domicile. Veuillez régler en ligne.");
				return;
			}
			if (!deliveryZone) {
				setError("Cette zone de livraison n'est pas desservie. Veuillez choisir « Retrait sur place ».");
				return;
			}
			if (total < deliveryZone.minimumOrder) {
				setError(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
				return;
			}
		}
		setLoading(true);
		try {
			const origin = window.location.origin;
			const response = await fetch("/api/checkout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				cache: "no-store",
				body: JSON.stringify({
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
						toppings: [...item.toppings, ...item.removedIngredients && item.removedIngredients.length > 0 ? [`Sans : ${item.removedIngredients.join(", ")}`] : []]
					})),
					paymentMethod,
					origin
				})
			});
			const result = await response.json();
			if (!response.ok || !result.success) {
				setError(result.error || `Le serveur a refusé la commande (HTTP ${response.status}).`);
				setLoading(false);
				return;
			}
			if (result.type === "online") {
				if (!result.redirectUrl) throw new Error("Le prestataire de paiement n’a pas fourni de lien de paiement.");
				window.location.href = result.redirectUrl;
				return;
			}
			if (result.type !== "on_site" || !result.orderId) throw new Error("Le serveur n’a pas renvoyé de confirmation valide pour la commande.");
			clearCart();
			navigate({
				to: "/order/success",
				search: {
					orderId: result.orderId,
					method: "on_site"
				}
			});
		} catch (err) {
			console.error("[Checkout] Échec de création de commande:", err);
			const candidate = err;
			const nestedMessage = typeof candidate?.data?.message === "string" && candidate.data.message || typeof candidate?.cause?.message === "string" && candidate.cause.message || typeof candidate?.message === "string" && candidate.message || typeof candidate?.data?.error === "string" && candidate.data.error;
			const diagnostic = [
				typeof candidate?.name === "string" ? candidate.name : "",
				typeof candidate?.data?.code === "string" ? candidate.data.code : "",
				typeof candidate?.data?.validationErrors === "string" ? candidate.data.validationErrors : ""
			].filter(Boolean).join(" — ");
			const message = nestedMessage || (diagnostic ? `Échec de validation/serveur : ${diagnostic}` : "Échec de communication avec le serveur pendant la création de commande. Le détail est enregistré dans la console du navigateur.");
			setError(message);
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
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
										onClick: () => handleFulfillmentChange("delivery"),
										className: `rounded-2xl border-2 p-4 text-left transition ${fulfillment === "delivery" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "🛵 Livraison"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "À domicile selon ton code postal"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleFulfillmentChange("pickup"),
										className: `rounded-2xl border-2 p-4 text-left transition ${fulfillment === "pickup" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "🛍️ Retrait sur place"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "Poke N Bowl Visé (Sans minimum)"
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "toi@email.com"
											})]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Adresse de livraison *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: address,
													onChange: (e) => setAddress(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Visé"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [
													!normalizedPostal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-xl bg-[#F6F1E9] px-4 py-3 text-xs font-medium text-[#7a847e]",
														children: "Entre ton code postal pour calculer les frais de livraison (19 zones desservies autour de Visé)."
													}),
													normalizedPostal.length >= 4 && !deliveryZone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-bold text-red-700",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0 text-red-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Code postal ",
															normalizedPostal,
															" non desservi en livraison."
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block font-normal text-red-600 mt-0.5",
															children: "Choisis l'option « Retrait sur place » pour retirer ta commande au restaurant."
														})] })]
													}),
													deliveryZone && total < deliveryZone.minimumOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs font-bold text-amber-900",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0 text-amber-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Minimum de commande : € ",
															deliveryZone.minimumOrder.toFixed(2),
															" pour ce code postal."
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "block font-normal text-amber-700 mt-0.5",
															children: [
																"Il te manque encore € ",
																(deliveryZone.minimumOrder - total).toFixed(2),
																" pour valider la livraison."
															]
														})] })]
													}),
													deliveryZone && total >= deliveryZone.minimumOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-bold text-emerald-800",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Zone validée : frais de livraison ",
															total >= 50 ? "offerts 🎉" : `de € ${deliveryZone.feeUnder50.toFixed(2)}`,
															" (livraison offerte dès 50 €)"
														] })]
													})
												]
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
								}), fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border-2 border-[#ff705f] bg-[#fff5f3] p-4 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]",
													children: "Bancontact & En ligne"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm font-black text-[#17231f]",
												children: "Paiement en ligne sécurisé"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Application bancaire belge, Payconiq (QR code) ou Carte bancaire"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-xl bg-[#F6F1E9] p-3 text-xs text-[#766358] border border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Paiement en ligne requis pour la livraison à domicile." }), " (Le paiement sur place est réservé au retrait au restaurant)."] })]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("online"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "online" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]",
													children: "Bancontact"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Bancontact & En ligne"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Bancontact Pro, Payconiq, Carte bancaire"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("on_site"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "on_site" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer sur place"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Espèces ou Bancontact au comptoir lors du retrait"
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
						className: "h-fit rounded-[24px] bg-[#2C1D16] p-6 text-white lg:sticky lg:top-24",
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
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-bold",
												children: [
													item.quantity,
													"× ",
													item.name
												]
											}),
											item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-white/50",
												children: item.toppings.join(", ")
											}),
											item.removedIngredients && item.removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#ff705f] font-bold",
												children: ["✕ Sans : ", item.removedIngredients.join(", ")]
											})
										]
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
											className: "text-2xl font-black text-[#ff705f]",
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
