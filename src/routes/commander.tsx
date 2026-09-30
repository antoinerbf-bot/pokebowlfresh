import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { useStock } from "../hooks/useStock";
import { useTranslation } from "../context/I18nContext";

export const Route = createFileRoute("/commander")({ component: CommanderPage });

function CommanderPage() {
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const quickAdd = (item: { id: string; name: string; price: number; image?: string }) => {
    if (!available(item.id)) return;
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      toppings: [],
      image: item.image || dessert,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Poke N Bowl — Accueil">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain" />
            </span>
            <span className="truncate text-base font-black sm:text-lg">Poke N Bowl</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="hidden rounded-full border border-black/10 bg-white p-1 sm:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${
                    language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              to="/"
              className="hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider sm:flex"
            >
              {t("nav.home")}
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full bg-[#10251f] p-3 text-white"
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

      <main>
        <section className="bg-[#10251f] px-5 py-12 text-white sm:px-8 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> {t("cmd.back")}
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <img src={logo} alt="Poke N Bowl" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white">Poke N Bowl</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">Visé · Fresh food</p>
              </div>
            </div>
            <div className="mt-8 max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]">
                {t("cmd.eyebrow")}
              </p>
              {/* Short titles avoid mid-word breaks on mobile */}
              <h1 className="mt-3 text-[clamp(2.25rem,9vw,4.5rem)] font-black leading-[1.08] tracking-[-0.02em]">
                <span className="block">{t("cmd.title1")}</span>
                <span className="mt-1 block text-white/40">{t("cmd.title2")}</span>
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-6 text-white/60 sm:text-base sm:leading-7">
                {t("cmd.desc")}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">
                {t("cmd.bowls_eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {t("cmd.bowls_title")}
              </h2>
            </div>
            <span className="hidden max-w-[200px] text-right text-sm text-[#7a847e] sm:block">
              {t("cmd.bowls_hint")}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {bowls.map((bowl, i) => {
              const ok = available(bowl.id);
              return (
                <motion.div
                  key={bowl.id}
                  className={`overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_-38px_rgba(0,0,0,.4)] sm:rounded-[28px] ${
                    !ok ? "opacity-55" : ""
                  }`}
                >
                  {ok ? (
                    <Link to="/product/$productId" params={{ productId: bowl.id }} className="group block">
                      <BowlCard bowl={bowl} ok composeLabel={t("cmd.compose")} soldOut={t("cmd.sold_out")} />
                    </Link>
                  ) : (
                    <div className="block cursor-not-allowed">
                      <BowlCard bowl={bowl} ok={false} composeLabel={t("cmd.compose")} soldOut={t("cmd.sold_out")} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-5 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-6">
            <div className="rounded-[24px] bg-white p-6 sm:rounded-[28px] sm:p-8">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="h-5 w-5 text-[#ff705f]" />
                <h2 className="text-xl font-black sm:text-2xl">{t("cmd.drinks")}</h2>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {drinks.map((drink) => {
                  const ok = available(drink.id);
                  return (
                    <button
                      key={drink.id}
                      type="button"
                      disabled={!ok}
                      onClick={() => quickAdd(drink)}
                      className={`flex min-h-[48px] items-center justify-between gap-2 rounded-2xl px-4 py-3 text-left ${
                        ok
                          ? "bg-[#f5f4ee] hover:bg-[#d7ff45] active:scale-[0.99]"
                          : "cursor-not-allowed bg-[#f0f0ea] opacity-60"
                      }`}
                    >
                      <span className="min-w-0 break-words text-sm font-bold">{drink.name}</span>
                      <span className="shrink-0 text-xs font-black">
                        {ok ? `€ ${drink.price.toFixed(2)}` : t("cmd.sold_out")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="rounded-[24px] bg-[#ff705f] p-6 text-white sm:rounded-[28px] sm:p-8">
              <h2 className="text-xl font-black sm:text-2xl">{t("cmd.desserts")}</h2>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <img
                  src={dessert}
                  alt=""
                  className="h-24 w-full rounded-2xl object-cover sm:h-28 sm:w-28 sm:shrink-0"
                />
                <div className="flex-1 space-y-2">
                  {desserts.map((d) => {
                    const ok = available(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        disabled={!ok}
                        onClick={() => quickAdd(d)}
                        className={`flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm ${
                          ok
                            ? "bg-white/10 hover:bg-white/20 active:scale-[0.99]"
                            : "cursor-not-allowed bg-white/5 opacity-60"
                        }`}
                      >
                        <span className="min-w-0 break-words">{d.name}</span>
                        <span className="shrink-0 font-black">
                          {ok ? `€ ${d.price.toFixed(2)}` : t("cmd.sold_out")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky cart bar when items present */}
      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
            {t("cart.title")} ({count}) →
          </button>
        </div>
      )}
    </div>
  );
}

function BowlCard({
  bowl,
  ok,
  composeLabel,
  soldOut,
}: {
  bowl: (typeof bowls)[number];
  ok: boolean;
  composeLabel: string;
  soldOut: string;
}) {
  return (
    <>
      <div className="relative aspect-[1.48] overflow-hidden">
        <DishImage
          dishId={bowl.id}
          alt={bowl.name}
          className={`h-full w-full transition duration-700 ${ok ? "group-hover:scale-105" : "grayscale"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider sm:left-4 sm:top-4 sm:text-[9px]">
          {ok ? bowl.tag : soldOut}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-2.5 py-1 text-xs font-black sm:bottom-4 sm:right-4 sm:px-3 sm:py-1.5 sm:text-sm">
          € {bowl.price.toFixed(2)}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 break-words text-[17px] font-black leading-[1.2] sm:text-xl">
            {bowl.name}
          </h3>
          {ok && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f1ea] group-hover:bg-[#ff705f] group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#758079] sm:line-clamp-3">{bowl.desc}</p>
        <div
          className={`mt-4 text-[9px] font-black uppercase tracking-[0.14em] ${
            ok ? "text-[#ff705f]" : "text-[#9aa39c]"
          }`}
        >
          {ok ? composeLabel : soldOut}
        </div>
      </div>
    </>
  );
}
