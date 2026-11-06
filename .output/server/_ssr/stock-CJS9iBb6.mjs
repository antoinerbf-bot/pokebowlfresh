import { c as redisConfigured, l as saveStock, n as buildDefaultStock, s as loadStock, t as assertAdminPin } from "./stock-store-CCPbgyY-.mjs";
import { n as createServerFn } from "./ssr.mjs";
import { a as numberType, n as booleanType, o as objectType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-CJS9iBb6.js
var getStock_createServerFn_handler = createServerRpc({
	id: "511defe839a5e1102b8bb0c4bc905f516f731e66b5893bf673574b68a2cc798f",
	name: "getStock",
	filename: "src/fn/stock.ts"
}, (opts) => getStock.__executeServer(opts));
var getStock = createServerFn({ method: "GET" }).handler(getStock_createServerFn_handler, async () => {
	return {
		stock: await loadStock(),
		persistent: redisConfigured()
	};
});
var setStockItem_createServerFn_handler = createServerRpc({
	id: "344ae2a8ed96db3241e90e9ee3089ec0df73f7602450a7faf6a43771144a5705",
	name: "setStockItem",
	filename: "src/fn/stock.ts"
}, (opts) => setStockItem.__executeServer(opts));
var setStockItem = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	id: stringType().min(1),
	available: booleanType(),
	qty: numberType().int().min(0).nullable().optional()
})).handler(setStockItem_createServerFn_handler, async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = await loadStock();
	const prev = stock.items[data.id] ?? {
		available: true,
		qty: null
	};
	stock.items[data.id] = {
		available: data.available,
		qty: data.qty === void 0 ? prev.qty : data.qty
	};
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
var setManyStock_createServerFn_handler = createServerRpc({
	id: "b4ead3c5e8903f8b050b785eff4eb4b25d6e000d9c585032e252d84164ec0bd5",
	name: "setManyStock",
	filename: "src/fn/stock.ts"
}, (opts) => setManyStock.__executeServer(opts));
var setManyStock = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	updates: arrayType(objectType({
		id: stringType(),
		available: booleanType(),
		qty: numberType().int().min(0).nullable().optional()
	}))
})).handler(setManyStock_createServerFn_handler, async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = await loadStock();
	for (const u of data.updates) {
		const prev = stock.items[u.id] ?? {
			available: true,
			qty: null
		};
		stock.items[u.id] = {
			available: u.available,
			qty: u.qty === void 0 ? prev.qty : u.qty
		};
	}
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
var resetStock_createServerFn_handler = createServerRpc({
	id: "08e215f76fa376cf622d49bb0ca6d08af7f1b223e32441b26140e9e3d2fb64bf",
	name: "resetStock",
	filename: "src/fn/stock.ts"
}, (opts) => resetStock.__executeServer(opts));
var resetStock = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().min(1) })).handler(resetStock_createServerFn_handler, async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = buildDefaultStock();
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
//#endregion
export { getStock_createServerFn_handler, resetStock_createServerFn_handler, setManyStock_createServerFn_handler, setStockItem_createServerFn_handler };
