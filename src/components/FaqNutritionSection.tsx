import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "D'où provient votre saumon et comment est-il préparé ?",
    a: "Notre saumon atlantique est rigoureusement sélectionné pour sa fraîcheur et sa haute teneur en oméga-3. Chaque pièce est réceptionnée sous contrôle strict de température, désarêtée à la main et découpée minute en dés généreux chaque matin directement dans notre restaurant à Visé.",
  },
  {
    q: "Proposez-vous des options végétariennes ou adaptées aux intolérances ?",
    a: "Oui, totalement ! Dans notre menu ainsi que dans notre section 'Composer son bowl', vous pouvez composer un bowl 100% végétarien ou sans gluten en choisissant parmi nos bases de riz sushi, nos légumes croquants (avocat, edamame, mangue, concombre, carottes) et nos sauces soja naturellement sans lactose.",
  },
  {
    q: "Qu'est-ce qui différencie votre riz à sushi du riz ordinaire ?",
    a: "Le secret d'un véritable poké bowl réside dans son riz. Nous utilisons un riz japonais à grain rond cuit avec une précision millimétrée, puis assaisonné tiède avec notre vinaigre de riz signature. Il n'est jamais sec ni compact : il reste aéré, fondant et subtilement parfumé.",
  },
  {
    q: "Comment fonctionne le Click & Collect sans file d'attente à Visé ?",
    a: "C'est ultra-simple et rapide : vous passez votre commande directement sur notre site, vous choisissez vos plats et toppings, et votre commande est préparée en 15 à 20 minutes. À votre arrivée au restaurant (12 Avenue du Pont), votre commande vous attend scellée sans attente !",
  },
  {
    q: "Qu'est-ce qui est inclus dans la formule Crousty Chicken à 11 € ?",
    a: "Notre formule chaude star comprend une portion généreuse de morceaux de poulet croustillant dorés, servis sur riz chaud avec sauce curry douce ou sauce blanche maison, oignons frits croquants, ainsi qu'une canette 33cl bien fraîche au choix (Coca, Fanta, Ice Tea ou eau minérale).",
  },
];

export function FaqNutritionSection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-label="Foire aux questions Poke N Bowl Visé"
      className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-b border-[#E2D6C5]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]">
            <HelpCircle className="h-3.5 w-3.5 text-[#ff705f]" />
            Questions Fréquentes & Rassurance
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#2C1D16]">
            Tout ce que vous voulez savoir
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#766358] font-medium">
            Des réponses claires et transparentes sur nos produits, nos ingrédients et notre service.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-[#E2D6C5] bg-white transition shadow-sm hover:border-[#D4BF9E]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-black text-[#2C1D16] pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3ECE1] text-[#2C1D16] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#ff705f] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#5F4E44] border-t border-[#F3ECE1] pt-4 font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
