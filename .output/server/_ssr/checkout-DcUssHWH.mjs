import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as numberType, i as literalType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { c as upsertOrder, i as getOrderFromStore } from "./order-store-0FsFo7Nl.mjs";
import { c as getMolliePayment, i as getBancontactProPayment, u as processCheckout } from "./checkout-service.server-CGx1EGbk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DcUssHWH.js
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
var submitCheckout_createServerFn_handler = createServerRpc({
	id: "243c2b184d864a499b1d71c0c6b5eb7e9bd0b88cb2359335c4d165aeafd87962",
	name: "submitCheckout",
	filename: "src/fn/checkout.ts"
}, (opts) => submitCheckout.__executeServer(opts));
var submitCheckout = createServerFn({ method: "POST" }).validator(checkoutSchema).handler(submitCheckout_createServerFn_handler, async ({ data }) => processCheckout(data));
var getOrderStatus_createServerFn_handler = createServerRpc({
	id: "92944dec917326ce81275bbe893d3642fead0ec3cc3aa98995106b3743ad6174",
	name: "getOrderStatus",
	filename: "src/fn/checkout.ts"
}, (opts) => getOrderStatus.__executeServer(opts));
var getOrderStatus = createServerFn({ method: "GET" }).validator(objectType({ orderId: stringType().min(1) })).handler(getOrderStatus_createServerFn_handler, async ({ data }) => {
	let order = await getOrderFromStore(data.orderId);
	if (order?.molliePaymentId && order.status === "pending_payment") if (order.molliePaymentId.startsWith("bancontact:")) {
		const paymentId = order.molliePaymentId.slice(11);
		try {
			const payment = await getBancontactProPayment(paymentId);
			if (payment.status === "SUCCEEDED") {
				order = {
					...order,
					status: "paid"
				};
				await upsertOrder(order);
			} else if (payment.status === "CANCELLED" || payment.status === "EXPIRED" || payment.status === "FAILED" || payment.status === "VOIDED") {
				order = {
					...order,
					status: payment.status === "EXPIRED" ? "expired" : "cancelled"
				};
				await upsertOrder(order);
			}
		} catch {}
	} else try {
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
