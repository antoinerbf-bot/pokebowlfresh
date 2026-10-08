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

export function PokawaFloatingNavbar() {
  const { items, setIsCartOpen } = useCart();
  const { language, setLanguage } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto">
        {/* ── CAPSULE GAUCHE (STYLE POKAWA) ── */}
        <div className="hidden lg:flex items-center gap-5 rounded-full bg-[#fff8ee] px-6 py-2.5 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]">
          <a
            href="#composer"
            className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#10251f] hover:text-[#ff705f] transition"
          >
            <span>Composer son Bowl</span>
            <ChevronDown className="h-3 w-3 stroke-[2.5]" />
          </a>

          <a
            href="#carte"
            className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition"
          >
            <span>Notre Carte</span>
            <ChevronDown className="h-3 w-3 stroke-[2.5]" />
          </a>

          <a
            href="#valeurs"
            className="text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition"
          >
            Engagements
          </a>

          {/* Bouton Localisation Visé style Pokawa (bouton bleu/vert avec pin) */}
          <a
            href="https://maps.app.goo.gl/TkddDsG9pwYb62558"
            target="_blank"
            rel="noreferrer"
            title="Restaurant Poke N Bowl à Visé, Avenue du Pont 12"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2431eb] text-white shadow-md hover:scale-110 transition"
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
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f] shadow-md">
              N
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white">
              BOWL
            </span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.35em] text-[#d7ff45] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-0.5">
            VISÉ · BELGIQUE
          </span>
        </Link>

        {/* ── CAPSULE DROITE (STYLE POKAWA) ── */}
        <div className="hidden lg:flex items-center gap-4 rounded-full bg-[#fff8ee] px-5 py-2 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]">
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
            <ShoppingBag className="h-4 w-4 text-[#10251f]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Bouton COMMANDER Pokawa Style (bleu électrique vibrant ou vert punch) */}
          <Link
            to="/commander"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2431eb] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-[#1a25b5] hover:scale-105 active:scale-95"
          >
            <span>Commander</span>
          </Link>
        </div>

        {/* ── ACTIONS MOBILE (BURGER & COMMANDER) ── */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            to="/commander"
            className="inline-flex items-center gap-1 rounded-full bg-[#2431eb] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-lg"
          >
            Commander
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Panier"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]"
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* ── DROPDOWN MOBILE ── */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-sm rounded-3xl bg-[#fff8ee] p-4 shadow-2xl border border-white/60 pointer-events-auto lg:hidden">
          <div className="grid gap-2 text-center">
            <a
              href="#carte"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5"
            >
              Notre Carte
            </a>
            <a
              href="#composer"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5"
            >
              Sur-Mesure
            </a>
            <a
              href="#valeurs"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5"
            >
              Nos Engagements
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5"
            >
              Contact & Accès
            </Link>
            <Link
              to="/recrutement"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl bg-[#ff705f] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white"
            >
              Recrutement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
