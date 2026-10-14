//#region node_modules/.nitro/vite/services/ssr/assets/bancontact-pro.server-DRod8WCo.js
/**
* Server-only Mollie helpers.
* Requires env: MOLLIE_API_KEY (test_… or live_…)
*/
var MOLLIE_API = "https://api.mollie.com/v2";
function getApiKey() {
	const key = process.env.MOLLIE_API_KEY;
	if (!key) throw new Error("MOLLIE_API_KEY manquante. Ajoute-la dans les variables d'environnement Vercel.");
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
function formatEurAmount(total) {
	return total.toFixed(2);
}
/**
* Server-only Bancontact Pro (Payconiq by Bancontact) API helper.
*
* Supported environments:
* - Production: https://merchant.api.bancontact.net/v3
* - Preprod / Test: https://merchant.api.preprod.bancontact.net/v3
*
* Required environment variables:
* - BANCONTACT_PRO_API_KEY or PAYCONIQ_API_KEY
* - BANCONTACT_PRO_ENV (optional: "production" | "preprod", defaults to "production")
*/
var PROD_API = "https://merchant.api.bancontact.net/v3";
var PREPROD_API = "https://merchant.api.preprod.bancontact.net/v3";
function getBancontactProApiKey() {
	return process.env.BANCONTACT_PRO_API_KEY || process.env.PAYCONIQ_API_KEY;
}
function isBancontactProConfigured() {
	return Boolean(getBancontactProApiKey());
}
function getApiBaseUrl() {
	const env = (process.env.BANCONTACT_PRO_ENV || "production").toLowerCase();
	return env === "preprod" || env === "test" ? PREPROD_API : PROD_API;
}
async function createBancontactProPayment(params) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la cle API dans les variables d'environnement.");
	const amountCents = Math.round(params.amountEur * 100);
	const res = await fetch(`${getApiBaseUrl()}/payments`, {
		method: "POST",
		headers: {
			Authorization: apiKey,
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
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Bancontact Pro create payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
async function getBancontactProPayment(paymentId) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la cle API dans les variables d'environnement.");
	const res = await fetch(`${getApiBaseUrl()}/payments/${paymentId}`, { headers: {
		Authorization: apiKey,
		Accept: "application/json"
	} });
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Bancontact Pro get payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
//#endregion
export { getMolliePayment as a, getBancontactProPayment as i, createMolliePayment as n, isBancontactProConfigured as o, formatEurAmount as r, createBancontactProPayment as t };
