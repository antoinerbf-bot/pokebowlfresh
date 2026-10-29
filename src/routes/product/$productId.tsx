import * as React from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import {
  bowls,
  toppings,
  bowlSizes,
  detailedBases,
  detailedProteins,
  detailedSauces,
  detailedMixIns,
  drinks,
  type Topping,
} from "../../lib/data";
import { DishImage } from "../../components/DishImage";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  Minus,
  Plus,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import { BrandLogo } from "@/components/BrandLogo";
import { useStock } from "../../hooks/useStock";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});

/* ─── Tag colors ─────────────────────────────────────────────────── */
const TAG_STYLES: Record<string, string> = {
  signature:  "bg-[#2C1D16] text-[#EADCC9]",
  bestseller: "bg-[#ff705f] text-white",
  premium:    "bg-[#7c4f1a] text-[#ffe9c2]",
  spicy:      "bg-[#c0350f] text-white",
  new:        "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
};

/* ─── Topping chip component with quantity stepper ───────────────── */
function ToppingChip({
  topping,
  qty,
  onAdd,
  onRemove,
}: {
  topping: Topping;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const isSelected = qty > 0;
  return (
    <div
      className={[
        "relative flex flex-col justify-between rounded-2xl border-2 p-3 text-center transition-all duration-200 select-none",
        isSelected
          ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm"
          : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#ff705f]/50 hover:bg-[#FAF5EE]",
      ].join(" ")}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl leading-none" role="img" aria-hidden="true">
          {topping.emoji}
        </span>
        <span className="text-xs font-bold leading-tight text-[#2C1D16]">
          {topping.name}
        </span>
        <span className="text-[10px] font-black text-[#ff705f]">
          {qty === 0 ? `+${topping.price.toFixed(2)} €` : `${qty} portion${qty > 1 ? "s" : ""} (+${(qty * topping.price).toFixed(2)}€)`}
        </span>
      </div>

      <div className="mt-2.5 flex items-center justify-center border-t border-[#E6D7C3] pt-2">
        {qty > 0 ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onRemove}
              aria-label={`Diminuer ${topping.name}`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm"
            >
              <Minus className="h-3 w-3 stroke-[3]" />
            </button>
            <span className="w-5 text-center text-xs font-black text-[#2C1D16]">
              {qty}
            </span>
            <button
              type="button"
              onClick={onAdd}
              aria-label={`Ajouter ${topping.name}`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm"
            >
              <Plus className="h-3 w-3 stroke-[3]" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className="flex items-center gap-1 rounded-full bg-[#2C1D16] px-3 py-1 text-[11px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm"
          >
            <Plus className="h-3 w-3" />
            <span>Ajouter</span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Removable Ingredient Button ────────────────────────────────── */
function RemovableIngredientButton({
  name,
  emoji,
  isRemoved,
  onToggle,
}: {
  name: string;
  emoji?: string;
  isRemoved: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isRemoved}
      aria-label={isRemoved ? `Remettre ${name}` : `Retirer ${name} (allergie)`}
      className={[
        "group inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-200",
        isRemoved
          ? "border-[#ff705f] bg-[#ff705f]/15 text-[#c0350f] line-through decoration-[#c0350f]"
          : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] hover:border-[#ff705f]/60 hover:bg-[#FFF4F1] shadow-sm",
      ].join(" ")}
    >
      {emoji && <span role="img" aria-hidden="true" className="text-sm">{emoji}</span>}
      <span>{name}</span>
      {isRemoved ? (
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#c0350f] text-[9px] font-black text-white not-italic no-underline">
          ✕
        </span>
      ) : (
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/5 text-[9px] font-bold text-[#7A6857] opacity-70 group-hover:bg-[#ff705f]/20 group-hover:text-[#ff705f]">
          ✕
        </span>
      )}
    </button>
  );
}

/* ─── Quantity selector ──────────────────────────────────────────── */
function QuantitySelector({
  qty,
  onMinus,
  onPlus,
}: {
  qty: number;
  onMinus: () => void;
  onPlus: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onMinus}
        aria-label="Diminuer la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center text-xl font-black tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={onPlus}
        aria-label="Augmenter la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ─── Main Product Page ──────────────────────────────────────────── */
function ProductPage() {
  const { productId } = Route.useParams();
  const product = bowls.find((b) => b.id === productId);
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();

  // States (appelés inconditionnellement avant tout return anticipé — règle des Hooks React)
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [selectedBase, setSelectedBase] = React.useState<string>(product?.defaultBase || "Riz");
  const [sauceQuantities, setSauceQuantities] = React.useState<Record<string, number>>(() => {
    const defaultS = product?.defaultSauce || "Spicy-Mayo";
    return defaultS ? { [defaultS]: 1 } : {};
  });
  const [removedIngredients, setRemovedIngredients] = React.useState<string[]>([]);

  // Suppléments demandés par le client (illimités avec steppers - / +)
  // Protéines supplémentaires : +2,50 € par portion ajoutée (même 3x la même = 3x 2,50€)
  const [extraProteins, setExtraProteins] = React.useState<Record<string, number>>({});
  // Légumes / Mix-ins supplémentaires : +1,00 € par portion ajoutée (même 3x le même = 3x 1€)
  const [mixinQuantities, setMixinQuantities] = React.useState<Record<string, number>>({});
  // Toppings croustillants : +0,50 € par portion ajoutée
  const [toppingQuantities, setToppingQuantities] = React.useState<Record<string, number>>({});
  const [selectedDrink, setSelectedDrink] = React.useState<string>(drinks[0]?.name || "Coca-Cola (33 cl)");
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  // Réinitialiser la personnalisation lors d'un changement de fiche produit (/product/A -> /product/B)
  React.useEffect(() => {
    setSelectedSize("moyen");
    setSelectedBase(product?.defaultBase || "Riz");
    const defaultS = product?.defaultSauce || "Spicy-Mayo";
    setSauceQuantities(defaultS ? { [defaultS]: 1 } : {});
    setRemovedIngredients([]);
    setExtraProteins({});
    setMixinQuantities({});
    setToppingQuantities({});
    setSelectedDrink(drinks[0]?.name || "Coca-Cola (33 cl)");
    setQty(1);
    setAdded(false);
  }, [productId, product?.defaultBase, product?.defaultSauce]);

  // Redirection si sur-mesure
  if (productId === "sur-mesure") {
    return <Navigate to="/sur-mesure" replace />;
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#EFE6D8] px-5">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-black">{t("product.not_found")}</h1>
          <Link to="/commander" className="text-[#ff705f] underline font-bold">
            {t("product.back")}
          </Link>
        </div>
      </div>
    );
  }

  const isCrousty = product.id.startsWith("crousty-");
  const productOk = available(product.id);

  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Calcul du prix cohérent partout :
  // Crousty chicken a UNE SEULE TAILLE (pas de grand format +3€).
  const sizeExtra = !isCrousty && selectedSize === "grand" ? 3.00 : 0;
  const totalExtraProteinUnits = Object.values(extraProteins).reduce((sum, q) => sum + q, 0);
  const extraProteinPrice = totalExtraProteinUnits * 2.50;
  const totalMixinUnits = Object.values(mixinQuantities).reduce((sum, q) => sum + q, 0);
  const mixinsExtraPrice = totalMixinUnits * 1.00;
  const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
  const toppingsExtraPrice = totalToppingsCount * 0.50;
  const totalSauceUnits = Object.values(sauceQuantities).reduce((sum, q) => sum + q, 0);
  const extraSauceCount = Math.max(0, totalSauceUnits - 1);
  const extraSaucePrice = extraSauceCount * 0.50;

  const unitPrice = product.price + sizeExtra + extraProteinPrice + mixinsExtraPrice + toppingsExtraPrice + extraSaucePrice;
  const totalPrice = unitPrice * qty;

  // Toggle ingrédient retirable (allergies / préférences)
  const toggleRemovedIngredient = (name: string) => {
    setRemovedIngredients((cur) =>
      cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]
    );
  };

  // Extra protein stepper (+2.50 € par portion)
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

  // Mix-in / légume stepper (+1.00 € par portion)
  const addMixin = (name: string) => {
    setMixinQuantities((cur) => ({
      ...cur,
      [name]: (cur[name] ?? 0) + 1,
    }));
  };

  const removeMixin = (name: string) => {
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

  // Topping stepper (illimité, chaque portion à +0.50€)
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

  // Sauce stepper (1ère sauce offerte, chaque portion supplémentaire à +0.50€)
  const addSauce = (name: string) => {
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

  // Ajout au panier
  const handleAddToCart = () => {
    if (!productOk) return;

    const optionsList: string[] = [];

    // Format / Taille
    if (isCrousty) {
      optionsList.push("Format : Barquette rectangulaire standard · Formule Étudiant 11€ (Midi uniquement)");
      optionsList.push(`Boisson 33cl incluse (Formule Midi) : ${selectedDrink}`);
    } else {
      if (selectedSize === "grand") {
        optionsList.push("Taille : Grand (+3.00€)");
      } else {
        optionsList.push("Taille : Moyen (Standard)");
      }
    }

    // Suppléments Protéine (+2.50€ chaque portion)
    Object.entries(extraProteins).forEach(([name, q]) => {
      if (q > 0) {
        optionsList.push(
          `Supplément Protéine (+${(q * 2.5).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`,
        );
      }
    });

    // Base
    optionsList.push(`Base : ${selectedBase}`);

    // Sauces (1ère gratuite incluse, chaque sauce supplémentaire à +0,50 €)
    const activeSauces = Object.entries(sauceQuantities).filter(([, q]) => q > 0);
    if (activeSauces.length === 0) {
      optionsList.push("Sauce : Sans sauce");
    } else {
      const [firstSauceName, firstQty] = activeSauces[0];
      optionsList.push(`Sauce : ${firstSauceName}`);

      if (firstQty > 1) {
        optionsList.push(
          `Sauce extra (+${((firstQty - 1) * 0.50).toFixed(2)}€) : ${firstSauceName}${firstQty > 2 ? ` (x${firstQty - 1})` : ""}`,
        );
      }
      for (let i = 1; i < activeSauces.length; i++) {
        const [name, q] = activeSauces[i];
        optionsList.push(
          `Sauce extra (+${(q * 0.50).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`,
        );
      }
    }

    // Suppléments Légumes & Mix-ins sélectionnés (+1.00€ chaque portion)
    Object.entries(mixinQuantities).forEach(([name, q]) => {
      if (q > 0) {
        optionsList.push(
          `Légume / Mix-in (+${(q * 1).toFixed(2)}€) : ${name}${q > 1 ? ` (x${q})` : ""}`,
        );
      }
    });

    // Toppings payants sélectionnés (+0.50€ chaque portion)
    Object.entries(toppingQuantities).forEach(([t, q]) => {
      if (q > 0) {
        optionsList.push(`Topping (+0.50€) : ${t}${q > 1 ? ` (x${q})` : ""}`);
      }
    });

    addItem({
      id: isCrousty ? `${product.id}` : `${product.id}-${selectedSize}`,
      name: isCrousty ? product.name : `${product.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
      basePrice: product.price,
      price: unitPrice,
      quantity: qty,
      toppings: optionsList,
      removedIngredients,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    setIsCartOpen(true);
  };

  const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";
  const croustyExtraChickenCount = extraProteins["Poulet croustillant"] ?? 0;

  return (
    <div className="flex min-h-screen flex-col bg-[#EFE6D8] text-[#2C1D16]">
      <CartDrawer />

      {/* ── Sticky Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[#DECBB3] bg-[#EFE6D8]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link
            to="/"
            className="group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="md" />
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden rounded-full border border-[#DECBB3] bg-[#FAF5EE] p-1 sm:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${
                    language === lang ? "bg-[#2C1D16] text-[#EADCC9]" : "text-[#7A6857] hover:text-[#2C1D16]"
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
              La Carte
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-[#2C1D16] p-2.5 text-[#EADCC9] transition hover:bg-[#3d2920]"
              aria-label={t("cart.title")}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Main Content ───────────────────────────────────────────── */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 pb-36 sm:px-6 sm:py-8 sm:pb-12 lg:px-8">
        <Link
          to="/commander"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#7A6857] transition hover:text-[#2C1D16]"
        >
          <ArrowLeft className="h-4 w-4" /> {t("product.back")}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12">
          {/* ── Left Column: Dish Image & Key Info ─────────────────── */}
          <div className="space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-[32px] border-2 border-[#DECBB3] shadow-lift sm:rounded-[36px] bg-[#2C1D16]">
              <DishImage
                dishId={product.id}
                alt={product.name}
                priority
                className={`h-full w-full object-cover transition duration-700 ${!productOk ? "grayscale" : ""}`}
              />
              <span className={`badge-tag absolute left-4 top-4 shadow-card ${tagStyle}`}>
                {productOk ? product.tag : t("cmd.sold_out")}
              </span>
              <span className="absolute bottom-4 right-4 rounded-full bg-[#FAF5EE]/95 backdrop-blur-sm border border-[#DECBB3] px-4 py-2 text-base font-black text-[#2C1D16] shadow-card">
                € {unitPrice.toFixed(2)}
              </span>
            </div>

            {/* Fiche info / Engagement fraîcheur */}
            <div className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2C1D16]">
                <ShieldCheck className="h-4 w-4 text-[#ff705f]" />
                <span>Préparé minute sur commande à Visé</span>
              </div>
              <p className="text-xs text-[#6E5A49] leading-relaxed">
                {isCrousty
                  ? "Servi dans une barquette rectangulaire avec du riz chaud, des morceaux de poulet croustillant dorés minute, notre sauce signature et des oignons frits. La Formule Étudiant à 11,00 € avec canette 33 cl incluse est valable uniquement le midi."
                  : "Chaque bowl est assemblé à la commande à Visé avec du poisson frais, du poulet mariné et des légumes du jour. Vous pouvez retirer n'importe quel ingrédient ou ajouter autant de protéines (+2,50 €) et de légumes (+1 €) que vous le souhaitez."}
              </p>
            </div>
          </div>

          {/* ── Right Column: Interactive Customization ────────────── */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                  {isCrousty ? "Barquette Chaude · Crousty Chicken" : "Poké Bowl Signature"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#b9d7c3] bg-[#123D2A] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                  ☾ 100% HALAL
                </span>
              </div>
              <h1 className="mt-1 text-3xl font-black leading-tight sm:text-4xl text-[#2C1D16]">
                {product.name}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-[#6E5A49]">
                {product.desc}
              </p>
            </div>

            {product.menuNote && (
              <div className="rounded-2xl border-2 border-[#ea580c]/30 bg-[#FFF3E4] p-4 shadow-sm">
                <p className="text-xs font-black text-[#9A3412] flex items-center gap-2">
                  <Sun className="h-4 w-4 shrink-0 text-[#ea580c]" />
                  {product.menuNote}
                </p>
              </div>
            )}

            {!productOk ? (
              <div className="rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 p-4 text-sm font-bold text-[#ff705f]">
                {t("product.unavailable")}
              </div>
            ) : (
              <>
                {/* ══ STEP 1: FORMAT & TAILLE OU BANNIÈRE CROUSTY FORMULE MIDI ══════ */}
                {isCrousty ? (
                  <section className="rounded-[24px] border-2 border-[#F59E0B]/40 bg-[#FFF6E8] p-5 shadow-card">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#2C1D16] text-[#EADCC9] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider">
                            🥡 Barquette Rectangulaire
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#ea580c] text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider">
                            ☀️ Formule Étudiant 11 € · Uniquement le midi
                          </span>
                        </div>
                        <h2 className="text-sm font-black text-[#2C1D16]">
                          Portion Généreuse Chaude · Morceaux de poulet croustillant + Riz
                        </h2>
                        <p className="text-[11px] font-semibold text-[#7A542E] mt-1">
                          🎓 <strong>Formule Étudiant à 11,00 € avec canette 33 cl incluse :</strong> valable <strong>uniquement le midi</strong>.
                        </p>
                      </div>
                      <span className="text-2xl font-black text-[#ea580c] shrink-0">11.00 €</span>
                    </div>

                    {/* Suppléments Protéines pour Crispy Chicken (+2,50 € chaque portion, illimité) */}
                    <div className="mt-4 pt-3 border-t border-[#F59E0B]/30">
                      <div className="flex items-center justify-between mb-2.5">
                        <div>
                          <span className="block text-xs font-black uppercase tracking-wider text-[#2C1D16]">
                            💪 Suppléments Protéines (+2,50 € / portion)
                          </span>
                          <span className="text-[11px] font-semibold text-[#7A542E]">
                            Ajoutez des portions supplémentaires de Poulet, Saumon ou Crevettes (+2,50 € par portion, cumulable)
                          </span>
                        </div>
                        {totalExtraProteinUnits > 0 && (
                          <span className="rounded-full bg-[#ea580c] px-3 py-1 text-xs font-black text-white shadow-sm">
                            +{totalExtraProteinUnits} portion{totalExtraProteinUnits > 1 ? "s" : ""} (+{extraProteinPrice.toFixed(2)}€)
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {[
                          { id: "crousty-poulet", name: "Poulet croustillant", emoji: "🍗" },
                          { id: "crousty-saumon", name: "Saumon frais", emoji: "🐟" },
                          { id: "crousty-scampis", name: "Crevettes (Scampis)", emoji: "🦐" },
                        ].map((prot) => {
                          const count = extraProteins[prot.name] ?? 0;
                          return (
                            <div
                              key={prot.id}
                              className={`flex items-center justify-between rounded-2xl border-2 p-2.5 transition-all ${
                                count > 0
                                  ? "border-[#ea580c] bg-[#FFF4F1] shadow-sm"
                                  : "border-[#E6C79C] bg-[#FFFDF9]"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-xl">{prot.emoji}</span>
                                <div className="min-w-0">
                                  <span className="block text-xs font-black text-[#2C1D16] truncate">
                                    {prot.name}
                                  </span>
                                  <span className="text-[10px] font-black text-[#ea580c]">
                                    {count > 0 ? `${count}x (+${(count * 2.5).toFixed(2)}€)` : "+2,50 €"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                {count > 0 && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => removeExtraProtein(prot.name)}
                                      aria-label={`Diminuer ${prot.name}`}
                                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ea580c]/40 bg-white text-[#ea580c] font-black hover:bg-[#ea580c] hover:text-white transition"
                                    >
                                      <Minus className="h-3 w-3 stroke-[3]" />
                                    </button>
                                    <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                      {count}
                                    </span>
                                  </>
                                )}
                                <button
                                  type="button"
                                  onClick={() => addExtraProtein(prot.name)}
                                  aria-label={`Ajouter ${prot.name}`}
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ea580c] hover:text-white transition"
                                >
                                  <Plus className="h-3 w-3 stroke-[3]" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                ) : (
                  <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                    <div className="mb-3 flex items-center justify-between">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                        1. Format & Taille
                      </h2>
                      <span className="text-[10px] font-bold text-[#7A6857]">Format personnalisable</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {bowlSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setSelectedSize(size.id)}
                          className={[
                            "flex flex-col items-start rounded-2xl border-2 p-3.5 text-left transition-all",
                            selectedSize === size.id
                              ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md"
                              : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16] hover:border-[#2C1D16]/40",
                          ].join(" ")}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span className="font-black text-sm uppercase">{size.name}</span>
                            <span className={`text-xs font-black ${selectedSize === size.id ? "text-[#EADCC9]" : "text-[#ff705f]"}`}>
                              {size.extraPrice === 0 ? "Inclus" : `+${size.extraPrice.toFixed(2)}€`}
                            </span>
                          </div>
                          <span className={`mt-1 text-[11px] leading-tight ${selectedSize === size.id ? "text-white/70" : "text-[#7A6857]"}`}>
                            {size.description}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Supplément Protéine pour Poké Bowls (+2.00€ par portion, illimité) */}
                    <div className="mt-4 pt-3 border-t border-[#DECBB3]">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="block text-[11px] font-black uppercase tracking-wider text-[#2C1D16]">
                            Suppléments Protéines (+2,50 € par portion)
                          </span>
                          <span className="text-[10px] font-semibold text-[#7A6857]">
                            Ajoute autant de portions que tu veux (même 2x ou 3x la même protéine : 3x = +7,50 €)
                          </span>
                        </div>
                        {totalExtraProteinUnits > 0 && (
                          <span className="rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm">
                            +{totalExtraProteinUnits} portion{totalExtraProteinUnits > 1 ? "s" : ""} (+{extraProteinPrice.toFixed(2)}€)
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {detailedProteins.map((pr) => {
                          const count = extraProteins[pr.name] ?? 0;
                          return (
                            <div
                              key={pr.id}
                              className={`flex items-center justify-between rounded-2xl border-2 p-2.5 transition-all ${
                                count > 0
                                  ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm"
                                  : "border-[#DECBB3] bg-[#FFFDF9]"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-xl">{pr.emoji}</span>
                                <div className="min-w-0">
                                  <span className="block text-xs font-black text-[#2C1D16] truncate">
                                    {pr.name}
                                  </span>
                                  <span className="text-[10px] font-black text-[#ff705f]">
                                    {count > 0 ? `${count}x (+${(count * 2.5).toFixed(2)}€)` : "+2,50 €"}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 shrink-0">
                                {count > 0 && (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => removeExtraProtein(pr.name)}
                                      aria-label={`Diminuer ${pr.name}`}
                                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition"
                                    >
                                      <Minus className="h-3 w-3 stroke-[3]" />
                                    </button>
                                    <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                      {count}
                                    </span>
                                  </>
                                )}
                                <button
                                  type="button"
                                  onClick={() => addExtraProtein(pr.name)}
                                  aria-label={`Ajouter ${pr.name}`}
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ff705f] hover:text-white transition"
                                >
                                  <Plus className="h-3 w-3 stroke-[3]" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                )}

                {/* ══ STEP 2: BASE AU CHOIX ══════════════════════════ */}
                <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                        {isCrousty ? "Base" : "2. Base au choix"}
                      </h2>
                      <p className="text-[11px] text-[#7A6857]">Incluse · change selon tes envies</p>
                    </div>
                    <span className="rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-[10px] font-black text-[#2C1D16]">
                      {selectedBase}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {detailedBases.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBase(b.name)}
                        className={[
                          "flex flex-col items-center justify-center rounded-xl border-2 p-2.5 text-center transition-all",
                          selectedBase === b.name
                            ? "border-[#ff705f] bg-[#FFF4F1] font-black text-[#c0350f]"
                            : "border-[#DECBB3] bg-[#FFFDF9] font-bold text-[#2C1D16] hover:border-[#ff705f]/40",
                        ].join(" ")}
                      >
                        <span className="text-xl">{b.emoji}</span>
                        <span className="mt-1 text-[11px] leading-tight">{b.name}</span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* ══ STEP 3: ALLERGIES & INGRÉDIENTS RETIRABLES ══════ */}
                <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16] flex items-center gap-1.5">
                        <AlertTriangle className="h-4 w-4 text-[#ff705f]" />
                        Composition de la recette & Allergies
                      </h2>
                      <span className="text-[10px] font-bold text-[#ff705f]">
                        100% Modifiable
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#7A6857] leading-relaxed">
                      Clique sur un ingrédient pour le <strong>retirer</strong> si tu as une allergie ou une intolérance.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.ingredients.map((ing) => {
                      const isRemoved = removedIngredients.includes(ing.name);
                      return (
                        <RemovableIngredientButton
                          key={ing.name}
                          name={ing.name}
                          emoji={ing.emoji}
                          isRemoved={isRemoved}
                          onToggle={() => toggleRemovedIngredient(ing.name)}
                        />
                      );
                    })}
                  </div>

                  {removedIngredients.length > 0 && (
                    <div className="mt-4 rounded-xl border border-[#ff705f]/30 bg-[#FFF1EE] p-3 text-xs">
                      <p className="font-black text-[#c0350f] flex items-center gap-1.5">
                        <span>⚠️ Préparation sans :</span>
                        <span className="font-extrabold">{removedIngredients.join(", ")}</span>
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#8e4539]">
                        La consigne sera transmise avec soin en cuisine.
                      </p>
                    </div>
                  )}
                </section>

                {/* ══ STEP 4: SAUCE UNIFIÉE (1ÈRE OFFERTE · +0,50 € PAR PORTION SUPPLÉMENTAIRE) ══ */}
                <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                        {isCrousty ? "Sauce de nappage" : "4. Sauces au choix"}
                      </h2>
                      <p className="text-[11px] text-[#7A6857]">
                        La 1ère sauce est <strong>offerte</strong> · chaque portion supplémentaire est à <strong>+0,50 €</strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#2C1D16] px-3 py-1 text-[11px] font-black text-[#EADCC9]">
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
                          className="rounded-full border border-[#DECBB3] bg-[#FFFDF9] px-2.5 py-1 text-[10px] font-bold text-[#7A6857] hover:bg-[#2C1D16] hover:text-[#EADCC9] transition"
                        >
                          Sans sauce
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                    {detailedSauces.map((s) => {
                      const count = sauceQuantities[s.name] ?? 0;
                      const isSelected = count > 0;
                      return (
                        <div
                          key={s.id}
                          className={`flex items-center justify-between gap-1.5 rounded-2xl border-2 p-2.5 transition-all ${
                            isSelected
                              ? "border-[#ff705f] bg-[#FFF4F1] shadow-sm"
                              : "border-[#DECBB3] bg-[#FFFDF9] hover:border-[#ff705f]/40"
                          }`}
                        >
                          <div
                            onClick={() => addSauce(s.name)}
                            className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer"
                          >
                            <span className="text-xl shrink-0">{s.emoji}</span>
                            <div className="min-w-0 flex-1">
                              <span className="block text-xs font-black text-[#2C1D16] truncate">
                                {s.name}
                              </span>
                              <span className="text-[10px] font-bold text-[#7A6857]">
                                {count === 0
                                  ? totalSauceUnits === 0
                                    ? "Offerte"
                                    : "+0,50 €"
                                  : count === 1 && totalSauceUnits === 1
                                  ? "1 offerte"
                                  : `${count}x (+${(count * 0.5).toFixed(2)}€)`}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {count > 0 ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeSauce(s.name)}
                                  aria-label={`Diminuer sauce ${s.name}`}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff705f]/40 bg-white text-[#ff705f] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-95"
                                >
                                  <Minus className="h-3 w-3 stroke-[3]" />
                                </button>
                                <span className="w-4 text-center text-xs font-black text-[#2C1D16]">
                                  {count}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => addSauce(s.name)}
                                  aria-label={`Ajouter sauce ${s.name}`}
                                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff705f] text-white font-black hover:bg-[#ff5542] transition active:scale-95 shadow-sm"
                                >
                                  <Plus className="h-3 w-3 stroke-[3]" />
                                </button>
                              </>
                            ) : (
                              <button
                                type="button"
                                onClick={() => addSauce(s.name)}
                                aria-label={`Choisir sauce ${s.name}`}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#ff705f] hover:text-white transition active:scale-95"
                              >
                                <Plus className="h-3 w-3 stroke-[3]" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ STEP 5: SUPPLÉMENTS LÉGUMES & MIX-INS FRAIS (+1.00€ CHAQUE PORTION, ILLIMITÉ) ══ */}
                <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                        Suppléments Légumes & Fruits Frais (+1,00 € / portion)
                      </h2>
                      <p className="text-[11px] text-[#7A6857]">
                        Ajoute autant de portions de légumes que tu veux (+1,00 € chacune, même plusieurs fois le même).
                      </p>
                    </div>
                    {totalMixinUnits > 0 && (
                      <span className="rounded-full bg-[#059669] px-3 py-1 text-xs font-black text-white shadow-sm">
                        +{totalMixinUnits} portion{totalMixinUnits > 1 ? "s" : ""} (+{mixinsExtraPrice.toFixed(2)}€)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {detailedMixIns.map((mix) => {
                      const count = mixinQuantities[mix.name] ?? 0;
                      return (
                        <div
                          key={mix.id}
                          className={`flex items-center justify-between gap-2 rounded-2xl border-2 p-2.5 text-left transition ${
                            count > 0
                              ? "border-[#059669] bg-[#ECFDF5] text-[#065F46] shadow-sm"
                              : "border-[#DECBB3] bg-[#FFFDF9] text-[#2C1D16]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-xl">{mix.emoji}</span>
                            <div className="min-w-0">
                              <span className="block text-xs font-bold truncate">{mix.name}</span>
                              <span className="text-[10px] text-[#059669] font-black">
                                {count > 0 ? `${count}x (+${(count * 1).toFixed(2)}€)` : "+1,00 €"}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {count > 0 && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => removeMixin(mix.name)}
                                  aria-label={`Diminuer ${mix.name}`}
                                  className="flex h-6 w-6 items-center justify-center rounded-full border border-[#059669]/40 bg-white text-[#059669] font-black hover:bg-[#059669] hover:text-white transition"
                                >
                                  <Minus className="h-3 w-3 stroke-[3]" />
                                </button>
                                <span className="w-4 text-center text-xs font-black text-[#065F46]">
                                  {count}
                                </span>
                              </>
                            )}
                            <button
                              type="button"
                              onClick={() => addMixin(mix.name)}
                              aria-label={`Ajouter ${mix.name}`}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] font-black hover:bg-[#059669] hover:text-white transition"
                            >
                              <Plus className="h-3 w-3 stroke-[3]" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ══ STEP 6: TOPPINGS CROUSTILLANTS (ILLIMITÉS À VOLONTÉ) ══ */}
                <section className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16]">
                        Toppings Croustillants
                      </h2>
                      <p className="text-[11px] text-[#7A6857]">
                        À volonté · choisis autant de portions que tu veux (+0.50€ chaque)
                      </p>
                    </div>
                    {totalToppingsCount > 0 && (
                      <span className="rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm">
                        {totalToppingsCount} portion{totalToppingsCount > 1 ? "s" : ""} (+{toppingsExtraPrice.toFixed(2)}€)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {toppings.map((topping) => (
                      <ToppingChip
                        key={topping.id}
                        topping={topping}
                        qty={toppingQuantities[topping.name] ?? 0}
                        onAdd={() => addTopping(topping.name)}
                        onRemove={() => removeTopping(topping.name)}
                      />
                    ))}
                  </div>
                </section>

                {/* ══ STEP 7 (CROUSTY UNIQUEMENT): BOISSON 33CL INCLUSE AU CHOIX ══ */}
                {isCrousty && (
                  <section className="rounded-[24px] border-2 border-[#F59E0B]/40 bg-[#FFF6E8] p-5 shadow-card">
                    <div className="mb-3">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#2C1D16] flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[#ea580c]" />
                        Canette 33 cl Incluse (Formule Étudiant 11 € · Midi uniquement)
                      </h2>
                      <p className="text-[11px] font-semibold text-[#7A542E]">
                        Comprise dans la formule étudiant du midi à 11,00 € · sélectionne ta boisson fraîche
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {drinks.map((d) => (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => setSelectedDrink(d.name)}
                          className={[
                            "flex items-center justify-between rounded-xl border-2 p-2.5 text-left text-xs font-bold transition-all",
                            selectedDrink === d.name
                              ? "border-[#ea580c] bg-[#FFFDF9] text-[#ea580c] shadow-sm font-black"
                              : "border-[#E6C79C] bg-[#FFFDF9]/80 text-[#2C1D16] hover:border-[#ea580c]/50",
                          ].join(" ")}
                        >
                          <span className="truncate">{d.name}</span>
                          {selectedDrink === d.name && (
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#ea580c]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                {/* ══ STEP 8: QUANTITÉ & RÉCAPITULATIF PRIX EN DIRECT ════ */}
                <div className="rounded-[24px] border border-[#DECBB3] bg-[#FAF5EE] p-5 shadow-card">
                  <div className="flex items-center justify-between gap-4">
                    <QuantitySelector
                      qty={qty}
                      onMinus={() => setQty((q) => Math.max(1, q - 1))}
                      onPlus={() => setQty((q) => Math.min(20, q + 1))}
                    />
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7A6857]">
                        {qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix unitaire calculé"}
                      </p>
                      <p className="mt-0.5 text-3xl font-black text-[#2C1D16]">
                        € {totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Desktop CTA ──────────────────────────────── */}
                <div className="hidden sm:block">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={[
                      "btn-primary w-full text-sm font-black py-4 shadow-lift transition-all",
                      added ? "bg-[#2C1D16] scale-[0.99]" : "hover:scale-[1.01] active:scale-95",
                    ].join(" ")}
                  >
                    {added ? (
                      <span className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-[#22c55e]" /> Ajouté au panier !
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Ajouter au panier · € {totalPrice.toFixed(2)}
                      </span>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* ── Mobile sticky CTA ──────────────────────────────────── */}
      {productOk && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#DECBB3] bg-[#FAF5EE]/95 p-3.5 backdrop-blur-xl sm:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
          <button
            type="button"
            onClick={handleAddToCart}
            className={[
              "btn-primary w-full py-3.5 text-sm font-black shadow-glow-coral",
              added ? "bg-[#2C1D16]" : "",
            ].join(" ")}
          >
            {added ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-[#22c55e]" /> Ajouté !
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Ajouter · € {totalPrice.toFixed(2)}
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
