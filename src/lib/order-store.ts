import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";
import type { Order } from "./orders";

type DbRow = {
  id: string;
  delivery_token: string | null;
  created_at: string;
  status: Order["status"];
  payment_method: Order["paymentMethod"];
  mollie_payment_id: string | null;
  customer_json: string;
  items_json: string;
  total: number | string;
  currency: "EUR";
  print_status: "pending" | "printing" | "printed" | "failed";
  printed_at: string | null;
  print_claimed_at: string | null;
  print_attempts: number;
  print_error: string | null;
};

function isPostgresConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

// ─── Stockage Local JSON (quand DATABASE_URL n'est pas configuré sur O2Switch) ───
const memoryOrders = new Map<string, Order>();
let memoryLoaded = false;

function getStoreFilePath(): string {
  const candidateDirs = [
    process.env.ORDERS_DATA_DIR,
    "/home/puzo3938/pokenbowl.be",
    process.cwd(),
    "/tmp",
  ].filter(Boolean) as string[];

  for (const dir of candidateDirs) {
    try {
      if (fs.existsSync(dir)) {
        return path.join(dir, "pokenbowl-orders.json");
      }
    } catch {}
  }
  return path.join(process.cwd(), "pokenbowl-orders.json");
}

function loadLocalOrders(): void {
  if (memoryLoaded) return;
  memoryLoaded = true;
  try {
    const filePath = getStoreFilePath();
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const list = JSON.parse(raw);
      if (Array.isArray(list)) {
        for (const item of list) {
          if (item?.id) {
            memoryOrders.set(item.id, item);
          }
        }
      }
    }
  } catch (err) {
    console.error("[OrderStore] Échec lecture fichier local commandes:", err);
  }
}

function saveLocalOrders(): void {
  try {
    const filePath = getStoreFilePath();
    const list = Array.from(memoryOrders.values());
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    console.error("[OrderStore] Échec sauvegarde fichier local commandes:", err);
  }
}

// ─── Stockage PostgreSQL Neon ──────────────────────────────────────────────────
let schemaReady: Promise<void> | undefined;

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL manquante. Connecte une base Postgres Neon au projet.",
    );
  }
  return neon(url);
}

async function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS orders (
          id TEXT PRIMARY KEY,
          delivery_token TEXT,
          created_at TIMESTAMPTZ NOT NULL,
          status TEXT NOT NULL,
          payment_method TEXT NOT NULL,
          mollie_payment_id TEXT,
          customer_json TEXT NOT NULL,
          items_json TEXT NOT NULL,
          total NUMERIC(12, 2) NOT NULL,
          currency TEXT NOT NULL DEFAULT 'EUR',
          print_status TEXT NOT NULL DEFAULT 'pending',
          printed_at TIMESTAMPTZ,
          print_attempts INTEGER NOT NULL DEFAULT 0,
          print_claimed_at TIMESTAMPTZ,
          print_error TEXT
        )
      `;
      await sql`
        ALTER TABLE orders ADD COLUMN IF NOT EXISTS delivery_token TEXT
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS orders_print_queue_idx
        ON orders (print_status, status, created_at)
      `;
      await sql`
        ALTER TABLE orders ADD COLUMN IF NOT EXISTS print_claimed_at TIMESTAMPTZ
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS orders_mollie_idx
        ON orders (mollie_payment_id)
      `;
      await sql`
        CREATE UNIQUE INDEX IF NOT EXISTS orders_delivery_token_idx
        ON orders (delivery_token) WHERE delivery_token IS NOT NULL
      `;
    })().catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  await schemaReady;
}

function rowToOrder(row: DbRow): Order {
  return {
    id: row.id,
    deliveryToken: row.delivery_token ?? undefined,
    createdAt: row.created_at,
    status: row.status,
    paymentMethod: row.payment_method,
    molliePaymentId: row.mollie_payment_id ?? undefined,
    customer: JSON.parse(row.customer_json) as Order["customer"],
    items: JSON.parse(row.items_json) as Order["items"],
    total: Number(row.total),
    currency: row.currency,
    printStatus: row.print_status,
    printedAt: row.printed_at,
    printAttempts: row.print_attempts,
    printError: row.print_error,
  };
}

export async function getOrderFromStore(id: string): Promise<Order | undefined> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    return memoryOrders.get(id);
  }

  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE id = ${id}
    LIMIT 1
  `;
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function getOrderByDeliveryToken(token: string): Promise<Order | undefined> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    return Array.from(memoryOrders.values()).find((o) => o.deliveryToken === token);
  }

  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE delivery_token = ${token}
    LIMIT 1
  `;
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function listOrdersFromStore(limit = 200): Promise<Order[]> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    return Array.from(memoryOrders.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }

  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map(rowToOrder);
}

export async function upsertOrder(order: Order): Promise<void> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    memoryOrders.set(order.id, { ...order });
    saveLocalOrders();
    return;
  }

  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO orders (
      id, delivery_token, created_at, status, payment_method, mollie_payment_id,
      customer_json, items_json, total, currency
    )
    VALUES (
      ${order.id},
      ${order.deliveryToken ?? null},
      ${order.createdAt},
      ${order.status},
      ${order.paymentMethod},
      ${order.molliePaymentId ?? null},
      ${JSON.stringify(order.customer)},
      ${JSON.stringify(order.items)},
      ${order.total},
      ${order.currency}
    )
    ON CONFLICT (id) DO UPDATE SET
      delivery_token = COALESCE(EXCLUDED.delivery_token, orders.delivery_token),
      status = EXCLUDED.status,
      payment_method = EXCLUDED.payment_method,
      mollie_payment_id = EXCLUDED.mollie_payment_id,
      customer_json = EXCLUDED.customer_json,
      items_json = EXCLUDED.items_json,
      total = EXCLUDED.total,
      currency = EXCLUDED.currency
  `;
}

