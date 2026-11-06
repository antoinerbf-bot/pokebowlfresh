import React, { useEffect, useState } from "react";
import { AlertCircle, Clock, Sparkles } from "lucide-react";
import { useTranslation } from "../context/I18nContext";

export interface RushState {
  isPaused: boolean;
  pause: {
    id: string;
    startedAt: string;
    durationMinutes: number;
    endsAt: string;
    messages: {
      fr: string;
      en: string;
      nl: string;
    };
  } | null;
  remainingSeconds: number;
}

export function useRushState(): RushState {
  const [rush, setRush] = useState<RushState>({
    isPaused: false,
    pause: null,
    remainingSeconds: 0,
  });

  useEffect(() => {
    let cancelled = false;

    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/rush-status", {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          const data = (await res.json()) as RushState;
          if (!cancelled) {
            setRush(data);
          }
        }
      } catch {}
    };

    fetchStatus();
    // Polling dynamique : toutes les 4s si pause active, sinon 15s
    const pollInterval = setInterval(fetchStatus, rush.isPaused ? 4000 : 15000);

    return () => {
      cancelled = true;
      clearInterval(pollInterval);
    };
  }, [rush.isPaused]);

  // Décompte local chaque seconde si en pause
  useEffect(() => {
    if (!rush.isPaused || !rush.pause?.endsAt) return;

    const interval = setInterval(() => {
      const remaining = Math.max(
        0,
        Math.ceil((new Date(rush.pause!.endsAt).getTime() - Date.now()) / 1000)
      );
      if (remaining === 0) {
        // Temps écoulé : forcer rechargement immédiat
        setRush((prev) => ({ ...prev, isPaused: false, remainingSeconds: 0 }));
      } else {
        setRush((prev) => ({ ...prev, remainingSeconds: remaining }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rush.isPaused, rush.pause?.endsAt]);

  return rush;
}

export function formatRushCountdown(seconds: number): string {
  if (seconds <= 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${pad(m)}:${pad(s)}`;
}

export function RushPauseBanner() {
  const rush = useRushState();
  const { language } = useTranslation();

  if (!rush.isPaused || !rush.pause) {
    return null;
  }

  // Si on est sur le POS, ne pas afficher ce bandeau client
  if (typeof window !== "undefined" && window.location.pathname.startsWith("/pos")) {
    return null;
  }

  const msg =
    rush.pause.messages?.[language as "fr" | "en" | "nl"] ||
    rush.pause.messages?.fr ||
    "Notre cuisine est actuellement en plein rush. Les nouvelles commandes reprennent très bientôt.";

  return (
    <aside
      aria-live="polite"
      className="sticky top-0 z-50 w-full border-b-2 border-amber-400 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 py-3 text-white shadow-lg animate-fade-in"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs shadow-inner">
            <Clock className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
              </span>
              <span>Pause Momentanée · Plein Rush</span>
            </div>
            <p className="mt-0.5 text-xs sm:text-sm font-extrabold text-white leading-snug">
              {msg}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-black/30 border border-white/20 px-4 py-2 backdrop-blur-md shrink-0">
          <span className="text-[10px] font-black uppercase text-amber-200">
            Reprise dans :
          </span>
          <span className="font-mono text-xl sm:text-2xl font-black tracking-widest text-white">
            {formatRushCountdown(rush.remainingSeconds)}
          </span>
        </div>
      </div>
    </aside>
  );
}

