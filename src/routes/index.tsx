import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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
              className="h-11 w-11 shrink-0 object-contain drop-shadow-md" 
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
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
            <Link to="/recrutement" className="transition-colors hover:text-primary">Recrutement</Link>
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

      {/* Recruitment flash */}
      <Link to="/recrutement" className="fixed right-4 top-24 z-[60] hidden sm:flex items-center gap-2 rounded-full bg-coral px-4 py-2 text-[11px] font-black uppercase tracking-widest text-white shadow-lift hover:scale-105 transition-transform"><BriefcaseBusiness className="h-3.5 w-3.5" /> On recrute</Link>

      {/* Immersive hero — bowl assembly */}
      <section id="top" className="relative min-h-[calc(100svh-73px)] overflow-hidden surface-hero text-deep-foreground">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[620px] w-[620px] rounded-full bg-lime/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[650px] w-[650px] rounded-full bg-coral/20 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,currentColor_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-7xl items-center px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="z-20 text-center lg:col-span-5 lg:text-left">
              <FadeIn delay={0.05}><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-lime shadow-sm"><Sparkles className="h-3.5 w-3.5 animate-pulse" /> {t("hero.subtitle")}</div></FadeIn>
              <FadeIn delay={0.12}><h1 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{t("hero.title1")}<span className="mt-2 block bg-gradient-to-r from-coral via-amber-400 to-lime bg-clip-text text-transparent">{t("hero.title2")}</span></h1></FadeIn>
              <FadeIn delay={0.2}><p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-deep-foreground/75 sm:text-lg lg:mx-0">{t("hero.desc")}</p></FadeIn>
              <FadeIn delay={0.28}><div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"><motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} href={ORDER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-black text-coral-foreground shadow-lift">{t("hero.compose")} <ArrowRight className="h-4 w-4" /></motion.a><motion.a whileHover={{ scale: 1.04 }} href="#carte" className="rounded-full border-2 border-deep-foreground/15 bg-background/55 px-6 py-3.5 text-sm font-bold backdrop-blur-md">Voir les bowls</motion.a></div></FadeIn>
              <FadeIn delay={0.36}><div className="mt-7 grid max-w-md grid-cols-3 gap-2 text-left lg:mt-9">{[["4.5","Avis"],["10 €","À partir de"],["10","min"]].map(([value,label]) => (<div key={label} className="rounded-2xl border border-white/10 bg-background/45 p-3 backdrop-blur-md"><div className="font-display text-xl font-black text-lime">{value}{label === "min" && <span className="text-xs font-normal text-deep-foreground/50"> min</span>}</div><div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-deep-foreground/55">{label}</div></div>))}</div></FadeIn>
            </div>
            <div className="relative z-10 flex min-h-[420px] items-center justify-center lg:col-span-7 lg:min-h-[620px]">
              <FadeIn delay={0.18} direction="left" className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/20 blur-3xl sm:h-[500px] sm:w-[500px]" />
                <motion.div animate={{ rotate: [0, 1.5, 0, -1.5, 0], y: [0, -7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative h-[245px] w-[245px] overflow-hidden rounded-[46%] border-[10px] border-background bg-background shadow-[0_35px_80px_-20px_rgba(0,0,0,.45)] sm:h-[350px] sm:w-[350px]"><img src={bowlChicken} alt="Poké bowl Poke N Bowl" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" /></div>
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/30 bg-background/90 px-5 py-2 text-center text-xs font-black shadow-xl backdrop-blur-xl"><span className="text-coral">TON BOWL.</span> À TOI DE LE COMPOSER.</div>
                </motion.div>
                {[{src:bowlScampi,label:"PROTÉINE",x:"-38%",y:"-28%",delay:0.4},{src:bowlChicken,label:"FRAÎCHEUR",x:"34%",y:"-26%",delay:0.55},{src:bowlScampi,label:"SAUCE",x:"38%",y:"34%",delay:0.7},{src:bowlChicken,label:"TOPPINGS",x:"-40%",y:"35%",delay:0.85}].map((item,i)=>(<motion.div key={item.label} initial={{opacity:0,scale:.5}} animate={{opacity:1,scale:1}} transition={{delay:item.delay,duration:.7,type:"spring",stiffness:150}} className="absolute left-1/2 top-1/2 z-30" style={{x:item.x,y:item.y}}><motion.div animate={{y:[0,-10,0],rotate:[i%2?3:-3,i%2?-3:3,i%2?3:-3]}} transition={{duration:4+i*.5,repeat:Infinity,ease:"easeInOut"}} className="flex items-center gap-2 rounded-full border-4 border-background bg-background/95 p-1.5 pr-3 shadow-2xl backdrop-blur-xl"><img src={item.src} alt="" className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16" /><span className="text-[9px] font-black uppercase tracking-widest sm:text-[10px]">{item.label}</span></motion.div></motion.div>))}
                <motion.div animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="absolute left-1/2 top-1/2 z-0 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-coral/25 sm:h-[570px] sm:w-[570px]" />
                <motion.div animate={{rotate:-360}} transition={{duration:42,repeat:Infinity,ease:"linear"}} className="absolute left-1/2 top-1/2 z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-lime/25 sm:h-[470px] sm:w-[470px]" />
                <Link to="/recrutement" className="absolute right-0 top-2 z-40 flex items-center gap-2 rounded-full border-2 border-background bg-coral px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl transition-transform hover:scale-105 sm:right-5 sm:top-4 sm:px-5 sm:py-3 sm:text-xs"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" /></span>On recrute <ArrowRight className="h-3.5 w-3.5" /></Link>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[9px] font-black uppercase tracking-[0.25em] text-deep-foreground/40 md:flex"><span className="h-px w-10 bg-current" /> Faites défiler · découvrez · composez <span className="h-px w-10 bg-current" /></div>
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
