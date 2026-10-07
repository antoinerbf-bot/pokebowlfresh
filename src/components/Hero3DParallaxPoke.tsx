import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Star,
  Check,
  Flame,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DishImage } from "@/components/DishImage";

interface FloatingIngredient {
  name: string;
  emoji: string;
  x: string;
  y: string;
  depth: number;
}

interface HeroDish {
  id: string;
  name: string;
  price: number;
  grandPrice: number;
  tag: string;
  tagColor: string;
  glowColor: string;
  tasteProfile: string;
  description: string;
  freshCuts: string[];
  floatingIngredients: FloatingIngredient[];
  isHotCombo?: boolean;
}

const HERO_DISHES: HeroDish[] = [
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.0,
    grandPrice: 13.0,
    tag: "Best-Seller ⭐",
    tagColor: "#d7ff45",
    glowColor: "rgba(215, 255, 69, 0.22)",
    tasteProfile: "Doux, fruité & umami caramélisé",
    description:
      "Morceaux tendres de poulet mariné doré, mangue mûre juteuse, avocat crémeux, maïs croquant, feta et nappage teriyaki brillant sur riz à sushi.",
    freshCuts: ["Poulet doré mariné", "Avocat Hass mûr", "Mangue juteuse", "Feta émiettée", "Sauce Teriyaki"],
    floatingIngredients: [
      { name: "Poulet Mariné Doré", emoji: "🍗", x: "-8%", y: "14%", depth: 45 },
      { name: "Avocat Hass Crémeux", emoji: "🥑", x: "82%", y: "18%", depth: 55 },
      { name: "Mangue Mûre Juteuse", emoji: "🥭", x: "-6%", y: "70%", depth: 38 },
      { name: "Oignons Croustillants", emoji: "🧅", x: "80%", y: "68%", depth: 48 },
      { name: "Graines Sésame Toastées", emoji: "🌱", x: "42%", y: "88%", depth: 30 },
    ],
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.0,
    grandPrice: 14.0,
    tag: "Coup de Cœur Sashimi ✦",
    tagColor: "#ff705f",
    glowColor: "rgba(255, 112, 95, 0.25)",
    tasteProfile: "Ultra-frais, fondant avec un kick wasabi maîtrisé",
    description:
      "Épais dés de saumon atlantique sashimi frais coupés chaque matin, avocat, salade d'algues wakame, mangue, edamame et notre mayo wasabi onctueuse.",
    freshCuts: ["Saumon Atlantique frais", "Salade Wakame", "Avocat fondant", "Edamame vapeur", "Mayo Wasabi"],
    floatingIngredients: [
      { name: "Saumon Sashimi Frais", emoji: "🐟", x: "-8%", y: "14%", depth: 55 },
      { name: "Avocat Hass Découpé", emoji: "🥑", x: "82%", y: "18%", depth: 40 },
      { name: "Salade Wakame Iodée", emoji: "🌿", x: "-6%", y: "70%", depth: 50 },
      { name: "Edamame Croquant", emoji: "🫘", x: "80%", y: "68%", depth: 35 },
      { name: "Mayo Wasabi Veloutée", emoji: "🟢", x: "42%", y: "88%", depth: 45 },
    ],
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.0,
    grandPrice: 13.0,
    tag: "Saisi au Grill 🦐",
    tagColor: "#d7ff45",
    glowColor: "rgba(215, 255, 69, 0.22)",
    tasteProfile: "Scampis saisis, guacamole onctueux & spicy mayo",
    description:
      "Succulents scampis royaux dorés au grill, guacamole maison velouté, tomates cerises, edamame, concombre frais, poivrons et spicy mayo.",
    freshCuts: ["Scampis grillés saisis", "Guacamole maison", "Tomates cerises", "Jalapeños frais", "Spicy Mayo"],
    floatingIngredients: [
      { name: "Scampis Royaux Saisis", emoji: "🦐", x: "-8%", y: "14%", depth: 52 },
      { name: "Guacamole Velouté", emoji: "🥑", x: "82%", y: "18%", depth: 42 },
      { name: "Tomates Cerises Juteuses", emoji: "🍅", x: "-6%", y: "70%", depth: 48 },
      { name: "Jalapeños Épicés", emoji: "🌶️", x: "80%", y: "68%", depth: 36 },
      { name: "Spicy Mayo Onctueuse", emoji: "🌶️", x: "42%", y: "88%", depth: 40 },
    ],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.0,
    grandPrice: 13.0,
    tag: "Touche Pimentée 🔥",
    tagColor: "#ff705f",
    glowColor: "rgba(255, 112, 95, 0.22)",
    tasteProfile: "Fondant, caramélisé & piquant addictif",
    description:
      "Poulet mariné rôti aux épices douces, patates douces rôties au four, avocat, maïs, feta grecque, jalapeños et notre spicy mayo signature.",
    freshCuts: ["Poulet mariné rôti", "Patates douces rôties", "Avocat crémeux", "Feta émiettée", "Flocons de Chili"],
    floatingIngredients: [
      { name: "Poulet Rôti aux Épices", emoji: "🍗", x: "-8%", y: "14%", depth: 48 },
      { name: "Patates Douces Rôties", emoji: "🍠", x: "82%", y: "18%", depth: 54 },
      { name: "Jalapeños Frais", emoji: "🌶️", x: "-6%", y: "70%", depth: 36 },
      { name: "Feta Émiettée", emoji: "🧀", x: "80%", y: "68%", depth: 44 },
      { name: "Flocons de Chili", emoji: "🔥", x: "42%", y: "88%", depth: 42 },
    ],
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Curry",
    price: 11.0,
    grandPrice: 11.0,
    tag: "Formule 11€ Boisson Comprise 🥤",
    tagColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.28)",
    tasteProfile: "Chaud, ultra-croustillant & sauce curry veloutée",
    description:
      "Notre plat signature chaud : poulet pané extra croustillant coupé minute, sauce curry onctueuse parfumée, oignons frits et boisson 33cl offerte incluse !",
    freshCuts: ["Poulet pané croustillant", "Sauce Curry onctueuse", "Oignons frits", "Boisson 33cl incluse"],
    floatingIngredients: [
      { name: "Poulet Extra Croustillant", emoji: "🍗", x: "-8%", y: "14%", depth: 52 },
      { name: "Sauce Curry Chaude", emoji: "🍛", x: "82%", y: "18%", depth: 42 },
      { name: "Oignons Frits Croustillants", emoji: "🧅", x: "-6%", y: "70%", depth: 46 },
      { name: "Boisson 33cl Offerte", emoji: "🥤", x: "80%", y: "68%", depth: 48 },
      { name: "Riz Chaud Parfumé", emoji: "🍚", x: "42%", y: "88%", depth: 32 },
    ],
    isHotCombo: true,
  },
];

