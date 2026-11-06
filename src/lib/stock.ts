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
  category: "bowl" | "drink" | "dessert" | "topping" | "ingredient" | "sauce" | "protein" | "base";
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

export function baseKey(name: string): string {
  return `base:${name.toLowerCase().trim()}`;
}

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

export function getItemEmoji(item: { name: string; category: string }): string {
  const n = item.name.toLowerCase();
  if (item.category === "bowl") {
    if (n.includes("crousty") || n.includes("chicken")) return "🍗";
    if (n.includes("saumon") || n.includes("salmon")) return "🐟";
    if (n.includes("scampi")) return "🦐";
    return "🥣";
  }
  if (item.category === "protein") {
    if (n.includes("saumon")) return "🐟";
    if (n.includes("scampi")) return "🦐";
    if (n.includes("poulet")) return "🍗";
    if (n.includes("boeuf")) return "🥩";
    if (n.includes("tofu")) return "🌱";
    return "🥩";
  }
  if (item.category === "base") return "🍚";
  if (item.category === "ingredient") {
    if (n.includes("avocat") || n.includes("guacamole")) return "🥑";
    if (n.includes("brocoli")) return "🥦";
    if (n.includes("mangue")) return "🥭";
    if (n.includes("feta")) return "🧀";
    if (n.includes("jalapeno") || n.includes("piment")) return "🌶️";
    if (n.includes("carotte")) return "🥕";
    if (n.includes("tomate")) return "🍅";
    if (n.includes("concombre")) return "🥒";
    if (n.includes("edamame")) return "🫘";
    if (n.includes("mais")) return "🌽";
    if (n.includes("oignon")) return "🧅";
    if (n.includes("poivron")) return "🫑";
    if (n.includes("algue")) return "🌿";
    if (n.includes("patate")) return "🍠";
    if (n.includes("houmous")) return "🧆";
    return "🥗";
  }
  if (item.category === "topping") {
    if (n.includes("cajou")) return "🥜";
    if (n.includes("oignon")) return "🧅";
    return "✨";
  }
  if (item.category === "sauce") return "🍯";
  if (item.category === "drink") return "🥤";
  if (item.category === "dessert") return "🍰";
  return "📦";
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

  // 1.2 Crée ton Poké Bowl Sur-mesure
  items["cree-ton-bowl"] = {
    id: "cree-ton-bowl",
    name: "Crée ton Bowl (Sur-Mesure)",
    category: "bowl",
    available: true,
    status: "available",
    qty: null,
    lowThreshold: 5,
  };

  // 1.3 Formule Étudiante Crousty
  items["formule-etudiante"] = {
    id: "formule-etudiante",
    name: "Formule Étudiante Crousty (11 €)",
    category: "bowl",
    available: true,
    status: "available",
    qty: null,
    lowThreshold: 5,
  };

  // 2. Bases de Poké
  const bases = [
    { id: "riz", name: "Riz Vinaigré" },
    { id: "riz-complet", name: "Riz Complet" },
    { id: "quinoa", name: "Quinoa Bio" },
  ];
  for (const b of bases) {
    const key = baseKey(b.id);
    items[key] = {
      id: key,
      name: `Base ${b.name}`,
      category: "base",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 3. Protéines fraîches
  const allProteins = [
    { id: "poulet", name: "Poulet Mariné" },
    { id: "saumon", name: "Saumon Frais Découpé Minute" },
    { id: "scampis", name: "Scampis Grillés" },
    { id: "poulet-crousty", name: "Poulet Croustillant Chaud" },
    { id: "boeuf", name: "Boeuf Effiloché" },
    { id: "tofu", name: "Tofu Mariné Bio" },
  ];
  for (const p of allProteins) {
    const key = proteinKey(p.id);
    items[key] = {
      id: key,
      name: `Protéine : ${p.name}`,
      category: "protein",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 4. Ingrédients & Légumes frais (16 mix-ins)
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

  // 5. Sauces artisanales
  for (const s of detailedSauces) {
    const key = sauceKey(s.name);
    items[key] = {
      id: key,
      name: `Sauce : ${s.name}`,
      category: "sauce",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 5,
    };
  }

  // 6. Toppings croustillants
  const toppingsList = ["Oignon frit", "Noix de cajou"];
  for (const t of toppingsList) {
    const key = toppingKey(t);
    items[key] = {
      id: key,
      name: `Topping : ${t}`,
      category: "topping",
      available: true,
      status: "available",
      qty: null,
      lowThreshold: 10,
    };
  }

  // 7. Boissons fraîches
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

  // 8. Desserts maison
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
  if (entry.status === "out_of_stock") return false;
  if (entry.qty != null && entry.qty <= 0) return false;
  return true;
}

export function isIngredientAvailable(
  stock: StockSnapshot | null | undefined,
  name: string,
): boolean {
  if (!stock?.items) return true;
  const key = ingredientKey(name);
  const entry =
    stock.items[key] ||
    stock.items[toppingKey(name)] ||
    stock.items[sauceKey(name)] ||
    stock.items[proteinKey(name)] ||
    stock.items[baseKey(name)] ||
    stock.items[`ingredient:${name.toLowerCase().replace(/s$/, "")}`];
  if (!entry) return true;
  if (!entry.available) return false;
  if (entry.status === "out_of_stock") return false;
  if (entry.qty != null && entry.qty <= 0) return false;
  return true;
}

export function catalogLabels(): {
  id: string;
  label: string;
  group: "bowl" | "drink" | "dessert" | "topping" | "ingredient" | "sauce" | "protein" | "base";
}[] {
  const stock = buildDefaultStock();
  return Object.values(stock.items).map((item) => ({
    id: item.id,
    label: item.name,
    group: item.category,
  }));
}
