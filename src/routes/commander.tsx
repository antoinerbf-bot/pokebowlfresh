import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import dessert from "@/assets/dessert.jpg";
import { bowls, drinks, desserts } from "../lib/data";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "../components/CartDrawer";

export const Route = createFileRoute("/commander")({ component: CommanderPage });

function CommanderPage() {
  const { addItem, setIsCartOpen, items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const quickAdd = (item: any) => {
    addItem({ id: item.id, name: item.name, price: item.price, quantity: 1, toppings: [], image: item.image || dessert });
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <CartDrawer />
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Poke N Bowl" className="h-11 w-11 object-contain" />
            <span className="font-black tracking-tight">Poke N Bowl</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider sm:flex">
              Accueil
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="relative rounded-full bg-[#10251f] p-3 text-white">
              <ShoppingBag className="h-4 w-4" />
              {count > 0 && <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff705f] text-[9px] font-black">{count}</span>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-[#10251f] px-5 py-16 text-white sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
            </Link>
            <div className="mt-10 max-w-4xl">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d7ff45]">Commande Poke N Bowl</p>
              <h1 className="mt-3 text-5xl font-black tracking-[-0.06em] sm:text-7xl">
                Tout le menu.<br /><span className="text-white/35">À toi de composer.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
                Choisis un bowl, personnalise-le, ajoute une boisson ou un dessert, puis retrouve tout dans ton panier. Plus besoin de passer par une plateforme intermédiaire.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                <span>9 bowls</span><span>·</span><span>Personnalisation</span><span>·</span><span>Panier</span><span>·</span><span>Commande</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ff705f]">Les bowls</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Choisis ton bowl.</h2>
            </div>
            <span className="hidden text-sm text-[#7a847e] sm:block">Clique sur une recette pour la composer</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bowls.map((bowl, i) => (
              <motion.div key={bowl.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_-38px_rgba(0,0,0,.4)]">
                <Link to="/product/$productId" params={{ productId: bowl.id }} className="group block">
                  <div className="relative aspect-[1.12] overflow-hidden">
                    <img src={bowl.image} alt={bowl.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider">{bowl.tag}</span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-[#d7ff45] px-3 py-1.5 text-sm font-black">€ {bowl.price.toFixed(2)}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-black">{bowl.name}</h3>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1ea] group-hover:bg-[#ff705f] group-hover:text-white"><ArrowRight className="h-4 w-4" /></span>
                    </div>
                    <p className="mt-2 line-clamp-3 text-sm leading-5 text-[#758079]">{bowl.desc}</p>
                    <div className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-[#ff705f]">Composer ce bowl →</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="h-5 w-5 text-[#ff705f]" />
                <h2 className="text-2xl font-black">Boissons</h2>
              </div>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {drinks.map((drink) => (
                  <button key={drink.id} onClick={() => quickAdd(drink)} className="flex items-center justify-between rounded-2xl bg-[#f5f4ee] px-4 py-3 text-left hover:bg-[#d7ff45]">
                    <span className="text-sm font-bold">{drink.name}</span><span className="text-xs font-black">€ {drink.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] bg-[#ff705f] p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black">Desserts maison</h2>
              <div className="mt-6 flex flex-col gap-5 sm:flex-row">
                <img src={dessert} alt="Dessert maison" className="h-28 w-full rounded-2xl object-cover sm:w-28" />
                <div className="flex-1">
                  <div className="space-y-2">
                    {desserts.map((d) => <button key={d.id} onClick={() => quickAdd(d)} className="flex w-full items-center justify-between rounded-xl bg-white/10 px-3 py-2 text-left text-sm hover:bg-white/20"><span>{d.name}</span><span className="font-black">€ {d.price.toFixed(2)}</span></button>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
