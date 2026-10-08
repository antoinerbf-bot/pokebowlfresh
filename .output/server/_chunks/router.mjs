import { i as __toESM } from "../_runtime.mjs";
import { i as createServerFn } from "../_libs/@tanstack/react-start+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Navigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, s as Scripts, v as useNavigate, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { A as CircleCheck, C as Layers, D as ExternalLink, E as Flame, F as BriefcaseBusiness, I as Bell, L as Award, M as ChevronLeft, N as ChefHat, O as CreditCard, P as Check, R as ArrowRight, S as LoaderCircle, T as Heart, _ as PhoneCall, a as Trash2, b as Menu, c as Sparkles, d as Shield, f as ShieldCheck, g as Phone, h as Plus, i as TriangleAlert, j as ChevronRight, k as Clock, l as ShoppingCart, m as RefreshCw, n as Utensils, o as Store, p as RotateCcw, r as UtensilsCrossed, s as Star, t as X, u as ShoppingBag, v as Minus, w as Instagram, x as MapPin, y as MessageCircle, z as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Viewport, i as ScrollAreaThumb, n as Root, r as ScrollAreaScrollbar, t as Corner } from "../_libs/radix-ui__react-scroll-area.mjs";
import { a as numberType, i as literalType, n as booleanType, o as objectType, r as enumType, s as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as motion, i as useScroll, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion+[...].mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-DP8nN15k.css";
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
//#region src/assets/tiramisu-speculoos.jpg
var tiramisu_speculoos_default = "/assets/tiramisu-speculoos-CUQsAiGk.jpg";
//#endregion
//#region src/assets/tiramisu-nutella.jpg
var tiramisu_nutella_default = "/assets/tiramisu-nutella-Cq3EXNhL.jpg";
//#endregion
//#region src/assets/tiramisu-oreo.jpg
var tiramisu_oreo_default = "/assets/dessert-9PIP1ns9.jpg";
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
var bowl_sweet_chicken_default = "/assets/bowl-sweet-chicken-KOb_KDt-.jpg";
//#endregion
//#region src/assets/bowl-scampis.jpg
var bowl_scampis_default = "/assets/bowl-scampis-DR5syUSX.jpg";
//#endregion
//#region src/assets/bowl-saumon.jpg
var bowl_saumon_default = "/assets/bowl-saumon-BzVxQqxk.jpg";
//#endregion
//#region src/assets/bowl-spicy-chicken.jpg
var bowl_spicy_chicken_default = "/assets/bowl-spicy-chicken-B4zpsenC.jpg";
//#endregion
//#region src/assets/bowl-crousty-curry.jpg
var bowl_crousty_curry_default = "/assets/bowl-crousty-curry-CxDrr4_R.jpg";
//#endregion
//#region src/components/DishImage.tsx
var images = {
	"sweet-chicken": bowl_sweet_chicken_default,
	"scampis-royaux": bowl_scampis_default,
	"saumon-wasabi": bowl_saumon_default,
	"spicy-chicken": bowl_spicy_chicken_default,
	"crousty-chicken-curry": bowl_crousty_curry_default,
	"crousty-chicken-sauce-blanche": "/assets/bowl-crousty-blanche-iABTwGCQ.jpg",
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
		desc: "Poulet croustillant mariné, riz parfumé, oignons frits croustillants, sauce curry onctueuse maison. Formule Étudiant : boisson 33cl incluse.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Sauce curry",
		tag: "Formule 11€",
		tagColor: "bestseller",
		menuNote: "Formule Étudiant : 11€ avec boisson 33cl incluse au choix. Sauce extra : +1€.",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Poulet croustillant",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Oignons frits",
				emoji: "🧅",
				removable: true,
				isTopping: true
			},
			{
				name: "Sauce curry onctueuse",
				emoji: "🍛",
				removable: true,
				isSauce: true
			}
		]
	},
	{
		id: "crousty-chicken-sauce-blanche",
		name: "Crousty Chicken Sauce Blanche",
		price: 11,
		desc: "Poulet croustillant mariné, riz parfumé, oignons frits croustillants, sauce blanche maison onctueuse. Formule Étudiant : boisson 33cl incluse.",
		defaultBase: "Riz à sushi",
		defaultSauce: "Sauce blanche",
		tag: "Formule 11€",
		tagColor: "bestseller",
		menuNote: "Formule Étudiant : 11€ avec boisson 33cl incluse au choix. Sauce extra : +1€.",
		ingredients: [
			{
				name: "Riz à sushi",
				emoji: "🍚",
				removable: true,
				isBase: true
			},
			{
				name: "Poulet croustillant",
				emoji: "🍗",
				removable: true,
				isProtein: true
			},
			{
				name: "Oignons frits",
				emoji: "🧅",
				removable: true,
				isTopping: true
			},
			{
				name: "Sauce blanche maison",
				emoji: "🤍",
				removable: true,
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
//#region src/components/PokeBowlCraftingExperience.tsx
var CRAFT_STEPS = [
	{
		number: "01",
		title: "Le Lit de Riz à Sushi",
		subtitle: "La base parfaite",
		description: "Préparé selon la tradition, notre riz à sushi est délicatement vinaigré et assaisonné pour une texture fondante et savoureuse, parfait sous vos ingrédients frais.",
		emoji: "🍚",
		ingredients: [
			"Riz à sushi traditionnel",
			"Assaisonnement délicat",
			"Texture fondante"
		],
		focusDishId: "sweet-chicken",
		layerHighlight: "Fond du bowl · Riz à sushi assaisonné"
	},
	{
		number: "02",
		title: "La Protéine Noble Découpée Minute",
		subtitle: "Le cœur du goût",
		description: "Du saumon cru qualité sashimi découpé chaque matin, de vrais cubes de poulet doré au grill ou des scampis saisis à la flamme.",
		emoji: "🍗",
		ingredients: [
			"Filet de poulet grillé",
			"Saumon frais sashimi",
			"Scampis à la flamme"
		],
		focusDishId: "sweet-chicken",
		layerHighlight: "Centre · Morceaux dorés juteux"
	},
	{
		number: "03",
		title: "L'Assortiment Fraîcheur & Fruits",
		subtitle: "Vitamines & couleurs",
		description: "Avocat Haas crémeux découpé en éventail, mangue mûre en cubes sucrés, fèves d'edamame croquantes, tomates cerises juteuses et guacamole maison.",
		emoji: "🥑",
		ingredients: [
			"Avocat frais crémeux",
			"Mangue mûre",
			"Guacamole maison",
			"Edamame & Maïs doux"
		],
		focusDishId: "saumon-wasabi",
		layerHighlight: "Couronne · Légumes et fruits frais"
	},
	{
		number: "04",
		title: "Les Sauces Signatures Maison",
		subtitle: "L'onctuosité & l'équilibre",
		description: "Nappées en filet élégant sur la composition : Spicy Mayo maison au piment doux, Mayo Wasabi subtilement relevée, ou Teriyaki sucrée-salée brillante.",
		emoji: "🌶️",
		ingredients: [
			"Spicy mayo maison",
			"Mayo wasabi",
			"Teriyaki glacée",
			"Sésame doux"
		],
		focusDishId: "scampis-royaux",
		layerHighlight: "Nappage · Sauce veloutée signature"
	},
	{
		number: "05",
		title: "Le Crunch & Finition Toppings",
		subtitle: "La signature croquante",
		description: "Oignons croustillants dorés, graines de sésame noir & blanc toastées et flocons de chili pour une texture irrésistible à chaque bouchée.",
		emoji: "🧅",
		ingredients: [
			"Oignons croustillants",
			"Sésame mix toasté",
			"Flocons de chili"
		],
		focusDishId: "spicy-chicken",
		layerHighlight: "Touche finale · Toppings ultra croquants"
	}
];
function PokeBowlCraftingExperience() {
	const [activeStep, setActiveStep] = import_react.useState(0);
	const current = CRAFT_STEPS[activeStep];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0d211b] p-6 sm:p-10 lg:p-12 text-white shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3" }), "Anatomie d'un Poké Bowl"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl",
						children: "Comment naît votre Poké Bowl sous vos yeux"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/70 leading-relaxed",
						children: "Chaque ingrédient est sélectionné le matin, préparé minute et assemblé couche après couche pour un équilibre gustatif parfait."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: CRAFT_STEPS.map((step, idx) => {
						const isActive = idx === activeStep;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveStep(idx),
							className: `group w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border ${isActive ? "bg-white/10 border-[#d7ff45]/50 shadow-lg" : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs transition ${isActive ? "bg-[#d7ff45] text-[#10251f]" : "bg-white/10 text-white/70 group-hover:bg-white/20"}`,
										children: step.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `text-[10px] font-black uppercase tracking-wider ${isActive ? "text-[#d7ff45]" : "text-white/45"}`,
										children: step.subtitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base sm:text-lg font-black text-white",
										children: step.title
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl",
									children: step.emoji
								})]
							}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									height: 0
								},
								animate: {
									opacity: 1,
									height: "auto"
								},
								exit: {
									opacity: 0,
									height: 0
								},
								transition: { duration: .3 },
								className: "mt-3 pt-3 border-t border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-white/75",
									children: step.description
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-1.5",
									children: step.ingredients.map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 rounded-full bg-[#10251f] px-2.5 py-1 text-[10px] font-bold text-white/90 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#d7ff45]" }), ing]
									}, i))
								})]
							})]
						}, step.number);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[28px] border border-white/15 bg-[#10251f] p-3 shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: 1.05
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										exit: {
											opacity: 0,
											scale: .98
										},
										transition: { duration: .55 },
										className: "h-full w-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: current.focusDishId,
											alt: current.title,
											className: "h-full w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" })]
									}, current.focusDishId + activeStep)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 right-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] backdrop-blur-md border border-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
											"Couche ",
											current.number,
											" / 05"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur-md",
										children: current.layerHighlight
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4 right-4 rounded-2xl bg-black/75 p-4 backdrop-blur-md border border-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] font-black uppercase tracking-[0.16em] text-[#d7ff45]",
											children: "Composition maîtrisée"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-black text-white",
											children: current.title
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/sur-mesure",
											className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] transition hover:scale-110",
											"aria-label": "Composer mon bowl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										})]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "h-4 w-4 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-white/80",
									children: "Composez chaque couche selon vos envies"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/sur-mesure",
								className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#ff5542]",
								children: ["Créer mon Bowl", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						})]
					})
				})]
			})
		]
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
		desc: "Tenders croustillants panés minute, sauce blanche onctueuse et oignons frits croquants.",
		dishId: "crousty-chicken-sauce-blanche",
		price: "11,00 €",
		badgeEmoji: "🤍",
		productId: "crousty-chicken-sauce-blanche"
	},
	{
		id: "etudiant-deal",
		tag: "Formule Étudiant",
		tagColor: "bg-[#d7ff45] text-[#10251f]",
		title: "Formule Crousty à 11 €",
		desc: "1 Crousty Bowl au choix + 1 boisson 33cl offerte incluse (Coca, Ice-Tea, Fanta...).",
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
//#region src/components/PokeBowlMarqueeCarousel.tsx
function PokeBowlMarqueeCarousel() {
	const { addItem } = useCart();
	const scrollRef = (0, import_react.useRef)(null);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const [isAutoScrolling, setIsAutoScrolling] = (0, import_react.useState)(true);
	const checkScroll = () => {
		if (!scrollRef.current) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
		setCanScrollLeft(scrollLeft > 10);
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", checkScroll);
		checkScroll();
		return () => el.removeEventListener("scroll", checkScroll);
	}, []);
	const scroll = (direction) => {
		if (!scrollRef.current) return;
		const scrollAmount = direction === "left" ? -340 : 340;
		scrollRef.current.scrollBy({
			left: scrollAmount,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		if (!isAutoScrolling) return;
		const interval = setInterval(() => {
			if (!scrollRef.current) return;
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			if (scrollLeft >= scrollWidth - clientWidth - 15) scrollRef.current.scrollTo({
				left: 0,
				behavior: "smooth"
			});
			else scrollRef.current.scrollBy({
				left: 320,
				behavior: "smooth"
			});
		}, 4500);
		return () => clearInterval(interval);
	}, [isAutoScrolling]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		onMouseEnter: () => setIsAutoScrolling(false),
		onMouseLeave: () => setIsAutoScrolling(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-1 mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f] border border-black/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#ff705f] animate-pulse" }), "✦ Le Défilé de nos Bowls Signatures"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#10251f]",
					children: "Découvrez tous nos Poké Bowls en un coup d'œil"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs sm:text-sm text-[#68756f]",
					children: "70% de nos commandes : des bowls ultra-garnis, faits minute avec notre riz à sushi délicat."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 self-start sm:self-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scroll("left"),
					disabled: !canScrollLeft,
					"aria-label": "Faire défiler vers la gauche",
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scroll("right"),
					disabled: !canScrollRight,
					"aria-label": "Faire défiler vers la droite",
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scrollRef,
			className: "flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory px-1",
			style: {
				scrollbarWidth: "none",
				msOverflowStyle: "none"
			},
			children: bowls.map((bowl, index) => {
				const isCrousty = bowl.id.startsWith("crousty-");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-[290px] sm:w-[320px] md:w-[340px] shrink-0 snap-start group flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden bg-[#ece8dc]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
								dishId: bowl.id,
								alt: bowl.name,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3.5 left-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${isCrousty ? "bg-[#8b5510] text-white" : bowl.tagColor === "bestseller" ? "bg-[#d7ff45] text-[#10251f]" : "bg-white/95 text-[#10251f]"}`,
									children: [isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }), bowl.tag]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3.5 right-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-[#10251f] px-3.5 py-1.5 text-xs font-black text-white shadow-md border border-white/20",
									children: [bowl.price.toFixed(2), " €"]
								})
							}),
							isCrousty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-3.5 left-3.5 rounded-full bg-[#d7ff45] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md",
								children: "Boisson incluse 🥤"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5 sm:p-6 justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-[#ff705f]",
									children: isCrousty ? "Spécialité Chaude" : "Poké Bowl Signature"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold text-[#7d8b83]",
									children: "Fait minute"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-1 text-lg font-extrabold text-[#10251f] group-hover:text-[#ff705f] transition",
								children: bowl.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#68756f] line-clamp-2",
								children: bowl.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 flex flex-wrap gap-1",
								children: [bowl.ingredients.slice(0, 4).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-md bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-semibold text-[#10251f]/80",
									children: [
										ing.emoji,
										" ",
										ing.name
									]
								}, i)), bowl.ingredients.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-md bg-[#f7f4ec] px-1.5 py-0.5 text-[10px] font-semibold text-[#7d8b83]",
									children: ["+", bowl.ingredients.length - 4]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-4 border-t border-black/5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => addItem({
									id: bowl.id,
									name: `${bowl.name} (Moyen)`,
									basePrice: bowl.price,
									price: bowl.price,
									quantity: 1,
									toppings: [],
									removedIngredients: []
								}),
								title: "Ajouter direct au panier",
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] shadow-sm transition hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95 font-black",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/product/$productId",
								params: { productId: bowl.id },
								className: "flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#10251f] py-3 px-3 text-[11px] font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f] hover:scale-[1.02] active:scale-[0.98]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})]
						})]
					})]
				}, bowl.id);
			})
		})]
	});
}
//#endregion
//#region src/components/Hero3DParallaxPoke.tsx
var HERO_DISHES = [
	{
		id: "sweet-chicken",
		name: "Sweet Chicken",
		price: 10,
		grandPrice: 13,
		tag: "Best-Seller ⭐",
		tagColor: "#d7ff45",
		glowColor: "rgba(215, 255, 69, 0.22)",
		tasteProfile: "Doux, fruité & umami caramélisé",
		description: "Morceaux tendres de poulet mariné doré, mangue mûre juteuse, avocat crémeux, maïs croquant, feta et nappage teriyaki brillant sur riz à sushi.",
		freshCuts: [
			"Poulet doré mariné",
			"Avocat Hass mûr",
			"Mangue juteuse",
			"Feta émiettée",
			"Sauce Teriyaki"
		],
		floatingIngredients: [
			{
				name: "Poulet Mariné Doré",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 45
			},
			{
				name: "Avocat Hass Crémeux",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 55
			},
			{
				name: "Mangue Mûre Juteuse",
				emoji: "🥭",
				x: "-6%",
				y: "70%",
				depth: 38
			},
			{
				name: "Oignons Croustillants",
				emoji: "🧅",
				x: "80%",
				y: "68%",
				depth: 48
			},
			{
				name: "Graines Sésame Toastées",
				emoji: "🌱",
				x: "42%",
				y: "88%",
				depth: 30
			}
		]
	},
	{
		id: "saumon-wasabi",
		name: "Saumon Wasabi",
		price: 11,
		grandPrice: 14,
		tag: "Coup de Cœur Sashimi ✦",
		tagColor: "#ff705f",
		glowColor: "rgba(255, 112, 95, 0.25)",
		tasteProfile: "Ultra-frais, fondant avec un kick wasabi maîtrisé",
		description: "Épais dés de saumon atlantique sashimi frais coupés chaque matin, avocat, salade d'algues wakame, mangue, edamame et notre mayo wasabi onctueuse.",
		freshCuts: [
			"Saumon Atlantique frais",
			"Salade Wakame",
			"Avocat fondant",
			"Edamame vapeur",
			"Mayo Wasabi"
		],
		floatingIngredients: [
			{
				name: "Saumon Sashimi Frais",
				emoji: "🐟",
				x: "-8%",
				y: "14%",
				depth: 55
			},
			{
				name: "Avocat Hass Découpé",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 40
			},
			{
				name: "Salade Wakame Iodée",
				emoji: "🌿",
				x: "-6%",
				y: "70%",
				depth: 50
			},
			{
				name: "Edamame Croquant",
				emoji: "🫘",
				x: "80%",
				y: "68%",
				depth: 35
			},
			{
				name: "Mayo Wasabi Veloutée",
				emoji: "🟢",
				x: "42%",
				y: "88%",
				depth: 45
			}
		]
	},
	{
		id: "scampis-royaux",
		name: "Scampis Royal",
		price: 10,
		grandPrice: 13,
		tag: "Saisi au Grill 🦐",
		tagColor: "#d7ff45",
		glowColor: "rgba(215, 255, 69, 0.22)",
		tasteProfile: "Scampis saisis, guacamole onctueux & spicy mayo",
		description: "Succulents scampis royaux dorés au grill, guacamole maison velouté, tomates cerises, edamame, concombre frais, poivrons et spicy mayo.",
		freshCuts: [
			"Scampis grillés saisis",
			"Guacamole maison",
			"Tomates cerises",
			"Jalapeños frais",
			"Spicy Mayo"
		],
		floatingIngredients: [
			{
				name: "Scampis Royaux Saisis",
				emoji: "🦐",
				x: "-8%",
				y: "14%",
				depth: 52
			},
			{
				name: "Guacamole Velouté",
				emoji: "🥑",
				x: "82%",
				y: "18%",
				depth: 42
			},
			{
				name: "Tomates Cerises Juteuses",
				emoji: "🍅",
				x: "-6%",
				y: "70%",
				depth: 48
			},
			{
				name: "Jalapeños Épicés",
				emoji: "🌶️",
				x: "80%",
				y: "68%",
				depth: 36
			},
			{
				name: "Spicy Mayo Onctueuse",
				emoji: "🌶️",
				x: "42%",
				y: "88%",
				depth: 40
			}
		]
	},
	{
		id: "spicy-chicken",
		name: "Spicy Chicken",
		price: 10,
		grandPrice: 13,
		tag: "Touche Pimentée 🔥",
		tagColor: "#ff705f",
		glowColor: "rgba(255, 112, 95, 0.22)",
		tasteProfile: "Fondant, caramélisé & piquant addictif",
		description: "Poulet mariné rôti aux épices douces, patates douces rôties au four, avocat, maïs, feta grecque, jalapeños et notre spicy mayo signature.",
		freshCuts: [
			"Poulet mariné rôti",
			"Patates douces rôties",
			"Avocat crémeux",
			"Feta émiettée",
			"Flocons de Chili"
		],
		floatingIngredients: [
			{
				name: "Poulet Rôti aux Épices",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 48
			},
			{
				name: "Patates Douces Rôties",
				emoji: "🍠",
				x: "82%",
				y: "18%",
				depth: 54
			},
			{
				name: "Jalapeños Frais",
				emoji: "🌶️",
				x: "-6%",
				y: "70%",
				depth: 36
			},
			{
				name: "Feta Émiettée",
				emoji: "🧀",
				x: "80%",
				y: "68%",
				depth: 44
			},
			{
				name: "Flocons de Chili",
				emoji: "🔥",
				x: "42%",
				y: "88%",
				depth: 42
			}
		]
	},
	{
		id: "crousty-chicken-curry",
		name: "Crousty Chicken Curry",
		price: 11,
		grandPrice: 11,
		tag: "Formule 11€ Boisson Comprise 🥤",
		tagColor: "#f59e0b",
		glowColor: "rgba(245, 158, 11, 0.28)",
		tasteProfile: "Chaud, ultra-croustillant & sauce curry veloutée",
		description: "Notre plat signature chaud : poulet pané extra croustillant coupé minute, sauce curry onctueuse parfumée, oignons frits et boisson 33cl offerte incluse !",
		freshCuts: [
			"Poulet pané croustillant",
			"Sauce Curry onctueuse",
			"Oignons frits",
			"Boisson 33cl incluse"
		],
		floatingIngredients: [
			{
				name: "Poulet Extra Croustillant",
				emoji: "🍗",
				x: "-8%",
				y: "14%",
				depth: 52
			},
			{
				name: "Sauce Curry Chaude",
				emoji: "🍛",
				x: "82%",
				y: "18%",
				depth: 42
			},
			{
				name: "Oignons Frits Croustillants",
				emoji: "🧅",
				x: "-6%",
				y: "70%",
				depth: 46
			},
			{
				name: "Boisson 33cl Offerte",
				emoji: "🥤",
				x: "80%",
				y: "68%",
				depth: 48
			},
			{
				name: "Riz Chaud Parfumé",
				emoji: "🍚",
				x: "42%",
				y: "88%",
				depth: 32
			}
		],
		isHotCombo: true
	}
];
function Hero3DParallaxPoke() {
	const [currentIndex, setCurrentIndex] = import_react.useState(0);
	const [selectedSize, setSelectedSize] = import_react.useState("moyen");
	const [addedSuccess, setAddedSuccess] = import_react.useState(false);
	const { addItem } = useCart();
	const currentDish = HERO_DISHES[currentIndex];
	const activePrice = selectedSize === "grand" && !currentDish.isHotCombo ? currentDish.grandPrice : currentDish.price;
	const containerRef = import_react.useRef(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = {
		damping: 25,
		stiffness: 120,
		mass: .5
	};
	const smoothMouseX = useSpring(mouseX, springConfig);
	const smoothMouseY = useSpring(mouseY, springConfig);
	const rotateX = useTransform(smoothMouseY, [-.5, .5], [12, -12]);
	const rotateY = useTransform(smoothMouseX, [-.5, .5], [-14, 14]);
	const handleMouseMove = (e) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		mouseX.set(x);
		mouseY.set(y);
	};
	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};
	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + HERO_DISHES.length) % HERO_DISHES.length);
	};
	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % HERO_DISHES.length);
	};
	const handleQuickAdd = () => {
		addItem({
			id: currentDish.id,
			name: `${currentDish.name} (${selectedSize === "grand" ? "Grand" : "Moyen"})`,
			basePrice: activePrice,
			price: activePrice,
			quantity: 1,
			toppings: [],
			removedIngredients: []
		});
		setAddedSuccess(true);
		setTimeout(() => setAddedSuccess(false), 2200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: containerRef,
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		className: "relative isolate min-h-screen overflow-hidden bg-[#071713] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center",
		style: { perspective: 1200 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { background: `radial-gradient(ellipse 65% 55% at 30% 45%, ${currentDish.glowColor}, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(215,255,69,0.06), transparent 70%), linear-gradient(135deg, #071713 0%, #0d221c 50%, #071713 100%)` },
				transition: {
					duration: 1.2,
					ease: "easeOut"
				},
				className: "absolute inset-0 -z-20 pointer-events-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-[#d7ff45] animate-ping" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d7ff45] font-extrabold",
								children: "EN DIRECT DE VISÉ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Avenue du Pont 12" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/70",
								children: "Préparé minute en 10 min"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-xs text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 font-bold text-[#d7ff45]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#d7ff45]" }), " 4.9/5"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/40",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline font-semibold",
								children: "Plus de 150 avis gourmands"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative order-1 flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							style: {
								rotateX,
								rotateY,
								transformStyle: "preserve-3d"
							},
							className: "relative aspect-square w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { transform: "translateZ(-40px)" },
									className: "absolute -bottom-8 left-1/2 -translate-x-1/2 h-20 w-[85%] rounded-[100%] bg-black/65 blur-2xl pointer-events-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: { transform: "translateZ(-20px)" },
									className: "absolute inset-4 rounded-full blur-3xl opacity-40 transition-colors duration-1000 pointer-events-none",
									style: { backgroundColor: currentDish.tagColor }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: { y: [
										-6,
										6,
										-6
									] },
									transition: {
										duration: 5,
										repeat: Infinity,
										ease: "easeInOut"
									},
									style: {
										transform: "translateZ(30px)",
										transformStyle: "preserve-3d"
									},
									className: "relative h-full w-full rounded-[42px] p-3 transition-transform duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-full w-full overflow-hidden rounded-[38px] border-2 border-white/20 bg-[#0d221c] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.9)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											mode: "wait",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												initial: {
													opacity: 0,
													scale: 1.08,
													filter: "blur(6px)"
												},
												animate: {
													opacity: 1,
													scale: 1,
													filter: "blur(0px)"
												},
												exit: {
													opacity: 0,
													scale: .94,
													filter: "blur(4px)"
												},
												transition: {
													duration: .65,
													ease: [
														.22,
														1,
														.36,
														1
													]
												},
												className: "relative h-full w-full",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
														dishId: currentDish.id,
														alt: currentDish.name,
														priority: true,
														className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-white/10 pointer-events-none" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "absolute top-5 left-5 right-5 z-20 flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#10251f] shadow-lg backdrop-blur-md",
															style: { backgroundColor: currentDish.tagColor },
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), currentDish.tag]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "rounded-full bg-black/65 px-3.5 py-1.5 text-xs font-black text-white backdrop-blur-md border border-white/15 shadow-lg",
															children: [
																"Dès ",
																currentDish.price.toFixed(2),
																" €"
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute bottom-5 inset-x-5 z-20",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-2xl border border-white/20 bg-black/75 p-3.5 text-xs text-white backdrop-blur-md shadow-xl flex items-center justify-between gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-[9px] font-black uppercase tracking-widest text-[#d7ff45]",
																	children: "Notes Gustatives"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "truncate font-bold text-white/95 text-xs",
																	children: currentDish.tasteProfile
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																to: "/product/$productId",
																params: { productId: currentDish.id },
																className: "shrink-0 rounded-xl bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white hover:bg-white hover:text-black transition",
																children: "Détails →"
															})]
														})
													})
												]
											}, currentDish.id)
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: currentDish.floatingIngredients.map((item, idx) => {
										const depthX = useTransform(smoothMouseX, [-.5, .5], [-item.depth * .7, item.depth * .7]);
										const depthY = useTransform(smoothMouseY, [-.5, .5], [-item.depth * .7, item.depth * .7]);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: {
												opacity: 0,
												scale: .6
											},
											animate: {
												opacity: 1,
												scale: 1
											},
											exit: {
												opacity: 0,
												scale: .6
											},
											transition: {
												duration: .5,
												delay: idx * .08
											},
											style: {
												left: item.x,
												top: item.y,
												x: depthX,
												y: depthY,
												transform: `translateZ(${item.depth}px)`
											},
											className: "pointer-events-none absolute z-30 hidden sm:flex items-center gap-2 rounded-2xl border border-white/20 bg-[#0d221c]/85 px-3.5 py-2 shadow-2xl backdrop-blur-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base",
												children: item.emoji
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-extrabold text-white tracking-wide whitespace-nowrap",
												children: item.name
											})]
										}, `${currentDish.id}-${idx}`);
									}) }, currentDish.id)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handlePrev,
									"aria-label": "Plat précédent",
									className: "absolute -left-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleNext,
									"aria-label": "Plat suivant",
									className: "absolute -right-4 top-1/2 z-40 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#0d221c]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#d7ff45] hover:text-[#10251f] hover:scale-110 active:scale-95",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex w-full max-w-[560px] items-center justify-center gap-1.5 overflow-x-auto pb-1 no-scrollbar",
							children: HERO_DISHES.map((dish, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setCurrentIndex(idx),
								className: `group relative shrink-0 rounded-2xl px-3.5 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${idx === currentIndex ? "bg-[#d7ff45] text-[#10251f] shadow-lg scale-105" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dish.name })
							}, dish.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-2 flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 18
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .7 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Expérience Culinaire 100% Fraîcheur" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-white",
											children: "L'art du Poké Bowl"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-[#d7ff45]",
											children: "généreux & fait minute."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-white/80",
										children: [
											"Oubliez les bowls fades remplis de riz. Chez ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-white",
												children: "Poke N Bowl Visé"
											}),
											", chaque recette déborde d'ingrédients nobles coupés le matin même : saumon atlantique sashimi, scampis grillés saisis, poulet doré caramélisé et riz à sushi fondant."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .4 },
								className: "mt-6 rounded-3xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 backdrop-blur-xl shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black uppercase tracking-widest text-[#d7ff45]",
											children: currentDish.tag
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-black text-white",
											children: currentDish.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block text-3xl font-black text-[#d7ff45] tracking-tight",
												children: [activePrice.toFixed(2), " €"]
											}), currentDish.isHotCombo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-extrabold uppercase text-[#f59e0b]",
												children: "Boisson 33cl offerte incluse"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] font-semibold text-white/60",
												children: ["Format ", selectedSize === "grand" ? "Grand (13€)" : "Moyen (10€)"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-1.5",
										children: currentDish.freshCuts.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[11px] font-bold text-white/90",
											children: ["✓ ", item]
										}, i))
									}),
									!currentDish.isHotCombo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between gap-3 rounded-2xl bg-black/35 p-2 border border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-white/75 pl-2",
											children: "Choisir le format :"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedSize("moyen"),
												className: `rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${selectedSize === "moyen" ? "bg-[#d7ff45] text-[#10251f] shadow" : "text-white/70 hover:text-white"}`,
												children: "Moyen (10 €)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSelectedSize("grand"),
												className: `rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition ${selectedSize === "grand" ? "bg-[#d7ff45] text-[#10251f] shadow" : "text-white/70 hover:text-white"}`,
												children: "Grand (13 €)"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-col sm:flex-row gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: handleQuickAdd,
											className: "flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-[0_10px_30px_rgba(215,255,69,0.35)] transition hover:bg-white hover:scale-[1.02] active:scale-98",
											children: addedSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-emerald-600 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												"Ajouter au Panier · ",
												activePrice.toFixed(2),
												" €"
											] })] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/product/$productId",
											params: { productId: currentDish.id },
											className: "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 py-4 px-5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Personnaliser" })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] font-bold text-white/60 pt-3 border-t border-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#d7ff45]" }), " Prêt en 10-15 min"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[#d7ff45]" }), " Ingrédients frais garantis"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛵" }), " Livraison à domicile dispo"]
											})
										]
									})
								]
							}, currentDish.id),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-5 py-3 text-xs text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Envie de créer votre propre combinaison de A à Z ?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/sur-mesure",
									className: "font-black text-[#d7ff45] hover:underline flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Créer Sur-Mesure (10€)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/InteractiveBowlBuilder.tsx
var BASES = [
	{
		id: "riz-sushi",
		name: "Riz à sushi",
		emoji: "🍚",
		desc: "Vinaigré et fondant"
	},
	{
		id: "riz-brun",
		name: "Riz brun",
		emoji: "🌾",
		desc: "Complet & parfumé"
	},
	{
		id: "salade",
		name: "Salade fraîche",
		emoji: "🥗",
		desc: "Légère & croquante"
	},
	{
		id: "pates",
		name: "Pâtes",
		emoji: "🍝",
		desc: "Gourmandes"
	}
];
var PROTEINES = [
	{
		id: "poulet",
		name: "Poulet doré",
		emoji: "🍗",
		extra: 0,
		tag: "Cuisiné maison"
	},
	{
		id: "saumon",
		name: "Saumon sashimi",
		emoji: "🐟",
		extra: 1,
		tag: "+1,00 € · Extra frais"
	},
	{
		id: "scampis",
		name: "Scampis grillés",
		emoji: "🦐",
		extra: 0,
		tag: "Saisis minute"
	},
	{
		id: "vege",
		name: "Double Avocat & Feta",
		emoji: "🥑",
		extra: 0,
		tag: "100% Végé"
	}
];
var MIXINS = [
	{
		id: "avocat",
		name: "Avocat Hass",
		emoji: "🥑"
	},
	{
		id: "mangue",
		name: "Mangue mûre",
		emoji: "🥭"
	},
	{
		id: "edamame",
		name: "Edamame",
		emoji: "🫘"
	},
	{
		id: "feta",
		name: "Feta grecque",
		emoji: "🧀"
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
		id: "wakame",
		name: "Algues Wakame",
		emoji: "🌿"
	},
	{
		id: "concombre",
		name: "Concombre frais",
		emoji: "🥒"
	},
	{
		id: "jalapenos",
		name: "Jalapeños",
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
		name: "Teriyaki caramélisée",
		emoji: "🍯"
	},
	{
		id: "spicy-mayo",
		name: "Spicy Mayo piquante",
		emoji: "🌶️"
	},
	{
		id: "mayo-wasabi",
		name: "Mayo Wasabi veloutée",
		emoji: "🟢"
	},
	{
		id: "sesame",
		name: "Sésame toasté",
		emoji: "🌰"
	}
];
var TOPPINGS = [
	{
		id: "oignons-frits",
		name: "Oignons frits croustillants",
		emoji: "🧅"
	},
	{
		id: "sesame-mix",
		name: "Sésame noir & blanc",
		emoji: "🌱"
	},
	{
		id: "flocons-chili",
		name: "Flocons de chili",
		emoji: "🔥"
	}
];
function InteractiveBowlBuilder() {
	const [size, setSize] = import_react.useState("moyen");
	const [base, setBase] = import_react.useState(BASES[0]);
	const [proteine, setProteine] = import_react.useState(PROTEINES[1]);
	const [selectedMixins, setSelectedMixins] = import_react.useState([
		"avocat",
		"mangue",
		"edamame",
		"wakame",
		"tomates"
	]);
	const [sauce, setSauce] = import_react.useState(SAUCES[0]);
	const [topping, setTopping] = import_react.useState(TOPPINGS[0]);
	const [added, setAdded] = import_react.useState(false);
	const { addItem } = useCart();
	const basePrice = size === "grand" ? 13 : 10;
	const proteinExtra = proteine.extra;
	const extraMixinsCount = Math.max(0, selectedMixins.length - 5);
	const extraMixinsPrice = extraMixinsCount * .5;
	const totalPrice = basePrice + proteinExtra + extraMixinsPrice;
	const toggleMixin = (id) => {
		if (selectedMixins.includes(id)) {
			if (selectedMixins.length > 1) setSelectedMixins((prev) => prev.filter((m) => m !== id));
		} else setSelectedMixins((prev) => [...prev, id]);
	};
	const resetSelection = () => {
		setSize("moyen");
		setBase(BASES[0]);
		setProteine(PROTEINES[0]);
		setSelectedMixins([
			"avocat",
			"mangue",
			"edamame",
			"tomates",
			"mais"
		]);
		setSauce(SAUCES[0]);
		setTopping(TOPPINGS[0]);
	};
	const handleAddToCart = () => {
		const mixinNames = selectedMixins.map((id) => MIXINS.find((m) => m.id === id)?.name || id);
		`${base.name}${proteine.name}${mixinNames.join(", ")}${sauce.name}${topping.name}`;
		addItem({
			id: `custom-live-${Date.now()}`,
			name: `Bowl Sur-Mesure (${size === "grand" ? "Grand" : "Moyen"})`,
			basePrice: totalPrice,
			price: totalPrice,
			quantity: 1,
			toppings: [
				`Base : ${base.name}`,
				`Protéine : ${proteine.name}`,
				...mixinNames,
				`Sauce : ${sauce.name}`,
				`Topping : ${topping.name}`
			],
			removedIngredients: []
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 2200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "composer",
		className: "scroll-mt-12 bg-[#0c1f19] py-16 sm:py-24 text-white relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/40 bg-[#d7ff45]/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#d7ff45]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mini-Simulateur Ludique" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight",
							children: ["Compose ton bowl en live. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#d7ff45]",
								children: "Fait minute pour toi."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm sm:text-base text-white/75",
							children: "Choisis ta base, ta protéine fraîche et tes 5 mix-ins préférés. Visualise ta recette en temps réel et commande-la en un seul clic !"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "1"
									}), "Format du Bowl"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "Moyen ou Grand (+3€)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSize("moyen"),
									className: `rounded-2xl p-3.5 text-left border transition-all ${size === "moyen" ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-sm",
										children: "Moyen (10,00 €)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/60",
										children: "Généreux & complet"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSize("grand"),
									className: `rounded-2xl p-3.5 text-left border transition-all ${size === "grand" ? "border-[#d7ff45] bg-[#d7ff45]/15 text-white shadow-md" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-black text-sm text-[#d7ff45]",
										children: "Grand (13,00 €) 🔥"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-white/60",
										children: "Portion XXL très gourmande"
									})]
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "2"
									}), "Ta Base Fondante"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "1 base incluse"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
								children: BASES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBase(b),
									className: `rounded-2xl p-3 text-center border transition-all ${base.id === b.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl block",
										children: b.emoji
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold block mt-1",
										children: b.name
									})]
								}, b.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
										children: "3"
									}), "Ta Protéine Fraîche"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/50",
									children: "Découpée du matin"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
								children: PROTEINES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setProteine(p),
									className: `rounded-2xl p-3 text-center border transition-all ${proteine.id === p.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f] font-black shadow-lg scale-102" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xl block",
											children: p.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold block mt-1",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] block opacity-80 mt-0.5",
											children: p.tag
										})
									]
								}, p.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#d7ff45] text-[#10251f] text-[10px]",
											children: "4"
										}),
										"Tes Mix-ins (",
										selectedMixins.length,
										" sélectionnés)"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-white/60",
									children: selectedMixins.length <= 5 ? `${5 - selectedMixins.length} inclus restants` : `+${(selectedMixins.length - 5) * .5}€ (${selectedMixins.length - 5} extras)`
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-5 gap-2",
								children: MIXINS.map((m) => {
									const isSelected = selectedMixins.includes(m.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleMixin(m.id),
										className: `rounded-xl p-2.5 text-center border transition-all text-xs font-bold flex items-center justify-center gap-1.5 ${isSelected ? "border-[#d7ff45] bg-[#d7ff45]/20 text-white" : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.emoji }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: m.name
											}),
											isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-[#d7ff45] shrink-0" })
										]
									}, m.id);
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2",
									children: "5. Sauce Signature"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-1.5",
									children: SAUCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSauce(s),
										className: `rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${sauce.id === s.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											s.emoji,
											" ",
											s.name
										] })
									}, s.id))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black uppercase tracking-wider text-[#d7ff45] block mb-2",
									children: "6. Crunch Topping"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-1.5",
									children: TOPPINGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTopping(t),
										className: `rounded-xl p-2.5 text-left border text-xs font-bold transition-all ${topping.id === t.id ? "border-[#d7ff45] bg-[#d7ff45] text-[#10251f]" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											t.emoji,
											" ",
											t.name
										] })
									}, t.id))
								})] })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 rounded-[32px] border-2 border-white/20 bg-gradient-to-b from-[#102720] to-[#0a1b16] p-6 sm:p-8 text-white shadow-2xl backdrop-blur-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-4 border-b border-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-5 w-5 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-black uppercase tracking-widest text-[#d7ff45]",
										children: "Ta Création Minute"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: resetSelection,
									className: "flex items-center gap-1 text-[11px] font-bold text-white/50 hover:text-white transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3 w-3" }), "Réinitialiser"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative my-6 aspect-square max-w-[260px] mx-auto rounded-full border-4 border-white/15 bg-gradient-to-br from-[#1a382e] to-[#071713] p-4 shadow-[inset_0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,255,69,0.15),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 text-center space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-4xl animate-bounce duration-1000",
											children: proteine.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-black tracking-tight text-white bg-black/50 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md",
											children: base.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap justify-center gap-1 max-w-[190px]",
											children: [
												selectedMixins.slice(0, 5).map((id) => {
													const m = MIXINS.find((item) => item.id === id);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-lg",
														children: m?.emoji
													}, id);
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg",
													children: sauce.emoji
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg",
													children: topping.emoji
												})
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 text-xs text-white/80 border-t border-white/10 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Format ", size === "grand" ? "Grand" : "Moyen"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [basePrice.toFixed(2), " €"]
										})]
									}),
									proteinExtra > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[#ff705f]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supplément Saumon Sashimi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [
												"+",
												proteinExtra.toFixed(2),
												" €"
											]
										})]
									}),
									extraMixinsPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[#d7ff45]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Mix-ins extras (",
											extraMixinsCount,
											")"
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-bold",
											children: [
												"+",
												extraMixinsPrice.toFixed(2),
												" €"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-base font-black text-white pt-2 border-t border-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total de ta commande" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[#d7ff45] text-2xl font-black",
											children: [totalPrice.toFixed(2), " €"]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleAddToCart,
								className: "mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#d7ff45] py-4 px-6 text-sm font-black uppercase tracking-wider text-[#10251f] shadow-lg transition hover:bg-white hover:scale-[1.02] active:scale-98",
								children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-emerald-600 stroke-[3]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bowl ajouté au panier !" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Commander cette création · ",
									totalPrice.toFixed(2),
									" €"
								] })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sur-mesure",
								className: "mt-3 block text-center text-xs font-bold text-white/60 hover:text-white transition",
								children: "Ouvrir le configurateur avancé plein écran →"
							})
						]
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/DishTasteExplorer.tsx
var INGREDIENTS_SHOWCASE = [
	{
		id: "saumon",
		title: "Le Saumon Atlantique Sashimi",
		subtitle: "Pêche responsable · Zéro congélation",
		desc: "Découpé au couteau chaque matin en gros cubes fondants. Une texture soyeuse et beurrée qui sublime nos bowls signature.",
		badge: "100% Frais Découpé Minute",
		badgeColor: "#ff705f",
		image: bowl_saumon_default,
		linkDish: "saumon-wasabi",
		stats: "Riche en Oméga-3 & Protéines"
	},
	{
		id: "avocat",
		title: "L'Avocat Hass Ultra-Fondant",
		subtitle: "Sélectionné à maturité parfaite",
		desc: "Un avocat crémeux tranché minute en éventail ou écrasé en guacamole maison. Aucun avocat dur ou sans saveur.",
		badge: "Maturité Contrôlée",
		badgeColor: "#d7ff45",
		image: bowl_sweet_chicken_default,
		linkDish: "sweet-chicken",
		stats: "Vitamines E & Bons Lipides"
	},
	{
		id: "crousty",
		title: "Le Fameux Crousty Chicken",
		subtitle: "Panure dorée croustillante minute",
		desc: "Notre recette secrète de poulet mariné et pané ultra croustillant, nappé de sauce curry chaude onctueuse ou sauce blanche.",
		badge: "Spécialité Chaude · Formule 11€",
		badgeColor: "#f59e0b",
		image: bowl_crousty_curry_default,
		linkDish: "crousty-chicken-curry",
		stats: "Boisson 33cl offerte incluse"
	},
	{
		id: "scampis",
		title: "Les Scampis Royaux au Grill",
		subtitle: "Saisis à haute température",
		desc: "De généreux scampis bien dorés avec une subtile note fumée, combinés aux jalapeños frais et à notre spicy mayo maison.",
		badge: "Saisi Minute",
		badgeColor: "#d7ff45",
		image: bowl_scampis_default,
		linkDish: "scampis-royaux",
		stats: "Protéines maigres & Saveur grill"
	}
];
function DishTasteExplorer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#faf8f4] py-16 sm:py-24 border-y border-black/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#10251f]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-[#10251f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pourquoi c'est si addictif ?" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#10251f] tracking-tight",
					children: ["L'exigence de la fraîcheur. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#ff705f]",
						children: "Zéro compromis."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm sm:text-base text-[#64746d] leading-relaxed",
					children: "Ici, pas de produits industriels pré-emballés ni de chips sans valeur. Chaque ingrédient est sélectionné pour sa fraîcheur brute et préparé sur place à Visé."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: INGREDIENTS_SHOWCASE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/5 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-2xl bg-[#eee8dc]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-3 left-3 z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#10251f] shadow-md backdrop-blur-md",
								style: { backgroundColor: item.badgeColor },
								children: item.badge
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black uppercase tracking-widest text-[#7d8b83]",
								children: item.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-lg font-black text-[#10251f] leading-snug",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[#64746d]",
								children: item.desc
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-3 border-t border-black/5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold text-[#10251f]",
							children: item.stats
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$productId",
							params: { productId: item.linkDish },
							className: "inline-flex items-center gap-1 text-xs font-black text-[#ff705f] hover:underline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Goûter →" })
						})]
					})]
				}, item.id))
			})]
		})
	});
}
//#endregion
//#region src/components/PokawaCategoriesBar.tsx
var CATEGORIES = [
	{
		id: "pokes",
		title: "Pokés Signatures",
		subtitle: "5 recettes équilibrées",
		badge: "100% Frais",
		badgeColor: "bg-[#d7ff45] text-[#10251f]",
		image: bowl_saumon_default,
		anchor: "#carte",
		icon: "🥗"
	},
	{
		id: "sur-mesure",
		title: "Compose ton Bowl",
		subtitle: "5 mix-ins frais inclus",
		badge: "Sur-Mesure",
		badgeColor: "bg-[#ff705f] text-white",
		image: bowl_sweet_chicken_default,
		anchor: "#composer",
		icon: "✨"
	},
	{
		id: "crousty",
		title: "Bar à Crousty",
		subtitle: "Formule étudiant 11€",
		badge: "Gamme Chaude 🔥",
		badgeColor: "bg-[#8b5510] text-white",
		image: bowl_crousty_curry_default,
		anchor: "#crousty",
		icon: "🍗"
	},
	{
		id: "desserts",
		title: "Tiramisus Maison",
		subtitle: "Fait chaque matin (4€)",
		badge: "Gourmandise",
		badgeColor: "bg-[#ff705f]/90 text-white",
		image: tiramisu_speculoos_default,
		anchor: "#desserts",
		icon: "🧁"
	},
	{
		id: "boissons",
		title: "Boissons Fraîches",
		subtitle: "Canettes givrées & eaux",
		badge: "2,00 € l'unité",
		badgeColor: "bg-[#10251f] text-white",
		image: "/assets/hero-poke-Dk38LgOY.jpg",
		anchor: "#boissons",
		icon: "🥤"
	}
];
function PokawaCategoriesBar() {
	const scrollRef = (0, import_react.useRef)(null);
	const [canScrollLeft, setCanScrollLeft] = (0, import_react.useState)(false);
	const [canScrollRight, setCanScrollRight] = (0, import_react.useState)(true);
	const checkScroll = () => {
		if (!scrollRef.current) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
		setCanScrollLeft(scrollLeft > 10);
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
	};
	(0, import_react.useEffect)(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", checkScroll);
		checkScroll();
		return () => el.removeEventListener("scroll", checkScroll);
	}, []);
	const scroll = (direction) => {
		if (!scrollRef.current) return;
		const scrollAmount = direction === "left" ? -280 : 280;
		scrollRef.current.scrollBy({
			left: scrollAmount,
			behavior: "smooth"
		});
	};
	const handleCategoryClick = (anchor) => {
		const target = document.querySelector(anchor);
		if (target) target.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white/80 py-10 sm:py-14 border-b border-black/5 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#10251f]/5 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#10251f]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥑" }), " Explorez Notre Carte Complète"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
						children: "Vivez sainement, soyez gourmands."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs sm:text-sm text-[#68756f]",
						children: "Des créations fraîches, des spécialités chaudes et des douceurs artisanales préparées à Visé."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scroll("left"),
						disabled: !canScrollLeft,
						"aria-label": "Faire défiler vers la gauche",
						className: "flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4.5 w-4.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scroll("right"),
						disabled: !canScrollRight,
						"aria-label": "Faire défiler vers la droite",
						className: "flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#10251f] shadow-sm transition hover:bg-[#10251f] hover:text-white disabled:opacity-30 disabled:pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4.5 w-4.5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth",
				style: { scrollSnapType: "x mandatory" },
				children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => handleCategoryClick(cat.anchor),
					style: { scrollSnapAlign: "start" },
					className: "group relative flex w-[220px] sm:w-[245px] shrink-0 flex-col overflow-hidden rounded-[30px] border border-black/5 bg-[#faf8f4] p-3.5 text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-lift active:scale-98 cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square w-full overflow-hidden rounded-[24px] bg-[#ece8dc]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cat.image,
								alt: cat.title,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-108",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider shadow-sm ${cat.badgeColor}`,
								children: cat.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-sm shadow-md backdrop-blur-sm",
								children: cat.icon
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3.5 px-1 pb-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#10251f] group-hover:text-[#ff705f] transition-colors",
								children: cat.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] font-semibold text-[#68756f]",
								children: cat.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center justify-between border-t border-black/5 pt-2 text-[10px] font-black uppercase tracking-wider text-[#10251f]/75 group-hover:text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voir la carte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })]
							})
						]
					})]
				}, cat.id))
			})]
		})
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
							title: "Bar à Crousty Pané",
							desc: "Pour les amateurs de réconfort : poulet pané ultra croustillant, oignons frits dorés et sauces chaudes gourmandes.",
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
												children: "Chez vous bien frais"
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
												children: "Crousty + boisson 33cl"
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
//#region src/routes/index.tsx
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Poke N Bowl Visé — Poké bowls frais à emporter" }, {
		name: "description",
		content: "Poke N Bowl à Visé : poké bowls frais, crousty chicken et desserts maison. Compose ton bowl et commande directement."
	}] }),
	component: Index
});
var MAPS_URL = "https://maps.app.goo.gl/TkddDsG9pwYb62558";
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
	const { items, setIsCartOpen, addItem } = useCart();
	const [mobileOpen, setMobileOpen] = import_react.useState(false);
	const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const pokeBowls = bowls.filter((b) => !b.id.startsWith("crousty-"));
	const croustyBowls = bowls.filter((b) => b.id.startsWith("crousty-"));
	const [activeTab, setActiveTab] = import_react.useState("all");
	const filteredPokeBowls = import_react.useMemo(() => {
		if (activeTab === "all") return pokeBowls;
		if (activeTab === "bestseller") return pokeBowls.filter((b) => b.tagColor === "bestseller");
		if (activeTab === "signature") return pokeBowls.filter((b) => b.tagColor === "signature");
		if (activeTab === "crousty") return croustyBowls;
		if (activeTab === "fish") return pokeBowls.filter((b) => b.id === "saumon-wasabi" || b.id === "scampis-royaux");
		if (activeTab === "spicy") return pokeBowls.filter((b) => b.id === "spicy-chicken" || b.id === "scampis-royaux");
		return pokeBowls;
	}, [
		pokeBowls,
		croustyBowls,
		activeTab
	]);
	const closeMobile = () => setMobileOpen(false);
	const heroRef = import_react.useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
	useTransform(scrollYProgress, [0, .7], [1, 0]);
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/commander",
									className: "hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#d7ff45] px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#10251f] shadow-md transition hover:bg-white hover:scale-105 active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commander" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/recrutement",
									className: "hidden rounded-full bg-[#ff705f] px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:block",
									children: t("nav.recruit")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBellMenu, {}),
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero3DParallaxPoke, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaCategoriesBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-white/70 py-12 sm:py-16 border-b border-black/5 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeBowlMarqueeCarousel, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishTasteExplorer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "carte",
					className: "scroll-mt-10 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗" }), " Recettes officielles du flyer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[#10251f]",
								children: "Nos Poké Bowls Signatures"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-[#4e5c55] text-base sm:text-lg lg:text-xl font-medium",
								children: "Riz à sushi traditionnel, sauces maison & fraîcheur garantie"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-[#68756f]",
								children: "Chaque recette est soigneusement équilibrée et personnalisable. Retirez des ingrédients ou ajoutez vos toppings préférés en 1 clic."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sur-mesure",
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff705f] hover:underline",
									children: "Ou compose ton bowl de A à Z →"
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2 pt-2",
						children: [
							{
								id: "all",
								label: `Tous nos Poké Bowls (${pokeBowls.length})`
							},
							{
								id: "bestseller",
								label: "Best-Seller ⭐"
							},
							{
								id: "signature",
								label: "Signatures ✦"
							},
							{
								id: "crousty",
								label: "Gamme Chaude Crousty 🍗 (11€)"
							},
							{
								id: "fish",
								label: "Saumon & Scampis 🦐"
							},
							{
								id: "spicy",
								label: "Touche Épicée 🌶️"
							}
						].map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab(filter.id),
							className: `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${activeTab === filter.id ? "bg-[#10251f] text-white shadow-md scale-105" : "bg-white text-[#10251f]/75 hover:bg-[#10251f]/10 border border-black/5"}`,
							children: filter.label
						}, filter.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: filteredPokeBowls.map((bowl, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
							delay: index * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex h-full flex-col overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-card transition-all duration-400 hover:-translate-y-2 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden bg-[#ece8dc]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: bowl.id,
											alt: bowl.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "badge-tag absolute left-3.5 top-3.5 bg-white/95 text-[#10251f] shadow-card font-bold",
											children: bowl.tag
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute bottom-3.5 right-3.5 rounded-full bg-[#d7ff45] px-3.5 py-1.5 text-xs font-extrabold text-[#10251f] shadow-md",
											children: [bowl.price.toFixed(2), " €"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-6 sm:p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-start justify-between gap-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg sm:text-xl font-extrabold text-[#10251f] leading-snug",
												children: bowl.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs font-bold text-[#ff705f]",
												children: "Base riz à sushi · Fait minute"
											})] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs leading-5 text-[#68756f]",
											children: bowl.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-1.5",
											children: [bowl.ingredients.slice(0, 5).map((ing, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#10251f]/80",
												children: [
													ing.emoji,
													" ",
													ing.name
												]
											}, i)), bowl.ingredients.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "rounded-lg bg-[#f7f4ec] px-2 py-0.5 text-[10px] font-bold text-[#7d8b83]",
												children: ["+", bowl.ingredients.length - 5]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-auto pt-6 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => addItem({
													id: bowl.id,
													name: `${bowl.name} (Moyen)`,
													basePrice: bowl.price,
													price: bowl.price,
													quantity: 1,
													toppings: [],
													removedIngredients: []
												}),
												title: `Ajouter direct au panier (${bowl.price.toFixed(2)} €)`,
												className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] shadow-soft transition hover:bg-[#ff705f] hover:text-white hover:scale-105 active:scale-95 font-black",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5 stroke-[2.5]" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/product/$productId",
												params: { productId: bowl.id },
												className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#10251f] py-3 text-xs font-black uppercase tracking-wider text-white shadow-soft transition hover:bg-[#ff705f]",
												children: ["Personnaliser & Commander", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})]
										})
									]
								})]
							})
						}, bowl.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1340px] px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokeBowlCraftingExperience, {}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaBrandValues, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "crousty",
					className: "scroll-mt-12 bg-[#f0e6d6] px-5 py-14 text-[#241a12] sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-y border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#8b5510]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5510]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🍗" }), " Spécialités Chaudes & Croustillantes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#241a12]",
									children: "Le Bar à Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#6e6255] max-w-xl mx-auto",
									children: "Du poulet ultra croustillant pané minute, servi chaud sur riz parfumé avec oignons frits."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 inline-flex items-center gap-3 rounded-full bg-[#8b5510] px-5 py-2 text-white shadow-md text-xs font-bold uppercase tracking-wider",
									children: "🎓 Formule Étudiant : 11 € · Boisson 33cl incluse"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto",
							children: croustyBowls.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealScale, {
								delay: index * .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$productId",
									params: { productId: item.id },
									className: "group flex flex-col sm:flex-row overflow-hidden rounded-[26px] border border-[#8d5a18]/15 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/3] sm:w-48 shrink-0 overflow-hidden bg-[#e7d4b4]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DishImage, {
											dishId: item.id,
											alt: item.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-3 top-3 rounded-full bg-[#8b5510] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white",
											children: "11 € · Menu"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col p-5 sm:p-6 justify-between flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold uppercase tracking-wider text-[#a96b0d]",
												children: "Crousty Chicken"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 text-lg font-bold text-[#241a12]",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs text-[#6e6255] line-clamp-2",
												children: item.desc
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#8b5510]",
												children: "Boisson incluse"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 text-xs font-black text-[#241a12] group-hover:text-[#a96b0d]",
												children: ["Commander ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})]
										})]
									})]
								})
							}, item.id))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveBowlBuilder, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaPerksBanner, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "desserts",
					className: "scroll-mt-12 mx-auto max-w-[1340px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧁" }), " Douceurs & Rafraîchissements"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
								children: "Complétez votre repas avec nos incontournables"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#5a6760]",
								children: "Des tiramisus artisanaux préparés chaque matin et vos boissons fraîches préférées."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-black/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]",
									children: "Pâtisserie Maison · Fait chaque matin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1",
									children: "Nos 3 Tiramisus Gourmands"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#ff705f]/10 px-3 py-1 text-xs font-black text-[#ff705f]",
									children: "4,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: [
									{
										id: "tira-spec",
										name: "Tiramisu Spéculoos",
										badge: "Grand Classique ⭐",
										desc: "Crème mascarpone légère, biscuits Lotus caramélisés croustillants & voile de spéculoos.",
										image: tiramisu_speculoos_default,
										price: 4,
										soldOut: false
									},
									{
										id: "tira-nutella",
										name: "Tiramisu Nutella",
										badge: "Sold Out ⚠️",
										desc: "Tourbillons généreux de Nutella fondant, éclats de noisettes torréfiées & mascarpone.",
										image: tiramisu_nutella_default,
										price: 4,
										soldOut: true
									},
									{
										id: "tira-oreo",
										name: "Tiramisu Oreo",
										badge: "Crunch & Crème 🍪",
										desc: "Brisures croustillantes de biscuits Oréo noir et crème fouettée maison onctueuse.",
										image: tiramisu_oreo_default,
										price: 4,
										soldOut: false
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `group flex items-center gap-4 rounded-2xl border border-black/5 p-3.5 transition duration-200 ${item.soldOut ? "bg-[#f2efe9]/70 opacity-80" : "bg-[#faf8f4] hover:border-[#ff705f]/30 hover:bg-white hover:shadow-sm"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.name,
											className: `h-full w-full object-cover shadow-sm transition duration-300 ${item.soldOut ? "grayscale contrast-75" : "group-hover:scale-105"}`
										}), item.soldOut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 flex items-center justify-center bg-black/60 text-[10px] font-black uppercase tracking-wider text-white",
											children: "Épuisé"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-extrabold text-[#10251f] text-sm sm:text-base",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-[10px] font-bold rounded-md px-2 py-0.5 ${item.soldOut ? "bg-black/10 text-[#68756f]" : "text-[#ff705f] bg-[#ff705f]/10"}`,
													children: item.badge
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-[#68756f] line-clamp-2 leading-relaxed",
												children: item.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2.5 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs font-black text-[#10251f]",
													children: [item.price.toFixed(2), " €"]
												}), item.soldOut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center rounded-full bg-black/10 px-3 py-1 text-[11px] font-bold text-[#68756f] cursor-not-allowed",
													children: "Victime de son succès"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														addItem({
															id: item.id,
															name: item.name,
															basePrice: item.price,
															price: item.price,
															quantity: 1,
															toppings: [],
															removedIngredients: []
														});
													},
													className: "inline-flex items-center gap-1.5 rounded-full bg-[#10251f] px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#ff705f]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), "Ajouter"]
												})]
											})
										]
									})]
								}, item.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-black/5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/commander",
									className: "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff705f] hover:underline",
									children: "Commander un dessert seul ou en menu →"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "boissons",
							className: "scroll-mt-12 flex flex-col justify-between overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-card p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-black/5 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff705f]",
									children: "Canettes & Eaux · Servies très fraîches"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl sm:text-2xl font-extrabold text-[#10251f] mt-1",
									children: "Nos Boissons Fraîches"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[#d7ff45] px-3 py-1 text-xs font-black text-[#10251f]",
									children: "2,00 € l'unité"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [
									{
										id: "coca",
										name: "Coca-Cola",
										size: "33 cl",
										icon: "🥤",
										tag: "Classique givré",
										price: 2
									},
									{
										id: "coca-zero",
										name: "Coca-Cola Zero",
										size: "33 cl",
										icon: "✨",
										tag: "Zéro sucre",
										price: 2
									},
									{
										id: "fanta",
										name: "Fanta Orange",
										size: "33 cl",
										icon: "🍊",
										tag: "Fruité pétillant",
										price: 2
									},
									{
										id: "ice-tea",
										name: "Ice-Tea Pêche",
										size: "33 cl",
										icon: "🍑",
										tag: "Douceur glacée",
										price: 2
									},
									{
										id: "eau-plate",
										name: "Eau plate",
										size: "50 cl",
										icon: "💧",
										tag: "Pureté minérale",
										price: 2
									},
									{
										id: "eau-gaz",
										name: "Eau gazeuse",
										size: "50 cl",
										icon: "🫧",
										tag: "Bulles vives",
										price: 2
									}
								].map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex flex-col justify-between rounded-2xl border border-black/5 bg-[#faf8f4] p-4 transition duration-200 hover:border-[#d7ff45] hover:bg-white hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: drink.icon
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-md bg-black/5 px-2 py-0.5 text-[10px] font-bold text-[#68756f]",
												children: drink.size
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-extrabold text-[#10251f] text-sm",
												children: drink.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#7d8b83]",
												children: drink.tag
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center justify-between border-t border-black/5 pt-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-black text-[#10251f]",
												children: [drink.price.toFixed(2), " €"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													addItem({
														id: drink.id,
														name: `${drink.name} (${drink.size})`,
														basePrice: drink.price,
														price: drink.price,
														quantity: 1,
														toppings: [],
														removedIngredients: []
													});
												},
												className: "inline-flex items-center gap-1 rounded-full bg-[#10251f] px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#d7ff45] hover:text-[#10251f]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), "Ajouter"]
											})]
										})
									]
								}, drink.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 pt-4 border-t border-black/5 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 text-xs font-bold text-[#68756f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧊" }), " Boisson 33cl incluse dans la formule Étudiant (11 €)"]
								})
							})]
						})]
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PokawaInstagramWall, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/recrutement",
						className: "group mx-auto flex max-w-[1200px] items-center justify-between gap-5 rounded-[24px] bg-[#d7ff45] p-5 transition duration-300 hover:-translate-y-1.5 sm:rounded-[30px] sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#465313]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseBusiness, { className: "h-4 w-4 shrink-0" }), t("recruit.banner_tag")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 break-words text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#10251f]",
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
					className: "scroll-mt-10 bg-[#ece9df] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1340px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 text-center max-w-2xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), "Visé, Belgique · Avenue du Pont 12"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]",
									children: "Passez nous voir au restaurant"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-[#5a6760]",
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
										className: "overflow-hidden rounded-[32px] bg-[#10251f] text-white shadow-lift p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-white/10 pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-[#d7ff45]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-extrabold",
													children: "Horaires d'ouverture"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-[#d7ff45]/20 border border-[#d7ff45]/40 px-3 py-1 text-[10px] font-bold text-[#d7ff45]",
												children: "● Ouvert pour le service"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "divide-y divide-white/10 py-2",
											children: HOUR_ROWS.map(([dayKey, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3 py-3 text-xs sm:text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-white/70",
													children: t(dayKey)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `font-extrabold ${value === "closed" ? "text-[#ff705f]" : "text-white"}`,
													children: value === "closed" ? "Fermé" : value
												})]
											}, dayKey))
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
//#region src/assets/dessert.jpg
var dessert_default = "/assets/dessert-9PIP1ns9.jpg";
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
									children: "Le Bar à Crousty Chicken"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm text-[#7a847e]",
									children: "Vrais morceaux de poulet croustillant mariné · Riz parfumé · Boisson 33cl fraîche incluse"
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
	const { productId } = Route$2.useParams();
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
	const [selectedToppings, setSelectedToppings] = import_react.useState([]);
	const [extraSauce, setExtraSauce] = import_react.useState(null);
	const [selectedDrink, setSelectedDrink] = import_react.useState(drinks[0]?.name || "Coca-Cola (33 cl)");
	const [qty, setQty] = import_react.useState(1);
	const [added, setAdded] = import_react.useState(false);
	const cartItemsCount = items.reduce((sum, i) => sum + i.quantity, 0);
	const sizeExtra = selectedSize === "grand" ? 3 : 0;
	const toppingsExtra = selectedToppings.length * .5;
	const extraSaucePrice = extraSauce ? 1 : 0;
	const unitPrice = product.price + sizeExtra + toppingsExtra + extraSaucePrice;
	const totalPrice = unitPrice * qty;
	const toggleRemovedIngredient = (name) => {
		setRemovedIngredients((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);
	};
	const toggleTopping = (toppingName) => {
		setSelectedToppings((cur) => cur.includes(toppingName) ? cur.filter((t) => t !== toppingName) : [...cur, toppingName]);
	};
	const handleAddToCart = () => {
		if (!productOk) return;
		const optionsList = [];
		if (selectedSize === "grand") optionsList.push("Taille : Grand (+3.00€)");
		else optionsList.push("Taille : Moyen (Standard)");
		optionsList.push(`Base : ${selectedBase}`);
		if (selectedSauce === "none") optionsList.push("Sauce : Sans sauce");
		else optionsList.push(`Sauce : ${selectedSauce}`);
		if (isCrousty) optionsList.push(`Boisson incluse (33cl) : ${selectedDrink}`);
		selectedToppings.forEach((t) => {
			optionsList.push(`Topping : ${t}`);
		});
		if (extraSauce) optionsList.push(`Sauce extra (+1€) : ${extraSauce}`);
		addItem({
			id: product.id,
			name: product.name,
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
							className: "relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-lift sm:rounded-[36px]",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#ff705f]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Préparé minute sur commande" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-[#707e77] leading-relaxed",
								children: "Chaque bowl est assemblé à la commande à Visé avec des découpes fraîches du jour. Vous pouvez retirer n'importe quel ingrédient en cas d'allergie ou ajouter tous les toppings souhaités."
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
										children: isCrousty ? "Bar à Crousty Chicken" : "Poké Bowl Signature"
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
											children: "1. Format & Taille"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-bold text-[#a09a92]",
											children: "Fiche officielle"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "rounded-[24px] border border-[#e8e2d9] bg-white p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f]",
											children: "2. Base au choix"
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
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-[#ff705f]" }), "3. Composition & Allergies"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold text-[#ff705f]",
													children: "100% Modifiable"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-[#7a847e] leading-relaxed",
												children: [
													"Clique sur n'importe quel ingrédient pour le ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "retirer" }),
													" si tu as une allergie ou une préférence."
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
												children: "La consigne sera transmise précisément en cuisine."
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
												children: "4. Sauce Signature"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-[#7a847e]",
												children: "Incluse · change de sauce gratuitement"
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
											children: "5. Toppings Croustillants"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "À volonté · choisis autant de toppings que tu veux (+0.50€ chaque)"
										})] }), selectedToppings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-[#ff705f] px-3 py-1 text-xs font-black text-white shadow-sm",
											children: [
												selectedToppings.length,
												" sélectionné",
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
									className: "rounded-[24px] border border-[#e8e2d9] bg-[#ff705f]/5 p-5 shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-sm font-black uppercase tracking-wider text-[#17231f] flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-[#ff705f]" }), "Boisson 33cl incluse (Formule Étudiant)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-[#7a847e]",
											children: "Comprise dans la formule à 11€ · choisis ta boisson fraîche"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
										children: drinks.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setSelectedDrink(d.name),
											className: ["flex items-center justify-between rounded-xl border-2 p-2.5 text-left text-xs font-bold transition-all", selectedDrink === d.name ? "border-[#ff705f] bg-white text-[#ff705f] shadow-sm font-black" : "border-[#e8e2d9] bg-white/70 text-[#2e2619] hover:border-[#ff705f]/40"].join(" "),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: d.name
											}), selectedDrink === d.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-[#ff705f]" })]
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
