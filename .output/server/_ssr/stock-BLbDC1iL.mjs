import { t as buildDefaultStock } from "./stock-DKUZOLNz.mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { a as numberType, n as booleanType, o as objectType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-BLbDC1iL.js
var STOCK_KEY = "pokenbowl:stock";
/** Fallback when Redis is not configured (not shared across serverless instances) */
var memoryStock = null;
function redisConfigured() {
	return Boolean((process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) && (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN));
}
function redisCreds() {
	return {
		url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "",
		token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
	};
}
async function redisCommand(command) {
	const { url, token } = redisCreds();
	const res = await fetch(`${url}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(command)
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Redis error ${res.status}: ${text}`);
	}
	return (await res.json()).result;
}
function mergeWithDefaults(partial) {
	const base = buildDefaultStock();
	return {
		updatedAt: partial.updatedAt || base.updatedAt,
		items: {
			...base.items,
			...partial.items
		}
	};
}
async function loadStock() {
	if (redisConfigured()) try {
		const raw = await redisCommand(["GET", STOCK_KEY]);
		if (typeof raw === "string" && raw) {
			const parsed = JSON.parse(raw);
			if (parsed?.items) return mergeWithDefaults(parsed);
		}
	} catch (e) {
		console.error("[stock] redis load failed", e);
	}
	if (memoryStock) return mergeWithDefaults(memoryStock);
	const fresh = buildDefaultStock();
	memoryStock = fresh;
	return fresh;
}
async function saveStock(stock) {
	stock.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	memoryStock = stock;
	if (redisConfigured()) await redisCommand([
		"SET",
		STOCK_KEY,
		JSON.stringify(stock)
	]);
}
function assertAdminPin(pin) {
	if (pin !== (process.env.STOCK_ADMIN_PIN || "vise2026")) throw new Error("Code admin incorrect");
}
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
