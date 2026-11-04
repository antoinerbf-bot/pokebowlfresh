/**
 * Client d'impression pour Epson TM-m30II
 * Protocole natif : ePOS-Print XML (HTTP/HTTPS SOAP sur port 8043 ou 8008)
 * 100% sans abonnement, impression thermique ultra-rapide avec QR Code matériel
 */
import type { Order } from "./orders";

export interface PrinterConfig {
  printerIp: string;
  printerPort: number;
  bridgeUrl?: string; // Ex: http://192.168.1.50:3001 ou http://localhost:3001
  autoPrintKitchen: boolean;
  autoPrintDelivery: boolean;
  soundEnabled: boolean;
  soundTheme?: "signature" | "zen_bell" | "marimba";
  soundVolume?: number; // 0.1 à 1.0 (défaut 0.85)
  printMode?: "epos" | "browser"; // "epos" (Réseau direct silencieux) ou "browser" (Boîte d'impression navigateur / USB)
}

export const DEFAULT_PRINTER_CONFIG: PrinterConfig = {
  printerIp: "192.168.0.8",
  printerPort: 8043,
  bridgeUrl: "",
  autoPrintKitchen: true,
  autoPrintDelivery: true,
  soundEnabled: true,
  soundTheme: "signature",
  soundVolume: 0.85,
  printMode: "epos",
};

export function loadPrinterConfig(): PrinterConfig {
  if (typeof window === "undefined") return DEFAULT_PRINTER_CONFIG;
  try {
    const raw = localStorage.getItem("pnb_printer_config");
    if (raw) {
      const parsed = JSON.parse(raw);
      // Forcer impérativement port 8043 si 9100 ou port non supporté par ePOS
      const safePort = (parsed.printerPort && [8043, 80, 8008, 443].includes(Number(parsed.printerPort)))
        ? Number(parsed.printerPort)
        : 8043;
      const cleanConfig: PrinterConfig = {
        ...DEFAULT_PRINTER_CONFIG,
        ...parsed,
        printerPort: safePort,
        printMode: "epos",
      };
      if (parsed.printerPort === 9100 || !parsed.printerPort) {
        localStorage.setItem("pnb_printer_config", JSON.stringify(cleanConfig));
      }
      return cleanConfig;
    }
  } catch {}
  return DEFAULT_PRINTER_CONFIG;
}

export function savePrinterConfig(config: PrinterConfig): void {
  if (typeof window === "undefined") return;
  const safePort = (config.printerPort && [8043, 80, 8008, 443].includes(Number(config.printerPort)))
    ? Number(config.printerPort)
    : 8043;
  const cleanConfig: PrinterConfig = { ...config, printerPort: safePort, printMode: "epos" };
  localStorage.setItem("pnb_printer_config", JSON.stringify(cleanConfig));
}

/**
 * Nettoyage thermique préservant les accents français (é, è, à, ç, etc.)
 * et convertissant les caractères spéciaux non gérés par l'imprimante
 */
