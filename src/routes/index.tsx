import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { ArrowRight, BriefcaseBusiness, MapPin, Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/logo-poke-n-bowl.svg";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts, toppingMeta } from "../lib/data";
import { DishImage } from "../components/DishImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl — Poké bowls & Crusty Chicken" },
      {
        name: "description",
        content: "Poke N Bowl : poké bowls frais, généreux et Crusty Chicken croustillant. Découvrez nos recettes maison et commandez en ligne.",
      },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
const PHONE = "+32491281456";

const HOUR_ROWS = [
  ["info.day.mon", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.tue", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.wed", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.thu", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.fri", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.sat", "18:00 – 21:00"],
  ["info.day.sun", "closed"],
] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const { t, language, setLanguage } = useTranslation();
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 800], [0, 105]);
  const heroContentY = useTransform(scrollY, [0, 800], [0, -34]);
  const { items, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const displayedBowls = [...bowls.filter((b) => !b.id.startsWith("crousty-")), ...bowls.filter((b) => b.id.startsWith("crousty-"))];
  const toppingHighlights = ["Oignons frits", "Sésame seeds", "Noix de cajou", "Nachos", "Flocons-Chili", "Wazabi"];
  const closeMobile = () => setMobileOpen(false);
  const goHome = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  React.useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    reset();
    const frame = window.requestAnimationFrame(reset);
    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previous;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f6f4] text-[#17231f]">
      <CartDrawer />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" onClick={goHome} className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Poke N Bowl">
            <span className="flex h-14 w-[190px] shrink-0 items-center overflow-hidden sm:h-16 sm:w-[220px]">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain object-left drop-shadow-[0_8px_24px_rgba(0,0,0,.28)]" />
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex">
            <a href="#carte" className="hover:text-[#d7ff45]">{t("nav.menu")}</a>
            <a href="#composer" className="hover:text-[#d7ff45]">{t("nav.create")}</a>
            <a href="#infos" className="hover:text-[#d7ff45]">{t("nav.info")}</a>
            <Link to="/contact" className="hover:text-[#d7ff45]">{t("nav.contact")}</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/recrutement" className="hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white sm:block">{t("nav.recruit")}</Link>
            <div className="hidden rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur md:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button key={lang} type="button" onClick={() => setLanguage(lang)} className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language === lang ? "bg-white text-black" : "text-white/60"}`}>{lang}</button>
              ))}
            </div>
            <button type="button" onClick={() => setIsCartOpen(true)} aria-label="Cart" className="relative rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">{cartCount}</span>}
            </button>
            <button type="button" aria-label="Menu" onClick={() => setMobileOpen((o) => !o)} className="rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur md:hidden">
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#10251f] text-white sm:min-h-[780px]">
          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 pb-12 pt-28 sm:min-h-[780px] sm:px-6 lg:px-10 lg:pt-24">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/60">FRESH FOOD · GOOD MOOD</p>
                  <span className="rounded-full bg-[#d7ff45] px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#17231f]">80% Poké · 20% Crusty</span>
                </div>
                <h1 className="mt-5 max-w-[720px]">
                  <img src={logo} alt="Poke N Bowl" className="h-auto w-full max-w-[610px] object-contain object-left" />
                  <span className="mt-5 block font-display text-[clamp(1.05rem,2.6vw,1.8rem)] font-semibold text-white/70"><span className="text-[#ff705f]">+</span> Crusty Chicken en signature</span>
                </h1>
                <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">Des poké bowls frais, généreux et colorés. Et pour les plus gourmands, notre Crusty Chicken fait la différence.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/commander" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-7 py-3.5 text-sm font-black">Commander <ArrowRight className="h-4 w-4" /></Link>
                  <a href="#carte" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-black">Voir nos plats</a>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[760px]">
                <div className="grid items-end gap-3 sm:grid-cols-[1.15fr_.85fr]">
                  <Link to="/product/$productId" params={{ productId: "sweet-chicken" }} className="group relative overflow-hidden rounded-[34px] border border-white/15 bg-[#eee8dc]">
                    <div className="relative aspect-square overflow-hidden">
                      <DishImage dishId="sweet-chicken" alt="Sweet Chicken" priority className="h-full w-full" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.78)_100%)]" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/65">Le classique généreux</p>
                        <h2 className="mt-1 font-display text-3xl font-bold sm:text-4xl">Sweet Chicken</h2>
                      </div>
                    </div>
                  </Link>
                  <div className="grid gap-3">
                    <Link to="/product/$productId" params={{ productId: "crousty-chicken-curry" }} className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc]">
                      <div className="relative aspect-[1.08] overflow-hidden">
                        <DishImage dishId="crousty-chicken-curry" alt="Crusty Chicken" priority className="h-full w-full" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,.78)_100%)]" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/65">Krusty Chicken</p>
                          <h3 className="mt-1 text-xl font-black">Curry croustillant</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#d7ff45] py-3">
          <div className="flex w-max whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-6 text-[9px] font-black uppercase tracking-[0.12em] sm:text-xs">Poke N Bowl · Cuisine fraîche · Visé <span className="mx-6">✦</span></span>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0b1a16] px-5 py-16 text-white sm:px-6 sm:py-20">
          <div className="relative mx-auto max-w-[1200px]">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]">Les signatures</p>
              <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl lg:text-5xl">Poké Bowls <span className="text-[#ff705f]">+</span> Krusty Chicken</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">Deux univers, une seule exigence : des produits frais, généreux et qui donnent vraiment envie de commander.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <Link to="/product/$productId" params={{ productId: "sweet-chicken" }} className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <DishImage dishId="sweet-chicken" alt="Sweet Chicken" className="h-full w-full transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5"><span className="rounded-full bg-[#d7ff45] px-3 py-1.5 text-[9px] font-black uppercase text-[#10251f]">Poké Bowl</span></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Sweet Chicken</h3>
                    <p className="mt-1 text-sm text-white/75">Le classique généreux · 10 €</p>
                  </div>
                </div>
              </Link>
              <Link to="/product/$productId" params={{ productId: "crousty-chicken-curry" }} className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <DishImage dishId="crousty-chicken-curry" alt="Krusty Chicken" className="h-full w-full transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5"><span className="rounded-full bg-[#ff705f] px-3 py-1.5 text-[9px] font-black uppercase text-white">Krusty Chicken</span></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Curry croustillant</h3>
                    <p className="mt-1 text-sm text-white/75">Ultra croustillant · 11 €</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-10 text-center">
              <Link to="/commander" className="inline-flex items-center gap-2 rounded-full bg-[#ff705f] px-8 py-4 text-sm font-black">Voir toute la carte <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <section id="carte" className="scroll-mt-10 bg-white px-5 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">{t("menu.eyebrow")}</p>
              <h2 className="mt-3 text-[1.625rem] font-black sm:text-3xl lg:text-4xl">
                <span className="block">{t("menu.title1")}</span>
                <span className="mt-0.5 block text-[#ff705f]">Poké Bowls · nos recettes maison</span>
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedBowls.map((bowl) => (
              <Link key={bowl.id} to="/product/$productId" params={{ productId: bowl.id }} className="group overflow-hidden rounded-[24px] border border-[#e8ebe6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f1e9]">
                  <DishImage dishId={bowl.id} alt={bowl.name} className="h-full w-full transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.12em] text-[#ff705f]">{bowl.tag}</span>
                      <h3 className="mt-1 font-display text-xl font-bold">{bowl.name}</h3>
                    </div>
                    <span className="shrink-0 font-black">€ {bowl.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-[#68756f]">{bowl.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="infos" className="bg-[#f5f6f4] px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[1200px] grid gap-8 md:grid-cols-2">
            <div className="rounded-[24px] bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black">Passe nous voir à Visé</h3>
              <p className="mt-3 text-sm text-[#68756f]">Avenue du Pont 12, 4600 Visé</p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]">Google Maps <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="rounded-[24px] bg-[#10251f] p-5 text-white sm:p-7">
              <h3 className="text-2xl font-black">{t("info.hours")}</h3>
              <div className="mt-5 divide-y divide-white/10">
                {HOUR_ROWS.map(([dayKey, value]) => (
                  <div key={dayKey} className="flex items-center justify-between gap-3 py-3 text-sm">
                    <span className="font-bold text-white/65">{t(dayKey)}</span>
                    <span className={`font-black ${value === "closed" ? "text-[#ff705f]" : ""}`}>{value === "closed" ? t("info.closed") : value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0b1a16] px-5 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-black">Poke N Bowl · Poké Bowls · Crusty Chicken</div>
          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/25">© {new Date().getFullYear()} Poke N Bowl</div>
        </div>
      </footer>
      <Link to="/commander" className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white shadow-xl md:hidden">
        {t("hero.order")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
