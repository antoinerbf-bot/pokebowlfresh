import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BriefcaseBusiness, MapPin, PhoneCall } from "lucide-react";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/recrutement")({
  head: () => ({ meta: [{ title: "Recrutement — Poke N Bowl Visé" }] }),
  component: RecruitmentPage,
});

function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-3"><img src={logo} alt="Poke N Bowl" className="h-10 w-10" /><span className="font-display text-lg font-black">Poke N Bowl</span></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft className="h-4 w-4" /> Accueil</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,oklch(0.24_0.045_195),oklch(0.38_0.08_175))] p-8 text-white shadow-lift md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest"><BriefcaseBusiness className="h-4 w-4" /> On recrute</span>
            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">Rejoins l’aventure Poke N Bowl.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Nous cherchons des personnes énergiques, fiables et souriantes pour faire vivre l’expérience Poke N Bowl à Visé.</p>
          </div>
        </section>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft"><MapPin className="h-6 w-6 text-coral" /><h2 className="mt-5 text-xl font-black">À Visé</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Av. du Pont 12, 4600 Visé, Belgique.</p></div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft"><PhoneCall className="h-6 w-6 text-coral" /><h2 className="mt-5 text-xl font-black">Un premier contact</h2><a href="tel:+32491281456" className="mt-2 inline-block text-sm font-bold hover:text-coral">+32 491 28 14 56</a></div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft"><BriefcaseBusiness className="h-6 w-6 text-coral" /><h2 className="mt-5 text-xl font-black">Candidature</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">CV + quelques lignes sur toi pour commencer l’échange.</p></div>
        </div>
        <section className="mt-10 rounded-3xl border border-coral/20 bg-coral/5 p-8 md:p-10">
          <h2 className="text-2xl font-black">Envoyer ma candidature</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Envoie ton CV et quelques lignes sur toi directement à notre équipe.</p>
          <a href="mailto:pokenbowl1@gmail.com?subject=Candidature%20—%20Poke%20N%20Bowl" className="mt-6 inline-flex rounded-full bg-coral px-6 py-3 font-black text-white shadow-lift transition hover:scale-105">
            pokenbowl1@gmail.com
          </a>
        </section>
      </main>
    </div>
  );
}
