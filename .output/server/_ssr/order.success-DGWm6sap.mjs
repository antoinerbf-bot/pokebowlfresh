import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order.success-DGWm6sap.js
var $$splitComponentImporter = () => import("./order.success-BRwcM4r5.mjs");
var Route = createFileRoute("/order/success")({
	validateSearch: (search) => ({
		orderId: typeof search.orderId === "string" ? search.orderId : void 0,
		method: typeof search.method === "string" ? search.method : void 0
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
