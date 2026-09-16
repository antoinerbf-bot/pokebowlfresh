import heroPoke from "@/assets/hero-poke.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import dessert from "@/assets/dessert.jpg";

export const allToppings = [
  "Avocat", "Mangue", "Édamamé", "Maïs", "Feta", "Algues Wakame", "Tomates cerises", 
  "Oignons croustillants", "Sésame mixte", "Jalapeños", "Poivrons", "Concombre", 
  "Radis", "Ananas", "Grenade", "Coriandre", "Ciboulette", "Cacahuètes", "Nachos", 
  "Oignons rouges", "Gingembre mariné", "Oignons frits"
];

export const bases = [
  "Riz sushi", "Quinoa", "Salade mixte", "Moitié-Moitié"
];

export const proteins = [
  "Saumon frais", "Poulet frit", "Scampis", "Tofu"
];

export const sauces = [
  "Sauce Soja salée", "Sauce Soja sucrée", "Spicy Mayo", "Sauce Blanche", "Sauce Curry", "Mayo Wasabi", "Sauce Ponzu"
];

export const bowls = [
  {
    id: "sweet-chicken",
    name: "Sweet Chicken",
    price: 10.00,
    image: bowlChicken,
    desc: "Poulet maison, guacamole, maïs, tomates cerises, mangue, feta, sauce teriyaki, oignons croustillants, nachos, sésame mixte.",
    tag: "Best-seller",
  },
  {
    id: "saumon-wasabi",
    name: "Saumon Wasabi",
    price: 11.00,
    image: heroPoke,
    desc: "Saumon, avocat, salade d'algues, mangue, maïs, édamamé, mayo wasabi, sésame mixte, nachos.",
    tag: "Signature",
  },
  {
    id: "scampis-royaux",
    name: "Scampis Royaux",
    price: 10.00,
    image: bowlScampi,
    desc: "Scampis, guacamole, édamamé, tomates, concombre, poivrons, spicy mayo, jalapeños, flocons de chili, nachos.",
    tag: "Relevé",
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    price: 10.00,
    image: bowlChicken, 
    desc: "Poulet maison, avocat, patates douces, maïs, jalapeños, feta, spicy mayo, flocons de chili, nachos, sésame mix.",
    tag: "Épicé",
  },
  {
    id: "crousty-chicken-blanche",
    name: "Crousty Chicken (Blanche)",
    price: 11.50,
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce blanche, oignons frits croustillants.",
    tag: "Gourmand",
  },
  {
    id: "crousty-chicken-curry",
    name: "Crousty Chicken (Curry)",
    price: 11.50,
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce curry onctueux, oignons frits croustillants.",
    tag: "Gourmand",
  },
  {
    id: "crousty-chicken-mixte",
    name: "Crousty Chicken (Mixte)",
    price: 11.50,
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce blanche et curry, oignons frits croustillants.",
    tag: "Gourmand",
  }
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
  { id: "tira-oreo", name: "Tiramisu Oreo", price: 4.00, image: dessert },
  { id: "tira-nutella", name: "Tiramisu Nutella", price: 4.00, image: dessert },
  { id: "tira-spec", name: "Tiramisu Spéculoos", price: 4.00, image: dessert },
];
