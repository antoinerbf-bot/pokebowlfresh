import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useTranslation } from "../context/I18nContext";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";
import { CroustyNotificationToast } from "@/components/CroustyNotificationToast";
import { PokawaFloatingNavbar } from "@/components/PokawaFloatingNavbar";
import { PokawaHeroExact } from "@/components/PokawaHeroExact";
import { FluidInteractiveMenu } from "@/components/FluidInteractiveMenu";
import { PokawaBrandValues } from "@/components/PokawaBrandValues";
import { PokawaPerksBanner } from "@/components/PokawaPerksBanner";
import { PokawaInstagramWall } from "@/components/PokawaInstagramWall";
import { SocialProofBanner } from "@/components/SocialProofBanner";
import { MobileAppStickyBar } from "@/components/MobileAppStickyBar";
import { PokawaCategoriesCarousel } from "@/components/PokawaCategoriesCarousel";

const RESTAURANT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  "name": "Poke N Bowl Visé",
  "image": "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg",
  "telephone": "+32490000000",
  "url": "https://pokenbowl.be",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenue du Pont 12",
    "addressLocality": "Visé",
    "postalCode": "4600",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.7333,
    "longitude": 5.6942
  },
  "servesCuisine": ["Poké bowl", "Fast casual", "Asian", "Halal"],
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "12:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "17:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "18:00",
      "closes": "21:00"
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" },
      {
        name: "description",
        content:
          "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon sashimi minute, Crousty Chicken chaud et desserts maison. Commande en ligne ou sur place !",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(RESTAURANT_SCHEMA),
      },
    ],
  }),
  component: Index,
});

const MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";

const HOUR_ROWS = [
  ["info.day.mon", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.tue", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.wed", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.thu", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.fri", "12:00 – 14:00 · 17:00 – 21:00"],
  ["info.day.sat", "18:00 – 21:00"],
  ["info.day.sun", "closed"],
] as const;

