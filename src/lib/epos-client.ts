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
  printerIp: "192.168.0.5",
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

/**
 * Générateur XML ePOS natif pour le ticket de test (Bouton vert)
 */
export function buildEposXmlTest(printerIp: string): string {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("fr-BE");
  const dateStr = now.toLocaleDateString("fr-BE");

  return `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
  <text align="center" em="true" dw="true" dh="true">POKE N BOWL VISE&#10;</text>
  <text align="center">Rue Haute 38, 4600 Vise&#10;</text>
  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>
  <text align="center" em="true" dw="true" dh="true"> *** TEST IMPRESSION *** &#10;</text>
  <text align="center">==========================================&#10;</text>
  <text align="center">Date : ${escapeXml(dateStr)} a ${escapeXml(timeStr)}&#10;</text>
  <text align="center">IP Imprimante : ${escapeXml(printerIp)}&#10;</text>
  <text align="center" em="true">Epson TM-m30II Connectee !&#10;</text>
  <text align="center">==========================================&#10;</text>
  <text align="center">Pret pour la prise de commandes.&#10;&#10;</text>
  <text align="center" em="true">SCANNEZ POUR TESTER&#10;</text>
  <symbol type="qrcode_model_2" level="level_m" width="5">https://pokenbowl.be</symbol>
  <feed line="4" />
  <cut type="feed" />
</epos-print>`;
}

/**
 * Générateur XML ePOS natif pour le ticket de commande officiel (Cuisine & Livreur)
 */
