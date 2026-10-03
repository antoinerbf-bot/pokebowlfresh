// ─── BASES ────────────────────────────────────────────────────────────────────
export const customBases = [
  "Riz blanc",
  "Riz brun",
  "Pâtes",
  "Nachos",
  "Salade",
];

// ─── MIX-INS ──────────────────────────────────────────────────────────────────
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

// ─── PROTÉINES ────────────────────────────────────────────────────────────────
export const customProteins = [
  "Poulet",
  "Gyros",
  "Saumon + 1 €",
  "Scampis",
];

// ─── SAUCES ───────────────────────────────────────────────────────────────────
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

// ─── TOPPINGS (structure extensible) ─────────────────────────────────────────
// Pour ajouter un nouveau topping : ajouter un objet à ce tableau.
// Aucune autre modification n'est nécessaire.
export interface Topping {
  id: string;
  name: string;
  emoji: string;
  price: number;       // 0 = inclus
  available: boolean;
  category?: "crunch" | "spice" | "fresh" | "creamy";
}

export const toppings: Topping[] = [
  { id: "oignons-frits",  name: "Oignons frits",   emoji: "🧅", price: 0.50, available: true, category: "crunch" },
  { id: "sesame",         name: "Sésame",           emoji: "🌱", price: 0.50, available: true, category: "crunch" },
  { id: "noix-cajou",     name: "Noix de cajou",   emoji: "🥜", price: 0.50, available: true, category: "crunch" },
  { id: "nachos",         name: "Nachos",           emoji: "🌽", price: 0.50, available: true, category: "crunch" },
  { id: "flocons-chili",  name: "Flocons chili",   emoji: "🌶️", price: 0.50, available: true, category: "spice" },
  { id: "wasabi",         name: "Wasabi",           emoji: "🟢", price: 0.50, available: true, category: "spice" },
];

// Pour les données legacy (commander.tsx, etc.)
export const customToppings = toppings.map((t) => t.name);
export const allToppings = customToppings;

// ─── INGRÉDIENTS RETIRABLES ───────────────────────────────────────────────────
// Chaque ingrédient de composition peut être marqué comme "removable: true"
// pour permettre au client de le retirer du bowl.
export interface Ingredient {
  name: string;
  emoji?: string;
  removable: boolean;  // true = le client peut le retirer
  isProtein?: boolean;
  isSauce?: boolean;
  isBase?: boolean;
}

// ─── BOWLS ────────────────────────────────────────────────────────────────────
export interface Bowl {
  id: string;
  name: string;
  price: number;
  desc: string;
  ingredients: Ingredient[];  // composition détaillée avec removable
  tag: string;
  tagColor?: "signature" | "bestseller" | "premium" | "spicy" | "new";
  menuNote?: string;
}

