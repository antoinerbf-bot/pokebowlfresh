import React from "react";
import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { useTranslation } from "../context/I18nContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, total } = useCart();
  const { t } = useTranslation();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{t("cart.title")}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-2 text-center">
            <p className="text-muted-foreground">{t("cart.empty")}</p>
            <Button
              asChild
              className="rounded-full bg-coral px-6 text-white hover:bg-coral/90"
              onClick={() => setIsCartOpen(false)}
            >
              <Link to="/commander">{t("cart.empty_cta")}</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="-mx-6 flex-1 px-6">
              <div className="flex flex-col gap-5 py-4">
                {items.map((item) => (
                  <div key={`${item.id}-${JSON.stringify(item.toppings)}`} className="flex gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold leading-tight">{item.name}</h4>
                        {item.toppings.length > 0 && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {item.toppings.join(", ")}
                          </p>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="font-medium">€ {(item.price * item.quantity).toFixed(2)}</div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            {item.quantity === 1 ? (
                              <Trash2 className="h-3 w-3" />
                            ) : (
                              <Minus className="h-3 w-3" />
                            )}
                          </Button>
                          <span className="w-4 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-auto pt-4">
              <Separator className="mb-4" />
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold">{t("cart.total")}</span>
                <span className="font-display text-xl font-bold text-coral">€ {total.toFixed(2)}</span>
              </div>
              <Button
                asChild
                className="w-full bg-coral text-white hover:bg-coral/90"
                size="lg"
                onClick={() => setIsCartOpen(false)}
              >
                <Link to="/checkout">{t("cart.checkout")}</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
