import * as React from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import { BrandLogo } from "@/components/BrandLogo";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import {
  detailedBases,
  detailedMixIns,
  detailedProteins,
  detailedSauces,
  toppings,
  type CustomIngredientOption,
  type Topping,
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
  const navigate = useNavigate();

  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  // Form State
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [selectedBase, setSelectedBase] = React.useState<CustomIngredientOption | null>(detailedBases[0]);
  const [selectedMixIns, setSelectedMixIns] = React.useState<string[]>([]);
  const [selectedProtein, setSelectedProtein] = React.useState<CustomIngredientOption | null>(detailedProteins[0]);
  const [selectedSauce, setSelectedSauce] = React.useState<CustomIngredientOption | null>(detailedSauces[0]);
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  // Toggle Mix-in (5 inclus, illimité à +0.50€ au-delà)
  const toggleMixIn = (name: string) => {
    setSelectedMixIns((cur) =>
      cur.includes(name) ? cur.filter((item) => item !== name) : [...cur, name]
    );
  };

  // Toggle Topping (2 inclus, illimité à +0.50€ au-delà)
  const toggleTopping = (name: string) => {
    setSelectedToppings((cur) =>
      cur.includes(name) ? cur.filter((t) => t !== name) : [...cur, name]
    );
  };

  // Pricing calculations (5 mix-ins inclus, 2 toppings inclus, Grand = 13€ soit +3€)
  const sizeExtra = selectedSize === "grand" ? 3.00 : 0;
  const proteinExtra = selectedProtein?.extraPrice ?? 0;
  const extraMixInsCount = Math.max(0, selectedMixIns.length - INCLUDED_MIX_INS);
  const mixInsExtra = extraMixInsCount * 0.50;
  const extraToppingsCount = Math.max(0, selectedToppings.length - 2);
  const toppingsExtra = extraToppingsCount * 0.50;
  const unitPrice = BASE_PRICE + sizeExtra + proteinExtra + mixInsExtra + toppingsExtra;
  const totalPrice = unitPrice * qty;

  // Validation
  const isBaseReady = selectedBase !== null;
  const isMixInsReady = selectedMixIns.length >= 1;
  const isProteinReady = selectedProtein !== null;
  const isSauceReady = selectedSauce !== null;
  const isValid = isBaseReady && isMixInsReady && isProteinReady && isSauceReady;

  const getMissingReason = () => {
    if (!isBaseReady) return "Étape 1 : Choisis une base";
    if (selectedMixIns.length === 0) return "Étape 2 : Choisis tes mix-ins (5 inclus dans le prix)";
    if (!isProteinReady) return "Étape 3 : Choisis une protéine";
    if (!isSauceReady) return "Étape 4 : Choisis une sauce";
    return null;
  };

  const handleAddToCart = () => {
    if (!isValid) return;

    const options = [
      `Taille : ${selectedSize === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
      `Base : ${selectedBase.name}`,
      `Mix-ins : ${selectedMixIns.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)}€)` : ""}`,
      `Protéine : ${selectedProtein.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
      `Sauce : ${selectedSauce.name}`,
      ...(selectedToppings.length > 0
        ? [`Toppings : ${selectedToppings.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`]
        : ["Toppings : Aucun"]),
    ];

    addItem({
      id: "sur-mesure",
      name: "Poke Bowl sur mesure",
      basePrice: BASE_PRICE,
      price: unitPrice,
      quantity: qty,
      toppings: options,
      removedIngredients: [],
      image: bowlSpicyChicken,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="md" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-black/10 bg-white p-1 sm:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${
                    language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e] hover:text-[#17231f]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              to="/commander"
              className="hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex"
            >
              La carte
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-[#10251f] p-3 text-white transition hover:bg-[#1e3d33]"
              aria-label={t("cart.title")}
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">
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
          className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] transition hover:text-[#17231f]"
        >
          <ArrowLeft className="h-4 w-4" /> Retour aux bowls signatures
        </Link>

        {/* Hero Banner */}
        <div className="mb-10 overflow-hidden rounded-[28px] bg-[#10251f] p-6 text-white shadow-lift sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#d7ff45]">
                <Sparkles className="h-3.5 w-3.5" /> Fiche officielle restaurant
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Poke (n) Bowl <span className="text-[#ff705f]">sur mesure</span>
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                Compose ton bol personnalisé en 5 étapes exactement comme sur le ticket du restaurant :
                1 base, 5 mix-ins frais, 1 protéine, 1 sauce onctueuse et tes toppings croustillants !
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.07] p-5 backdrop-blur-md sm:flex-col sm:items-start">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">Formule de base</p>
                <p className="text-3xl font-black text-[#d7ff45] sm:text-4xl">10.00 €</p>
              </div>
              <span className="text-xs font-semibold text-white/60">
                Base + 5 mix-ins + protéine + sauce
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* ── Left Column: Les 5 Étapes ───────────────────────── */}
          <div className="space-y-8 lg:col-span-2">
            {/* ══ FORMAT & TAILLE (Fiche officielle) ══════════════ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Format
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">Choisis ta Taille</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">Moyen ou Grand</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSize("moyen")}
                  className={[
                    "flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200",
                    selectedSize === "moyen"
                      ? "border-[#10251f] bg-[#10251f] text-white shadow-sm"
                      : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-black text-sm uppercase">Moyen</span>
                    <span className={`text-xs font-black ${selectedSize === "moyen" ? "text-[#d7ff45]" : "text-[#7a847e]"}`}>
                      Inclus (10.00€)
                    </span>
                  </div>
                  <span className={`mt-1 text-xs ${selectedSize === "moyen" ? "text-white/70" : "text-[#7a847e]"}`}>
                    Format régulier généreux
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSize("grand")}
                  className={[
                    "flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200",
                    selectedSize === "grand"
                      ? "border-[#10251f] bg-[#10251f] text-white shadow-sm"
                      : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40",
                  ].join(" ")}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-black text-sm uppercase">Grand</span>
                    <span className={`text-xs font-black ${selectedSize === "grand" ? "text-[#d7ff45]" : "text-[#ff705f]"}`}>
                      +3.00 € (13 €)
                    </span>
                  </div>
                  <span className={`mt-1 text-xs ${selectedSize === "grand" ? "text-white/70" : "text-[#7a847e]"}`}>
                    Grand format maxi faim
                  </span>
                </button>
              </div>
            </section>

            {/* ══ ÉTAPE 1 : BASE ════════════════════════════════ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Étape 1
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">Choisis ta Base</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">1 choix requis</span>
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
                        "flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200",
                        isSelected
                          ? "border-[#ff705f] bg-[#fff1ee] shadow-sm"
                          : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30",
                      ].join(" ")}
                    >
                      <span className="text-2xl">{base.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#17231f]">{base.name}</p>
                        <p className="text-[10px] font-semibold text-[#7a847e]">Inclus</p>
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

            {/* ══ ÉTAPE 2 : MIX IN (5 INCLUS · ILLIMITÉ À +0,50€ AU-DELÀ) ══════ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Étape 2
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">
                    Mix-Ins Frais
                  </h2>
                </div>
                <div
                  className={[
                    "rounded-full px-3 py-1 text-xs font-black transition-colors",
                    selectedMixIns.length >= INCLUDED_MIX_INS
                      ? "bg-[#10251f] text-[#d7ff45]"
                      : "bg-[#ff705f]/10 text-[#ff705f]",
                  ].join(" ")}
                >
                  {selectedMixIns.length <= INCLUDED_MIX_INS
                    ? `${selectedMixIns.length} / ${INCLUDED_MIX_INS} inclus`
                    : `${selectedMixIns.length} choisis (${INCLUDED_MIX_INS} inclus + ${extraMixInsCount} extra à +0,50€)`}
                </div>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7a847e]">
                <span>
                  {selectedMixIns.length < INCLUDED_MIX_INS
                    ? `5 ingrédients inclus dans la formule (encore ${INCLUDED_MIX_INS - selectedMixIns.length} gratuit${INCLUDED_MIX_INS - selectedMixIns.length > 1 ? "s" : ""}) :`
                    : `5 mix-ins inclus · Choisissez-en autant que vous voulez (+0,50 € par ingrédient supplémentaire) :`}
                </span>
                {extraMixInsCount > 0 && (
                  <span className="rounded-full bg-[#d7ff45]/30 px-2 py-0.5 text-[10px] font-extrabold text-[#10251f]">
                    +{mixInsExtra.toFixed(2)} € de suppléments mix-ins
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {detailedMixIns.map((mixIn) => {
                  const isSelected = selectedMixIns.includes(mixIn.name);
                  const isExtra = !isSelected && selectedMixIns.length >= INCLUDED_MIX_INS;

                  return (
                    <button
                      key={mixIn.id}
                      type="button"
                      onClick={() => toggleMixIn(mixIn.name)}
                      className={[
                        "flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-150",
                        isSelected
                          ? "border-[#ff705f] bg-[#fff1ee] shadow-sm scale-[1.01]"
                          : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30",
                      ].join(" ")}
                    >
                      <span className="text-xl">{mixIn.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <span className="block truncate text-xs font-bold text-[#17231f]">
                          {mixIn.name}
                        </span>
                        {isExtra && (
                          <span className="text-[10px] font-bold text-[#ff705f]">
                            +0,50 €
                          </span>
                        )}
                        {isSelected && selectedMixIns.indexOf(mixIn.name) >= INCLUDED_MIX_INS && (
                          <span className="text-[9px] font-bold text-[#ff705f]">
                            +0,50 €
                          </span>
                        )}
                      </div>
                      {isSelected && (
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ══ ÉTAPE 3 : PROTÉINE ═════════════════════════════ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Étape 3
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">Choisis ta Protéine</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">1 choix requis</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {detailedProteins.map((prot) => {
                  const isSelected = selectedProtein?.id === prot.id;
                  return (
                    <button
                      key={prot.id}
                      type="button"
                      onClick={() => setSelectedProtein(prot)}
                      className={[
                        "flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200",
                        isSelected
                          ? "border-[#ff705f] bg-[#fff1ee] shadow-sm"
                          : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30",
                      ].join(" ")}
                    >
                      <span className="text-3xl mb-1">{prot.emoji}</span>
                      <p className="text-sm font-bold text-[#17231f]">{prot.name}</p>
                      {prot.extraPrice ? (
                        <span className="mt-1 rounded-full bg-[#ff705f] px-2 py-0.5 text-[10px] font-black text-white">
                          +{prot.extraPrice.toFixed(2)} €
                        </span>
                      ) : (
                        <span className="mt-1 text-[10px] font-semibold text-[#7a847e]">Inclus</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ══ ÉTAPE 4 : SAUCE ════════════════════════════════ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Étape 4
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">Choisis ta Sauce</h2>
                </div>
                <span className="text-xs font-bold text-[#ff705f]">1 choix requis</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {detailedSauces.map((sauce) => {
                  const isSelected = selectedSauce?.id === sauce.id;
                  return (
                    <button
                      key={sauce.id}
                      type="button"
                      onClick={() => setSelectedSauce(sauce)}
                      className={[
                        "flex items-center gap-2 rounded-2xl border-2 p-3 text-left transition-all duration-200",
                        isSelected
                          ? "border-[#ff705f] bg-[#fff1ee] shadow-sm"
                          : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30",
                      ].join(" ")}
                    >
                      <span className="text-xl">{sauce.emoji}</span>
                      <span className="min-w-0 flex-1 truncate text-xs font-bold text-[#17231f]">
                        {sauce.name}
                      </span>
                      {isSelected && (
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ══ ÉTAPE 5 : TOPPING (2 INCLUS, ILLIMITÉS AU-DELÀ) ══ */}
            <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]">
                    Étape 5
                  </span>
                  <h2 className="mt-1 text-xl font-black text-[#17231f]">
                    Toppings croustillants
                  </h2>
                </div>
                <span className="rounded-full bg-[#10251f] px-3 py-1 text-xs font-black text-[#d7ff45]">
                  {selectedToppings.length <= 2
                    ? `${selectedToppings.length} / 2 inclus`
                    : `2 inclus + ${selectedToppings.length - 2} extra (+${((selectedToppings.length - 2) * 0.5).toFixed(2)}€)`}
                </span>
              </div>
              <p className="mb-4 text-xs font-semibold text-[#7a847e]">
                <strong>2 toppings inclus dans la formule</strong> · Toppings supplémentaires à volonté (+0.50€ chaque) :
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {toppings.map((top) => {
                  const isSelected = selectedToppings.includes(top.name);
                  const isExtra = isSelected && selectedToppings.indexOf(top.name) >= 2;
                  return (
                    <button
                      key={top.id}
                      type="button"
                      onClick={() => toggleTopping(top.name)}
                      className={[
                        "flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-200",
                        isSelected
                          ? "border-[#ff705f] bg-[#fff1ee] shadow-sm"
                          : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30",
                      ].join(" ")}
                    >
                      <span className="text-2xl">{top.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-[#17231f]">{top.name}</p>
                        <p className="text-[10px] font-black text-[#ff705f]">
                          {isSelected ? (isExtra ? "+0.50 € (extra)" : "Inclus") : "+0.50 € extra"}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* ── Right Column: Récapitulatif Sticky ─────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-[28px] border border-[#e8e2d9] bg-white p-6 shadow-card">
              <div className="overflow-hidden rounded-2xl mb-5 shadow-sm">
                <img
                  src={bowlSpicyChicken}
                  alt="Poke Bowl sur mesure"
                  className="h-44 w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-black text-[#17231f]">Ton Poke Bowl sur mesure</h3>
              <p className="mt-1 text-xs text-[#7a847e]">Récapitulatif de ta composition :</p>

              <div className="my-5 space-y-3 divide-y divide-[#f0ece1] text-xs">
                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Format :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedSize === "grand" ? "Grand (+3.00€ · 13€)" : "Moyen (10€)"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Base :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedBase ? `${selectedBase.emoji} ${selectedBase.name}` : "Non choisie"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Mix-ins :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedMixIns.length > 0
                      ? `${selectedMixIns.join(", ")} (${Math.min(INCLUDED_MIX_INS, selectedMixIns.length)} inclus${extraMixInsCount > 0 ? ` + ${extraMixInsCount} extra (+${mixInsExtra.toFixed(2)}€)` : ""})`
                      : "0 sélectionné"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Protéine :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedProtein
                      ? `${selectedProtein.emoji} ${selectedProtein.name}`
                      : "Non choisie"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Sauce :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedSauce
                      ? `${selectedSauce.emoji} ${selectedSauce.name}`
                      : "Non choisie"}
                  </span>
                </div>

                <div className="pt-2 flex justify-between gap-2">
                  <span className="font-semibold text-[#7a847e]">Toppings :</span>
                  <span className="font-bold text-[#17231f] text-right">
                    {selectedToppings.length > 0
                      ? `${selectedToppings.join(", ")} (${Math.min(2, selectedToppings.length)} inclus${extraToppingsCount > 0 ? ` + ${extraToppingsCount} extra` : ""})`
                      : "Aucun topping"}
                  </span>
                </div>
              </div>

              {/* Quantité & Prix */}
              <div className="border-t border-[#e8e2d9] pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7a847e]">Quantité</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-5 text-center font-black">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mb-5 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-[#7a847e]">Total</span>
                  <span className="text-3xl font-black text-[#17231f]">
                    {totalPrice.toFixed(2)} €
                  </span>
                </div>

                {/* Validation message if not ready */}
                {!isValid && (
                  <div className="mb-3 rounded-xl bg-[#fff1ee] p-3 text-center text-xs font-bold text-[#ff705f]">
                    {getMissingReason()}
                  </div>
                )}

                <button
                  type="button"
                  disabled={!isValid}
                  onClick={handleAddToCart}
                  className={[
                    "btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center text-sm font-black transition-all",
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
