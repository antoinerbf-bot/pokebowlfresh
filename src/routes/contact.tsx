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
            Une question, une commande ou une demande particulière ? Retrouvez-nous dans notre restaurant à Visé ou contactez notre équipe par téléphone.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Restaurant Visé */}
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-8 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7ff45] text-black font-black">📍</span>
                <div>
                  <h2 className="text-2xl font-black text-[#10251f]">Poké & Bowl Visé</h2>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Centre-ville Visé · Av. du Pont</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <a
                  href="https://maps.app.goo.gl/TkddDsG9pwYb62558"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-2xl bg-muted/50 p-4 transition hover:bg-muted"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-[#ff705f] mt-0.5" />
                  <div>
                    <p className="font-bold text-[#10251f]">Avenue du Pont 12</p>
                    <p className="text-sm text-muted-foreground">4600 Visé, Belgique</p>
                  </div>
                </a>
                <a
                  href="tel:+32491281456"
                  className="flex items-center gap-3 rounded-2xl bg-muted/50 p-4 transition hover:bg-muted"
                >
                  <PhoneCall className="h-5 w-5 shrink-0 text-[#ff705f]" />
                  <div>
                    <p className="text-xs text-muted-foreground font-bold">Téléphone direct</p>
                    <span className="font-bold text-base text-[#10251f]">0491 28 14 56 (+32)</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-bold text-[#10251f]">🛵 Livraison & À emporter</span>
              <a href="https://instagram.com/POKE_NBOWL" target="_blank" rel="noreferrer" className="text-[#ff705f] font-black hover:underline">
                @POKE_NBOWL
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Visé */}
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft h-[360px] sm:h-[400px]">
            <iframe
              title="Carte Google Maps Poké N Bowl Visé"
              src="https://maps.google.com/maps?q=Poke%20N%20Bowl%20Vis%C3%A9%20Avenue%20du%20Pont%2012%204600%20Vis%C3%A9&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
