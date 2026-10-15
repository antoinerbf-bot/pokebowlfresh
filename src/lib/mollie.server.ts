/**
 * Server-only Mollie helpers.
 * Requires env: MOLLIE_API_KEY (test_… or live_…)
 */

const MOLLIE_API = "https://api.mollie.com/v2";

import { loadAndGetEnv } from "./env.server";

export function getMollieApiKey(): string | undefined {
  const env = loadAndGetEnv();
  const direct = env.MOLLIE_API_KEY || env.MOLLIE_KEY;
  if (direct) return direct.trim();

  const candidates = [
    env.BANCONTACT_PRO_API_KEY,
    env.PAYCONIQ_API_KEY,
    env.BANCONTACT_API_KEY,
    env.API_KEY,
  ];
  for (const c of candidates) {
    if (c && (c.startsWith("live_") || c.startsWith("test_"))) {
      return c.trim();
    }
  }

  return undefined;
}

export function isMollieConfigured(): boolean {
  return Boolean(getMollieApiKey());
}

function getApiKey(): string {
  const key = getMollieApiKey();
  if (!key) {
    throw new Error(
      "MOLLIE_API_KEY manquante. Renseigne la variable MOLLIE_API_KEY sur cPanel ou dans le fichier .env.",
    );
  }
  return key;
}

export type MolliePayment = {
  id: string;
  status: string;
  amount: { value: string; currency: string };
  description: string;
  metadata?: Record<string, string>;
  _links?: {
    checkout?: { href: string; type: string };
  };
};

export async function createMolliePayment(params: {
  amountValue: string; // e.g. "12.50"
  description: string;
  redirectUrl: string;
  webhookUrl: string;
  metadata: Record<string, string>;
  locale?: string;
}): Promise<MolliePayment> {
  const res = await fetch(`${MOLLIE_API}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: {
        currency: "EUR",
        value: params.amountValue,
      },
      description: params.description,
      redirectUrl: params.redirectUrl,
      webhookUrl: params.webhookUrl,
      metadata: params.metadata,
      locale: params.locale ?? "fr_BE",
      // Leave method unset so Mollie shows Bancontact, cards, etc.
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Mollie create payment failed (${res.status}): ${errText}`);
  }

  return (await res.json()) as MolliePayment;
}

export async function getMolliePayment(paymentId: string): Promise<MolliePayment> {
  const res = await fetch(`${MOLLIE_API}/payments/${paymentId}`, {
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Mollie get payment failed (${res.status}): ${errText}`);
  }

  return (await res.json()) as MolliePayment;
}

export function formatEurAmount(total: number): string {
  return total.toFixed(2);
}
