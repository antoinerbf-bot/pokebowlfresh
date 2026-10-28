import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;     // prix de base du produit
  price: number;         // prix final (base + toppings payants)
  quantity: number;
  toppings: string[];    // toppings ajoutés
  removedIngredients: string[];  // ingrédients retirés
  image?: string | undefined;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, toppings: string[], removedIngredients: string[]) => void;
  updateQuantity: (id: string, toppings: string[], removedIngredients: string[], quantity: number) => void;
  clearCart: () => void;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CART_STORAGE_KEY = "pnb_cart_v1";

const CartContext = createContext<CartContextType | undefined>(undefined);

function itemKey(item: Pick<CartItem, "id" | "toppings" | "removedIngredients">) {
  return `${item.id}::${[...item.toppings].sort().join(",")}::${[...item.removedIngredients].sort().join(",")}`;
}

function normalizeStoredCartItem(raw: unknown): CartItem | null {
  if (!raw || typeof raw !== "object") return null;
  const item = raw as Record<string, unknown>;
  if (
    typeof item["id"] !== "string" ||
    typeof item["name"] !== "string" ||
    typeof item["price"] !== "number" ||
    !Number.isFinite(item["price"]) ||
    item["price"] <= 0 ||
    typeof item["quantity"] !== "number" ||
    !Number.isInteger(item["quantity"]) ||
    item["quantity"] <= 0
  ) {
    return null;
  }
  const toppings = Array.isArray(item["toppings"])
    ? item["toppings"].filter((t): t is string => typeof t === "string")
    : [];
  const removedIngredients = Array.isArray(item["removedIngredients"])
    ? item["removedIngredients"].filter((t): t is string => typeof t === "string")
    : [];
  const basePrice =
    typeof item["basePrice"] === "number" && Number.isFinite(item["basePrice"])
      ? item["basePrice"]
      : item["price"];
  const image = typeof item["image"] === "string" ? item["image"] : undefined;

  return {
    id: item["id"],
    name: item["name"],
    basePrice,
    price: item["price"],
    quantity: item["quantity"],
    toppings,
    removedIngredients,
    ...(image ? { image } : {}),
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Hydrate cart from localStorage on client mount (avoids SSR hydration mismatch)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const valid = parsed
            .map(normalizeStoredCartItem)
            .filter((i): i is CartItem => i !== null);
          if (valid.length > 0) {
            setItems((prev) => (prev.length === 0 ? valid : prev));
          }
        }
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist cart changes to localStorage after hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota/privacy errors
    }
  }, [items, isHydrated]);

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const key = itemKey(newItem);
      const existing = prev.find((item) => itemKey(item) === key);
      if (existing) {
        return prev.map((item) =>
          itemKey(item) === key
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string, toppings: string[], removedIngredients: string[]) => {
    const key = itemKey({ id, toppings, removedIngredients });
    setItems((prev) => prev.filter((item) => itemKey(item) !== key));
  };

  const updateQuantity = (
    id: string,
    toppings: string[],
    removedIngredients: string[],
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(id, toppings, removedIngredients);
      return;
    }
    const key = itemKey({ id, toppings, removedIngredients });
    setItems((prev) =>
      prev.map((item) => (itemKey(item) === key ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
