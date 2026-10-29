// ─── RÈGLES COMMERCIALES & TARIFICATION CENTRALISÉE ─────────────────────────
export const PRICING_RULES = {
  BASE_BOWL_PRICE: 10.00,
  GRAND_SIZE_EXTRA: 3.00,
  MAIN_SALMON_EXTRA: 1.00,
  EXTRA_PROTEIN_PRICE: 2.50, // 2,50 € par portion supplémentaire
  EXTRA_SAUCE_PRICE: 0.50,   // 1ère gratuite, +0,50 € par portion supplémentaire
  EXTRA_MIXIN_PRICE: 1.00,   // 5 inclus (hors feta à +1 €), puis +1,00 € par portion extra
  EXTRA_TOPPING_PRICE: 0.50, // 1 inclus (sur-mesure), puis +0,50 € par portion extra
  INCLUDED_MIXINS_COUNT: 5,
  INCLUDED_TOPPINGS_COUNT: 1,
  INCLUDED_SAUCES_COUNT: 1,
} as const;

export const EXTRA_PROTEIN_PRICE = PRICING_RULES.EXTRA_PROTEIN_PRICE;
export const EXTRA_SAUCE_PRICE = PRICING_RULES.EXTRA_SAUCE_PRICE;
export const EXTRA_MIXIN_PRICE = PRICING_RULES.EXTRA_MIXIN_PRICE;
export const EXTRA_TOPPING_PRICE = PRICING_RULES.EXTRA_TOPPING_PRICE;
export const GRAND_SIZE_EXTRA = PRICING_RULES.GRAND_SIZE_EXTRA;

/**
 * Calcule le supplément pour les protéines additionnelles :
 * Chaque portion supplémentaire coûte 2,50 €.
 * Exemples : 1 portion = 2,50 €, 2 portions = 5,00 €, 3 portions = 7,50 €.
 */
export function calculateExtraProteinsPrice(totalUnits: number): number {
  return Math.max(0, totalUnits) * EXTRA_PROTEIN_PRICE;
}

/**
 * Calcule le supplément pour les sauces :
 * 1 sauce incluse gratuitement (0,00 €).
 * Chaque portion supplémentaire au-delà de la 1ère coûte 0,50 €.
 * Exemples : 1 sauce = 0,00 €, 2 sauces = 0,50 €, 3 sauces = 1,00 €, 4 sauces = 1,50 €.
 */
export function calculateSaucesPrice(totalSaucesCount: number): number {
  const extraSauces = Math.max(0, totalSaucesCount - PRICING_RULES.INCLUDED_SAUCES_COUNT);
  return extraSauces * EXTRA_SAUCE_PRICE;
}

// ─── BASES ────────────────────────────────────────────────────────────────────
export const customBases = [
  "Riz",
  "Riz brun",
  "Pâtes",
  "Nachos",
  "Salade",
];

export interface CustomIngredientOption {
  id: string;
  name: string;
  emoji: string;
  extraPrice?: number;
}

