/**
 * Client d'impression pour Epson TM-m30III
 * Gère deux méthodes sans abonnement :
 * 1. ePOS-Print XML direct (HTTP/SOAP interne de l'Epson sur le port 80 ou 8008)
 * 2. Local Print Bridge (sur localhost ou IP passerelle port 9100/3001)
 */

export interface PrinterConfig {
  printerIp: string;
  printerPort: number;
  bridgeUrl?: string; // Ex: http://192.168.1.50:3001 ou http://localhost:3001
  autoPrintKitchen: boolean;
  autoPrintDelivery: boolean;
  soundEnabled: boolean;
}

export const DEFAULT_PRINTER_CONFIG: PrinterConfig = {
  printerIp: "192.168.1.100",
  printerPort: 9100,
  bridgeUrl: "http://localhost:3001",
  autoPrintKitchen: true,
  autoPrintDelivery: true,
  soundEnabled: true,
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
 * Envoie un flux de données binaires à l'imprimante :
 * Tente d'abord le Print Bridge si configuré, sinon ePOS-Print direct.
 */
export async function sendReceiptToPrinter(
  base64Data: string,
  config: PrinterConfig,
): Promise<{ success: boolean; message: string }> {
  // Option 1 : Via Print Bridge local (ultra-fiable en TCP 9100)
  if (config.bridgeUrl) {
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
      console.warn("Print Bridge injoignable, essai ePOS-Print...", err);
    }
  }

  // Option 2 : ePOS-Print direct (port 80/8008 de l'imprimante)
  try {
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <command>${base64Data}</command>
    </epos-print>
  </s:Body>
</s:Envelope>`;

    const eposUrl = `http://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`;
    const res = await fetch(eposUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
        SOAPAction: '""',
      },
      body: xml,
    });

    if (res.ok) {
      return { success: true, message: "Imprimé avec succès via Epson ePOS." };
    } else {
      throw new Error(`Erreur ePOS HTTP ${res.status}`);
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      message: `Échec d'impression vers ${config.printerIp} : ${msg}. Vérifiez l'adresse IP ou lancez le Print Bridge.`,
    };
  }
}

