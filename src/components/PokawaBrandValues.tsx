import React from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Fish, Flame, HeartHandshake, ShieldCheck, ArrowRight, Award } from "lucide-react";

export function PokawaBrandValues() {
  const VALUES = [
    {
      id: "freshness",
      emoji: "🐟",
      tag: "Exigence fraîcheur",
      tagColor: "bg-[#d7ff45] text-[#10251f]",
      title: "Fraîcheur Quotidienne",
      desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
      perk: "Découpe chaque matin à Visé",
    },
    {
      id: "rice",
      emoji: "🍚",
      tag: "Authenticité",
      tagColor: "bg-[#ff705f] text-white",
      title: "Riz à Sushi Artisanal",
      desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
      perk: "Assaisonnement équilibré",
    },
    {
      id: "crousty",
      emoji: "🍗",
      tag: "Gamme Chaude",
      tagColor: "bg-[#8b5510] text-white",
      title: "Bar à Crousty Pané",
      desc: "Pour les amateurs de réconfort : poulet pané ultra croustillant, oignons frits dorés et sauces chaudes gourmandes.",
      perk: "Formule étudiant 11€ avec boisson",
    },
    {
      id: "custom",
      emoji: "✨",
      tag: "Sur-Mesure",
      tagColor: "bg-[#10251f] text-[#d7ff45]",
      title: "Liberté & Transparence",
      desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
      perk: "Zéro compromis sur vos goûts",
    },
  ];

  return (
    <section className="bg-[#faf8f4] py-16 sm:py-20 lg:py-24 border-y border-black/5">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8">
        {/* Header (Pokawa-inspired) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5">
            <Award className="h-3.5 w-3.5 text-[#ff705f]" />
            Nos Engagements & Notre Philosophie
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]">
            Un Poké plein de qualités
          </h2>
          <p className="mt-2 text-sm text-[#68756f]">
            Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé avec les meilleurs ingrédients.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val) => (
            <div
              key={val.id}
              className="group flex flex-col justify-between rounded-[32px] border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div>
                {/* Top Emoji + Tag */}
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f4ec] text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {val.emoji}
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${val.tagColor}`}>
                    {val.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg sm:text-xl font-extrabold text-[#10251f]">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#68756f]">
                  {val.desc}
                </p>
              </div>

              {/* Bottom Perk Pill */}
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#10251f]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#ff705f]" />
                  {val.perk}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct CTA link */}
        <div className="mt-12 text-center">
          <Link
            to="/commander"
            className="inline-flex items-center gap-2 rounded-full bg-[#10251f] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-105 active:scale-95"
          >
            <span>Goûter la différence en ligne</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
