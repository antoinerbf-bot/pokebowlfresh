import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Plus,
  Check,
  Flame,
  ChefHat,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DishImage } from "@/components/DishImage";
import { bowls, desserts, drinks } from "@/lib/data";

import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuNutella from "@/assets/tiramisu-nutella.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";
import drinkCocaCola from "@/assets/drink-coca-cola.jpg";
import drinkCocaZero from "@/assets/drink-coca-zero.jpg";
import drinkIceTea from "@/assets/drink-ice-tea.jpg";
import drinkEauGazeuse from "@/assets/drink-eau-gazeuse.jpg";

interface MegaCategory {
  id: "pokes" | "crousty" | "composer" | "desserts" | "boissons";
  label: string;
  badge: string;
  icon: string;
  sub: string;
}

const CATEGORIES: MegaCategory[] = [
  {
    id: "pokes",
    label: "Pokés Signatures",
    badge: "Recettes fraîches",
    icon: "🥗",
    sub: "Dès 10 € · Saumon & Poulet frais",
  },
  {
    id: "crousty",
    label: "Crousty Chicken",
    badge: "Formule 11 €",
    icon: "🍗",
    sub: "Chaud · Boisson 33cl offerte",
  },
  {
    id: "composer",
    label: "Atelier Sur-Mesure",
    badge: "100% Personnalisé",
    icon: "🥣",
    sub: "Base + Protéine + 5 Mix-ins",
  },
  {
    id: "desserts",
    label: "Tiramisus Maison",
    badge: "Artisanal",
    icon: "🧁",
    sub: "4,00 € · Spéculoos, Nutella, Oreo",
  },
  {
    id: "boissons",
    label: "Boissons Fraîches",
    badge: "Extra Frais",
    icon: "🥤",
    sub: "2,00 € · Canettes & Eaux SPA",
  },
];

