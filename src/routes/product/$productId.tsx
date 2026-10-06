import * as React from "react";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { bowls, toppings, type Topping } from "../../lib/data";
import { DishImage } from "../../components/DishImage";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import { ArrowLeft, ShoppingCart, Check, Minus, Plus, X } from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import logo from "@/assets/logo.png";
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
  disabled,
  onToggle,
}: {
  topping: Topping;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled && !selected}
      aria-pressed={selected}
      aria-label={`${topping.name}${topping.price > 0 ? ` +${topping.price.toFixed(2)}€` : " inclus"}`}
      className={[
        "topping-chip relative select-none",
        selected
          ? "border-[#ff705f] bg-[#fff1ee] shadow-[0_4px_14px_-6px_rgba(255,112,95,.55)]"
          : disabled
          ? "cursor-not-allowed opacity-40"
          : "border-[#e8e2d9] hover:border-[#ff705f]/50",
      ].join(" ")}
    >
      {/* Selected checkmark */}
      {selected && (
        <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f]">
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </span>
      )}
      <span className="text-2xl leading-none" role="img" aria-hidden="true">
        {topping.emoji}
      </span>
      <span className="text-[11px] font-bold leading-tight text-[#2e2619]">
        {topping.name}
      </span>
      {topping.price > 0 ? (
        <span className="text-[10px] font-black text-[#ff705f]">+{topping.price.toFixed(2)}€</span>
      ) : (
        <span className="text-[10px] font-semibold text-[#a09a92]">inclus</span>
      )}
    </button>
  );
}

