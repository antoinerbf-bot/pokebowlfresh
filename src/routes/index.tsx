import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";

import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ShoppingCart, Volume2, VolumeX, Sparkles, ArrowRight, BriefcaseBusiness } from "lucide-react";
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
const ParallaxSection = ({ children, speed = 0.12, className = "" }: { children: React.ReactNode, speed?: number, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70 * speed / 0.12, -70 * speed / 0.12]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative will-change-transform">{children}</motion.div>
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
  const [heroMuted, setHeroMuted] = useState(true);
  const [heroLine, setHeroLine] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setHeroLine(v => (v + 1) % 3), 3200); return () => window.clearInterval(id); }, []);
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
      
      {/* Navigation — marque + accès rapides */}
      <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/15 bg-black/10 text-white backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 rounded-full pr-3 transition-transform hover:scale-[1.02]">
            <img src={logo} alt="Poke N Bowl" className="h-12 w-12 shrink-0 object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,.35)] sm:h-14 sm:w-14" />
            <div className="hidden sm:block leading-none"><div className="font-display text-xl font-black tracking-tight">Poke N Bowl</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">Visé · Fresh bowls</div></div>
          </a>
          <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.14em] md:flex">
            <a href="#carte" className="hover:text-lime transition-colors">La carte</a>
            <a href="#bowl" className="hover:text-lime transition-colors">Composer</a>
            <a href="#infos" className="hover:text-lime transition-colors">Infos</a>
            <Link to="/contact" className="hover:text-lime transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/recrutement" className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-coral px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] shadow-[0_12px_35px_-12px_rgba(255,93,93,.9)] sm:flex">
              <span className="absolute inset-0 animate-pulse bg-white/10" /><span className="relative h-2 w-2 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,.15)]" /> <span className="relative">On recrute</span><ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="hidden items-center gap-1 rounded-full bg-black/25 p-1 backdrop-blur md:flex">{(["fr","en","nl"] as const).map(lang => <button key={lang} onClick={() => setLanguage(lang)} className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${language===lang?"bg-white text-black":"text-white/65"}`}>{lang}</button>)}</div>
            <motion.button whileTap={{scale:.95}} onClick={() => setIsCartOpen(true)} className="relative rounded-full bg-white/15 p-2.5 backdrop-blur hover:bg-white/25"><ShoppingCart className="h-4 w-4" />{cartItemsCount>0&&<span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-coral text-[9px] font-bold">{cartItemsCount}</span>}</motion.button>
          </div>
        </nav>
      </header>

      {/* Hero — composition marketing immersive, sans éléments superposés */}
      <section id="top" className="relative min-h-[calc(100svh-81px)] overflow-hidden bg-[#f7f3e9] text-[      {/* Hero — film food cinématique + parcours conversion */}
      <section id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#10251f] text-white">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted={heroMuted} loop playsInline preload="auto" poster="/hero-video-poster.jpg">
          <source src="/hero-video.webm" type="video/webm" /><source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" /><div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/25" /><div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_48%,rgba(180,255,55,.18),transparent_32%)]" />

        <button onClick={() => setHeroMuted(v=>!v)} aria-label={heroMuted ? "Activer le son" : "Couper le son"} className="absolute bottom-7 right-5 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md hover:bg-black/40">
          {heroMuted ? <VolumeX className="h-3.5 w-3.5"/> : <Volume2 className="h-3.5 w-3.5"/>} {heroMuted ? "Son coupé" : "Son actif"}
        </button>

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-white/85 backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_0_5px_rgba(180,255,55,.15)]"/> Fresh. Généreux. Préparé minute.</motion.div>
            <div className="relative min-h-[190px] sm:min-h-[230px]">
              {[
                <>Le bowl qui<br/><span className="text-lime">te ressemble.</span></>,
                <>Du frais.<br/><span className="text-coral">Du vrai.</span></>,
                <>Compose.<br/><span className="text-lime">Savoure.</span></>
              ].map((line,i)=><motion.h1 key={i} initial={{opacity:0,y:24}} animate={{opacity:heroLine===i?1:0,y:heroLine===i?0:-18}} transition={{duration:.65,ease:"easeOut"}} className="absolute left-0 top-0 text-5xl font-black leading-[.9] tracking-[-.055em] sm:text-7xl lg:text-[6.5rem]">{line}</motion.h1>)}
            </div>
            <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.7}} className="mt-4 max-w-xl text-sm leading-relaxed text-white/78 sm:text-base">Poké bowls, crousty chicken et desserts maison à Visé. Choisis ton bowl, personnalise-le et passe commande.</motion.p>
            <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.38,duration:.7}} className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#carte" className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-white shadow-[0_20px_55px_-18px_rgba(255,93,93,.9)] hover:-translate-y-1 transition-transform">Composer son bowl <ArrowRight className="h-4 w-4"/></a>
              <a href="#carte" className="rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md hover:bg-white/15">Voir tous les bowls</a>
            </motion.div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-black uppercase tracking-[.18em] text-white/55"><span>À partir de 10 €</span><span>Visé</span><span>À emporter</span></div>
          </div>
        </div>

        <Link to="/recrutement" className="group absolute right-5 top-24 z-30 w-[205px] sm:right-8 sm:top-28 sm:w-[230px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-[#17342d]/85 p-3 shadow-[0_20px_55px_-18px_rgba(0,0,0,.8)] backdrop-blur-xl transition-transform group-hover:-translate-y-1">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-coral/25 blur-2xl"/><div className="flex items-center gap-3"><span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral"><span className="absolute inset-0 animate-ping rounded-xl bg-coral/30"/><BriefcaseBusiness className="relative h-4 w-4"/></span><div><div className="text-[10px] font-black uppercase tracking-[.18em] text-coral">On recrute</div><div className="mt-0.5 text-[11px] font-semibold text-white/75">Ta prochaine aventure ?</div></div><ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1"/></div>
          </div>
        </Link>
        <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-center md:block"><div className="text-[9px] font-black uppercase tracking-[.3em] text-white/45">Découvre · compose · commande</div><div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-white/50 to-transparent"/></div>
      </section>


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

      <section className="relative overflow-hidden bg-coral py-6 text-white">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex w-[200%] whitespace-nowrap text-sm font-black uppercase tracking-[0.22em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-4"><BriefcaseBusiness className="h-4 w-4" /> On recrute · Rejoins Poke N Bowl</span>
          ))}
        </motion.div>
      </section>

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

      <div className="fixed inset-x-3 bottom-3 z-[70] md:hidden"><a href={ORDER_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-coral px-5 py-4 text-sm font-black text-white shadow-lift">Composer mon bowl <ArrowRight className="h-4 w-4" /></a></div>

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
