import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires générées pour Poke N Bowl Visé
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";

interface PokawaSlide {
  id: string;
  image: string;
  titleLine1: string;
  titleLine2: string;
  dishName: string;
  ingredientCallout: {
    text: string;
    subtext: string;
    emoji: string;
  };
  statBadge: {
    main: string;
    sub: string;
  };
  price: number;
  ingredients: string;
  isCrousty?: boolean;
}

const SLIDES: PokawaSlide[] = [
  {
    id: "sweet-chicken",
    image: bowlSweetChicken,
    titleLine1: "BESOIN",
    titleLine2: "DE DOUCEUR ?",
    dishName: "Sweet Chicken Teriyaki",
    ingredientCallout: {
      text: "POULET DORÉ MARINÉ",
      subtext: "RECETTE MAISON",
      emoji: "🍗",
    },
    statBadge: {
      main: "DÈS 10.00 €",
      sub: "FORMAT GÉNÉREUX",
    },
    price: 10.0,
    ingredients: "Poulet mariné, avocat Hass, mangue mûre, maïs croquant, feta & sauce teriyaki onctueuse.",
  },
  {
    id: "saumon-wasabi",
    image: bowlSaumon,
    titleLine1: "EXTRA FRAIS",
    titleLine2: "& SASHIMI ?",
    dishName: "Saumon Wasabi",
    ingredientCallout: {
      text: "SAUMON NOBLE SASHIMI",
      subtext: "DÉCOUPÉ DU MATIN",
      emoji: "🐟",
    },
    statBadge: {
      main: "OMÉGA-3",
      sub: "100% FRAÎCHEUR GARANTIE",
    },
    price: 11.0,
    ingredients: "Saumon atlantique frais, salade d'algues wakame, avocat, mangue, edamame & mayo wasabi.",
  },
  {
    id: "crousty-chicken-curry",
    image: bowlCroustyCurry,
    titleLine1: "BESOIN DE",
    titleLine2: "CROUSTY ?",
    dishName: "Crousty Chicken Curry",
    ingredientCallout: {
      text: "POULET EXTRA CROUSTILLANT",
      subtext: "PANURE MINUTE",
      emoji: "🍗",
    },
    statBadge: {
      main: "FORMULE 11 €",
      sub: "BOISSON 33CL INCLUSE",
    },
    price: 11.0,
    ingredients: "Poulet pané ultra-croustillant, riz chaud parfumé, sauce curry onctueuse & oignons frits.",
    isCrousty: true,
  },
  {
    id: "scampis-royaux",
    image: bowlScampis,
    titleLine1: "SAISI AU GRILL",
    titleLine2: "& SAVEURS ?",
    dishName: "Scampis Royal",
    ingredientCallout: {
      text: "SCAMPIS ROYAUX DORÉS",
      subtext: "SAISIS HAUTE T°",
      emoji: "🦐",
    },
    statBadge: {
      main: "PROTÉINES",
      sub: "SCAMPIS GRILLÉS MINUTE",
    },
    price: 10.0,
    ingredients: "Scampis saisis au grill, guacamole maison velouté, edamame, tomates cerises & spicy mayo.",
  },
  {
    id: "spicy-chicken",
    image: bowlSpicyChicken,
    titleLine1: "UN PEU DE",
    titleLine2: "PIQUANT ?",
    dishName: "Spicy Chicken",
    ingredientCallout: {
      text: "PATATES DOUCES RÔTIES",
      subtext: "AU FOUR MINUTE",
      emoji: "🍠",
    },
    statBadge: {
      main: "CHILI CRUNCH",
      sub: "KICK ÉPICÉ ADDICTIF",
    },
    price: 10.0,
    ingredients: "Poulet mariné rôti, patates douces rôties, maïs, feta, rondelles de jalapeños & spicy mayo.",
  },
];

const AUTOPLAY_MS = 6000;

