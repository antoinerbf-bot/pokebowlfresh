import fs from "node:fs";
import path from "node:path";

export interface Driver {
  id: string;
  name: string;
  phone?: string;
  active: boolean;
  createdAt: string;
}

export interface DeliveryMileageRecord {
  id: string;
  orderId: string;
  driverId: string;
  driverName: string;
  clientName: string;
  clientAddress: string;
  clientPostalCode: string;
  clientCity: string;
  distanceKm: number;
  originalDistanceKm: number;
  correctionReason?: string;
  correctedBy?: string;
  correctedAt?: string;
  timestamp: string;
  orderTotal: number;
}

export interface DriversStoreData {
  drivers: Driver[];
  records: DeliveryMileageRecord[];
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
      paths.push(path.join(dir, "pokenbowl-drivers.json"));
    } catch {}
  }
  return paths;
}

const DEFAULT_DRIVERS: Driver[] = [
  { id: "drv_thomas", name: "Thomas", phone: "0491 22 33 44", active: true, createdAt: "2026-01-01T00:00:00.000Z" },
  { id: "drv_maxime", name: "Maxime", phone: "0492 55 66 77", active: true, createdAt: "2026-01-01T00:00:00.000Z" },
  { id: "drv_sam",    name: "Sam",    phone: "0493 88 99 00", active: true, createdAt: "2026-01-01T00:00:00.000Z" },
];

let memoryData: DriversStoreData = {
  drivers: DEFAULT_DRIVERS,
  records: [],
};
let lastLoadedTime = 0;

function loadDriversData(force = false): void {
  const now = Date.now();
  if (!force && now - lastLoadedTime < 400 && memoryData.records.length > 0) {
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
            const drivers = Array.isArray(parsed.drivers) && parsed.drivers.length > 0
              ? parsed.drivers
              : DEFAULT_DRIVERS;
            const records = Array.isArray(parsed.records) ? parsed.records : [];
            memoryData = { drivers, records };
            return;
          }
        }
      }
    } catch {}
  }
}

function saveDriversData(): void {
  try {
    const jsonStr = JSON.stringify(memoryData, null, 2);
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
      fs.writeFileSync("/tmp/pokenbowl-drivers.json", jsonStr, "utf-8");
    } catch {}
  } catch (err) {
    console.error("[DriversStore] Échec sauvegarde pokenbowl-drivers.json:", err);
  }
}

export function listDrivers(): Driver[] {
  loadDriversData(true);
  return memoryData.drivers;
}

export function addDriver(name: string, phone?: string): Driver {
  loadDriversData(true);
  const cleanName = name.trim();
  const id = `drv_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const driver: Driver = {
    id,
    name: cleanName,
    phone: phone?.trim(),
    active: true,
    createdAt: new Date().toISOString(),
  };
  memoryData.drivers.push(driver);
  saveDriversData();
  return driver;
}

export function toggleDriverStatus(driverId: string): Driver | null {
  loadDriversData(true);
  const found = memoryData.drivers.find((d) => d.id === driverId);
  if (!found) return null;
  found.active = !found.active;
  saveDriversData();
  return found;
}

/**
 * Enregistre une livraison et ses kilomètres associés.
 * Protection anti-doublon absolue : si la commande existe déjà, elle met à jour sans doubler les kilomètres.
 */
export function recordDeliveryMileage(params: {
  orderId: string;
  driverId: string;
  distanceKm: number;
  clientName: string;
  clientAddress: string;
  clientPostalCode: string;
  clientCity: string;
  orderTotal: number;
}): DeliveryMileageRecord {
  loadDriversData(true);
  const driver = memoryData.drivers.find((d) => d.id === params.driverId);
  const driverName = driver ? driver.name : "Livreur";

  const existingIdx = memoryData.records.findIndex((r) => r.orderId === params.orderId);
  const cleanDistance = Math.max(0.1, Math.round(params.distanceKm * 10) / 10);

  if (existingIdx >= 0) {
    // Mise à jour de la fiche existante (ex: réattribution à un autre livreur)
    const existing = memoryData.records[existingIdx]!;
    const updated: DeliveryMileageRecord = {
      ...existing,
      driverId: params.driverId,
      driverName,
      distanceKm: cleanDistance,
    };
    memoryData.records[existingIdx] = updated;
    saveDriversData();
    return updated;
  }

  const record: DeliveryMileageRecord = {
    id: `mil_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    orderId: params.orderId,
    driverId: params.driverId,
    driverName,
    clientName: params.clientName,
    clientAddress: params.clientAddress,
    clientPostalCode: params.clientPostalCode,
    clientCity: params.clientCity,
    distanceKm: cleanDistance,
    originalDistanceKm: cleanDistance,
    timestamp: new Date().toISOString(),
    orderTotal: params.orderTotal,
  };

  memoryData.records.unshift(record);
  saveDriversData();
  return record;
}

/**
 * Correction manuelle justifiée avec traçabilité comptable.
 */
