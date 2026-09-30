import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Cb6OzpdX.mjs";
import { a as numberType, n as booleanType, o as objectType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-0mb-h1Np.js
var getStock = createServerFn({ method: "GET" }).handler(createSsrRpc("511defe839a5e1102b8bb0c4bc905f516f731e66b5893bf673574b68a2cc798f"));
var setStockItem = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	id: stringType().min(1),
	available: booleanType(),
	qty: numberType().int().min(0).nullable().optional()
})).handler(createSsrRpc("344ae2a8ed96db3241e90e9ee3089ec0df73f7602450a7faf6a43771144a5705"));
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	updates: arrayType(objectType({
		id: stringType(),
		available: booleanType(),
		qty: numberType().int().min(0).nullable().optional()
	}))
})).handler(createSsrRpc("b4ead3c5e8903f8b050b785eff4eb4b25d6e000d9c585032e252d84164ec0bd5"));
var resetStock = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().min(1) })).handler(createSsrRpc("08e215f76fa376cf622d49bb0ca6d08af7f1b223e32441b26140e9e3d2fb64bf"));
//#endregion
export { resetStock as n, setStockItem as r, getStock as t };
