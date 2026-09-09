import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import heroPoke from "@/assets/hero-poke.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import dessert from "@/assets/dessert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : poké bowls faits minute, crousty chicken et tiramisus maison. Av. du Pont 12, 4600 Visé. Commande en ligne ou à emporter.",
      },
      { property: "og:title", content: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        property: "og:description",
        content:
          "Bowls généreux composés minute, poulet maison, saumon, scampis. Av. du Pont 12, 4600 Visé.",
      },
    ],
  }),
  component: Index,
});

const ORDER_URL = "https://www.poke-n-bowl.be/";
const MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
const PHONE = "+32491281456";

const bowls = [
  {
    name: "Sweet chicken",
    price: "10,00",
    image: bowlChicken,
    desc: "Poulet maison, guacamole, maïs, tomates cerises, mangue, feta, sauce teriyaki, oignons croustillants, nachos, sésame mixte.",
    tag: "Best-seller",
  },
  {
    name: "Saumon wasabi",
    price: "11,00",
    image: heroPoke,
    desc: "Saumon, avocat, salade d'algues, mangue, maïs, édamamé, mayo wasabi, sésame mixte, nachos.",
    tag: "Signature",
  },
  {
    name: "Scampis royaux",
    price: "10,00",
    image: bowlScampi,
    desc: "Scampis, guacamole, édamamé, tomates, concombre, poivrons, spicy mayo, jalapeños, flocons de chili, nachos.",
    tag: "Relevé",
  },
  {
    name: "Crousty Chicken",
    price: "11,50",
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce blanche, curry onctueux ou mix, oignons frits croustillants.",
    tag: "Réconfort",
  },
];

const spicy = {
  name: "Spicy chicken",
  price: "10,00",
  desc: "Poulet maison, avocat, patates douces, maïs, jalapeños, feta, spicy mayo, flocons de chili, nachos, sésame mix.",
};

const drinks = [
  "Coca-Cola (33 cl)",
  "Coca-Cola Zero (33 cl)",
  "Fanta (33 cl)",
  "Ice-Tea (33 cl)",
  "Eau plate",
  "Eau gazeuse (50 cl)",
];

const desserts = ["Tiramisu Oreo", "Tiramisu Nutella", "Tiramisu Spéculoos"];

