import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, PhoneCall, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";
import { BrandLogo } from "@/components/BrandLogo";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center transition hover:opacity-95 hover:scale-[1.02] duration-200" aria-label="Poke N Bowl — Accueil">
            <BrandLogo size="md" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold">
            <ArrowLeft className="h-4 w-4" /> Accueil
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-coral">Contact</p>
          <h1 className="mt-3 break-words text-5xl font-black leading-[1.1] tracking-[-0.02em] md:text-7xl">
            On se parle ?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Une question, une commande ou une demande particulière ? Retrouvez-nous dans nos restaurants à Visé et Fléron ou contactez nos équipes par téléphone.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Restaurant Visé */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7ff45] text-black font-black">1</span>
              <div>
                <h2 className="text-xl font-black">Poké & Bowl Visé</h2>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Centre-ville Visé</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <a
                href="https://maps.app.goo.gl/TkddDsG9pwYb62558"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 transition hover:bg-muted"
              >
                <MapPin className="h-5 w-5 shrink-0 text-coral" />
                <div>
                  <p className="font-bold">Avenue du Pont 12</p>
                  <p className="text-sm text-muted-foreground">4600 Visé, Belgique</p>
                </div>
              </a>
              <a
                href="tel:+32491281456"
                className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 transition hover:bg-muted"
              >
                <PhoneCall className="h-5 w-5 shrink-0 text-coral" />
                <span className="font-bold">0491 28 14 56 (+32)</span>
              </a>
            </div>
          </div>

          {/* Restaurant Fléron */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff705f] text-white font-black">2</span>
              <div>
                <h2 className="text-xl font-black">Poké & Bowl Fléron</h2>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Avenue des Martyrs</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <a
                href="https://www.google.com/maps?q=Avenue+des+Martyrs+307,+4620+Fl%C3%A9ron"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 transition hover:bg-muted"
              >
                <MapPin className="h-5 w-5 shrink-0 text-coral" />
                <div>
                  <p className="font-bold">Avenue des Martyrs 307</p>
                  <p className="text-sm text-muted-foreground">4620 Fléron, Belgique</p>
                </div>
              </a>
              <a
                href="tel:+32493423643"
                className="flex items-center gap-3 rounded-xl bg-muted/50 p-3 transition hover:bg-muted"
              >
                <PhoneCall className="h-5 w-5 shrink-0 text-coral" />
                <span className="font-bold">0493 42 36 43 (+32)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/commander"
            className="flex items-center gap-2 rounded-2xl bg-[#ff705f] px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5" />
            Commander en ligne
          </Link>
          <a
            href="https://instagram.com/POKE_NBOWL"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3.5 text-sm font-black transition hover:bg-muted"
          >
            Instagram: @POKE_NBOWL
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-border shadow-lift">
          <iframe
            title="Poke N Bowl Visé"
            src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </main>
    </div>
  );
}
