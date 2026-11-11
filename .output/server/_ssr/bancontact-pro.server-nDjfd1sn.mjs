import { f as drinks, i as bowls, n as EXTRA_SAUCE_PRICE, s as desserts, t as EXTRA_PROTEIN_PRICE } from "./data-DrqaM212.mjs";
import { a as numberType, i as literalType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as generateOrderId } from "./orders-CaaHT_fT.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { d as upsertOrder } from "./order-store-Ca1SPxcK.mjs";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/bancontact-pro.server-nDjfd1sn.js
function parseEnvFile(filePath) {
	try {
		if (!fs.existsSync(filePath)) return {};
		const content = fs.readFileSync(filePath, "utf-8");
		const result = {};
		for (const rawLine of content.split("\n")) {
			const line = rawLine.trim();
			if (!line || line.startsWith("#")) continue;
			const eqIdx = line.indexOf("=");
			if (eqIdx === -1) continue;
			const key = line.slice(0, eqIdx).trim();
			let val = line.slice(eqIdx + 1).trim();
			if (val.startsWith("\"") && val.endsWith("\"") || val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
			result[key] = val;
		}
		return result;
	} catch {
		return {};
	}
}
var loaded = false;
var candidateFiles = [
	path.resolve(process.cwd(), ".env"),
	path.resolve(process.cwd(), ".env.local"),
	"/home/puzo3938/pokenbowl.be/.env",
	"/home/puzo3938/.env",
	"/home/puzo3938/repositories/pokebowlfresh-git/.env",
	"/home/puzo3938/repositories/pokebowlfresh-cpanel/.env"
];
function getCheckedFiles() {
	return candidateFiles.map((f) => ({
		file: f,
		exists: fs.existsSync(f)
	}));
}
function loadAndGetEnv() {
	if (!loaded) {
		for (const file of candidateFiles) {
			const parsed = parseEnvFile(file);
			for (const [k, v] of Object.entries(parsed)) if (!process.env[k]) process.env[k] = v;
		}
		loaded = true;
	}
	return process.env;
}
function getAllBankKeyCandidates() {
	const env = loadAndGetEnv();
	const bankPatterns = [
		"BANCONTACT",
		"PAYCONIQ",
		"MOLLIE",
		"STRIPE",
		"PAYMENT",
		"VIVA",
		"WORLDLINE"
	];
	const found = [];
	for (const [k, v] of Object.entries(env)) {
		if (!v) continue;
		const upper = k.toUpperCase();
		if (bankPatterns.some((pattern) => upper.includes(pattern)) || upper === "API_KEY") {
			const str = String(v).trim();
			const masked = str.length > 8 ? `${str.slice(0, 4)}...${str.slice(-4)} (${str.length} chars)` : `**** (${str.length} chars)`;
			found.push({
				name: k,
				source: "process.env",
				maskedValue: masked,
				value: str
			});
		}
	}
	return found;
}
/**
* Server-only Mollie helpers.
* Requires env: MOLLIE_API_KEY (test_… or live_…)
*/
var MOLLIE_API = "https://api.mollie.com/v2";
var LIVE_MOLLIE_API_KEY = "live_bz3dfcT6kH5aMkMyQrMwW4EfVfnFGs";
function getMollieApiKey() {
	const env = loadAndGetEnv();
	const direct = env.MOLLIE_API_KEY || env.MOLLIE_KEY;
	if (direct && (direct.trim().startsWith("live_") || direct.trim().startsWith("test_"))) return direct.trim();
	return LIVE_MOLLIE_API_KEY;
}
function getApiKey() {
	return getMollieApiKey();
}
async function createMolliePayment(params) {
	const res = await fetch(`${MOLLIE_API}/payments`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${getApiKey()}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			amount: {
				currency: "EUR",
				value: params.amountValue
			},
			description: params.description,
			redirectUrl: params.redirectUrl,
			webhookUrl: params.webhookUrl,
			metadata: params.metadata,
			locale: params.locale ?? "fr_BE"
		})
	});
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Mollie create payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
async function getMolliePayment(paymentId) {
	const res = await fetch(`${MOLLIE_API}/payments/${paymentId}`, { headers: { Authorization: `Bearer ${getApiKey()}` } });
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Mollie get payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
var deliveryZones = [
	{
		postalCode: "3790",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "3798",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4040",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4458",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4600",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4601",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4602",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4606",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4607",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4608",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4670",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4671",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4672",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4680",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4681",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4682",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4683",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4684",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4690",
		minimumOrder: 40,
		feeUnder50: 5
	}
];
function getDeliveryZone(postalCode) {
	const normalized = postalCode.trim().replace(/\s+/g, "");
	return deliveryZones.find((zone) => zone.postalCode === normalized) ?? null;
}
function getCandidatePaths() {
	const candidateDirs = [
		process.env.ORDERS_DATA_DIR,
		"/home/puzo3938/pokenbowl.be",
		process.cwd(),
		"/tmp"
	].filter(Boolean);
	const paths = [];
	for (const dir of candidateDirs) try {
		paths.push(path.join(dir, "pokenbowl-rush.json"));
	} catch {}
	return paths;
}
var memoryRushData = {
	current: null,
	history: []
};
var lastLoadedTime = 0;
function loadRushData(force = false) {
	const now = Date.now();
	if (!force && now - lastLoadedTime < 400 && memoryRushData.current !== null) return;
	lastLoadedTime = now;
	const candidates = getCandidatePaths();
	for (const filePath of candidates) try {
		if (fs.existsSync(filePath)) {
			const raw = fs.readFileSync(filePath, "utf-8");
			if (raw && raw.trim().length > 2) {
				const parsed = JSON.parse(raw);
				if (parsed && typeof parsed === "object") {
					memoryRushData = {
						current: parsed.current ?? null,
						history: Array.isArray(parsed.history) ? parsed.history : []
					};
					return;
				}
			}
		}
	} catch {}
}
function saveRushData() {
	try {
		const jsonStr = JSON.stringify(memoryRushData, null, 2);
		const candidates = getCandidatePaths();
		for (const filePath of candidates) try {
			const dir = path.dirname(filePath);
			if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
		} catch {}
		try {
			fs.writeFileSync("/tmp/pokenbowl-rush.json", jsonStr, "utf-8");
		} catch {}
	} catch (err) {
		console.error("[RushStore] Échec sauvegarde pokenbowl-rush.json:", err);
	}
}
function isPostgresConfigured() {
	return Boolean(process.env.DATABASE_URL?.trim());
}
var rushSchemaReady;
async function ensureRushDbSchema() {
	if (!isPostgresConfigured()) return;
	if (!rushSchemaReady) rushSchemaReady = (async () => {
		await cs(process.env.DATABASE_URL)`
        CREATE TABLE IF NOT EXISTS rush_pauses (
          id TEXT PRIMARY KEY,
          active BOOLEAN NOT NULL DEFAULT false,
          started_at TIMESTAMPTZ NOT NULL,
          duration_minutes INTEGER NOT NULL,
          ends_at TIMESTAMPTZ NOT NULL,
          activated_by TEXT NOT NULL,
          actual_end TIMESTAMPTZ,
          cancelled_manually BOOLEAN NOT NULL DEFAULT false,
          messages_json TEXT NOT NULL
        )
      `;
	})().catch((err) => {
		rushSchemaReady = void 0;
		throw err;
	});
	await rushSchemaReady;
}
function buildRushMessages(durationMinutes) {
	return {
		fr: `🔥 Prise de commandes en pause — Victime de notre succès ! Notre cuisine prépare vos bowls avec soin. Reprise des commandes dans ${durationMinutes} minutes.`,
		en: `🔥 Orders paused — Victim of our own success! Our kitchen is preparing current bowls with care. Resuming in ${durationMinutes} minutes.`,
		nl: `🔥 Bestellingen gepauzeerd — Slachtoffer van ons eigen succes! Onze keuken bereidt uw bowls met zorg. Heropening over ${durationMinutes} minuten.`
	};
}
/**
* Récupère l'état courant de la pause rush côté serveur.
* Si le délai est expiré, la réouverture automatique s'exécute immédiatement.
*/
async function getRushState() {
	loadRushData(true);
	const now = Date.now();
	if (memoryRushData.current && memoryRushData.current.active) {
		const endsAtMs = new Date(memoryRushData.current.endsAt).getTime();
		if (now >= endsAtMs) {
			const endedRecord = {
				...memoryRushData.current,
				active: false,
				actualEnd: new Date(now).toISOString(),
				cancelledManually: false
			};
			memoryRushData.history.unshift(endedRecord);
			memoryRushData.current = null;
			saveRushData();
			if (isPostgresConfigured()) try {
				await ensureRushDbSchema();
				await cs(process.env.DATABASE_URL)`
            UPDATE rush_pauses
            SET active = false, actual_end = ${endedRecord.actualEnd}
            WHERE id = ${endedRecord.id}
          `;
			} catch {}
			return {
				isPaused: false,
				pause: null,
				remainingSeconds: 0
			};
		}
		const remainingSeconds = Math.max(0, Math.ceil((endsAtMs - now) / 1e3));
		return {
			isPaused: true,
			pause: memoryRushData.current,
			remainingSeconds
		};
	}
	return {
		isPaused: false,
		pause: null,
		remainingSeconds: 0
	};
}
/**
* Active une nouvelle pause rush depuis le POS (10, 20 ou 30 minutes).
*/
async function activateRushPause(durationMinutes, activatedBy = "Caisse POS") {
	loadRushData(true);
	const now = /* @__PURE__ */ new Date();
	const endsAt = new Date(now.getTime() + durationMinutes * 60 * 1e3);
	const id = `rush_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
	const messages = buildRushMessages(durationMinutes);
	if (memoryRushData.current && memoryRushData.current.active) memoryRushData.history.unshift({
		...memoryRushData.current,
		active: false,
		actualEnd: now.toISOString(),
		cancelledManually: true
	});
	const record = {
		id,
		active: true,
		startedAt: now.toISOString(),
		durationMinutes,
		endsAt: endsAt.toISOString(),
		activatedBy,
		messages
	};
	memoryRushData.current = record;
	saveRushData();
	if (isPostgresConfigured()) try {
		await ensureRushDbSchema();
		await cs(process.env.DATABASE_URL)`
        INSERT INTO rush_pauses (
          id, active, started_at, duration_minutes, ends_at, activated_by, messages_json
        ) VALUES (
          ${record.id}, ${record.active}, ${record.startedAt}, ${record.durationMinutes},
          ${record.endsAt}, ${record.activatedBy}, ${JSON.stringify(record.messages)}
        )
      `;
	} catch (err) {
		console.error("[RushStore] Erreur insert Postgres rush_pause:", err);
	}
	return record;
}
/**
* Annulation manuelle anticipée de la pause depuis le POS.
*/
async function cancelRushPause(cancelledBy = "Caisse POS") {
	loadRushData(true);
	const now = (/* @__PURE__ */ new Date()).toISOString();
	if (memoryRushData.current && memoryRushData.current.active) {
		const closed = {
			...memoryRushData.current,
			active: false,
			actualEnd: now,
			cancelledManually: true
		};
		memoryRushData.history.unshift(closed);
		memoryRushData.current = null;
		saveRushData();
		if (isPostgresConfigured()) try {
			await ensureRushDbSchema();
			await cs(process.env.DATABASE_URL)`
          UPDATE rush_pauses
          SET active = false, actual_end = ${now}, cancelled_manually = true
          WHERE id = ${closed.id}
        `;
		} catch {}
	}
	return {
		success: true,
		reopenedAt: now
	};
}
/**
* Récupère l'historique des pauses rush pour audit & statistiques.
*/
async function getRushHistory() {
	loadRushData(true);
	return memoryRushData.history.slice(0, 50);
}
var orderItemSchema = objectType({
	id: stringType(),
	name: stringType(),
	price: numberType().positive(),
	quantity: numberType().int().positive(),
	toppings: arrayType(stringType()).default([])
});
var checkoutSchema = objectType({
	customer: objectType({
		name: stringType().min(2),
		phone: stringType().min(8),
		email: stringType().email().optional().or(literalType("")),
		notes: stringType().max(500).optional(),
		fulfillment: enumType(["delivery", "pickup"]),
		requestedTime: stringType().min(1),
		address: stringType().max(300).optional(),
		postalCode: stringType().max(10).optional(),
		city: stringType().max(100).optional()
	}),
	items: arrayType(orderItemSchema).min(1),
	paymentMethod: enumType(["online", "on_site"]),
	origin: stringType().url()
});
function canonicalizeItems(items) {
	const catalog = new Map([
		...bowls.map((item) => [item.id, item.price]),
		["sur-mesure", 10],
		...drinks.map((item) => [item.id, item.price]),
		...desserts.map((item) => [item.id, item.price])
	]);
	return items.map((item) => {
		const rawId = item.id.trim();
		if (rawId === "sur-mesure" || rawId.startsWith("custom-live-") || rawId.startsWith("sur-mesure-")) {
			let unitPrice = 10;
			const opts = item.toppings ?? [];
			const isGrand = rawId.endsWith("-grand") || /\(Grand\)/i.test(item.name) || opts.some((t) => /Taille\s*:\s*Grand/i.test(t) || /Format\s+Grand/i.test(t));
			if (isGrand) unitPrice += 3;
			if (opts.some((t) => !/^Suppl[ée]ment\s*Prot[ée]ine/i.test(t) && (/^Prot[ée]ine\s*:.*saumon/i.test(t) || /saumon/i.test(t)))) unitPrice += 1;
			const customExtraProteins = opts.filter((t) => /^Suppl[ée]ment\s*Prot[ée]ine/i.test(t));
			let totalCustomExtraProteinUnits = 0;
			for (const ep of customExtraProteins) {
				const match = ep.match(/\(x(\d+)\)/i) || ep.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalCustomExtraProteinUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalCustomExtraProteinUnits * EXTRA_PROTEIN_PRICE;
			const mixInsLine = opts.find((t) => /^Mix-ins?\s*:/i.test(t));
			if (mixInsLine) {
				const fetaSuffixMatch = mixInsLine.match(/·\s*Feta(?:\s*\(x(\d+)\))?\s*\(\+[\d.,]+€\)/i);
				const rawParts = mixInsLine.replace(/^Mix-ins?\s*:\s*/i, "").replace(/·\s*Feta(?:\s*\(x\d+\))?\s*\(\+[\d.,]+€\)/gi, "").replace(/\(\+[\d.,]+€\)/g, "").split(",").map((s) => s.trim()).filter((s) => s.length > 0 && !/^aucun/i.test(s));
				let fetaUnits = 0;
				let nonFetaUnits = 0;
				for (const part of rawParts) {
					const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
					const count = match?.[1] ? parseInt(match[1], 10) : 1;
					const units = isNaN(count) ? 1 : count;
					const itemName = part.replace(/\s*\(x\d+\)/gi, "").trim();
					if (/^feta$/i.test(itemName)) fetaUnits += units;
					else nonFetaUnits += units;
				}
				if (fetaUnits === 0 && fetaSuffixMatch) {
					const suffixCount = fetaSuffixMatch[1] ? parseInt(fetaSuffixMatch[1], 10) : 1;
					fetaUnits = isNaN(suffixCount) ? 1 : suffixCount;
				}
				const extraMixInUnits = Math.max(0, nonFetaUnits - 5);
				unitPrice += (extraMixInUnits + fetaUnits) * 1;
			}
			const toppingLine = opts.find((t) => /^Toppings?\s*:/i.test(t));
			const toppingPrices = [];
			if (toppingLine) {
				const rawContent = toppingLine.replace(/^Toppings?\s*:\s*/i, "").replace(/\s*\(\+[\d.,]+€\)\s*$/, "");
				if (!/aucun/i.test(rawContent)) {
					const parts = rawContent.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
					for (const part of parts) {
						const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
						const count = match?.[1] ? parseInt(match[1], 10) : 1;
						const validCount = isNaN(count) ? 1 : count;
						const p = /cajou/i.test(part) ? 1 : .5;
						for (let i = 0; i < validCount; i++) toppingPrices.push(p);
					}
				}
			} else {
				const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
				for (const t of individualToppings) {
					const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
					const count = match?.[1] ? parseInt(match[1], 10) : 1;
					const validCount = isNaN(count) ? 1 : count;
					const p = /cajou/i.test(t) ? 1 : .5;
					for (let i = 0; i < validCount; i++) toppingPrices.push(p);
				}
			}
			toppingPrices.sort((a, b) => a - b);
			if (toppingPrices.length > 0) toppingPrices.shift();
			unitPrice += toppingPrices.reduce((sum, p) => sum + p, 0);
			const extraSauces = opts.filter((t) => /sauce\s+(suppl[ée]mentaire|extra|2[èe]me\s+pot)/i.test(t));
			let totalExtraSauceUnits = 0;
			for (const es of extraSauces) {
				const match = es.match(/\(x(\d+)\)/i) || es.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraSauceUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraSauceUnits * EXTRA_SAUCE_PRICE;
			return {
				...item,
				id: "sur-mesure",
				name: isGrand ? "Poke Bowl sur mesure (Grand)" : "Poke Bowl sur mesure",
				price: unitPrice,
				toppings: opts
			};
		}
		const strippedId = rawId.replace(/-(moyen|grand|mega|blog|\d{10,})$/i, "");
		const bowl = bowls.find((b) => b.id === rawId || b.id === strippedId);
		if (bowl) {
			const isCrousty = bowl.id.startsWith("crousty-");
			let unitPrice = bowl.price;
			const opts = item.toppings ?? [];
			const isGrand = !isCrousty && (rawId.endsWith("-grand") || /\(Grand\)/i.test(item.name) || opts.some((t) => /Taille\s*:\s*Grand/i.test(t) || /Format\s+Grand/i.test(t)));
			if (isGrand) unitPrice = bowl.grandPrice ?? bowl.price + 3;
			const extraProteins = opts.filter((t) => /(Suppl[ée]ment\s*Prot[ée]ine|Prot[ée]ine\s*suppl[ée]mentaire|Portion\s+extra\s+Poulet|Suppl[ée]ment\s+Poulet\s+Croustillant|Suppl[ée]ment\s+Saumon|Suppl[ée]ment\s+Scampis)/i.test(t));
			let totalExtraProteinUnits = 0;
			for (const ep of extraProteins) {
				const match = ep.match(/\(x(\d+)\)/i) || ep.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraProteinUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraProteinUnits * EXTRA_PROTEIN_PRICE;
			const extraMixins = opts.filter((t) => /^L[ée]gume\s*\/\s*Mix-in/i.test(t));
			let totalExtraMixinUnits = 0;
			for (const m of extraMixins) {
				const match = m.match(/\(x(\d+)\)/i) || m.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraMixinUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraMixinUnits * 1;
			const toppingEntries = opts.filter((t) => /^Topping/i.test(t));
			for (const t of toppingEntries) {
				const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				const validCount = isNaN(count) ? 1 : count;
				const price = /cajou/i.test(t) ? 1 : .5;
				unitPrice += validCount * price;
			}
			if (isCrousty) {
				const baseOpt = opts.find((t) => /^Base\s*:/i.test(t));
				if (baseOpt && !/riz/i.test(baseOpt)) throw new Error("Pour le Crispy Chicken, la base est exclusivement du riz.");
				for (const opt of opts) if (/^L[ée]gume\s*\/\s*Mix-in/i.test(opt)) {
					if (!/(feta|avocat|mangue|brocoli|brocolis|jalapeno|jalapeño)/i.test(opt)) throw new Error("Pour le Crispy Chicken, les légumes autorisés sont exclusivement : Feta, Avocat, Mangue, Brocoli, Jalapeños.");
				}
				for (const opt of opts) if (/(sauce\s+(extra|suppl[ée]mentaire|2[èe]me\s+pot)|suppl[ée]ment\s*sauce)/i.test(opt)) {
					if (!/(spicy\s*mayo|soja\s*sucr[ée]e?)/i.test(opt)) throw new Error("Pour le Crispy Chicken, les sauces autorisées sont exclusivement : Spicy Mayo et Sauce soja sucrée.");
				}
			}
			const extraSauces = opts.filter((t) => /(sauce\s+(extra|suppl[ée]mentaire|2[èe]me\s+pot)|suppl[ée]ment\s*sauce)/i.test(t));
			let totalExtraSauceUnits = 0;
			for (const es of extraSauces) {
				const priceMatch = es.match(/\(\+([\d.,]+)\s*€\)/i);
				if (priceMatch?.[1]) {
					const parsedPrice = parseFloat(priceMatch[1].replace(",", "."));
					if (!isNaN(parsedPrice) && parsedPrice > 0) {
						totalExtraSauceUnits += Math.round(parsedPrice / EXTRA_SAUCE_PRICE);
						continue;
					}
				}
				const match = es.match(/\(x(\d+)\)/i) || es.match(/x(\d+)/i) || es.match(/(\d+)\s*extra/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraSauceUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraSauceUnits * EXTRA_SAUCE_PRICE;
			return {
				...item,
				id: isCrousty ? bowl.id : `${bowl.id}-${isGrand ? "grand" : "moyen"}`,
				name: isCrousty ? bowl.name : `${bowl.name} (${isGrand ? "Grand" : "Moyen"})`,
				price: unitPrice,
				toppings: opts
			};
		}
		if (rawId === "tira-nutella" || strippedId === "tira-nutella") throw new Error("Le Tiramisu Nutella est actuellement victime de son succès (sold out).");
		const canonicalId = catalog.has(rawId) ? rawId : strippedId;
		const canonicalPrice = catalog.get(canonicalId);
		if (canonicalPrice == null) throw new Error("Article invalide");
		const drink = drinks.find((d) => d.id === canonicalId);
		const dessert = desserts.find((d) => d.id === canonicalId);
		return {
			...item,
			id: canonicalId,
			name: drink?.name ?? dessert?.name ?? item.name,
			price: canonicalPrice,
			toppings: []
		};
	});
}
function computeSubtotal(items) {
	return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
async function processCheckout(data) {
	try {
		console.info("[Checkout] submitCheckout started", {
			fulfillment: data.customer.fulfillment,
			paymentMethod: data.paymentMethod,
			itemCount: data.items.length
		});
		const rush = await getRushState();
		if (rush.isPaused && rush.pause) {
			const msg = rush.pause.messages?.fr || "Le restaurant est actuellement en plein rush. Les commandes sont temporairement suspendues.";
			throw new Error(msg);
		}
		const items = canonicalizeItems(data.items);
		const subtotal = computeSubtotal(items);
		if (subtotal <= 0) throw new Error("Panier invalide");
		const deliveryZone = data.customer.fulfillment === "delivery" ? getDeliveryZone(data.customer.postalCode ?? "") : null;
		if (data.customer.fulfillment === "delivery") {
			if (!deliveryZone) throw new Error("Cette zone de livraison n'est pas desservie.");
			if (subtotal < deliveryZone.minimumOrder) throw new Error(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
			if (!data.customer.address?.trim() || !data.customer.city?.trim()) throw new Error("Adresse de livraison incomplète.");
		}
		const deliveryFee = deliveryZone ? subtotal >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
		const total = subtotal + deliveryFee;
		const orderId = generateOrderId();
		const order = {
			id: orderId,
			deliveryToken: crypto.randomUUID().replace(/-/g, ""),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: data.paymentMethod === "online" ? "pending_payment" : data.customer.fulfillment === "delivery" ? "awaiting_delivery" : "awaiting_pickup",
			paymentMethod: data.paymentMethod,
			customer: {
				name: data.customer.name.trim(),
				phone: data.customer.phone.trim(),
				email: data.customer.email?.trim() || void 0,
				notes: data.customer.notes?.trim() || void 0,
				fulfillment: data.customer.fulfillment,
				requestedTime: data.customer.requestedTime,
				address: data.customer.address?.trim() || void 0,
				postalCode: data.customer.postalCode?.trim().replace(/\s+/g, "") || void 0,
				city: data.customer.city?.trim() || void 0,
				deliveryFee
			},
			items,
			total,
			currency: "EUR"
		};
		if (data.paymentMethod === "on_site") {
			await upsertOrder(order);
			return {
				type: "on_site",
				orderId: order.id,
				total: order.total,
				redirectUrl: `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=on_site`
			};
		}
		const webhookUrl = `${data.origin}/api/mollie-webhook`;
		const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=mollie`;
		const payment = await createMolliePayment({
			amountValue: total.toFixed(2),
			description: `Poke N Bowl ${orderId}`,
			redirectUrl,
			webhookUrl,
			metadata: { orderId: order.id }
		});
		order.molliePaymentId = payment.id;
		await upsertOrder(order);
		const payUrl = payment._links?.checkout?.href;
		if (!payUrl) throw new Error("Mollie n'a pas renvoyé d'URL de paiement.");
		return {
			type: "online",
			orderId: order.id,
			total: order.total,
			molliePaymentId: payment.id,
			redirectUrl: payUrl
		};
	} catch (error) {
		console.error("[Checkout] submitCheckout failed:", error);
		return {
			type: "error",
			message: error instanceof Error && error.message ? error.message : "Erreur serveur pendant la création de la commande. Consultez les journaux de l’application."
		};
	}
}
function getBancontactProApiKey() {
	const env = loadAndGetEnv();
	const candidate = env.BANCONTACT_PRO_API_KEY || env.PAYCONIQ_API_KEY || env.BANCONTACT_API_KEY || env.BANCONTACT_KEY || env.PAYCONIQ_KEY;
	if (candidate && (candidate.startsWith("live_") || candidate.startsWith("test_"))) return;
	return candidate?.trim();
}
function getAuthHeader(apiKey) {
	const clean = apiKey.trim();
	return clean.toLowerCase().startsWith("bearer ") ? clean : `Bearer ${clean}`;
}
var CANDIDATE_PROD_URLS = ["https://api.payconiq.com/v3", "https://merchant.api.bancontact.net/v3"];
var CANDIDATE_PREPROD_URLS = [
	"https://api.ext.payconiq.com/v3",
	"https://api.preprod.payconiq.com/v3",
	"https://merchant.api.preprod.bancontact.net/v3"
];
function getCandidateUrls() {
	const env = (process.env.BANCONTACT_PRO_ENV || "production").toLowerCase();
	return env === "preprod" || env === "test" ? CANDIDATE_PREPROD_URLS : CANDIDATE_PROD_URLS;
}
async function getBancontactProPayment(paymentId) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.");
	const urls = getCandidateUrls();
	let lastErr = "";
	for (const baseUrl of urls) try {
		const res = await fetch(`${baseUrl}/payments/${paymentId}`, { headers: {
			Authorization: getAuthHeader(apiKey),
			Accept: "application/json"
		} });
		if (res.ok) return await res.json();
		lastErr = await res.text();
	} catch (e) {
		lastErr = e?.message ?? String(e);
	}
	throw new Error(`Bancontact Pro get payment failed: ${lastErr}`);
}
//#endregion
export { getBancontactProApiKey as a, getDeliveryZone as c, getRushHistory as d, getRushState as f, getAllBankKeyCandidates as i, getMollieApiKey as l, processCheckout as m, cancelRushPause as n, getBancontactProPayment as o, loadAndGetEnv as p, checkoutSchema as r, getCheckedFiles as s, activateRushPause as t, getMolliePayment as u };
