import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import heroPoke from "@/assets/hero-poke.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import dessert from "@/assets/dessert.jpg";

import { useTranslation, translations } from "../context/I18nContext";
import { useCart, CartItem } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { ShoppingCart, Globe } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div style={{ transform: `translateY(${offset * speed}px)`, transition: "transform 0.1s ease-out" }} className="absolute inset-0 w-full h-full -z-10" />
      {children}
    </div>
  );
};

// Data
const allToppings = [
  "Avocat", "Mangue", "Édamamé", "Maïs", "Feta", "Algues", "Tomates cerises", 
  "Oignons croustillants", "Sésame mixte", "Jalapeños", "Poivrons", "Concombre", 
  "Radis", "Ananas", "Grenade", "Coriandre", "Ciboulette", "Cacahuètes", "Nachos", "Oignons rouges"
];

const bowls = [
  {
    id: "sweet-chicken",
    name: "Sweet chicken",
    price: 10.00,
    image: bowlChicken,
    desc: "Poulet maison, guacamole, maïs, tomates cerises, mangue, feta, sauce teriyaki, oignons croustillants, nachos, sésame mixte.",
    tag: "Best-seller",
  },
  {
    id: "saumon-wasabi",
    name: "Saumon wasabi",
    price: 11.00,
    image: heroPoke,
    desc: "Saumon, avocat, salade d'algues, mangue, maïs, édamamé, mayo wasabi, sésame mixte, nachos.",
    tag: "Signature",
  },
  {
    id: "scampis-royaux",
    name: "Scampis royaux",
    price: 10.00,
    image: bowlScampi,
    desc: "Scampis, guacamole, édamamé, tomates, concombre, poivrons, spicy mayo, jalapeños, flocons de chili, nachos.",
    tag: "Relevé",
  },
  {
    id: "crousty-chicken",
    name: "Crousty Chicken",
    price: 11.50,
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce blanche, curry onctueux ou mix, oignons frits croustillants.",
    tag: "Réconfort",
  },
];

const spicy = {
  id: "spicy-chicken",
  name: "Spicy chicken",
  price: 10.00,
  desc: "Poulet maison, avocat, patates douces, maïs, jalapeños, feta, spicy mayo, flocons de chili, nachos, sésame mix.",
};

const drinks = [
  { id: "coca", name: "Coca-Cola (33 cl)", price: 2.00 },
  { id: "coca-zero", name: "Coca-Cola Zero (33 cl)", price: 2.00 },
  { id: "fanta", name: "Fanta (33 cl)", price: 2.00 },
  { id: "ice-tea", name: "Ice-Tea (33 cl)", price: 2.00 },
  { id: "eau-plate", name: "Eau plate", price: 2.00 },
  { id: "eau-gaz", name: "Eau gazeuse (50 cl)", price: 2.00 },
];

