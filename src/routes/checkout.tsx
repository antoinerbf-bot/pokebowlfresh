import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, CreditCard, Store, Loader2, ShieldCheck, AlertCircle, CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { BrandLogo } from "@/components/BrandLogo";
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
  const pickupOptions = useMemo(() => buildPickupSlots(), []);
  const [requestedTime, setRequestedTime] = useState(() => buildPickupSlots()[0] ?? "");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("online");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const normalizedPostal = postalCode.trim().replace(/\s+/g, "");
  const deliveryZone = useMemo(() => getDeliveryZone(postalCode), [postalCode]);
  const deliveryFee = fulfillment === "delivery" && deliveryZone ? (total >= 50 ? 0 : deliveryZone.feeUnder50) : 0;
  const orderTotal = total + deliveryFee;

  const handleFulfillmentChange = (method: FulfillmentMethod) => {
    setFulfillment(method);
    if (method === "delivery") {
      setPaymentMethod("online");
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F6F1E9] flex flex-col items-center justify-center px-5">
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

    if (fulfillment === "delivery") {
      if (paymentMethod === "on_site") {
        setError("Le paiement sur place n'est pas autorisé pour la livraison à domicile. Veuillez régler en ligne.");
        return;
      }
      if (!deliveryZone) {
        setError("Cette zone de livraison n'est pas desservie. Veuillez choisir « Retrait sur place ».");
        return;
      }
      if (total < deliveryZone.minimumOrder) {
        setError(`Commande minimum de € ${deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.`);
        return;
      }
    }

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
            toppings: [
              ...item.toppings,
              ...(item.removedIngredients && item.removedIngredients.length > 0
                ? [`Sans : ${item.removedIngredients.join(", ")}`]
                : []),
            ],
          })),
          paymentMethod,
          origin,
        },
      });

      if (result.type === "error") {
        setError(result.message);
        setLoading(false);
        return;
      }

      if (result.type === "online") {
        window.location.href = result.redirectUrl;
        return;
      }

      clearCart();
      navigate({
        to: "/order/success",
        search: { orderId: result.orderId, method: "on_site" },
      });
    } catch (err: unknown) {
      console.error("[Checkout] Échec de création de commande:", err);

      // TanStack Start peut envelopper les erreurs serveur dans data/cause.
      // Lire les formes courantes évite de cacher la cause derrière un message générique.
      const candidate = err as {
        message?: unknown;
        data?: { message?: unknown; error?: unknown };
        cause?: { message?: unknown };
      };
      const message =
        (typeof candidate?.data?.message === "string" && candidate.data.message) ||
        (typeof candidate?.cause?.message === "string" && candidate.cause.message) ||
        (typeof candidate?.message === "string" && candidate.message) ||
        (typeof candidate?.data?.error === "string" && candidate.data.error) ||
        "Le serveur n’a pas pu créer la commande. Vérifiez la connexion puis réessayez. Si le problème persiste, consultez les journaux d’erreurs du serveur.";
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1E9] text-[#17231f]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F1E9]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[900px] items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="flex items-center transition hover:opacity-95 hover:scale-[1.02] duration-200" aria-label="Poke N Bowl — Accueil">
            <BrandLogo size="md" />
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
                <button
                  type="button"
                  onClick={() => handleFulfillmentChange("delivery")}
                  className={`rounded-2xl border-2 p-4 text-left transition ${
                    fulfillment === "delivery"
                      ? "border-[#ff705f] bg-[#fff5f3]"
                      : "border-black/10 bg-[#F6F1E9] hover:border-black/20"
                  }`}
                >
                  <span className="text-sm font-black">🛵 Livraison</span>
                  <span className="mt-1 block text-xs text-[#7a847e]">À domicile selon ton code postal</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleFulfillmentChange("pickup")}
                  className={`rounded-2xl border-2 p-4 text-left transition ${
                    fulfillment === "pickup"
                      ? "border-[#ff705f] bg-[#fff5f3]"
                      : "border-black/10 bg-[#F6F1E9] hover:border-black/20"
                  }`}
                >
                  <span className="text-sm font-black">🛍️ Retrait sur place</span>
                  <span className="mt-1 block text-xs text-[#7a847e]">Poke N Bowl Visé (Sans minimum)</span>
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
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
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
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="04xx xx xx xx"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-[#7a847e]">Email (optionnel)</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="toi@email.com"
                  />
                </label>
                {fulfillment === "delivery" && (
                  <>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-bold text-[#7a847e]">Adresse de livraison *</span>
                      <input required value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="Rue et numéro" />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-[#7a847e]">Code postal *</span>
                      <input required inputMode="numeric" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="4600" />
                    </label>
                    <label className="block">
                      <span className="text-xs font-bold text-[#7a847e]">Ville *</span>
                      <input required value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]" placeholder="Visé" />
                    </label>

                    {/* Feedback temps réel sur la zone de livraison */}
                    <div className="sm:col-span-2">
                      {!normalizedPostal && (
                        <div className="rounded-xl bg-[#F6F1E9] px-4 py-3 text-xs font-medium text-[#7a847e]">
                          Entre ton code postal pour calculer les frais de livraison (19 zones desservies autour de Visé).
                        </div>
                      )}

                      {normalizedPostal.length >= 4 && !deliveryZone && (
                        <div className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-bold text-red-700">
                          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                          <div>
                            <span>Code postal {normalizedPostal} non desservi en livraison.</span>
                            <span className="block font-normal text-red-600 mt-0.5">
                              Choisis l'option « Retrait sur place » pour retirer ta commande au restaurant.
                            </span>
                          </div>
                        </div>
                      )}

                      {deliveryZone && total < deliveryZone.minimumOrder && (
                        <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs font-bold text-amber-900">
                          <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                          <div>
                            <span>Minimum de commande : € {deliveryZone.minimumOrder.toFixed(2)} pour ce code postal.</span>
                            <span className="block font-normal text-amber-700 mt-0.5">
                              Il te manque encore € {(deliveryZone.minimumOrder - total).toFixed(2)} pour valider la livraison.
                            </span>
                          </div>
                        </div>
                      )}

                      {deliveryZone && total >= deliveryZone.minimumOrder && (
                        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs font-bold text-emerald-800">
                          <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                          <span>
                            Zone validée : frais de livraison {total >= 50 ? "offerts 🎉" : `de € ${deliveryZone.feeUnder50.toFixed(2)}`} (livraison offerte dès 50 €)
                          </span>
                        </div>
                      )}
                    </div>
                  </>
                )}
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold text-[#7a847e]">{fulfillment === "delivery" ? "Créneau souhaité *" : "Heure de retrait *"}</span>
                  <select
                    required
                    value={requestedTime}
                    onChange={(e) => setRequestedTime(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
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
                    className="mt-1 w-full resize-none rounded-xl border border-black/10 bg-[#F6F1E9] px-4 py-3 text-sm font-medium outline-none focus:border-[#ff705f]"
                    placeholder="Optionnel"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_-38px_rgba(0,0,0,.35)]">
              <h2 className="text-lg font-black">Paiement</h2>

              {fulfillment === "delivery" ? (
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border-2 border-[#ff705f] bg-[#fff5f3] p-4 text-left">
                    <div className="flex items-center justify-between w-full">
                      <CreditCard className="h-5 w-5 text-[#ff705f]" />
                      <span className="inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]">
                        Bancontact & En ligne
                      </span>
                    </div>
                    <span className="mt-1 block text-sm font-black text-[#17231f]">Paiement en ligne sécurisé</span>
                    <span className="text-xs text-[#7a847e]">
                      Application bancaire belge, Payconiq (QR code) ou Carte bancaire
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-[#F6F1E9] p-3 text-xs text-[#766358] border border-black/5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Paiement en ligne requis pour la livraison à domicile.</strong> (Le paiement sur place est réservé au retrait au restaurant).
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("online")}
                    className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${
                      paymentMethod === "online"
                        ? "border-[#ff705f] bg-[#fff5f3]"
                        : "border-black/10 bg-[#F6F1E9] hover:border-black/20"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <CreditCard className="h-5 w-5 text-[#ff705f]" />
                      <span className="inline-flex items-center rounded-md bg-[#004B87]/10 px-2 py-0.5 text-[11px] font-black text-[#004B87]">
                        Bancontact
                      </span>
                    </div>
                    <span className="text-sm font-black">Bancontact & En ligne</span>
                    <span className="text-xs text-[#7a847e]">
                      Bancontact Pro, Payconiq, Carte bancaire
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("on_site")}
                    className={`flex flex-col items-start gap-2 rounded-2xl border-2 p-4 text-left transition ${
                      paymentMethod === "on_site"
                        ? "border-[#ff705f] bg-[#fff5f3]"
                        : "border-black/10 bg-[#F6F1E9] hover:border-black/20"
                    }`}
                  >
                    <Store className="h-5 w-5 text-[#ff705f]" />
                    <span className="text-sm font-black">Payer sur place</span>
                    <span className="text-xs text-[#7a847e]">
                      Espèces ou Bancontact au comptoir lors du retrait
                    </span>
                  </button>
                </div>
              )}
            </section>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          <aside className="h-fit rounded-[24px] bg-[#2C1D16] p-6 text-white lg:sticky lg:top-24">
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
                    {item.removedIngredients && item.removedIngredients.length > 0 && (
                      <p className="text-xs text-[#ff705f] font-bold">
                        ✕ Sans : {item.removedIngredients.join(", ")}
                      </p>
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
                  <div className="text-2xl font-black text-[#ff705f]">€ {orderTotal.toFixed(2)}</div>
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
  const windows = [
    { day: 1, start: 12 * 60, end: 14 * 60 },
    { day: 1, start: 17 * 60, end: 21 * 60 },
    { day: 2, start: 12 * 60, end: 14 * 60 },
    { day: 2, start: 17 * 60, end: 21 * 60 },
    { day: 3, start: 12 * 60, end: 14 * 60 },
    { day: 3, start: 17 * 60, end: 21 * 60 },
    { day: 4, start: 12 * 60, end: 14 * 60 },
    { day: 4, start: 17 * 60, end: 21 * 60 },
    { day: 5, start: 12 * 60, end: 14 * 60 },
    { day: 5, start: 17 * 60, end: 21 * 60 },
    { day: 6, start: 18 * 60, end: 21 * 60 },
  ];

  for (let dayOffset = 0; dayOffset <= 7; dayOffset += 1) {
    const d = new Date(now);
    d.setDate(now.getDate() + dayOffset);
    const day = d.getDay();
    const dayWindows = windows.filter((w) => w.day === day);
    for (const window of dayWindows) {
      for (let minute = window.start; minute <= window.end; minute += 15) {
        const slotDate = new Date(d);
        slotDate.setHours(Math.floor(minute / 60), minute % 60, 0, 0);
        if (slotDate.getTime() < now.getTime() + 20 * 60 * 1000) continue;
        const labelDay = dayOffset === 0 ? "Aujourd'hui" : dayOffset === 1 ? "Demain" : d.toLocaleDateString("fr-BE", { weekday: "short", day: "2-digit", month: "2-digit" });
        slots.push(labelDay + " " + slotDate.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit", hour12: false }));
      }
    }
  }

  return slots.slice(0, 48);
}
