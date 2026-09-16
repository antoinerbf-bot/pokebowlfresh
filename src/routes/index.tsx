import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";

import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bowls, drinks, desserts } from "../lib/data";
import { CreateBowlModal } from "../components/CreateBowlModal";

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

// Advanced Parallax Wrapper using Framer Motion
const ParallaxSection = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode, speed?: number, className?: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, 3000 * speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />
      {children}
    </div>
  );
};

// Fade In Component
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: { children: React.ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right", className?: string }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CartDrawer />
      <CreateBowlModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <motion.img 
              whileHover={{ rotate: 12, scale: 1.1 }}
              src={logo} 
              alt="Logo Poke N Bowl" 
              className="h-10 w-10 drop-shadow-md" 
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
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1 hidden sm:flex">
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
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-coral text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Hero with Video Background */}
      <section id="top" className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src="https://videos.pexels.com/video-files/3205739/3205739-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
        
        <motion.div style={{ y }} className="relative z-10 max-w-3xl">
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/30 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-lime shadow-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime"></span>
              </span>
              {t("hero.subtitle")}
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl drop-shadow-lg text-white">
              {t("hero.title1")}
              <span className="block text-coral">{t("hero.title2")}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/90 drop-shadow-md font-medium md:text-lg">
              {t("hero.desc")}
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-coral px-8 py-4 text-sm font-bold text-coral-foreground shadow-xl transition-all"
            >
              {t("hero.order")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#carte"
              className="rounded-full border-2 border-white/30 bg-black/20 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              {t("hero.menu")}
            </motion.a>
          </FadeIn>
        </motion.div>
      </section>

      {/* La carte */}
      <ParallaxSection speed={0.1} className="relative z-10 -mt-10 bg-background/95 backdrop-blur-3xl rounded-t-[3rem] border-t border-border shadow-2xl">
        <div id="carte" className="mx-auto max-w-5xl px-5 py-20">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-coral">{t("menu.eyebrow")}</p>
                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                  {t("menu.title")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">{t("menu.desc")}</p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bowls.map((b, i) => (
              <FadeIn key={b.name} delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-lift transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {b.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold text-primary shadow-sm backdrop-blur-md">
                        {b.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-bold line-clamp-1">{b.name}</h3>
                      <span className="font-display font-bold text-coral shrink-0">€ {b.price.toFixed(2)}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2" title={b.desc}>{b.desc}</p>
                    <div className="mt-auto pt-3">
                      <Button variant="secondary" size="sm" className="w-full text-xs h-8 font-bold hover:bg-coral hover:text-white transition-colors" onClick={() => directAddToCart(b)}>
                        + Ajouter
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
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
        </div>
      </ParallaxSection>

      {/* Crée ton bowl */}
      <ParallaxSection speed={0.2} className="surface-hero text-deep-foreground py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center relative z-10">
          <p className="eyebrow text-lime" id="bowl">{t("bowl.eyebrow")} — € 10,00</p>
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
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="mt-8 inline-block rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
          >
            Composer mon bowl
          </button>
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
          <p>Av. du Pont 12, 4600 Visé — Belgique</p>
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
