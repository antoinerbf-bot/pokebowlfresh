import { a as bowls } from "./_ssr/data-CpXeHGGg.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-SdLGxITW.js
var $$splitComponentImporter = () => import("./_productId-CFep7dCp.mjs");
var Route = createFileRoute("/product/$productId")({
	head: ({ params }) => {
		const dish = bowls.find((b) => b.id === params.productId || params.productId === "crousty-mix" && b.id === "crousty-chicken-mix");
		if (!dish) return { meta: [{ title: "Produit — Poke N Bowl Visé" }] };
		const title = `${dish.name} | Poke N Bowl Visé — Fait Minute`;
		const desc = `${dish.name} chez Poke N Bowl à Visé : ${dish.description}. Prix : ${dish.price.toFixed(2)} €. Commandez en ligne à emporter ou en livraison rapide.`;
		const PRODUCT_SCHEMA = {
			"@context": "https://schema.org",
			"@type": "Product",
			name: dish.name,
			image: dish.image ? `https://pokenbowl.be${dish.image}` : "https://pokenbowl.be/assets/hero-saumon-clean-wide.jpg",
			description: dish.description,
			brand: {
				"@type": "Brand",
				name: "Poke N Bowl Visé"
			},
			offers: {
				"@type": "Offer",
				price: dish.price.toFixed(2),
				priceCurrency: "EUR",
				availability: "https://schema.org/InStock",
				url: `https://pokenbowl.be/product/${params.productId}`
			}
		};
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: `https://pokenbowl.be/product/${params.productId}`
				},
				...dish.image ? [{
					property: "og:image",
					content: `https://pokenbowl.be${dish.image}`
				}] : []
			],
			links: [{
				rel: "canonical",
				href: `https://pokenbowl.be/product/${params.productId}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(PRODUCT_SCHEMA)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
