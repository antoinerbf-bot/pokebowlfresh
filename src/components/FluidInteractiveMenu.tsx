import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Plus,
  ArrowRight,
  Check,
  Flame,
  Search,
  Filter,
  Utensils,
  Coffee,
  Heart,
  ExternalLink,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DishImage } from "@/components/DishImage";
import { bowls, drinks, desserts } from "@/lib/data";
import { InteractiveBowlBuilder } from "@/components/InteractiveBowlBuilder";

// Photos culinaires officielles générées
import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuNutella from "@/assets/tiramisu-nutella.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";

import drinkCocaCola from "@/assets/drink-coca-cola.jpg";
import drinkCocaZero from "@/assets/drink-coca-zero.jpg";
import drinkFantaOrange from "@/assets/drink-fanta-orange.jpg";
import drinkIceTea from "@/assets/drink-ice-tea.jpg";
import drinkEauPlate from "@/assets/drink-eau-plate.jpg";
import drinkEauGazeuse from "@/assets/drink-eau-gazeuse.jpg";

type MenuSectionId = "all" | "pokes" | "crousty" | "composer" | "desserts" | "boissons";

interface DishItem {
  id: string;
  name: string;
  category: "poke" | "crousty" | "dessert" | "drink";
  price: number;
  grandPrice?: number;
  desc: string;
  badge: string;
  image?: string;
  dishId?: string;
  ingredients?: { name: string; emoji?: string }[];
  tasteTag?: string;
  soldOut?: boolean;
  isCombo?: boolean;
  packagingNote?: string;
}