export function buildEposXmlOrder(order: Order, origin = "https://pokenbowl.be"): string {
  const isDelivery = order.customer.fulfillment === "delivery";
  const dateObj = new Date(order.createdAt);
  const dateStr = dateObj.toLocaleDateString("fr-BE");
  const timeStr = dateObj.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" });

  const safeCustomerName = cleanThermalText(order.customer.name);
  const safeCustomerPhone = cleanThermalText(order.customer.phone);
  const safeAddress = cleanThermalText(order.customer.address || "Non precisee");
  const safeCity = cleanThermalText(`${order.customer.postalCode || ""} ${order.customer.city || ""}`.trim());
  const safeNotes = cleanThermalText(order.customer.notes || "");
  const safeRequestedTime = cleanThermalText(order.customer.requestedTime || "DES QUE POSSIBLE");

  let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;

  // En-tête restaurant
  xml += `  <text align="center" em="true" dw="true" dh="true">POKE N BOWL VISE&#10;</text>\n`;
  xml += `  <text align="center">Rue Haute 38, 4600 Vise&#10;</text>\n`;
  xml += `  <text align="center">Tel: 0491 28 14 56&#10;&#10;</text>\n`;

  // Bannière Type
  xml += `  <text align="center" em="true" dw="true" dh="true"> ${isDelivery ? "*** LIVRAISON ***" : "*** A EMPORTER ***"} &#10;</text>\n`;
  xml += `  <text align="center"> HEURE : ${escapeXml(safeRequestedTime)} &#10;</text>\n`;
  xml += `  <text>&#10;</text>\n`;

  // Détails commande & client
  xml += `  <text align="left" em="true" dw="true" dh="true">CMD : ${escapeXml(cleanThermalText(order.id))}&#10;</text>\n`;
  xml += `  <text align="left">Date : ${escapeXml(dateStr)} a ${escapeXml(timeStr)}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="left" em="true">CLIENT :&#10;</text>\n`;
  xml += `  <text align="left">Nom  : ${escapeXml(safeCustomerName)}&#10;</text>\n`;
  xml += `  <text align="left">Tel  : ${escapeXml(safeCustomerPhone)}&#10;</text>\n`;

  if (isDelivery) {
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="left" em="true">ADRESSE LIVRAISON :&#10;</text>\n`;
    xml += `  <text align="left">${escapeXml(safeAddress)}&#10;</text>\n`;
    if (safeCity) {
      xml += `  <text align="left">${escapeXml(safeCity)}&#10;</text>\n`;
    }
  }

  if (safeNotes) {
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="left" em="true"> ! REMARQUE / ALLERGIES ! &#10;</text>\n`;
    xml += `  <text align="left">${escapeXml(safeNotes)}&#10;</text>\n`;
  }

  // Articles
  xml += `  <text align="left">==========================================&#10;</text>\n`;
  xml += `  <text align="left" em="true">ARTICLES COMMANDES :&#10;&#10;</text>\n`;

  for (const item of order.items) {
    const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
    const safeItemName = cleanThermalText(item.name);
    const header = `${item.quantity}x ${safeItemName}`;
    const spaces = Math.max(1, 42 - header.length - itemTotal.length);
    const line = header + " ".repeat(spaces) + itemTotal;

    xml += `  <text align="left" em="true">${escapeXml(line)}&#10;</text>\n`;

    if (item.toppings && item.toppings.length > 0) {
      for (const top of item.toppings) {
        const safeTop = cleanThermalText(top);
        if (safeTop.toLowerCase().startsWith("sans :") || safeTop.toLowerCase().includes("allerg")) {
          xml += `  <text align="left" em="true">  ! ${escapeXml(safeTop)} &#10;</text>\n`;
        } else {
          xml += `  <text align="left">  + ${escapeXml(safeTop)}&#10;</text>\n`;
        }
      }
    }
    xml += `  <text>&#10;</text>\n`;
  }

  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;

  if (isDelivery && order.customer.deliveryFee && order.customer.deliveryFee > 0) {
    const feeStr = order.customer.deliveryFee.toFixed(2) + " EUR";
    const feeLine = "Frais de livraison";
    const spaces = Math.max(1, 42 - feeLine.length - feeStr.length);
    const line = feeLine + " ".repeat(spaces) + feeStr;
    xml += `  <text align="left">${escapeXml(line)}&#10;</text>\n`;
  }

  // Total
  xml += `  <text align="left" em="true" dw="true" dh="true">TOTAL : ${escapeXml(order.total.toFixed(2))} EUR&#10;</text>\n`;
  xml += `  <text>&#10;</text>\n`;

  // Statut Paiement
  const isPaid = order.status === "paid";
  const payLabel = isPaid
    ? "[ PAIEMENT VALIDE EN LIGNE ]"
    : `[ A REGLER SUR PLACE : ${order.total.toFixed(2)} EUR ]`;
  xml += `  <text align="center" em="true"> ${escapeXml(payLabel)} &#10;</text>\n`;
  xml += `  <text>&#10;</text>\n`;

  // QR code en bas de TOUS les tickets :
  // Livraison -> suivi / GPS ; retrait -> site du restaurant.
  {
    const trackToken = order.deliveryToken || order.id;
    const cleanOrigin = origin.replace(/\/$/, "");
    const qrUrl = isDelivery ? `${cleanOrigin}/track/${trackToken}` : cleanOrigin;
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="center" em="true">${isDelivery ? "SCANNEZ POUR GPS LIVREUR" : "SCANNEZ POUR LE SITE WEB"}&#10;</text>\n`;
    xml += `  <text align="center">${isDelivery ? "Waze &amp; Google Maps en 1-clic" : "Menu et informations du restaurant"}&#10;&#10;</text>\n`;
    xml += `  <symbol type="qrcode_model_2" level="level_m" width="5">${escapeXml(qrUrl)}</symbol>\n`;
    xml += `  <text>&#10;</text>\n`;
  }

  // Pied de page
  xml += `  <text align="center">==========================================&#10;</text>\n`;
  xml += `  <text align="center">Merci pour votre commande !&#10;</text>\n`;
  xml += `  <text align="center">www.pokenbowl.be&#10;</text>\n`;
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

  // Une seule tentative d'impression vers l'endpoint ePOS configuré.
  // Ne pas essayer d'autres ports après un délai ou une réponse ambiguë :
  // l'imprimante peut avoir imprimé le ticket même si la réponse s'est perdue,
  // et les tentatives alternatives provoqueraient des doublons.
  const targets = [
    `https://${ip}:${safePort}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
  ];

  let lastErr = "";
  for (const url of targets) {
    try {
      console.log(`[ePOS] Envoi requête vers ${url}...`);
      const { ok, status, text: resText } = await sendHttpRequest(url, soapEnvelope, 4000);
      console.log(`[ePOS] Réponse reçue de ${url} (status ${status}):`, resText);

      // Succès confirmé par le firmware Epson
      if (resText.includes('success="true"')) {
        return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
      }

      // Réponse SOAP ou XML contenant un statut
      if (ok && resText.includes("<response")) {
        const codeMatch = resText.match(/code="([^"]*)"/);
        const code = codeMatch ? codeMatch[1] : "";
        if (!code || code === "None" || code === "SUCCESS") {
          return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
        }
        lastErr = `Code imprimante: ${code}`;
      } else if (!ok) {
        lastErr = `HTTP ${status}`.trim();
      }
    } catch (e: any) {
      lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (4s)" : (e?.message ?? String(e));
      console.warn(`[ePOS] Échec sur ${url}:`, lastErr);
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
