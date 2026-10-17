import React from "react";
import { Link } from "@tanstack/react-router";
import {
  MapPin,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { NotificationBellMenu } from "@/components/NotificationBellMenu";
import { useTranslation } from "@/context/I18nContext";

import { PokawaMegaMenu } from "@/components/PokawaMegaMenu";

export function PokawaFloatingNavbar() {
  const { items, setIsCartOpen } = useCart();
  const { language, setLanguage } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 220);
  };

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className="absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none"
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto relative">
        {/* ── CAPSULE GAUCHE (STYLE POKAWA) ── */}
        <div className="hidden lg:flex items-center gap-5 rounded-full bg-[#FAF4EB]/95 px-6 py-2.5 shadow-2xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16]">
          <a
            href="#composer"
            className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#2C1D16] hover:text-[#ff705f] transition"
          >
            <span>Composer son Bowl</span>
            <ChevronDown className="h-3 w-3 stroke-[2.5]" />
          </a>

          {/* Trigger Mega-Menu survol "Notre Carte" */}
          <div
            onMouseEnter={handleMouseEnter}
            className="relative"
          >
            <a
              href="#carte"
              className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] transition ${
                isMegaMenuOpen ? "text-[#ff705f]" : "hover:text-[#ff705f]"
              }`}
            >
              <span>Notre Carte</span>
              <ChevronDown
                className={`h-3 w-3 stroke-[2.5] transition-transform duration-200 ${
                  isMegaMenuOpen ? "rotate-180 text-[#ff705f]" : ""
                }`}
              />
            </a>
          </div>

          <a
            href="#composer"
            className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#2C1D16] hover:text-[#ff705f] transition"
          >
            <span>Sur-Mesure</span>
          </a>

          <Link
            to="/blog"
            className="text-[11px] font-black uppercase tracking-[0.14em] text-[#2C1D16] hover:text-[#ff705f] transition"
          >
            Le Mag
          </Link>

          <a
            href="#valeurs"
            className="text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition"
          >
            Engagements
          </a>

          {/* Bouton Localisation Visé style Pokawa (bouton chocolat avec pin beige) */}
          <a
            href="https://maps.app.goo.gl/TkddDsG9pwYb62558"
            target="_blank"
            rel="noreferrer"
            title="Restaurant Poke N Bowl à Visé, Avenue du Pont 12"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] shadow-md hover:bg-[#8D522A] hover:scale-110 transition"
          >
            <MapPin className="h-3.5 w-3.5 fill-current" />
          </a>
        </div>

        {/* ── LOGO CENTRAL POKÉ N BOWL (BLANC GÉOMÉTRIQUE STYLE POKAWA) ── */}
        <Link
          to="/"
          className="flex flex-col items-center group transition hover:scale-105 duration-200"
          aria-label="Poke N Bowl Visé"
        >
          <div className="flex items-center gap-1.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white">
              POKE
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EADCC9] text-xs font-black text-[#2C1D16] shadow-md">
              N
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white">
              BOWL
            </span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.35em] text-[#EADCC9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-0.5">
            VISÉ · BELGIQUE
          </span>
        </Link>

        {/* ── CAPSULE DROITE (STYLE POKAWA) ── */}
        <div className="hidden lg:flex items-center gap-4 rounded-full bg-[#FAF4EB]/95 px-5 py-2 shadow-2xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16]">
          <Link
            to="/recrutement"
            className="text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition"
          >
            Recrutement
          </Link>

          <Link
            to="/contact"
            className="text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition"
          >
            Contact
          </Link>

          {/* Cloche de notifications Pokawa */}
          <NotificationBellMenu />

          {/* Bouton Panier */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Panier"
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
          >
            <ShoppingBag className="h-4 w-4 text-[#2C1D16]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Bouton COMMANDER Chocolat & Crème */}
          <Link
            to="/commander"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-[#FAF4EB] shadow-lg transition hover:bg-[#482F22] hover:scale-105 active:scale-95"
          >
            <span>Commander</span>
          </Link>
        </div>

        {/* ── ACTIONS MOBILE (BURGER & COMMANDER) ── */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            to="/commander"
            className="inline-flex items-center gap-1 rounded-full bg-[#2C1D16] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-[#FAF4EB] shadow-lg"
          >
            Commander
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Panier"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* ── MEGA-MENU POKAWA SURVOL NOTRE CARTE ── */}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <PokawaMegaMenu
            isOpen={isMegaMenuOpen}
            onClose={() => setIsMegaMenuOpen(false)}
          />
        </div>
      </div>

      {/* ── DROPDOWN MOBILE STYLE POKAWA ── */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-sm rounded-[28px] bg-[#fff8ee] p-4 shadow-2xl border border-white/80 pointer-events-auto lg:hidden">
          <div className="grid gap-2 text-left">
            <a
              href="#carte"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition"
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base">🥗</span>
                <span>Pokés & Chirashis</span>
              </span>
              <span className="text-[10px] font-bold text-[#ff705f]">Dès 10 € →</span>
            </a>

            <a
              href="#carte"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition"
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base">🍗</span>
                <span>Crousty Chicken</span>
              </span>
              <span className="rounded-full bg-[#ea580c] text-white px-2 py-0.5 text-[9px] font-black">
                Formule 11 €
              </span>
            </a>

            <a
              href="#composer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition"
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base">🥣</span>
                <span>Composer son Bowl</span>
              </span>
              <span className="text-[10px] bg-[#2C1D16] text-white px-2 py-0.5 rounded-full font-black">
                Sur-mesure
              </span>
            </a>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition"
            >
              <span className="flex items-center gap-2.5">
                <span className="text-base">📖</span>
                <span>Le Mag Poké · Articles</span>
              </span>
              <span className="text-[10px] font-bold text-[#ff705f]">Conseils & SEO →</span>
            </Link>

            <a
              href="#valeurs"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2C1D16] hover:bg-black/5"
            >
              Nos Engagements & Qualité
            </a>

            <div className="flex gap-2 pt-2 border-t border-black/5">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center rounded-xl border border-black/10 py-2.5 text-xs font-bold uppercase text-[#2C1D16]"
              >
                Contact
              </Link>
              <Link
                to="/recrutement"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center rounded-xl bg-[#ff705f] py-2.5 text-xs font-black uppercase text-white shadow-sm"
              >
                Recrutement
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
