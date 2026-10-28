import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, Flame, Sparkles } from "lucide-react";
import { DishImage } from "./DishImage";

interface ToastNotification {
  id: string;
  tag: string;
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
    tag: "Formule Midi 11 €",
    title: "Crousty Chicken Curry",
    desc: "Barquette rectangulaire de poulet croustillant doré, sauce curry maison & oignons frits. Canette 33cl incluse uniquement le midi !",
    dishId: "crousty-chicken-curry",
    price: "11,00 €",
    badgeEmoji: "🍗",
    productId: "crousty-chicken-curry",
  },
  {
    id: "crousty-blanche",
    tag: "Formule Midi 11 €",
    title: "Crousty Sauce Blanche",
    desc: "Barquette rectangulaire de morceaux croustillants dorés, sauce blanche onctueuse & oignons frits. Canette 33cl incluse uniquement le midi !",
    dishId: "crousty-chicken-sauce-blanche",
    price: "11,00 €",
    badgeEmoji: "🤍",
    productId: "crousty-chicken-sauce-blanche",
  },
  {
    id: "etudiant-deal",
    tag: "Formule Étudiant · Midi uniquement",
    title: "Crousty + Canette 11 € (Le Midi)",
    desc: "1 Crousty Chicken chaud au choix + canette 33cl fraîche incluse : offre étudiant valable uniquement le midi.",
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

  // 1. Première apparition rapide après 1.8s au chargement
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 1800);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  // 2. Rythme fluide d'apparition / disparition (reste 6.5s, pause de 3.2s, puis plat suivant)
  useEffect(() => {
    if (!isVisible || isHovered) return;

    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Réapparaît avec le plat suivant après une courte pause de 3.2 secondes
      const nextTimer = setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
          setIsVisible(true);
        }
      }, 3200);

      return () => clearTimeout(nextTimer);
    }, 6500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isHovered, isDismissed]);

  const activeNotif = NOTIFICATIONS[currentIndex];

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    // Pause de 45 secondes si l'utilisateur ferme manuellement
    setIsDismissed(true);
    setTimeout(() => setIsDismissed(false), 45000);
  };

  return (
    <div className="fixed bottom-20 right-3 z-40 max-w-[calc(100vw-24px)] pointer-events-none sm:bottom-6 sm:right-6 sm:max-w-[370px]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.94 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            /* Carte gourmande avec bordure chaude et contraste lumineux très visible */
            className="pointer-events-auto relative overflow-hidden rounded-3xl border-2 border-[#ff705f]/50 bg-[#1e120b]/95 p-3.5 sm:p-4 text-white shadow-[0_22px_55px_rgba(0,0,0,0.8),0_0_35px_rgba(255,112,95,0.28)] backdrop-blur-2xl transition hover:border-[#ff705f] hover:shadow-[0_25px_65px_rgba(0,0,0,0.9),0_0_45px_rgba(255,112,95,0.4)]"
          >
            {/* Lueur d'ambiance chaude et diffuse */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#ff705f]/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#ffaa44]/20 blur-xl pointer-events-none" />

            {/* Bouton fermeture élégant */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Fermer la notification"
              className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/25 hover:text-white transition cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* En-tête : Badge Spécialité Chaude + Prix */}
            <div className="flex items-center gap-2 mb-2 pr-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/25 text-[#ffb4a6] border border-[#ff705f]/50 px-2.5 py-0.5 text-[9.5px] font-black uppercase tracking-wider">
                <Flame className="h-3 w-3 text-[#ff705f] animate-pulse" />
                <span>{activeNotif.tag}</span>
              </span>
              <span className="inline-flex items-center rounded-full bg-[#3a2012] border border-[#ffaa44]/40 px-2 py-0.5 text-[10.5px] font-black text-[#ffb055]">
                {activeNotif.price}
              </span>
            </div>

            {/* Contenu principal : Image appétissante + Titre + CTA */}
            <div className="flex items-start gap-3">
              {/* Photo du Crousty Chicken */}
              <Link
                to="/product/$productId"
                params={{ productId: activeNotif.productId }}
                onClick={() => setIsVisible(false)}
                className="group relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl bg-black/40 border-2 border-[#ff705f]/30 shadow-md"
              >
                <DishImage
                  dishId={activeNotif.dishId}
                  alt={activeNotif.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-1 right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#1e120b] text-[10px] sm:text-xs border border-white/20 shadow">
                  {activeNotif.badgeEmoji}
                </span>
              </Link>

              {/* Texte descriptif et bouton */}
              <div className="min-w-0 flex-1">
                <Link
                  to="/product/$productId"
                  params={{ productId: activeNotif.productId }}
                  onClick={() => setIsVisible(false)}
                  className="block group"
                >
                  <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-[#ff705f] transition leading-tight">
                    {activeNotif.title}
                  </h4>
                  <p className="mt-1 text-[10.5px] sm:text-[11px] leading-snug text-[#EADCC9] line-clamp-2">
                    {activeNotif.desc}
                  </p>
                </Link>

                {/* Bouton d'action et précision boisson */}
                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <Link
                    to="/product/$productId"
                    params={{ productId: activeNotif.productId }}
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff705f] to-[#ff523d] hover:from-[#ff5a47] hover:to-[#ff3d26] px-3.5 py-1.5 text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-white shadow-md shadow-[#ff705f]/30 transition hover:scale-105 active:scale-95"
                  >
                    <span>Commander ({activeNotif.price})</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <span className="text-[9px] sm:text-[9.5px] font-bold text-[#EADCC9]/80 hidden sm:inline">
                    🎓 Midi uniquement (canette incluse)
                  </span>
                </div>
              </div>
            </div>

            {/* Barre de progression fluide lumineuse */}
            <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 6.5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#ff705f] via-[#ffaa44] to-[#ff705f]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
