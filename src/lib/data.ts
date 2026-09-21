import heroPoke from "@/assets/hero-poke.jpg";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import dessert from "@/assets/dessert.jpg";

export const allToppings = [
  "Avocat", "Mangue", "Edamame", "Maïs", "Feta", "Algues", "Tomates cerises", 
  "Oignons croustillants", "Sésame mixte", "Jalapeños", "Poivrons", "Concombre", 
  "Radis", "Ananas", "Grenade", "Coriandre", "Ciboulette", "Cacahuètes", "Nachos", 
  "Oignons rouges", "Graines de chia", "Noix de cajou", "Sauce Sriracha", "Citron vert",
  "Gingembre mariné", "Champignons shiitake", "Oignons frits", "Bambou", "Petit pois", "Piment frais"
];

export const bowls = [
  {
    id: "sweet-chicken",
    name: "Sweet chicken",
    price: 10.00,
    image: bowlChicken,
    desc: "Poulet maison, guacamole, maïs, tomates cerises, mangue, feta, sauce teriyaki, oignons croustillants, nachos, sésame mixte.",
    tag: "Best-seller",
  },
  {
    id: "saumon-wasabi",
    name: "Saumon wasabi",
    price: 11.00,
    image: heroPoke,
    desc: "Saumon, avocat, salade d'algues, mangue, maïs, édamamé, mayo wasabi, sésame mixte, nachos.",
    tag: "Signature",
  },
  {
    id: "scampis-royaux",
    name: "Scampis royaux",
    price: 10.00,
    image: bowlScampi,
    desc: "Scampis, guacamole, édamamé, tomates, concombre, poivrons, spicy mayo, jalapeños, flocons de chili, nachos.",
    tag: "Relevé",
  },
  {
    id: "crousty-chicken",
    name: "Crousty Chicken",
    price: 11.50,
    image: bowlCrousty,
    desc: "Riz, poulet croustillant, sauce blanche, curry onctueux ou mix, oignons frits croustillants.",
    tag: "Réconfort",
  },
  {
    id: "spicy-chicken",
    name: "Spicy chicken",
    price: 10.00,
    image: bowlChicken, // Fallback image
    desc: "Poulet maison, avocat, patates douces, maïs, jalapeños, feta, spicy mayo, flocons de chili, nachos, sésame mix.",
    tag: "Épicé",
  },
  {
    id: "aloha-classic",
    name: "Aloha Classic",
    price: 12.00,
    image: heroPoke, // Fallback image
    desc: "Thon mariné, ananas, avocat, concombre, oignons rouges, coriandre, graines de sésame, sauce ponzu, riz vinaigré.",
    tag: "Nouveau",
  },
  {
    id: "vegan-tofu",
    name: "Vegan Tofu",
    price: 9.50,
    image: bowlScampi, // Fallback image
    desc: "Tofu frit, édamamé, patate douce, chou rouge, grenade, algues wakame, sauce cacahuète, sésame.",
    tag: "Vegan",
  },
  {
    id: "beef-teriyaki",
    name: "Beef Teriyaki",
    price: 13.00,
    image: bowlCrousty, // Fallback image
    desc: "Émincé de boeuf, riz, brocolis, champignons shiitake, sésame, ciboulette, sauce teriyaki sucrée.",
    tag: "Gourmand",
  },
  {
    id: "shrimp-mango",
    name: "Shrimp Mango",
    price: 11.50,
    image: bowlScampi, // Fallback image
    desc: "Crevettes, mangue fraîche, avocat, tomates cerises, concombre, citron vert, coriandre, sauce piment doux.",
    tag: "Frais",
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
  { id: "tira-oreo", name: "Tiramisu Oreo", price: 4.00 },
  { id: "tira-nutella", name: "Tiramisu Nutella", price: 4.00 },
  { id: "tira-spec", name: "Tiramisu Spéculoos", price: 4.00 },
];
