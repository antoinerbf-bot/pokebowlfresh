import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ArrowRight, BriefcaseBusiness, MapPin, ShoppingBag, Volume2, VolumeX } from "lucide-react";
import { bowls, drinks, desserts } from "../lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : poké bowls faits minute, crousty chicken et desserts maison. Commande en ligne ou à emporter.",
      },
    ],
  }),
  component: Index,
});

const ORDER_URL = "https://www.poke-n-bowl.be/";
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

function FadeIn({
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  const [muted, setMuted] = useState(true);
  const [headline, setHeadline] = useState(0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const timer = window.setInterval(() => setHeadline((value) => (value + 1) % 3), 3600);
    return () => window.clearInterval(timer);
  }, []);

  const addSimpleItem = (item: any) => {
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

  const headlines = [
    <>Ton bowl.<br /><span className="text-[#d7ff45]">Tes règles.</span></>,
    <>Frais.<br /><span className="text-[#ff705f]">Généreux.</span></>,
    <>Compose.<br /><span className="text-[#d7ff45]">Savoure.</span></>,
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />

      {/* Transparent navigation over the film */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Poke N Bowl" className="h-12 w-12 object-contain drop-shadow-xl sm:h-14 sm:w-14" />
            <div className="hidden sm:block text-white">
              <div className="text-lg font-black tracking-tight">Poke N Bowl</div>
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Visé · Fresh food</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-[10px] font-black uppercase tracking-[0.18em] text-white md:flex">
            <a href="#carte" className="transition-opacity hover:opacity-60">La carte</a>
            <a href="#composer" className="transition-opacity hover:opacity-60">Composer</a>
            <a href="#infos" className="transition-opacity hover:opacity-60">Infos</a>
            <Link to="/contact" className="transition-opacity hover:opacity-60">Contact</Link>
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
                  onClick={() => setLanguage(lang)}
                  className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language === lang ? "bg-white text-black" : "text-white/60"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
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
          </div>
        </nav>
      </header>

      {/* CINEMATIC HERO */}
      <section id="top" className="relative h-[100svh] min-h-[650px] overflow-hidden bg-[#10251f] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-transparent to-black/25" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24">
          <div className="w-full max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-xl">
                Fresh · préparé minute
              </span>
              <Link
                to="/recrutement"
                className="group rounded-full border border-[#ff705f]/50 bg-[#ff705f]/90 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                On recrute <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative h-[170px] sm:h-[215px] lg:h-[245px]">
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
                  className="absolute left-0 top-0 text-[4.2rem] font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-[7.5rem]"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Poké bowls, crousty chicken et desserts maison à Visé. Choisis ta base, ton topping, ta sauce — et crée exactement le bowl dont tu as envie.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#carte"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ff705f] px-7 py-4 text-sm font-black text-white shadow-[0_20px_60px_-20px_rgba(255,112,95,.9)] transition duration-300 hover:-translate-y-1"
              >
                Composer mon bowl
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#carte"
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold backdrop-blur-xl transition hover:bg-white/15"
              >
                Voir la carte
              </a>
            </div>

            <div className="mt-7 flex gap-7 text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
              <span>À partir de 10 €</span>
              <span>Visé</span>
              <span>À emporter</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMuted((value) => !value)}
          className="absolute bottom-7 right-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] font-black uppercase tracking-wider text-white/70 backdrop-blur-xl"
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          {muted ? "Son" : "Son actif"}
        </button>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-center md:block">
          <div className="text-[8px] font-black uppercase tracking-[0.35em] text-white/45">Découvre · compose · commande</div>
          <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="overflow-hidden bg-[#d7ff45] py-4 text-[#10251f]">
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

      {/* MENU */}
      <section id="carte" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">{t("menu.eyebrow")}</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Choisis ton bowl.<br /><span className="text-[#7d8b83]">Puis rends-le unique.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#68756f]">
              Chaque recette est un point de départ. Clique sur ton bowl pour le personnaliser et composer ta commande.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bowls.map((bowl, index) => (
            <FadeIn key={bowl.id} delay={index * 0.05}>
              <Link
                to={`/product/${bowl.id}`}
                className="group block overflow-hidden rounded-[28px] bg-white shadow-[0_15px_50px_-30px_rgba(0,0,0,.35)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,.45)]"
              >
                <div className="relative aspect-[1.08] overflow-hidden">
                  <img src={bowl.image} alt={bowl.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#17231f] backdrop-blur">
                    {bowl.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black">
                    € {bowl.price.toFixed(2)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black tracking-tight">{bowl.name}</h3>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1ea] transition group-hover:bg-[#ff705f] group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#758079]">{bowl.desc}</p>
                  <div className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-[#ff705f]">Personnaliser →</div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* COMPOSER JOURNEY */}
      <section id="composer" className="bg-[#10251f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d7ff45]">Le parcours</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Du premier clic<br /><span className="text-white/40">au dernier coup de fourchette.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Choisis", "Sélectionne ta recette préférée."],
              ["02", "Personnalise", "Base, protéines, toppings et sauce."],
              ["03", "Valide", "Ajoute ton bowl au panier."],
              ["04", "Savoure", "Commande puis récupère à Visé."],
            ].map(([num, title, desc], i) => (
              <FadeIn key={num} delay={i * 0.08}>
                <div className="h-full bg-[#16352d] p-7 transition hover:bg-[#1b4036]">
                  <span className="text-4xl font-black text-[#ff705f]">{num}</span>
                  <h3 className="mt-8 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.18em] text-[#d7ff45]">Tu préfères commander directement ?</div>
              <p className="mt-2 text-sm text-white/55">Retrouve Poke N Bowl sur notre plateforme de commande.</p>
            </div>
            <a href={ORDER_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff705f] px-6 py-3.5 text-sm font-black">
              Commander <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* QUICK ADD */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[28px] bg-white p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,.3)] sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">{t("menu.drinks")}</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">Une boisson avec ça ?</h3>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {drinks.map((drink) => (
                  <button key={drink.id} onClick={() => addSimpleItem(drink)} className="flex items-center justify-between rounded-2xl bg-[#f5f4ee] px-4 py-3 text-left transition hover:bg-[#d7ff45]">
                    <span className="text-sm font-bold">{drink.name}</span>
                    <span className="text-xs font-black">+ €2</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-[#ff705f] text-white">
              <div className="flex h-full flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/65">{t("menu.desserts")}</p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight">Garde une place pour le dessert.</h3>
                </div>
                <div className="mt-8 flex items-end gap-5">
                  <img src={dessert} alt="Dessert maison" className="h-24 w-24 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <p className="text-sm text-white/75">{desserts.map((d: any) => d.name).join(" · ")}</p>
                    <button onClick={() => desserts[0] && addSimpleItem(desserts[0])} className="mt-3 text-xs font-black uppercase tracking-[0.16em] underline underline-offset-4">Ajouter au panier →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* RECRUITMENT */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <Link to="/recrutement" className="group mx-auto block max-w-[1200px] overflow-hidden rounded-[32px] bg-[#d7ff45] p-7 transition hover:-translate-y-1 sm:p-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#536018]">
                <BriefcaseBusiness className="h-4 w-4" /> Poke N Bowl recrute
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Et si ta prochaine aventure était ici ?</h2>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:translate-x-2">
              <ArrowRight />
            </span>
          </div>
        </Link>
      </section>

      {/* INFOS */}
      <section id="infos" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <FadeIn>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">{t("info.eyebrow")}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-6xl">{t("info.title")}</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6c7771]">{t("info.desc")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#10251f] px-6 py-3.5 text-sm font-black text-white">
                <MapPin className="h-4 w-4" /> Itinéraire
              </a>
              <a href={`tel:${PHONE}`} className="rounded-full border border-[#dfe2da] px-6 py-3.5 text-sm font-black">04 91 28 14 56</a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-[#e5e6df]">
              <iframe
                title="Poke N Bowl Visé"
                src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[28px] bg-[#f7f4ec] p-7 sm:p-9">
              <h3 className="text-2xl font-black">{t("info.hours")}</h3>
              <div className="mt-5 divide-y divide-black/5">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between py-4 text-sm">
                    <span className="font-bold">{day}</span>
                    <span className={time === "Fermé" ? "text-[#89928c]" : "rounded-full bg-white px-3 py-1 font-black"}>{time === "Fermé" ? t("info.closed") : time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-black/5 pt-6 text-sm text-[#707a75]">
                Av. du Pont 12, 4600 Visé · Belgique
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#10251f] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <img src={logo} alt="Poke N Bowl" className="h-16 w-16 object-contain" />
          <div className="mt-4 text-xl font-black">Poke N Bowl Visé</div>
          <div className="mt-2 text-sm text-white/45">Av. du Pont 12, 4600 Visé · Belgique</div>
          <div className="mt-5 flex gap-1 rounded-full border border-white/10 p-1">
            {(["fr", "en", "nl"] as const).map((lang) => (
              <button key={lang} onClick={() => setLanguage(lang)} className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase ${language === lang ? "bg-white text-[#10251f]" : "text-white/45"}`}>
                {lang}
              </button>
            ))}
          </div>
          <div className="mt-7 flex gap-6 text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/recrutement" className="hover:text-white">Recrutement</Link>
            <a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-white">Commander</a>
          </div>
          <div className="mt-8 text-[10px] text-white/25">© {new Date().getFullYear()} Poke N Bowl. Tous droits réservés.</div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-[70] md:hidden">
        <a href="#carte" className="flex items-center justify-center gap-2 rounded-2xl bg-[#ff705f] px-5 py-4 text-sm font-black text-white shadow-2xl">
          Composer mon bowl <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
