import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Plus,
  Minus,
  Check,
  RotateCcw,
  ArrowRight,
  ChefHat,
  CheckCircle2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  detailedBases,
  detailedProteins,
  detailedMixIns,
  detailedSauces,
  toppings,
} from "@/lib/data";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";

const INCLUDED_MIXINS = 5;

export function InteractiveBowlBuilder() {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const [size, setSize] = React.useState<"moyen" | "grand">("moyen");
  const [base, setBase] = React.useState(() => detailedBases[0]!);
  const [proteine, setProteine] = React.useState(() => detailedProteins[0]!); // Poulet mariné par défaut
  const [extraProteins, setExtraProteins] = React.useState<Record<string, number>>({});
  const [mixinQuantities, setMixinQuantities] = React.useState<Record<string, number>>({
    Avocat: 1,
    Mangue: 1,
    Edamame: 1,
    "Salade d'algues": 1,
    Maïs: 1,
  });
  const [sauceQuantities, setSauceQuantities] = React.useState<Record<string, number>>({
    Teriyaki: 1,
  });
  const [toppingQuantities, setToppingQuantities] = React.useState<Record<string, number>>({
    "Oignons frits": 1,
  });
  const [added, setAdded] = React.useState(false);

  const { addItem, setIsCartOpen } = useCart();

  // Calcul des quantités et des prix :
  // - Moyen : 10,00 € | Grand : 13,00 € (+3,00 €)
  // - Protéine principale : Poulet mariné (0 €), Scampis (0 €), Saumon (+1,00 €)
  // - Protéines supplémentaires : +2,50 € par portion ajoutée (illimité, ex: 3x = 7,50 €)
  // - Légumes / Mix-ins : 5 portions incluses (hors feta à +1,00 €), puis +1,00 € par portion supplémentaire (illimité)
  // - Sauces : 1 au choix gratuite incluse, puis +0,50 € par pot supplémentaire (illimité, ex: 3x = 1,50 €)
  // - Toppings : 1 portion incluse, puis +0,50 € par portion supplémentaire (illimité)
  const basePrice = size === "grand" ? 13.0 : 10.0;
  const mainProteinExtra = proteine.extraPrice ?? 0;

  const totalExtraProteinUnits = Object.values(extraProteins).reduce((sum, q) => sum + q, 0);
  const extraProteinsPrice = totalExtraProteinUnits * 2.5;

  const fetaCount = mixinQuantities["Feta"] ?? 0;
  const nonFetaCount = Object.entries(mixinQuantities).reduce(
    (sum, [name, q]) => (name.trim().toLowerCase() === "feta" ? sum : sum + q),
    0
  );
  const totalMixinUnits = nonFetaCount + fetaCount;
  const extraNonFetaCount = Math.max(0, nonFetaCount - INCLUDED_MIXINS);
  const extraMixinsCount = extraNonFetaCount + fetaCount;
  const extraMixinsPrice = extraMixinsCount * 1.0;

  const totalToppingUnits = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
  const extraToppingsCount = Math.max(0, totalToppingUnits - 1);
  const extraToppingsPrice = extraToppingsCount * 0.5;
  const totalSauceUnits = Object.values(sauceQuantities).reduce((sum, q) => sum + q, 0);
  const extraSauceCount = Math.max(0, totalSauceUnits - 1);
  const extraSaucePrice = extraSauceCount * 0.5;

  const totalPrice =
    basePrice +
    mainProteinExtra +
    extraProteinsPrice +
    extraMixinsPrice +
    extraToppingsPrice +
    extraSaucePrice;

  const proteinImages: Record<string, string> = {
    poulet: bowlSweetChicken,
    saumon: bowlSaumon,
    scampis: bowlScampis,
  };
  const activeBowlImage = proteinImages[proteine.id] || bowlSweetChicken;

  // Gestion des protéines supplémentaires (+2,50 € / portion)
  const addExtraProtein = (name: string) => {
    setExtraProteins((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  };
  const removeExtraProtein = (name: string) => {
    setExtraProteins((prev) => {
      const cur = prev[name] ?? 0;
      if (cur <= 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: cur - 1 };
    });
  };

  // Gestion des légumes / mix-ins (5 inclus, puis +1,00 € / portion)
  const addMixin = (name: string) => {
    setMixinQuantities((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  };
  const removeMixin = (name: string) => {
    setMixinQuantities((prev) => {
      const cur = prev[name] ?? 0;
      if (cur <= 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: cur - 1 };
    });
  };

  // Gestion des toppings (1 inclus, puis +0,50 € / portion)
  const addTopping = (name: string) => {
    setToppingQuantities((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  };
  const removeTopping = (name: string) => {
    setToppingQuantities((prev) => {
      const cur = prev[name] ?? 0;
      if (cur <= 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: cur - 1 };
    });
  };

  // Gestion unifiée des sauces (1ère offerte · puis +0,50 € par portion supplémentaire)
  const addSauce = (name: string) => {
    setSauceQuantities((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  };
  const removeSauce = (name: string) => {
    setSauceQuantities((prev) => {
      const cur = prev[name] ?? 0;
      if (cur <= 1) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: cur - 1 };
    });
  };
  const setZeroSauce = () => {
    setSauceQuantities({});
  };

  const resetBuilder = () => {
    setActiveStep(1);
    setSize("moyen");
    setBase(detailedBases[0]!);
    setProteine(detailedProteins[0]!);
    setExtraProteins({});
    setMixinQuantities({
      Avocat: 1,
      Mangue: 1,
      Edamame: 1,
      "Salade d'algues": 1,
      Maïs: 1,
    });
    setSauceQuantities({ Teriyaki: 1 });
    setToppingQuantities({ "Oignons frits": 1 });
  };

  // Liste plate des emojis de mix-ins pour la jauge ludique des 5 emplacements inclus
  // Sauces sélectionnées pour affichage et calcul
  const selectedSaucesList = React.useMemo(() => {
    const list: string[] = [];
    Object.entries(sauceQuantities).forEach(([name, q]) => {
      for (let i = 0; i < q; i++) {
        list.push(name);
      }
    });
    return list;
  }, [sauceQuantities]);

  const primarySauceName = selectedSaucesList[0] ?? "Sans sauce";
  const primarySauceObj = detailedSauces.find((s) => s.name === primarySauceName);
  const primarySauceEmoji = primarySauceObj?.emoji || (primarySauceName === "Sans sauce" ? "🚫" : "🍯");

  const selectedMixinBadges = React.useMemo(() => {
    const list: { name: string; emoji: string; qty: number }[] = [];
    for (const [name, qty] of Object.entries(mixinQuantities)) {
      if (qty > 0) {
        const found = detailedMixIns.find((m) => m.name === name);
        list.push({ name, emoji: found?.emoji || "🥗", qty });
      }
    }
    return list;
  }, [mixinQuantities]);

  const handleAddToCart = () => {
    const mixinFormatted = Object.entries(mixinQuantities)
      .filter(([, q]) => q > 0)
      .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

    const toppingFormatted = Object.entries(toppingQuantities)
      .filter(([, q]) => q > 0)
      .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

    const extraProteinLines = Object.entries(extraProteins)
      .filter(([, q]) => q > 0)
      .map(
        ([name, q]) =>
          `Supplément Protéine (+2.50€) : ${name}${q > 1 ? ` (x${q})` : ""}`
      );

    const sauceNamesWithQty: string[] = [];
    Object.entries(sauceQuantities).forEach(([name, q]) => {
      for (let i = 0; i < q; i++) {
        sauceNamesWithQty.push(name);
      }
    });
    const firstSauce = sauceNamesWithQty[0] ?? "Sans sauce";
    const extraSauceLines = sauceNamesWithQty.slice(1).map(
      (name) => `Sauce extra (+0.50€) : ${name}`
    );

    addItem({
      id: "sur-mesure",
      name: `Poke Bowl sur mesure (${size === "grand" ? "Grand" : "Moyen"})`,
      basePrice,
      price: totalPrice,
      quantity: 1,
      toppings: [
        `Taille : ${size === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
        `Base : ${base.name}`,
        `Protéine : ${proteine.name}${mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)}€)` : ""}`,
        ...extraProteinLines,
        `Mix-ins : ${mixinFormatted.length > 0 ? mixinFormatted.join(", ") : "Aucun"}${extraMixinsCount > 0 ? ` (+${extraMixinsPrice.toFixed(2)}€)` : ""}`,
        `Sauce : ${firstSauce}`,
        ...extraSauceLines,
        `Toppings : ${toppingFormatted.length > 0 ? toppingFormatted.join(", ") : "Aucun"}${extraToppingsCount > 0 ? ` (+${extraToppingsPrice.toFixed(2)}€)` : ""}`,
      ],
      removedIngredients: [],
      image: activeBowlImage,
    });

    setAdded(true);
    setIsCartOpen(true);

    setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  return (
    <div className="mx-auto max-w-[1340px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* ── Cadre Atelier Chaleureux & Ludique (Sable Doré / Crème / Terre Cuite) ── */}
      <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-br from-[#F3E9DA] via-[#EFE3D1] to-[#E8D7C1] border-2 border-[#D9C5AD] shadow-lift p-5 sm:p-9 lg:p-11">
        {/* Lueurs décoratives chaudes */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#ff705f]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C87D4B]/15 blur-3xl" />

        {/* ── Entête de l'Atelier ── */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-7 border-b border-[#D5C0A7]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-4 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#EADCC9] shadow-md">
              <ChefHat className="h-3.5 w-3.5 text-[#ff705f]" />
              <span>Atelier Poké Ludique · 100% Sur-Mesure</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]">
              Ton poké, <span className="text-[#ff705f]">tes envies.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C4938] font-medium leading-relaxed">
              Compose un bowl généreux, choisis tes ingrédients préférés et crée ton association idéale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={resetBuilder}
              className="inline-flex items-center gap-1.5 rounded-2xl bg-[#FAF5EE] border border-[#D9C5AD] px-3.5 py-2.5 text-xs font-extrabold text-[#5C4938] hover:bg-[#2C1D16] hover:text-[#EADCC9] transition shadow-sm"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Réinitialiser</span>
            </button>
            <div className="rounded-2xl bg-[#2C1D16] border border-[#4A3328] p-3 px-5 text-right shadow-md">
              <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#EADCC9]/75">
                Prix en direct
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#ff705f]">
                {totalPrice.toFixed(2)} €
              </span>
            </div>
          </div>
        </div>

        {/* ── Barre d'étapes interactive & ludique (5 étapes logiques) ── */}
        <div className="relative z-10 mt-7 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
          {[
            {
              step: 1,
              icon: "🍚",
              title: "1. Format & Base",
              detail: `${base.name} · ${size === "grand" ? "Grand" : "Moyen"}`,
            },
            {
              step: 2,
              icon: "🍗",
              title: "2. Protéines",
              detail: `${proteine.name}${totalExtraProteinUnits > 0 ? ` +${totalExtraProteinUnits}` : ""}`,
            },
            {
              step: 3,
              icon: "🥑",
              title: "3. Légumes",
              detail: `${totalMixinUnits} portion${totalMixinUnits > 1 ? "s" : ""} (${Math.min(INCLUDED_MIXINS, nonFetaCount)}/5)`,
            },
            {
              step: 4,
              icon: "🍯",
              title: "4. Sauces",
              detail: `${primarySauceName}${extraSauceCount > 0 ? ` +${extraSauceCount}` : ""}`,
            },
            {
              step: 5,
              icon: "🧅",
              title: "5. Toppings",
              detail: `${totalToppingUnits} portion${totalToppingUnits > 1 ? "s" : ""}`,
            },
          ].map((s) => {
            const isCurrent = activeStep === s.step;
            const isDone = activeStep > s.step;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`group relative rounded-2xl p-3.5 text-left transition-all duration-200 border-2 cursor-pointer ${
                  isCurrent
                    ? "bg-[#2C1D16] text-white border-[#ff705f] shadow-lg scale-[1.02]"
                    : isDone
                    ? "bg-[#FAF5EE] text-[#2C1D16] border-[#C8B296] hover:border-[#2C1D16]"
                    : "bg-[#FAF5EE]/75 text-[#6E5A49] border-[#DECBB3] hover:bg-[#FAF5EE] hover:border-[#2C1D16]/40"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <span
                    className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider ${
                      isCurrent ? "text-[#EADCC9]" : isDone ? "text-[#ff705f]" : "text-[#6E5A49]"
                    }`}
                  >
                    <span className="text-base">{s.icon}</span>
                    <span>{s.title}</span>
                  </span>
                  {isDone && <CheckCircle2 className="h-4 w-4 text-[#ff705f] shrink-0" />}
                </div>
                <span
                  className={`mt-1 block text-xs font-extrabold truncate ${
                    isCurrent ? "text-white" : "text-[#2C1D16]"
                  }`}
                >
                  {s.detail}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Zone Principale : Composeur à gauche + Bol Vivant à droite ── */}
        <div className="relative z-10 mt-7 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
          {/* COLONNE GAUCHE : COMPOSANTS INTERACTIFS */}
          <div className="rounded-[30px] bg-[#FAF5EE] border-2 border-[#DECBB3] p-5 sm:p-7 shadow-card">
            <div className="min-h-[370px]">
              {/* ════════ ÉTAPE 1 : FORMAT & BASE ════════ */}
              {activeStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3">
                      <span>📏</span> 1. Choisissez la taille de votre bol
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSize("moyen")}
                        className={`flex flex-col rounded-2xl p-4 border-2 text-left transition cursor-pointer ${
                          size === "moyen"
                            ? "bg-[#2C1D16] text-white border-[#2C1D16] shadow-md"
                            : "bg-[#F3E9DA]/60 border-[#DECBB3] text-[#2C1D16] hover:border-[#2C1D16]/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm uppercase">Format Moyen</span>
                          <span
                            className={`rounded-full px-3 py-0.5 text-xs font-black ${
                              size === "moyen"
                                ? "bg-[#EADCC9] text-[#2C1D16]"
                                : "bg-[#2C1D16] text-[#EADCC9]"
                            }`}
                          >
                            10,00 €
                          </span>
                        </div>
                        <span
                          className={`text-xs font-medium mt-1.5 ${
                            size === "moyen" ? "text-[#EADCC9]/85" : "text-[#6E5A49]"
                          }`}
                        >
                          Portion régulière généreuse · 5 légumes inclus
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSize("grand")}
                        className={`flex flex-col rounded-2xl p-4 border-2 text-left transition cursor-pointer ${
                          size === "grand"
                            ? "bg-[#2C1D16] text-white border-[#2C1D16] shadow-md"
                            : "bg-[#F3E9DA]/60 border-[#DECBB3] text-[#2C1D16] hover:border-[#2C1D16]/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-black text-sm uppercase">Format Grand</span>
                          <span className="rounded-full bg-[#ff705f] px-3 py-0.5 text-xs font-black text-white">
                            13,00 € (+3 €)
                          </span>
                        </div>
                        <span
                          className={`text-xs font-medium mt-1.5 ${
                            size === "grand" ? "text-[#EADCC9]/85" : "text-[#6E5A49]"
                          }`}
                        >
                          Grand format maxi faim · Base & garnitures renforcées
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3">
                      <span>🍚</span> 2. Choisissez votre base (incluse)
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {detailedBases.map((b) => {
                        const isSelected = base.id === b.id;
                        return (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setBase(b)}
                            className={`flex items-center gap-3 rounded-2xl p-3.5 border-2 text-left transition cursor-pointer ${
                              isSelected
                                ? "bg-[#FFF3EF] border-[#ff705f] shadow-sm ring-2 ring-[#ff705f]/20"
                                : "bg-[#F3E9DA]/55 border-[#DECBB3] hover:bg-[#F3E9DA] hover:border-[#2C1D16]/40"
                            }`}
                          >
                            <span className="text-2xl">{b.emoji}</span>
                            <div className="min-w-0 flex-1">
                              <span className="block text-xs font-black text-[#2C1D16] truncate">
                                {b.name}
                              </span>
                              <span className="text-[10px] text-[#6E5A49] font-bold">
                                Inclus
                              </span>
                            </div>
                            {isSelected && (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff705f] text-white">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ════════ ÉTAPE 2 : PROTÉINE PRINCIPALE + EXTRAS ILLIMITÉS (+2 €) ════════ */}
              {activeStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2 mb-2">
                      <span>🍗</span> 1. Choisissez votre protéine principale
                    </h3>
                    <p className="text-xs text-[#6E5A49] font-medium mb-3">
                      1 portion de protéine incluse dans la formule (Saumon : +1,00 €).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {detailedProteins.map((p) => {
                        const isSelected = proteine.id === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setProteine(p)}
                            className={`flex flex-col items-center justify-center rounded-2xl p-4 border-2 text-center transition cursor-pointer ${
                              isSelected
                                ? "bg-[#FFF3EF] border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20"
                                : "bg-[#F3E9DA]/55 border-[#DECBB3] hover:bg-[#F3E9DA]"
                            }`}
                          >
                            <span className="text-3xl mb-1.5">{p.emoji}</span>
                            <span className="font-black text-sm text-[#2C1D16]">{p.name}</span>
                            {p.extraPrice && p.extraPrice > 0 ? (
                              <span className="mt-1 rounded-full bg-[#ff705f] px-2.5 py-0.5 text-[10px] font-black text-white">
                                +{p.extraPrice.toFixed(2)} €
                              </span>
                            ) : (
                              <span className="mt-1 rounded-full bg-[#EADCC9] px-2.5 py-0.5 text-[10px] font-black text-[#2C1D16]">
                                Inclus
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Suppléments de protéines illimités (+2,00 € chaque fois) */}
                  <div className="rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-sm font-black text-[#2C1D16] flex items-center gap-1.5">
                          <span>Protéines supplémentaires (+2,50 € / portion)</span>
                        </h4>
                        <p className="text-[11px] text-[#6E5A49] font-medium">
                          Poulet mariné, saumon frais ou scampis (+2,50 € / portion)
                        </p>
                      </div>
                      {totalExtraProteinUnits > 0 && (
                        <span className="rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm">
                          +{totalExtraProteinUnits} portion{totalExtraProteinUnits > 1 ? "s" : ""} (+{extraProteinsPrice.toFixed(2)} €)
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3">
                      {detailedProteins.map((p) => {
                        const qty = extraProteins[p.name] ?? 0;
                        return (
                          <div
                            key={`extra-${p.id}`}
                            className={`flex items-center justify-between rounded-xl border-2 p-3 transition ${
                              qty > 0
                                ? "bg-white border-[#ff705f] shadow-sm"
                                : "bg-[#FAF5EE] border-[#DECBB3]"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-xl">{p.emoji}</span>
                              <div className="min-w-0">
                                <span className="block text-xs font-black text-[#2C1D16] truncate">
                                  {p.name}
                                </span>
                                <span className="text-[10px] font-bold text-[#ff705f]">
                                  {qty > 0 ? `${qty}× (+${(qty * 2.5).toFixed(2)} €)` : "+2,50 € / portion"}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              {qty > 0 && (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => removeExtraProtein(p.name)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                                    aria-label={`Retirer une portion de ${p.name}`}
                                  >
                                    <Minus className="h-3 w-3 stroke-[3]" />
                                  </button>
                                  <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                    {qty}
                                  </span>
                                </>
                              )}
                              <button
                                type="button"
                                onClick={() => addExtraProtein(p.name)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer shadow-sm"
                                aria-label={`Ajouter une portion de ${p.name}`}
                              >
                                <Plus className="h-3.5 w-3.5 stroke-[3]" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ════════ ÉTAPE 3 : LÉGUMES & MIX-INS (5 INCLUS PUIS +1,00 € À VOLONTÉ) ════════ */}
              {activeStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2">
                        <span>🥑</span> Choisissez vos légumes & mix-ins frais (5 inclus)
                      </h3>
                      <p className="text-xs text-[#6E5A49] font-medium mt-0.5">
                        5 portions incluses dans votre bol · Chaque portion supplémentaire est à <strong>+1,00 €</strong> (à volonté, même plusieurs fois le même !).
                      </p>
                    </div>
                    <span className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]">
                      {Math.min(INCLUDED_MIXINS, nonFetaCount)}/5 inclus
                      {extraMixinsCount > 0 ? ` · +${extraMixinsCount} extra (+${extraMixinsPrice.toFixed(2)} €)` : ""}
                    </span>
                  </div>

                  {/* Jauge visuelle ludique des 5 emplacements inclus */}
                  <div className="flex items-center gap-2 rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#2C1D16] mr-1">
                      Vos 5 inclus :
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {Array.from({ length: INCLUDED_MIXINS }).map((_, idx) => {
                        const flatNonFeta: string[] = [];
                        for (const [name, q] of Object.entries(mixinQuantities)) {
                          if (name.trim().toLowerCase() !== "feta") {
                            const found = detailedMixIns.find((m) => m.name === name);
                            for (let i = 0; i < q; i++) {
                              flatNonFeta.push(found?.emoji || "🥗");
                            }
                          }
                        }
                        const emoji = flatNonFeta[idx];
                        return (
                          <div
                            key={idx}
                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-all ${
                              emoji
                                ? "bg-white border-[#ff705f] shadow-sm scale-105"
                                : "bg-[#FAF5EE]/60 border-dashed border-[#C8B296] text-[10px] font-bold text-[#8A7665]"
                            }`}
                          >
                            {emoji || idx + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grille des légumes avec compteur +/- */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                    {detailedMixIns.map((m) => {
                      const qty = mixinQuantities[m.name] ?? 0;
                      const isFeta = m.id === "feta" || m.name.trim().toLowerCase() === "feta";
                      return (
                        <div
                          key={m.id}
                          className={`flex items-center justify-between gap-2 rounded-2xl p-2.5 border-2 transition ${
                            qty > 0
                              ? "bg-white border-[#ff705f] shadow-sm"
                              : "bg-[#F3E9DA]/55 border-[#DECBB3] hover:bg-[#F3E9DA]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => addMixin(m.name)}
                            className="flex items-center gap-2 min-w-0 flex-1 text-left cursor-pointer"
                          >
                            <span className="text-xl shrink-0">{m.emoji}</span>
                            <div className="min-w-0">
                              <span className="block text-xs font-black text-[#2C1D16] truncate">
                                {m.name}
                              </span>
                              <span className="block text-[10px] font-bold text-[#6E5A49]">
                                {isFeta
                                  ? "+1,00 € / portion"
                                  : qty > 0
                                  ? `${qty} portion${qty > 1 ? "s" : ""}`
                                  : nonFetaCount < INCLUDED_MIXINS
                                  ? "Inclus (5 max)"
                                  : "+1,00 €"}
                              </span>
                            </div>
                          </button>

                          <div className="flex items-center gap-1 shrink-0">
                            {qty > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeMixin(m.name)}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                                  aria-label={`Retirer ${m.name}`}
                                >
                                  <Minus className="h-3 w-3 stroke-[3]" />
                                </button>
                                <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                  {qty}
                                </span>
                              </>
                            )}
                            <button
                              type="button"
                              onClick={() => addMixin(m.name)}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                              aria-label={`Ajouter ${m.name}`}
                            >
                              <Plus className="h-3 w-3 stroke-[3]" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ════════ ÉTAPE 4 : SAUCES (1ÈRE OFFERTE · EXTRA +0,50 €) ════════ */}
              {activeStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2">
                        <span>🍯</span> Choisissez votre sauce (1ère offerte)
                      </h3>
                      <p className="text-xs text-[#6E5A49] font-medium mt-0.5">
                        La 1ère portion de sauce est gratuite. Chaque portion de sauce supplémentaire est à <strong>+0,50 €</strong>.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={setZeroSauce}
                        className={`rounded-xl px-3 py-1.5 text-xs font-black transition cursor-pointer ${
                          totalSauceUnits === 0
                            ? "bg-[#2C1D16] text-[#EADCC9] shadow-sm"
                            : "bg-[#F3E9DA] text-[#6E5A49] hover:bg-[#2C1D16] hover:text-white"
                        }`}
                      >
                        🚫 Sans sauce
                      </button>
                      {totalSauceUnits > 0 && (
                        <span className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]">
                          {totalSauceUnits} portion{totalSauceUnits > 1 ? "s" : ""}
                          {extraSauceCount > 0 ? ` (+${extraSaucePrice.toFixed(2)} €)` : " (1ère offerte)"}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {detailedSauces.map((s) => {
                      const qty = sauceQuantities[s.name] ?? 0;
                      const isSelected = qty > 0;
                      return (
                        <div
                          key={s.id}
                          className={`group relative flex flex-col justify-between rounded-2xl border-2 p-3 transition-all duration-150 ${
                            isSelected
                              ? "bg-[#FFF5F2] border-[#ff705f] shadow-sm ring-1 ring-[#ff705f]/25"
                              : "bg-[#F3E9DA]/55 border-[#DECBB3] hover:border-[#ff705f]/50 hover:bg-white"
                          }`}
                        >
                          {/* Haut : Icône sauce + Badge profil goût */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EE] border border-[#DECBB3] text-2xl shadow-2xs group-hover:scale-105 transition-transform">
                              {s.emoji}
                            </div>
                            {s.badge && (
                              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                                isSelected
                                  ? "bg-[#ff705f]/15 text-[#c0350f] border-[#ff705f]/30"
                                  : "bg-[#FAF5EE] text-[#7A6857] border-[#DECBB3]"
                              }`}>
                                {s.badge}
                              </span>
                            )}
                          </div>

                          {/* Milieu : Nom complet & description */}
                          <div
                            onClick={() => addSauce(s.name)}
                            className="flex-1 cursor-pointer mb-2.5"
                          >
                            <h3 className="text-sm font-black text-[#2C1D16] leading-tight">
                              {s.name}
                            </h3>
                            {s.description && (
                              <p className="mt-1 text-[11px] text-[#7A6857] leading-snug line-clamp-2">
                                {s.description}
                              </p>
                            )}
                          </div>

                          {/* Bas : Tarif & Stepper stable */}
                          <div className="flex items-center justify-between pt-2 border-t border-[#DECBB3]/50 mt-auto">
                            <span className={`text-[11px] font-black ${
                              isSelected ? "text-[#ff705f]" : "text-[#7A6857]"
                            }`}>
                              {qty === 0
                                ? totalSauceUnits === 0
                                  ? "1ère offerte"
                                  : "+0,50 €"
                                : qty === 1 && totalSauceUnits === 1
                                ? "Offerte (0 €)"
                                : `${qty}x (+${(qty * 0.50).toFixed(2)}€)`}
                            </span>

                            <div className="flex items-center gap-1.5 shrink-0">
                              {qty > 0 ? (
                                <div className="flex items-center gap-1 bg-white rounded-full border border-[#ff705f]/40 p-0.5 shadow-2xs">
                                  <button
                                    type="button"
                                    onClick={() => removeSauce(s.name)}
                                    aria-label={`Diminuer sauce ${s.name}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF5EE] text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-90 cursor-pointer"
                                  >
                                    <Minus className="h-3 w-3 stroke-[3]" />
                                  </button>
                                  <span className="w-5 text-center text-xs font-black text-[#2C1D16]">
                                    {qty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => addSauce(s.name)}
                                    aria-label={`Ajouter sauce ${s.name}`}
                                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff705f] text-white font-black hover:bg-[#ff5542] transition active:scale-90 shadow-2xs cursor-pointer"
                                  >
                                    <Plus className="h-3 w-3 stroke-[3]" />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => addSauce(s.name)}
                                  aria-label={`Choisir sauce ${s.name}`}
                                  className="flex items-center gap-1 rounded-full bg-[#2C1D16] px-2.5 py-1 text-[11px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-2xs cursor-pointer"
                                >
                                  <Plus className="h-3 w-3 stroke-[3]" />
                                  <span>Choisir</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ════════ ÉTAPE 5 : TOPPINGS CROUSTILLANTS (1 INCLUS · EXTRA +0,50 €) ════════ */}
              {activeStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base font-black text-[#2C1D16] flex items-center gap-2">
                        <span>🧅</span> Choisissez vos toppings croustillants
                      </h3>
                      <p className="text-xs text-[#6E5A49] font-medium mt-0.5">
                        1 topping inclus · Chaque portion supplémentaire est à <strong>+0,50 €</strong> à volonté.
                      </p>
                    </div>
                    <span className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]">
                      {totalToppingUnits} portion{totalToppingUnits > 1 ? "s" : ""}
                      {extraToppingsCount > 0 ? ` (+${extraToppingsPrice.toFixed(2)} €)` : " (1 inclus)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {toppings.map((tp) => {
                      const qty = toppingQuantities[tp.name] ?? 0;
                      return (
                        <div
                          key={tp.id}
                          className={`flex items-center justify-between gap-2 rounded-2xl p-3 border-2 transition ${
                            qty > 0
                              ? "bg-white border-[#ff705f] shadow-sm ring-1 ring-[#ff705f]/20"
                              : "bg-[#F3E9DA]/55 border-[#DECBB3] hover:bg-[#F3E9DA]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-xl">{tp.emoji}</span>
                            <div className="min-w-0">
                              <span className="block text-xs font-black text-[#2C1D16] truncate">
                                {tp.name}
                              </span>
                              <span className="text-[10px] font-bold text-[#ff705f]">
                                {qty > 0 ? `x${qty}` : "+0,50 € / extra"}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {qty > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeTopping(tp.name)}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                                  aria-label={`Retirer ${tp.name}`}
                                >
                                  <Minus className="h-3 w-3 stroke-[3]" />
                                </button>
                                <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                  {qty}
                                </span>
                              </>
                            )}
                            <button
                              type="button"
                              onClick={() => addTopping(tp.name)}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                              aria-label={`Ajouter ${tp.name}`}
                            >
                              <Plus className="h-3 w-3 stroke-[3]" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation bas d'étape */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#DECBB3]">
              <button
                type="button"
                disabled={activeStep === 1}
                onClick={() => setActiveStep((curr) => Math.max(1, curr - 1))}
                className={`text-xs font-black px-4 py-2.5 rounded-full transition ${
                  activeStep === 1
                    ? "opacity-30 cursor-not-allowed text-[#8A7665]"
                    : "bg-[#F3E9DA] text-[#2C1D16] hover:bg-[#2C1D16] hover:text-white cursor-pointer"
                }`}
              >
                ← Étape précédente
              </button>

              <button
                type="button"
                onClick={() => setActiveStep((curr) => (curr < 5 ? curr + 1 : 1))}
                className="text-xs font-black px-5 py-2.5 rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer shadow-sm"
              >
                {activeStep < 5 ? `Étape suivante (${activeStep + 1}/5) →` : "Revenir à l'étape 1"}
              </button>
            </div>
          </div>

          {/* COLONNE DROITE : APERÇU LUDIQUE DU BOL & TICKET RÉCAPITULATIF */}
          <div className="rounded-[30px] bg-[#FAF5EE] border-2 border-[#DECBB3] p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DECBB3]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2C1D16] text-xl shadow-sm">
                    🥣
                  </span>
                  <div>
                    <h4 className="text-base font-black text-[#2C1D16]">Votre Bowl en Direct</h4>
                    <span className="text-[11px] font-bold text-[#ff705f]">
                      Format {size === "grand" ? "Grand (13 €)" : "Moyen (10 €)"}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#6E5A49]">
                    Total Recette
                  </span>
                  <span className="text-2xl font-black text-[#2C1D16]">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>
              </div>

              {/* Visuel interactif avec badges d'ingrédients flottants */}
              <div className="relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-[#DECBB3] bg-[#2C1D16] shadow-md group">
                <img
                  src={activeBowlImage}
                  alt="Aperçu de votre Poke Bowl sur mesure"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] border border-[#EADCC9]/30 shadow">
                  {base.emoji} Base {base.name}
                </div>

                <div className="absolute top-3 right-3 rounded-full bg-[#ff705f] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow">
                  {size === "grand" ? "Grand · 13 €" : "Moyen · 10 €"}
                </div>

                <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-between gap-2 text-white">
                  <span className="rounded-xl bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-black flex items-center gap-1.5 border border-white/15">
                    <span>{proteine.emoji}</span>
                    <span>{proteine.name}</span>
                    {totalExtraProteinUnits > 0 && (
                      <span className="text-[#ff705f]">+{totalExtraProteinUnits} extra</span>
                    )}
                  </span>
                  <span className="rounded-xl bg-[#EADCC9] px-2.5 py-1 text-[10px] font-black uppercase text-[#2C1D16] shadow">
                    {primarySauceEmoji} {primarySauceName}
                    {extraSauceCount > 0 && ` +${extraSauceCount}`}
                  </span>
                </div>
              </div>

              {/* Résumé détaillé */}
              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-[#F3E9DA] px-3 py-2">
                  <span className="font-bold text-[#6E5A49]">Base :</span>
                  <span className="font-black text-[#2C1D16]">
                    {base.emoji} {base.name}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#F3E9DA] px-3 py-2">
                  <span className="font-bold text-[#6E5A49]">Protéine :</span>
                  <span className="font-black text-[#2C1D16]">
                    {proteine.emoji} {proteine.name}
                    {mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)} €)` : ""}
                  </span>
                </div>

                {totalExtraProteinUnits > 0 && (
                  <div className="rounded-xl bg-[#FFF3EF] border border-[#ff705f]/40 px-3 py-2">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-[#2C1D16]">Suppléments Protéines :</span>
                      <span className="font-black text-[#ff705f]">
                        +{extraProteinsPrice.toFixed(2)} €
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {Object.entries(extraProteins).map(([name, q]) => (
                        <span
                          key={name}
                          className="rounded-lg bg-white px-2 py-0.5 text-[10px] font-black text-[#2C1D16] border border-[#ff705f]/30"
                        >
                          +{q}× {name} ({(q * 2.5).toFixed(2)} €)
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-xl bg-[#F3E9DA] px-3 py-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-[#6E5A49]">
                      Légumes & Mix-ins ({totalMixinUnits}) :
                    </span>
                    {extraMixinsCount > 0 ? (
                      <span className="text-[10px] font-black text-[#ff705f]">
                        +{extraMixinsPrice.toFixed(2)} €
                      </span>
                    ) : (
                      <span className="text-[10px] font-black text-[#2C1D16]">Inclus</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedMixinBadges.map((m) => (
                      <span
                        key={m.name}
                        className="rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]"
                      >
                        {m.emoji} {m.name}
                        {m.qty > 1 ? ` (x${m.qty})` : ""}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#F3E9DA] px-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#6E5A49]">Sauce :</span>
                    <span className="font-black text-[#2C1D16]">
                      {primarySauceEmoji} {primarySauceName} {totalSauceUnits > 0 ? "(Incluse)" : ""}
                    </span>
                  </div>
                  {extraSauceCount > 0 && (
                    <div className="mt-1.5 pt-1.5 border-t border-[#DECBB3] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {selectedSaucesList.slice(1).map((sName, idx) => (
                          <span
                            key={`${sName}-${idx}`}
                            className="rounded-lg bg-white border border-[#ff705f]/30 px-2 py-0.5 text-[10px] font-black text-[#2C1D16]"
                          >
                            +{sName}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-[#ff705f] shrink-0">
                        +{extraSaucePrice.toFixed(2)} €
                      </span>
                    </div>
                  )}
                </div>

                <div className="rounded-xl bg-[#F3E9DA] px-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#6E5A49]">
                      Toppings ({totalToppingUnits}) :
                    </span>
                    {extraToppingsCount > 0 ? (
                      <span className="text-[10px] font-black text-[#ff705f]">
                        +{extraToppingsPrice.toFixed(2)} €
                      </span>
                    ) : (
                      <span className="text-[10px] font-black text-[#2C1D16]">Inclus</span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {Object.entries(toppingQuantities).map(([name, q]) => (
                      <span
                        key={name}
                        className="rounded-lg bg-[#FAF5EE] border border-[#DECBB3] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]"
                      >
                        {name}
                        {q > 1 ? ` (x${q})` : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton Ajouter au Panier */}
            <div className="mt-6 pt-4 border-t border-[#DECBB3]">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lift transition duration-200 cursor-pointer ${
                  added ? "bg-[#2C1D16]" : ""
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4 text-[#22c55e]" />
                    <span>Bowl ajouté au panier !</span>
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
