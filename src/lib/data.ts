export const customBases = [
  "Riz basmati",
  "Riz basmati complet",
  "Pâtes",
  "Nachos",
  "Salade",
];

export const customMixIns = [
  "Guacamole",
  "Brocolis",
  "Patates douces",
  "Avocat",
  "Carottes",
  "Feta",
  "Salade d'algues",
  "Mangue",
  "Oignons",
  "Maïs",
  "Tomates",
  "Poivrons",
  "Edamame",
  "Jalapeños",
  "Concombres",
  "Houmous",
];

export const customProteins = [
  "Poulet",
  "Gyros",
  "Saumon + 1 €",
  "Scampis",
];

export const customSauces = [
  "Mayo",
  "Mayo-Wasabi",
  "Spicy-Mayo",
  "Sésame (salée ou sucrée)",
  "Chili doux",
  "Teriyaki",
  "Soja (salé ou sucré)",
  "Mayo truffe",
];

export const customToppings = [
  "Oignons frits",
  "Sésame seeds",
  "Noix de cajou",
  "Nachos",
  "Flocons-Chili",
  "Wazabi",
];

export const allToppings = customToppings;

// Les six toppings sont sélectionnables jusqu'à 2 par produit.
// Le supplément est appliqué automatiquement au total.
export const toppingPrices: Record<string, number> = {
  "Oignons frits": 0.50,
  "Sésame seeds": 0.50,
  "Noix de cajou": 0.50,
  "Nachos": 0.50,
  "Flocons-Chili": 0.50,
  "Wazabi": 0.50,
};

export const bowls = [
  {
    id: "mighty-gyros",
    name: "Mighty Gyros",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, concombre, oignons, gyros maison, spicy mayo, flocons de chili.",
    composition: ["Guacamole", "Maïs", "Tomates cerises", "Concombre", "Oignons", "Gyros maison", "Spicy mayo", "Flocons de chili"],
    tag: "Maison",
  },
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet maison, sauce teriyaki, oignons croustillants, sésame mix, nachos.",
    composition: ["Guacamole", "Maïs", "Tomates cerises", "Mangue", "Feta", "Poulet maison", "Sauce teriyaki", "Oignons croustillants", "Sésame mix", "Nachos"],
    tag: "Incontournable",
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.00,
    desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, nachos, flocons de chili.",
    composition: ["Guacamole", "Edamame", "Tomates", "Concombre", "Poivrons", "Scampis", "Spicy mayo", "Jalapeños", "Nachos", "Flocons de chili"],
    tag: "Maison",
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon, mayo wasabi, sésame mix, nachos.",
    composition: ["Avocat", "Salade d'algues", "Mangue", "Maïs", "Edamame", "Saumon", "Mayo wasabi", "Sésame mix", "Nachos"],
    tag: "Premium",
    menuNote: "Supplément saumon : +1 €.",
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.00,
    desc: "Avocat, patates douces, maïs, jalapeños, feta, poulet maison, spicy mayo, flocons de chili, sésame mix, nachos.",
    composition: ["Avocat", "Patates douces", "Maïs", "Jalapeños", "Feta", "Poulet maison", "Spicy mayo", "Flocons de chili", "Sésame mix", "Nachos"],
    tag: "Épicé",
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Curry",
    price: 11.00,
    desc: "Poulet croustillant, riz parfumé, sauce curry onctueuse et oignons frits croustillants.",
    composition: ["Poulet croustillant", "Riz basmati", "Sauce curry onctueuse", "Oignons frits croustillants"],
    tag: "Nouveau",
    menuNote: "Menu étudiant : 11 € avec boisson incluse. Sauce extra : +1 €.",
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    price: 11.00,
    desc: "Poulet croustillant, riz parfumé, sauce blanche et oignons frits croustillants.",
    composition: ["Poulet croustillant", "Riz basmati", "Sauce blanche", "Oignons frits croustillants"],
    tag: "Nouveau",
    menuNote: "Menu étudiant : 11 € avec boisson incluse. Sauce extra : +1 €.",
  },
];

export const drinks = [
  { id: "coca", name: "Coca-Cola (33 cl)", price: 2.00 },
  { id: "coca-zero", name: "Coca-Cola Zero (33 cl)", price: 2.00 },
  { id: "fanta", name: "Fanta (33 cl)", price: 2.00 },
  { id: "ice-tea", name: "Ice-Tea (33 cl)", price: 2.00 },
  { id: "eau-plate", name: "Eau plate", price: 2.00 },
  { id: "eau-gaz", name: "Eau gazeuse (50 cl)", price: 2.00 },
];

export const desserts = [
  { id: "tira-oreo", name: "Tiramisu Oreo", price: 4.00 },
  { id: "tira-nutella", name: "Tiramisu Nutella", price: 4.00 },
  { id: "tira-spec", name: "Tiramisu Spéculoos", price: 4.00 },
];