export function cleanThermalText(str: string = ""): string {
  if (!str) return "";
  return String(str)
    .replace(/cacahu[eè]tes?/gi, "Noix de cajou")
    .replace(/€/g, "EUR")
    .replace(/[’‘`]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[^\x20-\x7E\n\r\u00C0-\u00FF]/g, ""); // garde ASCII + Latin-1 accentué
}

/**
 * Nettoie le nom d'un article pour le ticket thermique :
 * Supprime le mot redondant "Poké" ou "Poke" dans l'intitulé des plats
 * Ex: "Spicy Chicken Poké (Grand)" -> "Spicy Chicken (Grand)"
 *     "Crousty Chicken Poké" -> "Crousty Chicken"
 */
export function cleanReceiptItemName(name: string = ""): string {
  if (!name) return "";
  let res = cleanThermalText(name);
  while (/(^|\s+)pok[eé](\s+|$)/i.test(res)) {
    res = res.replace(/(^|\s+)pok[eé](\s+|$)/i, "$1$2");
  }
  return res
    .replace(/\s+/g, " ")
    .replace(/\s+\)/g, ")")
    .replace(/\(\s+/g, "(")
    .trim();
}

/**
 * Nettoyage et échappement sécurisé des caractères pour le XML ePOS
 */
export function escapeXml(str: string = ""): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Enveloppe SOAP standard pour ePOS-Print
 */
export function buildEposSoapEnvelope(innerXml: string): string {
  if (innerXml.includes("<s:Envelope") || innerXml.includes("<soap:Envelope")) {
    return innerXml;
  }
  return `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Header>
    <parameter xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <devid>local_printer</devid>
      <timeout>10000</timeout>
    </parameter>
  </s:Header>
  <s:Body>
    ${innerXml.trim()}
  </s:Body>
</s:Envelope>`;
}

/**
 * Alignement thermique 48 colonnes (Standard 80mm Epson TM-m30II / Takeaway)
 */
export function formatThermalRow(left: string, right: string = "", width = 48): string {
  const cLeft = cleanThermalText(left);
  const cRight = cleanThermalText(right);
  if (!cRight) return cLeft.slice(0, width);
  const avail = width - cRight.length - 1;
  const tLeft = cLeft.length > avail ? cLeft.slice(0, avail) : cLeft;
  const spaces = Math.max(1, width - tLeft.length - cRight.length);
  return tLeft + " ".repeat(spaces) + cRight;
}

/**
 * Découpe propre d'un texte long sans couper les mots
 */
export function wrapThermalText(text: string, maxWidth = 48): string[] {
  if (!text) return [];
  const words = cleanThermalText(text).split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxWidth) {
      current += " " + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function unpackToppings(toppings: string[] = []): Array<{ text: string; price?: string; isAllergy?: boolean; isExtra?: boolean }> {
  const result: Array<{ text: string; price?: string; isAllergy?: boolean; isExtra?: boolean }> = [];
  for (const raw of toppings) {
    if (!raw) continue;
    const catMatch = raw.match(/^(?:Base|Taille|Proteine|Protéine|Mix-ins?|Sauces?|Toppings?|Crunch)\s*:\s*(.+)$/i);
    const content = catMatch ? catMatch[1] : raw;
    const parts = content.split(",").map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const isAllergy = /^[!\s]*(?:sans\s*:|sans\s+|allerg)/i.test(part);
      const priceMatch = part.match(/\(\+?([\d.,]+)\s*€?\)/);
      const priceStr = priceMatch ? parseFloat(priceMatch[1].replace(",", ".")).toFixed(2) : undefined;
      const cleanName = part.replace(/\(\+?[\d.,]+\s*€?\)/g, "").replace(/\(x\d+\)/g, "").trim();
      const isExtra = Boolean(priceStr) || cleanName.startsWith("+");
      const displayText = cleanName.replace(/^[!+\s]+/, "");
      result.push({ text: displayText, price: priceStr, isAllergy, isExtra });
    }
  }
  return result;
}

/**
 * Générateur XML ePOS natif pour le ticket de test (Bouton vert)
 * Imprime une réplique exacte et complète du ticket Takeaway.com
 */
export function buildEposXmlTest(printerIp: string, origin = "https://pokenbowl.be"): string {
  const testOrder: Order = {
    id: "J83 BY8",
    createdAt: new Date().toISOString(),
    status: "paid",
    paymentMethod: "online",
    currency: "EUR",
    deliveryToken: "test-epson",
    customer: {
      name: "Hervé S.",
      phone: "0491 28 14 56",
      fulfillment: "delivery",
      requestedTime: "dès que possible",
      address: "Rue du Viaduc",
      city: "Dalhem",
      postalCode: "4607",
      deliveryFee: 3.0,
      notes: "merci de déposer la commande sur le muret, mon fils dort",
    },
    items: [
      {
        id: "bowl-1",
        name: "Crée ton bowl",
        price: 11.0,
        quantity: 1,
        toppings: [
          "Moyenne",
          "Riz blanc",
          "Guacamole",
          "Patates douces",
          "Feta (+1.00 €)",
          "Mangue",
          "Houmous",
          "Poulet",
          "Teriyaki",
          "Noix de cajou",
          "Oignons frits",
        ],
      },
      {
        id: "bowl-2",
        name: "Crée ton bowl",
        price: 14.0,
        quantity: 1,
        toppings: [
          "Grande (+3.00 €)",
          "Riz blanc",
          "Guacamole",
          "Feta (+1.00 €)",
          "Houmous",
          "Poivrons",
          "Mangue",
          "Poulet",
          "Mayo wasabi",
          "Oignons frits",
          "Graines de sésame",
          "Flocons de chili",
          "Nachos",
        ],
      },
    ],
    total: 28.0,
  };

  return buildEposXmlOrder(testOrder, origin);
}

/**
 * Générateur XML ePOS natif pour le ticket de commande officiel (Style 100% Takeaway.com)
 */
export function buildEposXmlOrder(order: Order, origin = "https://pokenbowl.be"): string {
  const isDelivery = order.customer.fulfillment === "delivery";
  const dateObj = new Date(order.createdAt);

  // Formatage date style Takeaway (ex: 31 Oct, sans point, première lettre majuscule)
  const dayStr = dateObj.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels", day: "numeric" });
  const rawMonth = dateObj.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels", month: "short" }).replace(/\./g, "").trim();
  const monthStr = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
  const timeStr = dateObj.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels", hour: "2-digit", minute: "2-digit" });

  const safeCustomerName = cleanThermalText(order.customer.name);
  const safeCustomerPhone = cleanThermalText(order.customer.phone);
  const safeAddress = cleanThermalText(order.customer.address || "Non précisée");
  const safeCity = cleanThermalText(order.customer.city || "");
  const safePostalCode = cleanThermalText(order.customer.postalCode || "");
  const safeNotes = cleanThermalText(order.customer.notes || "");
  const rawRequestedTime = cleanThermalText(order.customer.requestedTime || "dès que possible");
  const isScheduled = rawRequestedTime.toLowerCase() !== "dès que possible" && rawRequestedTime.length > 0;

  // Réf de commande courte style Takeaway (ex: # RC3 K6Y ou # J83 BY8)
  const rawId = order.id.includes("-") ? order.id.split("-").pop() || order.id : order.id;
  const shortOrderRef = rawId.length === 6 ? `${rawId.slice(0, 3)} ${rawId.slice(3)}` : rawId;

  let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;

  // Helper interne garantissant font_a, dh=false, dw=false sur TOUTES les lignes
  const line = (text: string, align: "left" | "center" | "right" = "left", em = false) => {
    xml += `  <text font="font_a" align="${align}" em="${em ? "true" : "false"}" dh="false" dw="false">${escapeXml(text)}&#10;</text>\n`;
  };

  const hr = () => {
    line("------------------------------------------------", "left", false);
  };

  // 1. En-tête restaurant (Style officiel Takeaway.com)
  line("Takeaway.com", "center", true);
  line("Poke N Bowl", "center", false);
  hr();

  // 2. Type & Timing de commande
  if (isDelivery) {
    if (isScheduled) {
      line("LIVRAISON PLANIFIÉE", "center", true);
      line(`Date : ${dayStr} ${monthStr}, à ${rawRequestedTime}`, "center", false);
    } else {
      line("LIVRAISON", "center", true);
      line(`Date : ${dayStr} ${monthStr}, dès que possible`, "center", false);
      line(`(${timeStr})`, "center", false);
    }
  } else {
    line("À EMPORTER", "center", true);
    line(`Date : ${dayStr} ${monthStr}, ${rawRequestedTime}`, "center", false);
    line(`(${timeStr})`, "center", false);
  }

  // 3. Référence Takeaway (# RC3 K6Y)
  line("", "center", false);
  line(`# ${shortOrderRef.toUpperCase()}`, "center", true);
  hr();

  // 4. Colonne monnaie EUR
  line(formatThermalRow("", "EUR", 48), "left", false);

  // 5. Articles & Ingrédients
  let subTotal = 0;
  for (const item of order.items) {
    const safeItemName = cleanReceiptItemName(item.name);
    const isCustom = /cr[eé][eé]\s+ton\s+bowl|sur[- ]mesure|custom/i.test(item.name);
    const unpacked = unpackToppings(item.toppings || []);

    // Pour les plats composés (hors "Crée ton bowl"), on ne liste pas les ingrédients
    // inclus par défaut dans la recette : on ne garde que les suppléments payants (+),
    // les exclusions/allergies (! Sans) et les choix de boisson/formule.
    const displayToppings = isCustom
      ? unpacked
      : unpacked.filter((sub) => {
          if (sub.isExtra || sub.isAllergy) return true;
          if (/^boisson/i.test(sub.text)) return true;
          return false;
        });

    const supplementsTotal = unpacked.reduce((sum, s) => sum + (s.price ? parseFloat(s.price) : 0), 0);
    const baseUnitPrice = Math.max(0, item.price - supplementsTotal);
    const itemBaseTotalStr = (baseUnitPrice * item.quantity).toFixed(2);
    subTotal += item.price * item.quantity;

    // Titre d'article si Poké sur-mesure (Takeaway affiche "Crée ton bowl" au-dessus)
    if (displayToppings.length > 0 && isCustom) {
      line(safeItemName, "left", false);
    }

    // Ligne principale : "1 x Créé ton bowl                          10.00"
    const itemHeader = `${item.quantity} x ${safeItemName}`;
    line(formatThermalRow(itemHeader, itemBaseTotalStr, 48), "left", false);

    // Composition détaillée avec indentation Takeaway
    for (const sub of displayToppings) {
      if (sub.isExtra && sub.price) {
        // Supplément payant : "  + Feta                                    1.00" (2 espaces)
        line(formatThermalRow(`  + ${sub.text}`, parseFloat(sub.price).toFixed(2), 48), "left", false);
      } else if (sub.isAllergy) {
        // Allergie / exclusion : "  ! Sans oignons"
        line(`  ! ${sub.text}`, "left", false);
      } else {
        // Ingrédient standard : "    Riz blanc" (4 espaces)
        line(`    ${sub.text}`, "left", false);
      }
    }
  }

  // 6. Totaux & Frais
  line("", "left", false);
  line(formatThermalRow("Sous-total", subTotal.toFixed(2), 48), "left", false);
  line(formatThermalRow("Total de la commande", subTotal.toFixed(2), 48), "left", false);

  const deliveryFee = (isDelivery && order.customer.deliveryFee) ? order.customer.deliveryFee : 0;
  if (isDelivery && deliveryFee > 0) {
    line(formatThermalRow("Frais de livraison", deliveryFee.toFixed(2), 48), "left", false);
  }

  // Souligné sous les prix
  line(formatThermalRow("", "-----", 48), "left", false);
  // Total dû en gras
  line(formatThermalRow("Total dû", order.total.toFixed(2), 48), "left", true);
  // Double souligné comptable sous le total
  line(formatThermalRow("", "=====", 48), "left", false);

  // 7. Moyen de paiement
  line("", "left", false);
  line("Payé par :", "left", false);
  const isPaid = order.status === "paid";
  const paymentLabel = isPaid ? "Carte ************" : "À régler sur place";
  line(formatThermalRow(paymentLabel, order.total.toFixed(2), 48), "left", false);

  // 8. Mentions allergènes
  hr();
  line("   IMPORTANT : POUR LES INFORMATIONS SUR LES    ", "center", false);
  line("             ALLERGÈNES ALIMENTAIRES            ", "center", false);
  line("    Appelez le restaurant ou consultez leur menu", "center", false);
  hr();

  // 9. Statut de commande (COMMANDE PAYÉE en gras, centré, hauteur standard)
  line(isPaid ? "COMMANDE PAYÉE" : "À RÉGLER SUR PLACE", "center", true);
  hr();

  // 10. Détails Client
  line("Détails du client:", "left", false);
  line("", "left", false);
  line(safeCustomerName, "left", false);
  line("", "left", false);
  if (safeCustomerPhone) {
    line(`Tél : ${safeCustomerPhone}`, "left", false);
  }

  if (isDelivery) {
    if (safeAddress) line(safeAddress, "left", false);
    if (safeCity) line(safeCity, "left", false);
    if (safePostalCode) line(safePostalCode, "left", false);
  } else {
    line("Retrait au restaurant", "left", false);
    line("Rue Haute 38 · 4600 Visé", "left", false);
  }

  // 11. Notes de livraison
  if (safeNotes) {
    line("", "left", false);
    line("Notes de livraison:", "left", false);
    const wrappedNotes = wrapThermalText(safeNotes, 48);
    for (const noteLine of wrappedNotes) {
      line(noteLine, "left", false);
    }
  }

  // 12. Horodatages (passée / acceptée)
  const acceptedDateObj = new Date(dateObj.getTime() + 60000); // +1 min
  const acceptedTimeStr = acceptedDateObj.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels", hour: "2-digit", minute: "2-digit" });
  line("", "left", false);
  hr();
  line(formatThermalRow("Commande passée à", `${timeStr} ${dayStr} ${monthStr}`, 48), "left", false);
  line(formatThermalRow("Commande acceptée à", `${acceptedTimeStr} ${dayStr} ${monthStr}`, 48), "left", false);
  hr();

  // 13. QR Code & Footer (Grand QR Code largeur 8, centré)
  const trackToken = order.deliveryToken || order.id;
  const cleanOrigin = origin.replace(/\/$/, "");
  const qrUrl = `${cleanOrigin}/track/${encodeURIComponent(trackToken)}`;
  xml += `  <symbol type="qrcode_model_2" level="level_m" width="8">${escapeXml(qrUrl)}</symbol>\n`;
  line(isDelivery ? "Scannez pour livrer" : "Scannez pour suivre la commande", "center", false);
  line("Ceci n'est pas une facture", "center", false);
  hr();
  xml += `  <feed line="3" />\n`;
  xml += `  <cut type="feed" />\n`;
  xml += `</epos-print>`;

  return xml;
}

/**
 * Rendu textuel brut exact du ticket thermique (48 colonnes)
 * Utile pour prévisualiser dans la console / le terminal ou en test bash
 */
export function renderThermalTextReceipt(order: Order, origin = "https://pokenbowl.be"): string {
  const isDelivery = order.customer.fulfillment === "delivery";
  const dateObj = new Date(order.createdAt);
  const dayStr = dateObj.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels", day: "numeric" });
  const rawMonth = dateObj.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels", month: "short" }).replace(/\./g, "").trim();
  const monthStr = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
  const timeStr = dateObj.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels", hour: "2-digit", minute: "2-digit" });

  const rawId = order.id.includes("-") ? order.id.split("-").pop() || order.id : order.id;
  const shortOrderRef = rawId.length === 6 ? `${rawId.slice(0, 3)} ${rawId.slice(3)}` : rawId;
  const rawRequestedTime = cleanThermalText(order.customer.requestedTime || "dès que possible");
  const isScheduled = rawRequestedTime.toLowerCase() !== "dès que possible" && rawRequestedTime.length > 0;

  const lines: string[] = [];
  const center = (t: string) => {
    const clean = cleanThermalText(t);
    const pad = Math.max(0, Math.floor((48 - clean.length) / 2));
    lines.push(" ".repeat(pad) + clean);
  };
  const hr = () => lines.push("-".repeat(48));

  center("Takeaway.com");
  center("Poke N Bowl");
  hr();
  if (isDelivery) {
    if (isScheduled) {
      center("LIVRAISON PLANIFIÉE");
      center(`Date : ${dayStr} ${monthStr}, à ${rawRequestedTime}`);
    } else {
      center("LIVRAISON");
      center(`Date : ${dayStr} ${monthStr}, dès que possible`);
      center(`(${timeStr})`);
    }
  } else {
    center("À EMPORTER");
    center(`Date : ${dayStr} ${monthStr}, ${rawRequestedTime}`);
    center(`(${timeStr})`);
  }
  lines.push("");
  center(`# ${shortOrderRef.toUpperCase()}`);
  hr();
  lines.push(formatThermalRow("", "EUR", 48));

  let subTotal = 0;
  for (const item of order.items) {
    const safeItemName = cleanReceiptItemName(item.name);
    const isCustom = /cr[eé][eé]\s+ton\s+bowl|sur[- ]mesure|custom/i.test(item.name);
    const unpacked = unpackToppings(item.toppings || []);

    // Pour les plats composés (hors "Crée ton bowl"), on ne liste pas les ingrédients
    // inclus par défaut dans la recette : on ne garde que les suppléments payants (+),
    // les exclusions/allergies (! Sans) et les choix de boisson/formule.
    const displayToppings = isCustom
      ? unpacked
      : unpacked.filter((sub) => {
          if (sub.isExtra || sub.isAllergy) return true;
          if (/^boisson/i.test(sub.text)) return true;
          return false;
        });

    const supplementsTotal = unpacked.reduce((sum, s) => sum + (s.price ? parseFloat(s.price) : 0), 0);
    const baseUnitPrice = Math.max(0, item.price - supplementsTotal);
    const itemBaseTotalStr = (baseUnitPrice * item.quantity).toFixed(2);
    subTotal += item.price * item.quantity;

    if (displayToppings.length > 0 && isCustom) {
      lines.push(safeItemName);
    }
    const itemHeader = `${item.quantity} x ${safeItemName}`;
    lines.push(formatThermalRow(itemHeader, itemBaseTotalStr, 48));

    for (const sub of displayToppings) {
      if (sub.isExtra && sub.price) {
        lines.push(formatThermalRow(`  + ${sub.text}`, parseFloat(sub.price).toFixed(2), 48));
      } else if (sub.isAllergy) {
        lines.push(`  ! ${sub.text}`);
      } else {
        lines.push(`    ${sub.text}`);
      }
    }
  }

  lines.push("");
  lines.push(formatThermalRow("Sous-total", subTotal.toFixed(2), 48));
  lines.push(formatThermalRow("Total de la commande", subTotal.toFixed(2), 48));

  const deliveryFee = (isDelivery && order.customer.deliveryFee) ? order.customer.deliveryFee : 0;
  if (isDelivery && deliveryFee > 0) {
    lines.push(formatThermalRow("Frais de livraison", deliveryFee.toFixed(2), 48));
  }

  lines.push(formatThermalRow("", "-----", 48));
  lines.push(formatThermalRow("Total dû", order.total.toFixed(2), 48));
  lines.push(formatThermalRow("", "=====", 48));

  lines.push("");
  lines.push("Payé par :");
  const isPaid = order.status === "paid";
  const paymentLabel = isPaid ? "Carte ************" : "À régler sur place";
  lines.push(formatThermalRow(paymentLabel, order.total.toFixed(2), 48));

  hr();
  center("IMPORTANT : POUR LES INFORMATIONS SUR LES");
  center("ALLERGÈNES ALIMENTAIRES");
  center("Appelez le restaurant ou consultez leur menu");
  hr();
  center(isPaid ? "COMMANDE PAYÉE" : "À RÉGLER SUR PLACE");
  hr();

  lines.push("Détails du client:");
  lines.push("");
  lines.push(cleanThermalText(order.customer.name));
  lines.push("");
  if (order.customer.phone) {
    lines.push(`Tél : ${cleanThermalText(order.customer.phone)}`);
  }
  if (isDelivery) {
    if (order.customer.address) lines.push(cleanThermalText(order.customer.address));
    if (order.customer.city) lines.push(cleanThermalText(order.customer.city));
    if (order.customer.postalCode) lines.push(cleanThermalText(order.customer.postalCode));
  } else {
    lines.push("Retrait au restaurant");
    lines.push("Rue Haute 38 · 4600 Visé");
  }

  if (order.customer.notes) {
    lines.push("");
    lines.push("Notes de livraison:");
    const wrappedNotes = wrapThermalText(order.customer.notes, 48);
    for (const noteLine of wrappedNotes) {
      lines.push(noteLine);
    }
  }

  const acceptedDateObj = new Date(dateObj.getTime() + 60000);
  const acceptedTimeStr = acceptedDateObj.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels", hour: "2-digit", minute: "2-digit" });
  lines.push("");
  hr();
  lines.push(formatThermalRow("Commande passée à", `${timeStr} ${dayStr} ${monthStr}`, 48));
  lines.push(formatThermalRow("Commande acceptée à", `${acceptedTimeStr} ${dayStr} ${monthStr}`, 48));
  hr();

  const trackToken = order.deliveryToken || order.id;
  const cleanOrigin = origin.replace(/\/$/, "");
  const qrUrl = `${cleanOrigin}/track/${encodeURIComponent(trackToken)}`;
  center("[ QR CODE TRACKING GPS ]");
  center(qrUrl);
  center(isDelivery ? "Scannez pour livrer" : "Scannez pour suivre la commande");
  center("Ceci n'est pas une facture");
  hr();

  return lines.join("\n");
}

export type PrintPayload =
  | string
  | { xml?: string; base64?: string };

/**
 * Envoi réseau vers l'imprimante avec fetch + secours XMLHttpRequest
 */
async function sendHttpRequest(
  url: string,
  body: string,
  timeoutMs = 4000
): Promise<{ ok: boolean; status: number; text: string }> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
        SOAPAction: '""',
      },
      body,
      signal: AbortSignal.timeout(timeoutMs),
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  } catch (fetchErr: any) {
    if (typeof XMLHttpRequest !== "undefined") {
      try {
        return await new Promise<{ ok: boolean; status: number; text: string }>((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
          xhr.setRequestHeader("SOAPAction", '""');
          xhr.timeout = timeoutMs;
          xhr.onload = () => resolve({ ok: xhr.status >= 200 && xhr.status < 300, status: xhr.status, text: xhr.responseText });
          xhr.onerror = () => reject(new Error("Erreur réseau / Certificat non approuvé"));
          xhr.ontimeout = () => reject(new Error(`Délai d'attente dépassé (${Math.round(timeoutMs / 1000)}s)`));
          xhr.send(body);
        });
      } catch {}
    }
    throw fetchErr;
  }
}

