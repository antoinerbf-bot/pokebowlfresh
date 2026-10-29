/**
 * Server-only Bancontact Pro (Payconiq by Bancontact) API helper.
 *
 * Supported environments:
 * - Production: https://merchant.api.bancontact.net/v3
 * - Preprod / Test: https://merchant.api.preprod.bancontact.net/v3
 *
 * Required environment variables:
 * - BANCONTACT_PRO_API_KEY or PAYCONIQ_API_KEY
 * - BANCONTACT_PRO_ENV (optional: "production" | "preprod", defaults to "production")
 */

const PROD_API = "https://merchant.api.bancontact.net/v3";
const PREPROD_API = "https://merchant.api.preprod.bancontact.net/v3";

import { loadAndGetEnv } from "./env.server";

export function getBancontactProApiKey(): string | undefined {
  const env = loadAndGetEnv();
  const candidate =
    env.BANCONTACT_PRO_API_KEY ||
    env.PAYCONIQ_API_KEY ||
    env.BANCONTACT_API_KEY ||
    env.BANCONTACT_KEY ||
    env.PAYCONIQ_KEY;

  if (candidate && (candidate.startsWith("live_") || candidate.startsWith("test_"))) {
    // This is a Mollie key, not Bancontact Pro / Payconiq direct key
    return undefined;
  }

  return candidate?.trim();
}

export function isBancontactProConfigured(): boolean {
  return Boolean(getBancontactProApiKey());
}

function getAuthHeader(apiKey: string): string {
  const clean = apiKey.trim();
  return clean.toLowerCase().startsWith("bearer ") ? clean : `Bearer ${clean}`;
}

const CANDIDATE_PROD_URLS = [
  "https://api.payconiq.com/v3",
  "https://merchant.api.bancontact.net/v3",
];

const CANDIDATE_PREPROD_URLS = [
  "https://api.ext.payconiq.com/v3",
  "https://api.preprod.payconiq.com/v3",
  "https://merchant.api.preprod.bancontact.net/v3",
];

function getCandidateUrls(): string[] {
  const env = (process.env.BANCONTACT_PRO_ENV || "production").toLowerCase();
  return env === "preprod" || env === "test"
    ? CANDIDATE_PREPROD_URLS
    : CANDIDATE_PROD_URLS;
}

export type BancontactProStatus =
  | "PENDING"
  | "IDENTIFIED"
  | "AUTHORIZED"
  | "SUCCEEDED"
  | "AUTHORIZATION_FAILED"
  | "PENDING_MERCHANT_ACKNOWLEDGEMENT"
  | "VOIDED"
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
      "BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.",
    );
  }

  const amountCents = Math.round(params.amountEur * 100);
  const urls = getCandidateUrls();
  let lastErr = "";

  for (const baseUrl of urls) {
    try {
      const res = await fetch(`${baseUrl}/payments`, {
        method: "POST",
        headers: {
          Authorization: getAuthHeader(apiKey),
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

      if (res.ok) {
        return (await res.json()) as BancontactProPayment;
      }

      lastErr = await res.text();
    } catch (e: any) {
      lastErr = e?.message ?? String(e);
    }
  }

  throw new Error(`Bancontact Pro create payment failed: ${lastErr}`);
}

export async function getBancontactProPayment(
  paymentId: string,
): Promise<BancontactProPayment> {
  const apiKey = getBancontactProApiKey();
  if (!apiKey) {
    throw new Error(
      "BANCONTACT_PRO_API_KEY manquante. Renseigne la variable BANCONTACT_PRO_API_KEY sur cPanel ou dans le fichier .env.",
    );
  }

  const urls = getCandidateUrls();
  let lastErr = "";

  for (const baseUrl of urls) {
    try {
      const res = await fetch(`${baseUrl}/payments/${paymentId}`, {
        headers: {
          Authorization: getAuthHeader(apiKey),
          Accept: "application/json",
        },
      });

      if (res.ok) {
        return (await res.json()) as BancontactProPayment;
      }

      lastErr = await res.text();
    } catch (e: any) {
      lastErr = e?.message ?? String(e);
    }
  }

  throw new Error(`Bancontact Pro get payment failed: ${lastErr}`);
}
