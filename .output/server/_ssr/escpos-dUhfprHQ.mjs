//#region node_modules/.nitro/vite/services/ssr/assets/escpos-dUhfprHQ.js
/**
* Générateur de commandes binaires ESC/POS pour Epson TM-m30III
* Largeur : 42 caractères (standard 80mm en police A espacée ou 48 colonnes max)
*/
var EscPosBuilder = class {
	buffer = [];
	constructor() {
		this.init();
	}
	init() {
		this.buffer.push(27, 64);
		this.buffer.push(27, 116, 2);
		return this;
	}
	align(alignment) {
		const val = alignment === "center" ? 1 : alignment === "right" ? 2 : 0;
		this.buffer.push(27, 97, val);
		return this;
	}
	bold(enable) {
		this.buffer.push(27, 69, enable ? 1 : 0);
		return this;
	}
	doubleSize(enable) {
		this.buffer.push(29, 33, enable ? 17 : 0);
		return this;
	}
	invert(enable) {
		this.buffer.push(29, 66, enable ? 1 : 0);
		return this;
	}
	text(str) {
		for (let i = 0; i < str.length; i++) {
			const code = str.charCodeAt(i);
			if (code < 128) this.buffer.push(code);
			else {
				const char = str[i];
				this.buffer.push({
					é: 130,
					è: 138,
					ê: 136,
					ë: 137,
					à: 133,
					â: 131,
					î: 140,
					ï: 139,
					ô: 147,
					ù: 151,
					û: 150,
					ü: 129,
					ç: 135,
					É: 144,
					À: 183,
					"€": 213
				}[char] ?? 32);
			}
		}
		return this;
	}
	line(str = "") {
		if (str) this.text(str);
		this.buffer.push(10);
		return this;
	}
	divider(char = "-", length = 42) {
		return this.line(char.repeat(length));
	}
	feed(lines = 3) {
		this.buffer.push(27, 100, lines);
		return this;
	}
	cut(partial = true) {
		this.buffer.push(29, 86, partial ? 1 : 0);
		return this;
	}
	/**
	* Commande native ESC/POS QR Code Epson (GS ( k)
	* Modèle 2, correction d'erreur M, taille de module paramétrable (1 à 8)
	*/
	qrCode(data, size = 6) {
		const dataBytes = [];
		for (let i = 0; i < data.length; i++) dataBytes.push(data.charCodeAt(i) & 255);
		const len = dataBytes.length + 3;
		const pL = len % 256;
		const pH = Math.floor(len / 256);
		this.buffer.push(29, 40, 107, 4, 0, 49, 65, 50, 0);
		this.buffer.push(29, 40, 107, 3, 0, 49, 67, Math.min(Math.max(size, 1), 8));
		this.buffer.push(29, 40, 107, 3, 0, 49, 69, 49);
		this.buffer.push(29, 40, 107, pL, pH, 49, 80, 48, ...dataBytes);
		this.buffer.push(29, 40, 107, 3, 0, 49, 81, 48);
		return this;
	}
	toBytes() {
		return new Uint8Array(this.buffer);
	}
	toBase64() {
		const binary = String.fromCharCode(...this.buffer);
		return btoa(binary);
	}
};
function truncate(text, width = 42) {
	if (text.length <= width) return text;
	return text.substring(0, width - 3) + "...";
}
/**
* 1. TICKET CUISINE
* Lisibilité maximale pour la préparation, sans données personnelles superflues.
*/
function buildKitchenReceipt(order) {
	const b = new EscPosBuilder();
	b.align("center").bold(true).doubleSize(true).line("POKE N BOWL").line("CUISINE").doubleSize(false).bold(false).line();
	b.align("center").invert(true).doubleSize(true).bold(true).line(order.customer.fulfillment === "delivery" ? ` LIVRAISON : ${order.customer.requestedTime} ` : ` A EMPORTER : ${order.customer.requestedTime} `).invert(false).doubleSize(false).bold(false).line();
	b.align("left").bold(true).line(`COMMANDE : ${order.id}`).bold(false).line(`Client : ${order.customer.name}`).line(`Reçue le : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} à ${new Date(order.createdAt).toLocaleTimeString("fr-BE", {
		hour: "2-digit",
		minute: "2-digit"
	})}`).divider("=");
	if (order.customer.notes) {
		b.invert(true).bold(true).line(` NOTE CLIENT / ALLERGIES : `).invert(false).bold(false);
		b.line(truncate(order.customer.notes, 42));
		b.divider("-");
	}
	for (const item of order.items) {
		b.bold(true).doubleSize(true);
		b.line(`${item.quantity} x ${item.name}`);
		b.doubleSize(false).bold(false);
		if (item.toppings && item.toppings.length > 0) for (const top of item.toppings) if (top.toLowerCase().startsWith("sans :")) b.invert(true).bold(true).line(`  ! ${top} `).invert(false).bold(false);
		else b.line(`  + ${truncate(top, 38)}`);
		b.line();
	}
	b.divider("=");
	b.feed(4).cut(true);
	return b.toBytes();
}
/**
* 2. TICKET CLIENT / LIVREUR
* Contient coordonnées complètes, adresse, paiement et QR Code de suivi/GPS.
*/
function buildDeliveryReceipt(order, origin = "https://pokenbowl.be") {
	const b = new EscPosBuilder();
	b.align("center").bold(true).doubleSize(true).line("POKE N BOWL").doubleSize(false).line("Rue Haute 38, 4600 Visé").line("Tel: 04 222 00 00").line().bold(true).line(order.customer.fulfillment === "delivery" ? "*** TICKET LIVRAISON ***" : "*** TICKET CLIENT (RETRAIT) ***").bold(false).divider("=");
	b.align("left").bold(true).line(`COMMANDE N° : ${order.id}`).bold(false).line(`Date : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} ${new Date(order.createdAt).toLocaleTimeString("fr-BE", {
		hour: "2-digit",
		minute: "2-digit"
	})}`).divider("-");
	b.bold(true).line("CLIENT :").bold(false);
	b.line(`Nom  : ${order.customer.name}`);
	b.line(`Tel  : ${order.customer.phone}`);
	b.line(`Heure souhaitée : ${order.customer.requestedTime}`);
	if (order.customer.fulfillment === "delivery") {
		b.divider("-");
		b.bold(true).line("ADRESSE DE LIVRAISON :").bold(false);
		b.line(truncate(order.customer.address ?? "Non précisée", 42));
		b.line(`${order.customer.postalCode ?? ""} ${order.customer.city ?? ""}`.trim());
		if (order.customer.notes) b.line(`Note : ${truncate(order.customer.notes, 35)}`);
	}
	b.divider("-");
	b.bold(true).line("ARTICLES :").bold(false);
	for (const item of order.items) {
		const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
		const header = `${item.quantity}x ${item.name}`;
		const dotsCount = Math.max(1, 42 - header.length - itemTotal.length);
		b.line(`${header}${" ".repeat(dotsCount)}${itemTotal}`);
		if (item.toppings && item.toppings.length > 0) for (const top of item.toppings) b.line(`   ${truncate(top, 38)}`);
	}
	b.divider("-");
	if (order.customer.deliveryFee && order.customer.deliveryFee > 0) {
		const feeStr = order.customer.deliveryFee.toFixed(2) + " EUR";
		b.line(`Frais de livraison${" ".repeat(Math.max(1, 24 - feeStr.length))}${feeStr}`);
	}
	b.bold(true).doubleSize(true);
	const totalStr = `TOTAL: ${order.total.toFixed(2)} EUR`;
	b.line(totalStr);
	b.doubleSize(false).bold(false);
	b.line();
	b.align("center").bold(true);
	if (order.status === "paid") b.invert(true).line(" PAIEMENT VALIDE - EN LIGNE ").invert(false);
	else b.line(`PAIEMENT SUR PLACE : ${order.total.toFixed(2)} EUR`);
	b.bold(false).line();
	if (order.deliveryToken) {
		const trackUrl = `${origin.replace(/\/$/, "")}/track/${order.deliveryToken}`;
		b.divider("=");
		b.line("SCANNEZ POUR GPS ET CONTACT LIVREUR");
		b.line();
		b.qrCode(trackUrl, 6);
		b.line();
		b.line("pokenbowl.be");
	}
	b.divider("=");
	b.line("Merci de votre confiance !");
	b.feed(4).cut(true);
	return b.toBytes();
}
//#endregion
export { buildDeliveryReceipt as n, buildKitchenReceipt as r, EscPosBuilder as t };
