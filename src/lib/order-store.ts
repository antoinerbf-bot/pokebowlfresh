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

// ─── Stockage Local JSON (Multi-processus Phusion Passenger O2Switch) ───
const memoryOrders = new Map<string, Order>();
let lastLoadedTime = 0;

function getStoreCandidatePaths(): string[] {
  const candidateDirs = [
    process.env.ORDERS_DATA_DIR,
    "/home/puzo3938/pokenbowl.be",
    process.cwd(),
    "/tmp",
  ].filter(Boolean) as string[];

  const paths: string[] = [];
  for (const dir of candidateDirs) {
    try {
      paths.push(path.join(dir, "pokenbowl-orders.json"));
    } catch {}
  }
  return paths;
}

function getStoreFilePath(): string {
  const candidates = getStoreCandidatePaths();
  // 1. Si le fichier existe déjà dans l'un des dossiers, le réutiliser
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return p;
    } catch {}
  }
  // 2. Sinon chercher le premier dossier parent existant
  for (const p of candidates) {
    try {
      const dir = path.dirname(p);
      if (fs.existsSync(dir)) return p;
    } catch {}
  }
  return path.join(process.cwd(), "pokenbowl-orders.json");
}

export function loadLocalOrders(force = false): void {
  const now = Date.now();
  // Ne pas recharger plus d'une fois toutes les 300ms sauf si forcé
  if (!force && now - lastLoadedTime < 300 && memoryOrders.size > 0) {
    return;
  }
  lastLoadedTime = now;

  const candidates = getStoreCandidatePaths();
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        if (raw && raw.trim().length > 2) {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) {
            for (const item of list) {
              if (item?.id) {
                const existing = memoryOrders.get(item.id);
                if (!existing || item.status !== existing.status || item.deliveryToken || !existing.deliveryToken) {
                  memoryOrders.set(item.id, item);
                }
              }
            }
          }
        }
      }
    } catch (err) {
      // Ignorer les erreurs individuelles de lecture
    }
  }
}

