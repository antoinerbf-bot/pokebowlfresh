import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Sparkles,
  Plus,
  Check,
  ArrowRight,
  UtensilsCrossed,
  Clock,
  CupSoda,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DishImage } from "./DishImage";

// Visuels officiels haute définition du Crousty Chicken
import heroCroustyMixWide from "@/assets/hero-crousty-mix-wide.jpg";
import heroCroustyWide from "@/assets/hero-crousty-wide.jpg";
import heroCroustyBlancheWide from "@/assets/hero-crousty-blanche-wide.jpg";
import bowlCroustyMix from "@/assets/bowl-crousty-mix.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlCroustyBlanche from "@/assets/bowl-crousty-blanche.jpg";

interface CroustyRecipe {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  price: number;
  heroImage: string;
  bowlImage: string;
  sauceDescription: string;
  tastingNotes: string[];
  description: string;
  sauceAccent: {
    name: string;
    emoji: string;
    color: string;
    bgBadge: string;
  };
}

const CROUSTY_RECIPES: CroustyRecipe[] = [
  {
    id: "crousty-chicken-mix",
    name: "Crousty Chicken Mix (Curry & Blanche)",
    shortName: "Crousty Mix",
    tagline: "Le duo star incontournable : deux sauces signatures pour une explosion de saveurs",
    badge: "⭐ Formule Star · Duo Exclusif",
    badgeColor: "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white",
    price: 11.0,
    heroImage: heroCroustyMixWide,
    bowlImage: bowlCroustyMix,
    sauceDescription: "Duo onctueux Sauce Curry douce mijotée + Sauce Blanche maison aux fines herbes & pointe d'aigre-douce",
    tastingNotes: [
      "🍗 Morceaux de poulet croustillant dorés minute",
      "🍛 Sauce curry mijotée douce et crémeuse",
      "🤍 Sauce blanche maison veloutée",
      "🧅 Oignons frits dorés extra croustillants",
      "🍚 Riz parfumé servi bien chaud",
      "🥤 Canette 33 cl incluse au choix",
    ],
    description:
      "La création vedette qui fait l'unanimité : de généreux morceaux de poulet croustillant posés sur un lit de riz parfumé chaud, magnifiés par la rencontre unique de notre sauce curry dorée et de notre sauce blanche maison.",
    sauceAccent: {
      name: "Duo Curry & Blanche",
      emoji: "🍛🤍",
      color: "#f59e0b",
      bgBadge: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    },
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Sauce Curry",
    shortName: "Crousty Curry",
    tagline: "L'onctuosité chaude et réconfortante d'un curry doux et savoureux",
    badge: "🍛 Classique Gourmand · Curry Doux",
    badgeColor: "bg-[#d97706] text-white",
    price: 11.0,
    heroImage: heroCroustyWide,
    bowlImage: bowlCroustyCurry,
    sauceDescription: "Sauce curry maison riche, onctueuse et subtilement épicée sans piquant agressif",
    tastingNotes: [
      "🍗 Bouchées de poulet pané frites minute",
      "🍛 Nappage généreux sauce curry douce",
      "🍯 Touche subtile d'aigre-douce brillante",
      "🧅 Pluie d'oignons croustillants dorés",
      "🍚 Riz blanc parfumé fondant",
      "🥤 Boisson 33 cl fraîche comprise",
    ],
    description:
      "Pour les amateurs de saveurs chaudes et enveloppantes : un nappage généreux de sauce curry maison, douce et soyeuse, qui enrobe chaque morceau de poulet croustillant.",
    sauceAccent: {
      name: "Curry Chaud Onctueux",
      emoji: "🍛",
      color: "#d97706",
      bgBadge: "bg-[#d97706]/15 text-[#d97706] border-[#d97706]/30",
    },
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    shortName: "Crousty Blanche",
    tagline: "La douceur crémeuse aux fines herbes et pointe d'ail doux",
    badge: "🤍 Velouté & Fraîcheur · Recette Maison",
    badgeColor: "bg-[#FAF5EE] text-[#2C1D16] border border-[#DECBB3]",
    price: 11.0,
    heroImage: heroCroustyBlancheWide,
    bowlImage: bowlCroustyBlanche,
    sauceDescription: "Sauce blanche fraîcheur aux herbes délicates, texture veloutée et équilibrée",
    tastingNotes: [
      "🍗 Blancs de poulet panés ultra croustillants",
      "🤍 Sauce blanche onctueuse aux fines herbes",
      "🧄 Légère pointe d'ail doux harmonieux",
      "🧅 Oignons croustillants caramélisés",
      "🍚 Riz chaud en barquette rectangulaire",
      "🥤 Canette 33 cl au choix offerte",
    ],
    description:
      "Le mariage parfait de la texture croustillante et de la rondeur veloutée : une sauce blanche maison parfumée aux fines herbes qui adoucit chaque bouchée avec fraîcheur.",
    sauceAccent: {
      name: "Sauce Blanche Fines Herbes",
      emoji: "🤍",
      color: "#FAF5EE",
      bgBadge: "bg-white/20 text-[#FAF5EE] border-white/30",
    },
  },
];

