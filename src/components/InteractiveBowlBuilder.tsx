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
  Layers,
  ChefHat,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

const BASES = [
  { id: "riz-sushi", name: "Riz à sushi", emoji: "🍚", desc: "Vinaigré et fondant" },
  { id: "riz-brun", name: "Riz brun", emoji: "🌾", desc: "Complet & parfumé" },
  { id: "salade", name: "Salade fraîche", emoji: "🥗", desc: "Légère & croquante" },
  { id: "pates", name: "Pâtes", emoji: "🍝", desc: "Gourmandes" },
];

const PROTEINES = [
  { id: "poulet", name: "Poulet doré", emoji: "🍗", extra: 0, tag: "Cuisiné maison" },
  { id: "saumon", name: "Saumon sashimi", emoji: "🐟", extra: 1.0, tag: "+1,00 € · Extra frais" },
  { id: "scampis", name: "Scampis grillés", emoji: "🦐", extra: 0, tag: "Saisis minute" },
  { id: "vege", name: "Double Avocat & Feta", emoji: "🥑", extra: 0, tag: "100% Végé" },
];

const MIXINS = [
  { id: "avocat", name: "Avocat Hass", emoji: "🥑" },
  { id: "mangue", name: "Mangue mûre", emoji: "🥭" },
  { id: "edamame", name: "Edamame", emoji: "🫘" },
  { id: "feta", name: "Feta grecque", emoji: "🧀" },
  { id: "tomates", name: "Tomates cerises", emoji: "🍅" },
  { id: "mais", name: "Maïs doux", emoji: "🌽" },
  { id: "wakame", name: "Algues Wakame", emoji: "🌿" },
  { id: "concombre", name: "Concombre frais", emoji: "🥒" },
  { id: "jalapenos", name: "Jalapeños", emoji: "🌶️" },
  { id: "patates-douces", name: "Patates douces rôties", emoji: "🍠" },
];

const SAUCES = [
  { id: "teriyaki", name: "Teriyaki caramélisée", emoji: "🍯" },
  { id: "spicy-mayo", name: "Spicy Mayo piquante", emoji: "🌶️" },
  { id: "mayo-wasabi", name: "Mayo Wasabi veloutée", emoji: "🟢" },
  { id: "sesame", name: "Sésame toasté", emoji: "🌰" },
];

const TOPPINGS = [
  { id: "oignons-frits", name: "Oignons frits croustillants", emoji: "🧅" },
  { id: "sesame-mix", name: "Sésame noir & blanc", emoji: "🌱" },
  { id: "flocons-chili", name: "Flocons de chili", emoji: "🔥" },
];