export function saveLocalOrders(): void {
  try {
    const list = Array.from(memoryOrders.values());
    const jsonStr = JSON.stringify(list, null, 2);
    const candidates = getStoreCandidatePaths();

    for (const filePath of candidates) {
      try {
        const dir = path.dirname(filePath);
        if (fs.existsSync(dir)) {
          fs.writeFileSync(filePath, jsonStr, "utf-8");
        }
      } catch {}
    }

    // Sauvegarde miroir ultra-fiable dans /tmp (accessible par tous les workers Passenger)
    try {
      fs.writeFileSync("/tmp/pokenbowl-orders.json", jsonStr, "utf-8");
    } catch {}
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
  const rawId = (id ?? "").trim();
  if (!rawId) return undefined;
  const cleanId = decodeURIComponent(rawId).trim();
  const lowerId = cleanId.toLowerCase();

  // 1. Synchronisation disque immédiate
  loadLocalOrders(true);
  const localMatch =
    memoryOrders.get(cleanId) ||
    Array.from(memoryOrders.values()).find((o) => {
      if (!o) return false;
      const oId = (o.id ?? "").trim();
      const dt = (o.deliveryToken ?? "").trim();
      return (
        oId === cleanId ||
        oId.toLowerCase() === lowerId ||
        dt === cleanId ||
        dt.toLowerCase() === lowerId
      );
    });

  if (localMatch) return localMatch;

  // 2. Si Postgres configuré, requêter la base
  if (isPostgresConfigured()) {
    try {
      await ensureSchema();
      const sql = getSql();
      const rows = (await sql`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE id = ${cleanId}
           OR delivery_token = ${cleanId}
           OR LOWER(id) = ${lowerId}
           OR LOWER(delivery_token) = ${lowerId}
        LIMIT 1
      `) as DbRow[];
      const row = rows[0];
      if (row) return rowToOrder(row);
    } catch (err) {
      console.error("[OrderStore] Erreur getOrderFromStore Postgres:", err);
    }
  }

  return undefined;
}

export async function getOrderByDeliveryToken(token: string): Promise<Order | undefined> {
  const rawToken = (token ?? "").trim();
  if (!rawToken) return undefined;
  const cleanToken = decodeURIComponent(rawToken).trim();
  const lowerToken = cleanToken.toLowerCase();

  // 1. Toujours forcer le rechargement depuis le disque partagé
  loadLocalOrders(true);

  // 2. Recherche tolérante locale : par deliveryToken OU par ID de commande (insensible à la casse)
  const localMatch = Array.from(memoryOrders.values()).find((o) => {
    if (!o) return false;
    const dt = (o.deliveryToken ?? "").trim();
    const id = (o.id ?? "").trim();
    return (
      (dt && (dt === cleanToken || dt.toLowerCase() === lowerToken)) ||
      (id && (id === cleanToken || id.toLowerCase() === lowerToken))
    );
  });

  if (localMatch) {
    return localMatch;
  }

  // 3. Fallback Postgres
  if (isPostgresConfigured()) {
    try {
      await ensureSchema();
      const sql = getSql();
      const rows = (await sql`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE delivery_token = ${cleanToken}
           OR id = ${cleanToken}
           OR LOWER(delivery_token) = ${lowerToken}
           OR LOWER(id) = ${lowerToken}
        LIMIT 1
      `) as DbRow[];
      const row = rows[0];
      if (row) return rowToOrder(row);
    } catch (err) {
      console.error("[OrderStore] Erreur getOrderByDeliveryToken Postgres:", err);
    }
  }

  return undefined;
}

export async function listOrdersFromStore(limit = 200): Promise<Order[]> {
  loadLocalOrders(true);
  if (!isPostgresConfigured()) {
    return Array.from(memoryOrders.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }

  try {
    await ensureSchema();
    const sql = getSql();
    const rows = (await sql`
      SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
             customer_json, items_json, total, currency,
             print_status, printed_at, print_claimed_at, print_attempts, print_error
      FROM orders
      ORDER BY created_at DESC
      LIMIT ${limit}
    `) as DbRow[];
    // PostgreSQL is the primary store, but include locally persisted orders too.
    // This prevents an order saved locally from disappearing from the POS if the
    // database insert failed or the DB is temporarily behind.
    const merged = new Map<string, Order>();
    for (const row of rows.map(rowToOrder)) merged.set(row.id, row);
    for (const order of memoryOrders.values()) {
      if (!merged.has(order.id)) merged.set(order.id, order);
    }
    return Array.from(merged.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  } catch (err) {
    console.error("[OrderStore] Erreur listOrdersFromStore Postgres, fallback local:", err);
    return Array.from(memoryOrders.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
}

export async function upsertOrder(order: Order): Promise<void> {
  // Sauvegarde locale systématique (partagée entre tous les workers Passenger)
  loadLocalOrders(true);
  memoryOrders.set(order.id, { ...order });
  saveLocalOrders();

  if (!isPostgresConfigured()) {
    return;
  }

  try {
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
  } catch (err) {
    console.error("[OrderStore] Erreur upsertOrder Postgres:", err);
  }
}

export async function updateOrderStatus(orderId: string, status: Order["status"]): Promise<void> {
  const cleanId = (orderId ?? "").trim();
  if (!cleanId) return;
  const lowerId = cleanId.toLowerCase();

  loadLocalOrders(true);
  let order = memoryOrders.get(cleanId);
  if (!order) {
    order = Array.from(memoryOrders.values()).find(
      (o) =>
        (o.id && o.id.toLowerCase() === lowerId) ||
        (o.deliveryToken && o.deliveryToken.toLowerCase() === lowerId)
    );
  }
  if (order) {
    order.status = status;
    memoryOrders.set(order.id, order);
    saveLocalOrders();
  }

  if (isPostgresConfigured()) {
    try {
      await ensureSchema();
      const sql = getSql();
      await sql`
        UPDATE orders
        SET status = ${status}
        WHERE id = ${cleanId}
           OR delivery_token = ${cleanId}
           OR LOWER(id) = ${lowerId}
           OR LOWER(delivery_token) = ${lowerId}
      `;
    } catch (err) {
      console.error("[OrderStore] Erreur updateOrderStatus Postgres:", err);
    }
  }
}

export async function requestOrderReprint(orderId: string): Promise<void> {
  const cleanId = (orderId ?? "").trim();
  if (!cleanId) return;

  if (!isPostgresConfigured()) {
    loadLocalOrders(true);
    const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find(
      (o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId
    );
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
    WHERE id = ${cleanId}
  `;
}

export async function claimNextPrintJob(): Promise<Order | undefined> {
  if (!isPostgresConfigured()) {
    loadLocalOrders(true);
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
  const rows = (await sql`
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
  `) as DbRow[];
  const row = rows[0];
  return row ? rowToOrder(row) : undefined;
}

export async function acknowledgePrint(
  orderId: string,
  success: boolean,
  errorMessage?: string,
): Promise<void> {
  const cleanId = (orderId ?? "").trim();
  if (!cleanId) return;

  if (!isPostgresConfigured()) {
    loadLocalOrders(true);
    const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find(
      (o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId
    );
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
