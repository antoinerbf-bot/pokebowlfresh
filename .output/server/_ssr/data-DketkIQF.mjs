//#region node_modules/.nitro/vite/services/ssr/assets/data-DketkIQF.js
var customBases = [
	"Riz blanc",
	"Riz brun",
	"Pâtes",
	"Nachos",
	"Salade"
];
var customMixIns = [
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
	"Houmous"
];
var customProteins = [
	"Poulet",
	"Gyros",
	"Saumon + 1 €",
	"Scampis"
];
var customSauces = [
	"Mayo",
	"Mayo-Wasabi",
	"Spicy-Mayo",
	"Sésame (salée ou sucrée)",
	"Chili doux",
	"Teriyaki",
	"Soja (salé ou sucré)",
	"Mayo truffe"
];
var toppings = [
	{
		id: "oignons-frits",
		name: "Oignons frits",
		emoji: "🧅",
		price: 0,
		available: true,
		category: "crunch"
	},
	{
		id: "sesame",
		name: "Sésame",
		emoji: "🌱",
		price: 0,
		available: true,
		category: "crunch"
	},
	{
		id: "noix-cajou",
		name: "Noix de cajou",
		emoji: "🥜",
		price: 0,
		available: true,
		category: "crunch"
	},
	{
		id: "nachos",
		name: "Nachos",
		emoji: "🌽",
		price: 0,
		available: true,
		category: "crunch"
	},
	{
		id: "flocons-chili",
		name: "Flocons chili",
		emoji: "🌶️",
		price: 0,
		available: true,
		category: "spice"
	},
	{
		id: "wasabi",
		name: "Wasabi",
		emoji: "🟢",
		price: 0,
		available: true,
		category: "spice"
	}
];
var allToppings = toppings.map((t) => t.name);
var bowls = [
	{
		id: "mighty-gyros",
		name: "Mighty Gyros",
		price: 10,
		desc: "Guacamole, maïs, tomates cerises, concombre, oignons, gyros maison, spicy mayo, flocons de chili.",
		tag: "Signature",
		tagColor: "signature",
		ingredients: [
			{
				name: "Riz blanc",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Gyros maison",
				emoji: "🥙",
				removable: false,
				isProtein: true
			},
			{
				name: "Guacamole",
				emoji: "🥑",
				removable: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true
			},
			{
				name: "Tomates cerises",
				emoji: "🍅",
				removable: true
			},
			{
				name: "Concombre",
				emoji: "🥒",
				removable: true
			},
			{
				name: "Oignons",
				emoji: "🧅",
				removable: true
			},
			{
				name: "Spicy mayo",
				emoji: "🌶️",
				removable: true,
				isSauce: true
			},
			{
				name: "Flocons de chili",
				emoji: "🔥",
				removable: true
			}
		]
	},
	{
		id: "sweet-chicken",
		name: "Sweet Chicken",
		price: 10,
		desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet maison, sauce teriyaki, oignons croustillants, sésame mix, nachos.",
		tag: "Best-seller",
		tagColor: "bestseller",
		ingredients: [
			{
				name: "Riz blanc",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Poulet maison",
				emoji: "🍗",
				removable: false,
				isProtein: true
			},
			{
				name: "Guacamole",
				emoji: "🥑",
				removable: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true
			},
			{
				name: "Tomates cerises",
				emoji: "🍅",
				removable: true
			},
			{
				name: "Mangue",
				emoji: "🥭",
				removable: true
			},
			{
				name: "Feta",
				emoji: "🧀",
				removable: true
			},
			{
				name: "Sauce teriyaki",
				emoji: "🍯",
				removable: true,
				isSauce: true
			},
			{
				name: "Oignons croustillants",
				emoji: "🧅",
				removable: true
			},
			{
				name: "Sésame mix",
				emoji: "🌱",
				removable: true
			},
			{
				name: "Nachos",
				emoji: "🫓",
				removable: true
			}
		]
	},
	{
		id: "scampis-royaux",
		name: "Scampis Royal",
		price: 10,
		desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, nachos, flocons de chili.",
		tag: "Signature",
		tagColor: "signature",
		ingredients: [
			{
				name: "Riz blanc",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Scampis",
				emoji: "🦐",
				removable: false,
				isProtein: true
			},
			{
				name: "Guacamole",
				emoji: "🥑",
				removable: true
			},
			{
				name: "Edamame",
				emoji: "🫘",
				removable: true
			},
			{
				name: "Tomates",
				emoji: "🍅",
				removable: true
			},
			{
				name: "Concombre",
				emoji: "🥒",
				removable: true
			},
			{
				name: "Poivrons",
				emoji: "🫑",
				removable: true
			},
			{
				name: "Spicy mayo",
				emoji: "🌶️",
				removable: true,
				isSauce: true
			},
			{
				name: "Jalapeños",
				emoji: "🌶️",
				removable: true
			},
			{
				name: "Nachos",
				emoji: "🫓",
				removable: true
			},
			{
				name: "Flocons de chili",
				emoji: "🔥",
				removable: true
			}
		]
	},
	{
		id: "saumon-wasabi",
		name: "Saumon Wasabi",
		price: 11,
		desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon, mayo wasabi, sésame mix, nachos.",
		tag: "Premium",
		tagColor: "premium",
		ingredients: [
			{
				name: "Riz blanc",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Saumon",
				emoji: "🐟",
				removable: false,
				isProtein: true
			},
			{
				name: "Avocat",
				emoji: "🥑",
				removable: true
			},
			{
				name: "Salade d'algues",
				emoji: "🌿",
				removable: true
			},
			{
				name: "Mangue",
				emoji: "🥭",
				removable: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true
			},
			{
				name: "Edamame",
				emoji: "🫘",
				removable: true
			},
			{
				name: "Mayo wasabi",
				emoji: "🟢",
				removable: true,
				isSauce: true
			},
			{
				name: "Sésame mix",
				emoji: "🌱",
				removable: true
			},
			{
				name: "Nachos",
				emoji: "🫓",
				removable: true
			}
		]
	},
	{
		id: "spicy-chicken",
		name: "Spicy Chicken",
		price: 10,
		desc: "Avocat, patates douces, maïs, jalapeños, feta, poulet maison, spicy mayo, flocons de chili, sésame mix, nachos.",
		tag: "Épicé",
		tagColor: "spicy",
		ingredients: [
			{
				name: "Riz blanc",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Poulet maison",
				emoji: "🍗",
				removable: false,
				isProtein: true
			},
			{
				name: "Avocat",
				emoji: "🥑",
				removable: true
			},
			{
				name: "Patates douces",
				emoji: "🍠",
				removable: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true
			},
			{
				name: "Jalapeños",
				emoji: "🌶️",
				removable: true
			},
			{
				name: "Feta",
				emoji: "🧀",
				removable: true
			},
			{
				name: "Spicy mayo",
				emoji: "🌶️",
				removable: true,
				isSauce: true
			},
			{
				name: "Flocons de chili",
				emoji: "🔥",
				removable: true
			},
			{
				name: "Sésame mix",
				emoji: "🌱",
				removable: true
			},
			{
				name: "Nachos",
				emoji: "🫓",
				removable: true
			}
		]
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Curry",
		price: 11,
		desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce curry onctueuse. Menu étudiant : boisson incluse.",
		tag: "Nouveau",
		tagColor: "new",
		menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
		ingredients: [
			{
				name: "Riz parfumé",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Poulet croustillant",
				emoji: "🍗",
				removable: false,
				isProtein: true
			},
			{
				name: "Oignons frits",
				emoji: "🧅",
				removable: true
			},
			{
				name: "Sauce curry onctueuse",
				emoji: "🍛",
				removable: false,
				isSauce: true
			}
		]
	},
	{
		id: "crousty-chicken-sauce-blanche",
		name: "Crousty Chicken Sauce Blanche",
		price: 11,
		desc: "Poulet croustillant, riz parfumé, oignons frits croustillants, sauce blanche maison. Menu étudiant : boisson incluse.",
		tag: "Nouveau",
		tagColor: "new",
		menuNote: "Menu étudiant : 11€ avec boisson incluse. Sauce extra : +1€.",
		ingredients: [
			{
				name: "Riz parfumé",
				emoji: "🍚",
				removable: false,
				isBase: true
			},
			{
				name: "Poulet croustillant",
				emoji: "🍗",
				removable: false,
				isProtein: true
			},
			{
				name: "Oignons frits",
				emoji: "🧅",
				removable: true
			},
			{
				name: "Sauce blanche maison",
				emoji: "🤍",
				removable: false,
				isSauce: true
			}
		]
	}
];
var drinks = [
	{
		id: "coca",
		name: "Coca-Cola (33 cl)",
		price: 2
	},
	{
		id: "coca-zero",
		name: "Coca-Cola Zero (33 cl)",
		price: 2
	},
	{
		id: "fanta",
		name: "Fanta (33 cl)",
		price: 2
	},
	{
		id: "ice-tea",
		name: "Ice-Tea (33 cl)",
		price: 2
	},
	{
		id: "eau-plate",
		name: "Eau plate",
		price: 2
	},
	{
		id: "eau-gaz",
		name: "Eau gazeuse (50 cl)",
		price: 2
	}
];
var desserts = [
	{
		id: "tira-oreo",
		name: "Tiramisu Oreo",
		price: 4
	},
	{
		id: "tira-nutella",
		name: "Tiramisu Nutella",
		price: 4
	},
	{
		id: "tira-spec",
		name: "Tiramisu Spéculoos",
		price: 4
	}
];
//#endregion
export { customProteins as a, drinks as c, customMixIns as i, toppings as l, bowls as n, customSauces as o, customBases as r, desserts as s, allToppings as t };
