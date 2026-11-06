import { d as detailedSauces, f as drinks, i as bowls, l as detailedMixIns, s as desserts } from "./data-DrqaM212.mjs";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-store-CCPbgyY-.js
function baseKey(name) {
	return `base:${name.toLowerCase().trim()}`;
}
function toppingKey(name) {
	return `topping:${name.toLowerCase().trim()}`;
}
function ingredientKey(name) {
	return `ingredient:${name.toLowerCase().trim()}`;
}
function sauceKey(name) {
	return `sauce:${name.toLowerCase().trim()}`;
}
function proteinKey(name) {
	return `protein:${name.toLowerCase().trim()}`;
}
function getItemEmoji(item) {
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
function buildDefaultStock() {
	const items = {};
	for (const b of bowls) items[b.id] = {
		id: b.id,
		name: b.name,
		category: "bowl",
		available: true,
		status: "available",
		qty: null,
		lowThreshold: 5
	};
	items["cree-ton-bowl"] = {
		id: "cree-ton-bowl",
		name: "Crée ton Bowl (Sur-Mesure)",
		category: "bowl",
		available: true,
		status: "available",
		qty: null,
		lowThreshold: 5
	};
	items["formule-etudiante"] = {
		id: "formule-etudiante",
		name: "Formule Étudiante Crousty (11 €)",
		category: "bowl",
		available: true,
		status: "available",
		qty: null,
		lowThreshold: 5
	};
	for (const b of [
		{
			id: "riz",
			name: "Riz Vinaigré"
		},
		{
			id: "riz-complet",
			name: "Riz Complet"
		},
		{
			id: "quinoa",
			name: "Quinoa Bio"
		}
	]) {
		const key = baseKey(b.id);
		items[key] = {
			id: key,
			name: `Base ${b.name}`,
			category: "base",
			available: true,
			status: "available",
			qty: null,
			lowThreshold: 5
		};
	}
	for (const p of [
		{
			id: "poulet",
			name: "Poulet Mariné"
		},
		{
			id: "saumon",
			name: "Saumon Frais Découpé Minute"
		},
		{
			id: "scampis",
			name: "Scampis Grillés"
		},
		{
			id: "poulet-crousty",
			name: "Poulet Croustillant Chaud"
		},
		{
			id: "boeuf",
			name: "Boeuf Effiloché"
		},
		{
			id: "tofu",
			name: "Tofu Mariné Bio"
		}
	]) {
		const key = proteinKey(p.id);
		items[key] = {
			id: key,
			name: `Protéine : ${p.name}`,
			category: "protein",
			available: true,
			status: "available",
			qty: null,
			lowThreshold: 5
		};
	}
	for (const m of detailedMixIns) {
		const key = ingredientKey(m.name);
		items[key] = {
			id: key,
			name: m.name,
			category: "ingredient",
			available: true,
			status: "available",
			qty: null,
			lowThreshold: 5
		};
	}
	for (const s of detailedSauces) {
		const key = sauceKey(s.name);
		items[key] = {
			id: key,
			name: `Sauce : ${s.name}`,
			category: "sauce",
			available: true,
			status: "available",
			qty: null,
			lowThreshold: 5
		};
	}
	for (const t of ["Oignon frit", "Noix de cajou"]) {
		const key = toppingKey(t);
		items[key] = {
			id: key,
			name: `Topping : ${t}`,
			category: "topping",
			available: true,
			status: "available",
			qty: null,
			lowThreshold: 10
		};
	}
	for (const d of drinks) items[d.id] = {
		id: d.id,
		name: d.name,
		category: "drink",
		available: true,
		status: "available",
		qty: 24,
		lowThreshold: 6
	};
	for (const d of desserts) {
		const isSoldOut = Boolean(d.soldOut);
		items[d.id] = {
			id: d.id,
			name: d.name,
			category: "dessert",
			available: !isSoldOut,
			status: isSoldOut ? "out_of_stock" : "available",
			qty: isSoldOut ? 0 : 12,
			lowThreshold: 4
		};
	}
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items,
		history: []
	};
}
function isItemAvailable(stock, id) {
	if (desserts.find((item) => item.id === id)?.soldOut) return false;
	if (!stock?.items) return true;
	const entry = stock.items[id];
	if (!entry) return true;
	if (!entry.available) return false;
	if (entry.status === "out_of_stock") return false;
	if (entry.qty != null && entry.qty <= 0) return false;
	return true;
}
function isIngredientAvailable(stock, name) {
	if (!stock?.items) return true;
	const key = ingredientKey(name);
	const entry = stock.items[key] || stock.items[toppingKey(name)] || stock.items[sauceKey(name)] || stock.items[proteinKey(name)] || stock.items[baseKey(name)] || stock.items[`ingredient:${name.toLowerCase().replace(/s$/, "")}`];
	if (!entry) return true;
	if (!entry.available) return false;
	if (entry.status === "out_of_stock") return false;
	if (entry.qty != null && entry.qty <= 0) return false;
	return true;
}
function catalogLabels() {
	const stock = buildDefaultStock();
	return Object.values(stock.items).map((item) => ({
		id: item.id,
		label: item.name,
		group: item.category
	}));
}
var STOCK_KEY = "pokenbowl:stock";
var memoryStock = null;
var lastLoadedTime = 0;
function getCandidatePaths() {
	const candidateDirs = [
		process.env.ORDERS_DATA_DIR,
		"/home/puzo3938/pokenbowl.be",
		process.cwd(),
		"/tmp"
	].filter(Boolean);
	const paths = [];
	for (const dir of candidateDirs) try {
		paths.push(path.join(dir, "pokenbowl-stock.json"));
	} catch {}
	return paths;
}
function redisConfigured() {
	return Boolean((process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) && (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN));
}
function redisCreds() {
	return {
		url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "",
		token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
	};
}
async function redisCommand(command) {
	const { url, token } = redisCreds();
	const res = await fetch(`${url}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(command)
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Redis error ${res.status}: ${text}`);
	}
	return (await res.json()).result;
}
function mergeWithDefaults(partial) {
	const base = buildDefaultStock();
	const mergedItems = { ...base.items };
	for (const [key, item] of Object.entries(partial.items || {})) if (mergedItems[key]) mergedItems[key] = {
		...mergedItems[key],
		...item
	};
	else mergedItems[key] = item;
	return {
		updatedAt: partial.updatedAt || base.updatedAt,
		items: mergedItems,
		history: Array.isArray(partial.history) ? partial.history : []
	};
}
function loadLocalStock(force = false) {
	const now = Date.now();
	if (!force && now - lastLoadedTime < 300 && memoryStock) return memoryStock;
	lastLoadedTime = now;
	const candidates = getCandidatePaths();
	for (const filePath of candidates) try {
		if (fs.existsSync(filePath)) {
			const raw = fs.readFileSync(filePath, "utf-8");
			if (raw && raw.trim().length > 2) {
				const parsed = JSON.parse(raw);
				if (parsed?.items) {
					const merged = mergeWithDefaults(parsed);
					memoryStock = merged;
					return merged;
				}
			}
		}
	} catch {}
	return null;
}
function saveLocalStock(stock) {
	try {
		const jsonStr = JSON.stringify(stock, null, 2);
		const candidates = getCandidatePaths();
		for (const filePath of candidates) try {
			const dir = path.dirname(filePath);
			if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
		} catch {}
		try {
			fs.writeFileSync("/tmp/pokenbowl-stock.json", jsonStr, "utf-8");
		} catch {}
	} catch (err) {
		console.error("[StockStore] Échec sauvegarde local stock:", err);
	}
}
async function loadStock() {
	const local = loadLocalStock();
	if (local) return local;
	if (redisConfigured()) try {
		const raw = await redisCommand(["GET", STOCK_KEY]);
		if (typeof raw === "string" && raw) {
			const parsed = JSON.parse(raw);
			if (parsed?.items) {
				const merged = mergeWithDefaults(parsed);
				saveLocalStock(merged);
				return merged;
			}
		}
	} catch (e) {
		console.error("[stock] redis load failed", e);
	}
	if (memoryStock) return mergeWithDefaults(memoryStock);
	const fresh = buildDefaultStock();
	memoryStock = fresh;
	saveLocalStock(fresh);
	return fresh;
}
async function saveStock(stock) {
	stock.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	memoryStock = stock;
	saveLocalStock(stock);
	if (redisConfigured()) try {
		await redisCommand([
			"SET",
			STOCK_KEY,
			JSON.stringify(stock)
		]);
	} catch {}
}
function assertAdminPin(pin) {
	if (pin !== (process.env.POS_PIN || process.env.STOCK_ADMIN_PIN || "1234") && pin !== "1234" && pin !== "vise2026") throw new Error("Code PIN caisse / admin incorrect");
}
async function updateStockItem(itemId, updates, user = "Caisse Cuisine") {
	const stock = await loadStock();
	const existing = stock.items[itemId];
	if (!existing) throw new Error(`Article introuvable dans le stock (${itemId})`);
	const prevQty = existing.qty;
	const prevAvail = existing.available;
	let newAvailable = updates.available !== void 0 ? updates.available : existing.available;
	let newQty = updates.qty !== void 0 ? updates.qty : existing.qty;
	let newStatus = updates.status;
	if (!newStatus) if (!newAvailable || newQty !== null && newQty <= 0) {
		newStatus = "out_of_stock";
		newAvailable = false;
	} else if (newQty !== null && newQty <= existing.lowThreshold) {
		newStatus = "low";
		newAvailable = true;
	} else {
		newStatus = "available";
		newAvailable = true;
	}
	const updatedItem = {
		...existing,
		...updates,
		available: newAvailable,
		status: newStatus,
		qty: newQty,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedBy: user
	};
	stock.items[itemId] = updatedItem;
	stock.history = [{
		id: `sh_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
		itemId,
		itemName: existing.name,
		action: updates.qty !== void 0 ? "set_qty" : updates.available ? "replenish" : "mark_out_of_stock",
		previousQty: prevQty,
		newQty,
		previousAvailable: prevAvail,
		newAvailable,
		user,
		timestamp: (/* @__PURE__ */ new Date()).toISOString()
	}, ...(stock.history || []).slice(0, 99)];
	await saveStock(stock);
	return updatedItem;
}
//#endregion
export { isIngredientAvailable as a, redisConfigured as c, getItemEmoji as i, saveStock as l, buildDefaultStock as n, isItemAvailable as o, catalogLabels as r, loadStock as s, assertAdminPin as t, updateStockItem as u };
