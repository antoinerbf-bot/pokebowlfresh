import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Plus,
  Check,
  Search,
  Flame,
  Clock,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";
import * as React from "react";
import { BrandLogo } from "@/components/BrandLogo";
import dessert from "@/assets/dessert.jpg";
import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuNutella from "@/assets/tiramisu-nutella.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";

import drinkCocaCola from "@/assets/drink-coca-cola.jpg";
import drinkCocaZero from "@/assets/drink-coca-zero.jpg";
import drinkFantaOrange from "@/assets/drink-fanta-orange.jpg";
import drinkIceTea from "@/assets/drink-ice-tea.jpg";
import drinkEauPlate from "@/assets/drink-eau-plate.jpg";
import drinkEauGazeuse from "@/assets/drink-eau-gazeuse.jpg";

import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { useStock } from "../hooks/useStock";
import { useTranslation } from "../context/I18nContext";

const DESSERT_IMAGES: Record<string, string> = {
  "tira-spec": tiramisuSpeculoos,
  "tira-nutella": tiramisuNutella,
  "tira-oreo": tiramisuOreo,
};

const DRINK_IMAGES: Record<string, string> = {
  coca: drinkCocaCola,
  "coca-zero": drinkCocaZero,
  fanta: drinkFantaOrange,
  "ice-tea": drinkIceTea,
  "eau-plate": drinkEauPlate,
  "eau-gaz": drinkEauGazeuse,
};

const CROUSTY_DRINKS = [
  { id: "coca", label: "Coca-Cola (33 cl)", emoji: "🥤" },
  { id: "coca-zero", label: "Coca-Cola Zéro (33 cl)", emoji: "🥤" },
  { id: "fanta", label: "Fanta Orange (33 cl)", emoji: "🍊" },
  { id: "ice-tea", label: "Ice Tea Sparkling (33 cl)", emoji: "🧊" },
  { id: "eau-plate", label: "SPA Reine Eau plate (50 cl)", emoji: "💧" },
  { id: "eau-gaz", label: "SPA Intense Eau pétillante (50 cl)", emoji: "🫧" },
];

const COMMANDER_MENU_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Carte & Menu Poke N Bowl Visé",
  url: "https://pokenbowl.be/commander",
  inLanguage: "fr",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Nos Poké Bowls Signatures",
      hasMenuItem: bowls
        .filter((b) => !b.id.startsWith("crousty-"))
        .map((b) => ({
          "@type": "MenuItem",
          name: b.name,
          description: b.description,
          offers: {
            "@type": "Offer",
            price: b.price,
            priceCurrency: "EUR",
          },
        })),
    },
    {
      "@type": "MenuSection",
      name: "Gamme Chaude Crousty Chicken",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Crousty Chicken Sauce Blanche",
          description:
            "Poulet croustillant doré minute, riz chaud parfumé, sauce blanche maison onctueuse, oignons frits",
          offers: { "@type": "Offer", price: 11.0, priceCurrency: "EUR" },
        },
        {
          "@type": "MenuItem",
          name: "Crousty Chicken Sauce Curry",
          description:
            "Poulet croustillant doré minute, riz chaud parfumé, sauce curry onctueuse mijotée, oignons frits",
          offers: { "@type": "Offer", price: 11.0, priceCurrency: "EUR" },
        },
        {
          "@type": "MenuItem",
          name: "Crousty Chicken Mix (Duo Curry & Blanche)",
          description:
            "Poulet croustillant doré minute, riz chaud parfumé, duo Sauce Curry et Blanche, oignons frits",
          offers: { "@type": "Offer", price: 11.0, priceCurrency: "EUR" },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/commander")({
  head: () => ({
    meta: [
      { title: "Carte & Menu en Ligne | Poke N Bowl Visé — Bowls Frais & Crousty" },
      {
        name: "description",
        content:
          "Découvrez le menu complet de Poke N Bowl à Visé : Poké bowls signatures au saumon frais découpé minute, Crousty Chicken chaud, desserts maison et boissons. Commande en ligne à emporter ou livraison rapide.",
      },
      { property: "og:title", content: "Carte & Menu en Ligne | Poke N Bowl Visé" },
      {
        property: "og:description",
        content:
          "Commandez votre Poké Bowl frais ou votre Crousty Chicken en ligne à Visé. Préparation minute et ingrédients ultra-frais.",
      },
      { property: "og:url", content: "https://pokenbowl.be/commander" },
      { property: "og:image", content: "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://pokenbowl.be/commander" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(COMMANDER_MENU_SCHEMA),
      },
    ],
  }),
  component: CommanderPage,
});

