import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import { ArrowRight, BriefcaseBusiness, MapPin, Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/logo.png";
import heroPoke from "@/assets/hero-poke.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pokénball — Poké bowls & Crusty Chicken" },
      {
        name: "description",
        content:
          "Pokénball : poké bowls frais, généreux et Crusty Chicken croustillant. Découvrez nos recettes maison et commandez en ligne.",
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
    <div className="min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link to="/" onClick={goHome} className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Pokénball">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,.25)] sm:h-14 sm:w-14">
              <img src={logo} alt="Logo Pokénball" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 text-white">
              <strong className="block truncate text-[15px] font-black leading-none tracking-tight sm:text-lg">Pokénball</strong>
              <span className="mt-1 block truncate text-[7px] font-bold uppercase tracking-[0.18em] text-white/65 sm:text-[8px]">Poké Bowls · Crusty Chicken</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex">
            <a href="#carte" className="hover:text-[#d7ff45]">{t("nav.menu")}</a>
            <a href="#composer" className="hover:text-[#d7ff45]">{t("nav.create")}</a>
            <a href="#infos" className="hover:text-[#d7ff45]">{t("nav.info")}</a>
            <Link to="/contact" className="hover:text-[#d7ff45]">{t("nav.contact")}</Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/recrutement" className="hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white sm:block">
              {t("nav.recruit")}
            </Link>
            <div className="hidden rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur md:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button key={lang} type="button" onClick={() => setLanguage(lang)} className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language === lang ? "bg-white text-black" : "text-white/60"}`}>
                  {lang}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setIsCartOpen(true)} aria-label="Cart" className="relative rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">{cartCount}</span>
              )}
            </button>
            <button type="button" aria-label="Menu" onClick={() => setMobileOpen((o) => !o)} className="rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur md:hidden">
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mx-3 max-h-[calc(100vh-88px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#10251f]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              <a onClick={closeMobile} href="#carte" className="rounded-2xl px-4 py-3 text-sm font-black text-white">{t("nav.menu")}</a>
              <a onClick={closeMobile} href="#composer" className="rounded-2xl px-4 py-3 text-sm font-black text-white">{t("nav.create")}</a>
              <a onClick={closeMobile} href="#infos" className="rounded-2xl px-4 py-3 text-sm font-black text-white">{t("nav.info")}</a>
              <Link onClick={closeMobile} to="/contact" className="rounded-2xl px-4 py-3 text-sm font-black text-white">{t("nav.contact")}</Link>
              <Link onClick={closeMobile} to="/recrutement" className="rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white">{t("nav.recruit")}</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate min-h-[720px] overflow-hidden bg-[#10251f] text-white sm:min-h-[780px]">
          <motion.div style={{ y: heroImageY }} className="absolute -inset-y-[105px] -z-20">
            <img src={heroPoke} alt="" aria-hidden="true" className="h-full w-full object-cover object-center opacity-58 scale-[1.06]" />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,23,19,.94)_0%,rgba(8,23,19,.72)_38%,rgba(8,23,19,.18)_72%,rgba(8,23,19,.42)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_55%,rgba(255,112,95,.18),transparent_25%),radial-gradient(circle_at_28%_45%,rgba(215,255,69,.08),transparent_28%)]" />

          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 pb-12 pt-28 sm:min-h-[780px] sm:px-6 lg:px-10 lg:pt-24">
            <motion.div style={{ y: heroContentY }} className="grid w-full items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/60">FRESH FOOD · GOOD MOOD</p>
                  <span className="rounded-full bg-[#d7ff45] px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#17231f]">80% Poké · 20% Crusty</span>
                </div>
                <h1 className="mt-5 text-[3.25rem] font-black leading-[.86] tracking-[-0.065em] sm:text-6xl lg:text-[5.7rem]">
                  <span className="block">Poké Bowls</span>
                  <span className="mt-3 block text-[1.15rem] tracking-[0.01em] text-white/70 sm:text-2xl lg:text-3xl"><span className="text-[#ff705f]">+</span> Crusty Chicken en signature</span>
                </h1>
                <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                  Des poké bowls frais, généreux et colorés. Et pour les plus gourmands, notre Crusty Chicken fait la différence.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/commander" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-7 py-3.5 text-sm font-black shadow-[0_20px_50px_-18px_rgba(255,112,95,.95)] transition hover:-translate-y-0.5 hover:brightness-110">
                    Commander <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#carte" className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-black backdrop-blur-md transition hover:bg-white/15">
                    Voir nos plats <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-black uppercase tracking-[0.16em] text-white/65">
                  <span>✦ Ingrédients frais</span>
                  <span>♡ Recettes maison</span>
                  <span>⌁ Livraison rapide</span>
                </div>
              </div>

              <Reveal delay={0.06}>
                <div className="relative mx-auto w-full max-w-[760px]">
                  <div className="absolute -inset-8 rounded-[60px] bg-[#d7ff45]/10 blur-3xl" />
                  <div className="relative grid items-end gap-3 sm:grid-cols-[1.15fr_.85fr]">
                    <Link to="/product/$productId" params={{ productId: "sweet-chicken" }} className="group relative overflow-hidden rounded-[34px] border border-white/15 bg-[#eee8dc] shadow-[0_45px_100px_-40px_rgba(0,0,0,.95)]">
                      <div className="relative aspect-[.88] overflow-hidden">
                        <img src={bowlChicken} alt="Sweet Chicken" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.78)_100%)]" />
                        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#10251f]">Pokénball · Maison</div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/65">Le classique généreux</p>
                          <h2 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Sweet Chicken</h2>
                        </div>
                      </div>
                    </Link>

                    <div className="grid gap-3">
                      <Link to="/product/$productId" params={{ productId: "scampis-royaux" }} className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]">
                        <div className="relative aspect-[1.08] overflow-hidden">
                          <img src={bowlScampi} alt="Scampis Royal" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.72)_100%)]" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/65">Pokéball · Premium</p>
                            <h3 className="mt-1 text-xl font-black">Scampis Royal</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to="/product/$productId" params={{ productId: "crousty-chicken-curry" }} className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]">
                        <div className="relative aspect-[1.08] overflow-hidden">
                          <img src={bowlCrousty} alt="Crusty Chicken Curry" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,.78)_100%)]" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/65">Crusty Chicken · Maison</p>
                            <h3 className="mt-1 text-xl font-black">Curry croustillant</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3 rounded-[22px] border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#d7ff45]">Notre ADN · Poké Bowls d’abord · Crusty Chicken en signature</span>
                      <ArrowRight className="h-4 w-4 text-white/60" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[8px] font-black uppercase tracking-[0.28em] text-white/55 sm:flex">
            <span>Découvrir nos plats</span>
            <span className="h-8 w-px bg-white/40" />
          </div>
        </section>

        <section className="overflow-hidden bg-[#d7ff45] py-3">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-6 text-[9px] font-black uppercase tracking-[0.12em] sm:text-xs">Pokénball · Cuisine fraîche · Visé <span className="mx-6">✦</span></span>
            ))}
          </motion.div>
        </section>

        <section id="carte" className="scroll-mt-10 bg-[#fffaf0] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">{t("menu.eyebrow")}</p>
                <h2 className="mt-3 max-w-2xl text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                  <span className="block">{t("menu.title1")}</span>
                  <span className="mt-0.5 block text-[#ff705f]">Poké Bowls · nos recettes maison</span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-sm leading-6 text-[#68756f]">{t("menu.desc")}</p>
                <Link to="/commander" className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]">
                  {t("menu.order")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mb-7 flex flex-wrap gap-2">
            {["Guacamole", "Avocat", "Mangue", "Feta", "Edamame", "Maïs", "Tomates", "Oignons", "Sésame", "Nachos"].map((item, i) => {
              const tone = i % 4;
              return (
                <span key={item} className={
                  tone === 0 ? "rounded-full border border-[#ff705f]/20 bg-[#fff0ec] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#c94e3f]" :
                  tone === 1 ? "rounded-full border border-[#d7ff45]/60 bg-[#f2ffd0] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#536018]" :
                  tone === 2 ? "rounded-full border border-[#f3c46b]/50 bg-[#fff4dc] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#9a650f]" :
                  "rounded-full border border-[#79cfc0]/40 bg-[#e9fbf7] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#277d70]"
                }>{item}</span>
              );
            })}
          </div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-[#e7dfd1]" />
            <span className="rounded-full bg-[#17231f] px-4 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white">Tous nos bowls · toppings disponibles</span>
            <span className="h-px flex-1 bg-[#e7dfd1]" />
          </div>
          <p className="mb-5 max-w-3xl text-sm leading-6 text-[#68756f]">Chaque recette suit une direction photo cohérente : lumière naturelle maîtrisée, ingrédients généreux, textures réalistes et présentation premium. Lorsqu’il y a du riz, il est présenté en grains longs, fins et bien séparés, façon basmati.</p>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedBowls.map((bowl, index) => (
              <Reveal key={bowl.id} delay={index * 0.03}>
                <Link
                  to="/product/$productId"
                  params={{ productId: bowl.id }}
                  className={`group block h-full overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_-32px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-1 ${bowl.id.startsWith("crousty-") ? "ring-2 ring-[#d7ff45] ring-offset-2" : ""}`}
                >
                  <div className="relative aspect-[1.18] overflow-hidden bg-[#ece8dc]">
                    <DishImage dishId={bowl.id} alt={bowl.name} className="h-full w-full transition duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_35%,rgba(0,0,0,.5)_100%)]" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em]">{bowl.tag}</span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black">€ {bowl.price.toFixed(2)}</span>
                  </div>
                  <div className="flex h-full flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 flex-1 break-words text-[16px] font-black leading-tight sm:text-xl">{bowl.name}</h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f1ea] transition group-hover:bg-[#ff705f] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-3 text-[13px] leading-5 text-[#68756f]">{bowl.desc}</p>
                    <div className="mt-auto pt-5 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff705f]">{t("menu.customize")} · {t("menu.order")} →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#fffaf0_0%,#f5f0e7_55%,#fff3ee_100%)] px-5 py-14 text-[#17231f] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ff705f]">Pokénball · Maison</p>
                <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
                  Le croustillant
                </h2>
                <h3 className="mt-1 text-[1.9rem] font-black uppercase leading-none tracking-tight text-[#ff705f] sm:text-4xl lg:text-5xl">
                  qui fait la différence
                </h3>
                <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.08em] sm:text-sm">
                  <span>✦ Fait maison</span>
                  <span className="text-[#ff705f]">•</span>
                  <span>🔥 Ultra croustillant</span>
                  <span className="text-[#ff705f]">•</span>
                  <span>♡ Frais</span>
                </div>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {[
                {
                  id: "crousty-chicken-sauce-blanche",
                  name: "Crousty Chicken · Sauce blanche",
                  label: "Riz basmati",
                  desc: "Riz basmati aux grains longs et séparés, poulet croustillant, sauce blanche maison et oignons frits.",
                },
                {
                  id: "crousty-chicken-curry",
                  name: "Crousty Chicken · Curry",
                  label: "Riz basmati · curry",
                  desc: "Riz au curry onctueux, poulet croustillant, sauce curry maison et oignons frits.",
                },
              ].map((item, index) => (
                <Reveal key={item.id} delay={index * 0.06}>
                  <Link
                    to="/product/$productId"
                    params={{ productId: item.id }}
                    className="group block overflow-hidden rounded-[30px] border border-[#8d5a18]/15 bg-white shadow-[0_22px_60px_-35px_rgba(55,30,10,.55)] transition duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[1.22] overflow-hidden bg-[#eee8dc]">
                      <DishImage
                        dishId={item.id}
                        alt={item.name}
                        className="h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                        <span className="bg-[#17231f] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-white">
                          {item.label}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black">11€</span>
                      </div>
                    </div>
                    <div className="p-5 text-center sm:p-7">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ff705f]">Crousty Chicken</p>
                      <h3 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">{item.name.split(" · ")[1]}</h3>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#68756f]">{item.desc}</p>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#17231f] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#ff705f]">
                        Découvrir le plat <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-7 text-center">
                <span className="inline-flex items-center gap-3 bg-[#ff705f] px-6 py-3 text-white shadow-lg">
                  <span className="text-[11px] font-black uppercase tracking-[0.14em]">Menu étudiant</span>
                  <span className="text-xl font-black">11€</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.1em]">· boisson incluse</span>
                </span>
                <p className="mt-3 text-xs font-bold text-[#68756f]">Sauce extra +1€ · Viens goûter la différence.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="composer" className="scroll-mt-10 bg-[#10251f] px-5 py-12 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]">{t("journey.eyebrow")}</p>
              <h2 className="mt-3 max-w-3xl text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                <span className="block">{t("journey.title1")}</span>
                <span className="mt-0.5 block text-white/40">{t("journey.title2")}</span>
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "journey.s1", "journey.s1d"],
                ["02", "journey.s2", "journey.s2d"],
                ["03", "journey.s3", "journey.s3d"],
                ["04", "journey.s4", "journey.s4d"],
              ].map(([num, titleKey, descKey], index) => (
                <Reveal key={num} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <span className="text-3xl font-black text-[#ff705f]">{num}</span>
                    <h3 className="mt-5 text-lg font-black">{t(titleKey)}</h3>
                    <p className="mt-2 text-sm leading-5 text-white/55">{t(descKey)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]">{t("journey.ready")}</p>
                <p className="mt-1 text-sm text-white/55">{t("journey.ready_desc")}</p>
              </div>
              <Link to="/commander" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3 text-sm font-black">
                {t("journey.cta")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[24px] bg-white p-5 shadow-[0_15px_50px_-35px_rgba(0,0,0,.3)] sm:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">{t("menu.drinks")}</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">{t("menu.drinks_title")}</h3>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {drinks.map((drink) => (
                    <Link key={drink.id} to="/commander" className="flex items-center justify-between gap-2 rounded-xl bg-[#f5f4ee] px-4 py-3 hover:bg-[#d7ff45]">
                      <span className="min-w-0 break-words text-sm font-bold">{drink.name}</span>
                      <span className="shrink-0 text-xs font-black">€ {drink.price.toFixed(2)}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] bg-[#ff705f] p-5 text-white sm:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">{t("menu.desserts")}</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">{t("menu.desserts_title")}</h3>
                <div className="mt-7 flex items-center gap-4">
                  <img src={dessert} alt="" loading="lazy" className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm text-white/75">{desserts.map((item) => item.name).join(" · ")}</p>
                    <Link to="/commander" className="mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4">{t("menu.desserts_cta")} →</Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <Link to="/recrutement" className="group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition hover:-translate-y-1 sm:rounded-[30px] sm:p-8">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]">
                <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                {t("recruit.banner_tag")}
              </div>
              <h2 className="mt-2 break-words text-balance text-xl font-black leading-snug sm:text-3xl">{t("recruit.banner_title")}</h2>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </section>

        <section id="infos" className="scroll-mt-10 bg-[#ece9df] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">{t("info.eyebrow")}</p>
              <h2 className="mt-3 text-[1.625rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                <span className="block">{t("info.title1")}</span>
                <span className="mt-0.5 block text-[#7d8b83]">{t("info.title2")}</span>
              </h2>
              <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]"><MapPin className="h-5 w-5" /></span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">{t("info.address")}</span>
                    <span className="mt-1 block break-words text-sm font-bold">Av. du Pont 12, 4600 Visé, Belgique</span>
                  </span>
                </a>
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">☎</span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">{t("info.phone")}</span>
                    <span className="mt-1 block text-sm font-bold">+32 491 28 14 56</span>
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[24px] bg-[#10251f] p-5 text-white sm:p-7">
                <h3 className="text-2xl font-black">{t("info.hours")}</h3>
                <div className="mt-5 divide-y divide-white/10">
                  {HOUR_ROWS.map(([dayKey, value]) => (
                    <div key={dayKey} className="flex items-center justify-between gap-3 py-3 text-sm">
                      <span className="min-w-0 font-bold text-white/65">{t(dayKey)}</span>
                      <span className={`shrink-0 text-right font-black ${value === "closed" ? "text-[#ff705f]" : ""}`}>
                        {value === "closed" ? t("info.closed") : value}
                      </span>
                    </div>
                  ))}
                </div>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45]">
                  {t("info.maps")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1a16] px-5 py-8 pb-24 text-white sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Pokénball" className="h-11 w-auto max-w-[170px] object-contain object-left" />
            <div>
              <div className="font-black">Pokénball</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">Poké Bowls · Crusty Chicken</div>
            </div>
          </Link>
          <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/45">
            <a href="#carte">{t("nav.menu")}</a>
            <Link to="/commander">{t("nav.order")}</Link>
            <Link to="/recrutement">{t("footer.recruit")}</Link>
            <Link to="/contact">{t("nav.contact")}</Link>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/25">© {new Date().getFullYear()} Pokénball</div>
        </div>
      </footer>

      <Link to="/commander" className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white shadow-xl md:hidden">
        {t("hero.order")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
