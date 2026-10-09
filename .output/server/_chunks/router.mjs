import { i as __toESM } from "../_runtime.mjs";
import { i as createServerFn } from "../_libs/@tanstack/react-start+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Navigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, s as Scripts, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { A as CreditCard, B as Check, C as MapPin, D as Funnel, E as Heart, F as CircleAlert, G as ArrowLeft, H as Bell, I as ChevronRight, L as ChevronLeft, M as Clock, N as CircleCheck, O as Flame, P as CircleCheckBig, R as ChevronDown, S as Menu, T as Instagram, U as Award, V as BriefcaseBusiness, W as ArrowRight, _ as Phone, a as TriangleAlert, b as Minus, c as Sparkles, d as Shield, f as ShieldCheck, g as Plus, h as Printer, i as Truck, j as CookingPot, k as ExternalLink, l as ShoppingCart, m as RefreshCw, n as VolumeX, o as Trash2, p as Search, r as Volume2, s as Store, t as X, u as ShoppingBag, v as PhoneCall, w as LoaderCircle, x as MessageCircle, y as Navigation, z as ChefHat } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { a as numberType, i as literalType, n as booleanType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-C7Lpa6AF.css";
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
var Route$15 = createRootRouteWithContext()({
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
	const { queryClient } = Route$15.useRouteContext();
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
		className: `inline-flex flex-col items-center justify-center rounded-2xl bg-[#10251f] shadow-md border border-white/15 transition duration-200 select-none ${containerSizes} ${className}`,
		style: { boxShadow: "0 4px 20px -2px rgba(16, 37, 31, 0.45)" },
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
			className: `font-black uppercase text-[#d7ff45] text-center w-full leading-none ${subtextSizes}`,
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
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-Bko5BGRq.jpg";
//#endregion
//#region src/components/DishImage.tsx
var images = {
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
	"crousty-chicken-curry": "/assets/bowl-crousty-curry-CRZGKMUK.jpg",
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
//#region src/components/CroustyNotificationToast.tsx
var NOTIFICATIONS = [
	{
		id: "crousty-curry",
		tag: "Spécialité Chaude",
		tagColor: "bg-[#8b5510] text-white",
		title: "Crousty Chicken Curry",
		desc: "Poulet ultra croustillant doré, sauce curry maison & oignons frits. Boisson 33cl incluse !",
		dishId: "crousty-chicken-curry",
		price: "11,00 €",
		badgeEmoji: "🍗",
		productId: "crousty-chicken-curry"
	},
	{
		id: "crousty-blanche",
		tag: "Nouveau au Menu",
		tagColor: "bg-[#10251f] text-white",
		title: "Crousty Sauce Blanche",
		desc: "Petits morceaux de poulet croustillant dorés, sauce blanche onctueuse et oignons frits croquants.",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Étudiant",
		tagColor: "bg-[#d7ff45] text-[#10251f]",
		title: "Formule Crousty Chicken à 11 €",
		desc: "1 Crousty Chicken au choix + 1 boisson 33cl offerte incluse (Coca, Ice-Tea, Fanta...).",
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
		}, 3500);
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
			}, 9e3);
			return () => clearTimeout(nextTimer);
		}, 7e3);
		return () => clearTimeout(hideTimer);
	}, [
		isVisible,
		isHovered,
		isDismissed
	]);
	const activeNotif = NOTIFICATIONS[currentIndex];
	const handleDismiss = () => {
		setIsVisible(false);
		setIsDismissed(true);
		setTimeout(() => setIsDismissed(false), 45e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 z-40 max-w-[370px] pointer-events-none sm:bottom-6 sm:left-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30,
				scale: .94
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .94
			},
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 280
			},
			onMouseEnter: () => setIsHovered(true),
			onMouseLeave: () => setIsHovered(false),
			className: "pointer-events-auto relative overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#d7ff45]/20 blur-2xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					"aria-label": "Fermer la notification",
					className: "absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[#10251f]/60 hover:bg-black/10 hover:text-[#10251f] transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3.5 pr-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl bg-[#ece8dc] border border-black/5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
							dishId: activeNotif.dishId,
							alt: activeNotif.title,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] shadow-sm",
							children: activeNotif.badgeEmoji
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${activeNotif.tagColor}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-2.5 w-2.5" }), activeNotif.tag]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold text-[#8b5510]",
									children: activeNotif.price
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-sm font-extrabold text-[#10251f] leading-snug",
								children: activeNotif.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] leading-relaxed text-[#68756f] line-clamp-2",
								children: activeNotif.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: activeNotif.productId },
									onClick: () => setIsVisible(false),
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f] hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"Commander (",
										activeNotif.price,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] font-bold text-[#7d8b83]",
									children: "Boisson incluse"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2.5 h-1 w-full overflow-hidden rounded-full bg-black/5",
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
					className: "flex items-center justify-between border-b border-black/5 bg-[#10251f] px-5 py-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]",
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
							tagColor: "bg-[#d7ff45] text-[#10251f]",
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
										className: "text-[10px] font-extrabold text-[#10251f]",
										children: notif.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-1 text-xs font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition",
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
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10251f] py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:bg-[#ff705f]",
						children: ["Voir toute la carte en ligne", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/PokawaFloatingNavbar.tsx
function PokawaFloatingNavbar() {
	const { items, setIsCartOpen } = useCart();
	const { language, setLanguage } = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "absolute inset-x-0 top-3 sm:top-5 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] flex items-center justify-between pointer-events-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-5 rounded-full bg-[#fff8ee] px-6 py-2.5 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#composer",
							className: "flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#10251f] hover:text-[#ff705f] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Composer son Bowl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 stroke-[2.5]" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#carte",
							className: "flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] hover:text-[#ff705f] transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Notre Carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 stroke-[2.5]" })]
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
							className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#2431eb] text-white shadow-md hover:scale-110 transition",
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
								className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f] shadow-md",
								children: "N"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-white",
								children: "BOWL"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[8px] font-black uppercase tracking-[0.35em] text-[#d7ff45] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mt-0.5",
						children: "VISÉ · BELGIQUE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-4 rounded-full bg-[#fff8ee] px-5 py-2 shadow-2xl border border-white/70 backdrop-blur-md text-[#10251f]",
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-[#10251f]" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#2431eb] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-[#1a25b5] hover:scale-105 active:scale-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/commander",
							className: "inline-flex items-center gap-1 rounded-full bg-[#2431eb] px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-white shadow-lg",
							children: "Commander"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCartOpen(true),
							"aria-label": "Panier",
							className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), cartCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Menu",
							onClick: () => setMobileMenuOpen((o) => !o),
							className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#fff8ee] shadow-lg text-[#10251f]",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-2 max-w-sm rounded-3xl bg-[#fff8ee] p-4 shadow-2xl border border-white/60 pointer-events-auto lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#carte",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Notre Carte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#composer",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Sur-Mesure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#valeurs",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Nos Engagements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#10251f] hover:bg-black/5",
						children: "Contact & Accès"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/recrutement",
						onClick: () => setMobileMenuOpen(false),
						className: "rounded-xl bg-[#ff705f] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white",
						children: "Recrutement"
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
		className: "relative w-full h-[92vh] sm:h-[96vh] min-h-[620px] max-h-[1050px] overflow-hidden bg-[#0a1713] select-none",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" })
					]
				}, `bg-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: -10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -10
					},
					transition: { duration: .4 },
					className: "absolute top-24 sm:top-28 right-4 sm:right-8 lg:right-12 z-20 hidden md:flex items-center gap-2.5 rounded-full bg-black/45 backdrop-blur-md px-4 py-2 border border-white/20 text-white shadow-xl pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: slide.ingredientCallout.emoji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] font-black uppercase tracking-wider text-[#d7ff45]",
							children: slide.ingredientCallout.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[9px] font-medium text-white/80",
							children: slide.ingredientCallout.subtext
						})]
					})]
				}, `callout-${slide.id}`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-12 sm:bottom-16 z-20 px-4 sm:px-8 lg:px-12 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] flex flex-col items-start pointer-events-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 24
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -16
							},
							transition: {
								duration: .5,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "max-w-2xl space-y-3 sm:space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#10251f] shadow-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 stroke-[2.5]" }), slide.badge]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white border border-white/20 shadow-md",
										children: [
											slide.dishName,
											" · ",
											slide.price.toFixed(2),
											" €"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-white",
										children: slide.titleLine1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[#d7ff45]",
										children: slide.titleLine2
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm sm:text-base text-white/95 font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]",
									children: slide.ingredients
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-3 pt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-3 rounded-2xl bg-black/55 backdrop-blur-md px-4 py-2 border border-white/25 shadow-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-2xl sm:text-3xl font-black text-white leading-none",
											children: [slide.price.toFixed(2), " €"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-l border-white/25 pl-3 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[10px] font-black uppercase tracking-widest text-[#d7ff45]",
												children: slide.isCrousty ? "Formule 11 € Complète" : "Format Moyen Inclus"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[9px] font-medium text-white/80",
												children: slide.isCrousty ? "Boisson 33cl incluse au choix" : "Grand format à 13 € (+3€)"
											})]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 pt-2 sm:pt-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleQuickAdd,
											className: "group relative inline-flex items-center gap-2.5 rounded-full bg-[#d7ff45] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.4)] transition hover:bg-white hover:scale-105 active:scale-95",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 stroke-[3]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"Ajouter ce bowl (",
													slide.price.toFixed(2),
													" €)"
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" }),
												addedNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "absolute -top-10 inset-x-0 mx-auto flex w-max items-center gap-1.5 rounded-full bg-[#2431eb] px-3.5 py-1 text-xs font-black text-white shadow-2xl",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 stroke-[3]" }), " Ajouté au panier !"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/product/$productId",
											params: { productId: slide.id },
											className: "inline-flex items-center gap-2 rounded-full bg-black/45 border border-white/40 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white shadow-lg",
											children: "Personnaliser"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#composer",
											className: "inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#d7ff45] hover:underline sm:ml-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]",
											children: "Composer sur-mesure →"
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
						className: `transition-all duration-300 rounded-full ${isActive ? "w-8 h-2.5 bg-[#d7ff45] shadow-[0_0_12px_rgba(215,255,69,0.8)]" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"}`
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
			className: "relative overflow-hidden rounded-[36px] bg-white border border-[#e8dfcf] shadow-lift p-6 sm:p-10 lg:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d7ff45]/20 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#10251f] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#d7ff45] shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Atelier Créatif · Bol en Bambou Naturel" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
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
							className: "rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 px-5 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-extrabold uppercase tracking-wider text-[#7d8b83]",
								children: "Prix calculé en direct"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-2xl sm:text-3xl font-black text-[#10251f]",
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
							className: `relative rounded-2xl p-3.5 text-left transition duration-200 border ${isCurrent ? "bg-[#10251f] text-white border-[#10251f] shadow-md scale-[1.02]" : isDone ? "bg-[#f7f4ec] text-[#10251f] border-[#e8dfcf] hover:border-black/20" : "bg-white text-[#7d8b83] border-black/5 hover:border-black/15"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-black uppercase tracking-wider ${isCurrent ? "text-[#d7ff45]" : isDone ? "text-[#ff705f]" : "text-[#7d8b83]"}`,
									children: s.title
								}), isDone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[#ff705f]" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-1 block text-xs font-bold truncate ${isCurrent ? "text-white/80" : isDone ? "text-[#10251f]" : "text-[#7d8b83]/70"}`,
								children: s.detail
							})]
						}, s.step);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-[#faf8f4] border border-[#eee9de] p-6 sm:p-8",
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
										className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📏" }), " Choisissez la taille de votre bol"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("moyen"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "moyen" ? "bg-white border-[#10251f] shadow-md ring-2 ring-[#10251f]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#10251f]",
													children: "Format Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#d7ff45] px-2.5 py-0.5 text-xs font-black text-[#10251f]",
													children: "10.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Portion régulière généreuse · Idéal repas midi ou soir"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSize("grand"),
											className: `flex flex-col rounded-2xl p-4 border text-left transition ${size === "grand" ? "bg-white border-[#10251f] shadow-md ring-2 ring-[#10251f]/10" : "bg-white/60 border-black/10 hover:bg-white"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm text-[#10251f]",
													children: "Grand Format"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-[#10251f] px-2.5 py-0.5 text-xs font-black text-[#d7ff45]",
													children: "13.00 €"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-[#7d8b83] font-medium mt-1",
												children: "Maxi faim (+3 €) · Double base & portions renforcées"
											})]
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-3",
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
												className: "block text-xs font-black text-[#10251f]",
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
										className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-2",
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
														className: "font-black text-xs text-[#10251f]",
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
												className: "text-base font-black text-[#10251f] flex items-center gap-2",
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
													className: `flex items-center gap-2 rounded-2xl p-3 border text-left transition ${isSelected ? "bg-white border-[#10251f] shadow-sm ring-2 ring-[#10251f]/10 font-black text-[#10251f]" : "bg-white/60 border-black/5 hover:bg-white text-[#5a6760] font-medium"}`,
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
										className: "text-base font-black text-[#10251f] flex items-center gap-2 mb-2",
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
												className: "block text-xs font-black text-[#10251f]",
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
												className: "text-base font-black text-[#10251f] flex items-center gap-2",
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
																className: "block text-xs font-black text-[#10251f] truncate",
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
								className: `text-xs font-black px-4 py-2 rounded-full transition ${activeStep === 1 ? "opacity-30 cursor-not-allowed text-[#7d8b83]" : "text-[#10251f] hover:bg-black/5"}`,
								children: "← Étape précédente"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveStep((curr) => curr < 4 ? curr + 1 : 1),
								className: "text-xs font-black px-4 py-2 rounded-full bg-[#10251f] text-white hover:bg-[#ff705f] transition",
								children: activeStep < 4 ? `Étape suivante (${activeStep + 1}/4) →` : "Revenir au début"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[30px] bg-white border border-[#e8dfcf] p-6 sm:p-7 shadow-card flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: "🥣"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-black text-[#10251f]",
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
										className: "text-2xl font-black text-[#10251f]",
										children: [totalPrice.toFixed(2), " €"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#faf8f4] shadow-md group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeBowlImage,
										alt: "Bol composé Poke N Bowl",
										className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-2.5 left-2.5 rounded-full bg-[#10251f]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] border border-white/20 shadow",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
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
													className: "rounded-lg bg-[#f7f4ec] border border-[#e8dfcf] px-2 py-0.5 text-[10px] font-bold text-[#10251f]",
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
											className: "font-black text-[#10251f] flex items-center gap-1.5",
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
													className: "rounded-lg bg-[#f7f4ec] border border-[#e8dfcf] px-2 py-0.5 text-[10px] font-bold text-[#10251f]",
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
								className: "mt-5 rounded-2xl bg-[#faf8f4] p-3 text-[11px] text-[#5a6760] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bol en bambou véritable, 100% recyclable & réutilisable." })]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-4 border-t border-black/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: `btn-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lift transition duration-200 ${added ? "bg-[#10251f]" : ""}`,
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté ! Retour à l'étape 1..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
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
//#region src/assets/tiramisu-speculoos.jpg
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
//#endregion
//#region src/assets/tiramisu-nutella.jpg
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
//#endregion
//#region src/assets/tiramisu-oreo.jpg
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
//#endregion
//#region src/assets/drink-coca-cola.jpg
var drink_coca_cola_default = "/assets/drink-coca-cola-D83foBG1.jpg";
//#endregion
//#region src/assets/drink-coca-zero.jpg
var drink_coca_zero_default = "/assets/drink-coca-zero-eyT1b9_N.jpg";
//#endregion
//#region src/assets/drink-fanta-orange.jpg
var drink_fanta_orange_default = "/assets/drink-fanta-orange-PDmbpAsA.jpg";
//#endregion
//#region src/assets/drink-ice-tea.jpg
var drink_ice_tea_default = "/assets/drink-ice-tea-CZgyxPov.jpg";
//#endregion
//#region src/assets/drink-eau-plate.jpg
var drink_eau_plate_default = "/assets/drink-eau-plate-B76aUhfx.jpg";
//#endregion
//#region src/assets/drink-eau-gazeuse.jpg
var drink_eau_gazeuse_default = "/assets/drink-eau-gazeuse-CayWkPyq.jpg";
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
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#d7ff45]/40 border border-[#b2db16] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10251f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#10251f]" }), "Carte Officielle & Recettes Visétoises"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
						children: ["Une carte claire, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#ff705f]",
							children: "organisée & gourmande."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-[#5a6760] max-w-2xl font-medium",
						children: "Pokés servis dans de véritables bols en bambou naturel, Crousty Chicken chaud en boîte kraft avec boisson, desserts du jour et rafraîchissements givrés."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full md:w-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7d8b83]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Rechercher saumon, crousty, oreo...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold text-[#10251f] placeholder-[#7d8b83] shadow-sm focus:border-[#d7ff45] focus:outline-none focus:ring-2 focus:ring-[#d7ff45]/40"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#7d8b83] hover:text-black",
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
						className: `relative flex items-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-wider transition shrink-0 ${isActive ? "bg-[#10251f] text-white shadow-lg scale-[1.02]" : "bg-white text-[#10251f]/80 hover:bg-[#10251f]/10 border border-black/5"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: cat.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-[10px] font-bold ${isActive ? "bg-[#d7ff45] text-[#10251f]" : "bg-black/5 text-[#5a6760]"}`,
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
						className: "mt-3 text-xl font-bold text-[#10251f]",
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
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-[#10251f] px-5 py-2.5 text-xs font-bold text-white shadow-sm",
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
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f]/5 px-3 py-1 text-[11px] font-extrabold text-[#10251f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bols en Bois / Bambou Sculpté" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
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
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
							children: "Nos Tiramisus Maison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Préparés chaque matin par notre chef. Mascarpone fouetté, biscuits croustillants & sauces gourmandes."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
				className: "mt-16 pt-8 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#0284c7]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#0284c7]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Servies Très Fraîches" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
							children: "Nos Boissons Fraîches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-[#5a6760] mt-0.5",
							children: "Canettes givrées 33cl et bouteilles d'eau SPA 50cl pour accompagner vos plats."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
		className: `group flex flex-col justify-between overflow-hidden rounded-[28px] border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${isCroustySpecial ? "border-[#fed7aa] ring-2 ring-[#ea580c]/15" : "border-black/5"}`,
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
					className: `absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur ${isCroustySpecial ? "bg-[#ea580c] text-white" : "bg-white/95 text-[#10251f]"}`,
					children: item.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute top-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1 text-xs font-black text-[#10251f] shadow-md",
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
					className: "text-lg sm:text-xl font-black text-[#10251f] leading-snug",
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
					className: "mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2",
					children: item.desc
				}),
				item.ingredients && item.ingredients.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex flex-wrap gap-1.5",
					children: [item.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/85 border border-[#e8dfcf]",
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
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "moyen" ? "bg-[#10251f] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
							children: [
								"Moyen (",
								item.price.toFixed(0),
								" €)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onToggleSize("grand"),
							className: `rounded-full px-2.5 py-1 text-[10px] font-black transition ${selectedSize === "grand" ? "bg-[#10251f] text-white shadow-sm" : "text-[#5a6760] hover:text-black"}`,
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
				className: "flex items-center gap-2 pt-2 border-t border-black/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: item.soldOut,
					onClick: onAdd,
					className: `relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-black shadow-soft transition ${item.soldOut ? "bg-black/10 text-black/30 cursor-not-allowed" : isAdded ? "bg-[#10251f] text-[#d7ff45] scale-105" : "bg-[#d7ff45] text-[#10251f] hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95"}`,
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
						className: "absolute -top-1 font-black text-xs text-[#10251f] bg-[#d7ff45] px-1.5 py-0.5 rounded-full shadow",
						children: "+1"
					})]
				}), item.dishId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$productId",
					params: { productId: item.dishId },
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				}) : item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-center py-3 text-xs font-bold text-[#7d8b83]",
					children: "Épuisé aujourd'hui"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onAdd,
					className: "flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter direct" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			})
		})]
	});
}
function DrinkCard({ item, onAdd, isAdded }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col justify-between overflow-hidden rounded-[22px] border border-black/5 bg-white p-3 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#f0eee9]",
				children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: item.name,
					className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full w-full items-center justify-center text-3xl",
					children: "🥤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#d7ff45] px-2 py-0.5 text-[10px] font-black text-[#10251f] shadow",
					children: [item.price.toFixed(2), " €"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "text-xs font-black text-[#10251f] leading-tight line-clamp-1",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[10px] text-[#7d8b83] line-clamp-1",
					children: item.packagingNote || "33 cl"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onAdd,
				className: `mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-[11px] font-black transition ${isAdded ? "bg-[#10251f] text-[#d7ff45]" : "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]"}`,
				children: isAdded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouter (2 €)" })] })
			})
		]
	});
}
//#endregion
//#region src/components/PokawaBrandValues.tsx
function PokawaBrandValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#faf8f4] py-16 sm:py-20 lg:py-24 border-y border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Nos Engagements & Notre Philosophie"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
							children: "Un Poké plein de qualités"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: "Chez Poke N Bowl Visé, nous croyons qu'un repas rapide doit être sain, gourmand et préparé avec les meilleurs ingrédients."
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
							tagColor: "bg-[#d7ff45] text-[#10251f]",
							title: "Fraîcheur Quotidienne",
							desc: "Découpe minute de nos légumes croquants et approvisionnement quotidien en saumon & scampis de première fraîcheur.",
							perk: "Découpe chaque matin à Visé"
						},
						{
							id: "rice",
							emoji: "🍚",
							tag: "Authenticité",
							tagColor: "bg-[#ff705f] text-white",
							title: "Riz à Sushi Artisanal",
							desc: "Cuit à point et assaisonné avec notre vinaigre de riz signature selon la véritable tradition. Fini le riz fade et sec !",
							perk: "Assaisonnement équilibré"
						},
						{
							id: "crousty",
							emoji: "🍗",
							tag: "Gamme Chaude",
							tagColor: "bg-[#8b5510] text-white",
							title: "Crousty Chicken",
							desc: "Pour les amateurs de réconfort : petits morceaux de poulet croustillant dorés, oignons frits et sauces chaudes maison généreuses.",
							perk: "Formule étudiant 11€ avec boisson"
						},
						{
							id: "custom",
							emoji: "✨",
							tag: "Sur-Mesure",
							tagColor: "bg-[#10251f] text-[#d7ff45]",
							title: "Liberté & Transparence",
							desc: "Retirez n'importe quel allergène en 1 clic ou créez votre bowl personnalisé de A à Z avec 5 mix-ins frais inclus.",
							perk: "Zéro compromis sur vos goûts"
						}
					].map((val) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col justify-between rounded-[32px] border border-black/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f4ec] text-2xl shadow-inner group-hover:scale-110 transition-transform",
									children: val.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${val.tagColor}`,
									children: val.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg sm:text-xl font-extrabold text-[#10251f]",
								children: val.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#68756f]",
								children: val.desc
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 pt-4 border-t border-black/5 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-[#10251f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#ff705f]" }), val.perk]
							})
						})]
					}, val.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/commander",
						className: "inline-flex items-center gap-2 rounded-full bg-[#10251f] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-105 active:scale-95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Goûter la différence en ligne" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
			className: "mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#10251f] via-[#142d26] to-[#0b1a16] p-7 sm:p-10 lg:p-14 text-white shadow-lift border border-white/10 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#d7ff45]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ff705f]/15 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45] backdrop-blur-md border border-white/10",
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
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] text-sm font-black",
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
											className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45]/20 text-[#d7ff45] text-sm font-black",
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
							className: "inline-flex items-center justify-center gap-2.5 rounded-full bg-[#d7ff45] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-105 active:scale-95",
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
							className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
							children: "L’actu sur nos réseaux"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-[#68756f]",
							children: [
								"Partagez vos bowls à Visé en story et taguez ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-[#10251f]",
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
								className: "font-extrabold text-[#10251f]",
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
						className: "inline-flex items-center gap-2.5 rounded-full border-2 border-[#10251f] bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-soft transition hover:bg-[#10251f] hover:text-white hover:scale-105 active:scale-95",
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
//#region src/routes/index.tsx
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Poke N Bowl Visé — Poké bowls frais & Crousty Chicken à emporter" }, {
		name: "description",
		content: "Poke N Bowl à Visé : le meilleur du Poké Bowl frais, saumon sashimi minute, Crousty Chicken chaud et desserts maison. Commande en ligne ou sur place !"
	}] }),
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
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fresh Food Visé",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Fait Minute",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			}),
			"Crousty Chicken",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#10251f]/40",
				children: "✦"
			})
		]
	}, i));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden bg-[#d7ff45] py-3 text-[#10251f] shadow-inner",
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
		className: "min-h-screen overflow-x-clip bg-[#f7f4ec] text-[#17231f]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaFloatingNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaHeroExact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluidInteractiveMenu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "valeurs",
					className: "scroll-mt-12 bg-white/70 py-14 sm:py-20 border-b border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaBrandValues, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaPerksBanner, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaInstagramWall, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1240px] items-center justify-between gap-5 rounded-[28px] bg-[#d7ff45] p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[34px] sm:p-9 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#36420c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-black text-[#10251f]",
								children: t("recruit.banner_title")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#10251f] text-white transition group-hover:scale-110 shadow-md",
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
									className: "mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#10251f]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm sm:text-base text-[#5a6760] font-medium",
									children: "À emporter, sur place ou en livraison rapide. Retrouvez notre équipe en plein centre de Visé."
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col h-full overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-lift",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-[#faf8f4] p-5 sm:px-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#d7ff45] text-xs font-black text-[#10251f]",
												children: "📍"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-extrabold text-[#10251f] text-base",
												children: "Poke N Bowl Visé"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-[#68756f] mt-0.5",
											children: "Avenue du Pont 12, 4600 Visé, Belgique"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: MAPS_URL,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#ff705f]",
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
										className: "flex flex-wrap items-center justify-between gap-3 bg-[#faf8f4] p-4 text-[11px] font-semibold text-[#5a6760] border-t border-black/5",
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
										className: "overflow-hidden rounded-[32px] bg-white border border-black/10 shadow-card p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-black/5 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-9 w-9 items-center justify-center rounded-2xl bg-[#10251f] text-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-[#d7ff45]" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-lg font-black text-[#10251f]",
													children: "Horaires d'ouverture"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-[#7d8b83]",
													children: "Poke N Bowl Visé · En plein centre"
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45]/40 border border-[#b8e612] px-3 py-1 text-[10px] font-black uppercase text-[#10251f]",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Du Lundi au Vendredi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Service midi & soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-right",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#10251f]",
															children: "12:00 – 14:00"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-xs font-black text-[#10251f]",
															children: "17:00 – 21:00"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Samedi"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Service du soir"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-black text-[#10251f]",
														children: "18:00 – 21:00"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between rounded-2xl bg-[#faf8f4] border border-[#eee9de] p-3 sm:px-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-xs font-black text-[#10251f]",
														children: "Dimanche"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#7d8b83] font-medium",
														children: "Fermeture hebdomadaire"
													})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-extrabold text-[#ff705f]",
														children: "Fermé"
													})]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-7 space-y-4",
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
													className: "text-xs text-[#7d8b83] font-bold",
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
													className: "flex-1 flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-[#faf8f4] py-3.5 px-4 text-xs font-bold text-[#10251f] transition hover:bg-black/5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram @POKE_NBOWL" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-[#f7f4ec] px-4 py-2.5 text-xs text-[#68756f] flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "🛵 Livraison à domicile disponible"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/commander",
													className: "font-bold text-[#10251f] hover:underline",
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
				className: "bg-[#081512] px-4 py-10 pb-24 text-white sm:px-6 sm:pb-10 lg:px-8 border-t border-white/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1340px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center gap-3.5 transition hover:opacity-95 hover:scale-[1.02] duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { size: "md" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-5 text-[10px] font-black uppercase tracking-[0.14em] text-white/50",
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
							className: "text-[10px] font-bold uppercase tracking-[0.12em] text-white/30",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Poke N Bowl Visé · Tous droits réservés"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/commander",
				className: "btn-primary fixed inset-x-3 bottom-3 z-40 flex items-center justify-center gap-2 md:hidden shadow-2xl",
				children: [
					t("hero.order"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				]
			}),
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
	await ensureSchema();
	const row = (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE id = ${id}
    LIMIT 1
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function getOrderByDeliveryToken(token) {
	await ensureSchema();
	const row = (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    WHERE delivery_token = ${token}
    LIMIT 1
  `)[0];
	return row ? rowToOrder(row) : void 0;
}
async function listOrdersFromStore(limit = 200) {
	await ensureSchema();
	return (await getSql()`
    SELECT id, delivery_token, created_at, status, payment_method, mollie_payment_id,
           customer_json, items_json, total, currency,
           print_status, printed_at, print_claimed_at, print_attempts, print_error
    FROM orders
    ORDER BY created_at DESC
    LIMIT ${limit}
  `).map(rowToOrder);
}
async function upsertOrder(order) {
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
}
async function updateOrderStatus(orderId, status) {
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET status = ${status}
    WHERE id = ${orderId}
  `;
}
async function requestOrderReprint(orderId) {
	await ensureSchema();
	await getSql()`
    UPDATE orders
    SET print_status = 'pending',
        print_claimed_at = NULL,
        print_error = NULL
    WHERE id = ${orderId}
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
				const parsed = toppingLine.replace(/^Toppings?\s*:\s*/i, "").replace(/\s*\(\+[\d.,]+€\)\s*$/, "").split(",").map((s) => s.trim()).filter((s) => s.length > 0 && !/aucun/i.test(s));
				const extraToppings = Math.max(0, parsed.length - 2);
				unitPrice += extraToppings * .5;
			} else {
				const individualToppings = opts.filter((t) => /^Topping\s*:/i.test(t));
				const extraToppings = Math.max(0, individualToppings.length - 2);
				unitPrice += extraToppings * .5;
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
			if (opts.some((t) => /Taille\s*:\s*Grand/i.test(t))) unitPrice += 3;
			const toppingEntries = opts.filter((t) => /^Topping\s*:/i.test(t));
			unitPrice += toppingEntries.length * .5;
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
var Route$13 = createFileRoute("/checkout")({ component: CheckoutPage });
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
var Route$12 = createFileRoute("/commander")({ component: CommanderPage });
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
						children: pokeBowls.map((bowl) => {
							const ok = available(bowl.id);
							const tagStyle = TAG_STYLES$1[bowl.tagColor ?? "signature"] ?? "bg-[#10251f] text-white";
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
									className: "group block overflow-hidden rounded-[28px] bg-white shadow-card ring-2 ring-[#d7ff45] ring-offset-2 ring-offset-[#f7f4ec] transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
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
						className: "mt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#ff705f]/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Douceurs Artisanales"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
									children: t("cmd.desserts")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
													className: "absolute top-2 right-2 rounded-full bg-[#d7ff45] px-2.5 py-0.5 text-xs font-black text-[#10251f] shadow",
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
												className: "text-sm font-black text-[#10251f]",
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
												className: `rounded-xl px-3.5 py-2 text-xs font-black transition ${ok ? "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
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
									className: "mt-2 text-2xl sm:text-3xl font-black text-[#10251f]",
									children: t("cmd.drinks")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-[#10251f] bg-[#d7ff45] px-3.5 py-1.5 rounded-full",
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
												className: "absolute bottom-1.5 right-1.5 rounded-full bg-[#d7ff45] px-2 py-0.5 text-[10px] font-black text-[#10251f] shadow",
												children: "2.00 €"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs font-black text-[#10251f] truncate",
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
												className: `mt-2 flex w-full items-center justify-center rounded-xl py-1.5 text-[11px] font-black transition ${ok ? "bg-[#10251f] text-white hover:bg-[#d7ff45] hover:text-[#10251f]" : "bg-black/10 text-black/30 cursor-not-allowed"}`,
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
var Route$11 = createFileRoute("/contact")({
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
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#d7ff45] text-black font-black",
								children: "📍"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-black text-[#10251f]",
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
									className: "font-bold text-[#10251f]",
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
									className: "font-bold text-base text-[#10251f]",
									children: "0491 28 14 56 (+32)"
								})] })]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-[#10251f]",
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
var Route$10 = createFileRoute("/recrutement")({
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
var Route$9 = createFileRoute("/sur-mesure")({ component: SurMesurePage });
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
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
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
	const toggleTopping = (name) => {
		setSelectedToppings((cur) => cur.includes(name) ? cur.filter((t) => t !== name) : [...cur, name]);
	};
	const sizeExtra = selectedSize === "grand" ? 3 : 0;
	const proteinExtra = selectedProtein?.extraPrice ?? 0;
	const extraMixInsCount = Math.max(0, selectedMixIns.length - INCLUDED_MIX_INS);
	const mixInsExtra = extraMixInsCount * .5;
	const extraToppingsCount = Math.max(0, selectedToppings.length - 2);
	const toppingsExtra = extraToppingsCount * .5;
	const unitPrice = BASE_PRICE + sizeExtra + proteinExtra + mixInsExtra + toppingsExtra;
	const totalPrice = unitPrice * qty;
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
			...selectedToppings.length > 0 ? [`Toppings : ${selectedToppings.join(", ")}${extraToppingsCount > 0 ? ` (+${toppingsExtra.toFixed(2)}€)` : ""}`] : ["Toppings : Aucun"]
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
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "moyen" ? "border-[#10251f] bg-[#10251f] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Moyen"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "moyen" ? "text-[#d7ff45]" : "text-[#7a847e]"}`,
													children: "Inclus (10.00€)"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `mt-1 text-xs ${selectedSize === "moyen" ? "text-white/70" : "text-[#7a847e]"}`,
												children: "Format régulier généreux"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedSize("grand"),
											className: ["flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all duration-200", selectedSize === "grand" ? "border-[#10251f] bg-[#10251f] text-white shadow-sm" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-full items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-black text-sm uppercase",
													children: "Grand"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-xs font-black ${selectedSize === "grand" ? "text-[#d7ff45]" : "text-[#ff705f]"}`,
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
											className: "mb-4 flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-[#10251f] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#d7ff45]",
												children: "Étape 2"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-xl font-black text-[#17231f]",
												children: "Mix-Ins Frais"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: ["rounded-full px-3 py-1 text-xs font-black transition-colors", selectedMixIns.length >= INCLUDED_MIX_INS ? "bg-[#10251f] text-[#d7ff45]" : "bg-[#ff705f]/10 text-[#ff705f]"].join(" "),
												children: selectedMixIns.length <= INCLUDED_MIX_INS ? `${selectedMixIns.length} / ${INCLUDED_MIX_INS} inclus` : `${selectedMixIns.length} choisis (${INCLUDED_MIX_INS} inclus + ${extraMixInsCount} extra à +0,50€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedMixIns.length < INCLUDED_MIX_INS ? `5 ingrédients inclus dans la formule (encore ${INCLUDED_MIX_INS - selectedMixIns.length} gratuit${INCLUDED_MIX_INS - selectedMixIns.length > 1 ? "s" : ""}) :` : `5 mix-ins inclus · Choisissez-en autant que vous voulez (+0,50 € par ingrédient supplémentaire) :` }), extraMixInsCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-full bg-[#d7ff45]/30 px-2 py-0.5 text-[10px] font-extrabold text-[#10251f]",
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
													className: ["flex items-center gap-2.5 rounded-2xl border-2 p-3 text-left transition-all duration-150", isSelected ? "border-[#ff705f] bg-[#fff1ee] shadow-sm scale-[1.01]" : "border-[#e8e2d9] bg-white hover:border-[#10251f]/30"].join(" "),
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
												className: "rounded-full bg-[#10251f] px-3 py-1 text-xs font-black text-[#d7ff45]",
												children: selectedToppings.length <= 2 ? `${selectedToppings.length} / 2 inclus` : `2 inclus + ${selectedToppings.length - 2} extra (+${((selectedToppings.length - 2) * .5).toFixed(2)}€)`
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mb-4 text-xs font-semibold text-[#7a847e]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 toppings inclus dans la formule" }), " · Toppings supplémentaires à volonté (+0.50€ chaque) :"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
											children: toppings.map((top) => {
												const isSelected = selectedToppings.includes(top.name);
												const isExtra = isSelected && selectedToppings.indexOf(top.name) >= 2;
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
																children: isSelected ? isExtra ? "+0.50 € (extra)" : "Inclus" : "+0.50 € extra"
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
												className: "absolute top-2.5 left-2.5 rounded-full bg-[#10251f]/90 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase text-[#d7ff45] border border-white/20 shadow",
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
													children: selectedToppings.length > 0 ? `${selectedToppings.join(", ")} (${Math.min(2, selectedToppings.length)} inclus${extraToppingsCount > 0 ? ` + ${extraToppingsCount} extra` : ""})` : "Aucun topping"
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
var Route$8 = createFileRoute("/admin/stocks")({ component: AdminStocksPage });
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
var Route$7 = createFileRoute("/api/mollie-webhook")({ server: { handlers: { POST: async ({ request }) => {
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
var Route$6 = createFileRoute("/api/orders")({ server: { handlers: { GET: async ({ request }) => {
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
	if (order.deliveryToken) {
		const trackUrl = `${origin.replace(/\/$/, "")}/track/${order.deliveryToken}`;
		b.divider("=");
		b.line("SCANNEZ POUR GPS ET CONTACT LIVREUR");
		b.line();
		b.qrCode(trackUrl, 6);
		b.line();
		b.line("pokenbowl.be");
	}
	b.divider("=");
	b.line("Merci de votre confiance !");
	b.feed(4).cut(true);
	return b.toBytes();
}
//#endregion
//#region src/fn/pos.ts
function verifyPin(pin) {
	return pin === (process.env.POS_PIN ?? "1234");
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
var triggerReprint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1)
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await requestOrderReprint(data.orderId);
	return { success: true };
});
var getOrderReceipts = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	origin: stringType().optional()
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	const order = await getOrderFromStore(data.orderId);
	if (!order) throw new Error("Commande introuvable.");
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
var ackPosPrint = createServerFn({ method: "POST" }).validator(objectType({
	pin: stringType().optional(),
	orderId: stringType().min(1),
	success: booleanType(),
	error: stringType().optional()
})).handler(async ({ data }) => {
	if (!verifyPin(data.pin)) throw new Error("Code PIN invalide.");
	await acknowledgePrint(data.orderId, data.success, data.error);
	return { success: true };
});
//#endregion
//#region src/lib/epos-client.ts
var DEFAULT_PRINTER_CONFIG = {
	printerIp: "192.168.1.100",
	printerPort: 9100,
	bridgeUrl: "http://localhost:3001",
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
	try {
		const xml = `<?xml version="1.0" encoding="utf-8"?>
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">
      <command>${base64Data}</command>
    </epos-print>
  </s:Body>
</s:Envelope>`;
		const eposUrl = `http://${config.printerIp}/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000`;
		const res = await fetch(eposUrl, {
			method: "POST",
			headers: {
				"Content-Type": "text/xml; charset=utf-8",
				"If-Modified-Since": "Thu, 01 Jan 1970 00:00:00 GMT",
				SOAPAction: "\"\""
			},
			body: xml
		});
		if (res.ok) return {
			success: true,
			message: "Imprimé avec succès via Epson ePOS."
		};
		else throw new Error(`Erreur ePOS HTTP ${res.status}`);
	} catch (err) {
		const msg = err instanceof Error ? err.message : String(err);
		return {
			success: false,
			message: `Échec d'impression vers ${config.printerIp} : ${msg}. Vérifiez l'adresse IP ou lancez le Print Bridge.`
		};
	}
}
//#endregion
//#region src/routes/pos/index.tsx
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
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeTab, setActiveTab] = (0, import_react.useState)("kanban");
	const [config, setConfig] = (0, import_react.useState)(loadPrinterConfig);
	const [printingOrderId, setPrintingOrderId] = (0, import_react.useState)(null);
	const [printLog, setPrintLog] = (0, import_react.useState)([]);
	const knownOrderIds = (0, import_react.useRef)(/* @__PURE__ */ new Set());
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
			const newOrders = (await getPosOrders({ data: { pin } })).orders;
			if (knownOrderIds.current.size > 0) {
				if (newOrders.some((o) => !knownOrderIds.current.has(o.id) && (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"))) playAlertSound();
			}
			newOrders.forEach((o) => knownOrderIds.current.add(o.id));
			setOrders(newOrders);
			const pendingPrint = newOrders.find((o) => o.printStatus === "pending" && (o.status === "paid" || o.status === "awaiting_pickup" || o.status === "awaiting_delivery"));
			if (pendingPrint && printingOrderId !== pendingPrint.id) handleExecutePrint(pendingPrint);
		} catch (e) {
			console.error(e);
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
	const handleExecutePrint = async (order) => {
		setPrintingOrderId(order.id);
		try {
			const origin = window.location.origin;
			const receipts = await getOrderReceipts({ data: {
				pin,
				orderId: order.id,
				origin
			} });
			let successCount = 0;
			let errorMsg = "";
			if (config.autoPrintKitchen && receipts.kitchenReceiptB64) {
				const resKitchen = await sendReceiptToPrinter(receipts.kitchenReceiptB64, config);
				if (resKitchen.success) successCount++;
				else errorMsg += `[Cuisine] ${resKitchen.message} `;
			}
			if (config.autoPrintDelivery && receipts.deliveryReceiptB64) {
				const resDelivery = await sendReceiptToPrinter(receipts.deliveryReceiptB64, config);
				if (resDelivery.success) successCount++;
				else errorMsg += `[Livreur] ${resDelivery.message} `;
			}
			const isOk = (config.autoPrintKitchen ? 1 : 0) + (config.autoPrintDelivery ? 1 : 0) === 0 || successCount > 0;
			await ackPosPrint({ data: {
				pin,
				orderId: order.id,
				success: isOk,
				error: errorMsg || void 0
			} });
			const now = (/* @__PURE__ */ new Date()).toLocaleTimeString();
			if (isOk) setPrintLog((prev) => [{
				time: now,
				msg: `Commande ${order.id} imprimée.`,
				type: "ok"
			}, ...prev.slice(0, 30)]);
			else setPrintLog((prev) => [{
				time: now,
				msg: `Échec ${order.id} : ${errorMsg}`,
				type: "err"
			}, ...prev.slice(0, 30)]);
		} catch (err) {
			console.error(err);
			await ackPosPrint({ data: {
				pin,
				orderId: order.id,
				success: false,
				error: err?.message ?? "Erreur inattendue"
			} });
		} finally {
			setPrintingOrderId(null);
			loadOrders();
		}
	};
	const handleManualReprint = async (orderId) => {
		if (!confirm("Voulez-vous réimprimer le ticket de cette commande ?")) return;
		try {
			await triggerReprint({ data: {
				pin,
				orderId
			} });
			await loadOrders();
		} catch (e) {
			alert("Erreur lors de la demande de réimpression.");
		}
	};
	const handleUpdateStatus = async (orderId, status) => {
		try {
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
	const handleTestPrint = async () => {
		const res = await sendReceiptToPrinter(btoa("\x1B@\x1B!\x1BaTEST POKENBOWL\n\nIMPRESSION REUSSIE\n\x1B!\0\x1BdV"), config);
		alert(res.message);
	};
	if (!isUnlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-[#10251f] flex items-center justify-center p-4 select-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-16 h-16 rounded-2xl bg-[#ff705f]/10 flex items-center justify-center text-[#ff705f]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-black text-[#10251f]",
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
							className: "h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] hover:bg-black/5 active:scale-95 transition",
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
							className: "h-16 rounded-2xl bg-[#f7f4ec] text-2xl font-black text-[#10251f] active:scale-95 transition",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-screen flex-col bg-[#0d1a16] text-[#e6ece9] select-none font-sans overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#10251f]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex h-3 w-3 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d7ff45] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-[#d7ff45]" })]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								const updated = {
									...config,
									soundEnabled: !config.soundEnabled
								};
								setConfig(updated);
								savePrinterConfig(updated);
							},
							className: `rounded-xl p-2.5 transition ${config.soundEnabled ? "bg-[#d7ff45]/20 text-[#d7ff45]" : "bg-white/5 text-[#6c7d76]"}`,
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
										children: "Imprimante Réseau (Epson TM-m30III)"
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
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleTestPrint,
											className: "flex-1 rounded-xl bg-white/10 py-3 text-white font-black text-sm hover:bg-white/20",
											children: "Tester l'impression (Test Print)"
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
										className: "flex items-center gap-1.5 text-xs font-bold text-[#d7ff45] bg-[#d7ff45]/15 px-3 py-1.5 rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), selectedOrder.customer.phone]
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
									className: "text-xs text-[#d7ff45] font-bold",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleManualReprint(selectedOrder.id),
								className: "rounded-2xl bg-white/10 py-3.5 text-sm font-black hover:bg-white/20 transition flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-4 h-4 text-[#ff705f]" }), "Réimprimer Ticket"]
							}), selectedOrder.deliveryToken && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/track/${selectedOrder.deliveryToken}`,
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-2xl bg-[#ff705f]/20 text-[#ff705f] py-3.5 text-sm font-black hover:bg-[#ff705f]/30 transition flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-4 h-4" }), "Vue Livreur QR"]
							})]
						})
					]
				})
			})
		]
	});
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
	signature: "bg-[#10251f] text-[#d7ff45]",
	bestseller: "bg-[#ff705f] text-white",
	premium: "bg-[#7c4f1a] text-[#ffe9c2]",
	spicy: "bg-[#c0350f] text-white",
	new: "bg-[#d7ff45] text-[#10251f]"
};
function ToppingChip({ topping, selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": selected,
		"aria-label": `${topping.name} +${topping.price.toFixed(2)}€`,
		className: ["relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 p-3 text-center transition-all duration-200 select-none", selected ? "border-[#ff705f] bg-[#fff3f1] shadow-[0_4px_16px_-4px_rgba(255,112,95,.45)] scale-[1.02]" : "border-[#e8e2d9] bg-white hover:border-[#ff705f]/50 hover:bg-[#faf8f4] active:scale-95"].join(" "),
		children: [
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff705f] shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-3 w-3 text-white",
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
				className: "text-xs font-bold leading-tight text-[#17231f]",
				children: topping.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[11px] font-black text-[#ff705f]",
				children: [
					"+",
					topping.price.toFixed(2),
					" €"
				]
			})
		]
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
	const isCrousty = product.id.startsWith("crousty-");
	const productOk = available(product.id);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [selectedBase, setSelectedBase] = import_react.useState(product.defaultBase || "Riz à sushi");
	const [selectedSauce, setSelectedSauce] = import_react.useState(product.defaultSauce || "Spicy-Mayo");
	const [removedIngredients, setRemovedIngredients] = import_react.useState([]);
	const [extraChicken, setExtraChicken] = import_react.useState(false);
	const [extraProtein, setExtraProtein] = import_react.useState(null);
	const [selectedMixins, setSelectedMixins] = import_react.useState([]);
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [extraSauce, setExtraSauce] = import_react.useState(null);
	const [selectedDrink, setSelectedDrink] = import_react.useState(drinks[0]?.name || "Coca-Cola (33 cl)");
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	const sizeExtra = !isCrousty && selectedSize === "grand" ? 3 : 0;
	const extraProteinPrice = isCrousty ? extraChicken ? 2.5 : 0 : extraProtein ? 2.5 : 0;
	const mixinsExtraPrice = selectedMixins.length * .5;
	const toppingsExtraPrice = selectedToppings.length * .5;
	const extraSaucePrice = extraSauce ? 1 : 0;
	const unitPrice = product.price + sizeExtra + extraProteinPrice + mixinsExtraPrice + toppingsExtraPrice + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleRemovedIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const toggleTopping = (toppingName) => {
		setSelectedToppings((cur) => cur.includes(toppingName) ? cur.filter((t) => t !== toppingName) : [...cur, toppingName]);
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
		selectedToppings.forEach((t) => {
			optionsList.push(`Topping (+0.50€) : ${t}`);
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
								children: "La Carte"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setIsCartOpen(true),
								className: "relative rounded-full bg-[#10251f] p-2.5 text-white transition hover:bg-[#1e3d33]",
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
									className: "absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-4 py-2 text-base font-black text-[#10251f] shadow-card",
									children: ["€ ", unitPrice.toFixed(2)]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[24px] border border-black/5 bg-white p-5 shadow-card space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#10251f]",
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
									className: "mt-1 text-3xl font-black leading-tight sm:text-4xl text-[#10251f]",
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
														className: "block text-xs font-black text-[#10251f]",
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
												className: ["flex flex-col items-start rounded-2xl border-2 p-3.5 text-left transition-all", selectedSize === size.id ? "border-[#10251f] bg-[#10251f] text-white shadow-md" : "border-[#e8e2d9] bg-[#faf8f4] text-[#17231f] hover:border-[#10251f]/40"].join(" "),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex w-full items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-black text-sm uppercase",
														children: size.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `text-xs font-black ${selectedSize === size.id ? "text-[#d7ff45]" : "text-[#ff705f]"}`,
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
											className: "rounded-full bg-[#d7ff45]/20 px-2.5 py-0.5 text-[10px] font-black text-[#10251f]",
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
												className: "rounded-full bg-[#10251f] px-2.5 py-0.5 text-[10px] font-black text-[#d7ff45]",
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
											children: "À volonté · choisis autant de toppings que tu veux (+0.50€ chaque)"
										})] }), selectedToppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												selectedToppings.length,
												" topping",
												selectedToppings.length > 1 ? "s" : "",
												" (+",
												(selectedToppings.length * .5).toFixed(2),
												"€)"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
										children: toppings.map((topping) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToppingChip, {
											topping,
											selected: selectedToppings.includes(topping.name),
											onToggle: () => toggleTopping(topping.name)
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
										className: ["btn-primary w-full text-sm font-black py-4 shadow-lift transition-all", added ? "bg-[#10251f] scale-[0.99]" : "hover:scale-[1.01] active:scale-95"].join(" "),
										children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-[#d7ff45]" }), " Ajouté au panier !"]
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
					className: ["btn-primary w-full py-3.5 text-sm font-black shadow-glow-coral", added ? "bg-[#10251f]" : ""].join(" "),
					children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#d7ff45]" }), " Ajouté !"]
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
var getDeliveryOrder = createServerFn({ method: "GET" }).validator(objectType({ token: stringType().min(8) })).handler(async ({ data }) => {
	const order = await getOrderByDeliveryToken(data.token);
	if (!order) return { found: false };
	return {
		found: true,
		order: {
			id: order.id,
			createdAt: order.createdAt,
			status: order.status,
			fulfillment: order.customer.fulfillment,
			requestedTime: order.customer.requestedTime,
			customerName: order.customer.name,
			customerPhone: order.customer.phone,
			notes: order.customer.notes,
			address: order.customer.address,
			postalCode: order.customer.postalCode,
			city: order.customer.city,
			deliveryFee: order.customer.deliveryFee,
			total: order.total,
			paymentMethod: order.paymentMethod,
			items: order.items.map((i) => ({
				name: i.name,
				quantity: i.quantity,
				toppings: i.toppings
			}))
		}
	};
});
var updateDeliveryStatus = createServerFn({ method: "POST" }).validator(objectType({
	token: stringType().min(8),
	status: enumType(["delivering", "completed"])
})).handler(async ({ data }) => {
	const order = await getOrderByDeliveryToken(data.token);
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
			const res = await getDeliveryOrder({ data: { token } });
			if (res.found) setOrder(res.order);
			else setError("Commande introuvable ou lien expiré.");
		} catch (e) {
			console.error(e);
			setError("Impossible de charger les données de la commande.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchOrder();
		const interval = setInterval(fetchOrder, 15e3);
		return () => clearInterval(interval);
	}, [token]);
	const handleStatusChange = async (newStatus) => {
		setUpdating(true);
		try {
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
		className: "flex min-h-screen items-center justify-center bg-[#f7f4ec]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#ff705f]" })
	});
	if (error || !order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-[#f7f4ec] px-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-12 w-12 text-[#ff705f]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-2xl font-black text-[#17231f]",
				children: "Lien invalide"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-[#758079]",
				children: error ?? "Commande introuvable."
			})
		]
	});
	const fullAddress = `${order.address ?? ""}, ${order.postalCode ?? ""} ${order.city ?? ""}`.trim();
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
	const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f4ec] text-[#17231f]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-black/5 bg-[#f7f4ec]/95 px-5 py-3 backdrop-blur-md",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs uppercase tracking-wider font-extrabold text-[#7a847e]",
							children: "Adresse de Livraison"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[#ff705f] shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold text-base leading-snug",
								children: order.address
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-[#7a847e]",
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
							className: "pt-2 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] text-white py-3 font-bold text-sm shadow hover:bg-[#3367d6] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Google Maps"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: wazeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] text-[#003d52] py-3 font-bold text-sm shadow hover:bg-[#2bb8e6] transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4" }), "Waze"]
							})]
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
							className: "w-full rounded-2xl bg-[#10251f] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-5 w-5 text-[#d7ff45]" }), updating ? "Mise à jour..." : "Marquer comme Livrée"]
						}),
						order.status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-[#10251f] p-4 text-center text-[#d7ff45] font-black text-sm",
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
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var CheckoutRoute = Route$13.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$15
});
var CommanderRoute = Route$12.update({
	id: "/commander",
	path: "/commander",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var RecrutementRoute = Route$10.update({
	id: "/recrutement",
	path: "/recrutement",
	getParentRoute: () => Route$15
});
var SurMesureRoute = Route$9.update({
	id: "/sur-mesure",
	path: "/sur-mesure",
	getParentRoute: () => Route$15
});
var AdminStocksRoute = Route$8.update({
	id: "/admin/stocks",
	path: "/admin/stocks",
	getParentRoute: () => Route$15
});
var ApiMollieWebhookRoute = Route$7.update({
	id: "/api/mollie-webhook",
	path: "/api/mollie-webhook",
	getParentRoute: () => Route$15
});
var ApiOrdersRoute = Route$6.update({
	id: "/api/orders",
	path: "/api/orders",
	getParentRoute: () => Route$15
});
var OrderSuccessRoute = Route$5.update({
	id: "/order/success",
	path: "/order/success",
	getParentRoute: () => Route$15
});
var PosIndexRoute = Route$4.update({
	id: "/pos/",
	path: "/pos/",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	CheckoutRoute,
	CommanderRoute,
	ContactRoute,
	RecrutementRoute,
	SurMesureRoute,
	AdminStocksRoute,
	ApiMollieWebhookRoute,
	ApiOrdersRoute,
	OrderSuccessRoute,
	ProductProductIdRoute: Route$3.update({
		id: "/product/$productId",
		path: "/product/$productId",
		getParentRoute: () => Route$15
	}),
	TrackTokenRoute: Route$2.update({
		id: "/track/$token",
		path: "/track/$token",
		getParentRoute: () => Route$15
	}),
	PosIndexRoute,
	ApiPrinterAckRoute: Route$1.update({
		id: "/api/printer/ack",
		path: "/api/printer/ack",
		getParentRoute: () => Route$15
	}),
	ApiPrinterQueueRoute: Route.update({
		id: "/api/printer/queue",
		path: "/api/printer/queue",
		getParentRoute: () => Route$15
	})
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
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
