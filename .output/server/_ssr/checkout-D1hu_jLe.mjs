import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useCart } from "./CartContext-D7fTgwIa.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BrandLogo } from "./BrandLogo-f92236nt.mjs";
import { F as LoaderCircle, G as CreditCard, Q as CircleAlert, Z as CircleCheckBig, _ as ShieldCheck, u as Store, ut as ArrowLeft } from "../_libs/lucide-react.mjs";
import { c as getDeliveryZone } from "./bancontact-pro.server-DM2ZMn2Z.mjs";
import { n as formatRushCountdown, r as useRushState } from "./RushPauseBanner-DtN6tzRr.mjs";
import { n as getServiceSchedule } from "./opening-hours-DTFVo6EQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-D1hu_jLe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { items, total, clearCart } = useCart();
	const navigate = useNavigate();
	const rush = useRushState();
	const schedule = getServiceSchedule();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [fulfillment, setFulfillment] = (0, import_react.useState)("delivery");
	const timeOptions = (0, import_react.useMemo)(() => buildTimeSlots(fulfillment), [fulfillment]);
	const [requestedTime, setRequestedTime] = (0, import_react.useState)(() => buildTimeSlots("delivery")[0] ?? "");
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
		className: "min-h-screen bg-[#EFE6D8] flex flex-col items-center justify-center px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-bold text-[#2C1D16]",
			children: "Votre panier est vide."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/commander",
			className: "mt-6 rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white shadow-md hover:bg-[#ff5a47]",
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
			const responseText = await response.text();
			let result;
			try {
				result = JSON.parse(responseText);
			} catch {
				console.error("[Checkout] Réponse non JSON de /api/checkout:", {
					status: response.status,
					contentType: response.headers.get("content-type"),
					bodyPreview: responseText.slice(0, 500)
				});
				throw new Error(`Le serveur de commande a renvoyé une réponse inattendue (HTTP ${response.status}). Aucune confirmation fiable n’a été reçue. Vérifiez les commandes dans le POS avant de réessayer.`);
			}
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
		className: "min-h-screen bg-[#EFE6D8] text-[#2C1D16]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-[#DECBB3] bg-[#EFE6D8]/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "inline-flex items-center gap-2 text-xs font-bold text-[#7A6857] hover:text-[#2C1D16]",
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
					className: "mt-2 text-4xl font-black tracking-tight sm:text-5xl text-[#2C1D16]",
					children: "Ta commande."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-[#6E5A49]",
					children: "Renseigne tes coordonnées, ton adresse de livraison et le mode de paiement."
				}),
				rush.isPaused && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border-2 border-red-500 p-4 shadow-lg text-left animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-3 w-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-red-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black uppercase tracking-wider text-red-600",
								children: "🔥 Victime de notre succès · Prise de commandes en pause momentanée"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-[#2C1D16] font-bold leading-relaxed",
							children: "Notre cuisine prépare actuellement les commandes en cours avec soin. La prise de commandes reprendra automatiquement dans :"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 inline-flex items-center gap-2 bg-[#2C1D16] text-[#EADCC9] px-3.5 py-1.5 rounded-xl font-mono text-lg font-black tracking-widest",
							children: ["⏳ ", formatRushCountdown(rush.remainingSeconds)]
						})
					]
				}),
				!rush.isPaused && schedule.status === "before_opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-[#FFF6E8] border border-[#ea580c]/30 p-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base",
							children: "🥢"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-black uppercase tracking-wider text-[#ea580c]",
							children: "Prise de commandes dès 17h30 · Livraisons 18h00 – 20h30"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-[#6E5A49] font-medium leading-relaxed",
						children: "Le service commence ce soir à 17h30 (aucune livraison le midi). Vous pouvez valider votre commande, elle sera prise en charge dès l'ouverture du service."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 grid gap-8 lg:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-[0_20px_60px_-38px_rgba(44,29,22,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black text-[#2C1D16]",
									children: "Mode de réception"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-2 gap-3 rounded-[22px] border border-[#DECBB3] bg-[#EFE6D8] p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": fulfillment === "delivery",
										onClick: () => handleFulfillmentChange("delivery"),
										className: `flex min-h-[112px] flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center transition-all duration-200 ${fulfillment === "delivery" ? "bg-[#2C1D16] text-[#EADCC9] ring-2 ring-[#ff705f] shadow-md shadow-[#2C1D16]/25" : "bg-[#FAF5EE]/70 text-[#7A6857] hover:bg-[#FAF5EE] hover:text-[#2C1D16]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											viewBox: "0 0 48 48",
											className: `h-9 w-9 ${fulfillment === "delivery" ? "text-[#ff705f]" : "text-current"}`,
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "3.2",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											"aria-hidden": "true",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: "10",
													cy: "34",
													r: "7"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: "37",
													cy: "34",
													r: "7"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: "24",
													cy: "7",
													r: "3.5",
													fill: "currentColor",
													stroke: "none"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 13l-6 8 9 5 5-7 5 1M16 21l-6 13m9-13 8 13h10M23 13l7 5" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-extrabold",
											children: "Livraison"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-pressed": fulfillment === "pickup",
										onClick: () => handleFulfillmentChange("pickup"),
										className: `flex min-h-[112px] flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center transition-all duration-200 ${fulfillment === "pickup" ? "bg-[#2C1D16] text-[#EADCC9] ring-2 ring-[#ff705f] shadow-md shadow-[#2C1D16]/25" : "bg-[#FAF5EE]/70 text-[#7A6857] hover:bg-[#FAF5EE] hover:text-[#2C1D16]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 40 40",
											className: `h-8 w-8 ${fulfillment === "pickup" ? "text-[#ff705f]" : "text-current"}`,
											fill: "currentColor",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 11V8a8 8 0 0 1 16 0v3h4a2 2 0 0 1 2 2l2 22a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2l2-22a2 2 0 0 1 2-2h4zm4 0h8V8a4 4 0 0 0-8 0v3z" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-extrabold",
											children: "À emporter"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-[0_20px_60px_-38px_rgba(44,29,22,.35)]",
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
												}), timeOptions.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
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
								className: "rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-[0_20px_60px_-38px_rgba(44,29,22,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-lg font-black text-[#2C1D16]",
										children: "Mode de règlement"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-emerald-600" }), "Paiement sécurisé via Mollie"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("online"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition cursor-pointer ${paymentMethod === "online" ? "border-[#ff705f] bg-[#FFF4F1]" : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#2C1D16]/30"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-black text-[#2C1D16]",
														children: "Paiement en ligne"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase text-[#EADCC9]",
													children: "Mollie · SSL"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7A6857] leading-relaxed",
												children: "Cartes bancaires (Visa, Mastercard, Amex), Apple Pay, Payconiq ou Virement instantané"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-[#DECBB3]/40 w-full text-[10px] font-bold text-[#2C1D16]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-lg bg-black/5 px-2.5 py-1 flex items-center gap-1 font-black",
														children: "💳 Visa · Mastercard"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "rounded-lg bg-black text-white px-2.5 py-1 flex items-center gap-1 font-black shadow-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
															className: "h-3 w-3 fill-current inline-block",
															viewBox: "0 0 170 170",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14-4.88-7.5-8.83-16.14-11.86-25.91-3.03-9.77-4.55-19.34-4.55-28.71 0-14.79 3.8-27.18 11.41-37.16 7.6-9.98 17.1-15.08 28.5-15.3 4.89 0 10.14 1.25 15.75 3.75 5.61 2.5 9.4 3.81 11.37 3.93 1.63-.12 5.6-1.48 11.9-4.08 6.3-2.6 11.62-3.8 15.96-3.6 11.96.88 21.6 5.38 28.91 13.5-10.43 6.31-15.54 15.11-15.32 26.4.22 8.7 3.47 16.03 9.77 22 6.3 5.98 13.79 9.35 22.48 10.12-2.18 6.31-4.79 12.56-7.85 18.75zm-33.15-108.6c0-6.74 2.45-13.04 7.34-18.9 4.9-5.87 11.05-9.62 18.46-11.25.22 1.09.33 2.18.33 3.26 0 6.74-2.5 13.15-7.5 19.24-5 6.09-11.3 9.89-18.91 11.41-.11-1.3-.22-2.39-.22-3.76z" })
														}), "Apple Pay"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-lg bg-pink-600/10 text-pink-700 border border-pink-500/20 px-2 py-0.5 font-black",
														children: "📱 Payconiq"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-lg bg-emerald-600/10 text-emerald-800 border border-emerald-500/20 px-2 py-0.5 font-bold",
														children: "⚡ Virement"
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("on_site"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition cursor-pointer ${paymentMethod === "on_site" ? "border-[#ff705f] bg-[#FFF4F1]" : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#2C1D16]/30"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-black text-[#2C1D16]",
														children: fulfillment === "delivery" ? "Paiement au livreur" : "Payer sur place"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-bold text-[#7A6857]",
													children: fulfillment === "delivery" ? "Livraison" : "Comptoir"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7A6857] leading-relaxed",
												children: fulfillment === "delivery" ? "Espèces ou terminal de paiement mobile lors de la livraison" : "Espèces ou terminal de paiement au comptoir lors du retrait"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 flex flex-wrap items-center gap-1.5 pt-1.5 border-t border-[#DECBB3]/40 w-full text-[10px] font-bold text-[#7A6857]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded bg-black/5 px-2 py-0.5",
													children: "💶 Espèces"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded bg-black/5 px-2 py-0.5",
													children: "💳 Terminal carte"
												})]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between border-t border-white/10 pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-white/50",
									children: [
										"Sous-total · € ",
										total.toFixed(2),
										fulfillment === "delivery" && ` · Livraison ${deliveryFee === 0 ? "Gratuite" : `€ ${deliveryFee.toFixed(2)}`}`
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-2xl font-black text-[#ff705f]",
									children: ["€ ", orderTotal.toFixed(2)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading || rush.isPaused,
								className: `mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-black text-white transition ${rush.isPaused ? "bg-slate-700 cursor-not-allowed opacity-75" : "bg-[#ff705f] hover:bg-[#ff705f]/90 shadow-lg shadow-[#ff705f]/30 cursor-pointer"}`,
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), paymentMethod === "online" ? "Redirection vers Mollie…" : "Traitement…"] }) : rush.isPaused ? `⏸️ Commandes en pause (${formatRushCountdown(rush.remainingSeconds)})` : paymentMethod === "online" ? "Payer en ligne via Mollie" : "Confirmer la commande"
							}),
							paymentMethod === "online" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paiement chiffré & sécurisé par Mollie" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-white/70 mt-1 leading-snug",
										children: "Cartes (Visa, Mastercard, Amex) · Apple Pay · Payconiq · Virement instantané"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] text-white/40 mt-1.5",
										children: "🔒 Conforme normes bancaires européennes PCI-DSS & 3D Secure"
									})
								]
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
function buildTimeSlots(fulfillment) {
	const slots = [];
	const now = /* @__PURE__ */ new Date();
	const startMinute = fulfillment === "delivery" ? 1080 : 1050;
	const endMinute = 1230;
	for (let dayOffset = 0; dayOffset <= 7; dayOffset += 1) {
		const d = new Date(now);
		d.setDate(now.getDate() + dayOffset);
		for (let minute = startMinute; minute <= endMinute; minute += 15) {
			const slotDate = new Date(d);
			slotDate.setHours(Math.floor(minute / 60), minute % 60, 0, 0);
			if (slotDate.getTime() < now.getTime() + 9e5) continue;
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
