# Poke N Bowl Visé

Restaurant ordering website for Poke N Bowl Visé.

## Deployment

Production deployment is **GitHub + Vercel + Nitro**.

Cloudflare Workers, Wrangler, and Cloudflare configuration are intentionally not used by this project.

## Payments

Online payments use Mollie. The website receives Mollie webhooks and fetches the latest payment status before an order is treated as paid.

## Printing

A small custom Windows printer agent is included in `printer-agent/`.

It:
- runs on the restaurant's Windows computer;
- polls the website for paid/on-site orders;
- sends ESC/POS directly to the MUNBYN printer over the local network;
- automatically retries failed prints;
- has no QZ Tray dependency and no recurring printer-software subscription.

The MUNBYN ITPP047 must be connected by Ethernet to the same local network as the Windows computer. MUNBYN documents Epson mode and ESC/POS support for this printer family.

## Required Vercel environment variables

- `MOLLIE_API_KEY`
- `DATABASE_URL`
- `PRINTER_AGENT_SECRET`

Secrets belong in Vercel Environment Variables, not in GitHub.

