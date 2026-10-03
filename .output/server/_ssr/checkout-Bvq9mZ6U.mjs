import { c as drinks, n as bowls, s as desserts, t as allToppings } from "./data-DketkIQF.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as numberType, i as literalType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { a as getMolliePayment, c as upsertOrder, i as formatEurAmount, o as getOrderFromStore, r as createMolliePayment } from "./order-store-C20kjW_r.mjs";
import { t as getDeliveryZone } from "./delivery-P4X_oDrn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-Bvq9mZ6U.js
function generateOrderId() {
	return `PNB-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
var orderItemSchema = objectType({
	id: stringType(),
	name: stringType(),
	price: numberType().positive(),
	quantity: numberType().int().positive(),
	toppings: arrayType(stringType())
});
var checkoutSchema = objectType({
	customer: objectType({
		name: stringType().min(2),
		phone: stringType().min(8),
		email: stringType().email().optional().or(literalType("")),
		notes: stringType().max(500).optional(),
		fulfillment: enumType(["delivery", "pickup"]),
		requestedTime: stringType().min(1),
		address: stringType().max(300).optional(),
		postalCode: stringType().max(10).optional(),
		city: stringType().max(100).optional()
	}),
	items: arrayType(orderItemSchema).min(1),
	paymentMethod: enumType(["online", "on_site"]),
	origin: stringType().url()
});
function canonicalizeItems(items) {
	const catalog = new Map([
		...bowls.map((item) => [item.id, item.price]),
		...drinks.map((item) => [item.id, item.price]),
		...desserts.map((item) => [item.id, item.price])
	]);
	const toppingSet = new Set(allToppings);
	return items.map((item) => {
		const canonicalPrice = catalog.get(item.id);
		if (canonicalPrice == null) throw new Error("Article invalide");
		const toppings = [...new Set(item.toppings ?? [])];
		if (!bowls.some((bowl) => bowl.id === item.id) && toppings.length > 0) throw new Error("Garnitures invalides");
		if (toppings.length > 5 || toppings.some((topping) => !toppingSet.has(topping))) throw new Error("Garnitures invalides");
		return {
			...item,
			name: bowls.find((bowl) => bowl.id === item.id)?.name ?? drinks.find((drink) => drink.id === item.id)?.name ?? desserts.find((dessert) => dessert.id === item.id)?.name ?? item.name,
			price: canonicalPrice,
			toppings
		};
	});
}
function computeSubtotal(items) {
	return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
var submitCheckout_createServerFn_handler = createServerRpc({
	id: "243c2b184d864a499b1d71c0c6b5eb7e9bd0b88cb2359335c4d165aeafd87962",
	name: "submitCheckout",
	filename: "src/fn/checkout.ts"
}, (opts) => submitCheckout.__executeServer(opts));
var submitCheckout = createServerFn({ method: "POST" }).validator(checkoutSchema).handler(submitCheckout_createServerFn_handler, async ({ data }) => {
	const items = canonicalizeItems(data.items);
	const subtotal = computeSubtotal(items);
	if (subtotal <= 0) throw new Error("Panier invalide");
	const deliveryZone = data.customer.fulfillment === "delivery" ? getDeliveryZone(data.customer.postalCode ?? "") : null;
	if (data.customer.fulfillment === "delivery") {
		if (!deliveryZone) throw new Error("Cette zone de livraison n'est pas desservie.");
		if (subtotal < deliveryZone.minimumOrder) throw new Error(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
		if (!data.customer.address?.trim() || !data.customer.city?.trim()) throw new Error("Adresse de livraison incomplète.");
	}
	const deliveryFee = deliveryZone ? subtotal >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const total = subtotal + deliveryFee;
	const orderId = generateOrderId();
	const order = {
		id: orderId,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: data.paymentMethod === "online" ? "pending_payment" : data.customer.fulfillment === "delivery" ? "awaiting_delivery" : "awaiting_pickup",
		paymentMethod: data.paymentMethod,
		customer: {
			name: data.customer.name.trim(),
			phone: data.customer.phone.trim(),
			email: data.customer.email?.trim() || void 0,
			notes: data.customer.notes?.trim() || void 0,
			fulfillment: data.customer.fulfillment,
			requestedTime: data.customer.requestedTime,
			address: data.customer.address?.trim() || void 0,
			postalCode: data.customer.postalCode?.trim().replace(/\s+/g, "") || void 0,
			city: data.customer.city?.trim() || void 0,
			deliveryFee
		},
		items,
		total,
		currency: "EUR"
	};
	if (data.paymentMethod === "on_site") {
		await upsertOrder(order);
		return {
			type: "on_site",
			orderId: order.id,
			total: order.total,
			redirectUrl: `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=on_site`
		};
	}
	const webhookUrl = `${data.origin}/api/mollie-webhook`;
	const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=online`;
	const payment = await createMolliePayment({
		amountValue: formatEurAmount(total),
		description: `Poke N Bowl ${orderId}`,
		redirectUrl,
		webhookUrl,
		metadata: {
			orderId: order.id,
			customerName: order.customer.name,
			customerPhone: order.customer.phone,
			requestedTime: order.customer.requestedTime
		},
		locale: "fr_BE"
	});
	order.molliePaymentId = payment.id;
	await upsertOrder(order);
	const checkoutUrl = payment._links?.checkout?.href;
	if (!checkoutUrl) throw new Error("Mollie n'a pas renvoyé d'URL de paiement");
	return {
		type: "online",
		orderId: order.id,
		total: order.total,
		molliePaymentId: payment.id,
		redirectUrl: checkoutUrl
	};
});
var getOrderStatus_createServerFn_handler = createServerRpc({
	id: "92944dec917326ce81275bbe893d3642fead0ec3cc3aa98995106b3743ad6174",
	name: "getOrderStatus",
	filename: "src/fn/checkout.ts"
}, (opts) => getOrderStatus.__executeServer(opts));
var getOrderStatus = createServerFn({ method: "GET" }).validator(objectType({ orderId: stringType().min(1) })).handler(getOrderStatus_createServerFn_handler, async ({ data }) => {
	let order = await getOrderFromStore(data.orderId);
	if (order?.molliePaymentId && order.status === "pending_payment") try {
		const payment = await getMolliePayment(order.molliePaymentId);
		if (payment.status === "paid") {
			order = {
				...order,
				status: "paid"
			};
			await upsertOrder(order);
		} else if (payment.status === "canceled" || payment.status === "expired" || payment.status === "failed") {
			order = {
				...order,
				status: payment.status === "expired" ? "expired" : "cancelled"
			};
			await upsertOrder(order);
		}
	} catch {}
	if (!order) return { found: false };
	return {
		found: true,
		order: {
			id: order.id,
			status: order.status,
			paymentMethod: order.paymentMethod,
			total: order.total,
			customer: order.customer,
			items: order.items,
			createdAt: order.createdAt
		}
	};
});
//#endregion
export { getOrderStatus_createServerFn_handler, submitCheckout_createServerFn_handler };