/**
 * Envoie un flux d'impression à l'imprimante Epson :
 * ePOS-Print XML direct (HTTP/HTTPS SOAP sur port 8043 ou 8008)
 */
export async function sendReceiptToPrinter(
  payload: PrintPayload,
  config: PrinterConfig,
): Promise<{ success: boolean; message: string }> {
  let xmlContent = "";
  let base64Data = "";

  if (typeof payload === "string") {
    if (payload.trim().startsWith("<")) {
      xmlContent = payload.trim();
    } else {
      base64Data = payload;
    }
  } else if (payload && typeof payload === "object") {
    xmlContent = payload.xml?.trim() || "";
    base64Data = payload.base64?.trim() || "";
  }

  // Option 1 : Via Print Bridge local si configuré (TCP 9100)
  if (config.bridgeUrl && base64Data) {
    try {
      const bridgeEndpoint = `${config.bridgeUrl.replace(/\/$/, "")}/print`;
      const res = await fetch(bridgeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          printerIp: config.printerIp,
          printerPort: config.printerPort,
          dataBase64: base64Data,
        }),
      });

      if (res.ok) {
        return { success: true, message: "Imprimé avec succès via Print Bridge." };
      }
    } catch (err) {
      console.warn("Print Bridge injoignable, essai ePOS-Print direct...", err);
    }
  }

  // Option 2 : ePOS-Print XML direct (Epson TM-m30II)
  if (!xmlContent) {
    return {
      success: false,
      message: "Données du ticket invalides : flux ePOS XML manquant.",
    };
  }

  const soapEnvelope = buildEposSoapEnvelope(xmlContent);

  const ip = config.printerIp.trim();
  const safePort = (config.printerPort && [8043, 80, 8008, 443].includes(Number(config.printerPort)))
    ? Number(config.printerPort)
    : 8043;

  // Compatibilité avec les variantes ePOS Epson : tenter une autre URL uniquement
  // si la connexion échoue avant toute réponse. Dès qu'un serveur répond ou qu'un
  // délai expire, arrêter : une seconde requête pourrait imprimer un doublon.
  const targets = Array.from(new Set([
    `https://${ip}:${safePort}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `https://${ip}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `https://${ip}:443/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `https://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `http://${ip}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `http://${ip}:80/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
  ]));

  let lastErr = "";
  for (const url of targets) {
    try {
      console.log(`[ePOS] Envoi requête vers ${url}...`);
      const { ok, status, text: resText } = await sendHttpRequest(url, soapEnvelope, 4000);
      console.log(`[ePOS] Réponse reçue de ${url} (status ${status}):`, resText);

      // Toute réponse HTTP signifie qu'un endpoint a été atteint : ne pas envoyer
      // le même ticket à un autre endpoint, même si la réponse est une erreur.
      if (resText.includes('success="true"')) {
        return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
      }

      if (ok && resText.includes("<response")) {
        const codeMatch = resText.match(/code="([^"]*)"/);
        const code = codeMatch ? codeMatch[1] : "";
        if (!code || code === "None" || code === "SUCCESS") {
          return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
        }
        lastErr = `Code imprimante: ${code}`;
      } else {
        lastErr = `Réponse HTTP ${status} sans confirmation ePOS`;
      }
      break;
    } catch (e: any) {
      lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (4s)" : (e?.message ?? String(e));
      console.warn(`[ePOS] Échec de connexion sur ${url}:`, lastErr);
      // Un timeout est ambigu : l'imprimante peut avoir reçu le ticket.
      // Ne jamais réessayer après un timeout pour éviter les doublons.
      if (e?.name === "TimeoutError" || lastErr.includes("Délai d'attente")) break;
      // Erreur de connexion/certificat avant réponse : essayer l'endpoint suivant.
    }
  }

  const isCertOrNetwork =
    lastErr.includes("Failed to fetch") ||
    lastErr.includes("NetworkError") ||
    lastErr.includes("Certificat non approuvé") ||
    lastErr.includes("Délai d'attente");

  const detail = isCertOrNetwork
    ? `Certificat local non autorisé dans Chrome ou imprimante ${config.printerIp} injoignable.`
    : lastErr;

  return {
    success: false,
    message: detail,
  };
}

