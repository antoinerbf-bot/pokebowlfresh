import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Menu,
  ShoppingBag,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroPoke from "@/assets/hero-poke.jpg";
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
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const { t, language, setLanguage } = useTranslation();
  const { items, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link
            to="/"
            onClick={closeMobile}
            className="flex shrink-0 items-center"
            aria-label="Poke N Bowl accueil"
          >
            <img
              src={logo}
              alt="Poke N Bowl"
              className="h-10 w-10 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,.35)] sm:h-14 sm:w-14"
            />
            <span className="ml-2 hidden text-white sm:block">
              <strong className="block text-base font-black leading-none">Poke N Bowl</strong>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/55">
                Visé · Fresh food
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex">
            <a href="#carte" className="hover:text-[#d7ff45]">La carte</a>
            <a href="#composer" className="hover:text-[#d7ff45]">Composer</a>
            <a href="#infos" className="hover:text-[#d7ff45]">Infos</a>
            <Link to="/contact" className="hover:text-[#d7ff45]">Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/recrutement"
              className="hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white sm:block"
            >
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
              aria-label="Ouvrir le panier"
              className="relative rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur"
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
              onClick={() => setMobileOpen((open) => !open)}
              className="rounded-full border border-white/20 bg-black/20 p-2.5 text-white backdrop-blur md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mx-3 max-h-[calc(100vh-88px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#10251f]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              <a onClick={closeMobile} href="#carte" className="rounded-2xl px-4 py-3 text-sm font-black text-white">La carte</a>
              <a onClick={closeMobile} href="#composer" className="rounded-2xl px-4 py-3 text-sm font-black text-white">Composer</a>
              <a onClick={closeMobile} href="#infos" className="rounded-2xl px-4 py-3 text-sm font-black text-white">Infos</a>
              <Link onClick={closeMobile} to="/contact" className="rounded-2xl px-4 py-3 text-sm font-black text-white">Contact</Link>
              <Link onClick={closeMobile} to="/recrutement" className="rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white">On recrute</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-[#071713] text-white sm:min-h-[720px] sm:items-center">
          <div className="absolute inset-0 -z-20">
            <img
              src={heroPoke}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center sm:object-[center_45%]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,23,19,.72)_0%,rgba(7,23,19,.32)_35%,rgba(7,23,19,.78)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,23,19,.92)_0%,rgba(7,23,19,.58)_48%,rgba(7,23,19,.22)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_38%,rgba(215,255,69,.16),transparent_30%)]" />

          <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 pb-28 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
            <div className="max-w-[700px]">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.15em] text-white/80 backdrop-blur-md sm:text-[9px]">
                  Fresh · préparé minute
                </span>
                <Link to="/recrutement" className="rounded-full bg-[#ff705f] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.15em] shadow-lg sm:text-[9px]">
                  On recrute
                </Link>
              </div>

              <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#d7ff45] sm:text-[9px]">
                Poke N Bowl · Visé
              </p>

              <h1 className="mt-3 max-w-[650px] text-[clamp(2.65rem,13vw,5.9rem)] font-black leading-[.92] tracking-[-0.045em] sm:text-7xl lg:text-[5.9rem]">
                Ton bowl.
                <br />
                <span className="text-[#d7ff45]">Tes règles.</span>
              </h1>

              <p className="mt-5 max-w-[450px] text-[13px] leading-5 text-white/80 sm:text-base sm:leading-6">
                Choisis ta recette, personnalise-la et commande ton bowl simplement.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  to="/commander"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-6 py-3.5 text-sm font-black shadow-[0_18px_45px_-18px_rgba(255,112,95,.9)]"
                >
                  Composer mon bowl
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#carte"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-black/20 px-6 py-3.5 text-sm font-bold backdrop-blur-md"
                >
                  Voir la carte
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white/55 sm:gap-x-5 sm:text-[9px]">
                <span>9 recettes</span>
                <span>À partir de 9,50 €</span>
                <span>Visé</span>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#d7ff45] py-3">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="mx-6 text-[9px] font-black uppercase tracking-[0.12em] sm:text-xs">
                Poke N Bowl · Fresh food · Visé <span className="mx-6">✦</span>
              </span>
            ))}
          </motion.div>
        </section>

        <section id="carte" className="scroll-mt-10 mx-auto max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">
                  {t("menu.eyebrow")}
                </p>
                <h2 className="mt-3 max-w-2xl text-[2.15rem] font-black leading-[1.04] tracking-[-0.015em] sm:text-5xl lg:text-6xl">
                  Choisis ton bowl.
                  <br />
                  <span className="text-[#7d8b83]">Puis rends-le unique.</span>
                </h2>
              </div>
              <div className="max-w-sm">
                <p className="text-sm leading-6 text-[#68756f]">
                  Toute la carte est visible ici. Choisis une recette, puis personnalise ton bowl.
                </p>
                <Link to="/commander" className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f]">
                  Commander <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bowls.map((bowl, index) => (
              <Reveal key={bowl.id} delay={index * 0.03}>
                <Link
                  to="/product/$productId"
                  params={{ productId: bowl.id }}
                  className="group block overflow-hidden rounded-[20px] bg-white shadow-[0_14px_45px_-30px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-1 sm:rounded-[24px]"
                >
                  <div className="relative aspect-[1.12] overflow-hidden sm:aspect-[1.08]">
                    <img
                      src={bowl.image}
                      alt={bowl.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.1em]">
                      {bowl.tag}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-2.5 py-1 text-xs font-black">
                      € {bowl.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 flex-1 break-words text-[17px] font-black leading-[1.1] tracking-normal sm:text-xl">
                        {bowl.name}
                      </h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0f1ea] group-hover:bg-[#ff705f] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-[#758079]">{bowl.desc}</p>
                    <p className="mt-3 text-[9px] font-black uppercase tracking-[0.12em] text-[#ff705f]">
                      Personnaliser →
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="composer" className="scroll-mt-10 bg-[#10251f] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]">Le parcours</p>
              <h2 className="mt-3 max-w-3xl text-[2.25rem] font-black leading-[1.03] tracking-[-0.015em] sm:text-5xl lg:text-6xl">
                Du premier clic
                <br />
                <span className="text-white/40">au dernier coup de fourchette.</span>
              </h2>
            </Reveal>

            <div className="mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Choisis", "Sélectionne une recette."],
                ["02", "Personnalise", "Ajoute jusqu’à 5 toppings."],
                ["03", "Valide", "Ajoute au panier."],
                ["04", "Commande", "Finalise depuis ton panier."],
              ].map(([num, title, desc], index) => (
                <Reveal key={num} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                    <span className="text-3xl font-black text-[#ff705f]">{num}</span>
                    <h3 className="mt-5 text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-5 text-white/55">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]">Prêt ?</p>
                <p className="mt-1 text-sm text-white/55">La carte complète est à un clic.</p>
              </div>
              <Link to="/commander" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3 text-sm font-black">
                Ouvrir la carte <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[24px] bg-white p-5 shadow-[0_15px_50px_-35px_rgba(0,0,0,.3)] sm:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]">{t("menu.drinks")}</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Une boisson avec ça ?</h3>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {drinks.map((drink) => (
                    <Link key={drink.id} to="/commander" className="flex items-center justify-between rounded-xl bg-[#f5f4ee] px-4 py-3 hover:bg-[#d7ff45]">
                      <span className="text-sm font-bold">{drink.name}</span>
                      <span className="text-xs font-black">€ {drink.price.toFixed(2)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#ff705f] p-5 text-white sm:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">{t("menu.desserts")}</p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Garde une place pour le dessert.</h3>
                <div className="mt-7 flex items-center gap-4">
                  <img src={dessert} alt="Dessert maison" loading="lazy" className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                  <div>
                    <p className="text-sm text-white/75">{desserts.map((item) => item.name).join(" · ")}</p>
                    <Link to="/commander" className="mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4">
                      Voir les desserts →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <Link
            to="/recrutement"
            className="group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition hover:-translate-y-1 sm:rounded-[30px] sm:p-8"
          >
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]">
                <BriefcaseBusiness className="h-4 w-4" />
                Poke N Bowl recrute
              </div>
              <h2 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">Et si ta prochaine aventure était ici ?</h2>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </section>

        <section id="infos" className="scroll-mt-10 bg-[#ece9df] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">Infos pratiques</p>
              <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                Passe nous voir
                <br />
                <span className="text-[#7d8b83]">à Visé.</span>
              </h2>

              <div className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3">
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">Adresse</span>
                    <span className="mt-1 block text-sm font-bold">Av. du Pont 12, 4600 Visé, Belgique</span>
                  </span>
                </a>
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 rounded-2xl bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white">☎</span>
                  <span>
                    <span className="block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]">Téléphone</span>
                    <span className="mt-1 block text-sm font-bold">+32 491 28 14 56</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-[24px] bg-[#10251f] p-5 text-white sm:p-7">
                <h3 className="text-2xl font-black">Horaires</h3>
                <div className="mt-5 divide-y divide-white/10">
                  {hours.map(([day, value]) => (
                    <div key={day} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-bold text-white/65">{day}</span>
                      <span className={value === "Fermé" ? "font-black text-[#ff705f]" : "font-black"}>{value}</span>
                    </div>
                  ))}
                </div>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45]">
                  Google Maps <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1a16] px-5 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Poke N Bowl" className="h-11 w-11 object-contain" />
            <div>
              <div className="font-black">Poke N Bowl</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">Visé · Fresh food</div>
            </div>
          </Link>
          <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/45">
            <a href="#carte">La carte</a>
            <Link to="/commander">Commander</Link>
            <Link to="/recrutement">Recrutement</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/25">© {new Date().getFullYear()} Poke N Bowl</div>
        </div>
      </footer>

      <Link
        to="/commander"
        className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#ff705f] px-5 py-3.5 text-sm font-black text-white shadow-xl md:hidden"
      >
        Composer mon bowl <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
