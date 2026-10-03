//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DONg4LSq.js
var manifest = {
	"08e215f76fa376cf622d49bb0ca6d08af7f1b223e32441b26140e9e3d2fb64bf": {
		functionName: "resetStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-vKYFBBVQ.mjs")
	},
	"243c2b184d864a499b1d71c0c6b5eb7e9bd0b88cb2359335c4d165aeafd87962": {
		functionName: "submitCheckout_createServerFn_handler",
		importer: () => import("./_ssr/checkout-Bvq9mZ6U.mjs")
	},
	"344ae2a8ed96db3241e90e9ee3089ec0df73f7602450a7faf6a43771144a5705": {
		functionName: "setStockItem_createServerFn_handler",
		importer: () => import("./_ssr/stock-vKYFBBVQ.mjs")
	},
	"511defe839a5e1102b8bb0c4bc905f516f731e66b5893bf673574b68a2cc798f": {
		functionName: "getStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-vKYFBBVQ.mjs")
	},
	"92944dec917326ce81275bbe893d3642fead0ec3cc3aa98995106b3743ad6174": {
		functionName: "getOrderStatus_createServerFn_handler",
		importer: () => import("./_ssr/checkout-Bvq9mZ6U.mjs")
	},
	"b4ead3c5e8903f8b050b785eff4eb4b25d6e000d9c585032e252d84164ec0bd5": {
		functionName: "setManyStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-vKYFBBVQ.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
