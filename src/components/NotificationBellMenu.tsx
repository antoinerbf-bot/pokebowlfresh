import React, { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Bell, Flame, Sparkles, X, ArrowRight, Check } from "lucide-react";
import { DishImage } from "./DishImage";

export function NotificationBellMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const NOTIFICATIONS_LIST = [
    {
      id: "notif-crousty",
      tag: "Spécialité Chaude",
      tagColor: "bg-[#8b5510] text-white",
      title: "Crousty Chicken Curry & Blanche",
      desc: "Poulet pané ultra croustillant, oignons frits. Boisson 33cl incluse au choix !",
      dishId: "crousty-chicken-curry",
      price: "11,00 €",
      badge: "Formule Étudiant",
      link: "/product/crousty-chicken-curry",
    },
    {
      id: "notif-saumon",
      tag: "Best-Seller",
      tagColor: "bg-[#d7ff45] text-[#10251f]",
      title: "Poké Bowls Frais du Jour",
      desc: "5 recettes signatures préparées à la commande : Saumon Wasabi, Sweet Chicken, Scampis Royal...",
      dishId: "bowl-saumon",
      price: "Dès 10,00 €",
      badge: "100% Frais",
      link: "/#carte",
    },
    {
      id: "notif-custom",
      tag: "Création",
      tagColor: "bg-[#ff705f] text-white",
      title: "Composez votre Bowl Sur-Mesure",
      desc: "Choisissez votre base, 5 mix-ins frais inclus, votre protéine et votre sauce maison.",
      dishId: "bowl-sweet-chicken",
      price: "Dès 10,00 €",
      badge: "Personnalisable",
      link: "/sur-mesure",
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Bell Button (Pokawa style) */}
      <button
        id="bell-icon"
        type="button"
        onClick={handleToggle}
        aria-label="Afficher les nouveautés et offres"
        aria-expanded={isOpen}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40 hover:scale-105 active:scale-95"
      >
        <Bell className="h-4.5 w-4.5" />
        {hasUnread && (
          <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff705f] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff705f]" />
          </span>
        )}
      </button>

      {/* Dropdown Drawer */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-[340px] sm:w-[380px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/5 bg-[#10251f] px-5 py-4 text-white">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]">
                🔔
              </span>
              <div>
                <h3 className="text-sm font-extrabold">Nouveautés & Offres</h3>
                <p className="text-[10px] text-white/70">Poke N Bowl Visé</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/75 hover:bg-white/20 hover:text-white transition"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Notifications body */}
          <div className="max-h-[380px] overflow-y-auto p-3 space-y-2.5">
            {NOTIFICATIONS_LIST.map((notif) => (
              <Link
                key={notif.id}
                to={notif.link as any}
                onClick={() => setIsOpen(false)}
                className="group flex items-start gap-3 rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#ece8dc]">
                  <DishImage
                    dishId={notif.dishId === "bowl-saumon" ? "saumon-wasabi" : notif.dishId === "bowl-sweet-chicken" ? "sweet-chicken" : notif.dishId}
                    alt={notif.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${notif.tagColor}`}>
                      {notif.tag}
                    </span>
                    <span className="text-[10px] font-extrabold text-[#10251f]">
                      {notif.price}
                    </span>
                  </div>
                  <h4 className="mt-1 text-xs font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition">
                    {notif.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-tight text-[#68756f] line-clamp-2">
                    {notif.desc}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold text-[#ff705f]">
                    <span>Découvrir</span>
                    <ArrowRight className="h-2.5 w-2.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer with direct action */}
          <div className="border-t border-black/5 bg-[#faf8f4] p-3 text-center">
            <Link
              to="/commander"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10251f] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f]"
            >
              Voir toute la carte en ligne
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
