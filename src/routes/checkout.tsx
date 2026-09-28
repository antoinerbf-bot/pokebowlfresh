import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, CreditCard, Store, Loader2 } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "../context/CartContext";
import { submitCheckout } from "../fn/checkout";
import type { FulfillmentMethod, PaymentMethod } from "../lib/orders";
import { getDeliveryZone } from "../lib/delivery";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [fulfillment, setFulfillment] = useState<FulfillmentMethod>("delivery");
  const [requestedTime, setRequestedTime] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("online");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const pickupOptions = useMemo(() => buildPickupSlots(), []);
  const deliveryZone = useMemo(() => getDeliveryZone(postalCode), [postalCode]);
  const deliveryFee = fulfillment === "delivery" && deliveryZone ? (total >= 50 ? 0 : deliveryZone.feeUnder50) : 0;
  const orderTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f7f4ec] flex flex-col items-center justify-center px-5">
        <p className="text-lg font-bold text-[#17231f]">Votre panier est vide.</p>
        <Link
          to="/commander"
          className="mt-6 rounded-full bg-[#ff705f] px-6 py-3 text-sm font-black text-white"
        >
          Voir la carte
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const origin = window.location.origin;
      const result = await submitCheckout({
        data: {
          customer: {
            name,
            phone,
            email: email || "",
            notes: notes || undefined,
            fulfillment,
            requestedTime,
            address: address || undefined,
            postalCode: postalCode || undefined,
            city: city || undefined,
          },
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            toppings: item.toppings,
          })),
          paymentMethod,
          origin,
        },
      });

      if (result.type === "online") {
        window.location.href = result.redirectUrl;
        return;
      }

      clearCart();
      navigate({
        to: "/order/success",
        search: { orderId: result.orderId, method: "on_site" },
      });
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Réessaie ou choisis « Payer sur place ».",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#17231f]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ec]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Accueil">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-foreground/5 p-1.5">
              <img src={logo} alt="Logo" className="h-full w-full object-contain" />
            </span>
            <span className="text-base font-black sm:text-lg">Poke N Bowl</span>
          </Link>
          <Link
            to="/commander"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#7a847e] hover:text-[#17231f]"
          >
            <ArrowLeft className="h-4 w-4" /> Retour
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-[900px] px-5 py-10 sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ff705f]">
          Finaliser
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
          Ta commande.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-[#758079]">
          Renseigne tes coordonnées, ton adresse de livraison et le mode de paiement.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <section className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]">
              <h2 className="text-lg font-black">Mode de réception</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button type="button" onClick={() => setFulfillment("delivery")} className={`rounded-2xl border-2 p-4 text-left ${fulfillment === "delivery" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`}>
                  <span className="text-sm font-black">Livraison</span>
                  <span className="mt-1 block text-xs text-[#7a847e]">À domicile selon ton code postal</span>
                </button>
                <button type="button" onClick={() => setFulfillment("pickup")} className={`rounded-2xl border-2 p-4 text-left ${fulfillment === "pickup" ? "border-[#ff705f] bg-[#fff5f3]" : "border-black/10 bg-[#f7f4ec]"}`}>
                  <span className="text-sm font-black">Retrait sur place</span>
                  <span className="mt-1 block text-xs text-[#7a847e]">Poke N Bowl Visé</span>
                </button>
              </div>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]">
              <h2 className="text-lg font-black">Coordonnées</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold text-[#7a847e]">Nom *</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="Prénom Nom"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-[#7a847e]">Téléphone *</span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="04xx xx xx xx"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-[#7a847e]">Email (optionnel)</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="toi@email.com"
                  />
                </label>
                {fulfillment === "delivery" && (
                  <>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-bold text-[#7a847e]">Adresse *</span>
                      <input required value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="Rue et numéro" />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-[#7a847e]">Code postal *</span>
                      <input required inputMode="numeric" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="4600" />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-[#7a847e]">Ville *</span>
                      <input required value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="Visé" />
                    </label>
                    <div className="sm:col-span-2 rounded-xl bg-[#f7f4ec] px-4 py-3 text-xs font-bold text-[#17231f]">
                      {deliveryZone ? <>Minimum : € {deliveryZone.minimumOrder.toFixed(2)} · Livraison : {total >= 50 ? "gratuite" : `€ ${deliveryZone.feeUnder50.toFixed(2)}`}</> : "Entre ton code postal pour connaître les frais de livraison."}
                    </div>
                  </>
                )}
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold text-[#7a847e]">{fulfillment === "delivery" ? "Créneau souhaité *" : "Heure de retrait *"}</span>
                  <select
                    required
                    value={requestedTime}
                    onChange={(e) => setRequestedTime(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                  >
                    <option value="">Choisir un créneau</option>
                    {pickupOptions.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold text-[#7a847e]">Notes (allergies, etc.)</span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#f7f4ec] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="Optionnel"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]">
              <h2 className="text-lg font-black">Paiement</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("online")}
                  className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${
                    paymentMethod === "online"
                      ? "border-[#ff705f] bg-[#fff5f3]"
                      : "border-black/10 bg-[#f7f4ec] hover:border-black/20"
                  }`}
                >
                  <CreditCard className="h-5 w-5 text-[#ff705f]" />
                  <span className="text-sm font-black">Payer en ligne</span>
                  <span className="text-xs text-[#7a847e]">
                    Bancontact, carte — via Mollie
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("on_site")}
                  className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${
                    paymentMethod === "on_site"
                      ? "border-[#ff705f] bg-[#fff5f3]"
                      : "border-black/10 bg-[#f7f4ec] hover:border-black/20"
                  }`}
                >
                  <Store className="h-5 w-5 text-[#ff705f]" />
                  <span className="text-sm font-black">Payer sur place</span>
                  <span className="text-xs text-[#7a847e]">
                    À la récupération — sans frais en ligne
                  </span>
                </button>
              </div>
            </section>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          <aside className="h-fit rounded-[24px] bg-[#10251f] p-6 text-white lg:sticky lg:top-24">
            <h2 className="text-lg font-black">Récapitulatif</h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li
                  key={`${item.id}-${JSON.stringify(item.toppings)}`}
                  className="flex justify-between gap-3 text-sm"
                >
                  <div className="min-w-0">
                    <p className="font-bold">
                      {item.quantity}× {item.name}
                    </p>
                    {item.toppings.length > 0 && (
                      <p className="text-xs text-white/50">{item.toppings.join(", ")}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-bold">
                    € {(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <div>
                <span className="font-bold">Total</span>
                <div className="mt-1 text-right">
                  <div className="text-xs text-white/50">Sous-total · € {total.toFixed(2)}</div>
                  {fulfillment === "delivery" && <div className="text-xs text-white/50">Livraison · {deliveryFee === 0 ? "Gratuite" : `€ ${deliveryFee.toFixed(2)}`}</div>}
                  <div className="text-2xl font-black text-[#d7ff45]">€ {orderTotal.toFixed(2)}</div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff705f] py-3.5 text-sm font-black text-white transition hover:bg-[#ff705f]/90 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Traitement…
                </>
              ) : paymentMethod === "online" ? (
                "Payer en ligne"
              ) : (
                "Confirmer la commande"
              )}
            </button>
            <p className="mt-3 text-center text-[10px] text-white/40">
              Livraison selon zone · retrait possible à Poke N Bowl Visé
            </p>
          </aside>
        </form>
      </main>
    </div>
  );
}

function buildPickupSlots(): string[] {
  const slots: string[] = [];
  const now = new Date();
  const days = [0, 1];

  for (const dayOffset of days) {
    const d = new Date(now);
    d.setDate(d.getDate() + dayOffset);
    const dayName = dayOffset === 0 ? "Aujourd'hui" : "Demain";
    const isSunday = d.getDay() === 0;
    if (isSunday) continue;

    const startHour = 17;
    const startMin = d.getDay() === 6 ? 45 : 15;
    const endHour = 20;
    const endMin = 30;

    for (let h = startHour; h <= endHour; h++) {
      for (const m of [0, 15, 30, 45]) {
        if (h === startHour && m < startMin) continue;
        if (h === endHour && m > endMin) continue;

        const slotDate = new Date(d);
        slotDate.setHours(h, m, 0, 0);

        if (slotDate.getTime() < now.getTime() + 20 * 60 * 1000) continue;

        const label = `${dayName} ${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        slots.push(label);
      }
    }
  }

  return slots.slice(0, 24);
}
