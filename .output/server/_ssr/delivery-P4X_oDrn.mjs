//#region node_modules/.nitro/vite/services/ssr/assets/delivery-P4X_oDrn.js
var deliveryZones = [
	{
		postalCode: "3790",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "3798",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4040",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4458",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4600",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4601",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4602",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4606",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4607",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4608",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4670",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4671",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4672",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4680",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4681",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4682",
		minimumOrder: 25,
		feeUnder50: 3
	},
	{
		postalCode: "4683",
		minimumOrder: 40,
		feeUnder50: 5
	},
	{
		postalCode: "4684",
		minimumOrder: 15,
		feeUnder50: 2
	},
	{
		postalCode: "4690",
		minimumOrder: 40,
		feeUnder50: 5
	}
];
function getDeliveryZone(postalCode) {
	const normalized = postalCode.trim().replace(/\s+/g, "");
	return deliveryZones.find((zone) => zone.postalCode === normalized) ?? null;
}
//#endregion
export { getDeliveryZone as t };
