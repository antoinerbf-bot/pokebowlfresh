import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
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
  Plus,
  Play,
  Pause,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

// Photos culinaires professionnelles générées pour Poke N Bowl Visé
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import bowlCroustyBlanche from "@/assets/bowl-crousty-blanche.jpg";

interface SlideData {
  id: string;
  name: string;
  category: string;
  headline: string;
  tagline: string;
  desc: string;
  price: number;
  grandPrice?: number;
  badge: string;
  badgeColor: string;
  accentColor: string;
  image: string;
  ingredients: { name: string; emoji: string }[];
  floatingParticles: { emoji: string; name: string; x: string; y: string; delay: number }[];
  isHotCombo?: boolean;
}

const SLIDES: SlideData[] = [
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    category: "POKÉ BOWL NOBLE",
    headline: "La Fraîcheur Marine",
    tagline: "À L'ÉTAT PUR.",
    desc: "Épais dés de saumon atlantique sashimi découpés chaque matin, avocat crémeux, salade d'algues wakame iodée, mangue juteuse, edamame vapeur et notre mayo wasabi veloutée.",
    price: 11.0,
    grandPrice: 14.0,
    badge: "Coup de Cœur Sashimi ✦",
    badgeColor: "#ff705f",
    accentColor: "#ff705f",
    image: bowlSaumon,
    ingredients: [
      { name: "Saumon Sashimi", emoji: "🐟" },
      { name: "Avocat Hass", emoji: "🥑" },
      { name: "Algues Wakame", emoji: "🌿" },
      { name: "Mangue Mûre", emoji: "🥭" },
      { name: "Mayo Wasabi", emoji: "🟢" },
    ],
    floatingParticles: [
      { emoji: "🐟", name: "Saumon Frais", x: "8%", y: "22%", delay: 0 },
      { emoji: "🥑", name: "Avocat Crémeux", x: "86%", y: "26%", delay: 0.4 },
      { emoji: "🥭", name: "Mangue Juteuse", x: "6%", y: "72%", delay: 0.8 },
      { emoji: "🌿", name: "Wakame Iodée", x: "84%", y: "74%", delay: 1.2 },
      { emoji: "🌱", name: "Sésame Toasté", x: "48%", y: "88%", delay: 1.6 },
    ],
  },
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    category: "LE BEST-SELLER GOURMAND",
    headline: "Doux & Caramélisé",
    tagline: "L'INCONTOURNABLE.",
    desc: "Morceaux tendres de poulet doré mariné maison, dés de mangue mûre juteuse, avocat Hass fondant, maïs doux, feta émiettée et nappage brillant de sauce teriyaki.",
    price: 10.0,
    grandPrice: 13.0,
    badge: "Best-Seller N°1 ⭐",
    badgeColor: "#d7ff45",
    accentColor: "#d7ff45",
    image: bowlSweetChicken,
    ingredients: [
      { name: "Poulet Mariné Doré", emoji: "🍗" },
      { name: "Avocat Hass", emoji: "🥑" },
      { name: "Mangue Juteuse", emoji: "🥭" },
      { name: "Feta Émiettée", emoji: "🧀" },
      { name: "Sauce Teriyaki", emoji: "🍯" },
    ],
    floatingParticles: [
      { emoji: "🍗", name: "Poulet Doré", x: "7%", y: "20%", delay: 0 },
      { emoji: "🥑", name: "Avocat Hass", x: "88%", y: "24%", delay: 0.3 },
      { emoji: "🥭", name: "Mangue Mûre", x: "5%", y: "70%", delay: 0.7 },
      { emoji: "🧅", name: "Oignons Frits", x: "85%", y: "72%", delay: 1.1 },
      { emoji: "🍯", name: "Teriyaki Glaze", x: "50%", y: "86%", delay: 1.5 },
    ],
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Curry",
    category: "SPÉCIALITÉ CHAUDE · FORMULE 11€",
    headline: "Le Crousty Pané Minute",
    tagline: "CHAUD & ADDICTIF.",
    desc: "Notre formule étudiante signature : généreux filets de poulet pané extra croustillant, sauce curry onctueuse parfumée, oignons frits croquants sur riz chaud parfumé. Boisson 33cl incluse !",
    price: 11.0,
    grandPrice: 11.0,
    badge: "Formule 11€ avec Boisson 🥤",
    badgeColor: "#f59e0b",
    accentColor: "#f59e0b",
    image: bowlCroustyCurry,
    isHotCombo: true,
    ingredients: [
      { name: "Poulet Extra Croustillant", emoji: "🍗" },
      { name: "Sauce Curry Veloutée", emoji: "🍛" },
      { name: "Oignons Frits", emoji: "🧅" },
      { name: "Riz Chaud Parfumé", emoji: "🍚" },
      { name: "Boisson 33cl Incluse", emoji: "🥤" },
    ],
    floatingParticles: [
      { emoji: "🍗", name: "Crousty Chicken", x: "8%", y: "22%", delay: 0.1 },
      { emoji: "🍛", name: "Curry Maison", x: "87%", y: "25%", delay: 0.5 },
      { emoji: "🧅", name: "Oignons Croquants", x: "6%", y: "68%", delay: 0.9 },
      { emoji: "🥤", name: "Canette 33cl Offerte", x: "85%", y: "75%", delay: 1.3 },
      { emoji: "✨", name: "Chaud Minute", x: "46%", y: "88%", delay: 1.7 },
    ],
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    category: "SAISI AU GRILL MINUTE",
    headline: "Scampis Royaux Dorés",
    tagline: "SAVEUR INTENSE.",
    desc: "Scampis royaux saisis minute à haute température, guacamole maison velouté, tomates cerises juteuses, edamame vapeur, concombre croquant et spicy mayo onctueuse.",
    price: 10.0,
    grandPrice: 13.0,
    badge: "Saisi au Grill 🦐",
    badgeColor: "#d7ff45",
    accentColor: "#d7ff45",
    image: bowlScampis,
    ingredients: [
      { name: "Scampis Royaux Grillés", emoji: "🦐" },
      { name: "Guacamole Velouté", emoji: "🥑" },
      { name: "Edamame Croquant", emoji: "🫘" },
      { name: "Jalapeños Frais", emoji: "🌶️" },
      { name: "Spicy Mayo", emoji: "🍶" },
    ],
    floatingParticles: [
      { emoji: "🦐", name: "Scampis Royaux", x: "9%", y: "20%", delay: 0 },
      { emoji: "🥑", name: "Guacamole", x: "87%", y: "27%", delay: 0.4 },
      { emoji: "🍅", name: "Tomates Cerises", x: "6%", y: "70%", delay: 0.8 },
      { emoji: "🌶️", name: "Spicy Mayo", x: "84%", y: "70%", delay: 1.2 },
      { emoji: "🫘", name: "Edamame", x: "50%", y: "88%", delay: 1.6 },
    ],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    category: "LE KICK ÉPICÉ PARFAIT",
    headline: "Poulet Mariné & Épices",
    tagline: "CHILI CRUNCH.",
    desc: "Poulet mariné rôti aux épices chaudes, patates douces rôties au four, maïs croquant, feta grecque, rondelles de jalapeños frais et spicy mayo relevée sur riz à sushi.",
    price: 10.0,
    grandPrice: 13.0,
    badge: "Touche Pimentée 🔥",
    badgeColor: "#ff705f",
    accentColor: "#ff705f",
    image: bowlSpicyChicken,
    ingredients: [
      { name: "Poulet Rôti Épicé", emoji: "🍗" },
      { name: "Patates Douces", emoji: "🍠" },
      { name: "Jalapeños Piquants", emoji: "🌶️" },
      { name: "Feta Grecque", emoji: "🧀" },
      { name: "Spicy Mayo", emoji: "🔥" },
    ],
    floatingParticles: [
      { emoji: "🍗", name: "Poulet Rôti", x: "8%", y: "22%", delay: 0.2 },
      { emoji: "🍠", name: "Patate Douce", x: "86%", y: "25%", delay: 0.6 },
      { emoji: "🌶️", name: "Jalapeños", x: "7%", y: "72%", delay: 1.0 },
      { emoji: "🧀", name: "Feta", x: "85%", y: "73%", delay: 1.4 },
      { emoji: "🔥", name: "Chili Flakes", x: "48%", y: "86%", delay: 1.8 },
    ],
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Sauce Blanche",
    category: "SPÉCIALITÉ CHAUDE · FORMULE 11€",
    headline: "Onctuosité & Croustillant",
    tagline: "RECETTE MAISON.",
    desc: "Poulet pané doré ultra croustillant, nappé de notre sauce blanche maison ail doux et herbes fines, oignons frits croustillants et riz chaud parfumé. Boisson 33cl incluse !",
    price: 11.0,
    grandPrice: 11.0,
    badge: "Formule 11€ Boisson 🥤",
    badgeColor: "#d7ff45",
    accentColor: "#d7ff45",
    image: bowlCroustyBlanche,
    isHotCombo: true,
    ingredients: [
      { name: "Poulet Croustillant", emoji: "🍗" },
      { name: "Sauce Blanche Ail & Herbes", emoji: "🤍" },
      { name: "Oignons Frits Croquants", emoji: "🧅" },
      { name: "Riz Chaud Parfumé", emoji: "🍚" },
      { name: "Boisson 33cl Incluse", emoji: "🥤" },
    ],
    floatingParticles: [
      { emoji: "🍗", name: "Poulet Croustillant", x: "7%", y: "20%", delay: 0.1 },
      { emoji: "🤍", name: "Sauce Blanche", x: "88%", y: "26%", delay: 0.5 },
      { emoji: "🧅", name: "Oignons Frits", x: "5%", y: "69%", delay: 0.9 },
      { emoji: "🥤", name: "Boisson 33cl", x: "86%", y: "72%", delay: 1.3 },
      { emoji: "🌿", name: "Herbes Fraîches", x: "50%", y: "88%", delay: 1.7 },
    ],
  },
];

