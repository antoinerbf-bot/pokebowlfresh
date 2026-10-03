import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartContext-BoTWTco9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartContext = (0, import_react.createContext)(void 0);
function itemKey(item) {
	return `${item.id}::${[...item.toppings].sort().join(",")}::${[...item.removedIngredients].sort().join(",")}`;
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
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