const hours = [
  { day: "Lundi", time: "17:15 – 20:30" },
  { day: "Mardi", time: "17:15 – 20:30" },
  { day: "Mercredi", time: "17:15 – 20:30" },
  { day: "Jeudi", time: "17:15 – 20:30" },
  { day: "Vendredi", time: "17:15 – 20:30" },
  { day: "Samedi", time: "17:45 – 20:30" },
  { day: "Dimanche", time: "Fermé" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Logo Poke N Bowl" width={40} height={40} className="h-9 w-9" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              Poke N Bowl
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#carte" className="transition-colors hover:text-primary">
              La carte
            </a>
            <a href="#bowl" className="transition-colors hover:text-primary">
              Crée ton bowl
            </a>
            <a href="#infos" className="transition-colors hover:text-primary">
              Infos & horaires
            </a>
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-coral-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Commander
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="surface-hero relative overflow-hidden text-deep-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="eyebrow text-lime">Visé · Poké bar & take away</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Des bowls
              <span className="block text-coral">frais, faits minute.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-deep-foreground/80">
              Poulet maison, saumon, scampis, légumes croquants et sauces signature. On compose
              votre bowl devant vous, avenue du Pont à Visé.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                Commander en ligne
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-deep-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-deep-foreground/10"
              >
                04 91 28 14 56
              </a>
            </div>
            <dl className="mt-10 flex gap-8 text-sm">
              <div>
                <dt className="text-deep-foreground/60">Note Google</dt>
                <dd className="font-display text-2xl font-bold text-lime">4,5 / 5</dd>
              </div>
              <div>
                <dt className="text-deep-foreground/60">Bowls dès</dt>
                <dd className="font-display text-2xl font-bold text-lime">10 €</dd>
              </div>
              <div>
                <dt className="text-deep-foreground/60">Prêt en</dt>
                <dd className="font-display text-2xl font-bold text-lime">~10 min</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={heroPoke}
                alt="Poké bowl au saumon, avocat, mangue et édamamé"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-background px-5 py-3 text-foreground shadow-lift">
              <p className="eyebrow text-primary">Fait maison</p>
              <p className="text-sm font-semibold">Poulet mariné & sauces signature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau */}
      <div className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 py-4 text-center text-sm font-semibold text-secondary-foreground">
          <span>Produits frais du jour</span>
          <span>Sur place & à emporter</span>
          <span>Options épicées</span>
          <span>Desserts maison</span>
        </div>
      </div>

      {/* Carte */}
      <section id="carte" className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-coral">La carte</p>
        <h2 className="mt-3 max-w-xl text-4xl font-extrabold md:text-5xl">
          Nos bowls les plus demandés
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {bowls.map((b) => (
            <article key={b.name} className="card-dish flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
                  {b.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold">{b.name}</h3>
                  <span className="font-display text-lg font-bold text-coral">€ {b.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-bold">{spicy.name}</h3>
            <span className="font-display text-lg font-bold text-coral">€ {spicy.price}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{spicy.desc}</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft">
            <h3 className="text-xl font-bold">Boissons — € 2,00</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {drinks.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-dish flex items-center gap-5 p-5">
            <img
              src={dessert}
              alt="Tiramisu Oreo maison"
              loading="lazy"
              width={900}
              height={900}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">Tiramisus — € 4,00</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desserts.join(" · ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crée ton bowl */}
      <section id="bowl" className="surface-hero text-deep-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <p className="eyebrow text-lime">Crée ton bowl · € 10,00</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
            Ta base, ta protéine, tes toppings, ta sauce.
          </h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "La base", d: "Riz vinaigré ou salade croquante." },
              { n: "02", t: "La protéine", d: "Poulet maison, saumon, scampis ou veggie." },
              { n: "03", t: "Les toppings", d: "Avocat, mangue, édamamé, maïs, feta, algues…" },
              { n: "04", t: "La sauce", d: "Teriyaki, spicy mayo, mayo wasabi, curry." },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-deep-foreground/15 bg-deep-foreground/5 p-6"
              >
                <span className="font-display text-3xl font-extrabold text-coral">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-deep-foreground/75">{s.d}</p>
              </div>
            ))}
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            Composer mon bowl
          </a>
        </div>
      </section>

      {/* Infos */}
      <section id="infos" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-coral">Nous trouver</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Av. du Pont 12, Visé</h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              À deux pas du centre de Visé. Commandez par téléphone et récupérez votre bowl tout
              chaud, ou installez-vous sur place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Itinéraire
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Appeler
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border shadow-soft">
              <iframe
                title="Carte Poke N Bowl Visé"
                src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-soft">
            <h3 className="text-2xl font-bold">Horaires</h3>
            <ul className="mt-5 divide-y divide-border">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                  <span className="font-medium">{h.day}</span>
                  <span
                    className={
                      h.time === "Fermé" ? "text-muted-foreground" : "font-semibold text-primary"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Tél. <a href={`tel:${PHONE}`} className="font-semibold text-foreground">04 91 28 14 56</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center text-sm text-secondary-foreground">
          <img src={logo} alt="" width={44} height={44} loading="lazy" className="h-11 w-11" />
          <p className="font-display text-lg font-extrabold">Poke N Bowl Visé</p>
          <p>Av. du Pont 12, 4600 Visé · Belgique</p>
          <p className="text-muted-foreground">© {new Date().getFullYear()} Poke N Bowl</p>
        </div>
      </footer>
    </div>
  );
}
