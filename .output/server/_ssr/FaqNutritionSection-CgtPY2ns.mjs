import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { L as CircleQuestionMark, U as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FaqNutritionSection-CgtPY2ns.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAQ_ITEMS = [
	{
		q: "D'où provient votre saumon et comment est-il préparé ?",
		a: "Notre saumon atlantique est rigoureusement sélectionné pour sa fraîcheur et sa haute teneur en oméga-3. Chaque pièce est réceptionnée sous contrôle strict de température, désarêtée à la main et découpée minute en dés généreux chaque matin directement dans notre restaurant à Visé."
	},
	{
		q: "Proposez-vous des options végétariennes ou adaptées aux intolérances ?",
		a: "Oui, totalement ! Dans notre menu ainsi que dans notre atelier 'Sur-Mesure', vous pouvez composer un bowl 100% végétarien ou sans gluten en choisissant parmi nos bases de riz sushi, nos légumes croquants (avocat, edamame, mangue, concombre, carottes) et nos sauces soja naturellement sans lactose."
	},
	{
		q: "Qu'est-ce qui différencie votre riz à sushi du riz ordinaire ?",
		a: "Le secret d'un véritable poké bowl réside dans son riz. Nous utilisons un riz japonais à grain rond cuit avec une précision millimétrée, puis assaisonné tiède avec notre vinaigre de riz signature. Il n'est jamais sec ni compact : il reste aéré, fondant et subtilement parfumé."
	},
	{
		q: "Comment fonctionne le Click & Collect sans file d'attente à Visé ?",
		a: "C'est ultra-simple et rapide : vous passez votre commande directement sur notre site, vous choisissez vos plats et toppings, et votre commande est préparée en 15 à 20 minutes. À votre arrivée au restaurant (12 Avenue du Pont), votre commande vous attend scellée sans attente !"
	},
	{
		q: "Qu'est-ce qui est inclus dans la formule Crousty Chicken à 11 € ?",
		a: "Notre formule chaude star comprend une portion généreuse de morceaux de poulet croustillant dorés, servis sur riz chaud avec sauce curry douce ou sauce blanche maison, oignons frits croquants, ainsi qu'une canette 33cl bien fraîche au choix (Coca, Fanta, Ice Tea ou eau minérale)."
	}
];
function FaqNutritionSection() {
	const [openIdx, setOpenIdx] = import_react.useState(0);
	const toggle = (idx) => {
		setOpenIdx((prev) => prev === idx ? null : idx);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"aria-label": "Foire aux questions Poke N Bowl Visé",
		className: "bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-b border-[#E2D6C5]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5 text-[#ff705f]" }), "Questions Fréquentes & Rassurance"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#2C1D16]",
						children: "Tout ce que vous voulez savoir"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs sm:text-sm text-[#766358] font-medium",
						children: "Des réponses claires et transparentes sur nos produits, nos ingrédients et notre service."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3.5",
				children: FAQ_ITEMS.map((item, idx) => {
					const isOpen = openIdx === idx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-[#E2D6C5] bg-white transition shadow-sm hover:border-[#D4BF9E]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(idx),
							className: "flex w-full items-center justify-between p-5 sm:p-6 text-left transition",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm sm:text-base font-black text-[#2C1D16] pr-4",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3ECE1] text-[#2C1D16] transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#ff705f] text-white" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-[#5F4E44] border-t border-[#F3ECE1] pt-4 font-medium",
							children: item.a
						})]
					}, idx);
				})
			})]
		})
	});
}
//#endregion
export { FaqNutritionSection as n, FAQ_ITEMS as t };
