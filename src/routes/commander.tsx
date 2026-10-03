import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShoppingBag, UtensilsCrossed, Sparkles } from "lucide-react";
import * as React from "react";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import {
  bowls,
  drinks,
  desserts,
  customBases,
  customMixIns,
  customProteins,
  customSauces,
  toppings,
} from "../lib/data";
import { DishImage } from "../components/DishImage";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { useStock } from "../hooks/useStock";
import { useTranslation } from "../context/I18nContext";

export const Route = createFileRoute("/commander")({ component: CommanderPage });

/* ─── Tag badge styles ───────────────────────────────────────────── */
const TAG_STYLES: Record<string, string> = {
  signature:  "bg-[#10251f] text-[#d7ff45]",
  bestseller: "bg-[#ff705f] text-white",
  premium:    "bg-[#7c4f1a] text-[#ffe9c2]",
  spicy:      "bg-[#c0350f] text-white",
  new:        "bg-[#d7ff45] text-[#10251f]",
};

function CommanderPage() {
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const { available } = useStock();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const displayedBowls = [
    ...bowls.filter((b) => b.id.startsWith("crousty-")),
    ...bowls.filter((b) => !b.id.startsWith("crousty-")),
  ];

  const quickAdd = (item: { id: string; name: string; price: number; image?: string }) => {
    if (!available(item.id)) return;
    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: item.image || dessert,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 transition hover:opacity-95 hover:scale-[1.02] duration-200" aria-label="Poke N Bowl — Accueil">
            <img src={logo} alt="Logo Poke N Bowl" className="h-11 sm:h-14 w-auto object-contain rounded-xl shadow-md border border-white/10" />
          </Link>
          <div className="flex items-center gap-2">
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
              to="/"
              className="hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex"
            >
              {t("nav.home")}
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

      <main>
        {/* ── Hero section ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#10251f] px-5 py-14 text-white sm:px-8 sm:py-20 lg:py-24">
          {/* Déco background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d7ff45]/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-[#ff705f]/8 blur-3xl" />

          <div className="mx-auto max-w-[1200px]">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-white/45 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> {t("cmd.back")}
            </Link>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
                  <img src={logo} alt="Poke N Bowl" className="h-full w-full object-contain" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white">
                    Poke N Bowl
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Visé · Fresh food
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]">
                  {t("cmd.eyebrow")}
                </p>
                <h1 className="mt-2 text-[clamp(2rem,8vw,4rem)] font-black leading-[1.06] tracking-[-0.025em]">
                  <span className="block">{t("cmd.title1")}</span>
                  <span className="block text-white/35">{t("cmd.title2")}</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bowls grid ───────────────────────────────────────── */}
        <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">
                {t("cmd.bowls_eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {t("cmd.bowls_title")}
              </h2>
            </div>
            <p className="hidden max-w-[200px] text-right text-sm text-[#7a847e] sm:block">
              {t("cmd.bowls_hint")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {displayedBowls.map((bowl) => {
              const ok = available(bowl.id);
              const tagStyle = TAG_STYLES[bowl.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";

              return ok ? (
                <Link
                  key={bowl.id}
                  to="/product/$productId"
                  params={{ productId: bowl.id }}
                  className={[
                    "group block overflow-hidden rounded-[28px] bg-white shadow-card transition-all duration-500",
                    "hover:-translate-y-2 hover:shadow-lift",
                    bowl.id.startsWith("crousty-")
                      ? "ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec]"
                      : "",
                  ].join(" ")}
                >
                  <BowlCard bowl={bowl} ok tagStyle={tagStyle} soldOut={t("cmd.sold_out")} />
                </Link>
              ) : (
                <div
                  key={bowl.id}
                  className="block cursor-not-allowed overflow-hidden rounded-[28px] bg-white opacity-55 shadow-card"
                >
                  <BowlCard bowl={bowl} ok={false} tagStyle={tagStyle} soldOut={t("cmd.sold_out")} />
                </div>
              );
            })}
          </div>

          {/* ── Personnalisation rapide ───────────────────────── */}
          <div className="mt-14 overflow-hidden rounded-[28px] bg-[#10251f] sm:mt-16 lg:mt-20">
            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
              <Sparkles className="h-5 w-5 shrink-0 text-[#d7ff45]" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]">
                  {t("cmd.customization_title")}
                </p>
                <p className="mt-0.5 text-sm text-white/55">{t("cmd.customization_note")}</p>
              </div>
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-5">
              {[
                { label: t("cmd.bases"),    items: customBases,    emoji: "🍚" },
                { label: t("cmd.mixins"),   items: customMixIns,   emoji: "🥗" },
                { label: t("cmd.protein"),  items: customProteins, emoji: "🍗" },
                { label: t("cmd.sauces"),   items: customSauces,   emoji: "🍶" },
                { label: t("cmd.toppings"), items: toppings.map((t) => `${t.emoji} ${t.name}`), emoji: "✨" },
              ].map(({ label, items, emoji }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#d7ff45]">
                    <span>{emoji}</span> {label}
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    {items.map((value) => (
                      <p key={value} className="text-[11px] leading-4 text-white/65">
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Boissons + Desserts ───────────────────────────── */}
          <div className="mt-5 grid gap-5 sm:mt-6 lg:grid-cols-2 lg:gap-6">
            {/* Boissons */}
            <div className="overflow-hidden rounded-[24px] bg-white shadow-card sm:rounded-[28px]">
              <div className="flex items-center gap-3 border-b border-black/5 px-6 py-5">
                <UtensilsCrossed className="h-5 w-5 text-[#ff705f]" />
                <h2 className="text-xl font-black sm:text-2xl">{t("cmd.drinks")}</h2>
              </div>
              <div className="grid gap-2 p-5 sm:grid-cols-2 sm:p-6">
                {drinks.map((drink) => {
                  const ok = available(drink.id);
                  return (
                    <button
                      key={drink.id}
                      type="button"
                      disabled={!ok}
                      onClick={() => quickAdd(drink)}
                      className={[
                        "flex min-h-[48px] items-center justify-between gap-2 rounded-2xl px-4 py-3 text-left transition-all duration-200",
                        ok
                          ? "bg-[#f5f4ee] hover:bg-[#d7ff45] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,.15)] active:scale-[0.98]"
                          : "cursor-not-allowed bg-[#f0f0ea] opacity-55",
                      ].join(" ")}
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

            {/* Desserts */}
            <div className="overflow-hidden rounded-[24px] bg-[#ff705f] text-white shadow-card sm:rounded-[28px]">
              <div className="border-b border-white/15 px-6 py-5">
                <h2 className="text-xl font-black sm:text-2xl">{t("cmd.desserts")}</h2>
              </div>
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-6">
                <img
                  src={dessert}
                  alt="Tiramisu maison"
                  className="h-24 w-full rounded-2xl object-cover sm:h-auto sm:w-28 sm:shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col gap-2">
                  {desserts.map((d) => {
                    const ok = available(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        disabled={!ok}
                        onClick={() => quickAdd(d)}
                        className={[
                          "flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all duration-200",
                          ok
                            ? "bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98]"
                            : "cursor-not-allowed bg-white/5 opacity-55",
                        ].join(" ")}
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

      {/* ── Mobile sticky cart bar ──────────────────────────────── */}
      {count > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-xl sm:hidden">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white shadow-glow-coral"
          >
            <ShoppingBag className="h-4 w-4" />
            {t("cart.title")} ({count}) →
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── BowlCard ────────────────────────────────────────────────────── */
function BowlCard({
  bowl,
  ok,
  tagStyle,
  soldOut,
}: {
  bowl: (typeof bowls)[number];
  ok: boolean;
  tagStyle: string;
  soldOut: string;
}) {
  return (
    <>
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8dc]">
        <DishImage
          dishId={bowl.id}
          alt={bowl.name}
          className={`h-full w-full object-cover transition duration-700 ${
            ok ? "group-hover:scale-[1.06]" : "grayscale"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Tag */}
        <span className={`badge-tag absolute left-3 top-3 shadow-card sm:left-4 sm:top-4 ${tagStyle}`}>
          {ok ? bowl.tag : soldOut}
        </span>

        {/* Prix */}
        <span className="absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] sm:bottom-4 sm:right-4">
          € {bowl.price.toFixed(2)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 break-words text-[17px] font-black leading-[1.22] sm:text-xl">
            {bowl.name}
          </h3>
          {ok && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f4ee] transition-colors duration-300 group-hover:bg-[#ff705f] group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#68756f]">{bowl.desc}</p>
        <div
          className={`mt-4 text-[9px] font-black uppercase tracking-[0.16em] ${
            ok ? "text-[#ff705f]" : "text-[#9aa39c]"
          }`}
        >
          {ok ? "Personnaliser → Commander" : soldOut}
        </div>
      </div>
    </>
  );
}
