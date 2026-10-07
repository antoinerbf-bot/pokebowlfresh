import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { DishImage } from "./DishImage";

export interface ReelBowl {
  id: string;
  name: string;
  price: number;
  tag: string;
  tagColor: string;
  headline: string;
  description: string;
  highlights: string[];
}

const REEL_BOWLS: ReelBowl[] = [
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    tag: "Best-seller",
    tagColor: "#d7ff45",
    headline: "Poulet doré, mangue fraîche & teriyaki",
    description: "Vrais morceaux de filet de poulet grillés, riz basmati aérien, guacamole maison, mangue douce et oignons frits.",
    highlights: ["🍗 Poulet doré minute", "🥭 Mangue & Guacamole", "🍚 Riz basmati fin"],
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    tag: "Premium",
    tagColor: "#ff705f",
    headline: "Saumon sashimi & salade wakamé",
    description: "Cubes de saumon frais sashimi, avocat fondant, salade d'algues wakamé, edamame et touche onctueuse de mayo wasabi.",
    highlights: ["🐟 Saumon frais sashimi", "🥑 Avocat & Wakamé", "🟢 Mayo wasabi douce"],
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.00,
    tag: "Signature",
    tagColor: "#d7ff45",
    headline: "Scampis grillés & jalapeños croquants",
    description: "Scampis juteux saisis à la flamme, edamame, poivrons colorés, concombre frais et spicy mayo maison.",
    highlights: ["🦐 Scampis grillés flamme", "🌶️ Jalapeños & Spicy mayo", "🫘 Edamame croquant"],
  },
  {
    id: "mighty-gyros",
    name: "Mighty Gyros",
    price: 10.00,
    tag: "Signature",
    tagColor: "#f59e0b",
    headline: "Gyros artisanal & guacamole maison",
    description: "Émincé de gyros rôti aux épices douces, maïs croquant, tomates cerises juteuses, oignons rouges et flocons de chili.",
    highlights: ["🥙 Gyros rôti maison", "🥑 Guacamole frais", "🔥 Flocons de chili"],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.00,
    tag: "Épicé",
    tagColor: "#ff705f",
    headline: "Poulet mariné épicé & patates douces",
    description: "Morceaux de poulet marinés et dorés, cubes de patates douces rôties, jalapeños croquants, feta et sauce spicy.",
    highlights: ["🍗 Poulet épicé mariné", "🍠 Patates douces rôties", "🧀 Feta crémeuse"],
  },
];

const AUTOPLAY_DURATION_MS = 5000;

export function PokeCinematicReel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const currentBowl = REEL_BOWLS[currentIndex];

  // Auto-play timer
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REEL_BOWLS.length);
    }, AUTOPLAY_DURATION_MS);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REEL_BOWLS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REEL_BOWLS.length) % REEL_BOWLS.length);
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient glow matching current bowl */}
      <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-[#d7ff45]/15 via-transparent to-[#ff705f]/15 blur-2xl transition-all duration-1000 -z-10" />

      {/* Main Reel Card */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#10251f] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]">
        
        {/* Progress bars (Instagram/Apple style) */}
        <div className="absolute top-4 inset-x-5 z-30 flex gap-2">
          {REEL_BOWLS.map((bowl, index) => {
            const isActive = index === currentIndex;
            const isPassed = index < currentIndex;
            return (
              <button
                key={bowl.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20 transition hover:h-2"
                aria-label={`Aller au bowl ${bowl.name}`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#d7ff45]"
                      : isPassed
                      ? "bg-white/80"
                      : "bg-transparent"
                  }`}
                  style={{
                    width: isActive ? "100%" : isPassed ? "100%" : "0%",
                    transitionDuration: isActive && !isPaused ? `${AUTOPLAY_DURATION_MS}ms` : "300ms",
                    transitionTimingFunction: "linear",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Cinematic Media Stage */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#071713] sm:aspect-[16/11]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBowl.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full"
            >
              <DishImage
                dishId={currentBowl.id}
                alt={currentBowl.name}
                priority
                className="h-full w-full object-cover transition-transform duration-10000 ease-out hover:scale-105"
              />
              
              {/* Cinematic vignetting and glass overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-[#10251f]/20 to-black/35" />
            </motion.div>
          </AnimatePresence>

          {/* Top badges */}
          <div className="absolute top-10 left-5 right-5 z-20 flex items-center justify-between">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#10251f] shadow-md backdrop-blur-md"
              style={{ backgroundColor: currentBowl.tagColor }}
            >
              <Sparkles className="h-3 w-3" />
              {currentBowl.tag}
            </span>

            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-black text-white backdrop-blur-md border border-white/10">
              {currentBowl.price.toFixed(2)} €
            </span>
          </div>

          {/* Floating Fresh Ingredient highlights */}
          <div className="absolute bottom-4 left-5 right-5 z-20 hidden flex-wrap gap-2 sm:flex">
            {currentBowl.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Bowl précédent"
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Bowl suivant"
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Lower Info & Direct Action */}
        <div className="relative p-6 sm:p-7 bg-[#10251f] text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]">
                Recette officielle · Fait minute
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                {currentBowl.name}
              </h2>
              <p className="mt-1.5 text-xs text-white/70 line-clamp-2 max-w-md">
                {currentBowl.description}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                to="/product/$productId"
                params={{ productId: currentBowl.id }}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#ff705f] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white shadow-lg transition hover:bg-[#ff5542] hover:scale-105"
              >
                Personnaliser
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Selector Pills */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-white/10 no-scrollbar">
            {REEL_BOWLS.map((bowl, idx) => (
              <button
                key={bowl.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`shrink-0 rounded-xl px-3 py-1.5 text-[10px] font-black uppercase tracking-wider transition ${
                  idx === currentIndex
                    ? "bg-white text-[#10251f] shadow"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {bowl.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
