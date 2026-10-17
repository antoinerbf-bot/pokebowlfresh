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
      className="relative w-full h-auto min-h-[780px] sm:h-[96vh] sm:min-h-[680px] max-h-none sm:max-h-[1050px] overflow-hidden bg-[#0a1713] select-none"
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

          {/* DÉGRADÉS LÉGERS & ÉPURÉS QUI METTENT EN VALEUR LA PHOTO DU PLAT SANS L'OBSTRUER */}
          <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* ════════ CALLOUT DE RÉPUTATION & FRAÎCHEUR LOCALE EN HAUT À DROITE ════════ */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 hidden md:flex items-center gap-2.5 rounded-full bg-black/45 backdrop-blur-md px-4 py-1.5 border border-white/20 text-white shadow-lg pointer-events-none">
        <span className="text-amber-400 font-black text-xs">★ 4.9 / 5</span>
        <span className="text-[10px] font-bold text-[#EADCC9]/90 tracking-wide">
          Google · Fait minute à Visé
        </span>
      </div>

      {/* ════════ TYPOGRAPHIE ÉPURÉE, FLUIDE ET LIMPIDE STYLE POKAWA (SANS GROSSE ÉCRITURE GÊNANTE) ════════ */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl space-y-2.5"
            >
              {/* Badge discret crème biscuit */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EBDCCB] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-[#D9C5AD]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f]" />
                  {slide.badge}
                </span>
                <span className="text-[11px] font-bold text-white/90 drop-shadow">
                  {slide.isCrousty ? "Gamme Chaude" : "Découpe minute"}
                </span>
              </div>

              {/* Titre élégant et épuré (ne mange pas la photo) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                {slide.dishName}
              </h1>

              {/* Ingrédients concis sur une ligne */}
              <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-lg line-clamp-2">
                {slide.ingredients}
              </p>

              {/* Actions rapides & tarif clair */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-[#EBDCCB] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#2C1D16] shadow-[0_8px_25px_rgba(44,29,22,0.45)] transition hover:bg-[#F5ECE0] hover:scale-105 active:scale-95 border border-[#D9C5AD]"
                >
                  <Plus className="h-4 w-4 stroke-[3] text-[#2C1D16]" />
                  <span>Ajouter · {slide.price.toFixed(2)} €</span>
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />

                  {addedNotice && (
                    <span className="absolute -top-9 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-black text-white shadow-xl">
                      <Check className="h-3.5 w-3.5 stroke-[3]" /> Ajouté !
                    </span>
                  )}
                </button>

                <Link
                  to="/product/$productId"
                  params={{ productId: slide.id }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-white/30 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow"
                >
                  Personnaliser
                </Link>

                <a
                  href="#carte"
                  className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#EADCC9] hover:underline ml-1 drop-shadow"
                >
                  La Carte →
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
                  ? "w-8 h-2.5 bg-[#EBDCCB] shadow-[0_0_12px_rgba(235,220,203,0.9)]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-[#EBDCCB]"
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
