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
  const [selectedSizes, setSelectedSizes] = useState<Record<string, "moyen" | "grand">>({});

  // Filtrer exclusivement les 4 Poké Bowls Signatures (AUCUN Crousty Chicken)
  const pokeBowls = React.useMemo(() => {
    return bowls.filter((b) => !b.id.startsWith("crousty-"));
  }, []);

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
    const cardWidth = 360;
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
        scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleQuickAdd = (bowl: Bowl) => {
    const size = selectedSizes[bowl.id] || "moyen";
    const isGrand = size === "grand";
    const finalPrice = isGrand ? bowl.price + 3 : bowl.price;

    addItem({
      id: `${bowl.id}-${size}`,
      name: `${bowl.name} (${isGrand ? "Grand" : "Moyen"})`,
      basePrice: bowl.price,
      price: finalPrice,
      quantity: 1,
      toppings: [isGrand ? "Taille : Grand (+3.00€)" : "Taille : Moyen (Standard)"],
      removedIngredients: [],
    });
    setAddedId(bowl.id);
    setTimeout(() => setAddedId(null), 1800);
    setIsCartOpen(true);
  };

  const toggleSize = (bowlId: string, size: "moyen" | "grand") => {
    setSelectedSizes((prev) => ({ ...prev, [bowlId]: size }));
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
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#2C1D16]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" />
            ✦ Nos Poké Bowls Signatures
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2C1D16]">
            Les recettes fraîches découpées minute
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#7A6857] max-w-2xl font-medium">
            Saumon frais découpé au couteau chaque matin, scampis grillés saisis minute, poulet mariné fondant & légumes croquants sur lit de riz vinaigré.
          </p>
        </div>

        {/* Boutons flèches précédent / suivant */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Faire défiler vers la gauche"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C5AD] bg-[#FFFDF9] text-[#2C1D16] shadow-sm transition hover:bg-[#2C1D16] hover:text-[#EADCC9] disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Faire défiler vers la droite"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9C5AD] bg-[#FFFDF9] text-[#2C1D16] shadow-sm transition hover:bg-[#2C1D16] hover:text-[#EADCC9] disabled:opacity-30 disabled:pointer-events-none cursor-pointer active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* ── Piste horizontale des 4 Poké Bowls avec rendu photographique haute immersion ── */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {pokeBowls.map((bowl) => {
          const isAdded = addedId === bowl.id;
          const currentSize = selectedSizes[bowl.id] || "moyen";
          const currentPrice = currentSize === "grand" ? bowl.price + 3 : bowl.price;

          return (
            <div
              key={bowl.id}
              className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start group flex flex-col overflow-hidden rounded-[30px] border-2 border-[#DECBB3] bg-[#FFFDF9] shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift hover:border-[#2C1D16]/40"
            >
              {/* Photo du Poké Bowl haute définition avec mise en valeur des textures */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#2C1D16]">
                <DishImage
                  dishId={bowl.id}
                  alt={`Poké Bowl ${bowl.name} frais préparé minute à Visé`}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-108 filter contrast-[1.05] saturate-[1.12]"
                />

                {/* Voile dégradé subtil bas pour clarté des badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                {/* Badge Tag Supérieur Gauche */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-[#DECBB3]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-ping" />
                    {bowl.tag}
                  </span>
                </div>

                {/* Pastille Fraîcheur Supérieure Droite */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="rounded-full bg-[#2C1D16]/85 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-[#EADCC9] shadow-md border border-white/15">
                    Frais minute 🌿
                  </span>
                </div>

                {/* Pastille Prix dynamique en bas à droite */}
                <div className="absolute bottom-3.5 right-3.5">
                  <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 text-xs font-black text-[#2C1D16] shadow-md">
                    {currentPrice.toFixed(2)} €
                  </span>
                </div>

                {/* Badge Base en bas à gauche */}
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="rounded-lg bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white border border-white/20 shadow-xs">
                    Base Riz Vinaigré 🍚
                  </span>
                </div>
              </div>

              {/* Détails du plat */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#ff705f]">
                      Poké Bowl Signature
                    </span>
                    <span className="text-[10px] font-bold text-[#7A6857]">
                      Visé, Belgique
                    </span>
                  </div>

                  <h4 className="mt-1 text-xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition">
                    {bowl.name}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-[#7A6857] line-clamp-2">
                    {bowl.desc}
                  </p>

                  {/* Chips des ingrédients frais */}
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {bowl.ingredients.slice(0, 5).map((ing, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2.5 py-1 text-[10px] font-bold text-[#2C1D16]"
                      >
                        {ing.emoji} {ing.name}
                      </span>
                    ))}
                    {bowl.ingredients.length > 5 && (
                      <span className="rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2 py-1 text-[10px] font-bold text-[#7A6857]">
                        +{bowl.ingredients.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Sélecteur de format Moyen / Grand directement sur la carte */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#DECBB3]/60 pt-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#7A6857]">
                      Format :
                    </span>
                    <div className="inline-flex rounded-full bg-[#FAF5EE] border border-[#DECBB3] p-0.5 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSize(bowl.id, "moyen")}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${
                          currentSize === "moyen"
                            ? "bg-[#2C1D16] text-[#EADCC9] shadow-xs"
                            : "text-[#7A6857] hover:text-[#2C1D16]"
                        }`}
                      >
                        Moyen ({bowl.price.toFixed(0)} €)
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleSize(bowl.id, "grand")}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-black transition cursor-pointer ${
                          currentSize === "grand"
                            ? "bg-[#2C1D16] text-[#EADCC9] shadow-xs"
                            : "text-[#7A6857] hover:text-[#2C1D16]"
                        }`}
                      >
                        Grand ({(bowl.price + 3).toFixed(0)} €)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Boutons d'action : Ajout direct 1 clic & Personnaliser */}
                <div className="mt-4 pt-3 border-t border-[#DECBB3]/60 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickAdd(bowl)}
                    title={`Ajouter ${bowl.name} au panier`}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition active:scale-95 font-black cursor-pointer shadow-sm ${
                      isAdded
                        ? "bg-emerald-600 text-white border-emerald-700 shadow-md"
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2C1D16] py-3 px-3 text-[11px] font-black uppercase tracking-wider text-[#EADCC9] shadow-sm transition hover:bg-[#ff705f] hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
