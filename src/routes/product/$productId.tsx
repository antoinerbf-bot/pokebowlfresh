import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { bowls, allToppings } from "../../lib/data";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import logo from "@/assets/logo.png";
import { useStock } from "../../hooks/useStock";
import { toppingKey } from "../../lib/stock";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});

function ProductPage() {
  const { productId } = Route.useParams();
  const product = bowls.find((b) => b.id === productId);
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
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

  const handleToppingChange = (topping: string, checked: boolean) => {
    if (!available(toppingKey(topping))) return;
    if (checked) {
      if (selectedToppings.length < 5) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    } else {
      setSelectedToppings(selectedToppings.filter((x) => x !== topping));
    }
  };

  const handleAddToCart = () => {
    if (!productOk) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      toppings: selectedToppings.filter((tp) => available(toppingKey(tp))),
      image: product.image,
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
          <div className="relative flex max-h-[420px] overflow-hidden rounded-3xl shadow-lift sm:max-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full object-cover ${!productOk ? "grayscale" : ""}`}
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

            {!productOk && (
              <div className="mb-6 rounded-2xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-bold text-coral">
                {t("product.unavailable")}
              </div>
            )}

            <div className="flex flex-1 flex-col rounded-2xl border border-border/50 bg-secondary/50 p-4 sm:p-6">
              <div className="mb-4 flex items-baseline justify-between gap-2">
                <h2 className="text-lg font-bold">{t("toppings.title")}</h2>
                <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                  {selectedToppings.length}/5 · {t("toppings.max")}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3">
                {allToppings.map((topping) => {
                  const toppingOk = available(toppingKey(topping));
                  const isChecked = selectedToppings.includes(topping);
                  const isDisabled =
                    !toppingOk || (!isChecked && selectedToppings.length >= 5) || !productOk;
                  return (
                    <div key={topping} className="flex min-h-[28px] items-center space-x-2">
                      <Checkbox
                        id={topping}
                        checked={isChecked}
                        onCheckedChange={(checked) => handleToppingChange(topping, checked as boolean)}
                        disabled={isDisabled}
                      />
                      <label
                        htmlFor={topping}
                        className={`text-sm font-medium leading-snug ${
                          isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                        }`}
                      >
                        {topping}
                        {!toppingOk && (
                          <span className="ml-1 text-[10px] text-coral">({t("cmd.sold_out")})</span>
                        )}
                      </label>
                    </div>
                  );
                })}
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
                {productOk ? t("menu.add_to_cart") : t("product.out_of_stock")}
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
            ? `${t("menu.add_to_cart")} · € ${product.price.toFixed(2)}`
            : t("product.out_of_stock")}
        </Button>
      </div>
    </div>
  );
}
