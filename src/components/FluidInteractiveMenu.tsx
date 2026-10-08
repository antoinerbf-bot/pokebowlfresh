import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Plus,
  ArrowRight,
  Check,
  Flame,
  Fish,
  Utensils,
  Coffee,
  Heart,
  Search,
  Filter,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { DishImage } from "@/components/DishImage";
import { bowls, drinks, desserts } from "@/lib/data";

import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuNutella from "@/assets/tiramisu-nutella.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";

type MenuCategory = "all" | "poke" | "crousty" | "fish" | "dessert" | "drink";

interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  grandPrice?: number;
  desc: string;
  badge: string;
  badgeColor?: string;
  image?: string;
  dishId?: string;
  ingredients?: { name: string; emoji?: string }[];
  tasteTag?: string;
  soldOut?: boolean;
  isCombo?: boolean;
}

export function FluidInteractiveMenu() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = React.useState<MenuCategory>("all");
  const [activeTaste, setActiveTaste] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedSizes, setSelectedSizes] = React.useState<Record<string, "moyen" | "grand">>({});
  const [recentlyAddedId, setRecentlyAddedId] = React.useState<string | null>(null);

  // Séparation et formatage des plats Poke N Bowl
  const menuItems = React.useMemo<MenuItem[]>(() => {
    const list: MenuItem[] = [];

    // 1. Pokés Signatures
    bowls.forEach((b) => {
      const isCrousty = b.id.startsWith("crousty-");
      const isFish = b.id === "saumon-wasabi" || b.id === "scampis-royaux";

      let tasteTag = "gourmand";
      if (b.id === "spicy-chicken") tasteTag = "spicy";
      if (b.id === "saumon-wasabi") tasteTag = "fresh";
      if (b.id === "scampis-royaux") tasteTag = "fresh";
      if (b.id === "sweet-chicken") tasteTag = "sweet";
      if (isCrousty) tasteTag = "crispy";

      list.push({
        id: b.id,
        name: b.name,
        category: isCrousty ? "crousty" : "poke",
        price: b.price,
        grandPrice: isCrousty ? undefined : b.price + 3,
        desc: b.desc,
        badge: isCrousty ? "Formule 11€ Boisson 🥤" : b.tag,
        dishId: b.id,
        ingredients: b.ingredients,
        tasteTag,
        isCombo: isCrousty,
      });
    });

    // 2. Desserts
    const dessertImages: Record<string, string> = {
      "tira-spec": tiramisuSpeculoos,
      "tira-nutella": tiramisuNutella,
      "tira-oreo": tiramisuOreo,
    };
    desserts.forEach((d) => {
      list.push({
        id: d.id,
        name: d.name,
        category: "dessert",
        price: d.price,
        desc:
          d.id === "tira-spec"
            ? "Crème mascarpone légère, biscuits Lotus caramélisés croustillants & voile de spéculoos."
            : d.id === "tira-nutella"
            ? "Tourbillons généreux de Nutella fondant, éclats de noisettes torréfiées & mascarpone."
            : "Brisures croustillantes de biscuits Oreo noir et crème fouettée maison onctueuse.",
        badge: d.soldOut ? "Victime de son succès ⚠️" : "Fait Maison du Matin ⭐",
        image: dessertImages[d.id],
        soldOut: d.soldOut,
        tasteTag: "sweet",
      });
    });

    // 3. Boissons
    const drinkIcons: Record<string, string> = {
      coca: "🥤",
      "coca-zero": "✨",
      fanta: "🍊",
      "ice-tea": "🍑",
      "eau-plate": "💧",
      "eau-gaz": "🫧",
    };
    drinks.forEach((dr) => {
      list.push({
        id: dr.id,
        name: dr.name,
        category: "drink",
        price: dr.price,
        desc: "Servie très fraîche 33cl / 50cl. Parfait pour accompagner votre bowl.",
        badge: drinkIcons[dr.id] || "🧊",
        tasteTag: "drink",
      });
    });

    return list;
  }, []);

  // Filtrage combiné fluide
  const filteredItems = React.useMemo(() => {
    return menuItems.filter((item) => {
      // Filtre catégorie
      if (activeCategory === "fish") {
        if (item.id !== "saumon-wasabi" && item.id !== "scampis-royaux") return false;
      } else if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Filtre profil de goût
      if (activeTaste !== "all" && item.tasteTag !== activeTaste) {
        return false;
      }

      // Recherche texte
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
  }, [menuItems, activeCategory, activeTaste, searchQuery]);

  const handleAddToCart = (item: MenuItem) => {
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
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === item.id ? null : curr));
    }, 1800);
  };

  const toggleSize = (itemId: string, size: "moyen" | "grand") => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const categories: { id: MenuCategory; label: string; icon: string; count: number }[] = [
    { id: "all", label: "Toute la Carte", icon: "✨", count: menuItems.length },
    {
      id: "poke",
      label: "Pokés Signatures",
      icon: "🥗",
      count: menuItems.filter((i) => i.category === "poke").length,
    },
    {
      id: "crousty",
      label: "Bar à Crousty (Chaud)",
      icon: "🍗",
      count: menuItems.filter((i) => i.category === "crousty").length,
    },
    {
      id: "fish",
      label: "Saumon & Scampis",
      icon: "🦐",
      count: 2,
    },
    {
      id: "dessert",
      label: "Tiramisus Maison",
      icon: "🧁",
      count: menuItems.filter((i) => i.category === "dessert").length,
    },
    {
      id: "drink",
      label: "Boissons Fraîches",
      icon: "🥤",
      count: menuItems.filter((i) => i.category === "drink").length,
    },
  ];

  return (
    <section
      id="carte"
      className="scroll-mt-16 mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-label="La carte interactive Poke N Bowl"
    >
      {/* ── Entête de section ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#d7ff45]/30 border border-[#d7ff45] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10251f]">
            <Sparkles className="h-3.5 w-3.5 text-[#10251f]" />
            Carte Officielle & Recettes Visétoises
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]">
            Des créations fraîches,{" "}
            <span className="text-[#ff705f]">fluides & savoureuses.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5a6760] max-w-2xl font-medium">
            Choisissez votre recette préférée ou composez sur-mesure. Riz à sushi traditionnel,
            saumon découpé minute et poulet doré croustillant.
          </p>
        </div>

        {/* Barre de recherche instantanée */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7d8b83]" />
          <input
            type="text"
            placeholder="Rechercher un plat, ingrédient..."
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

      {/* ── Onglets de Catégories Fluides (Style Pokawa) ────────────────── */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
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

      {/* ── Filtres de goût ludiques (Chips) ─────────────────────────── */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7d8b83] flex items-center gap-1 mr-1">
          <Filter className="h-3 w-3" /> Goût :
        </span>
        {[
          { id: "all", label: "Tous" },
          { id: "fresh", label: "Frais & Fondant 🥑" },
          { id: "crispy", label: "Extra Croustillant 🍗" },
          { id: "spicy", label: "Touche Épicée 🌶️" },
          { id: "sweet", label: "Douceur Teriyaki / Sucré 🍯" },
        ].map((taste) => (
          <button
            key={taste.id}
            type="button"
            onClick={() => setActiveTaste(taste.id)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition ${
              activeTaste === taste.id
                ? "bg-[#ff705f] text-white shadow-sm"
                : "bg-white/80 text-[#5a6760] hover:bg-black/5 border border-black/5"
            }`}
          >
            {taste.label}
          </button>
        ))}
      </div>

      {/* ── Bannière spéciale "Compose ton Poké sur-mesure" ──────────── */}
      <div className="mt-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#10251f] to-[#1c3830] p-6 text-white shadow-lift flex flex-col sm:flex-row items-center justify-between gap-5 border border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d7ff45] text-2xl shadow-md">
            🥣
          </div>
          <div>
            <span className="rounded-full bg-[#d7ff45]/20 border border-[#d7ff45]/30 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
              ✦ Option Sur-Mesure 100% Libre
            </span>
            <h3 className="mt-1 text-lg sm:text-xl font-black">
              Envie de créer votre propre bowl de A à Z ?
            </h3>
            <p className="text-xs text-white/70 max-w-xl">
              Choisissez votre base, votre protéine (poulet, saumon, scampis), vos 5 mix-ins frais,
              votre sauce maison et vos toppings croustillants.
            </p>
          </div>
        </div>
        <Link
          to="/sur-mesure"
          className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#d7ff45] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95"
        >
          <span>Créer mon Bowl (10 €)</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ── Grid Responsive des Plats ─────────────────────────────────── */}
      <div className="mt-10">
        {filteredItems.length === 0 ? (
          <div className="rounded-[32px] bg-white border border-black/5 p-12 text-center shadow-card">
            <span className="text-4xl">🔍</span>
            <h3 className="mt-3 text-xl font-bold text-[#10251f]">Aucun plat ne correspond</h3>
            <p className="mt-1 text-xs text-[#7d8b83]">
              Essayez de réinitialiser la recherche ou changez de catégorie.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setActiveTaste("all");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#10251f] px-5 py-2.5 text-xs font-bold text-white shadow-sm"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const currentSize = selectedSizes[item.id] || "moyen";
                const isGrand = currentSize === "grand" && item.grandPrice;
                const effectivePrice = isGrand ? item.grandPrice! : item.price;
                const isRecentlyAdded = recentlyAddedId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <div>
                      {/* Image du plat ou illustration dessert */}
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

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />

                        {/* Tag en haut à gauche */}
                        <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#10251f] shadow-md backdrop-blur">
                          {item.badge}
                        </span>

                        {/* Badge Prix en haut à droite */}
                        <span className="absolute top-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-xs font-black text-[#10251f] shadow-md">
                          {effectivePrice.toFixed(2)} €
                        </span>

                        {/* Sold out overlay */}
                        {item.soldOut && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                            <span className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                              Victime de son succès
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Corps de la carte */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-lg sm:text-xl font-black text-[#10251f] leading-snug">
                              {item.name}
                            </h3>
                            {item.isCombo ? (
                              <p className="mt-0.5 text-xs font-extrabold text-[#f59e0b]">
                                🥤 Formule Étudiant : Boisson 33cl incluse
                              </p>
                            ) : item.category === "poke" ? (
                              <p className="mt-0.5 text-xs font-bold text-[#ff705f]">
                                🍚 Base riz à sushi · Fait minute
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <p className="mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2">
                          {item.desc}
                        </p>

                        {/* Ingrédients pills */}
                        {item.ingredients && item.ingredients.length > 0 && (
                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {item.ingredients.slice(0, 5).map((ing, i) => (
                              <span
                                key={i}
                                className="rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/85"
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
                                onClick={() => toggleSize(item.id, "moyen")}
                                className={`rounded-full px-2.5 py-1 text-[10px] font-black transition ${
                                  currentSize === "moyen"
                                    ? "bg-[#10251f] text-white shadow-sm"
                                    : "text-[#5a6760] hover:text-black"
                                }`}
                              >
                                Moyen (10 €)
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleSize(item.id, "grand")}
                                className={`rounded-full px-2.5 py-1 text-[10px] font-black transition ${
                                  currentSize === "grand"
                                    ? "bg-[#10251f] text-white shadow-sm"
                                    : "text-[#5a6760] hover:text-black"
                                }`}
                              >
                                Grand (13 €)
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions en bas de carte */}
                    <div className="p-5 sm:p-6 pt-0 mt-auto">
                      <div className="flex items-center gap-2 pt-2 border-t border-black/5">
                        {/* Bouton 1-Clic d'ajout au panier */}
                        <button
                          type="button"
                          disabled={item.soldOut}
                          onClick={() => handleAddToCart(item)}
                          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${
                            item.soldOut
                              ? "bg-black/10 text-black/30 cursor-not-allowed"
                              : isRecentlyAdded
                              ? "bg-[#10251f] text-[#d7ff45] scale-105"
                              : "bg-[#d7ff45] text-[#10251f] hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95"
                          }`}
                          title={`Ajouter au panier (${effectivePrice.toFixed(2)} €)`}
                        >
                          {isRecentlyAdded ? (
                            <Check className="h-5 w-5 stroke-[3]" />
                          ) : (
                            <Plus className="h-5 w-5 stroke-[2.5]" />
                          )}

                          {/* Petit badge "+1" animé lors du clic */}
                          {isRecentlyAdded && (
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

                        {/* Lien Personnaliser ou Commander */}
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
                            Épuisé pour aujourd'hui
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleAddToCart(item)}
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
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
