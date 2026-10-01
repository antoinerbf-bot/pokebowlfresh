import { createFileRoute, Link } from "@tanstack/react-router";
import { bowls, customToppings } from "../../lib/data";
import { DishImage } from "../../components/DishImage";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import logo from "@/assets/logo.png";
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
  const [selectedToppings, setSelectedToppings] = React.useState<string[]>([]);
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
  const finalPrice = product.price + (isCrousty && extraSauce ? 1 : 0);

  const toggleTopping = (topping: string) => {
    setSelectedToppings((current) =>
      current.includes(topping)
        ? current.filter((item) => item !== topping)
        : current.length < 2
          ? [...current, topping]
          : current,
    );
  };

  const handleAddToCart = () => {
    if (!productOk) return;
    const options = [
      ...selectedToppings.map((item) => "Topping : " + item),
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
          <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label="Poke N Bowl">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </span>
            <span className="truncate text-base font-black tracking-tight sm:text-lg">Poke N Bowl</span>
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
              <h1 className="min-w-0 flex-1 break-words pb-1 text-3xl font-extrabold leading-[1.15]">
                {product.name}
              </h1>
              <span className="shrink-0 text-2xl font-display font-bold text-coral">
                € {product.price.toFixed(2)}
              </span>
            </div>
            <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">{product.desc}</p>
            {product.id.startsWith("crousty-") && (
              <div className="mb-6 rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/35 px-4 py-3">
                <p className="text-sm font-black text-[#8f5b12]">Menu étudiant · 11€ · boisson incluse</p>
                <p className="mt-1 text-xs font-semibold text-[#6e6255]">Sauce extra : +1€</p>
              </div>
            )}

            {!productOk && (
              <div className="mb-6 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-bold text-coral">
                {t("product.unavailable")}
              </div>
            )}

            {productOk && (
              <div className="mb-6 rounded-3xl border border-[#a96b0d]/20 bg-[#ead9bb]/35 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8f5b12]">{t("toppings.title")}</p>
                    <h2 className="mt-1 text-xl font-black text-[#241a12]">Ajoute ta touche</h2>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-[#8f5b12]">{t("toppings.max")}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#6e6255]">
                  {isCrousty
                    ? "La recette reste signature. Tu peux ajouter jusqu’à 2 toppings et, si tu veux, une sauce supplémentaire."
                    : "Garde la recette du restaurant et ajoute jusqu’à 2 toppings inclus."}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {customToppings.map((topping) => {
                    const selected = selectedToppings.includes(topping);
                    const disabled = !selected && selectedToppings.length >= 2;
                    return (
                      <button
                        key={topping}
                        type="button"
                        onClick={() => toggleTopping(topping)}
                        disabled={disabled}
                        className={`flex min-h-11 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs font-bold transition ${selected ? "border-[#a96b0d] bg-[#a96b0d] text-white" : disabled ? "cursor-not-allowed border-[#8d5a18]/10 bg-white/60 text-[#9a8e80]" : "border-[#8d5a18]/15 bg-white text-[#4d4134] hover:border-[#a96b0d]/40"}`}
                      >
                        <span>{topping}</span>
                        {selected && <Check className="h-3.5 w-3.5 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                {isCrousty && (
                  <button
                    type="button"
                    onClick={() => setExtraSauce((value) => !value)}
                    className={`mt-3 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-black transition ${extraSauce ? "border-[#a96b0d] bg-[#a96b0d] text-white" : "border-[#8d5a18]/15 bg-white text-[#4d4134]"}`}
                  >
                    <span>Sauce extra</span>
                    <span>+1€</span>
                  </button>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-border/50 bg-secondary/50 p-5 sm:p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold">Composition</h2>
                <span className="text-xs font-semibold text-muted-foreground">{isCrousty ? "Recette signature" : "Recette originale"}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
              <div className="mt-5 rounded-xl bg-background/70 px-4 py-3 text-xs font-bold text-muted-foreground">
                Les recettes affichées correspondent au menu du restaurant. Pour voir les bases, mix-ins, protéines, sauces et toppings disponibles, consulte la section personnalisation de la page Commande.
              </div>
            </div>

            {/* Desktop CTA */}
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

      {/* Mobile sticky CTA — always visible for faster order flow */}
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
