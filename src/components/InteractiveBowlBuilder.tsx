import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Plus,
  Check,
  RotateCcw,
  ArrowRight,
  Flame,
  ChefHat,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";

const BASES = [
  { id: "riz-sushi", name: "Riz à sushi japonais", emoji: "🍚", desc: "Vinaigré et fondant" },
  { id: "riz-brun", name: "Riz brun complet", emoji: "🌾", desc: "Riche en fibres & parfumé" },
  { id: "salade", name: "Salade fraîche croquante", emoji: "🥗", desc: "Légère & désaltérante" },
  { id: "pates", name: "Pâtes gourmandes", emoji: "🍝", desc: "Savoureuses & consistantes" },
];

const PROTEINES = [
  { id: "poulet", name: "Poulet mariné doré", emoji: "🍗", extra: 0, tag: "Petits morceaux tendres" },
  { id: "saumon", name: "Saumon sashimi noble", emoji: "🐟", extra: 1.0, tag: "+1,00 € · Découpé minute" },
  { id: "scampis", name: "Scampis royaux grillés", emoji: "🦐", extra: 0, tag: "Saisis au grill minute" },
  { id: "vege", name: "Double Avocat Hass & Feta", emoji: "🥑", extra: 0, tag: "100% Végétarien" },
];

const MIXINS = [
  { id: "avocat", name: "Avocat Hass fondant", emoji: "🥑" },
  { id: "mangue", name: "Mangue mûre juteuse", emoji: "🥭" },
  { id: "edamame", name: "Edamame croquant", emoji: "🫘" },
  { id: "feta", name: "Feta grecque AOP", emoji: "🧀" },
  { id: "wakame", name: "Salade d'algues Wakame", emoji: "🌿" },
  { id: "tomates", name: "Tomates cerises", emoji: "🍅" },
  { id: "mais", name: "Maïs doux", emoji: "🌽" },
  { id: "concombre", name: "Concombre frais", emoji: "🥒" },
  { id: "jalapenos", name: "Jalapeños marinés", emoji: "🌶️" },
  { id: "patates-douces", name: "Patates douces rôties", emoji: "🍠" },
];

const SAUCES = [
  { id: "teriyaki", name: "Teriyaki caramélisée maison", emoji: "🍯", desc: "Sucré-salé savoureux" },
  { id: "spicy-mayo", name: "Spicy Mayo piquante", emoji: "🌶️", desc: "Relevée & onctueuse" },
  { id: "mayo-wasabi", name: "Mayo Wasabi veloutée", emoji: "🟢", desc: "Fraîche avec du caractère" },
  { id: "sesame", name: "Sésame toasté crémeux", emoji: "🌰", desc: "Rondeur délicate" },
];

const TOPPINGS = [
  { id: "oignons-frits", name: "Oignons frits dorés", emoji: "🧅", desc: "Croustillant irrésistible" },
  { id: "sesame-mix", name: "Mélange sésame noir & blanc", emoji: "🌱", desc: "Arômes torréfiés" },
  { id: "noix-cajou", name: "Noix de cajou", emoji: "🥜", desc: "Croquant délicat" },
  { id: "nachos", name: "Nachos croustillants", emoji: "🌽", desc: "Crunch maïs salé" },
  { id: "flocons-chili", name: "Flocons de chili crunchy", emoji: "🔥", desc: "Kick épicé vivifiant" },
  { id: "wazabi", name: "Wazabi peas crunchy", emoji: "🟢", desc: "Piquant japonais" },
];

