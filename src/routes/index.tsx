import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  
  // Parallax for the hero video
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 300]);

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CartDrawer />
      
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
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
          
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
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

      {/* Split Hero with Video on the side */}
      <section id="top" className="relative overflow-hidden surface-hero text-deep-foreground pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-lime/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-[600px] w-[600px] rounded-full bg-coral/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-5 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <FadeIn delay={0.1}>
              <p className="eyebrow text-lime mb-3 inline-block px-4 py-1.5 bg-lime/10 rounded-full">{t("hero.subtitle")}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl tracking-tight">
                {t("hero.title1")}
                <span className="block text-coral mt-2">{t("hero.title2")}</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-5 text-base leading-relaxed text-deep-foreground/80 max-w-md mx-auto md:mx-0">
                {t("hero.desc")}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-coral px-8 py-3.5 text-sm font-semibold text-coral-foreground shadow-lift flex items-center gap-2"
              >
                {t("hero.order")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${PHONE}`}
                className="rounded-full border border-deep-foreground/20 bg-background/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-deep-foreground/5"
              >
                04 91 28 14 56
              </motion.a>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-deep-foreground/10 pt-8 max-w-md mx-auto md:mx-0 text-left">
                <div>
                  <dt className="text-xs text-deep-foreground/60 uppercase tracking-wider font-semibold mb-1">{t("hero.rating")}</dt>
                  <dd className="font-display text-2xl font-bold text-lime">4.5<span className="text-base text-deep-foreground/40">/5</span></dd>
                </div>
                <div>
                  <dt className="text-xs text-deep-foreground/60 uppercase tracking-wider font-semibold mb-1">{t("hero.price")}</dt>
                  <dd className="font-display text-2xl font-bold text-lime">10 €</dd>
                </div>
                <div>
                  <dt className="text-xs text-deep-foreground/60 uppercase tracking-wider font-semibold mb-1">{t("hero.time")}</dt>
                  <dd className="font-display text-2xl font-bold text-lime">10<span className="text-base text-deep-foreground/40">min</span></dd>
                </div>
              </dl>
            </FadeIn>
          </div>

          {/* Video Side */}
          <div className="flex-1 w-full relative z-10">
            <motion.div 
              style={{ y: videoY }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700"
            >
              {/* Note: This is a placeholder for a poke bowl building video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
              >
                <source src="https://videos.pexels.com/video-files/8844883/8844883-uhd_2160_3840_25fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <p className="eyebrow text-primary text-[10px] mb-1">Préparation minute</p>
                  <p className="text-sm font-semibold text-foreground">Fait sous vos yeux avec des produits frais.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* Bandeau avec défilement continu */}
      <div className="border-y border-border bg-secondary overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-x-12 px-5 py-4 text-xs font-semibold text-secondary-foreground uppercase tracking-widest w-[200%]"
        >
          <span>{t("banner.1")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.2")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.3")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.4")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.1")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.2")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.3")}</span>
          <span className="text-coral">•</span>
          <span>{t("banner.4")}</span>
        </motion.div>
      </div>

      {/* Carte */}
      <ParallaxSection speed={0.05} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <p className="eyebrow text-coral" id="carte">{t("menu.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl tracking-tight">
              {t("menu.title")}
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bowls.map((b, i) => (
            <FadeIn key={b.name} delay={i * 0.1} direction="up">
              <Link to={`/product/${b.id}`} className="card-dish flex flex-col group overflow-hidden border border-border/50 hover:border-coral/50 transition-all hover:shadow-2xl h-full bg-card rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/95 backdrop-blur-md px-3 py-1 text-[10px] uppercase font-bold text-primary shadow-sm border border-border/50">
                    {b.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 relative">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-coral transition-colors">{b.name}</h3>
                    <span className="font-display text-lg font-bold text-foreground bg-secondary px-2 py-1 rounded-lg">€ {b.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1 line-clamp-3">{b.desc}</p>
                  
                  <div className="mt-6 flex gap-2">
                    <Button variant="outline" className="flex-1 rounded-xl shadow-sm text-xs h-10 border-border/80 group-hover:bg-coral group-hover:text-white group-hover:border-coral transition-all duration-300">
                      Composer ce bowl
                    </Button>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="rounded-3xl border border-border/50 bg-secondary/20 p-8 shadow-soft h-full hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-lime text-3xl">🍹</span> {t("menu.drinks")} — € 2,00
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {drinks.map((d) => (
                  <li key={d.id} className="flex flex-col gap-2 p-3 rounded-xl bg-background border border-border/30 hover:border-lime/50 transition-colors">
                    <span className="font-medium text-foreground">{d.name}</span>
                    <Button variant="ghost" size="sm" className="h-7 text-[10px] w-full rounded-lg bg-secondary/50 hover:bg-lime/20 hover:text-lime-foreground" onClick={() => directAddToCart(d)}>
                      + Ajouter
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-3xl border border-border/50 bg-secondary/20 p-8 shadow-soft h-full hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-coral text-3xl">🍰</span> {t("menu.desserts")} — € 4,00
              </h3>
              <div className="flex gap-6 items-start flex-1">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  src={dessert}
                  alt="Tiramisus"
                  loading="lazy"
                  className="h-32 w-32 shrink-0 rounded-2xl object-cover shadow-md border border-border/50 hidden sm:block"
                />
                <ul className="grid gap-3 text-sm text-muted-foreground flex-1">
                  {desserts.map((d) => (
                    <li key={d.id} className="flex flex-col gap-2 p-3 rounded-xl bg-background border border-border/30 hover:border-coral/50 transition-colors">
                      <span className="font-medium text-foreground">{d.name}</span>
                      <Button variant="ghost" size="sm" className="h-7 text-[10px] w-full rounded-lg bg-secondary/50 hover:bg-coral/20 hover:text-coral" onClick={() => directAddToCart(d)}>
                        + Ajouter
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Crée ton bowl */}
      <ParallaxSection speed={0.1} className="relative surface-hero text-deep-foreground py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 text-center relative z-10">
          <FadeIn>
            <p className="eyebrow text-lime" id="bowl">{t("bowl.eyebrow")} · € 10,00</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold md:text-5xl tracking-tight">
              {t("bowl.title")}
            </h2>
          </FadeIn>
          
          <div className="mt-16 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: t("bowl.step1.title"), d: t("bowl.step1.desc") },
              { n: "02", t: t("bowl.step2.title"), d: t("bowl.step2.desc") },
              { n: "03", t: t("bowl.step3.title"), d: t("bowl.step3.desc") },
              { n: "04", t: t("bowl.step4.title"), d: t("bowl.step4.desc") },
            ].map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="rounded-3xl border border-deep-foreground/10 bg-background/50 backdrop-blur-md p-8 shadow-lg hover:shadow-xl transition-shadow h-full relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="font-display text-8xl font-black">{s.n}</span>
                  </div>
                  <span className="font-display text-3xl font-extrabold text-coral relative z-10">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold relative z-10">{s.t}</h3>
                  <p className="mt-2 text-sm text-deep-foreground/70 leading-relaxed relative z-10">{s.d}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.6}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 text-base font-bold text-coral-foreground shadow-lift"
            >
              {t("bowl.cta")} <span>→</span>
            </motion.a>
          </FadeIn>
        </div>
      </ParallaxSection>

      {/* Infos */}
      <ParallaxSection speed={0.05} className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
          <FadeIn direction="left">
            <p className="eyebrow text-coral" id="infos">{t("info.eyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{t("info.title")}</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              {t("info.desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-md"
              >
                {t("info.route")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${PHONE}`}
                className="rounded-full border-2 border-border px-8 py-3.5 text-sm font-bold hover:bg-secondary hover:border-secondary transition-colors"
              >
                {t("info.call")}
              </motion.a>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-xl group relative">
              <div className="group-hover:scale-105 transition-transform duration-1000 origin-center h-full">
                <iframe
                  title="Carte Poke N Bowl Visé"
                  src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="pointer-events-none group-hover:pointer-events-auto"
                />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-2xl relative overflow-hidden h-fit">
              <h3 className="text-2xl font-bold mb-6">{t("info.hours")}</h3>
              <ul className="divide-y divide-border/50 relative z-10">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-4 text-sm hover:bg-secondary/20 px-2 -mx-2 rounded-lg transition-colors">
                    <span className="font-semibold">{h.day}</span>
                    <span
                      className={
                        h.time === "Fermé" ? "text-muted-foreground font-medium" : "font-bold text-primary bg-primary/10 px-3 py-1 rounded-full"
                      }
                    >
                      {h.time === "Fermé" ? t("info.closed") : h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-16 -right-16 opacity-5 pointer-events-none">
                <img src={logo} alt="" className="w-64 h-64" />
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 text-sm text-muted-foreground relative z-10 flex items-center justify-between">
                <span>Contactez-nous</span>
                <a href={`tel:${PHONE}`} className="font-bold text-foreground text-lg hover:text-coral transition-colors">04 91 28 14 56</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </ParallaxSection>

      <footer className="border-t border-border bg-secondary overflow-hidden mt-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center text-sm text-secondary-foreground relative">
          <motion.img 
            whileHover={{ scale: 1.2, rotate: 15 }}
            src={logo} 
            alt="Logo" 
            className="h-16 w-16 mb-2 drop-shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
          />
          <p className="font-display text-xl font-black tracking-tight">Poke N Bowl Visé</p>
          <p className="font-medium">Av. du Pont 12, 4600 Visé · Belgique</p>
          <div className="flex gap-4 mt-4 bg-background/50 p-2 rounded-full backdrop-blur-sm border border-border/50">
             {["fr", "en", "nl"].map(lang => (
               <button 
                 key={lang} 
                 onClick={() => setLanguage(lang as any)} 
                 className={`text-xs uppercase font-bold px-3 py-1 rounded-full transition-colors ${language === lang ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/20 text-muted-foreground'}`}
               >
                 {lang}
               </button>
             ))}
          </div>
          <p className="text-muted-foreground mt-4 opacity-50 font-medium">© {new Date().getFullYear()} Poke N Bowl. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
