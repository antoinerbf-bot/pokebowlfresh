import * as React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  ShoppingBag,
  Sparkles,
  ChevronRight,
  ChefHat,
  Plus,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { BLOG_ARTICLES, type BlogArticle } from "@/data/blogArticles";
import { bowls } from "@/lib/data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
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
        "name": article.author.name,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Poke N Bowl Visé",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pokenbowl.be/assets/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://pokenbowl.be/blog/${article.slug}`,
      },
    };

    const BREADCRUMB_SCHEMA = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://pokenbowl.be",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Le Mag Poké",
          "item": "https://pokenbowl.be/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": article.title,
          "item": `https://pokenbowl.be/blog/${article.slug}`,
        },
      ],
    };

    return {
      meta: [
        { title: `${article.title} — Le Mag Poke N Bowl Visé` },
        { name: "description", content: article.summary },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.summary },
        { property: "og:image", content: article.image.startsWith("http") ? article.image : `https://pokenbowl.be${article.image.startsWith("/") ? "" : "/"}${article.image}` },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://pokenbowl.be/blog/${article.slug}` },
        { name: "keywords", content: article.seoKeywords.join(", ") },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(ARTICLE_SCHEMA),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(BREADCRUMB_SCHEMA),
        },
      ],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { article } = Route.useLoaderData();
  const { items, addItem, setIsCartOpen } = useCart();
  const [copiedLink, setCopiedLink] = React.useState(false);
  const [addedNotice, setAddedNotice] = React.useState(false);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Articles suggérés
  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.slug !== article.slug
  ).slice(0, 3);

  // Recherche du bol recommandé si présent
  const recommendedDishData = React.useMemo(() => {
    if (!article.recommendedDish) return null;
    const found = bowls.find((b) => b.id === article.recommendedDish?.id);
    return found || null;
  }, [article.recommendedDish]);

  const handleCopyShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleQuickAddRecommended = () => {
    if (!article.recommendedDish) return;
    addItem({
      id: `${article.recommendedDish.id}-blog`,
      name: article.recommendedDish.name,
      basePrice: article.recommendedDish.price,
      price: article.recommendedDish.price,
      quantity: 1,
      toppings: [],
      removedIngredients: [],
      image: article.image,
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1D16]">
      <CartDrawer />

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 border-b border-[#E2D6C5] bg-[#FAF4EB]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 transition hover:scale-[1.02] duration-200"
            aria-label="Poke N Bowl Accueil"
          >
            <BrandLogo size="md" />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] transition"
            >
              <ArrowLeft className="h-4 w-4" /> Le Mag Poké
            </Link>

            <Link
              to="/commander"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FAF4EB] shadow-sm hover:bg-[#8D522A] transition"
            >
              Commander
            </Link>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Panier"
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
            >
              <ShoppingBag className="h-4 w-4 text-[#2C1D16]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black text-white shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-[#E2D6C5]/60 bg-[#FAF4EB]/50 py-3">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[11px] font-semibold text-[#766358]">
            <Link to="/" className="hover:text-[#2C1D16] transition">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-[#2C1D16] transition">
              Le Mag Poké
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#2C1D16] font-bold truncate max-w-[220px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ── CORPS DE L'ARTICLE ── */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14">
        <article>
          {/* Header & Badges */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-[#EADCC9] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD]">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#766358]">
                <Clock className="h-3.5 w-3.5 text-[#ff705f]" />
                {article.readTime}
              </span>
              <span className="text-[#A49286]">·</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#766358]">
                <Calendar className="h-3.5 w-3.5 text-[#766358]" />
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2C1D16] leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#766358] leading-relaxed border-l-4 border-[#ff705f] pl-4 py-1 italic bg-[#F3ECE1]/40 rounded-r-2xl">
              {article.deck}
            </p>

            {/* Auteur & Partage */}
            <div className="flex items-center justify-between border-y border-[#E2D6C5] py-4 my-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C1D16] text-white font-black text-sm shadow-sm">
                  🥗
                </div>
                <div>
                  <span className="block text-xs font-black text-[#2C1D16]">
                    {article.author.name}
                  </span>
                  <span className="block text-[11px] text-[#766358] font-medium">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyShare}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#D9C5AD] bg-white px-3.5 py-1.5 text-xs font-bold text-[#2C1D16] hover:bg-[#F3ECE1] transition shadow-sm"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[3]" />
                    <span>Lien copié !</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-[#766358]" />
                    <span>Partager</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Image Principale */}
          <div className="my-8 overflow-hidden rounded-[32px] border border-[#E2D6C5] shadow-lift bg-black/5">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
            <div className="bg-[#FAF4EB] p-3 text-center text-[11px] font-medium text-[#766358] border-t border-[#E2D6C5]">
              Préparation minute dans notre restaurant Poke N Bowl à Visé · Saumon noble et ingrédients frais.
            </div>
          </div>

          {/* Contenu Éditorial Structuré */}
          <div
            className="prose prose-lg max-w-none text-[#2C1D16]
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-[#2C1D16]
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-[#4A3B32] prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
              prose-ul:my-6 prose-li:my-2 prose-li:text-[#4A3B32]
              prose-blockquote:border-l-4 prose-blockquote:border-[#ff705f] prose-blockquote:bg-[#FFF7EC] prose-blockquote:p-4 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-[#2C1D16]
              prose-strong:text-[#2C1D16] prose-strong:font-black"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* ── CARTE PLAT RECOMMANDÉ (HIGH CONVERSION) ── */}
          {article.recommendedDish && (
            <div className="my-12 overflow-hidden rounded-[28px] border-2 border-[#ff705f]/30 bg-gradient-to-br from-[#FFF7EC] to-[#FAF4EB] p-6 sm:p-8 shadow-card">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff705f] text-white text-2xl shadow-md">
                    🥢
                  </div>
                  <div>
                    <span className="rounded-full bg-[#ff705f]/15 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#ff705f]">
                      {article.recommendedDish.badge}
                    </span>
                    <h3 className="mt-1 text-xl font-black text-[#2C1D16]">
                      {article.recommendedDish.name}
                    </h3>
                    <p className="text-xs text-[#766358] font-medium">
                      Disponible dès maintenant en retrait express ou livraison à Visé.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xl font-black text-[#2C1D16]">
                    {article.recommendedDish.price.toFixed(2)} €
                  </span>
                  <button
                    type="button"
                    onClick={handleQuickAddRecommended}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-5 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-[#8D522A] hover:scale-105 transition shadow-md"
                  >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Commander ce bol</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mots-clés SEO */}
          <div className="mt-10 pt-6 border-t border-[#E2D6C5]">
            <span className="text-xs font-bold text-[#766358] uppercase tracking-wider block mb-2">
              Thématiques abordées :
            </span>
            <div className="flex flex-wrap gap-2">
              {article.seoKeywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-[#F3ECE1] border border-[#E2D6C5] px-3 py-1 text-[11px] font-semibold text-[#766358]"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* ── ARTICLES CONNEXES ── */}
        <section className="mt-16 pt-12 border-t border-[#E2D6C5]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-[#2C1D16]">
              À lire également sur Le Mag Poké
            </h2>
            <Link
              to="/blog"
              className="text-xs font-black uppercase tracking-wider text-[#ff705f] hover:underline"
            >
              Tous les articles →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to="/blog/$slug"
                params={{ slug: rel.slug }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2D6C5] bg-white shadow-sm hover:shadow-md transition hover:-translate-y-1"
              >
                <div>
                  <div className="h-36 w-full overflow-hidden bg-black/5">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-[#766358]">
                      {rel.category} · {rel.readTime}
                    </span>
                    <h3 className="mt-1 text-sm font-black text-[#2C1D16] group-hover:text-[#ff705f] transition line-clamp-2">
                      {rel.title}
                    </h3>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1 text-[11px] font-bold text-[#ff705f]">
                  Lire →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C120C] px-4 py-12 text-[#EADCC9] sm:px-6 lg:px-8 border-t border-[#352117] mt-16">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo size="md" />
          </Link>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#EADCC9]/70">
            <Link to="/" className="hover:text-white transition">La Carte</Link>
            <Link to="/commander" className="hover:text-white transition">Commander</Link>
            <Link to="/blog" className="hover:text-white text-[#ff705f] transition">Le Mag Poké</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
          <div className="text-[11px] text-[#EADCC9]/40">
            © {new Date().getFullYear()} Poke N Bowl Visé · Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
