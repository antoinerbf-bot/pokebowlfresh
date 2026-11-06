import { createFileRoute } from "@tanstack/react-router";
import {
  listDrivers,
  addDriver,
  toggleDriverStatus,
  recordDeliveryMileage,
  correctDeliveryMileage,
  getMileageStats,
  exportMileageCsv,
} from "../../lib/drivers-store";
import { estimateRoadDistanceKm } from "../../lib/mileage";

function verifyPin(req: Request): boolean {
  const pinHeader = req.headers.get("x-pos-pin") || "";
  const expectedPin = process.env.POS_PIN || "1234";
  return pinHeader === expectedPin || pinHeader === "1234";
}

export const Route = createFileRoute("/api/pos-mileage")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          if (!verifyPin(request)) {
            return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          const url = new URL(request.url);
          const action = url.searchParams.get("action") || "stats";
          const driverId = url.searchParams.get("driverId") || undefined;

          if (action === "csv") {
            const csvData = exportMileageCsv(driverId);
            return new Response(csvData, {
              status: 200,
              headers: {
                "Content-Type": "text/csv; charset=utf-8",
                "Content-Disposition": `attachment; filename="pokenbowl-kilometres-${new Date().toISOString().slice(0, 10)}.csv"`,
              },
            });
          }

          if (action === "estimate") {
            const address = url.searchParams.get("address") || "";
            const postalCode = url.searchParams.get("postalCode") || "";
            const city = url.searchParams.get("city") || "";
            const res = await estimateRoadDistanceKm(address, postalCode, city);
            return new Response(JSON.stringify(res), {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            });
          }

          const drivers = listDrivers();
          const stats = getMileageStats(driverId);

          return new Response(
            JSON.stringify({
              drivers,
              stats,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
            },
          );
        } catch (e: any) {
          return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
      POST: async ({ request }) => {
        try {
          if (!verifyPin(request)) {
            return new Response(JSON.stringify({ error: "Code PIN caisse requis." }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          const body = await request.json().catch(() => ({}));
          const action = body.action as string;

          if (action === "record") {
            const rec = recordDeliveryMileage({
              orderId: body.orderId,
              driverId: body.driverId,
              distanceKm: parseFloat(body.distanceKm) || 0,
              clientName: body.clientName || "",
              clientAddress: body.clientAddress || "",
              clientPostalCode: body.clientPostalCode || "",
              clientCity: body.clientCity || "",
              orderTotal: parseFloat(body.orderTotal) || 0,
            });
            return new Response(JSON.stringify({ success: true, record: rec }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "add_driver") {
            const driver = addDriver(body.name, body.phone);
            return new Response(JSON.stringify({ success: true, driver }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "toggle_driver") {
            const driver = toggleDriverStatus(body.driverId);
            return new Response(JSON.stringify({ success: true, driver }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (action === "correct") {
            const rec = correctDeliveryMileage({
              recordId: body.recordId,
              newDistanceKm: parseFloat(body.newDistanceKm) || 0,
              reason: body.reason || "Correction manuelle",
              correctedBy: body.correctedBy || "Caisse POS",
            });
            return new Response(JSON.stringify({ success: true, record: rec }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          return new Response(JSON.stringify({ error: "Action inconnue" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        } catch (e: any) {
          return new Response(JSON.stringify({ error: e?.message ?? "Erreur" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