const AUTOPLAY_DURATION = 5500; // 5.5s par slide

export function HeroCinematicBackground() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [addedNotice, setAddedNotice] = React.useState(false);
  const { addItem } = useCart();

  const currentSlide = SLIDES[currentIndex];
  const effectivePrice =
    selectedSize === "grand" && currentSlide.grandPrice && !currentSlide.isHotCombo
      ? currentSlide.grandPrice
      : currentSlide.price;

  // Auto-play timer
  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handleQuickAdd = () => {
    addItem({
      id: `${currentSlide.id}-${selectedSize}`,
      name: `${currentSlide.name} (${selectedSize === "grand" && !currentSlide.isHotCombo ? "Grand" : "Moyen"})`,
      basePrice: effectivePrice,
      price: effectivePrice,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  return (
    <section
      aria-label="Présentation cinématographique des plats Poke N Bowl"
      className="relative min-h-[92vh] sm:min-h-[94vh] lg:min-h-[96vh] w-full overflow-hidden bg-[#0a1512] text-white flex flex-col justify-between"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* ════════ BACKGROUND CINÉMATIQUE AVEC PHOTOS GÉNÉRÉES ════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            {/* L'image culinaire en plein écran */}
            <motion.img
              src={currentSlide.image}
              alt={currentSlide.name}
              animate={{ scale: [1, 1.06] }}
              transition={{ duration: 9, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              className="h-full w-full object-cover object-center filter saturate-[1.12] contrast-[1.06]"
            />

            {/* Overlays d'ambiance et lisibilité maximale style Pokawa */}
            {/* 1. Dégradé sombre gauche & bas pour contraster les textes et boutons */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07130f]/95 via-[#07130f]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07130f] via-[#07130f]/50 to-[#07130f]/40" />

            {/* 2. Vignette radiale subtile pour recentrer le bol */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0)_0%,rgba(7,19,15,0.75)_80%)]" />

            {/* 3. Halo lumineux dynamique teinté à la couleur de la recette */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 1 }}
              className="absolute -top-24 right-1/4 h-[420px] w-[420px] rounded-full blur-[120px] pointer-events-none"
              style={{ background: currentSlide.accentColor }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Effet trame points subtils de texture */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* ════════ INGRÉDIENTS FLOTTANTS ANIMÉS (STYLE CINÉMATIQUE POKAWA) ════════ */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden sm:block">
        <AnimatePresence>
          {currentSlide.floatingParticles.map((part, i) => (
            <motion.div
              key={`${currentSlide.id}-particle-${i}`}
              initial={{ opacity: 0, scale: 0.4, y: 30 }}
              animate={{
                opacity: 0.95,
                scale: 1,
                y: [0, -14, 0],
                rotate: [0, i % 2 === 0 ? 8 : -8, 0],
              }}
              exit={{ opacity: 0, scale: 0.5, y: -20 }}
              transition={{
                opacity: { duration: 0.5, delay: part.delay },
                scale: { duration: 0.5, delay: part.delay },
                y: {
                  duration: 4.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: part.delay,
                },
                rotate: {
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: part.delay,
                },
              }}
              style={{ left: part.x, top: part.y }}
              className="absolute flex items-center gap-2 rounded-full border border-white/20 bg-[#0c1a16]/80 px-3 py-1.5 shadow-2xl backdrop-blur-md"
            >
              <span className="text-base sm:text-lg">{part.emoji}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">
                {part.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ════════ TOP BARRE INFO EN DIRECT VISÉ (SOUS LE HEADER) ════════ */}
      <div className="relative z-20 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1340px] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#d7ff45] animate-pulse" />
            <span className="font-extrabold uppercase tracking-[0.15em] text-[#d7ff45] text-[10px]">
              Service Ouvert à Visé
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/80 font-medium text-[11px] hidden sm:inline">
              Avenue du Pont 12 · Préparé minute en 10 min
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/80 text-[11px]">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="text-[#d7ff45]">★ 4.9/5</span>
              <span className="text-white/40">·</span>
              <span>Plus de 150 avis gourmands</span>
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase font-bold text-white/70 hover:text-white transition"
              title={isPlaying ? "Mettre en pause l'animation" : "Lancer le diaporama"}
            >
              {isPlaying ? <Pause className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5" />}
              <span>{isPlaying ? "Diaporama actif" : "Pause"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ════════ MAIN CONTENT CINÉMATIQUE ════════ */}
      <div className="relative z-20 mx-auto max-w-[1340px] w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 my-auto">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* COLONNE GAUCHE : TITRE POKAWA STYLE, PUNCHLINE & ACTIONS */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Badge catégorie */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] shadow-md border"
                    style={{
                      backgroundColor: `${currentSlide.accentColor}25`,
                      color: currentSlide.accentColor,
                      borderColor: `${currentSlide.accentColor}50`,
                    }}
                  >
                    <Sparkles className="h-3 w-3" />
                    {currentSlide.category}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/15 backdrop-blur">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Nom du plat & headline cinématique */}
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.04]">
                    <span className="block text-white drop-shadow-md">
                      {currentSlide.headline}
                    </span>
                    <span
                      className="block tracking-tight drop-shadow-md"
                      style={{ color: currentSlide.accentColor }}
                    >
                      {currentSlide.name}
                    </span>
                  </h1>
                </div>

                {/* Description de la recette */}
                <p className="text-sm sm:text-base leading-relaxed text-white/90 max-w-xl font-medium drop-shadow">
                  {currentSlide.desc}
                </p>

                {/* Pills des ingrédients frais du plat */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentSlide.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-bold text-white/95 backdrop-blur-md shadow-sm"
                    >
                      <span>{ing.emoji}</span>
                      <span>{ing.name}</span>
                    </span>
                  ))}
                </div>

                {/* Sélecteur de format si poké bowl classique */}
                {!currentSlide.isHotCombo && (
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                      Format :
                    </span>
                    <div className="inline-flex rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur">
                      <button
                        type="button"
                        onClick={() => setSelectedSize("moyen")}
                        className={`rounded-full px-3.5 py-1 text-xs font-black transition ${
                          selectedSize === "moyen"
                            ? "bg-[#d7ff45] text-[#0a1512] shadow"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        Moyen (10 €)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedSize("grand")}
                        className={`rounded-full px-3.5 py-1 text-xs font-black transition ${
                          selectedSize === "grand"
                            ? "bg-[#d7ff45] text-[#0a1512] shadow"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        Grand (13 €)
                      </button>
                    </div>
                  </div>
                )}

                {/* LIGNE DE PRIX & ACTIONS PRINCIPALES */}
                <div className="flex flex-wrap items-center gap-3.5 pt-3">
                  {/* Bouton principal Ajouter direct au panier */}
                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className="relative group inline-flex items-center gap-2.5 rounded-full bg-[#d7ff45] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0a1512] shadow-2xl transition hover:bg-white hover:scale-105 active:scale-95"
                  >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>
                      Ajouter au panier · {effectivePrice.toFixed(2)} €
                    </span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                    {/* Pop notification de confirmation */}
                    {addedNotice && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -42, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-x-0 mx-auto -top-2 flex w-max items-center gap-1.5 rounded-full bg-[#10251f] border border-[#d7ff45] px-3 py-1 text-[11px] font-black text-[#d7ff45] shadow-2xl"
                      >
                        <Check className="h-3 w-3 stroke-[3]" /> Ajouté au panier !
                      </motion.span>
                    )}
                  </button>

                  {/* Bouton Personnaliser ou Composer */}
                  <Link
                    to="/product/$productId"
                    params={{ productId: currentSlide.id }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/50"
                  >
                    <span>Personnaliser</span>
                    <Sparkles className="h-3.5 w-3.5" />
                  </Link>

                  {/* Lien Sur-Mesure */}
                  <Link
                    to="/sur-mesure"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2"
                  >
                    <span>Ou compose de A à Z</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLONNE DROITE : FOCUS CARTE HERO ULTRA-MODERNE DU PLAT */}
          <div className="relative flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.94, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[420px] rounded-[36px] border border-white/20 bg-gradient-to-b from-white/15 to-black/60 p-4 sm:p-5 shadow-2xl backdrop-blur-xl"
              >
                {/* Vignette avec photo du bol */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-white/10 shadow-inner group">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Tag coin gauche */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#10251f]/85 border border-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] backdrop-blur">
                    ✦ Fait Minute à Visé
                  </span>

                  {/* Badge Prix coin droit */}
                  <span className="absolute top-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-xs font-black text-[#10251f] shadow-lg">
                    {effectivePrice.toFixed(2)} €
                  </span>

                  {/* Bas de l'image : titre & rapide résumé */}
                  <div className="absolute bottom-3.5 inset-x-3.5 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                        {currentSlide.category}
                      </p>
                      <h3 className="text-xl font-black text-white drop-shadow">
                        {currentSlide.name}
                      </h3>
                    </div>
                    <Link
                      to="/product/$productId"
                      params={{ productId: currentSlide.id }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10251f] shadow-lg transition hover:scale-110 hover:bg-[#d7ff45]"
                      title="Voir le détail et personnaliser"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Petite barre de réassurance sous la carte */}
                <div className="mt-3.5 flex items-center justify-between text-[11px] font-bold text-white/80 px-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#d7ff45]" /> 10-15 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#ff705f]" /> Centre de Visé
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#d7ff45]" /> Zéro surgelé
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Flèches de navigation gauche / droite flottantes */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Plat précédent"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black hover:scale-110 shadow-xl"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Plat suivant"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-white hover:text-black hover:scale-110 shadow-xl"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ════════ BARRE INFÉRIEURE : THUMBNAILS DES 6 PLATS & PROGRESS TIMER ════════ */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Label et numéro de slide */}
          <div className="flex items-center gap-3 text-xs font-bold text-white/70">
            <span className="font-mono text-[#d7ff45]">
              0{currentIndex + 1} / 0{SLIDES.length}
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline uppercase tracking-wider text-[11px]">
              Cliquez pour changer de plat
            </span>
          </div>

          {/* Sélecteur horizontal des 6 plats avec miniature et barre de progression */}
          <div className="flex w-full md:w-auto items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex items-center gap-2.5 rounded-2xl px-3 py-1.5 transition-all text-left shrink-0 ${
                    isActive
                      ? "bg-white/20 border border-white/40 shadow-md"
                      : "bg-black/30 border border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Petite photo vignette */}
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className={`h-7 w-7 rounded-lg object-cover transition ${
                      isActive ? "scale-105" : "grayscale-[40%]"
                    }`}
                  />
                  <div className="min-w-0 pr-1">
                    <p
                      className={`text-[11px] font-black uppercase tracking-tight truncate ${
                        isActive ? "text-[#d7ff45]" : "text-white"
                      }`}
                    >
                      {slide.name}
                    </p>
                    <p className="text-[9px] font-bold text-white/60 leading-none">
                      {slide.price.toFixed(2)} €
                    </p>
                  </div>

                  {/* Barre de progression animée sur la slide active */}
                  {isActive && isPlaying && (
                    <motion.div
                      key={`timer-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                      className="absolute bottom-0 inset-x-0 h-[2.5px] rounded-b-2xl bg-[#d7ff45]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