export function Hero3DParallaxPoke() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [addedSuccess, setAddedSuccess] = React.useState(false);
  const { addItem } = useCart();

  const currentDish = HERO_DISHES[currentIndex];
  const activePrice = selectedSize === "grand" && !currentDish.isHotCombo ? currentDish.grandPrice : currentDish.price;

  // 3D Parallax Mouse Tracking on the Hero Stage
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end organic feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Rotations for the 3D Stage on the left
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_DISHES.length) % HERO_DISHES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_DISHES.length);
  };

  const handleQuickAdd = () => {
    addItem({
      id: currentDish.id,
      name: `${currentDish.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
      basePrice: activePrice,
      price: activePrice,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2200);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-screen overflow-hidden bg-[#071713] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center"
      style={{ perspective: 1200 }}
    >
      {/* ── Dynamic Ambient Glow Background matching current dish ───────── */}
      <motion.div
        animate={{
          background: `radial-gradient(ellipse 65% 55% at 30% 45%, ${currentDish.glowColor}, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(215,255,69,0.06), transparent 70%), linear-gradient(135deg, #071713 0%, #0d221c 50%, #071713 100%)`,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-20 pointer-events-none"
      />

      {/* Subtle organic texture pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Pill: Quick Discovery & Location */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#d7ff45] animate-ping" />
            <span className="text-[#d7ff45] font-extrabold">EN DIRECT DE VISÉ</span>
            <span className="text-white/40">·</span>
            <span>Avenue du Pont 12</span>
            <span className="text-white/40">·</span>
            <span className="hidden sm:inline text-white/70">Préparé minute en 10 min</span>
          </motion.div>

          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1 font-bold text-[#d7ff45]">
              <Star className="h-3.5 w-3.5 fill-[#d7ff45]" /> 4.9/5
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline font-semibold">Plus de 150 avis gourmands</span>
          </div>
        </div>

        {/* ── MAIN 2-COLUMN STAGE: 3D BOWL SHOWCASE ON THE LEFT ─────────── */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16">
          
          {/* ════════════════════ LEFT: 3D PARALLAX POKÉ BOWL ════════════════════ */}
          <div className="relative order-1 flex flex-col items-center justify-center">
            
            {/* 3D Stage Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-square w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] select-none"
            >
              {/* Pedestal / Ground Shadow with depth */}
              <div
                style={{ transform: "translateZ(-40px)" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-[85%] rounded-[100%] bg-black/65 blur-2xl pointer-events-none"
              />

              {/* Ambient Ring Glow */}
              <div
                style={{ transform: "translateZ(-20px)" }}
                className="absolute inset-4 rounded-full blur-3xl opacity-40 transition-colors duration-1000 pointer-events-none"
                style={{ backgroundColor: currentDish.tagColor }}
              />

              {/* The Main Gourmet Poké Bowl in Ceramic Stoneware */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: "translateZ(30px)",
                  transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-[42px] p-3 transition-transform duration-300"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[38px] border-2 border-white/20 bg-[#0d221c] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.9)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentDish.id}
                      initial={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.94, filter: "blur(4px)" }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="relative h-full w-full"
                    >
                      <DishImage
                        dishId={currentDish.id}
                        alt={currentDish.name}
                        priority
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Subtle lighting reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-white/10 pointer-events-none" />

                      {/* Top Badges inside the bowl image */}
                      <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#10251f] shadow-lg backdrop-blur-md"
                          style={{ backgroundColor: currentDish.tagColor }}
                        >
                          <Sparkles className="h-3 w-3" />
                          {currentDish.tag}
                        </span>

                        <span className="rounded-full bg-black/65 px-3.5 py-1.5 text-xs font-black text-white backdrop-blur-md border border-white/15 shadow-lg">
                          Dès {currentDish.price.toFixed(2)} €
                        </span>
                      </div>

                      {/* Bottom Live Taste Chip */}
                      <div className="absolute bottom-5 inset-x-5 z-20">
                        <div className="rounded-2xl border border-white/20 bg-black/75 p-3.5 text-xs text-white backdrop-blur-md shadow-xl flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <span className="block text-[9px] font-black uppercase tracking-widest text-[#d7ff45]">
                              Notes Gustatives
                            </span>
                            <p className="truncate font-bold text-white/95 text-xs">
                              {currentDish.tasteProfile}
                            </p>
                          </div>
                          <Link
                            to="/product/$productId"
                            params={{ productId: currentDish.id }}
                            className="shrink-0 rounded-xl bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white hover:bg-white hover:text-black transition"
                          >
                            Détails →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* ── 3D Floating Ingredients around the bowl (Parallax Layers) ── */}
              <AnimatePresence mode="wait">
                <React.Fragment key={currentDish.id}>
                  {currentDish.floatingIngredients.map((item, idx) => {
                    const depthX = useTransform(smoothMouseX, [-0.5, 0.5], [-item.depth * 0.7, item.depth * 0.7]);
                    const depthY = useTransform(smoothMouseY, [-0.5, 0.5], [-item.depth * 0.7, item.depth * 0.7]);

                    return (
                      <motion.div
                        key={`${currentDish.id}-${idx}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        style={{
                          left: item.x,
                          top: item.y,
                          x: depthX,
                          y: depthY,
                          transform: `translateZ(${item.depth}px)`,
                        }}
                        className="pointer-events-none absolute z-30 hidden sm:flex items-center gap-2 rounded-2xl border border-white/20 bg-[#0d221c]/85 px-3.5 py-2 shadow-2xl backdrop-blur-md"
                      >
                        <span className="text-base">{item.emoji}</span>
                        <span className="text-[11px] font-extrabold text-white tracking-wide whitespace-nowrap">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </React.Fragment>
              </AnimatePresence>

              {/* Nav Arrows under/on bowl */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Plat précédent"
                className="absolute -left-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Plat suivant"
                className="absolute -right-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>

            {/* Interactive Dish Selector Pills under the bowl */}
            <div className="mt-6 flex w-full max-w-[560px] items-center justify-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {HERO_DISHES.map((dish, idx) => (
                <button
                  key={dish.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative shrink-0 rounded-2xl px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    idx === currentIndex
                      ? "bg-[#d7ff45] text-[#10251f] shadow-lg scale-105"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <span>{dish.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ════════════════════ RIGHT: HEADLINE, SENSORY & DIRECT ORDER ════════════════════ */}
          <div className="order-2 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Punchy Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d7ff45]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Expérience Culinaire 100% Fraîcheur</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 font-display text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight">
                <span className="block text-white">L'art du Poké Bowl</span>
                <span className="block text-[#d7ff45]">généreux & fait minute.</span>
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
                Oubliez les bowls fades remplis de riz. Chez <strong className="text-white">Poke N Bowl Visé</strong>, chaque recette déborde d'ingrédients nobles coupés le matin même : saumon atlantique sashimi, scampis grillés saisis, poulet doré caramélisé et riz à sushi fondant.
              </p>
            </motion.div>

            {/* Active Dish Order Card */}
            <motion.div
              key={currentDish.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 rounded-3xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d7ff45]">
                    {currentDish.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white">{currentDish.name}</h3>
                </div>

                {/* Price Display */}
                <div className="text-right">
                  <span className="block text-3xl font-black text-[#d7ff45] tracking-tight">
                    {activePrice.toFixed(2)} €
                  </span>
                  {currentDish.isHotCombo ? (
                    <span className="text-[10px] font-extrabold uppercase text-[#f59e0b]">
                      Boisson 33cl offerte incluse
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-white/60">
                      Format {selectedSize === "grand" ? "Grand (13€)" : "Moyen (10€)"}
                    </span>
                  )}
                </div>
              </div>

              {/* Fresh Ingredients Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentDish.freshCuts.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold text-white/90"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>

              {/* Size Selector for standard bowls */}
              {!currentDish.isHotCombo && (
                <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-black/35 p-2 border border-white/10">
                  <span className="text-xs font-bold text-white/75 pl-2">Choisir le format :</span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedSize("moyen")}
                      className={`rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                        selectedSize === "moyen"
                          ? "bg-[#d7ff45] text-[#10251f] shadow"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Moyen (10 €)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedSize("grand")}
                      className={`rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                        selectedSize === "grand"
                          ? "bg-[#d7ff45] text-[#10251f] shadow"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      Grand (13 €)
                    </button>
                  </div>
                </div>
              )}

              {/* Direct Actions: Instant Add-to-cart & Customizer */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.35)] transition hover:bg-white hover:scale-[1.02] active:scale-98"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="h-5 w-5 text-emerald-600 stroke-[3]" />
                      <span>Ajouté au panier !</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5" />
                      <span>Ajouter au Panier · {activePrice.toFixed(2)} €</span>
                    </>
                  )}
                </button>

                <Link
                  to="/product/$productId"
                  params={{ productId: currentDish.id }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 py-4 px-5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4 text-[#d7ff45]" />
                  <span>Personnaliser</span>
                </Link>
              </div>

              {/* Guarantees */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-white/60 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#d7ff45]" /> Prêt en 10-15 min
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#d7ff45]" /> Ingrédients frais garantis
                </span>
                <span className="flex items-center gap-1.5">
                  <span>🛵</span> Livraison à domicile dispo
                </span>
              </div>
            </motion.div>

            {/* Custom Bowl Alternative Link */}
            <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-3 text-xs text-white/80">
              <span className="font-semibold">Envie de créer votre propre combinaison de A à Z ?</span>
              <Link
                to="/sur-mesure"
                className="font-black text-[#d7ff45] hover:underline flex items-center gap-1"
              >
                <span>Créer Sur-Mesure (10€)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
