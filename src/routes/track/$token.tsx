import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MapPin, Navigation, Clock, CheckCircle, Truck, AlertCircle, Loader2 } from "lucide-react";
import { getDeliveryOrder, updateDeliveryStatus } from "../../fn/delivery";
import { BrandLogo } from "../../components/BrandLogo";

export const Route = createFileRoute("/track/$token")({
  component: DeliveryTrackPage,
});

function DeliveryTrackPage() {
  const { token } = Route.useParams();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchOrder = async () => {
    try {
      const res = await getDeliveryOrder({ data: { token } });
      if (res.found) {
        setOrder(res.order);
      } else {
        setError("Commande introuvable ou lien expiré.");
      }
    } catch (e) {
      console.error(e);
      setError("Impossible de charger les données de la commande.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
    const interval = setInterval(fetchOrder, 15000);
    return () => clearInterval(interval);
  }, [token]);

  const handleStatusChange = async (newStatus: "delivering" | "completed") => {
    setUpdating(true);
    try {
      await updateDeliveryStatus({ data: { token, status: newStatus } });
      await fetchOrder();
    } catch (e) {
      console.error(e);
      alert("Erreur lors de la mise à jour du statut.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f4ec]">
        <Loader2 className="h-8 w-8 animate-spin text-[#ff705f]" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4ec] px-4 text-center">
        <AlertCircle className="h-12 w-12 text-[#ff705f]" />
        <h1 className="mt-4 text-2xl font-black text-[#17231f]">Lien invalide</h1>
        <p className="mt-2 text-sm text-[#758079]">{error ?? "Commande introuvable."}</p>
      </div>
    );
  }

  const fullAddress = `${order.address ?? ""}, ${order.postalCode ?? ""} ${order.city ?? ""}`.trim();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f7f4ec]/95 px-5 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <BrandLogo size="sm" />
          <span className="font-mono text-xs font-black bg-black/5 px-3 py-1 rounded-full">
            {order.id}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-6 space-y-4">
        {/* Statut actuel */}
        <section className="rounded-2xl bg-white p-5 shadow-sm border border-black/5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Statut</span>
            <span className="rounded-full bg-[#fff5f3] px-3 py-1 text-xs font-black text-[#ff705f]">
              {order.status === "paid" && "Payée / En attente"}
              {order.status === "preparing" && "En préparation"}
              {order.status === "ready" && "Prête pour livraison"}
              {order.status === "delivering" && "En cours de livraison"}
              {order.status === "completed" && "Livrée"}
              {order.status === "cancelled" && "Annulée"}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-[#7a847e]">
            <Clock className="h-4 w-4" />
            <span>Créneau demandé : <strong className="text-[#17231f]">{order.requestedTime}</strong></span>
          </div>
        </section>

        {/* Coordonnées Client & Appel */}
        <section className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3">
          <h2 className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Client</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-black">{order.customerName}</p>
              <p className="text-sm font-semibold text-[#7a847e]">{order.customerPhone}</p>
            </div>
            <a
              href={`tel:${order.customerPhone}`}
              className="flex items-center gap-2 rounded-xl bg-[#25D366]/15 text-[#189947] hover:bg-[#25D366]/25 px-4 py-3 font-bold text-sm transition"
            >
              <Phone className="h-4 w-4" />
              Appeler
            </a>
          </div>
        </section>

        {/* Adresse de livraison & GPS */}
        {order.fulfillment === "delivery" ? (
          <section className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Adresse de Livraison</h2>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-[#ff705f] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-base leading-snug">{order.address}</p>
                <p className="text-sm text-[#7a847e]">{order.postalCode} {order.city}</p>
              </div>
            </div>

            {order.notes && (
              <div className="rounded-xl bg-[#fff9ea] border border-[#f3d996] p-3 text-xs text-[#735311]">
                <strong>Instructions client :</strong> {order.notes}
              </div>
            )}

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] text-white py-3 font-bold text-sm shadow hover:bg-[#3367d6] transition"
              >
                <Navigation className="h-4 w-4" />
                Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] text-[#003d52] py-3 font-bold text-sm shadow hover:bg-[#2bb8e6] transition"
              >
                <Navigation className="h-4 w-4" />
                Waze
              </a>
            </div>
          </section>
        ) : (
          <section className="rounded-2xl bg-white p-5 shadow-sm border border-black/5">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Mode de réception</h2>
            <p className="mt-1 font-bold text-base">Retrait sur place (Poke N Bowl Visé)</p>
          </section>
        )}

        {/* Contenu de la commande */}
        <section className="rounded-2xl bg-white p-5 shadow-sm border border-black/5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Articles ({order.items.length})</h2>
            <span className="font-black text-sm">Total: {order.total.toFixed(2)} €</span>
          </div>

          <ul className="divide-y divide-black/5">
            {order.items.map((item: any, idx: number) => (
              <li key={idx} className="py-2.5">
                <div className="flex justify-between font-bold text-sm">
                  <span>{item.quantity}× {item.name}</span>
                </div>
                {item.toppings && item.toppings.length > 0 && (
                  <div className="mt-1 text-xs text-[#7a847e] pl-4 border-l-2 border-[#ff705f]/40 space-y-0.5">
                    {item.toppings.map((top: string, tidx: number) => (
                      <p key={tidx}>{top}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Actions Livreur */}
        <section className="pt-2 space-y-2">
          {order.status !== "delivering" && order.status !== "completed" && (
            <button
              onClick={() => handleStatusChange("delivering")}
              disabled={updating}
              className="w-full rounded-2xl bg-[#ff705f] py-4 text-white font-black text-base shadow-lg hover:bg-[#ff5a47] transition flex items-center justify-center gap-2"
            >
              <Truck className="h-5 w-5" />
              {updating ? "Mise à jour..." : "Partir en livraison"}
            </button>
          )}

          {order.status === "delivering" && (
            <button
              onClick={() => handleStatusChange("completed")}
              disabled={updating}
              className="w-full rounded-2xl bg-[#10251f] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-5 w-5 text-[#d7ff45]" />
              {updating ? "Mise à jour..." : "Marquer comme Livrée"}
            </button>
          )}

          {order.status === "completed" && (
            <div className="rounded-2xl bg-[#10251f] p-4 text-center text-[#d7ff45] font-black text-sm">
              ✓ Commande terminée et livrée
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