export function InteractiveBowlBuilder() {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const [size, setSize] = React.useState<"moyen" | "grand">("moyen");
  const [base, setBase] = React.useState(BASES[0]);
  const [proteine, setProteine] = React.useState(PROTEINES[1]); // Saumon par défaut
  const [selectedMixins, setSelectedMixins] = React.useState<string[]>([
    "avocat",
    "mangue",
    "edamame",
    "wakame",
    "feta",
  ]);
  const [sauce, setSauce] = React.useState(SAUCES[0]);
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>(["oignons-frits"]);
  const [added, setAdded] = React.useState(false);

  const { addItem, setIsCartOpen } = useCart();

  // Calcul du prix :
  // Moyen: 10€, Grand: 13€. Saumon: +1€. Extra mix-ins au-delà de 5: +0.50€ chaque.
  // Toppings : 1 inclus dans la formule, illimité à +0.50€ par topping supplémentaire.
  const basePrice = size === "grand" ? 13.0 : 10.0;
  const proteinExtra = proteine.extra;
  const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
  const extraMixinsPrice = extraMixinsCount * 0.5;
  const extraToppingsCount = Math.max(0, selectedToppings.length - 1);
  const extraToppingsPrice = extraToppingsCount * 0.5;
  const totalPrice = basePrice + proteinExtra + extraMixinsPrice + extraToppingsPrice;

  const proteinImages: Record<string, string> = {
    poulet: bowlSweetChicken,
    saumon: bowlSaumon,
    scampis: bowlScampis,
    vege: bowlSweetChicken,
  };
  const activeBowlImage = proteinImages[proteine.id] || bowlSweetChicken;

  const toggleMixin = (id: string) => {
    if (selectedMixins.includes(id)) {
      if (selectedMixins.length > 1) {
        setSelectedMixins((prev) => prev.filter((m) => m !== id));
      }
    } else {
      setSelectedMixins((prev) => [...prev, id]);
    }
  };

  const toggleTopping = (id: string) => {
    if (selectedToppings.includes(id)) {
      if (selectedToppings.length > 1) {
        setSelectedToppings((prev) => prev.filter((t) => t !== id));
      }
    } else {
      setSelectedToppings((prev) => [...prev, id]);
    }
  };

  const handleAddToCart = () => {
    const mixinNames = selectedMixins.map(
      (id) => MIXINS.find((m) => m.id === id)?.name || id
    );
    const toppingNames = selectedToppings.map(
      (id) => TOPPINGS.find((t) => t.id === id)?.name || id
    );

    addItem({
      id: `custom-live-${Date.now()}`,
      name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
      basePrice: totalPrice,
      price: totalPrice,
      quantity: 1,
      toppings: [
        `Taille : ${size === "grand" ? "Grand (13€)" : "Moyen (10€)"}`,
        `Base : ${base.name}`,
        `Protéine : ${proteine.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
        `Mix-ins : ${mixinNames.join(", ")}${extraMixinsCount > 0 ? ` (+${extraMixinsPrice.toFixed(2)}€)` : ""}`,
        `Sauce : ${sauce.name}`,
        `Toppings : ${toppingNames.join(", ")}${extraToppingsCount > 0 ? ` (+${extraToppingsPrice.toFixed(2)}€)` : ""}`,
      ],
      removedIngredients: [],
      image: activeBowlImage,
    });

    setAdded(true);
    setIsCartOpen(true);

    // Retourne automatiquement à l'étape 1 du composeur pour en créer un autre facilement
    setTimeout(() => {
      setAdded(false);
      setActiveStep(1);
      setSize("moyen");
      setBase(BASES[0]);
      setProteine(PROTEINES[1]);
      setSelectedMixins(["avocat", "mangue", "edamame", "wakame", "feta"]);
      setSauce(SAUCES[0]);
      setSelectedToppings(["oignons-frits"]);
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* ── Cadre Général Clair & Lumineux (Harmonisé avec le fond du site) ── */}
      <div className="relative overflow-hidden rounded-[36px] bg-white border border-[#e8dfcf] shadow-lift p-6 sm:p-10 lg:p-12">
        {/* Décoration douce d'arrière-plan */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d7ff45]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl" />

        {/* ── Entête du Module Sur-Mesure ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#10251f] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#d7ff45] shadow-sm">
              <ChefHat className="h-3.5 w-3.5" />
              <span>Atelier Créatif · Bol en Bambou Naturel</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]">
              Composez votre bowl <span className="text-[#ff705f]">sur-mesure.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5a6760] font-medium leading-relaxed">
              Assemblez vos ingrédients favoris en 4 étapes simples. Fait minute sous vos yeux avec découpes fraîches du jour.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 px-5 text-right">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]">
                Prix calculé en direct
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#10251f]">
                {totalPrice.toFixed(2)} €
              </span>
            </div>
          </div>
        </div>

        {/* ── Étapes de création (Steppers cliquables) ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { step: 1, title: "1. Format & Base", detail: `${base.name} (${size})` },
            { step: 2, title: "2. Protéine", detail: proteine.name },
            { step: 3, title: "3. Mix-ins Frais", detail: `${selectedMixins.length} légumes / fruits` },
            { step: 4, title: "4. Sauce & Toppings", detail: `${sauce.name} · ${selectedToppings.length} topping(s)` },
          ].map((s) => {
            const isCurrent = activeStep === s.step;
            const isDone = activeStep > s.step;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`relative rounded-2xl p-3.5 text-left transition duration-200 border ${
                  isCurrent
                    ? "bg-[#10251f] text-white border-[#10251f] shadow-md scale-[1.02]"
                    : isDone
                    ? "bg-[#f7f4ec] text-[#10251f] border-[#e8dfcf] hover:border-black/20"
                    : "bg-white text-[#7d8b83] border-black/5 hover:border-black/15"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-black uppercase tracking-wider ${isCurrent ? "text-[#d7ff45]" : isDone ? "text-[#ff705f]" : "text-[#7d8b83]"}`}>
                    {s.title}
                  </span>
                  {isDone && <CheckCircle2 className="h-4 w-4 text-[#ff705f]" />}
                </div>
                <span className={`mt-1 block text-xs font-bold truncate ${isCurrent ? "text-white/80" : isDone ? "text-[#10251f]" : "text-[#7d8b83]/70"}`}>
                  {s.detail}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Contenu Interactif par Étape ── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          
          {/* COLONNE GAUCHE : SÉLECTION DES INGRÉDIENTS */}
          <div className="rounded-[30px] bg-[#faf8f4] border border-[#eee9de] p-6 sm:p-8">
            <div className="min-h-[340px]">
              
              {/* ÉTAPE 1 : FORMAT & BASE */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Choix de la taille */}
                  <div>
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-3">
                      <span>📏</span> Choisissez la taille de votre bol
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSize("moyen")}
                        className={`flex flex-col rounded-2xl p-4 border text-left transition ${
                          size === "moyen"
                            ? "bg-white border-[#10251f] shadow-md ring-2 ring-[#10251f]/10"
                            : "bg-white/60 border-black/10 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm text-[#10251f]">Format Moyen</span>
                          <span className="rounded-full bg-[#d7ff45] px-2.5 py-0.5 text-xs font-black text-[#10251f]">
                            10.00 €
                          </span>
                        </div>
                        <span className="text-[11px] text-[#7d8b83] font-medium mt-1">
                          Portion régulière généreuse · Idéal repas midi ou soir
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSize("grand")}
                        className={`flex flex-col rounded-2xl p-4 border text-left transition ${
                          size === "grand"
                            ? "bg-white border-[#10251f] shadow-md ring-2 ring-[#10251f]/10"
                            : "bg-white/60 border-black/10 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm text-[#10251f]">Grand Format</span>
                          <span className="rounded-full bg-[#10251f] px-2.5 py-0.5 text-xs font-black text-[#d7ff45]">
                            13.00 €
                          </span>
                        </div>
                        <span className="text-[11px] text-[#7d8b83] font-medium mt-1">
                          Maxi faim (+3 €) · Double base & portions renforcées
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Choix de la base */}
                  <div>
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-3">
                      <span>🍚</span> Choisissez votre base (incluse)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {BASES.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setBase(b)}
                          className={`flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${
                            base.id === b.id
                              ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                              : "bg-white/60 border-black/10 hover:bg-white"
                          }`}
                        >
                          <span className="text-2xl">{b.emoji}</span>
                          <div>
                            <span className="block text-xs font-black text-[#10251f]">{b.name}</span>
                            <span className="text-[10px] text-[#7d8b83] font-medium">{b.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 2 : PROTÉINE */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-2">
                    <span>🍗</span> Choisissez votre protéine principale
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROTEINES.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setProteine(p)}
                        className={`flex items-center gap-3 rounded-2xl p-4 border text-left transition ${
                          proteine.id === p.id
                            ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                            : "bg-white/60 border-black/10 hover:bg-white"
                        }`}
                      >
                        <span className="text-3xl">{p.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-xs text-[#10251f]">{p.name}</span>
                            {p.extra > 0 && (
                              <span className="text-[10px] font-black text-[#ff705f] bg-[#ff705f]/10 px-2 py-0.5 rounded-full">
                                +{p.extra.toFixed(2)} €
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-[#7d8b83] font-medium block mt-0.5">{p.tag}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 3 : MIX-INS (LÉGUMES & FRUITS) */}
              {activeStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2">
                      <span>🥑</span> Choisissez vos mix-ins frais (5 inclus)
                    </h3>
                    <span className="text-[11px] font-bold text-[#ff705f]">
                      {selectedMixins.length} sélectionné(s) {extraMixinsCount > 0 ? `(+${extraMixinsPrice.toFixed(2)} €)` : ""}
                    </span>
                  </div>
                  <p className="text-xs text-[#7d8b83]">
                    5 mix-ins sont inclus dans votre bol. Vous pouvez en ajouter autant que vous voulez (+0.50 € par mix-in supplémentaire).
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {MIXINS.map((m) => {
                      const isSelected = selectedMixins.includes(m.id);
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => toggleMixin(m.id)}
                          className={`flex items-center gap-2 rounded-2xl p-3 border text-left transition ${
                            isSelected
                              ? "bg-white border-[#10251f] shadow-sm ring-2 ring-[#10251f]/10 font-black text-[#10251f]"
                              : "bg-white/60 border-black/5 hover:bg-white text-[#5a6760] font-medium"
                          }`}
                        >
                          <span className="text-lg">{m.emoji}</span>
                          <span className="text-xs truncate">{m.name}</span>
                          {isSelected && <Check className="ml-auto h-3.5 w-3.5 text-[#059669]" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 4 : SAUCE & TOPPINGS ILLIMITÉS */}
              {activeStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-2">
                      <span>🍶</span> Choisissez votre sauce signature (incluse)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SAUCES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSauce(s)}
                          className={`flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${
                            sauce.id === s.id
                              ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                              : "bg-white/60 border-black/10 hover:bg-white"
                          }`}
                        >
                          <span className="text-2xl">{s.emoji}</span>
                          <div>
                            <span className="block text-xs font-black text-[#10251f]">{s.name}</span>
                            <span className="text-[10px] text-[#7d8b83] font-medium">{s.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-black text-[#10251f] flex items-center gap-2">
                        <span>🧅</span> Choisissez vos toppings croustillants (1 inclus · illimités)
                      </h3>
                      {selectedToppings.length > 0 && (
                        <span className="text-[11px] font-bold text-[#ff705f]">
                          {selectedToppings.length} sélectionné(s) {extraToppingsCount > 0 ? `(+${extraToppingsPrice.toFixed(2)} €)` : ""}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#7d8b83] mb-3">
                      Ajoutez autant de toppings croustillants que vous souhaitez (+0.50 € par topping supplémentaire).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {TOPPINGS.map((tp) => {
                        const isSelected = selectedToppings.includes(tp.id);
                        return (
                          <button
                            key={tp.id}
                            type="button"
                            onClick={() => toggleTopping(tp.id)}
                            className={`flex items-center gap-2.5 rounded-2xl p-3 border text-left transition ${
                              isSelected
                                ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                                : "bg-white/80 border-black/10 hover:bg-white"
                            }`}
                          >
                            <span className="text-xl">{tp.emoji}</span>
                            <div className="flex-1 min-w-0">
                              <span className="block text-xs font-black text-[#10251f] truncate">{tp.name}</span>
                              <span className="text-[9px] text-[#7d8b83] block truncate">{tp.desc}</span>
                            </div>
                            {isSelected && <Check className="h-4 w-4 text-[#ff705f] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Boutons de navigation étapes */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5">
              <button
                type="button"
                disabled={activeStep === 1}
                onClick={() => setActiveStep((curr) => Math.max(1, curr - 1))}
                className={`text-xs font-black px-4 py-2 rounded-full transition ${
                  activeStep === 1
                    ? "opacity-30 cursor-not-allowed text-[#7d8b83]"
                    : "text-[#10251f] hover:bg-black/5"
                }`}
              >
                ← Étape précédente
              </button>

              <button
                type="button"
                onClick={() => setActiveStep((curr) => (curr < 4 ? curr + 1 : 1))}
                className="text-xs font-black px-4 py-2 rounded-full bg-[#10251f] text-white hover:bg-[#ff705f] transition"
              >
                {activeStep < 4 ? `Étape suivante (${activeStep + 1}/4) →` : "Revenir au début"}
              </button>
            </div>
          </div>

          {/* COLONNE DROITE : TICKET DE CUISINE & VISUALISATION EN DIRECT */}
          <div className="rounded-[30px] bg-white border border-[#e8dfcf] p-6 sm:p-7 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥣</span>
                  <div>
                    <h4 className="text-base font-black text-[#10251f]">Votre Recette en Direct</h4>
                    <span className="text-[10px] font-bold text-[#059669]">
                      Bol en bambou naturel · Format {size === "grand" ? "Grand" : "Moyen"}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]">
                    Total Recette
                  </span>
                  <span className="text-2xl font-black text-[#10251f]">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
              </div>

              {/* Aperçu visuel gourmand et appétissant du bol en bambou */}
              <div className="relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f4] shadow-md group">
                <img
                  src={activeBowlImage}
                  alt="Bol composé Poke N Bowl"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge bol bambou */}
                <div className="absolute top-2.5 left-2.5 rounded-full bg-[#10251f]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] border border-white/20 shadow">
                  Bol Bambou Débordant 🌿
                </div>

                {/* Protéine & Format */}
                <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white">
                  <span className="text-xs font-black drop-shadow flex items-center gap-1.5">
                    <span>{proteine.emoji}</span>
                    <span>{proteine.name}</span>
                  </span>
                  <span className="rounded-md bg-[#2431eb] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow">
                    {size === "grand" ? "Grand (13 €)" : "Moyen (10 €)"}
                  </span>
                </div>
              </div>

              {/* Récapitulatif ingrédients choisis */}
              <div className="mt-5 space-y-3">
                <div className="flex items-start justify-between text-xs">
                  <span className="font-bold text-[#7d8b83]">Base choisie :</span>
                  <span className="font-black text-[#10251f] flex items-center gap-1.5">
                    <span>{base.emoji}</span> {base.name}
                  </span>
                </div>

                <div className="flex items-start justify-between text-xs">
                  <span className="font-bold text-[#7d8b83]">Protéine :</span>
                  <span className="font-black text-[#10251f] flex items-center gap-1.5">
                    <span>{proteine.emoji}</span> {proteine.name}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-black/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#7d8b83]">Mix-ins ({selectedMixins.length}) :</span>
                    {extraMixinsCount > 0 && (
                      <span className="text-[10px] font-black text-[#ff705f]">
                        +{extraMixinsPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedMixins.map((id) => {
                      const m = MIXINS.find((mix) => mix.id === id);
                      return (
                        <span
                          key={id}
                          className="rounded-lg bg-[#f7f4ec] border border-[#e8dfcf] px-2 py-0.5 text-[10px] font-bold text-[#10251f]"
                        >
                          {m?.emoji} {m?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-start justify-between text-xs pt-1">
                  <span className="font-bold text-[#7d8b83]">Sauce :</span>
                  <span className="font-black text-[#10251f] flex items-center gap-1.5">
                    <span>{sauce.emoji}</span> {sauce.name}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1 border-t border-black/5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#7d8b83]">Toppings ({selectedToppings.length}) :</span>
                    {extraToppingsCount > 0 && (
                      <span className="text-[10px] font-black text-[#ff705f]">
                        +{extraToppingsPrice.toFixed(2)} €
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedToppings.map((id) => {
                      const tp = TOPPINGS.find((t) => t.id === id);
                      return (
                        <span
                          key={id}
                          className="rounded-lg bg-[#f7f4ec] border border-[#e8dfcf] px-2 py-0.5 text-[10px] font-bold text-[#10251f]"
                        >
                          {tp?.emoji} {tp?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tag Authenticité */}
              <div className="mt-5 rounded-2xl bg-[#faf8f4] p-3 text-[11px] text-[#5a6760] flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#ff705f] shrink-0" />
                <span>Bol en bambou véritable, 100% recyclable & réutilisable.</span>
              </div>
            </div>

            {/* Bouton d'ajout au panier direct */}
            <div className="mt-6 pt-4 border-t border-black/5">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lift transition duration-200 ${
                  added ? "bg-[#10251f]" : ""
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4 text-[#d7ff45]" />
                    <span>Bowl ajouté ! Retour à l'étape 1...</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    <span>Ajouter mon bowl ({totalPrice.toFixed(2)} €)</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
