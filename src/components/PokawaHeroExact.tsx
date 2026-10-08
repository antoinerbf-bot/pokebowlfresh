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

const AUTOPLAY_MS = 5500;

export function PokawaHeroExact() {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem } = useCart();

  const slide = SLIDES[currentIdx];

  // Auto-play continu automatique et fluide (Pokawa style)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [currentIdx]);

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
      className="relative w-full min-h-[700px] lg:h-[90vh] max-h-[960px] overflow-hidden bg-[#0c1813] select-none flex items-center"
    >
      {/* ════════ FOND AMBIANT LUMINEUX & ATMOSPHÉRIQUE (ZÉRO PIXÉLISATION) ════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Halo doux teinté dérivé de la photo en ultra-flou */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`bg-${slide.id}`}
            src={slide.image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.22, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 h-full w-full object-cover object-center filter blur-3xl saturate-150"
          />
        </AnimatePresence>

        {/* Dégradés graphiques riches et texturés Pokawa */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1813] via-[#0c1813]/90 to-[#0c1813]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(215,255,69,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c1813] to-transparent" />
      </div>

      {/* ════════ CONTENU PRINCIPAL EN 2 COLONNES (STYLE POKAWA OFFICIEL) ════════ */}
      <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-8 lg:px-12 pt-20 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ─── COLONNE GAUCHE (7 COLS) : GRAND TITRE & ACTIONS ─── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 sm:space-y-4"
              >
                {/* Petit tag de la recette */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md border border-white/20">
                  <span className="text-[#d7ff45]">✦</span>
                  <span>{slide.dishName}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-[#d7ff45] font-black">{slide.price.toFixed(2)} €</span>
                  {slide.isCrousty && (
                    <span className="ml-1 rounded-md bg-[#ff705f] px-2 py-0.5 text-[9px] font-black text-white">
                      BOISSON INCLUSE
                    </span>
                  )}
                </div>

                {/* Titre géant ultra-bold style Pokawa */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)]">
                  <span className="block">{slide.titleLine1}</span>
                  <span className="block text-white">{slide.titleLine2}</span>
                </h1>

                {/* Ingrédients clés conformes à la recette */}
                <p className="text-sm sm:text-base text-white/90 max-w-xl font-medium drop-shadow leading-relaxed pt-1">
                  {slide.ingredients}
                </p>

                {/* Boutons d'action rapides */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className="group relative inline-flex items-center gap-2 rounded-full bg-[#d7ff45] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-2xl transition hover:bg-white hover:scale-105 active:scale-95"
                  >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Ajouter ce bowl ({slide.price.toFixed(2)} €)</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                    {addedNotice && (
                      <span className="absolute -top-10 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-[#2431eb] px-3.5 py-1 text-xs font-black text-white shadow-2xl">
                        <Check className="h-3.5 w-3.5 stroke-[3]" /> Ajouté au panier !
                      </span>
                    )}
                  </button>

                  <Link
                    to="/product/$productId"
                    params={{ productId: slide.id }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/30 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105 active:scale-95"
                  >
                    Personnaliser
                  </Link>

                  <Link
                    to="/sur-mesure"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:text-white sm:ml-2 drop-shadow transition hover:underline"
                  >
                    <span>Composer sur-mesure</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── COLONNE DROITE (5 COLS) : SHOWCASE BOL HAUTE DÉFINITION CRISTALLIN ─── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Halo lumineux concentrique sous le plat */}
            <div className="pointer-events-none absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#d7ff45]/15 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`dish-stage-${slide.id}`}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[530px] xl:h-[530px] flex items-center justify-center"
              >
                {/* Image du bol affichée à sa résolution native nette (pas d'étirement plein écran) */}
                <div className="relative h-full w-full rounded-full overflow-hidden shadow-[0_24px_60px_-10px_rgba(0,0,0,0.85)] border-4 border-white/20 ring-8 ring-white/5">
                  <img
                    src={slide.image}
                    alt={slide.dishName}
                    className="h-full w-full object-cover object-center filter contrast-[1.04] saturate-[1.12]"
                    loading="eager"
                  />
                  {/* Reflet subtil de lumière naturelle sur le bol */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
                </div>

                {/* Callout Bleu Ingrédient Pokawa flottant */}
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="absolute -top-3 sm:-top-4 -left-3 sm:-left-6 z-20 flex items-center gap-2.5 rounded-2xl bg-[#2431eb] px-4 py-2.5 text-white shadow-2xl border border-white/20 backdrop-blur-md"
                >
                  <span className="text-xl">{slide.ingredientCallout.emoji}</span>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-none">
                      {slide.ingredientCallout.text}
                    </p>
                    <p className="text-[8px] sm:text-[9px] font-bold text-white/80 uppercase tracking-widest mt-0.5">
                      {slide.ingredientCallout.subtext}
                    </p>
                  </div>
                </motion.div>

                {/* Badge Stat Pokawa flottant */}
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 z-20 flex flex-col items-center justify-center rounded-2xl bg-[#2431eb] px-4 py-2.5 sm:px-5 sm:py-3 text-white shadow-2xl border border-white/20 text-center"
                >
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none text-[#d7ff45]">
                    {slide.statBadge.main}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/80 mt-1">
                    {slide.statBadge.sub}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ════════ CARTE PROMO DISCRÈTE EN BAS À DROITE (FORMULE CROUSTY) ════════ */}
      <div className="absolute bottom-5 right-6 z-30 hidden xl:block">
        <div className="rounded-2xl bg-white/95 backdrop-blur-md p-3.5 shadow-2xl border border-white/40 flex items-center gap-3.5 max-w-xs text-[#10251f]">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f5ebe1]">
            <img
              src={tiramisuSpeculoos}
              alt="Dessert maison"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-0 inset-x-0 bg-[#2431eb] text-center text-[7px] font-black text-white uppercase">
              Maison
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="rounded bg-[#2431eb]/10 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-[#2431eb]">
                Menu Étudiant 11 € 🥤
              </span>
            </div>
            <h3 className="mt-0.5 text-xs font-black text-[#10251f] uppercase tracking-tight truncate">
              Bar à Crousty Visé
            </h3>
            <p className="text-[10px] text-[#68756f] leading-tight line-clamp-1">
              Poulet pané + riz + boisson 33cl incluse
            </p>
            <Link
              to="/commander"
              className="mt-1 inline-flex items-center gap-1 text-[9px] font-black uppercase text-[#2431eb] hover:underline"
            >
              Commander →
            </Link>
          </div>
        </div>
      </div>

      {/* ════════ DOTS PAGINATION & CONTRÔLES SLIDER EN BAS AU CENTRE ════════ */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex items-center justify-center gap-2">
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
                  ? "w-8 h-2.5 bg-[#d7ff45] shadow-lg"
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
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Plat suivant"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