export function PokawaMegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeCat, setActiveCat] = React.useState<MegaCategory["id"]>("pokes");
  const [addedDishId, setAddedDishId] = React.useState<string | null>(null);
  const { addItem, setIsCartOpen } = useCart();

  const handleQuickAdd = (
    dish: {
      id: string;
      name: string;
      price: number;
      image?: string;
    },
    isCrousty = false
  ) => {
    addItem({
      id: `${dish.id}-mega`,
      name: dish.name,
      basePrice: dish.price,
      price: dish.price,
      quantity: 1,
      toppings: isCrousty ? ["Boisson 33cl incluse"] : [],
      removedIngredients: [],
      image: dish.image,
    });
    setAddedDishId(dish.id);
    setTimeout(() => setAddedDishId(null), 1500);
    setIsCartOpen(true);
  };

  const pokesList = bowls.filter((b) => !b.id.startsWith("crousty-"));
  const croustyList = bowls.filter((b) => b.id.startsWith("crousty-"));

  const dessertItems = [
    {
      id: "tira-spec",
      name: "Tiramisu Spéculoos",
      price: 4.0,
      desc: "Véritables biscuits Lotus & mascarpone artisanal.",
      image: tiramisuSpeculoos,
    },
    {
      id: "tira-nutella",
      name: "Tiramisu Nutella",
      price: 4.0,
      desc: "Nutella coulant & éclats de noisettes.",
      image: tiramisuNutella,
    },
    {
      id: "tira-oreo",
      name: "Tiramisu Oreo",
      price: 4.0,
      desc: "Biscuits Oreo noir et crème fouettée.",
      image: tiramisuOreo,
    },
  ];

  const drinkItems = [
    {
      id: "coca",
      name: "Coca-Cola 33cl",
      price: 2.0,
      desc: "Servi givré.",
      image: drinkCocaCola,
    },
    {
      id: "coca-zero",
      name: "Coca-Cola Zéro 33cl",
      price: 2.0,
      desc: "Zéro sucre, ultra frais.",
      image: drinkCocaZero,
    },
    {
      id: "ice-tea",
      name: "Lipton Ice Tea Original Sparkling 33cl",
      price: 2.0,
      desc: "Lipton Ice Tea Original pétillant.",
      image: drinkIceTea,
    },
    {
      id: "eau-gaz",
      name: "SPA Intense 50cl",
      price: 2.0,
      desc: "Eau pétillante de source.",
      image: drinkEauGazeuse,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[94vw] max-w-[1100px] z-50 pointer-events-auto"
        >
          <div className="overflow-hidden rounded-[32px] bg-[#fffaf2]/95 backdrop-blur-2xl border border-white/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] text-[#2C1D16]">
            {/* Top Bar Pokawa */}
            <div className="flex items-center justify-between border-b border-black/5 bg-[#faf4ea] px-6 py-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-black uppercase tracking-wider text-[#2C1D16]">
                  La Carte Pokawa-Style · Poke N Bowl Visé
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#758079] font-medium text-[11px]">
                <span>Avenue du Pont 12, Visé</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline text-emerald-700 font-bold">100% Fait Minute</span>
                <a
                  href="#carte"
                  onClick={onClose}
                  className="font-black uppercase tracking-wider text-[#2431eb] hover:underline"
                >
                  Voir toute la carte →
                </a>
              </div>
            </div>

            {/* Corps du Mega-Menu */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-[380px]">
              {/* Colonne gauche : Catégories interactives avec hover */}
              <div className="border-r border-black/5 p-4 space-y-1 bg-[#f9f3e9]/60">
                <span className="block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7a847e]">
                  Catégories
                </span>

                {CATEGORIES.map((cat) => {
                  const isActive = activeCat === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setActiveCat(cat.id)}
                      onClick={() => {
                        setActiveCat(cat.id);
                        const el = document.getElementById(cat.id === "composer" ? "composer" : "carte");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        onClose();
                      }}
                      className={`group w-full flex items-center justify-between rounded-2xl p-3 text-left transition duration-200 ${
                        isActive
                          ? "bg-[#2C1D16] text-white shadow-md scale-[1.02]"
                          : "hover:bg-black/5 text-[#2C1D16]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {cat.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black uppercase tracking-wide">
                              {cat.label}
                            </span>
                          </div>
                          <p
                            className={`text-[10px] font-medium ${
                              isActive ? "text-white/70" : "text-[#7a847e]"
                            }`}
                          >
                            {cat.sub}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                          isActive
                            ? "bg-[#2C1D16] text-[#EADCC9]"
                            : "bg-black/5 text-[#7a847e]"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </button>
                  );
                })}

                {/* Raccourci bas de colonne */}
                <div className="pt-3 border-t border-black/5 px-2">
                  <a
                    href="#composer"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm hover:scale-[1.02] transition"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#ff705f]" />
                      Composer son Bowl
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Colonne droite : Preview instantanée des plats de la catégorie survolée */}
              <div className="p-5 overflow-y-auto max-h-[460px]">
                {/* 1. Pokés */}
                {activeCat === "pokes" && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                          Poké Bowls Signatures
                        </h4>
                        <p className="text-[11px] text-[#7a847e]">
                          Préparés à la commande · Saumon découpé minute
                        </p>
                      </div>
                      <span className="text-xs font-black text-[#ff705f]">
                        Format Moyen dès 10 €
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pokesList.slice(0, 6).map((poke) => (
                        <div
                          key={poke.id}
                          className="group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2">
                            <DishImage
                              dishId={poke.id}
                              alt={poke.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
                            />
                            <span className="absolute top-1.5 right-1.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2 py-0.5 text-[10px] font-black text-[#2C1D16] shadow">
                              {poke.price.toFixed(2)} €
                            </span>
                            <span className="absolute bottom-1.5 left-1.5 rounded-md bg-black/60 px-1.5 py-0.5 text-[8px] font-bold text-white">
                              {poke.tag}
                            </span>
                          </div>

                          <div>
                            <h5 className="text-xs font-black text-[#2C1D16] group-hover:text-[#ff705f] transition line-clamp-1">
                              {poke.name}
                            </h5>
                            <p className="text-[10px] text-[#7a847e] line-clamp-1 mt-0.5">
                              {poke.desc}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-black/5">
                            <button
                              type="button"
                              onClick={() =>
                                handleQuickAdd({
                                  id: poke.id,
                                  name: poke.name,
                                  price: poke.price,
                                })
                              }
                              className="flex-1 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95"
                            >
                              {addedDishId === poke.id ? (
                                <>
                                  <Check className="h-3 w-3 stroke-[3]" /> Ajouté !
                                </>
                              ) : (
                                <>
                                  <Plus className="h-3 w-3" /> Ajouter
                                </>
                              )}
                            </button>

                            <Link
                              to="/product/$productId"
                              params={{ productId: poke.id }}
                              onClick={onClose}
                              className="flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 text-[#2C1D16] transition"
                              title="Personnaliser ce bowl"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Crousty Chicken */}
                {activeCat === "crousty" && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Flame className="h-4 w-4 text-[#ea580c]" />
                          <h4 className="text-sm font-black uppercase tracking-wider text-[#ea580c]">
                            Crousty Chicken Chaud
                          </h4>
                        </div>
                        <p className="text-[11px] text-[#9a3412]">
                          Petits morceaux de poulet croustillant dorés · Boisson 33cl incluse
                        </p>
                      </div>
                      <span className="rounded-full bg-[#ea580c] px-3 py-1 text-[11px] font-black text-white shadow-sm">
                        Formule 11,00 € Complète
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {croustyList.map((crousty) => (
                        <div
                          key={crousty.id}
                          className="group relative flex flex-col justify-between rounded-2xl bg-white border border-[#fed7aa] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2">
                            <DishImage
                              dishId={crousty.id}
                              alt={crousty.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
                            />
                            <span className="absolute top-2 right-2 rounded-full bg-[#ea580c] px-2.5 py-0.5 text-xs font-black text-white shadow">
                              11.00 €
                            </span>
                            <span className="absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold text-white">
                              🥤 Canette 33cl Offerte
                            </span>
                          </div>

                          <div>
                            <h5 className="text-sm font-black text-[#2C1D16]">
                              {crousty.name}
                            </h5>
                            <p className="text-xs text-[#7a847e] mt-0.5 line-clamp-2">
                              {crousty.desc}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 mt-3 pt-2 border-t border-black/5">
                            <button
                              type="button"
                              onClick={() =>
                                handleQuickAdd(
                                  {
                                    id: crousty.id,
                                    name: crousty.name,
                                    price: crousty.price,
                                  },
                                  true
                                )
                              }
                              className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ea580c] py-2 text-xs font-black uppercase text-white hover:bg-[#c2410c] transition active:scale-95 shadow-sm"
                            >
                              {addedDishId === crousty.id ? (
                                <>
                                  <Check className="h-3.5 w-3.5 stroke-[3]" /> Ajouté !
                                </>
                              ) : (
                                <>
                                  <Plus className="h-3.5 w-3.5 stroke-[3]" /> Commander la formule 11 €
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Atelier Sur-Mesure */}
                {activeCat === "composer" && (
                  <div className="rounded-2xl bg-gradient-to-br from-[#2C1D16] to-[#1c3830] text-white p-6 shadow-md flex flex-col justify-between h-full">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EADCC9] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16]">
                        <Sparkles className="h-3 w-3 stroke-[3] text-[#ff705f]" />
                        Créativité Illimitée
                      </span>
                      <h4 className="mt-3 text-2xl font-black text-white">
                        Compose Ton Poké de A à Z
                      </h4>
                      <p className="mt-1 text-xs text-white/80 max-w-md">
                        Choisis ta base (Riz sushi, quinoa ou jeunes pousses), ta protéine fraîche (Saumon noble, poulet rôti, scampis grillés, falafels), 5 mix-ins croquants parmi plus de 15 ingrédients du jour, ta sauce signature et tes toppings croustillants !
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5 text-center">
                      <div className="rounded-xl bg-white/10 p-2.5">
                        <span className="text-xl">🍚</span>
                        <span className="block text-[10px] font-bold mt-1 text-[#EADCC9]">1. Base</span>
                      </div>
                      <div className="rounded-xl bg-white/10 p-2.5">
                        <span className="text-xl">🐟</span>
                        <span className="block text-[10px] font-bold mt-1 text-[#EADCC9]">2. Protéine</span>
                      </div>
                      <div className="rounded-xl bg-white/10 p-2.5">
                        <span className="text-xl">🥑</span>
                        <span className="block text-[10px] font-bold mt-1 text-[#EADCC9]">3. 5 Mix-ins</span>
                      </div>
                      <div className="rounded-xl bg-white/10 p-2.5">
                        <span className="text-xl">✨</span>
                        <span className="block text-[10px] font-bold mt-1 text-[#EADCC9]">4. Sauce & Seeds</span>
                      </div>
                    </div>

                    <a
                      href="#composer"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#EADCC9] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-lg hover:bg-[#F2E5D4] transition"
                    >
                      <span>Lancer l'atelier Sur-Mesure maintenant</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                )}

                {/* 4. Desserts */}
                {activeCat === "desserts" && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                          Tiramisus Maison Gourmands
                        </h4>
                        <p className="text-[11px] text-[#7a847e]">
                          Préparés chaque matin par notre chef · Mascarpone aérien
                        </p>
                      </div>
                      <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]">
                        4,00 € l'unité
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {dessertItems.map((dessert) => (
                        <div
                          key={dessert.id}
                          className="group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2">
                            <img
                              src={dessert.image}
                              alt={dessert.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
                            />
                            <span className="absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow">
                              {dessert.price.toFixed(2)} €
                            </span>
                          </div>

                          <div>
                            <h5 className="text-xs font-black text-[#2C1D16]">
                              {dessert.name}
                            </h5>
                            <p className="text-[10px] text-[#7a847e] mt-0.5 line-clamp-1">
                              {dessert.desc}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleQuickAdd(dessert)}
                            className="mt-2.5 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95"
                          >
                            {addedDishId === dessert.id ? (
                              <>
                                <Check className="h-3 w-3 stroke-[3]" /> Ajouté !
                              </>
                            ) : (
                              <>
                                <Plus className="h-3 w-3" /> Ajouter
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Boissons */}
                {activeCat === "boissons" && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                          Boissons Fraîches Givron
                        </h4>
                        <p className="text-[11px] text-[#7a847e]">
                          Canettes 33cl et eaux SPA minérales 50cl servies très fraîches
                        </p>
                      </div>
                      <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]">
                        2,00 € l'unité
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {drinkItems.map((drink) => (
                        <div
                          key={drink.id}
                          className="group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2 flex items-center justify-center">
                            <img
                              src={drink.image}
                              alt={drink.name}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
                            />
                            <span className="absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow">
                              {drink.price.toFixed(2)} €
                            </span>
                          </div>

                          <div>
                            <h5 className="text-[11px] font-black text-[#2C1D16] truncate">
                              {drink.name}
                            </h5>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleQuickAdd(drink)}
                            className="mt-2 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95"
                          >
                            {addedDishId === drink.id ? (
                              <>
                                <Check className="h-3 w-3 stroke-[3]" /> Ajouté !
                              </>
                            ) : (
                              <>
                                <Plus className="h-3 w-3" /> Ajouter
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Barre de pied du méga-menu style Pokawa */}
            <div className="border-t border-[#E2D6C5] bg-[#F7F2EB] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 text-[#766358] font-bold text-[11px]">
                <span>🌱 Saumon frais découpé du matin</span>
                <span>🥢 Riz sushi artisanal maison</span>
                <span>🥑 100% Frais minute</span>
              </div>
              <Link
                to="/blog"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 font-black uppercase tracking-wider text-[#ff705f] hover:text-[#2C1D16] transition text-[11px]"
              >
                <span>Découvrir Le Mag Poké & Nutrition</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