/**
 * Test rapide d'accessibilité d'une IP pour scanner le réseau
 */
export async function probePrinterIp(ip: string, port = 8043, timeoutMs = 1200): Promise<boolean> {
  const url = `https://${ip}:${port}/cgi-bin/epos/service.cgi`;
  try {
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      signal: AbortSignal.timeout(timeoutMs),
    });
    return true;
  } catch (err: any) {
    // Si ce n'est pas un timeout (ex: erreur SSL ou refus de certificat), la machine EXISTE sur le port 8043 !
    return err?.name !== "TimeoutError";
  }
}

/**
 * Détection automatique de l'imprimante sur les sous-réseaux locaux usuels
 */
export async function scanForPrinterIp(onProgress?: (testedIp: string) => void): Promise<string | null> {
  // Liste des IPs prioritaires
  const candidates = [
    "192.168.0.8",
    "192.168.0.5",
    "192.168.0.2", "192.168.0.3", "192.168.0.4", "192.168.0.6", "192.168.0.10", "192.168.0.50", "192.168.0.100",
    "192.168.1.5", "192.168.1.2", "192.168.1.10", "192.168.1.50", "192.168.1.100",
  ];

  for (const ip of candidates) {
    onProgress?.(ip);
    const reachable = await probePrinterIp(ip, 8043, 1000);
    if (reachable) {
      return ip;
    }
  }

  return null;
}
