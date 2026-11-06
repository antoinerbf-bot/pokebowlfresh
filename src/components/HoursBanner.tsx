import React, { useEffect, useState } from "react";
import { Clock, Truck, Sparkles, Moon, AlertCircle } from "lucide-react";
import { getServiceSchedule, formatCountdown, type ServiceScheduleInfo } from "../lib/opening-hours";
import { useTranslation } from "../context/I18nContext";

export function HoursBanner({ compact = false }: { compact?: boolean }) {
  const { language } = useTranslation();
  const [schedule, setSchedule] = useState<ServiceScheduleInfo>(() => getServiceSchedule());

  useEffect(() => {
    const interval = setInterval(() => {
      setSchedule(getServiceSchedule());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentMsg = schedule.messages[language as "fr" | "en" | "nl"] || schedule.messages.fr;

  if (compact) {
    return (
      <div className={`px-3 py-1.5 text-[11px] font-bold flex flex-wrap items-center justify-between gap-2 border-b transition-colors ${
        schedule.status === "open"
          ? "bg-emerald-50 text-emerald-900 border-emerald-200"
          : schedule.status === "before_opening"
          ? "bg-[#FFF4E5] text-[#8C3B00] border-[#FFD8A8]"
          : "bg-slate-100 text-slate-800 border-slate-200"
      }`}>
        <div className="flex items-center gap-1.5">
          {schedule.status === "open" ? (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          ) : schedule.status === "before_opening" ? (
            <Clock className="h-3.5 w-3.5 text-[#ea580c]" />
          ) : (
            <Moon className="h-3.5 w-3.5 text-slate-500" />
          )}
          <span>{currentMsg}</span>
        </div>

        {schedule.status === "before_opening" && (
          <div className="flex items-center gap-1 text-[11px] font-black text-[#ea580c]">
            <span>Ouverture dans :</span>
            <span className="font-mono bg-white/80 px-2 py-0.5 rounded-md border border-[#ea580c]/30">
              {formatCountdown(schedule.secondsUntilOrderOpen)}
            </span>
          </div>
        )}

        <div className="text-[10px] text-black/60 hidden sm:block">
          Livraisons 18h00 – 20h30 · Pas de livraison le midi
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full rounded-2xl border-2 p-3 sm:p-4 transition-all shadow-xs ${
      schedule.status === "open"
        ? "border-emerald-300 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 text-emerald-950"
        : schedule.status === "before_opening"
        ? "border-[#ea580c]/40 bg-gradient-to-r from-[#FFF6E8] via-[#FFFDF9] to-[#FFF4E5] text-[#2C1D16]"
        : "border-slate-300 bg-slate-50 text-slate-900"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg shadow-2xs ${
            schedule.status === "open"
              ? "bg-emerald-600 text-white"
              : schedule.status === "before_opening"
              ? "bg-[#ea580c] text-white"
              : "bg-slate-700 text-white"
          }`}>
            {schedule.status === "open" ? "🥢" : schedule.status === "before_opening" ? "⏳" : "🌙"}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                schedule.status === "open"
                  ? "bg-emerald-600 text-white"
                  : schedule.status === "before_opening"
                  ? "bg-[#2C1D16] text-[#EADCC9]"
                  : "bg-slate-600 text-white"
              }`}>
                {schedule.status === "open"
                  ? "Commandes Ouvertes"
                  : schedule.status === "before_opening"
                  ? "Ouverture ce soir à 17h30"
                  : "Fermé pour aujourd'hui"}
              </span>

              <span className="text-[11px] font-bold text-[#7A6857]">
                🛵 Livraisons 18h00 – 20h30 (aucune livraison le midi)
              </span>
            </div>

            <p className="mt-1 text-xs sm:text-sm font-black text-[#2C1D16]">
              {currentMsg}
            </p>
          </div>
        </div>

        {schedule.status === "before_opening" && (
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0 rounded-xl bg-white border border-[#ea580c]/30 px-3 py-1.5 shadow-2xs">
            <span className="text-[10px] font-black uppercase text-[#7A6857]">Compte à rebours :</span>
            <span className="font-mono text-sm sm:text-base font-black text-[#ea580c]">
              {formatCountdown(schedule.secondsUntilOrderOpen)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

