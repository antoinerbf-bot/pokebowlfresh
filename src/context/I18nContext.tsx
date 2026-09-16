import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en" | "nl";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  fr: {
    "nav.menu": "La carte",
    "nav.create": "Crée ton bowl",
    "nav.info": "Infos & horaires",
    "nav.order": "Commander",
    "hero.subtitle": "Visé · Poké bar & take away",
    "hero.title1": "Des bowls",
    "hero.title2": "frais, faits minute.",
    "hero.desc": "Poulet maison, saumon, scampis, légumes croquants et sauces signature. On compose votre bowl devant vous, avenue du Pont à Visé.",
    "hero.order": "Commander en ligne",
    "hero.rating": "Note Google",
    "hero.price": "Bowls dès",
    "hero.time": "Prêt en",
    "hero.badge1": "Fait maison",
    "hero.badge2": "Poulet mariné & sauces signature",
    "banner.1": "Produits frais du jour",
    "banner.2": "Sur place & à emporter",
    "banner.3": "Options épicées",
    "banner.4": "Desserts maison",
    "menu.eyebrow": "La carte",
    "menu.title": "Nos bowls les plus demandés",
    "menu.add_to_cart": "Ajouter au panier",
    "menu.drinks": "Boissons",
    "menu.desserts": "Tiramisus",
    "bowl.eyebrow": "Crée ton bowl",
    "bowl.title": "Ta base, ta protéine, tes toppings, ta sauce.",
    "bowl.step1.title": "La base",
    "bowl.step1.desc": "Riz vinaigré ou salade croquante.",
    "bowl.step2.title": "La protéine",
    "bowl.step2.desc": "Poulet maison, saumon, scampis ou veggie.",
    "bowl.step3.title": "Les toppings",
    "bowl.step3.desc": "Avocat, mangue, édamamé, maïs, feta, algues…",
    "bowl.step4.title": "La sauce",
    "bowl.step4.desc": "Teriyaki, spicy mayo, mayo wasabi, curry.",
    "bowl.cta": "Composer mon bowl",
    "info.eyebrow": "Nous trouver",
    "info.title": "Av. du Pont 12, Visé",
    "info.desc": "À deux pas du centre de Visé. Commandez par téléphone et récupérez votre bowl tout chaud, ou installez-vous sur place.",
    "info.route": "Itinéraire",
    "info.call": "Appeler",
    "info.hours": "Horaires",
    "info.closed": "Fermé",
    "cart.title": "Votre Panier",
    "cart.empty": "Votre panier est vide.",
    "cart.total": "Total",
    "cart.checkout": "Passer à la caisse",
    "cart.customize": "Personnaliser",
    "toppings.title": "Choisissez vos garnitures",
    "toppings.max": "Max 5 garnitures",
    "toppings.confirm": "Valider",
  },
  en: {
    "nav.menu": "Menu",
    "nav.create": "Create your bowl",
    "nav.info": "Info & Hours",
    "nav.order": "Order Now",
    "hero.subtitle": "Visé · Poké bar & take away",
    "hero.title1": "Fresh bowls,",
    "hero.title2": "made to order.",
    "hero.desc": "Homemade chicken, salmon, scampi, crunchy veggies and signature sauces. We compose your bowl in front of you, Avenue du Pont in Visé.",
    "hero.order": "Order online",
    "hero.rating": "Google Rating",
    "hero.price": "Bowls from",
    "hero.time": "Ready in",
    "hero.badge1": "Homemade",
    "hero.badge2": "Marinated chicken & signature sauces",
    "banner.1": "Fresh daily products",
    "banner.2": "Dine-in & Takeaway",
    "banner.3": "Spicy options",
    "banner.4": "Homemade desserts",
    "menu.eyebrow": "The Menu",
    "menu.title": "Our most popular bowls",
    "menu.add_to_cart": "Add to cart",
    "menu.drinks": "Drinks",
    "menu.desserts": "Tiramisus",
    "bowl.eyebrow": "Create your bowl",
    "bowl.title": "Your base, protein, toppings, sauce.",
    "bowl.step1.title": "The Base",
    "bowl.step1.desc": "Vinegared rice or crunchy salad.",
    "bowl.step2.title": "The Protein",
    "bowl.step2.desc": "Homemade chicken, salmon, scampi or veggie.",
    "bowl.step3.title": "The Toppings",
    "bowl.step3.desc": "Avocado, mango, edamame, corn, feta, seaweed…",
    "bowl.step4.title": "The Sauce",
    "bowl.step4.desc": "Teriyaki, spicy mayo, wasabi mayo, curry.",
    "bowl.cta": "Build my bowl",
    "info.eyebrow": "Find us",
    "info.title": "Av. du Pont 12, Visé",
    "info.desc": "Close to the center of Visé. Order by phone and pick up your hot bowl, or dine in.",
    "info.route": "Directions",
    "info.call": "Call us",
    "info.hours": "Opening Hours",
    "info.closed": "Closed",
    "cart.title": "Your Cart",
    "cart.empty": "Your cart is empty.",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.customize": "Customize",
    "toppings.title": "Choose your toppings",
    "toppings.max": "Max 5 toppings",
    "toppings.confirm": "Confirm",
  },
  nl: {
    "nav.menu": "Menu",
    "nav.create": "Maak je bowl",
    "nav.info": "Info & Uren",
    "nav.order": "Bestellen",
    "hero.subtitle": "Visé · Poké bar & take away",
    "hero.title1": "Verse bowls,",
    "hero.title2": "à la minute gemaakt.",
    "hero.desc": "Huisgemaakte kip, zalm, scampi, knapperige groenten en kenmerkende sauzen. We stellen uw bowl voor u samen, Avenue du Pont in Visé.",
    "hero.order": "Online bestellen",
    "hero.rating": "Google Score",
    "hero.price": "Bowls vanaf",
    "hero.time": "Klaar in",
    "hero.badge1": "Huisgemaakt",
    "hero.badge2": "Gemarineerde kip & sauzen",
    "banner.1": "Dagelijks verse producten",
    "banner.2": "Ter plaatse & meenemen",
    "banner.3": "Pikante opties",
    "banner.4": "Huisgemaakte desserts",
    "menu.eyebrow": "Het Menu",
    "menu.title": "Onze populairste bowls",
    "menu.add_to_cart": "In winkelmandje",
    "menu.drinks": "Dranken",
    "menu.desserts": "Tiramisus",
    "bowl.eyebrow": "Maak je bowl",
    "bowl.title": "Je basis, proteïne, toppings, saus.",
    "bowl.step1.title": "De Basis",
    "bowl.step1.desc": "Azijnrijst of knapperige salade.",
    "bowl.step2.title": "De Proteïne",
    "bowl.step2.desc": "Huisgemaakte kip, zalm, scampi of veggie.",
    "bowl.step3.title": "De Toppings",
    "bowl.step3.desc": "Avocado, mango, edamame, maïs, feta, zeewier…",
    "bowl.step4.title": "De Saus",
    "bowl.step4.desc": "Teriyaki, spicy mayo, wasabi mayo, curry.",
    "bowl.cta": "Mijn bowl samenstellen",
    "info.eyebrow": "Vind ons",
    "info.title": "Av. du Pont 12, Visé",
    "info.desc": "Vlakbij het centrum van Visé. Bestel telefonisch en haal je warme bowl op, of eet ter plaatse.",
    "info.route": "Routebeschrijving",
    "info.call": "Bel ons",
    "info.hours": "Openingsuren",
    "info.closed": "Gesloten",
    "cart.title": "Jouw Winkelwagen",
    "cart.empty": "Je winkelwagen is leeg.",
    "cart.total": "Totaal",
    "cart.checkout": "Afrekenen",
    "cart.customize": "Aanpassen",
    "toppings.title": "Kies je toppings",
    "toppings.max": "Max 5 toppings",
    "toppings.confirm": "Bevestigen",
  }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
