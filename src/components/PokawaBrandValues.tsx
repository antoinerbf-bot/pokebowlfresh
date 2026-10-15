import React from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, ArrowRight, Award } from "lucide-react";

import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweet from "@/assets/bowl-sweet-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty-curry.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";

export function PokawaBrandValues() {
  const VALUES = [
    {
      id: "freshness",
      emoji: "🐟",
      tag: "Exigence fraîcheur",
      tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
      title: "Fraîcheur Quotidienne",
      desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
      perk: "Découpe chaque matin à Visé",
      image: bowlSaumon,
    },
    {
      id: "rice",
      emoji: "🍚",
      tag: "Authenticité",
      tagColor: "bg-[#ff705f] text-white",
      title: "Riz à Sushi Artisanal",
      desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
      perk: "Assaisonnement équilibré",
      image: bowlSweet,
    },
    {
      id: "crousty",
      emoji: "🍗",
      tag: "Gamme Chaude",
      tagColor: "bg-[#ea580c] text-white",
      title: "Crousty Chicken",
      desc: "Petits morceaux de poulet croustillant dorés, oignons frits et sauces chaudes maison curry ou blanche généreuses.",
      perk: "Formule étudiant 11 € avec boisson",
      image: bowlCrousty,
    },
    {
      id: "custom",
      emoji: "✨",
      tag: "Sur-Mesure",
      tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
      title: "Liberté & Transparence",
      desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
      perk: "Zéro compromis sur vos goûts",
      image: bowlScampis,
    },
  ];

  return (
    <section className="bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-y border-[#E2D6C5]">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8">
        {/* Header style exact Pokawa : "Un poké plein de qualités" */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]">
            <Award className="h-3.5 w-3.5 text-[#ff705f]" />
            Nos Engagements & Notre Philosophie
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]">
            Un poké plein de qualités
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#766358] font-medium">
            Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé minute avec les meilleurs produits.
          </p>
        </div>

        {/* 4 Cards Grid Visuelles (Style Pokawa Elementor 4-column cards) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val) => (
            <div
              key={val.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] min-h-[380px] sm:min-h-[420px] p-6 text-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift border border-black/10 select-none"
            >
              {/* Photo de fond immersive */}
              <img
                src={val.image}
                alt={val.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-108"
              />

              {/* Voile sombre cinématographique pour garantir la lisibilité optimale */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Tag & Emoji */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-md text-xl border border-white/20 shadow">
                  {val.emoji}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider shadow ${val.tagColor}`}
                >
                  {val.tag}
                </span>
              </div>

              {/* Content bottom */}
              <div className="relative z-10 mt-auto pt-6">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/85 font-medium line-clamp-3 drop-shadow">
                  {val.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#EADCC9] drop-shadow">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#ff705f]" />
                    {val.perk}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA link */}
        <div className="mt-12 text-center">
          <Link
            to="/commander"
            className="inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A] hover:scale-105 active:scale-95"
          >
            <span>Commander en ligne à Visé</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
