import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useMemo } from "react";
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
  Trash2,
  Bell,
  Sparkles,
  Pause,
  Play,
  Flame,
  UserCheck,
  FileSpreadsheet,
  TrendingUp,
  Plus,
  Minus,
  Package,
  Salad,
  Users,
  Compass,
  Check,
  History,
  LayoutDashboard,
} from "lucide-react";
import {
  getPosOrders,
  setPosOrderStatus,
  triggerReprint,
  getOrderReceipts,
  ackPosPrint,
  createTestDeliveryOrder,
  clearPosOrders,
  acceptPosOrder,
  delayPosOrder,
  assignPosDriver,
} from "../../fn/pos";
import {
  type PrinterConfig,
  loadPrinterConfig,
  savePrinterConfig,
  sendReceiptToPrinter,
  buildEposXmlTest,
  buildEposXmlOrder,
  scanForPrinterIp,
} from "../../lib/epos-client";
import type { Order } from "../../lib/orders";
import { openGoogleMapsApp, openWazeApp } from "../../lib/navigation";
import type { StockItem } from "../../lib/stock";
import QRCode from "qrcode";

export const Route = createFileRoute("/pos/")({
  component: PosApplicationPage,
});

type PosTab = "dashboard" | "kanban" | "stock" | "drivers" | "mileage" | "stats" | "settings";

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
  const [modalQrDataUrl, setModalQrDataUrl] = useState<string>("");

  const [activeTab, setActiveTab] = useState<PosTab>("kanban");
  const [searchQuery, setSearchQuery] = useState("");

  // Configuration Imprimante & Audio
  const [config, setConfig] = useState<PrinterConfig>(loadPrinterConfig);
  const [printingOrderId, setPrintingOrderId] = useState<string | null>(null);
  const [testingPrinter, setTestingPrinter] = useState(false);
  const [printBannerError, setPrintBannerError] = useState<string | null>(null);
  const [printLog, setPrintLog] = useState<Array<{ time: string; msg: string; type: "ok" | "err" }>>([]);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Auto-nettoyage et migration vers port 8043
  useEffect(() => {
    if (config.printerPort !== 8043) {
      const fixed = { ...config, printerPort: 8043, printMode: "epos" as const };
      setConfig(fixed);
      savePrinterConfig(fixed);
    }
  }, [config.printerPort]);

  // Helper local storage pour commandes imprimées
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

  const knownOrderStatuses = useRef<Map<string, Order["status"]>>(new Map());
  const initialOrdersLoaded = useRef(false);
  const autoPrintInFlight = useRef<Set<string>>(new Set());
  const autoPrintRetryAfter = useRef<Map<string, number>>(new Map());

  // ── Rush Pause State ──
  const [rushState, setRushState] = useState<{
    isPaused: boolean;
    pause: any;
    remainingSeconds: number;
  }>({ isPaused: false, pause: null, remainingSeconds: 0 });
  const [showRushModal, setShowRushModal] = useState(false);

  const loadRushState = async () => {
    try {
      const res = await fetch("/api/rush-pause", {
        headers: { "x-pos-pin": pin || "1234" },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setRushState(data);
      }
    } catch {}
  };

  useEffect(() => {
    if (!isUnlocked) return;
    loadRushState();
    const interval = setInterval(loadRushState, rushState.isPaused ? 3000 : 10000);
    return () => clearInterval(interval);
  }, [isUnlocked, rushState.isPaused, pin]);

  // Décompte local en secondes de la pause rush
  useEffect(() => {
    if (!rushState.isPaused || !rushState.pause?.endsAt) return;
    const interval = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil((new Date(rushState.pause.endsAt).getTime() - Date.now()) / 1000)
      );
      if (remaining === 0) {
        loadRushState();
      } else {
        setRushState((prev) => ({ ...prev, remainingSeconds: remaining }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [rushState.isPaused, rushState.pause?.endsAt]);

  const handleSetRushPause = async (durationMinutes: number) => {
    try {
      const res = await fetch("/api/rush-pause", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({ action: "pause", durationMinutes }),
      });
      const data = await res.json();
      if (data.success) {
        setRushState(data);
        setShowRushModal(false);
      }
    } catch (e: any) {
      alert("Erreur mise en pause : " + (e?.message ?? String(e)));
    }
  };

  const handleResumeRush = async () => {
    try {
      const res = await fetch("/api/rush-pause", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({ action: "resume" }),
      });
      const data = await res.json();
      if (data.success) {
        setRushState(data);
      }
    } catch (e: any) {
      alert("Erreur reprise : " + (e?.message ?? String(e)));
    }
  };

  // ── Stock Management State ──
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [stockCategory, setStockCategory] = useState<string>("all");
  const [stockSearch, setStockSearch] = useState<string>("");

  const loadStock = async () => {
    try {
      const res = await fetch("/api/stock", {
        headers: { "x-pos-pin": pin || "1234" },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.items)) {
          setStocks(data.items);
        }
      }
    } catch {}
  };

  const handleUpdateStock = async (id: string, updates: Partial<StockItem>) => {
    setStocks((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
    try {
      await fetch("/api/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({ id, ...updates }),
      });
    } catch {
      loadStock();
    }
  };

  // ── Drivers & Mileage State ──
  const [drivers, setDrivers] = useState<Array<{ id: string; name: string; active: boolean; phone?: string; deliveriesCompleted: number }>>([]);
  const [mileageStats, setMileageStats] = useState<any>(null);
  const [mileageLogs, setMileageLogs] = useState<any[]>([]);
  const [newDriverName, setNewDriverName] = useState("");
  const [newDriverPhone, setNewDriverPhone] = useState("");
  const [editingLogId, setEditingLogId] = useState<string | null>(null);
  const [correctedKm, setCorrectedKm] = useState<string>("");
  const [correctionReason, setCorrectionReason] = useState<string>("");

  const loadDriversAndMileage = async () => {
    try {
      const [driversRes, statsRes, logsRes] = await Promise.all([
        fetch("/api/pos-mileage?action=list_drivers", { headers: { "x-pos-pin": pin || "1234" } }),
        fetch("/api/pos-mileage?action=stats", { headers: { "x-pos-pin": pin || "1234" } }),
        fetch("/api/pos-mileage?action=logs", { headers: { "x-pos-pin": pin || "1234" } }),
      ]);
      if (driversRes.ok) {
        const d = await driversRes.json();
        if (d.success) setDrivers(d.drivers);
      }
      if (statsRes.ok) {
        const s = await statsRes.json();
        if (s.success) setMileageStats(s.stats);
      }
      if (logsRes.ok) {
        const l = await logsRes.json();
        if (l.success) setMileageLogs(l.logs);
      }
    } catch {}
  };

  const handleAddDriver = async () => {
    if (!newDriverName.trim()) return;
    try {
      const res = await fetch("/api/pos-mileage", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({ action: "add_driver", name: newDriverName.trim(), phone: newDriverPhone.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setDrivers(data.drivers);
        setNewDriverName("");
        setNewDriverPhone("");
      }
    } catch {
      alert("Erreur ajout livreur");
    }
  };

  const handleToggleDriver = async (driverId: string) => {
    try {
      const res = await fetch("/api/pos-mileage", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({ action: "toggle_driver", driverId }),
      });
      const data = await res.json();
      if (data.success) {
        setDrivers(data.drivers);
      }
    } catch {}
  };

  const handleAssignDriverToOrder = async (order: Order, driverId: string) => {
    const drv = drivers.find((d) => d.id === driverId);
    if (!drv) return;
    try {
      const addr = `${order.customer.address}, ${order.customer.postalCode || "4600"} ${order.customer.city || "Visé"}`;
      let dist = 3.5;
      try {
        const distRes = await fetch(
          `/api/pos-mileage?action=estimate&address=${encodeURIComponent(addr)}&postalCode=${encodeURIComponent(
            order.customer.postalCode || "4600"
          )}`
        );
        if (distRes.ok) {
          const distData = await distRes.json();
          if (distData.distanceKm) dist = distData.distanceKm;
        }
      } catch {}

      await assignPosDriver({
        data: {
          pin,
          orderId: order.id,
          driverId: drv.id,
          driverName: drv.name,
          distanceKm: dist,
        },
      });

      await fetch("/api/pos-mileage", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({
          action: "record",
          orderId: order.id,
          driverId: drv.id,
          driverName: drv.name,
          clientName: order.customer.name,
          destinationAddress: addr,
          postalCode: order.customer.postalCode || "4600",
          city: order.customer.city || "Visé",
          distanceKm: dist,
        }),
      });

      const updated = { ...order, driverId: drv.id, driverName: drv.name, distanceKm: dist };
      setOrders((prev) => prev.map((o) => (o.id === order.id ? updated : o)));
      if (selectedOrder?.id === order.id) setSelectedOrder(updated);
      loadDriversAndMileage();
    } catch (e: any) {
      alert("Erreur assignation livreur : " + (e?.message ?? String(e)));
    }
  };

  const handleSaveCorrection = async () => {
    if (!editingLogId) return;
    const km = parseFloat(correctedKm);
    if (isNaN(km) || km <= 0) {
      alert("Veuillez saisir une distance valide");
      return;
    }
    try {
      const res = await fetch("/api/pos-mileage", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
        body: JSON.stringify({
          action: "correct",
          recordId: editingLogId,
          newDistanceKm: km,
          reason: correctionReason.trim() || "Ajustement itinéraire réel",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEditingLogId(null);
        setCorrectedKm("");
        setCorrectionReason("");
        loadDriversAndMileage();
      }
    } catch {
      alert("Erreur correction kilométrage");
    }
  };

  // Rechargement des données onglet actif
  useEffect(() => {
    if (!isUnlocked) return;
    if (activeTab === "stock") loadStock();
    if (activeTab === "drivers" || activeTab === "mileage") loadDriversAndMileage();
  }, [activeTab, isUnlocked]);

  // QR Code dans la modale
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

  // ── Alarme Audio ──
  const enableSoundAndTest = async () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) throw new Error("Web Audio API indisponible");
      if (!audioContextRef.current || audioContextRef.current.state === "closed") audioContextRef.current = new AudioCtx();
      if (audioContextRef.current.state === "suspended") await audioContextRef.current.resume();
      setConfig((current) => {
        const next = { ...current, soundEnabled: true };
        savePrinterConfig(next);
        return next;
      });
      playAlertSound(true);
      alert("Son activé. Laissez cette page ouverte sur la caisse pour recevoir les alertes.");
    } catch (e: any) {
      alert("Impossible d’activer le son : " + (e?.message ?? String(e)));
    }
  };

  const playAlertSound = (force = false, soundOverride?: "signature" | "zen_bell" | "marimba") => {
    if (!config.soundEnabled && !force) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContextRef.current || audioContextRef.current.state === "closed") {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") void ctx.resume();

      const theme = soundOverride || config.soundTheme || "signature";
      const masterVol = config.soundVolume ?? 0.85;
      const now = ctx.currentTime;

      const playTone = (
        time: number,
        freq: number,
        duration: number,
        gainVal: number,
        type: OscillatorType = "sine",
        harmonicMultiplier = 2.0,
        harmonicRatio = 0.25
      ) => {
        const oscFund = ctx.createOscillator();
        oscFund.type = type;
        oscFund.frequency.setValueAtTime(freq, time);

        const oscHarm = ctx.createOscillator();
        oscHarm.type = "sine";
        oscHarm.frequency.setValueAtTime(freq * harmonicMultiplier, time);

        const gainNode = ctx.createGain();
        const effectiveGain = Math.max(0.01, gainVal * masterVol);

        gainNode.gain.setValueAtTime(0.0001, time);
        gainNode.gain.linearRampToValueAtTime(effectiveGain, time + 0.008);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

        oscFund.connect(gainNode);

        const harmGain = ctx.createGain();
        harmGain.gain.setValueAtTime(effectiveGain * harmonicRatio, time);
        harmGain.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.7);
        oscHarm.connect(harmGain);
        harmGain.connect(gainNode);

        gainNode.connect(ctx.destination);

        oscFund.start(time);
        oscFund.stop(time + duration + 0.05);
        oscHarm.start(time);
        oscHarm.stop(time + duration + 0.05);
      };

      if (theme === "signature") {
        playTone(now + 0.0, 783.99, 0.45, 0.75, "triangle", 2.0, 0.2);
        playTone(now + 0.13, 987.77, 0.45, 0.8, "sine", 2.0, 0.25);
        playTone(now + 0.26, 1174.66, 0.5, 0.85, "triangle", 2.0, 0.3);
        playTone(now + 0.4, 1567.98, 0.85, 0.95, "sine", 2.0, 0.35);
        playTone(now + 0.72, 1174.66, 0.55, 0.75, "triangle", 2.0, 0.25);
        playTone(now + 0.88, 1567.98, 1.1, 1.0, "sine", 2.0, 0.4);
      } else if (theme === "zen_bell") {
        playTone(now + 0.0, 880.0, 0.9, 0.9, "sine", 2.76, 0.2);
        playTone(now + 0.35, 1318.51, 1.4, 0.95, "sine", 2.0, 0.25);
      } else if (theme === "marimba") {
        playTone(now + 0.0, 523.25, 0.22, 0.85, "triangle", 3.0, 0.15);
        playTone(now + 0.1, 659.25, 0.22, 0.85, "triangle", 3.0, 0.15);
        playTone(now + 0.2, 783.99, 0.22, 0.9, "triangle", 3.0, 0.15);
        playTone(now + 0.3, 1046.5, 0.45, 0.95, "triangle", 2.5, 0.2);
      }
    } catch {}
  };

  // ── Alarme sonore continue tant qu'il y a des commandes non acceptées ──
  const unacceptedOrders = useMemo(() => {
    return orders.filter(
      (o) =>
        ["paid", "awaiting_pickup", "awaiting_delivery"].includes(o.status) &&
        !o.acceptedAt
    );
  }, [orders]);

  useEffect(() => {
    if (!isUnlocked || !config.soundEnabled) return;
    if (unacceptedOrders.length === 0) return;

    playAlertSound();
    const interval = setInterval(() => {
      playAlertSound();
    }, 3500);

    return () => clearInterval(interval);
  }, [unacceptedOrders.length, isUnlocked, config.soundEnabled]);

  // ── Chargement des commandes ──
  const loadOrders = async () => {
    try {
      let newOrders: Order[] | null = null;
      try {
        const resRest = await fetch("/api/pos-orders", {
          headers: { Accept: "application/json", "x-pos-pin": pin || "1234" },
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

      if (!newOrders) {
        const res = await getPosOrders({ data: { pin } });
        newOrders = res.orders;
      }

      const printableStatuses: Order["status"][] = ["paid", "awaiting_pickup", "awaiting_delivery"];
      const printedIds = getPrintedOrderIds();
      const nowMs = Date.now();
      const fourHoursMs = 4 * 60 * 60 * 1000;

      const newlyPrintable = newOrders.filter((o) => {
        if (!printableStatuses.includes(o.status)) return false;
        if (o.printStatus === "printed") return false;
        if (printedIds.has(o.id)) return false;
        if (autoPrintInFlight.current.has(o.id)) return false;
        const retryAfter = autoPrintRetryAfter.current.get(o.id) ?? 0;
        if (nowMs < retryAfter) return false;

        const createdAtMs = new Date(o.createdAt).getTime();
        const isRecent = !isNaN(createdAtMs) && nowMs - createdAtMs < fourHoursMs;
        if (!isRecent) {
          markOrderAsPrintedLocally(o.id);
          return false;
        }
        return true;
      });

      for (const order of newOrders) {
        knownOrderStatuses.current.set(order.id, order.status);
      }
      initialOrdersLoaded.current = true;
      setOrders(newOrders);

      // Auto-print
      for (const order of newlyPrintable) {
        if (autoPrintInFlight.current.has(order.id)) continue;
        autoPrintInFlight.current.add(order.id);
        (async () => {
          try {
            const res = await handleExecutePrint(order, true);
            if (!res.success) {
              autoPrintRetryAfter.current.set(order.id, Date.now() + fourHoursMs);
            } else {
              autoPrintRetryAfter.current.delete(order.id);
            }
          } catch {
            autoPrintRetryAfter.current.set(order.id, Date.now() + 60_000);
          } finally {
            autoPrintInFlight.current.delete(order.id);
          }
        })();
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

  // ── Actions Commandes : Accepter & Retard ──
  const handleAcceptOrder = async (order: Order) => {
    try {
      await acceptPosOrder({ data: { pin, orderId: order.id } });
      const nowIso = new Date().toISOString();
      const updated = { ...order, acceptedAt: nowIso, status: "preparing" as const };
      setOrders((prev) => prev.map((o) => (o.id === order.id ? updated : o)));
      if (selectedOrder?.id === order.id) setSelectedOrder(updated);

      if (!getPrintedOrderIds().has(order.id)) {
        void handleExecutePrint(updated, true);
      }
    } catch (err: any) {
      alert("Erreur lors de l'acceptation : " + (err?.message ?? String(err)));
    }
  };

  const handleDelayOrder = async (order: Order, minutes: number) => {
    try {
      const now = new Date();
      const estTime = new Date(now.getTime() + minutes * 60000).toLocaleTimeString("fr-BE", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Brussels",
      });
      await delayPosOrder({
        data: {
          pin,
          orderId: order.id,
          delayMinutes: minutes,
          estimatedDeliveryTime: estTime,
        },
      });
      const nowIso = now.toISOString();
      const updated = {
        ...order,
        delayMinutes: minutes,
        delayedAt: nowIso,
        estimatedDeliveryTime: estTime,
      };
      setOrders((prev) => prev.map((o) => (o.id === order.id ? updated : o)));
      if (selectedOrder?.id === order.id) setSelectedOrder(updated);
    } catch (err: any) {
      alert("Erreur signalement retard : " + (err?.message ?? String(err)));
    }
  };

  // ── Impression ──
  const handleExecutePrint = async (order: Order, silent = false): Promise<{ success: boolean; message: string }> => {
    setPrintingOrderId(order.id);
    let result = { success: false, message: "Erreur inconnue" };
    try {
      const origin = typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be";
      const xml = buildEposXmlOrder(order, origin);
      const res = await sendReceiptToPrinter(xml, config);
      result = res;
      const now = new Date().toLocaleTimeString();

      if (res.success) {
        markOrderAsPrintedLocally(order.id);
        setPrintLog((prev) => [
          { time: now, msg: `Ticket ${order.id} imprimé avec succès sur Epson (${config.printerIp})`, type: "ok" },
          ...prev.slice(0, 30),
        ]);
        setPrintBannerError(null);
        try {
          await ackPosPrint({ data: { pin, orderId: order.id, success: true } });
        } catch {}
      } else {
        setPrintLog((prev) => [
          { time: now, msg: `Échec commande ${order.id} : ${res.message}`, type: "err" },
          ...prev.slice(0, 30),
        ]);
        setPrintBannerError(`⚠️ L'imprimante Epson (${config.printerIp}) n'a pas répondu.`);
        if (!silent) {
          alert(`⚠️ Impossible d'imprimer sur l'Epson (${config.printerIp}) :\n\n${res.message}`);
        }
      }
    } catch (err: any) {
      result = { success: false, message: err?.message || String(err) };
    } finally {
      setPrintingOrderId(null);
    }
    return result;
  };

  const handleManualReprint = async (orderId: string) => {
    const targetOrder = orders.find((o) => o.id === orderId) || (selectedOrder?.id === orderId ? selectedOrder : null);
    if (!targetOrder) {
      alert("Commande introuvable.");
      return;
    }
    await handleExecutePrint(targetOrder, false);
  };

  const handleUpdateStatus = async (orderId: string, status: Order["status"]) => {
    try {
      try {
        const res = await fetch("/api/pos-orders", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-pos-pin": pin || "1234" },
          body: JSON.stringify({ orderId, status }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success) {
            setOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status } : o)));
            if (selectedOrder && selectedOrder.id === orderId) {
              setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
            }
            loadOrders().catch(() => {});
            return;
          }
        }
      } catch {}

      await setPosOrderStatus({ data: { pin, orderId, status } });
      await loadOrders();
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, status } : null));
      }
    } catch {
      alert("Erreur de mise à jour du statut.");
    }
  };

  const [scanningIp, setScanningIp] = useState(false);
  const [scanStatus, setScanStatus] = useState<string | null>(null);

  const handleScanPrinter = async () => {
    if (scanningIp) return;
    setScanningIp(true);
    setScanStatus("Recherche de l'imprimante Epson en cours...");
    try {
      const foundIp = await scanForPrinterIp((testedIp) => setScanStatus(`Test de ${testedIp}...`));
      if (foundIp) {
        const updated = { ...config, printerIp: foundIp };
        setConfig(updated);
        savePrinterConfig(updated);
        setScanStatus(`✅ Epson détectée à l'adresse ${foundIp} !`);
      } else {
        setScanStatus("❌ Aucune imprimante Epson trouvée automatiquement.");
      }
    } catch (e: any) {
      setScanStatus("Erreur recherche : " + (e?.message ?? String(e)));
    } finally {
      setScanningIp(false);
    }
  };

  const handleTestPrint = async () => {
    setTestingPrinter(true);
    try {
      const xml = buildEposXmlTest();
      const res = await sendReceiptToPrinter(xml, config);
      if (res.success) {
        setPrintBannerError(null);
        alert("✅ Test réussi ! L'imprimante a imprimé le ticket.");
      } else {
        alert("⚠️ Échec test impression : " + res.message);
      }
    } catch (e: any) {
      alert("Erreur test imprimante : " + (e?.message ?? String(e)));
    } finally {
      setTestingPrinter(false);
    }
  };

  const handleClearAllOrders = async () => {
    if (!window.confirm("Êtes-vous certain de vouloir vider TOUTES les commandes ?")) return;
    try {
      await clearPosOrders({ data: { pin } });
      setOrders([]);
      setSelectedOrder(null);
      alert("Commandes effacées.");
    } catch (e: any) {
      alert("Erreur : " + (e?.message ?? String(e)));
    }
  };

  const [creatingTestOrder, setCreatingTestOrder] = useState(false);
  const handleCreateTestOrder = async () => {
    setCreatingTestOrder(true);
    try {
      const response = await fetch("/api/create-test-order", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", "x-pos-pin": pin || "1234" },
      });
      const data = await response.json();
      if (!data.success || !data.order) {
        alert("Erreur création commande test");
        return;
      }
      playAlertSound();
      const created = data.order as Order;
      setOrders((prev) => [created, ...prev.filter((o) => o.id !== created.id)]);
      setSelectedOrder(created);
      loadOrders().catch(() => {});
    } catch (e: any) {
      alert("Erreur création commande test : " + (e?.message ?? String(e)));
    } finally {
      setCreatingTestOrder(false);
    }
  };

  // ── Kitchen Load ──
  const activeOrders = useMemo(() => {
    return orders.filter((o) => ["paid", "awaiting_pickup", "awaiting_delivery", "preparing"].includes(o.status));
  }, [orders]);

  const kitchenLoad = useMemo(() => {
    const count = activeOrders.length;
    if (count <= 3) {
      return {
        level: "normal",
        label: "Charge normale",
        badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        estTime: "~15 min",
        desc: "Flux cuisine fluide et maîtrisé",
      };
    } else if (count <= 7) {
      return {
        level: "busy",
        label: "Activité soutenue",
        badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        estTime: "~25 min",
        desc: "Rush en cours · surveillance active",
      };
    } else {
      return {
        level: "rush",
        label: "Forte affluence / Rush",
        badge: "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse",
        estTime: "~35-45 min",
        desc: "Cuisine saturée · Envisager une pause rush",
      };
    }
  }, [activeOrders.length]);

  // Listes filtrées
  const filteredOrders = useMemo(() => {
    if (!searchQuery.trim()) return orders;
    const q = searchQuery.toLowerCase();
    return orders.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.customer.name.toLowerCase().includes(q) ||
        o.customer.phone.includes(q) ||
        (o.customer.address && o.customer.address.toLowerCase().includes(q))
    );
  }, [orders, searchQuery]);

  const newOrdersList = filteredOrders.filter(
    (o) => ["paid", "awaiting_pickup", "awaiting_delivery"].includes(o.status) && !o.acceptedAt
  );
  const preparingOrdersList = filteredOrders.filter(
    (o) => o.status === "preparing" || (Boolean(o.acceptedAt) && ["paid", "awaiting_pickup", "awaiting_delivery"].includes(o.status))
  );
  const readyOrdersList = filteredOrders.filter((o) => o.status === "ready" || o.status === "delivering");
  const completedOrdersList = filteredOrders.filter((o) => o.status === "completed");

  const todayRevenue = useMemo(() => {
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    return orders
      .filter((o) => o.createdAt.slice(0, 10) === todayStr && o.status !== "cancelled")
      .reduce((acc, o) => acc + (o.total || 0), 0);
  }, [orders]);

  // ── Écran de Déverrouillage PIN ──
  if (!isUnlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d1a16] p-4 text-white">
        <div className="w-full max-w-sm rounded-3xl bg-[#142822] border border-white/10 p-8 shadow-2xl space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff705f]/20 text-[#ff705f]">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-wide">POKENBOWL POS</h1>
            <p className="text-xs text-[#8ea39b] mt-1">Terminal de Caisse & Gestion Restaurant</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pinInput === pin || pinInput === "1234") {
                setIsUnlocked(true);
                setPinError(false);
              } else {
                setPinError(true);
                setPinInput("");
              }
            }}
            className="space-y-4"
          >
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="Code PIN (1234)"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              className="w-full rounded-2xl bg-black/40 border border-white/15 px-4 py-3.5 text-center text-2xl font-mono tracking-[0.5em] text-white focus:border-[#ff705f] focus:outline-none"
              autoFocus
            />
            {pinError && <p className="text-xs font-bold text-red-400">Code PIN incorrect</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#ff705f] py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg hover:bg-[#ff5a47] active:scale-95 transition"
            >
              Déverrouiller la Caisse
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Interface Complète POS ──
  return (
    <>
      <div className="pos-screen-ui flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden">
        {/* ─── Barre Supérieure POS ─────────────────────────────────────────── */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6 bg-[#162721]">
          {/* Logo & Indicateur de charge */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-base sm:text-lg font-black tracking-wider text-white">POKENBOWL POS</span>
            </div>

            {/* Badge Charge Cuisine */}
            <div className={`hidden md:flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black ${kitchenLoad.badge}`}>
              <Flame className="h-3.5 w-3.5" />
              <span>{kitchenLoad.label} ({activeOrders.length})</span>
            </div>

            {/* Statut Pause Rush Global */}
            {rushState.isPaused ? (
              <div className="flex items-center gap-2 rounded-xl bg-red-600 px-3 py-1 text-xs font-black text-white shadow-lg animate-pulse">
                <Pause className="h-3.5 w-3.5" />
                <span>EN PAUSE · {Math.floor(rushState.remainingSeconds / 60)}:{(rushState.remainingSeconds % 60).toString().padStart(2, "0")}</span>
                <button
                  type="button"
                  onClick={handleResumeRush}
                  className="ml-1 rounded-md bg-white text-red-700 px-2 py-0.5 text-[10px] uppercase font-black hover:bg-white/90"
                >
                  Réouvrir
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowRushModal(true)}
                className="hidden sm:flex items-center gap-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 px-2.5 py-1 text-xs font-bold text-amber-300 transition"
                title="Mettre temporairement en pause les nouvelles commandes sur le site"
              >
                <Pause className="h-3.5 w-3.5" />
                <span>Pause Rush</span>
              </button>
            )}
          </div>

          {/* Navigation 7 Onglets */}
          <nav className="flex rounded-xl bg-black/40 p-1 overflow-x-auto max-w-[50vw]">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "dashboard" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              <span>Tableau de bord</span>
            </button>

            <button
              onClick={() => setActiveTab("kanban")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "kanban" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Commandes ({newOrdersList.length + preparingOrdersList.length + readyOrdersList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("stock")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "stock" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <Salad className="h-3.5 w-3.5" />
              <span>Stocks</span>
            </button>

            <button
              onClick={() => setActiveTab("drivers")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "drivers" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Livreurs</span>
            </button>

            <button
              onClick={() => setActiveTab("mileage")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "mileage" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Kilométrage</span>
            </button>

            <button
              onClick={() => setActiveTab("stats")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "stats" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Stats</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition cursor-pointer shrink-0 ${
                activeTab === "settings" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"
              }`}
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Paramètres</span>
            </button>
          </nav>

          {/* Outils & Contrôles Rapides */}
          <div className="flex items-center gap-2">
            {/* Toggle Son */}
            <button
              onClick={() => {
                if (!config.soundEnabled) {
                  void enableSoundAndTest();
                  return;
                }
                const updated = { ...config, soundEnabled: false };
                setConfig(updated);
                savePrinterConfig(updated);
              }}
              className={`rounded-xl p-2.5 transition ${
                config.soundEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#6c7d76]"
              }`}
              title={config.soundEnabled ? "Désactiver le son" : "Activer le son"}
            >
              {config.soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>

            {/* Rafraîchir */}
            <button
              onClick={loadOrders}
              className="rounded-xl bg-white/10 p-2.5 text-white hover:bg-white/20 active:scale-95 transition"
              title="Rafraîchir"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
            </button>

            {/* IP Imprimante */}
            <a
              href={`https://${config.printerIp}:8043/cgi-bin/epos/service.cgi`}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 rounded-xl bg-black/40 hover:bg-black/60 px-3 py-2 text-xs font-bold border border-white/10 transition"
              title="Autoriser l'imprimante dans Chrome"
            >
              <Printer className="h-4 w-4 text-[#ff705f]" />
              <span className="text-[#98aba3]">{config.printerIp}</span>
            </a>
          </div>
        </header>

        {/* ─── Bannière Alerte : Commandes Non Acceptées ─────────────────── */}
        {unacceptedOrders.length > 0 && (
          <div className="flex items-center justify-between bg-gradient-to-r from-red-600 via-[#ff705f] to-amber-600 px-5 py-2.5 text-white shadow-md animate-pulse">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-white animate-ping" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                🔔 {unacceptedOrders.length} NOUVELLE{unacceptedOrders.length > 1 ? "S" : ""} COMMANDE{unacceptedOrders.length > 1 ? "S" : ""} EN ATTENTE DE VALIDATION
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const first = unacceptedOrders[0];
                  if (first) setSelectedOrder(first);
                }}
                className="rounded-lg bg-white text-[#2C1D16] px-3 py-1 text-xs font-black shadow hover:bg-white/90"
              >
                Voir & Valider
              </button>
            </div>
          </div>
        )}

        {/* ─── Bannière Erreur Impression Réseau ───────────────────────── */}
        {printBannerError && (
          <div className="flex items-center justify-between bg-amber-500/20 border-b border-amber-500/40 px-5 py-2 text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span>{printBannerError}</span>
            </div>
            <button onClick={() => setPrintBannerError(null)} className="font-bold hover:text-white">✕</button>
          </div>
        )}

        {/* ─── Contenu Principal des 7 Onglets ──────────────────────────── */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* ══════ TAB 1 : DASHBOARD / RUSH & CHARGE CUISINE ══════ */}
          {activeTab === "dashboard" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Carte Contrôle Pause Rush */}
              <div className="rounded-3xl bg-gradient-to-br from-[#162721] to-[#12211c] border border-white/10 p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#ff705f]">Gestion du Rush</span>
                    <h2 className="text-xl sm:text-2xl font-black text-white">Mise en Pause des Commandes Web</h2>
                    <p className="text-xs text-[#8ea39b] mt-1">
                      Permet à la cuisine de souffler. N'annule et ne retarde jamais les commandes déjà validées.
                    </p>
                  </div>

                  {rushState.isPaused ? (
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="block text-xs font-black uppercase text-red-400">Reprise dans</span>
                        <span className="font-mono text-2xl font-black text-white">
                          {Math.floor(rushState.remainingSeconds / 60)}:{(rushState.remainingSeconds % 60).toString().padStart(2, "0")}
                        </span>
                      </div>
                      <button
                        onClick={handleResumeRush}
                        className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-xs font-black uppercase tracking-wider shadow-lg transition"
                      >
                        ▶️ Réouvrir maintenant
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowRushModal(true)}
                      className="rounded-2xl bg-amber-600 hover:bg-amber-500 text-white px-5 py-3 text-xs font-black uppercase tracking-wider shadow-lg transition"
                    >
                      ⏸️ Mettre en pause le site
                    </button>
                  )}
                </div>

                {/* 3 boutons rapides de pause */}
                {!rushState.isPaused && (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-[#8ea39b]">Pauses rapides :</span>
                    <button
                      onClick={() => handleSetRushPause(10)}
                      className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition"
                    >
                      10 Minutes
                    </button>
                    <button
                      onClick={() => handleSetRushPause(20)}
                      className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition"
                    >
                      20 Minutes
                    </button>
                    <button
                      onClick={() => handleSetRushPause(30)}
                      className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-3.5 py-1.5 text-xs font-black transition"
                    >
                      30 Minutes
                    </button>
                  </div>
                )}
              </div>

              {/* Indicateurs Clés Métier */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-[#ff705f]">À Valider</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{newOrdersList.length}</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Nouvelles commandes urgentes</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-amber-400">En Préparation</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{preparingOrdersList.length}</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Temps estimé : {kitchenLoad.estTime}</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-blue-400">En Livraison / Prêtes</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{readyOrdersList.length}</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Départ Avenue du Pont 12</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-emerald-400">CA Aujourd'hui</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{todayRevenue.toFixed(2)} €</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">{completedOrdersList.length} terminées</p>
                </div>
              </div>

              {/* Commandes Récentes Prioritaires */}
              <div className="rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-white">Commandes en cours nécessitant une action</h3>
                  <button onClick={() => setActiveTab("kanban")} className="text-xs font-bold text-[#ff705f] hover:underline">
                    Ouvrir le Kanban complet →
                  </button>
                </div>

                {activeOrders.length === 0 ? (
                  <p className="text-xs text-[#8ea39b] py-6 text-center">Aucune commande active en ce moment.</p>
                ) : (
                  <div className="divide-y divide-white/5">
                    {activeOrders.slice(0, 5).map((o) => (
                      <div key={o.id} className="flex items-center justify-between py-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-black text-white">{o.id}</span>
                            <span className="text-xs font-bold text-white">{o.customer.name}</span>
                            {!o.acceptedAt && (
                              <span className="rounded-full bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 text-[10px] font-black uppercase animate-pulse">
                                Non acceptée
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#8ea39b]">
                            {o.customer.fulfillment === "delivery" ? `🛵 Livraison : ${o.customer.address}` : "🥡 Retrait sur place"} · {o.items.length} articles · {o.total.toFixed(2)} €
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          {!o.acceptedAt ? (
                            <button
                              onClick={() => handleAcceptOrder(o)}
                              className="rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider animate-pulse shadow"
                            >
                              Accepter
                            </button>
                          ) : (
                            <button
                              onClick={() => setSelectedOrder(o)}
                              className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs font-bold"
                            >
                              Détails
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ══════ TAB 2 : COMMANDES KANBAN ══════ */}
          {activeTab === "kanban" && (
            <div className="grid flex-1 grid-cols-4 gap-3 p-3 overflow-hidden">
              {/* Colonne 1 : À VALIDER */}
              <KanbanColumn
                title="À Valider"
                badgeCount={newOrdersList.length}
                color="bg-red-500"
                orders={newOrdersList}
                onSelect={setSelectedOrder}
                onReprint={handleManualReprint}
                onAcceptOrder={handleAcceptOrder}
                onNextStatus={(id) => handleUpdateStatus(id, "preparing")}
                nextLabel="Passer en Préparation"
                nextIcon={<CookingPot className="w-3.5 h-3.5" />}
              />

              {/* Colonne 2 : EN PRÉPARATION */}
              <KanbanColumn
                title="En Préparation"
                badgeCount={preparingOrdersList.length}
                color="bg-[#ff705f]"
                orders={preparingOrdersList}
                onSelect={setSelectedOrder}
                onReprint={handleManualReprint}
                onNextStatus={(id) => handleUpdateStatus(id, "ready")}
                nextLabel="Prête / En Livraison"
                nextIcon={<CheckCircle className="w-3.5 h-3.5" />}
              />

              {/* Colonne 3 : PRÊTES & EN LIVRAISON */}
              <KanbanColumn
                title="Prêtes & En Livraison"
                badgeCount={readyOrdersList.length}
                color="bg-blue-500"
                orders={readyOrdersList}
                onSelect={setSelectedOrder}
                onReprint={handleManualReprint}
                onNextStatus={(id) => handleUpdateStatus(id, "completed")}
                nextLabel="Terminer"
                nextIcon={<Truck className="w-3.5 h-3.5" />}
              />

              {/* Colonne 4 : TERMINÉES */}
              <KanbanColumn
                title="Terminées"
                badgeCount={completedOrdersList.length}
                color="bg-emerald-500"
                orders={completedOrdersList.slice(0, 30)}
                onSelect={setSelectedOrder}
                onReprint={handleManualReprint}
                onNextStatus={() => {}}
                nextLabel="Archivée"
                nextIcon={<Check className="w-3.5 h-3.5" />}
              />
            </div>
          )}

          {/* ══════ TAB 3 : GESTION DES STOCKS & INGRÉDIENTS ══════ */}
          {activeTab === "stock" && (
            <div className="flex-1 flex flex-col min-h-0 bg-[#0d1a16] p-4 sm:p-6 overflow-hidden">
              {/* Entête & Filtres Stocks */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 shrink-0">
                <div>
                  <h2 className="text-xl font-black text-white">Gestion des Stocks en Direct</h2>
                  <p className="text-xs text-[#8ea39b]">
                    Synchronisation temps réel avec le site client. Les ruptures désactivent immédiatement la commande.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Filtrer un ingrédient..."
                    value={stockSearch}
                    onChange={(e) => setStockSearch(e.target.value)}
                    className="rounded-xl bg-black/40 border border-white/10 px-3 py-1.5 text-xs text-white placeholder-[#8ea39b]/60 focus:outline-none"
                  />
                  <button
                    onClick={loadStock}
                    className="rounded-xl bg-white/10 hover:bg-white/20 p-2 text-white"
                    title="Actualiser"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Catégories de filtres */}
              <div className="flex gap-2 py-3 overflow-x-auto shrink-0">
                {[
                  { id: "all", label: "Tous" },
                  { id: "bowls", label: "Bowls Signatures" },
                  { id: "vegetables", label: "Légumes & Mix-ins" },
                  { id: "proteins", label: "Protéines" },
                  { id: "sauces", label: "Sauces" },
                  { id: "toppings", label: "Toppings" },
                  { id: "drinks", label: "Boissons" },
                  { id: "desserts", label: "Desserts" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setStockCategory(cat.id)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-black transition shrink-0 cursor-pointer ${
                      stockCategory === cat.id ? "bg-[#ff705f] text-white shadow" : "bg-black/30 text-[#8ea39b] hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Grille des Produits & Ingrédients */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {stocks
                  .filter((s) => (stockCategory === "all" ? true : s.category === stockCategory))
                  .filter((s) => (!stockSearch ? true : s.name.toLowerCase().includes(stockSearch.toLowerCase())))
                  .map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-[#142822] border border-white/10 p-4 space-y-3 shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#8ea39b]">
                            {item.category}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${
                              item.status === "available"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : item.status === "low"
                                ? "bg-amber-500/20 text-amber-300"
                                : "bg-red-500/20 text-red-300"
                            }`}
                          >
                            {item.status === "available" ? "Disponible" : item.status === "low" ? "Stock faible" : "Rupture"}
                          </span>
                        </div>
                        <h4 className="font-black text-sm text-white mt-1">{item.name}</h4>
                      </div>

                      {/* 3 boutons instantanés de statut */}
                      <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/5">
                        <button
                          onClick={() => handleUpdateStock(item.id, { status: "available" })}
                          className={`rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${
                            item.status === "available"
                              ? "bg-emerald-600 text-white shadow"
                              : "bg-white/5 text-[#8ea39b] hover:bg-white/10"
                          }`}
                        >
                          🟢 Dispo
                        </button>
                        <button
                          onClick={() => handleUpdateStock(item.id, { status: "low" })}
                          className={`rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${
                            item.status === "low"
                              ? "bg-amber-600 text-white shadow"
                              : "bg-white/5 text-[#8ea39b] hover:bg-white/10"
                          }`}
                        >
                          🟠 Faible
                        </button>
                        <button
                          onClick={() => handleUpdateStock(item.id, { status: "out_of_stock" })}
                          className={`rounded-xl py-1.5 text-[11px] font-black transition cursor-pointer ${
                            item.status === "out_of_stock"
                              ? "bg-red-600 text-white shadow"
                              : "bg-white/5 text-[#8ea39b] hover:bg-white/10"
                          }`}
                        >
                          🔴 Rupture
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* ══════ TAB 4 : GESTION DES LIVREURS ══════ */}
          {activeTab === "drivers" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-black text-white">Gestion de la Flotte Livreurs</h2>
                  <p className="text-xs text-[#8ea39b]">
                    Point de départ central : <strong>Avenue du Pont 12, 4600 Visé</strong>
                  </p>
                </div>
              </div>

              {/* Formulaire Ajout Livreur */}
              <div className="rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3 max-w-xl">
                <h3 className="text-sm font-black text-white">Ajouter un nouveau livreur</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Prénom du livreur (ex: Maxime)"
                    value={newDriverName}
                    onChange={(e) => setNewDriverName(e.target.value)}
                    className="flex-1 rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Téléphone (ex: 0491...)"
                    value={newDriverPhone}
                    onChange={(e) => setNewDriverPhone(e.target.value)}
                    className="rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs text-white focus:outline-none sm:w-40"
                  />
                  <button
                    onClick={handleAddDriver}
                    className="rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] text-white px-4 py-2 text-xs font-black uppercase transition shrink-0"
                  >
                    Ajouter
                  </button>
                </div>
              </div>

              {/* Liste des Livreurs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {drivers.map((drv) => (
                  <div key={drv.id} className="rounded-2xl bg-[#142822] border border-white/10 p-4 space-y-3 shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${drv.active ? "bg-emerald-400" : "bg-slate-500"}`} />
                        <h4 className="font-black text-base text-white">{drv.name}</h4>
                      </div>
                      <button
                        onClick={() => handleToggleDriver(drv.id)}
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-black uppercase transition ${
                          drv.active ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {drv.active ? "En Service" : "Inactif"}
                      </button>
                    </div>

                    <p className="text-xs text-[#8ea39b]">📞 {drv.phone || "Pas de numéro"}</p>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white">
                      <span>Courses aujourd'hui :</span>
                      <span className="font-mono text-emerald-400">{drv.deliveriesCompleted}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════ TAB 5 : KILOMÉTRAGE & EXPORT CSV ══════ */}
          {activeTab === "mileage" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-black text-white">Suivi Kilométrique des Livraisons</h2>
                  <p className="text-xs text-[#8ea39b]">
                    Calcul automatique de la distance routière depuis Avenue du Pont 12, Visé
                  </p>
                </div>

                <a
                  href={`/api/pos-mileage?action=export_csv&pin=${encodeURIComponent(pin || "1234")}`}
                  download
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider shadow-lg transition"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>Exporter Rapport CSV</span>
                </a>
              </div>

              {/* Cartes Statistiques Kilométrage */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-emerald-400">Aujourd'hui</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{mileageStats?.todayKm ?? 0} km</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">{mileageStats?.deliveriesToday ?? 0} livraisons</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-blue-400">Cette Semaine</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{mileageStats?.weekKm ?? 0} km</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Total roulé</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-purple-400">Ce Mois</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{mileageStats?.monthKm ?? 0} km</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Cumul mensuel</p>
                </div>

                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-amber-400">Moyenne / Course</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{mileageStats?.avgKmPerDelivery ?? 0} km</p>
                  <p className="mt-1 text-[11px] text-[#8ea39b]">Rayon moyen Visé</p>
                </div>
              </div>

              {/* Tableau d'Audit des Courses */}
              <div className="rounded-3xl bg-[#142822] border border-white/10 p-5 space-y-3">
                <h3 className="font-black text-base text-white">Journal des courses et livraisons</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-[#8ea39b]">
                        <th className="py-2.5 px-3">Date / Heure</th>
                        <th className="py-2.5 px-3">N° Commande</th>
                        <th className="py-2.5 px-3">Client</th>
                        <th className="py-2.5 px-3">Destination</th>
                        <th className="py-2.5 px-3">Livreur</th>
                        <th className="py-2.5 px-3">Distance</th>
                        <th className="py-2.5 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {mileageLogs.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-[#8ea39b]">
                            Aucun enregistrement kilométrique pour le moment.
                          </td>
                        </tr>
                      ) : (
                        mileageLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-white/5">
                            <td className="py-2.5 px-3 text-white font-mono">
                              {new Date(log.timestamp).toLocaleTimeString("fr-BE")}
                            </td>
                            <td className="py-2.5 px-3 font-mono font-bold text-[#ff705f]">{log.orderId}</td>
                            <td className="py-2.5 px-3 text-white font-bold">{log.clientName}</td>
                            <td className="py-2.5 px-3 text-[#8ea39b] truncate max-w-xs">{log.destinationAddress}</td>
                            <td className="py-2.5 px-3 text-white font-bold">{log.driverName}</td>
                            <td className="py-2.5 px-3 font-mono font-black text-emerald-400">
                              {log.distanceKm} km {log.isManualCorrection && <span className="text-[9px] text-amber-400">(Ajusté)</span>}
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                onClick={() => {
                                  setEditingLogId(log.id);
                                  setCorrectedKm(String(log.distanceKm));
                                }}
                                className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-2 py-1 text-[10px] font-bold"
                              >
                                Corriger
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Modale Correction Kilométrique */}
              {editingLogId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                  <div className="w-full max-w-md rounded-3xl bg-[#142822] border border-white/15 p-6 space-y-4 text-white">
                    <h3 className="font-black text-base">Ajustement Manuel des Kilomètres</h3>
                    <p className="text-xs text-[#8ea39b]">
                      Saisissez la distance réelle parcourue en cas de détour routier ou d'erreur GPS :
                    </p>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Distance en km (ex: 4.8)"
                      value={correctedKm}
                      onChange={(e) => setCorrectedKm(e.target.value)}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-3.5 py-2.5 text-base font-mono text-white focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Motif de l'ajustement (ex: travaux pont Visé)"
                      value={correctionReason}
                      onChange={(e) => setCorrectionReason(e.target.value)}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={() => setEditingLogId(null)}
                        className="rounded-xl bg-white/10 px-4 py-2 text-xs font-bold"
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleSaveCorrection}
                        className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-black uppercase"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════ TAB 6 : STATISTIQUES ══════ */}
          {activeTab === "stats" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <h2 className="text-xl font-black text-white">Statistiques de Vente & Performance</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-emerald-400">Total Commandes</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">{orders.length}</p>
                </div>
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-blue-400">Livraisons</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">
                    {orders.filter((o) => o.customer.fulfillment === "delivery").length}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-amber-400">À Emporter</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">
                    {orders.filter((o) => o.customer.fulfillment !== "delivery").length}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#142822] border border-white/10 p-4">
                  <span className="text-xs font-black uppercase text-purple-400">Panier Moyen</span>
                  <p className="mt-1 font-mono text-3xl font-black text-white">
                    {orders.length ? (orders.reduce((a, b) => a + b.total, 0) / orders.length).toFixed(2) : "0.00"} €
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ══════ TAB 7 : PARAMÈTRES (IMPRIMANTE, AUDIO, PIN) ══════ */}
          {activeTab === "settings" && (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              <h2 className="text-xl font-black text-white">Paramètres Matériel & Terminal</h2>

              {/* Imprimante Epson */}
              <div className="rounded-3xl bg-[#142822] border border-white/10 p-6 space-y-4 max-w-2xl">
                <h3 className="font-black text-base text-white">Imprimante Thermique Epson (Port 8043)</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={config.printerIp}
                    onChange={(e) => {
                      const updated = { ...config, printerIp: e.target.value.trim() };
                      setConfig(updated);
                      savePrinterConfig(updated);
                    }}
                    placeholder="Adresse IP (ex: 192.168.1.100)"
                    className="flex-1 rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs font-mono text-white"
                  />
                  <button
                    onClick={handleScanPrinter}
                    disabled={scanningIp}
                    className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-bold"
                  >
                    {scanningIp ? "Recherche..." : "Détecter IP"}
                  </button>
                  <button
                    onClick={handleTestPrint}
                    disabled={testingPrinter}
                    className="rounded-xl bg-[#ff705f] hover:bg-[#ff5a47] text-white px-4 py-2 text-xs font-black"
                  >
                    Test Impression
                  </button>
                </div>
                {scanStatus && <p className="text-xs text-amber-300">{scanStatus}</p>}
              </div>

              {/* Thèmes Audio Carillon */}
              <div className="rounded-3xl bg-[#142822] border border-white/10 p-6 space-y-4 max-w-2xl">
                <h3 className="font-black text-base text-white">Sonnerie & Volume</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "signature", name: "Signature Pokénball" },
                    { id: "zen_bell", name: "Cloche Zen" },
                    { id: "marimba", name: "Marimba Boisé" },
                  ].map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        const updated = { ...config, soundTheme: theme.id as any };
                        setConfig(updated);
                        savePrinterConfig(updated);
                        playAlertSound(true, theme.id as any);
                      }}
                      className={`rounded-2xl p-3 text-xs font-bold border transition ${
                        config.soundTheme === theme.id
                          ? "bg-[#ff705f]/20 border-[#ff705f] text-white"
                          : "bg-black/30 border-white/10 text-[#8ea39b]"
                      }`}
                    >
                      {theme.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton création commande test */}
              <div className="pt-4 flex gap-3">
                <button
                  onClick={handleCreateTestOrder}
                  disabled={creatingTestOrder}
                  className="rounded-2xl bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-xs font-bold"
                >
                  Générer une commande test de livraison
                </button>
                <button
                  onClick={handleClearAllOrders}
                  className="rounded-2xl bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/30 px-4 py-2.5 text-xs font-bold"
                >
                  Vider toutes les commandes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ─── MODALE DÉTAILS COMMANDE ──────────────────────────────────── */}
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

              {/* Bouton ACCEPTER LA COMMANDE si non acceptée */}
              {!selectedOrder.acceptedAt && (
                <div className="rounded-2xl bg-gradient-to-r from-red-600 to-[#ff705f] p-4 text-center space-y-2 shadow-lg animate-pulse">
                  <p className="text-xs font-black uppercase tracking-wider text-white">
                    ⚠️ Cette commande doit être validée par la cuisine
                  </p>
                  <button
                    onClick={() => handleAcceptOrder(selectedOrder)}
                    className="w-full rounded-xl bg-white text-[#2C1D16] py-3 text-sm font-black uppercase tracking-wider hover:bg-white/90 shadow transition"
                  >
                    🔔 ACCEPTER LA COMMANDE
                  </button>
                </div>
              )}

              {/* Signalement de Retard Cuisine (+10, +20, +30 min) */}
              <div className="rounded-2xl bg-black/30 p-3.5 space-y-2 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-amber-300">Signaler un retard cuisine au client</span>
                  {selectedOrder.delayMinutes && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full">
                      Retard : +{selectedOrder.delayMinutes} min
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleDelayOrder(selectedOrder, 10)}
                    className="rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition"
                  >
                    +10 min
                  </button>
                  <button
                    onClick={() => handleDelayOrder(selectedOrder, 20)}
                    className="rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition"
                  >
                    +20 min
                  </button>
                  <button
                    onClick={() => handleDelayOrder(selectedOrder, 30)}
                    className="rounded-xl bg-white/10 hover:bg-amber-500/30 text-white py-1.5 text-xs font-bold transition"
                  >
                    +30 min
                  </button>
                </div>
              </div>

              {/* Assignation Livreur & Distance */}
              {selectedOrder.customer.fulfillment === "delivery" && (
                <div className="rounded-2xl bg-black/30 p-3.5 space-y-2 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-emerald-400">Assigner un Livreur</span>
                    {selectedOrder.driverName && (
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                        Assigné à {selectedOrder.driverName} ({selectedOrder.distanceKm ?? 3.5} km)
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <select
                      value={selectedOrder.driverId || ""}
                      onChange={(e) => handleAssignDriverToOrder(selectedOrder, e.target.value)}
                      className="flex-1 rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-xs text-white"
                    >
                      <option value="">Sélectionner un livreur...</option>
                      {drivers.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name} {d.active ? "(En service)" : "(Inactif)"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Infos Client */}
              <div className="rounded-2xl bg-black/30 p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-base font-black">{selectedOrder.customer.name}</span>
                  <a
                    href={`tel:${selectedOrder.customer.phone}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ff705f]" />
                    <span>{selectedOrder.customer.phone}</span>
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

              {/* Navigation GPS pour Livraison */}
              {selectedOrder.customer.fulfillment === "delivery" && (
                <div className="rounded-2xl bg-[#1b322a] border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-emerald-400">Navigation Livreur</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                      1-Clic
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        openGoogleMapsApp(
                          `${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`
                        )
                      }
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-2.5 text-xs font-black shadow transition active:scale-95 cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Google Maps (App)
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        openWazeApp(
                          `${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`
                        )
                      }
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-2.5 text-xs font-black shadow transition active:scale-95 cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Waze (App)
                    </button>
                  </div>
                </div>
              )}

              {/* Action Impression Ticket */}
              <div className="pt-2">
                <button
                  onClick={() => handleManualReprint(selectedOrder.id)}
                  disabled={printingOrderId === selectedOrder.id}
                  className="w-full rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] disabled:opacity-60 text-white py-3.5 px-4 text-sm font-black transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <Printer className="w-5 h-5" />
                  <span>Imprimer Ticket Thermique (80mm)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── MODALE MISE EN PAUSE RUSH ────────────────────────────────── */}
        {showRushModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            <div className="w-full max-w-md rounded-3xl bg-[#142822] border border-white/15 p-6 space-y-4 text-white text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                <Pause className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-black">Activer la Pause Rush Cuisine</h3>
              <p className="text-xs text-[#8ea39b] leading-relaxed">
                Les clients verront un bandeau dynamique avec le temps restant avant réouverture. Les commandes en cours ne sont pas affectées.
              </p>

              <div className="grid gap-2.5 pt-2">
                <button
                  onClick={() => handleSetRushPause(10)}
                  className="w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition"
                >
                  ⏸️ Pause 10 Minutes
                </button>
                <button
                  onClick={() => handleSetRushPause(20)}
                  className="w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition"
                >
                  ⏸️ Pause 20 Minutes
                </button>
                <button
                  onClick={() => handleSetRushPause(30)}
                  className="w-full rounded-2xl bg-gradient-to-r from-amber-600 to-[#ea580c] py-3 text-sm font-black uppercase text-white shadow hover:scale-[1.02] active:scale-98 transition"
                >
                  ⏸️ Pause 30 Minutes
                </button>
              </div>

              <button
                onClick={() => setShowRushModal(false)}
                className="mt-2 text-xs text-[#8ea39b] hover:text-white underline"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ── Composant Colonne Kanban ──
interface ColumnProps {
  title: string;
  badgeCount: number;
  color: string;
  orders: Order[];
  onSelect: (o: Order) => void;
  onReprint: (id: string) => void;
  onAcceptOrder?: (o: Order) => void;
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
  onAcceptOrder,
  onNextStatus,
  nextLabel,
  nextIcon,
}: ColumnProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-[#142822] border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between p-3.5 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${color}`} />
          <h2 className="text-sm font-black tracking-wide text-white">{title}</h2>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-black text-white">
          {badgeCount}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5">
        {orders.length === 0 ? (
          <div className="flex h-32 items-center justify-center text-xs font-bold text-[#62776f]">
            Aucune commande
          </div>
        ) : (
          orders.map((o) => {
            const isUnaccepted = !o.acceptedAt && ["paid", "awaiting_pickup", "awaiting_delivery"].includes(o.status);

            return (
              <div
                key={o.id}
                onClick={() => onSelect(o)}
                className={`rounded-2xl p-3.5 shadow transition cursor-pointer space-y-2.5 border ${
                  isUnaccepted
                    ? "bg-red-950/40 border-red-500/60 ring-2 ring-red-500/40 animate-pulse"
                    : "bg-black/40 border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-black text-white">{o.id}</span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase text-[#8ea39b]">
                    {o.customer.requestedTime}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-black text-white">{o.customer.name}</p>
                    {o.delayMinutes && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                        +{o.delayMinutes}m
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-[#8ea39b]">
                    {o.items.reduce((acc, it) => acc + it.quantity, 0)} articles · {o.total.toFixed(2)} €
                  </p>
                </div>

                {o.customer.notes && (
                  <p className="text-xs bg-[#ff705f]/15 p-2 rounded-xl text-[#ff8e80] line-clamp-1 font-bold">
                    ! {o.customer.notes}
                  </p>
                )}

                {/* Actions sur la carte */}
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

                  {isUnaccepted && onAcceptOrder ? (
                    <button
                      onClick={() => onAcceptOrder(o)}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2 text-xs font-black text-white active:scale-95 transition shadow-lg animate-pulse"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>ACCEPTER</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onNextStatus(o.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff705f] py-2 text-xs font-black text-white hover:bg-[#ff5a47] active:scale-95 transition"
                    >
                      {nextIcon}
                      <span>{nextLabel}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