export function correctDeliveryMileage(params: {
  recordId: string;
  newDistanceKm: number;
  reason: string;
  correctedBy?: string;
}): DeliveryMileageRecord | null {
  loadDriversData(true);
  const record = memoryData.records.find((r) => r.id === params.recordId || r.orderId === params.recordId);
  if (!record) return null;

  record.distanceKm = Math.max(0.1, Math.round(params.newDistanceKm * 10) / 10);
  record.correctionReason = params.reason.trim();
  record.correctedBy = params.correctedBy || "Responsable Caisse";
  record.correctedAt = new Date().toISOString();

  saveDriversData();
  return record;
}

export interface MileageStats {
  totalKm: number;
  totalDeliveries: number;
  avgDistanceKm: number;
  todayKm: number;
  todayDeliveries: number;
  weekKm: number;
  weekDeliveries: number;
  monthKm: number;
  monthDeliveries: number;
  byDriver: Array<{
    driverId: string;
    driverName: string;
    deliveriesCount: number;
    totalKm: number;
  }>;
}

export function getMileageStats(filterDriverId?: string): MileageStats {
  loadDriversData(true);
  let records = memoryData.records;
  if (filterDriverId) {
    records = records.filter((r) => r.driverId === filterDriverId);
  }

  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);

  // Début de semaine (Lundi)
  const monday = new Date(now);
  const day = monday.getDay();
  const diff = monday.getDate() - day + (day === 0 ? -6 : 1);
  monday.setDate(diff);
  monday.setHours(0, 0, 0, 0);

  // Début de mois
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  let todayKm = 0;
  let todayDeliveries = 0;
  let weekKm = 0;
  let weekDeliveries = 0;
  let monthKm = 0;
  let monthDeliveries = 0;
  let totalKm = 0;

  const driverMap = new Map<string, { driverName: string; deliveriesCount: number; totalKm: number }>();

  // Initialiser avec tous les livreurs enregistrés
  for (const d of memoryData.drivers) {
    driverMap.set(d.id, { driverName: d.name, deliveriesCount: 0, totalKm: 0 });
  }

  for (const r of records) {
    const km = Number(r.distanceKm) || 0;
    totalKm += km;

    const rDate = new Date(r.timestamp);
    const rDateStr = r.timestamp.slice(0, 10);

    if (rDateStr === todayStr) {
      todayKm += km;
      todayDeliveries += 1;
    }

    if (rDate >= monday) {
      weekKm += km;
      weekDeliveries += 1;
    }

    if (rDate >= firstOfMonth) {
      monthKm += km;
      monthDeliveries += 1;
    }

    const currentDriver = driverMap.get(r.driverId) || {
      driverName: r.driverName,
      deliveriesCount: 0,
      totalKm: 0,
    };
    currentDriver.deliveriesCount += 1;
    currentDriver.totalKm += km;
    driverMap.set(r.driverId, currentDriver);
  }

  const byDriver = Array.from(driverMap.entries()).map(([driverId, val]) => ({
    driverId,
    driverName: val.driverName,
    deliveriesCount: val.deliveriesCount,
    totalKm: Math.round(val.totalKm * 10) / 10,
  }));

  return {
    totalKm: Math.round(totalKm * 10) / 10,
    totalDeliveries: records.length,
    avgDistanceKm: records.length > 0 ? Math.round((totalKm / records.length) * 10) / 10 : 0,
    todayKm: Math.round(todayKm * 10) / 10,
    todayDeliveries,
    weekKm: Math.round(weekKm * 10) / 10,
    weekDeliveries,
    monthKm: Math.round(monthKm * 10) / 10,
    monthDeliveries,
    byDriver,
  };
}

/**
 * Génération du CSV comptable téléchargeable.
 */
export function exportMileageCsv(filterDriverId?: string): string {
  loadDriversData(true);
  let records = memoryData.records;
  if (filterDriverId) {
    records = records.filter((r) => r.driverId === filterDriverId);
  }

  const headers = [
    "Date",
    "Heure",
    "N_Commande",
    "Livreur",
    "Client",
    "Adresse",
    "Code_Postal",
    "Ville",
    "Distance_KM",
    "Total_Commande_EUR",
    "Correction_Justification",
  ];

  const rows = records.map((r) => {
    const d = new Date(r.timestamp);
    const dateStr = d.toLocaleDateString("fr-BE");
    const timeStr = d.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" });
    const escape = (str?: string) => `"${(str || "").replace(/"/g, '""')}"`;

    return [
      escape(dateStr),
      escape(timeStr),
      escape(r.orderId),
      escape(r.driverName),
      escape(r.clientName),
      escape(r.clientAddress),
      escape(r.clientPostalCode),
      escape(r.clientCity),
      r.distanceKm.toFixed(1),
      (r.orderTotal || 0).toFixed(2),
      escape(r.correctionReason || ""),
    ].join(";");
  });

  return [headers.join(";"), ...rows].join("\r\n");
}
