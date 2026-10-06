import { i as __toESM } from "../_runtime.mjs";
import { i as createServerFn } from "../_libs/@tanstack/react-start+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Navigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, s as Scripts, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as ArrowLeft, S as ArrowRight, _ as CreditCard, a as Sparkles, b as Check, c as Shield, d as Phone, f as PhoneCall, g as LoaderCircle, h as MapPin, i as Store, l as RefreshCw, m as Menu, n as UtensilsCrossed, o as ShoppingCart, p as Minus, r as Trash2, s as ShoppingBag, t as X, u as Plus, v as Clock, x as BriefcaseBusiness, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { a as numberType, i as literalType, n as booleanType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion+[...].mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-BX1uNtWr.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/context/I18nContext.tsx
var import_jsx_runtime = require_jsx_runtime();
var translations = {
	fr: {
		"nav.menu": "La carte",
		"nav.create": "Composer",
		"nav.info": "Infos",
		"nav.contact": "Contact",
		"nav.order": "Commander",
		"nav.recruit": "On recrute",
		"nav.home": "Accueil",
		"hero.badge": "Fresh · préparé minute",
		"hero.location": "Poke N Bowl · Visé",
		"hero.title1": "Le Crousty Chicken.",
		"hero.title2": "Qui fait la différence.",
		"hero.desc": "Deux recettes croustillantes, généreuses et signatures. Découvre le Curry ou la Sauce Blanche.",
		"hero.order": "Découvrir le Crousty",
		"hero.menu": "Voir la carte",
		"hero.recipes": "7 recettes",
		"hero.from": "À partir de 10 €",
		"hero.city": "Visé",
		"feature.eyebrow": "Le produit phare",
		"feature.title": "Le crousty qui fait la différence.",
		"feature.desc": "Deux recettes croustillantes qui font partie des incontournables de Poke N Bowl.",
		"feature.student": "menu étudiant\nboisson incluse",
		"feature.badge": "Crousty · Best-seller",
		"feature.curry": "Curry",
		"feature.curry_desc": "Poulet croustillant, riz parfumé, oignons frits et sauce curry onctueuse.",
		"feature.white": "Sauce blanche",
		"feature.white_desc": "Poulet croustillant, riz parfumé, oignons frits et sauce blanche maison.",
		"feature.bottom": "11€ · Menu étudiant avec boisson incluse.",
		"feature.cta": "Voir les deux recettes",
		"feature.hero_hint": "Deux recettes signatures · 11€ · boisson incluse en menu étudiant.",
		"menu.eyebrow": "La carte",
		"menu.title1": "Choisis ton bowl.",
		"menu.title2": "Puis rends-le unique.",
		"menu.desc": "Toute la carte est ici. Choisis une recette, puis personnalise ton bowl.",
		"menu.order": "Commander",
		"menu.customize": "Personnaliser",
		"menu.add_to_cart": "Ajouter au panier",
		"menu.drinks": "Boissons",
		"menu.drinks_title": "Une boisson avec ça ?",
		"menu.desserts": "Desserts",
		"menu.desserts_title": "Garde une place pour le dessert.",
		"menu.desserts_cta": "Voir les desserts",
		"journey.eyebrow": "Comment ça marche",
		"journey.title1": "4 gestes.",
		"journey.title2": "Et c’est prêt.",
		"journey.s1": "Choisis un bowl",
		"journey.s1d": "7 recettes originales du restaurant.",
		"journey.s2": "Choisis ou personnalise",
		"journey.s2d": "Recettes originales ou bowl sur mesure.",
		"journey.s3": "Valide le panier",
		"journey.s3d": "Boisson ou dessert en option.",
		"journey.s4": "Livraison ou retrait",
		"journey.s4d": "Choisis le mode et le créneau qui te conviennent.",
		"journey.ready": "Prêt à commander ?",
		"journey.ready_desc": "Toute la carte en un clic — sans app intermédiaire.",
		"journey.cta": "Commander maintenant",
		"recruit.banner_tag": "Poke N Bowl recrute",
		"recruit.banner_title": "Et si ta prochaine aventure était ici ?",
		"info.eyebrow": "Infos pratiques",
		"info.title1": "Passe nous voir",
		"info.title2": "à Visé.",
		"info.address": "Adresse",
		"info.phone": "Téléphone",
		"info.hours": "Horaires",
		"info.closed": "Fermé",
		"info.maps": "Google Maps",
		"info.day.mon": "Lundi",
		"info.day.tue": "Mardi",
		"info.day.wed": "Mercredi",
		"info.day.thu": "Jeudi",
		"info.day.fri": "Vendredi",
		"info.day.sat": "Samedi",
		"info.day.sun": "Dimanche",
		"cart.title": "Ton panier",
		"cart.empty": "Ton panier est vide.",
		"cart.empty_cta": "Voir la carte",
		"cart.total": "Total",
		"cart.checkout": "Commander",
		"cart.customize": "Personnaliser",
		"toppings.title": "Choisis tes garnitures",
		"toppings.max": "2 toppings inclus",
		"toppings.confirm": "Valider",
		"product.back": "Retour à la carte",
		"product.not_found": "Produit introuvable",
		"product.unavailable": "Ce bowl est temporairement indisponible.",
		"product.out_of_stock": "Indisponible",
		"footer.recruit": "Recrutement",
		"cmd.back": "Retour à l’accueil",
		"cmd.eyebrow": "Commande",
		"cmd.title1": "Tout le menu.",
		"cmd.title2": "À toi de jouer.",
		"cmd.desc": "Choisis un bowl, puis vérifie les bases, mix-ins, protéines, sauces et toppings du menu. Les toppings sont limités à 2 choix.",
		"cmd.bowls_eyebrow": "Les bowls",
		"cmd.bowls_title": "Choisis ton bowl.",
		"cmd.bowls_hint": "Tape une recette pour la personnaliser",
		"cmd.compose": "Composer →",
		"cmd.unavailable": "Indisponible",
		"cmd.drinks": "Boissons",
		"cmd.desserts": "Desserts maison",
		"cmd.sold_out": "Épuisé",
		"cmd.customization_title": "Personnalisation du menu",
		"cmd.customization_note": "Informations reprises du menu restaurant : les mix-ins sont au choix de 5 et les toppings au choix de 2.",
		"cmd.bases": "Bases",
		"cmd.mixins": "Mix-ins · choix de 5",
		"cmd.protein": "Protéines",
		"cmd.sauces": "Sauces",
		"cmd.toppings": "Toppings · choix de 2"
	},
	en: {
		"nav.menu": "Menu",
		"nav.create": "Build",
		"nav.info": "Info",
		"nav.contact": "Contact",
		"nav.order": "Order",
		"nav.recruit": "We're hiring",
		"nav.home": "Home",
		"hero.badge": "Fresh · made to order",
		"hero.location": "Poke N Bowl · Visé",
		"hero.title1": "Crousty Chicken.",
		"hero.title2": "The one that stands out.",
		"hero.desc": "Two crispy signature recipes. Choose Curry or White Sauce and order in a few taps.",
		"hero.order": "Discover Crousty",
		"hero.menu": "View menu",
		"hero.recipes": "7 recipes",
		"hero.from": "From €10",
		"hero.city": "Visé",
		"feature.eyebrow": "The signature",
		"feature.title": "The crispy chicken that stands out.",
		"feature.desc": "Two crispy recipes that have become Poke N Bowl favourites.",
		"feature.student": "student menu\ndrink included",
		"feature.badge": "Crousty · Best-seller",
		"feature.curry": "Curry",
		"feature.curry_desc": "Crispy chicken, fragrant rice, crispy onions and creamy curry sauce.",
		"feature.white": "White sauce",
		"feature.white_desc": "Crispy chicken, fragrant rice, crispy onions and homemade white sauce.",
		"feature.bottom": "€11 · Student menu with a drink included.",
		"feature.cta": "See both recipes",
		"feature.hero_hint": "Two signature recipes · €11 · drink included in the student menu.",
		"menu.eyebrow": "The menu",
		"menu.title1": "Pick your bowl.",
		"menu.title2": "Then make it yours.",
		"menu.desc": "The full menu is here. Choose a recipe, then customize your bowl.",
		"menu.order": "Order",
		"menu.customize": "Customize",
		"menu.add_to_cart": "Add to cart",
		"menu.drinks": "Drinks",
		"menu.drinks_title": "A drink with that?",
		"menu.desserts": "Desserts",
		"menu.desserts_title": "Save room for dessert.",
		"menu.desserts_cta": "See desserts",
		"journey.eyebrow": "How it works",
		"journey.title1": "4 simple steps.",
		"journey.title2": "Then it’s ready.",
		"journey.s1": "Pick a bowl",
		"journey.s1d": "7 original restaurant recipes.",
		"journey.s2": "Choose or customize",
		"journey.s2d": "Original recipes or a custom bowl.",
		"journey.s3": "Check your cart",
		"journey.s3d": "Drinks or desserts optional.",
		"journey.s4": "Delivery or pickup",
		"journey.s4d": "Choose the option and time that suits you.",
		"journey.ready": "Ready to order?",
		"journey.ready_desc": "Full menu in one tap — no third-party app.",
		"journey.cta": "Order now",
		"recruit.banner_tag": "Poke N Bowl is hiring",
		"recruit.banner_title": "What if your next adventure starts here?",
		"info.eyebrow": "Practical info",
		"info.title1": "Come see us",
		"info.title2": "in Visé.",
		"info.address": "Address",
		"info.phone": "Phone",
		"info.hours": "Opening hours",
		"info.closed": "Closed",
		"info.maps": "Google Maps",
		"info.day.mon": "Monday",
		"info.day.tue": "Tuesday",
		"info.day.wed": "Wednesday",
		"info.day.thu": "Thursday",
		"info.day.fri": "Friday",
		"info.day.sat": "Saturday",
		"info.day.sun": "Sunday",
		"cart.title": "Your cart",
		"cart.empty": "Your cart is empty.",
		"cart.empty_cta": "View menu",
		"cart.total": "Total",
		"cart.checkout": "Order",
		"cart.customize": "Customize",
		"toppings.title": "Choose your toppings",
		"toppings.max": "2 toppings included",
		"toppings.confirm": "Confirm",
		"product.back": "Back to menu",
		"product.not_found": "Product not found",
		"product.unavailable": "This bowl is temporarily unavailable.",
		"product.out_of_stock": "Unavailable",
		"footer.recruit": "Careers",
		"cmd.back": "Back to home",
		"cmd.eyebrow": "Order",
		"cmd.title1": "Full menu.",
		"cmd.title2": "Your turn.",
		"cmd.desc": "Pick a bowl, then check the 5 mix-ins and 2 toppings available on the menu. Add a drink or dessert if you like.",
		"cmd.bowls_eyebrow": "Bowls",
		"cmd.bowls_title": "Pick your bowl.",
		"cmd.bowls_hint": "Tap a recipe to customize it",
		"cmd.compose": "Build →",
		"cmd.unavailable": "Unavailable",
		"cmd.drinks": "Drinks",
		"cmd.desserts": "House desserts",
		"cmd.sold_out": "Sold out",
		"cmd.customization_title": "Menu customization",
		"cmd.customization_note": "Menu information: choose 5 mix-ins and 2 toppings.",
		"cmd.bases": "Bases",
		"cmd.mixins": "Mix-ins · choose 5",
		"cmd.protein": "Proteins",
		"cmd.sauces": "Sauces",
		"cmd.toppings": "Toppings · choose 2"
	},
	nl: {
		"nav.menu": "Menu",
		"nav.create": "Samenstellen",
		"nav.info": "Info",
		"nav.contact": "Contact",
		"nav.order": "Bestellen",
		"nav.recruit": "We zoeken collega's",
		"nav.home": "Home",
		"hero.badge": "Vers · ter plaatse bereid",
		"hero.location": "Poke N Bowl · Visé",
		"hero.title1": "Crousty Chicken.",
		"hero.title2": "Die het verschil maakt.",
		"hero.desc": "Twee krokante signatuurgerechten. Kies Curry of Witte Saus en bestel eenvoudig.",
		"hero.order": "Ontdek Crousty",
		"hero.menu": "Bekijk het menu",
		"hero.recipes": "7 recepten",
		"hero.from": "Vanaf €10",
		"hero.city": "Visé",
		"feature.eyebrow": "Onze topper",
		"feature.title": "De crousty die het verschil maakt.",
		"feature.desc": "Twee krokante recepten die tot de favorieten van Poke N Bowl behoren.",
		"feature.student": "studentenmenu\ndrank inbegrepen",
		"feature.badge": "Crousty · Bestseller",
		"feature.curry": "Curry",
		"feature.curry_desc": "Krokante kip, geurige rijst, krokante uitjes en romige currysaus.",
		"feature.white": "Witte saus",
		"feature.white_desc": "Krokante kip, geurige rijst, krokante uitjes en huisgemaakte witte saus.",
		"feature.bottom": "€11 · Studentenmenu met drankje inbegrepen.",
		"feature.cta": "Bekijk beide recepten",
		"feature.hero_hint": "Twee signatuurgerechten · €11 · drankje inbegrepen in het studentenmenu.",
		"menu.eyebrow": "Het menu",
		"menu.title1": "Kies je bowl.",
		"menu.title2": "Maak hem uniek.",
		"menu.desc": "Het volledige menu staat hier. Kies een recept en personaliseer je bowl.",
		"menu.order": "Bestellen",
		"menu.customize": "Personaliseren",
		"menu.add_to_cart": "In winkelmandje",
		"menu.drinks": "Dranken",
		"menu.drinks_title": "Een drankje erbij?",
		"menu.desserts": "Desserts",
		"menu.desserts_title": "Houd plaats voor dessert.",
		"menu.desserts_cta": "Bekijk desserts",
		"journey.eyebrow": "Zo werkt het",
		"journey.title1": "4 stappen.",
		"journey.title2": "En klaar.",
		"journey.s1": "Kies een bowl",
		"journey.s1d": "7 originele recepten van het restaurant.",
		"journey.s2": "Kies of stel samen",
		"journey.s2d": "Originele recepten of een bowl op maat.",
		"journey.s3": "Check je mandje",
		"journey.s3d": "Drank of dessert optioneel.",
		"journey.s4": "Levering of afhalen",
		"journey.s4d": "Kies de optie en het uur dat jou past.",
		"journey.ready": "Klaar om te bestellen?",
		"journey.ready_desc": "Volledig menu in één klik — zonder tussenapp.",
		"journey.cta": "Nu bestellen",
		"recruit.banner_tag": "Poke N Bowl zoekt collega's",
		"recruit.banner_title": "Misschien begint jouw volgende avontuur hier?",
		"info.eyebrow": "Praktische info",
		"info.title1": "Kom langs",
		"info.title2": "in Visé.",
		"info.address": "Adres",
		"info.phone": "Telefoon",
		"info.hours": "Openingsuren",
		"info.closed": "Gesloten",
		"info.maps": "Google Maps",
		"info.day.mon": "Maandag",
		"info.day.tue": "Dinsdag",
		"info.day.wed": "Woensdag",
		"info.day.thu": "Donderdag",
		"info.day.fri": "Vrijdag",
		"info.day.sat": "Zaterdag",
		"info.day.sun": "Zondag",
		"cart.title": "Jouw mandje",
		"cart.empty": "Je mandje is leeg.",
		"cart.empty_cta": "Bekijk het menu",
		"cart.total": "Totaal",
		"cart.checkout": "Bestellen",
		"cart.customize": "Aanpassen",
		"toppings.title": "Kies je toppings",
		"toppings.max": "2 toppings inbegrepen",
		"toppings.confirm": "Bevestigen",
		"product.back": "Terug naar het menu",
		"product.not_found": "Product niet gevonden",
		"product.unavailable": "Deze bowl is tijdelijk niet beschikbaar.",
		"product.out_of_stock": "Niet beschikbaar",
		"footer.recruit": "Jobs",
		"cmd.back": "Terug naar home",
		"cmd.eyebrow": "Bestelling",
		"cmd.title1": "Volledig menu.",
		"cmd.title2": "Aan jou.",
		"cmd.desc": "Kies een bowl, bekijk de 5 mix-ins en 2 toppings van het menu en voeg eventueel een drank of dessert toe.",
		"cmd.bowls_eyebrow": "Bowls",
		"cmd.bowls_title": "Kies je bowl.",
		"cmd.bowls_hint": "Tik op een recept om te personaliseren",
		"cmd.compose": "Samenstellen →",
		"cmd.unavailable": "Niet beschikbaar",
		"cmd.drinks": "Dranken",
		"cmd.desserts": "Huisdesserts",
		"cmd.sold_out": "Uitverkocht",
		"cmd.customization_title": "Menu personalisatie",
		"cmd.customization_note": "Menu-informatie: kies 5 mix-ins en 2 toppings.",
		"cmd.bases": "Bases",
		"cmd.mixins": "Mix-ins · kies 5",
		"cmd.protein": "Proteïnen",
		"cmd.sauces": "Sauzen",
		"cmd.toppings": "Toppings · kies 2"
	}
};
var I18nContext = (0, import_react.createContext)(void 0);
function I18nProvider({ children }) {
	const [language, setLanguage] = (0, import_react.useState)("fr");
	const t = (key) => {
		return translations[language][key] || translations.fr[key] || key;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value: {
			language,
			setLanguage,
			t
		},
		children
	});
}
function useTranslation() {
	const context = (0, import_react.useContext)(I18nContext);
	if (!context) throw new Error("useTranslation must be used within an I18nProvider");
	return context;
}
//#endregion
//#region src/context/CartContext.tsx
var CartContext = (0, import_react.createContext)(void 0);
function itemKey(item) {
	return `${item.id}::${[...item.toppings].sort().join(",")}::${[...item.removedIngredients].sort().join(",")}`;
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [isCartOpen, setIsCartOpen] = (0, import_react.useState)(false);
	const addItem = (newItem) => {
		setItems((prev) => {
			const key = itemKey(newItem);
			if (prev.find((item) => itemKey(item) === key)) return prev.map((item) => itemKey(item) === key ? {
				...item,
				quantity: item.quantity + newItem.quantity
			} : item);
			return [...prev, newItem];
		});
		setIsCartOpen(true);
	};
	const removeItem = (id, toppings, removedIngredients) => {
		const key = itemKey({
			id,
			toppings,
			removedIngredients
		});
		setItems((prev) => prev.filter((item) => itemKey(item) !== key));
	};
	const updateQuantity = (id, toppings, removedIngredients, quantity) => {
		if (quantity <= 0) {
			removeItem(id, toppings, removedIngredients);
			return;
		}
		const key = itemKey({
			id,
			toppings,
			removedIngredients
		});
		setItems((prev) => prev.map((item) => itemKey(item) === key ? {
			...item,
			quantity
		} : item));
	};
	const clearCart = () => setItems([]);
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			items,
			addItem,
			removeItem,
			updateQuantity,
			clearCart,
			total,
			isCartOpen,
			setIsCartOpen
		},
		children
	});
}
function useCart() {
	const context = (0, import_react.useContext)(CartContext);
	if (!context) throw new Error("useCart must be used within a CartProvider");
	return context;
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page introuvable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La page que tu recherches n’existe pas ou a été déplacée."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Un problème est survenu. Tu peux réessayer ou revenir à l’accueil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Poke N Bowl Visé"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		window.history.scrollRestoration = "manual";
		const resetScroll = () => {
			window.scrollTo(0, 0);
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		};
		resetScroll();
		const frame = window.requestAnimationFrame(resetScroll);
		const frame2 = window.requestAnimationFrame(() => window.requestAnimationFrame(resetScroll));
		return () => {
			window.cancelAnimationFrame(frame);
			window.cancelAnimationFrame(frame2);
		};
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
//#endregion
//#region src/components/BrandLogo.tsx
function BrandLogo({ className = "", compact = false, size = "md" }) {
	const sizeClasses = {
		sm: "px-3 py-1.5 gap-2",
		md: "px-4 py-2 sm:px-5 sm:py-2.5 gap-2.5",
		lg: "px-5 py-3 sm:px-6 sm:py-3.5 gap-3"
	}[size];
	const textClasses = {
		sm: "text-sm sm:text-base",
		md: "text-base sm:text-xl",
		lg: "text-xl sm:text-2xl"
	}[size];
	const circleClasses = {
		sm: "h-6 w-6 text-xs border-[2px]",
		md: "h-7 w-7 sm:h-8 sm:w-8 text-xs sm:text-sm border-[2.5px]",
		lg: "h-8 w-8 sm:h-9 sm:w-9 text-sm sm:text-base border-[2.5px]"
	}[size];
	const subtextClasses = {
		sm: "text-[7px]",
		md: "text-[8px] sm:text-[9px]",
		lg: "text-[9px] sm:text-[10px]"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center rounded-2xl bg-[#10251f] shadow-md border border-white/15 transition duration-200 select-none ${sizeClasses} ${className}`,
		style: { boxShadow: "0 4px 20px -2px rgba(16, 37, 31, 0.45)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `font-black tracking-[0.18em] text-white uppercase ${textClasses}`,
				style: { letterSpacing: "0.18em" },
				children: "POKE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `flex shrink-0 items-center justify-center rounded-full border-white font-black text-white ${circleClasses}`,
				children: "N"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start leading-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-black tracking-[0.18em] text-white uppercase ${textClasses}`,
					style: { letterSpacing: "0.18em" },
					children: "BOWL"
				}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-0.5 font-black uppercase tracking-[0.24em] text-[#d7ff45] ${subtextClasses}`,
					style: { letterSpacing: "0.24em" },
					children: "SUR MESURE"
				})]
			})
		]
	});
}
//#endregion
//#region src/assets/hero-poke.jpg
var hero_poke_default = "/assets/hero-poke-Dk38LgOY.jpg";
//#endregion
//#region src/assets/dessert.jpg
var dessert_default = "/assets/dessert-9PIP1ns9.jpg";
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/sheet.tsx
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
//#endregion
//#region src/components/ui/scroll-area.tsx
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
	]
}));
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
	ref,
	orientation,
	className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
}));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
//#endregion
//#region src/assets/bowl-gyros.jpg
var bowl_gyros_default = "/assets/bowl-gyros-BAHAeM5H.jpg";
//#endregion
//#region src/assets/bowl-sweet-chicken.jpg
var bowl_sweet_chicken_default = "/assets/bowl-sweet-chicken-B0IKJ6Vs.jpg";
//#endregion
//#region src/assets/bowl-scampis.jpg
var bowl_scampis_default = "/assets/bowl-scampis-WuS-dpfJ.jpg";
//#endregion
//#region src/assets/bowl-saumon.jpg
var bowl_saumon_default = "/assets/bowl-saumon-DZ8yRlhg.jpg";
//#endregion
//#region src/assets/bowl-spicy-chicken.jpg
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-D83Dkldw.jpg";
//#endregion
//#region src/components/DishImage.tsx
var images = {
	"mighty-gyros": bowl_gyros_default,
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
	"crousty-chicken-curry": "/assets/bowl-crousty-curry-L8U52Xrn.jpg",
	"crousty-chicken-sauce-blanche": "/assets/bowl-crousty-blanche-Bi5W1sXl.jpg",
	"sur-mesure": bowl_spicy_chicken_default
};
function DishImage({ dishId, alt, className = "", priority = false }) {
	const src = images[dishId];
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`,
		children: "Photo produit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className: `h-full w-full object-cover ${className}`,
		loading: priority ? "eager" : "lazy",
		decoding: "async",
		fetchPriority: priority ? "high" : "auto"
	});
}
//#endregion
//#region src/lib/data.ts
var customBases = [
	"Riz blanc",
	"Riz brun",
	"Pâtes",
	"Nachos",
	"Salade"
];
var detailedBases = [
	{
		id: "riz-blanc",
		name: "Riz blanc",
		emoji: "🍚"
	},
	{
		id: "riz-brun",
		name: "Riz brun",
		emoji: "🌾"
	},
	{
		id: "pates",
		name: "Pâtes",
		emoji: "🍝"
	},
	{
		id: "nachos",
		name: "Nachos",
		emoji: "🫓"
	},
	{
		id: "salade",
		name: "Salade",
		emoji: "🥗"
	}
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
var detailedMixIns = [
	{
		id: "guacamole",
		name: "Guacamole",
		emoji: "🥑"
	},
	{
		id: "brocolis",
		name: "Brocolis",
		emoji: "🥦"
	},
	{
		id: "patates-douces",
		name: "Patates douces",
		emoji: "🍠"
	},
	{
		id: "avocat",
		name: "Avocat",
		emoji: "🥑"
	},
	{
		id: "carottes",
		name: "Carottes",
		emoji: "🥕"
	},
	{
		id: "feta",
		name: "Feta",
		emoji: "🧀"
	},
	{
		id: "salade-algues",
		name: "Salade d'algues",
		emoji: "🌿"
	},
	{
		id: "mangue",
		name: "Mangue",
		emoji: "🥭"
	},
	{
		id: "oignons",
		name: "Oignons",
		emoji: "🧅"
	},
	{
		id: "mais",
		name: "Maïs",
		emoji: "🌽"
	},
	{
		id: "tomates",
		name: "Tomates",
		emoji: "🍅"
	},
	{
		id: "poivrons",
		name: "Poivrons",
		emoji: "🫑"
	},
	{
		id: "edamame",
		name: "Edamame",
		emoji: "🫘"
	},
	{
		id: "jalapenos",
		name: "Jalapeños",
		emoji: "🌶️"
	},
	{
		id: "concombres",
		name: "Concombres",
		emoji: "🥒"
	},
	{
		id: "houmous",
		name: "Houmous",
		emoji: "🧆"
	}
];
var customProteins = [
	"Poulet",
	"Gyros",
	"Saumon + 1 €",
	"Scampis"
];
var detailedProteins = [
	{
		id: "poulet",
		name: "Poulet",
		emoji: "🍗",
		extraPrice: 0
	},
	{
		id: "gyros",
		name: "Gyros",
		emoji: "🥙",
		extraPrice: 0
	},
	{
		id: "saumon",
		name: "Saumon (+1 €)",
		emoji: "🐟",
		extraPrice: 1
	},
	{
		id: "scampis",
		name: "Scampis",
		emoji: "🦐",
		extraPrice: 0
	}
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
var detailedSauces = [
	{
		id: "mayo",
		name: "Mayo",
		emoji: "🍶"
	},
	{
		id: "mayo-wasabi",
		name: "Mayo-Wasabi",
		emoji: "🟢"
	},
	{
		id: "spicy-mayo",
		name: "Spicy-Mayo",
		emoji: "🌶️"
	},
	{
		id: "sesame",
		name: "Sésame (salée ou sucrée)",
		emoji: "🌰"
	},
	{
		id: "chili-doux",
		name: "Chili doux",
		emoji: "🌶️"
	},
	{
		id: "teriyaki",
		name: "Teriyaki",
		emoji: "🍯"
	},
	{
		id: "soja",
		name: "Soja (salé ou sucré)",
		emoji: "🥢"
	},
	{
		id: "mayo-truffe",
		name: "Mayo truffe",
		emoji: "🍄"
	}
];
var toppings = [
	{
		id: "oignons-frits",
		name: "Oignons frits",
		emoji: "🧅",
		price: .5,
		available: true,
		category: "crunch"
	},
	{
		id: "sesame-seeds",
		name: "Sésame seeds",
		emoji: "🌱",
		price: .5,
		available: true,
		category: "crunch"
	},
	{
		id: "noix-cajou",
		name: "Noix de cajou",
		emoji: "🥜",
		price: .5,
		available: true,
		category: "crunch"
	},
	{
		id: "nachos",
		name: "Nachos",
		emoji: "🌽",
		price: .5,
		available: true,
		category: "crunch"
	},
	{
		id: "flocons-chili",
		name: "Flocons-Chili",
		emoji: "🌶️",
		price: .5,
		available: true,
		category: "spice"
	},
	{
		id: "wazabi",
		name: "Wazabi",
		emoji: "🟢",
		price: .5,
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
//#region src/components/CartDrawer.tsx
function CartDrawer() {
	const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, total } = useCart();
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isCartOpen,
		onOpenChange: setIsCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col bg-[#f7f4ec] p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "border-b border-black/5 px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "flex items-center gap-2 text-base font-black text-[#17231f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-[#ff705f]" }), t("cart.title")]
				})
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-card text-4xl",
						children: "🥣"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-black text-[#17231f]",
						children: "Ton panier est vide"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-[#7a847e]",
						children: t("cart.empty")
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setIsCartOpen(false),
						className: "btn-primary mt-2",
						type: "button",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							children: t("cart.empty_cta")
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col divide-y divide-black/5 px-6",
					children: items.map((item) => {
						const isBowl = bowls.some((b) => b.id === item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 py-4",
							children: [isBowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: item.id,
									alt: item.name,
									className: "h-full w-full object-cover"
								})
							}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								className: "h-16 w-16 shrink-0 rounded-2xl object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 shrink-0 rounded-2xl bg-[#ece8dc]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-between min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "truncate text-sm font-black text-[#17231f]",
										children: item.name
									}),
									item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 truncate text-[11px] text-[#7a847e]",
										children: ["+ ", item.toppings.join(", ")]
									}),
									item.removedIngredients && item.removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 truncate text-[11px] text-[#ff705f] line-through decoration-[#ff705f]/50",
										children: ["✕ ", item.removedIngredients.join(", ")]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-black text-[#17231f]",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Diminuer",
												onClick: () => updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity - 1),
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f]",
												children: item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-5 text-center text-sm font-black",
												children: item.quantity
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Augmenter",
												onClick: () => updateQuantity(item.id, item.toppings, item.removedIngredients ?? [], item.quantity + 1),
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
											})
										]
									})]
								})]
							})]
						}, `${item.id}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`);
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-black/5 bg-white px-6 pb-safe pt-4 shadow-[0_-12px_30px_-15px_rgba(0,0,0,.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold text-[#7a847e]",
							children: t("cart.total")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-black text-[#17231f]",
							children: ["€ ", total.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						onClick: () => setIsCartOpen(false),
						className: "btn-primary block w-full text-center no-underline",
						children: t("cart.checkout")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[10px] font-semibold text-[#a09a92]",
						children: "Commande à emporter · Poke N Bowl Visé"
					})
				]
			})] })]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Poke N Bowl Visé — Poké bowls frais à emporter" }, {
		name: "description",
		content: "Poke N Bowl à Visé : poké bowls frais, crousty chicken et desserts maison. Compose ton bowl et commande directement."
	}] }),
	component: Index
});
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
var PHONE = "+32491281456";
var HOUR_ROWS = [
	["info.day.mon", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.tue", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.wed", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.thu", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.fri", "12:00 – 14:00 · 17:00 – 21:00"],
	["info.day.sat", "18:00 – 21:00"],
	["info.day.sun", "closed"]
];
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 22
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function RevealScale({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .93
		},
		whileInView: {
			opacity: 1,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .12
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Ticker() {
	const items = Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mx-5 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.14em] sm:text-[11px]",
		children: [
			"Poke N Bowl",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fresh food",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Visé, Belgique",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#d7ff45] py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 32,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex w-max whitespace-nowrap",
			children: [items, items]
		})
	});
}
function Index() {
	const { t, language, setLanguage } = useTranslation();
	const { items, setIsCartOpen } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => b.id.startsWith("crousty-")), ...bowls.filter((b) => !b.id.startsWith("crousty-"))];
	const closeMobile = () => setMobileOpen(false);
	const heroRef = import_react.useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
	const heroOpacity = useTransform(scrollYProgress, [0, .7], [1, 0]);
	import_react.useEffect(() => {
		const prev = window.history.scrollRestoration;
		window.history.scrollRestoration = "manual";
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
		const frame = window.requestAnimationFrame(() => window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		}));
		return () => {
			window.cancelAnimationFrame(frame);
			window.history.scrollRestoration = prev;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "absolute inset-x-0 top-0 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1320px] items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: () => window.scrollTo({
								top: 0,
								behavior: "auto"
							}),
							className: "flex min-w-0 shrink-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
							"aria-label": "Poke N Bowl — Accueil",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-6 text-[10px] font-black uppercase tracking-[0.14em] text-white md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#composer",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.create")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#infos",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.info")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "transition hover:text-[#d7ff45]",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block",
									children: t("nav.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur md:flex",
									children: [
										"fr",
										"en",
										"nl"
									].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLanguage(lang),
										className: `rounded-full px-2 py-1 text-[9px] font-bold uppercase transition ${language === lang ? "bg-white text-black" : "text-white/55 hover:text-white"}`,
										children: lang
									}, lang))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsCartOpen(true),
									"aria-label": "Panier",
									className: "relative rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
										children: cartCount
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Menu",
									onClick: () => setMobileOpen((o) => !o),
									className: "rounded-full border border-white/20 bg-black/25 p-2.5 text-white backdrop-blur transition hover:bg-black/40 md:hidden",
									children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
								})
							]
						})
					]
				}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: -8,
						scale: .97
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: { duration: .22 },
					className: "mx-3 mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#10251f]/96 p-3 shadow-2xl backdrop-blur-xl md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1",
						children: [
							[
								{
									href: "#carte",
									label: t("nav.menu")
								},
								{
									href: "#composer",
									label: t("nav.create")
								},
								{
									href: "#infos",
									label: t("nav.info")
								}
							].map(({ href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								onClick: closeMobile,
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10",
								children: label
							}, href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/contact",
								className: "rounded-2xl px-4 py-3 text-sm font-black text-white transition hover:bg-white/10",
								children: t("nav.contact")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								onClick: closeMobile,
								to: "/recrutement",
								className: "mt-1 rounded-2xl bg-[#ff705f] px-4 py-3 text-center text-sm font-black text-white",
								children: t("nav.recruit")
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: heroRef,
					className: "relative isolate min-h-[680px] overflow-hidden bg-[#071713] text-white lg:min-h-[760px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: heroY },
							className: "absolute inset-0 -z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_poke_default,
								alt: "",
								"aria-hidden": "true",
								fetchPriority: "high",
								className: "h-full w-full object-cover object-center opacity-28"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,rgba(215,255,69,.10),transparent_35%),linear-gradient(110deg,#071713_0%,rgba(7,23,19,.97)_45%,rgba(7,23,19,.75)_100%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto grid min-h-[680px] max-w-[1320px] items-center gap-8 px-5 pb-10 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 lg:px-8 lg:min-h-[760px] lg:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								style: { opacity: heroOpacity },
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 16
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .7,
											delay: .15
										},
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#d7ff45]" }), "Crousty Chicken · best-seller"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										initial: {
											opacity: 0,
											y: 18
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .7,
											delay: .22
										},
										className: "mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/40",
										children: t("hero.location")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
										initial: {
											opacity: 0,
											y: 22
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .75,
											delay: .28
										},
										className: "mt-3 font-sans text-[2.4rem] font-black leading-[.96] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block",
											children: t("hero.title1")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block text-[#d7ff45]",
											children: t("hero.title2")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										initial: { opacity: 0 },
										animate: { opacity: 1 },
										transition: {
											duration: .7,
											delay: .4
										},
										className: "mt-5 max-w-md text-[15px] leading-7 text-white/65",
										children: t("hero.desc")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											y: 14
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											duration: .7,
											delay: .5
										},
										className: "mt-7 flex flex-col gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/commander",
											className: "btn-primary inline-flex h-12 items-center justify-center",
											children: [
												t("hero.order"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#carte",
											className: "inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 text-sm font-bold backdrop-blur-sm transition hover:bg-white/12",
											children: t("hero.menu")
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 rounded-[60px] bg-[#d7ff45]/4 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative grid gap-3 sm:grid-cols-[1.12fr_.88fr] sm:items-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: "crousty-chicken-curry" },
											className: "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#f7f4ec] shadow-[0_35px_90px_-32px_rgba(0,0,0,.95)] transition duration-500 hover:-translate-y-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-[.88] overflow-hidden sm:aspect-[.8]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
														dishId: "crousty-chicken-curry",
														alt: t("feature.curry"),
														priority: true,
														className: "h-full w-full scale-[1.02] transition duration-700 group-hover:scale-[1.08]"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04)_25%,rgba(0,0,0,.82)_100%)]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute left-4 top-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-[#10251f]",
														children: "11€ · menu étudiant"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute bottom-5 left-5 right-5 text-white",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[9px] font-black uppercase tracking-[0.16em] text-white/60",
																children: "Signature · Crousty Chicken"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
																className: "mt-1 text-2xl font-black leading-none tracking-tight sm:text-3xl",
																children: t("feature.curry")
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-2 max-w-xs text-xs leading-5 text-white/70",
																children: t("feature.curry_desc")
															})
														]
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/product/$productId",
												params: { productId: "crousty-chicken-sauce-blanche" },
												className: "group overflow-hidden rounded-[24px] border border-white/10 bg-[#f7f4ec] shadow-[0_25px_65px_-28px_rgba(0,0,0,.9)] transition duration-500 hover:-translate-y-1",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative aspect-[1.15] overflow-hidden",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
															dishId: "crousty-chicken-sauce-blanche",
															alt: t("feature.white"),
															className: "h-full w-full transition duration-700 group-hover:scale-[1.07]"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,.75)_100%)]" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "absolute bottom-4 left-4 right-4 text-white",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[8px] font-black uppercase tracking-[0.14em] text-white/55",
																children: "Signature"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "mt-1 text-lg font-black leading-none",
																children: t("feature.white")
															})]
														})
													]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-[22px] border border-[#d7ff45]/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[8px] font-black uppercase tracking-[0.18em] text-[#d7ff45]",
														children: "Crousty Mix"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm font-black text-white",
														children: "Curry + Sauce blanche"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-[11px] leading-5 text-white/40",
													children: t("feature.hero_hint")
												})]
											})]
										})]
									})]
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[#ead9bb] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1180px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#8f5b12]",
										children: "Poke N Bowl · Signature"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl",
										children: "Le croustillant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-[1.9rem] font-black uppercase leading-none tracking-tight text-[#a96b0d] sm:text-4xl lg:text-5xl",
										children: "qui fait la différence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-black uppercase tracking-[0.08em] sm:text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦ Fait maison" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#a96b0d]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔥 Ultra croustillant" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#a96b0d]",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡ Healthy" })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 grid gap-6 md:grid-cols-2",
								children: [{
									id: "crousty-chicken-sauce-blanche",
									name: "Crousty Chicken · Sauce blanche",
									label: "Riz jasmin",
									desc: "Riz jasmin parfumé, poulet croustillant, sauce blanche maison et oignons frits."
								}, {
									id: "crousty-chicken-curry",
									name: "Crousty Chicken · Curry",
									label: "Riz curry",
									desc: "Riz au curry onctueux, poulet croustillant, sauce curry maison et oignons frits."
								}].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
									delay: index * .07,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/product/$productId",
										params: { productId: item.id },
										className: "group block overflow-hidden rounded-[30px] border border-[#8d5a18]/15 bg-[#f8f0df] shadow-[0_22px_60px_-35px_rgba(55,30,10,.5)] transition duration-350 hover:-translate-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[1.22] overflow-hidden bg-[#e7d4b4]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: item.id,
												alt: item.name,
												className: "h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.07]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-x-0 top-0 flex items-center justify-between p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#8b5510] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white",
													children: item.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-white px-3 py-1.5 text-xs font-black",
													children: "11€"
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5 text-center sm:p-7",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] font-black uppercase tracking-[0.16em] text-[#a96b0d]",
													children: "Crousty Chicken"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl",
													children: item.name.split(" · ")[1]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mx-auto mt-3 max-w-md text-sm leading-6 text-[#6e6255]",
													children: item.desc
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[#241a12] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#a96b0d]",
													children: ["Découvrir la recette ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})
											]
										})]
									})
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: .1,
								className: "mt-7 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-3 rounded-full bg-[#a96b0d] px-6 py-3 text-white shadow-lg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-black uppercase tracking-[0.14em]",
											children: "Menu étudiant"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl font-black",
											children: "11€"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black uppercase tracking-[0.1em]",
											children: "· boisson incluse"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs font-bold text-[#6e6255]",
									children: "Sauce extra +1€ · Viens goûter la différence."
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 mx-auto max-w-[1320px] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
							children: t("menu.eyebrow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 max-w-2xl text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: t("menu.title1")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[#7d8b83]",
								children: t("menu.title2")
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-6 text-[#68756f]",
								children: t("menu.desc")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/commander",
								className: "mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#ff705f] transition hover:gap-3",
								children: [
									t("menu.order"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})]
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: displayedBowls.map((bowl, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
							delay: index * .04,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: ["group block h-full overflow-hidden rounded-[26px] bg-white shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-lift", bowl.id.startsWith("crousty-") ? "ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec]" : ""].join(" "),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden bg-[#ece8dc]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: bowl.id,
											alt: bowl.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_30%,rgba(0,0,0,.52)_100%)]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-tag absolute left-3 top-3 bg-white/95 text-[#17231f] shadow-card",
											children: bowl.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-xs font-black text-[#10251f]",
											children: ["€ ", bowl.price.toFixed(2)]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col p-5 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "min-w-0 flex-1 break-words text-[16px] font-black leading-tight sm:text-xl",
												children: bowl.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f4ee] transition-colors duration-300 group-hover:bg-[#ff705f] group-hover:text-white",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-2 text-[13px] leading-5 text-[#68756f]",
											children: bowl.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto pt-4 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff705f]",
											children: [
												t("menu.customize"),
												" · ",
												t("menu.order"),
												" →"
											]
										})
									]
								})]
							})
						}, bowl.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "composer",
					className: "scroll-mt-10 bg-[#10251f] px-5 py-12 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#d7ff45]",
								children: t("journey.eyebrow")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 max-w-3xl text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("journey.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-white/35",
									children: t("journey.title2")
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-2 sm:mt-9 sm:grid-cols-2 lg:grid-cols-5",
								children: [
									{
										num: "01",
										title: "1. Ta Base",
										desc: "Riz blanc, riz brun, pâtes, nachos ou salade fraîche."
									},
									{
										num: "02",
										title: "2. Mix-in",
										desc: "5 ingrédients frais parmi 16 (avocat, mangue, feta, maïs...)."
									},
									{
										num: "03",
										title: "3. Protéine",
										desc: "Poulet mariné, gyros maison, saumon (+1€) ou scampis."
									},
									{
										num: "04",
										title: "4. Sauce",
										desc: "Spicy-mayo, teriyaki, mayo truffe, sésame, chili doux..."
									},
									{
										num: "05",
										title: "5. Toppings",
										desc: "Oignons frits, sésame seeds, noix de cajou, flocons chili..."
									}
								].map(({ num, title, desc }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										whileHover: { y: -4 },
										transition: { duration: .25 },
										className: "h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl font-black text-[#d7ff45]",
												children: num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-base font-black",
												children: title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs leading-relaxed text-white/55",
												children: desc
											})
										]
									})
								}, num))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-[0.15em] text-[#d7ff45]",
									children: "Formule Poke (n) Bowl sur mesure · 10.00 €"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-white/60",
									children: "Compose ton bol personnalisé en ligne ou découvre nos 7 recettes signatures."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/sur-mesure",
										className: "btn-primary inline-flex items-center justify-center gap-2",
										children: ["Composer mon bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commander",
										className: "rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-white/10",
										children: "Voir la carte"
									})]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-white shadow-card sm:p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-black/5 px-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
									children: t("menu.drinks")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-black sm:text-3xl",
									children: t("menu.drinks_title")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 p-5 sm:grid-cols-2 sm:p-6",
								children: drinks.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "flex items-center justify-between gap-2 rounded-xl bg-[#f5f4ee] px-4 py-3 text-sm transition hover:bg-[#d7ff45] hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 break-words font-bold",
										children: drink.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 text-xs font-black",
										children: ["€ ", drink.price.toFixed(2)]
									})]
								}, drink.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-[#ff705f] text-white shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-white/15 px-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.18em] text-white/60",
									children: t("menu.desserts")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-black sm:text-3xl",
									children: t("menu.desserts_title")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dessert_default,
									alt: "Tiramisu maison",
									loading: "lazy",
									className: "h-20 w-20 shrink-0 rounded-2xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/75",
										children: desserts.map((d) => d.name).join(" · ")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/commander",
										className: "mt-2 inline-block text-xs font-black uppercase tracking-[0.12em] underline underline-offset-4",
										children: [t("menu.desserts_cta"), " →"]
									})]
								})]
							})]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[30px] sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#536018]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl font-black leading-snug sm:text-3xl",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "scroll-mt-10 bg-[#ece9df] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-[1200px] gap-4 sm:gap-5 lg:grid-cols-[1fr_.85fr] lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
								children: t("info.eyebrow")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-[1.7rem] font-black leading-snug tracking-tight sm:text-3xl lg:text-4xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: t("info.title1")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[#7d8b83]",
									children: t("info.title2")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-2.5 sm:mt-8 sm:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "flex min-w-0 items-center gap-4 rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7ff45]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]",
											children: t("info.address")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block break-words text-sm font-bold",
											children: "Av. du Pont 12, 4600 Visé, Belgique"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE}`,
									className: "flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[9px] font-black uppercase tracking-[0.15em] text-[#7d8b83]",
										children: t("info.phone")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm font-bold",
										children: "+32 491 28 14 56"
									})] })]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-[24px] bg-[#10251f] text-white shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-white/10 px-5 py-4 sm:px-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-black",
											children: t("info.hours")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-white/10 px-5 sm:px-7",
										children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-3 py-3 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 font-bold text-white/60",
												children: t(dayKey)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `shrink-0 text-right font-black ${value === "closed" ? "text-[#ff705f]" : ""}`,
												children: value === "closed" ? t("info.closed") : value
											})]
										}, dayKey))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-5 py-4 sm:px-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#d7ff45] transition hover:gap-3",
											children: [
												t("info.maps"),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
											]
										})
									})
								]
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#0b1a16] px-5 py-8 pb-24 text-white sm:px-6 sm:pb-8 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 text-[9px] font-black uppercase tracking-[0.12em] text-white/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-white",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									className: "transition hover:text-white",
									children: t("nav.order")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "transition hover:text-white",
									children: t("footer.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "transition hover:text-white",
									children: t("nav.contact")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[9px] font-bold uppercase tracking-[0.12em] text-white/22",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/commander",
				className: "btn-primary fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 md:hidden",
				children: [
					t("hero.order"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				]
			})
		]
	});
}
//#endregion
//#region src/lib/orders.ts
function generateOrderId() {
	return `PNB-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
//#endregion
//#region src/lib/mollie.server.ts
/**
* Server-only Mollie helpers.
* Requires env: MOLLIE_API_KEY (test_… or live_…)
*/
var MOLLIE_API = "https://api.mollie.com/v2";
function getApiKey() {
	const key = process.env.MOLLIE_API_KEY;
	if (!key) throw new Error("MOLLIE_API_KEY manquante. Ajoute-la dans les variables d'environnement Vercel.");
	return key;
}
async function createMolliePayment(params) {
	const res = await fetch(`${MOLLIE_API}/payments`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${getApiKey()}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			amount: {
				currency: "EUR",
				value: params.amountValue
			},
			description: params.description,
			redirectUrl: params.redirectUrl,
			webhookUrl: params.webhookUrl,
			metadata: params.metadata,
			locale: params.locale ?? "fr_BE"
		})
	});
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Mollie create payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
async function getMolliePayment(paymentId) {
	const res = await fetch(`${MOLLIE_API}/payments/${paymentId}`, { headers: { Authorization: `Bearer ${getApiKey()}` } });
	if (!res.ok) {
		const errText = await res.text();
		throw new Error(`Mollie get payment failed (${res.status}): ${errText}`);
	}
	return await res.json();
}
function formatEurAmount(total) {
	return total.toFixed(2);
}
//#endregion
//#region src/lib/order-store.ts
var schemaReady;
function getSql() {
	const url = process.env.DATABASE_URL;
	if (!url) throw new Error("DATABASE_URL manquante. Connecte une base Postgres Neon au projet Vercel.");
	return cs(url);
}
async function ensureSchema() {
	if (!schemaReady) schemaReady = (async () => {
		const sql = getSql();
		await sql`
        CREATE TABLE IF NOT EXISTS orders (
          id TEXT PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL,
          status TEXT NOT NULL,
          payment_method TEXT NOT NULL,
          mollie_payment_id TEXT,
          customer_json TEXT NOT NULL,
          items_json TEXT NOT NULL,
          total NUMERIC(12, 2) NOT NULL,
          currency TEXT NOT NULL DEFAULT 'EUR',
          print_status TEXT NOT NULL DEFAULT 'pending',
          printed_at TIMESTAMPTZ,
          print_attempts INTEGER NOT NULL DEFAULT 0,
          print_claimed_at TIMESTAMPTZ,
          print_error TEXT
        )
      `;
		await sql`
        CREATE INDEX IF NOT EXISTS orders_print_queue_idx
        ON orders (print_status, status, created_at)
      `;
		await sql`
        ALTER TABLE orders ADD COLUMN IF NOT EXISTS print_claimed_at TIMESTAMPTZ
      `;
		await sql`
        CREATE INDEX IF NOT EXISTS orders_mollie_idx
        ON orders (mollie_payment_id)
      `;
	})().catch((error) => {
		schemaReady = void 0;
		throw error;
	});
	await schemaReady;
}
function rowToOrder(row) {
	return {
		id: row.id,
		createdAt: row.created_at,
		status: row.status,
		paymentMethod: row.payment_method,
		molliePaymentId: row.mollie_payment_id ?? void 0,
		customer: JSON.parse(row.customer_json),
		items: JSON.parse(row.items_json),
		total: Number(row.total),
		currency: row.currency
	};
}
async function getOrderFromStore(id) {
	await ensureSchema();
	const row = (await getSql()`
    SELECT id, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE id = ${id}
    LIMIT 1
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function listOrdersFromStore() {
	await ensureSchema();
	return (await getSql()`
    SELECT id, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_attempts, print_error
    FROM orders
    ORDER BY created_at DESC
    LIMIT 200
  `).map(rowToOrder);
}
async function upsertOrder(order) {
	await ensureSchema();
	await getSql()`
    INSERT INTO orders (
      id, created_at, status, payment_method, mollie_payment_id,
      customer_json, items_json, total, currency
    )
    VALUES (
      ${order.id},
      ${order.createdAt},
      ${order.status},
      ${order.paymentMethod},
      ${order.molliePaymentId ?? null},
      ${JSON.stringify(order.customer)},
      ${JSON.stringify(order.items)},
      ${order.total},
      ${order.currency}
    )
    ON CONFLICT (id) DO UPDATE SET
      status = EXCLUDED.status,
      payment_method = EXCLUDED.payment_method,
      mollie_payment_id = EXCLUDED.mollie_payment_id,
      customer_json = EXCLUDED.customer_json,
      items_json = EXCLUDED.items_json,
      total = EXCLUDED.total,
      currency = EXCLUDED.currency
  `;
}
async function claimNextPrintJob() {
	await ensureSchema();
	const row = (await getSql()`
    UPDATE orders
    SET
      print_status = 'printing',
      print_claimed_at = NOW(),
      print_attempts = print_attempts + 1,
      print_error = NULL
    WHERE id = (
      SELECT id
      FROM orders
      WHERE status IN ('paid', 'awaiting_pickup', 'awaiting_delivery')
        AND (
          print_status = 'pending'
          OR (print_status = 'printing' AND print_claimed_at < NOW() - INTERVAL '2 minutes')
        )
      ORDER BY created_at ASC
      LIMIT 1
      FOR UPDATE SKIP LOCKED
    )
    RETURNING id, created_at, status, payment_method, mollie_payment_id,
              customer_json, items_json, total, currency,
              print_status, printed_at, print_attempts, print_error
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function acknowledgePrint(orderId, success, errorMessage) {
	await ensureSchema();
	const sql = getSql();
	if (success) {
		await sql`
      UPDATE orders
      SET print_status = 'printed',
          printed_at = NOW(),
          print_claimed_at = NULL,
          print_error = NULL
      WHERE id = ${orderId}
    `;
		return;
	}
	await sql`
    UPDATE orders
    SET print_status = 'pending',
        print_error = ${errorMessage ?? "Printer agent failed"}
    WHERE id = ${orderId}
  `;
}
//#endregion
//#region src/lib/delivery.ts
var deliveryZones = [
	{
		postalCode: "3790",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "3798",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4040",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4458",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4600",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4601",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4602",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4606",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4607",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4608",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4670",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4671",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4672",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4680",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4681",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4682",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4683",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4684",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4690",
		minimumOrder: 40,
		feeUnder50: 5
	}
];
function getDeliveryZone(postalCode) {
	const normalized = postalCode.trim().replace(/\s+/g, "");
	return deliveryZones.find((zone) => zone.postalCode === normalized) ?? null;
}
//#endregion
//#region src/fn/checkout.ts
var orderItemSchema = objectType({
	id: stringType(),
	name: stringType(),
	price: numberType().positive(),
	quantity: numberType().int().positive(),
	toppings: arrayType(stringType())
});
var checkoutSchema = objectType({
	customer: objectType({
		name: stringType().min(2),
		phone: stringType().min(8),
		email: stringType().email().optional().or(literalType("")),
		notes: stringType().max(500).optional(),
		fulfillment: enumType(["delivery", "pickup"]),
		requestedTime: stringType().min(1),
		address: stringType().max(300).optional(),
		postalCode: stringType().max(10).optional(),
		city: stringType().max(100).optional()
	}),
	items: arrayType(orderItemSchema).min(1),
	paymentMethod: enumType(["online", "on_site"]),
	origin: stringType().url()
});
function canonicalizeItems(items) {
	const catalog = new Map([
		...bowls.map((item) => [item.id, item.price]),
		["sur-mesure", 10],
		...drinks.map((item) => [item.id, item.price]),
		...desserts.map((item) => [item.id, item.price])
	]);
	return items.map((item) => {
		if (item.id === "sur-mesure") {
			let unitPrice = 10;
			const opts = item.toppings ?? [];
			if (opts.some((t) => /saumon/i.test(t))) unitPrice += 1;
			const toppingLine = opts.find((t) => /^Toppings?\s*:/i.test(t));
			if (toppingLine) {
				const parsed = toppingLine.replace(/^Toppings?\s*:\s*/i, "").split(",").map((s) => s.trim()).filter((s) => s.length > 0 && !/aucun/i.test(s));
				unitPrice += parsed.length * .5;
			} else {
				const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
				unitPrice += individualToppings.length * .5;
			}
			return {
				...item,
				name: "Poke Bowl sur mesure",
				price: unitPrice,
				toppings: opts
			};
		}
		const bowl = bowls.find((b) => b.id === item.id);
		if (bowl) {
			let unitPrice = bowl.price;
			const opts = item.toppings ?? [];
			const toppingEntries = opts.filter((t) => /^Topping\s*:/i.test(t));
			unitPrice += toppingEntries.length * .5;
			if (opts.some((t) => /sauce extra/i.test(t))) unitPrice += 1;
			return {
				...item,
				name: bowl.name,
				price: unitPrice,
				toppings: opts
			};
		}
		const canonicalPrice = catalog.get(item.id);
		if (canonicalPrice == null) throw new Error("Article invalide");
		const drink = drinks.find((d) => d.id === item.id);
		const dessert = desserts.find((d) => d.id === item.id);
		return {
			...item,
			name: drink?.name ?? dessert?.name ?? item.name,
			price: canonicalPrice,
			toppings: []
		};
	});
}
function computeSubtotal(items) {
	return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
var submitCheckout = createServerFn({ method: "POST" }).validator(checkoutSchema).handler(async ({ data }) => {
	const items = canonicalizeItems(data.items);
	const subtotal = computeSubtotal(items);
	if (subtotal <= 0) throw new Error("Panier invalide");
	const deliveryZone = data.customer.fulfillment === "delivery" ? getDeliveryZone(data.customer.postalCode ?? "") : null;
	if (data.customer.fulfillment === "delivery") {
		if (!deliveryZone) throw new Error("Cette zone de livraison n'est pas desservie.");
		if (subtotal < deliveryZone.minimumOrder) throw new Error(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
		if (!data.customer.address?.trim() || !data.customer.city?.trim()) throw new Error("Adresse de livraison incomplète.");
	}
	const deliveryFee = deliveryZone ? subtotal >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const total = subtotal + deliveryFee;
	const orderId = generateOrderId();
	const order = {
		id: orderId,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: data.paymentMethod === "online" ? "pending_payment" : data.customer.fulfillment === "delivery" ? "awaiting_delivery" : "awaiting_pickup",
		paymentMethod: data.paymentMethod,
		customer: {
			name: data.customer.name.trim(),
			phone: data.customer.phone.trim(),
			email: data.customer.email?.trim() || void 0,
			notes: data.customer.notes?.trim() || void 0,
			fulfillment: data.customer.fulfillment,
			requestedTime: data.customer.requestedTime,
			address: data.customer.address?.trim() || void 0,
			postalCode: data.customer.postalCode?.trim().replace(/\s+/g, "") || void 0,
			city: data.customer.city?.trim() || void 0,
			deliveryFee
		},
		items,
		total,
		currency: "EUR"
	};
	if (data.paymentMethod === "on_site") {
		await upsertOrder(order);
		return {
			type: "on_site",
			orderId: order.id,
			total: order.total,
			redirectUrl: `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=on_site`
		};
	}
	const webhookUrl = `${data.origin}/api/mollie-webhook`;
	const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=online`;
	const payment = await createMolliePayment({
		amountValue: formatEurAmount(total),
		description: `Poke N Bowl ${orderId}`,
		redirectUrl,
		webhookUrl,
		metadata: {
			orderId: order.id,
			customerName: order.customer.name,
			customerPhone: order.customer.phone,
			requestedTime: order.customer.requestedTime
		},
		locale: "fr_BE"
	});
	order.molliePaymentId = payment.id;
	await upsertOrder(order);
	const checkoutUrl = payment._links?.checkout?.href;
	if (!checkoutUrl) throw new Error("Mollie n'a pas renvoyé d'URL de paiement");
	return {
		type: "online",
		orderId: order.id,
		total: order.total,
		molliePaymentId: payment.id,
		redirectUrl: checkoutUrl
	};
});
var getOrderStatus = createServerFn({ method: "GET" }).validator(objectType({ orderId: stringType().min(1) })).handler(async ({ data }) => {
	let order = await getOrderFromStore(data.orderId);
	if (order?.molliePaymentId && order.status === "pending_payment") try {
		const payment = await getMolliePayment(order.molliePaymentId);
		if (payment.status === "paid") {
			order = {
				...order,
				status: "paid"
			};
			await upsertOrder(order);
		} else if (payment.status === "canceled" || payment.status === "expired" || payment.status === "failed") {
			order = {
				...order,
				status: payment.status === "expired" ? "expired" : "cancelled"
			};
			await upsertOrder(order);
		}
	} catch {}
	if (!order) return { found: false };
	return {
		found: true,
		order: {
			id: order.id,
			status: order.status,
			paymentMethod: order.paymentMethod,
			total: order.total,
			customer: order.customer,
			items: order.items,
			createdAt: order.createdAt
		}
	};
});
//#endregion
//#region src/routes/checkout.tsx
var Route$11 = createFileRoute("/checkout")({ component: CheckoutPage });
function CheckoutPage() {
	const { items, total, clearCart } = useCart();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [fulfillment, setFulfillment] = (0, import_react.useState)("delivery");
	const [requestedTime, setRequestedTime] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [postalCode, setPostalCode] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("online");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const pickupOptions = (0, import_react.useMemo)(() => buildPickupSlots(), []);
	const deliveryZone = (0, import_react.useMemo)(() => getDeliveryZone(postalCode), [postalCode]);
	const deliveryFee = fulfillment === "delivery" && deliveryZone ? total >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const orderTotal = total + deliveryFee;
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] flex flex-col items-center justify-center px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-bold text-[#17231f]",
			children: "Votre panier est vide."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/commander",
			className: "mt-6 rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
			children: "Voir la carte"
		})]
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			const origin = window.location.origin;
			const result = await submitCheckout({ data: {
				customer: {
					name,
					phone,
					email: email || "",
					notes: notes || void 0,
					fulfillment,
					requestedTime,
					address: address || void 0,
					postalCode: postalCode || void 0,
					city: city || void 0
				},
				items: items.map((item) => ({
					id: item.id,
					name: item.name,
					price: item.price,
					quantity: item.quantity,
					toppings: item.toppings
				})),
				paymentMethod,
				origin
			} });
			if (result.type === "online") {
				window.location.href = result.redirectUrl;
				return;
			}
			clearCart();
			navigate({
				to: "/order/success",
				search: {
					orderId: result.orderId,
					method: "on_site"
				}
			});
		} catch (err) {
			console.error(err);
			setError(err instanceof Error ? err.message : "Une erreur est survenue. Réessaie ou choisis « Payer sur place ».");
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] hover:text-[#17231f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-[900px] px-5 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#ff705f]",
					children: "Finaliser"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-black tracking-tight sm:text-5xl",
					children: "Ta commande."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-[#758079]",
					children: "Renseigne tes coordonnées, ton adresse de livraison et le mode de paiement."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-10 grid gap-8 lg:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Mode de réception"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setFulfillment("delivery"),
										className: `rounded-2xl border-2 p-4 text-left ${fulfillment === "delivery" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "Livraison"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "À domicile selon ton code postal"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setFulfillment("pickup"),
										className: `rounded-2xl border-2 p-4 text-left ${fulfillment === "pickup" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "Retrait sur place"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "Poke N Bowl Visé"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Coordonnées"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Nom *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												value: name,
												onChange: (e) => setName(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "Prénom Nom"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Téléphone *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "tel",
												value: phone,
												onChange: (e) => setPhone(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "04xx xx xx xx"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Email (optionnel)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												value: email,
												onChange: (e) => setEmail(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "toi@email.com"
											})]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Adresse *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: address,
													onChange: (e) => setAddress(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Rue et numéro"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Code postal *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													inputMode: "numeric",
													value: postalCode,
													onChange: (e) => setPostalCode(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "4600"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Ville *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: city,
													onChange: (e) => setCity(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Visé"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-2 rounded-xl bg-[#f7f4ec] px-4 py-3 text-xs font-bold text-[#17231f]",
												children: deliveryZone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													"Minimum : € ",
													deliveryZone.minimumOrder.toFixed(2),
													" · Livraison : ",
													total >= 50 ? "gratuite" : `€ ${deliveryZone.feeUnder50.toFixed(2)}`
												] }) : "Entre ton code postal pour connaître les frais de livraison."
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: fulfillment === "delivery" ? "Créneau souhaité *" : "Heure de retrait *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												required: true,
												value: requestedTime,
												onChange: (e) => setRequestedTime(e.target.value),
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Choisir un créneau"
												}), pickupOptions.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: slot,
													children: slot
												}, slot))]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "block sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#7a847e]",
												children: "Notes (allergies, etc.)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: notes,
												onChange: (e) => setNotes(e.target.value),
												rows: 3,
												className: "mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "Optionnel"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-black",
									children: "Paiement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("online"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "online" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer en ligne"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Bancontact, carte — via Mollie"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("on_site"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "on_site" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer sur place"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "À la récupération — sans frais en ligne"
											})
										]
									})]
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
								children: error
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-[24px] bg-[#10251f] p-6 text-white lg:sticky lg:top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-black",
								children: "Récapitulatif"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-bold",
											children: [
												item.quantity,
												"× ",
												item.name
											]
										}), item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/50",
											children: item.toppings.join(", ")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 font-bold",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									})]
								}, `${item.id}-${JSON.stringify(item.toppings)}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex items-center justify-between border-t border-white/10 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-white/50",
											children: ["Sous-total · € ", total.toFixed(2)]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-white/50",
											children: ["Livraison · ", deliveryFee === 0 ? "Gratuite" : `€ ${deliveryFee.toFixed(2)}`]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-2xl font-black text-[#d7ff45]",
											children: ["€ ", orderTotal.toFixed(2)]
										})
									]
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white transition hover:bg-[#ff705f]/90 disabled:opacity-60",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Traitement…"] }) : paymentMethod === "online" ? "Payer en ligne" : "Confirmer la commande"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-[10px] text-white/40",
								children: "Livraison selon zone · retrait possible à Poke N Bowl Visé"
							})
						]
					})]
				})
			]
		})]
	});
}
function buildPickupSlots() {
	const slots = [];
	const now = /* @__PURE__ */ new Date();
	const windows = [
		{
			day: 1,
			start: 720,
			end: 840
		},
		{
			day: 1,
			start: 1020,
			end: 1260
		},
		{
			day: 2,
			start: 720,
			end: 840
		},
		{
			day: 2,
			start: 1020,
			end: 1260
		},
		{
			day: 3,
			start: 720,
			end: 840
		},
		{
			day: 3,
			start: 1020,
			end: 1260
		},
		{
			day: 4,
			start: 720,
			end: 840
		},
		{
			day: 4,
			start: 1020,
			end: 1260
		},
		{
			day: 5,
			start: 720,
			end: 840
		},
		{
			day: 5,
			start: 1020,
			end: 1260
		},
		{
			day: 6,
			start: 1080,
			end: 1260
		}
	];
	for (let dayOffset = 0; dayOffset <= 7; dayOffset += 1) {
		const d = new Date(now);
		d.setDate(now.getDate() + dayOffset);
		const day = d.getDay();
		const dayWindows = windows.filter((w) => w.day === day);
		for (const window of dayWindows) for (let minute = window.start; minute <= window.end; minute += 15) {
			const slotDate = new Date(d);
			slotDate.setHours(Math.floor(minute / 60), minute % 60, 0, 0);
			if (slotDate.getTime() < now.getTime() + 12e5) continue;
			const labelDay = dayOffset === 0 ? "Aujourd'hui" : dayOffset === 1 ? "Demain" : d.toLocaleDateString("fr-BE", {
				weekday: "short",
				day: "2-digit",
				month: "2-digit"
			});
			slots.push(labelDay + " " + slotDate.toLocaleTimeString("fr-BE", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: false
			}));
		}
	}
	return slots.slice(0, 48);
}
//#endregion
//#region src/lib/stock.ts
function toppingKey(name) {
	return `topping:${name}`;
}
function buildDefaultStock() {
	const items = {};
	for (const b of bowls) items[b.id] = {
		available: true,
		qty: null
	};
	for (const d of drinks) items[d.id] = {
		available: true,
		qty: null
	};
	for (const d of desserts) items[d.id] = {
		available: true,
		qty: null
	};
	for (const t of allToppings) items[toppingKey(t)] = {
		available: true,
		qty: null
	};
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items
	};
}
function isItemAvailable(stock, id) {
	if (!stock?.items) return true;
	const entry = stock.items[id];
	if (!entry) return true;
	if (!entry.available) return false;
	if (entry.qty != null && entry.qty <= 0) return false;
	return true;
}
function catalogLabels() {
	return [
		...bowls.map((b) => ({
			id: b.id,
			label: b.name,
			group: "bowl"
		})),
		...drinks.map((d) => ({
			id: d.id,
			label: d.name,
			group: "drink"
		})),
		...desserts.map((d) => ({
			id: d.id,
			label: d.name,
			group: "dessert"
		})),
		...allToppings.map((t) => ({
			id: toppingKey(t),
			label: t,
			group: "topping"
		}))
	];
}
//#endregion
//#region src/lib/stock-store.ts
var STOCK_KEY = "pokenbowl:stock";
/** Fallback when Redis is not configured (not shared across serverless instances) */
var memoryStock = null;
function redisConfigured() {
	return Boolean((process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) && (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN));
}
function redisCreds() {
	return {
		url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "",
		token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
	};
}
async function redisCommand(command) {
	const { url, token } = redisCreds();
	const res = await fetch(`${url}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(command)
	});
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Redis error ${res.status}: ${text}`);
	}
	return (await res.json()).result;
}
function mergeWithDefaults(partial) {
	const base = buildDefaultStock();
	return {
		updatedAt: partial.updatedAt || base.updatedAt,
		items: {
			...base.items,
			...partial.items
		}
	};
}
async function loadStock() {
	if (redisConfigured()) try {
		const raw = await redisCommand(["GET", STOCK_KEY]);
		if (typeof raw === "string" && raw) {
			const parsed = JSON.parse(raw);
			if (parsed?.items) return mergeWithDefaults(parsed);
		}
	} catch (e) {
		console.error("[stock] redis load failed", e);
	}
	if (memoryStock) return mergeWithDefaults(memoryStock);
	const fresh = buildDefaultStock();
	memoryStock = fresh;
	return fresh;
}
async function saveStock(stock) {
	stock.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	memoryStock = stock;
	if (redisConfigured()) await redisCommand([
		"SET",
		STOCK_KEY,
		JSON.stringify(stock)
	]);
}
function assertAdminPin(pin) {
	if (pin !== (process.env.STOCK_ADMIN_PIN || "vise2026")) throw new Error("Code admin incorrect");
}
//#endregion
//#region src/fn/stock.ts
var getStock = createServerFn({ method: "GET" }).handler(async () => {
	return {
		stock: await loadStock(),
		persistent: redisConfigured()
	};
});
var setStockItem = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	id: stringType().min(1),
	available: booleanType(),
	qty: numberType().int().min(0).nullable().optional()
})).handler(async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = await loadStock();
	const prev = stock.items[data.id] ?? {
		available: true,
		qty: null
	};
	stock.items[data.id] = {
		available: data.available,
		qty: data.qty === void 0 ? prev.qty : data.qty
	};
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().min(1),
	updates: arrayType(objectType({
		id: stringType(),
		available: booleanType(),
		qty: numberType().int().min(0).nullable().optional()
	}))
})).handler(async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = await loadStock();
	for (const u of data.updates) {
		const prev = stock.items[u.id] ?? {
			available: true,
			qty: null
		};
		stock.items[u.id] = {
			available: u.available,
			qty: u.qty === void 0 ? prev.qty : u.qty
		};
	}
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
var resetStock = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().min(1) })).handler(async ({ data }) => {
	assertAdminPin(data.pin);
	const stock = buildDefaultStock();
	await saveStock(stock);
	return {
		stock,
		persistent: redisConfigured()
	};
});
//#endregion
//#region src/hooks/useStock.ts
/** Poll stock every 20s so menu reflects real-time availability */
function useStock(pollMs = 2e4) {
	const [stock, setStock] = (0, import_react.useState)(null);
	const [persistent, setPersistent] = (0, import_react.useState)(false);
	const refresh = (0, import_react.useCallback)(async () => {
		try {
			const res = await getStock();
			setStock(res.stock);
			setPersistent(res.persistent);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		refresh();
		const id = window.setInterval(() => void refresh(), pollMs);
		return () => window.clearInterval(id);
	}, [refresh, pollMs]);
	return {
		stock,
		persistent,
		available: (0, import_react.useCallback)((id) => isItemAvailable(stock, id), [stock]),
		refresh
	};
}
//#endregion
//#region src/routes/commander.tsx
var Route$10 = createFileRoute("/commander")({ component: CommanderPage });
var TAG_STYLES$1 = {
	signature: "bg-[#10251f] text-[#d7ff45]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#d7ff45] text-[#10251f]"
};
function CommanderPage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const displayedBowls = [...bowls.filter((b) => b.id.startsWith("crousty-")), ...bowls.filter((b) => !b.id.startsWith("crousty-"))];
	const quickAdd = (item) => {
		if (!available(item.id)) return;
		addItem({
			id: item.id,
			name: item.name,
			basePrice: item.price,
			price: item.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image || "/assets/dessert-9PIP1ns9.jpg"
		});
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-black/10 bg-white p-1 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex",
								children: t("nav.home")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#10251f] p-3 text-white transition hover:bg-[#1e3d33]",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
									children: count
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-[#10251f] px-5 py-14 text-white sm:px-8 sm:py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d7ff45]/5 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-20 left-1/4 h-60 w-60 rounded-full bg-[#ff705f]/8 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-6 inline-flex items-center gap-2 text-xs font-bold text-white/45 transition hover:text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
								" ",
								t("cmd.back")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]",
									children: t("cmd.eyebrow")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-2 text-[clamp(2rem,8vw,4rem)] font-black leading-[1.06] tracking-[-0.025em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: t("cmd.title1")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-white/35",
										children: t("cmd.title2")
									})]
								})]
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#10251f] via-[#153028] to-[#1c3a31] p-6 text-white shadow-lift sm:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-28 sm:w-28",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
										dishId: "sur-mesure",
										alt: "Poke Bowl sur mesure",
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute bottom-1.5 left-1.5 rounded-full bg-[#10251f]/90 px-2 py-0.5 text-[9px] font-black uppercase text-[#d7ff45]",
										children: "5 étapes"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Fiche officielle restaurant"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-2xl font-black sm:text-3xl",
										children: "Poke (n) Bowl sur mesure"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 max-w-lg text-xs leading-relaxed text-white/75 sm:text-sm",
										children: "Compose ton bowl idéal selon tes envies : 1 base, 5 mix-ins frais, 1 protéine, 1 sauce et tes toppings croustillants."
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] font-bold uppercase tracking-wider text-white/50",
										children: "Formule"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl font-black text-[#d7ff45]",
										children: "10.00 €"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sur-mesure",
									className: "btn-primary inline-flex shrink-0 items-center gap-2 whitespace-nowrap px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-md transition hover:scale-105 active:scale-95",
									children: ["Composer mon bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex items-end justify-between gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]",
							children: t("cmd.bowls_eyebrow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
							children: t("cmd.bowls_title")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-[200px] text-right text-sm text-[#7a847e] sm:block",
							children: t("cmd.bowls_hint")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3",
						children: displayedBowls.map((bowl) => {
							const ok = available(bowl.id);
							const tagStyle = TAG_STYLES$1[bowl.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";
							return ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: [
									"group block overflow-hidden rounded-[28px] bg-white shadow-card transition-all duration-500",
									"hover:-translate-y-2 hover:shadow-lift",
									bowl.id.startsWith("crousty-") ? "ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec]" : ""
								].join(" "),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
									bowl,
									ok: true,
									tagStyle,
									soldOut: t("cmd.sold_out")
								})
							}, bowl.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "block cursor-not-allowed overflow-hidden rounded-[28px] bg-white opacity-55 shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BowlCard, {
									bowl,
									ok: false,
									tagStyle,
									soldOut: t("cmd.sold_out")
								})
							}, bowl.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 overflow-hidden rounded-[28px] bg-[#10251f] sm:mt-16 lg:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 shrink-0 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.22em] text-[#d7ff45]",
									children: t("cmd.customization_title")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm text-white/55",
									children: t("cmd.customization_note")
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sur-mesure",
								className: "btn-primary inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-xs font-black uppercase",
								children: ["Composer en 5 étapes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-5",
							children: [
								{
									label: t("cmd.bases"),
									items: customBases,
									emoji: "🍚"
								},
								{
									label: t("cmd.mixins"),
									items: customMixIns,
									emoji: "🥗"
								},
								{
									label: t("cmd.protein"),
									items: customProteins,
									emoji: "🍗"
								},
								{
									label: t("cmd.sauces"),
									items: customSauces,
									emoji: "🍶"
								},
								{
									label: t("cmd.toppings"),
									items: toppings.map((t) => `${t.emoji} ${t.name}`),
									emoji: "✨"
								}
							].map(({ label, items, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-white/10 bg-white/[0.04] p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#d7ff45]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }),
										" ",
										label
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 space-y-1.5",
									children: items.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] leading-4 text-white/65",
										children: value
									}, value))
								})]
							}, label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-5 sm:mt-6 lg:grid-cols-2 lg:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-white shadow-card sm:rounded-[28px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 border-b border-black/5 px-6 py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black sm:text-2xl",
									children: t("cmd.drinks")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 p-5 sm:grid-cols-2 sm:p-6",
								children: drinks.map((drink) => {
									const ok = available(drink.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: !ok,
										onClick: () => quickAdd(drink),
										className: ["flex min-h-[48px] items-center justify-between gap-2 rounded-2xl px-4 py-3 text-left transition-all duration-200", ok ? "bg-[#f5f4ee] hover:bg-[#d7ff45] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,.15)] active:scale-[0.98]" : "cursor-not-allowed bg-[#f0f0ea] opacity-55"].join(" "),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 break-words text-sm font-bold",
											children: drink.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-xs font-black",
											children: ok ? `€ ${drink.price.toFixed(2)}` : t("cmd.sold_out")
										})]
									}, drink.id);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[24px] bg-[#ff705f] text-white shadow-card sm:rounded-[28px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-white/15 px-6 py-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-black sm:text-2xl",
									children: t("cmd.desserts")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4 p-5 sm:flex-row sm:gap-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dessert_default,
									alt: "Tiramisu maison",
									className: "h-24 w-full rounded-2xl object-cover sm:h-auto sm:w-28 sm:shrink-0",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-1 flex-col gap-2",
									children: desserts.map((d) => {
										const ok = available(d.id);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !ok,
											onClick: () => quickAdd(d),
											className: ["flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all duration-200", ok ? "bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98]" : "cursor-not-allowed bg-white/5 opacity-55"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "min-w-0 break-words",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-black",
												children: ok ? `€ ${d.price.toFixed(2)}` : t("cmd.sold_out")
											})]
										}, d.id);
									})
								})]
							})]
						})]
					})
				]
			})] }),
			count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setIsCartOpen(true),
					className: "flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white shadow-glow-coral",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
						t("cart.title"),
						" (",
						count,
						") →"
					]
				})
			})
		]
	});
}
function BowlCard({ bowl, ok, tagStyle, soldOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[4/3] overflow-hidden bg-[#ece8dc]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
				dishId: bowl.id,
				alt: bowl.name,
				className: `h-full w-full object-cover transition duration-700 ${ok ? "group-hover:scale-[1.06]" : "grayscale"}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `badge-tag absolute left-3 top-3 shadow-card sm:left-4 sm:top-4 ${tagStyle}`,
				children: ok ? bowl.tag : soldOut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute bottom-3 right-3 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] sm:bottom-4 sm:right-4",
				children: ["€ ", bowl.price.toFixed(2)]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "min-w-0 flex-1 break-words text-[17px] font-black leading-[1.22] sm:text-xl",
					children: bowl.name
				}), ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f4ee] transition-colors duration-300 group-hover:bg-[#ff705f] group-hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-2 text-[13px] leading-5 text-[#68756f]",
				children: bowl.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-4 text-[9px] font-black uppercase tracking-[0.16em] ${ok ? "text-[#ff705f]" : "text-[#9aa39c]"}`,
				children: ok ? "Personnaliser → Commander" : soldOut
			})
		]
	})] });
}
//#endregion
//#region src/routes/contact.tsx
var Route$9 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
	component: ContactPage
});
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Accueil"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-coral",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 break-words text-5xl font-black leading-[1.1] tracking-[-0.02em] md:text-7xl",
							children: "On se parle ?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted-foreground",
							children: "Une question, une commande ou une demande particulière ? Retrouve-nous à Visé ou appelle directement l’équipe."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+32491281456",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Téléphone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-words text-xl font-black",
									children: "+32 491 28 14 56"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
							target: "_blank",
							rel: "noreferrer",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Adresse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xl font-black",
									children: "Av. du Pont 12"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "4600 Visé, Belgique"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/commander",
							className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground",
									children: "Commande"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xl font-black",
									children: "Commander en ligne"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Compose ton bowl"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-[2rem] border border-border shadow-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Poke N Bowl Visé",
						src: "https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed",
						width: "100%",
						height: "420",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						style: { border: 0 }
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/recrutement.tsx
var Route$8 = createFileRoute("/recrutement")({
	head: () => ({ meta: [{ title: "Recrutement — Poke N Bowl Visé" }] }),
	component: RecruitmentPage
});
function RecruitmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Accueil"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,oklch(0.24_0.045_195),oklch(0.38_0.08_175))] p-8 text-white shadow-lift md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4" }), " On recrute"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 break-words text-5xl font-black leading-[1.08] tracking-[-0.02em] md:text-7xl",
								children: "Rejoins l’aventure Poke N Bowl."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/75",
								children: "Nous cherchons des personnes énergiques, fiables et souriantes pour faire vivre l’expérience Poke N Bowl à Visé."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "À Visé"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "Av. du Pont 12, 4600 Visé, Belgique."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "Un premier contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+32491281456",
									className: "mt-2 inline-block text-sm font-bold hover:text-coral",
									children: "+32 491 28 14 56"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-6 w-6 text-coral" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-xl font-black",
									children: "Candidature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "CV + quelques lignes sur toi pour commencer l’échange."
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 rounded-3xl border border-coral/20 bg-coral/5 p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-black",
							children: "Envoyer ma candidature"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted-foreground",
							children: "Envoie ton CV et quelques lignes sur toi directement à notre équipe."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:pokenbowl1@gmail.com?subject=Candidature%20—%20Poke%20N%20Bowl",
							className: "mt-6 inline-flex rounded-full bg-coral px-6 py-3 font-black text-white shadow-lift transition hover:scale-105",
							children: "pokenbowl1@gmail.com"
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/sur-mesure.tsx
var Route$7 = createFileRoute("/sur-mesure")({ component: SurMesurePage });
var BASE_PRICE = 10;
var MAX_MIX_INS = 5;
function SurMesurePage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	useNavigate();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const [selectedBase, setSelectedBase] = import_react.useState(detailedBases[0]);
	const [selectedMixIns, setSelectedMixIns] = import_react.useState([]);
	const [selectedProtein, setSelectedProtein] = import_react.useState(detailedProteins[0]);
	const [selectedSauce, setSelectedSauce] = import_react.useState(detailedSauces[0]);
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const toggleMixIn = (name) => {
		setSelectedMixIns((cur) => {
			if (cur.includes(name)) return cur.filter((item) => item !== name);
			if (cur.length >= MAX_MIX_INS) return cur;
			return [...cur, name];
		});
	};
	const toggleTopping = (name) => {
		setSelectedToppings((cur) => cur.includes(name) ? cur.filter((t) => t !== name) : [...cur, name]);
	};
	const proteinExtra = selectedProtein?.extraPrice ?? 0;
	const toppingsExtra = selectedToppings.length * .5;
	const unitPrice = BASE_PRICE + proteinExtra + toppingsExtra;
	const totalPrice = unitPrice * qty;
	const isBaseReady = selectedBase !== null;
	const isMixInsReady = selectedMixIns.length === MAX_MIX_INS;
	const isProteinReady = selectedProtein !== null;
	const isSauceReady = selectedSauce !== null;
	const isValid = isBaseReady && isMixInsReady && isProteinReady && isSauceReady;
	const getMissingReason = () => {
		if (!isBaseReady) return "Étape 1 : Choisis une base";
		if (selectedMixIns.length < MAX_MIX_INS) {
			const remaining = MAX_MIX_INS - selectedMixIns.length;
			return `Étape 2 : Choisis encore ${remaining} mix-in${remaining > 1 ? "s" : ""}`;
		}
		if (!isProteinReady) return "Étape 3 : Choisis une protéine";
		if (!isSauceReady) return "Étape 4 : Choisis une sauce";
		return null;
	};
	const handleAddToCart = () => {
		if (!isValid) return;
		const options = [
			`Base : ${selectedBase.name}`,
			`Mix-ins : ${selectedMixIns.join(", ")}`,
			`Protéine : ${selectedProtein.name}`,
			`Sauce : ${selectedSauce.name}`,
			...selectedToppings.length > 0 ? [`Toppings : ${selectedToppings.join(", ")}`] : ["Toppings : Aucun"]
		];
		addItem({
			id: "sur-mesure",
			name: "Poke Bowl sur mesure",
			basePrice: BASE_PRICE,
			price: unitPrice,
			quantity: qty,
			toppings: options,
			removedIngredients: [],
			image: bowl_spicy_chicken_default
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1500);
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-black/10 bg-white p-1 sm:flex",
								children: [
									"fr",
									"en",
									"nl"
								].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setLanguage(lang),
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex",
								children: "La carte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#10251f] p-3 text-white transition hover:bg-[#1e3d33]",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
									children: count
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "mb-6 inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] transition hover:text-[#17231f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Retour aux bowls signatures"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-10 overflow-hidden rounded-[28px] bg-[#10251f] p-6 text-white shadow-lift sm:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Fiche officielle restaurant"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 text-3xl font-black tracking-tight sm:text-5xl",
										children: ["Poke (n) Bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#ff705f]",
											children: "sur mesure"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-white/70 sm:text-base",
										children: "Compose ton bol personnalisé en 5 étapes exactement comme sur le ticket du restaurant : 1 base, 5 mix-ins frais, 1 protéine, 1 sauce onctueuse et tes toppings croustillants !"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-2xl bg-white/[0.07] p-5 backdrop-blur-md sm:flex-col sm:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-bold uppercase tracking-wider text-white/50",
									children: "Formule de base"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-black text-[#d7ff45] sm:text-4xl",
									children: "10.00 €"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-white/60",
									children: "Base + 5 mix-ins + protéine + sauce"
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-8 lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Base"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: detailedBases.map((base) => {
											const isSelected = selectedBase?.id === base.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedBase(base),
												className: ["flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-2xl",
														children: base.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-bold text-[#17231f]",
															children: base.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold text-[#7a847e]",
															children: "Inclus"
														})]
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" })
													})
												]
											}, base.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
												children: "Étape 2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Mix In (Choix de 5 ingrédients)"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: ["rounded-full px-3 py-1 text-xs font-black transition-colors", selectedMixIns.length === MAX_MIX_INS ? "bg-[#10251f] text-[#d7ff45]" : "bg-[#ff705f]/10 text-[#ff705f]"].join(" "),
												children: [
													selectedMixIns.length,
													" / ",
													MAX_MIX_INS,
													" choisis"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-4 text-xs font-semibold text-[#7a847e]",
											children: "Sélectionne exactement 5 ingrédients frais parmi les 16 proposés sur le ticket :"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
											children: detailedMixIns.map((mixIn) => {
												const isSelected = selectedMixIns.includes(mixIn.name);
												const isMaxReached = selectedMixIns.length >= MAX_MIX_INS && !isSelected;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													disabled: isMaxReached,
													onClick: () => toggleMixIn(mixIn.name),
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-150", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm scale-[1.01]" : isMaxReached ? "cursor-not-allowed border-[#ece8e1] bg-[#faf8f4] opacity-45" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: mixIn.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "min-w-0 flex-1 truncate text-xs font-bold text-[#17231f]",
															children: mixIn.name
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
														})
													]
												}, mixIn.id);
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 3"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Protéine"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
										children: detailedProteins.map((prot) => {
											const isSelected = selectedProtein?.id === prot.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedProtein(prot),
												className: ["flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-3xl mb-1",
														children: prot.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-sm font-bold text-[#17231f]",
														children: prot.name
													}),
													prot.extraPrice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-1 rounded-full bg-[#ff705f] px-2 py-0.5 text-[10px] font-black text-white",
														children: [
															"+",
															prot.extraPrice.toFixed(2),
															" €"
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-1 text-[10px] font-semibold text-[#7a847e]",
														children: "Inclus"
													})
												]
											}, prot.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
											children: "Étape 4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Sauce"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "1 choix requis"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-4",
										children: detailedSauces.map((sauce) => {
											const isSelected = selectedSauce?.id === sauce.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSauce(sauce),
												className: ["flex items-center gap-2 rounded-2xl border-2 p-3 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl",
														children: sauce.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "min-w-0 flex-1 truncate text-xs font-bold text-[#17231f]",
														children: sauce.name
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
													})
												]
											}, sauce.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
												children: "Étape 5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Toppings croustillants"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#10251f]/10 px-2.5 py-1 text-xs font-black text-[#10251f]",
												children: "+0.50 € / topping"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-4 text-xs font-semibold text-[#7a847e]",
											children: "Sélection libre : ajoute autant de toppings que tu veux pour le croquant parfait !"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: toppings.map((top) => {
												const isSelected = selectedToppings.includes(top.name);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleTopping(top.name),
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xl",
															children: top.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "truncate text-xs font-bold text-[#17231f]",
																children: top.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] font-black text-[#ff705f]",
																children: "+0.50 €"
															})]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff705f] text-white",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-2.5 w-2.5 stroke-[3]" })
														})
													]
												}, top.id);
											})
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-24 rounded-[28px] border border-[#e8e2d9] bg-white p-6 shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-2xl mb-5 shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: bowl_spicy_chicken_default,
											alt: "Poke Bowl sur mesure",
											className: "h-44 w-full object-cover"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-black text-[#17231f]",
										children: "Ton Poke Bowl sur mesure"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-[#7a847e]",
										children: "Récapitulatif de ta composition :"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "my-5 space-y-3 divide-y divide-[#f0ece1] text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Base :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedBase ? `${selectedBase.emoji} ${selectedBase.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Mix-ins :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedMixIns.length > 0 ? selectedMixIns.join(", ") : "0 / 5 choisis"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Protéine :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Sauce :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedSauce ? `${selectedSauce.emoji} ${selectedSauce.name}` : "Non choisie"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2 flex justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#7a847e]",
													children: "Toppings :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedToppings.length > 0 ? selectedToppings.join(", ") : "Aucun topping"
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-[#e8e2d9] pt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-4 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Quantité"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => Math.max(1, q - 1)),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "w-5 text-center font-black",
															children: qty
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setQty((q) => q + 1),
															className: "flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f] hover:text-[#ff705f]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-5 flex items-baseline justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-[#7a847e]",
													children: "Total"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-3xl font-black text-[#17231f]",
													children: [totalPrice.toFixed(2), " €"]
												})]
											}),
											!isValid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mb-3 rounded-xl bg-[#fff1ee] p-3 text-center text-xs font-bold text-[#ff705f]",
												children: getMissingReason()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !isValid,
												onClick: handleAddToCart,
												className: ["btn-primary flex w-full items-center justify-center gap-2 py-3.5 text-center text-sm font-black transition-all", !isValid ? "cursor-not-allowed bg-black/20 text-white/60 hover:bg-black/20" : "active:scale-[0.98]"].join(" "),
												children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Ajouté au panier !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													"Ajouter au panier · ",
													totalPrice.toFixed(2),
													" €"
												] })
											})
										]
									})
								]
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/routes/admin/stocks.tsx
var Route$6 = createFileRoute("/admin/stocks")({ component: AdminStocksPage });
var PIN_KEY = "pnb_stock_pin";
function AdminStocksPage() {
	const [pin, setPin] = (0, import_react.useState)("");
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const [stock, setStock] = (0, import_react.useState)(null);
	const [persistent, setPersistent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [savingId, setSavingId] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const catalog = (0, import_react.useMemo)(() => catalogLabels(), []);
	const load = (0, import_react.useCallback)(async () => {
		setLoading(true);
		setError(null);
		try {
			const res = await getStock();
			setStock(res.stock);
			setPersistent(res.persistent);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Erreur de chargement");
		} finally {
			setLoading(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const saved = sessionStorage.getItem(PIN_KEY);
		if (saved) {
			setPin(saved);
			setUnlocked(true);
		}
		load();
		const interval = window.setInterval(() => void load(), 15e3);
		return () => window.clearInterval(interval);
	}, [load]);
	const unlock = () => {
		if (!pin.trim()) return;
		sessionStorage.setItem(PIN_KEY, pin.trim());
		setUnlocked(true);
	};
	const toggle = async (id, available) => {
		if (!unlocked) return;
		setSavingId(id);
		setError(null);
		try {
			const res = await setStockItem({ data: {
				pin: pin.trim(),
				id,
				available
			} });
			setStock(res.stock);
			setPersistent(res.persistent);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Erreur de sauvegarde");
			if (e instanceof Error && e.message.includes("incorrect")) {
				setUnlocked(false);
				sessionStorage.removeItem(PIN_KEY);
			}
		} finally {
			setSavingId(null);
		}
	};
	const handleReset = async () => {
		if (!unlocked || !confirm("Tout remettre disponible ?")) return;
		setLoading(true);
		try {
			const res = await resetStock({ data: { pin: pin.trim() } });
			setStock(res.stock);
			setPersistent(res.persistent);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Erreur");
		} finally {
			setLoading(false);
		}
	};
	const rows = catalog.filter((c) => filter === "all" || c.group === filter);
	const groupLabel = {
		bowl: "Bowls",
		drink: "Boissons",
		dessert: "Desserts",
		topping: "Toppings"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-black/5 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-black",
						children: "Stocks — Poke N Bowl"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void load(),
					className: "inline-flex items-center gap-2 rounded-full bg-[#10251f] px-3 py-2 text-xs font-bold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }), "Actualiser"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-3xl px-5 py-8",
			children: !unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-white p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-[#758079]",
					children: [
						"Entre le code admin pour modifier les stocks (variable d’environnement",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "rounded bg-[#f0f1ea] px-1",
							children: "STOCK_ADMIN_PIN"
						}),
						", défaut",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "rounded bg-[#f0f1ea] px-1",
							children: "vise2026"
						}),
						")."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: pin,
						onChange: (e) => setPin(e.target.value),
						onKeyDown: (e) => e.key === "Enter" && unlock(),
						placeholder: "Code admin",
						className: "flex-1 rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: unlock,
						className: "rounded-xl bg-[#ff705f] px-5 py-3 text-sm font-black text-white",
						children: "OK"
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex flex-wrap items-center gap-2",
					children: [
						"all",
						"bowl",
						"drink",
						"dessert",
						"topping"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: `rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide ${filter === f ? "bg-[#10251f] text-white" : "bg-white text-[#758079]"}`,
						children: f === "all" ? "Tout" : groupLabel[f]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Stockage :",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: persistent ? "text-green-700" : "text-amber-700",
							children: persistent ? "Redis (temps réel partagé)" : "Mémoire (temporaire)"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void handleReset(),
						className: "font-bold text-[#ff705f]",
						children: "Tout réactiver"
					})]
				}),
				!persistent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900",
					children: [
						"Pour un stock ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vraiment partagé en temps réel" }),
						" entre tous les clients, branche ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Upstash Redis" }),
						" (gratuit) sur Vercel — voir instructions en bas."
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: rows.map((row) => {
						const entry = stock?.items[row.id];
						const available = entry?.available !== false && !(entry?.qty != null && entry.qty <= 0);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-bold",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-bold uppercase tracking-wider text-[#9aa39c]",
									children: groupLabel[row.group]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: savingId === row.id,
								onClick: () => void toggle(row.id, !available),
								className: `shrink-0 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition ${available ? "bg-[#d7ff45] text-[#10251f]" : "bg-[#ff705f]/15 text-[#ff705f]"}`,
								children: savingId === row.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : available ? "Dispo" : "Épuisé"
							})]
						}, row.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl border border-black/5 bg-white p-5 text-xs leading-relaxed text-[#758079]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-black text-[#17231f]",
							children: "Activer Redis (recommandé)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "mt-2 list-decimal space-y-1 pl-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Vercel → projet pokebowlfresh → Storage / Marketplace → Upstash Redis (gratuit)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Variables créées : ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "UPSTASH_REDIS_REST_URL" }),
									" +",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "UPSTASH_REDIS_REST_TOKEN" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Optionnel : ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "STOCK_ADMIN_PIN" }),
									" = ton code secret"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Redéploie le site" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3",
							children: ["Dernière MAJ : ", stock?.updatedAt ? new Date(stock.updatedAt).toLocaleString("fr-BE") : "—"]
						})
					]
				})
			] })
		})]
	});
}
//#endregion
//#region src/routes/api/mollie-webhook.ts
var Route$5 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const contentType = request.headers.get("content-type") ?? "";
		let paymentId = null;
		if (contentType.includes("application/json")) paymentId = (await request.json()).id ?? null;
		else {
			const text = await request.text();
			paymentId = new URLSearchParams(text).get("id");
		}
		if (!paymentId) return new Response("Missing payment id", { status: 400 });
		const payment = await getMolliePayment(paymentId);
		const orderId = payment.metadata?.orderId;
		if (!orderId) return new Response("OK", { status: 200 });
		const order = await getOrderFromStore(orderId);
		if (!order) return new Response("OK", { status: 200 });
		if (payment.status === "paid") await upsertOrder({
			...order,
			status: "paid",
			molliePaymentId: paymentId
		});
		else if (payment.status === "canceled" || payment.status === "expired" || payment.status === "failed") await upsertOrder({
			...order,
			status: payment.status === "expired" ? "expired" : "cancelled",
			molliePaymentId: paymentId
		});
		return new Response("OK", { status: 200 });
	} catch (e) {
		console.error("[mollie-webhook]", e);
		return new Response("Error", { status: 500 });
	}
} } } });
//#endregion
//#region src/routes/api/orders.ts
/**
* GET /api/orders
* Liste les commandes persistées.
*/
var Route$4 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
	const expected = process.env.ADMIN_SECRET;
	if (!expected || request.headers.get("x-admin-secret") !== expected) return new Response("Unauthorized", { status: 401 });
	const orders = await listOrdersFromStore();
	return new Response(JSON.stringify({ orders }), {
		status: 200,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
} } } });
//#endregion
//#region src/routes/order.success.tsx
var Route$3 = createFileRoute("/order/success")({
	validateSearch: (search) => ({
		orderId: typeof search.orderId === "string" ? search.orderId : void 0,
		method: typeof search.method === "string" ? search.method : void 0
	}),
	component: OrderSuccessPage
});
function OrderSuccessPage() {
	const { orderId, method } = Route$3.useSearch();
	const { clearCart } = useCart();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [order, setOrder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!orderId) {
			setLoading(false);
			return;
		}
		let cancelled = false;
		let attempts = 0;
		const poll = async () => {
			try {
				const res = await getOrderStatus({ data: { orderId } });
				if (!cancelled && res.found) {
					setOrder(res.order);
					if (res.order.status === "paid" || res.order.paymentMethod === "on_site") clearCart();
					if (res.order.status !== "pending_payment") {
						setLoading(false);
						return;
					}
				}
			} catch (e) {
				console.error(e);
			}
			if (!cancelled && attempts < 20) {
				attempts += 1;
				window.setTimeout(poll, 3e3);
			} else if (!cancelled) setLoading(false);
		};
		poll();
		return () => {
			cancelled = true;
		};
	}, [orderId, clearCart]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#ff705f]" })
	});
	const isPaid = order?.status === "paid";
	const isOnSite = order?.paymentMethod === "on_site" || method === "on_site";
	const isPending = order?.status === "pending_payment";
	const isFailed = order?.status === "cancelled" || order?.status === "expired";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-black/5 bg-[#f7f4ec]/90",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-[700px] items-center px-5 py-3 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
					"aria-label": "Poke N Bowl — Accueil",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-[700px] px-5 py-12 sm:px-8",
			children: !orderId || !order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-black",
					children: "Commande introuvable"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/commander",
					className: "mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
					children: "Retour à la carte"
				})]
			}) : isFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 text-center shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black",
						children: "Paiement non finalisé"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[#758079]",
						children: "Le paiement a été annulé ou a expiré. Tu peux réessayer depuis le panier."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white",
						children: "Réessayer"
					})
				]
			}) : isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 text-center shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-12 w-12 text-[#ff705f]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-3xl font-black",
						children: "Paiement en cours…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[#758079]",
						children: "Si tu as payé, cette page se mettra à jour. Sinon, retourne sur Mollie ou choisis « Payer sur place »."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-mono text-sm font-bold",
						children: order.id
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] bg-white p-8 shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-14 w-14 text-[#d7ff45]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 text-3xl font-black sm:text-4xl",
								children: isPaid ? "Commande payée !" : "Commande confirmée !"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[#758079]",
								children: [
									"Merci ",
									order.customer.name,
									".",
									" ",
									order.customer.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"On prépare ta commande pour la livraison à ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: order.customer.requestedTime }),
										"."
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										"On prépare ton bowl pour ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: order.customer.requestedTime }),
										"."
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-full bg-[#f7f4ec] px-4 py-2 font-mono text-sm font-black",
								children: order.id
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3 border-t border-black/5 pt-6",
						children: [
							order.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#f7f4ec] p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Livraison" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[#758079]",
										children: order.customer.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[#758079]",
										children: [
											order.customer.postalCode,
											" ",
											order.customer.city
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 font-bold",
										children: ["Frais de livraison : ", order.customer.deliveryFee ? `€ ${order.customer.deliveryFee.toFixed(2)}` : "Gratuits"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 text-sm",
								children: isOnSite && !isPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payer sur place" }),
									" à la récupération — €",
									" ",
									order.total.toFixed(2)
								] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payé en ligne" }),
									" — € ",
									order.total.toFixed(2)
								] })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm",
								children: order.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										item.quantity,
										"× ",
										item.name,
										item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs text-[#7a847e]",
											children: item.toppings.join(", ")
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-bold",
										children: ["€ ", (item.price * item.quantity).toFixed(2)]
									})]
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-full bg-[#10251f] px-6 py-3 text-center text-sm font-black text-white",
							children: "Retour à l'accueil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "rounded-full bg-[#ff705f] px-6 py-3 text-center text-sm font-black text-white",
							children: "Commander encore"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/routes/product/$productId.tsx
var Route$2 = createFileRoute("/product/$productId")({ component: ProductPage });
var TAG_STYLES = {
	signature: "bg-[#10251f] text-[#d7ff45]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#d7ff45] text-[#10251f]"
};
function ToppingChip({ topping, selected, disabled, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		disabled: disabled && !selected,
		"aria-pressed": selected,
		"aria-label": `${topping.name}${topping.price > 0 ? ` +${topping.price.toFixed(2)}€` : " inclus"}`,
		className: ["topping-chip relative select-none", selected ? "border-[#ff705f] bg-[#fff1ee] shadow-[0_4px_14px_-6px_rgba(255,112,95,.55)]" : disabled ? "cursor-not-allowed opacity-40" : "border-[#e8e2d9] hover:border-[#ff705f]/50"].join(" "),
		children: [
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-2.5 w-2.5 text-white",
					strokeWidth: 3
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl leading-none",
				role: "img",
				"aria-hidden": "true",
				children: topping.emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] font-bold leading-tight text-[#2e2619]",
				children: topping.name
			}),
			topping.price > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[10px] font-black text-[#ff705f]",
				children: [
					"+",
					topping.price.toFixed(2),
					"€"
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-semibold text-[#a09a92]",
				children: "inclus"
			})
		]
	});
}
function IngredientPill({ name, emoji, removable, removed, onToggle }) {
	if (!removable) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "ingredient-pill ingredient-pill--locked",
		title: "Ingrédient fixe",
		children: [emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			role: "img",
			"aria-hidden": "true",
			children: emoji
		}), name]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": removed,
		"aria-label": removed ? `Remettre ${name}` : `Retirer ${name}`,
		className: ["ingredient-pill", removed ? "ingredient-pill--removed" : ""].join(" "),
		children: [
			emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "img",
				"aria-hidden": "true",
				children: emoji
			}),
			name,
			removed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-[#ff705f]",
				children: "✕"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 shrink-0 text-[#a09a92] opacity-60" })
		]
	});
}
function QuantitySelector({ qty, onMinus, onPlus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onMinus,
				"aria-label": "Diminuer la quantité",
				className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 text-center text-lg font-black tabular-nums",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onPlus,
				"aria-label": "Augmenter la quantité",
				className: "flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
			})
		]
	});
}
function ProductPage() {
	const { productId } = Route$2.useParams();
	const product = bowls.find((b) => b.id === productId);
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [removedIngredients, setRemovedIngredients] = import_react.useState([]);
	const [extraSauce, setExtraSauce] = import_react.useState(false);
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	if (productId === "sur-mesure") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/sur-mesure",
		replace: true
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec] px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-4 text-3xl font-black",
				children: t("product.not_found")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/commander",
				className: "text-[#ff705f] underline font-bold",
				children: t("product.back")
			})]
		})
	});
	const productOk = available(product.id);
	const isCrousty = product.id.startsWith("crousty-");
	const toppingExtra = selectedToppings.reduce((sum, tid) => {
		return sum + (toppings.find((t) => t.id === tid || t.name === tid)?.price ?? 0);
	}, 0);
	const extraSaucePrice = isCrousty && extraSauce ? 1 : 0;
	const unitPrice = product.price + toppingExtra + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleTopping = (topping) => {
		setSelectedToppings((cur) => cur.includes(topping.name) ? cur.filter((t) => t !== topping.name) : [...cur, topping.name]);
	};
	const toggleIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const options = [...selectedToppings.map((t) => "Topping : " + t), ...isCrousty && extraSauce ? ["Sauce extra +1€"] : []];
		addItem({
			id: product.id,
			name: product.name,
			basePrice: product.price,
			price: unitPrice,
			quantity: qty,
			toppings: options,
			removedIngredients
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1800);
		setIsCartOpen(true);
	};
	const removableIngredients = product.ingredients.filter((i) => i.removable);
	const fixedIngredients = product.ingredients.filter((i) => !i.removable);
	const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden rounded-full border border-black/10 bg-white p-1 sm:flex",
							children: [
								"fr",
								"en",
								"nl"
							].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLanguage(lang),
								className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#10251f] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
								children: lang
							}, lang))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							className: "relative rounded-full bg-[#10251f] p-2.5 text-white transition hover:bg-[#1e3d33]",
							"aria-label": t("cart.title"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
								children: cartItemsCount
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-32 sm:px-6 sm:pb-10 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "mb-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#7a847e] transition hover:text-[#17231f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("product.back")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-lift sm:rounded-[36px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: product.id,
								alt: product.name,
								priority: true,
								className: `h-full w-full object-cover transition duration-700 ${!productOk ? "grayscale" : ""}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `badge-tag absolute left-4 top-4 shadow-card ${tagStyle}`,
								children: productOk ? product.tag : t("cmd.sold_out")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black text-[#10251f] shadow-card",
								children: ["€ ", product.price.toFixed(2)]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-black leading-tight sm:text-4xl",
								children: product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[15px] leading-relaxed text-[#68756f]",
								children: product.desc
							})] }),
							product.menuNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#a96b0d]/20 bg-[#ead9bb]/40 px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-black text-[#8f5b12]",
									children: product.menuNote
								})
							}),
							!productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 px-4 py-3 text-sm font-bold text-[#ff705f]",
								children: t("product.unavailable")
							}),
							productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"aria-labelledby": "composition-title",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												id: "composition-title",
												className: "text-base font-black text-[#17231f]",
												children: "Composition du bowl"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold text-[#a09a92]",
												children: isCrousty ? "Recette signature" : "Recette originale"
											})]
										}),
										fixedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#a09a92]",
												children: "Inclus · non modifiables"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: fixedIngredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngredientPill, {
													name: ing.name,
													emoji: ing.emoji,
													removable: false,
													removed: false
												}, ing.name))
											})]
										}),
										removableIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff705f]",
												children: "Retirer un ingrédient — appuie pour supprimer"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: removableIngredients.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngredientPill, {
													name: ing.name,
													emoji: ing.emoji,
													removable: true,
													removed: removedIngredients.includes(ing.name),
													onToggle: () => toggleIngredient(ing.name)
												}, ing.name))
											}),
											removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-[11px] font-bold text-[#ff705f]",
												children: ["Retiré : ", removedIngredients.join(", ")]
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									"aria-labelledby": "toppings-title",
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												id: "toppings-title",
												className: "text-base font-black text-[#17231f]",
												children: "Ajoute des toppings"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[11px] text-[#a09a92]",
												children: "Sélection libre · choisis tous les toppings que tu aimes"
											})] }), selectedToppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#ff705f]/10 px-3 py-1 text-[10px] font-black text-[#ff705f]",
												children: [
													selectedToppings.length,
													" sélectionné",
													selectedToppings.length > 1 ? "s" : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2 sm:grid-cols-3",
											children: toppings.filter((t) => t.available).map((topping) => {
												const selected = selectedToppings.includes(topping.name);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToppingChip, {
													topping,
													selected,
													disabled: false,
													onToggle: () => toggleTopping(topping)
												}, topping.id);
											})
										}),
										isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setExtraSauce((v) => !v),
											"aria-pressed": extraSauce,
											className: ["mt-3 flex w-full items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm font-black transition", extraSauce ? "border-[#ff705f] bg-[#fff1ee] text-[#ff705f]" : "border-[#e8e2d9] bg-white text-[#2e2619] hover:border-[#ff705f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sauce extra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+1.00€" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-[20px] border border-[#e8e2d9] bg-white p-4 shadow-card sm:p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantitySelector, {
											qty,
											onMinus: () => setQty((q) => Math.max(1, q - 1)),
											onPlus: () => setQty((q) => Math.min(20, q + 1))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-[0.14em] text-[#a09a92]",
												children: qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix total"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-2xl font-black text-[#17231f]",
												children: ["€ ", totalPrice.toFixed(2)]
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden sm:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: handleAddToCart,
										className: ["btn-primary w-full", added ? "bg-[#10251f]" : ""].join(" "),
										children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }),
											"Ajouter au panier · € ",
											totalPrice.toFixed(2)
										] })
									})
								})
							] })
						]
					})]
				})]
			}),
			productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-[#f7f4ec]/95 p-3 backdrop-blur-xl sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleAddToCart,
					className: ["btn-primary w-full", added ? "bg-[#10251f]" : ""].join(" "),
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }),
						"Ajouter · € ",
						totalPrice.toFixed(2)
					] })
				})
			})
		]
	});
}
//#endregion
//#region src/routes/api/printer/ack.ts
var ackSchema = objectType({
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().max(500).optional()
});
function authorized$1(request) {
	const expected = process.env.PRINTER_AGENT_SECRET;
	return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}
var Route$1 = createFileRoute("/api/printer/ack")({ server: { handlers: { POST: async ({ request }) => {
	if (!authorized$1(request)) return new Response("Unauthorized", { status: 401 });
	try {
		const data = ackSchema.parse(await request.json());
		await acknowledgePrint(data.orderId, data.success, data.error);
		return new Response(JSON.stringify({ ok: true }), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
	} catch (error) {
		console.error("[printer-ack]", error);
		return new Response("Invalid printer acknowledgement", { status: 400 });
	}
} } } });
//#endregion
//#region src/routes/api/printer/queue.ts
function authorized(request) {
	const expected = process.env.PRINTER_AGENT_SECRET;
	return Boolean(expected && request.headers.get("x-printer-secret") === expected);
}
var Route = createFileRoute("/api/printer/queue")({ server: { handlers: { GET: async ({ request }) => {
	if (!authorized(request)) return new Response("Unauthorized", { status: 401 });
	try {
		const order = await claimNextPrintJob();
		return new Response(JSON.stringify({ job: order ?? null }), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		console.error("[printer-queue]", error);
		return new Response("Printer queue unavailable", { status: 500 });
	}
} } } });
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$12.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	CheckoutRoute: Route$11.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$13
	}),
	CommanderRoute: Route$10.update({
		id: "/commander",
		path: "/commander",
		getParentRoute: () => Route$13
	}),
	ContactRoute: Route$9.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$13
	}),
	RecrutementRoute: Route$8.update({
		id: "/recrutement",
		path: "/recrutement",
		getParentRoute: () => Route$13
	}),
	SurMesureRoute: Route$7.update({
		id: "/sur-mesure",
		path: "/sur-mesure",
		getParentRoute: () => Route$13
	}),
	AdminStocksRoute: Route$6.update({
		id: "/admin/stocks",
		path: "/admin/stocks",
		getParentRoute: () => Route$13
	}),
	ApiMollieWebhookRoute: Route$5.update({
		id: "/api/mollie-webhook",
		path: "/api/mollie-webhook",
		getParentRoute: () => Route$13
	}),
	ApiOrdersRoute: Route$4.update({
		id: "/api/orders",
		path: "/api/orders",
		getParentRoute: () => Route$13
	}),
	OrderSuccessRoute: Route$3.update({
		id: "/order/success",
		path: "/order/success",
		getParentRoute: () => Route$13
	}),
	ProductProductIdRoute: Route$2.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$13
	}),
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$13
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$13
	})
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