/* ─── Ingredient pill (removable) ────────────────────────────────── */
function IngredientPill({
  name,
  emoji,
  removable,
  removed,
  onToggle,
}: {
  name: string;
  emoji: string | undefined;
  removable: boolean;
  removed: boolean;
  onToggle?: (() => void) | undefined;
}) {
  if (!removable) {
    return (
      <span className="ingredient-pill ingredient-pill--locked" title="Ingrédient fixe">
        {emoji && <span role="img" aria-hidden="true">{emoji}</span>}
        {name}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={removed}
      aria-label={removed ? `Remettre ${name}` : `Retirer ${name}`}
      className={["ingredient-pill", removed ? "ingredient-pill--removed" : ""].join(" ")}
    >
      {emoji && <span role="img" aria-hidden="true">{emoji}</span>}
      {name}
      {removed ? (
        <span className="ml-1 text-[#ff705f]">✕</span>
      ) : (
        <X className="h-3 w-3 shrink-0 text-[#a09a92] opacity-60" />
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
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-6 text-center text-lg font-black tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={onPlus}
        aria-label="Augmenter la quantité"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
function ProductPage() {
  const { productId } = Route.useParams();
  const product = bowls.find((b) => b.id === productId);
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();

  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);
  const [removedIngredients, setRemovedIngredients] = React.useState<string[]>([]);
  const [extraSauce, setExtraSauce] = React.useState(false);
  const [qty, setQty] = React.useState(1);
  const [added, setAdded] = React.useState(false);

  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

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

  const productOk = available(product.id);
  const isCrousty = product.id.startsWith("crousty-");

  /* ── Prix dynamique ─────────────────────────────────────── */
  const toppingExtra = selectedToppings.reduce((sum, tid) => {
    const t = toppings.find((t) => t.id === tid || t.name === tid);
    return sum + (t?.price ?? 0);
  }, 0);
  const extraSaucePrice = isCrousty && extraSauce ? 1 : 0;
  const unitPrice = product.price + toppingExtra + extraSaucePrice;
  const totalPrice = unitPrice * qty;

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings((cur) =>
      cur.includes(topping.name)
        ? cur.filter((t) => t !== topping.name)
        : [...cur, topping.name]
    );
  };

  const toggleIngredient = (name: string) => {
    setRemovedIngredients((cur) =>
      cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]
    );
  };

  const handleAddToCart = () => {
    if (!productOk) return;
    const options = [
      ...selectedToppings.map((t) => "Topping : " + t),
      ...(isCrousty && extraSauce ? ["Sauce extra +1€"] : []),
    ];
    addItem({
      id: product.id,
      name: product.name,
      basePrice: product.price,
      price: unitPrice,
      quantity: qty,
      toppings: options,
      removedIngredients,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    setIsCartOpen(true);
  };

  const removableIngredients = product.ingredients.filter((i) => i.removable);
  const fixedIngredients = product.ingredients.filter((i) => !i.removable);
  const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
          <Link to="/" className="group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200" aria-label="Poke N Bowl — Accueil">
            <BrandLogo size="md" />
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language switcher */}
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
            {/* Cart button */}
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

      {/* ── Main ───────────────────────────────────────────── */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-32 sm:px-6 sm:pb-10 lg:px-8">
        <Link
          to="/commander"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#7a847e] transition hover:text-[#17231f]"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("product.back")}
        </Link>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* ── Image ──────────────────────────────────────── */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-lift sm:rounded-[36px]">
              <DishImage
                dishId={product.id}
                alt={product.name}
                priority
                className={`h-full w-full object-cover transition duration-700 ${!productOk ? "grayscale" : ""}`}
              />
              {/* Tag */}
              <span className={`badge-tag absolute left-4 top-4 shadow-card ${tagStyle}`}>
                {productOk ? product.tag : t("cmd.sold_out")}
              </span>
              {/* Prix affiché sur l'image */}
              <span className="absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] shadow-card">
                € {product.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* ── Content ────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Nom + prix */}
            <div>
              <h1 className="text-3xl font-black leading-tight sm:text-4xl">{product.name}</h1>
              <p className="mt-2 text-[15px] leading-relaxed text-[#68756f]">{product.desc}</p>
            </div>

            {/* Menu note (crousty) */}
            {product.menuNote && (
              <div className="rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/40 px-4 py-3">
                <p className="text-sm font-black text-[#8f5b12]">{product.menuNote}</p>
              </div>
            )}

            {/* Indisponible */}
            {!productOk && (
              <div className="rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 px-4 py-3 text-sm font-bold text-[#ff705f]">
                {t("product.unavailable")}
              </div>
            )}

            {productOk && (
              <>
                {/* ══ 1. COMPOSITION (ingrédients retirables) ════════ */}
                <section aria-labelledby="composition-title">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 id="composition-title" className="text-base font-black text-[#17231f]">
                      Composition du bowl
                    </h2>
                    <span className="text-[11px] font-bold text-[#a09a92]">
                      {isCrousty ? "Recette signature" : "Recette originale"}
                    </span>
                  </div>

                  {/* Fixés */}
                  {fixedIngredients.length > 0 && (
                    <div className="mb-3">
                      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#a09a92]">
                        Inclus · non modifiables
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {fixedIngredients.map((ing) => (
                          <IngredientPill
                            key={ing.name}
                            name={ing.name}
                            emoji={ing.emoji}
                            removable={false}
                            removed={false}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Retirables */}
                  {removableIngredients.length > 0 && (
                    <div>
                      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">
                        Retirer un ingrédient — appuie pour supprimer
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {removableIngredients.map((ing) => (
                          <IngredientPill
                            key={ing.name}
                            name={ing.name}
                            emoji={ing.emoji}
                            removable
                            removed={removedIngredients.includes(ing.name)}
                            onToggle={() => toggleIngredient(ing.name)}
                          />
                        ))}
                      </div>
                      {removedIngredients.length > 0 && (
                        <p className="mt-2 text-[11px] font-bold text-[#ff705f]">
                          Retiré : {removedIngredients.join(", ")}
                        </p>
                      )}
                    </div>
                  )}
                </section>

                {/* ══ 2. TOPPINGS ADDITIONNELS ══════════════════════ */}
                <section
                  aria-labelledby="toppings-title"
                  className="rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card sm:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2
                        id="toppings-title"
                        className="text-base font-black text-[#17231f]"
                      >
                        Ajoute des toppings
                      </h2>
                      <p className="mt-0.5 text-[11px] text-[#a09a92]">
                        Sélection libre · choisis tous les toppings que tu aimes
                      </p>
                    </div>
                    {selectedToppings.length > 0 && (
                      <span className="rounded-full bg-[#ff705f]/10 px-3 py-1 text-[10px] font-black text-[#ff705f]">
                        {selectedToppings.length} sélectionné{selectedToppings.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
                    {toppings
                      .filter((t) => t.available)
                      .map((topping) => {
                        const selected = selectedToppings.includes(topping.name);
                        return (
                          <ToppingChip
                            key={topping.id}
                            topping={topping}
                            selected={selected}
                            disabled={false}
                            onToggle={() => toggleTopping(topping)}
                          />
                        );
                      })}
                  </div>

                  {/* Sauce extra (Crousty uniquement) */}
                  {isCrousty && (
                    <button
                      type="button"
                      onClick={() => setExtraSauce((v) => !v)}
                      aria-pressed={extraSauce}
                      className={[
                        "mt-3 flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm font-black transition",
                        extraSauce
                          ? "border-[#ff705f] bg-[#fff1ee] text-[#ff705f]"
                          : "border-[#e8e2d9] bg-white text-[#2e2619] hover:border-[#ff705f]/40",
                      ].join(" ")}
                    >
                      <span>Sauce extra</span>
                      <span>+1.00€</span>
                    </button>
                  )}
                </section>

                {/* ══ 3. QUANTITÉ + PRIX DYNAMIQUE ══════════════════ */}
                <div className="rounded-[20px] border border-[#e8e2d9] bg-white p-4 shadow-card sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <QuantitySelector
                      qty={qty}
                      onMinus={() => setQty((q) => Math.max(1, q - 1))}
                      onPlus={() => setQty((q) => Math.min(20, q + 1))}
                    />
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a09a92]">
                        {qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix total"}
                      </p>
                      <p className="mt-0.5 text-2xl font-black text-[#17231f]">
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
                      "btn-primary w-full",
                      added ? "bg-[#10251f]" : "",
                    ].join(" ")}
                  >
                    {added ? (
                      <>
                        <Check className="h-5 w-5" /> Ajouté !
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        Ajouter au panier · € {totalPrice.toFixed(2)}
                      </>
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
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-[#f7f4ec]/95 p-3 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            onClick={handleAddToCart}
            className={["btn-primary w-full", added ? "bg-[#10251f]" : ""].join(" ")}
          >
            {added ? (
              <>
                <Check className="h-5 w-5" /> Ajouté !
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Ajouter · € {totalPrice.toFixed(2)}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
