import {
  buildDefaultStock,
  type StockItem,
  type StockSnapshot,
} from "./stock";

const STOCK_KEY = "pokenbowl:stock";

/** Fallback when Redis is not configured (not shared across serverless instances) */
let memoryStock: StockSnapshot | null = null;

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
  return {
    updatedAt: partial.updatedAt || base.updatedAt,
    items: { ...base.items, ...partial.items },
  };
}

export async function loadStock(): Promise<StockSnapshot> {
  if (redisConfigured()) {
    try {
      const raw = await redisCommand(["GET", STOCK_KEY]);
      if (typeof raw === "string" && raw) {
        const parsed = JSON.parse(raw) as StockSnapshot;
        if (parsed?.items) return mergeWithDefaults(parsed);
      }
    } catch (e) {
      console.error("[stock] redis load failed", e);
    }
  }

  if (memoryStock) return mergeWithDefaults(memoryStock);
  const fresh = buildDefaultStock();
  memoryStock = fresh;
  return fresh;
}

export async function saveStock(stock: StockSnapshot): Promise<void> {
  stock.updatedAt = new Date().toISOString();
  memoryStock = stock;

  if (redisConfigured()) {
    await redisCommand(["SET", STOCK_KEY, JSON.stringify(stock)]);
  }
}

export function assertAdminPin(pin: string) {
  const expected = process.env.STOCK_ADMIN_PIN || "vise2026";
  if (pin !== expected) {
    throw new Error("Code admin incorrect");
  }
}

/** Called when an order is confirmed — decrements limited quantities */
export async function applyOrderToStock(
  lineItems: { id: string; quantity: number; toppings?: string[] }[],
): Promise<void> {
  const stock = await loadStock();
  let changed = false;

  for (const line of lineItems) {
    const item = stock.items[line.id];
    if (item && item.qty != null) {
      item.qty = Math.max(0, item.qty - line.quantity);
      if (item.qty === 0) item.available = false;
      changed = true;
    }
    for (const topping of line.toppings ?? []) {
      const key = `topping:${topping}`;
      const t = stock.items[key];
      if (t && t.qty != null) {
        t.qty = Math.max(0, t.qty - line.quantity);
        if (t.qty === 0) t.available = false;
        changed = true;
      }
    }
  }

  if (changed) await saveStock(stock);
}
