import React from "react";
import { Link } from "@tanstack/react-router";
import { Zap, Clock, ShieldCheck, ArrowRight, Sparkles, ShoppingBag } from "lucide-react";

export function PokawaPerksBanner() {
  return (
    <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#10251f] via-[#142d26] to-[#0b1a16] p-7 sm:p-10 lg:p-14 text-white shadow-lift border border-white/10 relative">
        {/* Glow ambient background effects */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#d7ff45]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ff705f]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45] backdrop-blur-md border border-white/10">
              <Sparkles className="h-3 w-3" />
              Service Express Poke N Bowl Visé
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Commandez en direct au meilleur prix
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed">
              Pas d'intermédiaire, préparation prioritaire en cuisine et ingrédients 100% personnalisables selon vos préférences et allergies.
            </p>

            {/* 3 Key Highlights */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] text-sm font-black">
                  ⚡
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold">Retrait Express</h4>
                  <p className="text-[10px] text-white/60">Zéro attente au 12 Av. du Pont</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ff705f] text-white text-sm font-black">
                  🛵
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold">Livraison Locale</h4>
                  <p className="text-[10px] text-white/60">Dès 2 € selon distance (0 € dès 50 €)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45]/20 text-[#d7ff45] text-sm font-black">
                  🎓
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold">Formule 11 €</h4>
                  <p className="text-[10px] text-white/60">Crousty Chicken + boisson 33cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <Link
              to="/commander"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#d7ff45] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Commander en ligne</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/sur-mesure"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <span>Créer mon Poké sur-mesure</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
