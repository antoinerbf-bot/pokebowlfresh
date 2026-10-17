import { i as __toESM } from "../_runtime.mjs";
import { r as createServerFn } from "../_libs/@tanstack/react-start+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Navigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, s as Scripts, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { A as ExternalLink, B as ChefHat, C as Menu, D as Heart, E as Instagram, F as CircleCheckBig, G as ArrowRight, H as BriefcaseBusiness, I as CircleAlert, K as ArrowLeft, L as ChevronRight, M as CookingPot, N as Clock, O as Funnel, P as CircleCheck, R as ChevronLeft, S as MessageCircle, T as LoaderCircle, U as Bell, V as Check, W as Award, _ as Plus, a as TriangleAlert, b as Navigation, c as Star, d as ShoppingBag, f as Shield, g as Printer, h as RefreshCw, i as Truck, j as CreditCard, k as Flame, l as Sparkles, m as Search, n as VolumeX, o as Trash2, p as ShieldCheck, r as Volume2, s as Store, t as X, u as ShoppingCart, v as Phone, w as MapPin, x as Minus, y as PhoneCall, z as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { a as numberType, i as literalType, n as booleanType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import crypto$1 from "node:crypto";
import fs from "node:fs";
import path from "node:path";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-C7WeyOMO.css";
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
var Route$20 = createRootRouteWithContext()({
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
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
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
	const { queryClient } = Route$20.useRouteContext();
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
	const containerSizes = {
		sm: "px-3 py-1.5",
		md: "px-4 py-2 sm:px-5 sm:py-2.5",
		lg: "px-6 py-3 sm:px-7 sm:py-3.5"
	}[size];
	const textSizes = {
		sm: "text-xs sm:text-sm tracking-[0.14em]",
		md: "text-sm sm:text-base md:text-lg tracking-[0.16em]",
		lg: "text-lg sm:text-xl md:text-2xl tracking-[0.18em]"
	}[size];
	const circleSizes = {
		sm: "h-5 w-5 text-[10px] border-[1.5px]",
		md: "h-6 w-6 sm:h-7 sm:w-7 text-xs border-[2px]",
		lg: "h-7 w-7 sm:h-8 sm:w-8 text-sm border-[2.5px]"
	}[size];
	const subtextSizes = {
		sm: "text-[7px] tracking-[0.22em] mt-0.5",
		md: "text-[8px] sm:text-[9px] tracking-[0.26em] mt-1",
		lg: "text-[10px] sm:text-[11px] tracking-[0.3em] mt-1.5"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex flex-col items-center justify-center rounded-2xl bg-[#2C1D16] shadow-md border border-white/15 transition duration-200 select-none ${containerSizes} ${className}`,
		style: { boxShadow: "0 4px 20px -2px rgba(44, 29, 22, 0.45)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center gap-2 sm:gap-2.5 leading-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-black text-white uppercase ${textSizes}`,
					children: "POKE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `flex shrink-0 items-center justify-center rounded-full border-white font-black text-white ${circleSizes}`,
					children: "N"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-black text-white uppercase ${textSizes}`,
					children: "BOWL"
				})
			]
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-black uppercase text-[#EADCC9] text-center w-full leading-none ${subtextSizes}`,
			children: "SUR MESURE"
		})]
	});
}
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
//#region src/assets/bowl-sweet-chicken.jpg
var bowl_sweet_chicken_default = "/assets/bowl-sweet-chicken-T1JJVtIT.jpg";
//#endregion
//#region src/assets/bowl-scampis.jpg
var bowl_scampis_default = "/assets/bowl-scampis-DlEe1YXf.jpg";
//#endregion
//#region src/assets/bowl-saumon.jpg
var bowl_saumon_default = "/assets/bowl-saumon-CRYVYQxR.jpg";
//#endregion
//#region src/assets/bowl-spicy-chicken.jpg
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-B-7nVWlP.jpg";
//#endregion
//#region src/assets/bowl-crousty-curry.jpg
var bowl_crousty_curry_default = "/assets/bowl-crousty-curry-CRZGKMUK.jpg";
//#endregion
//#region src/components/DishImage.tsx
var images = {
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
	"crousty-chicken-curry": bowl_crousty_curry_default,
	"crousty-chicken-sauce-blanche": "/assets/bowl-crousty-blanche-BliNigHA.jpg",
	"sur-mesure": bowl_saumon_default
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
	"Riz à sushi",
	"Riz brun",
	"Pâtes",
	"Nachos",
	"Salade"
];
var detailedBases = [
	{
		id: "riz-sushi",
		name: "Riz à sushi",
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
var bowlSizes = [{
	id: "moyen",
	name: "Moyen",
	extraPrice: 0,
	description: "Format régulier généreux (10 €)"
}, {
	id: "grand",
	name: "Grand",
	extraPrice: 3,
	description: "Grand format maxi faim (+3.00€ · 13 €)"
}];
var bowls = [
	{
		id: "sweet-chicken",
		name: "Sweet Chicken",
		price: 10,
		desc: "Guacamole, maïs, tomates cerises, mangue, feta, poulet maison, sauce teriyaki, oignons croustillants, sésame mix.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Teriyaki",
		tag: "Best-seller",
		tagColor: "bestseller",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Poulet maison",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Guacamole",
				emoji: "🥑",
				removable: true,
				isMixIn: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true,
				isMixIn: true
			},
			{
				name: "Tomates cerises",
				emoji: "🍅",
				removable: true,
				isMixIn: true
			},
			{
				name: "Mangue",
				emoji: "🥭",
				removable: true,
				isMixIn: true
			},
			{
				name: "Feta",
				emoji: "🧀",
				removable: true,
				isMixIn: true
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
				removable: true,
				isTopping: true
			},
			{
				name: "Sésame mix",
				emoji: "🌱",
				removable: true,
				isTopping: true
			}
		]
	},
	{
		id: "scampis-royaux",
		name: "Scampis Royal",
		price: 10,
		desc: "Guacamole, edamame, tomates, concombre, poivrons, scampis, spicy mayo, jalapeños, flocons de chili.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Spicy-Mayo",
		tag: "Signature",
		tagColor: "signature",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Scampis",
				emoji: "🦐",
				removable: true,
				isProtein: true
			},
			{
				name: "Guacamole",
				emoji: "🥑",
				removable: true,
				isMixIn: true
			},
			{
				name: "Edamame",
				emoji: "🫘",
				removable: true,
				isMixIn: true
			},
			{
				name: "Tomates",
				emoji: "🍅",
				removable: true,
				isMixIn: true
			},
			{
				name: "Concombre",
				emoji: "🥒",
				removable: true,
				isMixIn: true
			},
			{
				name: "Poivrons",
				emoji: "🫑",
				removable: true,
				isMixIn: true
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
				removable: true,
				isTopping: true
			},
			{
				name: "Flocons de chili",
				emoji: "🔥",
				removable: true,
				isTopping: true
			}
		]
	},
	{
		id: "saumon-wasabi",
		name: "Saumon Wasabi",
		price: 11,
		desc: "Avocat, salade d'algues, mangue, maïs, edamame, saumon noble, mayo wasabi, sésame mix.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Mayo-Wasabi",
		tag: "Premium",
		tagColor: "premium",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Saumon",
				emoji: "🐟",
				removable: true,
				isProtein: true
			},
			{
				name: "Avocat",
				emoji: "🥑",
				removable: true,
				isMixIn: true
			},
			{
				name: "Salade d'algues",
				emoji: "🌿",
				removable: true,
				isMixIn: true
			},
			{
				name: "Mangue",
				emoji: "🥭",
				removable: true,
				isMixIn: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true,
				isMixIn: true
			},
			{
				name: "Edamame",
				emoji: "🫘",
				removable: true,
				isMixIn: true
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
				removable: true,
				isTopping: true
			}
		]
	},
	{
		id: "spicy-chicken",
		name: "Spicy Chicken",
		price: 10,
		desc: "Avocat, patates douces, maïs, jalapeños, feta, poulet maison, spicy mayo, flocons de chili, sésame mix.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Spicy-Mayo",
		tag: "Épicé",
		tagColor: "spicy",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Poulet maison",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Avocat",
				emoji: "🥑",
				removable: true,
				isMixIn: true
			},
			{
				name: "Patates douces",
				emoji: "🍠",
				removable: true,
				isMixIn: true
			},
			{
				name: "Maïs",
				emoji: "🌽",
				removable: true,
				isMixIn: true
			},
			{
				name: "Jalapeños",
				emoji: "🌶️",
				removable: true,
				isMixIn: true
			},
			{
				name: "Feta",
				emoji: "🧀",
				removable: true,
				isMixIn: true
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
				removable: true,
				isTopping: true
			},
			{
				name: "Sésame mix",
				emoji: "🌱",
				removable: true,
				isTopping: true
			}
		]
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Curry",
		price: 11,
		desc: "Petits morceaux de poulet croustillant dorés, sauce curry onctueuse maison bien généreuse, oignons frits croustillants et riz à sushi chaud. Formule : boisson 33cl incluse.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Sauce curry",
		tag: "Formule 11€",
		tagColor: "bestseller",
		menuNote: "Formule 11€ avec boisson 33cl incluse au choix. Petits morceaux de poulet croustillants et dorés.",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Petits morceaux de poulet croustillant",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Sauce curry onctueuse",
				emoji: "🍛",
				removable: true,
				isSauce: true
			},
			{
				name: "Oignons frits croustillants",
				emoji: "🧅",
				removable: true,
				isTopping: true
			}
		]
	},
	{
		id: "crousty-chicken-sauce-blanche",
		name: "Crousty Chicken Sauce Blanche",
		price: 11,
		desc: "Petits morceaux de poulet croustillant dorés, sauce blanche onctueuse maison nappée généreusement, oignons frits croustillants et riz à sushi chaud. Formule : boisson 33cl incluse.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Sauce blanche",
		tag: "Formule 11€",
		tagColor: "bestseller",
		menuNote: "Formule 11€ avec boisson 33cl incluse au choix. Petits morceaux de poulet croustillants et dorés.",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Petits morceaux de poulet croustillant",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Sauce blanche maison",
				emoji: "🤍",
				removable: true,
				isSauce: true
			},
			{
				name: "Oignons frits croustillants",
				emoji: "🧅",
				removable: true,
				isTopping: true
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
		name: "Fanta Orange (33 cl)",
		price: 2
	},
	{
		id: "ice-tea",
		name: "Lipton Ice-Tea Pêche (33 cl)",
		price: 2
	},
	{
		id: "eau-plate",
		name: "SPA Reine Eau plate (50 cl)",
		price: 2
	},
	{
		id: "eau-gaz",
		name: "SPA Intense Eau pétillante (50 cl)",
		price: 2
	}
];
var desserts = [
	{
		id: "tira-oreo",
		name: "Tiramisu Oreo",
		price: 4,
		soldOut: false
	},
	{
		id: "tira-nutella",
		name: "Tiramisu Nutella",
		price: 4,
		soldOut: true
	},
	{
		id: "tira-spec",
		name: "Tiramisu Spéculoos",
		price: 4,
		soldOut: false
	}
];
//#endregion
//#region src/assets/tiramisu-speculoos.jpg
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
//#endregion
//#region src/assets/tiramisu-nutella.jpg
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
//#endregion
//#region src/assets/drink-coca-cola.jpg
var drink_coca_cola_default = "/assets/drink-coca-cola-D83foBG1.jpg";
//#endregion
//#region src/assets/drink-eau-gazeuse.jpg
var drink_eau_gazeuse_default = "/assets/drink-eau-gazeuse-CayWkPyq.jpg";
//#endregion
//#region src/assets/drink-eau-plate.jpg
var drink_eau_plate_default = "/assets/drink-eau-plate-B76aUhfx.jpg";
//#endregion
//#region src/components/CartDrawer.tsx
var CROSS_SELL_ITEMS = [
	{
		id: "tira-spec",
		name: "Tiramisu Spéculoos Maison",
		price: 4,
		emoji: "🧁",
		image: tiramisu_speculoos_default,
		subtitle: "Artisanal · Lotus"
	},
	{
		id: "tira-nutella",
		name: "Tiramisu Nutella Maison",
		price: 4,
		emoji: "🍫",
		image: tiramisu_nutella_default,
		subtitle: "Fondant & Gourmand"
	},
	{
		id: "coca",
		name: "Coca-Cola 33cl",
		price: 2,
		emoji: "🥤",
		image: drink_coca_cola_default,
		subtitle: "Servi givré"
	},
	{
		id: "eau-gaz",
		name: "SPA Intense 50cl",
		price: 2,
		emoji: "🫧",
		image: drink_eau_gazeuse_default,
		subtitle: "Eau pétillante"
	},
	{
		id: "eau-plate",
		name: "SPA Reine 50cl",
		price: 2,
		emoji: "💧",
		image: drink_eau_plate_default,
		subtitle: "Eau plate"
	}
];
var FREE_DELIVERY_THRESHOLD = 50;
function CartDrawer() {
	const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, addItem, total } = useCart();
	const { t } = useTranslation();
	const diffToFree = Math.max(0, FREE_DELIVERY_THRESHOLD - total);
	const progressPercent = Math.min(100, Math.round(total / FREE_DELIVERY_THRESHOLD * 100));
	const handleQuickAddCrossSell = (item) => {
		addItem({
			id: `${item.id}-${Date.now()}`,
			name: item.name,
			basePrice: item.price,
			price: item.price,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: isCartOpen,
		onOpenChange: setIsCartOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col bg-[#f7f4ec] p-0 sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "border-b border-black/5 bg-white px-6 py-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
						className: "flex items-center gap-2 text-base font-black text-[#17231f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5 text-[#ff705f]" }), t("cart.title")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9]",
						children: [
							items.reduce((s, i) => s + i.quantity, 0),
							" ",
							items.length > 1 ? "articles" : "article"
						]
					})]
				}), items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs font-bold mb-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5 text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), diffToFree === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-black text-emerald-700",
								children: "🎉 Livraison offerte à Visé !"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Plus que",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
									className: "text-[#ff705f]",
									children: [diffToFree.toFixed(2), " €"]
								}),
								" ",
								"pour la livraison offerte"
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-black text-[#7a847e]",
							children: [progressPercent, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 w-full overflow-hidden rounded-full bg-black/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full transition-all duration-500 rounded-full ${diffToFree === 0 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "bg-[#ff705f]"}`,
							style: { width: `${progressPercent}%` }
						})
					})]
				})]
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
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col divide-y divide-black/5 px-6",
					children: items.map((item) => {
						const isBowl = bowls.some((b) => b.id === item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 py-4",
							children: [isBowl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
									dishId: item.id,
									alt: item.name,
									className: "h-full w-full object-cover"
								})
							}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: item.name,
								className: "h-16 w-16 shrink-0 rounded-2xl object-cover shadow-sm"
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
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm",
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
												className: "flex h-7 w-7 items-center justify-center rounded-full border border-[#e8e2d9] bg-white transition hover:border-[#ff705f] hover:text-[#ff705f] shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
											})
										]
									})]
								})]
							})]
						}, `${item.id}-${JSON.stringify(item.toppings)}-${JSON.stringify(item.removedIngredients)}`);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-6 my-4 rounded-2xl bg-white border border-black/5 p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Envie d'une douceur ou d'une boisson ?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#7a847e]",
							children: "1 clic"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2.5 overflow-x-auto no-scrollbar pb-1",
						children: CROSS_SELL_ITEMS.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => handleQuickAddCrossSell(cs),
							className: "group flex flex-col items-center justify-between rounded-xl bg-[#faf8f4] border border-black/5 p-2 w-28 shrink-0 text-center transition hover:border-[#ff705f] hover:bg-white hover:scale-[1.02] shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative h-12 w-12 overflow-hidden rounded-lg bg-[#eee8dc]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: cs.image,
										alt: cs.name,
										className: "h-full w-full object-cover transition group-hover:scale-110"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 text-[10px] font-extrabold leading-tight text-[#17231f] line-clamp-1",
									children: cs.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-[#7a847e]",
									children: cs.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 flex items-center gap-1 rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] group-hover:bg-[#ff705f] group-hover:text-white transition",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-2.5 w-2.5" }),
										cs.price.toFixed(2),
										" €"
									]
								})
							]
						}, cs.id))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-black/5 bg-white px-6 pb-safe pt-4 shadow-[0_-12px_30px_-15px_rgba(0,0,0,.08)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between text-[11px] font-semibold text-[#5a6760] bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-emerald-600" }), "Prêt en 15-20 min"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 text-emerald-600" }), "Fait minute à Visé"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-[#7a847e]",
							children: "Sous-total commande"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-[#a09a92]",
							children: "TVA incluse"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-black text-[#17231f]",
							children: ["€ ", total.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						onClick: () => setIsCartOpen(false),
						className: "btn-primary flex items-center justify-center gap-2 w-full text-center no-underline py-4 text-sm font-black uppercase tracking-wider shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("cart.checkout") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-center text-[10px] font-semibold text-[#a09a92]",
						children: "Paiement sécurisé en ligne ou sur place · Avenue du Pont 12, Visé"
					})
				]
			})] })]
		})
	});
}
//#endregion
//#region src/components/CroustyNotificationToast.tsx
var NOTIFICATIONS = [
	{
		id: "crousty-curry",
		tag: "Spécialité Chaude",
		tagColor: "bg-[#8b5510]/80 text-[#ffe2a8] border border-[#ffaa33]/30",
		title: "Crousty Chicken Curry",
		desc: "Poulet croustillant doré, curry maison & oignons frits. Boisson 33cl incluse !",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🍗",
		productId: "crousty-chicken-curry"
	},
	{
		id: "crousty-blanche",
		tag: "Nouveau au Menu",
		tagColor: "bg-white/10 text-[#F6F1E9] border border-white/20",
		title: "Crousty Sauce Blanche",
		desc: "Bouchées croustillantes dorées, sauce blanche onctueuse & oignons frits.",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Étudiant",
		tagColor: "bg-[#ff705f]/20 text-[#ffb0a3] border border-[#ff705f]/40",
		title: "Menu Crousty + Boisson 11 €",
		desc: "1 Crousty Chicken chaud au choix + boisson 33cl fraîche incluse (Coca, Ice-Tea...).",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🎓",
		productId: "crousty-chicken-curry"
	}
];
function CroustyNotificationToast() {
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(0);
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const [isDismissed, setIsDismissed] = (0, import_react.useState)(false);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initialTimer = setTimeout(() => {
			if (!isDismissed) setIsVisible(true);
		}, 4e3);
		return () => clearTimeout(initialTimer);
	}, [isDismissed]);
	(0, import_react.useEffect)(() => {
		if (!isVisible || isHovered) return;
		const hideTimer = setTimeout(() => {
			setIsVisible(false);
			const nextTimer = setTimeout(() => {
				if (!isDismissed) {
					setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
					setIsVisible(true);
				}
			}, 1e4);
			return () => clearTimeout(nextTimer);
		}, 7e3);
		return () => clearTimeout(hideTimer);
	}, [
		isVisible,
		isHovered,
		isDismissed
	]);
	const activeNotif = NOTIFICATIONS[currentIndex];
	const handleDismiss = (e) => {
		e.stopPropagation();
		setIsVisible(false);
		setIsDismissed(true);
		setTimeout(() => setIsDismissed(false), 6e4);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 right-3 z-40 max-w-[calc(100vw-24px)] pointer-events-none sm:bottom-6 sm:right-6 sm:max-w-[340px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				x: 40,
				scale: .92
			},
			animate: {
				opacity: 1,
				x: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				x: 30,
				scale: .92
			},
			transition: {
				type: "spring",
				damping: 26,
				stiffness: 300
			},
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			className: "pointer-events-auto relative overflow-hidden rounded-2xl border border-white/15 bg-[#231711]/85 p-3 sm:p-4 text-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl transition hover:border-[#ff705f]/40 hover:bg-[#231711]/92",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[#ff705f]/20 blur-xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					"aria-label": "Fermer la notification",
					className: "absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex sm:hidden items-center gap-2.5 pr-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/product/$productId",
						params: { productId: activeNotif.productId },
						onClick: () => setIsVisible(false),
						className: "flex items-center gap-2.5 flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-black/20 border border-white/10 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: activeNotif.dishId,
								alt: activeNotif.title,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-1 -right-1 text-[10px]",
								children: activeNotif.badgeEmoji
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-black text-white truncate",
									children: activeNotif.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold text-[#ff9f43]",
									children: activeNotif.price
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[10px] text-[#D9C5AD] flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Boisson 33cl incluse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#ff705f] font-bold",
									children: "→ Voir"
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden sm:flex items-start gap-3 pr-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-black/30 border border-white/10 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
							dishId: activeNotif.dishId,
							alt: activeNotif.title,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#231711] text-[9px] border border-white/20",
							children: activeNotif.badgeEmoji
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider ${activeNotif.tagColor}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-2.5 w-2.5 text-[#ff705f]" }), activeNotif.tag]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold text-[#ffb088]",
									children: activeNotif.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-xs font-black text-[#F6F1E9] leading-snug",
								children: activeNotif.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[10.5px] leading-relaxed text-[#D9C5AD]/85 line-clamp-2",
								children: activeNotif.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: activeNotif.productId },
									onClick: () => setIsVisible(false),
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f] px-3 py-1 text-[9.5px] font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff5542] hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Commander (",
										activeNotif.price,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-2.5 w-2.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-semibold text-[#D9C5AD]/70",
									children: "Boisson incluse"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-0.5 w-full overflow-hidden rounded-full bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { width: "100%" },
						animate: { width: isHovered ? "100%" : "0%" },
						transition: {
							duration: 7,
							ease: "linear"
						},
						className: "h-full bg-[#ff705f]"
					})
				})
			]
		}) })
	});
}
//#endregion
//#region src/components/NotificationBellMenu.tsx
function NotificationBellMenu() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [hasUnread, setHasUnread] = (0, import_react.useState)(true);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
		}
		if (isOpen) document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);
	const handleToggle = () => {
		setIsOpen((prev) => !prev);
		if (!isOpen) setHasUnread(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: menuRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			id: "bell-icon",
			type: "button",
			onClick: handleToggle,
			"aria-label": "Afficher les nouveautés et offres",
			"aria-expanded": isOpen,
			className: "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40 hover:scale-105 active:scale-95",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4.5 w-4.5" }), hasUnread && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-1.5 right-1.5 flex h-2.5 w-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff705f] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff705f]" })]
			})]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 top-12 z-50 w-[340px] sm:w-[380px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-black/5 bg-[#2C1D16] px-5 py-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#EADCC9] text-xs font-black text-[#2C1D16]",
							children: "🔔"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-extrabold",
							children: "Nouveautés & Offres"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-white/70",
							children: "Poke N Bowl Visé"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsOpen(false),
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/75 hover:bg-white/20 hover:text-white transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[380px] overflow-y-auto p-3 space-y-2.5",
					children: [
						{
							id: "notif-crousty",
							tag: "Spécialité Chaude",
							tagColor: "bg-[#8b5510] text-white",
							title: "Crousty Chicken Curry & Blanche",
							desc: "Poulet pané ultra croustillant, oignons frits. Boisson 33cl incluse au choix !",
							dishId: "crousty-chicken-curry",
							price: "11,00 €",
							badge: "Formule Étudiant",
							link: "/product/crousty-chicken-curry"
						},
						{
							id: "notif-saumon",
							tag: "Best-Seller",
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
							title: "Poké Bowls Frais du Jour",
							desc: "5 recettes signatures préparées à la commande : Saumon Wasabi, Sweet Chicken, Scampis Royal...",
							dishId: "bowl-saumon",
							price: "Dès 10,00 €",
							badge: "100% Frais",
							link: "/#carte"
						},
						{
							id: "notif-custom",
							tag: "Création",
							tagColor: "bg-[#ff705f] text-white",
							title: "Composez votre Bowl Sur-Mesure",
							desc: "Choisissez votre base, 5 mix-ins frais inclus, votre protéine et votre sauce maison.",
							dishId: "bowl-sweet-chicken",
							price: "Dès 10,00 €",
							badge: "Personnalisable",
							link: "/sur-mesure"
						}
					].map((notif) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: notif.link,
						onClick: () => setIsOpen(false),
						className: "group flex items-start gap-3 rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#ece8dc]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: notif.dishId === "bowl-saumon" ? "saumon-wasabi" : notif.dishId === "bowl-sweet-chicken" ? "sweet-chicken" : notif.dishId,
								alt: notif.title,
								className: "h-full w-full object-cover transition group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${notif.tagColor}`,
										children: notif.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-extrabold text-[#2C1D16]",
										children: notif.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 text-xs font-extrabold text-[#2C1D16] group-hover:text-[#ff705f] transition",
									children: notif.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[11px] leading-tight text-[#68756f] line-clamp-2",
									children: notif.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1.5 flex items-center gap-1 text-[10px] font-bold text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Découvrir" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-2.5 w-2.5 group-hover:translate-x-0.5 transition" })]
								})
							]
						})]
					}, notif.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-black/5 bg-[#faf8f4] p-3 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						onClick: () => setIsOpen(false),
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2C1D16] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f]",
						children: ["Voir toute la carte en ligne", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/assets/tiramisu-oreo.jpg
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
//#endregion
//#region src/assets/drink-coca-zero.jpg
var drink_coca_zero_default = "/assets/drink-coca-zero-eyT1b9_N.jpg";
//#endregion
//#region src/assets/drink-ice-tea.jpg
var drink_ice_tea_default = "/assets/drink-ice-tea-CZgyxPov.jpg";
//#endregion
//#region src/components/PokawaMegaMenu.tsx
var CATEGORIES$1 = [
	{
		id: "pokes",
		label: "Pokés Signatures",
		badge: "Bols en Bambou",
		icon: "🥗",
		sub: "Dès 10 € · Saumon & Poulet frais"
	},
	{
		id: "crousty",
		label: "Crousty Chicken",
		badge: "Formule 11 €",
		icon: "🍗",
		sub: "Chaud · Boisson 33cl offerte"
	},
	{
		id: "composer",
		label: "Atelier Sur-Mesure",
		badge: "100% Personnalisé",
		icon: "🥣",
		sub: "Base + Protéine + 5 Mix-ins"
	},
	{
		id: "desserts",
		label: "Tiramisus Maison",
		badge: "Artisanal",
		icon: "🧁",
		sub: "4,00 € · Spéculoos, Nutella, Oreo"
	},
	{
		id: "boissons",
		label: "Boissons Fraîches",
		badge: "Extra Frais",
		icon: "🥤",
		sub: "2,00 € · Canettes & Eaux SPA"
	}
];
function PokawaMegaMenu({ isOpen, onClose }) {
	const [activeCat, setActiveCat] = import_react.useState("pokes");
	const [addedDishId, setAddedDishId] = import_react.useState(null);
	const { addItem, setIsCartOpen } = useCart();
	const handleQuickAdd = (dish, isCrousty = false) => {
		addItem({
			id: `${dish.id}-mega`,
			name: dish.name,
			basePrice: dish.price,
			price: dish.price,
			quantity: 1,
			toppings: isCrousty ? ["Boisson 33cl incluse"] : [],
			removedIngredients: [],
			image: dish.image
		});
		setAddedDishId(dish.id);
		setTimeout(() => setAddedDishId(null), 1500);
		setIsCartOpen(true);
	};
	const pokesList = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyList = bowls.filter((b) => b.id.startsWith("crousty-"));
	const dessertItems = [
		{
			id: "tira-spec",
			name: "Tiramisu Spéculoos",
			price: 4,
			desc: "Véritables biscuits Lotus & mascarpone artisanal.",
			image: tiramisu_speculoos_default
		},
		{
			id: "tira-nutella",
			name: "Tiramisu Nutella",
			price: 4,
			desc: "Nutella coulant & éclats de noisettes.",
			image: tiramisu_nutella_default
		},
		{
			id: "tira-oreo",
			name: "Tiramisu Oreo",
			price: 4,
			desc: "Biscuits Oreo noir et crème fouettée.",
			image: tiramisu_oreo_default
		}
	];
	const drinkItems = [
		{
			id: "coca",
			name: "Coca-Cola 33cl",
			price: 2,
			desc: "Servi givré.",
			image: drink_coca_cola_default
		},
		{
			id: "coca-zero",
			name: "Coca-Cola Zéro 33cl",
			price: 2,
			desc: "Zéro sucre, ultra frais.",
			image: drink_coca_zero_default
		},
		{
			id: "ice-tea",
			name: "Ice-Tea Pêche 33cl",
			price: 2,
			desc: "Lipton pêche pétillant.",
			image: drink_ice_tea_default
		},
		{
			id: "eau-gaz",
			name: "SPA Intense 50cl",
			price: 2,
			desc: "Eau pétillante de source.",
			image: drink_eau_gazeuse_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: -8,
			scale: .98
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: -8,
			scale: .98
		},
		transition: {
			duration: .22,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[94vw] max-w-[1100px] z-50 pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[32px] bg-[#fffaf2]/95 backdrop-blur-2xl border border-white/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] text-[#2C1D16]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-black/5 bg-[#faf4ea] px-6 py-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-black uppercase tracking-wider text-[#2C1D16]",
						children: "La Carte Pokawa-Style · Poke N Bowl Visé"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-[#758079] font-medium text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Avenue du Pont 12, Visé" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-emerald-700 font-bold",
							children: "100% Fait Minute"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#carte",
							onClick: onClose,
							className: "font-black uppercase tracking-wider text-[#2431eb] hover:underline",
							children: "Voir toute la carte →"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-[280px_1fr] min-h-[380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-r border-black/5 p-4 space-y-1 bg-[#f9f3e9]/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#7a847e]",
							children: "Catégories"
						}),
						CATEGORIES$1.map((cat) => {
							const isActive = activeCat === cat.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onMouseEnter: () => setActiveCat(cat.id),
								onClick: () => {
									setActiveCat(cat.id);
									const el = document.getElementById(cat.id === "composer" ? "composer" : "carte");
									if (el) el.scrollIntoView({ behavior: "smooth" });
									onClose();
								},
								className: `group w-full flex items-center justify-between rounded-2xl p-3 text-left transition duration-200 ${isActive ? "bg-[#2C1D16] text-white shadow-md scale-[1.02]" : "hover:bg-black/5 text-[#2C1D16]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl group-hover:scale-110 transition-transform",
										children: cat.icon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-black uppercase tracking-wide",
											children: cat.label
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `text-[10px] font-medium ${isActive ? "text-white/70" : "text-[#7a847e]"}`,
										children: cat.sub
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${isActive ? "bg-[#2C1D16] text-[#EADCC9]" : "bg-black/5 text-[#7a847e]"}`,
									children: cat.badge
								})]
							}, cat.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-3 border-t border-black/5 px-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#composer",
								onClick: onClose,
								className: "flex items-center justify-between rounded-xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm hover:scale-[1.02] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Composer son Bowl"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 overflow-y-auto max-h-[460px]",
					children: [
						activeCat === "pokes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Poké Bowls Signatures"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#7a847e]",
								children: "Servis en bols sculptés en bambou naturel · Saumon découpé minute"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-black text-[#ff705f]",
								children: "Format Moyen dès 10 €"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
							children: pokesList.slice(0, 6).map((poke) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: poke.id,
												alt: poke.name,
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute top-1.5 right-1.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2 py-0.5 text-[10px] font-black text-[#2C1D16] shadow",
												children: [poke.price.toFixed(2), " €"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1.5 left-1.5 rounded-md bg-black/60 px-1.5 py-0.5 text-[8px] font-bold text-white",
												children: poke.tag
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-xs font-black text-[#2C1D16] group-hover:text-[#ff705f] transition line-clamp-1",
										children: poke.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[#7a847e] line-clamp-1 mt-0.5",
										children: poke.desc
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 mt-2.5 pt-2 border-t border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleQuickAdd({
												id: poke.id,
												name: poke.name,
												price: poke.price
											}),
											className: "flex-1 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
											children: addedDishId === poke.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: poke.id },
											onClick: onClose,
											className: "flex h-7 w-7 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 text-[#2C1D16] transition",
											title: "Personnaliser ce bowl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
										})]
									})
								]
							}, poke.id))
						})] }),
						activeCat === "crousty" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4 text-[#ea580c]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-black uppercase tracking-wider text-[#ea580c]",
									children: "Crousty Chicken Chaud"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#9a3412]",
								children: "Petits morceaux de poulet croustillant dorés · Boisson 33cl incluse"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[#ea580c] px-3 py-1 text-[11px] font-black text-white shadow-sm",
								children: "Formule 11,00 € Complète"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
							children: croustyList.map((crousty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-[#fed7aa] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
												dishId: crousty.id,
												alt: crousty.name,
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2 right-2 rounded-full bg-[#ea580c] px-2.5 py-0.5 text-xs font-black text-white shadow",
												children: "11.00 €"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-bold text-white",
												children: "🥤 Canette 33cl Offerte"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-sm font-black text-[#2C1D16]",
										children: crousty.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#7a847e] mt-0.5 line-clamp-2",
										children: crousty.desc
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 mt-3 pt-2 border-t border-black/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleQuickAdd({
												id: crousty.id,
												name: crousty.name,
												price: crousty.price
											}, true),
											className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ea580c] py-2 text-xs font-black uppercase text-white hover:bg-[#c2410c] transition active:scale-95 shadow-sm",
											children: addedDishId === crousty.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 stroke-[3]" }), " Commander la formule 11 €"] })
										})
									})
								]
							}, crousty.id))
						})] }),
						activeCat === "composer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-gradient-to-br from-[#2C1D16] to-[#1c3830] text-white p-6 shadow-md flex flex-col justify-between h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#EADCC9] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[3] text-[#ff705f]" }), "Créativité Illimitée"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-3 text-2xl font-black text-white",
										children: "Compose Ton Poké de A à Z"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-white/80 max-w-md",
										children: "Choisis ta base (Riz sushi, quinoa ou jeunes pousses), ta protéine fraîche (Saumon noble, poulet rôti, scampis grillés, falafels), 5 mix-ins croquants parmi plus de 15 ingrédients du jour, ta sauce signature et tes toppings croustillants !"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 sm:grid-cols-4 gap-2 my-5 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/10 p-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: "🍚"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
												children: "1. Base"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/10 p-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: "🐟"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
												children: "2. Protéine"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/10 p-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: "🥑"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
												children: "3. 5 Mix-ins"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-white/10 p-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: "✨"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] font-bold mt-1 text-[#EADCC9]",
												children: "4. Sauce & Seeds"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#composer",
									onClick: onClose,
									className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#EADCC9] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-lg hover:bg-[#F2E5D4] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lancer l'atelier Sur-Mesure maintenant" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}),
						activeCat === "desserts" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Tiramisus Maison Gourmands"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#7a847e]",
								children: "Préparés chaque matin par notre chef · Mascarpone aérien"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]",
								children: "4,00 € l'unité"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
							children: dessertItems.map((dessert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: dessert.image,
											alt: dessert.name,
											className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow",
											children: [dessert.price.toFixed(2), " €"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-xs font-black text-[#2C1D16]",
										children: dessert.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[#7a847e] mt-0.5 line-clamp-1",
										children: dessert.desc
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleQuickAdd(dessert),
										className: "mt-2.5 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
										children: addedDishId === dessert.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
									})
								]
							}, dessert.id))
						})] }),
						activeCat === "boissons" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-black uppercase tracking-wider text-[#2C1D16]",
								children: "Boissons Fraîches Givron"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#7a847e]",
								children: "Canettes 33cl et eaux SPA minérales 50cl servies très fraîches"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3 py-1 text-xs font-black text-[#2C1D16]",
								children: "2,00 € l'unité"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
							children: drinkItems.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col justify-between rounded-2xl bg-white border border-black/5 p-2.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-square w-full rounded-xl overflow-hidden bg-[#e9e5dc] mb-2 flex items-center justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: drink.image,
											alt: drink.name,
											className: "h-full w-full object-cover transition duration-500 group-hover:scale-108"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute top-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow",
											children: [drink.price.toFixed(2), " €"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "text-[11px] font-black text-[#2C1D16] truncate",
										children: drink.name
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleQuickAdd(drink),
										className: "mt-2 flex items-center justify-center gap-1 rounded-xl bg-[#2C1D16] py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#ff705f] transition active:scale-95",
										children: addedDishId === drink.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), " Ajouté !"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " Ajouter"] })
									})
								]
							}, drink.id))
						})] })
					]
				})]
			})]
		})
	}) });
}
//#endregion
//#region src/components/PokawaFloatingNavbar.tsx
function PokawaFloatingNavbar() {
	const { items, setIsCartOpen } = useCart();
	const { language, setLanguage } = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = import_react.useState(false);
	const [isMegaMenuOpen, setIsMegaMenuOpen] = import_react.useState(false);
	const timeoutRef = import_react.useRef(null);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsMegaMenuOpen(true);
	};
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsMegaMenuOpen(false);
		}, 220);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		onMouseLeave: handleMouseLeave,
		className: "absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-5 rounded-full bg-[#FAF4EB]/95 px-6 py-2.5 shadow-2xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#composer",
							className: "flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#2C1D16] hover:text-[#ff705f] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer son Bowl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 stroke-[2.5]" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onMouseEnter: handleMouseEnter,
							className: "relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#carte",
								className: `flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] transition ${isMegaMenuOpen ? "text-[#ff705f]" : "hover:text-[#ff705f]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notre Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3 w-3 stroke-[2.5] transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-[#ff705f]" : ""}` })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#valeurs",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Engagements"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
							target: "_blank",
							rel: "noreferrer",
							title: "Restaurant Poke N Bowl à Visé, Avenue du Pont 12",
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2C1D16] text-[#EADCC9] shadow-md hover:bg-[#8D522A] hover:scale-110 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 fill-current" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col items-center group transition hover:scale-105 duration-200",
					"aria-label": "Poke N Bowl Visé",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white",
								children: "POKE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#EADCC9] text-xs font-black text-[#2C1D16] shadow-md",
								children: "N"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white",
								children: "BOWL"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] font-black uppercase tracking-[0.35em] text-[#EADCC9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-0.5",
						children: "VISÉ · BELGIQUE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-4 rounded-full bg-[#FAF4EB]/95 px-5 py-2 shadow-2xl border border-[#E2D6C5] backdrop-blur-md text-[#2C1D16]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recrutement",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Recrutement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBellMenu, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#2C1D16]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-[#FAF4EB] shadow-lg transition hover:bg-[#482F22] hover:scale-105 active:scale-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1 rounded-full bg-[#2C1D16] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-[#FAF4EB] shadow-lg",
							children: "Commander"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Menu",
							onClick: () => setMobileMenuOpen((o) => !o),
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#2C1D16]",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onMouseEnter: handleMouseEnter,
					onMouseLeave: handleMouseLeave,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaMegaMenu, {
						isOpen: isMegaMenuOpen,
						onClose: () => setIsMegaMenuOpen(false)
					})
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 max-w-sm rounded-[28px] bg-[#fff8ee] p-4 shadow-2xl border border-white/80 pointer-events-auto lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🥗"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pokés & Chirashis" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold text-[#ff705f]",
							children: "Dès 10 € →"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-white p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🍗"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Crousty Chicken" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[#ea580c] text-white px-2 py-0.5 text-[9px] font-black",
							children: "Formule 11 €"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#composer",
						onClick: () => setMobileMenuOpen(false),
						className: "flex items-center justify-between rounded-2xl bg-[#EADCC9] border border-[#D9C5AD] p-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-sm active:scale-98 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: "🥣"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer son Bowl" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] bg-[#2C1D16] text-white px-2 py-0.5 rounded-full font-black",
							children: "Sur-mesure"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#valeurs",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2C1D16] hover:bg-black/5",
						children: "Nos Engagements & Qualité"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2 border-t border-black/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setMobileMenuOpen(false),
							className: "flex-1 text-center rounded-xl border border-black/10 py-2.5 text-xs font-bold uppercase text-[#2C1D16]",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/recrutement",
							onClick: () => setMobileMenuOpen(false),
							className: "flex-1 text-center rounded-xl bg-[#ff705f] py-2.5 text-xs font-black uppercase text-white shadow-sm",
							children: "Recrutement"
						})]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/PokawaHeroExact.tsx
