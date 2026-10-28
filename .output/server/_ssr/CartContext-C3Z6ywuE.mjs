import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartContext-C3Z6ywuE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CART_STORAGE_KEY = "pnb_cart_v1";
var CartContext = (0, import_react.createContext)(void 0);
function itemKey(item) {
	return `${item.id}::${[...item.toppings].sort().join(",")}::${[...item.removedIngredients].sort().join(",")}`;
}
function normalizeStoredCartItem(raw) {
	if (!raw || typeof raw !== "object") return null;
	const item = raw;
	if (typeof item["id"] !== "string" || typeof item["name"] !== "string" || typeof item["price"] !== "number" || !Number.isFinite(item["price"]) || item["price"] <= 0 || typeof item["quantity"] !== "number" || !Number.isInteger(item["quantity"]) || item["quantity"] <= 0) return null;
	const toppings = Array.isArray(item["toppings"]) ? item["toppings"].filter((t) => typeof t === "string") : [];
	const removedIngredients = Array.isArray(item["removedIngredients"]) ? item["removedIngredients"].filter((t) => typeof t === "string") : [];
	const basePrice = typeof item["basePrice"] === "number" && Number.isFinite(item["basePrice"]) ? item["basePrice"] : item["price"];
	const image = typeof item["image"] === "string" ? item["image"] : void 0;
	return {
		id: item["id"],
		name: item["name"],
		basePrice,
		price: item["price"],
		quantity: item["quantity"],
		toppings,
		removedIngredients,
		...image ? { image } : {}
	};
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isHydrated, setIsHydrated] = (0, import_react.useState)(false);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const saved = window.localStorage.getItem(CART_STORAGE_KEY);
			if (saved) {
				const parsed = JSON.parse(saved);
				if (Array.isArray(parsed)) {
					const valid = parsed.map(normalizeStoredCartItem).filter((i) => i !== null);
					if (valid.length > 0) setItems((prev) => prev.length === 0 ? valid : prev);
				}
			}
		} catch {} finally {
			setIsHydrated(true);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isHydrated) return;
		try {
			window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
		} catch {}
	}, [items, isHydrated]);
	const addItem = (newItem) => {
		setItems((prev) => {
			const key = itemKey(newItem);
			if (prev.find((item) => itemKey(item) === key)) return prev.map((item) => itemKey(item) === key ? {
				...item,
				quantity: item.quantity + newItem.quantity
			} : item);
			return [...prev, newItem];
		});
		setIsCartOpen(true);
	};
	const removeItem = (id, toppings, removedIngredients) => {
		const key = itemKey({
			id,
			toppings,
			removedIngredients
		});
		setItems((prev) => prev.filter((item) => itemKey(item) !== key));
	};
	const updateQuantity = (id, toppings, removedIngredients, quantity) => {
		if (quantity <= 0) {
			removeItem(id, toppings, removedIngredients);
			return;
		}
		const key = itemKey({
			id,
			toppings,
			removedIngredients
		});
		setItems((prev) => prev.map((item) => itemKey(item) === key ? {
			...item,
			quantity
		} : item));
	};
	const clearCart = () => setItems([]);
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			items,
			addItem,
			removeItem,
			updateQuantity,
			clearCart,
			total,
			isCartOpen,
			setIsCartOpen
		},
		children
	});
}
function useCart() {
	const context = (0, import_react.useContext)(CartContext);
	if (!context) throw new Error("useCart must be used within a CartProvider");
	return context;
}
//#endregion
export { useCart as n, CartProvider as t };
