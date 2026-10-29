import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, RotateCcw, ShoppingBag, Sparkles, ChefHat } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import {
  detailedBases,
  detailedMixIns,
  detailedProteins,
  detailedSauces,
  toppings,
  type CustomIngredientOption,
} from "../lib/data";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { useTranslation } from "../context/I18nContext";

export const Route = createFileRoute("/sur-mesure")({
  component: SurMesurePage,
});

const BASE_PRICE = 10.00;
const INCLUDED_MIX_INS = 5;

function SurMesurePage() {
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  // Form State
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [selectedBase, setSelectedBase] = React.useState<CustomIngredientOption | null>(detailedBases[0] ?? null);
  const [mixinQuantities, setMixinQuantities] = React.useState<Record<string, number>>({
    Avocat: 1,
    Mangue: 1,
    Edamame: 1,
    "Salade d'algues": 1,
    Maïs: 1,
  });
  const [selectedProtein, setSelectedProtein] = React.useState<CustomIngredientOption | null>(detailedProteins[0] ?? null);
  const [extraProteins, setExtraProteins] = React.useState<Record<string, number>>({});
  const [sauceQuantities, setSauceQuantities] = React.useState<Record<string, number>>({});
  const [toppingQuantities, setToppingQuantities] = React.useState<Record<string, number>>({
    "Oignons frits": 1,
  });
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  const proteinImages: Record<string, string> = {
    poulet: bowlSweetChicken,
    saumon: bowlSaumon,
    scampis: bowlScampis,
  };
  const activeBowlImage = selectedProtein ? (proteinImages[selectedProtein.id] || bowlSaumon) : bowlSaumon;

  // Stepper Légumes / Mix-ins (5 portions hors feta incluses, puis +1,00 € par portion supplémentaire à volonté)
  const addMixIn = (name: string) => {
    setMixinQuantities((cur) => ({
      ...cur,
      [name]: (cur[name] ?? 0) + 1,
    }));
  };

  const removeMixIn = (name: string) => {
    setMixinQuantities((cur) => {
      const current = cur[name] ?? 0;
      if (current <= 1) {
        const copy = { ...cur };
        delete copy[name];
        return copy;
      }
      return { ...cur, [name]: current - 1 };
    });
  };

  // Stepper Protéines supplémentaires (+2,00 € par portion ajoutée, illimité)
  const addExtraProtein = (name: string) => {
    setExtraProteins((cur) => ({
      ...cur,
      [name]: (cur[name] ?? 0) + 1,
    }));
  };

  const removeExtraProtein = (name: string) => {
    setExtraProteins((cur) => {
      const current = cur[name] ?? 0;
      if (current <= 1) {
        const copy = { ...cur };
        delete copy[name];
        return copy;
      }
      return { ...cur, [name]: current - 1 };
    });
  };

  // Stepper Toppings (1 portion incluse, illimité à +0,50 € chaque portion supplémentaire)
  const addTopping = (name: string) => {
    setToppingQuantities((cur) => ({
      ...cur,
      [name]: (cur[name] ?? 0) + 1,
    }));
  };

  const removeTopping = (name: string) => {
    setToppingQuantities((cur) => {
      const current = cur[name] ?? 0;
      if (current <= 1) {
        const copy = { ...cur };
        delete copy[name];
        return copy;
      }
      return { ...cur, [name]: current - 1 };
    });
  };

  // Stepper Sauces (1ère sauce offerte au choix libre, chaque portion supplémentaire à +0,50 €)
  const addSauce = (name: string) => {
    // Si l'utilisateur n'a qu'1 sauce sélectionnée (sa sauce offerte) et clique sur une AUTRE sauce :
    // On remplace sa sauce offerte par la nouvelle choisie sans lui facturer de supplément !
    if (totalSauceUnits === 1 && !sauceQuantities[name]) {
      setSauceQuantities({ [name]: 1 });
      return;
    }
    setSauceQuantities((cur) => ({
      ...cur,
      [name]: (cur[name] ?? 0) + 1,
    }));
  };

  const removeSauce = (name: string) => {
    setSauceQuantities((cur) => {
      const current = cur[name] ?? 0;
      if (current <= 1) {
        const copy = { ...cur };
        delete copy[name];
        return copy;
      }
      return { ...cur, [name]: current - 1 };
    });
  };

  const setZeroSauce = () => {
    setSauceQuantities({});
  };

  // Calcul des prix :
  // - Moyen : 10,00 € | Grand : 13,00 € (+3,00 €)
  // - Protéine principale : Poulet mariné (0 €), Scampis (0 €), Saumon (+1,00 €)
  // - Suppléments Protéines : +2,50 € chaque portion ajoutée (1x = +2,50 €, 2x = +5,00 €, 3x = +7,50 €)
  // - Légumes / Mix-ins : 5 portions hors feta incluses, puis +1,00 € chaque portion supplémentaire (et Feta +1,00 € / portion)
  // - Sauces : 1 au choix gratuite incluse, puis +0,50 € chaque portion supplémentaire (ex: 2x = +0,50 €, 3x = +1,00 €)
  // - Toppings : 1 portion incluse, puis +0,50 € chaque portion supplémentaire
  const sizeExtra = selectedSize === "grand" ? 3.00 : 0;
  const mainProteinExtra = selectedProtein?.extraPrice ?? 0;
  const totalExtraProteinUnits = Object.values(extraProteins).reduce((sum, q) => sum + q, 0);
  const extraProteinsPrice = totalExtraProteinUnits * 2.50; // 2,50 € par portion supplémentaire

  const fetaUnits = mixinQuantities["Feta"] ?? 0;
  const nonFetaUnits = Object.entries(mixinQuantities).reduce(
    (sum, [name, q]) => (name.trim().toLowerCase() === "feta" ? sum : sum + q),
    0
  );
  const totalMixInUnits = nonFetaUnits + fetaUnits;
  const extraNonFetaUnits = Math.max(0, nonFetaUnits - INCLUDED_MIX_INS);
  const extraMixInsCount = extraNonFetaUnits + fetaUnits;
  const mixInsExtra = extraMixInsCount * 1.00;

  const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
  const extraToppingsCount = Math.max(0, totalToppingsCount - 1);
  const toppingsExtra = extraToppingsCount * 0.50;
  const totalSauceUnits = Object.values(sauceQuantities).reduce((sum, q) => sum + q, 0);
  const extraSauceCount = Math.max(0, totalSauceUnits - 1);
  const extraSaucePrice = extraSauceCount * 0.50;

  const unitPrice = BASE_PRICE + sizeExtra + mainProteinExtra + extraProteinsPrice + mixInsExtra + toppingsExtra + extraSaucePrice;
  const totalPrice = unitPrice * qty;

  const mixinsFormatted = Object.entries(mixinQuantities)
    .filter(([, q]) => q > 0)
    .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

  const toppingsFormatted = Object.entries(toppingQuantities)
    .filter(([, q]) => q > 0)
    .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

  const extraProteinsFormatted = Object.entries(extraProteins)
    .filter(([, q]) => q > 0)
    .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

  const saucesFormatted = Object.entries(sauceQuantities)
    .filter(([, q]) => q > 0)
    .map(([name, q]) => (q > 1 ? `${name} (x${q})` : name));

  // Validation
  const isBaseReady = selectedBase !== null;
  const isMixInsReady = totalMixInUnits >= 1;
  const isProteinReady = selectedProtein !== null;
  const isSauceReady = true; // Sauces are optional (can be "Sans sauce" or selected)
  const isValid = isBaseReady && isMixInsReady && isProteinReady;

  const getMissingReason = () => {
    if (!isBaseReady) return "Étape 1 : Choisis une base";
    if (!isProteinReady) return "Étape 2 : Choisis une protéine";
    if (!isMixInsReady) return "Étape 3 : Sélectionne au moins 1 légume ou mix-in";
    return null;
  };

  const handleAddToCart = () => {
    if (!isValid || !selectedBase || !selectedProtein) return;

    const extraProteinLines = Object.entries(extraProteins)
      .filter(([, q]) => q > 0)
      .map(
        ([name, q]) =>
          `Supplément Protéine (+2.50€) : ${name}${q > 1 ? ` (x${q})` : ""}`
      );

    const activeSauces = Object.entries(sauceQuantities).filter(([, q]) => q > 0);
    const mainSauceName = activeSauces[0]?.[0] || "Sans sauce";
    const extraSauceLines: string[] = [];
    if (activeSauces[0] && activeSauces[0][1] > 1) {
      const extraQ = activeSauces[0][1] - 1;
      extraSauceLines.push(`Sauce extra (+${(extraQ * 0.50).toFixed(2)}€) : ${activeSauces[0][0]}${extraQ > 1 ? ` (x${extraQ})` : ""}`);
    }
    for (let i = 1; i < activeSauces.length; i++) {
      const [name, q] = activeSauces[i];
      extraSauceLines.push(`Sauce extra (+${(q * 0.50).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`);
    }

    const options = [
      `Taille : ${selectedSize === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
      `Base : ${selectedBase.name}`,
      `Protéine : ${selectedProtein.name}${mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)}€)` : ""}`,
      ...extraProteinLines,
      `Mix-ins : ${mixinsFormatted.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)}€)` : ""}`,
      `Sauce : ${mainSauceName}`,
      ...extraSauceLines,
      ...(toppingsFormatted.length > 0
        ? [`Toppings : ${toppingsFormatted.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`]
        : ["Toppings : Aucun"]),
    ];

    addItem({
      id: "sur-mesure",
      name: `Poke Bowl sur mesure (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
      basePrice: BASE_PRICE,
      price: unitPrice,
      quantity: qty,
      toppings: options,
      removedIngredients: [],
      image: activeBowlImage,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#EFE6D8] text-[#2C1D16]">
      <CartDrawer />

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#D9C5AD] bg-[#EFE6D8]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="md" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-[#D9C5AD] bg-[#FAF5EE] p-1 sm:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${
                    language === lang ? "bg-[#2C1D16] text-[#EADCC9]" : "text-[#6E5A49] hover:text-[#2C1D16]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              to="/commander"
              className="hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] sm:flex"
            >
              La carte
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-[#2C1D16] p-3 text-[#EADCC9] transition hover:bg-[#ff705f] hover:text-white"
              aria-label={t("cart.title")}
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Main Content ───────────────────────────────────────── */}
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          to="/commander"
          className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[#6E5A49] transition hover:text-[#2C1D16]"
        >
          <ArrowLeft className="h-4 w-4" /> Retour aux bowls signatures
        </Link>

        {/* Hero Banner */}
        <div className="mb-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2C1D16] via-[#3A251B] to-[#2C1D16] p-6 text-white shadow-lift sm:p-10 border border-[#4D3428]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9]/15 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#EADCC9] border border-[#EADCC9]/25">
                <ChefHat className="h-3.5 w-3.5 text-[#ff705f]" /> Atelier Poké Sur-Mesure
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Ton poké, <span className="text-[#ff705f]">tes envies.</span>
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-[#EADCC9]/80 sm:text-base">
                Compose un bowl généreux, choisis tes ingrédients préférés et crée ton association idéale. 5 légumes frais inclus, protéines au choix (+2,50 € par portion supplémentaire) et sauces savoureuses (1ère offerte, +0,50 € par portion supplémentaire).
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-[#FAF5EE]/10 border border-[#EADCC9]/20 p-5 backdrop-blur-md sm:flex-col sm:items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#EADCC9]/70">Formule de base</p>
                <p className="text-3xl font-black text-[#ff705f] sm:text-4xl">10,00 €</p>
              </div>
              <span className="text-xs font-semibold text-[#EADCC9]/80">
                Base + 5 légumes + protéine + sauce + 1 topping
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* ── Left Column: Les Étapes ───────────────────────── */}
          <div className="space-y-7 lg:col-span-2">
            {/* ══ FORMAT & TAILLE ══════════════ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Format
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16]">Choisis ta Taille</h2>
                </div>
                <span className="text-xs font-black text-[#ff705f]">Moyen ou Grand</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSize("moyen")}
                  className={[
                    "flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer",
                    selectedSize === "moyen"
                      ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md"
                      : "border-[#DECBB3] bg-[#F3E9DA]/60 text-[#2C1D16] hover:border-[#2C1D16]/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-black text-sm uppercase">Moyen</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${selectedSize === "moyen" ? "bg-[#EADCC9] text-[#2C1D16]" : "bg-[#2C1D16] text-[#EADCC9]"}`}>
                      10,00 €
                    </span>
                  </div>
                  <span className={`mt-1 text-xs ${selectedSize === "moyen" ? "text-[#EADCC9]/80" : "text-[#6E5A49]"}`}>
                    Format régulier généreux
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSize("grand")}
                  className={[
                    "flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer",
                    selectedSize === "grand"
                      ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md"
                      : "border-[#DECBB3] bg-[#F3E9DA]/60 text-[#2C1D16] hover:border-[#2C1D16]/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-black text-sm uppercase">Grand</span>
                    <span className="rounded-full bg-[#ff705f] px-2.5 py-0.5 text-xs font-black text-white">
                      13,00 € (+3 €)
                    </span>
                  </div>
                  <span className={`mt-1 text-xs ${selectedSize === "grand" ? "text-[#EADCC9]/80" : "text-[#6E5A49]"}`}>
                    Grand format maxi faim
                  </span>
                </button>
              </div>
            </section>

            {/* ══ ÉTAPE 1 : BASE ════════════════════════════════ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Étape 1
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16]">Choisis ta Base</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">Incluse</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {detailedBases.map((base) => {
                  const isSelected = selectedBase?.id === base.id;
                  return (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base)}
                      className={[
                        "flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200 cursor-pointer",
                        isSelected
                          ? "border-[#ff705f] bg-[#FFF3EF] shadow-sm"
                          : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40",
                      ].join(" ")}
                    >
                      <span className="text-2xl">{base.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black text-[#2C1D16]">{base.name}</p>
                        <p className="text-[10px] font-bold text-[#6E5A49]">Inclus</p>
                      </div>
                      {isSelected && (
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ══ ÉTAPE 2 : PROTÉINE PRINCIPALE + EXTRAS ILLIMITÉS (+2,00 €) ═════════════ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Étape 2
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16]">Choisis ta Protéine</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">1 incluse · Extras à +2,50 €</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {detailedProteins.map((prot) => {
                  const isSelected = selectedProtein?.id === prot.id;
                  return (
                    <button
                      key={prot.id}
                      type="button"
                      onClick={() => setSelectedProtein(prot)}
                      className={[
                        "flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200 cursor-pointer",
                        isSelected
                          ? "border-[#ff705f] bg-[#FFF3EF] shadow-sm"
                          : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40",
                      ].join(" ")}
                    >
                      <span className="text-3xl mb-1">{prot.emoji}</span>
                      <p className="text-sm font-black text-[#2C1D16]">{prot.name}</p>
                      {prot.extraPrice ? (
                        <span className="mt-1 rounded-full bg-[#ff705f] px-2.5 py-0.5 text-[10px] font-black text-white">
                          +{prot.extraPrice.toFixed(2)} €
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

              {/* Suppléments Protéines (+2,50 € chaque portion ajoutée, illimité) */}
              <div className="mt-5 rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-sm font-black text-[#2C1D16]">
                      Protéines supplémentaires (+2,50 € / portion)
                    </h3>
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {detailedProteins.map((prot) => {
                    const q = extraProteins[prot.name] ?? 0;
                    return (
                      <div
                        key={`extra-${prot.id}`}
                        className={`flex items-center justify-between rounded-xl border-2 p-3 transition ${
                          q > 0
                            ? "border-[#ff705f] bg-white shadow-sm"
                            : "border-[#DECBB3] bg-[#FAF5EE]"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xl">{prot.emoji}</span>
                          <div className="min-w-0">
                            <span className="block text-xs font-black text-[#2C1D16] truncate">
                              {prot.name}
                            </span>
                            <span className="text-[10px] font-bold text-[#ff705f]">
                              {q > 0 ? `${q}× (+${(q * 2.5).toFixed(2)} €)` : "+2,50 € / portion"}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {q > 0 && (
                            <>
                              <button
                                type="button"
                                onClick={() => removeExtraProtein(prot.name)}
                                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                              >
                                <Minus className="h-3 w-3 stroke-[3]" />
                              </button>
                              <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                {q}
                              </span>
                            </>
                          )}
                          <button
                            type="button"
                            onClick={() => addExtraProtein(prot.name)}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                          >
                            <Plus className="h-3.5 w-3.5 stroke-[3]" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ══ ÉTAPE 3 : LÉGUMES & MIX-INS (5 INCLUS · +1,00 € PAR PORTION EXTRA À VOLONTÉ) ══════ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Étape 3
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16]">
                    Légumes & Mix-Ins Frais (5 inclus)
                  </h2>
                </div>
                <div className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9]">
                  {Math.min(INCLUDED_MIX_INS, nonFetaUnits)} / {INCLUDED_MIX_INS} inclus
                  {extraMixInsCount > 0 ? ` · +${extraMixInsCount} extra (+${mixInsExtra.toFixed(2)} €)` : ""}
                </div>
              </div>

              {/* Jauge ludique des 5 emplacements inclus */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#F3E9DA] border border-[#D9C5AD] p-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#2C1D16]">Tes 5 portions incluses :</span>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: INCLUDED_MIX_INS }).map((_, idx) => {
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
                <span className="text-[11px] font-bold text-[#6E5A49]">
                  Chaque portion supplémentaire = <strong className="text-[#ff705f]">+1,00 €</strong> (à volonté !)
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {detailedMixIns.map((mixIn) => {
                  const q = mixinQuantities[mixIn.name] ?? 0;
                  const isFeta = mixIn.id === "feta" || mixIn.name.trim().toLowerCase() === "feta";

                  return (
                    <div
                      key={mixIn.id}
                      className={[
                        "flex items-center justify-between gap-2 rounded-2xl border-2 p-2.5 transition-all duration-150",
                        q > 0
                          ? "border-[#ff705f] bg-white shadow-sm"
                          : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:bg-[#F3E9DA]",
                      ].join(" ")}
                    >
                      <button
                        type="button"
                        onClick={() => addMixIn(mixIn.name)}
                        className="flex items-center gap-2 min-w-0 flex-1 text-left cursor-pointer"
                      >
                        <span className="text-xl shrink-0">{mixIn.emoji}</span>
                        <div className="min-w-0 flex-1">
                          <span className="block truncate text-xs font-black text-[#2C1D16]">
                            {mixIn.name}
                          </span>
                          <span className="block text-[10px] font-bold text-[#6E5A49]">
                            {isFeta
                              ? "+1,00 € / portion"
                              : q > 0
                              ? `${q} portion${q > 1 ? "s" : ""}`
                              : nonFetaUnits < INCLUDED_MIX_INS
                              ? "Inclus (5 max)"
                              : "+1,00 €"}
                          </span>
                        </div>
                      </button>

                      <div className="flex items-center gap-1 shrink-0">
                        {q > 0 && (
                          <>
                            <button
                              type="button"
                              onClick={() => removeMixIn(mixIn.name)}
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                            >
                              <Minus className="h-3 w-3 stroke-[3]" />
                            </button>
                            <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                              {q}
                            </span>
                          </>
                        )}
                        <button
                          type="button"
                          onClick={() => addMixIn(mixIn.name)}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer"
                        >
                          <Plus className="h-3 w-3 stroke-[3]" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ══ ÉTAPE 4 : SAUCE UNIFIÉE (1ÈRE OFFERTE · +0,50 € PAR PORTION SUPPLÉMENTAIRE) ══ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Étape 4
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16] flex items-center gap-2">
                    <span>🥫</span>
                    <span>Choisis tes Sauces</span>
                  </h2>
                  <p className="mt-1 text-xs text-[#7A6857]">
                    1ère portion <strong>offerte (gratuite)</strong> · portions supplémentaires à <strong>+0,50 €</strong> chacune (cumulable sans limite).
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-xs font-black text-[#EADCC9] shadow-sm">
                    {totalSauceUnits === 0
                      ? "Sans sauce"
                      : totalSauceUnits === 1
                      ? "1 sauce offerte (0,00 €)"
                      : `${totalSauceUnits} sauces (1 offerte + ${extraSauceCount} extra · +${extraSaucePrice.toFixed(2)} €)`}
                  </span>
                  {totalSauceUnits > 0 && (
                    <button
                      type="button"
                      onClick={setZeroSauce}
                      className="rounded-full border border-[#DECBB3] bg-[#FAF5EE] px-3 py-1 text-[11px] font-bold text-[#7A6857] hover:bg-[#2C1D16] hover:text-white transition cursor-pointer shadow-2xs"
                    >
                      Sans sauce
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {detailedSauces.map((sauce) => {
                  const count = sauceQuantities[sauce.name] ?? 0;
                  const isSelected = count > 0;
                  return (
                    <div
                      key={sauce.id}
                      className={`group relative flex flex-col justify-between rounded-2xl border-2 p-3 transition-all duration-150 ${
                        isSelected
                          ? "border-[#ff705f] bg-[#FFF5F2] shadow-sm ring-1 ring-[#ff705f]/25"
                          : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#ff705f]/50 hover:bg-white"
                      }`}
                    >
                      {/* Haut : Icône sauce + Badge profil goût */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FAF5EE] border border-[#DECBB3] text-2xl shadow-2xs group-hover:scale-105 transition-transform">
                          {sauce.emoji}
                        </div>
                        {sauce.badge && (
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                            isSelected
                              ? "bg-[#ff705f]/15 text-[#c0350f] border-[#ff705f]/30"
                              : "bg-[#FAF5EE] text-[#7A6857] border-[#DECBB3]"
                          }`}>
                            {sauce.badge}
                          </span>
                        )}
                      </div>

                      {/* Milieu : Nom complet & description */}
                      <div
                        onClick={() => addSauce(sauce.name)}
                        className="flex-1 cursor-pointer mb-2.5"
                      >
                        <h3 className="text-sm font-black text-[#2C1D16] leading-tight">
                          {sauce.name}
                        </h3>
                        {sauce.description && (
                          <p className="mt-1 text-[11px] text-[#7A6857] leading-snug line-clamp-2">
                            {sauce.description}
                          </p>
                        )}
                      </div>

                      {/* Bas : Tarif & Stepper stable (hauteur constante) */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#DECBB3]/50 mt-auto">
                        <span className={`text-[11px] font-black ${
                          isSelected ? "text-[#ff705f]" : "text-[#7A6857]"
                        }`}>
                          {count === 0
                            ? totalSauceUnits <= 1
                              ? "1ère offerte"
                              : "+0,50 €"
                            : count === 1 && totalSauceUnits === 1
                            ? "Offerte (0 €)"
                            : `${count}x (+${(count * 0.50).toFixed(2)}€)`}
                        </span>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {count > 0 ? (
                            <div className="flex items-center gap-1 bg-white rounded-full border border-[#ff705f]/40 p-0.5 shadow-2xs">
                              <button
                                type="button"
                                onClick={() => removeSauce(sauce.name)}
                                aria-label={`Diminuer sauce ${sauce.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FAF5EE] text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-90 cursor-pointer"
                              >
                                <Minus className="h-3 w-3 stroke-[3]" />
                              </button>
                              <span className="w-5 text-center text-xs font-black text-[#2C1D16]">
                                {count}
                              </span>
                              <button
                                type="button"
                                onClick={() => addSauce(sauce.name)}
                                aria-label={`Ajouter sauce ${sauce.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff705f] text-white font-black hover:bg-[#ff5542] transition active:scale-90 shadow-2xs cursor-pointer"
                              >
                                <Plus className="h-3 w-3 stroke-[3]" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => addSauce(sauce.name)}
                              aria-label={`Choisir sauce ${sauce.name}`}
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
            </section>

            {/* ══ ÉTAPE 5 : TOPPINGS (1 INCLUS, ILLIMITÉS AU-DELÀ) ══ */}
            <section className="rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-[#2C1D16] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]">
                    Étape 5
                  </span>
                  <h2 className="mt-1.5 text-xl font-black text-[#2C1D16]">
                    Toppings croustillants
                  </h2>
                </div>
                <span className="rounded-full bg-[#2C1D16] px-3 py-1 text-xs font-black text-[#EADCC9]">
                  {totalToppingsCount <= 1
                    ? `${totalToppingsCount} / 1 inclus`
                    : `1 inclus + ${extraToppingsCount} extra (+${toppingsExtra.toFixed(2)} €)`}
                </span>
              </div>
              <p className="mb-4 text-xs font-semibold text-[#6E5A49]">
                <strong>1 portion incluse</strong> · Portions supplémentaires à +0,50 €
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {toppings.map((top) => {
                  const q = toppingQuantities[top.name] ?? 0;
                  const isSelected = q > 0;
                  return (
                    <div
                      key={top.id}
                      className={[
                        "flex flex-col justify-between rounded-2xl border-2 p-3 transition-all duration-200",
                        isSelected
                          ? "border-[#ff705f] bg-white shadow-sm"
                          : "border-[#DECBB3] bg-[#F3E9DA]/50 hover:border-[#2C1D16]/40",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{top.emoji}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-black text-[#2C1D16]">{top.name}</p>
                          <p className="text-[10px] font-black text-[#ff705f]">
                            {q === 0 ? "0,50 € / portion" : `${q} portion${q > 1 ? "s" : ""}`}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between border-t border-[#DECBB3] pt-2">
                        <span className="text-[10px] font-bold text-[#6E5A49]">
                          {q > 0 ? `x${q}` : "Extra +0,50 €"}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {q > 0 ? (
                            <>
                              <button
                                type="button"
                                onClick={() => removeTopping(top.name)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm cursor-pointer"
                                aria-label="Diminuer"
                              >
                                <Minus className="h-3 w-3 stroke-[3]" />
                              </button>
                              <span className="w-5 text-center text-xs font-black text-[#2C1D16]">
                                {q}
                              </span>
                              <button
                                type="button"
                                onClick={() => addTopping(top.name)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm cursor-pointer"
                                aria-label="Augmenter"
                              >
                                <Plus className="h-3 w-3 stroke-[3]" />
                              </button>
                            </>
                          ) : (
                            <button
                              type="button"
                              onClick={() => addTopping(top.name)}
                              className="flex items-center gap-1 rounded-full bg-[#2C1D16] px-2.5 py-1 text-[10px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                              <span>Ajouter</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ── Right Column: Récapitulatif Sticky ─────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-[28px] border-2 border-[#DECBB3] bg-[#FAF5EE] p-6 shadow-card">
              <div className="relative overflow-hidden rounded-2xl mb-5 shadow-sm aspect-[4/3] bg-[#2C1D16] group">
                <img
                  src={activeBowlImage}
                  alt="Poke Bowl sur mesure"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase text-[#EADCC9] border border-white/20 shadow">
                  Bowl sur-mesure 🌿
                </span>
                <span className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white text-xs font-black drop-shadow">
                  <span>{selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Protéine au choix"}</span>
                  <span className="rounded-lg bg-[#ff705f] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow">
                    {selectedSize === "grand" ? "Grand (13 €)" : "Moyen (10 €)"}
                  </span>
                </span>
              </div>

              <h3 className="text-xl font-black text-[#2C1D16]">Ton Poke Bowl sur mesure</h3>
              <p className="mt-1 text-xs text-[#6E5A49]">Récapitulatif de ta composition :</p>

              <div className="my-5 space-y-3 divide-y divide-[#DECBB3] text-xs">
                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Format :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {selectedSize === "grand" ? "Grand (+3,00 € · 13 €)" : "Moyen (10 €)"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Base :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {selectedBase ? `${selectedBase.emoji} ${selectedBase.name}` : "Non choisie"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Protéine :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {selectedProtein
                      ? `${selectedProtein.emoji} ${selectedProtein.name}${mainProteinExtra > 0 ? ` (+${mainProteinExtra.toFixed(2)} €)` : ""}`
                      : "Non choisie"}
                  </span>
                </div>

                {extraProteinsFormatted.length > 0 && (
                  <div className="pt-2 flex justify-between gap-2">
                    <span className="font-semibold text-[#6E5A49]">Extras Protéines :</span>
                    <span className="font-bold text-[#ff705f] text-right">
                      {extraProteinsFormatted.join(", ")} (+{extraProteinsPrice.toFixed(2)} €)
                    </span>
                  </div>
                )}

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Légumes & Mix-ins :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {mixinsFormatted.length > 0
                      ? `${mixinsFormatted.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)} €)` : ""}`
                      : "0 sélectionné"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Sauces :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {saucesFormatted.length > 0
                      ? `${saucesFormatted.join(", ")}${extraSaucePrice > 0 ? ` (+${extraSaucePrice.toFixed(2)} €)` : ""}`
                      : "Sans sauce"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#6E5A49]">Toppings :</span>
                  <span className="font-bold text-[#2C1D16] text-right">
                    {totalToppingsCount > 0
                      ? `${toppingsFormatted.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)} €)` : ""}`
                      : "Aucun topping"}
                  </span>
                </div>
              </div>

              {/* Quantité & Prix */}
              <div className="border-t border-[#DECBB3] pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#6E5A49]">Quantité</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DECBB3] bg-white text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] cursor-pointer"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-5 text-center font-black">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DECBB3] bg-white text-[#2C1D16] hover:border-[#ff705f] hover:text-[#ff705f] cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-[#6E5A49]">Total</span>
                  <span className="text-3xl font-black text-[#2C1D16]">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>

                {!isValid && (
                  <div className="mb-3 rounded-xl bg-[#FFF3EF] p-3 text-center text-xs font-bold text-[#ff705f]">
                    {getMissingReason()}
                  </div>
                )}

                <button
                  type="button"
                  disabled={!isValid}
                  onClick={handleAddToCart}
                  className={[
                    "btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center text-sm font-black transition-all cursor-pointer",
                    !isValid
                      ? "cursor-not-allowed bg-black/20 text-white/60 hover:bg-black/20"
                      : "active:scale-[0.98]",
                  ].join(" ")}
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" /> Ajouté au panier !
                    </>
                  ) : (
                    <>Ajouter au panier · {totalPrice.toFixed(2)} €</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
