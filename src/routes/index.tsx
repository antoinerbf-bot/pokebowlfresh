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
import { BrandLogo } from "@/components/BrandLogo";
import heroPoke from "@/assets/hero-poke.jpg";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";
import { PokeCinematicReel } from "@/components/PokeCinematicReel";
import { PokeBowlCraftingExperience } from "@/components/PokeBowlCraftingExperience";
import { Sparkles, Utensils, Heart } from "lucide-react";

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

  // Séparation claire : les 5 recettes Poké Bowls du restaurant & les spécialités croustillantes
  const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
  const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
  const [activeTab, setActiveTab] = React.useState<"all" | "bestseller" | "signature" | "fish" | "spicy">("all");

  const filteredPokeBowls = React.useMemo(() => {
    if (activeTab === "all") return pokeBowls;
    if (activeTab === "bestseller") return pokeBowls.filter((b) => b.tagColor === "bestseller");
    if (activeTab === "signature") return pokeBowls.filter((b) => b.tagColor === "signature");
    if (activeTab === "fish") return pokeBowls.filter((b) => b.id === "saumon-wasabi" || b.id === "scampis-royaux");
    if (activeTab === "spicy") return pokeBowls.filter((b) => b.id === "spicy-chicken" || b.id === "mighty-gyros" || b.id === "scampis-royaux");
    return pokeBowls;
  }, [pokeBowls, activeTab]);

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
            className="flex min-w-0 shrink-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl — Accueil"
          >
            <BrandLogo size="md" />
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
        {/* ════════════════════ HERO POKÉ & BOWL ════════════════════ */}
        <section ref={heroRef} className="relative isolate min-h-[700px] overflow-hidden bg-[#071713] text-white lg:min-h-[780px]">
          {/* Subtle Parallax Background */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 -z-20">
            <img
              src={heroPoke}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              className="h-full w-full object-cover object-center opacity-18"
            />
          </motion.div>
          {/* Ambient Lighting Gradients */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_35%,rgba(215,255,69,.12),transparent_40%),radial-gradient(ellipse_at_20%_80%,rgba(255,112,95,.08),transparent_50%),linear-gradient(110deg,#071713_0%,rgba(7,23,19,.98)_50%,rgba(7,23,19,.85)_100%)]" />

          <div className="relative z-10 mx-auto grid min-h-[700px] max-w-[1340px] items-center gap-10 px-5 pb-12 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-8 lg:min-h-[780px] lg:py-16">
            {/* Left: Copy & Value Proposition */}
            <motion.div style={{ opacity: heroOpacity }} className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/30 bg-[#d7ff45]/10 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#d7ff45]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff45] animate-pulse" />
                Poké Bowls Frais & Sur-Mesure · Visé & Fléron
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28 }}
                className="mt-4 font-sans text-[2.6rem] font-black leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem]"
              >
                <span className="block text-white">L'art du</span>
                <span className="mt-1 block text-[#d7ff45]">Poké Bowl.</span>
                <span className="mt-2 block text-xl sm:text-2xl lg:text-3xl font-extrabold text-white/80">
                  Frais. Gourmand. Fait minute.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-5 max-w-lg text-[15px] leading-7 text-white/70"
              >
                Découvrez nos 5 recettes créations aux ingrédients nobles découpés chaque matin :
                saumon atlantique frais, scampis saisis au grill, émincé de gyros rôti, poulet doré fondant
                et notre riz basmati d’exception.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <a
                  href="#carte"
                  className="btn-primary inline-flex h-13 items-center justify-center gap-2.5 px-7 text-sm font-black uppercase tracking-wider"
                >
                  Découvrir nos Bowls (dès 10€)
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/sur-mesure"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20 hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4 text-[#d7ff45]" />
                  Composer Sur Mesure 🥣
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/60"
              >
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="text-[#d7ff45]">★ 4.9/5</span> avis clients
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <span>🥑</span> 100% frais coupé du matin
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <span>🛵</span> Visé & Fléron
                </span>
              </motion.div>
            </motion.div>

            {/* Right: The Cinematic Poké Showcase Reel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-xl lg:max-w-none"
            >
              <PokeCinematicReel />
            </motion.div>
          </div>
        </section>

        {/* ════════ Ticker ════════════════════════════════════════ */}
        <Ticker />

        {/* ════════ CARTE DES POKÉ BOWLS SIGNATURES ════════════════════ */}
        <section id="carte" className="scroll-mt-10 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                  <span>🥗</span> Recettes officielles du flyer
                </div>
                <h2 className="mt-3 max-w-2xl text-[1.9rem] font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="block text-[#10251f]">Nos 5 Poké Bowls Signatures</span>
                  <span className="mt-1 block text-[#7d8b83] text-xl sm:text-2xl lg:text-3xl font-extrabold">
                    Riz basmati parfumé, sauces maison & fraîcheur garantie
                  </span>
                </h2>
              </div>
              <div className="max-w-md">
                <p className="text-sm leading-relaxed text-[#68756f]">
                  Chaque recette est soigneusement équilibrée et personnalisable. Retirez des ingrédients ou ajoutez vos toppings préférés en 1 clic.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <Link
                    to="/sur-mesure"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#ff705f] hover:underline"
                  >
                    Ou compose ton bowl de A à Z →
                  </Link>
                </div>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="mt-8 flex flex-wrap gap-2 pt-2">
              {[
                { id: "all", label: "Tous nos Poké Bowls (5)" },
                { id: "bestseller", label: "Best-Seller ⭐" },
                { id: "signature", label: "Signatures ✦" },
                { id: "fish", label: "Saumon & Scampis 🦐" },
                { id: "spicy", label: "Touche Épicée 🌶️" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveTab(filter.id as any)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                    activeTab === filter.id
                      ? "bg-[#10251f] text-white shadow-md scale-105"
                      : "bg-white text-[#10251f]/75 hover:bg-[#10251f]/10 border border-black/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid des 5 Poké Bowls */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPokeBowls.map((bowl, index) => (
              <RevealScale key={bowl.id} delay={index * 0.05}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-lift">
                  {/* Photo Dish with badge and price */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#ece8dc]">
                    <DishImage
                      dishId={bowl.id}
                      alt={bowl.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Tag badge */}
                    <span className="badge-tag absolute left-3.5 top-3.5 bg-white/95 text-[#10251f] shadow-card font-black">
                      {bowl.tag}
                    </span>

                    {/* Price tag */}
                    <span className="absolute bottom-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1.5 text-xs font-black text-[#10251f] shadow-md">
                      {bowl.price.toFixed(2)} €
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#10251f] leading-tight">
                          {bowl.name}
                        </h3>
                        <p className="mt-1 text-xs font-bold text-[#ff705f]">
                          Base riz basmati aéré · Fait minute
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[#68756f]">
                      {bowl.desc}
                    </p>

                    {/* Ingredient pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {bowl.ingredients.slice(0, 5).map((ing, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/80"
                        >
                          {ing.emoji} {ing.name}
                        </span>
                      ))}
                      {bowl.ingredients.length > 5 && (
                        <span className="rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]">
                          +{bowl.ingredients.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-auto pt-6 flex items-center gap-2">
                      <Link
                        to="/product/$productId"
                        params={{ productId: bowl.id }}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff5542]"
                      >
                        Personnaliser & Commander
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealScale>
            ))}
          </div>
        </section>

        {/* ════════ ANATOMIE D'UN POKÉ BOWL ════════════════════════ */}
        <section className="mx-auto max-w-[1340px] px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <Reveal>
            <PokeBowlCraftingExperience />
          </Reveal>
        </section>

        {/* ════════ SECTION COMPLÉMENTAIRE : LE BAR À CROUSTY ══════ */}
        <section className="bg-[#f0e6d6] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-y border-black/5">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8b5510]/10 px-3.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#8b5510]">
                <span>🍗</span> Spécialités Chaudes & Croustillantes
              </div>
              <h2 className="mt-3 text-[1.9rem] font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">
                Le Bar à Crousty Chicken
              </h2>
              <p className="mt-2 text-sm text-[#6e6255] max-w-xl mx-auto">
                Du poulet ultra croustillant pané minute, servi chaud sur riz parfumé avec oignons frits.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#8b5510] px-5 py-2 text-white shadow-md text-xs font-black uppercase tracking-wider">
                🎓 Formule Étudiant : 11 € · Boisson 33cl incluse
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {croustyBowls.map((item, index) => (
                <RevealScale key={item.id} delay={index * 0.08}>
                  <Link
                    to="/product/$productId"
                    params={{ productId: item.id }}
                    className="group flex flex-col sm:flex-row overflow-hidden rounded-[26px] border border-[#8d5a18]/15 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <div className="relative aspect-[4/3] sm:w-48 shrink-0 overflow-hidden bg-[#e7d4b4]">
                      <DishImage
                        dishId={item.id}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-[#8b5510] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                        11 € · Menu
                      </span>
                    </div>
                    <div className="flex flex-col p-5 sm:p-6 justify-between flex-1">
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#a96b0d]">
                          Crousty Chicken
                        </span>
                        <h3 className="mt-1 text-lg font-black text-[#241a12]">
                          {item.name}
                        </h3>
                        <p className="mt-1.5 text-xs text-[#6e6255] line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
                        <span className="text-xs font-bold text-[#8b5510]">
                          Boisson incluse
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#241a12] group-hover:text-[#a96b0d]">
                          Commander <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </RevealScale>
              ))}
            </div>
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
            <div className="mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { num: "01", title: "1. Ta Base", desc: "Riz blanc, riz brun, pâtes, nachos ou salade fraîche." },
                { num: "02", title: "2. Mix-in", desc: "5 ingrédients frais parmi 16 (avocat, mangue, feta, maïs...)." },
                { num: "03", title: "3. Protéine", desc: "Poulet mariné, gyros maison, saumon (+1€) ou scampis." },
                { num: "04", title: "4. Sauce", desc: "Spicy-mayo, teriyaki, mayo truffe, sésame, chili doux..." },
                { num: "05", title: "5. Toppings", desc: "Oignons frits, sésame seeds, noix de cajou, flocons chili..." },
              ].map(({ num, title, desc }, index) => (
                <Reveal key={num} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <span className="text-3xl font-black text-[#d7ff45]">{num}</span>
                    <h3 className="mt-4 text-base font-black">{title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">{desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]">
                  Formule Poke (n) Bowl sur mesure · 10.00 €
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Compose ton bol personnalisé en ligne ou découvre nos 7 recettes signatures.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/sur-mesure"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Composer mon bowl <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/commander"
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-white/10"
                >
                  Voir la carte
                </Link>
              </div>
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
                {/* Visé */}
                <div className="rounded-2xl bg-white p-4 shadow-card">
                  <div className="flex items-center justify-between border-b border-black/5 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#ff705f]">Restaurant Visé</span>
                    <span className="rounded-full bg-[#d7ff45] px-2 py-0.5 text-[9px] font-black">Ouvert</span>
                  </div>
                  <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 text-xs font-bold hover:text-[#ff705f]"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-[#ff705f]" />
                      <span>Av. du Pont 12, 4600 Visé</span>
                    </a>
                    <a
                      href="tel:+32491281456"
                      className="flex items-center gap-2 text-xs font-black text-[#10251f] hover:text-[#ff705f]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#ff705f]" />
                      <span>0491 28 14 56</span>
                    </a>
                  </div>
                </div>

                {/* Fléron */}
                <div className="rounded-2xl bg-white p-4 shadow-card">
                  <div className="flex items-center justify-between border-b border-black/5 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#ff705f]">Restaurant Fléron</span>
                    <span className="rounded-full bg-[#d7ff45] px-2 py-0.5 text-[9px] font-black">Ouvert</span>
                  </div>
                  <div className="mt-2.5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href="https://www.google.com/maps?q=Avenue+des+Martyrs+307,+4620+Fl%C3%A9ron"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 text-xs font-bold hover:text-[#ff705f]"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-[#ff705f]" />
                      <span>Av. des Martyrs 307, 4620 Fléron</span>
                    </a>
                    <a
                      href="tel:+32493423643"
                      className="flex items-center gap-2 text-xs font-black text-[#10251f] hover:text-[#ff705f]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#ff705f]" />
                      <span>0493 42 36 43</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#f7f4ec] px-4 py-2 text-[10px] font-bold text-[#7d8b83]">
                  <span>🛵 Livraison à domicile disponible</span>
                  <a href="https://instagram.com/POKE_NBOWL" target="_blank" rel="noreferrer" className="text-[#10251f] font-black hover:underline">
                    @POKE_NBOWL
                  </a>
                </div>
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
          <Link to="/" className="flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200">
            <BrandLogo size="md" />
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
