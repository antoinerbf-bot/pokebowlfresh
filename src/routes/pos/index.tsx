import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Printer,
  Volume2,
  VolumeX,
  RefreshCw,
  Clock,
  CheckCircle,
  Truck,
  CookingPot,
  AlertTriangle,
  Settings,
  Search,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";
import {
  getPosOrders,
  setPosOrderStatus,
  triggerReprint,
  getOrderReceipts,
  ackPosPrint,
  createTestDeliveryOrder,
} from "../../fn/pos";
import {
  type PrinterConfig,
  loadPrinterConfig,
  savePrinterConfig,
  sendReceiptToPrinter,
  buildEposXmlTest,
  buildEposXmlOrder,
} from "../../lib/epos-client";
import type { Order } from "../../lib/orders";
import { EscPosBuilder, buildKitchenReceipt, buildDeliveryReceipt, buildOrderReceipt } from "../../lib/escpos";
import QRCode from "qrcode";

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export const Route = createFileRoute("/pos/")({
  component: PosApplicationPage,
});

export function PosApplicationPage() {
  const [pin, setPin] = useState<string>(() => {
    return (typeof window !== "undefined" && localStorage.getItem("pnb_pos_pin")) || "1234";
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [activePrintOrder, setActivePrintOrder] = useState<Order | null>(null);
  const [printQrDataUrl, setPrintQrDataUrl] = useState<string>("");
  const [modalQrDataUrl, setModalQrDataUrl] = useState<string>("");

  useEffect(() => {
    const token = selectedOrder?.deliveryToken || selectedOrder?.id;
    if (token) {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be";
      const trackUrl = `${origin}/track/${token}`;
      QRCode.toDataURL(trackUrl, {
        errorCorrectionLevel: "H",
        margin: 4,
        width: 320,
        color: { dark: "#000000", light: "#ffffff" },
      })
        .then(setModalQrDataUrl)
        .catch(() => {});
    } else {
      setModalQrDataUrl("");
    }
  }, [selectedOrder]);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"kanban" | "history" | "settings">("kanban");

  // Configuration Imprimante & Audio
  const [config, setConfig] = useState<PrinterConfig>(loadPrinterConfig);
  const [printingOrderId, setPrintingOrderId] = useState<string | null>(null);
  const [testingPrinter, setTestingPrinter] = useState(false);
  const [printLog, setPrintLog] = useState<{ time: string; msg: string; type: "ok" | "err" }[]>([]);
  const [printBannerError, setPrintBannerError] = useState<string | null>(null);

  // Helper local storage pour se souvenir des commandes déjà imprimées
  const getPrintedOrderIds = (): Set<string> => {
    if (typeof window === "undefined") return new Set();
    try {
      const raw = localStorage.getItem("pnb_printed_orders");
      if (raw) return new Set(JSON.parse(raw));
    } catch {}
    return new Set();
  };

  const markOrderAsPrintedLocally = (id: string) => {
    if (typeof window === "undefined") return;
    try {
      const ids = getPrintedOrderIds();
      ids.add(id);
      const arr = Array.from(ids).slice(-200);
      localStorage.setItem("pnb_printed_orders", JSON.stringify(arr));
    } catch {}
  };

  // Garder trace des IDs pour les nouvelles alertes
  const knownOrderStatuses = useRef<Map<string, Order["status"]>>(new Map());
  const initialOrdersLoaded = useRef(false);
  const autoPrintInFlight = useRef<Set<string>>(new Set());
  const [creatingTestOrder, setCreatingTestOrder] = useState(false);

  const handleCreateTestOrder = async () => {
    setCreatingTestOrder(true);
    try {
      const response = await fetch("/api/create-test-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (!data.success || !data.order) {
        alert("Erreur : " + (data.error ?? "Échec création"));
        return;
      }
      playAlertSound();
      const created = data.order as Order;
      // Affichage immédiat dans la modale et la liste
      setOrders((prev) => [created, ...prev.filter((o) => o.id !== created.id)]);
      setSelectedOrder(created);
      // Synchronisation en arrière-plan sans bloquer
      loadOrders().catch(() => {});
    } catch (e: any) {
      alert("Erreur lors de la création de la commande test : " + (e?.message ?? String(e)));
    } finally {
      setCreatingTestOrder(false);
    }
  };

  // Bip d'alerte Web Audio API (aucun fichier MP3 externe requis)
  const playAlertSound = () => {
    if (!config.soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880.0, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.45);
    } catch (e) {
      console.warn("Audio non disponible", e);
    }
  };

  // Chargement des commandes (Double stratégie : API REST directe puis RPC)
  const loadOrders = async () => {
    try {
      let newOrders: Order[] | null = null;

      // 1. Essayer l'API REST directe /api/pos-orders
      try {
        const resRest = await fetch("/api/pos-orders", {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (resRest.ok) {
          const json = await resRest.json();
          if (json.success && Array.isArray(json.orders)) {
            newOrders = json.orders;
          }
        }
      } catch (err) {
        console.warn("[POS] Erreur REST /api/pos-orders, fallback RPC:", err);
      }

      // 2. Fallback createServerFn
      if (!newOrders) {
        const res = await getPosOrders({ data: { pin } });
        newOrders = res.orders;
      }

      // Détection automatique de toute commande non encore imprimée
      const printableStatuses: Order["status"][] = ["paid", "awaiting_pickup", "awaiting_delivery"];
      const printedIds = getPrintedOrderIds();
      const nowMs = Date.now();
      const fourHoursMs = 4 * 60 * 60 * 1000;

      const newlyPrintable = newOrders.filter((o) => {
        if (!printableStatuses.includes(o.status)) return false;
        if (o.printStatus === "printed") return false;
        if (printedIds.has(o.id)) return false;
        if (autoPrintInFlight.current.has(o.id)) return false;

        // Éviter de réimprimer les commandes de services précédents (> 4h)
        const createdAtMs = new Date(o.createdAt).getTime();
        const isRecent = !isNaN(createdAtMs) && (nowMs - createdAtMs) < fourHoursMs;
        if (!isRecent) {
          markOrderAsPrintedLocally(o.id);
          return false;
        }

        return true;
      });

      if (newlyPrintable.length > 0) playAlertSound();

      setOrders(newOrders);

      // Impression automatique sur l'imprimante
      for (const order of newlyPrintable) {
        if (autoPrintInFlight.current.has(order.id)) continue;
        autoPrintInFlight.current.add(order.id);
        if (config.printMode === "browser") {
          void printThermalTicket(order).finally(() => {
            autoPrintInFlight.current.delete(order.id);
            markOrderAsPrintedLocally(order.id);
          });
        } else {
          void handleExecutePrint(order, true).finally(() => {
            autoPrintInFlight.current.delete(order.id);
          });
        }
      }
    } catch (e) {
      console.error("[POS] Erreur globale loadOrders:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUnlocked) {
      loadOrders();
      const timer = setInterval(loadOrders, 4000);
      return () => clearInterval(timer);
    }
  }, [isUnlocked, pin]);

  // Action d'impression directe ePOS réseau (la route exclusive et définitive)
  const handleExecutePrint = async (order: Order, silent = false) => {
    setPrintingOrderId(order.id);
    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be";
      
      // 1. Génération XML ePOS native (support QR matériel, mise en page thermique propre)
      const xml = buildEposXmlOrder(order, origin);

      // Génération ESC/POS binaire en secours pour le Print Bridge si configuré
      let receiptB64 = "";
      try {
        const bytes = buildOrderReceipt(order, origin);
        receiptB64 = bytesToBase64(bytes);
      } catch (genErr) {
        console.error("[POS] Erreur génération ESC/POS:", genErr);
      }

      // 2. Envoi direct sur la route ePOS validée
      const res = await sendReceiptToPrinter({ xml, base64: receiptB64 }, config);
      const now = new Date().toLocaleTimeString();

      if (res.success) {
        markOrderAsPrintedLocally(order.id);
        setPrintBannerError(null);
        setPrintLog((prev) => [
          { time: now, msg: `Commande ${order.id} : ticket imprimé (${config.printerIp}).`, type: "ok" },
          ...prev.slice(0, 30),
        ]);
        if (!silent) alert(`✅ Ticket de la commande ${order.id} imprimé avec succès sur ${config.printerIp} !`);

        // Synchronisation du statut d'impression vers l'API REST
        try {
          await fetch("/api/pos-orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: order.id,
              printStatus: "printed",
            }),
          });
        } catch (ackErr) {
          console.warn("[POS] Échec synchronisation ack print:", ackErr);
        }
      } else {
        setPrintLog((prev) => [
          { time: now, msg: `Échec commande ${order.id} : ${res.message}`, type: "err" },
          ...prev.slice(0, 30),
        ]);
        if (!silent) {
          alert(`⚠️ Échec de l'envoi à l'Epson (${config.printerIp}) :\n\n${res.message}`);
        } else {
          setPrintBannerError(
            `⚠️ L'imprimante réseau (${config.printerIp}) n'a pas répondu pour la commande ${order.id}. Cliquez sur la commande pour réimprimer.`
          );
        }
      }
    } catch (err: any) {
      console.error("[POS] Erreur handleExecutePrint:", err);
    } finally {
      setPrintingOrderId(null);
      loadOrders();
    }
  };

  const handleManualReprint = async (orderId: string) => {
    const targetOrder = orders.find((o) => o.id === orderId) || (selectedOrder?.id === orderId ? selectedOrder : null);
    if (!targetOrder) {
      alert("Commande introuvable.");
      return;
    }
    // Lancer directement l'impression du ticket thermique éprouvée
    await printThermalTicket(targetOrder);
  };

  const handleUpdateStatus = async (orderId: string, status: Order["status"]) => {
    try {
      // 1. Essayer API REST
      try {
        const res = await fetch("/api/pos-orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId, status }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success) {
            setOrders((prev) =>
              prev.map((o) => (o.id === orderId ? { ...o, status } : o)),
            );
            if (selectedOrder && selectedOrder.id === orderId) {
              setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
            }
            loadOrders().catch(() => {});
            return;
          }
        }
      } catch {}

      // 2. Fallback serverFn
      await setPosOrderStatus({ data: { pin, orderId, status } });
      await loadOrders();
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
      }
    } catch (e) {
      alert("Erreur de mise à jour du statut.");
    }
  };

  // Impression thermique directe (Format 80mm - In-page + popup autonome)
  const printThermalTicket = async (order: Order | null, isTest = false) => {
    if (!order && !isTest) return;

    let qrData = "";
    const token = order?.deliveryToken || order?.id;
    if (token) {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be";
      const trackUrl = `${origin}/track/${token}`;
      try {
        qrData = await QRCode.toDataURL(trackUrl, {
          errorCorrectionLevel: "H",
          margin: 4,
          width: 280,
          color: { dark: "#000000", light: "#ffffff" },
        });
      } catch (err) {
        console.warn("QR Code local gen error", err);
      }
    }

    // 1. Mettre à jour l'état in-page pour l'impression instantanée
    setActivePrintOrder(order);
    setPrintQrDataUrl(qrData);

    const html = isTest
      ? `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Test Impression - Poke N Bowl</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 10px; font-size: 14px; text-align: center; color: #000; background: #fff; }
    h1 { font-size: 19px; margin: 0 0 4px 0; font-weight: 900; }
    hr { border: none; border-top: 1px dashed #000; margin: 8px 0; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <h1>POKE N BOWL VISE</h1>
  <p>TEST IMPRIMANTE REUSSI</p>
  <hr>
  <p>Date : ${new Date().toLocaleTimeString("fr-BE")}</p>
  <p>Epson TM-m30II Connectee !</p>
  <hr>
  <p>Pret pour les commandes.</p>
  <br><br>.
</body>
</html>`
      : `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ticket Commande ${order?.id}</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 8px; font-size: 13px; color: #000; background: #fff; line-height: 1.3; }
    .center { text-align: center; }
    h1 { font-size: 20px; margin: 0 0 2px 0; font-weight: 900; letter-spacing: 1px; }
    h2 { font-size: 16px; margin: 4px 0; font-weight: 900; }
    .bold { font-weight: bold; }
    hr { border: none; border-top: 1px dashed #000; margin: 6px 0; }
    .item { display: flex; justify-content: space-between; font-weight: bold; margin: 4px 0; }
    .topping { font-size: 11px; padding-left: 10px; color: #222; }
    .qr { margin-top: 10px; text-align: center; }
    .qr img { width: 140px; height: 140px; display: block; margin: 4px auto; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <div class="center">
    <h1>POKE N BOWL</h1>
    <p>Rue Haute 38, 4600 Vise</p>
    <p>Tel: 0491 28 14 56</p>
    <hr>
    <h2>${order?.customer.fulfillment === "delivery" ? "*** TICKET LIVRAISON ***" : "*** TICKET RETRAIT ***"}</h2>
    <p class="bold">COMMANDE : ${order?.id}</p>
    <p>Horaire : ${order?.customer.requestedTime}</p>
  </div>
  <hr>
  <p><span class="bold">Client :</span> ${order?.customer.name}</p>
  <p><span class="bold">Tel    :</span> ${order?.customer.phone}</p>
  ${
    order?.customer.fulfillment === "delivery"
      ? `<p><span class="bold">Adresse:</span> ${order.customer.address || ""}</p>
         <p>${order.customer.postalCode || ""} ${order.customer.city || ""}</p>`
      : ""
  }
  ${order?.customer.notes ? `<p class="bold">Note   : ${order.customer.notes}</p>` : ""}
  <hr>
  <p class="bold">ARTICLES :</p>
  ${
    order?.items
      .map(
        (it) => `
    <div class="item">
      <span>${it.quantity}x ${it.name}</span>
      <span>${(it.price * it.quantity).toFixed(2)} E</span>
    </div>
    ${(it.toppings || []).map((t) => `<div class="topping">+ ${t}</div>`).join("")}
  `,
      )
      .join("")
  }
  <hr>
  ${
    order?.customer.deliveryFee
      ? `<div class="item"><span>Frais de livraison</span><span>${order.customer.deliveryFee.toFixed(2)} EUR</span></div>`
      : ""
  }
  <div class="item" style="font-size: 16px; margin-top: 4px;">
    <span>TOTAL :</span>
    <span>${order?.total.toFixed(2)} EUR</span>
  </div>
  <div class="center bold" style="margin-top: 6px;">
    ${order?.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"}
  </div>
  ${
    qrData
      ? `
    <hr>
    <div class="qr">
      <p style="font-size: 11px; font-weight: bold; margin: 0 0 2px 0;">SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)</p>
      <img src="${qrData}" alt="QR Code GPS">
      <p style="font-size: 10px; color: #333; margin: 2px 0 0 0;">Itinéraire 1-clic livreur</p>
    </div>
  `
      : ""
  }
  <div class="center" style="margin-top: 10px;">
    <p>Merci pour votre commande !</p>
  </div>
  <br><br>.
</body>
</html>`;

    // 2. Déclencher window.print()
    try {
      const printWindow = window.open("", "_blank", "width=420,height=700");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 300);
        return;
      }
    } catch {}

    // 3. Fallback : Impression directe dans la page
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Test d'impression direct
  const handleTestPrint = async () => {
    if (testingPrinter) return;
    setTestingPrinter(true);
    setPrintLog((prev) => [{ time: new Date().toLocaleTimeString(), msg: "Test lancé : connexion à l’imprimante…", type: "err" }, ...prev.slice(0, 30)]);
    try {
      const xml = buildEposXmlTest(config.printerIp);

      let b64 = "";
      try {
        const b = new EscPosBuilder();
        b.align("center").bold(true).doubleSize(true).line("POKE N BOWL VISE");
        b.doubleSize(false).bold(false).line("TEST IMPRIMANTE REUSSI");
        b.divider("=");
        b.line(`Date: ${new Date().toLocaleTimeString("fr-BE")}`);
        b.line(`IP: ${config.printerIp}`);
        b.line("Epson TM-m30II Connectee !");
        b.divider("=");
        b.line("Pret pour les commandes.");
        b.feed(4).cut(true);
        b64 = b.toBase64();
      } catch {}

      const res = await sendReceiptToPrinter({ xml, base64: b64 }, config);
      const now = new Date().toLocaleTimeString();

      if (res.success) {
        setPrintLog((prev) => [
          { time: now, msg: `Test ePOS direct REUSSI sur ${config.printerIp} !`, type: "ok" },
          ...prev.slice(0, 30),
        ]);
        alert("Succes ! Le ticket de test sort sur l'imprimante.");
      } else {
        setPrintLog((prev) => [
          { time: now, msg: `Échec du test : ${res.message}`, type: "err" },
          ...prev.slice(0, 30),
        ]);
        alert(`Échec de l'impression directe : ${res.message}\n\nVérifie l'adresse IP et la connexion réseau de l'imprimante.`);
      }
    } catch (e: any) {
      console.error("Erreur test imprimante", e);
      const message = e?.message ?? "Erreur inconnue";
      setPrintLog((prev) => [
        { time: new Date().toLocaleTimeString(), msg: `Erreur du test : ${message}`, type: "err" },
        ...prev.slice(0, 30),
      ]);
      alert(`Le test d'impression a rencontré une erreur : ${message}`);
    } finally {
      setTestingPrinter(false);
    }
  };

  // Test d'impression via la boîte d'impression système (USB / Navigateur)
  const handleTestSystemPrint = async () => {
    const dummyOrder: Order = {
      id: "TEST-TICKET",
      deliveryToken: "TEST-TICKET",
      status: "delivering",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      customer: {
        name: "Test Ticket Caisse (GPS)",
        phone: "0499 00 00 00",
        fulfillment: "delivery",
        address: "Rue Haute 38",
        postalCode: "4600",
        city: "Visé",
        deliveryFee: 2.00,
        notes: "Test GPS Waze & Google Maps 1-Clic",
        requestedTime: "Dès que possible",
        paymentMethod: "on_site",
      },
      items: [
        { name: "Poké Saumon Classic (Medium)", quantity: 1, price: 12.50, toppings: ["Avocat", "Edamame", "Sauce Ponzu"] },
        { name: "Boisson Aloe Vera", quantity: 1, price: 3.50 },
      ],
      total: 16.00,
      pinValidated: true,
    };
    await printThermalTicket(dummyOrder);
  };

  // Écran PIN
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#2C1D16] flex items-center justify-center p-4 select-none">
        <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#2C1D16]">POKE N BOWL</h1>
            <p className="text-sm font-bold text-[#7a847e] mt-1">Accès POS Caisse</p>
          </div>

          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full transition-all ${
                  pinInput.length > i ? "bg-[#ff705f] scale-110" : "bg-black/10"
                }`}
              />
            ))}
          </div>

          {pinError && <p className="text-xs font-bold text-red-500">Code PIN incorrect</p>}

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => {
                  if (pinInput.length < 4) {
                    const next = pinInput + num;
                    setPinInput(next);
                    if (next.length === 4) {
                      if (next === pin) {
                        setIsUnlocked(true);
                        setPinError(false);
                      } else {
                        setPinError(true);
                        setTimeout(() => setPinInput(""), 600);
                      }
                    }
                  }
                }}
                className="h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] hover:bg-black/5 active:scale-95 transition"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setPinInput("")}
              className="h-16 rounded-2xl bg-black/5 text-sm font-extrabold text-[#7a847e]"
            >
              Effacer
            </button>
            <button
              onClick={() => {
                if (pinInput.length < 4) {
                  const next = pinInput + "0";
                  setPinInput(next);
                  if (next.length === 4) {
                    if (next === pin) {
                      setIsUnlocked(true);
                      setPinError(false);
                    } else {
                      setPinError(true);
                      setTimeout(() => setPinInput(""), 600);
                    }
                  }
                }
              }}
              className="h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] active:scale-95 transition"
            >
              0
            </button>
            <button
              onClick={() => {
                setIsUnlocked(true); // Bypass dev
              }}
              className="h-16 rounded-2xl bg-[#ff705f]/10 text-xs font-black text-[#ff705f]"
            >
              Entrée
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtrage des commandes par statut
  const newOrdersList = orders.filter(
    (o) => o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery",
  );
  const preparingOrdersList = orders.filter((o) => o.status === "preparing");
  const readyOrdersList = orders.filter((o) => o.status === "ready");
  const deliveringOrdersList = orders.filter((o) => o.status === "delivering");
  const completedOrdersList = orders.filter((o) => o.status === "completed" || o.status === "cancelled");

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: 80mm auto;
            margin: 0mm;
          }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          .pos-screen-ui {
            display: none !important;
          }
          #thermal-print-area {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 72mm !important;
            margin: 0 auto !important;
            padding: 2mm 1mm !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
        }
      `}</style>

      {/* Ticket Thermique Imprimable (visible uniquement lors du print) */}
      <div id="thermal-print-area" className="hidden print:block text-black bg-white">
        {activePrintOrder && (
          <div style={{ width: "72mm", margin: "0 auto", padding: "4mm 0", fontFamily: "'Courier New', Courier, monospace", fontSize: "12px", lineHeight: "1.3" }}>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "18px", fontWeight: "900", margin: "0 0 2px 0" }}>POKE N BOWL</h1>
              <p style={{ margin: "1px 0" }}>Rue Haute 38, 4600 Vise</p>
              <p style={{ margin: "1px 0" }}>Tel: 0491 28 14 56</p>
              <div style={{ borderTop: "1px dashed #000", margin: "6px 0" }} />
              <h2 style={{ fontSize: "15px", fontWeight: "900", margin: "4px 0" }}>
                {activePrintOrder.customer.fulfillment === "delivery" ? "*** LIVRAISON ***" : "*** RETRAIT ***"}
              </h2>
              <p style={{ fontWeight: "bold" }}>COMMANDE : {activePrintOrder.id}</p>
              <p>Horaire : {activePrintOrder.customer.requestedTime}</p>
            </div>
            <div style={{ borderTop: "1px dashed #000", margin: "6px 0" }} />
            <p><strong>Client :</strong> {activePrintOrder.customer.name}</p>
            <p><strong>Tel    :</strong> {activePrintOrder.customer.phone}</p>
            {activePrintOrder.customer.fulfillment === "delivery" && (
              <>
                <p><strong>Adresse:</strong> {activePrintOrder.customer.address}</p>
                <p>{activePrintOrder.customer.postalCode} {activePrintOrder.customer.city}</p>
              </>
            )}
            {activePrintOrder.customer.notes && (
              <p style={{ fontWeight: "bold" }}>Note   : {activePrintOrder.customer.notes}</p>
            )}
            <div style={{ borderTop: "1px dashed #000", margin: "6px 0" }} />
            <p style={{ fontWeight: "bold" }}>ARTICLES :</p>
            {activePrintOrder.items.map((it, idx) => (
              <div key={idx} style={{ margin: "3px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                  <span>{it.quantity}x {it.name}</span>
                  <span>{(it.price * it.quantity).toFixed(2)} E</span>
                </div>
                {(it.toppings || []).map((top, tidx) => (
                  <div key={tidx} style={{ paddingLeft: "10px", fontSize: "11px", color: "#333" }}>+ {top}</div>
                ))}
              </div>
            ))}
            <div style={{ borderTop: "1px dashed #000", margin: "6px 0" }} />
            {activePrintOrder.customer.deliveryFee ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Frais de livraison</span>
                <span>{activePrintOrder.customer.deliveryFee.toFixed(2)} EUR</span>
              </div>
            ) : null}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", fontWeight: "900", marginTop: "4px" }}>
              <span>TOTAL :</span>
              <span>{activePrintOrder.total.toFixed(2)} EUR</span>
            </div>
            <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "6px" }}>
              {activePrintOrder.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"}
            </div>
            {printQrDataUrl && (
              <>
                <div style={{ borderTop: "1px dashed #000", margin: "6px 0" }} />
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "10px", fontWeight: "bold", margin: "0 0 2px 0" }}>SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)</p>
                  <img src={printQrDataUrl} alt="QR Code GPS" style={{ width: "140px", height: "140px", display: "block", margin: "4px auto" }} />
                  <p style={{ fontSize: "9px", color: "#333", margin: "2px 0 0 0" }}>Itinéraire 1-clic livreur</p>
                </div>
              </>
            )}
            <div style={{ textAlign: "center", marginTop: "8px" }}>
              <p>Merci pour votre commande !</p>
            </div>
            <br /><br />.
          </div>
        )}
      </div>

      <div className="pos-screen-ui flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden">
        {/* ─── Barre Supérieure POS ─────────────────────────────────────────── */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#2C1D16]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-lg font-black tracking-wider text-white">POKENBOWL POS</span>
          </div>

          <nav className="flex rounded-xl bg-black/30 p-1">
            <button
              onClick={() => setActiveTab("kanban")}
              className={`rounded-lg px-4 py-1.5 text-xs font-black transition ${
                activeTab === "kanban" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              Commandes en direct ({newOrdersList.length + preparingOrdersList.length + readyOrdersList.length})
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`rounded-lg px-4 py-1.5 text-xs font-black transition ${
                activeTab === "history" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              Historique
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`rounded-lg px-4 py-1.5 text-xs font-black transition ${
                activeTab === "settings" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              Imprimante & Paramètres
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Toggle Son */}
          <button
            onClick={() => {
              const updated = { ...config, soundEnabled: !config.soundEnabled };
              setConfig(updated);
              savePrinterConfig(updated);
            }}
            className={`rounded-xl p-2.5 transition ${
              config.soundEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#6c7d76]"
            }`}
            title="Activer/Désactiver son"
          >
            {config.soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>

          {/* Rafraîchissement manuel */}
          <button
            onClick={loadOrders}
            className="rounded-xl bg-white/10 p-2.5 text-white hover:bg-white/20 active:scale-95 transition"
            title="Rafraîchir"
          >
            <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
          </button>

          {/* Statut Imprimante */}
          <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-1.5 text-xs font-bold border border-white/5">
            <Printer className="h-4 w-4 text-[#ff705f]" />
            <span className="text-[#98aba3]">{config.printerIp}</span>
          </div>
        </div>
      </header>

      {/* ─── Bannière Alerte Impression Réseau ───────────────────────────── */}
      {printBannerError && (
        <div className="flex items-center justify-between bg-amber-500/20 border-b border-amber-500/40 px-5 py-2.5 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
            <span>{printBannerError}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("settings")}
              className="underline font-bold text-amber-300 hover:text-white"
            >
              Paramètres & Déblocage Chrome
            </button>
            <button
              onClick={() => setPrintBannerError(null)}
              className="rounded-lg bg-amber-500/30 px-2 py-1 text-[10px] font-bold text-amber-100 hover:bg-amber-500/50"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* ─── Contenu Principal ────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {activeTab === "kanban" && (
          <div className="grid flex-1 grid-cols-4 gap-3 p-3 overflow-hidden">
            {/* Colonne 1 : NOUVELLES */}
            <KanbanColumn
              title="Nouvelles"
              badgeCount={newOrdersList.length}
              color="bg-[#ff705f]"
              orders={newOrdersList}
              onSelect={setSelectedOrder}
              onReprint={handleManualReprint}
              onNextStatus={(id) => handleUpdateStatus(id, "preparing")}
              nextLabel="Préparer"
              nextIcon={<CookingPot className="w-4 h-4" />}
            />

            {/* Colonne 2 : EN PRÉPARATION */}
            <KanbanColumn
              title="En Cuisine"
              badgeCount={preparingOrdersList.length}
              color="bg-[#f59e0b]"
              orders={preparingOrdersList}
              onSelect={setSelectedOrder}
              onReprint={handleManualReprint}
              onNextStatus={(id) => handleUpdateStatus(id, "ready")}
              nextLabel="Prête"
              nextIcon={<CheckCircle className="w-4 h-4" />}
            />

            {/* Colonne 3 : PRÊTES */}
            <KanbanColumn
              title="Prêtes / Comptoir"
              badgeCount={readyOrdersList.length}
              color="bg-[#10b981]"
              orders={readyOrdersList}
              onSelect={setSelectedOrder}
              onReprint={handleManualReprint}
              onNextStatus={(id) => {
                const target = orders.find((o) => o.id === id);
                if (target?.customer.fulfillment === "delivery") {
                  handleUpdateStatus(id, "delivering");
                } else {
                  handleUpdateStatus(id, "completed");
                }
              }}
              nextLabel="Départ Livr. / Remis"
              nextIcon={<Truck className="w-4 h-4" />}
            />

            {/* Colonne 4 : EN LIVRAISON */}
            <KanbanColumn
              title="En Livraison"
              badgeCount={deliveringOrdersList.length}
              color="bg-[#3b82f6]"
              orders={deliveringOrdersList}
              onSelect={setSelectedOrder}
              onReprint={handleManualReprint}
              onNextStatus={(id) => handleUpdateStatus(id, "completed")}
              nextLabel="Livrée"
              nextIcon={<CheckCircle className="w-4 h-4" />}
            />
          </div>
        )}

        {activeTab === "history" && (
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
              <Search className="h-5 w-5 text-[#7a847e]" />
              <input
                type="text"
                placeholder="Rechercher par n° de commande, client, téléphone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent flex-1 text-white placeholder-[#7a847e] outline-none font-bold"
              />
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-black/30 text-xs uppercase text-[#8ea39b] font-black">
                  <tr>
                    <th className="p-4">N° Commande</th>
                    <th className="p-4">Date / Heure</th>
                    <th className="p-4">Client</th>
                    <th className="p-4">Mode</th>
                    <th className="p-4">Total</th>
                    <th className="p-4">Statut</th>
                    <th className="p-4">Impression</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-semibold">
                  {orders
                    .filter(
                      (o) =>
                        o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        o.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        o.customer.phone.includes(searchQuery),
                    )
                    .map((o) => (
                      <tr key={o.id} className="hover:bg-white/5 transition">
                        <td className="p-4 font-mono font-bold text-white">{o.id}</td>
                        <td className="p-4 text-[#8ea39b]">
                          {new Date(o.createdAt).toLocaleDateString("fr-BE")}{" "}
                          {new Date(o.createdAt).toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" })}
                        </td>
                        <td className="p-4">{o.customer.name}</td>
                        <td className="p-4">{o.customer.fulfillment === "delivery" ? "Livraison" : "Retrait"}</td>
                        <td className="p-4 font-bold text-white">{o.total.toFixed(2)} €</td>
                        <td className="p-4">
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">
                            {o.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-black ${
                              o.printStatus === "printed"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : o.printStatus === "failed"
                                ? "bg-red-500/20 text-red-300"
                                : "bg-amber-500/20 text-amber-300"
                            }`}
                          >
                            {o.printStatus ?? "pending"}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedOrder(o)}
                            className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black hover:bg-white/20"
                          >
                            Détail
                          </button>
                          <button
                            onClick={() => handleManualReprint(o.id)}
                            className="rounded-xl bg-[#ff705f] px-3 py-1.5 text-xs font-black text-white hover:bg-[#ff5a47]"
                          >
                            Réimprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex-1 min-h-0 w-full overflow-y-auto px-4 py-6 sm:px-8 sm:py-8 pb-48">
            <div className="max-w-2xl mx-auto space-y-6">
              {/* En-tête Sticky toujours visible avec boutons d'actions directs */}
              <div className="sticky top-0 z-30 flex items-center justify-between bg-[#0d1a16]/95 backdrop-blur-md py-3 px-4 -mx-4 border-b border-white/10 rounded-2xl shadow-xl">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white">Configuration Matériel & POS</h2>
                  <p className="text-xs text-[#8ea39b] mt-0.5">Imprimantes de caisse & réseau</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTestSystemPrint}
                    className="rounded-xl bg-white/10 hover:bg-white/20 py-2 px-3 text-white font-bold text-xs transition border border-white/10 flex items-center gap-1.5"
                    title="Imprimer un ticket de test 80mm"
                  >
                    <Printer className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden sm:inline">Test Ticket</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      savePrinterConfig(config);
                      alert("✅ Configuration enregistrée avec succès !");
                    }}
                    className="rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] py-2 px-4 text-white font-black text-xs transition shadow-lg shadow-[#ff705f]/25 active:scale-95 cursor-pointer flex items-center gap-1.5"
                  >
                    <span>💾 Enregistrer</span>
                  </button>
                </div>
              </div>

              {/* Choix du mode d'impression */}
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4">
                <h3 className="text-base font-black text-[#ff705f]">Mode d'Impression Principal</h3>
                <p className="text-xs text-[#8ea39b]">
                  Choisissez comment le POS déclenche vos tickets de caisse :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const upd = { ...config, printMode: "browser" as const };
                      setConfig(upd);
                      savePrinterConfig(upd);
                    }}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                      config.printMode === "browser"
                        ? "bg-[#ff705f]/20 border-[#ff705f] text-white"
                        : "bg-black/30 border-white/10 text-[#8ea39b] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black text-sm">
                      <Printer className="w-4 h-4 text-emerald-400" />
                      <span>Ticket Direct / Boîte Système</span>
                    </div>
                    <p className="text-[11px] mt-1.5 text-[#a5b4ae] leading-snug">
                      Format thermique 80mm avec QR Code. Utilise le pilote de l'imprimante (USB ou réseau Mac). Recommandé & infaillible.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const upd = { ...config, printMode: "epos" as const };
                      setConfig(upd);
                      savePrinterConfig(upd);
                    }}
                    className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                      config.printMode !== "browser"
                        ? "bg-[#ff705f]/20 border-[#ff705f] text-white"
                        : "bg-black/30 border-white/10 text-[#8ea39b] hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-black text-sm">
                      <Printer className="w-4 h-4 text-[#ff705f]" />
                      <span>Réseau direct ePOS XML</span>
                    </div>
                    <p className="text-[11px] mt-1.5 text-[#a5b4ae] leading-snug">
                      Envoi silencieux par requête HTTP/HTTPS directe à l'adresse IP de l'Epson.
                    </p>
                  </button>
                </div>
              </div>

              {/* Paramètres Réseau ePOS */}
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-[#ff705f]">Adresse Réseau de l'Imprimante</h3>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold">
                    Epson TM-m30II
                  </span>
                </div>

                {/* Étape cruciale : Autoriser Chrome */}
                <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-amber-300">
                      🔒 Étape Chrome : Autoriser le certificat local
                    </span>
                    <a
                      href={`https://${config.printerIp}:${config.printerPort || 8043}/cgi-bin/epos/service.cgi`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-3 py-1.5 rounded-lg text-xs font-black transition shrink-0"
                    >
                      <span>Ouvrir l'autorisation</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-[11px] text-amber-200/90 leading-relaxed">
                    Cliquez sur <strong>"Ouvrir l'autorisation"</strong>, puis dans l'avertissement Chrome cliquez sur <strong>"Paramètres avancés"</strong> puis <strong>"Continuer vers le site (non sécurisé)"</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs font-extrabold uppercase text-[#8ea39b]">Adresse IP de l'Epson</label>
                    <input
                      type="text"
                      value={config.printerIp}
                      onChange={(e) => setConfig({ ...config, printerIp: e.target.value })}
                      className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold"
                      placeholder="192.168.0.5"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase text-[#8ea39b]">Port ePOS</label>
                    <input
                      type="number"
                      value={config.printerPort}
                      onChange={(e) => setConfig({ ...config, printerPort: Number(e.target.value) })}
                      className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold"
                      placeholder="8043"
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-black/30 p-3 text-[11px] text-[#8ea39b] leading-relaxed border border-white/5">
                  <strong className="text-white">💡 Trouver l'adresse IP réelle :</strong> Éteignez l'imprimante, maintenez <strong>FEED</strong> enfoncé et rallumez-la : elle imprime une bandelette avec son IP.
                </div>
              </div>

              {/* Toggles des tickets */}
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3">
                <h3 className="text-base font-black text-white">Tickets à générer</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition">
                    <input
                      type="checkbox"
                      checked={config.autoPrintKitchen}
                      onChange={(e) => {
                        const updated = { ...config, autoPrintKitchen: e.target.checked };
                        setConfig(updated);
                        savePrinterConfig(updated);
                      }}
                      className="h-4 w-4 rounded accent-[#ff705f]"
                    />
                    <span className="text-sm font-bold text-white">Ticket Cuisine (Bon de préparation)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition">
                    <input
                      type="checkbox"
                      checked={config.autoPrintDelivery}
                      onChange={(e) => {
                        const updated = { ...config, autoPrintDelivery: e.target.checked };
                        setConfig(updated);
                        savePrinterConfig(updated);
                      }}
                      className="h-4 w-4 rounded accent-[#ff705f]"
                    />
                    <span className="text-sm font-bold text-white">Ticket Livreur / Client (Avec QR Code GPS Waze)</span>
                  </label>
                </div>
              </div>

              {/* Tests d'impression */}
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4">
                <h3 className="text-base font-black text-white">Tests d'Impression</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleTestSystemPrint}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 py-3.5 px-4 text-white font-black text-sm border border-white/10 transition cursor-pointer"
                  >
                    <Printer className="w-4 h-4 text-emerald-400" />
                    <span>Tester Ticket Démo (80mm)</span>
                  </button>

                  <button
                    onClick={handleTestPrint}
                    disabled={testingPrinter}
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 py-3.5 px-4 text-white font-black text-sm shadow-lg shadow-emerald-900/30 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{testingPrinter ? "Test en cours…" : "Tester Réseau ePOS"}</span>
                  </button>
                </div>
              </div>

              {/* Logs d'impression */}
              <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3">
                <h3 className="text-base font-black text-white">Journal d'impression</h3>
                <div className="h-36 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl">
                  {printLog.length === 0 ? (
                    <p className="text-[#6c7d76]">Aucune impression récente.</p>
                  ) : (
                    printLog.map((log, idx) => (
                      <div key={idx} className={log.type === "ok" ? "text-emerald-400" : "text-rose-400"}>
                        [{log.time}] {log.msg}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Barre d'action permanente en bas pour ne jamais être coupée */}
              <div className="rounded-2xl bg-[#142822] border border-[#ff705f]/40 p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl">
                <div className="text-xs text-[#8ea39b]">
                  <strong className="text-white block font-bold">Sauvegarde des réglages</strong>
                  Cliquez sur Enregistrer pour mémoriser ces réglages sur ce navigateur.
                </div>
                <button
                  onClick={() => {
                    savePrinterConfig(config);
                    alert("✅ Configuration enregistrée avec succès !");
                  }}
                  className="rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] py-3 px-6 text-white font-black text-sm transition shadow-lg shadow-[#ff705f]/25 active:scale-95 cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <span>💾 Enregistrer les Réglages</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── Modal Détail Commande ────────────────────────────────────────── */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl rounded-3xl bg-[#142822] border border-white/15 p-6 shadow-2xl space-y-5 text-white max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xl font-black">{selectedOrder.id}</span>
                <p className="text-xs text-[#8ea39b] mt-0.5">
                  Créée à {new Date(selectedOrder.createdAt).toLocaleTimeString("fr-BE")}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-full bg-white/10 w-9 h-9 flex items-center justify-center text-sm font-black hover:bg-white/20"
              >
                ✕
              </button>
            </div>

            {/* Infos Client */}
            <div className="rounded-2xl bg-black/30 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-base font-black">{selectedOrder.customer.name}</span>
                <a
                  href={`tel:${selectedOrder.customer.phone}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 px-3 py-1.5 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff705f]" />
                  {selectedOrder.customer.phone}
                </a>
              </div>
              {selectedOrder.customer.fulfillment === "delivery" ? (
                <div className="text-xs text-[#8ea39b] pt-1 border-t border-white/5">
                  <p className="font-bold text-white">{selectedOrder.customer.address}</p>
                  <p>{selectedOrder.customer.postalCode} {selectedOrder.customer.city}</p>
                </div>
              ) : (
                <p className="text-xs text-[#EADCC9] font-bold">Retrait sur place</p>
              )}
              {selectedOrder.customer.notes && (
                <div className="text-xs bg-[#ff705f]/15 border border-[#ff705f]/30 p-2.5 rounded-xl text-white">
                  <strong>Note :</strong> {selectedOrder.customer.notes}
                </div>
              )}
            </div>

            {/* Articles */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-[#8ea39b]">Articles commandés</span>
              <ul className="divide-y divide-white/5 bg-black/20 rounded-2xl p-3">
                {selectedOrder.items.map((it, idx) => (
                  <li key={idx} className="py-2 first:pt-0 last:pb-0">
                    <div className="flex justify-between font-bold text-sm">
                      <span>{it.quantity}× {it.name}</span>
                      <span>{(it.price * it.quantity).toFixed(2)} €</span>
                    </div>
                    {it.toppings && it.toppings.length > 0 && (
                      <div className="pl-4 text-xs text-[#8ea39b] space-y-0.5 mt-1 border-l border-[#ff705f]/50">
                        {it.toppings.map((top, tidx) => (
                          <p key={tidx}>{top}</p>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-2 px-2 font-black text-base">
                <span>Total</span>
                <span>{selectedOrder.total.toFixed(2)} €</span>
              </div>
            </div>

            {/* Section GPS & Livreur pour les commandes en livraison */}
            {selectedOrder.customer.fulfillment === "delivery" && (
              <div className="rounded-2xl bg-[#1b322a] border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-emerald-400">
                    GPS & Navigation Livreur
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                    1-Clic
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-2.5 text-xs font-black shadow transition active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Google Maps
                  </a>
                  <a
                    href={`https://waze.com/ul?q=${encodeURIComponent(
                      `${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-2.5 text-xs font-black shadow transition active:scale-95"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Waze
                  </a>
                </div>

                {(selectedOrder.deliveryToken || selectedOrder.id) && (
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 bg-black/40 p-4 rounded-2xl">
                    <div className="bg-white p-2.5 rounded-xl shadow-lg shrink-0">
                      {modalQrDataUrl ? (
                        <img
                          src={modalQrDataUrl}
                          alt="QR Code GPS Livreur"
                          className="w-36 h-36 block"
                          style={{ imageRendering: "pixelated" }}
                        />
                      ) : (
                        <div className="w-36 h-36 flex items-center justify-center text-black text-xs font-bold">
                          Génération...
                        </div>
                      )}
                    </div>
                    <div className="text-xs space-y-2 flex-1">
                      <p className="font-black text-white text-sm">QR Code GPS Haute Précision</p>
                      <p className="text-[#8ea39b] text-xs leading-relaxed">
                        Scannez ce QR Code avec votre téléphone pour ouvrir instantanément l'itinéraire GPS <strong>Waze</strong> ou <strong>Google Maps</strong> vers :
                      </p>
                      <p className="text-white font-bold bg-white/10 p-2 rounded-xl border border-white/10">
                        📍 {selectedOrder.customer.address}, {selectedOrder.customer.postalCode} {selectedOrder.customer.city}
                      </p>
                      <div className="pt-1 flex gap-2">
                        <a
                          href={`/track/${selectedOrder.deliveryToken || selectedOrder.id}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#ff705f] hover:bg-[#ff5a47] text-white px-3 py-2 rounded-xl font-black text-xs transition"
                        >
                          <span>📱 Tester la page livreur en direct</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Actions Modal - Toujours visibles en bas du modal */}
            <div className="sticky bottom-0 z-10 bg-[#142822]/95 backdrop-blur-md pt-3 -mx-6 px-6 -mb-6 pb-5 border-t border-white/10 space-y-2 rounded-b-3xl shadow-2xl">
              <button
                onClick={() => printThermalTicket(selectedOrder)}
                className="w-full rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] text-white py-3.5 px-4 text-sm font-black transition flex items-center justify-center gap-2 shadow-lg shadow-[#ff705f]/20 active:scale-95 cursor-pointer"
                title="Lancer l'impression directe du ticket thermique 80mm avec QR Code"
              >
                <Printer className="w-5 h-5" />
                <span>🖨️ Imprimer Ticket Caisse (Direct & QR)</span>
              </button>

              <button
                onClick={() => handleExecutePrint(selectedOrder, false)}
                disabled={printingOrderId === selectedOrder.id}
                className="w-full rounded-xl bg-white/10 hover:bg-white/20 text-[#8ea39b] hover:text-white py-2.5 px-3 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
                title={`Envoyer le flux ePOS directement à l'adresse IP réseau (${config.printerIp})`}
              >
                <Printer className="w-4 h-4 text-[#ff705f]" />
                <span>{printingOrderId === selectedOrder.id ? "Envoi ePOS en cours…" : `Option Réseau direct ePOS (${config.printerIp})`}</span>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

interface ColumnProps {
  title: string;
  badgeCount: number;
  color: string;
  orders: Order[];
  onSelect: (o: Order) => void;
  onReprint: (id: string) => void;
  onNextStatus: (id: string) => void;
  nextLabel: string;
  nextIcon: React.ReactNode;
}

function KanbanColumn({
  title,
  badgeCount,
  color,
  orders,
  onSelect,
  onReprint,
  onNextStatus,
  nextLabel,
  nextIcon,
}: ColumnProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#142822] border border-white/5 overflow-hidden">
      {/* Header Colonne */}
      <div className="flex items-center justify-between p-3.5 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`} />
          <h2 className="text-sm font-black tracking-wide text-white">{title}</h2>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-black text-white">
          {badgeCount}
        </span>
      </div>

      {/* Cartes Commandes */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
        {orders.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-xs font-bold text-[#62776f]">
            Aucune commande
          </div>
        ) : (
          orders.map((o) => (
            <div
              key={o.id}
              onClick={() => onSelect(o)}
              className="rounded-2xl bg-black/40 border border-white/10 p-3.5 shadow hover:border-white/30 transition cursor-pointer space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-black text-white">{o.id}</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase text-[#8ea39b]">
                  {o.customer.requestedTime}
                </span>
              </div>

              <div>
                <p className="text-base font-black text-white">{o.customer.name}</p>
                <p className="text-xs font-semibold text-[#8ea39b]">
                  {o.items.reduce((acc, it) => acc + it.quantity, 0)} articles · {o.total.toFixed(2)} €
                </p>
              </div>

              {o.customer.notes && (
                <p className="text-xs bg-[#ff705f]/15 p-2 rounded-xl text-[#ff8e80] line-clamp-1 font-bold">
                  ! {o.customer.notes}
                </p>
              )}

              {/* Barre d'action rapide sur carte */}
              <div
                className="pt-1 flex items-center gap-2 border-t border-white/5"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => onReprint(o.id)}
                  className="rounded-xl bg-white/10 p-2 text-[#8ea39b] hover:text-white hover:bg-white/20 transition"
                  title="Réimprimer"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNextStatus(o.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff705f] py-2 text-xs font-black text-white hover:bg-[#ff5a47] active:scale-95 transition"
                >
                  {nextIcon}
                  <span>{nextLabel}</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

