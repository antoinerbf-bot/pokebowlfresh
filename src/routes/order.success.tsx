import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Store, CreditCard, Loader2, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import { BrandLogo } from "@/components/BrandLogo";
import { getOrderStatus } from "../fn/checkout";
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
    customer: { name: string; phone: string; fulfillment: "delivery" | "pickup"; requestedTime: string; address?: string; postalCode?: string; city?: string; deliveryFee?: number; notes?: string };
    items: { name: string; quantity: number; price: number; toppings: string[] }[];
  } | null>(null);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    let attempts = 0;
    const poll = async () => {
      let fetchedOrder: typeof order = null;

      // 1. Appel direct REST ultra-fiable /api/order-status
      try {
        const resRest = await fetch(`/api/order-status?orderId=${encodeURIComponent(orderId)}`, {
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (resRest.ok) {
          const data = await resRest.json();
          if (data.found && data.order) {
            fetchedOrder = data.order;
          }
        }
      } catch (err) {
        console.warn("[OrderSuccess] Erreur REST /api/order-status:", err);
      }

      // 2. Fallback REST via /api/track-order
      if (!fetchedOrder) {
        try {
          const resTrack = await fetch(`/api/track-order?token=${encodeURIComponent(orderId)}`, {
            headers: { Accept: "application/json" },
            cache: "no-store",
          });
          if (resTrack.ok) {
            const data = await resTrack.json();
            if (data.found && data.order) {
              fetchedOrder = {
                id: data.order.id,
                status: data.order.status,
                paymentMethod: data.order.paymentMethod,
                total: data.order.total,
                customer: {
                  name: data.order.customerName,
                  phone: data.order.customerPhone,
                  fulfillment: data.order.fulfillment,
                  requestedTime: data.order.requestedTime,
                  address: data.order.address,
                  postalCode: data.order.postalCode,
                  city: data.order.city,
                  deliveryFee: data.order.deliveryFee,
                  notes: data.order.notes,
                },
                items: (data.order.items || []).map((it: any) => ({
                  name: it.name,
                  quantity: it.quantity,
                  price: it.price || 0,
                  toppings: it.toppings || [],
                })),
              };
            }
          }
        } catch (err) {
          console.warn("[OrderSuccess] Erreur REST /api/track-order:", err);
        }
      }

      // 3. Fallback RPC createServerFn
      if (!fetchedOrder) {
        try {
          const res = await getOrderStatus({ data: { orderId } });
          if (res.found && res.order) {
            fetchedOrder = res.order;
          }
        } catch (e) {
          console.error("[OrderSuccess] Erreur RPC getOrderStatus:", e);
        }
      }

      if (!cancelled && fetchedOrder) {
        setOrder(fetchedOrder);
        if (fetchedOrder.status === "paid" || fetchedOrder.paymentMethod === "on_site") {
          clearCart();
        }
        if (fetchedOrder.status !== "pending_payment") {
          setLoading(false);
          return;
        }
      }

      if (!cancelled && attempts < 20) {
        attempts += 1;
        window.setTimeout(poll, 3000);
      } else if (!cancelled) {
        setLoading(false);
      }
    };

    poll();

    return () => {
      cancelled = true;
    };
  }, [orderId, clearCart]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F1E9]">
        <Loader2 className="h-8 w-8 animate-spin text-[#ff705f]" />
      </div>
    );
  }

  const isPaid = order?.status === "paid";
  const isOnSite = order?.paymentMethod === "on_site" || method === "on_site";
  const isPending = order?.status === "pending_payment";
  const isFailed = order?.status === "cancelled" || order?.status === "expired";

  return (
    <div className="min-h-screen bg-[#F6F1E9] text-[#17231f]">
      <header className="border-b border-black/5 bg-[#F6F1E9]/90">
        <nav className="mx-auto flex max-w-[700px] items-center px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200" aria-label="Poke N Bowl — Accueil">
            <BrandLogo size="md" />
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
              Si tu as payé, cette page se mettra à jour dès confirmation bancaire.
              Sinon, réessaye le paiement en ligne ou choisis « Payer sur place ».
            </p>
            <p className="mt-4 font-mono text-sm font-bold">{order.id}</p>
          </div>
        ) : (
          <div className="rounded-[28px] bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-14 w-14 text-[#22c55e]" />
              <h1 className="mt-4 text-3xl font-black sm:text-4xl">
                {isPaid ? "Commande payée !" : "Commande confirmée !"}
              </h1>
              <p className="mt-2 text-[#758079]">
                Merci {order.customer.name}.{" "}
                {order.customer.fulfillment === "delivery"
                  ? <>On prépare ta commande pour la livraison à <strong>{order.customer.requestedTime}</strong>.</>
                  : <>On prépare ton bowl pour <strong>{order.customer.requestedTime}</strong>.</>}
              </p>
              <p className="mt-4 rounded-full bg-[#F6F1E9] px-4 py-2 font-mono text-sm font-black">
                {order.id}
              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-black/5 pt-6">
              {order.customer.fulfillment === "delivery" && (
                <div className="rounded-2xl bg-[#F6F1E9] p-4 text-sm">
                  <strong>Livraison</strong>
                  <div className="mt-1 text-[#758079]">{order.customer.address}</div>
                  <div className="text-[#758079]">{order.customer.postalCode} {order.customer.city}</div>
                  <div className="mt-2 font-bold">Frais de livraison : {order.customer.deliveryFee ? `€ ${order.customer.deliveryFee.toFixed(2)}` : "Gratuits"}</div>
                </div>
              )}
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

            {/* ════════ BOOSTER D'AVIS GOOGLE 5 ÉTOILES ════════ */}
            <div className="mt-8 rounded-2xl bg-[#fff8ee] border border-[#fed7aa] p-6 text-center shadow-sm">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-base font-black text-[#2C1D16]">
                Votre avis compte énormément pour nous !
              </h3>
              <p className="mt-1 text-xs text-[#758079] max-w-md mx-auto leading-relaxed">
                Poke N Bowl est un restaurant indépendant à Visé. Si vous appréciez nos bowls frais, laissez-nous 5 étoiles sur Google pour donner de la force à l'équipe 🙏
              </p>
              <a
                href="https://maps.app.goo.gl/TkddDsG9pwYb62558"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#2C1D16] px-6 py-2.5 text-xs font-black text-[#EADCC9] transition hover:scale-105 shadow-sm"
              >
                <span>⭐ Laisser 5 étoiles sur Google</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="rounded-full bg-[#2C1D16] px-6 py-3 text-center text-sm font-black text-white"
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
