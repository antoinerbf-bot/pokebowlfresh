import React, { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Flame, Cookie, GlassWater, Utensils } from "lucide-react";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import heroPoke from "@/assets/hero-poke.jpg";

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  image: string;
  anchor: string;
  icon: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "pokes",
    title: "Pokés Signatures",
    subtitle: "5 recettes équilibrées",
    badge: "100% Frais",
    badgeColor: "bg-[#d7ff45] text-[#10251f]",
    image: bowlSaumon,
    anchor: "#carte",
    icon: "🥗",
  },
  {
    id: "sur-mesure",
    title: "Compose ton Bowl",
    subtitle: "5 mix-ins frais inclus",
    badge: "Sur-Mesure",
    badgeColor: "bg-[#ff705f] text-white",
    image: bowlSweetChicken,
    anchor: "#composer",
    icon: "✨",
  },
  {
    id: "crousty",
    title: "Bar à Crousty",
    subtitle: "Formule étudiant 11€",
    badge: "Gamme Chaude 🔥",
    badgeColor: "bg-[#8b5510] text-white",
    image: bowlCroustyCurry,
    anchor: "#crousty",
    icon: "🍗",
  },
  {
    id: "desserts",
    title: "Tiramisus Maison",
    subtitle: "Fait chaque matin (4€)",
    badge: "Gourmandise",
    badgeColor: "bg-[#ff705f]/90 text-white",
    image: tiramisuSpeculoos,
    anchor: "#desserts",
    icon: "🧁",
  },
  {
    id: "boissons",
    title: "Boissons Fraîches",
    subtitle: "Canettes givrées & eaux",
    badge: "2,00 € l'unité",
    badgeColor: "bg-[#10251f] text-white",
    image: heroPoke,
    anchor: "#boissons",
    icon: "🥤",
  },
];

export function PokawaCategoriesBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleCategoryClick = (anchor: string) => {
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white/80 py-10 sm:py-14 border-b border-black/5 overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8">
        {/* Title Header with Pokawa Slogan style */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f]">
              <span>🥑</span> Explorez Notre Carte Complète
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]">
              Vivez sainement, soyez gourmands.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#68756f]">
              Des créations fraîches, des spécialités chaudes et des douceurs artisanales préparées à Visé.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Faire défiler vers la gauche"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Faire défiler vers la droite"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Category Cards Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryClick(cat.anchor)}
              style={{ scrollSnapAlign: "start" }}
              className="group relative flex w-[220px] sm:w-[245px] shrink-0 flex-col overflow-hidden rounded-[30px] border border-black/5 bg-[#faf8f4] p-3.5 text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lift active:scale-98 cursor-pointer"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[24px] bg-[#ece8dc]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Badge Tag top left */}
                <span className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider shadow-sm ${cat.badgeColor}`}>
                  {cat.badge}
                </span>

                {/* Floating quick icon circle */}
                <span className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-sm shadow-md backdrop-blur-sm">
                  {cat.icon}
                </span>
              </div>

              {/* Title & subtitle */}
              <div className="mt-3.5 px-1 pb-1">
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#10251f] group-hover:text-[#ff705f] transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-0.5 text-[11px] font-semibold text-[#68756f]">
                  {cat.subtitle}
                </p>

                {/* Bottom link style */}
                <div className="mt-2.5 flex items-center justify-between border-t border-black/5 pt-2 text-[10px] font-black uppercase tracking-wider text-[#10251f]/75 group-hover:text-[#ff705f]">
                  <span>Voir la carte</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
