import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  MapPin,
  Menu,
  ShoppingBag,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { bowls, drinks, desserts } from "../lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : poké bowls, crousty chicken et desserts maison. Compose ton bowl et commande directement.",
      },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
const PHONE = "+32491281456";

const hours = [
  ["Lundi", "17:15 – 20:30"],
  ["Mardi", "17:15 – 20:30"],
  ["Mercredi", "17:15 – 20:30"],
  ["Jeudi", "17:15 – 20:30"],
  ["Vendredi", "17:15 – 20:30"],
  ["Samedi", "17:45 – 20:30"],
  ["Dimanche", "Fermé"],
];

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const { t, language, setLanguage } = useTranslation();
  const { items, setIsCartOpen } = useCart();
  const [muted, setMuted] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headline, setHeadline] = useState(0);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setHeadline((value) => (value + 1) % 3),
      3600,
    );
    return () => window.clearInterval(timer);
  }, []);

  const headlines = [
    <>
      Ton bowl.
      <br />
      <span className="text-[#d7ff45]">Tes règles.</span>
    </>,
    <>
      Frais.
      <br />
      <span className="text-[#ff705f]">Généreux.</span>
    </>,
    <>
      Compose.
      <br />
      <span className="text-[#d7ff45]">Savoure.</span>
    </>,
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-8 sm:py-4 lg:px-12">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <img
              src={logo}
              alt="Poke N Bowl"
              className="h-10 w-10 object-contain drop-shadow-xl sm:h-14 sm:w-14"
            />
            <div className="hidden text-white sm:block">
              <div className="text-lg font-black tracking-tight">Poke N Bowl</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                Visé · Fresh food
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-[10px] font-black uppercase tracking-[0.18em] text-white md:flex">
            <a href="#carte" className="transition-opacity hover:opacity-60">
              La carte
            </a>
            <a href="#composer" className="transition-opacity hover:opacity-60">
              Composer
            </a>
            <a href="#infos" className="transition-opacity hover:opacity-60">
              Infos
            </a>
            <Link to="/contact" className="transition-opacity hover:opacity-60">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/recrutement"
              className="hidden items-center gap-2 rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-[#ff705f]/25 sm:flex"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              On recrute
            </Link>

            <div className="hidden rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur md:flex">
              {(["fr", "en", "nl"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${
                    language === lang ? "bg-white text-black" : "text-white/60"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur transition hover:bg-white/15"
              aria-label="Ouvrir le panier"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mx-4 rounded-3xl border border-white/15 bg-[#10251f]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              {[
                ["La carte", "#carte"],
                ["Composer", "#composer"],
                ["Infos", "#infos"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-black text-white/80 hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-black text-white/80 hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                to="/recrutement"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white"
              >
                On recrute
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative min-h-[680px] h-[100svh] max-h-[900px] overflow-hidden bg-[#10251f] text-white">
          <div className="absolute inset-0 bg-[#10251f]" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border-[18px] border-white/10 sm:-right-32 sm:top-20 sm:h-[30rem] sm:w-[30rem] sm:border-[24px]" />
          <div className="absolute -right-8 top-40 h-44 w-44 rounded-full border-[10px] border-[#d7ff45]/20 sm:right-0 sm:top-36 sm:h-72 sm:w-72 sm:border-[14px]" />
          <div className="absolute right-10 top-52 h-28 w-28 rounded-full bg-[#ff705f]/20 blur-2xl sm:right-20 sm:top-56 sm:h-44 sm:w-44" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10251f] via-[#10251f]/90 to-[#10251f]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-transparent to-[#10251f]/30" />

          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 pb-24 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="w-full max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
                  Fresh · préparé minute
                </span>
                <Link
                  to="/recrutement"
                  className="group rounded-full border border-[#ff705f]/50 bg-[#ff705f]/90 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-xl sm:px-4 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  On recrute
                  <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="relative h-[150px] sm:h-[225px] lg:h-[250px]">
                {headlines.map((line, index) => (
                  <motion.h1
                    key={index}
                    initial={false}
                    animate={{
                      opacity: headline === index ? 1 : 0,
                      y: headline === index ? 0 : 18,
                      filter: headline === index ? "blur(0px)" : "blur(5px)",
                    }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute left-0 top-0 max-w-full text-[3.15rem] font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem]"
                  >
                    {line}
                  </motion.h1>
                ))}
              </div>

              <p className="mt-2 max-w-xl text-[13px] leading-5 text-white/75 sm:mt-3 sm:text-base sm:leading-6">
                Poké bowls, crousty chicken et desserts maison à Visé. Choisis une recette,
                personnalise-la et commande sans te perdre dans un menu compliqué.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                <Link
                  to="/commander"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff705f] px-6 py-3.5 text-sm font-black text-white sm:w-auto sm:px-7 sm:py-4" shadow-[0_20px_60px_-20px_rgba(255,112,95,.9)] transition duration-300 hover:-translate-y-1"
                >
                  Composer mon bowl
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#carte"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold sm:w-auto sm:px-6 sm:py-4" backdrop-blur-xl transition hover:bg-white/15"
                >
                  Voir les bowls
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/50 sm:mt-7 sm:gap-x-7 sm:text-[9px] sm:tracking-[0.2em]">
                <span>À partir de 9,50 €</span>
                <span>Visé</span>
                <span>À emporter</span>
              </div>
            </div>
          </div>


          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-center md:block">
            <div className="text-[8px] font-black uppercase tracking-[0.35em] text-white/45">
              Découvre · compose · commande
            </div>
            <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        <section className="overflow-hidden bg-[#d7ff45] py-3 text-[#10251f] sm:py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex w-max whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-8 text-[10px] font-black uppercase tracking-[0.24em] sm:text-xs">
                Poke N Bowl · Fresh food · Visé <span className="mx-8">✦</span>
              </span>
            ))}
          </motion.div>
        </section>

        <section id="carte" className="scroll-mt-20 mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">
                  {t("menu.eyebrow")}
                </p>
                <h2 className="mt-3 max-w-3xl text-[2.35rem] font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                  Choisis ton bowl.
                  <br />
                  <span className="text-[#7d8b83]">Puis rends-le unique.</span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-sm leading-6 text-[#68756f]">
                  Les recettes sont affichées ici sans filtre caché : tu vois toute la carte,
                  puis tu cliques sur le bowl que tu veux personnaliser.
                </p>
                <Link
                  to="/commander"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#ff705f]"
                >
                  Voir toute la commande <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {bowls.map((bowl, index) => (
              <Reveal key={bowl.id} delay={index * 0.04}>
                <Link
                  to="/product/$productId"
                  params={{ productId: bowl.id }}
                  className="group block overflow-hidden rounded-[28px] bg-white shadow-[0_15px_50px_-30px_rgba(0,0,0,.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,.45)]"
                >
                  <div className="relative aspect-[1.15] overflow-hidden">
                    <img
                      src={bowl.image}
                      alt={bowl.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#17231f] backdrop-blur">
                      {bowl.tag}
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black">
                      € {bowl.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-black tracking-tight sm:text-xl">{bowl.name}</h3>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1ea] transition group-hover:bg-[#ff705f] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#758079] sm:text-sm">{bowl.desc}</p>
                    <div className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-[#ff705f]">
                      Personnaliser →
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="composer" className="scroll-mt-20 bg-[#10251f] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d7ff45]">
                  Le parcours
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                  Du premier clic
                  <br />
                  <span className="text-white/40">au dernier coup de fourchette.</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-2 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Choisis", "Sélectionne une recette dans toute la carte."],
                ["02", "Personnalise", "Ajoute jusqu’à 5 toppings à ton bowl."],
                ["03", "Valide", "Ajoute ton bowl, une boisson ou un dessert au panier."],
                ["04", "Commande", "Retrouve tout dans ton panier pour finaliser."],
              ].map(([num, title, desc], i) => (
                <Reveal key={num} delay={i * 0.07}>
                  <div className="h-full bg-[#16352d] p-5 transition hover:bg-[#1b4036] sm:p-7">
                    <span className="text-4xl font-black text-[#ff705f]">{num}</span>
                    <h3 className="mt-5 text-lg font-black sm:mt-8 sm:text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-[#d7ff45]">
                  Prêt à composer ?
                </div>
                <p className="mt-2 text-sm text-white/55">
                  Toute la carte est regroupée dans un seul parcours de commande.
                </p>
              </div>
              <Link
                to="/commander"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-6 py-3.5 text-sm font-black"
              >
                Ouvrir la carte complète <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-8 sm:py-20 lg:py-24">
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2 sm:gap-6">
              <div className="rounded-[24px] bg-white p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,.3)] sm:p-9">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                  {t("menu.drinks")}
                </p>
                <h3 className="mt-2 text-3xl font-black tracking-tight">Une boisson avec ça ?</h3>
                <div className="mt-7 grid gap-2 sm:grid-cols-2">
                  {drinks.map((drink) => (
                    <Link
                      key={drink.id}
                      to="/commander"
                      className="flex items-center justify-between rounded-2xl bg-[#f5f4ee] px-4 py-3 text-left transition hover:bg-[#d7ff45]"
                    >
                      <span className="text-sm font-bold">{drink.name}</span>
                      <span className="text-xs font-black">€ {drink.price.toFixed(2)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] bg-[#ff705f] text-white">
                <div className="flex h-full flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/65">
                      {t("menu.desserts")}
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight">
                      Garde une place pour le dessert.
                    </h3>
                  </div>
                  <div className="mt-8 flex items-end gap-5">
                    <img
                      src={dessert}
                      alt="Dessert maison"
                      loading="lazy"
                      className="h-24 w-24 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-white/75">
                        {desserts.map((item) => item.name).join(" · ")}
                      </p>
                      <Link
                        to="/commander"
                        className="mt-3 inline-block text-xs font-black uppercase tracking-[0.16em] underline underline-offset-4"
                      >
                        Voir les desserts →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-4 pb-16 sm:px-8 sm:pb-20 lg:pb-28">
          <Link
            to="/recrutement"
            className="group mx-auto block max-w-[1200px] overflow-hidden rounded-[24px] bg-[#d7ff45] p-5 transition sm:rounded-[32px] sm:p-7" hover:-translate-y-1 sm:p-10"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#536018]">
                  <BriefcaseBusiness className="h-4 w-4" /> Poke N Bowl recrute
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                  Et si ta prochaine aventure était ici ?
                </h2>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:rotate-[-45deg]">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        </section>

        <section id="infos" className="scroll-mt-20 bg-[#ece9df] px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[1fr_.8fr] lg:gap-10">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">
                Infos pratiques
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Passe nous voir
                <br />
                <span className="text-[#7d8b83]">à Visé.</span>
              </h2>

              <div className="mt-10 space-y-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-[#7d8b83]">
                      Adresse
                    </span>
                    <span className="mt-1 block text-sm font-bold">
                      Av. du Pont 12, 4600 Visé, Belgique
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="flex items-start gap-4 rounded-3xl bg-white p-5 transition hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">
                    <span className="text-sm font-black">☎</span>
                  </span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-[#7d8b83]">
                      Téléphone
                    </span>
                    <span className="mt-1 block text-sm font-bold">+32 491 28 14 56</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[24px] bg-[#10251f] p-5 text-white sm:rounded-[30px] sm:p-9">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black">Horaires</h3>
                  <ChevronDown className="h-5 w-5 text-white/35" />
                </div>
                <div className="mt-7 divide-y divide-white/10">
                  {hours.map(([day, value]) => (
                    <div key={day} className="flex items-center justify-between py-3.5 text-sm">
                      <span className="font-bold text-white/70">{day}</span>
                      <span className={value === "Fermé" ? "font-black text-[#ff705f]" : "font-black"}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#d7ff45]"
                >
                  Ouvrir dans Google Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1a16] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Poke N Bowl" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-black">Poke N Bowl</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Visé · Fresh food
              </div>
            </div>
          </Link>

          <div className="flex flex-wrap gap-5 text-[9px] font-black uppercase tracking-[0.18em] text-white/45">
            <a href="#carte" className="hover:text-white">La carte</a>
            <Link to="/commander" className="hover:text-white">Commander</Link>
            <Link to="/recrutement" className="hover:text-white">Recrutement</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>

          <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
            © {new Date().getFullYear()} Poke N Bowl
          </div>
        </div>
      </footer>

      <Link
        to="/commander"
        className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-3 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white sm:inset-x-4 sm:bottom-4 sm:px-6 sm:py-4" shadow-[0_20px_50px_-15px_rgba(0,0,0,.5)] md:hidden"
      >
        Composer mon bowl
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
