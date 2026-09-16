import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";

import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bowls, spicy, drinks, desserts } from "../lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : poké bowls faits minute, crousty chicken et tiramisus maison. Av. du Pont 12, 4600 Visé. Commande en ligne ou à emporter.",
      },
    ],
  }),
  component: Index,
});

const ORDER_URL = "https://www.poke-n-bowl.be/";
const MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
const PHONE = "+32491281456";

// Parallax Wrapper
const ParallaxSection = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode, speed?: number, className?: string }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div style={{ transform: `translateY(${offset * speed}px)`, transition: "transform 0.1s ease-out" }} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
      {children}
    </div>
  );
};

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
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  
  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const directAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      toppings: [],
      image: item.image || dessert,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CartDrawer />
      
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo Poke N Bowl" 
              className="h-10 w-10 hover:rotate-12 transition-transform duration-300 drop-shadow-md" 
            />
            <span className="font-display text-lg font-extrabold tracking-tight hidden sm:block">
              Poke N Bowl
            </span>
          </a>
          
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#carte" className="transition-colors hover:text-primary">
              {t("nav.menu")}
            </a>
            <a href="#bowl" className="transition-colors hover:text-primary">
              {t("nav.create")}
            </a>
            <a href="#infos" className="transition-colors hover:text-primary">
              {t("nav.info")}
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              {(["fr", "en", "nl"] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase transition-colors ${language === lang ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero with Video Background */}
      <section id="top" className="relative overflow-hidden text-white min-h-[85vh] flex items-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3205739/3205739-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 mx-auto max-w-5xl px-5 py-16 md:py-24 w-full">
          <div className="max-w-2xl">
            <p className="eyebrow text-lime mb-2">{t("hero.subtitle")}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl">
              {t("hero.title1")}
              <span className="block text-coral">{t("hero.title2")}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 max-w-md">
              {t("hero.desc")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                {t("hero.order")}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                04 91 28 14 56
              </a>
            </div>
            <dl className="mt-8 flex gap-6 text-sm border-t border-white/20 pt-6">
              <div>
                <dt className="text-white/60">{t("hero.rating")}</dt>
                <dd className="font-display text-xl font-bold text-lime">4,5 / 5</dd>
              </div>
              <div>
                <dt className="text-white/60">{t("hero.price")}</dt>
                <dd className="font-display text-xl font-bold text-lime">10 €</dd>
              </div>
              <div>
                <dt className="text-white/60">{t("hero.time")}</dt>
                <dd className="font-display text-xl font-bold text-lime">~10 min</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Bandeau */}
      <div className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-3 text-center text-xs font-semibold text-secondary-foreground">
          <span>{t("banner.1")}</span>
          <span>{t("banner.2")}</span>
          <span>{t("banner.3")}</span>
          <span>{t("banner.4")}</span>
        </div>
      </div>

      {/* Carte */}
      <ParallaxSection speed={0.15} className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="text-center md:text-left mb-10">
          <p className="eyebrow text-coral" id="carte">{t("menu.eyebrow")}</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            {t("menu.title")}
          </h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bowls.map((b) => (
            <Link key={b.name} to={`/product/${b.id}`} className="card-dish flex flex-col group overflow-hidden border border-transparent hover:border-border transition-all hover:shadow-lift">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] uppercase font-bold text-primary shadow-sm">
                  {b.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 bg-card z-10 relative">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-bold">{b.name}</h3>
                  <span className="font-display text-base font-bold text-coral">€ {b.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground flex-1 line-clamp-3">{b.desc}</p>
                <div className="mt-4 pt-3 border-t border-border/50 flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-lg shadow-sm text-xs h-8 hover:bg-primary hover:text-primary-foreground transition-colors">
                    Voir & Personnaliser
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-lg font-bold mb-3">{t("menu.drinks")} — € 2,00</h3>
            <ul className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
              {drinks.map((d) => (
                <li key={d.id} className="flex flex-col gap-1 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
                    <span className="flex-1 font-medium">{d.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px] w-20 ml-2 rounded-full border border-border" onClick={() => directAddToCart(d)}>
                    + Ajouter
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-lg font-bold mb-3">{t("menu.desserts")} — € 4,00</h3>
            <div className="flex gap-4">
              <img
                src={dessert}
                alt="Tiramisus"
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-xl object-cover shadow-sm"
              />
              <ul className="grid gap-2 text-xs text-muted-foreground flex-1">
                {desserts.map((d) => (
                  <li key={d.id} className="flex flex-col gap-1 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                      <span className="flex-1 font-medium">{d.name}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-[10px] w-20 ml-2 rounded-full border border-border" onClick={() => directAddToCart(d)}>
                      + Ajouter
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Crée ton bowl */}
      <ParallaxSection speed={0.2} className="surface-hero text-deep-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center relative z-10">
          <p className="eyebrow text-lime" id="bowl">{t("bowl.eyebrow")} · € 10,00</p>
          <h2 className="mx-auto mt-2 max-w-xl text-3xl font-extrabold md:text-4xl">
            {t("bowl.title")}
          </h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: t("bowl.step1.title"), d: t("bowl.step1.desc") },
              { n: "02", t: t("bowl.step2.title"), d: t("bowl.step2.desc") },
              { n: "03", t: t("bowl.step3.title"), d: t("bowl.step3.desc") },
              { n: "04", t: t("bowl.step4.title"), d: t("bowl.step4.desc") },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-deep-foreground/15 bg-deep-foreground/5 p-5 hover:bg-deep-foreground/10 transition-colors shadow-sm hover:shadow-md"
              >
                <span className="font-display text-2xl font-extrabold text-coral">{s.n}</span>
                <h3 className="mt-2 text-base font-bold">{s.t}</h3>
                <p className="mt-1 text-xs text-deep-foreground/75">{s.d}</p>
              </div>
            ))}
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            {t("bowl.cta")}
          </a>
        </div>
      </ParallaxSection>

      {/* Infos */}
      <ParallaxSection speed={0.1} className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-coral" id="infos">{t("info.eyebrow")}</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t("info.title")}</h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {t("info.desc")}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                {t("info.route")}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold transition-colors hover:bg-secondary"
              >
                {t("info.call")}
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft group relative">
              <div className="group-hover:scale-105 transition-transform duration-1000 origin-center h-full">
                <iframe
                  title="Carte Poke N Bowl Visé"
                  src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="pointer-events-none group-hover:pointer-events-auto"
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-lift transition-shadow relative overflow-hidden h-fit">
            <h3 className="text-xl font-bold">{t("info.hours")}</h3>
            <ul className="mt-4 divide-y divide-border relative z-10">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-2 text-xs">
                  <span className="font-medium">{h.day}</span>
                  <span
                    className={
                      h.time === "Fermé" ? "text-muted-foreground" : "font-semibold text-primary"
                    }
                  >
                    {h.time === "Fermé" ? t("info.closed") : h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
              <img src={logo} alt="" className="w-48 h-48" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground relative z-10">
              Tél. <a href={`tel:${PHONE}`} className="font-semibold text-foreground hover:text-coral transition-colors">04 91 28 14 56</a>
            </p>
          </div>
        </div>
      </ParallaxSection>

      <footer className="border-t border-border bg-secondary overflow-hidden">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-8 text-center text-xs text-secondary-foreground relative">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 mb-1 hover:scale-110 hover:rotate-6 transition-all duration-300 drop-shadow-md grayscale hover:grayscale-0" 
          />
          <p className="font-display text-base font-extrabold">Poke N Bowl Visé</p>
          <p>Av. du Pont 12, 4600 Visé · Belgique</p>
          <div className="flex gap-3 mt-2">
             {["fr", "en", "nl"].map(lang => (
               <button key={lang} onClick={() => setLanguage(lang as any)} className="text-[10px] uppercase font-bold text-muted-foreground hover:text-foreground transition-colors">
                 {lang}
               </button>
             ))}
          </div>
          <p className="text-muted-foreground mt-2 opacity-60">© {new Date().getFullYear()} Poke N Bowl</p>
        </div>
      </footer>
    </div>
  );
}
