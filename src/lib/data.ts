export const customBases = [
  "Riz blanc",
  "Riz brun",
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
  "Sésame",
  "Noix de cajou",
  "Nachos",
  "Flocons-Chili",
  "Wazabi",
];

export const allToppings = customToppings;

export const bowls = [
  {
    id: "mighty-gyros",
    name: "Mighty Gyros",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, concombre, oignons, gyros maison, spicy mayo, flocons de chili.",
    composition: ["Guacamole", "Maïs", "Tomates cerises", "Concombre", "Oignons", "Gyros maison", "Spicy mayo", "Flocons de chili"],
    tag: "Signature",
  },
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet maison, sauce teriyaki, oignons croustillants, sésame mix, nachos.",
    composition: ["Guacamole", "Maïs", "Tomates cerises", "Mangue", "Feta", "Poulet maison", "Sauce teriyaki", "Oignons croustillants", "Sésame mix", "Nachos"],
    tag: "Best-seller",
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.00,
    desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, nachos, flocons de chili.",
    composition: ["Guacamole", "Edamame", "Tomates", "Concombre", "Poivrons", "Scampis", "Spicy mayo", "Jalapeños", "Nachos", "Flocons de chili"],
    tag: "Signature",
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon, mayo wasabi, sésame mix, nachos.",
    composition: ["Avocat", "Salade d'algues", "Mangue", "Maïs", "Edamame", "Saumon", "Mayo wasabi", "Sésame mix", "Nachos"],
    tag: "Premium",
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
    desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce curry onctueuse. Menu étudiant : boisson incluse.",
    composition: ["Riz parfumé", "Poulet croustillant", "Oignons frits croustillants", "Sauce curry onctueuse"],
    tag: "Nouveau",
    menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    price: 11.00,
    desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce blanche maison. Menu étudiant : boisson incluse.",
    composition: ["Riz parfumé", "Poulet croustillant", "Oignons frits croustillants", "Sauce blanche maison"],
    tag: "Nouveau",
    menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
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
