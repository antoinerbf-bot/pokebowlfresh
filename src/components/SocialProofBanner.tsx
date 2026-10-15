import React from "react";
import { Star, ShieldCheck, Clock, Award, Sparkles, MapPin } from "lucide-react";

export function SocialProofBanner() {
  return (
    <section
      aria-label="Avis clients et gages de qualité Poke N Bowl Visé"
      className="border-y border-black/5 bg-white py-6 px-4 sm:px-6 lg:px-8 shadow-sm"
    >
      <div className="mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Note Google 4.9/5 avec étoiles dorées */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8ee] border border-[#fed7aa] shadow-sm">
            <span className="text-2xl">🌟</span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black text-[#10251f]">4.9 / 5</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs font-bold text-[#5a6760]">
              Sur Google · <span className="text-[#ff705f] font-black">+350 clients conquis</span> à Visé
            </p>
          </div>
        </div>

        {/* 3 Pilliers de Confiance & Fraîcheur */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2.5 rounded-2xl bg-[#faf8f4] border border-black/5 px-3.5 py-2">
            <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
            <div>
              <span className="block text-xs font-black text-[#10251f]">Prêt en 15-20 min</span>
              <span className="block text-[10px] text-[#7a847e]">Retrait express sans file</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl bg-[#faf8f4] border border-black/5 px-3.5 py-2">
            <Sparkles className="h-4 w-4 text-[#ff705f] shrink-0" />
            <div>
              <span className="block text-xs font-black text-[#10251f]">100% Fait Minute</span>
              <span className="block text-[10px] text-[#7a847e]">Saumon découpé du matin</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-2xl bg-[#faf8f4] border border-black/5 px-3.5 py-2">
            <MapPin className="h-4 w-4 text-[#ff705f] shrink-0" />
            <div>
              <span className="block text-xs font-black text-[#10251f]">Cœur de Visé</span>
              <span className="block text-[10px] text-[#7a847e]">Avenue du Pont 12</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
