//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-sEsi1z_0.js
var manifest = {
	"08e215f76fa376cf622d49bb0ca6d08af7f1b223e32441b26140e9e3d2fb64bf": {
		functionName: "resetStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-CVmJ42cP.mjs")
	},
	"243c2b184d864a499b1d71c0c6b5eb7e9bd0b88cb2359335c4d165aeafd87962": {
		functionName: "submitCheckout_createServerFn_handler",
		importer: () => import("./_ssr/checkout-DXhelcWr.mjs")
	},
	"344ae2a8ed96db3241e90e9ee3089ec0df73f7602450a7faf6a43771144a5705": {
		functionName: "setStockItem_createServerFn_handler",
		importer: () => import("./_ssr/stock-CVmJ42cP.mjs")
	},
	"511defe839a5e1102b8bb0c4bc905f516f731e66b5893bf673574b68a2cc798f": {
		functionName: "getStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-CVmJ42cP.mjs")
	},
	"6515ae2b4b334ce5935aaa2290fe5a760aa9de9e4dbd2160f973f92e3ad32045": {
		functionName: "triggerReprint_createServerFn_handler",
		importer: () => import("./_ssr/pos-YarEtdAd.mjs")
	},
	"6df01f8264c863e15506dc49e8b2d2a94b806dd823923c9fc73a10634cf60562": {
		functionName: "getPosOrders_createServerFn_handler",
		importer: () => import("./_ssr/pos-YarEtdAd.mjs")
	},
	"7c6d647b6f9e61f1dd19432e0ce31dfb70d3dd1840600bf36fabbc33694dfca9": {
		functionName: "getDeliveryOrder_createServerFn_handler",
		importer: () => import("./_ssr/delivery-jU310Kpv.mjs")
	},
	"92944dec917326ce81275bbe893d3642fead0ec3cc3aa98995106b3743ad6174": {
		functionName: "getOrderStatus_createServerFn_handler",
		importer: () => import("./_ssr/checkout-DXhelcWr.mjs")
	},
	"ae058d51b0dbcb532d02de73a2c4d7357c52b93b90a304439be634b235fa5013": {
		functionName: "getOrderReceipts_createServerFn_handler",
		importer: () => import("./_ssr/pos-YarEtdAd.mjs")
	},
	"b4ead3c5e8903f8b050b785eff4eb4b25d6e000d9c585032e252d84164ec0bd5": {
		functionName: "setManyStock_createServerFn_handler",
		importer: () => import("./_ssr/stock-CVmJ42cP.mjs")
	},
	"c9404c0b075a83418748a0c227e03f7d1395bb14f3a6f06bf310f5ce8548a74b": {
		functionName: "ackPosPrint_createServerFn_handler",
		importer: () => import("./_ssr/pos-YarEtdAd.mjs")
	},
	"d448a7ae3667125e81da09dad6f6dec1c9565eb0f9398367da064dcdf0e9c039": {
		functionName: "setPosOrderStatus_createServerFn_handler",
		importer: () => import("./_ssr/pos-YarEtdAd.mjs")
	},
	"ea990cd4d6bbc6fbf345b501afa62563c287d1be675cd2b95248e0177b34886f": {
		functionName: "updateDeliveryStatus_createServerFn_handler",
		importer: () => import("./_ssr/delivery-jU310Kpv.mjs")
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
