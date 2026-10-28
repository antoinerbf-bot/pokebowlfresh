import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as BLOG_ARTICLES } from "./_ssr/blogArticles-c53_F7bu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-COBSuIzm.js
var $$splitComponentImporter = () => import("./_slug-Deu1c_yZ.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData }) => {
		const article = loaderData?.article;
		if (!article) return {};
		const ARTICLE_SCHEMA = {
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": article.title,
			"description": article.summary,
			"image": `https://pokenbowl.be${article.image}`,
			"datePublished": article.isoDate,
			"dateModified": article.isoDate,
			"author": {
				"@type": "Person",
				"name": article.author.name
			},
			"publisher": {
				"@type": "Organization",
				"name": "Poke N Bowl Visé",
				"logo": {
					"@type": "ImageObject",
					"url": "https://pokenbowl.be/assets/logo.png"
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": `https://pokenbowl.be/blog/${article.slug}`
			}
		};
		const BREADCRUMB_SCHEMA = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Accueil",
					"item": "https://pokenbowl.be"
				},
				{
					"@type": "ListItem",
					"position": 2,
					"name": "Le Mag Poké",
					"item": "https://pokenbowl.be/blog"
				},
				{
					"@type": "ListItem",
					"position": 3,
					"name": article.title,
					"item": `https://pokenbowl.be/blog/${article.slug}`
				}
			]
		};
		return {
			meta: [
				{ title: `${article.title} — Le Mag Poke N Bowl Visé` },
				{
					name: "description",
					content: article.summary
				},
				{
					property: "og:title",
					content: article.title
				},
				{
					property: "og:description",
					content: article.summary
				},
				{
					property: "og:image",
					content: article.image.startsWith("http") ? article.image : `https://pokenbowl.be${article.image.startsWith("/") ? "" : "/"}${article.image}`
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `https://pokenbowl.be/blog/${article.slug}`
				},
				{
					name: "keywords",
					content: article.seoKeywords.join(", ")
				}
			],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(ARTICLE_SCHEMA)
			}, {
				type: "application/ld+json",
				children: JSON.stringify(BREADCRUMB_SCHEMA)
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
