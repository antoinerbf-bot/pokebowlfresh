import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { bowls, allToppings } from "../../lib/data";
import { useTranslation } from "../../context/I18nContext";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ShoppingCart, Globe } from "lucide-react";
import { CartDrawer } from "../../components/CartDrawer";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/product/$productId")({
  component: ProductPage,
});

function ProductPage() {
  const { productId } = Route.useParams();
  const product = bowls.find((b) => b.id === productId);
  const { t, language, setLanguage } = useTranslation();
  const { addItem, setIsCartOpen, items } = useCart();
  
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  
  const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="break-words text-3xl font-bold mb-4">Produit introuvable</h1>
          <Link to="/" className="text-coral underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  const handleToppingChange = (topping: string, checked: boolean) => {
    if (checked) {
      if (selectedToppings.length < 5) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    } else {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      toppings: selectedToppings,
      image: product.image,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      
      {/* Header (simplified) */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 group" aria-label="Poke N Bowl — Accueil">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5 transition-transform duration-300 group-hover:rotate-2">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain drop-shadow-md" />
            </span>
            <span className="truncate text-base font-black tracking-tight sm:text-lg">Poke N Bowl</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              {(["fr", "en", "nl"] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`text-xs font-bold px-2 py-1 rounded-full uppercase transition-colors ${language === lang ? "bg-background shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1 mx-auto max-w-6xl px-5 py-8 w-full">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour à la carte
        </Link>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-lift max-h-[500px] flex">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full object-cover" 
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-background/90 text-primary font-bold px-3 py-1.5 rounded-full text-xs shadow-sm">
                {product.tag}
              </span>
            )}
          </div>
          
          {/* Details & Toppings */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h1 className="min-w-0 flex-1 break-words overflow-visible pb-1 text-3xl font-extrabold leading-[1.12]">{product.name}</h1>
              <span className="text-2xl font-display font-bold text-coral">€ {product.price.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.desc}</p>
            
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 flex-1">
              <div className="flex justify-between items-baseline mb-4">
                <h2 className="text-lg font-bold">{t("toppings.title")}</h2>
                <span className="text-xs font-semibold text-muted-foreground">{selectedToppings.length}/5 max</span>
              </div>
              
              <div className="grid grid-cols-1 gap-y-3 gap-x-2 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3">
                {allToppings.map((topping) => {
                  const isChecked = selectedToppings.includes(topping);
                  const isDisabled = !isChecked && selectedToppings.length >= 5;
                  
                  return (
                    <div key={topping} className="flex items-center space-x-2">
                      <Checkbox 
                        id={topping} 
                        checked={isChecked}
                        onCheckedChange={(checked) => handleToppingChange(topping, checked as boolean)}
                        disabled={isDisabled}
                      />
                      <label 
                        htmlFor={topping} 
                        className={`text-sm font-medium leading-none cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {topping}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8">
              <Button onClick={handleAddToCart} size="lg" className="w-full bg-coral hover:bg-coral/90 text-white rounded-xl h-14 text-lg shadow-lift transition-transform hover:scale-[1.02]">
                {t("menu.add_to_cart")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