export function FluidInteractiveMenu() {
  const { addItem } = useCart();
  const [activeSection, setActiveSection] = React.useState<MenuSectionId>("all");
  const [activeTaste, setActiveTaste] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedSizes, setSelectedSizes] = React.useState<Record<string, "moyen" | "grand">>({});
  const [recentlyAddedId, setRecentlyAddedId] = React.useState<string | null>(null);

  // 1. Poké Bowls Signatures (Servis en bols sculptés en bois / bambou naturel)
  const pokeItems = React.useMemo<DishItem[]>(() => {
    return bowls
      .filter((b) => !b.id.startsWith("crousty-"))
      .map((b) => {
        let tasteTag = "fresh";
        if (b.id === "spicy-chicken") tasteTag = "spicy";
        if (b.id === "sweet-chicken") tasteTag = "sweet";

        return {
          id: b.id,
          name: b.name,
          category: "poke",
          price: b.price,
          grandPrice: b.price + 3,
          desc: b.desc,
          badge: b.tag,
          dishId: b.id,
          ingredients: b.ingredients,
          tasteTag,
          packagingNote: "Bol en bambou naturel · Fait minute",
        };
      });
  }, []);

  // 2. Crousty Chicken (Servis en bol kraft takeaway chaud avec boisson 33cl incluse)
  const croustyItems = React.useMemo<DishItem[]>(() => {
    return bowls
      .filter((b) => b.id.startsWith("crousty-"))
      .map((b) => ({
        id: b.id,
        name: b.name,
        category: "crousty",
        price: b.price,
        desc: b.desc,
        badge: "Formule 11 € · Boisson Offerte 🥤",
        dishId: b.id,
        ingredients: b.ingredients,
        tasteTag: "crispy",
        isCombo: true,
        packagingNote: "Packaging Kraft Takeaway chaud · Boisson 33cl incluse",
      }));
  }, []);

  // 3. Tiramisus Maison
  const dessertItems = React.useMemo<DishItem[]>(() => {
    const imagesMap: Record<string, string> = {
      "tira-spec": tiramisuSpeculoos,
      "tira-nutella": tiramisuNutella,
      "tira-oreo": tiramisuOreo,
    };
    return desserts.map((d) => ({
      id: d.id,
      name: d.name,
      category: "dessert",
      price: d.price,
      desc:
        d.id === "tira-spec"
          ? "Crème mascarpone ultra-légère, véritables biscuits Lotus caramélisés & voile de spéculoos artisanal."
          : d.id === "tira-nutella"
          ? "Généreux tourbillons de Nutella fondant, éclats de noisettes torréfiées et crème fouettée maison."
          : "Éclats croustillants de biscuits Oreo noir plongés dans une onctueuse crème mascarpone fraîche.",
      badge: d.soldOut ? "Victime de son succès" : "Fait Maison du Matin ⭐",
      image: imagesMap[d.id],
      soldOut: d.soldOut,
      tasteTag: "sweet",
      packagingNote: "Pot artisanal individuel fraîcheur",
    }));
  }, []);

  // 4. Boissons Fraîches avec photos de vraies canettes et bouteilles
  const drinkItems = React.useMemo<DishItem[]>(() => {
    const imagesMap: Record<string, string> = {
      coca: drinkCocaCola,
      "coca-zero": drinkCocaZero,
      fanta: drinkFantaOrange,
      "ice-tea": drinkIceTea,
      "eau-plate": drinkEauPlate,
      "eau-gaz": drinkEauGazeuse,
    };

    const notesMap: Record<string, string> = {
      coca: "Canette 33cl servie glacée",
      "coca-zero": "Canette 33cl zéro sucre ultra-fraîche",
      fanta: "Canette 33cl pétillante à l'orange",
      "ice-tea": "Canette Lipton Ice-Tea Pêche 33cl fraîche",
      "eau-plate": "Bouteille plastique SPA Reine 50cl plate",
      "eau-gaz": "Bouteille plastique SPA Intense 50cl pétillante",
    };

    return drinks.map((dr) => ({
      id: dr.id,
      name: dr.name,
      category: "drink",
      price: dr.price,
      desc: notesMap[dr.id] || "Boisson fraîche 33cl / 50cl.",
      badge: "Extra Frais 🧊",
      image: imagesMap[dr.id],
      tasteTag: "drink",
      packagingNote: notesMap[dr.id],
    }));
  }, []);

  const handleAddToCart = (item: DishItem) => {
    if (item.soldOut) return;

    const size = selectedSizes[item.id] || "moyen";
    const isGrand = size === "grand" && item.grandPrice;
    const finalPrice = isGrand ? item.grandPrice! : item.price;
    const displayName = item.grandPrice
      ? `${item.name} (${isGrand ? "Grand" : "Moyen"})`
      : item.name;

    addItem({
      id: `${item.id}-${size}`,
      name: displayName,
      basePrice: finalPrice,
      price: finalPrice,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: item.image,
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === item.id ? null : curr));
    }, 1800);
  };

  const toggleSize = (itemId: string, size: "moyen" | "grand") => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  // Filtrage d'une liste selon le search et le taste
  const filterList = (items: DishItem[]) => {
    return items.filter((item) => {
      if (activeTaste !== "all" && item.tasteTag !== activeTaste && item.tasteTag !== "drink") {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.desc.toLowerCase().includes(query);
        const matchesIng = item.ingredients?.some((ing) =>
          ing.name.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }
      return true;
    });
  };

  const filteredPokes = filterList(pokeItems);
  const filteredCrousty = filterList(croustyItems);
  const filteredDesserts = filterList(dessertItems);
  const filteredDrinks = filterList(drinkItems);

  const totalResults =
    (activeSection === "all" || activeSection === "pokes" ? filteredPokes.length : 0) +
    (activeSection === "all" || activeSection === "crousty" ? filteredCrousty.length : 0) +
    (activeSection === "all" || activeSection === "desserts" ? filteredDesserts.length : 0) +
    (activeSection === "all" || activeSection === "boissons" ? filteredDrinks.length : 0);

  return (
    <section
      id="carte"
      className="scroll-mt-16 mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-label="La carte Poke N Bowl Visé"
    >
      {/* ── Entête de section ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#d7ff45]/40 border border-[#b2db16] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10251f]">
            <Sparkles className="h-3.5 w-3.5 text-[#10251f]" />
            Carte Officielle & Recettes Visétoises
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]">
            Une carte claire, <span className="text-[#ff705f]">organisée & gourmande.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5a6760] max-w-2xl font-medium">
            Pokés servis dans de véritables bols en bambou naturel, Crousty Chicken chaud en boîte kraft avec boisson, desserts du jour et rafraîchissements givrés.
          </p>
        </div>

        {/* Barre de recherche instantanée */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7d8b83]" />
          <input
            type="text"
            placeholder="Rechercher saumon, crousty, oreo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold text-[#10251f] placeholder-[#7d8b83] shadow-sm focus:border-[#d7ff45] focus:outline-none focus:ring-2 focus:ring-[#d7ff45]/40"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7d8b83] hover:text-black"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Onglets de Navigation Catégories (Style Capsule Pokawa) ────────────────── */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {[
          { id: "all" as const, label: "Toute la Carte", icon: "✨", count: pokeItems.length + croustyItems.length + dessertItems.length + drinkItems.length },
          { id: "pokes" as const, label: "Poké Bowls Signatures", icon: "🥗", count: pokeItems.length },
          { id: "crousty" as const, label: "Crousty Chicken", icon: "🍗", count: croustyItems.length },
          { id: "composer" as const, label: "Sur-Mesure", icon: "🥣", count: 1 },
          { id: "desserts" as const, label: "Tiramisus Maison", icon: "🧁", count: dessertItems.length },
          { id: "boissons" as const, label: "Boissons Fraîches", icon: "🥤", count: drinkItems.length },
        ].map((cat) => {
          const isActive = activeSection === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveSection(cat.id);
                setActiveTaste("all");
              }}
              className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition shrink-0 ${
                isActive
                  ? "bg-[#10251f] text-white shadow-lg scale-[1.02]"
                  : "bg-white text-[#10251f]/80 hover:bg-[#10251f]/10 border border-black/5"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  isActive ? "bg-[#d7ff45] text-[#10251f]" : "bg-black/5 text-[#5a6760]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Filtres de Goût (Chips) ─────────────────────────── */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pt-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7d8b83] flex items-center gap-1 mr-1">
          <Filter className="h-3 w-3" /> Saveur :
        </span>
        {[
          { id: "all", label: "Toutes les envies" },
          { id: "fresh", label: "Frais & Léger 🥑" },
          { id: "crispy", label: "Croustillant & Chaud 🍗" },
          { id: "spicy", label: "Touche Piquante 🌶️" },
          { id: "sweet", label: "Douceur Teriyaki / Sucre 🍯" },
        ].map((taste) => (
          <button
            key={taste.id}
            type="button"
            onClick={() => setActiveTaste(taste.id)}
            className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${
              activeTaste === taste.id
                ? "bg-[#ff705f] text-white shadow-sm"
                : "bg-white/80 text-[#5a6760] hover:bg-black/5 border border-black/5"
            }`}
          >
            {taste.label}
          </button>
        ))}
      </div>

      {/* ── Pas de résultat ─────────────────────────────────── */}
      {totalResults === 0 && (
        <div className="mt-12 rounded-[32px] bg-white border border-black/5 p-12 text-center shadow-card">
          <span className="text-4xl">🔍</span>
          <h3 className="mt-3 text-xl font-bold text-[#10251f]">Aucun plat ne correspond à votre recherche</h3>
          <p className="mt-1 text-xs text-[#7d8b83]">
            Essayez avec un autre mot-clé ou réinitialisez les filtres.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveSection("all");
              setActiveTaste("all");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#10251f] px-5 py-2.5 text-xs font-bold text-white shadow-sm"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CATÉGORIE 1 : NOS POKÉ BOWLS SIGNATURES (Bols en bambou naturel)
         ═══════════════════════════════════════════════════════════════════════════ */}
      {(activeSection === "all" || activeSection === "pokes") && filteredPokes.length > 0 && (
        <div className="mt-12 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#10251f]/5 px-3 py-1 text-[11px] font-extrabold text-[#10251f]">
                <span>🥗</span>
                <span>Bols en Bois / Bambou Sculpté</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#10251f]">
                Nos Poké Bowls Signatures
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6760] mt-0.5">
                Saumon découpé minute, poulet mariné en petits morceaux tendres, scampis grillés & légumes croquants.
              </p>
            </div>
            <span className="text-xs font-extrabold text-[#ff705f]">
              Format Moyen dès 10 € · Grand +3 €
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {filteredPokes.map((item) => (
              <DishCard
                key={item.id}
                item={item}
                selectedSize={selectedSizes[item.id] || "moyen"}
                onToggleSize={(s) => toggleSize(item.id, s)}
                onAdd={() => handleAddToCart(item)}
                isAdded={recentlyAddedId === item.id}
              />
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CATÉGORIE 2 : CROUSTY CHICKEN (Packaging Kraft Takeaway Chaud)
         ═══════════════════════════════════════════════════════════════════════════ */}
      {(activeSection === "all" || activeSection === "crousty") && filteredCrousty.length > 0 && (
        <div className="mt-16 pt-8 border-t border-black/5">
          <div className="rounded-[32px] bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border border-[#fed7aa] p-6 sm:p-8 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                  <Flame className="h-3.5 w-3.5 fill-white" />
                  Crousty Chicken · Chaud & Croustillant
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#7c2d12]">
                  Crousty Chicken
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#9a3412] max-w-2xl font-medium">
                  Petits morceaux de poulet croustillant dorés, généreusement nappés de sauce maison onctueuse (curry ou blanche) et oignons frits croustillants sur riz chaud.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-[#fed7aa] shadow-card">
                <span className="text-2xl">🥤</span>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#ea580c]">
                    Formule Étudiant Complète
                  </span>
                  <span className="text-lg font-black text-[#7c2d12]">
                    11,00 € <span className="text-xs font-bold text-[#9a3412]">(Boisson 33cl incluse)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {filteredCrousty.map((item) => (
              <DishCard
                key={item.id}
                item={item}
                selectedSize="moyen"
                onToggleSize={() => {}}
                onAdd={() => handleAddToCart(item)}
                isAdded={recentlyAddedId === item.id}
                isCroustySpecial
              />
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CATÉGORIE 3 : COMPOSER VOTRE BOWL SUR-MESURE (Atelier Créatif)
         ═══════════════════════════════════════════════════════════════════════════ */}
      {(activeSection === "all" || activeSection === "composer") && (
        <div id="composer" className="mt-16 pt-8 border-t border-black/5 scroll-mt-16">
          <InteractiveBowlBuilder />
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CATÉGORIE 4 : NOS TIRAMISUS MAISON GOURMANDS
         ═══════════════════════════════════════════════════════════════════════════ */}
      {(activeSection === "all" || activeSection === "desserts") && filteredDesserts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-black/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#ff705f]">
                <span>🧁</span>
                <span>Douceurs Artisanales</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#10251f]">
                Nos Tiramisus Maison
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6760] mt-0.5">
                Préparés chaque matin par notre chef. Mascarpone fouetté, biscuits croustillants & sauces gourmandes.
              </p>
            </div>
            <span className="text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full">
              4,00 € l'unité
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDesserts.map((item) => (
              <DishCard
                key={item.id}
                item={item}
                selectedSize="moyen"
                onToggleSize={() => {}}
                onAdd={() => handleAddToCart(item)}
                isAdded={recentlyAddedId === item.id}
              />
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════════
          CATÉGORIE 4 : NOS BOISSONS FRAÎCHES (Vraies photos de canettes & bouteilles)
         ═══════════════════════════════════════════════════════════════════════════ */}
      {(activeSection === "all" || activeSection === "boissons") && filteredDrinks.length > 0 && (
        <div className="mt-16 pt-8 border-t border-black/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0284c7]">
                <span>🧊</span>
                <span>Servies Très Fraîches</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-[#10251f]">
                Nos Boissons Fraîches
              </h3>
              <p className="text-xs sm:text-sm text-[#5a6760] mt-0.5">
                Canettes givrées 33cl et bouteilles d'eau SPA 50cl pour accompagner vos plats.
              </p>
            </div>
            <span className="text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full">
              2,00 € l'unité
            </span>
          </div>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {filteredDrinks.map((item) => (
              <DrinkCard
                key={item.id}
                item={item}
                onAdd={() => handleAddToCart(item)}
                isAdded={recentlyAddedId === item.id}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
    Composant Carte de Plat (Poké, Crousty, Dessert)
   ═══════════════════════════════════════════════════════════════════════════ */
function DishCard({
  item,
  selectedSize,
  onToggleSize,
  onAdd,
  isAdded,
  isCroustySpecial = false,
}: {
  item: DishItem;
  selectedSize: "moyen" | "grand";
  onToggleSize: (s: "moyen" | "grand") => void;
  onAdd: () => void;
  isAdded: boolean;
  isCroustySpecial?: boolean;
}) {
  const isGrand = selectedSize === "grand" && item.grandPrice;
  const effectivePrice = isGrand ? item.grandPrice! : item.price;

  return (
    <motion.div
      layout
      className={`group flex flex-col justify-between overflow-hidden rounded-[28px] border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
        isCroustySpecial
          ? "border-[#fed7aa] ring-2 ring-[#ea580c]/15"
          : "border-black/5"
      }`}
    >
      <div>
        {/* Photo Haute Définition */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e5dc]">
          {item.dishId ? (
            <DishImage
              dishId={item.dishId}
              alt={item.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
            />
          ) : item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className={`h-full w-full object-cover transition duration-700 group-hover:scale-108 ${
                item.soldOut ? "grayscale contrast-75" : ""
              }`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#f4f0e6] text-4xl">
              {item.badge}
            </div>
          )}

          {/* Léger voile subtil en bas uniquement pour préserver la clarté et la luminosité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Badge Supérieur Gauche */}
          <span
            className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur ${
              isCroustySpecial
                ? "bg-[#ea580c] text-white"
                : "bg-white/95 text-[#10251f]"
            }`}
          >
            {item.badge}
          </span>

          {/* Badge Prix Supérieur Droit */}
          <span className="absolute top-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-xs font-black text-[#10251f] shadow-md">
            {effectivePrice.toFixed(2)} €
          </span>

          {/* Note Packaging */}
          {item.packagingNote && (
            <span className="absolute bottom-2.5 left-3.5 rounded-md bg-black/65 backdrop-blur-sm px-2 py-0.5 text-[9px] font-extrabold text-white/90">
              {item.packagingNote}
            </span>
          )}

          {/* Sold out overlay */}
          {item.soldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
              <span className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                Victime de son succès
              </span>
            </div>
          )}
        </div>

        {/* Contenu textuel */}
        <div className="p-5 sm:p-6">
          <h4 className="text-lg sm:text-xl font-black text-[#10251f] leading-snug">
            {item.name}
          </h4>

          {item.isCombo ? (
            <p className="mt-0.5 text-xs font-extrabold text-[#ea580c]">
              🥤 Formule chaude : Canette 33cl offerte au choix
            </p>
          ) : item.category === "poke" ? (
            <p className="mt-0.5 text-xs font-bold text-[#059669]">
              🥣 Servi en bol bambou sculpté · Riz japonais vinaigré
            </p>
          ) : null}

          <p className="mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2">
            {item.desc}
          </p>

          {/* Ingrédients clés */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {item.ingredients.slice(0, 5).map((ing, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/85 border border-[#e8dfcf]"
                >
                  {ing.emoji} {ing.name}
                </span>
              ))}
              {item.ingredients.length > 5 && (
                <span className="rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]">
                  +{item.ingredients.length - 5}
                </span>
              )}
            </div>
          )}

          {/* Toggle de Format pour Poké Bowls (Moyen / Grand) */}
          {item.grandPrice && !item.isCombo && (
            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7d8b83]">
                Format :
              </span>
              <div className="inline-flex rounded-full bg-[#f2ede4] p-0.5">
                <button
                  type="button"
                  onClick={() => onToggleSize("moyen")}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-black transition ${
                    selectedSize === "moyen"
                      ? "bg-[#10251f] text-white shadow-sm"
                      : "text-[#5a6760] hover:text-black"
                  }`}
                >
                  Moyen ({item.price.toFixed(0)} €)
                </button>
                <button
                  type="button"
                  onClick={() => onToggleSize("grand")}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-black transition ${
                    selectedSize === "grand"
                      ? "bg-[#10251f] text-white shadow-sm"
                      : "text-[#5a6760] hover:text-black"
                  }`}
                >
                  Grand ({item.grandPrice.toFixed(0)} €)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Boutons d'Action */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <div className="flex items-center gap-2 pt-2 border-t border-black/5">
          {/* Bouton 1-Clic d'ajout au panier */}
          <button
            type="button"
            disabled={item.soldOut}
            onClick={onAdd}
            className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${
              item.soldOut
                ? "bg-black/10 text-black/30 cursor-not-allowed"
                : isAdded
                ? "bg-[#10251f] text-[#d7ff45] scale-105"
                : "bg-[#d7ff45] text-[#10251f] hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95"
            }`}
            title={`Ajouter au panier (${effectivePrice.toFixed(2)} €)`}
          >
            {isAdded ? (
              <Check className="h-5 w-5 stroke-[3]" />
            ) : (
              <Plus className="h-5 w-5 stroke-[2.5]" />
            )}

            {isAdded && (
              <motion.span
                initial={{ opacity: 0, y: 0, scale: 0.6 }}
                animate={{ opacity: 1, y: -24, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-1 font-black text-xs text-[#10251f] bg-[#d7ff45] px-1.5 py-0.5 rounded-full shadow"
              >
                +1
              </motion.span>
            )}
          </button>

          {/* Lien Personnaliser ou Ajouter Direct */}
          {item.dishId ? (
            <Link
              to="/product/$productId"
              params={{ productId: item.dishId }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]"
            >
              <span>Personnaliser</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : item.soldOut ? (
            <span className="flex-1 text-center py-3 text-xs font-bold text-[#7d8b83]">
              Épuisé aujourd'hui
            </span>
          ) : (
            <button
              type="button"
              onClick={onAdd}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]"
            >
              <span>Ajouter direct</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
    Composant Carte de Boisson Individuelle avec Vraie Photo
   ═══════════════════════════════════════════════════════════════════════════ */
function DrinkCard({
  item,
  onAdd,
  isAdded,
}: {
  item: DishItem;
  onAdd: () => void;
  isAdded: boolean;
}) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-black/5 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f0eee9]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-3xl">🥤</div>
        )}
        <span className="absolute bottom-1.5 right-1.5 rounded-full bg-[#d7ff45] px-2 py-0.5 text-[10px] font-black text-[#10251f] shadow">
          {item.price.toFixed(2)} €
        </span>
      </div>

      <div className="mt-2.5">
        <h5 className="text-xs font-black text-[#10251f] leading-tight line-clamp-1">
          {item.name}
        </h5>
        <p className="mt-0.5 text-[10px] text-[#7d8b83] line-clamp-1">
          {item.packagingNote || "33 cl"}
        </p>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className={`mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[11px] font-black transition ${
          isAdded
            ? "bg-[#10251f] text-[#d7ff45]"
            : "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="h-3 w-3 stroke-[3]" />
            <span>Ajouté</span>
          </>
        ) : (
          <>
            <Plus className="h-3 w-3 stroke-[3]" />
            <span>Ajouter (2 €)</span>
          </>
        )}
      </button>
    </div>
  );
}
