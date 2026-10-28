import { c as desserts, p as drinks, r as bowls } from "./data-Cpa2Kghh.mjs";
import { a as numberType, i as literalType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as generateOrderId } from "./orders-CaaHT_fT.mjs";
import { c as upsertOrder } from "./order-store-0FsFo7Nl.mjs";
import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-service.server-DFRH-Yo5.js
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
function getBancontactProApiKey() {
	const env = loadAndGetEnv();
	const candidate = env.BANCONTACT_PRO_API_KEY || env.PAYCONIQ_API_KEY || env.BANCONTACT_API_KEY || env.BANCONTACT_KEY || env.PAYCONIQ_KEY;
	if (candidate && (candidate.startsWith("live_") || candidate.startsWith("test_"))) return;
	return candidate?.trim();
}
function isBancontactProConfigured() {
	return Boolean(getBancontactProApiKey());
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
async function createBancontactProPayment(params) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.");
	const amountCents = Math.round(params.amountEur * 100);
	const urls = getCandidateUrls();
	let lastErr = "";
	for (const baseUrl of urls) try {
		const res = await fetch(`${baseUrl}/payments`, {
			method: "POST",
			headers: {
				Authorization: getAuthHeader(apiKey),
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				amount: amountCents,
				currency: "EUR",
				description: params.description,
				reference: params.reference,
				returnUrl: params.returnUrl,
				callbackUrl: params.callbackUrl
			})
		});
		if (res.ok) return await res.json();
		lastErr = await res.text();
	} catch (e) {
		lastErr = e?.message ?? String(e);
	}
	throw new Error(`Bancontact Pro create payment failed: ${lastErr}`);
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
/**
* Server-only Mollie helpers.
* Requires env: MOLLIE_API_KEY (test_… or live_…)
*/
var MOLLIE_API = "https://api.mollie.com/v2";
function getMollieApiKey() {
	const env = loadAndGetEnv();
	const direct = env.MOLLIE_API_KEY || env.MOLLIE_KEY;
	if (direct) return direct.trim();
	const candidates = [
		env.BANCONTACT_PRO_API_KEY,
		env.PAYCONIQ_API_KEY,
		env.BANCONTACT_API_KEY,
		env.API_KEY
	];
	for (const c of candidates) if (c && (c.startsWith("live_") || c.startsWith("test_"))) return c.trim();
}
function isMollieConfigured() {
	return Boolean(getMollieApiKey());
}
function getApiKey() {
	const key = getMollieApiKey();
	if (!key) throw new Error("MOLLIE_API_KEY manquante. Renseigne la variable MOLLIE_API_KEY sur cPanel ou dans le fichier .env.");
	return key;
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
			unitPrice += totalCustomExtraProteinUnits * 2;
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
			if (toppingLine) {
				const rawContent = toppingLine.replace(/^Toppings?\s*:\s*/i, "").replace(/\s*\(\+[\d.,]+€\)\s*$/, "");
				let totalToppingUnits = 0;
				if (!/aucun/i.test(rawContent)) {
					const parts = rawContent.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
					for (const part of parts) {
						const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
						const count = match?.[1] ? parseInt(match[1], 10) : 1;
						totalToppingUnits += isNaN(count) ? 1 : count;
					}
				}
				const extraToppings = Math.max(0, totalToppingUnits - 1);
				unitPrice += extraToppings * .5;
			} else {
				const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
				let totalToppingUnits = 0;
				for (const t of individualToppings) {
					const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
					const count = match?.[1] ? parseInt(match[1], 10) : 1;
					totalToppingUnits += isNaN(count) ? 1 : count;
				}
				const extraToppings = Math.max(0, totalToppingUnits - 1);
				unitPrice += extraToppings * .5;
			}
			const extraSauces = opts.filter((t) => /sauce\s+(suppl[ée]mentaire|extra|2[èe]me\s+pot)/i.test(t));
			unitPrice += extraSauces.length * 1;
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
			const extraProteins = opts.filter((t) => /(Suppl[ée]ment\s*Prot[ée]ine|Prot[ée]ine\s*suppl[ée]mentaire|Portion\s+extra\s+Poulet|Suppl[ée]ment\s+Poulet\s+Croustillant)/i.test(t));
			let totalExtraProteinUnits = 0;
			for (const ep of extraProteins) {
				const match = ep.match(/\(x(\d+)\)/i) || ep.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraProteinUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraProteinUnits * 2;
			const extraMixins = opts.filter((t) => /^L[ée]gume\s*\/\s*Mix-in/i.test(t));
			let totalExtraMixinUnits = 0;
			for (const m of extraMixins) {
				const match = m.match(/\(x(\d+)\)/i) || m.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalExtraMixinUnits += isNaN(count) ? 1 : count;
			}
			unitPrice += totalExtraMixinUnits * 1;
			const toppingEntries = opts.filter((t) => /^Topping/i.test(t));
			let totalSignatureToppings = 0;
			for (const t of toppingEntries) {
				const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
				const count = match?.[1] ? parseInt(match[1], 10) : 1;
				totalSignatureToppings += isNaN(count) ? 1 : count;
			}
			unitPrice += totalSignatureToppings * .5;
			const extraSauces = opts.filter((t) => /sauce\s+(extra|suppl[ée]mentaire|2[èe]me\s+pot)/i.test(t));
			unitPrice += extraSauces.length * 1;
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
		if (isMollieConfigured() && !isBancontactProConfigured()) {
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
		}
		const webhookUrl = `${data.origin}/api/bancontact-webhook`;
		const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=bancontact`;
		const payment = await createBancontactProPayment({
			amountEur: total,
			description: `Poke N Bowl ${orderId}`,
			reference: order.id,
			returnUrl: redirectUrl,
			callbackUrl: webhookUrl
		});
		order.molliePaymentId = `bancontact:${payment.paymentId}`;
		await upsertOrder(order);
		const payUrl = payment._links?.checkout?.href || payment._links?.deeplink?.href || payment._links?.qrcode?.href;
		if (!payUrl) throw new Error("Bancontact Pro n'a pas renvoyé d'URL de paiement");
		return {
			type: "online",
			orderId: order.id,
			total: order.total,
			molliePaymentId: payment.paymentId,
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
//#endregion
export { getCheckedFiles as a, getMolliePayment as c, getBancontactProPayment as i, loadAndGetEnv as l, getAllBankKeyCandidates as n, getDeliveryZone as o, getBancontactProApiKey as r, getMollieApiKey as s, checkoutSchema as t, processCheckout as u };
