import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
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
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{t("cart.title")}</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            {t("cart.empty")}
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="flex flex-col gap-5 py-4">
                {items.map((item) => (
                  <div key={`${item.id}-${JSON.stringify(item.toppings)}`} className="flex gap-4">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                    )}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-sm leading-tight">{item.name}</h4>
                        {item.toppings.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.toppings.join(", ")}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="font-medium">€ {(item.price * item.quantity).toFixed(2)}</div>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            {item.quantity === 1 ? <Trash2 className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                          </Button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
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
            
            <div className="pt-4 mt-auto">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">{t("cart.total")}</span>
                <span className="font-display font-bold text-coral text-xl">€ {total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-coral hover:bg-coral/90 text-white" size="lg">
                {t("cart.checkout")}
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
