import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Menu,
  ShoppingBag,
  X,
  Phone,
  Clock,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroPoke from "@/assets/hero-poke.jpg";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : poké bowls frais, crousty chicken et desserts maison. Compose ton bowl et commande directement.",
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

/* ── Composant Reveal avec vrai reveal (opacity 0 → 1) ─────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Composant RevealScale ──────────────────────────────────────────── */
function RevealScale({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Ticker ─────────────────────────────────────────────────────────── */
function Ticker() {
  const items = Array.from({ length: 10 }).map((_, i) => (
    <span key={i} className="mx-5 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.14em] sm:text-[11px]">
      Poke N Bowl
      <span className="text-[#10251f]/40">✦</span>
      Fresh food
      <span className="text-[#10251f]/40">✦</span>
      Visé, Belgique
      <span className="text-[#10251f]/40">✦</span>
    </span>
  ));

  return (
    <div className="overflow-hidden bg-[#d7ff45] py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex w-max whitespace-nowrap"
      >
        {items}
        {items}
      </motion.div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────────────── */
function Index() {
  const { t, language, setLanguage } = useTranslation();
  const { items, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const displayedBowls = [
    ...bowls.filter((b) => b.id.startsWith("crousty-")),
    ...bowls.filter((b) => !b.id.startsWith("crousty-")),
  ];
  const closeMobile = () => setMobileOpen(false);

  /* Parallax hero */
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  /* Reset scroll on mount */
  React.useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = window.requestAnimationFrame(() =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    );
    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = prev;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* ════════════════════════ HEADER ════════════════════════ */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            className="flex min-w-0 shrink-0 items-center gap-2.5"
            aria-label="Poke N Bowl"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/95 p-1.5 shadow-[0_8px_25px_rgba(0,0,0,.22)] sm:h-14 sm:w-14">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0 text-white">
              <strong className="block truncate text-[15px] font-black leading-none tracking-tight sm:text-lg">
                Poke N Bowl
              </strong>
              <span className="mt-0.5 block truncate text-[7px] font-bold uppercase tracking-[0.2em] text-white/55 sm:text-[8px]">
                Visé · Fresh food
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex">
            <a href="#carte" className="transition hover:text-[#d7ff45]">{t("nav.menu")}</a>
            <a href="#composer" className="transition hover:text-[#d7ff45]">{t("nav.create")}</a>
            <a href="#infos" className="transition hover:text-[#d7ff45]">{t("nav.info")}</a>
            <Link to="/contact" className="transition hover:text-[#d7ff45]">{t("nav.contact")}</Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/recrutement"
              className="hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block"
            >
              {t("nav.recruit")}
            </Link>
            {/* Language */}
            <div className="hidden rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur md:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase transition ${
                    language === lang ? "bg-white text-black" : "text-white/55 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            {/* Cart */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Panier"
              className="relative rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Mobile menu */}
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40 md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-3 mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#10251f]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-1">
              {[
                { href: "#carte", label: t("nav.menu") },
                { href: "#composer", label: t("nav.create") },
                { href: "#infos", label: t("nav.info") },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className="rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <Link
                onClick={closeMobile}
                to="/contact"
                className="rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                {t("nav.contact")}
              </Link>
              <Link
                onClick={closeMobile}
                to="/recrutement"
                className="mt-1 rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white"
              >
                {t("nav.recruit")}
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* ════════════════════ HERO ════════════════════════════ */}
        <section ref={heroRef} className="relative isolate min-h-[680px] overflow-hidden bg-[#071713] text-white lg:min-h-[760px]">
          {/* Background image avec parallax */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 -z-20">
            <img
              src={heroPoke}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              className="h-full w-full object-cover object-center opacity-28"
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(215,255,69,.10),transparent_35%),linear-gradient(110deg,#071713_0%,rgba(7,23,19,.97)_45%,rgba(7,23,19,.75)_100%)]" />

          <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1320px] items-center gap-8 px-5 pb-10 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 lg:px-8 lg:min-h-[760px] lg:py-16">
            {/* Left: copy */}
            <motion.div style={{ opacity: heroOpacity }} className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#d7ff45]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff45]" />
                Crousty Chicken · best-seller
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40"
              >
                {t("hero.location")}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28 }}
                className="mt-3 font-sans text-[2.4rem] font-black leading-[.96] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]"
              >
                <span className="block">{t("hero.title1")}</span>
                <span className="mt-2 block text-[#d7ff45]">{t("hero.title2")}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-5 max-w-md text-[15px] leading-7 text-white/65"
              >
                {t("hero.desc")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/commander"
                  className="btn-primary inline-flex h-12 items-center justify-center"
                >
                  {t("hero.order")} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#carte"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 text-sm font-bold backdrop-blur-sm transition hover:bg-white/12"
                >
                  {t("hero.menu")}
                </a>
              </motion.div>
            </motion.div>

            {/* Right: featured cards */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-10 rounded-[60px] bg-[#d7ff45]/4 blur-3xl" />
                <div className="relative grid gap-3 sm:grid-cols-[1.12fr_.88fr] sm:items-end">
                  {/* Main card: Crousty Curry */}
                  <Link
                    to="/product/$productId"
                    params={{ productId: "crousty-chicken-curry" }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#f7f4ec] shadow-[0_35px_90px_-32px_rgba(0,0,0,.95)] transition duration-500 hover:-translate-y-1.5"
                  >
                    <div className="relative aspect-[.88] overflow-hidden sm:aspect-[.8]">
                      <DishImage
                        dishId="crousty-chicken-curry"
                        alt={t("feature.curry")}
                        priority
                        className="h-full w-full scale-[1.02] transition duration-700 group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04)_25%,rgba(0,0,0,.82)_100%)]" />
                      <div className="absolute left-4 top-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#10251f]">
                        11€ · menu étudiant
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/60">
                          Signature · Crousty Chicken
                        </p>
                        <h2 className="mt-1 text-2xl font-black leading-none tracking-tight sm:text-3xl">
                          {t("feature.curry")}
                        </h2>
                        <p className="mt-2 max-w-xs text-xs leading-5 text-white/70">
                          {t("feature.curry_desc")}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Side cards */}
                  <div className="grid gap-3">
                    <Link
                      to="/product/$productId"
                      params={{ productId: "crousty-chicken-sauce-blanche" }}
                      className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#f7f4ec] shadow-[0_25px_65px_-28px_rgba(0,0,0,.9)] transition duration-500 hover:-translate-y-1"
                    >
                      <div className="relative aspect-[1.15] overflow-hidden">
                        <DishImage
                          dishId="crousty-chicken-sauce-blanche"
                          alt={t("feature.white")}
                          className="h-full w-full transition duration-700 group-hover:scale-[1.07]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.75)_100%)]" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-[8px] font-black uppercase tracking-[0.14em] text-white/55">
                            Signature
                          </p>
                          <h3 className="mt-1 text-lg font-black leading-none">{t("feature.white")}</h3>
                        </div>
                      </div>
                    </Link>
                    {/* Mini info card */}
                    <div className="rounded-[22px] border border-[#d7ff45]/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#d7ff45]">
                            Crousty Mix
                          </p>
                          <p className="mt-1 text-sm font-black text-white">Curry + Sauce blanche</p>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-[#d7ff45]" />
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-white/40">{t("feature.hero_hint")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════ Ticker ════════════════════════════════════════ */}
        <Ticker />

        {/* ════════ Crousty section ════════════════════════════════ */}
        <section className="bg-[#ead9bb] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8f5b12]">
                Poke N Bowl · Signature
              </p>
              <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl">
                Le croustillant
              </h2>
              <h3 className="mt-1 text-[1.9rem] font-black uppercase leading-none tracking-tight text-[#a96b0d] sm:text-4xl lg:text-5xl">
                qui fait la différence
              </h3>
              <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.08em] sm:text-sm">
                <span>✦ Fait maison</span>
                <span className="text-[#a96b0d]">•</span>
                <span>🔥 Ultra croustillant</span>
                <span className="text-[#a96b0d]">•</span>
                <span>♡ Healthy</span>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {[
                {
                  id: "crousty-chicken-sauce-blanche",
                  name: "Crousty Chicken · Sauce blanche",
                  label: "Riz jasmin",
                  desc: "Riz jasmin parfumé, poulet croustillant, sauce blanche maison et oignons frits.",
                },
                {
                  id: "crousty-chicken-curry",
                  name: "Crousty Chicken · Curry",
                  label: "Riz curry",
                  desc: "Riz au curry onctueux, poulet croustillant, sauce curry maison et oignons frits.",
                },
              ].map((item, index) => (
                <RevealScale key={item.id} delay={index * 0.07}>
                  <Link
                    to="/product/$productId"
                    params={{ productId: item.id }}
                    className="group block overflow-hidden rounded-[30px] border border-[#8d5a18]/15 bg-[#f8f0df] shadow-[0_22px_60px_-35px_rgba(55,30,10,.5)] transition duration-350 hover:-translate-y-1.5"
                  >
                    <div className="relative aspect-[1.22] overflow-hidden bg-[#e7d4b4]">
                      <DishImage
                        dishId={item.id}
                        alt={item.name}
                        className="h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                        <span className="rounded-full bg-[#8b5510] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                          {item.label}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black">11€</span>
                      </div>
                    </div>
                    <div className="p-5 text-center sm:p-7">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#a96b0d]">
                        Crousty Chicken
                      </p>
                      <h3 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                        {item.name.split(" · ")[1]}
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6e6255]">{item.desc}</p>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#241a12] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#a96b0d]">
                        Découvrir la recette <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </RevealScale>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-7 text-center">
              <span className="inline-flex items-center gap-3 rounded-full bg-[#a96b0d] px-6 py-3 text-white shadow-lg">
                <span className="text-[11px] font-black uppercase tracking-[0.14em]">Menu étudiant</span>
                <span className="text-xl font-black">11€</span>
                <span className="text-[10px] font-black uppercase tracking-[0.1em]">· boisson incluse</span>
              </span>
              <p className="mt-3 text-xs font-bold text-[#6e6255]">
                Sauce extra +1€ · Viens goûter la différence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ════════ Carte bowls ════════════════════════════════════ */}
        <section id="carte" className="scroll-mt-10 mx-auto max-w-[1320px] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">
                  {t("menu.eyebrow")}
                </p>
                <h2 className="mt-3 max-w-2xl text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                  <span className="block">{t("menu.title1")}</span>
                  <span className="mt-0.5 block text-[#7d8b83]">{t("menu.title2")}</span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-sm leading-6 text-[#68756f]">{t("menu.desc")}</p>
                <Link
                  to="/commander"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f] transition hover:gap-3"
                >
                  {t("menu.order")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedBowls.map((bowl, index) => (
              <RevealScale key={bowl.id} delay={index * 0.04}>
                <Link
                  to="/product/$productId"
                  params={{ productId: bowl.id }}
                  className={[
                    "group block h-full overflow-hidden rounded-[26px] bg-white shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-lift",
                    bowl.id.startsWith("crousty-")
                      ? "ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec]"
                      : "",
                  ].join(" ")}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8dc]">
                    <DishImage
                      dishId={bowl.id}
                      alt={bowl.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_30%,rgba(0,0,0,.52)_100%)]" />
                    <span className="badge-tag absolute left-3 top-3 bg-white/95 text-[#17231f] shadow-card">
                      {bowl.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black text-[#10251f]">
                      € {bowl.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 flex-1 break-words text-[16px] font-black leading-tight sm:text-xl">
                        {bowl.name}
                      </h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f4ee] transition-colors duration-300 group-hover:bg-[#ff705f] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#68756f]">{bowl.desc}</p>
                    <div className="mt-auto pt-4 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff705f]">
                      {t("menu.customize")} · {t("menu.order")} →
                    </div>
                  </div>
                </Link>
              </RevealScale>
            ))}
          </div>
        </section>

        {/* ════════ Étapes de composition ═════════════════════════ */}
        <section id="composer" className="scroll-mt-10 bg-[#10251f] px-5 py-12 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]">
                {t("journey.eyebrow")}
              </p>
              <h2 className="mt-3 max-w-3xl text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                <span className="block">{t("journey.title1")}</span>
                <span className="mt-0.5 block text-white/35">{t("journey.title2")}</span>
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4">
              {(
                [
                  ["01", "journey.s1", "journey.s1d"],
                  ["02", "journey.s2", "journey.s2d"],
                  ["03", "journey.s3", "journey.s3d"],
                  ["04", "journey.s4", "journey.s4d"],
                ] as const
              ).map(([num, titleKey, descKey], index) => (
                <Reveal key={num} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <span className="text-3xl font-black text-[#ff705f]">{num}</span>
                    <h3 className="mt-5 text-lg font-black">{t(titleKey)}</h3>
                    <p className="mt-2 text-sm leading-5 text-white/50">{t(descKey)}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]">
                  {t("journey.ready")}
                </p>
                <p className="mt-1 text-sm text-white/50">{t("journey.ready_desc")}</p>
              </div>
              <Link
                to="/commander"
                className="btn-primary inline-flex items-center justify-center"
              >
                {t("journey.cta")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ Boissons + Desserts ════════════════════════════ */}
        <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Boissons */}
              <div className="overflow-hidden rounded-[24px] bg-white shadow-card sm:p-0">
                <div className="border-b border-black/5 px-6 py-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">
                    {t("menu.drinks")}
                  </p>
                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">{t("menu.drinks_title")}</h3>
                </div>
                <div className="grid gap-2 p-5 sm:grid-cols-2 sm:p-6">
                  {drinks.map((drink) => (
                    <Link
                      key={drink.id}
                      to="/commander"
                      className="flex items-center justify-between gap-2 rounded-xl bg-[#f5f4ee] px-4 py-3 text-sm transition hover:bg-[#d7ff45] hover:-translate-y-0.5"
                    >
                      <span className="min-w-0 break-words font-bold">{drink.name}</span>
                      <span className="shrink-0 text-xs font-black">€ {drink.price.toFixed(2)}</span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Desserts */}
              <div className="overflow-hidden rounded-[24px] bg-[#ff705f] text-white shadow-card">
                <div className="border-b border-white/15 px-6 py-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
                    {t("menu.desserts")}
                  </p>
                  <h3 className="mt-1 text-2xl font-black sm:text-3xl">{t("menu.desserts_title")}</h3>
                </div>
                <div className="flex items-center gap-4 p-5 sm:p-6">
                  <img
                    src={dessert}
                    alt="Tiramisu maison"
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-white/75">{desserts.map((d) => d.name).join(" · ")}</p>
                    <Link
                      to="/commander"
                      className="mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4"
                    >
                      {t("menu.desserts_cta")} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ════════ Recrutement banner ═════════════════════════════ */}
        <section className="px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <Reveal>
            <Link
              to="/recrutement"
              className="group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[30px] sm:p-8"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]">
                  <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                  {t("recruit.banner_tag")}
                </div>
                <h2 className="mt-2 break-words text-xl font-black leading-snug sm:text-3xl">
                  {t("recruit.banner_title")}
                </h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </section>

        {/* ════════ Infos pratiques ════════════════════════════════ */}
        <section id="infos" className="scroll-mt-10 bg-[#ece9df] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                {t("info.eyebrow")}
              </p>
              <h2 className="mt-3 text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                <span className="block">{t("info.title1")}</span>
                <span className="mt-0.5 block text-[#7d8b83]">{t("info.title2")}</span>
              </h2>
              <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 items-center gap-4 rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">
                      {t("info.address")}
                    </span>
                    <span className="mt-1 block break-words text-sm font-bold">
                      Av. du Pont 12, 4600 Visé, Belgique
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">
                      {t("info.phone")}
                    </span>
                    <span className="mt-1 block text-sm font-bold">+32 491 28 14 56</span>
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[24px] bg-[#10251f] text-white shadow-lift">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:px-7">
                  <Clock className="h-5 w-5 shrink-0 text-[#d7ff45]" />
                  <h3 className="text-xl font-black">{t("info.hours")}</h3>
                </div>
                <div className="divide-y divide-white/10 px-5 sm:px-7">
                  {HOUR_ROWS.map(([dayKey, value]) => (
                    <div key={dayKey} className="flex items-center justify-between gap-3 py-3 text-sm">
                      <span className="min-w-0 font-bold text-white/60">{t(dayKey)}</span>
                      <span
                        className={`shrink-0 text-right font-black ${value === "closed" ? "text-[#ff705f]" : ""}`}
                      >
                        {value === "closed" ? t("info.closed") : value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-4 sm:px-7">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45] transition hover:gap-3"
                  >
                    {t("info.maps")} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ════════════════════ FOOTER ════════════════════════════ */}
      <footer className="bg-[#0b1a16] px-5 py-8 pb-24 text-white sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Poke N Bowl"
              className="h-10 w-auto max-w-[160px] object-contain object-left"
            />
            <div>
              <div className="font-black">Poke N Bowl</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/30">
                Visé · Fresh food
              </div>
            </div>
          </Link>
          <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/40">
            <a href="#carte" className="transition hover:text-white">{t("nav.menu")}</a>
            <Link to="/commander" className="transition hover:text-white">{t("nav.order")}</Link>
            <Link to="/recrutement" className="transition hover:text-white">{t("footer.recruit")}</Link>
            <Link to="/contact" className="transition hover:text-white">{t("nav.contact")}</Link>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/22">
            © {new Date().getFullYear()} Poke N Bowl
          </div>
        </div>
      </footer>

      {/* ════════ Mobile sticky CTA ════════════════════════════════ */}
      <Link
        to="/commander"
        className="btn-primary fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 md:hidden"
      >
        {t("hero.order")} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
