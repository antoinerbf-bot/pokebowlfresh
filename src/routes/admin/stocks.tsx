import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, RefreshCw, Shield } from "lucide-react";
import { catalogLabels, type StockSnapshot } from "../../lib/stock";
import { getStock, resetStock, setStockItem } from "../../server/stock";

export const Route = createFileRoute("/admin/stocks")({
  component: AdminStocksPage,
});

const PIN_KEY = "pnb_stock_pin";

function AdminStocksPage() {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [stock, setStock] = useState<StockSnapshot | null>(null);
  const [persistent, setPersistent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "bowl" | "drink" | "dessert" | "topping">("all");

  const catalog = useMemo(() => catalogLabels(), []);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getStock();
      setStock(res.stock);
      setPersistent(res.persistent);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(PIN_KEY);
    if (saved) {
      setPin(saved);
      setUnlocked(true);
    }
    void load();
    const interval = window.setInterval(() => void load(), 15000);
    return () => window.clearInterval(interval);
  }, [load]);

  const unlock = () => {
    if (!pin.trim()) return;
    sessionStorage.setItem(PIN_KEY, pin.trim());
    setUnlocked(true);
  };

  const toggle = async (id: string, available: boolean) => {
    if (!unlocked) return;
    setSavingId(id);
    setError(null);
    try {
      const res = await setStockItem({
        data: { pin: pin.trim(), id, available },
      });
      setStock(res.stock);
      setPersistent(res.persistent);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de sauvegarde");
      if (e instanceof Error && e.message.includes("incorrect")) {
        setUnlocked(false);
        sessionStorage.removeItem(PIN_KEY);
      }
    } finally {
      setSavingId(null);
    }
  };

  const handleReset = async () => {
    if (!unlocked || !confirm("Tout remettre disponible ?")) return;
    setLoading(true);
    try {
      const res = await resetStock({ data: { pin: pin.trim() } });
      setStock(res.stock);
      setPersistent(res.persistent);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setLoading(false);
    }
  };

  const rows = catalog.filter((c) => filter === "all" || c.group === filter);

  const groupLabel = {
    bowl: "Bowls",
    drink: "Boissons",
    dessert: "Desserts",
    topping: "Toppings",
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#ff705f]" />
            <h1 className="text-lg font-black">Stocks — Poke N Bowl</h1>
          </div>
          <button
            type="button"
            onClick={() => void load()}
            className="inline-flex items-center gap-2 rounded-full bg-[#10251f] px-3 py-2 text-xs font-bold text-white"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            Actualiser
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8">
        {!unlocked ? (
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#758079]">
              Entre le code admin pour modifier les stocks (variable d’environnement{" "}
              <code className="rounded bg-[#f0f1ea] px-1">STOCK_ADMIN_PIN</code>, défaut{" "}
              <code className="rounded bg-[#f0f1ea] px-1">vise2026</code>).
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && unlock()}
                placeholder="Code admin"
                className="flex-1 rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
              />
              <button
                type="button"
                onClick={unlock}
                className="rounded-xl bg-[#ff705f] px-5 py-3 text-sm font-black text-white"
              >
                OK
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {(["all", "bowl", "drink", "dessert", "topping"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide ${
                    filter === f ? "bg-[#10251f] text-white" : "bg-white text-[#758079]"
                  }`}
                >
                  {f === "all" ? "Tout" : groupLabel[f]}
                </button>
              ))}
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-xs">
              <span>
                Stockage :{" "}
                <strong className={persistent ? "text-green-700" : "text-amber-700"}>
                  {persistent ? "Redis (temps réel partagé)" : "Mémoire (temporaire)"}
                </strong>
              </span>
              <button type="button" onClick={() => void handleReset()} className="font-bold text-[#ff705f]">
                Tout réactiver
              </button>
            </div>

            {!persistent && (
              <p className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                Pour un stock <strong>vraiment partagé en temps réel</strong> entre tous les clients,
                branche <strong>Upstash Redis</strong> (gratuit) sur Vercel — voir instructions en bas.
              </p>
            )}

            {error && (
              <p className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <div className="space-y-2">
              {rows.map((row) => {
                const entry = stock?.items[row.id];
                const available = entry?.available !== false && !(entry?.qty != null && entry.qty <= 0);
                return (
                  <div
                    key={row.id}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">{row.label}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#9aa39c]">
                        {groupLabel[row.group]}
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={savingId === row.id}
                      onClick={() => void toggle(row.id, !available)}
                      className={`shrink-0 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition ${
                        available
                          ? "bg-[#d7ff45] text-[#10251f]"
                          : "bg-[#ff705f]/15 text-[#ff705f]"
                      }`}
                    >
                      {savingId === row.id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : available ? (
                        "Dispo"
                      ) : (
                        "Épuisé"
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-black/5 bg-white p-5 text-xs leading-relaxed text-[#758079]">
              <p className="font-black text-[#17231f]">Activer Redis (recommandé)</p>
              <ol className="mt-2 list-decimal space-y-1 pl-4">
                <li>Vercel → projet pokebowlfresh → Storage / Marketplace → Upstash Redis (gratuit)</li>
                <li>
                  Variables créées : <code>UPSTASH_REDIS_REST_URL</code> +{" "}
                  <code>UPSTASH_REDIS_REST_TOKEN</code>
                </li>
                <li>
                  Optionnel : <code>STOCK_ADMIN_PIN</code> = ton code secret
                </li>
                <li>Redéploie le site</li>
              </ol>
              <p className="mt-3">
                Dernière MAJ : {stock?.updatedAt ? new Date(stock.updatedAt).toLocaleString("fr-BE") : "—"}
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