export const detailedBases: CustomIngredientOption[] = [
  { id: "riz-sushi", name: "Riz",      emoji: "🍚" },
  { id: "riz-brun",  name: "Riz brun", emoji: "🌾" },
  { id: "pates",     name: "Pâtes",    emoji: "🍝" },
  { id: "nachos",    name: "Nachos",   emoji: "🫓" },
  { id: "salade",    name: "Salade",   emoji: "🥗" },
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

export const detailedMixIns: CustomIngredientOption[] = [
  { id: "guacamole",      name: "Guacamole",       emoji: "🥑", extraPrice: 1.00 },
  { id: "brocolis",       name: "Brocolis",        emoji: "🥦", extraPrice: 1.00 },
  { id: "patates-douces", name: "Patates douces",  emoji: "🍠", extraPrice: 1.00 },
  { id: "avocat",         name: "Avocat",          emoji: "🥑", extraPrice: 1.00 },
  { id: "carottes",       name: "Carottes",        emoji: "🥕", extraPrice: 1.00 },
  { id: "feta",           name: "Feta",            emoji: "🧀", extraPrice: 1.00 },
  { id: "salade-algues",  name: "Salade d'algues", emoji: "🌿", extraPrice: 1.00 },
  { id: "mangue",         name: "Mangue",          emoji: "🥭", extraPrice: 1.00 },
  { id: "oignons",        name: "Oignons",         emoji: "🧅", extraPrice: 1.00 },
  { id: "mais",           name: "Maïs",            emoji: "🌽", extraPrice: 1.00 },
  { id: "tomates",        name: "Tomates",         emoji: "🍅", extraPrice: 1.00 },
  { id: "poivrons",       name: "Poivrons",       emoji: "🫑", extraPrice: 1.00 },
  { id: "edamame",        name: "Edamame",         emoji: "🫘", extraPrice: 1.00 },
  { id: "jalapenos",      name: "Jalapeños",      emoji: "🌶️", extraPrice: 1.00 },
  { id: "concombres",     name: "Concombres",     emoji: "🥒", extraPrice: 1.00 },
  { id: "houmous",        name: "Houmous",         emoji: "🧆" },
];

// ─── PROTÉINES ────────────────────────────────────────────────────────────────
export const customProteins = [
  "Poulet mariné",
  "Saumon (+1 €)",
  "Scampis",
];

export const detailedProteins: CustomIngredientOption[] = [
  { id: "poulet",  name: "Poulet mariné", emoji: "🍗", extraPrice: 0 },
  { id: "saumon",  name: "Saumon",        emoji: "🐟", extraPrice: 1.00 },
  { id: "scampis", name: "Scampis",       emoji: "🦐", extraPrice: 0 },
];

// ─── SAUCES ───────────────────────────────────────────────────────────────────
export const customSauces = [
  "Mayo",
  "Mayo-Wasabi",
  "Spicy-Mayo",
  "Teriyaki",
  "Sésame salée",
  "Sésame sucrée",
  "Soja salé",
  "Soja sucré",
  "Chili doux",
  "Mayo truffe",
  "Sauce curry",
  "Sauce blanche",
];

export const detailedSauces: CustomIngredientOption[] = [
  { id: "mayo",          name: "Mayo",          emoji: "🍶" },
  { id: "mayo-wasabi",   name: "Mayo-Wasabi",   emoji: "🟢" },
  { id: "spicy-mayo",    name: "Spicy-Mayo",    emoji: "🌶️" },
  { id: "teriyaki",      name: "Teriyaki",      emoji: "🍯" },
  { id: "sesame-salee",  name: "Sésame salée",  emoji: "🌰" },
  { id: "sesame-sucree", name: "Sésame sucrée", emoji: "🌰" },
  { id: "soja-sale",     name: "Soja salé",     emoji: "🥢" },
  { id: "soja-sucre",    name: "Soja sucré",    emoji: "🥢" },
  { id: "chili-doux",    name: "Chili doux",    emoji: "🌶️" },
  { id: "mayo-truffe",   name: "Mayo truffe",   emoji: "🍄" },
  { id: "sauce-curry",   name: "Sauce curry",   emoji: "🍛" },
  { id: "sauce-blanche", name: "Sauce blanche", emoji: "🤍" },
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
  { id: "sesame-seeds",   name: "Sésame seeds",    emoji: "🌱", price: 0.50, available: true, category: "crunch" },
  { id: "noix-cajou",     name: "Noix de cajou",   emoji: "🥜", price: 0.50, available: true, category: "crunch" },
  { id: "nachos",         name: "Nachos",          emoji: "🌽", price: 0.50, available: true, category: "crunch" },
  { id: "flocons-chili",  name: "Flocons-Chili",   emoji: "🌶️", price: 0.50, available: true, category: "spice" },
  { id: "wazabi",         name: "Wazabi",          emoji: "🟢", price: 0.50, available: true, category: "spice" },
];

// Pour les données legacy (commander.tsx, etc.)
export const customToppings = toppings.map((t) => t.name);
export const allToppings = customToppings;

// ─── TAILLES DE BOWL ──────────────────────────────────────────────────────────
export interface BowlSize {
  id: "moyen" | "grand";
  name: string;
  extraPrice: number;
  description: string;
}

export const bowlSizes: BowlSize[] = [
  { id: "moyen", name: "Moyen", extraPrice: 0, description: "Format régulier généreux (10 €)" },
  { id: "grand", name: "Grand", extraPrice: 3.00, description: "Grand format maxi faim (+3.00€ · 13 €)" },
];

// ─── INGRÉDIENTS RETIRABLES ───────────────────────────────────────────────────
// Tous les ingrédients sont retirables par défaut (allergies, goûts, intolérances).
export interface Ingredient {
  name: string;
  emoji?: string;
  removable: boolean;  // true = le client peut le retirer
  isProtein?: boolean;
  isSauce?: boolean;
  isBase?: boolean;
  isTopping?: boolean;
  isMixIn?: boolean;
}

// ─── BOWLS SIGNATURES CONFORMES AU MENU OFFICIEL ─────────────────────────────
export interface Bowl {
  id: string;
  name: string;
  price: number;
  grandPrice?: number;
  desc: string;
  defaultBase: string;
  defaultSauce: string;
  ingredients: Ingredient[];
  tag: string;
  tagColor?: "signature" | "bestseller" | "premium" | "spicy" | "new";
  menuNote?: string;
}

export const bowls: Bowl[] = [
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet mariné, sauce teriyaki, oignons croustillants, sésame mix.",
    defaultBase: "Riz",
    defaultSauce: "Teriyaki",
    tag: "Best-seller",
    tagColor: "bestseller",
    ingredients: [
      { name: "Riz",                   emoji: "🍚", removable: true, isBase: true },
      { name: "Poulet mariné",         emoji: "🍗", removable: true, isProtein: true },
      { name: "Guacamole",             emoji: "🥑", removable: true, isMixIn: true },
      { name: "Maïs",                  emoji: "🌽", removable: true, isMixIn: true },
      { name: "Tomates cerises",       emoji: "🍅", removable: true, isMixIn: true },
      { name: "Mangue",                emoji: "🥭", removable: true, isMixIn: true },
      { name: "Feta",                  emoji: "🧀", removable: true, isMixIn: true },
      { name: "Sauce teriyaki",        emoji: "🍯", removable: true, isSauce: true },
      { name: "Oignons croustillants", emoji: "🧅", removable: true, isTopping: true },
      { name: "Sésame mix",            emoji: "🌱", removable: true, isTopping: true },
    ],
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royal",
    price: 10.00,
    desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, flocons de chili.",
    defaultBase: "Riz",
    defaultSauce: "Spicy-Mayo",
    tag: "Signature",
    tagColor: "signature",
    ingredients: [
      { name: "Riz",              emoji: "🍚", removable: true, isBase: true },
      { name: "Scampis",          emoji: "🦐", removable: true, isProtein: true },
      { name: "Guacamole",        emoji: "🥑", removable: true, isMixIn: true },
      { name: "Edamame",          emoji: "🫘", removable: true, isMixIn: true },
      { name: "Tomates",          emoji: "🍅", removable: true, isMixIn: true },
      { name: "Concombre",        emoji: "🥒", removable: true, isMixIn: true },
      { name: "Poivrons",         emoji: "🫑", removable: true, isMixIn: true },
      { name: "Spicy mayo",       emoji: "🌶️", removable: true, isSauce: true },
      { name: "Jalapeños",        emoji: "🌶️", removable: true, isTopping: true },
      { name: "Flocons de chili", emoji: "🔥", removable: true, isTopping: true },
    ],
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon, mayo wasabi, sésame mix.",
    defaultBase: "Riz",
    defaultSauce: "Mayo-Wasabi",
    tag: "Premium",
    tagColor: "premium",
    ingredients: [
      { name: "Riz",             emoji: "🍚", removable: true, isBase: true },
      { name: "Saumon",          emoji: "🐟", removable: true, isProtein: true },
      { name: "Avocat",          emoji: "🥑", removable: true, isMixIn: true },
      { name: "Salade d'algues", emoji: "🌿", removable: true, isMixIn: true },
      { name: "Mangue",          emoji: "🥭", removable: true, isMixIn: true },
      { name: "Maïs",            emoji: "🌽", removable: true, isMixIn: true },
      { name: "Edamame",         emoji: "🫘", removable: true, isMixIn: true },
      { name: "Mayo wasabi",     emoji: "🟢", removable: true, isSauce: true },
      { name: "Sésame mix",      emoji: "🌱", removable: true, isTopping: true },
    ],
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.00,
    desc: "Avocat, patates douces, maïs, jalapeños, feta, poulet mariné, spicy mayo, flocons de chili, sésame mix.",
    defaultBase: "Riz",
    defaultSauce: "Spicy-Mayo",
    tag: "Épicé",
    tagColor: "spicy",
    ingredients: [
      { name: "Riz",              emoji: "🍚", removable: true, isBase: true },
      { name: "Poulet mariné",    emoji: "🍗", removable: true, isProtein: true },
      { name: "Avocat",           emoji: "🥑", removable: true, isMixIn: true },
      { name: "Patates douces",   emoji: "🍠", removable: true, isMixIn: true },
      { name: "Maïs",             emoji: "🌽", removable: true, isMixIn: true },
      { name: "Jalapeños",        emoji: "🌶️", removable: true, isMixIn: true },
      { name: "Feta",             emoji: "🧀", removable: true, isMixIn: true },
      { name: "Spicy mayo",       emoji: "🌶️", removable: true, isSauce: true },
      { name: "Flocons de chili", emoji: "🔥", removable: true, isTopping: true },
      { name: "Sésame mix",       emoji: "🌱", removable: true, isTopping: true },
    ],
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken Curry",
    price: 11.00,
    desc: "Petits morceaux de poulet croustillant, sauce curry onctueuse maison bien généreuse, oignons frits croustillants et riz chaud en barquette rectangulaire. Formule étudiant à 11 € avec canette 33 cl incluse, uniquement le midi.",
    defaultBase: "Riz",
    defaultSauce: "Sauce curry",
    tag: "Formule Étudiant 11 € · Midi uniquement",
    tagColor: "bestseller",
    menuNote: "🎓 Formule étudiant à 11 € avec canette 33 cl incluse au choix — disponible UNIQUEMENT LE MIDI (12h00 – 14h00). Supplément protéine : +2,50 € · Supplément légume/mix-in : +1,00 €.",
    ingredients: [
      { name: "Riz",                                   emoji: "🍚", removable: true, isBase: true },
      { name: "Petits morceaux de poulet croustillant", emoji: "🍗", removable: true, isProtein: true },
      { name: "Sauce curry onctueuse",                 emoji: "🍛", removable: true, isSauce: true },
      { name: "Oignons frits croustillants",           emoji: "🧅", removable: true, isTopping: true },
    ],
  },
  {
    id: "crousty-chicken-sauce-blanche",
    name: "Crousty Chicken Sauce Blanche",
    price: 11.00,
    desc: "Petits morceaux de poulet croustillant, sauce blanche onctueuse maison nappée généreusement, oignons frits croustillants et riz chaud en barquette rectangulaire. Formule étudiant à 11 € avec canette 33 cl incluse, uniquement le midi.",
    defaultBase: "Riz",
    defaultSauce: "Sauce blanche",
    tag: "Formule Étudiant 11 € · Midi uniquement",
    tagColor: "bestseller",
    menuNote: "🎓 Formule étudiant à 11 € avec canette 33 cl incluse au choix — disponible UNIQUEMENT LE MIDI (12h00 – 14h00). Supplément protéine : +2,50 € · Supplément légume/mix-in : +1,00 €.",
    ingredients: [
      { name: "Riz",                                   emoji: "🍚", removable: true, isBase: true },
      { name: "Petits morceaux de poulet croustillant", emoji: "🍗", removable: true, isProtein: true },
      { name: "Sauce blanche maison",                  emoji: "🤍", removable: true, isSauce: true },
      { name: "Oignons frits croustillants",           emoji: "🧅", removable: true, isTopping: true },
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
  { id: "coca",      name: "Coca-Cola (33 cl)",                 price: 2.00 },
  { id: "coca-zero", name: "Coca-Cola Zero (33 cl)",            price: 2.00 },
  { id: "fanta",     name: "Fanta Orange (33 cl)",              price: 2.00 },
  { id: "ice-tea",   name: "Ice Tea Sparkling (33 cl)",        price: 2.00 },
  { id: "eau-plate", name: "SPA Reine Eau plate (50 cl)",       price: 2.00 },
  { id: "eau-gaz",   name: "SPA Intense Eau pétillante (50 cl)", price: 2.00 },
];

// ─── DESSERTS ─────────────────────────────────────────────────────────────────
export const desserts = [
  { id: "tira-oreo",    name: "Tiramisu Oreo",      price: 4.00, soldOut: false },
  { id: "tira-nutella", name: "Tiramisu Nutella",   price: 4.00, soldOut: true },
  { id: "tira-spec",    name: "Tiramisu Spéculoos", price: 4.00, soldOut: false },
];
