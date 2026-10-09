import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, Sparkles, ArrowRight, Flame } from "lucide-react";
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
    tagColor: "bg-[#8b5510] text-white",
    title: "Crousty Chicken Curry",
    desc: "Poulet ultra croustillant doré, sauce curry maison & oignons frits. Boisson 33cl incluse !",
    dishId: "crousty-chicken-curry",
    price: "11,00 €",
    badgeEmoji: "🍗",
    productId: "crousty-chicken-curry",
  },
  {
    id: "crousty-blanche",
    tag: "Nouveau au Menu",
    tagColor: "bg-[#10251f] text-white",
    title: "Crousty Sauce Blanche",
    desc: "Petits morceaux de poulet croustillant dorés, sauce blanche onctueuse et oignons frits croquants.",
    dishId: "crousty-chicken-sauce-blanche",
    price: "11,00 €",
    badgeEmoji: "🤍",
    productId: "crousty-chicken-sauce-blanche",
  },
  {
    id: "etudiant-deal",
    tag: "Formule Étudiant",
    tagColor: "bg-[#d7ff45] text-[#10251f]",
    title: "Formule Crousty Chicken à 11 €",
    desc: "1 Crousty Chicken au choix + 1 boisson 33cl offerte incluse (Coca, Ice-Tea, Fanta...).",
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
    }, 3500);

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
      }, 9000);

      return () => clearTimeout(nextTimer);
    }, 7000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isHovered, isDismissed]);

  const activeNotif = NOTIFICATIONS[currentIndex];

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for 45s if manually closed
    setIsDismissed(true);
    setTimeout(() => setIsDismissed(false), 45000);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-[370px] pointer-events-none sm:bottom-6 sm:left-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto relative overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]"
          >
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#d7ff45]/20 blur-2xl pointer-events-none" />

            {/* Close button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Fermer la notification"
              className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[#10251f]/60 hover:bg-black/10 hover:text-[#10251f] transition"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-start gap-3.5 pr-5">
              {/* Dish Thumbnail */}
              <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] border border-black/5 shadow-sm">
                <DishImage
                  dishId={activeNotif.dishId}
                  alt={activeNotif.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] shadow-sm">
                  {activeNotif.badgeEmoji}
                </span>
              </div>

              {/* Text & Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${activeNotif.tagColor}`}
                  >
                    <Flame className="h-2.5 w-2.5" />
                    {activeNotif.tag}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#8b5510]">
                    {activeNotif.price}
                  </span>
                </div>

                <h4 className="mt-1 text-sm font-extrabold text-[#10251f] leading-snug">
                  {activeNotif.title}
                </h4>

                <p className="mt-0.5 text-[11px] leading-relaxed text-[#68756f] line-clamp-2">
                  {activeNotif.desc}
                </p>

                {/* Quick Action Button */}
                <div className="mt-2.5 flex items-center justify-between">
                  <Link
                    to="/product/$productId"
                    params={{ productId: activeNotif.productId }}
                    onClick={() => setIsVisible(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f] hover:scale-105"
                  >
                    <span>Commander ({activeNotif.price})</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  <span className="text-[9px] font-bold text-[#7d8b83]">
                    Boisson incluse
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle bottom progress bar */}
            <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-black/5">
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
