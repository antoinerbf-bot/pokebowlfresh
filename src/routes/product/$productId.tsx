import * as React from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import {
  bowls,
  toppings,
  bowlSizes,
  detailedBases,
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
  X,
  Sparkles,
  AlertTriangle,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import { BrandLogo } from "@/components/BrandLogo";
import { useStock } from "../../hooks/useStock";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});

/* ─── Tag colors ─────────────────────────────────────────────────── */
const TAG_STYLES: Record<string, string> = {
  signature:  "bg-[#10251f] text-[#d7ff45]",
  bestseller: "bg-[#ff705f] text-white",
  premium:    "bg-[#7c4f1a] text-[#ffe9c2]",
  spicy:      "bg-[#c0350f] text-white",
  new:        "bg-[#d7ff45] text-[#10251f]",
};

/* ─── Topping chip component ─────────────────────────────────────── */
function ToppingChip({
  topping,
  selected,
  onToggle,
}: {
  topping: Topping;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      aria-label={`${topping.name} +${topping.price.toFixed(2)}€`}
      className={[
        "relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 p-3 text-center transition-all duration-200 select-none",
        selected
          ? "border-[#ff705f] bg-[#fff3f1] shadow-[0_4px_16px_-4px_rgba(255,112,95,.45)] scale-[1.02]"
          : "border-[#e8e2d9] bg-white hover:border-[#ff705f]/50 hover:bg-[#faf8f4] active:scale-95",
      ].join(" ")}
    >
      {selected && (
        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff705f] shadow-sm">
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </span>
      )}
      <span className="text-2xl leading-none" role="img" aria-hidden="true">
        {topping.emoji}
      </span>
      <span className="text-xs font-bold leading-tight text-[#17231f]">
        {topping.name}
      </span>
      <span className="text-[11px] font-black text-[#ff705f]">
        +{topping.price.toFixed(2)} €
      </span>
    </button>
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
          : "border-[#e0d9cc] bg-white text-[#2a3731] hover:border-[#ff705f]/60 hover:bg-[#fff9f8] shadow-sm",
      ].join(" ")}
    >
      {emoji && <span role="img" aria-hidden="true" className="text-sm">{emoji}</span>}
      <span>{name}</span>
      {isRemoved ? (
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#c0350f] text-[9px] font-black text-white not-italic no-underline">
          ✕
        </span>
      ) : (
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/5 text-[9px] font-bold text-[#88928c] opacity-70 group-hover:bg-[#ff705f]/20 group-hover:text-[#ff705f]">
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
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center text-xl font-black tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={onPlus}
        aria-label="Augmenter la quantité"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
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

  // Redirection si sur-mesure
  if (productId === "sur-mesure") {
    return <Navigate to="/sur-mesure" replace />;
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f4ec] px-5">
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

  // States
  const [selectedSize, setSelectedSize] = React.useState<"moyen" | "grand">("moyen");
  const [selectedBase, setSelectedBase] = React.useState<string>(product.defaultBase || "Riz à sushi");
  const [selectedSauce, setSelectedSauce] = React.useState<string>(product.defaultSauce || "Spicy-Mayo");
  const [removedIngredients, setRemovedIngredients] = React.useState<string[]>([]);
  
  // Suppléments demandés par le client
  const [extraChicken, setExtraChicken] = React.useState(false); // Crousty : supplément poulet croustillant (+2.50 €)
  const [extraProtein, setExtraProtein] = React.useState<string | null>(null); // Poké : supplément protéine (+2.50 €)
  const [selectedMixins, setSelectedMixins] = React.useState<string[]>([]); // Légumes / Fruits (+0.50 € chaque, illimité)
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]); // Toppings croustillants (+0.50 € chaque, illimité)
  const [extraSauce, setExtraSauce] = React.useState<string | null>(null); // 2ème pot de sauce (+1.00 €)
  const [selectedDrink, setSelectedDrink] = React.useState<string>(drinks[0]?.name || "Coca-Cola (33 cl)");
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Calcul du prix cohérent partout :
  // Crousty chicken a UNE SEULE TAILLE (pas de grand format +3€).
  const sizeExtra = !isCrousty && selectedSize === "grand" ? 3.00 : 0;
  const extraProteinPrice = (isCrousty ? (extraChicken ? 2.50 : 0) : (extraProtein ? 2.50 : 0));
  const mixinsExtraPrice = selectedMixins.length * 0.50;
  const toppingsExtraPrice = selectedToppings.length * 0.50;
  const extraSaucePrice = extraSauce ? 1.00 : 0;

  const unitPrice = product.price + sizeExtra + extraProteinPrice + mixinsExtraPrice + toppingsExtraPrice + extraSaucePrice;
  const totalPrice = unitPrice * qty;

  // Toggle ingrédient retirable (allergies / préférences)
  const toggleRemovedIngredient = (name: string) => {
    setRemovedIngredients((cur) =>
      cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]
    );
  };

  // Toggle topping additionnel (illimité)
  const toggleTopping = (toppingName: string) => {
    setSelectedToppings((cur) =>
      cur.includes(toppingName)
        ? cur.filter((t) => t !== toppingName)
        : [...cur, toppingName]
    );
  };

  // Toggle légume / mix-in additionnel (illimité)
  const toggleMixin = (mixinName: string) => {
    setSelectedMixins((cur) =>
      cur.includes(mixinName)
        ? cur.filter((m) => m !== mixinName)
        : [...cur, mixinName]
    );
  };

  // Ajout au panier
  const handleAddToCart = () => {
    if (!productOk) return;

    const optionsList: string[] = [];

    // Format / Taille
    if (isCrousty) {
      optionsList.push("Format : Taille unique standard (Portion généreuse)");
      if (extraChicken) {
        optionsList.push("Supplément : + Portion extra Poulet Croustillant (+2.50€)");
      }
      optionsList.push(`Boisson 33cl incluse : ${selectedDrink}`);
    } else {
      if (selectedSize === "grand") {
        optionsList.push("Taille : Grand (+3.00€)");
      } else {
        optionsList.push("Taille : Moyen (Standard)");
      }
      if (extraProtein) {
        optionsList.push(`Supplément Protéine (+2.50€) : ${extraProtein}`);
      }
    }

    // Base
    optionsList.push(`Base : ${selectedBase}`);

    // Sauce principale
    if (selectedSauce === "none") {
      optionsList.push("Sauce : Sans sauce");
    } else {
      optionsList.push(`Sauce : ${selectedSauce}`);
    }

    // Suppléments Légumes & Mix-ins sélectionnés
    selectedMixins.forEach((m) => {
      optionsList.push(`Légume / Mix-in (+0.50€) : ${m}`);
    });

    // Toppings payants sélectionnés
    selectedToppings.forEach((t) => {
      optionsList.push(`Topping (+0.50€) : ${t}`);
    });

    // Sauce extra payante
    if (extraSauce) {
      optionsList.push(`Sauce extra (+1€) : ${extraSauce}`);
    }

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

  const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* ── Sticky Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link
            to="/"
            className="group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="md" />
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
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
              La Carte
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-[#10251f] p-2.5 text-white transition hover:bg-[#1e3d33]"
              aria-label={t("cart.title")}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">
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
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#7a847e] transition hover:text-[#17231f]"
        >
          <ArrowLeft className="h-4 w-4" /> {t("product.back")}
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12">
          {/* ── Left Column: Dish Image & Key Info ─────────────────── */}
          <div className="space-y-4">
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-[32px] shadow-lift sm:rounded-[36px] bg-[#12231b]">
              <DishImage
                dishId={product.id}
                alt={product.name}
                priority
                className={`h-full w-full object-cover transition duration-700 ${!productOk ? "grayscale" : ""}`}
              />
              <span className={`badge-tag absolute left-4 top-4 shadow-card ${tagStyle}`}>
                {productOk ? product.tag : t("cmd.sold_out")}
              </span>
              <span className="absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-4 py-2 text-base font-black text-[#10251f] shadow-card">
                € {unitPrice.toFixed(2)}
              </span>
            </div>

            {/* Fiche info / Engagement fraîcheur */}
            <div className="rounded-[24px] border border-black/5 bg-white p-5 shadow-card space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#10251f]">
                <ShieldCheck className="h-4 w-4 text-[#ff705f]" />
                <span>Préparé minute sur commande à Visé</span>
              </div>
              <p className="text-xs text-[#707e77] leading-relaxed">
                {isCrousty
                  ? "Poulet croustillant frit minute, bien doré et nappé de sauce généreuse avec riz chaud et canette 33cl fraîche incluse."
                  : "Chaque bowl est assemblé à la commande à Visé avec du poisson noble et légumes frais du jour. Vous pouvez retirer n'importe quel ingrédient en cas d'allergie ou ajouter tous les suppléments souhaités."}
              </p>
            </div>
          </div>

          {/* ── Right Column: Interactive Customization ────────────── */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                  {isCrousty ? "Crousty Chicken Chaud" : "Poké Bowl Signature"}
                </span>
              </div>
              <h1 className="mt-1 text-3xl font-black leading-tight sm:text-4xl text-[#10251f]">
                {product.name}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-[#68756f]">
                {product.desc}
              </p>
            </div>

            {product.menuNote && (
              <div className="rounded-2xl border border-[#a96b0d]/25 bg-[#ead9bb]/40 p-4">
                <p className="text-xs font-black text-[#8f5b12] flex items-center gap-2">
                  <Sparkles className="h-4 w-4 shrink-0" />
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
                {/* ══ STEP 1: FORMAT & TAILLE OU BANNIÈRE TAILLE UNIQUE CROUSTY ══════ */}
                {isCrousty ? (
                  <section className="rounded-[24px] border border-[#fed7aa] bg-[#fff7ed] p-5 shadow-card">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block rounded-full bg-[#ea580c] text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1">
                          Taille Unique Standard
                        </span>
                        <h2 className="text-sm font-black text-[#17231f]">
                          Portion Généreuse Chaude · Formule 11.00 €
                        </h2>
                        <p className="text-[11px] text-[#7a847e] mt-0.5">
                          Petits morceaux de poulet croustillant dorés + Riz chaud + Boisson 33cl incluse
                        </p>
                      </div>
                      <span className="text-2xl font-black text-[#ea580c]">11.00 €</span>
                    </div>

                    {/* Supplément Poulet Croustillant demandé par le client */}
                    <div className="mt-4 pt-3 border-t border-[#fed7aa]">
                      <button
                        type="button"
                        onClick={() => setExtraChicken(!extraChicken)}
                        className={`w-full flex items-center justify-between rounded-2xl border-2 p-3 transition-all ${
                          extraChicken
                            ? "border-[#ea580c] bg-white shadow-sm font-black"
                            : "border-[#fed7aa]/60 bg-white/70 hover:border-[#ea580c] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">🍗</span>
                          <div className="text-left">
                            <span className="block text-xs font-black text-[#10251f]">
                              Supplément Poulet Croustillant
                            </span>
                            <span className="text-[10px] text-[#7a847e]">
                              Portion extra de petits morceaux dorés croustillants
                            </span>
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            extraChicken
                              ? "bg-[#ea580c] text-white"
                              : "bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]"
                          }`}
                        >
                          {extraChicken ? "✓ Inclus (+2.50 €)" : "+ 2.50 €"}
                        </span>
                      </button>
                    </div>
                  </section>
                ) : (
                  <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                    <div className="mb-3 flex items-center justify-between">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f]">
                        1. Format & Taille
                      </h2>
                      <span className="text-[10px] font-bold text-[#a09a92]">Bol bambou</span>
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
                              ? "border-[#10251f] bg-[#10251f] text-white shadow-md"
                              : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40",
                          ].join(" ")}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span className="font-black text-sm uppercase">{size.name}</span>
                            <span className={`text-xs font-black ${selectedSize === size.id ? "text-[#d7ff45]" : "text-[#ff705f]"}`}>
                              {size.extraPrice === 0 ? "Inclus" : `+${size.extraPrice.toFixed(2)}€`}
                            </span>
                          </div>
                          <span className={`mt-1 text-[11px] leading-tight ${selectedSize === size.id ? "text-white/70" : "text-[#7a847e]"}`}>
                            {size.description}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Supplément Protéine pour Poké Bowls */}
                    <div className="mt-4 pt-3 border-t border-black/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#7a847e]">
                          Envie d'une portion double de protéine ? (+2.50 €)
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: "poulet", name: "Poulet Teriyaki", emoji: "🍗" },
                          { id: "saumon", name: "Saumon Sashimi", emoji: "🐟" },
                          { id: "scampis", name: "Scampis Grillés", emoji: "🦐" },
                        ].map((pr) => (
                          <button
                            key={pr.id}
                            type="button"
                            onClick={() => setExtraProtein(extraProtein === pr.name ? null : pr.name)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-bold border transition ${
                              extraProtein === pr.name
                                ? "bg-[#ff705f] border-[#ff705f] text-white shadow-sm"
                                : "bg-[#faf8f4] border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f]/50"
                            }`}
                          >
                            <span>{pr.emoji} {extraProtein === pr.name ? `✓ ${pr.name} (+2.50 €)` : `+ Extra ${pr.name} (+2.50 €)`}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* ══ STEP 2: BASE AU CHOIX ══════════════════════════ */}
                <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f]">
                        {isCrousty ? "Base" : "2. Base au choix"}
                      </h2>
                      <p className="text-[11px] text-[#7a847e]">Incluse · change selon tes envies</p>
                    </div>
                    <span className="rounded-full bg-[#d7ff45]/20 px-2.5 py-0.5 text-[10px] font-black text-[#10251f]">
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
                            ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]"
                            : "border-[#e8e2d9] bg-white font-bold text-[#2e2619] hover:border-[#ff705f]/40",
                        ].join(" ")}
                      >
                        <span className="text-xl">{b.emoji}</span>
                        <span className="mt-1 text-[11px] leading-tight">{b.name}</span>
                      </button>
                    ))}
                  </div>
                </section>

                {/* ══ STEP 3: ALLERGIES & INGRÉDIENTS RETIRABLES ══════ */}
                <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f] flex items-center gap-1.5">
                        <AlertTriangle className="h-4 w-4 text-[#ff705f]" />
                        Composition de la recette & Allergies
                      </h2>
                      <span className="text-[10px] font-bold text-[#ff705f]">
                        100% Modifiable
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#7a847e] leading-relaxed">
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
                    <div className="mt-4 rounded-xl border border-[#ff705f]/30 bg-[#fff1ee] p-3 text-xs">
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

                {/* ══ STEP 4: SAUCE ══════════════════════════════════ */}
                <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f]">
                        Sauce
                      </h2>
                      <p className="text-[11px] text-[#7a847e]">Incluse · changement gratuit</p>
                    </div>
                    <span className="rounded-full bg-[#10251f] px-2.5 py-0.5 text-[10px] font-black text-[#d7ff45]">
                      {selectedSauce === "none" ? "Sans sauce" : selectedSauce}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {detailedSauces.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSauce(s.name)}
                        className={[
                          "flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-xs transition-all",
                          selectedSauce === s.name
                            ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]"
                            : "border-[#e8e2d9] bg-white font-bold text-[#2e2619] hover:border-[#ff705f]/40",
                        ].join(" ")}
                      >
                        <span>{s.emoji}</span>
                        <span className="truncate">{s.name}</span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setSelectedSauce("none")}
                      className={[
                        "flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-xs transition-all",
                        selectedSauce === "none"
                          ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]"
                          : "border-[#e8e2d9] bg-white font-bold text-[#7a847e] hover:border-[#ff705f]/40",
                      ].join(" ")}
                    >
                      <span>🚫</span>
                      <span>Sans sauce</span>
                    </button>
                  </div>

                  {/* Sauce extra payante (+1€) */}
                  <div className="mt-4 border-t border-black/5 pt-3">
                    <p className="text-[11px] font-black uppercase tracking-wider text-[#7a847e] mb-2">
                      Envie d'un 2ème pot de sauce séparé ? (+1.00€)
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {detailedSauces.map((s) => (
                        <button
                          key={`extra-${s.id}`}
                          type="button"
                          onClick={() => setExtraSauce(extraSauce === s.name ? null : s.name)}
                          className={[
                            "rounded-full border px-3 py-1 text-[11px] font-bold transition-all",
                            extraSauce === s.name
                              ? "border-[#ff705f] bg-[#ff705f] text-white shadow-sm"
                              : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#ff705f]/50",
                          ].join(" ")}
                        >
                          {extraSauce === s.name ? `✓ Extra ${s.name} (+1€)` : `+ ${s.name} (+1€)`}
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ══ STEP 5: SUPPLÉMENTS LÉGUMES & MIX-INS FRAIS (+0.50€ CHAQUE, ILLIMITÉ) ══ */}
                <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f]">
                        Suppléments Légumes & Fruits Frais
                      </h2>
                      <p className="text-[11px] text-[#7a847e]">
                        À volonté · choisis autant de légumes que tu veux (+0.50€ chaque)
                      </p>
                    </div>
                    {selectedMixins.length > 0 && (
                      <span className="rounded-full bg-[#059669] px-3 py-1 text-xs font-black text-white shadow-sm">
                        {selectedMixins.length} légume{selectedMixins.length > 1 ? "s" : ""} (+{(selectedMixins.length * 0.5).toFixed(2)}€)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {detailedMixIns.map((mix) => {
                      const isSelected = selectedMixins.includes(mix.name);
                      return (
                        <button
                          key={mix.id}
                          type="button"
                          onClick={() => toggleMixin(mix.name)}
                          className={`flex items-center gap-2 rounded-xl border p-2.5 text-left transition ${
                            isSelected
                              ? "border-[#059669] bg-[#ecfdf5] text-[#065f46] font-black shadow-sm"
                              : "border-[#e8e2d9] bg-white hover:border-[#059669]/40 text-[#2e2619] font-medium"
                          }`}
                        >
                          <span className="text-xl">{mix.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs truncate">{mix.name}</span>
                            <span className="text-[10px] text-[#059669] font-bold">+0.50 €</span>
                          </div>
                          {isSelected && <Check className="h-4 w-4 text-[#059669] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* ══ STEP 6: TOPPINGS CROUSTILLANTS (ILLIMITÉS À VOLONTÉ) ══ */}
                <section className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f]">
                        Toppings Croustillants
                      </h2>
                      <p className="text-[11px] text-[#7a847e]">
                        À volonté · choisis autant de toppings que tu veux (+0.50€ chaque)
                      </p>
                    </div>
                    {selectedToppings.length > 0 && (
                      <span className="rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm">
                        {selectedToppings.length} topping{selectedToppings.length > 1 ? "s" : ""} (+{(selectedToppings.length * 0.5).toFixed(2)}€)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {toppings.map((topping) => (
                      <ToppingChip
                        key={topping.id}
                        topping={topping}
                        selected={selectedToppings.includes(topping.name)}
                        onToggle={() => toggleTopping(topping.name)}
                      />
                    ))}
                  </div>
                </section>

                {/* ══ STEP 7 (CROUSTY UNIQUEMENT): BOISSON 33CL INCLUSE AU CHOIX ══ */}
                {isCrousty && (
                  <section className="rounded-[24px] border border-[#fed7aa] bg-[#fff7ed] p-5 shadow-card">
                    <div className="mb-3">
                      <h2 className="text-sm font-black uppercase tracking-wider text-[#17231f] flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-[#ea580c]" />
                        Boisson 33cl / 50cl Incluse dans la Formule
                      </h2>
                      <p className="text-[11px] text-[#7a847e]">
                        Comprise dans les 11.00 € · sélectionne ta boisson fraîche
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
                              ? "border-[#ea580c] bg-white text-[#ea580c] shadow-sm font-black"
                              : "border-[#fed7aa]/70 bg-white/70 text-[#2e2619] hover:border-[#ea580c]/50",
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
                <div className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card">
                  <div className="flex items-center justify-between gap-4">
                    <QuantitySelector
                      qty={qty}
                      onMinus={() => setQty((q) => Math.max(1, q - 1))}
                      onPlus={() => setQty((q) => Math.min(20, q + 1))}
                    />
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a09a92]">
                        {qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix unitaire calculé"}
                      </p>
                      <p className="mt-0.5 text-3xl font-black text-[#17231f]">
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
                      added ? "bg-[#10251f] scale-[0.99]" : "hover:scale-[1.01] active:scale-95",
                    ].join(" ")}
                  >
                    {added ? (
                      <span className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-[#d7ff45]" /> Ajouté au panier !
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
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3.5 backdrop-blur-xl sm:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.1)]">
          <button
            type="button"
            onClick={handleAddToCart}
            className={[
              "btn-primary w-full py-3.5 text-sm font-black shadow-glow-coral",
              added ? "bg-[#10251f]" : "",
            ].join(" ")}
          >
            {added ? (
              <span className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-[#d7ff45]" /> Ajouté !
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
