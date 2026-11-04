import React from "react";
import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/I18nContext";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Sparkles,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
import { DishImage } from "./DishImage";
import { bowls } from "../lib/data";

import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";
import drinkCocaCola from "@/assets/drink-coca-cola.jpg";
import drinkCocaZero from "@/assets/drink-coca-zero.jpg";
import drinkFantaOrange from "@/assets/drink-fanta-orange.jpg";
import drinkIceTea from "@/assets/drink-ice-tea.jpg";
import drinkEauPlate from "@/assets/drink-eau-plate.jpg";
import drinkEauGazeuse from "@/assets/drink-eau-gazeuse.jpg";

// Articles suggérés en Cross-Selling express
const CROSS_SELL_ITEMS = [
  {
    id: "tira-spec",
    name: "Tiramisu Spéculoos Maison",
    price: 4.0,
    emoji: "🧁",
    image: tiramisuSpeculoos,
    subtitle: "Artisanal · Lotus",
  },
  {
    id: "tira-oreo",
    name: "Tiramisu Oreo Maison",
    price: 4.0,
    emoji: "🍪",
    image: tiramisuOreo,
    subtitle: "Biscuits Oreo & Mascarpone",
  },
  {
    id: "coca",
    name: "Coca-Cola 33cl",
    price: 2.0,
    emoji: "🥤",
    image: drinkCocaCola,
    subtitle: "Servi givré",
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zéro 33cl",
    price: 2.0,
    emoji: "🥤",
    image: drinkCocaZero,
    subtitle: "Zéro sucre ultra frais",
  },
  {
    id: "fanta",
    name: "Fanta Orange 33cl",
    price: 2.0,
    emoji: "🍊",
    image: drinkFantaOrange,
    subtitle: "Pétillant à l'orange",
  },
  {
    id: "ice-tea",
    name: "Ice Tea Sparkling 33cl",
    price: 2.0,
    emoji: "🧊",
    image: drinkIceTea,
    subtitle: "Pétillant bien frais",
  },
  {
    id: "eau-gaz",
    name: "SPA Intense 50cl",
    price: 2.0,
    emoji: "🫧",
    image: drinkEauGazeuse,
    subtitle: "Eau pétillante",
  },
  {
    id: "eau-plate",
    name: "SPA Reine 50cl",
    price: 2.0,
    emoji: "💧",
    image: drinkEauPlate,
    subtitle: "Eau plate",
  },
];

