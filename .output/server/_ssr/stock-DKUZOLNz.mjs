import { i as drinks, n as bowls, r as desserts, t as allToppings } from "./data-DQd-2LC9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-DKUZOLNz.js
function toppingKey(name) {
	return `topping:${name}`;
}
function buildDefaultStock() {
	const items = {};
	for (const b of bowls) items[b.id] = {
		available: true,
		qty: null
	};
	for (const d of drinks) items[d.id] = {
		available: true,
		qty: null
	};
	for (const d of desserts) items[d.id] = {
		available: true,
		qty: null
	};
	for (const t of allToppings) items[toppingKey(t)] = {
		available: true,
		qty: null
	};
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items
	};
}
function isItemAvailable(stock, id) {
	if (!stock?.items) return true;
	const entry = stock.items[id];
	if (!entry) return true;
	if (!entry.available) return false;
	if (entry.qty != null && entry.qty <= 0) return false;
	return true;
}
function catalogLabels() {
	return [
		...bowls.map((b) => ({
			id: b.id,
			label: b.name,
			group: "bowl"
		})),
		...drinks.map((d) => ({
			id: d.id,
			label: d.name,
			group: "drink"
		})),
		...desserts.map((d) => ({
			id: d.id,
			label: d.name,
			group: "dessert"
		})),
		...allToppings.map((t) => ({
			id: toppingKey(t),
			label: t,
			group: "topping"
		}))
	];
}
//#endregion
export { catalogLabels as n, isItemAvailable as r, buildDefaultStock as t };
