import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { r as getOrderByDeliveryToken, s as updateOrderStatus } from "./order-store-4tO4OvTG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/delivery-jU310Kpv.js
var getDeliveryOrder_createServerFn_handler = createServerRpc({
	id: "7c6d647b6f9e61f1dd19432e0ce31dfb70d3dd1840600bf36fabbc33694dfca9",
	name: "getDeliveryOrder",
	filename: "src/fn/delivery.ts"
}, (opts) => getDeliveryOrder.__executeServer(opts));
var getDeliveryOrder = createServerFn({ method: "GET" }).validator(objectType({ token: stringType().min(8) })).handler(getDeliveryOrder_createServerFn_handler, async ({ data }) => {
	const order = await getOrderByDeliveryToken(data.token);
	if (!order) return { found: false };
	return {
		found: true,
		order: {
			id: order.id,
			createdAt: order.createdAt,
			status: order.status,
			fulfillment: order.customer.fulfillment,
			requestedTime: order.customer.requestedTime,
			customerName: order.customer.name,
			customerPhone: order.customer.phone,
			notes: order.customer.notes,
			address: order.customer.address,
			postalCode: order.customer.postalCode,
			city: order.customer.city,
			deliveryFee: order.customer.deliveryFee,
			total: order.total,
			paymentMethod: order.paymentMethod,
			items: order.items.map((i) => ({
				name: i.name,
				quantity: i.quantity,
				toppings: i.toppings
			}))
		}
	};
});
var updateDeliveryStatus_createServerFn_handler = createServerRpc({
	id: "ea990cd4d6bbc6fbf345b501afa62563c287d1be675cd2b95248e0177b34886f",
	name: "updateDeliveryStatus",
	filename: "src/fn/delivery.ts"
}, (opts) => updateDeliveryStatus.__executeServer(opts));
var updateDeliveryStatus = createServerFn({ method: "POST" }).validator(objectType({
	token: stringType().min(8),
	status: enumType(["delivering", "completed"])
})).handler(updateDeliveryStatus_createServerFn_handler, async ({ data }) => {
	const order = await getOrderByDeliveryToken(data.token);
	if (!order) throw new Error("Commande introuvable");
	await updateOrderStatus(order.id, data.status);
	return { success: true };
});
//#endregion
export { getDeliveryOrder_createServerFn_handler, updateDeliveryStatus_createServerFn_handler };
