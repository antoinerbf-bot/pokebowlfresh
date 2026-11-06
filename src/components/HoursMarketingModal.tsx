import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, X, Sparkles, Truck, CheckCircle2, Moon, UtensilsCrossed } from "lucide-react";
import { getServiceSchedule, formatCountdown, type ServiceScheduleInfo } from "../lib/opening-hours";
import { useTranslation } from "../context/I18nContext";

export function HoursMarketingModal() {
  const { language } = useTranslation();
  const [schedule, setSchedule] = useState<ServiceScheduleInfo>(() => getServiceSchedule());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Vérifier si le modal a déjà été fermé lors de cette session
    const hasDismissed = typeof window !== "undefined" && sessionStorage.getItem("pnb_hours_popup_seen");
    if (!hasDismissed) {
      // Petite temporisation de 1,2s pour ne pas surprendre immédiatement l'utilisateur
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Rafraîchissement chaque seconde pour le compte à rebours en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setSchedule(getServiceSchedule());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pnb_hours_popup_seen", "true");
    }
  };

  if (!isOpen) return null;

  const currentMsg = schedule.messages[language as "fr" | "en" | "nl"] || schedule.messages.fr;
  const currentSub = schedule.subMessages[language as "fr" | "en" | "nl"] || schedule.subMessages.fr;
  const deliveryNote = schedule.deliveryNotice[language as "fr" | "en" | "nl"] || schedule.deliveryNotice.fr;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] text-[#2C1D16] shadow-2xl transition-all animate-scale-up"
        role="dialog"
        aria-modal="true"
        aria-label="Horaires et disponibilité Poke N Bowl"
      >
        {/* Bouton fermeture discret & élégant */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#2C1D16] hover:bg-black/10 hover:text-black transition active:scale-95 cursor-pointer"
          aria-label="Fermer la fenêtre d'information"
        >
          <X className="h-4 w-4 stroke-[2.5]" />
        </button>

        {/* Bannière d'en-tête dynamique */}
        <div className={`p-6 text-white text-center relative ${
          schedule.status === "open"
            ? "bg-gradient-to-br from-[#059669] to-[#047857]"
            : schedule.status === "before_opening"
            ? "bg-gradient-to-br from-[#2C1D16] via-[#ea580c] to-[#2C1D16]"
            : "bg-gradient-to-br from-[#1E293B] to-[#0F172A]"
        }`}>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider backdrop-blur-xs mb-3">
            {schedule.status === "open" ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Commandes Actuellement Ouvertes</span>
              </>
            ) : schedule.status === "before_opening" ? (
              <>
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Ouverture ce soir à 17h40</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-slate-300" />
                <span>Service Terminé pour Aujourd'hui</span>
              </>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black leading-tight text-white px-4">
            {currentMsg}
          </h2>

          {/* Compte à rebours dynamique si fermé */}
          {schedule.status === "before_opening" && (
            <div className="mt-4 inline-flex flex-col items-center rounded-2xl bg-black/30 border border-white/20 px-5 py-2.5 backdrop-blur-md">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/70">
                Ouverture des prises de commandes dans :
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-widest text-amber-300 font-mono mt-0.5">
                {formatCountdown(schedule.secondsUntilOrderOpen)}
              </span>
            </div>
          )}
        </div>

        {/* Corps des informations officielles */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-[#7A6857] leading-relaxed text-center font-medium">
            {currentSub}
          </p>

          <div className="rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] p-4 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#DECBB3]/40">
              <span className="font-bold text-[#7A6857] flex items-center gap-1.5">
                <UtensilsCrossed className="h-3.5 w-3.5 text-[#ea580c]" />
                Prise de commande en ligne :
              </span>
              <span className="font-black text-[#2C1D16] bg-black/5 px-2.5 py-0.5 rounded-full">
                Dès 17h40
              </span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#DECBB3]/40">
              <span className="font-bold text-[#7A6857] flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-[#059669]" />
                Livraisons à domicile (19 zones) :
              </span>
              <span className="font-black text-[#059669] bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                18h00 – 20h30
              </span>
            </div>

            <div className="flex items-center justify-between text-[#8E4539] font-bold text-[11px] pt-0.5">
              <span>⚠️ Aucune livraison le midi</span>
              <span>Service exclusif du soir</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <Link
              to="/commander"
              onClick={handleDismiss}
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] hover:bg-[#ea580c] py-3.5 px-5 text-sm font-black text-white shadow-md transition active:scale-95 text-center cursor-pointer"
            >
              <span>{schedule.status === "open" ? "Commander maintenant" : "Préparer ma commande"}</span>
              <Sparkles className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={handleDismiss}
              className="flex items-center justify-center rounded-full border-2 border-[#DECBB3] bg-[#FFFDF9] hover:bg-[#FAF5EE] py-3 px-5 text-xs font-bold text-[#7A6857] transition cursor-pointer"
            >
              J'ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