/* ─── Tag badge styles ───────────────────────────────────────────── */
const TAG_STYLES: Record<string, string> = {
  signature: "bg-[#2C1D16] text-[#EADCC9]",
  bestseller: "bg-[#ff705f] text-white",
  premium: "bg-[#7c4f1a] text-[#ffe9c2]",
  spicy: "bg-[#c0350f] text-white",
  new: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
};

function CommanderPage() {
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const [activeTab, setActiveTab] = React.useState<"all" | "pokes" | "crousty" | "desserts" | "boissons">("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [recentlyAddedId, setRecentlyAddedId] = React.useState<string | null>(null);

  // Selected drinks for Crousty formulas
  const [croustyDrinks, setCroustyDrinks] = React.useState<Record<string, string>>({
    "crousty-chicken-sauce-blanche": "Coca-Cola (33 cl)",
    "crousty-chicken-curry": "Coca-Cola (33 cl)",
    "crousty-chicken-mix": "Coca-Cola (33 cl)",
  });

  const pokeBowls = React.useMemo(() => {
    return bowls.filter((b) => !b.id.startsWith("crousty-"));
  }, []);

  const croustyBowls = React.useMemo(() => {
    // 1. Sauce Blanche, 2. Sauce Curry, 3. Mix
    const order = ["crousty-chicken-sauce-blanche", "crousty-chicken-curry", "crousty-chicken-mix"];
    return order.map((id) => bowls.find((b) => b.id === id)).filter(Boolean) as (typeof bowls);
  }, []);

  // Filter items by search query
  const query = searchQuery.trim().toLowerCase();
  const filteredPokes = pokeBowls.filter(
    (b) => !query || b.name.toLowerCase().includes(query) || b.desc.toLowerCase().includes(query),
  );
  const filteredCrousty = croustyBowls.filter(
    (b) => !query || b.name.toLowerCase().includes(query) || b.desc.toLowerCase().includes(query),
  );
  const filteredDesserts = desserts.filter(
    (d) => !query || d.name.toLowerCase().includes(query),
  );
  const filteredDrinks = drinks.filter(
    (d) => !query || d.name.toLowerCase().includes(query),
  );

  const triggerAddEffect = (id: string) => {
    setRecentlyAddedId(id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
    setIsCartOpen(true);
  };

  const quickAddPoke = (bowl: (typeof bowls)[number]) => {
    if (!available(bowl.id)) return;
    addItem({
      id: `${bowl.id}-moyen`,
      name: `${bowl.name} (Moyen)`,
      basePrice: bowl.price,
      price: bowl.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: bowl.image,
    });
    triggerAddEffect(bowl.id);
  };

  const quickAddCrousty = (bowl: (typeof bowls)[number]) => {
    if (!available(bowl.id)) return;
    const chosenDrink = croustyDrinks[bowl.id] || "Coca-Cola (33 cl)";
    addItem({
      id: bowl.id,
      name: bowl.name,
      basePrice: bowl.price,
      price: bowl.price,
      quantity: 1,
      toppings: [`Boisson 33cl incluse : ${chosenDrink}`],
      removedIngredients: [],
      image: bowl.image,
    });
    triggerAddEffect(bowl.id);
  };

  const quickAddGeneric = (item: { id: string; name: string; price: number; image?: string }) => {
    if (!available(item.id)) return;
    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: item.image || dessert,
    });
    triggerAddEffect(item.id);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6EFE5] text-[#2C1D16]">
      <CartDrawer />

      {/* ── Main Top Nav ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#DECBB3] bg-[#F6EFE5]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1300px] items-center justify-between px-4 py-2.5 sm:px-6">
          <Link
            to="/"
            className="flex items-center transition hover:opacity-95 duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="sm" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lang switcher compact */}
            <div className="hidden rounded-full border border-[#DECBB3] bg-[#FAF5EE] p-0.5 sm:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase transition-colors ${
                    language === lang ? "bg-[#2C1D16] text-white" : "text-[#766358] hover:text-[#2C1D16]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              to="/"
              className="text-xs font-bold text-[#766358] hover:text-[#2C1D16] transition hidden md:inline-block"
            >
              Accueil
            </Link>

            <Link
              to="/sur-mesure"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#DECBB3] bg-[#FAF5EE] px-3 py-1.5 text-xs font-black text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f]"
            >
              <Sparkles className="h-3 w-3 text-[#ff705f]" />
              Sur-Mesure (10 €)
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 rounded-full bg-[#2C1D16] px-3.5 py-2 text-white transition hover:bg-[#ff705f] active:scale-95 shadow-xs"
              aria-label={t("cart.title")}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="text-xs font-black hidden sm:inline">Panier</span>
              {count > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff705f] px-1 text-[10px] font-black leading-none">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* ── Sticky Sub-Bar: Direct Category Pills & Search (Compact) ── */}
        <div className="border-t border-[#DECBB3]/70 bg-[#FAF5EE]/95 px-4 py-2 sm:px-6">
          <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-3">
            {/* Quick Category Jump Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {[
                { id: "all", label: "Tout", icon: "✨" },
                { id: "pokes", label: "Pokés Signatures", icon: "🥗", anchor: "pokes-section" },
                { id: "crousty", label: "Crousty Chicken", icon: "🍗", anchor: "crousty-section" },
                { id: "sur-mesure", label: "Sur-Mesure", icon: "🥣", href: "/sur-mesure" },
                { id: "desserts", label: "Desserts", icon: "🧁", anchor: "desserts-section" },
                { id: "boissons", label: "Boissons", icon: "🥤", anchor: "boissons-section" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                if (tab.href) {
                  return (
                    <Link
                      key={tab.id}
                      to={tab.href}
                      className="shrink-0 flex items-center gap-1 rounded-full border border-[#DECBB3] bg-[#FFFDF9] px-3 py-1 text-xs font-black text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] transition"
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </Link>
                  );
                }

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      if (tab.anchor) scrollToSection(tab.anchor);
                    }}
                    className={`shrink-0 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-black transition cursor-pointer ${
                      isActive
                        ? "bg-[#2C1D16] text-[#EADCC9] shadow-xs"
                        : "border border-[#DECBB3] bg-[#FFFDF9] text-[#766358] hover:text-[#2C1D16] hover:border-[#2C1D16]/40"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Compact Search input */}
            <div className="relative shrink-0 w-36 sm:w-56">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#766358]" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-[#DECBB3] bg-[#FFFDF9] py-1 pl-8 pr-6 text-xs font-medium text-[#2C1D16] placeholder-[#766358]/70 focus:border-[#2C1D16] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#766358] hover:text-[#2C1D16]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1300px] px-4 py-5 sm:px-6 sm:py-6">
        {/* ── Compact Header Banner ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#DECBB3]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#ea580c]">
              <span>🥢</span> Commande en Ligne & Retrait Rapide
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#2C1D16]">
              La Carte Poke N Bowl Visé
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#766358]">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-1 text-[11px]">
              <Clock className="h-3 w-3 text-[#ea580c]" /> Prêt en 15 min
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-1 text-[11px]">
              <MapPin className="h-3 w-3 text-[#ea580c]" /> Visé & Livraison
            </span>
          </div>
        </div>

        {/* ── Compact "Crée ton Bowl Sur Mesure" Strip ───────────── */}
        {(activeTab === "all" || activeTab === "pokes") && !searchQuery && (
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border-2 border-[#ea580c]/30 bg-gradient-to-r from-[#2C1D16] via-[#3A251B] to-[#2C1D16] p-3.5 sm:p-4 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#ea580c] text-white text-xl shadow-xs">
                🥣
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EADCC9] px-2 py-0.2 text-[9px] font-black uppercase text-[#2C1D16]">
                    Sur-Mesure
                  </span>
                  <span className="text-xs font-extrabold text-[#ea580c]">Dès 10,00 €</span>
                </div>
                <h2 className="text-sm sm:text-base font-black text-white">
                  Crée ton Poké Bowl de A à Z
                </h2>
                <p className="text-[11px] text-[#EADCC9]/80 line-clamp-1">
                  1 base, 5 légumes frais inclus, protéine, sauces maison et crunch au choix.
                </p>
              </div>
            </div>

            <Link
              to="/sur-mesure"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#ea580c] hover:bg-[#c2410c] px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition shrink-0 active:scale-95 shadow-xs"
            >
              <span>Composer mon bowl</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1 : POKÉ BOWLS SIGNATURES (Compact 4-Column Grid)
           ═══════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "pokes") && filteredPokes.length > 0 && (
          <section id="pokes-section" className="mb-8 scroll-mt-28">
            <div className="flex items-center justify-between mb-3.5">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#2C1D16] flex items-center gap-2">
                  <span>🥗</span> Nos Poké Bowls Signatures
                </h2>
                <p className="text-[11px] text-[#766358]">
                  Saumon frais découpé minute, poulet mariné tendre & scampis grillés.
                </p>
              </div>
              <span className="text-xs font-extrabold text-[#ff705f] shrink-0">
                Format Moyen dès 10 € · Grand +3 €
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredPokes.map((bowl) => {
                const ok = available(bowl.id);
                const isAdded = recentlyAddedId === bowl.id;
                const tagStyle = TAG_STYLES[bowl.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";

                return (
                  <div
                    key={bowl.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] shadow-xs transition duration-300 hover:shadow-md hover:border-[#2C1D16]/30"
                  >
                    <div>
                      {/* Compact Photo aspect 16/10 */}
                      <Link
                        to="/product/$productId"
                        params={{ productId: bowl.id }}
                        className="relative block aspect-[16/10] w-full overflow-hidden bg-[#2C1D16]"
                      >
                        <DishImage
                          dishId={bowl.id}
                          alt={bowl.name}
                          className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                            ok ? "" : "grayscale"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        {/* Tag */}
                        <span className={`absolute left-2.5 top-2.5 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-xs ${tagStyle}`}>
                          {ok ? bowl.tag : t("cmd.sold_out")}
                        </span>

                        {/* Price */}
                        <span className="absolute bottom-2 right-2.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16] shadow-xs">
                          {bowl.price.toFixed(2)} €
                        </span>
                      </Link>

                      {/* Content */}
                      <div className="p-3.5">
                        <Link
                          to="/product/$productId"
                          params={{ productId: bowl.id }}
                          className="block text-sm font-black text-[#2C1D16] hover:text-[#ff705f] transition line-clamp-1"
                        >
                          {bowl.name}
                        </Link>

                        <p className="mt-1 text-[11px] leading-snug text-[#766358] line-clamp-2">
                          {bowl.desc}
                        </p>

                        {/* Chips ingrédients */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {bowl.ingredients.slice(0, 3).map((ing, i) => (
                            <span
                              key={i}
                              className="rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]"
                            >
                              {ing.emoji} {ing.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions bar compact */}
                    <div className="p-3.5 pt-0 mt-auto">
                      <div className="pt-2.5 border-t border-[#DECBB3]/60 flex items-center justify-between gap-2">
                        <Link
                          to="/product/$productId"
                          params={{ productId: bowl.id }}
                          className="text-[11px] font-extrabold text-[#766358] hover:text-[#2C1D16] transition flex items-center gap-1"
                        >
                          <SlidersHorizontal className="h-3 w-3" />
                          <span>Détails</span>
                        </Link>

                        <button
                          type="button"
                          disabled={!ok}
                          onClick={() => quickAddPoke(bowl)}
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-black transition cursor-pointer active:scale-95 shadow-xs ${
                            !ok
                              ? "bg-black/10 text-black/30 cursor-not-allowed"
                              : isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                              <span>Ajouté</span>
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
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2 : CROUSTY CHICKEN (Formule Étudiant 11 €)
           ═══════════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "crousty") && filteredCrousty.length > 0 && (
          <section id="crousty-section" className="mb-8 scroll-mt-28">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3.5 pb-2 border-b border-[#DECBB3]">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#ea580c]">
                  <Flame className="h-3 w-3 text-[#ea580c] animate-pulse" />
                  Gamme Chaude
                </div>
                <h2 className="mt-1 text-lg sm:text-xl font-black text-[#2C1D16]">
                  🍗 Crousty Chicken · Formule Étudiant 11 €
                </h2>
                <p className="text-[11px] text-[#766358]">
                  Poulet croustillant doré minute, riz parfumé chaud, oignon frit & canette 33 cl incluse au choix.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-black text-[#ea580c] shrink-0">
                <span className="rounded-full bg-[#ea580c] text-white px-2.5 py-0.5 text-[10px] uppercase">
                  Boisson 33 cl incluse 🥤
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredCrousty.map((bowl) => {
                const ok = available(bowl.id);
                const isAdded = recentlyAddedId === bowl.id;
                const isMix = bowl.id === "crousty-chicken-mix";

                return (
                  <div
                    key={bowl.id}
                    className={`flex flex-col justify-between overflow-hidden rounded-2xl border-2 bg-[#FFFDF9] shadow-xs transition duration-300 hover:shadow-md ${
                      isMix ? "border-[#ea580c]/50 ring-1 ring-[#ea580c]/10" : "border-[#DECBB3]"
                    }`}
                  >
                    <div>
                      {/* Compact photo 16/10 */}
                      <Link
                        to="/product/$productId"
                        params={{ productId: bowl.id }}
                        className="relative block aspect-[16/10] w-full overflow-hidden bg-[#2C1D16]"
                      >
                        <DishImage
                          dishId={bowl.id}
                          alt={bowl.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                        {/* Badge recette */}
                        <span
                          className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-xs ${
                            isMix
                              ? "bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white"
                              : bowl.id === "crousty-chicken-curry"
                              ? "bg-[#d97706] text-white"
                              : "bg-[#2C1D16] text-[#EADCC9]"
                          }`}
                        >
                          {isMix ? "⭐ Mix Duo Curry & Blanche" : bowl.id === "crousty-chicken-curry" ? "🍛 Sauce Curry" : "🤍 Sauce Blanche"}
                        </span>

                        {/* Price */}
                        <span className="absolute bottom-2 right-2.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16] shadow-xs">
                          11,00 €
                        </span>

                        <span className="absolute bottom-2 left-2.5 rounded-md bg-black/70 backdrop-blur-sm px-1.5 py-0.5 text-[8.5px] font-black text-[#EADCC9]">
                          Boisson 33 cl incluse
                        </span>
                      </Link>

                      {/* Content */}
                      <div className="p-3.5">
                        <Link
                          to="/product/$productId"
                          params={{ productId: bowl.id }}
                          className="block text-sm font-black text-[#2C1D16] hover:text-[#ea580c] transition line-clamp-1"
                        >
                          {bowl.name}
                        </Link>

                        <p className="mt-1 text-[11px] leading-snug text-[#766358] line-clamp-2">
                          {bowl.desc}
                        </p>

                        {/* Checklist style affiche officielle */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          <span className="rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]">
                            ✓ Poulet croustillant
                          </span>
                          <span className="rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]">
                            ✓ Riz parfumé
                          </span>
                          <span className="rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]">
                            ✓ Oignon frit
                          </span>
                          <span className="rounded-md bg-[#FAF5EE] border border-[#DECBB3] px-1.5 py-0.2 text-[9px] font-bold text-[#2C1D16]">
                            ✓ Aigre douce
                          </span>
                        </div>

                        {/* Selecteur de boisson compact */}
                        <div className="mt-3 pt-2.5 border-t border-[#DECBB3]/60">
                          <label className="block text-[9.5px] font-black uppercase tracking-wider text-[#766358] mb-1">
                            Canette 33 cl incluse :
                          </label>
                          <select
                            value={croustyDrinks[bowl.id] || "Coca-Cola (33 cl)"}
                            onChange={(e) =>
                              setCroustyDrinks((prev) => ({ ...prev, [bowl.id]: e.target.value }))
                            }
                            className="w-full rounded-lg border border-[#DECBB3] bg-[#FAF5EE] px-2 py-1 text-xs font-bold text-[#2C1D16] focus:border-[#2C1D16] focus:outline-none cursor-pointer"
                          >
                            {CROUSTY_DRINKS.map((d) => (
                              <option key={d.id} value={d.label}>
                                {d.emoji} {d.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Actions bar */}
                    <div className="p-3.5 pt-0 mt-auto">
                      <div className="pt-2 border-t border-[#DECBB3]/60 flex items-center justify-between gap-2">
                        <Link
                          to="/product/$productId"
                          params={{ productId: bowl.id }}
                          className="text-[11px] font-extrabold text-[#766358] hover:text-[#2C1D16] transition flex items-center gap-1"
                        >
                          <SlidersHorizontal className="h-3 w-3" />
                          <span>Détails</span>
                        </Link>

                        <button
                          type="button"
                          disabled={!ok}
                          onClick={() => quickAddCrousty(bowl)}
                          className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[11px] font-black transition cursor-pointer active:scale-95 shadow-xs ${
                            !ok
                              ? "bg-black/10 text-black/30 cursor-not-allowed"
                              : isAdded
                              ? "bg-emerald-600 text-white"
                              : isMix
                              ? "bg-[#ea580c] hover:bg-[#c2410c] text-white"
                              : "bg-[#2C1D16] hover:bg-[#ea580c] text-[#EADCC9] hover:text-white"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                              <span>Ajouté</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-3.5 w-3.5 stroke-[3]" />
                              <span>Ajouter 11 €</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-2 text-center text-[10.5px] font-semibold text-[#766358]">
              * Pour toute sauce supplémentaire : disponible en supplément lors de la commande (+1,00 €).
            </p>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 & 4 : DESSERTS & BOISSONS (Direct & Compact)
           ═══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Desserts Maison */}
          {(activeTab === "all" || activeTab === "desserts") && filteredDesserts.length > 0 && (
            <section id="desserts-section" className="rounded-2xl border border-[#DECBB3] bg-[#FAF5EE] p-4 shadow-xs scroll-mt-28">
              <div className="flex items-center justify-between pb-3 border-b border-[#DECBB3]">
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#2C1D16] flex items-center gap-1.5">
                    <span>🧁</span> Tiramisus Maison
                  </h2>
                  <p className="text-[11px] text-[#766358]">Recette artisanale crémeuse</p>
                </div>
                <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]">
                  4,00 €
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {filteredDesserts.map((d) => {
                  const ok = available(d.id);
                  const isAdded = recentlyAddedId === d.id;
                  const imgSrc = DESSERT_IMAGES[d.id] || dessert;

                  return (
                    <div
                      key={d.id}
                      className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#DECBB3]/80 bg-[#FFFDF9] p-2.5 shadow-xs"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#2C1D16]">
                        <img
                          src={imgSrc}
                          alt={d.name}
                          className={`h-full w-full object-cover transition duration-300 hover:scale-105 ${
                            !ok ? "grayscale" : ""
                          }`}
                        />
                        <span className="absolute bottom-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.2 text-[9px] font-black text-[#EADCC9]">
                          4.00 €
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-1">
                        <span className="text-xs font-black text-[#2C1D16] truncate">
                          {d.name}
                        </span>
                        <button
                          type="button"
                          disabled={!ok}
                          onClick={() => quickAddGeneric({ id: d.id, name: d.name, price: d.price, image: imgSrc })}
                          className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-lg transition active:scale-90 ${
                            !ok
                              ? "bg-black/10 text-black/30 cursor-not-allowed"
                              : isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"
                          }`}
                          title="Ajouter au panier"
                        >
                          {isAdded ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <Plus className="h-3.5 w-3.5 stroke-[3]" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Boissons Fraîches */}
          {(activeTab === "all" || activeTab === "boissons") && filteredDrinks.length > 0 && (
            <section id="boissons-section" className="rounded-2xl border border-[#DECBB3] bg-[#FAF5EE] p-4 shadow-xs scroll-mt-28">
              <div className="flex items-center justify-between pb-3 border-b border-[#DECBB3]">
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#2C1D16] flex items-center gap-1.5">
                    <span>🥤</span> Boissons Fraîches
                  </h2>
                  <p className="text-[11px] text-[#766358]">Servies bien fraîches</p>
                </div>
                <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]">
                  2,00 €
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                {filteredDrinks.map((drink) => {
                  const ok = available(drink.id);
                  const isAdded = recentlyAddedId === drink.id;
                  const imgSrc = DRINK_IMAGES[drink.id];

                  return (
                    <div
                      key={drink.id}
                      className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#DECBB3]/80 bg-[#FFFDF9] p-2 shadow-xs"
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#FAF5EE]">
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={drink.name}
                            loading="lazy"
                            className={`h-full w-full object-cover transition duration-300 hover:scale-105 ${
                              !ok ? "grayscale" : ""
                            }`}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-2xl">🥤</div>
                        )}
                        <span className="absolute bottom-1 right-1 rounded-full bg-[#2C1D16] px-1.5 py-0.2 text-[8.5px] font-black text-[#EADCC9]">
                          2.00 €
                        </span>
                      </div>

                      <div className="mt-1.5 flex items-center justify-between gap-1">
                        <span className="text-[11px] font-black text-[#2C1D16] truncate" title={drink.name}>
                          {drink.name.split(" ")[0]}
                        </span>
                        <button
                          type="button"
                          disabled={!ok}
                          onClick={() => quickAddGeneric({ id: drink.id, name: drink.name, price: drink.price, image: imgSrc })}
                          className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-lg transition active:scale-90 ${
                            !ok
                              ? "bg-black/10 text-black/30 cursor-not-allowed"
                              : isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white"
                          }`}
                          title="Ajouter au panier"
                        >
                          {isAdded ? <Check className="h-3 w-3 stroke-[3]" /> : <Plus className="h-3 w-3 stroke-[3]" />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* ── Empty search state ─────────────────────────────────── */}
        {filteredPokes.length === 0 &&
          filteredCrousty.length === 0 &&
          filteredDesserts.length === 0 &&
          filteredDrinks.length === 0 && (
            <div className="my-12 rounded-2xl border border-[#DECBB3] bg-[#FFFDF9] p-8 text-center shadow-xs">
              <span className="text-3xl">🔍</span>
              <h3 className="mt-2 text-base font-black text-[#2C1D16]">
                Aucun plat ne correspond à « {searchQuery} »
              </h3>
              <p className="mt-1 text-xs text-[#766358]">
                Vérifiez l'orthographe ou essayez un autre mot-clé (saumon, poulet, curry, tiramisu...).
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-3 rounded-full bg-[#2C1D16] px-4 py-1.5 text-xs font-black text-white"
              >
                Effacer la recherche
              </button>
            </div>
          )}
      </main>

      {/* ── Mobile Sticky Cart Bar ─────────────────────────────── */}
      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#DECBB3] bg-[#FFFDF9]/95 p-3 backdrop-blur-md sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex w-full items-center justify-between rounded-full bg-[#2C1D16] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg active:scale-95"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-[#ff705f]" />
              <span>Voir mon panier</span>
            </div>
            <span className="rounded-full bg-[#ff705f] px-2.5 py-0.5 text-xs font-black text-white">
              {count} {count > 1 ? "articles" : "article"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