const desserts = [
  { id: "tira-oreo", name: "Tiramisu Oreo", price: 4.00 },
  { id: "tira-nutella", name: "Tiramisu Nutella", price: 4.00 },
  { id: "tira-spec", name: "Tiramisu Spéculoos", price: 4.00 },
];

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
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const openToppingsModal = (product: any) => {
    setSelectedProduct(product);
    setSelectedToppings([]);
    setIsModalOpen(true);
  };

  const handleToppingChange = (topping: string, checked: boolean) => {
    if (checked) {
      if (selectedToppings.length < 5) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    } else {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    }
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      addItem({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
        toppings: selectedToppings,
        image: selectedProduct.image,
      });
    }
    setIsModalOpen(false);
  };

  const directAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      toppings: [],
      image: item.image,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CartDrawer />
      
      {/* Toppings Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("toppings.title")} - {selectedProduct?.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">{t("toppings.max")}</p>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4 max-h-[50vh] overflow-y-auto">
            {allToppings.map((topping) => (
              <div key={topping} className="flex items-center space-x-2">
                <Checkbox 
                  id={topping} 
                  checked={selectedToppings.includes(topping)}
                  onCheckedChange={(checked) => handleToppingChange(topping, checked as boolean)}
                  disabled={!selectedToppings.includes(topping) && selectedToppings.length >= 5}
                />
                <label htmlFor={topping} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {topping}
                </label>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={confirmAddToCart} className="w-full bg-coral hover:bg-coral/90 text-white">
              {t("toppings.confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo Poke N Bowl" 
              className="h-12 w-12 hover:rotate-12 transition-transform duration-300 drop-shadow-md" 
            />
            <span className="font-display text-xl font-extrabold tracking-tight hidden sm:block">
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
                  className={`text-xs font-bold px-2 py-1 rounded-full uppercase transition-colors ${language === lang ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <ParallaxSection speed={0.3} className="surface-hero text-deep-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="eyebrow text-lime">{t("hero.subtitle")}</p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] md:text-7xl">
              {t("hero.title1")}
              <span className="block text-coral">{t("hero.title2")}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-deep-foreground/80">
              {t("hero.desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-coral-foreground shadow-lift transition-transform hover:scale-[1.03]"
              >
                {t("hero.order")}
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
                <dt className="text-deep-foreground/60">{t("hero.rating")}</dt>
                <dd className="font-display text-2xl font-bold text-lime">4,5 / 5</dd>
              </div>
              <div>
                <dt className="text-deep-foreground/60">{t("hero.price")}</dt>
                <dd className="font-display text-2xl font-bold text-lime">10 €</dd>
              </div>
              <div>
                <dt className="text-deep-foreground/60">{t("hero.time")}</dt>
                <dd className="font-display text-2xl font-bold text-lime">~10 min</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={heroPoke}
                alt="Poké bowl"
                width={1600}
                height={1200}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-background px-5 py-3 text-foreground shadow-lift animate-bounce">
              <p className="eyebrow text-primary">{t("hero.badge1")}</p>
              <p className="text-sm font-semibold">{t("hero.badge2")}</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Bandeau */}
      <div className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 py-4 text-center text-sm font-semibold text-secondary-foreground">
          <span>{t("banner.1")}</span>
          <span>{t("banner.2")}</span>
          <span>{t("banner.3")}</span>
          <span>{t("banner.4")}</span>
        </div>
      </div>

      {/* Carte */}
      <ParallaxSection speed={0.1} className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-coral" id="carte">{t("menu.eyebrow")}</p>
        <h2 className="mt-3 max-w-xl text-4xl font-extrabold md:text-5xl">
          {t("menu.title")}
        </h2>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {bowls.map((b) => (
            <article key={b.name} className="card-dish flex flex-col group overflow-hidden border border-transparent hover:border-border transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  {b.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 bg-card z-10 relative">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold">{b.name}</h3>
                  <span className="font-display text-lg font-bold text-coral">€ {b.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{b.desc}</p>
                <div className="mt-4 pt-4 border-t border-border/50 flex gap-2">
                  <Button onClick={() => openToppingsModal(b)} className="flex-1 bg-coral hover:bg-coral/90 text-white rounded-xl shadow-soft">
                    {t("menu.add_to_cart")}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-border bg-card p-6 shadow-soft group hover:shadow-lift transition-all relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-bold">{spicy.name}</h3>
              <span className="font-display text-lg font-bold text-coral">€ {spicy.price.toFixed(2)}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground mb-4">{spicy.desc}</p>
            <Button onClick={() => openToppingsModal(spicy)} className="bg-coral hover:bg-coral/90 text-white rounded-xl shadow-soft">
              {t("menu.add_to_cart")}
            </Button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-coral/5 -skew-x-12 transform translate-x-8 group-hover:-translate-x-4 transition-transform duration-500" />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft hover:shadow-lift transition-shadow">
            <h3 className="text-xl font-bold mb-4">{t("menu.drinks")} — € 2,00</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {drinks.map((d) => (
                <li key={d.id} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    <span className="flex-1">{d.name}</span>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs w-24 ml-3 rounded-full" onClick={() => directAddToCart(d)}>
                    + Ajouter
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft hover:shadow-lift transition-shadow">
            <h3 className="text-xl font-bold mb-4">{t("menu.desserts")} — € 4,00</h3>
            <div className="flex gap-4">
              <img
                src={dessert}
                alt="Tiramisus"
                loading="lazy"
                className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-sm"
              />
              <ul className="grid gap-2 text-sm text-muted-foreground flex-1">
                {desserts.map((d) => (
                  <li key={d.id} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                      <span className="flex-1">{d.name}</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-7 text-xs w-24 ml-3 rounded-full" onClick={() => directAddToCart(d)}>
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
      <ParallaxSection speed={0.4} className="surface-hero text-deep-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center relative z-10">
          <p className="eyebrow text-lime" id="bowl">{t("bowl.eyebrow")} · € 10,00</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold md:text-5xl">
            {t("bowl.title")}
          </h2>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: t("bowl.step1.title"), d: t("bowl.step1.desc") },
              { n: "02", t: t("bowl.step2.title"), d: t("bowl.step2.desc") },
              { n: "03", t: t("bowl.step3.title"), d: t("bowl.step3.desc") },
              { n: "04", t: t("bowl.step4.title"), d: t("bowl.step4.desc") },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-deep-foreground/15 bg-deep-foreground/5 p-6 hover:bg-deep-foreground/10 transition-colors"
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
            {t("bowl.cta")}
          </a>
        </div>
      </ParallaxSection>

      {/* Infos */}
      <section id="infos" className="mx-auto max-w-6xl px-5 py-20 relative">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-coral">{t("info.eyebrow")}</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{t("info.title")}</h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              {t("info.desc")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                {t("info.route")}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                {t("info.call")}
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border shadow-soft group">
              <div className="group-hover:scale-105 transition-transform duration-1000 origin-center h-full">
                <iframe
                  title="Carte Poke N Bowl Visé"
                  src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="pointer-events-none group-hover:pointer-events-auto"
                />
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-card p-7 shadow-soft hover:shadow-lift transition-shadow relative overflow-hidden">
            <h3 className="text-2xl font-bold">{t("info.hours")}</h3>
            <ul className="mt-5 divide-y divide-border relative z-10">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3 text-sm">
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
            <div className="absolute -bottom-10 -right-10 opacity-5">
              <img src={logo} alt="" className="w-64 h-64" />
            </div>
            <p className="mt-5 text-sm text-muted-foreground relative z-10">
              Tél. <a href={`tel:${PHONE}`} className="font-semibold text-foreground">04 91 28 14 56</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center text-sm text-secondary-foreground relative">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 w-16 mb-2 hover:scale-110 hover:rotate-6 transition-all duration-300 drop-shadow-md" 
          />
          <p className="font-display text-xl font-extrabold">Poke N Bowl Visé</p>
          <p>Av. du Pont 12, 4600 Visé · Belgique</p>
          <div className="flex gap-4 mt-4">
             {["fr", "en", "nl"].map(lang => (
               <button key={lang} onClick={() => setLanguage(lang as any)} className="text-xs uppercase font-semibold text-muted-foreground hover:text-foreground">
                 {lang}
               </button>
             ))}
          </div>
          <p className="text-muted-foreground mt-4">© {new Date().getFullYear()} Poke N Bowl</p>
        </div>
      </footer>
    </div>
  );
}
