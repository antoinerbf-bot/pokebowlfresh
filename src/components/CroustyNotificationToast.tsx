import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, Flame } from "lucide-react";
import { DishImage } from "./DishImage";

interface ToastNotification {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  dishId: string;
  price: string;
  badgeEmoji: string;
  productId: string;
}

const NOTIFICATIONS: ToastNotification[] = [
  {
    id: "crousty-curry",
    tag: "Spécialité Chaude",
    tagColor: "bg-[#8b5510]/80 text-[#ffe2a8] border border-[#ffaa33]/30",
    title: "Crousty Chicken Curry",
    desc: "Poulet croustillant doré, curry maison & oignons frits. Boisson 33cl incluse !",
    dishId: "crousty-chicken-curry",
    price: "11,00 €",
    badgeEmoji: "🍗",
    productId: "crousty-chicken-curry",
  },
  {
    id: "crousty-blanche",
    tag: "Nouveau au Menu",
    tagColor: "bg-white/10 text-[#F6F1E9] border border-white/20",
    title: "Crousty Sauce Blanche",
    desc: "Bouchées croustillantes dorées, sauce blanche onctueuse & oignons frits.",
    dishId: "crousty-chicken-sauce-blanche",
    price: "11,00 €",
    badgeEmoji: "🤍",
    productId: "crousty-chicken-sauce-blanche",
  },
  {
    id: "etudiant-deal",
    tag: "Formule Étudiant",
    tagColor: "bg-[#ff705f]/20 text-[#ffb0a3] border border-[#ff705f]/40",
    title: "Menu Crousty + Boisson 11 €",
    desc: "1 Crousty Chicken chaud au choix + boisson 33cl fraîche incluse (Coca, Ice-Tea...).",
    dishId: "crousty-chicken-curry",
    price: "11,00 €",
    badgeEmoji: "🎓",
    productId: "crousty-chicken-curry",
  },
];

export function CroustyNotificationToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial appearance after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (!isVisible || isHovered) return;

    // Auto-hide after 7 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Re-appear with next notification after 10 seconds
      const nextTimer = setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
          setIsVisible(true);
        }
      }, 10000);

      return () => clearTimeout(nextTimer);
    }, 7000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isHovered, isDismissed]);

  const activeNotif = NOTIFICATIONS[currentIndex];

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    // Don't show again for 60s if manually closed
    setIsDismissed(true);
    setTimeout(() => setIsDismissed(false), 60000);
  };

  return (
    /* Positionné à DROITE sur PC (sm:right-6 sm:bottom-6 sm:left-auto), discret et compact sur mobile */
    <div className="fixed bottom-4 right-3 z-40 max-w-[calc(100vw-24px)] pointer-events-none sm:bottom-6 sm:right-6 sm:max-w-[340px]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.92 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            /* Fond transparent / glassmorphism sombre chaleureux (pas de blanc opaque !) */
            className="pointer-events-auto relative overflow-hidden rounded-2xl border border-white/15 bg-[#231711]/85 p-3 sm:p-4 text-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl transition hover:border-[#ff705f]/40 hover:bg-[#231711]/92"
          >
            {/* Lueur d'ambiance chaude et discrète */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#ff705f]/20 blur-xl pointer-events-none" />

            {/* Bouton fermeture discret */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Fermer la notification"
              className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
            >
              <X className="h-3 w-3" />
            </button>

            {/* ── Version Mobile Compacte (Non intrusive, pas de gros bloc en plein milieu) ── */}
            <div className="flex sm:hidden items-center gap-2.5 pr-6">
              <Link
                to="/product/$productId"
                params={{ productId: activeNotif.productId }}
                onClick={() => setIsVisible(false)}
                className="flex items-center gap-2.5 flex-1 min-w-0"
              >
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-black/20 border border-white/10 shadow-sm">
                  <DishImage
                    dishId={activeNotif.dishId}
                    alt={activeNotif.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute -bottom-1 -right-1 text-[10px]">
                    {activeNotif.badgeEmoji}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-black text-white truncate">
                      {activeNotif.title}
                    </span>
                    <span className="text-[10px] font-extrabold text-[#ff9f43]">
                      {activeNotif.price}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#D9C5AD] flex items-center gap-1">
                    <span>Boisson 33cl incluse</span>
                    <span className="text-[#ff705f] font-bold">→ Voir</span>
                  </p>
                </div>
              </Link>
            </div>

            {/* ── Version Desktop Complète & Épurée ── */}
            <div className="hidden sm:flex items-start gap-3 pr-4">
              {/* Vignette Plat */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-black/30 border border-white/10 shadow-sm">
                <DishImage
                  dishId={activeNotif.dishId}
                  alt={activeNotif.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#231711] text-[9px] border border-white/20">
                  {activeNotif.badgeEmoji}
                </span>
              </div>

              {/* Texte & Prix */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider ${activeNotif.tagColor}`}
                  >
                    <Flame className="h-2.5 w-2.5 text-[#ff705f]" />
                    {activeNotif.tag}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#ffb088]">
                    {activeNotif.price}
                  </span>
                </div>

                <h4 className="mt-1 text-xs font-black text-[#F6F1E9] leading-snug">
                  {activeNotif.title}
                </h4>

                <p className="mt-0.5 text-[10.5px] leading-relaxed text-[#D9C5AD]/85 line-clamp-2">
                  {activeNotif.desc}
                </p>

                {/* Bouton d'action */}
                <div className="mt-2 flex items-center justify-between">
                  <Link
                    to="/product/$productId"
                    params={{ productId: activeNotif.productId }}
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#ff705f] px-3 py-1 text-[9.5px] font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff5542] hover:scale-105"
                  >
                    <span>Commander ({activeNotif.price})</span>
                    <ArrowRight className="h-2.5 w-2.5" />
                  </Link>

                  <span className="text-[9px] font-semibold text-[#D9C5AD]/70">
                    Boisson incluse
                  </span>
                </div>
              </div>
            </div>

            {/* Barre de progression fluide */}
            <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-[#ff705f]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
