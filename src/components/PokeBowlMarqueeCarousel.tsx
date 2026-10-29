import React, { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Flame, Plus, Check } from "lucide-react";
import { DishImage } from "./DishImage";
import { bowls, type Bowl } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export function PokeBowlMarqueeCarousel() {
  const { addItem, setIsCartOpen } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [addedId, setAddedId] = useState<string | null>(null);

  // Vérifier la position du scroll pour activer/désactiver les flèches
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Défilement fluide gauche / droite
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Défilement automatique doux lorsqu'il n'est pas survolé
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleQuickAdd = (bowl: Bowl) => {
    const isCrousty = bowl.id.startsWith("crousty-");
    addItem({
      id: isCrousty ? bowl.id : `${bowl.id}-moyen`,
      name: isCrousty ? bowl.name : `${bowl.name} (Moyen)`,
      basePrice: bowl.price,
      price: bowl.price,
      quantity: 1,
      toppings: isCrousty ? ["Boisson 33cl incluse au choix"] : [],
      removedIngredients: [],
    });
    setAddedId(bowl.id);
    setTimeout(() => setAddedId(null), 1800);
    setIsCartOpen(true);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
      onTouchStart={() => setIsAutoScrolling(false)}
      onTouchEnd={() => setIsAutoScrolling(true)}
    >
      {/* ── En-tête du Défilé avec titre & boutons de navigation ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-1 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#2C1D16]/5 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#2C1D16] border border-black/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" />
            ✦ Le Défilé de nos Recettes Vedettes
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2C1D16]">
            Les plats préférés de nos clients
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#7A6857] max-w-2xl font-medium">
            Poké bowls frais découpés minute et barquettes Crousty bien chaudes. Fait maison chaque jour à Visé.
          </p>
        </div>

        {/* Boutons flèches précédent / suivant */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Faire défiler vers la gauche"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C5AD] bg-[#FFFDF9] text-[#2C1D16] shadow-sm transition hover:bg-[#2C1D16] hover:text-[#EADCC9] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Faire défiler vers la droite"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C5AD] bg-[#FFFDF9] text-[#2C1D16] shadow-sm transition hover:bg-[#2C1D16] hover:text-[#EADCC9] disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* ── Piste horizontale des cartes de plats ── */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {bowls.map((bowl) => {
          const isCrousty = bowl.id.startsWith("crousty-");
          const isAdded = addedId === bowl.id;

          return (
            <div
              key={bowl.id}
              className="w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start group flex flex-col overflow-hidden rounded-[28px] border-2 border-[#DECBB3] bg-[#FFFDF9] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-[#2C1D16]/30"
            >
              {/* Photo du plat haute définition */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#2C1D16]">
                <DishImage
                  dishId={bowl.id}
                  alt={bowl.name}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                {/* Dégradé léger en bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${
                      isCrousty
                        ? "bg-[#ea580c] text-white"
                        : bowl.tagColor === "bestseller"
                        ? "bg-[#EBDCCB] text-[#2C1D16] border border-[#D9C5AD]"
                        : "bg-white/95 text-[#2C1D16]"
                    }`}
                  >
                    {isCrousty && <Flame className="h-3 w-3" />}
                    {bowl.tag}
                  </span>
                </div>

                {/* Pastille Prix */}
                <div className="absolute bottom-3.5 right-3.5">
                  <span className="rounded-full bg-[#2C1D16] px-3.5 py-1.5 text-xs font-black text-[#EADCC9] shadow-md border border-white/20">
                    {bowl.price.toFixed(2)} €
                  </span>
                </div>

                {isCrousty && (
                  <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#EBDCCB] border border-[#D9C5AD] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md">
                    Boisson incluse 🥤
                  </span>
                )}
              </div>

              {/* Détails du plat */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ff705f]">
                      {isCrousty ? "Spécialité Chaude" : "Poké Bowl Signature"}
                    </span>
                    <span className="text-[10px] font-bold text-[#7A6857]">
                      {isCrousty ? "Barquette kraft" : "Découpé minute"}
                    </span>
                  </div>

                  <h4 className="mt-1 text-lg font-black text-[#2C1D16] group-hover:text-[#ff705f] transition">
                    {bowl.name}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-[#7A6857] line-clamp-2">
                    {bowl.desc}
                  </p>

                  {/* Chips des ingrédients */}
                  <div className="mt-3.5 flex flex-wrap gap-1">
                    {bowl.ingredients.slice(0, 4).map((ing, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-[#FAF5EE] border border-[#DECBB3]/60 px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]"
                      >
                        {ing.emoji} {ing.name}
                      </span>
                    ))}
                    {bowl.ingredients.length > 4 && (
                      <span className="rounded-md bg-[#FAF5EE] border border-[#DECBB3]/60 px-1.5 py-0.5 text-[10px] font-bold text-[#7A6857]">
                        +{bowl.ingredients.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Boutons d'action : Ajout direct 1 clic & Personnaliser */}
                <div className="mt-5 pt-4 border-t border-[#DECBB3]/60 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickAdd(bowl)}
                    title="Ajouter direct au panier"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition active:scale-95 font-black cursor-pointer shadow-sm ${
                      isAdded
                        ? "bg-emerald-600 text-white border-emerald-700"
                        : "bg-[#EBDCCB] border-[#D9C5AD] text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#EADCC9]"
                    }`}
                  >
                    {isAdded ? (
                      <Check className="h-5 w-5 stroke-[3]" />
                    ) : (
                      <Plus className="h-5 w-5 stroke-[2.5]" />
                    )}
                  </button>

                  <Link
                    to="/product/$productId"
                    params={{ productId: bowl.id }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2C1D16] py-3 px-3 text-[11px] font-black uppercase tracking-wider text-[#EADCC9] shadow-soft transition hover:bg-[#ff705f] hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Personnaliser</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
