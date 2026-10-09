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
} from "lucide-react";
import {
  getPosOrders,
  setPosOrderStatus,
  triggerReprint,
  getOrderReceipts,
  ackPosPrint,
} from "../../fn/pos";
import {
  type PrinterConfig,
  loadPrinterConfig,
  savePrinterConfig,
  sendReceiptToPrinter,
} from "../../lib/epos-client";
import type { Order } from "../../lib/orders";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"kanban" | "history" | "settings">("kanban");

  // Configuration Imprimante & Audio
  const [config, setConfig] = useState<PrinterConfig>(loadPrinterConfig);
  const [printingOrderId, setPrintingOrderId] = useState<string | null>(null);
  const [printLog, setPrintLog] = useState<{ time: string; msg: string; type: "ok" | "err" }[]>([]);

  // Garder trace des IDs pour les nouvelles alertes
  const knownOrderIds = useRef<Set<string>>(new Set());

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

  // Chargement des commandes
  const loadOrders = async () => {
    try {
      const res = await getPosOrders({ data: { pin } });
      const newOrders = res.orders;

      // Détecter nouvelles commandes payées non encore vues
      if (knownOrderIds.current.size > 0) {
        const hasNew = newOrders.some(
          (o) =>
            !knownOrderIds.current.has(o.id) &&
            (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"),
        );
        if (hasNew) {
          playAlertSound();
        }
      }

      newOrders.forEach((o) => knownOrderIds.current.add(o.id));
      setOrders(newOrders);

      // Auto-print des commandes en attente d'impression
      const pendingPrint = newOrders.find((o) => o.printStatus === "pending" && (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"));
      if (pendingPrint && printingOrderId !== pendingPrint.id) {
        handleExecutePrint(pendingPrint);
      }
    } catch (e) {
      console.error(e);
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

  // Action d'impression
  const handleExecutePrint = async (order: Order) => {
    setPrintingOrderId(order.id);
    try {
      const origin = window.location.origin;
      const receipts = await getOrderReceipts({ data: { pin, orderId: order.id, origin } });

      let successCount = 0;
      let errorMsg = "";

      // 1. Impression Ticket Cuisine
      if (config.autoPrintKitchen && receipts.kitchenReceiptB64) {
        const resKitchen = await sendReceiptToPrinter(receipts.kitchenReceiptB64, config);
        if (resKitchen.success) successCount++;
        else errorMsg += `[Cuisine] ${resKitchen.message} `;
      }

      // 2. Impression Ticket Livreur / Client
      if (config.autoPrintDelivery && receipts.deliveryReceiptB64) {
        const resDelivery = await sendReceiptToPrinter(receipts.deliveryReceiptB64, config);
        if (resDelivery.success) successCount++;
        else errorMsg += `[Livreur] ${resDelivery.message} `;
      }

      const totalExpected = (config.autoPrintKitchen ? 1 : 0) + (config.autoPrintDelivery ? 1 : 0);
      const isOk = totalExpected === 0 || successCount > 0;

      await ackPosPrint({
        data: {
          pin,
          orderId: order.id,
          success: isOk,
          error: errorMsg || undefined,
        },
      });

      const now = new Date().toLocaleTimeString();
      if (isOk) {
        setPrintLog((prev) => [{ time: now, msg: `Commande ${order.id} imprimée.`, type: "ok" }, ...prev.slice(0, 30)]);
      } else {
        setPrintLog((prev) => [{ time: now, msg: `Échec ${order.id} : ${errorMsg}`, type: "err" }, ...prev.slice(0, 30)]);
      }
    } catch (err: any) {
      console.error(err);
      await ackPosPrint({
        data: {
          pin,
          orderId: order.id,
          success: false,
          error: err?.message ?? "Erreur inattendue",
        },
      });
    } finally {
      setPrintingOrderId(null);
      loadOrders();
    }
  };

  const handleManualReprint = async (orderId: string) => {
    if (!confirm("Voulez-vous réimprimer le ticket de cette commande ?")) return;
    try {
      await triggerReprint({ data: { pin, orderId } });
      await loadOrders();
    } catch (e) {
      alert("Erreur lors de la demande de réimpression.");
    }
  };

  const handleUpdateStatus = async (orderId: string, status: Order["status"]) => {
    try {
      await setPosOrderStatus({ data: { pin, orderId, status } });
      await loadOrders();
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
      }
    } catch (e) {
      alert("Erreur de mise à jour du statut.");
    }
  };

  // Test d'impression direct
  const handleTestPrint = async () => {
    const dummyB64 = btoa("\x1B@\x1B!\x11\x1B\x61\x01TEST POKENBOWL\n\nIMPRESSION REUSSIE\n\x1B!\x00\x1Bd\x04\x1DV\x01");
    const res = await sendReceiptToPrinter(dummyB64, config);
    alert(res.message);
  };

  // Écran PIN
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#10251f] flex items-center justify-center p-4 select-none">
        <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]">
            <Shield className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#10251f]">POKE N BOWL</h1>
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
                className="h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] hover:bg-black/5 active:scale-95 transition"
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
              className="h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] active:scale-95 transition"
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
    <div className="flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden">
      {/* ─── Barre Supérieure POS ─────────────────────────────────────────── */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#10251f]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d7ff45] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d7ff45]"></span>
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
              config.soundEnabled ? "bg-[#d7ff45]/20 text-[#d7ff45]" : "bg-white/5 text-[#6c7d76]"
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

      {/* ─── Contenu Principal ────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
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
          <div className="flex-1 p-8 max-w-2xl mx-auto overflow-y-auto space-y-6">
            <h2 className="text-2xl font-black">Configuration Matériel & POS</h2>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4">
              <h3 className="text-base font-black text-[#ff705f]">Imprimante Réseau (Epson TM-m30III)</h3>
              <div>
                <label className="text-xs font-extrabold uppercase text-[#8ea39b]">Adresse IP</label>
                <input
                  type="text"
                  value={config.printerIp}
                  onChange={(e) => setConfig({ ...config, printerIp: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold"
                  placeholder="192.168.1.100"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase text-[#8ea39b]">Port TCP ESC/POS</label>
                <input
                  type="number"
                  value={config.printerPort}
                  onChange={(e) => setConfig({ ...config, printerPort: Number(e.target.value) })}
                  className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold"
                  placeholder="9100"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase text-[#8ea39b]">URL Print Bridge Local (Optionnel)</label>
                <input
                  type="text"
                  value={config.bridgeUrl ?? ""}
                  onChange={(e) => setConfig({ ...config, bridgeUrl: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold"
                  placeholder="http://localhost:3001"
                />
              </div>

              <div className="pt-2 flex gap-4">
                <button
                  onClick={() => {
                    savePrinterConfig(config);
                    alert("Configuration enregistrée.");
                  }}
                  className="flex-1 rounded-xl bg-[#ff705f] py-3 text-white font-black text-sm"
                >
                  Enregistrer
                </button>
                <button
                  onClick={handleTestPrint}
                  className="flex-1 rounded-xl bg-white/10 py-3 text-white font-black text-sm hover:bg-white/20"
                >
                  Tester l'impression (Test Print)
                </button>
              </div>
            </div>

            {/* Logs d'impression */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3">
              <h3 className="text-base font-black text-white">Journal d'impression direct</h3>
              <div className="h-44 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl">
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
                  className="flex items-center gap-1.5 text-xs font-bold text-[#d7ff45] bg-[#d7ff45]/15 px-3 py-1.5 rounded-xl"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {selectedOrder.customer.phone}
                </a>
              </div>
              {selectedOrder.customer.fulfillment === "delivery" ? (
                <div className="text-xs text-[#8ea39b] pt-1 border-t border-white/5">
                  <p className="font-bold text-white">{selectedOrder.customer.address}</p>
                  <p>{selectedOrder.customer.postalCode} {selectedOrder.customer.city}</p>
                </div>
              ) : (
                <p className="text-xs text-[#d7ff45] font-bold">Retrait sur place</p>
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

            {/* Actions Modal */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleManualReprint(selectedOrder.id)}
                className="rounded-2xl bg-white/10 py-3.5 text-sm font-black hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-[#ff705f]" />
                Réimprimer Ticket
              </button>

              {selectedOrder.deliveryToken && (
                <a
                  href={`/track/${selectedOrder.deliveryToken}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#ff705f]/20 text-[#ff705f] py-3.5 text-sm font-black hover:bg-[#ff705f]/30 transition flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Vue Livreur QR
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
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

