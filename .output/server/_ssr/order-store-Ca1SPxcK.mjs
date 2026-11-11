import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/order-store-Ca1SPxcK.js
function isPostgresConfigured() {
	return Boolean(process.env.DATABASE_URL?.trim());
}
var memoryOrders = /* @__PURE__ */ new Map();
var lastLoadedTime = 0;
function getCandidatePathsForFile(filename) {
	const candidateDirs = [
		process.env.ORDERS_DATA_DIR,
		"/home/puzo3938/pokenbowl.be",
		process.cwd(),
		"/tmp"
	].filter(Boolean);
	const seen = /* @__PURE__ */ new Set();
	const paths = [];
	for (const dir of candidateDirs) try {
		const fullPath = path.join(dir, filename);
		if (!seen.has(fullPath)) {
			seen.add(fullPath);
			paths.push(fullPath);
		}
	} catch {}
	return paths;
}
function getStoreCandidatePaths() {
	return getCandidatePathsForFile("pokenbowl-orders.json");
}
function getDeletedTombstonePaths() {
	return getCandidatePathsForFile("pokenbowl-deleted-orders.json");
}
function loadDeletedTombstones() {
	const mergedIds = /* @__PURE__ */ new Set();
	let maxClearedAtMs = 0;
	for (const filePath of getDeletedTombstonePaths()) try {
		if (!fs.existsSync(filePath)) continue;
		const raw = fs.readFileSync(filePath, "utf-8");
		if (!raw) continue;
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed.deletedIds)) {
			for (const id of parsed.deletedIds) if (typeof id === "string" && id.trim()) mergedIds.add(id.trim().toLowerCase());
		}
		if (typeof parsed.clearedAtMs === "number" && parsed.clearedAtMs > maxClearedAtMs) maxClearedAtMs = parsed.clearedAtMs;
	} catch {}
	return {
		deletedIds: Array.from(mergedIds).slice(-500),
		clearedAtMs: maxClearedAtMs || void 0
	};
}
function saveDeletedTombstones(data) {
	const normalized = {
		deletedIds: Array.from(new Set(data.deletedIds.map((s) => s.trim().toLowerCase()).filter(Boolean))).slice(-500),
		...data.clearedAtMs ? { clearedAtMs: data.clearedAtMs } : {}
	};
	const jsonStr = JSON.stringify(normalized, null, 2);
	for (const filePath of getDeletedTombstonePaths()) try {
		const dir = path.dirname(filePath);
		if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
	} catch {}
}
function isOrderDeletedByTombstone(order, tombstones) {
	const idLower = (order.id ?? "").trim().toLowerCase();
	const dtLower = (order.deliveryToken ?? "").trim().toLowerCase();
	if (idLower && tombstones.deletedIds.includes(idLower)) return true;
	if (dtLower && tombstones.deletedIds.includes(dtLower)) return true;
	if (tombstones.clearedAtMs && order.createdAt) {
		const createdMs = new Date(order.createdAt).getTime();
		if (!isNaN(createdMs) && createdMs <= tombstones.clearedAtMs) return true;
	}
	return false;
}
function loadLocalOrders(force = false) {
	const now = Date.now();
	if (!force && now - lastLoadedTime < 300 && memoryOrders.size > 0) return;
	lastLoadedTime = now;
	const tombstones = loadDeletedTombstones();
	const candidates = getStoreCandidatePaths();
	const existingFiles = [];
	candidates.forEach((filePath, idx) => {
		try {
			if (fs.existsSync(filePath)) {
				const stat = fs.statSync(filePath);
				existingFiles.push({
					filePath,
					mtimeMs: stat.mtimeMs,
					priority: idx
				});
			}
		} catch {}
	});
	existingFiles.sort((a, b) => {
		if (Math.abs(b.mtimeMs - a.mtimeMs) > 1) return b.mtimeMs - a.mtimeMs;
		return a.priority - b.priority;
	});
	for (const { filePath } of existingFiles) try {
		const raw = fs.readFileSync(filePath, "utf-8");
		if (raw && raw.trim().length >= 2) {
			const list = JSON.parse(raw);
			if (Array.isArray(list)) {
				memoryOrders.clear();
				for (const item of list) if (item?.id && !isOrderDeletedByTombstone(item, tombstones)) memoryOrders.set(item.id, item);
				return;
			}
		}
	} catch {}
}
function saveLocalOrders() {
	try {
		const list = Array.from(memoryOrders.values());
		const jsonStr = JSON.stringify(list, null, 2);
		const candidates = getStoreCandidatePaths();
		for (const filePath of candidates) try {
			const dir = path.dirname(filePath);
			if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
		} catch {}
		try {
			fs.writeFileSync("/tmp/pokenbowl-orders.json", jsonStr, "utf-8");
		} catch {}
	} catch (err) {
		console.error("[OrderStore] Échec sauvegarde fichier local commandes:", err);
	}
}
var schemaReady;
function getSql() {
	const url = process.env.DATABASE_URL;
	if (!url) throw new Error("DATABASE_URL manquante. Connecte une base Postgres Neon au projet.");
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
	const rawId = (id ?? "").trim();
	if (!rawId) return void 0;
	const cleanId = decodeURIComponent(rawId).trim();
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	const localMatch = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => {
		if (!o) return false;
		const oId = (o.id ?? "").trim();
		const dt = (o.deliveryToken ?? "").trim();
		return oId === cleanId || oId.toLowerCase() === lowerId || dt === cleanId || dt.toLowerCase() === lowerId;
	});
	if (localMatch) return localMatch;
	if (isPostgresConfigured()) try {
		await ensureSchema();
		const row = (await getSql()`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE id = ${cleanId}
           OR delivery_token = ${cleanId}
           OR LOWER(id) = ${lowerId}
           OR LOWER(delivery_token) = ${lowerId}
        LIMIT 1
      `)[0];
		if (row) return rowToOrder(row);
	} catch (err) {
		console.error("[OrderStore] Erreur getOrderFromStore Postgres:", err);
	}
}
async function getOrderByDeliveryToken(token) {
	const rawToken = (token ?? "").trim();
	if (!rawToken) return void 0;
	const cleanToken = decodeURIComponent(rawToken).trim();
	const lowerToken = cleanToken.toLowerCase();
	loadLocalOrders(true);
	const localMatch = Array.from(memoryOrders.values()).find((o) => {
		if (!o) return false;
		const dt = (o.deliveryToken ?? "").trim();
		const id = (o.id ?? "").trim();
		return dt && (dt === cleanToken || dt.toLowerCase() === lowerToken) || id && (id === cleanToken || id.toLowerCase() === lowerToken);
	});
	if (localMatch) return localMatch;
	if (isPostgresConfigured()) try {
		await ensureSchema();
		const row = (await getSql()`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE delivery_token = ${cleanToken}
           OR id = ${cleanToken}
           OR LOWER(delivery_token) = ${lowerToken}
           OR LOWER(id) = ${lowerToken}
        LIMIT 1
      `)[0];
		if (row) return rowToOrder(row);
	} catch (err) {
		console.error("[OrderStore] Erreur getOrderByDeliveryToken Postgres:", err);
	}
}
async function listOrdersFromStore(limit = 200) {
	loadLocalOrders(true);
	const tombstones = loadDeletedTombstones();
	if (!isPostgresConfigured()) return Array.from(memoryOrders.values()).filter((o) => !isOrderDeletedByTombstone(o, tombstones)).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
	try {
		await ensureSchema();
		const rows = await getSql()`
      SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
             customer_json, items_json, total, currency,
             print_status, printed_at, print_claimed_at, print_attempts, print_error
      FROM orders
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
		const merged = /* @__PURE__ */ new Map();
		for (const row of rows.map(rowToOrder)) {
			if (isOrderDeletedByTombstone(row, tombstones)) continue;
			const localMem = memoryOrders.get(row.id);
			merged.set(row.id, localMem ? {
				...row,
				acceptedAt: localMem.acceptedAt ?? row.acceptedAt,
				delayMinutes: localMem.delayMinutes ?? row.delayMinutes,
				delayedAt: localMem.delayedAt ?? row.delayedAt,
				estimatedDeliveryTime: localMem.estimatedDeliveryTime ?? row.estimatedDeliveryTime,
				driverId: localMem.driverId ?? row.driverId,
				driverName: localMem.driverName ?? row.driverName,
				distanceKm: localMem.distanceKm ?? row.distanceKm
			} : row);
		}
		for (const order of memoryOrders.values()) if (!merged.has(order.id) && !isOrderDeletedByTombstone(order, tombstones)) merged.set(order.id, order);
		return Array.from(merged.values()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
	} catch (err) {
		console.error("[OrderStore] Erreur listOrdersFromStore Postgres, fallback local:", err);
		return Array.from(memoryOrders.values()).filter((o) => !isOrderDeletedByTombstone(o, tombstones)).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
	}
}
async function upsertOrder(order) {
	loadLocalOrders(true);
	const tombstones = loadDeletedTombstones();
	const idLower = (order.id ?? "").trim().toLowerCase();
	const dtLower = (order.deliveryToken ?? "").trim().toLowerCase();
	if (tombstones.deletedIds.includes(idLower) || dtLower && tombstones.deletedIds.includes(dtLower)) {
		tombstones.deletedIds = tombstones.deletedIds.filter((id) => id !== idLower && (!dtLower || id !== dtLower));
		saveDeletedTombstones(tombstones);
	}
	memoryOrders.set(order.id, { ...order });
	saveLocalOrders();
	if (!isPostgresConfigured()) return;
	try {
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
	} catch (err) {
		console.error("[OrderStore] Erreur upsertOrder Postgres:", err);
	}
}
async function updateOrderStatus(orderId, status) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	let order = memoryOrders.get(cleanId);
	if (!order) order = Array.from(memoryOrders.values()).find((o) => o.id && o.id.toLowerCase() === lowerId || o.deliveryToken && o.deliveryToken.toLowerCase() === lowerId);
	if (order) {
		order.status = status;
		memoryOrders.set(order.id, order);
		saveLocalOrders();
	}
	if (isPostgresConfigured()) try {
		await ensureSchema();
		await getSql()`
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
async function updateOrderCustomFields(orderId, fields) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return void 0;
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	let order = memoryOrders.get(cleanId);
	if (!order) order = Array.from(memoryOrders.values()).find((o) => o.id && o.id.toLowerCase() === lowerId || o.deliveryToken && o.deliveryToken.toLowerCase() === lowerId);
	if (order) {
		Object.assign(order, fields);
		memoryOrders.set(order.id, order);
		saveLocalOrders();
		if (fields.status && isPostgresConfigured()) try {
			await ensureSchema();
			await getSql()`
          UPDATE orders
          SET status = ${fields.status}
          WHERE id = ${order.id}
        `;
		} catch {}
		return order;
	}
}
async function deleteOrderFromStore(orderId) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return false;
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	const removedIds = [cleanId];
	let removedLocally = false;
	for (const [key, order] of Array.from(memoryOrders.entries())) {
		const kLower = key.toLowerCase();
		const dtLower = (order.deliveryToken ?? "").trim().toLowerCase();
		if (key === cleanId || kLower === lowerId || dtLower && dtLower === lowerId) {
			removedIds.push(key);
			if (order.deliveryToken) removedIds.push(order.deliveryToken);
			memoryOrders.delete(key);
			removedLocally = true;
		}
	}
	const tombstones = loadDeletedTombstones();
	tombstones.deletedIds = [...tombstones.deletedIds, ...removedIds];
	saveDeletedTombstones(tombstones);
	lastLoadedTime = Date.now();
	saveLocalOrders();
	let removedDb = false;
	if (isPostgresConfigured()) {
		await ensureSchema();
		removedDb = (await getSql()`
      DELETE FROM orders
      WHERE id = ${cleanId}
         OR delivery_token = ${cleanId}
         OR LOWER(id) = ${lowerId}
         OR LOWER(delivery_token) = ${lowerId}
      RETURNING id
    `).length > 0;
	}
	return removedLocally || removedDb;
}
async function clearAllOrdersFromStore() {
	loadLocalOrders(true);
	const existingKeys = Array.from(memoryOrders.keys());
	let count = memoryOrders.size;
	const tombstones = loadDeletedTombstones();
	tombstones.deletedIds = [...tombstones.deletedIds, ...existingKeys];
	saveDeletedTombstones(tombstones);
	memoryOrders.clear();
	lastLoadedTime = Date.now();
	saveLocalOrders();
	const candidates = getStoreCandidatePaths();
	for (const filePath of candidates) try {
		if (fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]", "utf-8");
	} catch {}
	try {
		fs.writeFileSync("/tmp/pokenbowl-orders.json", "[]", "utf-8");
	} catch {}
	if (isPostgresConfigured()) try {
		await ensureSchema();
		const deletedRows = await getSql()`DELETE FROM orders RETURNING id`;
		count = Math.max(count, deletedRows.length);
	} catch (err) {
		console.error("[OrderStore] Erreur DELETE orders Postgres:", err);
		await ensureSchema();
		await getSql()`TRUNCATE TABLE orders CASCADE`;
	}
	return count;
}
async function requestOrderReprint(orderId) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId);
		if (order) {
			order.printStatus = "pending";
			order.printError = null;
			saveLocalOrders();
		}
		return;
	}
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET print_status = 'pending',
        print_claimed_at = NULL,
        print_error = NULL
    WHERE id = ${cleanId}
  `;
}
async function claimNextPrintJob() {
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const eligible = [
			"paid",
			"awaiting_pickup",
			"awaiting_delivery",
			"preparing",
			"ready",
			"delivering"
		];
		const next = Array.from(memoryOrders.values()).filter((o) => eligible.includes(o.status) && (o.printStatus === "pending" || !o.printStatus)).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())[0];
		if (next) {
			next.printStatus = "printing";
			next.printAttempts = (next.printAttempts || 0) + 1;
			saveLocalOrders();
		}
		return next;
	}
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
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId);
		if (order) {
			if (success) {
				order.printStatus = "printed";
				order.printedAt = (/* @__PURE__ */ new Date()).toISOString();
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
//#endregion
export { getOrderByDeliveryToken as a, requestOrderReprint as c, upsertOrder as d, deleteOrderFromStore as i, updateOrderCustomFields as l, claimNextPrintJob as n, getOrderFromStore as o, clearAllOrdersFromStore as r, listOrdersFromStore as s, acknowledgePrint as t, updateOrderStatus as u };
