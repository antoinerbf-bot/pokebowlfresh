import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires haute définition Poké N Bowl Visé
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
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
    id: "saumon-wasabi",
    image: bowlSaumon,
    titleLine1: "SAUMON WASABI",
    titleLine2: "FRAÎCHEUR NOBLE",
    dishName: "Saumon Wasabi",
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
    ingredientCallout: {
      text: "PETITS MORCEAUX CROUSTILLANTS",
      subtext: "SAUCE CURRY ONCTUEUSE",
      emoji: "🍛",
    },
    statBadge: {
      main: "FORMULE 11 €",
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

const AUTOPLAY_MS = 5500;

export function PokawaHeroExact() {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem } = useCart();

  const slide = SLIDES[currentIdx];

  // Auto-play continu automatique et fluide
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
      aria-label="Accueil Poké N Bowl Visé — Bowls Frais & Crousty Chicken"
      className="relative w-full h-[94vh] sm:h-[98vh] min-h-[640px] max-h-[1050px] overflow-hidden bg-[#101e18] select-none"
    >
      {/* ════════ PHOTO EN PLEIN ÉCRAN LUMINEUSE & CLAIRE (BOLS EN BAMBOU ARTISANAUX) ════════ */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 flex items-center justify-center bg-[#15231e]"
        >
          <img
            src={slide.image}
            alt={slide.dishName}
            className="h-full w-full object-cover object-center filter brightness-105 contrast-102"
          />
          {/* VOILE LÉGER LOCALISÉ POUR CONSERVER LA LUMINOSITÉ ET LA VIVACITÉ DU BOL */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-1/2 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ════════ CALLOUT INGRÉDIENT EN HAUT À DROITE (STYLE EXACT POKAWA) ════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`badge-${slide.id}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute top-28 right-4 sm:right-8 lg:right-12 z-20 hidden md:flex items-center gap-3 rounded-2xl bg-black/40 backdrop-blur-md px-4 py-2.5 border border-white/20 text-white shadow-2xl"
        >
          <span className="text-2xl">{slide.ingredientCallout.emoji}</span>
          <div className="text-left">
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#d7ff45]">
              {slide.ingredientCallout.text}
            </span>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-white/80">
              {slide.ingredientCallout.subtext}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ════════ GRAND STAT BADGE FLOTTANT (STYLE POKAWA) ════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`stat-${slide.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute top-44 right-6 sm:right-10 lg:right-16 z-20 hidden lg:flex flex-col items-center justify-center rounded-3xl bg-[#d7ff45] text-[#10251f] px-5 py-4 shadow-2xl border-2 border-white/40 rotate-3 hover:rotate-0 transition-transform duration-300"
        >
          <span className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none">
            {slide.statBadge.main}
          </span>
          <span className="text-[8px] font-black uppercase tracking-widest text-[#10251f]/80 mt-1">
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
                className="space-y-2 sm:space-y-3 rounded-[30px] bg-black/40 backdrop-blur-md p-6 sm:p-7 border border-white/20 shadow-2xl"
              >
                {/* Petit tag de la recette */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md border border-white/30">
                  <span className="text-[#d7ff45]">✦</span>
                  <span>{slide.dishName}</span>
                  <span className="text-white/60">·</span>
                  <span className="text-[#d7ff45]">{slide.price.toFixed(2)} €</span>
                  {slide.isCrousty && (
                    <span className="ml-1 rounded-md bg-[#ff705f] px-2 py-0.5 text-[9px] font-black text-white">
                      BOISSON INCLUSE
                    </span>
                  )}
                </div>

                {/* Titre géant ultra-bold style Pokawa */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]">
                  <span className="block">{slide.titleLine1}</span>
                  <span className="block text-white">{slide.titleLine2}</span>
                </h1>

                {/* Ingrédients clés conformes à la recette */}
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

                  <a
                    href="#composer"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow"
                  >
                    Composer votre bowl →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ════════ CARTE PROMO EN BAS À DROITE (STYLE EXACT POKAWA) ════════ */}
          <div className="shrink-0 hidden md:block">
            <div className="rounded-3xl bg-white p-4 shadow-2xl border border-black/10 flex items-center gap-4 max-w-sm text-[#10251f]">
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

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#ea580c]/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#ea580c]">
                    Crousty Chicken · 11 € Menu 🍗
                  </span>
                </div>
                <h3 className="mt-1 text-xs font-black text-[#10251f] uppercase tracking-tight">
                  Petits Morceaux Dorés & Sauce
                </h3>
                <p className="text-[10px] text-[#68756f] leading-snug line-clamp-2 mt-0.5">
                  Poulet croustillant pané minute + riz + sauce maison + boisson 33cl !
                </p>
                <a
                  href="#crousty"
                  className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#ea580c] hover:underline"
                >
                  Voir les formules →
                </a>
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
