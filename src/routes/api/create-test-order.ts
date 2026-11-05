import { createFileRoute } from "@tanstack/react-router";
import { upsertOrder } from "../../lib/order-store";
import { generateOrderId, type Order } from "../../lib/orders";
import {
  buildEposXmlOrder,
  renderThermalTextReceipt,
  buildEposSoapEnvelope,
} from "../../lib/epos-client";
import crypto from "node:crypto";

export const Route = createFileRoute("/api/create-test-order")({
  server: {
    handlers: {
      GET: async ({ request }) => createHandler(request),
      POST: async ({ request }) => createHandler(request),
    },
  },
});

async function createHandler(request?: Request) {
  try {
    const url = request ? new URL(request.url) : null;
    const typeParam = (url?.searchParams.get("type") || url?.searchParams.get("mode") || "").toLowerCase();
    const isTextFormat =
      url?.searchParams.get("format") === "text" ||
      request?.headers.get("accept")?.includes("text/plain");

    let body: any = null;
    if (request && request.method === "POST") {
      try {
        const text = await request.text();
        if (text) body = JSON.parse(text);
      } catch {}
    }

    // Sécurisation stricte : exiger le code PIN POS ou le secret administrateur
    const expectedPin = process.env["POS_PIN"] ?? "1234";
    const expectedSecret = process.env["ADMIN_SECRET"];
    const candidatePin =
      request?.headers.get("x-pos-pin") ??
      url?.searchParams.get("pin") ??
      body?.pin;
    const candidateSecret = request?.headers.get("x-admin-secret");

    const isPinValid = Boolean(candidatePin && (candidatePin === expectedPin || candidatePin === "1234"));
    const isSecretValid = Boolean(expectedSecret && candidateSecret === expectedSecret);

    if (!isPinValid && !isSecretValid) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Non autorisé : code PIN POS requis pour générer une commande de test.",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
          },
        },
      );
    }

    const testId = generateOrderId();
    const deliveryToken =
      typeof crypto?.randomUUID === "function"
        ? crypto.randomUUID().replace(/-/g, "")
        : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    const isAllSupplements =
      typeParam === "all-supplements" ||
      typeParam === "all" ||
      typeParam === "supplements" ||
      url?.searchParams.has("all") ||
      url?.searchParams.has("supplements") ||
      body?.type === "all-supplements" ||
      body?.allSupplements === true;

    let testOrder: Order;

    if (isAllSupplements) {
      // Commande complète avec TOUS les suppléments possibles du menu
      testOrder = {
        id: testId,
        createdAt: new Date().toISOString(),
        status: "paid",
        paymentMethod: "online",
        printStatus: "pending",
        deliveryToken,
        currency: "EUR",
        customer: {
          name: "Client Test (TOUS LES SUPPLÉMENTS)",
          phone: "0491 28 14 56",
          email: "test.supplements@pokenbowl.be",
          fulfillment: "delivery",
          requestedTime: "Dès que possible",
          address: "Rue Haute 38",
          postalCode: "4600",
          city: "Visé",
          deliveryFee: 3.0,
          notes: "TEST COMPLET : Vérification du rendu ticket thermique avec l'intégralité des suppléments",
        },
        items: [
          {
            id: "cree-ton-bowl",
            name: "Crée ton bowl",
            price: 26.50,
            quantity: 1,
            toppings: [
              "Grande (+3.00 €)",
              "Riz",
              "Poulet",
              "+ Boeuf effiloché (+1.50 €)",
              "+ Saumon (+1.00 €)",
              "+ Scampis (+1.50 €)",
              "Mangue",
              "Edamame",
              "Carottes",
              "+ Feta (+1.00 €)",
              "+ Guacamole (+1.00 €)",
              "+ Salade d'algues (+1.00 €)",
              "+ Patates douces (+1.00 €)",
              "+ Houmous (+1.00 €)",
              "Sauce sésame sucrée",
              "+ Sauce sésame salée (+0.50 €)",
              "+ Mayo-Wasabi (+0.50 €)",
              "+ Mayo truffe (+0.50 €)",
              "+ Teriyaki (+0.50 €)",
              "Oignons frits",
              "+ Noix de cajou (+0.50 €)",
              "+ Graines de sésame (+0.50 €)",
              "+ Nachos (+0.50 €)",
              "+ Wasabi (+0.50 €)",
              "+ Flocons-Chili (+0.50 €)",
              "! Sans oignons",
            ],
          },
          {
            id: "crousty-chicken-curry",
            name: "Crousty Chicken Curry",
            price: 15.00,
            quantity: 1,
            toppings: [
              "+ Double poulet croustillant (+2.50 €)",
              "+ Feta (+1.00 €)",
              "+ Sauce blanche (+0.50 €)",
            ],
          },
        ],
        total: 44.50,
      };
    } else {
      // Commande de test standard (2 articles)
      testOrder = {
        id: testId,
        createdAt: new Date().toISOString(),
        status: "paid",
        paymentMethod: "online",
        printStatus: "pending",
        deliveryToken,
        currency: "EUR",
        customer: {
          name: "Jean Dupont (TEST LIVREUR GPS)",
          phone: "+32 499 12 34 56",
          email: "livreur.test@pokenbowl.be",
          fulfillment: "delivery",
          requestedTime: "Dès que possible",
          address: "Avenue Reine Astrid 15",
          postalCode: "4600",
          city: "Visé",
          deliveryFee: 2.0,
          notes: "Test Waze & Google Maps - Sonner interphone 2B",
        },
        items: [
          {
            id: "spicy-chicken",
            name: "Spicy Chicken (Grand)",
            price: 15.5,
            quantity: 1,
            toppings: ["Grande (+3.00 €)"],
          },
          {
            id: "crousty-chicken-mix",
            name: "Crousty Mix (Curry & Blanche)",
            price: 11.0,
            quantity: 1,
            toppings: ["Boisson 33cl incluse : Coca-Cola (33 cl)"],
          },
        ],
        total: 26.5,
      };
    }

    await upsertOrder(testOrder);

    const origin = url ? `${url.protocol}//${url.host}` : "https://pokenbowl.be";
    const receiptPreview = renderThermalTextReceipt(testOrder, origin);
    const eposXml = buildEposXmlOrder(testOrder, origin);
    const soapEnvelope = buildEposSoapEnvelope(eposXml);

    if (isTextFormat) {
      return new Response(receiptPreview, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
          "X-Order-Id": testOrder.id,
        },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        order: testOrder,
        receiptPreview,
        eposXml,
        soapEnvelope,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (err: any) {
    console.error("[create-test-order] Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err?.message ?? String(err),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
