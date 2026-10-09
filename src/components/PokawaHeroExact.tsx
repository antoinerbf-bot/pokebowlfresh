import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires haute définition Poké N Bowl Visé (1:1 carré, 100% bol visible)
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";

interface PokawaSlide {
  id: string;
  image: string;
  titleLine1: string;
  titleLine2: string;
  dishName: string;
  badge: string;
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
    id: "saumon-wasabi",
    image: bowlSaumon,
    titleLine1: "SAUMON WASABI",
    titleLine2: "FRAÎCHEUR NOBLE",
    dishName: "Saumon Wasabi",
    badge: "Signature Premium · Saumon Sashimi",
    ingredientCallout: {
      text: "SAUMON NOBLE FRAIS",
      subtext: "DÉCOUPÉ DU MATIN",
      emoji: "🐟",
    },
    statBadge: {
      main: "11.00 €",
      sub: "PREMIUM FRAÎCHEUR",
    },
    price: 11.0,
    ingredients: "Saumon noble atlantique en dés généreux, avocat Hass fondant, mangue mûre, edamame croquant, salade d'algues wakame & mayo wasabi veloutée.",
  },
  {
    id: "sweet-chicken",
    image: bowlSweetChicken,
    titleLine1: "SWEET CHICKEN",
    titleLine2: "TERIYAKI MAISON",
    dishName: "Sweet Chicken",
    badge: "Best-Seller · Poulet Doré Teriyaki",
    ingredientCallout: {
      text: "POULET DORÉ MAISON",
      subtext: "MARINADE TERIYAKI",
      emoji: "🍗",
    },
    statBadge: {
      main: "10.00 €",
      sub: "BEST-SELLER",
    },
    price: 10.0,
    ingredients: "Poulet maison doré, guacamole velouté, mangue, maïs doux, tomates cerises, feta crémeuse, oignons croustillants & sauce teriyaki.",
  },
  {
    id: "crousty-chicken-curry",
    image: bowlCroustyCurry,
    titleLine1: "CROUSTY CHICKEN",
    titleLine2: "CURRY DORÉ",
    dishName: "Crousty Chicken Curry",
    badge: "Formule 11 € · Boisson 33cl Incluse",
    ingredientCallout: {
      text: "PETITS MORCEAUX CROUSTILLANTS",
      subtext: "SAUCE CURRY ONCTUEUSE",
      emoji: "🍛",
    },
    statBadge: {
      main: "11.00 €",
      sub: "BOISSON 33CL INCLUSE",
    },
    price: 11.0,
    ingredients: "Petits morceaux de poulet croustillant dorés, sauce curry onctueuse maison bien généreuse, oignons frits croustillants & riz à sushi chaud.",
    isCrousty: true,
  },
  {
    id: "scampis-royaux",
    image: bowlScampis,
    titleLine1: "SCAMPIS ROYAUX",
    titleLine2: "SPICY MAYO",
    dishName: "Scampis Royal",
    badge: "Coup de Cœur · Grillé Minute",
    ingredientCallout: {
      text: "SCAMPIS ROYAUX GRILLÉS",
      subtext: "SAISIS AU GRILL",
      emoji: "🦐",
    },
    statBadge: {
      main: "10.00 €",
      sub: "SIGNATURE",
    },
    price: 10.0,
    ingredients: "Scampis saisis au grill, guacamole maison velouté, edamame croquant, tomates fraîches, concombre, poivrons, jalapeños & spicy mayo.",
  },
  {
    id: "spicy-chicken",
    image: bowlSpicyChicken,
    titleLine1: "SPICY CHICKEN",
    titleLine2: "KICK ÉPICÉ",
    dishName: "Spicy Chicken",
    badge: "Épicé Gourmand · Kick Pimenté",
    ingredientCallout: {
      text: "POULET ÉPICÉ MAISON",
      subtext: "FLOCONS DE CHILI",
      emoji: "🔥",
    },
    statBadge: {
      main: "10.00 €",
      sub: "ÉPICÉ GOURMAND",
    },
    price: 10.0,
    ingredients: "Poulet mariné épicé, avocat Hass, patates douces rôties, maïs doux, feta, jalapeños, sauce spicy mayo onctueuse & sésame mix.",
  },
];

const AUTOPLAY_MS = 6000;

