import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires plein écran ultra haute définition 1080p (Poke N Bowl Visé)
import heroSaumonWide from "@/assets/hero-saumon-clean-wide.jpg";
import heroSweetWide from "@/assets/hero-sweet-wide.jpg";
import heroScampisWide from "@/assets/hero-scampis-wide.jpg";
import heroSpicyWide from "@/assets/hero-spicy-wide.jpg";

interface PokawaSlide {
  id: string;
  image: string;
  /** Point focal du plat pour un recadrage parfait sur mobile (CSS object-position) */
  focus?: string;
  dishName: string;
  badge: string;
  subtitle: string;
  ingredientCallout: {
    text: string;
    subtext: string;
    emoji: string;
  };
  keyIngredients: string[];
  price: number;
  ingredients: string;
}

const SLIDES: PokawaSlide[] = [
  {
    id: "saumon-wasabi",
    image: heroSaumonWide,
    focus: "center 42%",
    dishName: "Saumon Wasabi",
    badge: "Signature Premium · Saumon Frais",
    subtitle: "Dés fondants de saumon frais découpé minute & touche wasabi veloutée",
    ingredientCallout: {
      text: "SAUMON FRAIS",
      subtext: "DÉCOUPÉ DU MATIN",
      emoji: "🐟",
    },
    keyIngredients: ["Saumon frais minute", "Avocat mûr à point", "Mangue juteuse", "Edamame croquant", "Salade d'algues wakame"],
    price: 11.0,
    ingredients: "Saumon en dés généreux sur riz, avocat, mangue mûre, edamame croquant, salade d'algues wakame & mayo wasabi veloutée.",
  },
  {
    id: "sweet-chicken",
    image: heroSweetWide,
    focus: "center 45%",
    dishName: "Sweet Chicken",
    badge: "Best-Seller · Poulet Mariné",
    subtitle: "Gourmandise teriyaki, guacamole onctueux & oignons croustillants dorés",
    ingredientCallout: {
      text: "POULET MARINÉ",
      subtext: "MARINADE TERIYAKI",
      emoji: "🍗",
    },
    keyIngredients: ["Poulet mariné fondant", "Guacamole maison", "Feta crémeuse", "Tomates cerises", "Oignons frits croustillants"],
    price: 10.0,
    ingredients: "Poulet mariné sur riz, guacamole velouté, mangue, maïs doux, tomates cerises, feta crémeuse, oignons croustillants & sauce teriyaki.",
  },
  {
    id: "scampis-royaux",
    image: heroScampisWide,
    focus: "center 45%",
    dishName: "Scampis Royal",
    badge: "Coup de Cœur · Scampis Grillés",
    subtitle: "Scampis saisis minute au grill, kick de spicy mayo & fraîcheur exotique",
    ingredientCallout: {
      text: "SCAMPIS ROYAUX",
      subtext: "SAISIS AU GRILL",
      emoji: "🦐",
    },
    keyIngredients: ["Scampis grillés saisis", "Guacamole velouté", "Edamame", "Poivrons croquants", "Spicy mayo relevée"],
    price: 10.0,
    ingredients: "Scampis saisis au grill sur riz, guacamole maison velouté, edamame croquant, tomates fraîches, concombre, poivrons, jalapeños & spicy mayo.",
  },
  {
    id: "spicy-chicken",
    image: heroSpicyWide,
    focus: "center 45%",
    dishName: "Spicy Chicken",
    badge: "Épicé Gourmand · Kick Pimenté",
    subtitle: "Poulet mariné relevé, patates douces rôties, jalapeños & feta fondante",
    ingredientCallout: {
      text: "POULET ÉPICÉ",
      subtext: "FLOCONS DE CHILI",
      emoji: "🔥",
    },
    keyIngredients: ["Poulet mariné épicé", "Patates douces rôties", "Jalapeños pimentés", "Feta crémeuse", "Flocons de chili"],
    price: 10.0,
    ingredients: "Poulet mariné épicé sur riz, avocat, patates douces rôties, maïs doux, feta, jalapeños, sauce spicy mayo onctueuse & sésame mix.",
  },
];

const AUTOPLAY_MS = 6000;