export async function updateOrderStatus(orderId: string, status: Order["status"]): Promise<void> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    const order = memoryOrders.get(orderId);
    if (order) {
      order.status = status;
      saveLocalOrders();
    }
    return;
  }

  await ensureSchema();
  const sql = getSql();
  await sql`
    UPDATE orders
    SET status = ${status}
    WHERE id = ${orderId}
  `;
}

export async function requestOrderReprint(orderId: string): Promise<void> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    const order = memoryOrders.get(orderId);
    if (order) {
      order.printStatus = "pending";
      order.printError = null;
      saveLocalOrders();
    }
    return;
  }

  await ensureSchema();
  const sql = getSql();
  await sql`
    UPDATE orders
    SET print_status = 'pending',
        print_claimed_at = NULL,
        print_error = NULL
    WHERE id = ${orderId}
  `;
}

export async function claimNextPrintJob(): Promise<Order | undefined> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    const eligible = ["paid", "awaiting_pickup", "awaiting_delivery", "preparing", "ready", "delivering"];
    const next = Array.from(memoryOrders.values())
      .filter((o) => eligible.includes(o.status) && (o.printStatus === "pending" || !o.printStatus))
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())[0];
    if (next) {
      next.printStatus = "printing";
      next.printAttempts = (next.printAttempts || 0) + 1;
      saveLocalOrders();
    }
    return next;
  }

  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    UPDATE orders
    SET
      print_status = 'printing',
      print_claimed_at = NOW(),
      print_attempts = print_attempts + 1,
      print_error = NULL
    WHERE id = (
      SELECT id
      FROM orders
      WHERE status IN ('paid', 'awaiting_pickup', 'awaiting_delivery', 'preparing', 'ready', 'delivering')
        AND (
          print_status = 'pending'
          OR (print_status = 'printing' AND print_claimed_at < NOW() - INTERVAL '2 minutes')
        )
      ORDER BY created_at ASC
      LIMIT 1
      FOR UPDATE SKIP LOCKED
    )
    RETURNING id, delivery_token, created_at, status, payment_method, mollie_payment_id,
              customer_json, items_json, total, currency,
              print_status, printed_at, print_claimed_at, print_attempts, print_error
  `;
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function acknowledgePrint(
  orderId: string,
  success: boolean,
  errorMessage?: string,
): Promise<void> {
  if (!isPostgresConfigured()) {
    loadLocalOrders();
    const order = memoryOrders.get(orderId);
    if (order) {
      if (success) {
        order.printStatus = "printed";
        order.printedAt = new Date().toISOString();
        order.printError = null;
      } else {
        order.printStatus = "failed";
        order.printError = errorMessage ?? "Échec imprimante";
      }
      saveLocalOrders();
    }
    return;
  }

  await ensureSchema();
  const sql = getSql();

  if (success) {
    await sql`
      UPDATE orders
      SET print_status = 'printed',
          printed_at = NOW(),
          print_claimed_at = NULL,
          print_error = NULL
      WHERE id = ${orderId}
    `;
    return;
  }

  await sql`
    UPDATE orders
    SET print_status = 'failed',
        print_error = ${errorMessage ?? "Printer agent failed"}
    WHERE id = ${orderId}
  `;
}