export function PokawaHeroExact() {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem, setIsCartOpen } = useCart();

  const slide = SLIDES[currentIdx];

  // Auto-play fluide
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
    const isCrousty = slide.isCrousty;
    addItem({
      id: isCrousty ? slide.id : `${slide.id}-moyen`,
      name: isCrousty ? slide.dishName : `${slide.dishName} (Moyen)`,
      basePrice: slide.price,
      price: slide.price,
      quantity: 1,
      toppings: isCrousty ? ["Boisson 33cl incluse au choix"] : [],
      removedIngredients: [],
      image: slide.image,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
    setIsCartOpen(true);
  };

  return (
    <section
      aria-label="Accueil Poké N Bowl Visé — Bowls Frais & Crousty Chicken"
      className="relative w-full min-h-[600px] lg:min-h-[680px] xl:min-h-[720px] overflow-hidden bg-[#0a1713] text-white select-none pt-24 pb-14 sm:pt-28 sm:pb-16 flex items-center"
    >
      {/* ════════ HALOS LUMINEUX AMBIANTS HAUT DE GAMME (PAS DE VOILE SOMBRE ÉCRASANT) ════════ */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#d7ff45]/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-[#ff705f]/12 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#10251f] blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr]">
          
          {/* ════════ COLONNE GAUCHE : TYPOGRAPHIE PUNCHY, CLAIRE & SANS GROS CARRÉ NOIR ════════ */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Badge supérieur coloré */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#d7ff45] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#10251f] shadow-md">
                    <Sparkles className="h-3.5 w-3.5 stroke-[2.5]" />
                    {slide.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white/90 border border-white/15 backdrop-blur-sm">
                    {slide.ingredientCallout.emoji} {slide.ingredientCallout.text}
                  </span>
                </div>

                {/* Titre géant ultra-punchy blanc & éclatant */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  <span className="block text-white">{slide.titleLine1}</span>
                  <span className="block text-[#d7ff45]">{slide.titleLine2}</span>
                </h1>

                {/* Ingrédients précis de la recette */}
                <p className="text-sm sm:text-base text-white/85 max-w-xl font-medium leading-relaxed drop-shadow-sm pt-1">
                  {slide.ingredients}
                </p>

                {/* Ligne Tarif & Informations Formule */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="rounded-2xl bg-white/10 px-4 py-2 border border-white/20 backdrop-blur-md flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                      {slide.price.toFixed(2)} €
                    </span>
                    <div className="text-left border-l border-white/20 pl-3">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#d7ff45]">
                        {slide.isCrousty ? "Formule Complète" : "Format Moyen Inclus"}
                      </span>
                      <span className="block text-[9px] font-medium text-white/70">
                        {slide.isCrousty ? "Boisson 33cl offerte au choix" : "Grand format à 13 € (+3€)"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action rapides */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#d7ff45] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.3)] transition hover:bg-white hover:scale-105 active:scale-95"
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
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white"
                  >
                    Personnaliser
                  </Link>

                  <a
                    href="#composer"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow"
                  >
                    Composer sur-mesure →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ════════ COLONNE DROITE : LE PLAT ENTIER EN HAUTE DÉFINITION (100% VISIBLE) ════════ */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Halo lumineux d'assiette */}
            <div className="pointer-events-none absolute inset-0 m-auto h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] rounded-full bg-gradient-to-tr from-[#d7ff45]/20 via-[#ff705f]/25 to-transparent blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`dish-showcase-${slide.id}`}
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotate: 4 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[290px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[520px] aspect-square"
              >
                {/* Cadre du bol préservant 100% de la photo carrée sans aucun rognage zoomé */}
                <div className="relative h-full w-full rounded-[36px] sm:rounded-[44px] overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85)] bg-[#12231b]">
                  <img
                    src={slide.image}
                    alt={`Bol ${slide.dishName} préparé minute à Visé`}
                    className="h-full w-full object-cover object-center filter brightness-105 contrast-102 transition duration-700 hover:scale-105"
                  />

                  {/* Micro-voile subtil dégradé en bas uniquement pour laisser le bol 100% éclatant */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Badge Bol en Bambou ou Formule Chaude */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#d7ff45] border border-white/20">
                      {slide.isCrousty ? "🍗 Crousty Chicken Chaud" : "🥣 Bol Bambou Naturel"}
                    </span>
                    <span className="rounded-full bg-[#ff705f] px-3 py-1 text-[11px] font-black text-white shadow-md">
                      Fait Minute
                    </span>
                  </div>
                </div>

                {/* Badge Ingrédient Noble Flottant en haut à droite */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl bg-[#10251f]/90 backdrop-blur-md px-3.5 py-2 border border-white/25 text-white shadow-2xl"
                >
                  <span className="text-xl sm:text-2xl">{slide.ingredientCallout.emoji}</span>
                  <div className="text-left">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                      {slide.ingredientCallout.text}
                    </span>
                    <span className="block text-[8px] font-bold uppercase tracking-widest text-white/80">
                      {slide.ingredientCallout.subtext}
                    </span>
                  </div>
                </motion.div>

                {/* Badge Prix Flottant en bas à gauche */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 }}
                  className="absolute -bottom-3 -left-2 sm:-left-4 z-20 rounded-2xl bg-[#d7ff45] text-[#10251f] px-4 py-2.5 shadow-2xl border-2 border-white/40 rotate-[-3deg] hover:rotate-0 transition-transform"
                >
                  <span className="block text-xl sm:text-2xl font-black uppercase tracking-tight leading-none">
                    {slide.statBadge.main}
                  </span>
                  <span className="block text-[8px] font-black uppercase tracking-widest text-[#10251f]/80 mt-0.5">
                    {slide.statBadge.sub}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ════════ PAGINATION & CONTRÔLES SLIDER EN BAS ════════ */}
        <div className="mt-8 sm:mt-10 flex items-center justify-between border-t border-white/10 pt-4">
          {/* Indicateur de plat */}
          <div className="flex items-center gap-2 text-xs font-bold text-white/60">
            <span className="text-[#d7ff45] font-black">0{currentIdx + 1}</span>
            <span>/</span>
            <span>0{SLIDES.length}</span>
            <span className="ml-2 hidden sm:inline text-white/40">· {slide.dishName}</span>
          </div>

          {/* Dots indicateurs */}
          <div className="flex items-center gap-2">
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
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              );
            })}
          </div>

          {/* Boutons Suivant / Précédent */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Plat précédent"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Plat suivant"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
