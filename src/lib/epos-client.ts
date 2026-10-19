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
  printMode?: "epos" | "browser"; // "epos" (Réseau direct) ou "browser" (Boîte d'impression navigateur / USB)
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
    if (raw) return { ...DEFAULT_PRINTER_CONFIG, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_PRINTER_CONFIG;
}

export function savePrinterConfig(config: PrinterConfig): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("pnb_printer_config", JSON.stringify(config));
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
  <text align="center" em="true">TEST IMPRIMANTE REUSSI&#10;</text>
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

  let xml = `<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">\n`;

  // En-tête restaurant
  xml += `  <text align="center" em="true" dw="true" dh="true">POKE N BOWL VISE&#10;</text>\n`;
  xml += `  <text align="center">Rue Haute 38, 4600 Vise&#10;</text>\n`;
  xml += `  <text align="center">Tel: 04 222 00 00&#10;&#10;</text>\n`;

  // Bannière Type
  xml += `  <text align="center" reverse="true" em="true" dw="true" dh="true"> ${isDelivery ? "*** LIVRAISON ***" : "*** A EMPORTER ***"} &#10;</text>\n`;
  xml += `  <text align="center" reverse="true"> HEURE : ${escapeXml(order.customer.requestedTime || "DES QUE POSSIBLE")} &#10;</text>\n`;
  xml += `  <text>&#10;</text>\n`;

  // Détails commande & client
  xml += `  <text align="left" em="true" dw="true" dh="true">CMD : ${escapeXml(order.id)}&#10;</text>\n`;
  xml += `  <text align="left">Date : ${escapeXml(dateStr)} a ${escapeXml(timeStr)}&#10;</text>\n`;
  xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
  xml += `  <text align="left" em="true">CLIENT :&#10;</text>\n`;
  xml += `  <text align="left">Nom  : ${escapeXml(order.customer.name)}&#10;</text>\n`;
  xml += `  <text align="left">Tel  : ${escapeXml(order.customer.phone)}&#10;</text>\n`;

  if (isDelivery) {
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="left" em="true">ADRESSE LIVRAISON :&#10;</text>\n`;
    xml += `  <text align="left">${escapeXml(order.customer.address || "Non precisee")}&#10;</text>\n`;
    const cityLine = `${order.customer.postalCode || ""} ${order.customer.city || ""}`.trim();
    if (cityLine) {
      xml += `  <text align="left">${escapeXml(cityLine)}&#10;</text>\n`;
    }
  }

  if (order.customer.notes) {
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="left" reverse="true" em="true"> ! REMARQUE / ALLERGIES ! &#10;</text>\n`;
    xml += `  <text align="left">${escapeXml(order.customer.notes)}&#10;</text>\n`;
  }

  // Articles
  xml += `  <text align="left">==========================================&#10;</text>\n`;
  xml += `  <text align="left" em="true">ARTICLES COMMANDES :&#10;&#10;</text>\n`;

  for (const item of order.items) {
    const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
    const header = `${item.quantity}x ${item.name}`;
    const spaces = Math.max(1, 42 - header.length - itemTotal.length);
    const line = header + " ".repeat(spaces) + itemTotal;

    xml += `  <text align="left" em="true">${escapeXml(line)}&#10;</text>\n`;

    if (item.toppings && item.toppings.length > 0) {
      for (const top of item.toppings) {
        if (top.toLowerCase().startsWith("sans :") || top.toLowerCase().includes("allerg")) {
          xml += `  <text align="left" reverse="true" em="true">  ! ${escapeXml(top)} &#10;</text>\n`;
        } else {
          xml += `  <text align="left">  + ${escapeXml(top)}&#10;</text>\n`;
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
  xml += `  <text align="center" reverse="true" em="true"> ${escapeXml(payLabel)} &#10;</text>\n`;
  xml += `  <text>&#10;</text>\n`;

  // QR Code GPS livreur
  if (isDelivery && (order.deliveryToken || order.id)) {
    const trackToken = order.deliveryToken || order.id;
    const trackUrl = `${origin.replace(/\/$/, "")}/track/${trackToken}`;
    xml += `  <text align="left">------------------------------------------&#10;</text>\n`;
    xml += `  <text align="center" em="true">SCANNEZ POUR GPS LIVREUR&#10;</text>\n`;
    xml += `  <text align="center">Waze &amp; Google Maps en 1-clic&#10;&#10;</text>\n`;
    xml += `  <symbol type="qrcode_model_2" level="level_m" width="5">${escapeXml(trackUrl)}</symbol>\n`;
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
 * Envoie un flux d'impression à l'imprimante Epson :
 * Priorité 1 : Print Bridge si configuré
 * Priorité 2 : ePOS-Print XML direct (HTTP/HTTPS SOAP sur port 8043 ou 8008)
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
  const port = config.printerPort || 8043;

  // Ordre de priorité des URL candidates selon le port configuré
  const candidateUrls: string[] = [
    `https://${ip}:${port}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `https://${ip}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `https://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `http://${ip}:${port}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `http://${ip}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
    `http://${ip}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
  ];

  const targets = Array.from(new Set(candidateUrls));

  let lastErr = "";
  for (const url of targets) {
    try {
      console.log(`[ePOS] Envoi requête vers ${url}...`);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          "If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
          SOAPAction: '""',
        },
        body: soapEnvelope,
        signal: AbortSignal.timeout(8000), // 8 secondes pour laisser le temps d'impression
      });

      const resText = await res.text();
      console.log(`[ePOS] Réponse reçue de ${url} (status ${res.status}):`, resText);

      // Succès confirmé par le firmware Epson
      if (resText.includes('success="true"')) {
        return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
      }

      // Réponse SOAP ou XML contenant un statut
      if (res.ok && resText.includes("<response")) {
        const codeMatch = resText.match(/code="([^"]*)"/);
        const code = codeMatch ? codeMatch[1] : "";
        if (!code || code === "None" || code === "SUCCESS") {
          return { success: true, message: `Ticket imprimé avec succès sur ${ip} !` };
        }
        lastErr = `Code imprimante: ${code}`;
      } else if (!res.ok) {
        lastErr = `HTTP ${res.status} ${res.statusText || ""}`.trim();
      }
    } catch (e: any) {
      lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (8s)" : (e?.message ?? String(e));
      console.warn(`[ePOS] Échec sur ${url}:`, lastErr);
    }
  }

  const isCertOrNetwork = lastErr.includes("Failed to fetch") || lastErr.includes("NetworkError");
  const detail = isCertOrNetwork
    ? `Certificat non approuvé dans Chrome ou IP (${config.printerIp}) injoignable.`
    : lastErr;

  return {
    success: false,
    message: `Impossible d'envoyer à l'Epson ${config.printerIp} : ${detail}`,
  };
}
