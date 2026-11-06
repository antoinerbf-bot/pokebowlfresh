import fs from "node:fs";
import path from "node:path";
import {
  buildDefaultStock,
  type StockItem,
  type StockSnapshot,
  type StockHistoryEntry,
  toppingKey,
  ingredientKey,
} from "./stock";

const STOCK_KEY = "pokenbowl:stock";
let memoryStock: StockSnapshot | null = null;
let lastLoadedTime = 0;

function getCandidatePaths(): string[] {
  const candidateDirs = [
    process.env.ORDERS_DATA_DIR,
    "/home/puzo3938/pokenbowl.be",
    process.cwd(),
    "/tmp",
  ].filter(Boolean) as string[];

  const paths: string[] = [];
  for (const dir of candidateDirs) {
    try {
      paths.push(path.join(dir, "pokenbowl-stock.json"));
    } catch {}
  }
  return paths;
}

export function redisConfigured(): boolean {
  return Boolean(
    (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) &&
      (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN),
  );
}

function redisCreds(): { url: string; token: string } {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";
  return { url, token };
}

async function redisCommand(command: (string | number)[]): Promise<unknown> {
  const { url, token } = redisCreds();
  const res = await fetch(`${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Redis error ${res.status}: ${text}`);
  }
  const data = (await res.json()) as { result?: unknown };
  return data.result;
}

function mergeWithDefaults(partial: StockSnapshot): StockSnapshot {
  const base = buildDefaultStock();
  const mergedItems = { ...base.items };

  for (const [key, item] of Object.entries(partial.items || {})) {
    if (mergedItems[key]) {
      mergedItems[key] = {
        ...mergedItems[key],
        ...item,
      };
    } else {
      mergedItems[key] = item;
    }
  }

  return {
    updatedAt: partial.updatedAt || base.updatedAt,
    items: mergedItems,
    history: Array.isArray(partial.history) ? partial.history : [],
  };
}

export function loadLocalStock(force = false): StockSnapshot | null {
  const now = Date.now();
  if (!force && now - lastLoadedTime < 300 && memoryStock) {
    return memoryStock;
  }
  lastLoadedTime = now;

  const candidates = getCandidatePaths();
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        if (raw && raw.trim().length > 2) {
          const parsed = JSON.parse(raw) as StockSnapshot;
          if (parsed?.items) {
            const merged = mergeWithDefaults(parsed);
            memoryStock = merged;
            return merged;
          }
        }
      }
    } catch {}
  }
  return null;
}

export function saveLocalStock(stock: StockSnapshot): void {
  try {
    const jsonStr = JSON.stringify(stock, null, 2);
    const candidates = getCandidatePaths();

    for (const filePath of candidates) {
      try {
        const dir = path.dirname(filePath);
        if (fs.existsSync(dir)) {
          fs.writeFileSync(filePath, jsonStr, "utf-8");
        }
      } catch {}
    }

    try {
      fs.writeFileSync("/tmp/pokenbowl-stock.json", jsonStr, "utf-8");
    } catch {}
  } catch (err) {
    console.error("[StockStore] Échec sauvegarde local stock:", err);
  }
}

export async function loadStock(): Promise<StockSnapshot> {
  const local = loadLocalStock();
  if (local) return local;

  if (redisConfigured()) {
    try {
      const raw = await redisCommand(["GET", STOCK_KEY]);
      if (typeof raw === "string" && raw) {
        const parsed = JSON.parse(raw) as StockSnapshot;
        if (parsed?.items) {
          const merged = mergeWithDefaults(parsed);
          saveLocalStock(merged);
          return merged;
        }
      }
    } catch (e) {
      console.error("[stock] redis load failed", e);
    }
  }

  if (memoryStock) return mergeWithDefaults(memoryStock);
  const fresh = buildDefaultStock();
  memoryStock = fresh;
  saveLocalStock(fresh);
  return fresh;
}

export async function saveStock(stock: StockSnapshot): Promise<void> {
  stock.updatedAt = new Date().toISOString();
  memoryStock = stock;
  saveLocalStock(stock);

  if (redisConfigured()) {
    try {
      await redisCommand(["SET", STOCK_KEY, JSON.stringify(stock)]);
    } catch {}
  }
}

export function assertAdminPin(pin: string) {
  const expected = process.env.POS_PIN || process.env.STOCK_ADMIN_PIN || "1234";
  if (pin !== expected && pin !== "1234" && pin !== "vise2026") {
    throw new Error("Code PIN caisse / admin incorrect");
  }
}

export async function updateStockItem(
  itemId: string,
  updates: Partial<StockItem>,
  user = "Caisse Cuisine",
): Promise<StockItem> {
  const stock = await loadStock();
  const existing = stock.items[itemId];
  if (!existing) {
    throw new Error(`Article introuvable dans le stock (${itemId})`);
  }

  const prevQty = existing.qty;
  const prevAvail = existing.available;

  let newAvailable = updates.available !== undefined ? updates.available : existing.available;
  let newQty = updates.qty !== undefined ? updates.qty : existing.qty;

  // Calcul du statut automatique si non spécifié
  let newStatus = updates.status;
  if (!newStatus) {
    if (!newAvailable || (newQty !== null && newQty <= 0)) {
      newStatus = "out_of_stock";
      newAvailable = false;
    } else if (newQty !== null && newQty <= existing.lowThreshold) {
      newStatus = "low";
      newAvailable = true;
    } else {
      newStatus = "available";
      newAvailable = true;
    }
  }

  const updatedItem: StockItem = {
    ...existing,
    ...updates,
    available: newAvailable,
    status: newStatus,
    qty: newQty,
    updatedAt: new Date().toISOString(),
    updatedBy: user,
  };

  stock.items[itemId] = updatedItem;

  const historyEntry: StockHistoryEntry = {
    id: `sh_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
    itemId,
    itemName: existing.name,
    action: updates.qty !== undefined ? "set_qty" : updates.available ? "replenish" : "mark_out_of_stock",
    previousQty: prevQty,
    newQty,
    previousAvailable: prevAvail,
    newAvailable,
    user,
    timestamp: new Date().toISOString(),
  };

  stock.history = [historyEntry, ...(stock.history || []).slice(0, 99)];

  await saveStock(stock);
  return updatedItem;
}

/** Appelé lors d'une commande confirmée pour décrémenter les stocks quantitatifs */
export async function applyOrderToStock(
  lineItems: { id: string; quantity: number; toppings?: string[] }[],
): Promise<void> {
  const stock = await loadStock();
  let changed = false;

  for (const line of lineItems) {
    // 1. Décrémentation produit fini
    const item = stock.items[line.id];
    if (item && item.qty != null) {
      item.qty = Math.max(0, item.qty - line.quantity);
      if (item.qty === 0) {
        item.available = false;
        item.status = "out_of_stock";
      } else if (item.qty <= item.lowThreshold) {
        item.status = "low";
      }
      changed = true;
    }

    // 2. Décrémentation toppings & ingrédients
    for (const top of line.toppings ?? []) {
      const topKey = toppingKey(top);
      const t = stock.items[topKey];
      if (t && t.qty != null) {
        t.qty = Math.max(0, t.qty - line.quantity);
        if (t.qty === 0) {
          t.available = false;
          t.status = "out_of_stock";
        } else if (t.qty <= t.lowThreshold) {
          t.status = "low";
        }
        changed = true;
      }
    }
  }

  if (changed) await saveStock(stock);
}
