/**
 * Server-only Bancontact Pro (Payconiq by Bancontact) API helper.
 *
 * Supported environments:
 * - Production: https://api.payconiq.com/v3
 * - Preprod / Test: https://api.preprod.payconiq.com/v3
 *
 * Required environment variables:
 * - BANCONTACT_PRO_API_KEY or PAYCONIQ_API_KEY
 * - BANCONTACT_PRO_ENV (optional: "production" | "preprod", defaults to "production")
 */

const PROD_API = "https://api.payconiq.com/v3";
const PREPROD_API = "https://api.preprod.payconiq.com/v3";

export function getBancontactProApiKey(): string | undefined {
  return process.env.BANCONTACT_PRO_API_KEY || process.env.PAYCONIQ_API_KEY;
}

export function isBancontactProConfigured(): boolean {
  return Boolean(getBancontactProApiKey());
}

function getApiBaseUrl(): string {
  const env = (process.env.BANCONTACT_PRO_ENV || "production").toLowerCase();
  return env === "preprod" || env === "test" ? PREPROD_API : PROD_API;
}

export type BancontactProStatus =
  | "PENDING"
  | "IDENTIFIED"
  | "AUTHORIZED"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED"
  | "EXPIRED";

export type BancontactProPayment = {
  paymentId: string;
  status: BancontactProStatus;
  amount: number; // in cents
  currency: string; // EUR
  description?: string;
  reference?: string;
  createdAt?: string;
  expiresAt?: string;
  _links?: {
    qrcode?: { href: string };
    deeplink?: { href: string };
    cancel?: { href: string };
    checkout?: { href: string };
  };
};

export async function createBancontactProPayment(params: {
  amountEur: number;
  description: string;
  reference: string;
  returnUrl: string;
  callbackUrl: string;
}): Promise<BancontactProPayment> {
  const apiKey = getBancontactProApiKey();
  if (!apiKey) {
    throw new Error(
      "BANCONTACT_PRO_API_KEY manquante. Renseigne la cle API dans les variables d'environnement.",
    );
  }

  const amountCents = Math.round(params.amountEur * 100);

  const res = await fetch(`${getApiBaseUrl()}/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      amount: amountCents,
      currency: "EUR",
      description: params.description,
      reference: params.reference,
      returnUrl: params.returnUrl,
      callbackUrl: params.callbackUrl,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(
      `Bancontact Pro create payment failed (${res.status}): ${errText}`,
    );
  }

  return (await res.json()) as BancontactProPayment;
}

export async function getBancontactProPayment(
  paymentId: string,
): Promise<BancontactProPayment> {
  const apiKey = getBancontactProApiKey();
  if (!apiKey) {
    throw new Error(
      "BANCONTACT_PRO_API_KEY manquante. Renseigne la cle API dans les variables d'environnement.",
    );
  }

  const res = await fetch(`${getApiBaseUrl()}/payments/${paymentId}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(
      `Bancontact Pro get payment failed (${res.status}): ${errText}`,
    );
  }

  return (await res.json()) as BancontactProPayment;
}
