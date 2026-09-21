import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, PhoneCall, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Nous contacter — Poke N Bowl Visé" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Poke N Bowl — Accueil">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5">
              <img src={logo} alt="Logo Poke N Bowl" className="h-full w-full object-contain" />
            </span>
            <span className="truncate text-base font-black">Poke N Bowl</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft className="h-4 w-4" /> Accueil</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-coral">Contact</p>
          <h1 className="mt-3 break-words text-5xl font-black leading-[.96] tracking-[-0.035em] md:text-7xl">On se parle ?</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Une question, une commande ou une demande particulière ? Retrouve-nous à Visé ou appelle directement l’équipe.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <a href="tel:+32491281456" className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <PhoneCall className="h-6 w-6 text-coral" /><p className="mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground">Téléphone</p><p className="mt-2 text-xl font-black">+32 491 28 14 56</p>
          </a>
          <a href="https://maps.app.goo.gl/TkddDsG9pwYb62558" target="_blank" rel="noreferrer" className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <MapPin className="h-6 w-6 text-coral" /><p className="mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground">Adresse</p><p className="mt-2 text-xl font-black">Av. du Pont 12</p><p className="text-muted-foreground">4600 Visé, Belgique</p>
          </a>
          <a href="https://www.poke-n-bowl.be/" target="_blank" rel="noreferrer" className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <ShoppingBag className="h-6 w-6 text-coral" /><p className="mt-5 text-xs font-black uppercase tracking-widest text-muted-foreground">Commande</p><p className="mt-2 text-xl font-black">Commander en ligne</p><p className="text-muted-foreground">Compose ton bowl</p>
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-border shadow-lift">
          <iframe title="Poke N Bowl Visé" src="https://www.google.com/maps?q=Poke+N+Bowl,+Avenue+du+Pont+12,+4600+Vis%C3%A9&output=embed" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border:0}} />
        </div>
      </main>
    </div>
  );
}
