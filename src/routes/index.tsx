import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import heroPoke from "@/assets/hero-poke.jpg";

import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ShoppingCart, Volume2, VolumeX, Sparkles } from "lucide-react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };
  
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

      {/* Cinematic Hero */}
      <section id="top" className="relative overflow-hidden surface-hero text-deep-foreground pt-10 pb-20 md:pt-16 md:pb-28">
        {/* Ambient glow lights */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-lime/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-[600px] rounded-full bg-coral/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Text Content */}
            <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left z-10">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/15 border border-lime/30 text-lime text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  <span>{t("hero.subtitle")}</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight">
                  {t("hero.title1")}
                  <span className="block bg-gradient-to-r from-coral to-amber-400 bg-clip-text text-transparent mt-2">
                    {t("hero.title2")}
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-deep-foreground/80 max-w-lg mx-auto lg:mx-0">
                  {t("hero.desc")}
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-coral px-8 py-4 text-sm sm:text-base font-bold text-coral-foreground shadow-lift flex items-center gap-2 hover:bg-coral/90 transition-all"
                >
                  {t("hero.order")}
                  <span className="text-lg leading-none">→</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${PHONE}`}
                  className="rounded-full border-2 border-deep-foreground/20 bg-background/60 backdrop-blur-md px-7 py-3.5 text-sm sm:text-base font-semibold transition-all hover:bg-background/90 hover:border-deep-foreground/40 shadow-sm"
                >
                  04 91 28 14 56
                </motion.a>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 border-t border-deep-foreground/15 pt-6 max-w-md mx-auto lg:mx-0 text-left">
                  <div className="bg-background/40 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
                    <dt className="text-[10px] sm:text-xs text-deep-foreground/70 uppercase tracking-wider font-bold mb-0.5">{t("hero.rating")}</dt>
                    <dd className="font-display text-xl sm:text-2xl font-black text-lime">4.5<span className="text-xs text-deep-foreground/50 font-normal">/5</span></dd>
                  </div>
                  <div className="bg-background/40 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
                    <dt className="text-[10px] sm:text-xs text-deep-foreground/70 uppercase tracking-wider font-bold mb-0.5">{t("hero.price")}</dt>
                    <dd className="font-display text-xl sm:text-2xl font-black text-lime">10 €</dd>
                  </div>
                  <div className="bg-background/40 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
                    <dt className="text-[10px] sm:text-xs text-deep-foreground/70 uppercase tracking-wider font-bold mb-0.5">{t("hero.time")}</dt>
                    <dd className="font-display text-xl sm:text-2xl font-black text-lime">10<span className="text-xs text-deep-foreground/50 font-normal">min</span></dd>
                  </div>
                </dl>
              </FadeIn>
            </div>

            {/* Right Col: Grand Cinematic Video Showcase */}
            <div className="lg:col-span-6 xl:col-span-7 w-full relative z-10">
              <FadeIn delay={0.2} direction="left">
                <div className="relative group">
                  {/* Ambient glowing projector effect behind the video */}
                  <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-r from-coral/30 via-lime/25 to-primary/30 rounded-[3rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                  {/* Cinematic Video Container */}
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-2 border-white/20 bg-black aspect-[16/10] sm:aspect-[16/9] w-full">
                    <video 
                      ref={videoRef}
                      autoPlay 
                      loop 
                      muted={isMuted}
                      playsInline
                      preload="auto"
                      poster={heroPoke}
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                      <source src="/hero-video.webm" type="video/webm" />
                    </video>

                    {/* Subtle Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Floating Glass Header */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-auto z-20">
                      <div className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/15 shadow-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
                        </span>
                        <span>Préparation minute en direct</span>
                      </div>

                      <button
                        onClick={toggleSound}
                        className="inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white border border-white/20 hover:bg-black/80 hover:border-coral transition-all shadow-md active:scale-95 cursor-pointer"
                        title={isMuted ? "Activer le son" : "Couper le son"}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="h-3.5 w-3.5 text-coral" />
                            <span className="hidden sm:inline">Son désactivé</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="h-3.5 w-3.5 text-lime" />
                            <span className="hidden sm:inline">Son activé</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Bottom Cinematic Info Card */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                      <div className="bg-background/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/20 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-coral/15 flex items-center justify-center shrink-0 border border-coral/30 text-xl sm:text-2xl">
                            🥗
                          </div>
                          <div>
                            <p className="eyebrow text-coral text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-0.5">
                              Ingrédients ultra-frais du jour
                            </p>
                            <p className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                              Saumon frais, mangue mûre, avocat onctueux & sauces maison
                            </p>
                          </div>
                        </div>
                        <span className="self-end sm:self-center shrink-0 text-[11px] font-bold px-3 py-1.5 rounded-full bg-lime/20 text-lime border border-lime/40">
                          100% Fait Maison
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
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