const FREE_DELIVERY_THRESHOLD = 50.0;

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    items,
    updateQuantityByIndex,
    removeItemByIndex,
    addItem,
    total,
    itemCount,
  } = useCart();
  const { t } = useTranslation();

  const diffToFree = Math.max(0, FREE_DELIVERY_THRESHOLD - total);
  const progressPercent = Math.min(100, Math.round((total / FREE_DELIVERY_THRESHOLD) * 100));

  const handleQuickAddCrossSell = (item: (typeof CROSS_SELL_ITEMS)[number]) => {
    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: item.image,
    });
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent
        hideCloseButton
        className="flex h-full max-h-screen w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] flex-col bg-[#FAF7F2] p-0 gap-0 border-l-2 border-[#DECBB3] shadow-2xl overflow-hidden"
      >
        {/* ── Header parfaitement cadré (aucun chevauchement d'icônes) ── */}
        <SheetHeader className="shrink-0 border-b border-[#DECBB3] bg-[#FFFDF9] px-5 py-4 sm:px-6 shadow-xs">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2C1D16] text-[#EADCC9] shadow-xs">
                <ShoppingBag className="h-5 w-5 text-[#ff705f]" />
              </div>
              <div>
                <SheetTitle className="text-base font-black text-[#2C1D16] leading-tight">
                  {t("cart.title")}
                </SheetTitle>
                <span className="text-[11px] font-bold text-[#8A796E]">
                  {itemCount} {itemCount > 1 ? "articles ajoutés" : "article ajouté"}
                </span>
              </div>
            </div>

            {/* Bouton de fermeture dédié & accessible */}
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF5EE] text-[#766358] hover:bg-[#2C1D16] hover:text-[#EADCC9] transition cursor-pointer active:scale-90 shadow-2xs border border-[#DECBB3]"
              aria-label="Fermer le panier"
              title="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* ════════ JAUGE DE LIVRAISON OFFERTE DYNAMIQUE ════════ */}
          {items.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[#DECBB3]/60">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-[#2C1D16]">
                  <Truck className="h-3.5 w-3.5 text-[#ff705f]" />
                  {diffToFree === 0 ? (
                    <span className="font-black text-emerald-700">
                      🎉 Livraison offerte à Visé !
                    </span>
                  ) : (
                    <span>
                      Plus que{" "}
                      <strong className="text-[#ff705f]">
                        {diffToFree.toFixed(2)} €
                      </strong>{" "}
                      pour la livraison offerte
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-black text-[#7a847e]">
                  {progressPercent}%
                </span>
              </div>

              {/* Barre de progression */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#EADCC9]/50">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    diffToFree === 0
                      ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      : "bg-[#ff705f]"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </SheetHeader>

        {/* ── Corps du panier (Scrollable avec min-h-0 pour ne JAMAIS déborder de l'écran) ── */}
        {items.length === 0 ? (
          /* Empty state chaleureux et interactif */
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-12 text-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#EFE6D8] border-2 border-[#DECBB3] shadow-card text-5xl">
              <span className="animate-bounce">🥣</span>
              <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-xs font-black text-white shadow">
                0
              </span>
            </div>
            <div className="max-w-xs">
              <h3 className="text-lg font-black text-[#2C1D16]">Votre panier est vide</h3>
              <p className="mt-1.5 text-xs text-[#766358] leading-relaxed">
                Envie d'un Poké frais découpé minute, d'un Crousty Chicken chaud ou de composer votre bowl sur-mesure ?
              </p>
            </div>
            <Link
              to="/commander"
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#EADCC9] shadow-md hover:bg-[#ff705f] hover:text-white transition active:scale-95 cursor-pointer"
            >
              <span>Découvrir la carte</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar p-4 sm:p-5 flex flex-col gap-3">
              {items.map((item, index) => {
                const isBowl = bowls.some((b) => b.id === item.id);
                return (
                  <div
                    key={`${item.id}-${index}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`}
                    className="group relative flex flex-col sm:flex-row gap-3.5 rounded-2xl border-2 border-[#DECBB3]/80 bg-[#FFFDF9] p-3.5 sm:p-4 shadow-xs transition hover:border-[#2C1D16]/40 hover:shadow-card"
                  >
                    <div className="flex items-start gap-3 w-full">
                      {/* Photo produit */}
                      {isBowl ? (
                        <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-[#2C1D16] shadow-xs">
                          <DishImage
                            dishId={item.id}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-xl object-cover shadow-xs"
                        />
                      ) : (
                        <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl bg-[#EFE6D8] text-2xl font-black text-[#2C1D16]">
                          🥣
                        </div>
                      )}

                      {/* Détails de l'article */}
                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-black text-[#2C1D16] leading-tight pr-2">
                            {item.name}
                          </h4>

                          {/* ════ BOUTON RETIRER DU PANIER (CLAIREMENT VISIBLE ET EXPLICITE) ════ */}
                          <button
                            type="button"
                            onClick={() => removeItemByIndex(index)}
                            className="inline-flex items-center gap-1 shrink-0 rounded-full bg-red-50 hover:bg-red-500 text-red-600 hover:text-white border border-red-200/80 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider transition cursor-pointer active:scale-95 shadow-2xs"
                            title="Retirer ce produit du panier"
                            aria-label={`Retirer ${item.name} du panier`}
                          >
                            <Trash2 className="h-3 w-3 stroke-[2.5]" />
                            <span>Retirer</span>
                          </button>
                        </div>

                        {/* Toppings / Options ajoutées */}
                        {item.toppings.length > 0 && (
                          <p className="mt-1 line-clamp-2 text-[11px] font-semibold text-[#766358] leading-snug">
                            + {item.toppings.join(", ")}
                          </p>
                        )}
                        {/* Ingrédients retirés */}
                        {item.removedIngredients && item.removedIngredients.length > 0 && (
                          <p className="mt-0.5 truncate text-[11px] font-bold text-[#e11d48] line-through">
                            ✕ {item.removedIngredients.join(", ")}
                          </p>
                        )}

                        {/* Tarif et Stepper de quantité (+ / - jusqu'à 0 pour suppression) */}
                        <div className="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-[#DECBB3]/40">
                          <div>
                            <span className="text-sm font-black text-[#2C1D16]">
                              € {(item.price * item.quantity).toFixed(2)}
                            </span>
                            {item.quantity > 1 && (
                              <span className="ml-1.5 text-[10px] font-bold text-[#8A796E]">
                                ({item.price.toFixed(2)} € / u)
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 bg-[#FAF7F2] border border-[#DECBB3] rounded-full p-0.5 shadow-2xs">
                            <button
                              type="button"
                              aria-label={item.quantity === 1 ? "Supprimer l'article" : "Diminuer la quantité"}
                              onClick={() => updateQuantityByIndex(index, item.quantity - 1)}
                              className={`flex h-7 w-7 items-center justify-center rounded-full transition cursor-pointer active:scale-90 ${
                                item.quantity === 1
                                  ? "bg-red-50 text-[#e11d48] hover:bg-red-500 hover:text-white"
                                  : "bg-[#FFFDF9] text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#EADCC9]"
                              }`}
                              title={item.quantity === 1 ? "Supprimer cet article" : "Diminuer la quantité"}
                            >
                              {item.quantity === 1 ? (
                                <Trash2 className="h-3.5 w-3.5" />
                              ) : (
                                <Minus className="h-3.5 w-3.5" />
                              )}
                            </button>
                            <span className="w-5 text-center text-xs font-black text-[#2C1D16]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Augmenter la quantité"
                              onClick={() => updateQuantityByIndex(index, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition cursor-pointer active:scale-90 shadow-2xs"
                              title="Ajouter un exemplaire"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ════════ CROSS-SELLING EXPRESS EN 1 CLIC ════════ */}
              <div className="mt-2 rounded-2xl bg-white border border-[#DECBB3] p-4 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#ff705f]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#2C1D16]">
                      Envie d'une douceur ou d'une boisson ?
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#8A796E]">Ajout 1 clic</span>
                </div>

                <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
                  {CROSS_SELL_ITEMS.map((cs) => (
                    <button
                      key={cs.id}
                      type="button"
                      onClick={() => handleQuickAddCrossSell(cs)}
                      className="group flex flex-col items-center justify-between rounded-xl bg-[#FAF8F4] border border-[#DECBB3]/70 p-2.5 w-28 shrink-0 text-center transition hover:border-[#ff705f] hover:bg-white hover:scale-[1.02] shadow-2xs cursor-pointer"
                    >
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-[#eee8dc]">
                        <img
                          src={cs.image}
                          alt={cs.name}
                          className="h-full w-full object-cover transition group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-1.5 text-[10px] font-extrabold leading-tight text-[#17231f] line-clamp-1">
                        {cs.name}
                      </span>
                      <span className="text-[9px] text-[#7a847e]">{cs.subtitle}</span>
                      <span className="mt-1 flex items-center gap-1 rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] group-hover:bg-[#ff705f] group-hover:text-white transition">
                        <Plus className="h-2.5 w-2.5" />
                        {cs.price.toFixed(2)} €
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Footer fixé en bas (ne disparaît jamais, parfaitement cadré) ── */}
            <div className="shrink-0 border-t border-[#DECBB3] bg-[#FFFDF9] px-5 py-4 sm:px-6 shadow-[0_-10px_25px_-10px_rgba(44,29,22,0.06)]">
              {/* Rassurance express */}
              <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-[#5a6760] bg-[#FAF8F4] px-3 py-1.5 rounded-xl border border-[#DECBB3]/60">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-emerald-600" />
                  Prêt en 15-20 min
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  Fait minute à Visé
                </span>
              </div>

              <div className="mb-3.5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#7a847e]">Sous-total commande</span>
                  <p className="text-[10px] text-[#a09a92]">TVA incluse</p>
                </div>
                <span className="text-2xl font-black text-[#2C1D16]">
                  € {total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#2C1D16] hover:bg-[#ff705f] text-[#EADCC9] hover:text-white text-center no-underline py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider transition active:scale-98 shadow-md cursor-pointer"
              >
                <span>{t("cart.checkout")} · € {total.toFixed(2)}</span>
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </Link>

              <p className="mt-2 text-center text-[10px] font-semibold text-[#a09a92]">
                Paiement sécurisé en ligne ou sur place · Avenue du Pont 12, Visé
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
