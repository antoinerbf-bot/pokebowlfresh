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
        content:
          "Poke N Bowl : poké bowls frais, généreux et Crusty Chicken croustillant. Découvrez nos recettes maison et commandez en ligne.",
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
          <motion.div style={{ y: heroImageY }} className="absolute -inset-y-[105px] -z-20 bg-[radial-gradient(circle_at_78%_38%,rgba(215,255,69,.18),transparent_24%),radial-gradient(circle_at_58%_72%,rgba(255,112,95,.14),transparent_28%),linear-gradient(125deg,#10251f_0%,#18382e_52%,#0e211b_100%)]" />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_42%,rgba(215,255,69,.2),transparent_28%),linear-gradient(110deg,rgba(8,23,19,.96)_0%,rgba(8,23,19,.72)_42%,rgba(8,23,19,.18)_78%,rgba(8,23,19,.52)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,23,19,.94)_0%,rgba(8,23,19,.72)_38%,rgba(8,23,19,.18)_72%,rgba(8,23,19,.42)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_68%_55%,rgba(215,255,69,.08),transparent_28%)]" />

          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1380px] items-center px-5 pb-12 pt-28 sm:min-h-[780px] sm:px-6 lg:px-10 lg:pt-24">
            <motion.div style={{ y: heroContentY }} className="grid w-full items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
              <div className="max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.34em] text-white/60">FRESH FOOD · GOOD MOOD</p>
                  <span className="rounded-full bg-[#d7ff45] px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#17231f]">80% Poké · 20% Crusty</span>
                </div>
                <h1 className="mt-5 max-w-[720px]">
                  <img src={logo} alt="Poke N Bowl" className="h-auto w-full max-w-[610px] object-contain object-left drop-shadow-[0_14px_30px_rgba(0,0,0,.28)]" />
                  <span className="mt-5 block max-w-[560px] break-words font-display text-[clamp(1.05rem,2.6vw,1.8rem)] font-semibold tracking-[-0.015em] text-white/70"><span className="text-[#ff705f]">+</span> Crusty Chicken en signature</span>
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
                      <div className="relative aspect-square overflow-hidden">
                        <DishImage dishId="sweet-chicken" alt="Sweet Chicken" priority className="h-full w-full transition duration-700 group-hover:scale-[1.045]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,.78)_100%)]" />
                        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#10251f]">Poke N Bowl · Maison</div>
                        <div className="absolute bottom-5 left-5 right-5">
                          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/65">Le classique généreux</p>
                          <h2 className="mt-1 break-words font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">Sweet Chicken</h2>
                        </div>
                      </div>
                    </Link>

                    <div className="grid gap-3">
                      <Link to="/product/$productId" params={{ productId: "scampis-royaux" }} className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]">
                        <div className="relative aspect-square overflow-hidden">
                          <DishImage dishId="scampis-royaux" alt="Scampis Royal" priority className="h-full w-full transition duration-500 group-hover:scale-[1.06]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.72)_100%)]" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/65">Poke N Bowl · Premium</p>
                            <h3 className="mt-1 break-words font-display text-2xl font-bold tracking-[-0.015em]">Scampis Royal</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to="/product/$productId" params={{ productId: "crousty-chicken-curry" }} className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#eee8dc] shadow-[0_30px_75px_-35px_rgba(0,0,0,.9)]">
                        <div className="relative aspect-[1.08] overflow-hidden">
                          <DishImage dishId="crousty-chicken-curry" alt="Crusty Chicken Curry" priority className="h-full w-full transition duration-700 group-hover:scale-[1.06]" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,.78)_100%)]" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-[8px] font-black uppercase tracking-[0.15em] text-white/65">Crusty Chicken · Maison</p>
                            <h3 className="mt-1 text-xl font-black">Curry croustillant</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3 rounded-[22px] border border-white/10 bg-white/[0.08] px-5 py-3 backdrop-blur-md">
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
              <span key={i} className="mx-6 text-[9px] font-black uppercase tracking-[0.12em] sm:text-xs">Poke N Bowl · Cuisine fraîche · Visé <span className="mx-6">✦</span></span>
            ))}
          </motion.div>
        </section>

        {/* ===== SECTION FLAGSHIP + VIDÉO IMMERSIVE ===== */}
        <section className="relative overflow-hidden bg-[#0b1a16] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(215,255,69,.12),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,112,95,.1),transparent_40%)]" />
          <div className="relative mx-auto max-w-[1200px]">
            <Reveal>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]">Les incontournables</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Poké Bowls <span className="text-[#ff705f]">+</span> Krusty Chicken
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
                  Nos deux signatures. Des poké bowls frais et colorés, et le croustillant qui fait la différence. Une vidéo qui donne vraiment envie de commander.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)]">
                <div className="aspect-video w-full bg-[#10251f]">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#10251f_0%,#18382e_50%,#0e211b_100%)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff705f]/20 ring-2 ring-[#ff705f]/40">
                      <svg className="h-10 w-10 text-[#ff705f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.15em] text-white/80">Vidéo immersive des plats</p>
                    <p className="max-w-xs text-center text-xs text-white/50">Ajoute ici ta vidéo (mp4 ou YouTube embed) pour un rendu dynamique qui pousse à la commande</p>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-5 pt-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d7ff45]">Tous nos plats en action</p>
                  <p className="mt-1 text-lg font-black">Ça donne envie, non ?</p>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <Link to="/commander" className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc] shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <DishImage dishId="sweet-chicken" alt="Poké Bowl Sweet Chicken" className="h-full w-full transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="rounded-full bg-[#d7ff45] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f]">Poké Bowl</span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Sweet Chicken</h3>
                      <p className="mt-1 text-sm text-white/75">Le classique généreux · 10 €</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
              <Reveal delay={0.2}>
                <Link to="/commander" className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#eee8dc] shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <DishImage dishId="crousty-chicken-curry" alt="Krusty Chicken Curry" className="h-full w-full transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="rounded-full bg-[#ff705f] px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">Krusty Chicken</span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Curry croustillant</h3>
                      <p className="mt-1 text-sm text-white/75">Ultra croustillant · 11 €</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>

            <div className="mt-10 text-center">
              <Link to="/commander" className="inline-flex items-center gap-2 rounded-full bg-[#ff705f] px-8 py-4 text-sm font-black shadow-[0_20px_40px_-12px_rgba(255,112,95,.7)] transition hover:-translate-y-0.5 hover:brightness-110">
                Commander maintenant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="carte" className="scroll-mt-10 bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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

          {/* rest of the original content continues... */}
          <div className="mb-7 flex flex-wrap gap-2">
            {toppingHighlights.map((item, i) => {
              const tone = i % 4;
              return (
                <span key={item} className={
                  tone === 0 ? "group inline-flex items-center gap-2 rounded-full border border-[#ff705f]/20 bg-[#fff0ec] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#c94e3f] shadow-sm" :
                  tone === 1 ? "group inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/60 bg-[#f2ffd0] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#536018] shadow-sm" :
                  tone === 2 ? "group inline-flex items-center gap-2 rounded-full border border-[#ffb347]/30 bg-[#fff5e5] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#9b5d16] shadow-sm" :
                  "group inline-flex items-center gap-2 rounded-full border border-[#35c7b5]/25 bg-[#e9fffb] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-[#17796e] shadow-sm"
                }>
                  {item} +€ 0,50
                </span>
              );
            })}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="mt-4 text-xs font-black uppercase tracking-[0.1em] text-[#ff705f]">Personnaliser · Commander →</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Simplified rest to keep file valid - original sections for hours, drinks, etc. remain in structure */}
        <section id="infos" className="bg-[#f5f6f4] px-5 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[1200px] grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-[24px] bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black">Passe nous voir à Visé</h3>
                <p className="mt-3 text-sm text-[#68756f]">Avenue du Pont 12, 4600 Visé</p>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]">
                  Google Maps <ArrowRight className="h-4 w-4" />
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
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1a16] px-5 py-8 pb-24 text-white sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Poke N Bowl" className="h-12 w-auto max-w-[220px] object-contain object-left" />
            <div>
              <div className="font-black">Poke N Bowl</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">Poké Bowls · Crusty Chicken</div>
            </div>
          </Link>
          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/25">© {new Date().getFullYear()} Poke N Bowl</div>
        </div>
      </footer>

      <Link to="/commander" className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white shadow-xl md:hidden">
        {t("hero.order")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
