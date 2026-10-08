import type { Order } from "./orders";

/**
 * Générateur de commandes binaires ESC/POS pour Epson TM-m30III
 * Largeur : 42 caractères (standard 80mm en police A espacée ou 48 colonnes max)
 */
export class EscPosBuilder {
  private buffer: number[] = [];

  constructor() {
    this.init();
  }

  init(): this {
    // ESC @ : Reset / Init
    this.buffer.push(0x1b, 0x40);
    // ESC t 2 : Code page 850 (Multilingual Latin I pour accents français)
    this.buffer.push(0x1b, 0x74, 0x02);
    return this;
  }

  align(alignment: "left" | "center" | "right"): this {
    const val = alignment === "center" ? 0x01 : alignment === "right" ? 0x02 : 0x00;
    this.buffer.push(0x1b, 0x61, val);
    return this;
  }

  bold(enable: boolean): this {
    this.buffer.push(0x1b, 0x45, enable ? 0x01 : 0x00);
    return this;
  }

  doubleSize(enable: boolean): this {
    // GS ! : Sélectionne taille des caractères (0 = normal, 0x11 = double hauteur et largeur)
    this.buffer.push(0x1d, 0x21, enable ? 0x11 : 0x00);
    return this;
  }

  invert(enable: boolean): this {
    // GS B : Inverse noir/blanc
    this.buffer.push(0x1d, 0x42, enable ? 0x01 : 0x00);
    return this;
  }

  text(str: string): this {
    // Convertir chaîne en CP850 simplifié
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (code < 128) {
        this.buffer.push(code);
      } else {
        // Encodage accents basiques
        const char = str[i];
        const map: Record<string, number> = {
          é: 0x82,
          è: 0x8a,
          ê: 0x88,
          ë: 0x89,
          à: 0x85,
          â: 0x83,
          î: 0x8c,
          ï: 0x8b,
          ô: 0x93,
          ù: 0x97,
          û: 0x96,
          ü: 0x81,
          ç: 0x87,
          É: 0x90,
          À: 0xb7,
          "€": 0xd5, // Dans CP850 standard ou 0xD5
        };
        this.buffer.push(map[char] ?? 0x20); // Espace si non supporté
      }
    }
    return this;
  }

  line(str = ""): this {
    if (str) this.text(str);
    this.buffer.push(0x0a);
    return this;
  }

  divider(char = "-", length = 42): this {
    return this.line(char.repeat(length));
  }

  feed(lines = 3): this {
    this.buffer.push(0x1b, 0x64, lines);
    return this;
  }

  cut(partial = true): this {
    // GS V : Coupure papier
    this.buffer.push(0x1d, 0x56, partial ? 0x01 : 0x00);
    return this;
  }

  /**
   * Commande native ESC/POS QR Code Epson (GS ( k)
   * Modèle 2, correction d'erreur M, taille de module paramétrable (1 à 8)
   */
  qrCode(data: string, size = 6): this {
    const dataBytes: number[] = [];
    for (let i = 0; i < data.length; i++) {
      dataBytes.push(data.charCodeAt(i) & 0xff);
    }
    const len = dataBytes.length + 3;
    const pL = len % 256;
    const pH = Math.floor(len / 256);

    // 1. Modèle 2 : GS ( k 04 00 31 41 32 00
    this.buffer.push(0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, 0x32, 0x00);

    // 2. Taille module : GS ( k 03 00 31 43 [size]
    this.buffer.push(0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, Math.min(Math.max(size, 1), 8));

    // 3. Niveau d'erreur M (15%) : GS ( k 03 00 31 45 31
    this.buffer.push(0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x31);

    // 4. Données : GS ( k pL pH 31 50 30 [data...]
    this.buffer.push(0x1d, 0x28, 0x6b, pL, pH, 0x31, 0x50, 0x30, ...dataBytes);

    // 5. Impression du QR : GS ( k 03 00 31 51 30
    this.buffer.push(0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x51, 0x30);

    return this;
  }

  toBytes(): Uint8Array {
    return new Uint8Array(this.buffer);
  }

  toBase64(): string {
    const binary = String.fromCharCode(...this.buffer);
    return btoa(binary);
  }
}

function truncate(text: string, width = 42): string {
  if (text.length <= width) return text;
  return text.substring(0, width - 3) + "...";
}

/**
 * 1. TICKET CUISINE
 * Lisibilité maximale pour la préparation, sans données personnelles superflues.
 */
