import { neon } from "@neondatabase/serverless";
import type { Order } from "./orders";

type DbRow = {
  id: string;
  created_at: string;
  status: Order["status"];
  payment_method: Order["paymentMethod"];
  mollie_payment_id: string | null;
  customer_json: string;
  items_json: string;
  total: number | string;
  currency: "EUR";
  print_status: "pending" | "printing" | "printed";
  printed_at: string | null;
  print_claimed_at: string | null;
  print_attempts: number;
  print_error: string | null;
};

let schemaReady: Promise<void> | undefined;

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL manquante. Connecte une base Postgres Neon au projet Vercel.",
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
    createdAt: row.created_at,
    status: row.status,
    paymentMethod: row.payment_method,
    molliePaymentId: row.mollie_payment_id ?? undefined,
    customer: JSON.parse(row.customer_json) as Order["customer"],
    items: JSON.parse(row.items_json) as Order["items"],
    total: Number(row.total),
    currency: row.currency,
  };
}

export async function getOrderFromStore(id: string): Promise<Order | undefined> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    SELECT id, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE id = ${id}
    LIMIT 1
  `;
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function listOrdersFromStore(): Promise<Order[]> {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql<DbRow>`
    SELECT id, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_attempts, print_error
    FROM orders
    ORDER BY created_at DESC
    LIMIT 200
  `;
  return rows.map(rowToOrder);
}

export async function upsertOrder(order: Order): Promise<void> {
  await ensureSchema();
  const sql = getSql();
  await sql`
    INSERT INTO orders (
      id, created_at, status, payment_method, mollie_payment_id,
      customer_json, items_json, total, currency
    )
    VALUES (
      ${order.id},
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
      status = EXCLUDED.status,
      payment_method = EXCLUDED.payment_method,
      mollie_payment_id = EXCLUDED.mollie_payment_id,
      customer_json = EXCLUDED.customer_json,
      items_json = EXCLUDED.items_json,
      total = EXCLUDED.total,
      currency = EXCLUDED.currency
  `;
}

export async function claimNextPrintJob(): Promise<Order | undefined> {
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
      WHERE status IN ('paid', 'awaiting_pickup')
        AND (
          print_status = 'pending'
          OR (print_status = 'printing' AND print_claimed_at < NOW() - INTERVAL '2 minutes')
        )
      ORDER BY created_at ASC
      LIMIT 1
      FOR UPDATE SKIP LOCKED
    )
    RETURNING id, created_at, status, payment_method, mollie_payment_id,
              customer_json, items_json, total, currency,
              print_status, printed_at, print_attempts, print_error
  `;
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function acknowledgePrint(
  orderId: string,
  success: boolean,
  errorMessage?: string,
): Promise<void> {
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
    SET print_status = 'pending',
        print_error = ${errorMessage ?? "Printer agent failed"}
    WHERE id = ${orderId}
  `;
}
