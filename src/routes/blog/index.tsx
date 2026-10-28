import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Tag,
  Search,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { BLOG_ARTICLES, type BlogArticle } from "@/data/blogArticles";

const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Le Mag Poké · Poke N Bowl Visé",
  "description": "Guides nutrition, astuces bien-manger et recettes autour du Poké Bowl frais et de la cuisine saine à Visé en Belgique.",
  "url": "https://pokenbowl.be/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Poke N Bowl Visé",
    "url": "https://pokenbowl.be",
  },
  "blogPost": BLOG_ARTICLES.map((article) => ({
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.isoDate,
    "url": `https://pokenbowl.be/blog/${article.slug}`,
    "author": {
      "@type": "Person",
      "name": article.author.name,
    },
  })),
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Le Mag Poké · Articles, Guides & Nutrition | Poke N Bowl Visé" },
      {
        name: "description",
        content:
          "Découvrez nos articles et guides exclusifs : composition d'un poké bowl équilibré, bienfaits du saumon et de l'avocat, comparatif chirashi vs poké, et livraison à Visé.",
      },
      { property: "og:title", content: "Le Mag Poké · Poke N Bowl Visé" },
      {
        property: "og:description",
        content: "Astuces nutrition, recettes et actualités saines et gourmandes à Visé.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pokenbowl.be/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(BLOG_SCHEMA),
      },
    ],
  }),
  component: BlogHubPage,
});

