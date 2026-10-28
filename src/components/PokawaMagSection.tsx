import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { BLOG_ARTICLES } from "@/data/blogArticles";

export function PokawaMagSection() {
  const topArticles = BLOG_ARTICLES.slice(0, 3);

  return (
    <section
      aria-label="Le Mag Poké N Bowl Visé — Articles & Nutrition"
      className="bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-b border-[#E2D6C5]"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header style Pokawa : "L'actu & Le Mag" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#2C1D16] border border-[#D9C5AD]">
              <BookOpen className="h-3.5 w-3.5 text-[#ff705f]" />
              Le Mag Poké · Nutrition & Savoir-Faire
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]">
              Des articles pour mieux manger
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#766358] font-medium max-w-xl">
              Conseils nutrition, secrets de nos recettes fait minute et guides pour composer votre bowl idéal au cœur de Visé.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ff705f] hover:text-[#2C1D16] transition group shrink-0"
          >
            <span>Voir tous les articles du Mag</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topArticles.map((art) => (
            <Link
              key={art.slug}
              to="/blog/$slug"
              params={{ slug: art.slug }}
              className="group flex flex-col justify-between overflow-hidden rounded-[30px] border border-[#E2D6C5] bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-black/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="rounded-full bg-[#FAF4EB]/95 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD] shadow-sm">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#766358]">
                    <Clock className="h-3.5 w-3.5 text-[#ff705f]" />
                    <span>{art.readTime}</span>
                    <span>·</span>
                    <span>{art.date}</span>
                  </div>

                  <h3 className="mt-2.5 text-lg sm:text-xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition leading-snug">
                    {art.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#766358] font-medium leading-relaxed line-clamp-3">
                    {art.deck}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#E2D6C5]/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#2C1D16]">
                  Par {art.author.name}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition">
                  Lire l'article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