export function PokawaHeroExact() {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem } = useCart();

  const slide = SLIDES[currentIdx];

  // Auto-play
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused, currentIdx]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  };

  const handleQuickAdd = () => {
    addItem({
      id: `${slide.id}-moyen`,
      name: `${slide.dishName} (Moyen)`,
      basePrice: slide.price,
      price: slide.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <section
      aria-label="Accueil Pokawa-Style Poke N Bowl Visé"
      className="relative w-full h-[94vh] sm:h-[98vh] min-h-[640px] max-h-[1050px] overflow-hidden bg-[#121c18] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ════════ PHOTO EN PLEIN ÉCRAN TOTAL (FULL-BLEED SANS CADRE) ════════ */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          {/* L'image culinaire haute résolution qui remplit TOUT l'écran */}
          <img
            src={slide.image}
            alt={slide.dishName}
            className="h-full w-full object-cover object-center filter contrast-[1.08] saturate-[1.14]"
          />

          {/* Dégradés subtils pour garantir que les textes et pills restent 100% lisibles */}
          {/* Dégradé supérieur pour contraster la navbar flottante */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

          {/* Dégradé inférieur et gauche pour le grand titre */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ════════ CALLOUT BLEU INGRÉDIENT SUR LE BOL (STYLE EXACT POKAWA) ════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`callout-${slide.id}`}
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute left-[6%] sm:left-[10%] top-[30%] sm:top-[34%] z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-[#2431eb] px-4 py-2.5 text-white shadow-2xl backdrop-blur-sm border border-white/20"
        >
          <div className="text-xl">{slide.ingredientCallout.emoji}</div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-wider leading-none">
              {slide.ingredientCallout.text}
            </p>
            <p className="text-[9px] font-bold text-white/80 uppercase tracking-widest mt-0.5">
              {slide.ingredientCallout.subtext}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ════════ BADGE STAT BLEU À DROITE (STYLE EXACT POKAWA '50G PROTÉINES') ════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`stat-${slide.id}`}
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute right-[6%] sm:right-[10%] top-[30%] sm:top-[34%] z-20 hidden md:flex flex-col items-center justify-center rounded-2xl bg-[#2431eb] px-5 py-3 text-white shadow-2xl backdrop-blur-sm border border-white/20 text-center"
        >
          <span className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none">
            {slide.statBadge.main}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-white/80 mt-1">
            {slide.statBadge.sub}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* ════════ GRAND TITRE EN BAS À GAUCHE (STYLE EXACT POKAWA) ════════ */}
      <div className="absolute inset-x-0 bottom-12 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row lg:items-end justify-between gap-6 pointer-events-auto">
          {/* Titre géant blanc */}
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2 sm:space-y-3"
              >
                {/* Petit tag de la recette */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md border border-white/30">
                  <span>✦</span>
                  <span>{slide.dishName}</span>
                  <span className="text-white/60">·</span>
                  <span className="text-[#d7ff45]">{slide.price.toFixed(2)} €</span>
                </div>

                {/* Titre géant ultra-bold style Pokawa */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]">
                  <span className="block">{slide.titleLine1}</span>
                  <span className="block text-white">{slide.titleLine2}</span>
                </h1>

                {/* Ingrédients clés */}
                <p className="text-xs sm:text-sm text-white/90 max-w-xl font-medium drop-shadow leading-relaxed pt-1">
                  {slide.ingredients}
                </p>

                {/* Boutons d'action rapides */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className="group relative inline-flex items-center gap-2 rounded-full bg-[#d7ff45] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-2xl transition hover:bg-white hover:scale-105 active:scale-95"
                  >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Ajouter ce bowl ({slide.price.toFixed(2)} €)</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                    {addedNotice && (
                      <span className="absolute -top-10 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-[#2431eb] px-3.5 py-1 text-xs font-black text-white shadow-2xl">
                        <Check className="h-3.5 w-3.5 stroke-[3]" /> Ajouté !
                      </span>
                    )}
                  </button>

                  <Link
                    to="/product/$productId"
                    params={{ productId: slide.id }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/40 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/30"
                  >
                    Personnaliser
                  </Link>

                  <Link
                    to="/sur-mesure"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow"
                  >
                    Composer sur-mesure →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ════════ CARTE PROMO EN BAS À DROITE (STYLE EXACT OCTOBRE ROSE POKAWA) ════════ */}
          <div className="shrink-0 hidden md:block">
            <div className="rounded-3xl bg-white p-4 shadow-2xl border border-black/10 flex items-center gap-4 max-w-sm text-[#10251f]">
              {/* Image ou vignette */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#f5ebe1]">
                <img
                  src={tiramisuSpeculoos}
                  alt="Dessert maison"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-[#2431eb] text-center text-[8px] font-black text-white uppercase">
                  Maison
                </span>
              </div>

              {/* Contenu de la promo */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#2431eb]/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#2431eb]">
                    Formule Midi & Soir 🥤
                  </span>
                </div>
                <h3 className="mt-1 text-xs font-black text-[#10251f] uppercase tracking-tight">
                  Bar à Crousty · 11 € Menu
                </h3>
                <p className="text-[10px] text-[#68756f] leading-snug line-clamp-2 mt-0.5">
                  Poulet pané minute chaud + riz parfumé + boisson 33cl incluse !
                </p>
                <Link
                  to="/commander"
                  className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#2431eb] hover:underline"
                >
                  Commander le menu →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ DOTS PAGINATION & CONTRÔLES SLIDER EN BAS AU CENTRE ════════ */}
      <div className="absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2">
        {SLIDES.map((s, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Aller au plat ${s.dishName}`}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-8 h-2.5 bg-white shadow-lg"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

      {/* ════════ FLÈCHES DISCRÈTES GAUCHE / DROITE ════════ */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Plat précédent"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Plat suivant"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
