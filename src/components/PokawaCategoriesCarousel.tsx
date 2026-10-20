import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlCrousty from "@/assets/crousty-chicken-original.jpeg";
import bowlSweet from "@/assets/bowl-sweet-chicken.jpg";
import tiramisuImg from "@/assets/tiramisu-speculoos.jpg";
import drinkImg from "@/assets/drink-coca-cola.jpg";

interface CategoryCard {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  image: string;
  targetId: string;
  desc: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "pokes",
    title: "Pokés & Chirashis",
    badge: "Dès 10,00 €",
    badgeColor: "bg-[#2C1D16] text-[#EADCC9]",
    image: bowlSaumon,
    targetId: "carte",
    desc: "Saumon atlantique minute, poulet doré & scampis royaux",
  },
  {
    id: "crousty",
    title: "Gamme Chaude",
    badge: "Formule 11 € · Boisson Offerte",
    badgeColor: "bg-[#ea580c] text-white",
    image: bowlCrousty,
    targetId: "carte",
    desc: "Crousty chicken chaud nappé de sauce curry ou blanche",
  },
  {
    id: "composer",
    title: "Atelier Sur-Mesure",
    badge: "Création Libre",
    badgeColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
    image: bowlSweet,
    targetId: "composer",
    desc: "Composez votre recette de A à Z avec 5 mix-ins frais",
  },
  {
    id: "desserts",
    title: "Tiramisus Maison",
    badge: "4,00 € · Fait Maison",
    badgeColor: "bg-[#ff705f] text-white",
    image: tiramisuImg,
    targetId: "carte",
    desc: "Spéculoos Lotus, Nutella fondant & Oreo croustillant",
  },
  {
    id: "boissons",
    title: "Boissons Fraîches",
    badge: "2,00 € · Extra Frais",
    badgeColor: "bg-[#0284c7] text-white",
    image: drinkImg,
    targetId: "carte",
    desc: "Canettes 33cl servies givrées & eaux minérales SPA",
  },
];

export function PokawaCategoriesCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Catégories gourmandes Poke N Bowl Visé"
      className="py-14 sm:py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#E2D6C5] overflow-hidden"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* En-tête style Pokawa : "Vivez sainement, soyez gourmands" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C1D16] border border-[#D9C5AD]">
              <Sparkles className="h-3.5 w-3.5 text-[#ff705f]" />
              Fraîcheur & Gourmandise à Visé
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]">
              Vivez sainement, <br className="hidden sm:inline" />
              <span className="text-[#ff705f]">soyez gourmands.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#766358] font-medium max-w-xl">
              Chaque univers est préparé minute avec des produits rigoureusement sélectionnés. Glissez pour explorer :
            </p>
          </div>

          {/* Boutons flèches navigation carousel */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Catégories précédentes"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Catégories suivantes"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel horizontal fluide avec snap */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => scrollToTarget(cat.targetId)}
              className="group flex-shrink-0 w-[270px] sm:w-[290px] snap-start cursor-pointer select-none"
            >
              {/* Carte visuelle arrondie 30px (Style Pokawa Loop Carousel) */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[30px] bg-[#e9e5dc] shadow-card transition-all duration-300 group-hover:shadow-lift border border-[#E2D6C5]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`h-full w-full ${cat.id === "crousty" ? "object-contain bg-white" : "object-cover"} transition duration-700 group-hover:scale-108`}
                />

                {/* Voile dégradé bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Tarif / Type */}
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md ${cat.badgeColor}`}
                >
                  {cat.badge}
                </span>

                {/* Petite étiquette discrète en bas de l'image */}
                <div className="absolute bottom-4 inset-x-4">
                  <p className="text-[11px] font-semibold text-white/90 drop-shadow line-clamp-1">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Titre et flèche sous l'image (Style exact Pokawa Elementor) */}
              <div className="mt-4 flex items-center justify-between px-1">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2C1D16] group-hover:text-[#ff705f] transition">
                  {cat.title}
                </h3>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] transition duration-300 group-hover:bg-[#2C1D16] group-hover:text-[#FAF7F2] group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
