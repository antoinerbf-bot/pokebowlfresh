import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart, Award, Flame, Utensils } from "lucide-react";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";

const INGREDIENTS_SHOWCASE = [
  {
    id: "saumon",
    title: "Le Saumon Atlantique Sashimi",
    subtitle: "Pêche responsable · Zéro congélation",
    desc: "Découpé au couteau chaque matin en gros cubes fondants. Une texture soyeuse et beurrée qui sublime nos bowls signature.",
    badge: "100% Frais Découpé Minute",
    badgeColor: "#ff705f",
    image: bowlSaumon,
    linkDish: "saumon-wasabi",
    stats: "Riche en Oméga-3 & Protéines",
  },
  {
    id: "avocat",
    title: "L'Avocat Hass Ultra-Fondant",
    subtitle: "Sélectionné à maturité parfaite",
    desc: "Un avocat crémeux tranché minute en éventail ou écrasé en guacamole maison. Aucun avocat dur ou sans saveur.",
    badge: "Maturité Contrôlée",
    badgeColor: "#d7ff45",
    image: bowlSweetChicken,
    linkDish: "sweet-chicken",
    stats: "Vitamines E & Bons Lipides",
  },
  {
    id: "crousty",
    title: "Le Fameux Crousty Chicken",
    subtitle: "Panure dorée croustillante minute",
    desc: "Notre recette secrète de poulet mariné et pané ultra croustillant, nappé de sauce curry chaude onctueuse ou sauce blanche.",
    badge: "Spécialité Chaude · Formule 11€",
    badgeColor: "#f59e0b",
    image: bowlCroustyCurry,
    linkDish: "crousty-chicken-curry",
    stats: "Boisson 33cl offerte incluse",
  },
  {
    id: "scampis",
    title: "Les Scampis Royaux au Grill",
    subtitle: "Saisis à haute température",
    desc: "De généreux scampis bien dorés avec une subtile note fumée, combinés aux jalapeños frais et à notre spicy mayo maison.",
    badge: "Saisi Minute",
    badgeColor: "#d7ff45",
    image: bowlScampis,
    linkDish: "scampis-royaux",
    stats: "Protéines maigres & Saveur grill",
  },
];

export function DishTasteExplorer() {
  return (
    <section className="bg-[#faf8f4] py-16 sm:py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#10251f]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#10251f]">
              <Sparkles className="h-3.5 w-3.5 text-[#10251f]" />
              <span>Pourquoi c'est si addictif ?</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#10251f] tracking-tight">
              L'exigence de la fraîcheur. <span className="text-[#ff705f]">Zéro compromis.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#64746d] leading-relaxed">
            Ici, pas de produits industriels pré-emballés ni de chips sans valeur. Chaque ingrédient est sélectionné pour sa fraîcheur brute et préparé sur place à Visé.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS_SHOWCASE.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/5 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div>
                {/* Photo with subtle zoom */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#eee8dc]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md backdrop-blur-md"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#7d8b83]">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 text-lg font-black text-[#10251f] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64746d]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#10251f]">
                  {item.stats}
                </span>
                <Link
                  to="/product/$productId"
                  params={{ productId: item.linkDish }}
                  className="inline-flex items-center gap-1 text-xs font-black text-[#ff705f] hover:underline"
                >
                  <span>Goûter →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
