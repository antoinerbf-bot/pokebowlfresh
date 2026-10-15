import { createFileRoute } from "@tanstack/react-router";
import { getBancontactProApiKey } from "../../lib/bancontact-pro.server";
import { getMollieApiKey } from "../../lib/mollie.server";
import { getAllBankKeyCandidates, getCheckedFiles, loadAndGetEnv } from "../../lib/env.server";

export const Route = createFileRoute("/api/bank-status")({
  server: {
    handlers: {
      GET: async () => {
        loadAndGetEnv();

        const candidates = getAllBankKeyCandidates();
        const bancontactKey = getBancontactProApiKey();
        const mollieKey = getMollieApiKey();

        const results: Record<string, any> = {
          timestamp: new Date().toISOString(),
          bancontactConfigured: Boolean(bancontactKey),
          mollieConfigured: Boolean(mollieKey),
          detectedVariables: candidates.map((c) => ({
            name: c.name,
            masked: c.maskedValue,
          })),
          checkedEnvFiles: getCheckedFiles(),
          existingEnvKeys: Object.keys(process.env).filter(
            (k) =>
              !k.startsWith("npm_") &&
              !k.startsWith("NVM_") &&
              !k.startsWith("PASSENGER_") &&
              !["PATH", "PWD", "SHLVL", "_", "HOME", "USER", "SHELL", "LOGNAME"].includes(k),
          ),
        };

        // Test Mollie if key present
        if (mollieKey) {
          try {
            const mRes = await fetch("https://api.mollie.com/v2/methods", {
              headers: { Authorization: `Bearer ${mollieKey}` },
            });
            const mData = await mRes.json().catch(() => null);
            results.mollieTest = {
              status: mRes.status,
              ok: mRes.ok,
              methods: mRes.ok && mData?._embedded?.methods
                ? mData._embedded.methods.map((m: any) => m.id)
                : undefined,
              error: !mRes.ok ? mData?.detail || mData?.title || mRes.statusText : undefined,
            };
          } catch (e: any) {
            results.mollieTest = {
              status: 0,
              ok: false,
              error: e?.message ?? String(e),
            };
          }
        }

        // Test Bancontact Pro / Payconiq if key present
        if (bancontactKey) {
          const endpoints = [
            { name: "Payconiq Prod", url: "https://api.payconiq.com/v3/payments" },
            { name: "Payconiq Preprod (Test)", url: "https://api.preprod.payconiq.com/v3/payments" },
            { name: "Bancontact Net Prod", url: "https://merchant.api.bancontact.net/v3/payments" },
            { name: "Bancontact Net Preprod (Test)", url: "https://merchant.api.preprod.bancontact.net/v3/payments" },
          ];
          const bancontactTests: any[] = [];

          for (const ep of endpoints) {
            try {
              const bRes = await fetch(ep.url, {
                method: "POST",
                headers: {
                  Authorization: bancontactKey.toLowerCase().startsWith("bearer ")
                    ? bancontactKey
                    : `Bearer ${bancontactKey}`,
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  amount: 1000,
                  currency: "EUR",
                  description: "Test Poke N Bowl",
                  reference: "TEST001",
                }),
              });
              const bText = await bRes.text().catch(() => "");
              bancontactTests.push({
                name: ep.name,
                endpoint: ep.url,
                status: bRes.status,
                authorized: bRes.status !== 401 && bRes.status !== 403,
                rawResponse: bText.slice(0, 300),
              });
            } catch (e: any) {
              bancontactTests.push({
                name: ep.name,
                endpoint: ep.url,
                status: 0,
                error: e?.message ?? String(e),
              });
            }
          }

          results.bancontactTest = bancontactTests;
        }

        return new Response(JSON.stringify(results, null, 2), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store, max-age=0",
          },
        });
      },
    },
  },
});