function BlogHubPage() {
  const { items, setIsCartOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Tous");
  const [searchFilter, setSearchFilter] = React.useState<string>("");

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    "Tous",
    "Nutrition & Santé",
    "Guides & Visé",
    "Recettes & Savoir-Faire",
    "Tendances Poké",
  ];

  const filteredArticles = React.useMemo(() => {
    return BLOG_ARTICLES.filter((art) => {
      const matchCat =
        selectedCategory === "Tous" || art.category === selectedCategory;
      const matchSearch =
        searchFilter.trim() === "" ||
        art.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        art.deck.toLowerCase().includes(searchFilter.toLowerCase()) ||
        art.seoKeywords.some((k) =>
          k.toLowerCase().includes(searchFilter.toLowerCase())
        );
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchFilter]);

  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1D16]">
      <CartDrawer />

      {/* ── HEADER NAVBAR ── */}
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
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2C1D16] hover:text-[#ff705f] transition"
            >
              <ArrowLeft className="h-4 w-4" /> La Carte
            </Link>

            <Link
              to="/commander"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#FAF4EB] shadow-sm hover:bg-[#8D522A] transition"
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

      {/* ── HERO MAGAZINE HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF4EB] to-[#FAF6F0] pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E2D6C5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1D16] border border-[#D9C5AD]">
              <Sparkles className="h-3.5 w-3.5 text-[#ff705f]" />
              Le Mag Poké · Inspirations & Bien-Manger
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2C1D16] leading-tight">
              Manger sain, vivre gourmand
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#766358] font-medium leading-relaxed max-w-2xl mx-auto">
              Retrouvez nos guides nutritionnels, les secrets de fabrication de nos bols frais du jour à Visé, et nos conseils pour équilibrer vos repas sans aucune frustration.
            </p>

            {/* Barre de recherche */}
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#766358]" />
              <input
                type="text"
                placeholder="Rechercher un sujet (ex: saumon, calories, chirashi, visé)..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full rounded-full border border-[#D9C5AD] bg-white py-3 pl-11 pr-4 text-xs sm:text-sm font-medium text-[#2C1D16] placeholder-[#A49286] focus:border-[#ff705f] focus:outline-none focus:ring-2 focus:ring-[#ff705f]/20 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE À LA UNE (FEATURED STORY) ── */}
      {selectedCategory === "Tous" && searchFilter === "" && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <Link
            to="/blog/$slug"
            params={{ slug: featuredArticle.slug }}
            className="group block overflow-hidden rounded-[32px] border border-[#E2D6C5] bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="relative min-h-[280px] sm:min-h-[380px] lg:col-span-7 overflow-hidden bg-black/5">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-[#2C1D16] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#EADCC9] shadow-md">
                    ★ À la Une
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-white to-[#FAF6F0]">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#766358]">
                    <span className="rounded-full bg-[#EADCC9] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#2C1D16]">
                      {featuredArticle.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#ff705f]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition leading-snug">
                    {featuredArticle.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-[#766358] font-medium leading-relaxed line-clamp-3">
                    {featuredArticle.deck}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2D6C5] flex items-center justify-between">
                  <div className="text-xs font-bold text-[#2C1D16]">
                    <span>Par {featuredArticle.author.name}</span>
                    <span className="block text-[10px] text-[#766358] font-normal">
                      Publié le {featuredArticle.date}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition">
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── FILTRES PAR CATÉGORIES ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${
                  isActive
                    ? "bg-[#2C1D16] text-[#FAF4EB] shadow-md"
                    : "bg-[#F3ECE1] text-[#766358] hover:bg-[#EADCC9] hover:text-[#2C1D16] border border-[#E2D6C5]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── GRILLE DES ARTICLES ── */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E2D6C5] p-8 max-w-md mx-auto">
            <BookOpen className="h-10 w-10 text-[#A49286] mx-auto" />
            <h3 className="mt-3 text-lg font-bold text-[#2C1D16]">
              Aucun article ne correspond à votre recherche
            </h3>
            <p className="mt-1 text-xs text-[#766358]">
              Essayez un autre mot-clé ou réinitialisez les filtres.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tous");
                setSearchFilter("");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-4 py-2 text-xs font-bold text-white hover:bg-[#8D522A]"
            >
              Réinitialiser
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((art) => (
              <Link
                key={art.slug}
                to="/blog/$slug"
                params={{ slug: art.slug }}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#E2D6C5] bg-white shadow-card transition hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div>
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-black/5">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#FAF4EB]/95 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-wider text-[#2C1D16] border border-[#D9C5AD] shadow-sm">
                        {art.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#766358]">
                      <Clock className="h-3.5 w-3.5 text-[#ff705f]" />
                      <span>{art.readTime}</span>
                      <span>·</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="mt-2.5 text-lg sm:text-xl font-black text-[#2C1D16] group-hover:text-[#ff705f] transition leading-snug">
                      {art.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#766358] font-medium leading-relaxed line-clamp-3">
                      {art.deck}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E2D6C5]/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#2C1D16]">
                    Par {art.author.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff705f] group-hover:translate-x-1 transition">
                    Lire →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* ── BANNIÈRE CONVERSION VERS COMMANDE ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="overflow-hidden rounded-[34px] bg-[#2C1D16] text-[#FAF4EB] p-8 sm:p-12 relative shadow-lift border border-white/10">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#2C1D16]">
              🥢 Passez à la pratique
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight text-white">
              Une envie de Poké frais à Visé ?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#EADCC9]/80 font-medium leading-relaxed">
              Commandez votre bowl favori en 3 clics ou composez votre recette personnalisée avec notre sélection de saumon découpé minute, scampis grillés et légumes de saison.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/commander"
                className="inline-flex items-center gap-2 rounded-full bg-[#EADCC9] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#2C1D16] shadow-md hover:bg-white hover:scale-105 transition"
              >
                <span>Commander maintenant</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sur-mesure"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition border border-white/20"
              >
                Composer son bowl
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ÉDITORIAL ── */}
      <footer className="bg-[#1C120C] px-4 py-12 text-[#EADCC9] sm:px-6 lg:px-8 border-t border-[#352117]">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <BrandLogo size="md" />
          </Link>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-[#EADCC9]/70">
            <Link to="/" className="hover:text-white transition">La Carte</Link>
            <Link to="/commander" className="hover:text-white transition">Commander</Link>
            <Link to="/blog" className="hover:text-white text-[#ff705f] transition">Le Mag Poké</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/recrutement" className="hover:text-white transition">Recrutement</Link>
          </div>
          <div className="text-[11px] text-[#EADCC9]/40">
            © {new Date().getFullYear()} Poke N Bowl Visé · Tous droits réservés ·{" "}
            <a
              href="https://xragencyai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 transition"
            >
              Site créé par xragencyai.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
