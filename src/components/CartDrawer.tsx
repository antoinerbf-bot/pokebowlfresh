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
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { DishImage } from "./DishImage";
import { bowls } from "../lib/data";

import tiramisuSpeculoos from "@/assets/tiramisu-speculoos.jpg";
import tiramisuOreo from "@/assets/tiramisu-oreo.jpg";
import drinkCocaCola from "@/assets/drink-coca-cola.jpg";
import drinkEauGazeuse from "@/assets/drink-eau-gazeuse.jpg";
import drinkEauPlate from "@/assets/drink-eau-plate.jpg";

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
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, addItem, total } =
    useCart();
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
      <SheetContent className="flex w-full flex-col bg-[#f7f4ec] p-0 sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b border-black/5 bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 text-base font-black text-[#17231f]">
              <ShoppingBag className="h-5 w-5 text-[#ff705f]" />
              {t("cart.title")}
            </SheetTitle>
            <span className="rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9]">
              {items.reduce((s, i) => s + i.quantity, 0)} {items.length > 1 ? "articles" : "article"}
            </span>
          </div>

          {/* ════════ JAUGE DE LIVRAISON OFFERTE DYNAMIQUE (GAMIFICATION CRO) ════════ */}
          {items.length > 0 && (
            <div className="mt-3 pt-3 border-t border-black/5">
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
              <div className="h-2 w-full overflow-hidden rounded-full bg-black/5">
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

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card text-4xl">
              🥣
            </div>
            <div>
              <p className="font-black text-[#17231f]">Ton panier est vide</p>
              <p className="mt-1 text-sm text-[#7a847e]">{t("cart.empty")}</p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-primary mt-2"
              type="button"
            >
              <Link to="/commander">{t("cart.empty_cta")}</Link>
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <ScrollArea className="flex-1">
              <div className="flex flex-col divide-y divide-black/5 px-6">
                {items.map((item) => {
                  const isBowl = bowls.some((b) => b.id === item.id);
                  return (
                    <div
                      key={`${item.id}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`}
                      className="flex gap-4 py-4"
                    >
                      {/* Image */}
                      {isBowl ? (
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] shadow-sm">
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
                          className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm"
                        />
                      ) : (
                        <div className="h-16 w-16 shrink-0 rounded-2xl bg-[#ece8dc]" />
                      )}

                      {/* Info */}
                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div>
                          <h4 className="truncate text-sm font-black text-[#17231f]">
                            {item.name}
                          </h4>
                          {/* Toppings ajoutés */}
                          {item.toppings.length > 0 && (
                            <p className="mt-0.5 truncate text-[11px] text-[#7a847e]">
                              + {item.toppings.join(", ")}
                            </p>
                          )}
                          {/* Ingrédients retirés */}
                          {item.removedIngredients && item.removedIngredients.length > 0 && (
                            <p className="mt-0.5 truncate text-[11px] text-[#ff705f] line-through decoration-[#ff705f]/50">
                              ✕ {item.removedIngredients.join(", ")}
                            </p>
                          )}
                        </div>

                        {/* Qté + prix */}
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-black text-[#17231f]">
                            € {(item.price * item.quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              aria-label="Diminuer"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.toppings,
                                  item.removedIngredients ?? [],
                                  item.quantity - 1
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm"
                            >
                              {item.quantity === 1 ? (
                                <Trash2 className="h-3 w-3" />
                              ) : (
                                <Minus className="h-3 w-3" />
                              )}
                            </button>
                            <span className="w-5 text-center text-sm font-black">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Augmenter"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.toppings,
                                  item.removedIngredients ?? [],
                                  item.quantity + 1
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ════════ CROSS-SELLING EXPRESS EN 1 CLIC (+15% À +25% PANIER MOYEN) ════════ */}
              <div className="mx-6 my-4 rounded-2xl bg-white border border-black/5 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#ff705f]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#2C1D16]">
                      Envie d'une douceur ou d'une boisson ?
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#7a847e]">1 clic</span>
                </div>

                <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
                  {CROSS_SELL_ITEMS.map((cs) => (
                    <button
                      key={cs.id}
                      type="button"
                      onClick={() => handleQuickAddCrossSell(cs)}
                      className="group flex flex-col items-center justify-between rounded-xl bg-[#faf8f4] border border-black/5 p-2 w-28 shrink-0 text-center transition hover:border-[#ff705f] hover:bg-white hover:scale-[1.02] shadow-sm"
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
            </ScrollArea>

            {/* Footer avec Réassurance & Bouton de Paiement */}
            <div className="border-t border-black/5 bg-white px-6 pb-safe pt-4 shadow-[0_-12px_30px_-15px_rgba(0,0,0,.08)]">
              {/* Rassurance express */}
              <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-[#5a6760] bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-black/5">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-emerald-600" />
                  Prêt en 15-20 min
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  Fait minute à Visé
                </span>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#7a847e]">Sous-total commande</span>
                  <p className="text-[10px] text-[#a09a92]">TVA incluse</p>
                </div>
                <span className="text-2xl font-black text-[#17231f]">
                  € {total.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 w-full text-center no-underline py-4 text-sm font-black uppercase tracking-wider shadow-lg"
              >
                <span>{t("cart.checkout")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <p className="mt-2.5 text-center text-[10px] font-semibold text-[#a09a92]">
                Paiement sécurisé en ligne ou sur place · Avenue du Pont 12, Visé
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
