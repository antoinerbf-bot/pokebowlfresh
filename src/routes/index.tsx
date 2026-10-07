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
import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuNutella from "@/assets/tiramisu-nutella.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts } from "../lib/data";
import { DishImage } from "../components/DishImage";
import { PokeBowlCraftingExperience } from "@/components/PokeBowlCraftingExperience";
import { NotificationBellMenu } from "@/components/NotificationBellMenu";
import { CroustyNotificationToast } from "@/components/CroustyNotificationToast";
import { PokeBowlMarqueeCarousel } from "@/components/PokeBowlMarqueeCarousel";
import { Hero3DParallaxPoke } from "@/components/Hero3DParallaxPoke";
import { InteractiveBowlBuilder } from "@/components/InteractiveBowlBuilder";
import { DishTasteExplorer } from "@/components/DishTasteExplorer";
import { Sparkles, Utensils, Heart, Check, Plus } from "lucide-react";

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
  const { items, setIsCartOpen, addItem } = useCart();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Séparation claire : les 5 recettes Poké Bowls du restaurant & les spécialités croustillantes
  const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
  const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
  const [activeTab, setActiveTab] = React.useState<"all" | "bestseller" | "signature" | "crousty" | "fish" | "spicy">("all");

  const filteredPokeBowls = React.useMemo(() => {
    if (activeTab === "all") return pokeBowls;
    if (activeTab === "bestseller") return pokeBowls.filter((b) => b.tagColor === "bestseller");
    if (activeTab === "signature") return pokeBowls.filter((b) => b.tagColor === "signature");
    if (activeTab === "crousty") return croustyBowls;
    if (activeTab === "fish") return pokeBowls.filter((b) => b.id === "saumon-wasabi" || b.id === "scampis-royaux");
    if (activeTab === "spicy") return pokeBowls.filter((b) => b.id === "spicy-chicken" || b.id === "scampis-royaux");
    return pokeBowls;
  }, [pokeBowls, croustyBowls, activeTab]);

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
              to="/commander"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#d7ff45] px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#10251f] shadow-md transition hover:bg-white hover:scale-105 active:scale-95"
            >
              <span>Commander</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              to="/recrutement"
              className="hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block"
            >
              {t("nav.recruit")}
            </Link>
            {/* Notification Bell Menu (Pokawa-inspired) */}
            <NotificationBellMenu />
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
        {/* ════════════════════ HERO POKÉ & BOWL 3D PARALLAX ════════════════════ */}
        <Hero3DParallaxPoke />

        {/* ════════ Ticker ════════════════════════════════════════ */}
        <Ticker />

        {/* ════════ CAROUSEL DÉFILANT POKÉ BOWLS (STYLE POKAWA) ════════ */}
        <section className="bg-white/70 py-12 sm:py-16 border-b border-black/5 overflow-hidden">
          <div className="mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8">
            <PokeBowlMarqueeCarousel />
          </div>
        </section>

        {/* ════════ DÉCOUVERTE FRAÎCHEUR & SENSORIALITÉ ════════ */}
        <DishTasteExplorer />

        {/* ════════ CARTE DES POKÉ BOWLS SIGNATURES ════════════════════ */}
        <section id="carte" className="scroll-mt-10 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]">
                  <span>🥗</span> Recettes officielles du flyer
                </div>
                <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  <span className="block text-[#10251f]">Nos Poké Bowls Signatures</span>
                  <span className="mt-2 block text-[#4e5c55] text-base sm:text-lg lg:text-xl font-medium">
                    Riz à sushi traditionnel, sauces maison & fraîcheur garantie
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
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff705f] hover:underline"
                  >
                    Ou compose ton bowl de A à Z →
                  </Link>
                </div>
              </div>
            </div>

            {/* Filter Chips - Pokawa inspired pill buttons */}
            <div className="mt-8 flex flex-wrap gap-2 pt-2">
              {[
                { id: "all", label: `Tous nos Poké Bowls (${pokeBowls.length})` },
                { id: "bestseller", label: "Best-Seller ⭐" },
                { id: "signature", label: "Signatures ✦" },
                { id: "crousty", label: "Gamme Chaude Crousty 🍗 (11€)" },
                { id: "fish", label: "Saumon & Scampis 🦐" },
                { id: "spicy", label: "Touche Épicée 🌶️" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveTab(filter.id as any)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
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
                    <span className="badge-tag absolute left-3.5 top-3.5 bg-white/95 text-[#10251f] shadow-card font-bold">
                      {bowl.tag}
                    </span>

                    {/* Price tag */}
                    <span className="absolute bottom-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1.5 text-xs font-extrabold text-[#10251f] shadow-md">
                      {bowl.price.toFixed(2)} €
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#10251f] leading-snug">
                          {bowl.name}
                        </h3>
                        <p className="mt-1 text-xs font-bold text-[#ff705f]">
                          Base riz à sushi · Fait minute
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

                    {/* Action buttons: Quick Add & Customizer */}
                    <div className="mt-auto pt-6 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: bowl.id,
                            name: `${bowl.name} (Moyen)`,
                            basePrice: bowl.price,
                            price: bowl.price,
                            quantity: 1,
                            toppings: [],
                            removedIngredients: [],
                          })
                        }
                        title={`Ajouter direct au panier (${bowl.price.toFixed(2)} €)`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] shadow-soft transition hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95 font-black"
                      >
                        <Plus className="h-5 w-5 stroke-[2.5]" />
                      </button>

                      <Link
                        to="/product/$productId"
                        params={{ productId: bowl.id }}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]"
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
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8b5510]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5510]">
                <span>🍗</span> Spécialités Chaudes & Croustillantes
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#241a12]">
                Le Bar à Crousty Chicken
              </h2>
              <p className="mt-2 text-sm text-[#6e6255] max-w-xl mx-auto">
                Du poulet ultra croustillant pané minute, servi chaud sur riz parfumé avec oignons frits.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#8b5510] px-5 py-2 text-white shadow-md text-xs font-bold uppercase tracking-wider">
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
                      <span className="absolute left-3 top-3 rounded-full bg-[#8b5510] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        11 € · Menu
                      </span>
                    </div>
                    <div className="flex flex-col p-5 sm:p-6 justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#a96b0d]">
                          Crousty Chicken
                        </span>
                        <h3 className="mt-1 text-lg font-bold text-[#241a12]">
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

        {/* ════════ SIMULATEUR SUR-MESURE INTERACTIF LUDIQUE ══════════════ */}
        <InteractiveBowlBuilder />

        {/* ════════ Boissons & Desserts : Plaisirs Gourmands ═══════ */}
        <section className="mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]">
                <span>🧁</span> Douceurs & Rafraîchissements
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]">
                Complétez votre repas avec nos incontournables
              </h2>
              <p className="mt-2 text-sm text-[#5a6760]">
                Des tiramisus artisanaux préparés chaque matin et vos boissons fraîches préférées.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Module 1 : Tiramisus Maison */}
              <div className="flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]">
                        Pâtisserie Maison · Fait chaque matin
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1">
                        Nos 3 Tiramisus Gourmands
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#ff705f]/10 px-3 py-1 text-xs font-black text-[#ff705f]">
                      4,00 € l'unité
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        id: "tira-spec",
                        name: "Tiramisu Spéculoos",
                        badge: "Grand Classique ⭐",
                        desc: "Crème mascarpone légère, biscuits Lotus caramélisés croustillants & voile de spéculoos.",
                        image: tiramisuSpeculoos,
                        price: 4.00,
                        soldOut: false,
                      },
                      {
                        id: "tira-nutella",
                        name: "Tiramisu Nutella",
                        badge: "Sold Out ⚠️",
                        desc: "Tourbillons généreux de Nutella fondant, éclats de noisettes torréfiées & mascarpone.",
                        image: tiramisuNutella,
                        price: 4.00,
                        soldOut: true,
                      },
                      {
                        id: "tira-oreo",
                        name: "Tiramisu Oreo",
                        badge: "Crunch & Crème 🍪",
                        desc: "Brisures croustillantes de biscuits Oréo noir et crème fouettée maison onctueuse.",
                        image: tiramisuOreo,
                        price: 4.00,
                        soldOut: false,
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className={`group flex items-center gap-4 rounded-2xl border border-black/5 p-3.5 transition duration-200 ${
                          item.soldOut
                            ? "bg-[#f2efe9]/70 opacity-80"
                            : "bg-[#faf8f4] hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm"
                        }`}
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                          <img
                            src={item.image}
                            alt={item.name}
                            className={`h-full w-full object-cover shadow-sm transition duration-300 ${
                              item.soldOut ? "grayscale contrast-75" : "group-hover:scale-105"
                            }`}
                          />
                          {item.soldOut && (
                            <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-[10px] font-black uppercase tracking-wider text-white">
                              Épuisé
                            </span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-extrabold text-[#10251f] text-sm sm:text-base">
                              {item.name}
                            </h4>
                            <span
                              className={`text-[10px] font-bold rounded-md px-2 py-0.5 ${
                                item.soldOut
                                  ? "bg-black/10 text-[#68756f]"
                                  : "text-[#ff705f] bg-[#ff705f]/10"
                              }`}
                            >
                              {item.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-[#68756f] line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                          <div className="mt-2.5 flex items-center justify-between">
                            <span className="text-xs font-black text-[#10251f]">
                              {item.price.toFixed(2)} €
                            </span>
                            {item.soldOut ? (
                              <span className="inline-flex items-center rounded-full bg-black/10 px-3 py-1 text-[11px] font-bold text-[#68756f] cursor-not-allowed">
                                Victime de son succès
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => {
                                  addItem({
                                    id: item.id,
                                    name: item.name,
                                    basePrice: item.price,
                                    price: item.price,
                                    quantity: 1,
                                    toppings: [],
                                    removedIngredients: [],
                                  });
                                }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#ff705f]"
                              >
                                <Plus className="h-3 w-3" />
                                Ajouter
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 text-center">
                  <Link
                    to="/commander"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff705f] hover:underline"
                  >
                    Commander un dessert seul ou en menu →
                  </Link>
                </div>
              </div>

              {/* Module 2 : Boissons Fraîches */}
              <div className="flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]">
                        Canettes & Eaux · Servies très fraîches
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1">
                        Nos Boissons Fraîches
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#d7ff45] px-3 py-1 text-xs font-black text-[#10251f]">
                      2,00 € l'unité
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { id: "coca", name: "Coca-Cola", size: "33 cl", icon: "🥤", tag: "Classique givré", price: 2.00 },
                      { id: "coca-zero", name: "Coca-Cola Zero", size: "33 cl", icon: "✨", tag: "Zéro sucre", price: 2.00 },
                      { id: "fanta", name: "Fanta Orange", size: "33 cl", icon: "🍊", tag: "Fruité pétillant", price: 2.00 },
                      { id: "ice-tea", name: "Ice-Tea Pêche", size: "33 cl", icon: "🍑", tag: "Douceur glacée", price: 2.00 },
                      { id: "eau-plate", name: "Eau plate", size: "50 cl", icon: "💧", tag: "Pureté minérale", price: 2.00 },
                      { id: "eau-gaz", name: "Eau gazeuse", size: "50 cl", icon: "🫧", tag: "Bulles vives", price: 2.00 },
                    ].map((drink) => (
                      <div
                        key={drink.id}
                        className="group flex flex-col justify-between rounded-2xl border border-black/5 bg-[#faf8f4] p-4 transition duration-200 hover:border-[#d7ff45] hover:bg-white hover:shadow-sm"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-2xl">{drink.icon}</span>
                          <span className="rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-bold text-[#68756f]">
                            {drink.size}
                          </span>
                        </div>
                        <div className="mt-3">
                          <h4 className="font-extrabold text-[#10251f] text-sm">
                            {drink.name}
                          </h4>
                          <p className="text-[11px] text-[#7d8b83]">
                            {drink.tag}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3">
                          <span className="text-xs font-black text-[#10251f]">
                            {drink.price.toFixed(2)} €
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              addItem({
                                id: drink.id,
                                name: `${drink.name} (${drink.size})`,
                                basePrice: drink.price,
                                price: drink.price,
                                quantity: 1,
                                toppings: [],
                                removedIngredients: [],
                              });
                            }}
                            className="inline-flex items-center gap-1 rounded-full bg-[#10251f] px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#d7ff45] hover:text-[#10251f]"
                          >
                            <Plus className="h-3 w-3" />
                            Ajouter
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 text-center">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#68756f]">
                    <span>🧊</span> Boisson 33cl incluse dans la formule Étudiant (11 €)
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
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#465313]">
                  <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                  {t("recruit.banner_tag")}
                </div>
                <h2 className="mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#10251f]">
                  {t("recruit.banner_title")}
                </h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </section>

        {/* ════════ Infos pratiques & Google Maps Visé ══════════════ */}
        <section id="infos" className="scroll-mt-10 bg-[#ece9df] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1340px]">
            <Reveal>
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]">
                  <MapPin className="h-3.5 w-3.5" />
                  Visé, Belgique · Avenue du Pont 12
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]">
                  Passez nous voir au restaurant
                </h2>
                <p className="mt-2 text-sm text-[#5a6760]">
                  À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              {/* Carte Google Maps interactive de Visé */}
              <Reveal>
                <div className="flex flex-col h-full overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-lift">
                  {/* Top Bar with restaurant details */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-[#faf8f4] p-5 sm:px-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]">
                          📍
                        </span>
                        <h3 className="font-extrabold text-[#10251f] text-base">
                          Poke N Bowl Visé
                        </h3>
                      </div>
                      <p className="text-xs text-[#68756f] mt-0.5">
                        Avenue du Pont 12, 4600 Visé, Belgique
                      </p>
                    </div>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#ff705f]"
                    >
                      <span>Itinéraire Google Maps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Interactive Map Iframe */}
                  <div className="relative min-h-[380px] sm:min-h-[420px] flex-1 w-full bg-[#e5e3df]">
                    <iframe
                      title="Carte interactive Google Maps Poké N Bowl Visé"
                      src="https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Visual badges at the bottom of the map */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#faf8f4] p-4 text-[11px] font-semibold text-[#5a6760] border-t border-black/5">
                    <span>🚗 Parking facile à proximité</span>
                    <span>🚶 Au cœur de Visé</span>
                    <span>🛵 Retrait Click & Collect express</span>
                  </div>
                </div>
              </Reveal>

              {/* Horaires d'ouverture & Contact rapide */}
              <Reveal delay={0.08}>
                <div className="flex flex-col justify-between h-full space-y-6">
                  {/* Horaires Card */}
                  <div className="overflow-hidden rounded-[32px] bg-[#10251f] text-white shadow-lift p-6 sm:p-7">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2.5">
                        <Clock className="h-5 w-5 text-[#d7ff45]" />
                        <h3 className="text-xl font-extrabold">Horaires d'ouverture</h3>
                      </div>
                      <span className="rounded-full bg-[#d7ff45]/20 border border-[#d7ff45]/40 px-3 py-1 text-[10px] font-bold text-[#d7ff45]">
                        ● Ouvert pour le service
                      </span>
                    </div>

                    <div className="divide-y divide-white/10 py-2">
                      {HOUR_ROWS.map(([dayKey, value]) => (
                        <div key={dayKey} className="flex items-center justify-between gap-3 py-3 text-xs sm:text-sm">
                          <span className="font-semibold text-white/70">{t(dayKey)}</span>
                          <span
                            className={`font-extrabold ${value === "closed" ? "text-[#ff705f]" : "text-white"}`}
                          >
                            {value === "closed" ? "Fermé" : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Direct Card */}
                  <div className="rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#ff705f]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#ff705f]">
                          Commandes & Renseignements
                        </span>
                      </div>
                      <span className="text-xs text-[#7d8b83] font-bold">
                        Appel direct
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+32491281456"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#ff705f] py-3.5 px-4 text-xs font-bold text-white shadow-soft transition hover:bg-[#ff5542]"
                      >
                        <Phone className="h-4 w-4" />
                        <span>0491 28 14 56</span>
                      </a>
                      <a
                        href="https://instagram.com/POKE_NBOWL"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#faf8f4] py-3.5 px-4 text-xs font-bold text-[#10251f] transition hover:bg-black/5"
                      >
                        <span>Instagram @POKE_NBOWL</span>
                      </a>
                    </div>

                    <div className="rounded-xl bg-[#f7f4ec] px-4 py-2.5 text-xs text-[#68756f] flex items-center justify-between">
                      <span className="font-semibold">🛵 Livraison à domicile disponible</span>
                      <Link to="/commander" className="font-bold text-[#10251f] hover:underline">
                        Commander en ligne →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
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

      {/* ════════ Toast Notification Popup Crousty Chicken ════════ */}
      <CroustyNotificationToast />
    </div>
  );
}
