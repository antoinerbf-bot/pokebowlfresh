import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { bowls, customToppings, toppingPrices, toppingMeta } from "../../lib/data";
import { DishImage } from "../../components/DishImage";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import logo from "@/assets/logo-poke-n-bowl.svg";
import { useStock } from "../../hooks/useStock";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});

function ProductPage() {
  const { productId } = Route.useParams();
  const product = bowls.find((b) => b.id === productId);
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();
  const [selectedToppings, setSelectedToppings] = React.useState<Record<string, number>>({});
  const [extraSauce, setExtraSauce] = React.useState(false);

  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-5">
        <div className="text-center">
          <h1 className="mb-4 break-words text-3xl font-bold">{t("product.not_found")}</h1>
          <Link to="/commander" className="text-coral underline">{t("product.back")}</Link>
        </div>
      </div>
    );
  }

  const productOk = available(product.id);

  const isCrousty = product.id.startsWith("crousty-");
  const toppingsPrice = Object.entries(selectedToppings).reduce((sum, [topping, quantity]) => sum + (toppingPrices[topping] ?? 0) * quantity, 0);
  const finalPrice = product.price + toppingsPrice + (isCrousty && extraSauce ? 1 : 0);

  const toppingLabel = (topping: string) => `Topping : ${topping}`;

  const changeToppingQuantity = (topping: string, delta: number) => {
    setSelectedToppings((current) => {
      const nextQuantity = (current[topping] ?? 0) + delta;
      const next = { ...current };
      if (nextQuantity <= 0) delete next[topping];
      else next[topping] = nextQuantity;
      return next;
    });
  };

  const handleAddToCart = () => {
    if (!productOk) return;
    const options = [
      ...Object.entries(selectedToppings).map(([item, quantity]) => `${toppingLabel(item)} ×${quantity} +${((toppingPrices[item] ?? 0) * quantity).toFixed(2)}€`),
      ...(isCrousty && extraSauce ? ["Sauce extra +1€"] : []),
    ];
    addItem({
      id: product.id,
      name: product.name,
      price: finalPrice,
      quantity: 1,
      toppings: options,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <CartDrawer />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="group flex min-w-0 items-center" aria-label="Poke N Bowl">
            <span className="flex h-11 w-[175px] shrink-0 items-center overflow-hidden sm:h-12 sm:w-[195px]">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain object-left" />
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-xs font-bold uppercase transition-colors ${
                    language === lang ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-secondary p-2 transition-colors hover:bg-secondary/80"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 pb-28 sm:pb-8">
        <Link
          to="/commander"
          className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("product.back")}
        </Link>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="relative aspect-[1.48] overflow-hidden rounded-3xl shadow-lift sm:max-h-[500px]">
            <DishImage
              dishId={product.id}
              alt={product.name}
              className={`h-full w-full transition duration-500 ${!productOk ? "grayscale" : ""}`}
            />
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-primary shadow-sm">
              {productOk ? product.tag : t("cmd.sold_out")}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h1 className="min-w-0 flex-1 break-words pb-1 font-script text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[.98] tracking-[-0.03em]">
                {product.name}
              </h1>
              <span className="shrink-0 text-2xl font-display font-bold text-coral">
                € {product.price.toFixed(2)}
              </span>
            </div>
            <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">{product.desc}</p>
            {product.menuNote && (
              <div className="mb-6 rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/35 px-4 py-3">
                <p className="text-sm font-black text-[#8f5b12]">{product.menuNote}</p>
                <p className="mt-1 text-xs font-semibold text-[#68756f]">Sauce extra disponible : +1€</p>
              </div>
            )}

            {!productOk && (
              <div className="mb-6 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-bold text-coral">
                {t("product.unavailable")}
              </div>
            )}

            {productOk && (
              <div className="mb-6 rounded-[28px] border border-[#d7ff45]/50 bg-[linear-gradient(135deg,#f7fff0,#ffffff_55%,#fff3ef)] p-5 shadow-[0_24px_70px_-38px_rgba(23,35,31,.35)] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8f5b12]">{t("toppings.title")}</p>
                    <h2 className="mt-1 font-display text-xl font-bold tracking-[-0.01em] text-[#17231f]">Ajoute ta touche</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#c94e3f]">+ supplément</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#6e6255]">
                  {isCrousty
                    ? "La recette reste signature. Ajoute autant de toppings payants que tu veux et, si tu veux, une sauce supplémentaire."
                    : "Garde la recette du restaurant et ajoute autant de toppings payants que tu veux."}
                  <span className="mt-1 block font-black text-[#c94e3f]">Aucune limite : tu peux ajouter plusieurs fois le même topping. Chaque ajout est facturé.</span>
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {customToppings.map((topping) => {
                    const quantity = selectedToppings[topping] ?? 0;
                    const selected = quantity > 0;
                    return (
                      <div
                        key={topping}
                        className={`rounded-xl border px-3 py-2 transition ${
                          selected
                            ? "border-[#a96b0d] bg-[#a96b0d] text-white"
                            : "border-[#8d5a18]/15 bg-white text-[#34433d]"
                        }`}
                      >
                        <div className="flex min-h-11 items-center justify-between gap-2">
                          <div className="min-w-0">
                            <p className="flex items-center gap-1.5 truncate text-xs font-black"><span className="text-base" aria-hidden="true">{toppingMeta[topping]?.emoji ?? "✦"}</span><span className="truncate">{topping}</span></p>
                            <p className={`text-[10px] font-bold ${selected ? "text-white/75" : "text-[#718078]"}`}>{toppingMeta[topping]?.label ?? "Extra"} · 
                              +€ {(toppingPrices[topping] ?? 0).toFixed(2)} / ajout
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => changeToppingQuantity(topping, -1)}
                              disabled={!selected}
                              aria-label={`Retirer ${topping}`}
                              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                                selected
                                  ? "bg-white/20 text-white hover:bg-white/30"
                                  : "bg-[#f1eee8] text-[#b5aa9d]"
                              }`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="flex min-w-7 justify-center text-sm font-black">{quantity}</span>
                            <button
                              type="button"
                              onClick={() => changeToppingQuantity(topping, 1)}
                              aria-label={`Ajouter ${topping}`}
                              className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                                selected
                                  ? "bg-white/20 text-white hover:bg-white/30"
                                  : "bg-[#a96b0d] text-white hover:bg-[#8f5b12]"
                              }`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}                </div>
                {isCrousty && (
                  <button
                    type="button"
                    onClick={() => setExtraSauce((value) => !value)}
                    className={`mt-3 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition ${
                      extraSauce ? "border-[#a96b0d] bg-[#a96b0d] text-white" : "border-[#8d5a18]/15 bg-white text-[#4d4134]"
                    }`}
                  >
                    <span>Sauce extra</span>
                    <span>+1€</span>
                  </button>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-border/50 bg-secondary/50 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold tracking-[-0.01em]">Composition</h2>
                <span className="shrink-0 text-xs font-semibold text-muted-foreground">{isCrousty ? "Recette signature" : "Recette originale"}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
              <div className="flex flex-wrap gap-2">
                {product.composition.map((ingredient) => (
                  <span key={ingredient} className="rounded-full bg-background px-3 py-1.5 text-xs font-bold text-foreground shadow-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-background/70 px-4 py-3 text-xs font-semibold text-muted-foreground">
                Tu peux ajouter ou retirer autant de toppings que tu veux, y compris plusieurs fois le même topping. Chaque ajout est facturé au tarif affiché.
              </div>
            </div>

            <div className="mt-8 hidden sm:block">
              <Button
                onClick={handleAddToCart}
                disabled={!productOk}
                size="lg"
                className="h-14 w-full rounded-xl bg-coral text-lg text-white shadow-lift transition-transform hover:scale-[1.02] hover:bg-coral/90 disabled:opacity-50"
              >
                {productOk ? "Ajouter au panier · € " + finalPrice.toFixed(2) : t("product.out_of_stock")}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-background/95 p-3 backdrop-blur-xl sm:hidden">
        <Button
          onClick={handleAddToCart}
          disabled={!productOk}
          size="lg"
          className="h-12 w-full rounded-full bg-coral text-base font-black text-white hover:bg-coral/90 disabled:opacity-50"
        >
          {productOk
            ? "Ajouter au panier · € " + finalPrice.toFixed(2)
            : t("product.out_of_stock")}
        </Button>
      </div>
    </div>
  );
}
