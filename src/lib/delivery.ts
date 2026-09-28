export type DeliveryZone = {
  postalCode: string;
  minimumOrder: number;
  feeUnder50: number;
};

export const deliveryZones: DeliveryZone[] = [
  { postalCode: "3790", minimumOrder: 15, feeUnder50: 2 },
  { postalCode: "3798", minimumOrder: 25, feeUnder50: 3 },
  { postalCode: "4040", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4458", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4600", minimumOrder: 15, feeUnder50: 2 },
  { postalCode: "4601", minimumOrder: 25, feeUnder50: 3 },
  { postalCode: "4602", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4606", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4607", minimumOrder: 25, feeUnder50: 3 },
  { postalCode: "4608", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4670", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4671", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4672", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4680", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4681", minimumOrder: 15, feeUnder50: 2 },
  { postalCode: "4682", minimumOrder: 25, feeUnder50: 3 },
  { postalCode: "4683", minimumOrder: 40, feeUnder50: 5 },
  { postalCode: "4684", minimumOrder: 15, feeUnder50: 2 },
  { postalCode: "4690", minimumOrder: 40, feeUnder50: 5 },
];

export function getDeliveryZone(postalCode: string): DeliveryZone | null {
  const normalized = postalCode.trim().replace(/\s+/g, "");
  return deliveryZones.find((zone) => zone.postalCode === normalized) ?? null;
}

export function getDeliveryFee(postalCode: string, subtotal: number): number | null {
  const zone = getDeliveryZone(postalCode);
  if (!zone || subtotal < zone.minimumOrder) return null;
  return subtotal >= 50 ? 0 : zone.feeUnder50;
}
