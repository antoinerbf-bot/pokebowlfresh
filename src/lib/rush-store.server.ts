import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

export interface RushPauseRecord {
  id: string;
  active: boolean;
  startedAt: string;
  durationMinutes: number;
  endsAt: string;
  activatedBy: string;
  actualEnd?: string;
  cancelledManually?: boolean;
  messages: {
    fr: string;
    en: string;
    nl: string;
  };
}

export interface RushStoreData {
  current: RushPauseRecord | null;
  history: RushPauseRecord[];
}

function getCandidatePaths(): string[] {
  const candidateDirs = [
    process.env.ORDERS_DATA_DIR,
    "/home/puzo3938/pokenbowl.be",
    process.cwd(),
    "/tmp",
  ].filter(Boolean) as string[];

  const paths: string[] = [];
  for (const dir of candidateDirs) {
    try {
      paths.push(path.join(dir, "pokenbowl-rush.json"));
    } catch {}
  }
  return paths;
}

let memoryRushData: RushStoreData = { current: null, history: [] };
let lastLoadedTime = 0;

function loadRushData(force = false): void {
  const now = Date.now();
  if (!force && now - lastLoadedTime < 400 && memoryRushData.current !== null) {
    return;
  }
  lastLoadedTime = now;

  const candidates = getCandidatePaths();
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        if (raw && raw.trim().length > 2) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === "object") {
            memoryRushData = {
              current: parsed.current ?? null,
              history: Array.isArray(parsed.history) ? parsed.history : [],
            };
            return;
          }
        }
      }
    } catch {}
  }
}

function saveRushData(): void {
  try {
    const jsonStr = JSON.stringify(memoryRushData, null, 2);
    const candidates = getCandidatePaths();

    for (const filePath of candidates) {
      try {
        const dir = path.dirname(filePath);
        if (fs.existsSync(dir)) {
          fs.writeFileSync(filePath, jsonStr, "utf-8");
        }
      } catch {}
    }

    try {
      fs.writeFileSync("/tmp/pokenbowl-rush.json", jsonStr, "utf-8");
    } catch {}
  } catch (err) {
    console.error("[RushStore] Échec sauvegarde pokenbowl-rush.json:", err);
  }
}

function isPostgresConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

let rushSchemaReady: Promise<void> | undefined;
async function ensureRushDbSchema(): Promise<void> {
  if (!isPostgresConfigured()) return;
  if (!rushSchemaReady) {
    rushSchemaReady = (async () => {
      const sql = neon(process.env.DATABASE_URL!);
      await sql`
        CREATE TABLE IF NOT EXISTS rush_pauses (
          id TEXT PRIMARY KEY,
          active BOOLEAN NOT NULL DEFAULT false,
          started_at TIMESTAMPTZ NOT NULL,
          duration_minutes INTEGER NOT NULL,
          ends_at TIMESTAMPTZ NOT NULL,
          activated_by TEXT NOT NULL,
          actual_end TIMESTAMPTZ,
          cancelled_manually BOOLEAN NOT NULL DEFAULT false,
          messages_json TEXT NOT NULL
        )
      `;
    })().catch((err) => {
      rushSchemaReady = undefined;
      throw err;
    });
  }
  await rushSchemaReady;
}

export function buildRushMessages(durationMinutes: number): { fr: string; en: string; nl: string } {
  return {
    fr: `🔥 Prise de commandes en pause — Victime de notre succès ! Notre cuisine prépare vos bowls avec soin. Reprise des commandes dans ${durationMinutes} minutes.`,
    en: `🔥 Orders paused — Victim of our own success! Our kitchen is preparing current bowls with care. Resuming in ${durationMinutes} minutes.`,
    nl: `🔥 Bestellingen gepauzeerd — Slachtoffer van ons eigen succes! Onze keuken bereidt uw bowls met zorg. Heropening over ${durationMinutes} minuten.`,
  };
}

/**
 * Récupère l'état courant de la pause rush côté serveur.
 * Si le délai est expiré, la réouverture automatique s'exécute immédiatement.
 */
