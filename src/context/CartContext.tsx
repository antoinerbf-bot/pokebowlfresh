import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;     // prix de base du produit
  price: number;         // prix final (base + toppings payants)
  quantity: number;
  toppings: string[];    // toppings ajoutés
  removedIngredients: string[];  // ingrédients retirés
  image?: string;
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

const CartContext = createContext<CartContextType | undefined>(undefined);

function itemKey(item: Pick<CartItem, "id" | "toppings" | "removedIngredients">) {
  return `${item.id}::${[...item.toppings].sort().join(",")}::${[...item.removedIngredients].sort().join(",")}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
