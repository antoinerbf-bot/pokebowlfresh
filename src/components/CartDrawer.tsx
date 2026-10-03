import React from "react";
import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/I18nContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { DishImage } from "./DishImage";
import { bowls } from "../lib/data";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, total } = useCart();
  const { t } = useTranslation();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col bg-[#f7f4ec] p-0 sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b border-black/5 px-6 py-4">
          <SheetTitle className="flex items-center gap-2 text-base font-black text-[#17231f]">
            <ShoppingBag className="h-5 w-5 text-[#ff705f]" />
            {t("cart.title")}
          </SheetTitle>
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
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc]">
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
                          className="h-16 w-16 shrink-0 rounded-2xl object-cover"
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
                                updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f]"
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
                                updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f]"
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
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-black/5 bg-white px-6 pb-safe pt-4 shadow-[0_-12px_30px_-15px_rgba(0,0,0,.08)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-[#7a847e]">{t("cart.total")}</span>
                <span className="text-2xl font-black text-[#17231f]">€ {total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary block w-full text-center no-underline"
              >
                {t("cart.checkout")}
              </Link>
              <p className="mt-3 text-center text-[10px] font-semibold text-[#a09a92]">
                Commande à emporter · Poke N Bowl Visé
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
