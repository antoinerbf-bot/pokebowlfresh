import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Sparkles,
  Plus,
  Check,
  ArrowRight,
  CupSoda,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

// Visuels officiels haute définition du Crousty Chicken
import bowlCroustyBlanche from "@/assets/bowl-crousty-blanche.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlCroustyMix from "@/assets/bowl-crousty-mix.jpg";

interface CroustyRecipe {
  id: string;
  name: string;
  shortTitle: string;
  badge: string;
  badgeIcon: string;
  badgeClass: string;
  accentColor: string;
  price: number;
  image: string;
  tasteNote: string;
  desc: string;
  chips: string[];
}

// ⚠️ ORDRE EXPLICITE DEMANDÉ (FIDÈLE AU FLYER RESTAURANT) :
// 1. Sauce Blanche & Sauce Curry en avant
// 2. Crousty Mix (Duo) vient après !
const CROUSTY_RECIPES: CroustyRecipe[] = [
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    shortTitle: "Sauce Blanche",
    badge: "🤍 Blanche Maison",
    badgeIcon: "🤍",
    badgeClass: "bg-[#2C1D16] text-[#EADCC9]",
    accentColor: "#2C1D16",
    price: 11.0,
    image: bowlCroustyBlanche,
    tasteNote: "Douceur onctueuse de notre blanche maison veloutée et oignons frits",
    desc: "Poulet croustillant doré minute sur lit de riz parfumé, blanche maison veloutée, oignon frit croustillant et pointe d'aigre-douce. Formule avec boisson incluse !",
    chips: ["✓ Poulet croustillant", "✓ Riz parfumé", "✓ Blanche maison", "✓ Oignon frit croustillant", "✓ Aigre douce"],
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Sauce Curry",
    shortTitle: "Sauce Curry",
    badge: "🍛 Curry Onctueux",
    badgeIcon: "🍛",
    badgeClass: "bg-[#d97706] text-white",
    accentColor: "#d97706",
    price: 11.0,
    image: bowlCroustyCurry,
    tasteNote: "Onctuosité chaude et réconfortante de notre sauce curry maison",
    desc: "Poulet croustillant doré minute sur lit de riz parfumé, généreusement nappé de sauce curry onctueuse, oignon frit croustillant et pointe d'aigre-douce. Formule avec boisson incluse !",
    chips: ["✓ Poulet croustillant", "✓ Riz parfumé", "✓ Sauce curry onctueuse", "✓ Oignon frit croustillant", "✓ Aigre douce"],
  },
  {
    id: "crousty-chicken-mix",
    name: "Crousty Chicken Mix (Curry & Blanche)",
    shortTitle: "Crousty Mix",
    badge: "⚡ Duo Curry & Blanche",
    badgeIcon: "⚡",
    badgeClass: "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white shadow-xs",
    accentColor: "#ea580c",
    price: 11.0,
    image: bowlCroustyMix,
    tasteNote: "Le mix star réunissant les deux sauces signatures : Curry & Blanche",
    desc: "La formule vedette réunissant les deux sauces : poulet croustillant sur lit de riz parfumé, duo Sauce Curry onctueuse + Blanche maison, oignon frit et aigre-douce. Formule avec boisson incluse !",
    chips: ["✓ Poulet croustillant", "✓ Riz parfumé", "✓ Curry & Blanche réunis", "✓ Oignon frit croustillant", "✓ Aigre douce"],
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
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedDrinks, setSelectedDrinks] = useState<Record<string, string>>({
    "crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)",
    "crousty-chicken-curry": "Coca-Cola (33 cl)",
    "crousty-chicken-mix": "Coca-Cola (33 cl)",
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
      image: recipe.image,
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

  // Filtrage fluide selon l'onglet actif
  const displayedRecipes =
    selectedFilter === "all"
      ? CROUSTY_RECIPES
      : CROUSTY_RECIPES.filter((r) => r.id === selectedFilter);

  return (
    <div className={`relative ${className}`}>
      {/* ── En-tête harmonieux fidèle à l'affiche officielle Crousty Chicken ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 pb-5 border-b border-[#DECBB3]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#2C1D16]">
            <Flame className="h-3.5 w-3.5 text-[#ea580c] animate-pulse" />
            Maintenant disponible · Le croustillant qui fait référence !
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2C1D16]">
            CROUSTY CHICKEN
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#766358] max-w-2xl font-medium">
            Poulet croustillant doré minute sur lit de riz parfumé, oignon frit croquant & sauces maison.
            <strong className="text-[#ea580c] ml-1">Menu Étudiant à 11 € avec canette 33 cl incluse !</strong>
          </p>
        </div>

        {/* Badge Formule Étudiant fidèle au flyer */}
        <div className="shrink-0 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EE] border-2 border-[#ea580c]/30 p-3.5 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ea580c] text-white text-lg font-black shadow-xs">
            11€
          </div>
          <div>
            <span className="block text-[11px] font-black uppercase tracking-wider text-[#ea580c]">
              Menu Étudiant
            </span>
            <span className="text-xs font-black text-[#2C1D16]">
              Boisson 33 cl incluse 🥤
            </span>
          </div>
        </div>
      </div>

      {/* ── Sélecteur dynamique de recette (onglets fluides) ───────────── */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        <button
          type="button"
          onClick={() => setSelectedFilter("all")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${
            selectedFilter === "all"
              ? "bg-[#2C1D16] text-white shadow-xs"
              : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"
          }`}
        >
          <span>🍗 Toutes les recettes</span>
          <span className="rounded-full bg-black/10 px-1.5 py-0.2 text-[10px]">3</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter("crousty-chicken-sauce-blanche")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${
            selectedFilter === "crousty-chicken-sauce-blanche"
              ? "bg-[#2C1D16] text-white shadow-xs"
              : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"
          }`}
        >
          <span>🤍 1. Sauce Blanche</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter("crousty-chicken-curry")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${
            selectedFilter === "crousty-chicken-curry"
              ? "bg-[#d97706] text-white shadow-xs"
              : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"
          }`}
        >
          <span>🍛 2. Sauce Curry</span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedFilter("crousty-chicken-mix")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition cursor-pointer shrink-0 ${
            selectedFilter === "crousty-chicken-mix"
              ? "bg-[#ea580c] text-white shadow-xs"
              : "bg-[#FFFDF9] text-[#766358] border border-[#DECBB3] hover:text-[#2C1D16]"
          }`}
        >
          <span>⭐ 3. Le Mix (Duo)</span>
        </button>
      </div>

      {/* ── Grille fluide et équilibrée des recettes Crousty ───────────── */}
      <div
        className={`grid gap-6 ${
          displayedRecipes.length === 1
            ? "max-w-xl mx-auto"
            : displayedRecipes.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {displayedRecipes.map((recipe, idx) => {
          const isAdded = addedIds[recipe.id];
          const isMix = recipe.id === "crousty-chicken-mix";

          return (
            <motion.div
              layout
              key={recipe.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`group flex flex-col justify-between overflow-hidden rounded-[26px] border-2 bg-[#FFFDF9] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                isMix
                  ? "border-[#ea580c]/60 ring-2 ring-[#ea580c]/10"
                  : "border-[#DECBB3] hover:border-[#2C1D16]/40"
              }`}
            >
              <div>
                {/* Photographie gourmande avec cadrage optimisé et zoom doux */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#2C1D16]">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                  {/* Badge Recette */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-sm ${recipe.badgeClass}`}
                    >
                      {recipe.badge}
                    </span>
                  </div>

                  {/* Badge Prix & Canette */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16] shadow-sm">
                      11,00 €
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-md bg-black/70 backdrop-blur-md px-2 py-0.5 text-[9px] font-extrabold text-[#EADCC9]">
                      Boisson 33 cl incluse 🥤
                    </span>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ea580c]">
                      {isMix ? "Formule Duo Vedette" : "Recette Phare"}
                    </span>
                    <span className="text-[10px] font-bold text-[#766358]">
                      Barquette Chaude
                    </span>
                  </div>

                  <h4 className="mt-1 text-lg sm:text-xl font-black text-[#2C1D16] group-hover:text-[#ea580c] transition">
                    {recipe.name}
                  </h4>

                  <p className="mt-1.5 text-xs text-[#766358] leading-relaxed line-clamp-2">
                    {recipe.desc}
                  </p>

                  {/* Chips des textures et ingrédients */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {recipe.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-0.5 text-[10px] font-bold text-[#2C1D16]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Sélecteur de boisson 33cl incluse (simple, compact & direct) */}
                  <div className="mt-4 pt-3 border-t border-[#DECBB3]/60">
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#766358] mb-1 flex items-center gap-1">
                      <CupSoda className="h-3 w-3 text-[#ea580c]" /> Canette 33 cl incluse :
                    </label>
                    <select
                      value={selectedDrinks[recipe.id] || "Coca-Cola (33 cl)"}
                      onChange={(e) => handleDrinkChange(recipe.id, e.target.value)}
                      className="w-full rounded-xl border border-[#DECBB3] bg-[#FAF5EE] px-3 py-1.5 text-xs font-bold text-[#2C1D16] focus:border-[#2C1D16] focus:outline-none cursor-pointer"
                    >
                      {DRINK_OPTIONS.map((d) => (
                        <option key={d.id} value={d.label}>
                          {d.emoji} {d.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Bouton d'ajout 1 clic */}
              <div className="p-5 sm:p-6 pt-0 mt-auto">
                <div className="pt-3 border-t border-[#DECBB3]/60 flex items-center justify-between gap-3">
                  <span className="text-base font-black text-[#2C1D16]">
                    11,00 €
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAddCrousty(recipe)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-xs ${
                      isAdded
                        ? "bg-emerald-600 text-white"
                        : isMix
                        ? "bg-[#ea580c] hover:bg-[#c2410c] text-white"
                        : "bg-[#2C1D16] hover:bg-[#ea580c] text-[#EADCC9] hover:text-white"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                        <span>Ajouté !</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-3.5 w-3.5 stroke-[3]" />
                        <span>Ajouter</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mention sauces supplémentaires fidèle à l'affiche ─────────── */}
      <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#766358]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
        <span className="font-semibold">
          Pour toute sauce supplémentaire : disponible en supplément lors de la commande (+1,00 €).
        </span>
      </div>
    </div>
  );
}
