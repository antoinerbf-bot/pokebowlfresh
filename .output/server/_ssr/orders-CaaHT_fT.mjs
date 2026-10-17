//#region node_modules/.nitro/vite/services/ssr/assets/orders-CaaHT_fT.js
function generateOrderId() {
	return `PNB-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
//#endregion
export { generateOrderId as t };