export async function getRushState(): Promise<{
  isPaused: boolean;
  pause: RushPauseRecord | null;
  remainingSeconds: number;
}> {
  loadRushData(true);
  const now = Date.now();

  if (memoryRushData.current && memoryRushData.current.active) {
    const endsAtMs = new Date(memoryRushData.current.endsAt).getTime();
    if (now >= endsAtMs) {
      // 🚀 Réouverture automatique ! La pause est terminée sans intervention humaine.
      const endedRecord: RushPauseRecord = {
        ...memoryRushData.current,
        active: false,
        actualEnd: new Date(now).toISOString(),
        cancelledManually: false,
      };
      memoryRushData.history.unshift(endedRecord);
      memoryRushData.current = null;
      saveRushData();

      if (isPostgresConfigured()) {
        try {
          await ensureRushDbSchema();
          const sql = neon(process.env.DATABASE_URL!);
          await sql`
            UPDATE rush_pauses
            SET active = false, actual_end = ${endedRecord.actualEnd}
            WHERE id = ${endedRecord.id}
          `;
        } catch {}
      }

      return { isPaused: false, pause: null, remainingSeconds: 0 };
    }

    const remainingSeconds = Math.max(0, Math.ceil((endsAtMs - now) / 1000));
    return {
      isPaused: true,
      pause: memoryRushData.current,
      remainingSeconds,
    };
  }

  return { isPaused: false, pause: null, remainingSeconds: 0 };
}

/**
 * Active une nouvelle pause rush depuis le POS (10, 20 ou 30 minutes).
 */
export async function activateRushPause(
  durationMinutes: 10 | 20 | 30,
  activatedBy = "Caisse POS",
): Promise<RushPauseRecord> {
  loadRushData(true);
  const now = new Date();
  const endsAt = new Date(now.getTime() + durationMinutes * 60 * 1000);
  const id = `rush_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const messages = buildRushMessages(durationMinutes);

  // Si une pause précédente était active, la clore dans l'historique
  if (memoryRushData.current && memoryRushData.current.active) {
    memoryRushData.history.unshift({
      ...memoryRushData.current,
      active: false,
      actualEnd: now.toISOString(),
      cancelledManually: true,
    });
  }

  const record: RushPauseRecord = {
    id,
    active: true,
    startedAt: now.toISOString(),
    durationMinutes,
    endsAt: endsAt.toISOString(),
    activatedBy,
    messages,
  };

  memoryRushData.current = record;
  saveRushData();

  if (isPostgresConfigured()) {
    try {
      await ensureRushDbSchema();
      const sql = neon(process.env.DATABASE_URL!);
      await sql`
        INSERT INTO rush_pauses (
          id, active, started_at, duration_minutes, ends_at, activated_by, messages_json
        ) VALUES (
          ${record.id}, ${record.active}, ${record.startedAt}, ${record.durationMinutes},
          ${record.endsAt}, ${record.activatedBy}, ${JSON.stringify(record.messages)}
        )
      `;
    } catch (err) {
      console.error("[RushStore] Erreur insert Postgres rush_pause:", err);
    }
  }

  return record;
}

/**
 * Annulation manuelle anticipée de la pause depuis le POS.
 */
export async function cancelRushPause(
  cancelledBy = "Caisse POS",
): Promise<{ success: boolean; reopenedAt: string }> {
  loadRushData(true);
  const now = new Date().toISOString();

  if (memoryRushData.current && memoryRushData.current.active) {
    const closed: RushPauseRecord = {
      ...memoryRushData.current,
      active: false,
      actualEnd: now,
      cancelledManually: true,
    };
    memoryRushData.history.unshift(closed);
    memoryRushData.current = null;
    saveRushData();

    if (isPostgresConfigured()) {
      try {
        await ensureRushDbSchema();
        const sql = neon(process.env.DATABASE_URL!);
        await sql`
          UPDATE rush_pauses
          SET active = false, actual_end = ${now}, cancelled_manually = true
          WHERE id = ${closed.id}
        `;
      } catch {}
    }
  }

  return { success: true, reopenedAt: now };
}

/**
 * Récupère l'historique des pauses rush pour audit & statistiques.
 */
export async function getRushHistory(): Promise<RushPauseRecord[]> {
  loadRushData(true);
  return memoryRushData.history.slice(0, 50);
}

