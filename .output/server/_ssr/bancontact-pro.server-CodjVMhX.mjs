//#region node_modules/.nitro/vite/services/ssr/assets/bancontact-pro.server-CodjVMhX.js
function getBancontactProApiKey() {
	return process.env.BANCONTACT_PRO_API_KEY || process.env.PAYCONIQ_API_KEY;
}
function getAuthHeader(apiKey) {
	const clean = apiKey.trim();
	return clean.toLowerCase().startsWith("bearer ") ? clean : `Bearer ${clean}`;
}
var CANDIDATE_PROD_URLS = ["https://api.payconiq.com/v3", "https://merchant.api.bancontact.net/v3"];
var CANDIDATE_PREPROD_URLS = ["https://api.preprod.payconiq.com/v3", "https://merchant.api.preprod.bancontact.net/v3"];
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
//#endregion
export { getBancontactProPayment as n, createBancontactProPayment as t };