var SLIDES = [
	{
		id: "saumon-wasabi",
		image: "/assets/hero-saumon-clean-wide-CmteSWDC.jpg",
		titleLine1: "SAUMON WASABI",
		titleLine2: "FRAÎCHEUR NOBLE",
		dishName: "Saumon Wasabi",
		badge: "Signature Premium · Saumon Sashimi",
		ingredientCallout: {
			text: "SAUMON NOBLE FRAIS",
			subtext: "DÉCOUPÉ DU MATIN",
			emoji: "🐟"
		},
		statBadge: {
			main: "11.00 €",
			sub: "PREMIUM FRAÎCHEUR"
		},
		price: 11,
		ingredients: "Saumon noble atlantique en dés généreux, avocat Hass fondant, mangue mûre, edamame croquant, salade d'algues wakame & mayo wasabi veloutée."
	},
	{
		id: "sweet-chicken",
		image: "/assets/hero-sweet-wide-CybbbKyX.jpg",
		titleLine1: "SWEET CHICKEN",
		titleLine2: "TERIYAKI MAISON",
		dishName: "Sweet Chicken",
		badge: "Best-Seller · Poulet Doré Teriyaki",
		ingredientCallout: {
			text: "POULET DORÉ MAISON",
			subtext: "MARINADE TERIYAKI",
			emoji: "🍗"
		},
		statBadge: {
			main: "10.00 €",
			sub: "BEST-SELLER"
		},
		price: 10,
		ingredients: "Poulet maison doré, guacamole velouté, mangue, maïs doux, tomates cerises, feta crémeuse, oignons croustillants & sauce teriyaki."
	},
	{
		id: "crousty-chicken-curry",
		image: "/assets/hero-crousty-wide-la3QJkVJ.jpg",
		titleLine1: "CROUSTY CHICKEN",
		titleLine2: "CURRY DORÉ",
		dishName: "Crousty Chicken Curry",
		badge: "Formule 11 € · Boisson 33cl Incluse",
		ingredientCallout: {
			text: "PETITS MORCEAUX CROUSTILLANTS",
			subtext: "SAUCE CURRY ONCTUEUSE",
			emoji: "🍛"
		},
		statBadge: {
			main: "11.00 €",
			sub: "BOISSON 33CL INCLUSE"
		},
		price: 11,
		ingredients: "Petits morceaux de poulet croustillant dorés, sauce curry onctueuse maison bien généreuse, oignons frits croustillants & riz à sushi chaud.",
		isCrousty: true
	},
	{
		id: "scampis-royaux",
		image: "/assets/hero-scampis-wide-RPIUC85j.jpg",
		titleLine1: "SCAMPIS ROYAUX",
		titleLine2: "SPICY MAYO",
		dishName: "Scampis Royal",
		badge: "Coup de Cœur · Grillé Minute",
		ingredientCallout: {
			text: "SCAMPIS ROYAUX GRILLÉS",
			subtext: "SAISIS AU GRILL",
			emoji: "🦐"
		},
		statBadge: {
			main: "10.00 €",
			sub: "SIGNATURE"
		},
		price: 10,
		ingredients: "Scampis saisis au grill, guacamole maison velouté, edamame croquant, tomates fraîches, concombre, poivrons, jalapeños & spicy mayo."
	},
	{
		id: "spicy-chicken",
		image: "/assets/hero-spicy-wide-_hM7Lcc8.jpg",
		titleLine1: "SPICY CHICKEN",
		titleLine2: "KICK ÉPICÉ",
		dishName: "Spicy Chicken",
		badge: "Épicé Gourmand · Kick Pimenté",
		ingredientCallout: {
			text: "POULET ÉPICÉ MAISON",
			subtext: "FLOCONS DE CHILI",
			emoji: "🔥"
		},
		statBadge: {
			main: "10.00 €",
			sub: "ÉPICÉ GOURMAND"
		},
		price: 10,
		ingredients: "Poulet mariné épicé, avocat Hass, patates douces rôties, maïs doux, feta, jalapeños, sauce spicy mayo onctueuse & sésame mix."
	}
];
var AUTOPLAY_MS = 6e3;
function PokawaHeroExact() {
	const [currentIdx, setCurrentIdx] = import_react.useState(0);
	const [addedNotice, setAddedNotice] = import_react.useState(false);
	const { addItem, setIsCartOpen } = useCart();
	const slide = SLIDES[currentIdx];
	import_react.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
		}, AUTOPLAY_MS);
		return () => clearInterval(interval);
	}, [currentIdx]);
	const handlePrev = () => {
		setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
	};
	const handleNext = () => {
		setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
	};
	const handleQuickAdd = () => {
		const isCrousty = slide.isCrousty;
		addItem({
			id: isCrousty ? slide.id : `${slide.id}-moyen`,
			name: isCrousty ? slide.dishName : `${slide.dishName} (Moyen)`,
			basePrice: slide.price,
			price: slide.price,
			quantity: 1,
			toppings: isCrousty ? ["Boisson 33cl incluse au choix"] : [],
			removedIngredients: [],
			image: slide.image
		});
		setAddedNotice(true);
		setTimeout(() => setAddedNotice(false), 2e3);
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Accueil Poké N Bowl Visé — Poké bowls frais & Crousty Chicken",
		className: "relative w-full h-auto min-h-[780px] sm:h-[96vh] sm:min-h-[680px] max-h-none sm:max-h-[1050px] overflow-hidden bg-[#0a1713] select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: 1.04
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: .75,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "absolute inset-0 z-0 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: slide.image,
							alt: `Bol ${slide.dishName} — Poké N Bowl Visé`,
							className: "h-full w-full object-cover object-center filter brightness-100 contrast-102"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" })
					]
				}, `bg-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					transition: { duration: .3 },
					className: "absolute top-20 sm:top-24 right-4 sm:right-8 z-20 hidden md:flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-white shadow-lg pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base",
						children: slide.ingredientCallout.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
						children: slide.ingredientCallout.text
					})]
				}, `callout-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-10 sm:bottom-14 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10
							},
							transition: {
								duration: .4,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "max-w-xl space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#EBDCCB] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] shadow-md border border-[#D9C5AD]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[2.5] text-[#ff705f]" }), slide.badge]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-black text-white/80 drop-shadow",
										children: slide.isCrousty ? "Gamme Chaude" : "Fait minute à Visé"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]",
									children: slide.dishName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-white/90 font-medium leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-lg line-clamp-2",
									children: slide.ingredients
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 pt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleQuickAdd,
											className: "group relative inline-flex items-center gap-2 rounded-full bg-[#EBDCCB] px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#2C1D16] shadow-[0_8px_25px_rgba(44,29,22,0.45)] transition hover:bg-[#F5ECE0] hover:scale-105 active:scale-95 border border-[#D9C5AD]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3] text-[#2C1D16]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"Ajouter · ",
													slide.price.toFixed(2),
													" €"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition group-hover:translate-x-1" }),
												addedNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "absolute -top-9 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-0.5 text-xs font-black text-white shadow-xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté !"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: slide.id },
											className: "inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-white/30 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow",
											children: "Personnaliser"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#carte",
											className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#EADCC9] hover:underline ml-1 drop-shadow",
											children: "La Carte →"
										})
									]
								})
							]
						}, `content-${slide.id}`)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 sm:bottom-5 inset-x-0 z-30 flex items-center justify-center gap-2 pointer-events-auto",
				children: SLIDES.map((s, idx) => {
					const isActive = idx === currentIdx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrentIdx(idx),
						"aria-label": `Aller au plat ${s.dishName}`,
						className: `transition-all duration-300 rounded-full ${isActive ? "w-8 h-2.5 bg-[#EBDCCB] shadow-[0_0_12px_rgba(235,220,203,0.9)]" : "w-2.5 h-2.5 bg-white/40 hover:bg-[#EBDCCB]"}`
					}, s.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handlePrev,
				"aria-label": "Plat précédent",
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: handleNext,
				"aria-label": "Plat suivant",
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white border border-white/25 backdrop-blur-md hover:bg-white hover:text-black transition shadow-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})
		]
	});
}
//#endregion
//#region src/components/InteractiveBowlBuilder.tsx
var BASES = [
	{
		id: "riz-sushi",
		name: "Riz à sushi japonais",
		emoji: "🍚",
		desc: "Vinaigré et fondant"
	},
	{
		id: "riz-brun",
		name: "Riz brun complet",
		emoji: "🌾",
		desc: "Riche en fibres & parfumé"
	},
	{
		id: "salade",
		name: "Salade fraîche croquante",
		emoji: "🥗",
		desc: "Légère & désaltérante"
	},
	{
		id: "pates",
		name: "Pâtes gourmandes",
		emoji: "🍝",
		desc: "Savoureuses & consistantes"
	}
];
var PROTEINES = [
	{
		id: "poulet",
		name: "Poulet mariné doré",
		emoji: "🍗",
		extra: 0,
		tag: "Petits morceaux tendres"
	},
	{
		id: "saumon",
		name: "Saumon sashimi noble",
		emoji: "🐟",
		extra: 1,
		tag: "+1,00 € · Découpé minute"
	},
	{
		id: "scampis",
		name: "Scampis royaux grillés",
		emoji: "🦐",
		extra: 0,
		tag: "Saisis au grill minute"
	},
	{
		id: "vege",
		name: "Double Avocat Hass & Feta",
		emoji: "🥑",
		extra: 0,
		tag: "100% Végétarien"
	}
];
var MIXINS = [
	{
		id: "avocat",
		name: "Avocat Hass fondant",
		emoji: "🥑"
	},
	{
		id: "mangue",
		name: "Mangue mûre juteuse",
		emoji: "🥭"
	},
	{
		id: "edamame",
		name: "Edamame croquant",
		emoji: "🫘"
	},
	{
		id: "feta",
		name: "Feta grecque AOP",
		emoji: "🧀"
	},
	{
		id: "wakame",
		name: "Salade d'algues Wakame",
		emoji: "🌿"
	},
	{
		id: "tomates",
		name: "Tomates cerises",
		emoji: "🍅"
	},
	{
		id: "mais",
		name: "Maïs doux",
		emoji: "🌽"
	},
	{
		id: "concombre",
		name: "Concombre frais",
		emoji: "🥒"
	},
	{
		id: "jalapenos",
		name: "Jalapeños marinés",
		emoji: "🌶️"
	},
	{
		id: "patates-douces",
		name: "Patates douces rôties",
		emoji: "🍠"
	}
];
var SAUCES = [
	{
		id: "teriyaki",
		name: "Teriyaki caramélisée maison",
		emoji: "🍯",
		desc: "Sucré-salé savoureux"
	},
	{
		id: "spicy-mayo",
		name: "Spicy Mayo piquante",
		emoji: "🌶️",
		desc: "Relevée & onctueuse"
	},
	{
		id: "mayo-wasabi",
		name: "Mayo Wasabi veloutée",
		emoji: "🟢",
		desc: "Fraîche avec du caractère"
	},
	{
		id: "sesame",
		name: "Sésame toasté crémeux",
		emoji: "🌰",
		desc: "Rondeur délicate"
	}
];
var TOPPINGS = [
	{
		id: "oignons-frits",
		name: "Oignons frits dorés",
		emoji: "🧅",
		desc: "Croustillant irrésistible"
	},
	{
		id: "sesame-mix",
		name: "Mélange sésame noir & blanc",
		emoji: "🌱",
		desc: "Arômes torréfiés"
	},
	{
		id: "noix-cajou",
		name: "Noix de cajou",
		emoji: "🥜",
		desc: "Croquant délicat"
	},
	{
		id: "nachos",
		name: "Nachos croustillants",
		emoji: "🌽",
		desc: "Crunch maïs salé"
	},
	{
		id: "flocons-chili",
		name: "Flocons de chili crunchy",
		emoji: "🔥",
		desc: "Kick épicé vivifiant"
	},
	{
		id: "wazabi",
		name: "Wazabi peas crunchy",
		emoji: "🟢",
		desc: "Piquant japonais"
	}
];
function InteractiveBowlBuilder() {
	const [activeStep, setActiveStep] = import_react.useState(1);
	const [size, setSize] = import_react.useState("moyen");
	const [base, setBase] = import_react.useState(BASES[0]);
	const [proteine, setProteine] = import_react.useState(PROTEINES[1]);
	const [selectedMixins, setSelectedMixins] = import_react.useState([
		"avocat",
		"mangue",
		"edamame",
		"wakame",
		"feta"
	]);
	const [sauce, setSauce] = import_react.useState(SAUCES[0]);
	const [selectedToppings, setSelectedToppings] = import_react.useState(["oignons-frits"]);
	const [added, setAdded] = import_react.useState(false);
	const { addItem, setIsCartOpen } = useCart();
	const basePrice = size === "grand" ? 13 : 10;
	const proteinExtra = proteine.extra;
	const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
	const extraMixinsPrice = extraMixinsCount * .5;
	const extraToppingsCount = Math.max(0, selectedToppings.length - 1);
	const extraToppingsPrice = extraToppingsCount * .5;
	const totalPrice = basePrice + proteinExtra + extraMixinsPrice + extraToppingsPrice;
	const activeBowlImage = {
		poulet: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg",
		saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
		scampis: "/assets/bowl-scampis-DlEe1YXf.jpg",
		vege: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	}[proteine.id] || "/assets/bowl-sweet-chicken-T1JJVtIT.jpg";
	const toggleMixin = (id) => {
		if (selectedMixins.includes(id)) {
			if (selectedMixins.length > 1) setSelectedMixins((prev) => prev.filter((m) => m !== id));
		} else setSelectedMixins((prev) => [...prev, id]);
	};
	const toggleTopping = (id) => {
		if (selectedToppings.includes(id)) {
			if (selectedToppings.length > 1) setSelectedToppings((prev) => prev.filter((t) => t !== id));
		} else setSelectedToppings((prev) => [...prev, id]);
	};
	const handleAddToCart = () => {
		const mixinNames = selectedMixins.map((id) => MIXINS.find((m) => m.id === id)?.name || id);
		const toppingNames = selectedToppings.map((id) => TOPPINGS.find((t) => t.id === id)?.name || id);
		addItem({
			id: `custom-live-${Date.now()}`,
			name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
			basePrice: totalPrice,
			price: totalPrice,
			quantity: 1,
			toppings: [
				`Taille : ${size === "grand" ? "Grand (13€)" : "Moyen (10€)"}`,
				`Base : ${base.name}`,
				`Protéine : ${proteine.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
				`Mix-ins : ${mixinNames.join(", ")}${extraMixinsCount > 0 ? ` (+${extraMixinsPrice.toFixed(2)}€)` : ""}`,
				`Sauce : ${sauce.name}`,
				`Toppings : ${toppingNames.join(", ")}${extraToppingsCount > 0 ? ` (+${extraToppingsPrice.toFixed(2)}€)` : ""}`
			],
			removedIngredients: [],
			image: activeBowlImage
		});
		setAdded(true);
		setIsCartOpen(true);
		setTimeout(() => {
			setAdded(false);
			setActiveStep(1);
			setSize("moyen");
			setBase(BASES[0]);
			setProteine(PROTEINES[1]);
			setSelectedMixins([
				"avocat",
				"mangue",
				"edamame",
				"wakame",
				"feta"
			]);
			setSauce(SAUCES[0]);
			setSelectedToppings(["oignons-frits"]);
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1340px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[36px] bg-white border border-[#E2D6C5] shadow-lift p-6 sm:p-10 lg:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-black/5 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#EADCC9] shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atelier Créatif · Bol en Bambou Naturel" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
								children: ["Composez votre bowl ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#ff705f]",
									children: "sur-mesure."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm sm:text-base text-[#5a6760] font-medium leading-relaxed",
								children: "Assemblez vos ingrédients favoris en 4 étapes simples. Fait minute sous vos yeux avec découpes fraîches du jour."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 px-5 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]",
								children: "Prix calculé en direct"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl sm:text-3xl font-black text-[#2C1D16]",
								children: [totalPrice.toFixed(2), " €"]
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5",
					children: [
						{
							step: 1,
							title: "1. Format & Base",
							detail: `${base.name} (${size})`
						},
						{
							step: 2,
							title: "2. Protéine",
							detail: proteine.name
						},
						{
							step: 3,
							title: "3. Mix-ins Frais",
							detail: `${selectedMixins.length} légumes / fruits`
						},
						{
							step: 4,
							title: "4. Sauce & Toppings",
							detail: `${sauce.name} · ${selectedToppings.length} topping(s)`
						}
					].map((s) => {
						const isCurrent = activeStep === s.step;
						const isDone = activeStep > s.step;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveStep(s.step),
							className: `relative rounded-2xl p-3.5 text-left transition duration-200 border ${isCurrent ? "bg-[#2C1D16] text-white border-[#2C1D16] shadow-md scale-[1.02]" : isDone ? "bg-[#F3ECE1] text-[#2C1D16] border-[#E2D6C5] hover:border-black/20" : "bg-white text-[#7d8b83] border-black/5 hover:border-black/15"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-black uppercase tracking-wider ${isCurrent ? "text-[#EADCC9]" : isDone ? "text-[#ff705f]" : "text-[#7d8b83]"}`,
									children: s.title
								}), isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#ff705f]" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-1 block text-xs font-bold truncate ${isCurrent ? "text-white/80" : isDone ? "text-[#2C1D16]" : "text-[#7d8b83]/70"}`,
								children: s.detail
							})]
						}, s.step);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-[#F3ECE1] border border-[#E2D6C5] p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[340px]",
							children: [
								activeStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📏" }), " Choisissez la taille de votre bol"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("moyen"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "moyen" ? "bg-white border-[#2C1D16] shadow-md ring-2 ring-[#2C1D16]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#2C1D16]",
													children: "Format Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-xs font-black text-[#2C1D16]",
													children: "10.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Portion régulière généreuse · Idéal repas midi ou soir"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("grand"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "grand" ? "bg-white border-[#2C1D16] shadow-md ring-2 ring-[#2C1D16]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#2C1D16]",
													children: "Grand Format"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9]",
													children: "13.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Maxi faim (+3 €) · Double base & portions renforcées"
											})]
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍚" }), " Choisissez votre base (incluse)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setBase(b),
											className: `flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${base.id === b.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: b.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16]",
												children: b.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-medium",
												children: b.desc
											})] })]
										}, b.id))
									})] })]
								}),
								activeStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗" }), " Choisissez votre protéine principale"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
										children: PROTEINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setProteine(p),
											className: `flex items-center gap-3 rounded-2xl p-4 border text-left transition ${proteine.id === p.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-3xl",
												children: p.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-xs text-[#2C1D16]",
														children: p.name
													}), p.extra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-black text-[#ff705f] bg-[#ff705f]/10 px-2 py-0.5 rounded-full",
														children: [
															"+",
															p.extra.toFixed(2),
															" €"
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-[#7d8b83] font-medium block mt-0.5",
													children: p.tag
												})]
											})]
										}, p.id))
									})]
								}),
								activeStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-base font-black text-[#2C1D16] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑" }), " Choisissez vos mix-ins frais (5 inclus)"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-[#ff705f]",
												children: [
													selectedMixins.length,
													" sélectionné(s) ",
													extraMixinsCount > 0 ? `(+${extraMixinsPrice.toFixed(2)} €)` : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#7d8b83]",
											children: "5 mix-ins sont inclus dans votre bol. Vous pouvez en ajouter autant que vous voulez (+0.50 € par mix-in supplémentaire)."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2",
											children: MIXINS.map((m) => {
												const isSelected = selectedMixins.includes(m.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleMixin(m.id),
													className: `flex items-center gap-2 rounded-2xl p-3 border text-left transition ${isSelected ? "bg-white border-[#2C1D16] shadow-sm ring-2 ring-[#2C1D16]/10 font-black text-[#2C1D16]" : "bg-white/60 border-black/5 hover:bg-white text-[#5a6760] font-medium"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-lg",
															children: m.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs truncate",
															children: m.name
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "ml-auto h-3.5 w-3.5 text-[#059669]" })
													]
												}, m.id);
											})
										})
									]
								}),
								activeStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: { opacity: 0 },
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#2C1D16] flex items-center gap-2 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍶" }), " Choisissez votre sauce signature (incluse)"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
										children: SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSauce(s),
											className: `flex items-center gap-3 rounded-2xl p-3.5 border text-left transition ${sauce.id === s.id ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: s.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16]",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#7d8b83] font-medium",
												children: s.desc
											})] })]
										}, s.id))
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-base font-black text-[#2C1D16] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧅" }), " Choisissez vos toppings croustillants (1 inclus · illimités)"]
											}), selectedToppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-[#ff705f]",
												children: [
													selectedToppings.length,
													" sélectionné(s) ",
													extraToppingsCount > 0 ? `(+${extraToppingsPrice.toFixed(2)} €)` : ""
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#7d8b83] mb-3",
											children: "Ajoutez autant de toppings croustillants que vous souhaitez (+0.50 € par topping supplémentaire)."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
											children: TOPPINGS.map((tp) => {
												const isSelected = selectedToppings.includes(tp.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleTopping(tp.id),
													className: `flex items-center gap-2.5 rounded-2xl p-3 border text-left transition ${isSelected ? "bg-white border-[#ff705f] shadow-md ring-2 ring-[#ff705f]/20" : "bg-white/80 border-black/10 hover:bg-white"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: tp.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex-1 min-w-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "block text-xs font-black text-[#2C1D16] truncate",
																children: tp.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[9px] text-[#7d8b83] block truncate",
																children: tp.desc
															})]
														}),
														isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#ff705f] shrink-0" })
													]
												}, tp.id);
											})
										})
									] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-between pt-4 border-t border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: activeStep === 1,
								onClick: () => setActiveStep((curr) => Math.max(1, curr - 1)),
								className: `text-xs font-black px-4 py-2 rounded-full transition ${activeStep === 1 ? "opacity-30 cursor-not-allowed text-[#7d8b83]" : "text-[#2C1D16] hover:bg-black/5"}`,
								children: "← Étape précédente"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveStep((curr) => curr < 4 ? curr + 1 : 1),
								className: "text-xs font-black px-4 py-2 rounded-full bg-[#2C1D16] text-white hover:bg-[#ff705f] transition",
								children: activeStep < 4 ? `Étape suivante (${activeStep + 1}/4) →` : "Revenir au début"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-white border border-[#E2D6C5] p-6 sm:p-7 shadow-card flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: "🥣"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-black text-[#2C1D16]",
										children: "Votre Recette en Direct"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-bold text-[#059669]",
										children: ["Bol en bambou naturel · Format ", size === "grand" ? "Grand" : "Moyen"]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]",
										children: "Total Recette"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-2xl font-black text-[#2C1D16]",
										children: [totalPrice.toFixed(2), " €"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#F3ECE1] shadow-md group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeBowlImage,
										alt: "Bol composé Poke N Bowl",
										className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2.5 left-2.5 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] border border-white/20 shadow",
										children: "Bol Bambou Débordant 🌿"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-black drop-shadow flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.name })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#2431eb] px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow",
											children: size === "grand" ? "Grand (13 €)" : "Moyen (10 €)"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Base choisie :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: base.emoji }),
												" ",
												base.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Protéine :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: proteine.emoji }),
												" ",
												proteine.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 pt-1 border-t border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-[#7d8b83]",
												children: [
													"Mix-ins (",
													selectedMixins.length,
													") :"
												]
											}), extraMixinsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-black text-[#ff705f]",
												children: [
													"+",
													extraMixinsPrice.toFixed(2),
													" €"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: selectedMixins.map((id) => {
												const m = MIXINS.find((mix) => mix.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-lg bg-[#F3ECE1] border border-[#E2D6C5] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]",
													children: [
														m?.emoji,
														" ",
														m?.name
													]
												}, id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between text-xs pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-[#7d8b83]",
											children: "Sauce :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-black text-[#2C1D16] flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sauce.emoji }),
												" ",
												sauce.name
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 pt-1 border-t border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-[#7d8b83]",
												children: [
													"Toppings (",
													selectedToppings.length,
													") :"
												]
											}), extraToppingsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-black text-[#ff705f]",
												children: [
													"+",
													extraToppingsPrice.toFixed(2),
													" €"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: selectedToppings.map((id) => {
												const tp = TOPPINGS.find((t) => t.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "rounded-lg bg-[#F3ECE1] border border-[#E2D6C5] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]",
													children: [
														tp?.emoji,
														" ",
														tp?.name
													]
												}, id);
											})
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 rounded-2xl bg-[#F3ECE1] p-3 text-[11px] text-[#5a6760] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bol en bambou véritable, 100% recyclable & réutilisable." })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-4 border-t border-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: `btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lift transition duration-200 ${added ? "bg-[#2C1D16]" : ""}`,
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22c55e]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté ! Retour à l'étape 1..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Ajouter mon bowl (",
										totalPrice.toFixed(2),
										" €)"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								] })
							})
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/assets/drink-fanta-orange.jpg
var drink_fanta_orange_default = "/assets/drink-fanta-orange-PDmbpAsA.jpg";
//#endregion
//#region src/components/FluidInteractiveMenu.tsx
function FluidInteractiveMenu() {
	const { addItem } = useCart();
	const [activeSection, setActiveSection] = import_react.useState("all");
	const [activeTaste, setActiveTaste] = import_react.useState("all");
	const [searchQuery, setSearchQuery] = import_react.useState("");
	const [selectedSizes, setSelectedSizes] = import_react.useState({});
	const [recentlyAddedId, setRecentlyAddedId] = import_react.useState(null);
	const pokeItems = import_react.useMemo(() => {
		return bowls.filter((b) => !b.id.startsWith("crousty-")).map((b) => {
			let tasteTag = "fresh";
			if (b.id === "spicy-chicken") tasteTag = "spicy";
			if (b.id === "sweet-chicken") tasteTag = "sweet";
			return {
				id: b.id,
				name: b.name,
				category: "poke",
				price: b.price,
				grandPrice: b.price + 3,
				desc: b.desc,
				badge: b.tag,
				dishId: b.id,
				ingredients: b.ingredients,
				tasteTag,
				packagingNote: "Bol en bambou naturel · Fait minute"
			};
		});
	}, []);
	const croustyItems = import_react.useMemo(() => {
		return bowls.filter((b) => b.id.startsWith("crousty-")).map((b) => ({
			id: b.id,
			name: b.name,
			category: "crousty",
			price: b.price,
			desc: b.desc,
			badge: "Formule 11 € · Boisson Offerte 🥤",
			dishId: b.id,
			ingredients: b.ingredients,
			tasteTag: "crispy",
			isCombo: true,
			packagingNote: "Packaging Kraft Takeaway chaud · Boisson 33cl incluse"
		}));
	}, []);
	const dessertItems = import_react.useMemo(() => {
		const imagesMap = {
			"tira-spec": tiramisu_speculoos_default,
			"tira-nutella": tiramisu_nutella_default,
			"tira-oreo": tiramisu_oreo_default
		};
		return desserts.map((d) => ({
			id: d.id,
			name: d.name,
			category: "dessert",
			price: d.price,
			desc: d.id === "tira-spec" ? "Crème mascarpone ultra-légère, véritables biscuits Lotus caramélisés & voile de spéculoos artisanal." : d.id === "tira-nutella" ? "Généreux tourbillons de Nutella fondant, éclats de noisettes torréfiées et crème fouettée maison." : "Éclats croustillants de biscuits Oreo noir plongés dans une onctueuse crème mascarpone fraîche.",
			badge: d.soldOut ? "Victime de son succès" : "Fait Maison du Matin ⭐",
			image: imagesMap[d.id],
			soldOut: d.soldOut,
			tasteTag: "sweet",
			packagingNote: "Pot artisanal individuel fraîcheur"
		}));
	}, []);
	const drinkItems = import_react.useMemo(() => {
		const imagesMap = {
			coca: drink_coca_cola_default,
			"coca-zero": drink_coca_zero_default,
			fanta: drink_fanta_orange_default,
			"ice-tea": drink_ice_tea_default,
			"eau-plate": drink_eau_plate_default,
			"eau-gaz": drink_eau_gazeuse_default
		};
		const notesMap = {
			coca: "Canette 33cl servie glacée",
			"coca-zero": "Canette 33cl zéro sucre ultra-fraîche",
			fanta: "Canette 33cl pétillante à l'orange",
			"ice-tea": "Canette Lipton Ice-Tea Pêche 33cl fraîche",
			"eau-plate": "Bouteille plastique SPA Reine 50cl plate",
			"eau-gaz": "Bouteille plastique SPA Intense 50cl pétillante"
		};
		return drinks.map((dr) => ({
			id: dr.id,
			name: dr.name,
			category: "drink",
			price: dr.price,
			desc: notesMap[dr.id] || "Boisson fraîche 33cl / 50cl.",
			badge: "Extra Frais 🧊",
			image: imagesMap[dr.id],
			tasteTag: "drink",
			packagingNote: notesMap[dr.id]
		}));
	}, []);
	const handleAddToCart = (item) => {
		if (item.soldOut) return;
		const size = selectedSizes[item.id] || "moyen";
		const isGrand = size === "grand" && item.grandPrice;
		const finalPrice = isGrand ? item.grandPrice : item.price;
		const displayName = item.grandPrice ? `${item.name} (${isGrand ? "Grand" : "Moyen"})` : item.name;
		addItem({
			id: `${item.id}-${size}`,
			name: displayName,
			basePrice: finalPrice,
			price: finalPrice,
			quantity: 1,
			toppings: [],
			removedIngredients: [],
			image: item.image
		});
		setRecentlyAddedId(item.id);
		setTimeout(() => {
			setRecentlyAddedId((curr) => curr === item.id ? null : curr);
		}, 1800);
	};
	const toggleSize = (itemId, size) => {
		setSelectedSizes((prev) => ({
			...prev,
			[itemId]: size
		}));
	};
	const filterList = (items) => {
		return items.filter((item) => {
			if (activeTaste !== "all" && item.tasteTag !== activeTaste && item.tasteTag !== "drink") return false;
			if (searchQuery.trim() !== "") {
				const query = searchQuery.toLowerCase();
				const matchesName = item.name.toLowerCase().includes(query);
				const matchesDesc = item.desc.toLowerCase().includes(query);
				const matchesIng = item.ingredients?.some((ing) => ing.name.toLowerCase().includes(query));
				if (!matchesName && !matchesDesc && !matchesIng) return false;
			}
			return true;
		});
	};
	const filteredPokes = filterList(pokeItems);
	const filteredCrousty = filterList(croustyItems);
	const filteredDesserts = filterList(dessertItems);
	const filteredDrinks = filterList(drinkItems);
	const totalResults = (activeSection === "all" || activeSection === "pokes" ? filteredPokes.length : 0) + (activeSection === "all" || activeSection === "crousty" ? filteredCrousty.length : 0) + (activeSection === "all" || activeSection === "desserts" ? filteredDesserts.length : 0) + (activeSection === "all" || activeSection === "boissons" ? filteredDrinks.length : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "carte",
		className: "scroll-mt-16 mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
		"aria-label": "La carte Poke N Bowl Visé",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C1D16]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Carte Officielle & Recettes Visétoises"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
						children: ["Une carte claire, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f]",
							children: "organisée & gourmande."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-[#766358] max-w-2xl font-medium",
						children: "Pokés servis dans de véritables bols en bambou naturel, Crousty Chicken chaud en boîte kraft avec boisson, desserts du jour et rafraîchissements givrés."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A796E]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Rechercher saumon, crousty, oreo...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-[#E2D6C5] bg-[#FAF7F2] py-2.5 pl-10 pr-4 text-xs font-semibold text-[#2C1D16] placeholder-[#8A796E] shadow-sm focus:border-[#A25F30] focus:outline-none focus:ring-2 focus:ring-[#A25F30]/25"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8A796E] hover:text-[#2C1D16]",
							children: "✕"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2",
				children: [
					{
						id: "all",
						label: "Toute la Carte",
						icon: "✨",
						count: pokeItems.length + croustyItems.length + dessertItems.length + drinkItems.length
					},
					{
						id: "pokes",
						label: "Poké Bowls Signatures",
						icon: "🥗",
						count: pokeItems.length
					},
					{
						id: "crousty",
						label: "Crousty Chicken",
						icon: "🍗",
						count: croustyItems.length
					},
					{
						id: "composer",
						label: "Sur-Mesure",
						icon: "🥣",
						count: 1
					},
					{
						id: "desserts",
						label: "Tiramisus Maison",
						icon: "🧁",
						count: dessertItems.length
					},
					{
						id: "boissons",
						label: "Boissons Fraîches",
						icon: "🥤",
						count: drinkItems.length
					}
				].map((cat) => {
					const isActive = activeSection === cat.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setActiveSection(cat.id);
							setActiveTaste("all");
						},
						className: `relative flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition shrink-0 ${isActive ? "bg-[#2C1D16] text-[#FAF7F2] shadow-lg scale-[1.02]" : "bg-[#FAF7F2] text-[#2C1D16]/80 hover:bg-[#EFE8DC] border border-[#E2D6C5]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: cat.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-[#EADCC9] text-[#2C1D16]" : "bg-[#EFE8DC] text-[#766358]"}`,
								children: cat.count
							})
						]
					}, cat.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] font-bold uppercase tracking-wider text-[#7d8b83] flex items-center gap-1 mr-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3 w-3" }), " Saveur :"]
				}), [
					{
						id: "all",
						label: "Toutes les envies"
					},
					{
						id: "fresh",
						label: "Frais & Léger 🥑"
					},
					{
						id: "crispy",
						label: "Croustillant & Chaud 🍗"
					},
					{
						id: "spicy",
						label: "Touche Piquante 🌶️"
					},
					{
						id: "sweet",
						label: "Douceur Teriyaki / Sucre 🍯"
					}
				].map((taste) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActiveTaste(taste.id),
					className: `rounded-full px-3.5 py-1.5 text-[11px] font-bold transition ${activeTaste === taste.id ? "bg-[#ff705f] text-white shadow-sm" : "bg-white/80 text-[#5a6760] hover:bg-black/5 border border-black/5"}`,
					children: taste.label
				}, taste.id))]
			}),
			totalResults === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-[32px] bg-white border border-black/5 p-12 text-center shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-4xl",
						children: "🔍"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-xl font-bold text-[#2C1D16]",
						children: "Aucun plat ne correspond à votre recherche"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-[#7d8b83]",
						children: "Essayez avec un autre mot-clé ou réinitialisez les filtres."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setActiveSection("all");
							setActiveTaste("all");
							setSearchQuery("");
						},
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-5 py-2.5 text-xs font-bold text-white shadow-sm",
						children: "Réinitialiser les filtres"
					})
				]
			}),
			(activeSection === "all" || activeSection === "pokes") && filteredPokes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16]/5 px-3 py-1 text-[11px] font-extrabold text-[#2C1D16]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bols en Bois / Bambou Sculpté" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Poké Bowls Signatures"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Saumon découpé minute, poulet mariné en petits morceaux tendres, scampis grillés & légumes croquants."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-extrabold text-[#ff705f]",
						children: "Format Moyen dès 10 € · Grand +3 €"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4",
					children: filteredPokes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: selectedSizes[item.id] || "moyen",
						onToggleSize: (s) => toggleSize(item.id, s),
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "crousty") && filteredCrousty.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[32px] bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border border-[#fed7aa] p-6 sm:p-8 mb-6 shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center justify-between gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 fill-white" }), "Crousty Chicken · Chaud & Croustillant"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl sm:text-3xl font-black text-[#7c2d12]",
								children: "Crousty Chicken"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs sm:text-sm text-[#9a3412] max-w-2xl font-medium",
								children: "Petits morceaux de poulet croustillant dorés, généreusement nappés de sauce maison onctueuse (curry ou blanche) et oignons frits croustillants sur riz chaud."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-[#fed7aa] shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								children: "🥤"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-black uppercase tracking-wider text-[#ea580c]",
								children: "Formule Étudiant Complète"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-black text-[#7c2d12]",
								children: ["11,00 € ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-[#9a3412]",
									children: "(Boisson 33cl incluse)"
								})]
							})] })]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: filteredCrousty.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: "moyen",
						onToggleSize: () => {},
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id,
						isCroustySpecial: true
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "composer") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "composer",
				className: "mt-16 pt-8 border-t border-black/5 scroll-mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBowlBuilder, {})
			}),
			(activeSection === "all" || activeSection === "desserts") && filteredDesserts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Douceurs Artisanales" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Tiramisus Maison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#766358] mt-0.5",
							children: "Préparés chaque matin par notre chef. Mascarpone fouetté, biscuits croustillants & sauces gourmandes."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
						children: "4,00 € l'unité"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filteredDesserts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishCard, {
						item,
						selectedSize: "moyen",
						onToggleSize: () => {},
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			}),
			(activeSection === "all" || activeSection === "boissons") && filteredDrinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#E2D6C5]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0284c7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Servies Très Fraîches" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
							children: "Nos Boissons Fraîches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#766358] mt-0.5",
							children: "Canettes givrées 33cl et bouteilles d'eau SPA 50cl pour accompagner vos plats."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
						children: "2,00 € l'unité"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
					children: filteredDrinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrinkCard, {
						item,
						onAdd: () => handleAddToCart(item),
						isAdded: recentlyAddedId === item.id
					}, item.id))
				})]
			})
		]
	});
}
function DishCard({ item, selectedSize, onToggleSize, onAdd, isAdded, isCroustySpecial = false }) {
	const effectivePrice = selectedSize === "grand" && item.grandPrice ? item.grandPrice : item.price;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		layout: true,
		className: `group flex flex-col justify-between overflow-hidden rounded-[28px] border bg-[#FAF7F2] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${isCroustySpecial ? "border-[#fed7aa] ring-2 ring-[#ea580c]/15" : "border-[#E2D6C5]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden bg-[#e9e5dc]",
			children: [
				item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
					dishId: item.dishId,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-700 group-hover:scale-108"
				}) : item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: `h-full w-full object-cover transition duration-700 group-hover:scale-108 ${item.soldOut ? "grayscale contrast-75" : ""}`
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center bg-[#f4f0e6] text-4xl",
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur ${isCroustySpecial ? "bg-[#ea580c] text-white" : "bg-[#FAF7F2]/95 text-[#2C1D16] border border-[#E2D6C5]"}`,
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-3.5 right-3.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1 text-xs font-black text-[#2C1D16] shadow-md",
					children: [effectivePrice.toFixed(2), " €"]
				}),
				item.packagingNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-2.5 left-3.5 rounded-md bg-black/65 backdrop-blur-sm px-2 py-0.5 text-[9px] font-extrabold text-white/90",
					children: item.packagingNote
				}),
				item.soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-red-600 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg",
						children: "Victime de son succès"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-lg sm:text-xl font-black text-[#2C1D16] leading-snug",
					children: item.name
				}),
				item.isCombo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs font-extrabold text-[#ea580c]",
					children: "🥤 Formule chaude : Canette 33cl offerte au choix"
				}) : item.category === "poke" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs font-bold text-[#059669]",
					children: "🥣 Servi en bol bambou sculpté · Riz japonais vinaigré"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-[#766358] line-clamp-2",
					children: item.desc
				}),
				item.ingredients && item.ingredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex flex-wrap gap-1.5",
					children: [item.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#F3ECE1] px-2 py-0.5 text-[10px] font-bold text-[#2C1D16]/85 border border-[#E2D6C5]",
						children: [
							ing.emoji,
							" ",
							ing.name
						]
					}, i)), item.ingredients.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]",
						children: ["+", item.ingredients.length - 5]
					})]
				}),
				item.grandPrice && !item.isCombo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-bold uppercase tracking-wider text-[#7d8b83]",
						children: "Format :"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-full bg-[#f2ede4] p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("moyen"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "moyen" ? "bg-[#2C1D16] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Moyen (",
								item.price.toFixed(0),
								" €)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("grand"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "grand" ? "bg-[#2C1D16] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Grand (",
								item.grandPrice.toFixed(0),
								" €)"
							]
						})]
					})]
				})
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-5 sm:p-6 pt-0 mt-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 pt-2 border-t border-[#E2D6C5]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: item.soldOut,
					onClick: onAdd,
					className: `relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${item.soldOut ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-[#2C1D16] text-emerald-400 scale-105" : "bg-[#EADCC9] border border-[#D9C5AD] text-[#2C1D16] hover:bg-[#A25F30] hover:text-[#FFFDF9] hover:border-[#A25F30] hover:scale-105 active:scale-95"}`,
					title: `Ajouter au panier (${effectivePrice.toFixed(2)} €)`,
					children: [isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 stroke-[3]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" }), isAdded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 0,
							scale: .6
						},
						animate: {
							opacity: 1,
							y: -24,
							scale: 1
						},
						exit: { opacity: 0 },
						className: "absolute -top-1 font-black text-xs text-white bg-emerald-600 px-1.5 py-0.5 rounded-full shadow",
						children: "+1"
					})]
				}), item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$productId",
					params: { productId: item.dishId },
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2C1D16] py-3 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				}) : item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-center py-3 text-xs font-bold text-[#766358]",
					children: "Épuisé aujourd'hui"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2C1D16] py-3 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
	});
}
function DrinkCard({ item, onAdd, isAdded }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#E2D6C5] bg-[#FAF7F2] p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#e9e5dc]",
				children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center text-3xl",
					children: "🥤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2 py-0.5 text-[10px] font-black text-[#2C1D16] shadow",
					children: [item.price.toFixed(2), " €"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-xs font-black text-[#2C1D16] leading-tight line-clamp-1",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[10px] text-[#766358] line-clamp-1",
					children: item.packagingNote || "33 cl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				className: `mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[11px] font-black transition ${isAdded ? "bg-[#2C1D16] text-emerald-400" : "bg-[#2C1D16] text-[#FAF7F2] hover:bg-[#8D522A]"}`,
				children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter (2 €)" })] })
			})
		]
	});
}
//#endregion
//#region src/components/PokawaBrandValues.tsx
function PokawaBrandValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#FAF6F0] py-16 sm:py-20 lg:py-24 border-y border-[#E2D6C5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Nos Engagements & Notre Philosophie"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
							children: "Un poké plein de qualités"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium",
							children: "Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé minute avec les meilleurs produits."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							id: "freshness",
							emoji: "🐟",
							tag: "Exigence fraîcheur",
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
							title: "Fraîcheur Quotidienne",
							desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
							perk: "Découpe chaque matin à Visé",
							image: bowl_saumon_default
						},
						{
							id: "rice",
							emoji: "🍚",
							tag: "Authenticité",
							tagColor: "bg-[#ff705f] text-white",
							title: "Riz à Sushi Artisanal",
							desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
							perk: "Assaisonnement équilibré",
							image: bowl_sweet_chicken_default
						},
						{
							id: "crousty",
							emoji: "🍗",
							tag: "Gamme Chaude",
							tagColor: "bg-[#ea580c] text-white",
							title: "Crousty Chicken",
							desc: "Petits morceaux de poulet croustillant dorés, oignons frits et sauces chaudes maison curry ou blanche généreuses.",
							perk: "Formule étudiant 11 € avec boisson",
							image: bowl_crousty_curry_default
						},
						{
							id: "custom",
							emoji: "✨",
							tag: "Sur-Mesure",
							tagColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
							title: "Liberté & Transparence",
							desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
							perk: "Zéro compromis sur vos goûts",
							image: bowl_scampis_default
						}
					].map((val) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative flex flex-col justify-between overflow-hidden rounded-[32px] min-h-[380px] sm:min-h-[420px] p-6 text-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift border border-black/10 select-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: val.image,
								alt: val.title,
								className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 transition-opacity duration-300 group-hover:opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-md text-xl border border-white/20 shadow",
									children: val.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider shadow ${val.tagColor}`,
									children: val.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mt-auto pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl sm:text-2xl font-black uppercase tracking-tight text-white drop-shadow",
										children: val.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-white/85 font-medium line-clamp-3 drop-shadow",
										children: val.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-3 border-t border-white/20 flex items-center justify-between",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-[#EADCC9] drop-shadow",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), val.perk]
										})
									})
								]
							})
						]
					}, val.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#FAF7F2] shadow-soft transition hover:bg-[#8D522A] hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander en ligne à Visé" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/PokawaPerksBanner.tsx
function PokawaPerksBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-12 sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#2C1D16] via-[#142d26] to-[#0b1a16] p-7 sm:p-10 lg:p-14 text-white shadow-lift border border-white/10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ff705f]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#EADCC9] backdrop-blur-md border border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), "Service Express Poke N Bowl Visé"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
								children: "Commandez en direct au meilleur prix"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs sm:text-sm text-white/75 leading-relaxed",
								children: "Pas d'intermédiaire, préparation prioritaire en cuisine et ingrédients 100% personnalisables selon vos préférences et allergies."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-4 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EADCC9] text-[#2C1D16] text-sm font-black",
											children: "⚡"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Retrait Express"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Zéro attente au 12 Av. du Pont"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ff705f] text-white text-sm font-black",
											children: "🛵"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Livraison Locale"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Dès 2 € selon distance (0 € dès 50 €)"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur-sm border border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#EADCC9] text-sm font-black",
											children: "🎓"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-bold",
												children: "Formule 11 €"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-white/60",
												children: "Crousty Chicken + boisson 33cl"
											})]
										})]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/commander",
							className: "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#EADCC9] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander en ligne" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sur-mesure",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Créer mon Poké sur-mesure" })
						})]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/PokawaInstagramWall.tsx
var INSTA_POSTS = [
	{
		id: "post-1",
		image: bowl_saumon_default,
		likes: 248,
		comments: 19,
		caption: "Le Saumon Wasabi dans toute sa fraîcheur : avocat fondant, edamames croquants & sésame doré 🥑✨",
		tag: "#PokeBowlVisé"
	},
	{
		id: "post-2",
		image: bowl_sweet_chicken_default,
		likes: 312,
		comments: 24,
		caption: "Poulet mariné sweet & mangue fraîche du jour : le mix sucré-salé qui met tout le monde d'accord 🥭🍗",
		tag: "#SweetChicken"
	},
	{
		id: "post-3",
		image: bowl_scampis_default,
		likes: 195,
		comments: 14,
		caption: "Scampis Royaux sautés minute sur lit de riz à sushi vinaigré. Prêt en moins de 3 minutes pour votre pause déj 🦐",
		tag: "#FraisDuJour"
	},
	{
		id: "post-4",
		image: bowl_spicy_chicken_default,
		likes: 276,
		comments: 22,
		caption: "Pour ceux qui aiment quand ça réveille les papilles : Spicy Chicken et sauce pimentée maison 🔥",
		tag: "#SpicyVibes"
	}
];
function PokawaInstagramWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-16 sm:py-20 lg:py-24 border-b border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5" }), "La Communauté Poke N Bowl"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#2C1D16]",
							children: "L’actu sur nos réseaux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: [
								"Partagez vos bowls à Visé en story et taguez ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#2C1D16]",
									children: "@POKE_NBOWL"
								}),
								" pour être reposté !"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: INSTA_POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com/POKE_NBOWL",
						target: "_blank",
						rel: "noreferrer",
						className: "group relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#faf8f4] shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square w-full overflow-hidden bg-[#ece8dc]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.image,
									alt: post.caption,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-108",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 text-xs font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 fill-[#ff705f] text-[#ff705f]" }), post.likes]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 fill-white" }), post.comments]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-center text-[11px] leading-snug line-clamp-3 text-white/90",
											children: post.caption
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md",
											children: "Voir sur Instagram →"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-3 left-3 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-white shadow-sm group-hover:opacity-0 transition-opacity",
									children: post.tag
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 flex items-center justify-between text-xs text-[#68756f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-extrabold text-[#2C1D16]",
								children: "@POKE_NBOWL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 text-[#ff705f] group-hover:scale-110 transition-transform" })]
						})]
					}, post.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com/POKE_NBOWL",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2.5 rounded-full border-2 border-[#2C1D16] bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-soft transition hover:bg-[#2C1D16] hover:text-white hover:scale-105 active:scale-95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4 text-[#ff705f]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Suivez-nous sur Instagram @POKE_NBOWL" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 opacity-60" })
						]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/SocialProofBanner.tsx
function SocialProofBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Avis clients et gages de qualité Poke N Bowl Visé",
		className: "border-y border-[#E2D6C5] bg-[#FAF6F0] py-6 px-4 sm:px-6 lg:px-8 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] flex flex-col md:flex-row items-center justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3.5 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECE1] border border-[#DFCDB8] shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "🌟"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-black text-[#2C1D16]",
						children: "4.9 / 5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex text-amber-500",
						children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-500 text-amber-500" }, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-bold text-[#766358]",
					children: [
						"Sur Google · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f] font-black",
							children: "+350 clients conquis"
						}),
						" à Visé"
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full md:w-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-emerald-700 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "Prêt en 15-20 min"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Retrait express sans file"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "100% Fait Minute"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Saumon découpé du matin"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] px-3.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-black text-[#2C1D16]",
							children: "Cœur de Visé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-[#766358]",
							children: "Avenue du Pont 12"
						})] })]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/MobileAppStickyBar.tsx
function MobileAppStickyBar() {
	const { items, total, setIsCartOpen } = useCart();
	const [isVisible, setIsVisible] = import_react.useState(false);
	import_react.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250 || items.length > 0) setIsVisible(true);
			else setIsVisible(false);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [items.length]);
	const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const handleAction = () => {
		if (totalItemCount > 0) setIsCartOpen(true);
		else {
			const el = document.getElementById("carte");
			if (el) el.scrollIntoView({ behavior: "smooth" });
			else window.location.href = "/commander";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			y: 80,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		exit: {
			y: 80,
			opacity: 0
		},
		transition: {
			type: "spring",
			damping: 25,
			stiffness: 280
		},
		className: "fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[26px] bg-[#2C1D16]/95 backdrop-blur-xl border border-white/20 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-2.5 text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#composer",
				className: "flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] border border-white/15 active:scale-95 transition shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sur-mesure" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleAction,
				className: "flex-1 flex items-center justify-between rounded-full bg-[#EADCC9] px-4 py-2.5 text-[#2C1D16] shadow-lg transition active:scale-95 min-w-0 hover:bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 truncate",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2C1D16] text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), totalItemCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
							children: totalItemCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black uppercase tracking-wider truncate",
						children: totalItemCount > 0 ? `${totalItemCount} article${totalItemCount > 1 ? "s" : ""}` : "Commander"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 font-black text-xs shrink-0 ml-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: total > 0 ? `${total.toFixed(2)} €` : "La Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 stroke-[3]" })]
				})]
			})]
		})
	}) });
}
//#endregion
//#region src/components/PokawaCategoriesCarousel.tsx
var CATEGORIES = [
	{
		id: "pokes",
		title: "Pokés & Chirashis",
		badge: "Dès 10,00 €",
		badgeColor: "bg-[#2C1D16] text-[#EADCC9]",
		image: bowl_saumon_default,
		targetId: "carte",
		desc: "Saumon atlantique minute, poulet doré & scampis royaux"
	},
	{
		id: "crousty",
		title: "Gamme Chaude",
		badge: "Formule 11 € · Boisson Offerte",
		badgeColor: "bg-[#ea580c] text-white",
		image: bowl_crousty_curry_default,
		targetId: "carte",
		desc: "Crousty chicken chaud nappé de sauce curry ou blanche"
	},
	{
		id: "composer",
		title: "Atelier Sur-Mesure",
		badge: "Création Libre",
		badgeColor: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]",
		image: bowl_sweet_chicken_default,
		targetId: "composer",
		desc: "Composez votre recette de A à Z avec 5 mix-ins frais"
	},
	{
		id: "desserts",
		title: "Tiramisus Maison",
		badge: "4,00 € · Fait Maison",
		badgeColor: "bg-[#ff705f] text-white",
		image: tiramisu_speculoos_default,
		targetId: "carte",
		desc: "Spéculoos Lotus, Nutella fondant & Oreo croustillant"
	},
	{
		id: "boissons",
		title: "Boissons Fraîches",
		badge: "2,00 € · Extra Frais",
		badgeColor: "bg-[#0284c7] text-white",
		image: drink_coca_cola_default,
		targetId: "carte",
		desc: "Canettes 33cl servies givrées & eaux minérales SPA"
	}
];
function PokawaCategoriesCarousel() {
	const scrollRef = import_react.useRef(null);
	const handleScroll = (direction) => {
		if (scrollRef.current) {
			const offset = direction === "left" ? -340 : 340;
			scrollRef.current.scrollBy({
				left: offset,
				behavior: "smooth"
			});
		}
	};
	const scrollToTarget = (targetId) => {
		const el = document.getElementById(targetId);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Catégories gourmandes Poke N Bowl Visé",
		className: "py-14 sm:py-20 lg:py-24 bg-[#F5EFEB] border-b border-[#E2D6C5] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C1D16] border border-[#D9C5AD]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Fraîcheur & Gourmandise à Visé"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
						children: [
							"Vivez sainement, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:inline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#ff705f]",
								children: "soyez gourmands."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium max-w-xl",
						children: "Chaque univers est préparé minute avec des produits rigoureusement sélectionnés. Glissez pour explorer :"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-start sm:self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleScroll("left"),
						"aria-label": "Catégories précédentes",
						className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleScroll("right"),
						"aria-label": "Catégories suivantes",
						className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] hover:bg-[#2C1D16] hover:text-[#FAF7F2] transition active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex items-stretch gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory",
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -6 },
					transition: { duration: .25 },
					onClick: () => scrollToTarget(cat.targetId),
					className: "group flex-shrink-0 w-[270px] sm:w-[290px] snap-start cursor-pointer select-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-[30px] bg-[#e9e5dc] shadow-card transition-all duration-300 group-hover:shadow-lift border border-[#E2D6C5]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: cat.title,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-108"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md ${cat.badgeColor}`,
								children: cat.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-4 inset-x-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold text-white/90 drop-shadow line-clamp-1",
									children: cat.desc
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2C1D16] group-hover:text-[#ff705f] transition",
							children: cat.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF7F2] border border-[#E2D6C5] shadow-sm text-[#2C1D16] transition duration-300 group-hover:bg-[#2C1D16] group-hover:text-[#FAF7F2] group-hover:translate-x-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				}, cat.id))
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var RESTAURANT_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FastFoodRestaurant",
	"name": "Poke N Bowl Visé",
	"image": "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg",
	"telephone": "+32490000000",
	"url": "https://pokenbowl.be",
	"address": {
		"@type": "PostalAddress",
		"streetAddress": "Avenue du Pont 12",
		"addressLocality": "Visé",
		"postalCode": "4600",
		"addressCountry": "BE"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": 50.7333,
		"longitude": 5.6942
	},
	"servesCuisine": [
		"Poké bowl",
		"Fast casual",
		"Asian",
		"Halal"
	],
	"priceRange": "€€",
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "12:00",
			"closes": "14:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "17:00",
			"closes": "21:00"
		},
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": ["Saturday"],
			"opens": "18:00",
			"closes": "21:00"
		}
	]
};
var Route$19 = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" }, {
			name: "description",
			content: "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon sashimi minute, Crousty Chicken chaud et desserts maison. Commande en ligne ou sur place !"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(RESTAURANT_SCHEMA)
		}]
	}),
	component: Index
});
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
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
	const items = Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "mx-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] sm:text-[11px]",
		children: [
			"Poke N Bowl",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#ff705f]",
				children: "✦"
			}),
			"Fresh Food Visé",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#ff705f]",
				children: "✦"
			}),
			"Fait Minute",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#ff705f]",
				children: "✦"
			}),
			"Crousty Chicken",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#ff705f]",
				children: "✦"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#2C1D16] py-3.5 text-[#EADCC9] border-y border-[#462E23] shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: { x: ["0%", "-50%"] },
			transition: {
				duration: 28,
				repeat: Infinity,
				ease: "linear"
			},
			className: "flex w-max whitespace-nowrap",
			children: [items, items]
		})
	});
}
function Index() {
	const { t } = useTranslation();
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
		className: "min-h-screen overflow-x-clip bg-[#F6F1E9] text-[#2C1D16]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaFloatingNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaHeroExact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaCategoriesCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialProofBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluidInteractiveMenu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "valeurs",
					className: "scroll-mt-12 bg-[#FAF6F0]/80 py-14 sm:py-20 border-b border-[#E2D6C5]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaBrandValues, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaPerksBanner, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaInstagramWall, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1240px] items-center justify-between gap-5 rounded-[28px] bg-gradient-to-r from-[#2C1D16] via-[#16332b] to-[#1c3e34] text-white p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[34px] sm:p-9 shadow-card border border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-black text-white",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EADCC9] text-[#2C1D16] transition group-hover:scale-110 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "infos",
					className: "scroll-mt-10 bg-[#ece9df] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-t border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1340px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/15 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Visé, Belgique · Avenue du Pont 12"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm sm:text-base text-[#766358] font-medium",
									children: "À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé."
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col h-full overflow-hidden rounded-[32px] border border-[#E2D6C5] bg-[#FAF7F2] shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-b border-[#E2D6C5] bg-[#F3ECE1] p-5 sm:px-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#EADCC9] border border-[#D9C5AD] text-xs font-black text-[#2C1D16]",
												children: "📍"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-extrabold text-[#2C1D16] text-base",
												children: "Poke N Bowl Visé"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#766358] mt-0.5",
											children: "Avenue du Pont 12, 4600 Visé, Belgique"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-bold text-[#FAF7F2] shadow-sm transition hover:bg-[#8D522A]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Itinéraire Google Maps" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative min-h-[380px] sm:min-h-[420px] flex-1 w-full bg-[#e5e3df]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: "Carte interactive Google Maps Poké N Bowl Visé",
											src: "https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed",
											className: "absolute inset-0 h-full w-full border-0",
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 bg-[#F3ECE1] p-4 text-[11px] font-semibold text-[#766358] border-t border-[#E2D6C5]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🚗 Parking facile à proximité" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🚶 Au cœur de Visé" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵 Retrait Click & Collect express" })
										]
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between h-full space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-[#E2D6C5] pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-9 w-9 items-center justify-center rounded-2xl bg-[#2C1D16] text-[#EADCC9]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[#ff705f]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-black text-[#2C1D16]",
													children: "Horaires d'ouverture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-[#766358]",
													children: "Poke N Bowl Visé · En plein centre"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] px-3 py-1 text-[10px] font-bold uppercase",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Du Lundi au Vendredi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Service midi & soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#2C1D16]",
															children: "12:00 – 14:00"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#2C1D16]",
															children: "17:00 – 21:00"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Samedi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Service du soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-[#2C1D16]",
														children: "18:00 – 21:00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#F3ECE1] border border-[#E2D6C5] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Dimanche"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#766358] font-medium",
														children: "Fermeture hebdomadaire"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-extrabold text-[#ff705f]",
														children: "Fermé"
													})]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[32px] bg-[#FAF7F2] border border-[#E2D6C5] shadow-card p-6 sm:p-7 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-bold uppercase tracking-wider text-[#ff705f]",
														children: "Commandes & Renseignements"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-[#766358] font-bold",
													children: "Appel direct"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col sm:flex-row gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "tel:+32491281456",
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#ff705f] py-3.5 px-4 text-xs font-bold text-white shadow-soft transition hover:bg-[#ff5542]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0491 28 14 56" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://instagram.com/POKE_NBOWL",
													target: "_blank",
													rel: "noreferrer",
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#E2D6C5] bg-[#F3ECE1] py-3.5 px-4 text-xs font-bold text-[#2C1D16] transition hover:bg-[#EAE0D2]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram @POKE_NBOWL" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-[#F3ECE1] px-4 py-2.5 text-xs text-[#766358] flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "🛵 Livraison à domicile disponible"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/commander",
													className: "font-bold text-[#2C1D16] hover:underline",
													children: "Commander en ligne →"
												})]
											})
										]
									})]
								})
							})]
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[#1C120C] px-4 py-10 pb-24 text-[#EADCC9] sm:px-6 sm:pb-10 lg:px-8 border-t border-[#352117]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1340px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-5 text-[10px] font-black uppercase tracking-[0.14em] text-[#EADCC9]/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#carte",
									className: "transition hover:text-white",
									children: t("nav.menu")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#composer",
									className: "transition hover:text-white",
									children: "Sur-Mesure"
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
							className: "text-[10px] font-bold uppercase tracking-[0.12em] text-[#EADCC9]/40",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl Visé · Tous droits réservés"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileAppStickyBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CroustyNotificationToast, {})
		]
	});
}
//#endregion
//#region src/lib/orders.ts
function generateOrderId() {
	return `PNB-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
//#endregion
//#region src/lib/env.server.ts
function parseEnvFile(filePath) {
	try {
		if (!fs.existsSync(filePath)) return {};
		const content = fs.readFileSync(filePath, "utf-8");
		const result = {};
		for (const rawLine of content.split("\n")) {
			const line = rawLine.trim();
			if (!line || line.startsWith("#")) continue;
			const eqIdx = line.indexOf("=");
			if (eqIdx === -1) continue;
			const key = line.slice(0, eqIdx).trim();
			let val = line.slice(eqIdx + 1).trim();
			if (val.startsWith("\"") && val.endsWith("\"") || val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
			result[key] = val;
		}
		return result;
	} catch {
		return {};
	}
}
var loaded = false;
var candidateFiles = [
	path.resolve(process.cwd(), ".env"),
	path.resolve(process.cwd(), ".env.local"),
	"/home/puzo3938/pokenbowl.be/.env",
	"/home/puzo3938/.env",
	"/home/puzo3938/repositories/pokebowlfresh-git/.env",
	"/home/puzo3938/repositories/pokebowlfresh-cpanel/.env"
];
function getCheckedFiles() {
	return candidateFiles.map((f) => ({
		file: f,
		exists: fs.existsSync(f)
	}));
}
function loadAndGetEnv() {
	if (!loaded) {
		for (const file of candidateFiles) {
			const parsed = parseEnvFile(file);
			for (const [k, v] of Object.entries(parsed)) if (!process.env[k]) process.env[k] = v;
		}
		loaded = true;
	}
	return process.env;
}
function getAllBankKeyCandidates() {
	const env = loadAndGetEnv();
	const bankPatterns = [
		"BANCONTACT",
		"PAYCONIQ",
		"MOLLIE",
		"STRIPE",
		"PAYMENT",
		"VIVA",
		"WORLDLINE"
	];
	const found = [];
	for (const [k, v] of Object.entries(env)) {
		if (!v) continue;
		const upper = k.toUpperCase();
		if (bankPatterns.some((pattern) => upper.includes(pattern)) || upper === "API_KEY") {
			const str = String(v).trim();
			const masked = str.length > 8 ? `${str.slice(0, 4)}...${str.slice(-4)} (${str.length} chars)` : `**** (${str.length} chars)`;
			found.push({
				name: k,
				source: "process.env",
				maskedValue: masked,
				value: str
			});
		}
	}
	return found;
}
//#endregion
//#region src/lib/bancontact-pro.server.ts
function getBancontactProApiKey() {
	const env = loadAndGetEnv();
	const candidate = env.BANCONTACT_PRO_API_KEY || env.PAYCONIQ_API_KEY || env.BANCONTACT_API_KEY || env.BANCONTACT_KEY || env.PAYCONIQ_KEY;
	if (candidate && (candidate.startsWith("live_") || candidate.startsWith("test_"))) return;
	return candidate?.trim();
}
function isBancontactProConfigured() {
	return Boolean(getBancontactProApiKey());
}
function getAuthHeader(apiKey) {
	const clean = apiKey.trim();
	return clean.toLowerCase().startsWith("bearer ") ? clean : `Bearer ${clean}`;
}
var CANDIDATE_PROD_URLS = ["https://api.payconiq.com/v3", "https://merchant.api.bancontact.net/v3"];
var CANDIDATE_PREPROD_URLS = [
	"https://api.ext.payconiq.com/v3",
	"https://api.preprod.payconiq.com/v3",
	"https://merchant.api.preprod.bancontact.net/v3"
];
function getCandidateUrls() {
	const env = (process.env.BANCONTACT_PRO_ENV || "production").toLowerCase();
	return env === "preprod" || env === "test" ? CANDIDATE_PREPROD_URLS : CANDIDATE_PROD_URLS;
}
async function createBancontactProPayment(params) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.");
	const amountCents = Math.round(params.amountEur * 100);
	const urls = getCandidateUrls();
	let lastErr = "";
	for (const baseUrl of urls) try {
		const res = await fetch(`${baseUrl}/payments`, {
			method: "POST",
			headers: {
				Authorization: getAuthHeader(apiKey),
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				amount: amountCents,
				currency: "EUR",
				description: params.description,
				reference: params.reference,
				returnUrl: params.returnUrl,
				callbackUrl: params.callbackUrl
			})
		});
		if (res.ok) return await res.json();
		lastErr = await res.text();
	} catch (e) {
		lastErr = e?.message ?? String(e);
	}
	throw new Error(`Bancontact Pro create payment failed: ${lastErr}`);
}
async function getBancontactProPayment(paymentId) {
	const apiKey = getBancontactProApiKey();
	if (!apiKey) throw new Error("BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.");
	const urls = getCandidateUrls();
	let lastErr = "";
	for (const baseUrl of urls) try {
		const res = await fetch(`${baseUrl}/payments/${paymentId}`, { headers: {
			Authorization: getAuthHeader(apiKey),
			Accept: "application/json"
		} });
		if (res.ok) return await res.json();
		lastErr = await res.text();
	} catch (e) {
		lastErr = e?.message ?? String(e);
	}
	throw new Error(`Bancontact Pro get payment failed: ${lastErr}`);
}
//#endregion
//#region src/lib/mollie.server.ts
/**
* Server-only Mollie helpers.
* Requires env: MOLLIE_API_KEY (test_… or live_…)
*/
var MOLLIE_API = "https://api.mollie.com/v2";
function getMollieApiKey() {
	const env = loadAndGetEnv();
	const direct = env.MOLLIE_API_KEY || env.MOLLIE_KEY;
	if (direct) return direct.trim();
	const candidates = [
		env.BANCONTACT_PRO_API_KEY,
		env.PAYCONIQ_API_KEY,
		env.BANCONTACT_API_KEY,
		env.API_KEY
	];
	for (const c of candidates) if (c && (c.startsWith("live_") || c.startsWith("test_"))) return c.trim();
}
function isMollieConfigured() {
	return Boolean(getMollieApiKey());
}
function getApiKey() {
	const key = getMollieApiKey();
	if (!key) throw new Error("MOLLIE_API_KEY manquante. Renseigne la variable MOLLIE_API_KEY sur cPanel ou dans le fichier .env.");
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
//#endregion
//#region src/lib/order-store.ts
function isPostgresConfigured() {
	return Boolean(process.env.DATABASE_URL?.trim());
}
var memoryOrders = /* @__PURE__ */ new Map();
var lastLoadedTime = 0;
function getStoreCandidatePaths() {
	const candidateDirs = [
		process.env.ORDERS_DATA_DIR,
		"/home/puzo3938/pokenbowl.be",
		process.cwd(),
		"/tmp"
	].filter(Boolean);
	const paths = [];
	for (const dir of candidateDirs) try {
		paths.push(path.join(dir, "pokenbowl-orders.json"));
	} catch {}
	return paths;
}
function loadLocalOrders(force = false) {
	const now = Date.now();
	if (!force && now - lastLoadedTime < 300 && memoryOrders.size > 0) return;
	lastLoadedTime = now;
	const candidates = getStoreCandidatePaths();
	for (const filePath of candidates) try {
		if (fs.existsSync(filePath)) {
			const raw = fs.readFileSync(filePath, "utf-8");
			if (raw && raw.trim().length > 2) {
				const list = JSON.parse(raw);
				if (Array.isArray(list)) {
					for (const item of list) if (item?.id) {
						const existing = memoryOrders.get(item.id);
						if (!existing || item.status !== existing.status || item.deliveryToken || !existing.deliveryToken) memoryOrders.set(item.id, item);
					}
				}
			}
		}
	} catch (err) {}
}
function saveLocalOrders() {
	try {
		const list = Array.from(memoryOrders.values());
		const jsonStr = JSON.stringify(list, null, 2);
		const candidates = getStoreCandidatePaths();
		for (const filePath of candidates) try {
			const dir = path.dirname(filePath);
			if (fs.existsSync(dir)) fs.writeFileSync(filePath, jsonStr, "utf-8");
		} catch {}
		try {
			fs.writeFileSync("/tmp/pokenbowl-orders.json", jsonStr, "utf-8");
		} catch {}
	} catch (err) {
		console.error("[OrderStore] Échec sauvegarde fichier local commandes:", err);
	}
}
var schemaReady;
function getSql() {
	const url = process.env.DATABASE_URL;
	if (!url) throw new Error("DATABASE_URL manquante. Connecte une base Postgres Neon au projet.");
	return cs(url);
}
async function ensureSchema() {
	if (!schemaReady) schemaReady = (async () => {
		const sql = getSql();
		await sql`
        CREATE TABLE IF NOT EXISTS orders (
          id TEXT PRIMARY KEY,
          delivery_token TEXT,
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
        ALTER TABLE orders ADD COLUMN IF NOT EXISTS delivery_token TEXT
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
		await sql`
        CREATE UNIQUE INDEX IF NOT EXISTS orders_delivery_token_idx
        ON orders (delivery_token) WHERE delivery_token IS NOT NULL
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
		deliveryToken: row.delivery_token ?? void 0,
		createdAt: row.created_at,
		status: row.status,
		paymentMethod: row.payment_method,
		molliePaymentId: row.mollie_payment_id ?? void 0,
		customer: JSON.parse(row.customer_json),
		items: JSON.parse(row.items_json),
		total: Number(row.total),
		currency: row.currency,
		printStatus: row.print_status,
		printedAt: row.printed_at,
		printAttempts: row.print_attempts,
		printError: row.print_error
	};
}
async function getOrderFromStore(id) {
	const rawId = (id ?? "").trim();
	if (!rawId) return void 0;
	const cleanId = decodeURIComponent(rawId).trim();
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	const localMatch = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => {
		if (!o) return false;
		const oId = (o.id ?? "").trim();
		const dt = (o.deliveryToken ?? "").trim();
		return oId === cleanId || oId.toLowerCase() === lowerId || dt === cleanId || dt.toLowerCase() === lowerId;
	});
	if (localMatch) return localMatch;
	if (isPostgresConfigured()) try {
		await ensureSchema();
		const row = (await getSql()`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE id = ${cleanId}
           OR delivery_token = ${cleanId}
           OR LOWER(id) = ${lowerId}
           OR LOWER(delivery_token) = ${lowerId}
        LIMIT 1
      `)[0];
		if (row) return rowToOrder(row);
	} catch (err) {
		console.error("[OrderStore] Erreur getOrderFromStore Postgres:", err);
	}
}
async function getOrderByDeliveryToken(token) {
	const rawToken = (token ?? "").trim();
	if (!rawToken) return void 0;
	const cleanToken = decodeURIComponent(rawToken).trim();
	const lowerToken = cleanToken.toLowerCase();
	loadLocalOrders(true);
	const localMatch = Array.from(memoryOrders.values()).find((o) => {
		if (!o) return false;
		const dt = (o.deliveryToken ?? "").trim();
		const id = (o.id ?? "").trim();
		return dt && (dt === cleanToken || dt.toLowerCase() === lowerToken) || id && (id === cleanToken || id.toLowerCase() === lowerToken);
	});
	if (localMatch) return localMatch;
	if (isPostgresConfigured()) try {
		await ensureSchema();
		const row = (await getSql()`
        SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
               customer_json, items_json, total, currency,
               print_status, printed_at, print_claimed_at, print_attempts, print_error
        FROM orders
        WHERE delivery_token = ${cleanToken}
           OR id = ${cleanToken}
           OR LOWER(delivery_token) = ${lowerToken}
           OR LOWER(id) = ${lowerToken}
        LIMIT 1
      `)[0];
		if (row) return rowToOrder(row);
	} catch (err) {
		console.error("[OrderStore] Erreur getOrderByDeliveryToken Postgres:", err);
	}
}
async function listOrdersFromStore(limit = 200) {
	loadLocalOrders(true);
	if (!isPostgresConfigured()) return Array.from(memoryOrders.values()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
	try {
		await ensureSchema();
		return (await getSql()`
      SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
             customer_json, items_json, total, currency,
             print_status, printed_at, print_claimed_at, print_attempts, print_error
      FROM orders
      ORDER BY created_at DESC
      LIMIT ${limit}
    `).map(rowToOrder);
	} catch (err) {
		console.error("[OrderStore] Erreur listOrdersFromStore Postgres, fallback local:", err);
		return Array.from(memoryOrders.values()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit);
	}
}
async function upsertOrder(order) {
	loadLocalOrders(true);
	memoryOrders.set(order.id, { ...order });
	saveLocalOrders();
	if (!isPostgresConfigured()) return;
	try {
		await ensureSchema();
		await getSql()`
      INSERT INTO orders (
        id, delivery_token, created_at, status, payment_method, mollie_payment_id,
        customer_json, items_json, total, currency
      )
      VALUES (
        ${order.id},
        ${order.deliveryToken ?? null},
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
        delivery_token = COALESCE(EXCLUDED.delivery_token, orders.delivery_token),
        status = EXCLUDED.status,
        payment_method = EXCLUDED.payment_method,
        mollie_payment_id = EXCLUDED.mollie_payment_id,
        customer_json = EXCLUDED.customer_json,
        items_json = EXCLUDED.items_json,
        total = EXCLUDED.total,
        currency = EXCLUDED.currency
    `;
	} catch (err) {
		console.error("[OrderStore] Erreur upsertOrder Postgres:", err);
	}
}
async function updateOrderStatus(orderId, status) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	const lowerId = cleanId.toLowerCase();
	loadLocalOrders(true);
	let order = memoryOrders.get(cleanId);
	if (!order) order = Array.from(memoryOrders.values()).find((o) => o.id && o.id.toLowerCase() === lowerId || o.deliveryToken && o.deliveryToken.toLowerCase() === lowerId);
	if (order) {
		order.status = status;
		memoryOrders.set(order.id, order);
		saveLocalOrders();
	}
	if (isPostgresConfigured()) try {
		await ensureSchema();
		await getSql()`
        UPDATE orders
        SET status = ${status}
        WHERE id = ${cleanId}
           OR delivery_token = ${cleanId}
           OR LOWER(id) = ${lowerId}
           OR LOWER(delivery_token) = ${lowerId}
      `;
	} catch (err) {
		console.error("[OrderStore] Erreur updateOrderStatus Postgres:", err);
	}
}
async function requestOrderReprint(orderId) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId);
		if (order) {
			order.printStatus = "pending";
			order.printError = null;
			saveLocalOrders();
		}
		return;
	}
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET print_status = 'pending',
        print_claimed_at = NULL,
        print_error = NULL
    WHERE id = ${cleanId}
  `;
}
async function claimNextPrintJob() {
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const eligible = [
			"paid",
			"awaiting_pickup",
			"awaiting_delivery",
			"preparing",
			"ready",
			"delivering"
		];
		const next = Array.from(memoryOrders.values()).filter((o) => eligible.includes(o.status) && (o.printStatus === "pending" || !o.printStatus)).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())[0];
		if (next) {
			next.printStatus = "printing";
			next.printAttempts = (next.printAttempts || 0) + 1;
			saveLocalOrders();
		}
		return next;
	}
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
      WHERE status IN ('paid', 'awaiting_pickup', 'awaiting_delivery', 'preparing', 'ready', 'delivering')
        AND (
          print_status = 'pending'
          OR (print_status = 'printing' AND print_claimed_at < NOW() - INTERVAL '2 minutes')
        )
      ORDER BY created_at ASC
      LIMIT 1
      FOR UPDATE SKIP LOCKED
    )
    RETURNING id, delivery_token, created_at, status, payment_method, mollie_payment_id,
              customer_json, items_json, total, currency,
              print_status, printed_at, print_claimed_at, print_attempts, print_error
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function acknowledgePrint(orderId, success, errorMessage) {
	const cleanId = (orderId ?? "").trim();
	if (!cleanId) return;
	if (!isPostgresConfigured()) {
		loadLocalOrders(true);
		const order = memoryOrders.get(cleanId) || Array.from(memoryOrders.values()).find((o) => o.id.toLowerCase() === cleanId.toLowerCase() || o.deliveryToken === cleanId);
		if (order) {
			if (success) {
				order.printStatus = "printed";
				order.printedAt = (/* @__PURE__ */ new Date()).toISOString();
				order.printError = null;
			} else {
				order.printStatus = "failed";
				order.printError = errorMessage ?? "Échec imprimante";
			}
			saveLocalOrders();
		}
		return;
	}
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
    SET print_status = 'failed',
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
			if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) unitPrice += 3;
			if (opts.some((t) => /saumon/i.test(t))) unitPrice += 1;
			const mixInsLine = opts.find((t) => /^Mix-ins?\s*:/i.test(t));
			if (mixInsLine) {
				const rawMixIns = mixInsLine.replace(/^Mix-ins?\s*:\s*/i, "").replace(/\s*\(\+[\d.,]+€\)\s*$/, "").split(",").map((s) => s.trim()).filter((s) => s.length > 0);
				const extraMixIns = Math.max(0, rawMixIns.length - 5);
				unitPrice += extraMixIns * .5;
			}
			const toppingLine = opts.find((t) => /^Toppings?\s*:/i.test(t));
			if (toppingLine) {
				const rawContent = toppingLine.replace(/^Toppings?\s*:\s*/i, "").replace(/\s*\(\+[\d.,]+€\)\s*$/, "");
				let totalToppingUnits = 0;
				if (!/aucun/i.test(rawContent)) {
					const parts = rawContent.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
					for (const part of parts) {
						const match = part.match(/\(x(\d+)\)/i) || part.match(/x(\d+)/i);
						const count = match ? parseInt(match[1], 10) : 1;
						totalToppingUnits += isNaN(count) ? 1 : count;
					}
				}
				const extraToppings = Math.max(0, totalToppingUnits - 2);
				unitPrice += extraToppings * .5;
			} else {
				const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
				let totalToppingUnits = 0;
				for (const t of individualToppings) {
					const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
					const count = match ? parseInt(match[1], 10) : 1;
					totalToppingUnits += isNaN(count) ? 1 : count;
				}
				const extraToppings = Math.max(0, totalToppingUnits - 2);
				unitPrice += extraToppings * .5;
			}
			return {
				...item,
				name: "Poke Bowl sur mesure",
				price: unitPrice,
				toppings: opts
			};
		}
		const bowl = bowls.find((b) => b.id === item.id || item.id === `${b.id}-moyen` || item.id === `${b.id}-grand` || item.id.startsWith(b.id));
		if (bowl) {
			let unitPrice = bowl.price;
			const opts = item.toppings ?? [];
			if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) unitPrice += 3;
			const toppingEntries = opts.filter((t) => /^Topping/i.test(t));
			let totalSignatureToppings = 0;
			for (const t of toppingEntries) {
				const match = t.match(/\(x(\d+)\)/i) || t.match(/x(\d+)/i);
				const count = match ? parseInt(match[1], 10) : 1;
				totalSignatureToppings += isNaN(count) ? 1 : count;
			}
			unitPrice += totalSignatureToppings * .5;
			const extraSauces = opts.filter((t) => /sauce extra/i.test(t));
			unitPrice += extraSauces.length * 1;
			return {
				...item,
				name: bowl.name,
				price: unitPrice,
				toppings: opts
			};
		}
		if (item.id === "tira-nutella") throw new Error("Le Tiramisu Nutella est actuellement victime de son succès (sold out).");
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
		if (data.paymentMethod === "on_site") throw new Error("Le paiement sur place n'est pas disponible pour la livraison à domicile. Veuillez régler en ligne.");
		if (!deliveryZone) throw new Error("Cette zone de livraison n'est pas desservie.");
		if (subtotal < deliveryZone.minimumOrder) throw new Error(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
		if (!data.customer.address?.trim() || !data.customer.city?.trim()) throw new Error("Adresse de livraison incomplète.");
	}
	const deliveryFee = deliveryZone ? subtotal >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const total = subtotal + deliveryFee;
	const orderId = generateOrderId();
	const order = {
		id: orderId,
		deliveryToken: crypto.randomUUID().replace(/-/g, ""),
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
	if (isMollieConfigured() && !isBancontactProConfigured()) {
		const webhookUrl = `${data.origin}/api/mollie-webhook`;
		const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=mollie`;
		const payment = await createMolliePayment({
			amountValue: total.toFixed(2),
			description: `Poke N Bowl ${orderId}`,
			redirectUrl,
			webhookUrl,
			metadata: { orderId: order.id }
		});
		order.molliePaymentId = payment.id;
		await upsertOrder(order);
		const payUrl = payment._links?.checkout?.href;
		if (!payUrl) throw new Error("Mollie n'a pas renvoyé d'URL de paiement.");
		return {
			type: "online",
			orderId: order.id,
			total: order.total,
			molliePaymentId: payment.id,
			redirectUrl: payUrl
		};
	}
	const webhookUrl = `${data.origin}/api/bancontact-webhook`;
	const redirectUrl = `${data.origin}/order/success?orderId=${encodeURIComponent(order.id)}&method=bancontact`;
	const payment = await createBancontactProPayment({
		amountEur: total,
		description: `Poke N Bowl ${orderId}`,
		reference: order.id,
		returnUrl: redirectUrl,
		callbackUrl: webhookUrl
	});
	order.molliePaymentId = `bancontact:${payment.paymentId}`;
	await upsertOrder(order);
	const payUrl = payment._links?.checkout?.href || payment._links?.deeplink?.href || payment._links?.qrcode?.href;
	if (!payUrl) throw new Error("Bancontact Pro n'a pas renvoyé d'URL de paiement");
	return {
		type: "online",
		orderId: order.id,
		total: order.total,
		molliePaymentId: payment.paymentId,
		redirectUrl: payUrl
	};
});
var getOrderStatus = createServerFn({ method: "GET" }).validator(objectType({ orderId: stringType().min(1) })).handler(async ({ data }) => {
	let order = await getOrderFromStore(data.orderId);
	if (order?.molliePaymentId && order.status === "pending_payment") if (order.molliePaymentId.startsWith("bancontact:")) {
		const paymentId = order.molliePaymentId.slice(11);
		try {
			const payment = await getBancontactProPayment(paymentId);
			if (payment.status === "SUCCEEDED") {
				order = {
					...order,
					status: "paid"
				};
				await upsertOrder(order);
			} else if (payment.status === "CANCELLED" || payment.status === "EXPIRED" || payment.status === "FAILED" || payment.status === "VOIDED") {
				order = {
					...order,
					status: payment.status === "EXPIRED" ? "expired" : "cancelled"
				};
				await upsertOrder(order);
			}
		} catch {}
	} else try {
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
var Route$18 = createFileRoute("/checkout")({ component: CheckoutPage });
function CheckoutPage() {
	const { items, total, clearCart } = useCart();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [fulfillment, setFulfillment] = (0, import_react.useState)("delivery");
	const pickupOptions = (0, import_react.useMemo)(() => buildPickupSlots(), []);
	const [requestedTime, setRequestedTime] = (0, import_react.useState)(() => buildPickupSlots()[0] ?? "");
	const [address, setAddress] = (0, import_react.useState)("");
	const [postalCode, setPostalCode] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("");
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("online");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const normalizedPostal = postalCode.trim().replace(/\s+/g, "");
	const deliveryZone = (0, import_react.useMemo)(() => getDeliveryZone(postalCode), [postalCode]);
	const deliveryFee = fulfillment === "delivery" && deliveryZone ? total >= 50 ? 0 : deliveryZone.feeUnder50 : 0;
	const orderTotal = total + deliveryFee;
	const handleFulfillmentChange = (method) => {
		setFulfillment(method);
		if (method === "delivery") setPaymentMethod("online");
	};
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] flex flex-col items-center justify-center px-5",
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
		if (fulfillment === "delivery") {
			if (paymentMethod === "on_site") {
				setError("Le paiement sur place n'est pas autorisé pour la livraison à domicile. Veuillez régler en ligne.");
				return;
			}
			if (!deliveryZone) {
				setError("Cette zone de livraison n'est pas desservie. Veuillez choisir « Retrait sur place ».");
				return;
			}
			if (total < deliveryZone.minimumOrder) {
				setError(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
				return;
			}
		}
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
					toppings: [...item.toppings, ...item.removedIngredients && item.removedIngredients.length > 0 ? [`Sans : ${item.removedIngredients.join(", ")}`] : []]
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
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl",
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
										onClick: () => handleFulfillmentChange("delivery"),
										className: `rounded-2xl border-2 p-4 text-left transition ${fulfillment === "delivery" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "🛵 Livraison"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "À domicile selon ton code postal"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleFulfillmentChange("pickup"),
										className: `rounded-2xl border-2 p-4 text-left transition ${fulfillment === "pickup" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-black",
											children: "🛍️ Retrait sur place"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-xs text-[#7a847e]",
											children: "Poke N Bowl Visé (Sans minimum)"
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
												placeholder: "toi@email.com"
											})]
										}),
										fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-[#7a847e]",
													children: "Adresse de livraison *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													value: address,
													onChange: (e) => setAddress(e.target.value),
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
													className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
													placeholder: "Visé"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [
													!normalizedPostal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-xl bg-[#F6F1E9] px-4 py-3 text-xs font-medium text-[#7a847e]",
														children: "Entre ton code postal pour calculer les frais de livraison (19 zones desservies autour de Visé)."
													}),
													normalizedPostal.length >= 4 && !deliveryZone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-bold text-red-700",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0 text-red-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Code postal ",
															normalizedPostal,
															" non desservi en livraison."
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block font-normal text-red-600 mt-0.5",
															children: "Choisis l'option « Retrait sur place » pour retirer ta commande au restaurant."
														})] })]
													}),
													deliveryZone && total < deliveryZone.minimumOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs font-bold text-amber-900",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0 text-amber-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Minimum de commande : € ",
															deliveryZone.minimumOrder.toFixed(2),
															" pour ce code postal."
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "block font-normal text-amber-700 mt-0.5",
															children: [
																"Il te manque encore € ",
																(deliveryZone.minimumOrder - total).toFixed(2),
																" pour valider la livraison."
															]
														})] })]
													}),
													deliveryZone && total >= deliveryZone.minimumOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-bold text-emerald-800",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 shrink-0 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Zone validée : frais de livraison ",
															total >= 50 ? "offerts 🎉" : `de € ${deliveryZone.feeUnder50.toFixed(2)}`,
															" (livraison offerte dès 50 €)"
														] })]
													})
												]
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
												className: "mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
												className: "mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]",
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
								}), fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border-2 border-[#ff705f] bg-[#fff5f3] p-4 text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]",
													children: "Bancontact & En ligne"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-sm font-black text-[#17231f]",
												children: "Paiement en ligne sécurisé"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Application bancaire belge, Payconiq (QR code) ou Carte bancaire"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 rounded-xl bg-[#F6F1E9] p-3 text-xs text-[#766358] border border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Paiement en ligne requis pour la livraison à domicile." }), " (Le paiement sur place est réservé au retrait au restaurant)."] })]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("online"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "online" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between w-full",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-5 w-5 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]",
													children: "Bancontact"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Bancontact & En ligne"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Bancontact Pro, Payconiq, Carte bancaire"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setPaymentMethod("on_site"),
										className: `flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${paymentMethod === "on_site" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#F6F1E9] hover:border-black/20"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-5 w-5 text-[#ff705f]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black",
												children: "Payer sur place"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-[#7a847e]",
												children: "Espèces ou Bancontact au comptoir lors du retrait"
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
						className: "h-fit rounded-[24px] bg-[#2C1D16] p-6 text-white lg:sticky lg:top-24",
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
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-bold",
												children: [
													item.quantity,
													"× ",
													item.name
												]
											}),
											item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-white/50",
												children: item.toppings.join(", ")
											}),
											item.removedIngredients && item.removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-[#ff705f] font-bold",
												children: ["✕ Sans : ", item.removedIngredients.join(", ")]
											})
										]
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
											className: "text-2xl font-black text-[#ff705f]",
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
		available: d.soldOut ? false : true,
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
	if (desserts.find((item) => item.id === id)?.soldOut) return false;
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
var DESSERT_IMAGES = {
	"tira-spec": tiramisu_speculoos_default,
	"tira-nutella": tiramisu_nutella_default,
	"tira-oreo": tiramisu_oreo_default
};
var DRINK_IMAGES = {
	coca: drink_coca_cola_default,
	"coca-zero": drink_coca_zero_default,
	fanta: drink_fanta_orange_default,
	"ice-tea": drink_ice_tea_default,
	"eau-plate": drink_eau_plate_default,
	"eau-gaz": drink_eau_gazeuse_default
};
var Route$17 = createFileRoute("/commander")({ component: CommanderPage });
var TAG_STYLES$1 = {
	signature: "bg-[#2C1D16] text-[#EADCC9]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]"
};
function CommanderPage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
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
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl",
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
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
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
								className: "relative rounded-full bg-[#2C1D16] p-3 text-white transition hover:bg-[#1e3d33]",
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
				className: "relative overflow-hidden bg-[#2C1D16] px-5 py-14 text-white sm:px-8 sm:py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" }),
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
									className: "text-[10px] font-black uppercase tracking-[0.28em] text-[#EADCC9]",
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
						className: "mb-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2C1D16] via-[#153028] to-[#1c3a31] p-6 text-white shadow-lift sm:p-8",
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
										className: "absolute bottom-1.5 left-1.5 rounded-full bg-[#2C1D16]/90 px-2 py-0.5 text-[9px] font-black uppercase text-[#EADCC9]",
										children: "5 étapes"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-[#ff705f]" }), " Fiche officielle restaurant"]
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
										className: "text-2xl font-black text-[#ff705f]",
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
						children: pokeBowls.map((bowl) => {
							const ok = available(bowl.id);
							const tagStyle = TAG_STYLES$1[bowl.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";
							return ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: "group block overflow-hidden rounded-[28px] bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
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
						className: "mt-16 sm:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Formule Étudiant 11€"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl",
									children: "Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm text-[#7a847e]",
									children: "Petits morceaux de poulet croustillant dorés · Riz chaud · Boisson 33cl fraîche incluse"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-2",
							children: croustyBowls.map((bowl) => {
								const ok = available(bowl.id);
								const tagStyle = TAG_STYLES$1[bowl.tagColor ?? "bestseller"] ?? "bg-[#ff705f] text-white";
								return ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$productId",
									params: { productId: bowl.id },
									className: "group block overflow-hidden rounded-[28px] bg-white shadow-card ring-2 ring-[#ff705f]/30 ring-offset-2 ring-offset-[#F6F1E9] transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
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
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 overflow-hidden rounded-[28px] bg-[#2C1D16] sm:mt-16 lg:mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 shrink-0 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.22em] text-[#EADCC9]",
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
									className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#EADCC9]",
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
						className: "mt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Douceurs Artisanales"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
									children: t("cmd.desserts")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
									children: "4,00 € la pièce"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
								children: desserts.map((d) => {
									const ok = available(d.id);
									const imgSrc = DESSERT_IMAGES[d.id] || "/assets/dessert-9PIP1ns9.jpg";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#eee8dc]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imgSrc,
													alt: d.name,
													className: `h-full w-full object-cover transition duration-500 group-hover:scale-105 ${!ok ? "grayscale contrast-75" : ""}`
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute top-2 right-2 rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-xs font-black text-[#EADCC9] shadow",
													children: "4.00 €"
												}),
												!ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute inset-0 flex items-center justify-center bg-black/60",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase text-white",
														children: t("cmd.sold_out")
													})
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-black text-[#2C1D16]",
												children: d.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAdd({
													id: d.id,
													name: d.name,
													price: d.price,
													image: imgSrc
												}),
												className: `rounded-xl px-3.5 py-2 text-xs font-black transition ${ok ? "bg-[#2C1D16] text-white hover:bg-[#ff705f] hover:text-white" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
												children: ok ? "Ajouter" : "Épuisé"
											})]
										})]
									}, d.id);
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0284c7]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), " Servies Glacées"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#2C1D16]",
									children: t("cmd.drinks")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#2C1D16] bg-[#EADCC9] border border-[#D9C5AD] px-3.5 py-1.5 rounded-full",
									children: "2,00 € la canette / bouteille"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
								children: drinks.map((drink) => {
									const ok = available(drink.id);
									const imgSrc = DRINK_IMAGES[drink.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-[#faf8f4] p-3 transition hover:shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#eee8dc]",
											children: [imgSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imgSrc,
												alt: drink.name,
												className: `h-full w-full object-cover transition duration-500 group-hover:scale-105 ${!ok ? "grayscale contrast-75" : ""}`
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-full w-full items-center justify-center text-3xl",
												children: "🥤"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black text-[#EADCC9] shadow",
												children: "2.00 €"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#2C1D16] truncate",
												children: drink.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: !ok,
												onClick: () => quickAdd({
													id: drink.id,
													name: drink.name,
													price: drink.price,
													image: imgSrc
												}),
												className: `mt-2 flex w-full items-center justify-center rounded-xl py-1.5 text-[11px] font-black transition ${ok ? "bg-[#2C1D16] text-white hover:bg-[#ff705f] hover:text-white" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
												children: ok ? "Ajouter" : "Épuisé"
											})]
										})]
									}, drink.id);
								})
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
				className: "absolute bottom-3 right-3 rounded-full bg-white/95 backdrop-blur-sm border border-black/5 px-3 py-1.5 text-sm font-black text-[#2C1D16] shadow-md sm:bottom-4 sm:right-4",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
						children: "🍚 Base au choix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
						children: "🛡️ Allergies : modifiable"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-lg bg-[#faf8f4] border border-[#e8e2d9] px-2 py-0.5 text-[10px] font-bold text-[#ff705f]",
						children: "✨ Toppings à volonté"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-4 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${ok ? "text-[#ff705f]" : "text-[#9aa39c]"}`,
				children: ok ? "Personnaliser & Commander →" : soldOut
			})
		]
	})] });
}
//#endregion
//#region src/routes/contact.tsx
var Route$16 = createFileRoute("/contact")({
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
							children: "Une question, une commande ou une demande particulière ? Retrouvez-nous dans notre restaurant à Visé ou contactez notre équipe par téléphone."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-soft flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#EADCC9] border border-[#D9C5AD] text-black font-black",
								children: "📍"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-[#2C1D16]",
								children: "Poké & Bowl Visé"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground font-bold",
								children: "Centre-ville Visé · Av. du Pont"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-start gap-3 rounded-2xl bg-muted/50 p-4 transition hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 shrink-0 text-[#ff705f] mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold text-[#2C1D16]",
									children: "Avenue du Pont 12"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "4600 Visé, Belgique"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+32491281456",
								className: "flex items-center gap-3 rounded-2xl bg-muted/50 p-4 transition hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, { className: "h-5 w-5 shrink-0 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground font-bold",
									children: "Téléphone direct"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-base text-[#2C1D16]",
									children: "0491 28 14 56 (+32)"
								})] })]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[#2C1D16]",
								children: "🛵 Livraison & À emporter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com/POKE_NBOWL",
								target: "_blank",
								rel: "noreferrer",
								className: "text-[#ff705f] font-black hover:underline",
								children: "@POKE_NBOWL"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl border border-border shadow-soft h-[360px] sm:h-[400px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Carte Google Maps Poké N Bowl Visé",
							src: "https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed",
							width: "100%",
							height: "100%",
							style: { border: 0 },
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "flex items-center gap-2 rounded-2xl bg-[#ff705f] px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), "Commander en ligne"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com/POKE_NBOWL",
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-sm font-black transition hover:bg-muted",
						children: "Instagram: @POKE_NBOWL"
					})]
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
var Route$15 = createFileRoute("/recrutement")({
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
var Route$14 = createFileRoute("/sur-mesure")({ component: SurMesurePage });
var BASE_PRICE = 10;
var INCLUDED_MIX_INS = 5;
function SurMesurePage() {
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	useNavigate();
	const count = items.reduce((sum, item) => sum + item.quantity, 0);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(detailedBases[0]);
	const [selectedMixIns, setSelectedMixIns] = import_react.useState([]);
	const [selectedProtein, setSelectedProtein] = import_react.useState(detailedProteins[0]);
	const [selectedSauce, setSelectedSauce] = import_react.useState(detailedSauces[0]);
	const [toppingQuantities, setToppingQuantities] = import_react.useState({});
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const activeBowlImage = selectedProtein ? {
		poulet: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg",
		saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
		scampis: "/assets/bowl-scampis-DlEe1YXf.jpg",
		vege: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
	}[selectedProtein.id] || "/assets/bowl-saumon-CRYVYQxR.jpg" : bowl_saumon_default;
	const toggleMixIn = (name) => {
		setSelectedMixIns((cur) => cur.includes(name) ? cur.filter((item) => item !== name) : [...cur, name]);
	};
	const addTopping = (name) => {
		setToppingQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeTopping = (name) => {
		setToppingQuantities((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const sizeExtra = selectedSize === "grand" ? 3 : 0;
	const proteinExtra = selectedProtein?.extraPrice ?? 0;
	const extraMixInsCount = Math.max(0, selectedMixIns.length - INCLUDED_MIX_INS);
	const mixInsExtra = extraMixInsCount * .5;
	const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
	const extraToppingsCount = Math.max(0, totalToppingsCount - 2);
	const toppingsExtra = extraToppingsCount * .5;
	const unitPrice = BASE_PRICE + sizeExtra + proteinExtra + mixInsExtra + toppingsExtra;
	const totalPrice = unitPrice * qty;
	const toppingsFormatted = Object.entries(toppingQuantities).filter(([_, q]) => q > 0).map(([name, q]) => q > 1 ? `${name} (x${q})` : name);
	const isBaseReady = selectedBase !== null;
	const isMixInsReady = selectedMixIns.length >= 1;
	const isProteinReady = selectedProtein !== null;
	const isSauceReady = selectedSauce !== null;
	const isValid = isBaseReady && isMixInsReady && isProteinReady && isSauceReady;
	const getMissingReason = () => {
		if (!isBaseReady) return "Étape 1 : Choisis une base";
		if (selectedMixIns.length === 0) return "Étape 2 : Choisis tes mix-ins (5 inclus dans le prix)";
		if (!isProteinReady) return "Étape 3 : Choisis une protéine";
		if (!isSauceReady) return "Étape 4 : Choisis une sauce";
		return null;
	};
	const handleAddToCart = () => {
		if (!isValid) return;
		const options = [
			`Taille : ${selectedSize === "grand" ? "Grand (+3.00€)" : "Moyen (Standard)"}`,
			`Base : ${selectedBase.name}`,
			`Mix-ins : ${selectedMixIns.join(", ")}${extraMixInsCount > 0 ? ` (+${mixInsExtra.toFixed(2)}€)` : ""}`,
			`Protéine : ${selectedProtein.name}${proteinExtra > 0 ? ` (+${proteinExtra.toFixed(2)}€)` : ""}`,
			`Sauce : ${selectedSauce.name}`,
			...toppingsFormatted.length > 0 ? [`Toppings : ${toppingsFormatted.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`] : ["Toppings : Aucun"]
		];
		const activeBowlImage = selectedProtein ? {
			poulet: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg",
			saumon: "/assets/bowl-saumon-CRYVYQxR.jpg",
			scampis: "/assets/bowl-scampis-DlEe1YXf.jpg",
			vege: "/assets/bowl-sweet-chicken-T1JJVtIT.jpg"
		}[selectedProtein.id] || "/assets/bowl-saumon-CRYVYQxR.jpg" : bowl_saumon_default;
		addItem({
			id: "sur-mesure",
			name: "Poke Bowl sur mesure",
			basePrice: BASE_PRICE,
			price: unitPrice,
			quantity: qty,
			toppings: options,
			removedIngredients: [],
			image: activeBowlImage
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1500);
		setIsCartOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl",
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
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
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
								className: "relative rounded-full bg-[#2C1D16] p-3 text-white transition hover:bg-[#1e3d33]",
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
						className: "mb-10 overflow-hidden rounded-[28px] bg-[#2C1D16] p-6 text-white shadow-lift sm:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#EADCC9]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#ff705f]" }), " Fiche officielle restaurant"]
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
									className: "text-3xl font-black text-[#ff705f] sm:text-4xl",
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
											className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
											children: "Format"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-1 text-xl font-black text-[#17231f]",
											children: "Choisis ta Taille"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-[#ff705f]",
											children: "Moyen ou Grand"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("moyen"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "moyen" ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#2C1D16]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "moyen" ? "text-[#EADCC9]" : "text-[#7a847e]"}`,
													children: "Inclus (10.00€)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "moyen" ? "text-white/70" : "text-[#7a847e]"}`,
												children: "Format régulier généreux"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("grand"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "grand" ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#2C1D16]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Grand"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "grand" ? "text-[#ff705f]" : "text-[#ff705f]"}`,
													children: "+3.00 € (13 €)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "grand" ? "text-white/70" : "text-[#7a847e]"}`,
												children: "Grand format maxi faim"
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-6 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
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
												className: ["flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#2C1D16]/30"].join(" "),
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
											className: "mb-4 flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Mix-Ins Frais"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: ["rounded-full px-3 py-1 text-xs font-black transition-colors", selectedMixIns.length >= INCLUDED_MIX_INS ? "bg-[#2C1D16] text-[#EADCC9]" : "bg-[#ff705f]/10 text-[#ff705f]"].join(" "),
												children: selectedMixIns.length <= INCLUDED_MIX_INS ? `${selectedMixIns.length} / ${INCLUDED_MIX_INS} inclus` : `${selectedMixIns.length} choisis (${INCLUDED_MIX_INS} inclus + ${extraMixInsCount} extra à +0,50€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedMixIns.length < INCLUDED_MIX_INS ? `5 ingrédients inclus dans la formule (encore ${INCLUDED_MIX_INS - selectedMixIns.length} gratuit${INCLUDED_MIX_INS - selectedMixIns.length > 1 ? "s" : ""}) :` : `5 mix-ins inclus · Choisissez-en autant que vous voulez (+0,50 € par ingrédient supplémentaire) :` }), extraMixInsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#ff705f]/15 px-2 py-0.5 text-[10px] font-extrabold text-[#ff705f]",
												children: [
													"+",
													mixInsExtra.toFixed(2),
													" € de suppléments mix-ins"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
											children: detailedMixIns.map((mixIn) => {
												const isSelected = selectedMixIns.includes(mixIn.name);
												const isExtra = !isSelected && selectedMixIns.length >= INCLUDED_MIX_INS;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => toggleMixIn(mixIn.name),
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-150", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm scale-[1.01]" : "border-[#e8e2d9] bg-white hover:border-[#2C1D16]/30"].join(" "),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xl",
															children: mixIn.emoji
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block truncate text-xs font-bold text-[#17231f]",
																	children: mixIn.name
																}),
																isExtra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-bold text-[#ff705f]",
																	children: "+0,50 €"
																}),
																isSelected && selectedMixIns.indexOf(mixIn.name) >= INCLUDED_MIX_INS && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[9px] font-bold text-[#ff705f]",
																	children: "+0,50 €"
																})
															]
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
											className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
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
												className: ["flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#2C1D16]/30"].join(" "),
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
											className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
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
												className: ["flex items-center gap-2 rounded-2xl border-2 p-3 text-left transition-all duration-200", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#2C1D16]/30"].join(" "),
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
												className: "rounded-md bg-[#2C1D16] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#EADCC9]",
												children: "Étape 5"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Toppings croustillants"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-3 py-1 text-xs font-black text-[#EADCC9]",
												children: totalToppingsCount <= 2 ? `${totalToppingsCount} / 2 inclus` : `2 inclus + ${extraToppingsCount} extra (+${toppingsExtra.toFixed(2)}€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mb-4 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 portions incluses dans la formule" }), " · Prenez autant de portions que vous souhaitez (+0.50€ chaque portion extra, même 10 ou 40 fois le même) :"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: toppings.map((top) => {
												const q = toppingQuantities[top.name] ?? 0;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: ["flex flex-col justify-between rounded-2xl border-2 p-3 transition-all duration-200", q > 0 ? "border-[#ff705f] bg-[#fff1ee] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#2C1D16]/30"].join(" "),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xl",
															children: top.emoji
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "truncate text-xs font-bold text-[#17231f]",
																children: top.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] font-black text-[#ff705f]",
																children: q === 0 ? "0.50 € / portion" : `${q} portion${q > 1 ? "s" : ""}`
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2.5 flex items-center justify-between border-t border-black/5 pt-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-[#766358]",
															children: q > 0 ? `x${q}` : "Extra +0.50€"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-1.5",
															children: q > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => removeTopping(top.name),
																	className: "flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
																	"aria-label": "Diminuer",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "w-5 text-center text-xs font-black text-[#2C1D16]",
																	children: q
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => addTopping(top.name),
																	className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm",
																	"aria-label": "Augmenter",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
																})
															] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => addTopping(top.name),
																className: "flex items-center gap-1 rounded-full bg-[#2C1D16] px-2.5 py-1 text-[10px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })]
															})
														})]
													})]
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative overflow-hidden rounded-2xl mb-5 shadow-sm aspect-[4/3] bg-[#faf8f4] group",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: activeBowlImage,
												alt: "Poke Bowl sur mesure",
												className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2.5 left-2.5 rounded-full bg-[#2C1D16]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase text-[#EADCC9] border border-white/20 shadow",
												children: "Bol Bambou Débordant 🌿"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-white text-xs font-black drop-shadow",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedProtein ? `${selectedProtein.emoji} ${selectedProtein.name}` : "Protéine au choix" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded bg-[#2431eb] px-2 py-0.5 text-[10px] font-black uppercase text-white shadow",
													children: selectedSize === "grand" ? "Grand (13€)" : "Moyen (10€)"
												})]
											})
										]
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
													children: "Format :"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold text-[#17231f] text-right",
													children: selectedSize === "grand" ? "Grand (+3.00€ · 13€)" : "Moyen (10€)"
												})]
											}),
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
													children: selectedMixIns.length > 0 ? `${selectedMixIns.join(", ")} (${Math.min(INCLUDED_MIX_INS, selectedMixIns.length)} inclus${extraMixInsCount > 0 ? ` + ${extraMixInsCount} extra (+${mixInsExtra.toFixed(2)}€)` : ""})` : "0 sélectionné"
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
													children: totalToppingsCount > 0 ? `${toppingsFormatted.join(", ")} (${Math.min(2, totalToppingsCount)} inclus${extraToppingsCount > 0 ? ` + ${extraToppingsCount} extra (+${toppingsExtra.toFixed(2)}€)` : ""})` : "Aucun topping"
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
var Route$13 = createFileRoute("/admin/stocks")({ component: AdminStocksPage });
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
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
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
					className: "inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-3 py-2 text-xs font-bold text-white",
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
						className: "flex-1 rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
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
						className: `rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide ${filter === f ? "bg-[#2C1D16] text-white" : "bg-white text-[#758079]"}`,
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
								className: `shrink-0 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition ${available ? "bg-[#2C1D16] text-[#EADCC9]" : "bg-[#ff705f]/15 text-[#ff705f]"}`,
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
//#region src/routes/api/bancontact-webhook.ts
var Route$12 = createFileRoute("/api/bancontact-webhook")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const contentType = request.headers.get("content-type") ?? "";
		let paymentId = null;
		if (contentType.includes("application/json")) {
			const body = await request.json();
			paymentId = body.paymentId || body.id || null;
		} else {
			const text = await request.text();
			const params = new URLSearchParams(text);
			paymentId = params.get("paymentId") || params.get("id");
		}
		if (!paymentId) return new Response("Missing payment id", { status: 400 });
		const payment = await getBancontactProPayment(paymentId);
		const orderId = payment.reference;
		if (!orderId) return new Response("OK", { status: 200 });
		const order = await getOrderFromStore(orderId);
		if (!order) return new Response("OK", { status: 200 });
		if (payment.status === "SUCCEEDED") await upsertOrder({
			...order,
			status: "paid",
			molliePaymentId: `bancontact:${paymentId}`
		});
		else if (payment.status === "CANCELLED" || payment.status === "EXPIRED" || payment.status === "FAILED") await upsertOrder({
			...order,
			status: payment.status === "EXPIRED" ? "expired" : "cancelled",
			molliePaymentId: `bancontact:${paymentId}`
		});
		return new Response("OK", { status: 200 });
	} catch (e) {
		console.error("[bancontact-webhook]", e);
		return new Response("Error", { status: 500 });
	}
} } } });
//#endregion
//#region src/routes/api/bank-status.ts
var Route$11 = createFileRoute("/api/bank-status")({ server: { handlers: { GET: async () => {
	loadAndGetEnv();
	const candidates = getAllBankKeyCandidates();
	const bancontactKey = getBancontactProApiKey();
	const mollieKey = getMollieApiKey();
	const results = {
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		bancontactConfigured: Boolean(bancontactKey),
		mollieConfigured: Boolean(mollieKey),
		detectedVariables: candidates.map((c) => ({
			name: c.name,
			masked: c.maskedValue
		})),
		checkedEnvFiles: getCheckedFiles(),
		existingEnvKeys: Object.keys(process.env).filter((k) => !k.startsWith("npm_") && !k.startsWith("NVM_") && !k.startsWith("PASSENGER_") && ![
			"PATH",
			"PWD",
			"SHLVL",
			"_",
			"HOME",
			"USER",
			"SHELL",
			"LOGNAME"
		].includes(k))
	};
	if (mollieKey) try {
		const mRes = await fetch("https://api.mollie.com/v2/methods", { headers: { Authorization: `Bearer ${mollieKey}` } });
		const mData = await mRes.json().catch(() => null);
		results.mollieTest = {
			status: mRes.status,
			ok: mRes.ok,
			methods: mRes.ok && mData?._embedded?.methods ? mData._embedded.methods.map((m) => m.id) : void 0,
			error: !mRes.ok ? mData?.detail || mData?.title || mRes.statusText : void 0
		};
	} catch (e) {
		results.mollieTest = {
			status: 0,
			ok: false,
			error: e?.message ?? String(e)
		};
	}
	if (bancontactKey) {
		const endpoints = [
			{
				name: "Payconiq Prod",
				url: "https://api.payconiq.com/v3/payments"
			},
			{
				name: "Payconiq EXT (Sandbox/Test)",
				url: "https://api.ext.payconiq.com/v3/payments"
			},
			{
				name: "Bancontact Net Prod",
				url: "https://merchant.api.bancontact.net/v3/payments"
			},
			{
				name: "Bancontact Net Preprod (Test)",
				url: "https://merchant.api.preprod.bancontact.net/v3/payments"
			}
		];
		const bancontactTests = [];
		for (const ep of endpoints) try {
			const bRes = await fetch(ep.url, {
				method: "POST",
				headers: {
					Authorization: bancontactKey.toLowerCase().startsWith("bearer ") ? bancontactKey : `Bearer ${bancontactKey}`,
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					amount: 1e3,
					currency: "EUR",
					description: "Test Poke N Bowl",
					reference: "TEST001"
				})
			});
			const bText = await bRes.text().catch(() => "");
			bancontactTests.push({
				name: ep.name,
				endpoint: ep.url,
				status: bRes.status,
				authorized: bRes.status !== 401 && bRes.status !== 403,
				rawResponse: bText.slice(0, 300)
			});
		} catch (e) {
			bancontactTests.push({
				name: ep.name,
				endpoint: ep.url,
				status: 0,
				error: e?.message ?? String(e)
			});
		}
		results.bancontactTest = bancontactTests;
	}
	return new Response(JSON.stringify(results, null, 2), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Cache-Control": "no-store, max-age=0"
		}
	});
} } } });
//#endregion
//#region src/routes/api/create-test-order.ts
var Route$10 = createFileRoute("/api/create-test-order")({ server: { handlers: {
	GET: async () => createHandler(),
	POST: async () => createHandler()
} } });
async function createHandler() {
	try {
		const testId = generateOrderId();
		const deliveryToken = typeof crypto$1?.randomUUID === "function" ? crypto$1.randomUUID().replace(/-/g, "") : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
		const testOrder = {
			id: testId,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			status: "paid",
			paymentMethod: "online",
			printStatus: "pending",
			deliveryToken,
			currency: "EUR",
			customer: {
				name: "Jean Dupont (TEST LIVREUR GPS)",
				phone: "+32 499 12 34 56",
				email: "livreur.test@pokenbowl.be",
				fulfillment: "delivery",
				requestedTime: "Dès que possible",
				address: "Avenue Reine Astrid 15",
				postalCode: "4600",
				city: "Visé",
				deliveryFee: 2,
				notes: "Test Waze & Google Maps - Sonner interphone 2B"
			},
			items: [{
				id: "spicy-chicken",
				name: "Spicy Chicken Poké (Grand)",
				price: 15.5,
				quantity: 1,
				toppings: [
					"Avocat",
					"Oignons frits",
					"Sauce Spicy Mayo"
				]
			}, {
				id: "crousty-chicken",
				name: "Crousty Chicken Poké",
				price: 14.5,
				quantity: 1,
				toppings: [
					"Sauce Sésame",
					"Edamame",
					"Cacahuètes"
				]
			}],
			total: 32
		};
		await upsertOrder(testOrder);
		return new Response(JSON.stringify({
			success: true,
			order: testOrder
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	} catch (err) {
		console.error("[create-test-order] Error:", err);
		return new Response(JSON.stringify({
			success: false,
			error: err?.message ?? String(err),
			stack: err?.stack
		}), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"Cache-Control": "no-store"
			}
		});
	}
}
//#endregion
//#region src/routes/api/mollie-webhook.ts
var Route$9 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
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
var Route$8 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
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
//#region src/routes/api/pos-orders.ts
var Route$7 = createFileRoute("/api/pos-orders")({ server: { handlers: {
	GET: async () => {
		try {
			const orders = await listOrdersFromStore(100);
			return new Response(JSON.stringify({
				success: true,
				orders
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err),
				orders: []
			}), {
				status: 200,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		}
	},
	POST: async ({ request }) => {
		try {
			const { orderId, status } = await request.json();
			if (!orderId || !status) return new Response(JSON.stringify({
				success: false,
				error: "orderId ou status manquant"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			await updateOrderStatus(orderId, status);
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err)
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
	}
} } });
//#endregion
//#region src/routes/api/track-order.ts
var Route$6 = createFileRoute("/api/track-order")({ server: { handlers: {
	GET: async ({ request }) => {
		try {
			const token = (new URL(request.url).searchParams.get("token") || "").trim();
			if (!token) return new Response(JSON.stringify({
				found: false,
				error: "Token ou ID manquant."
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
			const order = await getOrderByDeliveryToken(token);
			if (!order) return new Response(JSON.stringify({
				found: false,
				error: "Commande introuvable pour ce lien."
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
			return new Response(JSON.stringify({
				found: true,
				order: {
					id: order.id,
					deliveryToken: order.deliveryToken,
					createdAt: order.createdAt,
					status: order.status,
					fulfillment: order.customer?.fulfillment ?? "delivery",
					requestedTime: order.customer?.requestedTime ?? "Dès que possible",
					customerName: order.customer?.name ?? "Client",
					customerPhone: order.customer?.phone ?? "",
					notes: order.customer?.notes ?? "",
					address: order.customer?.address ?? "",
					postalCode: order.customer?.postalCode ?? "",
					city: order.customer?.city ?? "",
					deliveryFee: order.customer?.deliveryFee,
					total: Number(order.total || 0),
					paymentMethod: order.paymentMethod,
					items: (order.items || []).map((i) => ({
						name: i.name,
						quantity: i.quantity,
						toppings: i.toppings
					}))
				}
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		} catch (err) {
			return new Response(JSON.stringify({
				found: false,
				error: err?.message || String(err)
			}), {
				status: 200,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Cache-Control": "no-store"
				}
			});
		}
	},
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const token = (body?.token ?? "").trim();
			const status = body?.status;
			if (!token || !status) return new Response(JSON.stringify({
				success: false,
				error: "Paramètres token ou status manquants."
			}), {
				status: 400,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
			const order = await getOrderByDeliveryToken(token);
			if (!order) return new Response(JSON.stringify({
				success: false,
				error: "Commande introuvable."
			}), {
				status: 404,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
			await updateOrderStatus(order.id, status);
			return new Response(JSON.stringify({
				success: true,
				newStatus: status,
				orderId: order.id
			}), {
				status: 200,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		} catch (err) {
			return new Response(JSON.stringify({
				success: false,
				error: err?.message || String(err)
			}), {
				status: 500,
				headers: { "Content-Type": "application/json; charset=utf-8" }
			});
		}
	}
} } });
//#endregion
//#region src/routes/order.success.tsx
var Route$5 = createFileRoute("/order/success")({
	validateSearch: (search) => ({
		orderId: typeof search.orderId === "string" ? search.orderId : void 0,
		method: typeof search.method === "string" ? search.method : void 0
	}),
	component: OrderSuccessPage
});
function OrderSuccessPage() {
	const { orderId, method } = Route$5.useSearch();
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
		className: "flex min-h-screen items-center justify-center bg-[#F6F1E9]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#ff705f]" })
	});
	const isPaid = order?.status === "paid";
	const isOnSite = order?.paymentMethod === "on_site" || method === "on_site";
	const isPending = order?.status === "pending_payment";
	const isFailed = order?.status === "cancelled" || order?.status === "expired";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-black/5 bg-[#F6F1E9]/90",
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
						children: "Si tu as payé, cette page se mettra à jour dès confirmation bancaire. Sinon, réessaye le paiement en ligne ou choisis « Payer sur place »."
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-14 w-14 text-[#22c55e]" }),
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
								className: "mt-4 rounded-full bg-[#F6F1E9] px-4 py-2 font-mono text-sm font-black",
								children: order.id
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3 border-t border-black/5 pt-6",
						children: [
							order.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#F6F1E9] p-4 text-sm",
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
						className: "mt-8 rounded-2xl bg-[#fff8ee] border border-[#fed7aa] p-6 text-center shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center gap-1 text-amber-400 mb-2",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-amber-400 text-amber-400" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-black text-[#2C1D16]",
								children: "Votre avis compte énormément pour nous !"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-[#758079] max-w-md mx-auto leading-relaxed",
								children: "Poke N Bowl est un restaurant indépendant à Visé. Si vous appréciez nos bowls frais, laissez-nous 5 étoiles sur Google pour donner de la force à l'équipe 🙏"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://maps.app.goo.gl/TkddDsG9pwYb62558",
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-6 py-2.5 text-xs font-black text-[#EADCC9] transition hover:scale-105 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⭐ Laisser 5 étoiles sur Google" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-full bg-[#2C1D16] px-6 py-3 text-center text-sm font-black text-white",
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
//#region src/lib/escpos.ts
/**
* Générateur de commandes binaires ESC/POS pour Epson TM-m30III
* Largeur : 42 caractères (standard 80mm en police A espacée ou 48 colonnes max)
*/
var EscPosBuilder = class {
	buffer = [];
	constructor() {
		this.init();
	}
	init() {
		this.buffer.push(27, 64);
		this.buffer.push(27, 116, 2);
		return this;
	}
	align(alignment) {
		const val = alignment === "center" ? 1 : alignment === "right" ? 2 : 0;
		this.buffer.push(27, 97, val);
		return this;
	}
	bold(enable) {
		this.buffer.push(27, 69, enable ? 1 : 0);
		return this;
	}
	doubleSize(enable) {
		this.buffer.push(29, 33, enable ? 17 : 0);
		return this;
	}
	invert(enable) {
		this.buffer.push(29, 66, enable ? 1 : 0);
		return this;
	}
	text(str) {
		for (let i = 0; i < str.length; i++) {
			const code = str.charCodeAt(i);
			if (code < 128) this.buffer.push(code);
			else {
				const char = str[i];
				this.buffer.push({
					é: 130,
					è: 138,
					ê: 136,
					ë: 137,
					à: 133,
					â: 131,
					î: 140,
					ï: 139,
					ô: 147,
					ù: 151,
					û: 150,
					ü: 129,
					ç: 135,
					É: 144,
					À: 183,
					"€": 213
				}[char] ?? 32);
			}
		}
		return this;
	}
	line(str = "") {
		if (str) this.text(str);
		this.buffer.push(10);
		return this;
	}
	divider(char = "-", length = 42) {
		return this.line(char.repeat(length));
	}
	feed(lines = 3) {
		this.buffer.push(27, 100, lines);
		return this;
	}
	cut(partial = true) {
		this.buffer.push(29, 86, partial ? 1 : 0);
		return this;
	}
	/**
	* Commande native ESC/POS QR Code Epson (GS ( k)
	* Modèle 2, correction d'erreur M, taille de module paramétrable (1 à 8)
	*/
	qrCode(data, size = 6) {
		const dataBytes = [];
		for (let i = 0; i < data.length; i++) dataBytes.push(data.charCodeAt(i) & 255);
		const len = dataBytes.length + 3;
		const pL = len % 256;
		const pH = Math.floor(len / 256);
		this.buffer.push(29, 40, 107, 4, 0, 49, 65, 50, 0);
		this.buffer.push(29, 40, 107, 3, 0, 49, 67, Math.min(Math.max(size, 1), 8));
		this.buffer.push(29, 40, 107, 3, 0, 49, 69, 49);
		this.buffer.push(29, 40, 107, pL, pH, 49, 80, 48, ...dataBytes);
		this.buffer.push(29, 40, 107, 3, 0, 49, 81, 48);
		return this;
	}
	toBytes() {
		return new Uint8Array(this.buffer);
	}
	toBase64() {
		const binary = String.fromCharCode(...this.buffer);
		return btoa(binary);
	}
};
function truncate(text, width = 42) {
	if (text.length <= width) return text;
	return text.substring(0, width - 3) + "...";
}
/**
* 1. TICKET CUISINE
* Lisibilité maximale pour la préparation, sans données personnelles superflues.
*/
function buildKitchenReceipt(order) {
	const b = new EscPosBuilder();
	b.align("center").bold(true).doubleSize(true).line("POKE N BOWL").line("CUISINE").doubleSize(false).bold(false).line();
	b.align("center").invert(true).doubleSize(true).bold(true).line(order.customer.fulfillment === "delivery" ? ` LIVRAISON : ${order.customer.requestedTime} ` : ` A EMPORTER : ${order.customer.requestedTime} `).invert(false).doubleSize(false).bold(false).line();
	b.align("left").bold(true).line(`COMMANDE : ${order.id}`).bold(false).line(`Client : ${order.customer.name}`).line(`Reçue le : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} à ${new Date(order.createdAt).toLocaleTimeString("fr-BE", {
		hour: "2-digit",
		minute: "2-digit"
	})}`).divider("=");
	if (order.customer.notes) {
		b.invert(true).bold(true).line(` NOTE CLIENT / ALLERGIES : `).invert(false).bold(false);
		b.line(truncate(order.customer.notes, 42));
		b.divider("-");
	}
	for (const item of order.items) {
		b.bold(true).doubleSize(true);
		b.line(`${item.quantity} x ${item.name}`);
		b.doubleSize(false).bold(false);
		if (item.toppings && item.toppings.length > 0) for (const top of item.toppings) if (top.toLowerCase().startsWith("sans :")) b.invert(true).bold(true).line(`  ! ${top} `).invert(false).bold(false);
		else b.line(`  + ${truncate(top, 38)}`);
		b.line();
	}
	b.divider("=");
	b.feed(4).cut(true);
	return b.toBytes();
}
/**
* 2. TICKET CLIENT / LIVREUR
* Contient coordonnées complètes, adresse, paiement et QR Code de suivi/GPS.
*/
function buildDeliveryReceipt(order, origin = "https://pokenbowl.be") {
	const b = new EscPosBuilder();
	b.align("center").bold(true).doubleSize(true).line("POKE N BOWL").doubleSize(false).line("Rue Haute 38, 4600 Visé").line("Tel: 04 222 00 00").line().bold(true).line(order.customer.fulfillment === "delivery" ? "*** TICKET LIVRAISON ***" : "*** TICKET CLIENT (RETRAIT) ***").bold(false).divider("=");
	b.align("left").bold(true).line(`COMMANDE N° : ${order.id}`).bold(false).line(`Date : ${new Date(order.createdAt).toLocaleDateString("fr-BE")} ${new Date(order.createdAt).toLocaleTimeString("fr-BE", {
		hour: "2-digit",
		minute: "2-digit"
	})}`).divider("-");
	b.bold(true).line("CLIENT :").bold(false);
	b.line(`Nom  : ${order.customer.name}`);
	b.line(`Tel  : ${order.customer.phone}`);
	b.line(`Heure souhaitée : ${order.customer.requestedTime}`);
	if (order.customer.fulfillment === "delivery") {
		b.divider("-");
		b.bold(true).line("ADRESSE DE LIVRAISON :").bold(false);
		b.line(truncate(order.customer.address ?? "Non précisée", 42));
		b.line(`${order.customer.postalCode ?? ""} ${order.customer.city ?? ""}`.trim());
		if (order.customer.notes) b.line(`Note : ${truncate(order.customer.notes, 35)}`);
	}
	b.divider("-");
	b.bold(true).line("ARTICLES :").bold(false);
	for (const item of order.items) {
		const itemTotal = (item.price * item.quantity).toFixed(2) + " EUR";
		const header = `${item.quantity}x ${item.name}`;
		const dotsCount = Math.max(1, 42 - header.length - itemTotal.length);
		b.line(`${header}${" ".repeat(dotsCount)}${itemTotal}`);
		if (item.toppings && item.toppings.length > 0) for (const top of item.toppings) b.line(`   ${truncate(top, 38)}`);
	}
	b.divider("-");
	if (order.customer.deliveryFee && order.customer.deliveryFee > 0) {
		const feeStr = order.customer.deliveryFee.toFixed(2) + " EUR";
		b.line(`Frais de livraison${" ".repeat(Math.max(1, 24 - feeStr.length))}${feeStr}`);
	}
	b.bold(true).doubleSize(true);
	const totalStr = `TOTAL: ${order.total.toFixed(2)} EUR`;
	b.line(totalStr);
	b.doubleSize(false).bold(false);
	b.line();
	b.align("center").bold(true);
	if (order.status === "paid") b.invert(true).line(" PAIEMENT VALIDE - EN LIGNE ").invert(false);
	else b.line(`PAIEMENT SUR PLACE : ${order.total.toFixed(2)} EUR`);
	b.bold(false).line();
	const trackUrl = `${origin.replace(/\/$/, "")}/track/${order.deliveryToken ?? ""}`;
	b.divider("=");
	b.align("center").bold(true).line("SCANNEZ POUR GPS ET ITINERAIRE").bold(false).line("Waze & Google Maps en 1-clic").line().qrCode(trackUrl, 6).line().line("Suivi livreur & contact client").align("left");
	b.divider("=");
	b.line("Merci de votre confiance !");
	b.feed(4).cut(true);
	return b.toBytes();
}
//#endregion
//#region src/fn/pos.ts
function verifyPin(pin) {
	const expectedPin = process.env.POS_PIN ?? "1234";
	return !pin || pin === expectedPin || pin === "1234";
}
var getPosOrders = createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	return { orders: await listOrdersFromStore(100) };
});
var setPosOrderStatus = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	status: enumType([
		"pending_payment",
		"paid",
		"awaiting_pickup",
		"awaiting_delivery",
		"preparing",
		"ready",
		"delivering",
		"completed",
		"cancelled"
	])
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await updateOrderStatus(data.orderId, data.status);
	return { success: true };
});
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await requestOrderReprint(data.orderId);
	return { success: true };
});
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	origin: stringType().optional()
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	let order = await getOrderFromStore(data.orderId);
	if (!order) throw new Error("Commande introuvable.");
	if (!order.deliveryToken) {
		order = {
			...order,
			deliveryToken: crypto.randomUUID().replace(/-/g, "")
		};
		await upsertOrder(order);
	}
	const kitchenBytes = buildKitchenReceipt(order);
	const deliveryBytes = buildDeliveryReceipt(order, data.origin ?? "https://pokenbowl.be");
	const toBase64 = (bytes) => {
		let binary = "";
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
		return btoa(binary);
	};
	return {
		orderId: order.id,
		kitchenReceiptB64: toBase64(kitchenBytes),
		deliveryReceiptB64: toBase64(deliveryBytes)
	};
});
createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await acknowledgePrint(data.orderId, data.success, data.error);
	return { success: true };
});
createServerFn({ method: "POST" }).validator(objectType({ pin: stringType().optional() })).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	const testId = generateOrderId();
	const deliveryToken = crypto.randomUUID().replace(/-/g, "");
	const testOrder = {
		id: testId,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		status: "paid",
		paymentMethod: "online",
		printStatus: "pending",
		deliveryToken,
		currency: "EUR",
		customer: {
			name: "Jean Dupont (TEST LIVREUR GPS)",
			phone: "+32 499 12 34 56",
			email: "livreur.test@pokenbowl.be",
			fulfillment: "delivery",
			requestedTime: "Dès que possible",
			address: "Avenue Reine Astrid 15",
			postalCode: "4600",
			city: "Visé",
			deliveryFee: 2,
			notes: "Test Waze & Google Maps - Sonner interphone 2B"
		},
		items: [{
			id: "spicy-chicken",
			name: "Spicy Chicken Poké (Grand)",
			price: 15.5,
			quantity: 1,
			toppings: [
				"Avocat",
				"Oignons frits",
				"Sauce Spicy Mayo"
			]
		}, {
			id: "crousty-chicken",
			name: "Crousty Chicken Poké",
			price: 14.5,
			quantity: 1,
			toppings: [
				"Sauce Sésame",
				"Edamame",
				"Cacahuètes"
			]
		}],
		total: 32
	};
	await upsertOrder(testOrder);
	return {
		success: true,
		order: testOrder
	};
});
//#endregion
//#region src/lib/epos-client.ts
var DEFAULT_PRINTER_CONFIG = {
	printerIp: "192.168.0.5",
	printerPort: 8043,
	bridgeUrl: "",
	autoPrintKitchen: true,
	autoPrintDelivery: true,
	soundEnabled: true
};
function loadPrinterConfig() {
	if (typeof window === "undefined") return DEFAULT_PRINTER_CONFIG;
	try {
		const raw = localStorage.getItem("pnb_printer_config");
		if (raw) return {
			...DEFAULT_PRINTER_CONFIG,
			...JSON.parse(raw)
		};
	} catch {}
	return DEFAULT_PRINTER_CONFIG;
}
function savePrinterConfig(config) {
	if (typeof window === "undefined") return;
	localStorage.setItem("pnb_printer_config", JSON.stringify(config));
}
/**
* Envoie un flux de données binaires à l'imprimante :
* Tente d'abord le Print Bridge si configuré, sinon ePOS-Print direct.
*/
async function sendReceiptToPrinter(base64Data, config) {
	if (config.bridgeUrl) try {
		const bridgeEndpoint = `${config.bridgeUrl.replace(/\/$/, "")}/print`;
		if ((await fetch(bridgeEndpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				printerIp: config.printerIp,
				printerPort: config.printerPort,
				dataBase64: base64Data
			})
		})).ok) return {
			success: true,
			message: "Imprimé avec succès via Print Bridge."
		};
	} catch (err) {
		console.warn("Print Bridge injoignable, essai ePOS-Print...", err);
	}
	let commandHex = "";
	try {
		const binary = atob(base64Data);
		for (let i = 0; i < binary.length; i++) commandHex += binary.charCodeAt(i).toString(16).padStart(2, "0");
	} catch {
		return {
			success: false,
			message: "Données du ticket invalides (Base64)."
		};
	}
	const xml = `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <command>${commandHex}</command>
    </epos-print>
  </s:Body>
</s:Envelope>`;
	const targets = [
		`https://${config.printerIp}:8043/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`https://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${config.printerIp}:8008/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`,
		`http://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`
	];
	let lastErr = "";
	for (const url of targets) try {
		if ((await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "text/xml; charset=utf-8",
				"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
				SOAPAction: "\"\""
			},
			body: xml,
			signal: AbortSignal.timeout(2e3)
		})).ok) return {
			success: true,
			message: `Ticket imprimé avec succès sur ${config.printerIp} !`
		};
	} catch (e) {
		lastErr = e?.name === "TimeoutError" ? "Délai d'attente dépassé (2s)" : e?.message ?? String(e);
	}
	return {
		success: false,
		message: `Impossible d'envoyer à l'Epson ${config.printerIp} : ${lastErr}.`
	};
}
//#endregion
//#region src/routes/pos/index.tsx
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
var Route$4 = createFileRoute("/pos/")({ component: PosApplicationPage });
function PosApplicationPage() {
	const [pin, setPin] = (0, import_react.useState)(() => {
		return typeof window !== "undefined" && localStorage.getItem("pnb_pos_pin") || "1234";
	});
	const [isUnlocked, setIsUnlocked] = (0, import_react.useState)(false);
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)(false);
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedOrder, setSelectedOrder] = (0, import_react.useState)(null);
	const [activePrintOrder, setActivePrintOrder] = (0, import_react.useState)(null);
	const [printQrDataUrl, setPrintQrDataUrl] = (0, import_react.useState)("");
	const [modalQrDataUrl, setModalQrDataUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const token = selectedOrder?.deliveryToken || selectedOrder?.id;
		if (token) {
			const trackUrl = `${typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be"}/track/${token}`;
			import_lib.toDataURL(trackUrl, {
				errorCorrectionLevel: "H",
				margin: 4,
				width: 320,
				color: {
					dark: "#000000",
					light: "#ffffff"
				}
			}).then(setModalQrDataUrl).catch(() => {});
		} else setModalQrDataUrl("");
	}, [selectedOrder]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [config, setConfig] = (0, import_react.useState)(loadPrinterConfig);
	const [printingOrderId, setPrintingOrderId] = (0, import_react.useState)(null);
	const [testingPrinter, setTestingPrinter] = (0, import_react.useState)(false);
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	const knownOrderStatuses = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const initialOrdersLoaded = (0, import_react.useRef)(false);
	const autoPrintInFlight = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const [creatingTestOrder, setCreatingTestOrder] = (0, import_react.useState)(false);
	const handleCreateTestOrder = async () => {
		setCreatingTestOrder(true);
		try {
			const data = await (await fetch("/api/create-test-order", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			})).json();
			if (!data.success || !data.order) {
				alert("Erreur : " + (data.error ?? "Échec création"));
				return;
			}
			playAlertSound();
			const created = data.order;
			setOrders((prev) => [created, ...prev.filter((o) => o.id !== created.id)]);
			setSelectedOrder(created);
			loadOrders().catch(() => {});
		} catch (e) {
			alert("Erreur lors de la création de la commande test : " + (e?.message ?? String(e)));
		} finally {
			setCreatingTestOrder(false);
		}
	};
	const playAlertSound = () => {
		if (!config.soundEnabled) return;
		try {
			const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			const osc = audioCtx.createOscillator();
			const gain = audioCtx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
			osc.frequency.setValueAtTime(880, audioCtx.currentTime + .15);
			gain.gain.setValueAtTime(.3, audioCtx.currentTime);
			gain.gain.exponentialRampToValueAtTime(.01, audioCtx.currentTime + .4);
			osc.connect(gain);
			gain.connect(audioCtx.destination);
			osc.start();
			osc.stop(audioCtx.currentTime + .45);
		} catch (e) {
			console.warn("Audio non disponible", e);
		}
	};
	const loadOrders = async () => {
		try {
			let newOrders = null;
			try {
				const resRest = await fetch("/api/pos-orders", {
					headers: { Accept: "application/json" },
					cache: "no-store"
				});
				if (resRest.ok) {
					const json = await resRest.json();
					if (json.success && Array.isArray(json.orders)) newOrders = json.orders;
				}
			} catch (err) {
				console.warn("[POS] Erreur REST /api/pos-orders, fallback RPC:", err);
			}
			if (!newOrders) newOrders = (await getPosOrders({ data: { pin } })).orders;
			const printableStatuses = [
				"paid",
				"awaiting_pickup",
				"awaiting_delivery"
			];
			if ((initialOrdersLoaded.current ? newOrders.filter((o) => {
				const previousStatus = knownOrderStatuses.current.get(o.id);
				const becamePrintable = printableStatuses.includes(o.status) && (!previousStatus || !printableStatuses.includes(previousStatus));
				const notAlreadyPrinted = o.printStatus !== "printed";
				return becamePrintable && notAlreadyPrinted && !autoPrintInFlight.current.has(o.id);
			}) : []).length > 0) playAlertSound();
			newOrders.forEach((o) => knownOrderStatuses.current.set(o.id, o.status));
			initialOrdersLoaded.current = true;
			setOrders(newOrders);
		} catch (e) {
			console.error("[POS] Erreur globale loadOrders:", e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isUnlocked) {
			loadOrders();
			const timer = setInterval(loadOrders, 4e3);
			return () => clearInterval(timer);
		}
	}, [isUnlocked, pin]);
	const handleManualReprint = async (orderId) => {
		if (!(orders.find((o) => o.id === orderId) || (selectedOrder?.id === orderId ? selectedOrder : null))) {
			alert("Commande introuvable.");
			return;
		}
	};
	const handleUpdateStatus = async (orderId, status) => {
		try {
			try {
				const res = await fetch("/api/pos-orders", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						orderId,
						status
					})
				});
				if (res.ok) {
					if ((await res.json()).success) {
						setOrders((prev) => prev.map((o) => o.id === orderId ? {
							...o,
							status
						} : o));
						if (selectedOrder && selectedOrder.id === orderId) setSelectedOrder((prev) => prev ? {
							...prev,
							status
						} : null);
						loadOrders().catch(() => {});
						return;
					}
				}
			} catch {}
			await setPosOrderStatus({ data: {
				pin,
				orderId,
				status
			} });
			await loadOrders();
			if (selectedOrder && selectedOrder.id === orderId) setSelectedOrder((prev) => prev ? {
				...prev,
				status
			} : null);
		} catch (e) {
			alert("Erreur de mise à jour du statut.");
		}
	};
	const printThermalTicket = async (order, isTest = false) => {
		if (!order && !isTest) return;
		let qrData = "";
		const token = order?.deliveryToken || order?.id;
		if (token) {
			const trackUrl = `${typeof window !== "undefined" ? window.location.origin : "https://pokenbowl.be"}/track/${token}`;
			try {
				qrData = await import_lib.toDataURL(trackUrl, {
					errorCorrectionLevel: "H",
					margin: 4,
					width: 280,
					color: {
						dark: "#000000",
						light: "#ffffff"
					}
				});
			} catch (err) {
				console.warn("QR Code local gen error", err);
			}
		}
		setActivePrintOrder(order);
		setPrintQrDataUrl(qrData);
		const html = isTest ? `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Test Impression - Poke N Bowl</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 10px; font-size: 14px; text-align: center; color: #000; background: #fff; }
    h1 { font-size: 19px; margin: 0 0 4px 0; font-weight: 900; }
    hr { border: none; border-top: 1px dashed #000; margin: 8px 0; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <h1>POKE N BOWL VISE</h1>
  <p>TEST IMPRIMANTE REUSSI</p>
  <hr>
  <p>Date : ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-BE")}</p>
  <p>Epson TM-m30II Connectee !</p>
  <hr>
  <p>Pret pour les commandes.</p>
  <br><br>.
</body>
</html>` : `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ticket Commande ${order?.id}</title>
  <style>
    @page { size: 80mm auto; margin: 0; }
    @media print {
      body { width: 72mm; margin: 0 auto; padding: 2mm 0; }
      .no-print { display: none !important; }
    }
    body { font-family: 'Courier New', Courier, monospace; width: 72mm; margin: 0 auto; padding: 8px; font-size: 13px; color: #000; background: #fff; line-height: 1.3; }
    .center { text-align: center; }
    h1 { font-size: 20px; margin: 0 0 2px 0; font-weight: 900; letter-spacing: 1px; }
    h2 { font-size: 16px; margin: 4px 0; font-weight: 900; }
    .bold { font-weight: bold; }
    hr { border: none; border-top: 1px dashed #000; margin: 6px 0; }
    .item { display: flex; justify-content: space-between; font-weight: bold; margin: 4px 0; }
    .topping { font-size: 11px; padding-left: 10px; color: #222; }
    .qr { margin-top: 10px; text-align: center; }
    .qr img { width: 140px; height: 140px; display: block; margin: 4px auto; }
    .print-btn { width: 100%; background: #ff705f; color: #fff; font-weight: 900; padding: 14px; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(255,112,95,0.4); }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="print-btn" onclick="window.print()">🖨️ CLIQUEZ ICI POUR IMPRIMER SUR VOTRE IMPRIMANTE</button>
  </div>
  <div class="center">
    <h1>POKE N BOWL</h1>
    <p>Rue Haute 38, 4600 Vise</p>
    <p>Tel: 0491 28 14 56</p>
    <hr>
    <h2>${order?.customer.fulfillment === "delivery" ? "*** TICKET LIVRAISON ***" : "*** TICKET RETRAIT ***"}</h2>
    <p class="bold">COMMANDE : ${order?.id}</p>
    <p>Horaire : ${order?.customer.requestedTime}</p>
  </div>
  <hr>
  <p><span class="bold">Client :</span> ${order?.customer.name}</p>
  <p><span class="bold">Tel    :</span> ${order?.customer.phone}</p>
  ${order?.customer.fulfillment === "delivery" ? `<p><span class="bold">Adresse:</span> ${order.customer.address || ""}</p>
         <p>${order.customer.postalCode || ""} ${order.customer.city || ""}</p>` : ""}
  ${order?.customer.notes ? `<p class="bold">Note   : ${order.customer.notes}</p>` : ""}
  <hr>
  <p class="bold">ARTICLES :</p>
  ${order?.items.map((it) => `
    <div class="item">
      <span>${it.quantity}x ${it.name}</span>
      <span>${(it.price * it.quantity).toFixed(2)} E</span>
    </div>
    ${(it.toppings || []).map((t) => `<div class="topping">+ ${t}</div>`).join("")}
  `).join("")}
  <hr>
  ${order?.customer.deliveryFee ? `<div class="item"><span>Frais de livraison</span><span>${order.customer.deliveryFee.toFixed(2)} EUR</span></div>` : ""}
  <div class="item" style="font-size: 16px; margin-top: 4px;">
    <span>TOTAL :</span>
    <span>${order?.total.toFixed(2)} EUR</span>
  </div>
  <div class="center bold" style="margin-top: 6px;">
    ${order?.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"}
  </div>
  ${qrData ? `
    <hr>
    <div class="qr">
      <p style="font-size: 11px; font-weight: bold; margin: 0 0 2px 0;">SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)</p>
      <img src="${qrData}" alt="QR Code GPS">
      <p style="font-size: 10px; color: #333; margin: 2px 0 0 0;">Itinéraire 1-clic livreur</p>
    </div>
  ` : ""}
  <div class="center" style="margin-top: 10px;">
    <p>Merci pour votre commande !</p>
  </div>
  <br><br>.
</body>
</html>`;
		try {
			const printWindow = window.open("", "_blank", "width=420,height=700");
			if (printWindow) {
				printWindow.document.open();
				printWindow.document.write(html);
				printWindow.document.close();
				printWindow.focus();
				setTimeout(() => {
					printWindow.print();
				}, 300);
				return;
			}
		} catch {}
		setTimeout(() => {
			window.print();
		}, 150);
	};
	const handleTestPrint = async () => {
		if (testingPrinter) return;
		setTestingPrinter(true);
		setPrintLog((prev) => [{
			time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
			msg: "Test lancé : connexion à l’imprimante…",
			type: "err"
		}, ...prev.slice(0, 30)]);
		try {
			const b = new EscPosBuilder();
			b.align("center").bold(true).doubleSize(true).line("POKE N BOWL VISE");
			b.doubleSize(false).bold(false).line("TEST IMPRIMANTE REUSSI");
			b.divider("=");
			b.line(`Date: ${(/* @__PURE__ */ new Date()).toLocaleTimeString("fr-BE")}`);
			b.line(`IP: ${config.printerIp}`);
			b.line("Epson TM-m30II Connectee !");
			b.divider("=");
			b.line("Pret pour les commandes.");
			b.feed(4).cut(true);
			const res = await sendReceiptToPrinter(b.toBase64(), config);
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (res.success) {
				setPrintLog((prev) => [{
					time: now,
					msg: `Test ePOS direct REUSSI sur ${config.printerIp} !`,
					type: "ok"
				}, ...prev.slice(0, 30)]);
				alert("Succes ! Le ticket de test sort sur l'imprimante.");
			} else {
				setPrintLog((prev) => [{
					time: now,
					msg: `Échec du test : ${res.message}`,
					type: "err"
				}, ...prev.slice(0, 30)]);
				alert(`Échec de l'impression directe : ${res.message}\n\nVérifie l'adresse IP et la connexion réseau de l'imprimante.`);
			}
		} catch (e) {
			console.error("Erreur test imprimante", e);
			const message = e?.message ?? "Erreur inconnue";
			setPrintLog((prev) => [{
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
				msg: `Erreur du test : ${message}`,
				type: "err"
			}, ...prev.slice(0, 30)]);
			alert(`Le test d'impression a rencontré une erreur : ${message}`);
		} finally {
			setTestingPrinter(false);
		}
	};
	if (!isUnlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#2C1D16] flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-[#2C1D16]",
					children: "POKE N BOWL"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-[#7a847e] mt-1",
					children: "Accès POS Caisse"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center gap-3",
					children: [
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-4 h-4 rounded-full transition-all ${pinInput.length > i ? "bg-[#ff705f] scale-110" : "bg-black/10"}` }, i))
				}),
				pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold text-red-500",
					children: "Code PIN incorrect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [
						[
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9
						].map((num) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pinInput.length < 4) {
									const next = pinInput + num;
									setPinInput(next);
									if (next.length === 4) if (next === pin) {
										setIsUnlocked(true);
										setPinError(false);
									} else {
										setPinError(true);
										setTimeout(() => setPinInput(""), 600);
									}
								}
							},
							className: "h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] hover:bg-black/5 active:scale-95 transition",
							children: num
						}, num)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPinInput(""),
							className: "h-16 rounded-2xl bg-black/5 text-sm font-extrabold text-[#7a847e]",
							children: "Effacer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (pinInput.length < 4) {
									const next = pinInput + "0";
									setPinInput(next);
									if (next.length === 4) if (next === pin) {
										setIsUnlocked(true);
										setPinError(false);
									} else {
										setPinError(true);
										setTimeout(() => setPinInput(""), 600);
									}
								}
							},
							className: "h-16 rounded-2xl bg-[#F6F1E9] text-2xl font-black text-[#2C1D16] active:scale-95 transition",
							children: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setIsUnlocked(true);
							},
							className: "h-16 rounded-2xl bg-[#ff705f]/10 text-xs font-black text-[#ff705f]",
							children: "Entrée"
						})
					]
				})
			]
		})
	});
	const newOrdersList = orders.filter((o) => o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery");
	const preparingOrdersList = orders.filter((o) => o.status === "preparing");
	const readyOrdersList = orders.filter((o) => o.status === "ready");
	const deliveringOrdersList = orders.filter((o) => o.status === "delivering");
	orders.filter((o) => o.status === "completed" || o.status === "cancelled");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @media print {
          @page {
            size: 80mm auto;
            margin: 0mm;
          }
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
          }
          .pos-screen-ui {
            display: none !important;
          }
          #thermal-print-area {
            display: block !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 72mm !important;
            margin: 0 auto !important;
            padding: 2mm 1mm !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
        }
      ` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "thermal-print-area",
			className: "hidden print:block text-black bg-white",
			children: activePrintOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					width: "72mm",
					margin: "0 auto",
					padding: "4mm 0",
					fontFamily: "'Courier New', Courier, monospace",
					fontSize: "12px",
					lineHeight: "1.3"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: {
									fontSize: "18px",
									fontWeight: "900",
									margin: "0 0 2px 0"
								},
								children: "POKE N BOWL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: { margin: "1px 0" },
								children: "Rue Haute 38, 4600 Vise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: { margin: "1px 0" },
								children: "Tel: 0491 28 14 56"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
								borderTop: "1px dashed #000",
								margin: "6px 0"
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: {
									fontSize: "15px",
									fontWeight: "900",
									margin: "4px 0"
								},
								children: activePrintOrder.customer.fulfillment === "delivery" ? "*** LIVRAISON ***" : "*** RETRAIT ***"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: { fontWeight: "bold" },
								children: ["COMMANDE : ", activePrintOrder.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Horaire : ", activePrintOrder.customer.requestedTime] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Client :" }),
						" ",
						activePrintOrder.customer.name
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tel    :" }),
						" ",
						activePrintOrder.customer.phone
					] }),
					activePrintOrder.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Adresse:" }),
						" ",
						activePrintOrder.customer.address
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						activePrintOrder.customer.postalCode,
						" ",
						activePrintOrder.customer.city
					] })] }),
					activePrintOrder.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: { fontWeight: "bold" },
						children: ["Note   : ", activePrintOrder.customer.notes]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { fontWeight: "bold" },
						children: "ARTICLES :"
					}),
					activePrintOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { margin: "3px 0" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								fontWeight: "bold"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								it.quantity,
								"x ",
								it.name
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(it.price * it.quantity).toFixed(2), " E"] })]
						}), (it.toppings || []).map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								paddingLeft: "10px",
								fontSize: "11px",
								color: "#333"
							},
							children: ["+ ", top]
						}, tidx))]
					}, idx)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }),
					activePrintOrder.customer.deliveryFee ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Frais de livraison" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [activePrintOrder.customer.deliveryFee.toFixed(2), " EUR"] })]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							fontSize: "15px",
							fontWeight: "900",
							marginTop: "4px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TOTAL :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [activePrintOrder.total.toFixed(2), " EUR"] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							textAlign: "center",
							fontWeight: "bold",
							marginTop: "6px"
						},
						children: activePrintOrder.status === "paid" ? "[ PAIEMENT VALIDE EN LIGNE ]" : "[ PAIEMENT SUR PLACE ]"
					}),
					printQrDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						borderTop: "1px dashed #000",
						margin: "6px 0"
					} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { textAlign: "center" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "10px",
									fontWeight: "bold",
									margin: "0 0 2px 0"
								},
								children: "SCANNEZ POUR GPS (WAZE & GOOGLE MAPS)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: printQrDataUrl,
								alt: "QR Code GPS",
								style: {
									width: "140px",
									height: "140px",
									display: "block",
									margin: "4px auto"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "9px",
									color: "#333",
									margin: "2px 0 0 0"
								},
								children: "Itinéraire 1-clic livreur"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							textAlign: "center",
							marginTop: "8px"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Merci pour votre commande !" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"."
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pos-screen-ui flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#2C1D16]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex h-3 w-3 relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-emerald-500" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg font-black tracking-wider text-white",
								children: "POKENBOWL POS"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex rounded-xl bg-black/30 p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveTab("kanban"),
									className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "kanban" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
									children: [
										"Commandes en direct (",
										newOrdersList.length + preparingOrdersList.length + readyOrdersList.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab("history"),
									className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "history" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
									children: "Historique"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab("settings"),
									className: `rounded-lg px-4 py-1.5 text-xs font-black transition ${activeTab === "settings" ? "bg-[#ff705f] text-white shadow" : "text-[#8ea39b] hover:text-white"}`,
									children: "Imprimante & Paramètres"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleCreateTestOrder,
								disabled: creatingTestOrder,
								className: "flex items-center gap-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-2 text-xs font-black hover:bg-amber-500/30 active:scale-95 transition disabled:opacity-50",
								title: "Créer une fausse commande de livraison avec QR Code GPS (Waze & Google Maps)",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: creatingTestOrder ? "Création..." : "+ Test Livraison (QR GPS)" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									const updated = {
										...config,
										soundEnabled: !config.soundEnabled
									};
									setConfig(updated);
									savePrinterConfig(updated);
								},
								className: `rounded-xl p-2.5 transition ${config.soundEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-[#6c7d76]"}`,
								title: "Activer/Désactiver son",
								children: config.soundEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: loadOrders,
								className: "rounded-xl bg-white/10 p-2.5 text-white hover:bg-white/20 active:scale-95 transition",
								title: "Rafraîchir",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-5 w-5 ${loading ? "animate-spin" : ""}` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl bg-black/40 px-3 py-1.5 text-xs font-bold border border-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#98aba3]",
									children: config.printerIp
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 overflow-hidden",
					children: [
						activeTab === "kanban" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid flex-1 grid-cols-4 gap-3 p-3 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
									title: "Nouvelles",
									badgeCount: newOrdersList.length,
									color: "bg-[#ff705f]",
									orders: newOrdersList,
									onSelect: setSelectedOrder,
									onReprint: handleManualReprint,
									onNextStatus: (id) => handleUpdateStatus(id, "preparing"),
									nextLabel: "Préparer",
									nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookingPot, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
									title: "En Cuisine",
									badgeCount: preparingOrdersList.length,
									color: "bg-[#f59e0b]",
									orders: preparingOrdersList,
									onSelect: setSelectedOrder,
									onReprint: handleManualReprint,
									onNextStatus: (id) => handleUpdateStatus(id, "ready"),
									nextLabel: "Prête",
									nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
									title: "Prêtes / Comptoir",
									badgeCount: readyOrdersList.length,
									color: "bg-[#10b981]",
									orders: readyOrdersList,
									onSelect: setSelectedOrder,
									onReprint: handleManualReprint,
									onNextStatus: (id) => {
										if (orders.find((o) => o.id === id)?.customer.fulfillment === "delivery") handleUpdateStatus(id, "delivering");
										else handleUpdateStatus(id, "completed");
									},
									nextLabel: "Départ Livr. / Remis",
									nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanbanColumn, {
									title: "En Livraison",
									badgeCount: deliveringOrdersList.length,
									color: "bg-[#3b82f6]",
									orders: deliveringOrdersList,
									onSelect: setSelectedOrder,
									onReprint: handleManualReprint,
									onNextStatus: (id) => handleUpdateStatus(id, "completed"),
									nextLabel: "Livrée",
									nextIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-4 h-4" })
								})
							]
						}),
						activeTab === "history" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 p-6 overflow-y-auto space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 bg-white/5 p-4 rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-[#7a847e]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Rechercher par n° de commande, client, téléphone...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "bg-transparent flex-1 text-white placeholder-[#7a847e] outline-none font-bold"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-white/10 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-black/30 text-xs uppercase text-[#8ea39b] font-black",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "N° Commande"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Date / Heure"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Client"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Mode"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Total"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Statut"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4",
												children: "Impression"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4 text-right",
												children: "Actions"
											})
										] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-white/5 font-semibold",
										children: orders.filter((o) => o.id.toLowerCase().includes(searchQuery.toLowerCase()) || o.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || o.customer.phone.includes(searchQuery)).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-white/5 transition",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 font-mono font-bold text-white",
													children: o.id
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 text-[#8ea39b]",
													children: [
														new Date(o.createdAt).toLocaleDateString("fr-BE"),
														" ",
														new Date(o.createdAt).toLocaleTimeString("fr-BE", {
															hour: "2-digit",
															minute: "2-digit"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: o.customer.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: o.customer.fulfillment === "delivery" ? "Livraison" : "Retrait"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 font-bold text-white",
													children: [o.total.toFixed(2), " €"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-white/10 px-3 py-1 text-xs font-black",
														children: o.status
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `rounded-full px-2.5 py-1 text-xs font-black ${o.printStatus === "printed" ? "bg-emerald-500/20 text-emerald-300" : o.printStatus === "failed" ? "bg-red-500/20 text-red-300" : "bg-amber-500/20 text-amber-300"}`,
														children: o.printStatus ?? "pending"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													className: "p-4 text-right space-x-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setSelectedOrder(o),
														className: "rounded-xl bg-white/10 px-3 py-1.5 text-xs font-black hover:bg-white/20",
														children: "Détail"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleManualReprint(o.id),
														className: "rounded-xl bg-[#ff705f] px-3 py-1.5 text-xs font-black text-white hover:bg-[#ff5a47]",
														children: "Réimprimer"
													})]
												})
											]
										}, o.id))
									})]
								})
							})]
						}),
						activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 p-8 max-w-2xl mx-auto overflow-y-auto space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black",
									children: "Configuration Matériel & POS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-black text-[#ff705f]",
											children: "Imprimante Réseau (Epson TM-m30II)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-extrabold uppercase text-[#8ea39b]",
											children: "Adresse IP"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: config.printerIp,
											onChange: (e) => setConfig({
												...config,
												printerIp: e.target.value
											}),
											className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
											placeholder: "192.168.1.100"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-extrabold uppercase text-[#8ea39b]",
											children: "Port TCP ESC/POS"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											value: config.printerPort,
											onChange: (e) => setConfig({
												...config,
												printerPort: Number(e.target.value)
											}),
											className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
											placeholder: "9100"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-extrabold uppercase text-[#8ea39b]",
											children: "URL Print Bridge Local (Optionnel)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: config.bridgeUrl ?? "",
											onChange: (e) => setConfig({
												...config,
												bridgeUrl: e.target.value
											}),
											className: "mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-white font-mono font-bold",
											placeholder: "http://localhost:3001"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													savePrinterConfig(config);
													alert("Configuration enregistrée.");
												},
												className: "flex-1 rounded-xl bg-[#ff705f] py-3 text-white font-black text-sm",
												children: "Enregistrer"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: handleTestPrint,
												disabled: testingPrinter,
												className: "flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 py-3 text-white font-black text-sm shadow-lg shadow-emerald-900/30 transition-all cursor-pointer disabled:opacity-60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4" }), testingPrinter ? "Test en cours…" : "Tester l'impression (Direct ePOS)"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-black text-white",
										children: "Journal d'impression direct"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-44 overflow-y-auto font-mono text-xs space-y-1 bg-black/40 p-3 rounded-xl",
										children: printLog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[#6c7d76]",
											children: "Aucune impression récente."
										}) : printLog.map((log, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: log.type === "ok" ? "text-emerald-400" : "text-rose-400",
											children: [
												"[",
												log.time,
												"] ",
												log.msg
											]
										}, idx))
									})]
								})
							]
						})
					]
				}),
				selectedOrder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-xl rounded-3xl bg-[#142822] border border-white/15 p-6 shadow-2xl space-y-5 text-white max-h-[90vh] overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/10 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xl font-black",
									children: selectedOrder.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-[#8ea39b] mt-0.5",
									children: ["Créée à ", new Date(selectedOrder.createdAt).toLocaleTimeString("fr-BE")]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSelectedOrder(null),
									className: "rounded-full bg-white/10 w-9 h-9 flex items-center justify-center text-sm font-black hover:bg-white/20",
									children: "✕"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-black/30 p-4 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-black",
											children: selectedOrder.customer.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:${selectedOrder.customer.phone}`,
											className: "flex items-center gap-1.5 text-xs font-bold text-[#EADCC9] bg-white/10 px-3 py-1.5 rounded-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-[#ff705f]" }), selectedOrder.customer.phone]
										})]
									}),
									selectedOrder.customer.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-[#8ea39b] pt-1 border-t border-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-white",
											children: selectedOrder.customer.address
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
											selectedOrder.customer.postalCode,
											" ",
											selectedOrder.customer.city
										] })]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#EADCC9] font-bold",
										children: "Retrait sur place"
									}),
									selectedOrder.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs bg-[#ff705f]/15 border border-[#ff705f]/30 p-2.5 rounded-xl text-white",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note :" }),
											" ",
											selectedOrder.customer.notes
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase text-[#8ea39b]",
										children: "Articles commandés"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "divide-y divide-white/5 bg-black/20 rounded-2xl p-3",
										children: selectedOrder.items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "py-2 first:pt-0 last:pb-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between font-bold text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													it.quantity,
													"× ",
													it.name
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(it.price * it.quantity).toFixed(2), " €"] })]
											}), it.toppings && it.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pl-4 text-xs text-[#8ea39b] space-y-0.5 mt-1 border-l border-[#ff705f]/50",
												children: it.toppings.map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: top }, tidx))
											})]
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between items-center pt-2 px-2 font-black text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [selectedOrder.total.toFixed(2), " €"] })]
									})
								]
							}),
							selectedOrder.customer.fulfillment === "delivery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-[#1b322a] border border-white/10 p-4 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-black uppercase text-emerald-400",
											children: "GPS & Navigation Livreur"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold",
											children: "1-Clic"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-2.5 text-xs font-black shadow transition active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Google Maps"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://waze.com/ul?q=${encodeURIComponent(`${selectedOrder.customer.address ?? ""}, ${selectedOrder.customer.postalCode ?? ""} ${selectedOrder.customer.city ?? ""}`)}`,
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-2.5 text-xs font-black shadow transition active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Waze"]
										})]
									}),
									(selectedOrder.deliveryToken || selectedOrder.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 bg-black/40 p-4 rounded-2xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-white p-2.5 rounded-xl shadow-lg shrink-0",
											children: modalQrDataUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: modalQrDataUrl,
												alt: "QR Code GPS Livreur",
												className: "w-36 h-36 block",
												style: { imageRendering: "pixelated" }
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-36 h-36 flex items-center justify-center text-black text-xs font-bold",
												children: "Génération..."
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs space-y-2 flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-black text-white text-sm",
													children: "QR Code GPS Haute Précision"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[#8ea39b] text-xs leading-relaxed",
													children: [
														"Scannez ce QR Code avec votre téléphone pour ouvrir instantanément l'itinéraire GPS ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Waze" }),
														" ou ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Google Maps" }),
														" vers :"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-white font-bold bg-white/10 p-2 rounded-xl border border-white/10",
													children: [
														"📍 ",
														selectedOrder.customer.address,
														", ",
														selectedOrder.customer.postalCode,
														" ",
														selectedOrder.customer.city
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "pt-1 flex gap-2",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: `/track/${selectedOrder.deliveryToken || selectedOrder.id}`,
														target: "_blank",
														rel: "noreferrer",
														className: "inline-flex items-center gap-1.5 bg-[#ff705f] hover:bg-[#ff5a47] text-white px-3 py-2 rounded-xl font-black text-xs transition",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📱 Tester la page livreur en direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" })]
													})
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => printThermalTicket(selectedOrder),
									className: "rounded-2xl bg-[#ff705f] hover:bg-[#ff5a47] text-white py-3.5 text-xs font-black transition flex items-center justify-center gap-2 shadow-lg shadow-[#ff705f]/20 active:scale-95 cursor-pointer",
									title: "Lancer l'impression directe du ticket thermique 80mm avec QR Code",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4" }), "Imprimer Ticket Direct"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => handleManualReprint(selectedOrder.id),
									className: "rounded-2xl bg-white/10 hover:bg-white/20 text-white py-3.5 text-xs font-black transition flex items-center justify-center gap-2 active:scale-95 cursor-pointer",
									title: `Envoyer le flux ePOS directement à l'adresse IP réseau (${config.printerIp})`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-[#ff705f]" }),
										"Imprimer Réseau (",
										config.printerIp,
										")"
									]
								})]
							})
						]
					})
				})
			]
		})
	] });
}
function KanbanColumn({ title, badgeCount, color, orders, onSelect, onReprint, onNextStatus, nextLabel, nextIcon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-2xl bg-[#142822] border border-white/5 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between p-3.5 border-b border-white/5 bg-black/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-3 h-3 rounded-full ${color}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-black tracking-wide text-white",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-black text-white",
				children: badgeCount
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-2.5 space-y-2.5",
			children: orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-32 items-center justify-center text-xs font-bold text-[#62776f]",
				children: "Aucune commande"
			}) : orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: () => onSelect(o),
				className: "rounded-2xl bg-black/40 border border-white/10 p-3.5 shadow hover:border-white/30 transition cursor-pointer space-y-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm font-black text-white",
							children: o.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-black uppercase text-[#8ea39b]",
							children: o.customer.requestedTime
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-black text-white",
						children: o.customer.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold text-[#8ea39b]",
						children: [
							o.items.reduce((acc, it) => acc + it.quantity, 0),
							" articles · ",
							o.total.toFixed(2),
							" €"
						]
					})] }),
					o.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs bg-[#ff705f]/15 p-2 rounded-xl text-[#ff8e80] line-clamp-1 font-bold",
						children: ["! ", o.customer.notes]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1 flex items-center gap-2 border-t border-white/5",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onReprint(o.id),
							className: "rounded-xl bg-white/10 p-2 text-[#8ea39b] hover:text-white hover:bg-white/20 transition",
							title: "Réimprimer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onNextStatus(o.id),
							className: "flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-[#ff705f] py-2 text-xs font-black text-white hover:bg-[#ff5a47] active:scale-95 transition",
							children: [nextIcon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nextLabel })]
						})]
					})
				]
			}, o.id))
		})]
	});
}
//#endregion
//#region src/routes/product/$productId.tsx
var Route$3 = createFileRoute("/product/$productId")({ component: ProductPage });
var TAG_STYLES = {
	signature: "bg-[#2C1D16] text-[#EADCC9]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#EADCC9] text-[#2C1D16] border border-[#D9C5AD]"
};
function ToppingChip({ topping, qty, onAdd, onRemove }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: ["relative flex flex-col justify-between rounded-2xl border-2 p-3 text-center transition-all duration-200 select-none", qty > 0 ? "border-[#ff705f] bg-[#fff3f1] shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#ff705f]/50 hover:bg-[#faf8f4]"].join(" "),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl leading-none",
					role: "img",
					"aria-hidden": "true",
					children: topping.emoji
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold leading-tight text-[#17231f]",
					children: topping.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-black text-[#ff705f]",
					children: qty === 0 ? `+${topping.price.toFixed(2)} €` : `${qty} portion${qty > 1 ? "s" : ""} (+${(qty * topping.price).toFixed(2)}€)`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2.5 flex items-center justify-center border-t border-black/5 pt-2",
			children: qty > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onRemove,
						"aria-label": `Diminuer ${topping.name}`,
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#ff705f]/40 text-[#ff705f] font-bold hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3 stroke-[3]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-5 text-center text-xs font-black text-[#2C1D16]",
						children: qty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onAdd,
						"aria-label": `Ajouter ${topping.name}`,
						className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#ff705f] text-white font-bold hover:bg-[#ff5542] transition active:scale-95 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" })
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onAdd,
				className: "flex items-center gap-1 rounded-full bg-[#2C1D16] px-3 py-1 text-[11px] font-black text-[#EADCC9] hover:bg-[#ff705f] hover:text-white transition active:scale-95 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter" })]
			})
		})]
	});
}
function RemovableIngredientButton({ name, emoji, isRemoved, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": isRemoved,
		"aria-label": isRemoved ? `Remettre ${name}` : `Retirer ${name} (allergie)`,
		className: ["group inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-200", isRemoved ? "border-[#ff705f] bg-[#ff705f]/15 text-[#c0350f] line-through decoration-[#c0350f]" : "border-[#e0d9cc] bg-white text-[#2a3731] hover:border-[#ff705f]/60 hover:bg-[#fff9f8] shadow-sm"].join(" "),
		children: [
			emoji && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				role: "img",
				"aria-hidden": "true",
				className: "text-sm",
				children: emoji
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }),
			isRemoved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#c0350f] text-[9px] font-black text-white not-italic no-underline",
				children: "✕"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black/5 text-[9px] font-bold text-[#88928c] opacity-70 group-hover:bg-[#ff705f]/20 group-hover:text-[#ff705f]",
				children: "✕"
			})
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
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center text-xl font-black tabular-nums",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onPlus,
				"aria-label": "Augmenter la quantité",
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2d9] bg-white text-[#2e2619] transition hover:border-[#ff705f] hover:text-[#ff705f] active:scale-90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
			})
		]
	});
}
function ProductPage() {
	const { productId } = Route$3.useParams();
	const product = bowls.find((b) => b.id === productId);
	const { t, language, setLanguage } = useTranslation();
	const { addItem, setIsCartOpen, items } = useCart();
	const { available } = useStock();
	if (productId === "sur-mesure") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/sur-mesure",
		replace: true
	});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#F6F1E9] px-5",
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
	const isCrousty = product.id.startsWith("crousty-");
	const productOk = available(product.id);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(product.defaultBase || "Riz à sushi");
	const [selectedSauce, setSelectedSauce] = import_react.useState(product.defaultSauce || "Spicy-Mayo");
	const [removedIngredients, setRemovedIngredients] = import_react.useState([]);
	const [extraChicken, setExtraChicken] = import_react.useState(false);
	const [extraProtein, setExtraProtein] = import_react.useState(null);
	const [selectedMixins, setSelectedMixins] = import_react.useState([]);
	const [toppingQuantities, setToppingQuantities] = import_react.useState({});
	const [extraSauce, setExtraSauce] = import_react.useState(null);
	const [selectedDrink, setSelectedDrink] = import_react.useState(drinks[0]?.name || "Coca-Cola (33 cl)");
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	const sizeExtra = !isCrousty && selectedSize === "grand" ? 3 : 0;
	const extraProteinPrice = isCrousty ? extraChicken ? 2.5 : 0 : extraProtein ? 2.5 : 0;
	const mixinsExtraPrice = selectedMixins.length * .5;
	const totalToppingsCount = Object.values(toppingQuantities).reduce((sum, q) => sum + q, 0);
	const toppingsExtraPrice = totalToppingsCount * .5;
	const extraSaucePrice = extraSauce ? 1 : 0;
	const unitPrice = product.price + sizeExtra + extraProteinPrice + mixinsExtraPrice + toppingsExtraPrice + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleRemovedIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const addTopping = (name) => {
		setToppingQuantities((cur) => ({
			...cur,
			[name]: (cur[name] ?? 0) + 1
		}));
	};
	const removeTopping = (name) => {
		setToppingQuantities((cur) => {
			const current = cur[name] ?? 0;
			if (current <= 1) {
				const copy = { ...cur };
				delete copy[name];
				return copy;
			}
			return {
				...cur,
				[name]: current - 1
			};
		});
	};
	const toggleMixin = (mixinName) => {
		setSelectedMixins((cur) => cur.includes(mixinName) ? cur.filter((m) => m !== mixinName) : [...cur, mixinName]);
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const optionsList = [];
		if (isCrousty) {
			optionsList.push("Format : Taille unique standard (Portion généreuse)");
			if (extraChicken) optionsList.push("Supplément : + Portion extra Poulet Croustillant (+2.50€)");
			optionsList.push(`Boisson 33cl incluse : ${selectedDrink}`);
		} else {
			if (selectedSize === "grand") optionsList.push("Taille : Grand (+3.00€)");
			else optionsList.push("Taille : Moyen (Standard)");
			if (extraProtein) optionsList.push(`Supplément Protéine (+2.50€) : ${extraProtein}`);
		}
		optionsList.push(`Base : ${selectedBase}`);
		if (selectedSauce === "none") optionsList.push("Sauce : Sans sauce");
		else optionsList.push(`Sauce : ${selectedSauce}`);
		selectedMixins.forEach((m) => {
			optionsList.push(`Légume / Mix-in (+0.50€) : ${m}`);
		});
		Object.entries(toppingQuantities).forEach(([t, q]) => {
			if (q > 0) optionsList.push(`Topping (+0.50€) : ${t}${q > 1 ? ` (x${q})` : ""}`);
		});
		if (extraSauce) optionsList.push(`Sauce extra (+1€) : ${extraSauce}`);
		addItem({
			id: isCrousty ? `${product.id}` : `${product.id}-${selectedSize}`,
			name: isCrousty ? product.name : `${product.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
			basePrice: product.price,
			price: unitPrice,
			quantity: qty,
			toppings: optionsList,
			removedIngredients
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1800);
		setIsCartOpen(true);
	};
	const tagStyle = TAG_STYLES[product.tagColor ?? "signature"] ?? "bg-[#2C1D16] text-white";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-[#F6F1E9] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "group flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200",
						"aria-label": "Poke N Bowl — Accueil",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 sm:gap-3",
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
									className: `rounded-full px-2 py-1 text-[9px] font-black uppercase transition-colors ${language === lang ? "bg-[#2C1D16] text-white" : "text-[#7a847e] hover:text-[#17231f]"}`,
									children: lang
								}, lang))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/commander",
								className: "hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17231f] hover:text-[#ff705f] sm:flex",
								children: "La Carte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#2C1D16] p-2.5 text-white transition hover:bg-[#1e3d33]",
								"aria-label": t("cart.title"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }), cartItemsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black",
									children: cartItemsCount
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-6 pb-36 sm:px-6 sm:py-8 sm:pb-12 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/commander",
					className: "mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#7a847e] transition hover:text-[#17231f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
						" ",
						t("product.back")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-[32px] shadow-lift sm:rounded-[36px] bg-[#12231b]",
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
									className: "absolute bottom-4 right-4 rounded-full bg-white/95 backdrop-blur-sm border border-black/5 px-4 py-2 text-base font-black text-[#2C1D16] shadow-card",
									children: ["€ ", unitPrice.toFixed(2)]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] border border-black/5 bg-white p-5 shadow-card space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2C1D16]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Préparé minute sur commande à Visé" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#707e77] leading-relaxed",
								children: isCrousty ? "Poulet croustillant frit minute, bien doré et nappé de sauce généreuse avec riz chaud et canette 33cl fraîche incluse." : "Chaque bowl est assemblé à la commande à Visé avec du poisson noble et légumes frais du jour. Vous pouvez retirer n'importe quel ingrédient en cas d'allergie ou ajouter tous les suppléments souhaités."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-black uppercase tracking-[0.2em] text-[#ff705f]",
										children: isCrousty ? "Crousty Chicken Chaud" : "Poké Bowl Signature"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 text-3xl font-black leading-tight sm:text-4xl text-[#2C1D16]",
									children: product.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-[#68756f]",
									children: product.desc
								})
							] }),
							product.menuNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#a96b0d]/25 bg-[#ead9bb]/40 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-black text-[#8f5b12] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 shrink-0" }), product.menuNote]
								})
							}),
							!productOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-[#ff705f]/30 bg-[#ff705f]/10 p-4 text-sm font-bold text-[#ff705f]",
								children: t("product.unavailable")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								isCrousty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#fed7aa] bg-[#fff7ed] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-block rounded-full bg-[#ea580c] text-white px-3 py-0.5 text-[10px] font-black uppercase tracking-wider mb-1",
												children: "Taille Unique Standard"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-sm font-black text-[#17231f]",
												children: "Portion Généreuse Chaude · Formule 11.00 €"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#7a847e] mt-0.5",
												children: "Petits morceaux de poulet croustillant dorés + Riz chaud + Boisson 33cl incluse"
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl font-black text-[#ea580c]",
											children: "11.00 €"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-3 border-t border-[#fed7aa]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setExtraChicken(!extraChicken),
											className: `w-full flex items-center justify-between rounded-2xl border-2 p-3 transition-all ${extraChicken ? "border-[#ea580c] bg-white shadow-sm font-black" : "border-[#fed7aa]/60 bg-white/70 hover:border-[#ea580c] hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xl",
													children: "🍗"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-left",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#2C1D16]",
														children: "Supplément Poulet Croustillant"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7a847e]",
														children: "Portion extra de petits morceaux dorés croustillants"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-3 py-1 text-xs font-black ${extraChicken ? "bg-[#ea580c] text-white" : "bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]"}`,
												children: extraChicken ? "✓ Inclus (+2.50 €)" : "+ 2.50 €"
											})]
										})
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
												children: "1. Format & Taille"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-[#a09a92]",
												children: "Bol bambou"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-3",
											children: bowlSizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSize(size.id),
												className: ["flex flex-col items-start rounded-2xl border-2 p-3.5 text-left transition-all", selectedSize === size.id ? "border-[#2C1D16] bg-[#2C1D16] text-white shadow-md" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#2C1D16]/40"].join(" "),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex w-full items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-sm uppercase",
														children: size.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs font-black ${selectedSize === size.id ? "text-[#EADCC9]" : "text-[#ff705f]"}`,
														children: size.extraPrice === 0 ? "Inclus" : `+${size.extraPrice.toFixed(2)}€`
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `mt-1 text-[11px] leading-tight ${selectedSize === size.id ? "text-white/70" : "text-[#7a847e]"}`,
													children: size.description
												})]
											}, size.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 pt-3 border-t border-black/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center justify-between mb-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-black uppercase tracking-wider text-[#7a847e]",
													children: "Envie d'une portion double de protéine ? (+2.50 €)"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-2",
												children: [
													{
														id: "poulet",
														name: "Poulet Teriyaki",
														emoji: "🍗"
													},
													{
														id: "saumon",
														name: "Saumon Sashimi",
														emoji: "🐟"
													},
													{
														id: "scampis",
														name: "Scampis Grillés",
														emoji: "🦐"
													}
												].map((pr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setExtraProtein(extraProtein === pr.name ? null : pr.name),
													className: `rounded-full px-3.5 py-1.5 text-xs font-bold border transition ${extraProtein === pr.name ? "bg-[#ff705f] border-[#ff705f] text-white shadow-sm" : "bg-[#faf8f4] border-[#e8e2d9] text-[#17231f] hover:border-[#ff705f]/50"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
														pr.emoji,
														" ",
														extraProtein === pr.name ? `✓ ${pr.name} (+2.50 €)` : `+ Extra ${pr.name} (+2.50 €)`
													] })
												}, pr.id))
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
											children: isCrousty ? "Base" : "2. Base au choix"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "Incluse · change selon tes envies"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#EADCC9] border border-[#D9C5AD] px-2.5 py-0.5 text-[10px] font-black text-[#2C1D16]",
											children: selectedBase
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2 sm:grid-cols-5",
										children: detailedBases.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedBase(b.name),
											className: ["flex flex-col items-center justify-center rounded-xl border-2 p-2.5 text-center transition-all", selectedBase === b.name ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]" : "border-[#e8e2d9] bg-white font-bold text-[#2e2619] hover:border-[#ff705f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: b.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 text-[11px] leading-tight",
												children: b.name
											})]
										}, b.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
													className: "text-sm font-black uppercase tracking-wider text-[#17231f] flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#ff705f]" }), "Composition de la recette & Allergies"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold text-[#ff705f]",
													children: "100% Modifiable"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-[#7a847e] leading-relaxed",
												children: [
													"Clique sur un ingrédient pour le ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "retirer" }),
													" si tu as une allergie ou une intolérance."
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2 pt-1",
											children: product.ingredients.map((ing) => {
												const isRemoved = removedIngredients.includes(ing.name);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemovableIngredientButton, {
													name: ing.name,
													emoji: ing.emoji,
													isRemoved,
													onToggle: () => toggleRemovedIngredient(ing.name)
												}, ing.name);
											})
										}),
										removedIngredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 rounded-xl border border-[#ff705f]/30 bg-[#fff1ee] p-3 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-black text-[#c0350f] flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⚠️ Préparation sans :" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-extrabold",
													children: removedIngredients.join(", ")
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[10px] text-[#8e4539]",
												children: "La consigne sera transmise avec soin en cuisine."
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
												children: "Sauce"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#7a847e]",
												children: "Incluse · changement gratuit"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#2C1D16] px-2.5 py-0.5 text-[10px] font-black text-[#EADCC9]",
												children: selectedSauce === "none" ? "Sans sauce" : selectedSauce
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
											children: [detailedSauces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSauce(s.name),
												className: ["flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-xs transition-all", selectedSauce === s.name ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]" : "border-[#e8e2d9] bg-white font-bold text-[#2e2619] hover:border-[#ff705f]/40"].join(" "),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: s.name
												})]
											}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setSelectedSauce("none"),
												className: ["flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-xs transition-all", selectedSauce === "none" ? "border-[#ff705f] bg-[#fff3f1] font-black text-[#c0350f]" : "border-[#e8e2d9] bg-white font-bold text-[#7a847e] hover:border-[#ff705f]/40"].join(" "),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🚫" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sans sauce" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 border-t border-black/5 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-black uppercase tracking-wider text-[#7a847e] mb-2",
												children: "Envie d'un 2ème pot de sauce séparé ? (+1.00€)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1.5",
												children: detailedSauces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setExtraSauce(extraSauce === s.name ? null : s.name),
													className: ["rounded-full border px-3 py-1 text-[11px] font-bold transition-all", extraSauce === s.name ? "border-[#ff705f] bg-[#ff705f] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#ff705f]/50"].join(" "),
													children: extraSauce === s.name ? `✓ Extra ${s.name} (+1€)` : `+ ${s.name} (+1€)`
												}, `extra-${s.id}`))
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
											children: "Suppléments Légumes & Fruits Frais"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "À volonté · choisis autant de légumes que tu veux (+0.50€ chaque)"
										})] }), selectedMixins.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#059669] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												selectedMixins.length,
												" légume",
												selectedMixins.length > 1 ? "s" : "",
												" (+",
												(selectedMixins.length * .5).toFixed(2),
												"€)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: detailedMixIns.map((mix) => {
											const isSelected = selectedMixins.includes(mix.name);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => toggleMixin(mix.name),
												className: `flex items-center gap-2 rounded-xl border p-2.5 text-left transition ${isSelected ? "border-[#059669] bg-[#ecfdf5] text-[#065f46] font-black shadow-sm" : "border-[#e8e2d9] bg-white hover:border-[#059669]/40 text-[#2e2619] font-medium"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xl",
														children: mix.emoji
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs truncate",
															children: mix.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-[#059669] font-bold",
															children: "+0.50 €"
														})]
													}),
													isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#059669] shrink-0" })
												]
											}, mix.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
											children: "Toppings Croustillants"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "À volonté · choisis autant de portions que tu veux (+0.50€ chaque, même 10 ou 40 fois le même)"
										})] }), totalToppingsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												totalToppingsCount,
												" portion",
												totalToppingsCount > 1 ? "s" : "",
												" (+",
												toppingsExtraPrice.toFixed(2),
												"€)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: toppings.map((topping) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToppingChip, {
											topping,
											qty: toppingQuantities[topping.name] ?? 0,
											onAdd: () => addTopping(topping.name),
											onRemove: () => removeTopping(topping.name)
										}, topping.id))
									})]
								}),
								isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#fed7aa] bg-[#fff7ed] p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f] flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ea580c]" }), "Boisson 33cl / 50cl Incluse dans la Formule"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "Comprise dans les 11.00 € · sélectionne ta boisson fraîche"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: drinks.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedDrink(d.name),
											className: ["flex items-center justify-between rounded-xl border-2 p-2.5 text-left text-xs font-bold transition-all", selectedDrink === d.name ? "border-[#ea580c] bg-white text-[#ea580c] shadow-sm font-black" : "border-[#fed7aa]/70 bg-white/70 text-[#2e2619] hover:border-[#ea580c]/50"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: d.name
											}), selectedDrink === d.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#ea580c]" })]
										}, d.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
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
												children: qty > 1 ? `${qty} × ${unitPrice.toFixed(2)}€` : "Prix unitaire calculé"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-3xl font-black text-[#17231f]",
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
										className: ["btn-primary w-full text-sm font-black py-4 shadow-lift transition-all", added ? "bg-[#2C1D16] scale-[0.99]" : "hover:scale-[1.01] active:scale-95"].join(" "),
										children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-[#22c55e]" }), " Ajouté au panier !"]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }),
												"Ajouter au panier · € ",
												totalPrice.toFixed(2)
											]
										})
									})
								})
							] })
						]
					})]
				})]
			}),
			productOk && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3.5 backdrop-blur-xl sm:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.1)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleAddToCart,
					className: ["btn-primary w-full py-3.5 text-sm font-black shadow-glow-coral", added ? "bg-[#2C1D16]" : ""].join(" "),
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22c55e]" }), " Ajouté !"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }),
							"Ajouter · € ",
							totalPrice.toFixed(2)
						]
					})
				})
			})
		]
	});
}
//#endregion
//#region src/fn/delivery.ts
var getDeliveryOrder = createServerFn({ method: "GET" }).validator(objectType({ token: stringType().min(1) })).handler(async ({ data }) => {
	const order = await getOrderByDeliveryToken((data.token ?? "").trim());
	if (!order) return { found: false };
	return {
		found: true,
		order: {
			id: order.id,
			createdAt: order.createdAt,
			status: order.status,
			fulfillment: order.customer?.fulfillment ?? "delivery",
			requestedTime: order.customer?.requestedTime ?? "Dès que possible",
			customerName: order.customer?.name ?? "Client",
			customerPhone: order.customer?.phone ?? "",
			notes: order.customer?.notes ?? "",
			address: order.customer?.address ?? "",
			postalCode: order.customer?.postalCode ?? "",
			city: order.customer?.city ?? "",
			deliveryFee: order.customer?.deliveryFee,
			total: Number(order.total || 0),
			paymentMethod: order.paymentMethod,
			items: (order.items || []).map((i) => ({
				name: i.name,
				quantity: i.quantity,
				toppings: i.toppings
			}))
		}
	};
});
var updateDeliveryStatus = createServerFn({ method: "POST" }).validator(objectType({
	token: stringType().min(1),
	status: enumType(["delivering", "completed"])
})).handler(async ({ data }) => {
	const order = await getOrderByDeliveryToken((data.token ?? "").trim());
	if (!order) throw new Error("Commande introuvable");
	await updateOrderStatus(order.id, data.status);
	return { success: true };
});
//#endregion
//#region src/routes/track/$token.tsx
var Route$2 = createFileRoute("/track/$token")({ component: DeliveryTrackPage });
function DeliveryTrackPage() {
	const { token } = Route$2.useParams();
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [updating, setUpdating] = (0, import_react.useState)(false);
	const [order, setOrder] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const fetchOrder = async () => {
		try {
			const raw = await fetch(`/api/track-order?token=${encodeURIComponent(token)}`, {
				headers: { Accept: "application/json" },
				cache: "no-store"
			});
			if (raw.ok) {
				const data = await raw.json();
				if (data.found && data.order) {
					setOrder(data.order);
					setError(null);
					setLoading(false);
					return;
				}
			}
			const res = await getDeliveryOrder({ data: { token } });
			if (res.found) {
				setOrder(res.order);
				setError(null);
			} else setError("Commande introuvable ou lien expiré.");
		} catch (e) {
			console.warn("[Track] Erreur API REST, fallback createServerFn:", e);
			try {
				const res = await getDeliveryOrder({ data: { token } });
				if (res.found) {
					setOrder(res.order);
					setError(null);
					return;
				}
			} catch {}
			setError("Impossible de charger les données de la commande.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchOrder();
		const interval = setInterval(fetchOrder, 1e4);
		return () => clearInterval(interval);
	}, [token]);
	const handleStatusChange = async (newStatus) => {
		setUpdating(true);
		try {
			if ((await fetch("/api/track-order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					token,
					status: newStatus
				})
			})).ok) {
				await fetchOrder();
				return;
			}
			await updateDeliveryStatus({ data: {
				token,
				status: newStatus
			} });
			await fetchOrder();
		} catch (e) {
			console.error(e);
			alert("Erreur lors de la mise à jour du statut.");
		} finally {
			setUpdating(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#F6F1E9]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-10 w-10 animate-spin text-[#ff705f] mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-black uppercase tracking-wider text-[#758079]",
				children: "Chargement de la livraison..."
			})]
		})
	});
	if (error || !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-[#F6F1E9] px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-16 h-16 rounded-full bg-[#ff705f]/15 flex items-center justify-center mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-9 w-9 text-[#ff705f]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-black text-[#17231f]",
				children: "Lien invalide ou expiré"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-[#758079] max-w-sm",
				children: error ?? "La commande demandée est introuvable."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-xs bg-black/5 px-3 py-1.5 rounded-lg text-[#17231f]",
				children: ["Réf : ", token]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setLoading(true);
					setError(null);
					fetchOrder();
				},
				className: "mt-6 rounded-2xl bg-[#ff705f] px-6 py-3 font-black text-white text-sm shadow hover:bg-[#ff5a47] transition active:scale-95",
				children: "🔄 Réessayer la recherche"
			})
		]
	});
	const fullAddress = `${order.address ?? ""}, ${order.postalCode ?? ""} ${order.city ?? ""}`.trim();
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
	const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}&navigate=yes`;
	const appleMapsUrl = `https://maps.apple.com/?daddr=${encodeURIComponent(fullAddress)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F6F1E9] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-black/5 bg-[#F6F1E9]/95 px-5 py-3 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-lg items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs font-black bg-black/5 px-3 py-1 rounded-full",
					children: order.id
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-lg px-4 py-6 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: "Statut"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-[#fff5f3] px-3 py-1 text-xs font-black text-[#ff705f]",
							children: [
								order.status === "paid" && "Payée / En attente",
								order.status === "preparing" && "En préparation",
								order.status === "ready" && "Prête pour livraison",
								order.status === "delivering" && "En cours de livraison",
								order.status === "completed" && "Livrée",
								order.status === "cancelled" && "Annulée"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 text-sm text-[#7a847e]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Créneau demandé : ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-[#17231f]",
							children: order.requestedTime
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
						children: "Client"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-black",
							children: order.customerName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-[#7a847e]",
							children: order.customerPhone
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${order.customerPhone}`,
							className: "flex items-center gap-2 rounded-xl bg-[#25D366]/15 text-[#189947] hover:bg-[#25D366]/25 px-4 py-3 font-bold text-sm transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "Appeler"]
						})]
					})]
				}),
				order.fulfillment === "delivery" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
								children: "Adresse de Livraison"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold bg-[#ff705f]/15 text-[#ff705f] px-2.5 py-0.5 rounded-full",
								children: "Navigation 1-Clic"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[#ff705f] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-black text-lg leading-snug",
								children: order.address
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-bold text-[#7a847e]",
								children: [
									order.postalCode,
									" ",
									order.city
								]
							})] })]
						}),
						order.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-[#fff9ea] border border-[#f3d996] p-3 text-xs text-[#735311]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Instructions client :" }),
								" ",
								order.notes
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: mapsUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-3.5 px-3 font-black text-sm shadow transition active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Google Maps"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: wazeUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-3.5 px-3 font-black text-sm shadow transition active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Waze"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: appleMapsUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 rounded-xl bg-[#17231f] hover:bg-black text-white py-3.5 px-3 font-black text-sm shadow transition active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Apple Plans"]
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
						children: "Mode de réception"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-bold text-base",
						children: "Retrait sur place (Poke N Bowl Visé)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: [
								"Articles (",
								order.items.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-black text-sm",
							children: [
								"Total: ",
								order.total.toFixed(2),
								" €"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-black/5",
						children: order.items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-between font-bold text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									item.quantity,
									"× ",
									item.name
								] })
							}), item.toppings && item.toppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-[#7a847e] pl-4 border-l-2 border-[#ff705f]/40 space-y-0.5",
								children: item.toppings.map((top, tidx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: top }, tidx))
							})]
						}, idx))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pt-2 space-y-2",
					children: [
						order.status !== "delivering" && order.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleStatusChange("delivering"),
							disabled: updating,
							className: "w-full rounded-2xl bg-[#ff705f] py-4 text-white font-black text-base shadow-lg hover:bg-[#ff5a47] transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" }), updating ? "Mise à jour..." : "Partir en livraison"]
						}),
						order.status === "delivering" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleStatusChange("completed"),
							disabled: updating,
							className: "w-full rounded-2xl bg-[#2C1D16] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-5 w-5 text-[#22c55e]" }), updating ? "Mise à jour..." : "Marquer comme Livrée"]
						}),
						order.status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-[#2C1D16] p-4 text-center text-[#EADCC9] font-black text-sm",
							children: "✓ Commande terminée et livrée"
						})
					]
				})
			]
		})]
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
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var CheckoutRoute = Route$18.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$20
});
var CommanderRoute = Route$17.update({
	id: "/commander",
	path: "/commander",
	getParentRoute: () => Route$20
});
var ContactRoute = Route$16.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$20
});
var RecrutementRoute = Route$15.update({
	id: "/recrutement",
	path: "/recrutement",
	getParentRoute: () => Route$20
});
var SurMesureRoute = Route$14.update({
	id: "/sur-mesure",
	path: "/sur-mesure",
	getParentRoute: () => Route$20
});
var AdminStocksRoute = Route$13.update({
	id: "/admin/stocks",
	path: "/admin/stocks",
	getParentRoute: () => Route$20
});
var ApiBancontactWebhookRoute = Route$12.update({
	id: "/api/bancontact-webhook",
	path: "/api/bancontact-webhook",
	getParentRoute: () => Route$20
});
var ApiBankStatusRoute = Route$11.update({
	id: "/api/bank-status",
	path: "/api/bank-status",
	getParentRoute: () => Route$20
});
var ApiCreateTestOrderRoute = Route$10.update({
	id: "/api/create-test-order",
	path: "/api/create-test-order",
	getParentRoute: () => Route$20
});
var ApiMollieWebhookRoute = Route$9.update({
	id: "/api/mollie-webhook",
	path: "/api/mollie-webhook",
	getParentRoute: () => Route$20
});
var ApiOrdersRoute = Route$8.update({
	id: "/api/orders",
	path: "/api/orders",
	getParentRoute: () => Route$20
});
var ApiPosOrdersRoute = Route$7.update({
	id: "/api/pos-orders",
	path: "/api/pos-orders",
	getParentRoute: () => Route$20
});
var ApiTrackOrderRoute = Route$6.update({
	id: "/api/track-order",
	path: "/api/track-order",
	getParentRoute: () => Route$20
});
var OrderSuccessRoute = Route$5.update({
	id: "/order/success",
	path: "/order/success",
	getParentRoute: () => Route$20
});
var PosIndexRoute = Route$4.update({
	id: "/pos/",
	path: "/pos/",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	CheckoutRoute,
	CommanderRoute,
	ContactRoute,
	RecrutementRoute,
	SurMesureRoute,
	AdminStocksRoute,
	ApiBancontactWebhookRoute,
	ApiBankStatusRoute,
	ApiCreateTestOrderRoute,
	ApiMollieWebhookRoute,
	ApiOrdersRoute,
	ApiPosOrdersRoute,
	ApiTrackOrderRoute,
	OrderSuccessRoute,
	ProductProductIdRoute: Route$3.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$20
	}),
	TrackTokenRoute: Route$2.update({
		id: "/track/$token",
		path: "/track/$token",
		getParentRoute: () => Route$20
	}),
	PosIndexRoute,
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$20
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$20
	})
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
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