export function PokawaHeroExact() {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem, setIsCartOpen } = useCart();

  const slide = SLIDES[currentIdx];

  // Auto-play fluide avec pause au survol
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [currentIdx, isPaused]);

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
      toppings: ["Taille : Moyen (Standard)"],
      removedIngredients: [],
      image: slide.image,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
    setIsCartOpen(true);
  };

  return (
    <section
      aria-label="Accueil Poké N Bowl Visé — Poké bowls frais & sains"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-auto min-h-[780px] sm:h-[96vh] sm:min-h-[680px] max-h-none sm:max-h-[1050px] overflow-hidden bg-[#0a1713] select-none"
    >
      {/* ════════ PHOTO PLEIN ÉCRAN HAUTE DÉFINITION AVEC TRAITEMENT VISUEL VIBRANT ════════ */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.img
            src={slide.image}
            alt={`${slide.dishName} — Poké N Bowl Visé`}
            initial={{ scale: 1.1, x: "1%" }}
            animate={{ scale: 1.0, x: "0%" }}
            transition={{ duration: AUTOPLAY_MS / 1000 + 1.2, ease: "linear" }}
            style={{ objectPosition: slide.focus ?? "center 45%" }}
            className="h-full w-full object-cover will-change-transform filter contrast-[1.06] saturate-[1.12] brightness-[1.02]"
            loading={currentIdx === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          {/* Dégradés cinématiques étudiés : protègent le texte tout en sublimant le plat */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#140b06]/95 via-[#140b06]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#140b06]/65 via-[#140b06]/20 to-transparent pointer-events-none hidden sm:block" />
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

      {/* ════════ COMPOSITION TYPOGRAPHIQUE ÉDITORIALE HAUT DE GAMME ════════ */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl space-y-3"
            >
              {/* Badge discret crème biscuit */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EBDCCB] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-[#D9C5AD]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" />
                  {slide.badge}
                </span>
                <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-3 py-0.5 text-[10px] font-bold text-white/90 shadow">
                  🥣 Poké Bowl Frais
                </span>
                <span className="text-[11px] font-bold text-white/90 drop-shadow hidden sm:inline">
                  Découpé minute à Visé
                </span>
              </div>

              {/* Balise H1 SEO Principale pour Google (#1 pokenbowl vise) */}
              <h1 className="sr-only">
                Poke N Bowl Visé — Restaurant de Poké Bowls Frais, Crousty Chicken & Bowls sur mesure à Visé (4600)
              </h1>

              {/* Titre du plat visuel */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                {slide.dishName}
              </h2>

              {/* Sous-titre gourmand */}
              <p className="text-xs sm:text-base text-[#FAF5EE] font-semibold leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-xl">
                {slide.subtitle}
              </p>

              {/* Ingrédients clés en puces texturées */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {slide.keyIngredients.map((ing, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-bold text-[#FAF5EE] shadow-xs"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              {/* Actions rapides & tarif clair */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-[#EBDCCB] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#2C1D16] shadow-[0_8px_25px_rgba(44,29,22,0.45)] transition hover:bg-[#F5ECE0] hover:scale-105 active:scale-95 border border-[#D9C5AD] cursor-pointer"
                >
                  <Plus className="h-4 w-4 stroke-[3] text-[#2C1D16]" />
                  <span>Ajouter au panier · dès {slide.price.toFixed(2)} €</span>
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
                  className="inline-flex items-center gap-1.5 rounded-full bg-black/45 border border-white/30 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow cursor-pointer"
                >
                  Personnaliser les ingrédients
                </Link>

                <a
                  href="#carte"
                  className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#EADCC9] hover:text-white hover:underline ml-1 drop-shadow cursor-pointer"
                >
                  Toute la Carte ↓
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ════════ BARRE DE NAVIGATION DES PLATS EN DÉFILEMENT ════════ */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-30 flex items-center justify-center px-3 pointer-events-auto">
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/65 backdrop-blur-xl p-1.5 border border-white/20 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
          {SLIDES.map((s, idx) => {
            const isActive = idx === currentIdx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Afficher le plat ${s.dishName}`}
                className={`relative flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-black transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-[#EBDCCB] text-[#2C1D16] shadow-md scale-102"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Barre de progression fluide sur le plat actif */}
                {isActive && !isPaused && (
                  <motion.div
                    key={`prog-${idx}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-[#ff705f]/25 pointer-events-none"
                  />
                )}
                <span className="text-sm shrink-0">{s.ingredientCallout.emoji}</span>
                <span className="hidden md:inline whitespace-nowrap text-[11px] font-black uppercase tracking-tight">
                  {s.dishName}
                </span>
                {isActive && (
                  <span className="md:hidden text-[10.5px] font-black uppercase tracking-tight">
                    {s.dishName}
                  </span>
                )}
              </button>
            );
          })}
        </div>
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
