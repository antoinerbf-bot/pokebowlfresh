import React, { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Flame, Plus } from "lucide-react";
import { DishImage } from "./DishImage";
import { bowls, type Bowl } from "@/lib/data";

export function PokeBowlMarqueeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Check scroll position for arrows
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Smooth scroll left/right buttons
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Subtle auto-scroll animation when not hovered
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 15) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
    >
      {/* Top Header with title & navigation controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-1 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" />
            ✦ Le Défilé de nos Bowls Signatures
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10251f]">
            Découvrez tous nos Poké Bowls en un coup d'œil
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#68756f]">
            70% de nos commandes : des bowls ultra-garnis, faits minute avec notre riz à sushi délicat.
          </p>
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Faire défiler vers la gauche"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Faire défiler vers la droite"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {bowls.map((bowl, index) => {
          const isCrousty = bowl.id.startsWith("crousty-");
          return (
            <div
              key={bowl.id}
              className="w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Dish Photo */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#ece8dc]">
                <DishImage
                  dishId={bowl.id}
                  alt={bowl.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Tag Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${
                      isCrousty
                        ? "bg-[#8b5510] text-white"
                        : bowl.tagColor === "bestseller"
                        ? "bg-[#d7ff45] text-[#10251f]"
                        : "bg-white/95 text-[#10251f]"
                    }`}
                  >
                    {isCrousty && <Flame className="h-3 w-3" />}
                    {bowl.tag}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3.5 right-3.5">
                  <span className="rounded-full bg-[#10251f] px-3.5 py-1.5 text-xs font-black text-white shadow-md border border-white/20">
                    {bowl.price.toFixed(2)} €
                  </span>
                </div>

                {isCrousty && (
                  <span className="absolute bottom-3.5 left-3.5 rounded-full bg-[#d7ff45] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md">
                    Boisson incluse 🥤
                  </span>
                )}
              </div>

              {/* Bowl details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff705f]">
                      {isCrousty ? "Spécialité Chaude" : "Poké Bowl Signature"}
                    </span>
                    <span className="text-[10px] font-semibold text-[#7d8b83]">
                      Fait minute
                    </span>
                  </div>

                  <h4 className="mt-1 text-lg font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition">
                    {bowl.name}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2">
                    {bowl.desc}
                  </p>

                  {/* Ingredients chips */}
                  <div className="mt-3.5 flex flex-wrap gap-1">
                    {bowl.ingredients.slice(0, 4).map((ing, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-semibold text-[#10251f]/80"
                      >
                        {ing.emoji} {ing.name}
                      </span>
                    ))}
                    {bowl.ingredients.length > 4 && (
                      <span className="rounded-md bg-[#f7f4ec] px-1.5 py-0.5 text-[10px] font-semibold text-[#7d8b83]">
                        +{bowl.ingredients.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-5 pt-4 border-t border-black/5">
                  <Link
                    to="/product/$productId"
                    params={{ productId: bowl.id }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Personnaliser & Commander</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