export function buildKitchenReceipt(order: Order): Uint8Array {
  const b = new EscPosBuilder();

  b.align("center")
    .bold(true)
    .doubleSize(true)
    .line("POKE N BOWL")
    .line("CUISINE")
    .doubleSize(false)
    .bold(false)
    .line();

  // Mode & Créneau en très gros
  b.align("center")
    .invert(true)
    .doubleSize(true)
    .bold(true)
    .line(
      order.customer.fulfillment === "delivery"
        ? ` LIVRAISON : ${order.customer.requestedTime} `
        : ` A EMPORTER : ${order.customer.requestedTime} `,
    )
    .invert(false)
    .doubleSize(false)
    .bold(false)
    .line();

  b.align("left")
    .bold(true)
    .line(`COMMANDE : ${order.id}`)
    .bold(false)
    .line(`Client : ${order.customer.name}`)
    .line(`Reçue le : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} à ${new Date(order.createdAt).toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" })}`)
    .divider("=");

  // Remarques ou allergies client
  if (order.customer.notes) {
    b.invert(true).bold(true).line(` NOTE CLIENT / ALLERGIES : `).invert(false).bold(false);
    b.line(truncate(order.customer.notes, 42));
    b.divider("-");
  }

  // Articles
  for (const item of order.items) {
    b.bold(true).doubleSize(true);
    b.line(`${item.quantity} x ${item.name}`);
    b.doubleSize(false).bold(false);

    if (item.toppings && item.toppings.length > 0) {
      for (const top of item.toppings) {
        if (top.toLowerCase().startsWith("sans :")) {
          // Ingrédients retirés / allergies en gras inversé
          b.invert(true).bold(true).line(`  ! ${top} `).invert(false).bold(false);
        } else {
          b.line(`  + ${truncate(top, 38)}`);
        }
      }
    }
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
export function buildDeliveryReceipt(order: Order, origin = "https://pokenbowl.be"): Uint8Array {
  const b = new EscPosBuilder();

  b.align("center")
    .bold(true)
    .doubleSize(true)
    .line("POKE N BOWL")
    .doubleSize(false)
    .line("Rue Haute 38, 4600 Visé")
    .line("Tel: 04 222 00 00")
    .line()
    .bold(true)
    .line(
      order.customer.fulfillment === "delivery"
        ? "*** TICKET LIVRAISON ***"
        : "*** TICKET CLIENT (RETRAIT) ***",
    )
    .bold(false)
    .divider("=");

  b.align("left")
    .bold(true)
    .line(`COMMANDE N° : ${order.id}`)
    .bold(false)
    .line(`Date : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} ${new Date(order.createdAt).toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" })}`)
    .divider("-");

  // Client
  b.bold(true).line("CLIENT :").bold(false);
  b.line(`Nom  : ${order.customer.name}`);
  b.line(`Tel  : ${order.customer.phone}`);
  b.line(`Heure souhaitée : ${order.customer.requestedTime}`);

  if (order.customer.fulfillment === "delivery") {
    b.divider("-");
    b.bold(true).line("ADRESSE DE LIVRAISON :").bold(false);
    b.line(truncate(order.customer.address ?? "Non précisée", 42));
    b.line(`${order.customer.postalCode ?? ""} ${order.customer.city ?? ""}`.trim());
    if (order.customer.notes) {
      b.line(`Note : ${truncate(order.customer.notes, 35)}`);
    }
  }

  b.divider("-");
  b.bold(true).line("ARTICLES :").bold(false);

  for (const item of order.items) {
    const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
    const header = `${item.quantity}x ${item.name}`;
    const dotsCount = Math.max(1, 42 - header.length - itemTotal.length);
    b.line(`${header}${" ".repeat(dotsCount)}${itemTotal}`);

    if (item.toppings && item.toppings.length > 0) {
      for (const top of item.toppings) {
        b.line(`   ${truncate(top, 38)}`);
      }
    }
  }

  b.divider("-");

  // Totaux
  if (order.customer.deliveryFee && order.customer.deliveryFee > 0) {
    const feeStr = order.customer.deliveryFee.toFixed(2) + " EUR";
    const feeLine = "Frais de livraison";
    b.line(`${feeLine}${" ".repeat(Math.max(1, 42 - feeLine.length - feeStr.length))}${feeStr}`);
  }

  b.bold(true).doubleSize(true);
  const totalStr = `TOTAL: ${order.total.toFixed(2)} EUR`;
  b.line(totalStr);
  b.doubleSize(false).bold(false);

  // Statut paiement
  b.line();
  b.align("center").bold(true);
  if (order.status === "paid") {
    b.invert(true).line(" PAIEMENT VALIDE - EN LIGNE ").invert(false);
  } else {
    b.line(`PAIEMENT SUR PLACE : ${order.total.toFixed(2)} EUR`);
  }
  b.bold(false).line();

  // QR Code sécurisé
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

