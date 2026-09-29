// O2Switch / Passenger entry point for the production Nitro build.
// The Git checkout is built during deployment; Passenger only starts the generated server.
import { existsSync } from "node:fs";

const outputEntry = new URL("./.output/server/index.mjs", import.meta.url);

if (!existsSync(outputEntry)) {
  throw new Error("Poke N Bowl: production build missing (.output/server/index.mjs). Run npm run build before starting Passenger.");
}

await import(outputEntry.href);
