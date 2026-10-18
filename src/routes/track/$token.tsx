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
      if (token.toUpperCase().startsWith("TEST")) {
        setOrder({
          id: "TEST-TICKET",
          deliveryToken: "TEST-TICKET",
          createdAt: new Date().toISOString(),
          status: "delivering",
          fulfillment: "delivery",
          requestedTime: "Dès que possible",
          customerName: "Test Ticket Caisse (GPS)",
          customerPhone: "0499 00 00 00",
          notes: "Test GPS Waze & Google Maps 1-Clic",
          address: "Rue Haute 38",
          postalCode: "4600",
          city: "Visé",
          deliveryFee: 2.0,
          total: 16.0,
          paymentMethod: "on_site",
          items: [
            { name: "Poké Saumon Classic (Medium)", quantity: 1, price: 12.5 },
            { name: "Boisson Aloe Vera", quantity: 1, price: 3.5 },
          ],
        });
        setError(null);
        setLoading(false);
        return;
      }

      // 1. Appel direct ultra-rapide à l'API REST /api/track-order
      const raw = await fetch(`/api/track-order?token=${encodeURIComponent(token)}`, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (raw.ok) {
        const data = await raw.json();
        if (data.found && data.order) {
          setOrder(data.order);
          setError(null);
          setLoading(false);
          return;
        }
      }

      // 2. Fallback createServerFn
      const res = await getDeliveryOrder({ data: { token } });
      if (res.found) {
        setOrder(res.order);
        setError(null);
      } else {
        setError("Commande introuvable ou lien expiré.");
      }
    } catch (e: any) {
      console.warn("[Track] Erreur API REST, fallback createServerFn:", e);
      try {
        const res = await getDeliveryOrder({ data: { token } });
        if (res.found) {
          setOrder(res.order);
          setError(null);
          return;
        }
      } catch {}
      setError("Impossible de charger les données de la commande.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
    const interval = setInterval(fetchOrder, 10000);
    return () => clearInterval(interval);
  }, [token]);

  const handleStatusChange = async (newStatus: "delivering" | "completed") => {
    setUpdating(true);
    try {
      const res = await fetch("/api/track-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, status: newStatus }),
      });
      if (res.ok) {
        await fetchOrder();
        return;
      }
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
      <div className="flex min-h-screen items-center justify-center bg-[#F6F1E9]">
        <div className="text-center space-y-3">
          <Loader2 className="h-10 w-10 animate-spin text-[#ff705f] mx-auto" />
          <p className="text-xs font-black uppercase tracking-wider text-[#758079]">
            Chargement de la livraison...
          </p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#F6F1E9] px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#ff705f]/15 flex items-center justify-center mb-4">
          <AlertCircle className="h-9 w-9 text-[#ff705f]" />
        </div>
        <h1 className="text-2xl font-black text-[#17231f]">Lien invalide ou expiré</h1>
        <p className="mt-2 text-sm font-medium text-[#758079] max-w-sm">
          {error ?? "La commande demandée est introuvable."}
        </p>
        <p className="mt-2 font-mono text-xs bg-black/5 px-3 py-1.5 rounded-lg text-[#17231f]">
          Réf : {token}
        </p>
        <button
          onClick={() => {
            setLoading(true);
            setError(null);
            fetchOrder();
          }}
          className="mt-6 rounded-2xl bg-[#ff705f] px-6 py-3 font-black text-white text-sm shadow hover:bg-[#ff5a47] transition active:scale-95"
        >
          🔄 Réessayer la recherche
        </button>
      </div>
    );
  }

  const fullAddress = `${order.address ?? ""}, ${order.postalCode ?? ""} ${order.city ?? ""}`.trim();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}&navigate=yes`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="min-h-screen bg-[#F6F1E9] text-[#17231f]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#F6F1E9]/95 px-5 py-3 backdrop-blur-md">
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
            <div className="flex items-center justify-between">
              <h2 className="text-xs uppercase tracking-wider font-extrabold text-[#7a847e]">Adresse de Livraison</h2>
              <span className="text-[11px] font-bold bg-[#ff705f]/15 text-[#ff705f] px-2.5 py-0.5 rounded-full">
                Navigation 1-Clic
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-[#ff705f] shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-lg leading-snug">{order.address}</p>
                <p className="text-sm font-bold text-[#7a847e]">{order.postalCode} {order.city}</p>
              </div>
            </div>

            {order.notes && (
              <div className="rounded-xl bg-[#fff9ea] border border-[#f3d996] p-3 text-xs text-[#735311]">
                <strong>Instructions client :</strong> {order.notes}
              </div>
            )}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] hover:bg-[#3367d6] text-white py-3.5 px-3 font-black text-sm shadow transition active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] hover:bg-[#2bb8e6] text-[#003d52] py-3.5 px-3 font-black text-sm shadow transition active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                Waze
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#17231f] hover:bg-black text-white py-3.5 px-3 font-black text-sm shadow transition active:scale-95"
              >
                <Navigation className="h-4 w-4" />
                Apple Plans
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
              className="w-full rounded-2xl bg-[#2C1D16] py-4 text-white font-black text-base shadow-lg hover:bg-black transition flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-5 w-5 text-[#22c55e]" />
              {updating ? "Mise à jour..." : "Marquer comme Livrée"}
            </button>
          )}

          {order.status === "completed" && (
            <div className="rounded-2xl bg-[#2C1D16] p-4 text-center text-[#EADCC9] font-black text-sm">
              ✓ Commande terminée et livrée
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