export function InteractiveBowlBuilder() {
  const [size, setSize] = React.useState<"moyen" | "grand">("moyen");
  const [base, setBase] = React.useState(BASES[0]);
  const [proteine, setProteine] = React.useState(PROTEINES[1]); // Saumon by default
  const [selectedMixins, setSelectedMixins] = React.useState<string[]>([
    "avocat",
    "mangue",
    "edamame",
    "wakame",
    "tomates",
  ]);
  const [sauce, setSauce] = React.useState(SAUCES[0]);
  const [topping, setTopping] = React.useState(TOPPINGS[0]);
  const [added, setAdded] = React.useState(false);

  const { addItem } = useCart();

  // Price Calculation according to store rules
  // Moyen: 10€, Grand: 13€. Saumon: +1€. Extra mix-ins beyond 5: +0.50€ each.
  const basePrice = size === "grand" ? 13.0 : 10.0;
  const proteinExtra = proteine.extra;
  const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
  const extraMixinsPrice = extraMixinsCount * 0.5;
  const totalPrice = basePrice + proteinExtra + extraMixinsPrice;

  const toggleMixin = (id: string) => {
    if (selectedMixins.includes(id)) {
      if (selectedMixins.length > 1) {
        setSelectedMixins((prev) => prev.filter((m) => m !== id));
      }
    } else {
      setSelectedMixins((prev) => [...prev, id]);
    }
  };

  const resetSelection = () => {
    setSize("moyen");
    setBase(BASES[0]);
    setProteine(PROTEINES[0]);
    setSelectedMixins(["avocat", "mangue", "edamame", "tomates", "mais"]);
    setSauce(SAUCES[0]);
    setTopping(TOPPINGS[0]);
  };

  const handleAddToCart = () => {
    const mixinNames = selectedMixins.map(
      (id) => MIXINS.find((m) => m.id === id)?.name || id
    );

    const description = `Base: ${base.name} · Protéine: ${proteine.name} · Mix-ins: ${mixinNames.join(
      ", "
    )} · Sauce: ${sauce.name} · Topping: ${topping.name}`;

    addItem({
      id: `custom-live-${Date.now()}`,
      name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
      basePrice: totalPrice,
      price: totalPrice,
      quantity: 1,
      toppings: [
        `Base : ${base.name}`,
        `Protéine : ${proteine.name}`,
        ...mixinNames,
        `Sauce : ${sauce.name}`,
        `Topping : ${topping.name}`,
      ],
      removedIngredients: [],
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section id="composer" className="scroll-mt-12 bg-[#0c1f19] py-16 sm:py-24 text-white relative isolate overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#d7ff45]">
            <Sparkles className="h-4 w-4" />
            <span>Mini-Simulateur Ludique</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Compose ton bowl en live. <span className="text-[#d7ff45]">Fait minute pour toi.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/75">
            Choisis ta base, ta protéine fraîche et tes 5 mix-ins préférés. Visualise ta recette en temps réel et commande-la en un seul clic !
          </p>
        </div>

        {/* ── LIVE INTERACTIVE WORKSPACE ── */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
          
          {/* LEFT: STEP-BY-STEP INGREDIENT PICKER */}
          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl">
            
            {/* Step 1: Format */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]">1</span>
                  Format du Bowl
                </span>
                <span className="text-xs text-white/50">Moyen ou Grand (+3€)</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSize("moyen")}
                  className={`rounded-2xl p-3.5 text-left border transition-all ${
                    size === "moyen"
                      ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <div className="font-black text-sm">Moyen (10,00 €)</div>
                  <div className="text-[11px] text-white/60">Généreux & complet</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSize("grand")}
                  className={`rounded-2xl p-3.5 text-left border transition-all ${
                    size === "grand"
                      ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <div className="font-black text-sm text-[#d7ff45]">Grand (13,00 €) 🔥</div>
                  <div className="text-[11px] text-white/60">Portion XXL très gourmande</div>
                </button>
              </div>
            </div>

            {/* Step 2: Base */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]">2</span>
                  Ta Base Fondante
                </span>
                <span className="text-xs text-white/50">1 base incluse</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BASES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBase(b)}
                    className={`rounded-2xl p-3 text-center border transition-all ${
                      base.id === b.id
                        ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-xl block">{b.emoji}</span>
                    <span className="text-xs font-bold block mt-1">{b.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Protein */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]">3</span>
                  Ta Protéine Fraîche
                </span>
                <span className="text-xs text-white/50">Découpée du matin</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROTEINES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProteine(p)}
                    className={`rounded-2xl p-3 text-center border transition-all ${
                      proteine.id === p.id
                        ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-xl block">{p.emoji}</span>
                    <span className="text-xs font-bold block mt-1">{p.name}</span>
                    <span className="text-[10px] block opacity-80 mt-0.5">{p.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Mix-ins */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]">4</span>
                  Tes Mix-ins ({selectedMixins.length} sélectionnés)
                </span>
                <span className="text-xs text-white/60">
                  {selectedMixins.length <= 5
                    ? `${5 - selectedMixins.length} inclus restants`
                    : `+${(selectedMixins.length - 5) * 0.5}€ (${selectedMixins.length - 5} extras)`}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {MIXINS.map((m) => {
                  const isSelected = selectedMixins.includes(m.id);
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => toggleMixin(m.id)}
                      className={`rounded-xl p-2.5 text-center border transition-all text-xs font-bold flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? "border-[#d7ff45] bg-[#d7ff45]/20 text-white"
                          : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <span>{m.emoji}</span>
                      <span className="truncate">{m.name}</span>
                      {isSelected && <Check className="h-3 w-3 text-[#d7ff45] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Sauce & Topping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2">
                  5. Sauce Signature
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {SAUCES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSauce(s)}
                      className={`rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${
                        sauce.id === s.id
                          ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]"
                          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{s.emoji} {s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2">
                  6. Crunch Topping
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {TOPPINGS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopping(t)}
                      className={`rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${
                        topping.id === t.id
                          ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]"
                          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{t.emoji} {t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: LIVE VISUAL BOWL & ORDER CARD */}
          <div className="sticky top-24 rounded-[32px] border-2 border-white/20 bg-gradient-to-b from-[#102720] to-[#0a1b16] p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-[#d7ff45]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#d7ff45]">
                  Ta Création Minute
                </span>
              </div>
              <button
                type="button"
                onClick={resetSelection}
                className="flex items-center gap-1 text-[11px] font-bold text-white/50 hover:text-white transition"
              >
                <RotateCcw className="h-3 w-3" />
                Réinitialiser
              </button>
            </div>

            {/* Live Interactive Visual Bowl */}
            <div className="relative my-6 aspect-square max-w-[260px] mx-auto rounded-full border-4 border-white/15 bg-gradient-to-br from-[#1a382e] to-[#071713] p-4 shadow-[inset_0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,255,69,0.15),transparent_70%)]" />

              {/* Floating Emojis of Selected Ingredients */}
              <div className="relative z-10 text-center space-y-2">
                <div className="text-4xl animate-bounce duration-1000">
                  {proteine.emoji}
                </div>
                <div className="text-xs font-black tracking-tight text-white bg-black/50 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                  {base.name}
                </div>
                <div className="flex flex-wrap justify-center gap-1 max-w-[190px]">
                  {selectedMixins.slice(0, 5).map((id) => {
                    const m = MIXINS.find((item) => item.id === id);
                    return (
                      <span key={id} className="text-lg">
                        {m?.emoji}
                      </span>
                    );
                  })}
                  <span className="text-lg">{sauce.emoji}</span>
                  <span className="text-lg">{topping.emoji}</span>
                </div>
              </div>
            </div>

            {/* Live Summary */}
            <div className="space-y-2 text-xs text-white/80 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Format {size === "grand" ? "Grand" : "Moyen"}</span>
                <span className="font-bold">{basePrice.toFixed(2)} €</span>
              </div>
              {proteinExtra > 0 && (
                <div className="flex justify-between text-[#ff705f]">
                  <span>Supplément Saumon Sashimi</span>
                  <span className="font-bold">+{proteinExtra.toFixed(2)} €</span>
                </div>
              )}
              {extraMixinsPrice > 0 && (
                <div className="flex justify-between text-[#d7ff45]">
                  <span>Mix-ins extras ({extraMixinsCount})</span>
                  <span className="font-bold">+{extraMixinsPrice.toFixed(2)} €</span>
                </div>
              )}
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                <span>Total de ta commande</span>
                <span className="text-[#d7ff45] text-2xl font-black">{totalPrice.toFixed(2)} €</span>
              </div>
            </div>

            {/* Direct Order Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-[1.02] active:scale-98"
            >
              {added ? (
                <>
                  <Check className="h-5 w-5 text-emerald-600 stroke-[3]" />
                  <span>Bowl ajouté au panier !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  <span>Commander cette création · {totalPrice.toFixed(2)} €</span>
                </>
              )}
            </button>

            <Link
              to="/sur-mesure"
              className="mt-3 block text-center text-xs font-bold text-white/60 hover:text-white transition"
            >
              Ouvrir le configurateur avancé plein écran →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
