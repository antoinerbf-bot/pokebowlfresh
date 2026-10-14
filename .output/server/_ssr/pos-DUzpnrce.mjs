import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as booleanType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { a as listOrdersFromStore, c as upsertOrder, i as getOrderFromStore, o as requestOrderReprint, s as updateOrderStatus, t as acknowledgePrint } from "./order-store-4tO4OvTG.mjs";
import { n as buildDeliveryReceipt, r as buildKitchenReceipt } from "./escpos-dUhfprHQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pos-DUzpnrce.js
function verifyPin(pin) {
	return pin === (process.env.POS_PIN ?? "1234");
}
var getPosOrders_createServerFn_handler = createServerRpc({
	id: "6df01f8264c863e15506dc49e8b2d2a94b806dd823923c9fc73a10634cf60562",
	name: "getPosOrders",
	filename: "src/fn/pos.ts"
}, (opts) => getPosOrders.__executeServer(opts));
var getPosOrders = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(getPosOrders_createServerFn_handler, async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	return { orders: await listOrdersFromStore(100) };
});
var setPosOrderStatus_createServerFn_handler = createServerRpc({
	id: "d448a7ae3667125e81da09dad6f6dec1c9565eb0f9398367da064dcdf0e9c039",
	name: "setPosOrderStatus",
	filename: "src/fn/pos.ts"
}, (opts) => setPosOrderStatus.__executeServer(opts));
var setPosOrderStatus = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	status: enumType([
		"pending_payment",
		"paid",
		"awaiting_pickup",
		"awaiting_delivery",
		"preparing",
		"ready",
		"delivering",
		"completed",
		"cancelled"
	])
})).handler(setPosOrderStatus_createServerFn_handler, async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await updateOrderStatus(data.orderId, data.status);
	return { success: true };
});
var triggerReprint_createServerFn_handler = createServerRpc({
	id: "6515ae2b4b334ce5935aaa2290fe5a760aa9de9e4dbd2160f973f92e3ad32045",
	name: "triggerReprint",
	filename: "src/fn/pos.ts"
}, (opts) => triggerReprint.__executeServer(opts));
var triggerReprint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(triggerReprint_createServerFn_handler, async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await requestOrderReprint(data.orderId);
	return { success: true };
});
var getOrderReceipts_createServerFn_handler = createServerRpc({
	id: "ae058d51b0dbcb532d02de73a2c4d7357c52b93b90a304439be634b235fa5013",
	name: "getOrderReceipts",
	filename: "src/fn/pos.ts"
}, (opts) => getOrderReceipts.__executeServer(opts));
var getOrderReceipts = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	origin: stringType().optional()
})).handler(getOrderReceipts_createServerFn_handler, async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	let order = await getOrderFromStore(data.orderId);
	if (!order) throw new Error("Commande introuvable.");
	if (!order.deliveryToken) {
		order = {
			...order,
			deliveryToken: crypto.randomUUID().replace(/-/g, "")
		};
		await upsertOrder(order);
	}
	const kitchenBytes = buildKitchenReceipt(order);
	const deliveryBytes = buildDeliveryReceipt(order, data.origin ?? "https://pokenbowl.be");
	const toBase64 = (bytes) => {
		let binary = "";
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
		return btoa(binary);
	};
	return {
		orderId: order.id,
		kitchenReceiptB64: toBase64(kitchenBytes),
		deliveryReceiptB64: toBase64(deliveryBytes)
	};
});
var ackPosPrint_createServerFn_handler = createServerRpc({
	id: "c9404c0b075a83418748a0c227e03f7d1395bb14f3a6f06bf310f5ce8548a74b",
	name: "ackPosPrint",
	filename: "src/fn/pos.ts"
}, (opts) => ackPosPrint.__executeServer(opts));
var ackPosPrint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(ackPosPrint_createServerFn_handler, async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await acknowledgePrint(data.orderId, data.success, data.error);
	return { success: true };
});
//#endregion
export { ackPosPrint_createServerFn_handler, getOrderReceipts_createServerFn_handler, getPosOrders_createServerFn_handler, setPosOrderStatus_createServerFn_handler, triggerReprint_createServerFn_handler };
