import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Store, CreditCard, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import { getOrderStatus } from "../server/checkout";
import { useCart } from "../context/CartContext";

type Search = {
  orderId?: string;
  method?: string;
};

export const Route = createFileRoute("/order/success")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    orderId: typeof search.orderId === "string" ? search.orderId : undefined,
    method: typeof search.method === "string" ? search.method : undefined,
  }),
  component: OrderSuccessPage,
});

function OrderSuccessPage() {
  const { orderId, method } = Route.useSearch();
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<{
    id: string;
    status: string;
    paymentMethod: string;
    total: number;
    customer: { name: string; phone: string; pickupTime: string; notes?: string };
    items: { name: string; quantity: number; price: number; toppings: string[] }[];
  } | null>(null);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await getOrderStatus({ data: { orderId } });
        if (!cancelled && res.found) {
          setOrder(res.order);
          if (res.order.status === "paid" || res.order.paymentMethod === "on_site") {
            clearCart();
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [orderId, clearCart]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f4ec]">
        <Loader2 className="h-8 w-8 animate-spin text-[#ff705f]" />
      </div>
    );
  }

  const isPaid = order?.status === "paid";
  const isOnSite =
    order?.paymentMethod === "on_site" || method === "on_site";
  const isPending = order?.status === "pending_payment";
  const isFailed =
    order?.status === "cancelled" || order?.status === "expired";

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <header className="border-b border-black/5 bg-[#f7f4ec]/90">
        <nav className="mx-auto flex max-w-[700px] items-center px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </span>
            <span className="text-base font-black">Poke N Bowl</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-[700px] px-5 py-12 sm:px-8">
        {!orderId || !order ? (
          <div className="text-center">
            <h1 className="text-3xl font-black">Commande introuvable</h1>
            <Link
              to="/commander"
              className="mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white"
            >
              Retour à la carte
            </Link>
          </div>
        ) : isFailed ? (
          <div className="rounded-[28px] bg-white p-8 text-center shadow-lg">
            <h1 className="text-3xl font-black">Paiement non finalisé</h1>
            <p className="mt-3 text-[#758079]">
              Le paiement a été annulé ou a expiré. Tu peux réessayer depuis le panier.
            </p>
            <Link
              to="/checkout"
              className="mt-6 inline-block rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white"
            >
              Réessayer
            </Link>
          </div>
        ) : isPending ? (
          <div className="rounded-[28px] bg-white p-8 text-center shadow-lg">
            <Clock className="mx-auto h-12 w-12 text-[#ff705f]" />
            <h1 className="mt-4 text-3xl font-black">Paiement en cours…</h1>
            <p className="mt-3 text-[#758079]">
              Si tu as payé, cette page se mettra à jour. Sinon, retourne sur Mollie ou
              choisis « Payer sur place ».
            </p>
            <p className="mt-4 font-mono text-sm font-bold">{order.id}</p>
          </div>
        ) : (
          <div className="rounded-[28px] bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-14 w-14 text-[#d7ff45]" />
              <h1 className="mt-4 text-3xl font-black sm:text-4xl">
                {isPaid ? "Commande payée !" : "Commande confirmée !"}
              </h1>
              <p className="mt-2 text-[#758079]">
                Merci {order.customer.name}. On prépare ton bowl pour{" "}
                <strong>{order.customer.pickupTime}</strong>.
              </p>
              <p className="mt-4 rounded-full bg-[#f7f4ec] px-4 py-2 font-mono text-sm font-black">
                {order.id}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-black/5 pt-6">
              <div className="flex items-center gap-2 text-sm">
                {isOnSite && !isPaid ? (
                  <>
                    <Store className="h-4 w-4 text-[#ff705f]" />
                    <span>
                      <strong>Payer sur place</strong> à la récupération — €{" "}
                      {order.total.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 text-[#ff705f]" />
                    <span>
                      <strong>Payé en ligne</strong> — € {order.total.toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {order.items.map((item, i) => (
                  <li key={i} className="flex justify-between gap-3">
                    <span>
                      {item.quantity}× {item.name}
                      {item.toppings.length > 0 && (
                        <span className="block text-xs text-[#7a847e]">
                          {item.toppings.join(", ")}
                        </span>
                      )}
                    </span>
                    <span className="font-bold">
                      € {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="rounded-full bg-[#10251f] px-6 py-3 text-center text-sm font-black text-white"
              >
                Retour à l'accueil
              </Link>
              <Link
                to="/commander"
                className="rounded-full bg-[#ff705f] px-6 py-3 text-center text-sm font-black text-white"
              >
                Commander encore
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