const DRINK_OPTIONS = [
  { id: "coca", label: "Coca-Cola (33 cl)", emoji: "🥤" },
  { id: "coca-zero", label: "Coca-Cola Zéro (33 cl)", emoji: "🥤" },
  { id: "fanta", label: "Fanta Orange (33 cl)", emoji: "🍊" },
  { id: "ice-tea", label: "Ice Tea Sparkling (33 cl)", emoji: "🧊" },
  { id: "eau-plate", label: "SPA Reine Eau plate (50 cl)", emoji: "💧" },
  { id: "eau-gaz", label: "SPA Intense Eau pétillante (50 cl)", emoji: "🫧" },
];

export function CroustyExperienceSection({
  className = "",
}: {
  className?: string;
}) {
  const { addItem, setIsCartOpen } = useCart();
  const [selectedDrinks, setSelectedDrinks] = useState<Record<string, string>>({
    "crousty-chicken-mix": "Coca-Cola (33 cl)",
    "crousty-chicken-curry": "Coca-Cola (33 cl)",
    "crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)",
  });
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddCrousty = (recipe: CroustyRecipe) => {
    const chosenDrink = selectedDrinks[recipe.id] || "Coca-Cola (33 cl)";
    addItem({
      id: recipe.id,
      name: recipe.name,
      basePrice: recipe.price,
      price: recipe.price,
      quantity: 1,
      toppings: [`Boisson 33cl incluse : ${chosenDrink}`],
      removedIngredients: [],
      image: recipe.bowlImage,
    });

    setAddedIds((prev) => ({ ...prev, [recipe.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [recipe.id]: false }));
    }, 1800);
    setIsCartOpen(true);
  };

  const handleDrinkChange = (recipeId: string, drinkLabel: string) => {
    setSelectedDrinks((prev) => ({ ...prev, [recipeId]: drinkLabel }));
  };

  const mixRecipe = CROUSTY_RECIPES[0];
  const curryRecipe = CROUSTY_RECIPES[1];
  const blancheRecipe = CROUSTY_RECIPES[2];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* ── Entête de la Gamme Crousty ─────────────────────────────────── */}
      <div className="relative z-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#23130A] via-[#311A0E] to-[#1C0F08] p-6 sm:p-10 text-[#FAF5EE] border-2 border-[#ea580c]/30 shadow-lift">
        {/* Lueur d'ambiance chaude en arrière-plan */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-80 w-80 rounded-full bg-[#ea580c]/20 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-80 w-80 rounded-full bg-[#f59e0b]/15 blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ea580c] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                <Flame className="h-3.5 w-3.5 fill-white animate-pulse" />
                La Spécialité Chaude Pokénball
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-[11px] font-bold text-[#f59e0b] border border-[#f59e0b]/30">
                <Sparkles className="h-3 w-3" />
                Doré minute à la commande
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              L'Expérience <span className="text-[#f59e0b]">Crousty Chicken</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#EADCC9]/85 font-medium leading-relaxed max-w-2xl">
              Morceaux de blanc de poulet croustillant frits minute, généreusement nappés de nos sauces signatures maison, parsemés d'oignons dorés et servis bien chauds sur riz parfumé en barquette rectangulaire kraft.
            </p>
          </div>

          {/* Badge Formule Étudiant 11 € Midi */}
          <div className="shrink-0 flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ea580c] text-white text-2xl shadow-sm">
              🎓
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#f59e0b]">
                Formule Étudiant · Midi Uniquement
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">11,00 €</span>
                <span className="text-xs font-bold text-[#EADCC9]/80">Canette 33 cl incluse</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Disposition Éditoriale Asymétrique des 3 Recettes ────────────── */}
      <div className="space-y-8">
        {/* ══════════════════════════════════════════════════════════════════
            1. PIÈCE MAÎTRESSE : CROUSTY CHICKEN MIX (Duo Curry & Blanche)
           ══════════════════════════════════════════════════════════════════ */}
        <div className="group relative overflow-hidden rounded-[34px] border-2 border-[#ea580c]/50 bg-gradient-to-br from-[#1C1008] via-[#2A160B] to-[#1F1109] text-[#FAF5EE] shadow-lift transition hover:border-[#ea580c] duration-500">
          <div className="grid lg:grid-cols-12 gap-0 items-stretch">
            {/* Colonne Gauche : Grande Photographie Immersive */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-black">
              <img
                src={mixRecipe.heroImage}
                alt={mixRecipe.name}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105 filter contrast-[1.06] saturate-[1.12]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#1C1008]/20 lg:to-[#1C1008] pointer-events-none" />

              {/* Tag Flottant Étoile */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ea580c] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                  ⭐ {mixRecipe.badge}
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-black text-[#f59e0b] border border-[#f59e0b]/40 shadow">
                  11,00 € avec boisson
                </span>
              </div>

              {/* Mention Texture */}
              <div className="absolute bottom-4 left-4 z-10 rounded-xl bg-black/70 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-[#EADCC9] border border-white/15">
                🍗 Morceaux croustillants dorés minute · Barquette chaude
              </div>
            </div>

            {/* Colonne Droite : Fiche Recette & Choix Boisson & Ajout Panier */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-[#f59e0b]/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#f59e0b] border border-[#f59e0b]/30">
                    Duo de Sauces Exclusif
                  </span>
                  <span className="text-xs font-bold text-[#EADCC9]/70">Recette Star</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {mixRecipe.name}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-[#EADCC9]/80 font-medium leading-relaxed">
                  {mixRecipe.description}
                </p>

                {/* Point forts de la recette */}
                <div className="mt-5 space-y-2">
                  {mixRecipe.tastingNotes.slice(0, 4).map((note, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#FAF5EE]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c] shrink-0" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>

                {/* Sélecteur de Boisson 33cl incluse */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#f59e0b] flex items-center gap-1.5">
                      <CupSoda className="h-3.5 w-3.5" /> Boisson 33 cl incluse au choix :
                    </span>
                    <span className="text-[10px] font-bold text-white/60">Formule Midi</span>
                  </div>

                  <select
                    value={selectedDrinks[mixRecipe.id] || "Coca-Cola (33 cl)"}
                    onChange={(e) => handleDrinkChange(mixRecipe.id, e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white backdrop-blur-md focus:border-[#f59e0b] focus:outline-none focus:ring-1 focus:ring-[#f59e0b] cursor-pointer"
                  >
                    {DRINK_OPTIONS.map((d) => (
                      <option key={d.id} value={d.label} className="bg-[#2C1D16] text-white">
                        {d.emoji} {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bouton d'Action Express */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#EADCC9]/60">
                    Formule complète
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#f59e0b]">11,00 €</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddCrousty(mixRecipe)}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-md ${
                    addedIds[mixRecipe.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-[#ea580c] hover:bg-[#c2410c] text-white hover:scale-105"
                  }`}
                >
                  {addedIds[mixRecipe.id] ? (
                    <>
                      <Check className="h-4 w-4 stroke-[3]" />
                      <span>Ajouté au panier !</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 stroke-[3]" />
                      <span>Ajouter le Mix</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            2 & 3. DUO DIFFÉRENCIÉ : CROUSTY CURRY & CROUSTY BLANCHE
           ══════════════════════════════════════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* ── CARTE 2 : CROUSTY SAUCE CURRY ──────────────────────────── */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border-2 border-[#d97706]/40 bg-gradient-to-br from-[#231409] via-[#2F180B] to-[#1F1008] text-[#FAF5EE] shadow-card transition duration-500 hover:border-[#f59e0b] hover:-translate-y-1.5 hover:shadow-lift">
            <div>
              {/* Photo Culinaires Sauce Curry */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={curryRecipe.heroImage}
                  alt={curryRecipe.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231409] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="rounded-full bg-[#d97706] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                    🍛 Sauce Curry Maison
                  </span>
                </div>

                <div className="absolute bottom-3 right-3.5">
                  <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-black text-[#f59e0b] border border-[#f59e0b]/40 shadow">
                    11,00 € avec canette
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#d97706]">
                  Chaud & Réconfortant
                </span>
                <h4 className="mt-1 text-xl sm:text-2xl font-black text-white leading-snug">
                  {curryRecipe.name}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-[#EADCC9]/80 font-medium">
                  {curryRecipe.description}
                </p>

                {/* Texture chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🍗 Poulet croustillant
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🍛 Curry onctueux
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🧅 Oignons frits
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🍚 Riz chaud
                  </span>
                </div>

                {/* Sélecteur de boisson */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#f59e0b] mb-1.5">
                    Canette 33 cl incluse :
                  </label>
                  <select
                    value={selectedDrinks[curryRecipe.id] || "Coca-Cola (33 cl)"}
                    onChange={(e) => handleDrinkChange(curryRecipe.id, e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-md focus:border-[#f59e0b] focus:outline-none cursor-pointer"
                  >
                    {DRINK_OPTIONS.map((d) => (
                      <option key={d.id} value={d.label} className="bg-[#2C1D16] text-white">
                        {d.emoji} {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-[#f59e0b]">11,00 €</span>
                <button
                  type="button"
                  onClick={() => handleAddCrousty(curryRecipe)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 ${
                    addedIds[curryRecipe.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-[#d97706] hover:bg-[#b45309] text-white"
                  }`}
                >
                  {addedIds[curryRecipe.id] ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Ajouté !</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Commander Curry</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── CARTE 3 : CROUSTY SAUCE BLANCHE ────────────────────────── */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border-2 border-white/20 bg-gradient-to-br from-[#1C140E] via-[#261A13] to-[#1A120B] text-[#FAF5EE] shadow-card transition duration-500 hover:border-white/50 hover:-translate-y-1.5 hover:shadow-lift">
            <div>
              {/* Photo Culinaires Sauce Blanche */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={blancheRecipe.heroImage}
                  alt={blancheRecipe.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-white/30">
                    🤍 Sauce Blanche Maison
                  </span>
                </div>

                <div className="absolute bottom-3 right-3.5">
                  <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-black text-white border border-white/30 shadow">
                    11,00 € avec canette
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                  Velouté & Fines Herbes
                </span>
                <h4 className="mt-1 text-xl sm:text-2xl font-black text-white leading-snug">
                  {blancheRecipe.name}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-[#EADCC9]/80 font-medium">
                  {blancheRecipe.description}
                </p>

                {/* Texture chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🍗 Poulet croustillant
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🤍 Blanche fines herbes
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🧅 Oignons frits
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white border border-white/10">
                    🍚 Riz chaud
                  </span>
                </div>

                {/* Sélecteur de boisson */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#EADCC9] mb-1.5">
                    Canette 33 cl incluse :
                  </label>
                  <select
                    value={selectedDrinks[blancheRecipe.id] || "Coca-Cola (33 cl)"}
                    onChange={(e) => handleDrinkChange(blancheRecipe.id, e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white backdrop-blur-md focus:border-white focus:outline-none cursor-pointer"
                  >
                    {DRINK_OPTIONS.map((d) => (
                      <option key={d.id} value={d.label} className="bg-[#2C1D16] text-white">
                        {d.emoji} {d.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 mt-auto">
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-white">11,00 €</span>
                <button
                  type="button"
                  onClick={() => handleAddCrousty(blancheRecipe)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 ${
                    addedIds[blancheRecipe.id]
                      ? "bg-emerald-600 text-white"
                      : "bg-[#EADCC9] hover:bg-white text-[#2C1D16]"
                  }`}
                >
                  {addedIds[blancheRecipe.id] ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Ajouté !</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5 stroke-[3]" />
                      <span>Commander Blanche</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