function Reveal({
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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Ticker() {
  const items = Array.from({ length: 8 }).map((_, i) => (
    <span
      key={i}
      className="mx-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] sm:text-[11px]"
    >
      Poke N Bowl
      <span className="text-[#ff705f]">✦</span>
      Fresh Food Visé
      <span className="text-[#ff705f]">✦</span>
      Fait Minute
      <span className="text-[#ff705f]">✦</span>
      Crousty Chicken
      <span className="text-[#ff705f]">✦</span>
    </span>
  ));

  return (
    <div className="overflow-hidden bg-[#2C1D16] py-3.5 text-[#EADCC9] border-y border-[#462E23] shadow-sm">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max whitespace-nowrap"
      >
        {items}
        {items}
      </motion.div>
    </div>
  );
}

function Index() {
  const { t } = useTranslation();

  /* Reset scroll on mount */
  React.useEffect(() => {
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = window.requestAnimationFrame(() =>
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    );
    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = prev;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F6F1E9] text-[#2C1D16]">
      <CartDrawer />

      {/* ════════════════════ 1. NAVBAR FLOTTANTE EXACTE POKAWA ════════════════════ */}
      <PokawaFloatingNavbar />

      <main>
        {/* ════════════════════ 2. HERO PLEIN ÉCRAN EXACT POKAWA ════════════════════ */}
        <PokawaHeroExact />

        {/* ════════════════════ 3. TICKER DÉFILANT ════════════════════ */}
        <Ticker />

        {/* ════════════════════ 3.2 CARROUSEL DES CATÉGORIES (STYLE POKAWA) ════════════════════ */}
        <PokawaCategoriesCarousel />

        {/* ════════════════════ 3.5 PREUVE SOCIALE & RASSURANCE LOCALE VISÉ ════════════════════ */}
        <SocialProofBanner />

        {/* ════════════════════ 4. LA CARTE GOURMANDE INTERACTIVE & FLUIDE (POKÉS -> CROUSTY -> SUR-MESURE -> DESSERTS/BOISSONS) ════════════════════ */}
        <FluidInteractiveMenu />

        {/* ════════════════════ 5. NOS ENGAGEMENTS QUALITÉ (STYLE POKAWA) ════════════════════ */}
        <section id="valeurs" className="scroll-mt-12 bg-[#FAF6F0]/80 py-14 sm:py-20 border-b border-[#E2D6C5]">
          <PokawaBrandValues />
        </section>

        {/* ════════════════════ 7. LES AVANTAGES COMMANDE DIRECTE ════════════════════ */}
        <Reveal>
          <PokawaPerksBanner />
        </Reveal>

        {/* ════════════════════ 8. LE MUR INSTAGRAM & ACTU RÉSEAUX ════════════════════ */}
        <Reveal>
          <PokawaInstagramWall />
        </Reveal>

        {/* ════════════════════ 9. BANNIÈRE RECRUTEMENT ════════════════════ */}
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              to="/recrutement"
              className="group mx-auto flex max-w-[1240px] items-center justify-between gap-5 rounded-[28px] bg-gradient-to-r from-[#2C1D16] via-[#16332b] to-[#1c3e34] text-white p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[34px] sm:p-9 shadow-card border border-white/10"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#ff705f]">
                  <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                  {t("recruit.banner_tag")}
                </div>
                <h2 className="mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-black text-white">
                  {t("recruit.banner_title")}
                </h2>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EADCC9] text-[#2C1D16] transition group-hover:scale-110 shadow-md">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>
        </section>

        {/* ════════════════════ 10. INFOS PRATIQUES & GOOGLE MAPS VISÉ ════════════════════ */}
        <section id="infos" className="scroll-mt-10 bg-[#ece9df] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-black/5">
          <div className="mx-auto max-w-[1340px]">
            <Reveal>
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]">
                  <MapPin className="h-3.5 w-3.5" />
                  Visé, Belgique · Avenue du Pont 12
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]">
                  Passez nous voir au restaurant
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#766358] font-medium">
                  À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              {/* Carte Google Maps interactive de Visé */}
              <Reveal>
                <div className="flex flex-col h-full overflow-hidden rounded-[32px] border border-[#E2D6C5] bg-[#FAF7F2] shadow-lift">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2D6C5] bg-[#F3ECE1] p-5 sm:px-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EADCC9] border border-[#D9C5AD] text-xs font-black text-[#2C1D16]">
                          📍
                        </span>
                        <h3 className="font-extrabold text-[#2C1D16] text-base">
                          Poke N Bowl Visé
                        </h3>
                      </div>
                      <p className="text-xs text-[#766358] mt-0.5">
                        Avenue du Pont 12, 4600 Visé, Belgique
                      </p>
                    </div>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-bold text-[#FAF7F2] shadow-sm transition hover:bg-[#8D522A]"
                    >
                      <span>Itinéraire Google Maps</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="relative min-h-[380px] sm:min-h-[420px] flex-1 w-full bg-[#e5e3df]">
                    <iframe
                      title="Carte interactive Google Maps Poké N Bowl Visé"
                      src="https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F3ECE1] p-4 text-[11px] font-semibold text-[#766358] border-t border-[#E2D6C5]">
                    <span>🚗 Parking facile à proximité</span>
                    <span>🚶 Au cœur de Visé</span>
                    <span>🛵 Retrait Click & Collect express</span>
                  </div>
                </div>
              </Reveal>

              {/* Horaires d'ouverture & Contact rapide */}
              <Reveal delay={0.08}>
                <div className="flex flex-col justify-between h-full space-y-6">
                  {/* Horaires d'ouverture Simplifiés & Épurés */}
                  <div className="overflow-hidden rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7">
                    <div className="flex items-center justify-between border-b border-[#E2D6C5] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2C1D16] text-[#EADCC9]">
                          <Clock className="h-4 w-4 text-[#ff705f]" />
                        </span>
                        <div>
                          <h3 className="text-lg font-black text-[#2C1D16]">Horaires d'ouverture</h3>
                          <p className="text-[11px] text-[#766358]">Poke N Bowl Visé · En plein centre</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] px-3 py-1 text-[10px] font-bold uppercase">
                        ● Ouvert pour le service
                      </span>
                    </div>

                    {/* Horaires regroupés du Lundi au Vendredi */}
                    <div className="mt-4 space-y-2.5">
                      <div className="flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4">
                        <div>
                          <span className="block text-xs font-black text-[#2C1D16]">Du Lundi au Vendredi</span>
                          <span className="text-[10px] text-[#766358] font-medium">Service midi & soir</span>
                        </div>
                        <div className="text-right">
                          <span className="block text-xs font-black text-[#2C1D16]">12:00 – 14:00</span>
                          <span className="block text-xs font-black text-[#2C1D16]">17:00 – 21:00</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4">
                        <div>
                          <span className="block text-xs font-black text-[#2C1D16]">Samedi</span>
                          <span className="text-[10px] text-[#766358] font-medium">Service du soir</span>
                        </div>
                        <span className="text-xs font-black text-[#2C1D16]">18:00 – 21:00</span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4">
                        <div>
                          <span className="block text-xs font-black text-[#2C1D16]">Dimanche</span>
                          <span className="text-[10px] text-[#766358] font-medium">Fermeture hebdomadaire</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#ff705f]">Fermé</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Direct Card */}
                  <div className="rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#ff705f]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#ff705f]">
                          Commandes & Renseignements
                        </span>
                      </div>
                      <span className="text-xs text-[#766358] font-bold">
                        Appel direct
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+32491281456"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#ff705f] py-3.5 px-4 text-xs font-bold text-white shadow-soft transition hover:bg-[#ff5542]"
                      >
                        <Phone className="h-4 w-4" />
                        <span>0491 28 14 56</span>
                      </a>
                      <a
                        href="https://instagram.com/POKE_NBOWL"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#E2D6C5] bg-[#F3ECE1] py-3.5 px-4 text-xs font-bold text-[#2C1D16] transition hover:bg-[#EAE0D2]"
                      >
                        <span>Instagram @POKE_NBOWL</span>
                      </a>
                    </div>

                    <div className="rounded-xl bg-[#F3ECE1] px-4 py-2.5 text-xs text-[#766358] flex items-center justify-between">
                      <span className="font-semibold">🛵 Livraison à domicile disponible</span>
                      <Link to="/commander" className="font-bold text-[#2C1D16] hover:underline">
                        Commander en ligne →
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="bg-[#1C120C] px-4 py-10 pb-24 text-[#EADCC9] sm:px-6 sm:pb-10 lg:px-8 border-t border-[#352117]">
        <div className="mx-auto flex max-w-[1340px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200">
            <BrandLogo size="md" />
          </Link>
          <div className="flex flex-wrap gap-5 text-[10px] font-black uppercase tracking-[0.14em] text-[#EADCC9]/60">
            <a href="#carte" className="transition hover:text-white">{t("nav.menu")}</a>
            <a href="#composer" className="transition hover:text-white">Sur-Mesure</a>
            <Link to="/commander" className="transition hover:text-white">{t("nav.order")}</Link>
            <Link to="/recrutement" className="transition hover:text-white">{t("footer.recruit")}</Link>
            <Link to="/contact" className="transition hover:text-white">{t("nav.contact")}</Link>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#EADCC9]/40">
            © {new Date().getFullYear()} Poke N Bowl Visé · Tous droits réservés
          </div>
        </div>
      </footer>

      {/* ════════ Barre interactive type Application Mobile ════════ */}
      <MobileAppStickyBar />

      {/* ════════ Toast Notification Popup Crousty Chicken ════════ */}
      <CroustyNotificationToast />
    </div>
  );
}
