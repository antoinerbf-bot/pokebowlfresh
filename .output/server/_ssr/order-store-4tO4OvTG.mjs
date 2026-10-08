import { t as cs } from "../_libs/neondatabase__serverless.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-store-4tO4OvTG.js
var schemaReady;
function getSql() {
	const url = process.env.DATABASE_URL;
	if (!url) throw new Error("DATABASE_URL manquante. Connecte une base Postgres Neon au projet Vercel.");
	return cs(url);
}
async function ensureSchema() {
	if (!schemaReady) schemaReady = (async () => {
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
		schemaReady = void 0;
		throw error;
	});
	await schemaReady;
}
function rowToOrder(row) {
	return {
		id: row.id,
		deliveryToken: row.delivery_token ?? void 0,
		createdAt: row.created_at,
		status: row.status,
		paymentMethod: row.payment_method,
		molliePaymentId: row.mollie_payment_id ?? void 0,
		customer: JSON.parse(row.customer_json),
		items: JSON.parse(row.items_json),
		total: Number(row.total),
		currency: row.currency,
		printStatus: row.print_status,
		printedAt: row.printed_at,
		printAttempts: row.print_attempts,
		printError: row.print_error
	};
}
async function getOrderFromStore(id) {
	await ensureSchema();
	const row = (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE id = ${id}
    LIMIT 1
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function getOrderByDeliveryToken(token) {
	await ensureSchema();
	const row = (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE delivery_token = ${token}
    LIMIT 1
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function listOrdersFromStore(limit = 200) {
	await ensureSchema();
	return (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    ORDER BY created_at DESC
    LIMIT ${limit}
  `).map(rowToOrder);
}
async function upsertOrder(order) {
	await ensureSchema();
	await getSql()`
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
async function updateOrderStatus(orderId, status) {
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET status = ${status}
    WHERE id = ${orderId}
  `;
}
async function requestOrderReprint(orderId) {
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET print_status = 'pending',
        print_claimed_at = NULL,
        print_error = NULL
    WHERE id = ${orderId}
  `;
}
async function claimNextPrintJob() {
	await ensureSchema();
	const row = (await getSql()`
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
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function acknowledgePrint(orderId, success, errorMessage) {
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
//#endregion
export { listOrdersFromStore as a, upsertOrder as c, getOrderFromStore as i, claimNextPrintJob as n, requestOrderReprint as o, getOrderByDeliveryToken as r, updateOrderStatus as s, acknowledgePrint as t };
