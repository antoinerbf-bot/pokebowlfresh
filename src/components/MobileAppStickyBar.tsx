import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function MobileAppStickyBar() {
  const { items, total, setIsCartOpen } = useCart();
  const [isVisible, setIsVisible] = React.useState(false);

  // Apparaît dès qu'on a dépassé 250px ou s'il y a déjà des articles dans le panier
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250 || items.length > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAction = () => {
    if (totalItemCount > 0) {
      setIsCartOpen(true);
    } else {
      const el = document.getElementById("carte");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/commander";
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 280 }}
          className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-auto"
        >
          <div className="rounded-[26px] bg-[#10251f]/95 backdrop-blur-xl border border-white/20 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2.5 text-white">
            
            {/* Raccourci rapide Atelier Sur-Mesure */}
            <a
              href="#composer"
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] border border-white/15 active:scale-95 transition shrink-0"
            >
              <Sparkles className="h-3 w-3 stroke-[3]" />
              <span>Sur-mesure</span>
            </a>

            {/* Bouton Panier interactif type Application Mobile */}
            <button
              type="button"
              onClick={handleAction}
              className="flex-1 flex items-center justify-between rounded-full bg-[#d7ff45] px-4 py-2.5 text-[#10251f] shadow-lg transition active:scale-95 min-w-0"
            >
              <div className="flex items-center gap-2 truncate">
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  {totalItemCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white">
                      {totalItemCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-black uppercase tracking-wider truncate">
                  {totalItemCount > 0 ? `${totalItemCount} article${totalItemCount > 1 ? "s" : ""}` : "Commander"}
                </span>
              </div>

              <div className="flex items-center gap-1 font-black text-xs shrink-0 ml-1">
                <span>{total > 0 ? `${total.toFixed(2)} €` : "La Carte"}</span>
                <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
