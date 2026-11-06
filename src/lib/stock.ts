import {
  bowls,
  drinks,
  desserts,
  allToppings,
  detailedMixIns,
  detailedProteins,
  detailedSauces,
} from "./data";

export type StockStatus = "available" | "low" | "out_of_stock";

export type StockItem = {
  id: string;
  name: string;
  category: "bowl" | "drink" | "dessert" | "topping" | "ingredient" | "sauce" | "protein";
  available: boolean;
  status: StockStatus;
  qty: number | null;
  lowThreshold: number;
  updatedAt?: string;
  updatedBy?: string;
};

export type StockMap = Record<string, StockItem>;

export interface StockHistoryEntry {
  id: string;
  itemId: string;
  itemName: string;
  action: "toggle" | "replenish" | "set_qty" | "mark_out_of_stock";
  previousQty: number | null;
  newQty: number | null;
  previousAvailable: boolean;
  newAvailable: boolean;
  user: string;
  timestamp: string;
}

export type StockSnapshot = {
  updatedAt: string;
  items: StockMap;
  history?: StockHistoryEntry[];
};

export function toppingKey(name: string): string {
  return `topping:${name.toLowerCase().trim()}`;
}

export function ingredientKey(name: string): string {
  return `ingredient:${name.toLowerCase().trim()}`;
}

export function sauceKey(name: string): string {
  return `sauce:${name.toLowerCase().trim()}`;
}

export function proteinKey(name: string): string {
  return `protein:${name.toLowerCase().trim()}`;
}

export function buildDefaultStock(): StockSnapshot {
  const items: StockMap = {};

  // 1. Bowls signatures & crousty
  for (const b of bowls) {
    items[b.id] = {
      id: b.id,
      name: b.name,
      category: "bowl",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 2. Boissons
  for (const d of drinks) {
    items[d.id] = {
      id: d.id,
      name: d.name,
      category: "drink",
      available: true,
      status: "available",
      qty: 24,
      lowThreshold: 6,
    };
  }

  // 3. Desserts
  for (const d of desserts) {
    const isSoldOut = Boolean(d.soldOut);
    items[d.id] = {
      id: d.id,
      name: d.name,
      category: "dessert",
      available: !isSoldOut,
      status: isSoldOut ? "out_of_stock" : "available",
      qty: isSoldOut ? 0 : 12,
      lowThreshold: 4,
    };
  }

  // 4. Toppings
  for (const t of allToppings) {
    const key = toppingKey(t);
    items[key] = {
      id: key,
      name: t,
      category: "topping",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 10,
    };
  }

  // 5. Ingrédients & Légumes frais
  for (const m of detailedMixIns) {
    const key = ingredientKey(m.name);
    items[key] = {
      id: key,
      name: m.name,
      category: "ingredient",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 6. Protéines fraîches
  for (const p of detailedProteins) {
    const key = proteinKey(p.name);
    items[key] = {
      id: key,
      name: p.name,
      category: "protein",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 7. Sauces
  for (const s of detailedSauces) {
    const key = sauceKey(s.name);
    items[key] = {
      id: key,
      name: s.name,
      category: "sauce",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  return {
    updatedAt: new Date().toISOString(),
    items,
    history: [],
  };
}

export function isItemAvailable(stock: StockSnapshot | null | undefined, id: string): boolean {
  const dessert = desserts.find((item) => item.id === id);
  if (dessert?.soldOut) return false;
  if (!stock?.items) return true;

  const entry = stock.items[id];
  if (!entry) return true;
  if (!entry.available) return false;
  if (entry.qty != null && entry.qty <= 0) return false;
  return true;
}

export function isIngredientAvailable(
  stock: StockSnapshot | null | undefined,
  name: string,
): boolean {
  if (!stock?.items) return true;
  const key = ingredientKey(name);
  const entry = stock.items[key];
  if (!entry) return true;
  if (!entry.available) return false;
  if (entry.qty != null && entry.qty <= 0) return false;
  return true;
}

export function catalogLabels(): {
  id: string;
  label: string;
  group: "bowl" | "drink" | "dessert" | "topping" | "ingredient" | "sauce" | "protein";
}[] {
  const stock = buildDefaultStock();
  return Object.values(stock.items).map((item) => ({
    id: item.id,
    label: item.name,
    group: item.category,
  }));
}
