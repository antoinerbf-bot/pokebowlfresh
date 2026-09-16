import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check, ShoppingCart } from "lucide-react";
import { bases, proteins, sauces, allToppings } from "../lib/data";
import { useCart } from "../context/CartContext";
import bowlImage from "@/assets/hero-poke.jpg";

type Step = "base" | "protein" | "toppings" | "sauce" | "summary";

export function CreateBowlModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { addItem, setIsCartOpen } = useCart();
  const [step, setStep] = useState<Step>("base");
  
  const [selectedBase, setSelectedBase] = useState<string>("");
  const [selectedProtein, setSelectedProtein] = useState<string>("");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSauce, setSelectedSauce] = useState<string>("");

  const reset = () => {
    setStep("base");
    setSelectedBase("");
    setSelectedProtein("");
    setSelectedToppings([]);
    setSelectedSauce("");
  };

  const closeAndReset = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleAddToCart = () => {
    addItem({
      id: "custom-bowl-" + Date.now(),
      name: "Bowl Sur-Mesure",
      price: 12.00,
      quantity: 1,
      image: bowlImage,
      toppings: [selectedBase, selectedProtein, ...selectedToppings, selectedSauce].filter(Boolean),
    });
    closeAndReset();
    setIsCartOpen(true);
  };

  const stepsFlow: Step[] = ["base", "protein", "toppings", "sauce", "summary"];
  const currentIndex = stepsFlow.indexOf(step);

  const nextStep = () => {
    if (currentIndex < stepsFlow.length - 1) {
      setStep(stepsFlow[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    if (currentIndex > 0) {
      setStep(stepsFlow[currentIndex - 1]);
    }
  };

  const isNextDisabled = () => {
    if (step === "base" && !selectedBase) return true;
    if (step === "protein" && !selectedProtein) return true;
    if (step === "sauce" && !selectedSauce) return true;
    if (step === "toppings" && selectedToppings.length === 0) return true;
    return false;
  };

  const toggleTopping = (topping: string) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    } else {
      if (selectedToppings.length < 5) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="bg-card w-full h-full md:h-auto md:max-h-[90vh] md:max-w-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/50 shrink-0">
              <h2 className="text-xl font-bold">Crée ton bowl</h2>
              <button onClick={closeAndReset} className="p-2 rounded-full hover:bg-secondary transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress */}
            <div className="flex items-center px-6 py-4 shrink-0 overflow-x-auto scrollbar-none gap-2">
              {stepsFlow.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${i === currentIndex ? 'bg-primary text-primary-foreground' : i < currentIndex ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                    {s === "base" ? "1. Base" : s === "protein" ? "2. Protéine" : s === "toppings" ? "3. Toppings" : s === "sauce" ? "4. Sauce" : "5. Résumé"}
                  </div>
                  {i < stepsFlow.length - 1 && <div className="h-0.5 w-4 bg-border" />}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-none relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 pb-20 md:pb-0"
                >
                  {step === "base" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Choisis ta base</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {bases.map(b => (
                          <button key={b} onClick={() => setSelectedBase(b)} className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedBase === b ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}>
                            <span className="font-semibold">{b}</span>
                            {selectedBase === b && <Check className="h-5 w-5 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === "protein" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Choisis ta protéine</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {proteins.map(p => (
                          <button key={p} onClick={() => setSelectedProtein(p)} className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedProtein === p ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}>
                            <span className="font-semibold">{p}</span>
                            {selectedProtein === p && <Check className="h-5 w-5 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === "toppings" && (
                    <div className="space-y-4">
                      <div className="flex items-end justify-between">
                        <h3 className="text-lg font-bold">Choisis tes toppings</h3>
                        <span className="text-sm font-medium text-muted-foreground">{selectedToppings.length}/5 max</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {allToppings.map(t => {
                          const isSelected = selectedToppings.includes(t);
                          const isDisabled = !isSelected && selectedToppings.length >= 5;
                          return (
                            <button
                              key={t}
                              onClick={() => toggleTopping(t)}
                              disabled={isDisabled}
                              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${isSelected ? 'border-primary bg-primary text-primary-foreground shadow-md' : isDisabled ? 'border-border bg-secondary/50 text-muted-foreground/50 cursor-not-allowed' : 'border-border hover:border-primary/50'}`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === "sauce" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Choisis ta sauce</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sauces.map(s => (
                          <button key={s} onClick={() => setSelectedSauce(s)} className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${selectedSauce === s ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}>
                            <span className="font-semibold">{s}</span>
                            {selectedSauce === s && <Check className="h-5 w-5 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === "summary" && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-center">Ton Bowl Sur-Mesure</h3>
                      <div className="bg-secondary/30 rounded-3xl p-6 space-y-4">
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-muted-foreground font-medium">Base</span>
                          <span className="font-bold">{selectedBase}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-muted-foreground font-medium">Protéine</span>
                          <span className="font-bold">{selectedProtein}</span>
                        </div>
                        <div className="flex flex-col gap-2 border-b border-border/50 pb-3">
                          <span className="text-muted-foreground font-medium">Toppings</span>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedToppings.map(t => (
                              <span key={t} className="text-xs font-semibold bg-background px-2 py-1 rounded-md border border-border/50">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-b border-border/50 pb-3">
                          <span className="text-muted-foreground font-medium">Sauce</span>
                          <span className="font-bold">{selectedSauce}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-bold">Total</span>
                          <span className="text-2xl font-black text-primary">12.00 €</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer / Actions */}
            <div className="p-5 border-t border-border/50 bg-background/95 backdrop-blur shrink-0 flex items-center justify-between gap-4 absolute md:relative bottom-0 left-0 right-0">
              <button
                onClick={prevStep}
                disabled={currentIndex === 0}
                className={`p-3 rounded-xl border border-border font-bold flex items-center justify-center transition-colors ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-secondary'}`}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              {step === "summary" ? (
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Ajouter au panier
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  disabled={isNextDisabled()}
                  className={`flex-1 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isNextDisabled() ? 'bg-secondary text-muted-foreground cursor-not-allowed' : 'bg-foreground text-background hover:bg-foreground/90 active:scale-95 shadow-lg'}`}
                >
                  Suivant
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