export const bowls: Bowl[] = [
  {
    id: "mighty-gyros",
    name: "Mighty Gyros",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, concombre, oignons, gyros maison, spicy mayo, flocons de chili.",
    tag: "Signature",
    tagColor: "signature",
    ingredients: [
      { name: "Riz blanc",        emoji: "🍚", removable: false, isBase: true },
      { name: "Gyros maison",     emoji: "🥙", removable: false, isProtein: true },
      { name: "Guacamole",        emoji: "🥑", removable: true },
      { name: "Maïs",             emoji: "🌽", removable: true },
      { name: "Tomates cerises",  emoji: "🍅", removable: true },
      { name: "Concombre",        emoji: "🥒", removable: true },
      { name: "Oignons",          emoji: "🧅", removable: true },
      { name: "Spicy mayo",       emoji: "🌶️", removable: true, isSauce: true },
      { name: "Flocons de chili", emoji: "🔥", removable: true },
    ],
  },
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet maison, sauce teriyaki, oignons croustillants, sésame mix, nachos.",
    tag: "Best-seller",
    tagColor: "bestseller",
    ingredients: [
      { name: "Riz blanc",             emoji: "🍚", removable: false, isBase: true },
      { name: "Poulet maison",         emoji: "🍗", removable: false, isProtein: true },
      { name: "Guacamole",             emoji: "🥑", removable: true },
      { name: "Maïs",                  emoji: "🌽", removable: true },
      { name: "Tomates cerises",       emoji: "🍅", removable: true },
      { name: "Mangue",                emoji: "🥭", removable: true },
      { name: "Feta",                  emoji: "🧀", removable: true },
      { name: "Sauce teriyaki",        emoji: "🍯", removable: true, isSauce: true },
      { name: "Oignons croustillants", emoji: "🧅", removable: true },
      { name: "Sésame mix",            emoji: "🌱", removable: true },
      { name: "Nachos",                emoji: "🫓", removable: true },
    ],
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.00,
    desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, nachos, flocons de chili.",
    tag: "Signature",
    tagColor: "signature",
    ingredients: [
      { name: "Riz blanc",        emoji: "🍚", removable: false, isBase: true },
      { name: "Scampis",          emoji: "🦐", removable: false, isProtein: true },
      { name: "Guacamole",        emoji: "🥑", removable: true },
      { name: "Edamame",          emoji: "🫘", removable: true },
      { name: "Tomates",          emoji: "🍅", removable: true },
      { name: "Concombre",        emoji: "🥒", removable: true },
      { name: "Poivrons",         emoji: "🫑", removable: true },
      { name: "Spicy mayo",       emoji: "🌶️", removable: true, isSauce: true },
      { name: "Jalapeños",        emoji: "🌶️", removable: true },
      { name: "Nachos",           emoji: "🫓", removable: true },
      { name: "Flocons de chili", emoji: "🔥", removable: true },
    ],
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon, mayo wasabi, sésame mix, nachos.",
    tag: "Premium",
    tagColor: "premium",
    ingredients: [
      { name: "Riz blanc",      emoji: "🍚", removable: false, isBase: true },
      { name: "Saumon",         emoji: "🐟", removable: false, isProtein: true },
      { name: "Avocat",         emoji: "🥑", removable: true },
      { name: "Salade d'algues",emoji: "🌿", removable: true },
      { name: "Mangue",         emoji: "🥭", removable: true },
      { name: "Maïs",           emoji: "🌽", removable: true },
      { name: "Edamame",        emoji: "🫘", removable: true },
      { name: "Mayo wasabi",    emoji: "🟢", removable: true, isSauce: true },
      { name: "Sésame mix",     emoji: "🌱", removable: true },
      { name: "Nachos",         emoji: "🫓", removable: true },
    ],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.00,
    desc: "Avocat, patates douces, maïs, jalapeños, feta, poulet maison, spicy mayo, flocons de chili, sésame mix, nachos.",
    tag: "Épicé",
    tagColor: "spicy",
    ingredients: [
      { name: "Riz blanc",        emoji: "🍚", removable: false, isBase: true },
      { name: "Poulet maison",    emoji: "🍗", removable: false, isProtein: true },
      { name: "Avocat",           emoji: "🥑", removable: true },
      { name: "Patates douces",   emoji: "🍠", removable: true },
      { name: "Maïs",             emoji: "🌽", removable: true },
      { name: "Jalapeños",        emoji: "🌶️", removable: true },
      { name: "Feta",             emoji: "🧀", removable: true },
      { name: "Spicy mayo",       emoji: "🌶️", removable: true, isSauce: true },
      { name: "Flocons de chili", emoji: "🔥", removable: true },
      { name: "Sésame mix",       emoji: "🌱", removable: true },
      { name: "Nachos",           emoji: "🫓", removable: true },
    ],
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Curry",
    price: 11.00,
    desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce curry onctueuse. Menu étudiant : boisson incluse.",
    tag: "Nouveau",
    tagColor: "new",
    menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
    ingredients: [
      { name: "Riz parfumé",             emoji: "🍚", removable: false, isBase: true },
      { name: "Poulet croustillant",     emoji: "🍗", removable: false, isProtein: true },
      { name: "Oignons frits",           emoji: "🧅", removable: true },
      { name: "Sauce curry onctueuse",   emoji: "🍛", removable: false, isSauce: true },
    ],
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    price: 11.00,
    desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce blanche maison. Menu étudiant : boisson incluse.",
    tag: "Nouveau",
    tagColor: "new",
    menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
    ingredients: [
      { name: "Riz parfumé",         emoji: "🍚", removable: false, isBase: true },
      { name: "Poulet croustillant", emoji: "🍗", removable: false, isProtein: true },
      { name: "Oignons frits",       emoji: "🧅", removable: true },
      { name: "Sauce blanche maison",emoji: "🤍", removable: false, isSauce: true },
    ],
  },
];

// Helper: backward compat pour CartDrawer / useStock (utilise l'id + nom)
// Expose aussi composition en tableau de strings pour compatibilité
export function bowlComposition(bowl: Bowl): string[] {
  return bowl.ingredients.map((i) => i.name);
}

// ─── BOISSONS ─────────────────────────────────────────────────────────────────
export const drinks = [
  { id: "coca",      name: "Coca-Cola (33 cl)",    price: 2.00 },
  { id: "coca-zero", name: "Coca-Cola Zero (33 cl)",price: 2.00 },
  { id: "fanta",     name: "Fanta (33 cl)",         price: 2.00 },
  { id: "ice-tea",   name: "Ice-Tea (33 cl)",        price: 2.00 },
  { id: "eau-plate", name: "Eau plate",              price: 2.00 },
  { id: "eau-gaz",   name: "Eau gazeuse (50 cl)",   price: 2.00 },
];

// ─── DESSERTS ─────────────────────────────────────────────────────────────────
export const desserts = [
  { id: "tira-oreo",    name: "Tiramisu Oreo",      price: 4.00 },
  { id: "tira-nutella", name: "Tiramisu Nutella",   price: 4.00 },
  { id: "tira-spec",    name: "Tiramisu Spéculoos", price: 4.00 },
];
