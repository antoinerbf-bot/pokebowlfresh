import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/mollie.server-DnSXWin3.js
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
//#endregion
export { getBancontactProPayment as a, getMolliePayment as c, loadAndGetEnv as d, getBancontactProApiKey as i, isBancontactProConfigured as l, createMolliePayment as n, getCheckedFiles as o, getAllBankKeyCandidates as r, getMollieApiKey as s, createBancontactProPayment as t, isMollieConfigured as u };
