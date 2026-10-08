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
  { id: "flocons-chili", name: "Flocons de chili crunchy", emoji: "🔥", desc: "Kick épicé vivifiant" },
];

export function InteractiveBowlBuilder() {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const [size, setSize] = React.useState<"moyen" | "grand">("moyen");
  const [base, setBase] = React.useState(BASES[0]);
  const [proteine, setProteine] = React.useState(PROTEINES[1]); // Saumon by default
  const [selectedMixins, setSelectedMixins] = React.useState<string[]>([
    "avocat",
    "mangue",
    "edamame",
    "wakame",
    "feta",
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

  const handleAddToCart = () => {
    const mixinNames = selectedMixins.map(
      (id) => MIXINS.find((m) => m.id === id)?.name || id
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
        `Protéine : ${proteine.name}`,
        `Mix-ins : ${mixinNames.join(", ")}`,
        `Sauce : ${sauce.name}`,
        `Topping : ${topping.name}`,
      ],
      removedIngredients: [],
      image: activeBowlImage,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
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
              Sélectionnez vos ingrédients étape par étape. Chaque bowl est préparé à la minute dans un bol en bois sculpté, avec vos 5 mix-ins frais inclus.
            </p>
          </div>

          {/* Lien Direct vers la Page Sur-Mesure Dédiée */}
          <div className="shrink-0">
            <Link
              to="/sur-mesure"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#faf8f4] border border-[#d8cfbe] px-5 py-3 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white hover:scale-105 active:scale-95"
            >
              <span>Accéder au grand configurateur 5 étapes</span>
              <ArrowRight className="h-4 w-4 text-[#ff705f]" />
            </Link>
          </div>
        </div>

        {/* ── Barre de progression d'étapes interactive ── */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { num: 1, title: "1. Format & Base", icon: "🍚" },
            { num: 2, title: "2. Protéine Fraîche", icon: "🐟" },
            { num: 3, title: `3. Mix-Ins (${selectedMixins.length}/5)`, icon: "🥑" },
            { num: 4, title: "4. Sauce & Croustillant", icon: "🍯" },
          ].map((st) => (
            <button
              key={st.num}
              type="button"
              onClick={() => setActiveStep(st.num)}
              className={`flex items-center gap-2.5 rounded-2xl p-3.5 text-left transition-all ${
                activeStep === st.num
                  ? "bg-[#10251f] text-white shadow-md scale-[1.02]"
                  : "bg-[#f7f4ec] text-[#10251f]/80 hover:bg-[#ede7da] border border-black/5"
              }`}
            >
              <span className="text-xl">{st.icon}</span>
              <div className="min-w-0">
                <span className="block text-xs font-black truncate">{st.title}</span>
                <span
                  className={`text-[10px] font-bold ${
                    activeStep === st.num ? "text-[#d7ff45]" : "text-[#7d8b83]"
                  }`}
                >
                  {activeStep === st.num ? "En cours d'édition" : "Cliquer pour modifier"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ── Corps Principal : Sélecteur Interactif (Gauche) & Live Preview (Droite) ── */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          
          {/* COLONNE GAUCHE : LE SÉLECTEUR ACTIF SELON L'ÉTAPE */}
          <div className="rounded-[30px] bg-[#faf8f4] border border-[#e8dfcf] p-6 sm:p-7 shadow-sm min-h-[440px] flex flex-col justify-between">
            <div>
              {/* ÉTAPE 1 : FORMAT & BASE */}
              {activeStep === 1 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black text-[#10251f] flex items-center gap-2">
                      <span>🍚</span> Étape 1 : Choisissez le format et la base
                    </h3>
                    <span className="text-xs font-bold text-[#7d8b83]">1 choix obligatoire</span>
                  </div>

                  {/* Format Moyen vs Grand */}
                  <div className="mb-5">
                    <label className="block text-xs font-black uppercase tracking-wider text-[#7d8b83] mb-2">
                      Taille du Bol en Bambou :
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSize("moyen")}
                        className={`flex items-center justify-between rounded-2xl p-4 border transition ${
                          size === "moyen"
                            ? "bg-[#10251f] text-white border-[#10251f] shadow-md"
                            : "bg-white text-[#10251f] border-black/10 hover:border-black/25"
                        }`}
                      >
                        <div className="text-left">
                          <span className="block text-sm font-black">Format Moyen</span>
                          <span className={`text-xs ${size === "moyen" ? "text-white/70" : "text-[#7d8b83]"}`}>
                            Généreux & complet
                          </span>
                        </div>
                        <span className="text-base font-black text-[#d7ff45]">10,00 €</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSize("grand")}
                        className={`flex items-center justify-between rounded-2xl p-4 border transition ${
                          size === "grand"
                            ? "bg-[#10251f] text-white border-[#10251f] shadow-md"
                            : "bg-white text-[#10251f] border-black/10 hover:border-black/25"
                        }`}
                      >
                        <div className="text-left">
                          <span className="block text-sm font-black">Grand Format</span>
                          <span className={`text-xs ${size === "grand" ? "text-white/70" : "text-[#7d8b83]"}`}>
                            Maxi faim gourmande
                          </span>
                        </div>
                        <span className="text-base font-black text-[#d7ff45]">13,00 €</span>
                      </button>
                    </div>
                  </div>

                  {/* Choix de la Base */}
                  <label className="block text-xs font-black uppercase tracking-wider text-[#7d8b83] mb-2">
                    Votre base au choix :
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {BASES.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBase(b)}
                        className={`flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${
                          base.id === b.id
                            ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                            : "bg-white/80 border-black/10 hover:bg-white"
                        }`}
                      >
                        <span className="text-2xl">{b.emoji}</span>
                        <div>
                          <span className="block text-xs sm:text-sm font-black text-[#10251f]">
                            {b.name}
                          </span>
                          <span className="text-[10px] text-[#7d8b83] font-medium">{b.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 2 : PROTÉINE */}
              {activeStep === 2 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black text-[#10251f] flex items-center gap-2">
                      <span>🐟</span> Étape 2 : Choisissez votre protéine principale
                    </h3>
                    <span className="text-xs font-bold text-[#7d8b83]">1 protéine incluse</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROTEINES.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setProteine(p)}
                        className={`flex items-center justify-between rounded-2xl p-4 border text-left transition ${
                          proteine.id === p.id
                            ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                            : "bg-white/80 border-black/10 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.emoji}</span>
                          <div>
                            <span className="block text-xs sm:text-sm font-black text-[#10251f]">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-[#7d8b83] font-bold">{p.tag}</span>
                          </div>
                        </div>
                        {proteine.id === p.id && (
                          <CheckCircle2 className="h-5 w-5 text-[#ff705f] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 3 : MIX-INS */}
              {activeStep === 3 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-lg font-black text-[#10251f] flex items-center gap-2">
                      <span>🥑</span> Étape 3 : Vos mix-ins frais (5 inclus)
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-black/10 text-xs font-black">
                      <span className={selectedMixins.length > 5 ? "text-[#ea580c]" : "text-[#059669]"}>
                        {selectedMixins.length} sélectionnés
                      </span>
                      {selectedMixins.length > 5 && (
                        <span className="text-[10px] text-[#ea580c]">
                          (+{(selectedMixins.length - 5) * 0.5} €)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {MIXINS.map((m) => {
                      const isSelected = selectedMixins.includes(m.id);
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => toggleMixin(m.id)}
                          className={`flex items-center gap-2 rounded-2xl p-2.5 border text-left transition ${
                            isSelected
                              ? "bg-[#10251f] text-white border-[#10251f] shadow-sm scale-[1.02]"
                              : "bg-white text-[#10251f] border-black/10 hover:border-black/25"
                          }`}
                        >
                          <span className="text-lg">{m.emoji}</span>
                          <span className="text-xs font-black truncate">{m.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 4 : SAUCE & TOPPING */}
              {activeStep === 4 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="mb-5">
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-2">
                      <span>🍯</span> Choisissez votre sauce onctueuse
                    </h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      {SAUCES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSauce(s)}
                          className={`flex items-center gap-2.5 rounded-2xl p-3 border text-left transition ${
                            sauce.id === s.id
                              ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                              : "bg-white/80 border-black/10 hover:bg-white"
                          }`}
                        >
                          <span className="text-xl">{s.emoji}</span>
                          <div>
                            <span className="block text-xs font-black text-[#10251f]">{s.name}</span>
                            <span className="text-[9px] text-[#7d8b83] font-medium">{s.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-[#10251f] flex items-center gap-2 mb-2">
                      <span>🧅</span> Choisissez votre topping croustillant
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {TOPPINGS.map((tp) => (
                        <button
                          key={tp.id}
                          type="button"
                          onClick={() => setTopping(tp)}
                          className={`flex items-center gap-2 rounded-2xl p-3 border text-left transition ${
                            topping.id === tp.id
                              ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                              : "bg-white/80 border-black/10 hover:bg-white"
                          }`}
                        >
                          <span className="text-xl">{tp.emoji}</span>
                          <span className="text-xs font-black text-[#10251f]">{tp.name}</span>
                        </button>
                      ))}
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

                <div className="text-xs">
                  <span className="font-bold text-[#7d8b83] block mb-1.5">Mix-ins frais ({selectedMixins.length}) :</span>
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

                <div className="flex items-start justify-between text-xs">
                  <span className="font-bold text-[#7d8b83]">Topping :</span>
                  <span className="font-black text-[#10251f] flex items-center gap-1.5">
                    <span>{topping.emoji}</span> {topping.name}
                  </span>
                </div>
              </div>

              {/* Tag Authenticité */}
              <div className="mt-5 rounded-2xl bg-[#f7f4ec] p-3 text-[11px] text-[#5a6760] flex items-center gap-2 border border-[#e8dfcf]">
                <span className="text-base">🌿</span>
                <span>Préparé minute sous vos yeux avec des ingrédients frais du jour à Visé.</span>
              </div>
            </div>

            {/* Bouton d'Ajout Panier */}
            <div className="mt-6 pt-4 border-t border-black/5">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 rounded-2xl py-4 text-xs font-black uppercase tracking-wider shadow-lg transition active:scale-98 ${
                  added
                    ? "bg-[#059669] text-white"
                    : "bg-[#d7ff45] text-[#10251f] hover:bg-[#10251f] hover:text-[#d7ff45]"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-5 w-5 stroke-[3]" />
                    <span>Bowl ajouté au panier !</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    <span>Ajouter mon bowl ({totalPrice.toFixed(2)} €)</span>
                  </>
                )}
              </button>

              <Link
                to="/sur-mesure"
                className="mt-2.5 block text-center text-[11px] font-black text-[#7d8b83] hover:text-[#10251f] underline"
              >
                Ouvrir la page configurateur 100% dédiée →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
