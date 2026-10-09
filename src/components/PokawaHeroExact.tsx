import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires plein écran ultra haute définition 1080p (Poke N Bowl Visé)
import heroSaumonWide from "@/assets/hero-saumon-clean-wide.jpg";
import heroSweetWide from "@/assets/hero-sweet-wide.jpg";
import heroCroustyWide from "@/assets/hero-crousty-wide.jpg";
import heroScampisWide from "@/assets/hero-scampis-wide.jpg";
import heroSpicyWide from "@/assets/hero-spicy-wide.jpg";

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
    image: heroSaumonWide,
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
    image: heroSweetWide,
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
    image: heroCroustyWide,
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
    image: heroScampisWide,
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
    image: heroSpicyWide,
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
      aria-label="Accueil Poké N Bowl Visé — Poké bowls frais & Crousty Chicken"
      className="relative w-full h-[92vh] sm:h-[96vh] min-h-[620px] max-h-[1050px] overflow-hidden bg-[#0a1713] select-none"
    >
      {/* ════════ PHOTO EN PLEIN ÉCRAN TOTAL (LES PLATS PRENNENT TOUTE LA HOME PAGE AVEC GROS ZOOM APPÉTISSANT) ════════ */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={slide.image}
            alt={`Bol ${slide.dishName} — Poké N Bowl Visé`}
            className="h-full w-full object-cover object-center filter brightness-100 contrast-102"
          />

          {/* DÉGRADÉS CINÉMATIQUES SUBTILS QUI RENDENT L'ÉCRITURE PARFAITEMENT LISIBLE SANS MASQUER LE PLAT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ════════ CALLOUT INGRÉDIENT FLOTTANT EN HAUT À DROITE (DISCRET, HAUT DE GAMME) ════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`callout-${slide.id}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute top-24 sm:top-28 right-4 sm:right-8 lg:right-12 z-20 hidden md:flex items-center gap-2.5 rounded-full bg-black/45 backdrop-blur-md px-4 py-2 border border-white/20 text-white shadow-xl pointer-events-none"
        >
          <span className="text-xl">{slide.ingredientCallout.emoji}</span>
          <div className="text-left leading-tight">
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#d7ff45]">
              {slide.ingredientCallout.text}
            </span>
            <span className="block text-[9px] font-medium text-white/80">
              {slide.ingredientCallout.subtext}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ════════ TYPOGRAPHIE ET ACTIONS EN BAS À GAUCHE (PARFAITEMENT LISIBLES, SANS GROS CARRÉ NOIR GÊNANT) ════════ */}
      <div className="absolute inset-x-0 bottom-12 sm:bottom-16 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl space-y-3 sm:space-y-4"
            >
              {/* Badges punchy */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#10251f] shadow-lg">
                  <Sparkles className="h-3 w-3 stroke-[2.5]" />
                  {slide.badge}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20 shadow-md">
                  {slide.dishName} · {slide.price.toFixed(2)} €
                </span>
              </div>

              {/* Grand titre style Pokawa ultra-visible avec drop shadow puissant */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                <span className="block text-white">{slide.titleLine1}</span>
                <span className="block text-[#d7ff45]">{slide.titleLine2}</span>
              </h1>

              {/* Ingrédients de la recette parfaitement lisibles directement sur l'image */}
              <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {slide.ingredients}
              </p>

              {/* Ligne Tarif & Formule */}
              <div className="flex items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-black/55 backdrop-blur-md px-4 py-2 border border-white/25 shadow-xl">
                  <span className="text-2xl sm:text-3xl font-black text-white leading-none">
                    {slide.price.toFixed(2)} €
                  </span>
                  <div className="border-l border-white/25 pl-3 text-left">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-[#d7ff45]">
                      {slide.isCrousty ? "Formule 11 € Complète" : "Format Moyen Inclus"}
                    </span>
                    <span className="block text-[9px] font-medium text-white/80">
                      {slide.isCrousty ? "Boisson 33cl incluse au choix" : "Grand format à 13 € (+3€)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Boutons d'action rapides */}
              <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-3">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="group relative inline-flex items-center gap-2.5 rounded-full bg-[#d7ff45] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.4)] transition hover:bg-white hover:scale-105 active:scale-95"
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
                  className="inline-flex items-center gap-2 rounded-full bg-black/45 border border-white/40 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow-lg"
                >
                  Personnaliser
                </Link>

                <a
                  href="#composer"
                  className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                >
                  Composer sur-mesure →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ════════ DOTS PAGINATION AU CENTRE EN BAS ════════ */}
      <div className="absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2 pointer-events-auto">
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
                  ? "w-8 h-2.5 bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.8)]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Plat suivant"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
