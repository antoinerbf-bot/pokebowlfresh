import { bowls, drinks, desserts, allToppings } from "./data";

export type StockItem = {
  available: boolean;
  /** Optional limited quantity; null = unlimited while available */
  qty: number | null;
};

export type StockMap = Record<string, StockItem>;

export type StockSnapshot = {
  updatedAt: string;
  items: StockMap;
};

export function toppingKey(name: string): string {
  return `topping:${name}`;
}

export function buildDefaultStock(): StockSnapshot {
  const items: StockMap = {};

  for (const b of bowls) {
    items[b.id] = { available: true, qty: null };
  }
  for (const d of drinks) {
    items[d.id] = { available: true, qty: null };
  }
  for (const d of desserts) {
    items[d.id] = { available: true, qty: null };
  }
  for (const t of allToppings) {
    items[toppingKey(t)] = { available: true, qty: null };
  }

  return {
    updatedAt: new Date().toISOString(),
    items,
  };
}

export function isItemAvailable(stock: StockSnapshot | null | undefined, id: string): boolean {
  if (!stock?.items) return true;
  const entry = stock.items[id];
  if (!entry) return true;
  if (!entry.available) return false;
  if (entry.qty != null && entry.qty <= 0) return false;
  return true;
}

export function catalogLabels(): { id: string; label: string; group: "bowl" | "drink" | "dessert" | "topping" }[] {
  return [
    ...bowls.map((b) => ({ id: b.id, label: b.name, group: "bowl" as const })),
    ...drinks.map((d) => ({ id: d.id, label: d.name, group: "drink" as const })),
    ...desserts.map((d) => ({ id: d.id, label: d.name, group: "dessert" as const })),
    ...allToppings.map((t) => ({ id: toppingKey(t), label: t, group: "topping" as const })),
  ];
}
