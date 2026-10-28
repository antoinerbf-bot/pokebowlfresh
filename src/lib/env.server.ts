import fs from "node:fs";
import path from "node:path";

function parseEnvFile(filePath: string): Record<string, string> {
  try {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, "utf-8");
    const result: Record<string, string> = {};
    for (const rawLine of content.split("\n")) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const eqIdx = line.indexOf("=");
      if (eqIdx === -1) continue;
      const key = line.slice(0, eqIdx).trim();
      let val = line.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      result[key] = val;
    }
    return result;
  } catch {
    return {};
  }
}

let loaded = false;

const candidateFiles = [
  path.resolve(process.cwd(), ".env"),
  path.resolve(process.cwd(), ".env.local"),
  "/home/puzo3938/pokenbowl.be/.env",
  "/home/puzo3938/.env",
  "/home/puzo3938/repositories/pokebowlfresh-git/.env",
  "/home/puzo3938/repositories/pokebowlfresh-cpanel/.env",
];

export function getCheckedFiles(): { file: string; exists: boolean }[] {
  return candidateFiles.map((f) => ({
    file: f,
    exists: fs.existsSync(f),
  }));
}

export function loadAndGetEnv(): NodeJS.ProcessEnv {
  if (!loaded) {
    for (const file of candidateFiles) {
      const parsed = parseEnvFile(file);
      for (const [k, v] of Object.entries(parsed)) {
        if (!process.env[k]) {
          process.env[k] = v;
        }
      }
    }
    loaded = true;
  }

  return process.env;
}

export function getAllBankKeyCandidates(): {
  name: string;
  source: "process.env" | ".env";
  maskedValue: string;
  value: string;
}[] {
  const env = loadAndGetEnv();
  const bankPatterns = [
    "BANCONTACT",
    "PAYCONIQ",
    "MOLLIE",
    "STRIPE",
    "PAYMENT",
    "VIVA",
    "WORLDLINE",
  ];

  const found: {
    name: string;
    source: "process.env" | ".env";
    maskedValue: string;
    value: string;
  }[] = [];

  for (const [k, v] of Object.entries(env)) {
    if (!v) continue;
    const upper = k.toUpperCase();
    if (bankPatterns.some((pattern) => upper.includes(pattern)) || upper === "API_KEY") {
      const str = String(v).trim();
      const masked =
        str.length > 8
          ? `${str.slice(0, 4)}...${str.slice(-4)} (${str.length} chars)`
          : `**** (${str.length} chars)`;
      found.push({
        name: k,
        source: "process.env",
        maskedValue: masked,
        value: str,
      });
    }
  }

  return found;
}
