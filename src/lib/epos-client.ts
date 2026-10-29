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
  printMode?: "epos" | "browser"; // "epos" (Réseau direct silencieux) ou "browser" (Boîte d'impression navigateur / USB)
}

export const DEFAULT_PRINTER_CONFIG: PrinterConfig = {
  printerIp: "192.168.0.8",
  printerPort: 8043,
  bridgeUrl: "",
  autoPrintKitchen: true,
  autoPrintDelivery: true,
  soundEnabled: true,
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
 * Nettoyage thermique ASCII sans accents pour éviter tout blocage ou bug de code page Epson
 */
export function cleanThermalText(str: string = ""): string {
  if (!str) return "";
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // é -> e, à -> a, etc.
    .replace(/€/g, "EUR")
    .replace(/[’‘`]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[^\x20-\x7E\n\r]/g, ""); // garde uniquement l'ASCII imprimable
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

export function formatThermalRow(left: string, right: string = "", width = 42): string {
  const cLeft = cleanThermalText(left);
  const cRight = cleanThermalText(right);
  if (!cRight) return cLeft.slice(0, width);
  const avail = width - cRight.length - 1;
  const tLeft = cLeft.length > avail ? cLeft.slice(0, avail) : cLeft;
  const spaces = Math.max(1, width - tLeft.length - cRight.length);
  return tLeft + " ".repeat(spaces) + cRight;
}

export function unpackToppings(toppings: string[] = []): Array<{ text: string; price?: string; isAllergy?: boolean; isExtra?: boolean }> {
  const result: Array<{ text: string; price?: string; isAllergy?: boolean; isExtra?: boolean }> = [];
  for (const raw of toppings) {
    if (!raw) continue;
    const catMatch = raw.match(/^(?:Base|Taille|Proteine|Mix-ins?|Sauces?|Toppings?)\s*:\s*(.+)$/i);
    const content = catMatch ? catMatch[1] : raw;
    const parts = content.split(",").map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const isAllergy = /^(?:sans\s*:|sans\s+|allerg)/i.test(part);
      const priceMatch = part.match(/\(\+([\d.,]+)\s*€?\)/);
      const priceStr = priceMatch ? parseFloat(priceMatch[1].replace(",", ".")).toFixed(2) : undefined;
      const cleanName = part.replace(/\(\+[\d.,]+\s*€?\)/g, "").replace(/\(x\d+\)/g, "").trim();
      const isExtra = Boolean(priceStr) || cleanName.startsWith("+");
      const displayText = cleanName.replace(/^\+\s*/, "");
      result.push({ text: displayText, price: priceStr, isAllergy, isExtra });
    }
  }
  return result;
}

/**
 * Générateur XML ePOS natif pour le ticket de test (Bouton vert)
 */
export function buildEposXmlTest(printerIp: string): string {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels" });
  const dateStr = now.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels" });

  let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;
  xml += `  <text align="center" em="true" dw="true" dh="true">POKE N BOWL&#10;</text>\n`;
  xml += `  <text align="center">Poke N Bowl Vise&#10;</text>\n`;
  xml += `  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>\n`;
  xml += `  <text align="center" em="true" dw="true" dh="true">*** TEST IMPRESSION ***&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("Date :", `${dateStr} a ${timeStr}`, 42))}&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("IP Imprimante :", printerIp, 42))}&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("Modele :", "Epson TM-m30II", 42))}&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("Connexion :", "ePOS-Print WiFi Direct", 42))}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="center" em="true" dw="true" dh="true">TEST REUSSI&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <symbol type="qrcode_model_2" level="level_m" width="5">https://pokenbowl.be</symbol>\n`;
  xml += `  <text align="center">Pret pour la prise de commandes.&#10;</text>\n`;
  xml += `  <text align="center">www.pokenbowl.be&#10;</text>\n`;
  xml += `  <feed line="4" />\n`;
  xml += `  <cut type="feed" />\n`;
  xml += `</epos-print>`;
  return xml;
}

/**
 * Générateur XML ePOS natif pour le ticket de commande officiel (Style Takeaway.com)
 */
export function buildEposXmlOrder(order: Order, origin = "https://pokenbowl.be"): string {
  const isDelivery = order.customer.fulfillment === "delivery";
  const dateObj = new Date(order.createdAt);
  const dateStr = dateObj.toLocaleDateString("fr-BE", { timeZone: "Europe/Brussels", day: "numeric", month: "short" });
  const timeStr = dateObj.toLocaleTimeString("fr-BE", { timeZone: "Europe/Brussels", hour: "2-digit", minute: "2-digit" });

  const safeCustomerName = cleanThermalText(order.customer.name);
  const safeCustomerPhone = cleanThermalText(order.customer.phone);
  const safeAddress = cleanThermalText(order.customer.address || "Non precisee");
  const safeCity = cleanThermalText(`${order.customer.postalCode || ""} ${order.customer.city || ""}`.trim());
  const safeNotes = cleanThermalText(order.customer.notes || "");
  const safeRequestedTime = cleanThermalText(order.customer.requestedTime || "des que possible");

  // Réf de commande courte style Takeaway (ex: # J83 BY8 ou # G8PG)
  const shortOrderRef = order.id.includes("-") ? order.id.split("-").pop() || order.id : order.id;

  let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;

  // 1. En-tête Poke N Bowl
  xml += `  <text align="center" em="true" dw="true" dh="true">POKE N BOWL&#10;</text>\n`;
  xml += `  <text align="center">Poke N Bowl Vise&#10;</text>\n`;
  xml += `  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>\n`;

  // 2. Type & Date (LIVRAISON / A EMPORTER)
  xml += `  <text align="center" em="true" dw="true" dh="true">${isDelivery ? "LIVRAISON" : "A EMPORTER"}&#10;</text>\n`;
  xml += `  <text align="center">Date : ${escapeXml(dateStr)}, ${escapeXml(safeRequestedTime)}&#10;</text>\n`;
  xml += `  <text align="center">(${escapeXml(timeStr)})&#10;&#10;</text>\n`;

  // 3. Numéro de commande Takeaway (# XXXX)
  xml += `  <text align="center" em="true" dw="true" dh="true"># ${escapeXml(shortOrderRef.toUpperCase())}&#10;</text>\n`;
  xml += `  <text align="center">Ref: ${escapeXml(cleanThermalText(order.id))}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="right">EUR&#10;</text>\n`;

  // 4. Liste des articles avec composition et suppléments indentés
  for (const item of order.items) {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    const safeItemName = cleanThermalText(item.name);
    const header = `${item.quantity} x ${safeItemName}`;
    const line = formatThermalRow(header, itemTotal, 42);

    xml += `  <text align="left" em="true">${escapeXml(line)}&#10;</text>\n`;

    const unpacked = unpackToppings(item.toppings || []);
    for (const sub of unpacked) {
      const prefix = sub.isAllergy ? "  ! " : (sub.isExtra ? "  + " : "    ");
      const subLine = formatThermalRow(prefix + sub.text, sub.price || "", 42);
      xml += `  <text align="left">${escapeXml(subLine)}&#10;</text>\n`;
    }
  }

  // 5. Totaux & Frais
  xml += `  <text align="left">&#10;</text>\n`;
  const subTotal = order.items.reduce((acc, it) => acc + it.price * it.quantity, 0);
  xml += `  <text align="left">${escapeXml(formatThermalRow("Sous-total", subTotal.toFixed(2), 42))}&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("Total de la commande", subTotal.toFixed(2), 42))}&#10;</text>\n`;
  if (isDelivery && order.customer.deliveryFee && order.customer.deliveryFee > 0) {
    xml += `  <text align="left">${escapeXml(formatThermalRow("Frais de livraison", order.customer.deliveryFee.toFixed(2), 42))}&#10;</text>\n`;
  }
  xml += `  <text align="left">&#10;</text>\n`;
  xml += `  <text align="left" em="true">${escapeXml(formatThermalRow("Total du", order.total.toFixed(2), 42))}&#10;</text>\n`;
  xml += `  <text align="left">==========================================&#10;</text>\n`;

  // 6. Moyen de Paiement
  const isPaid = order.status === "paid";
  xml += `  <text align="left">Paye par :&#10;</text>\n`;
  const paymentLabel = isPaid ? "En ligne (Mollie / Bancontact)" : "A regler sur place";
  xml += `  <text align="left">${escapeXml(formatThermalRow(paymentLabel, order.total.toFixed(2), 42))}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;

  // 7. Mention Allergènes
  xml += `  <text align="center">IMPORTANT : POUR LES INFORMATIONS SUR LES&#10;</text>\n`;
  xml += `  <text align="center">ALLERGENES ALIMENTAIRES&#10;</text>\n`;
  xml += `  <text align="center">Appelez le restaurant ou consultez le menu&#10;&#10;</text>\n`;

  // 8. Statut Commande Payée / À Régler
  xml += `  <text align="center" em="true" dw="true" dh="true">${isPaid ? "COMMANDE PAYEE" : "A REGLER SUR PLACE"}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;

  // 9. Détails Client & Adresse
  xml += `  <text align="left" em="true">Details du client:&#10;&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(safeCustomerName)}&#10;</text>\n`;
  if (safeCustomerPhone) {
    xml += `  <text align="left">Tel : ${escapeXml(safeCustomerPhone)}&#10;</text>\n`;
  }
  if (isDelivery) {
    xml += `  <text align="left">${escapeXml(safeAddress)}&#10;</text>\n`;
    if (safeCity) {
      xml += `  <text align="left">${escapeXml(safeCity)}&#10;</text>\n`;
    }
  }

  // 10. Notes / Remarques Client
  if (safeNotes) {
    xml += `  <text align="left">&#10;</text>\n`;
    xml += `  <text align="left" em="true">Notes de livraison:&#10;</text>\n`;
    xml += `  <text align="left">${escapeXml(safeNotes)}&#10;</text>\n`;
  }

  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="left">${escapeXml(formatThermalRow("Commande passee a", `${timeStr} ${dateStr}`, 42))}&#10;</text>\n`;
  xml += `  <text align="left">&#10;</text>\n`;

  // 11. QR Code Suivi / GPS Livreur
  {
    const trackToken = order.deliveryToken || order.id;
    const cleanOrigin = origin.replace(/\/$/, "");
    const qrUrl = `${cleanOrigin}/track/${encodeURIComponent(trackToken)}`;
    xml += `  <symbol type="qrcode_model_2" level="level_m" width="5">${escapeXml(qrUrl)}</symbol>\n`;
    xml += `  <text align="center">${isDelivery ? "Scannez pour livrer (GPS 1-clic)" : "Scannez pour suivre la commande"}&#10;</text>\n`;
    xml += `  <text align="center">www.pokenbowl.be&#10;</text>\n`;
  }

  xml += `  <feed line="4" />\n`;
  xml += `  <cut type="feed" />\n`;
  xml += `</epos-print>`;

  return xml;
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
