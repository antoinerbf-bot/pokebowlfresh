import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight } from "lucide-react";
import { DishImage } from "./DishImage";
import { useTranslation } from "@/context/I18nContext";

/**
 * Suggestion gourmande discrète (Crousty Chicken · Formule Étudiant midi).
 *
 * Règles UX :
 * - N'apparaît jamais au chargement : il faut que le visiteur ait fait défiler
 *   au-delà du hero ET qu'au moins 15 s se soient écoulées.
 * - Reste visible 8 s (pause au survol / au toucher), puis disparaît.
 * - 2 affichages maximum par session, espacés d'au moins 60 s.
 * - Un clic sur ✕ la masque pour toute la session.
 * - Mobile : petite barre compacte posée au-dessus de la barre "Commander",
 *   ne masque jamais le contenu principal.
 */

interface Suggestion {
  id: string;
  title: string;
  subtitleKey: string;
  price: string;
  productId: string;
}

const SUGGESTIONS: Suggestion[] = [
  {
    id: "crousty-curry",
    title: "Crousty Chicken Curry",
    subtitleKey: "toast.curry_sub",
    price: "11 €",
    productId: "crousty-chicken-curry",
  },
  {
    id: "crousty-blanche",
    title: "Crousty Sauce Blanche",
    subtitleKey: "toast.white_sub",
    price: "11 €",
    productId: "crousty-chicken-sauce-blanche",
  },
];

const SESSION_KEY = "pnb_crousty_toast";
const FIRST_DELAY_MS = 15000;
const VISIBLE_MS = 8000;
const GAP_MS = 60000;
const MAX_SHOWS = 2;

type ToastSession = { shows: number; dismissed: boolean };

function readSession(): ToastSession {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw) as ToastSession;
  } catch {
    /* sessionStorage indisponible : on garde les valeurs par défaut */
  }
  return { shows: 0, dismissed: false };
}

function writeSession(s: ToastSession) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function CroustyNotificationToast() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  // Planifie un affichage si les conditions sont réunies
  const scheduleShow = (delay: number) => {
    const tId = window.setTimeout(() => {
      const session = readSession();
      if (session.dismissed || session.shows >= MAX_SHOWS) return;
      setIndex(session.shows % SUGGESTIONS.length);
      writeSession({ ...session, shows: session.shows + 1 });
      setIsVisible(true);
    }, delay);
    timers.current.push(tId);
  };

  // Premier affichage : seulement après défilement au-delà du hero + délai minimum
  useEffect(() => {
    const session = readSession();
    if (session.dismissed || session.shows >= MAX_SHOWS) return;

    const mountedAt = Date.now();
    let armed = false;

    const onScroll = () => {
      if (armed) return;
      if (window.scrollY > window.innerHeight * 0.9) {
        armed = true;
        window.removeEventListener("scroll", onScroll);
        const elapsed = Date.now() - mountedAt;
        scheduleShow(Math.max(2500, FIRST_DELAY_MS - elapsed));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Masquage automatique après VISIBLE_MS (sauf survol / toucher), puis 2e suggestion plus tard
  useEffect(() => {
    if (!isVisible || isPaused) return;
    const tId = window.setTimeout(() => {
      setIsVisible(false);
      scheduleShow(GAP_MS);
    }, VISIBLE_MS);
    timers.current.push(tId);
    return () => window.clearTimeout(tId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, isPaused]);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clearTimers();
    setIsVisible(false);
    writeSession({ ...readSession(), dismissed: true });
  };

  const onNavigate = () => {
    clearTimers();
    setIsVisible(false);
    writeSession({ ...readSession(), dismissed: true });
  };

  const s = SUGGESTIONS[index]!;

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-3 bottom-[5.5rem] z-30 flex justify-center md:inset-x-auto md:bottom-6 md:right-6 md:block md:w-[340px]"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={s.id}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            className="pointer-events-auto relative w-full max-w-[370px] overflow-hidden rounded-2xl border border-[#DECBB3] bg-[#FAF5EE]/95 text-[#2C1D16] shadow-[0_14px_40px_rgba(44,29,22,0.22)] backdrop-blur-xl"
          >
            <Link
              to="/product/$productId"
              params={{ productId: s.productId }}
              onClick={onNavigate}
              className="group flex items-center gap-3 p-2.5 pr-9 md:pr-10"
            >
              {/* Vignette du plat */}
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl md:h-14 md:w-14">
                <DishImage
                  dishId={s.productId}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5">
                  <span className="rounded-full bg-[#ff705f]/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#c0350f]">
                    {t("toast.student_badge")}
                  </span>
                  <span className="text-[11px] font-black text-[#2C1D16]">{s.price}</span>
                </span>
                <span className="mt-0.5 block truncate text-[13px] font-black leading-tight md:text-sm">
                  {s.title}
                </span>
                <span className="block truncate text-[10.5px] font-semibold text-[#7A6857] md:text-[11px]">
                  <span className="hidden md:inline">{t(s.subtitleKey)} · </span>{t("toast.drink_included")}
                </span>
              </span>

              <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] transition group-hover:bg-[#ff705f] group-hover:text-white sm:flex">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <button
              type="button"
              onClick={dismiss}
              aria-label={t("toast.dismiss_aria")}
              className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-[#7A6857] transition hover:bg-[#2C1D16]/10 hover:text-[#2C1D16]"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {/* Fine barre de temps restante */}
            {!reduceMotion && (
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: isPaused ? 1 : 0 }}
                transition={{ duration: isPaused ? 0.2 : VISIBLE_MS / 1000, ease: "linear" }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#ff705f] to-[#C87D4B]"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
