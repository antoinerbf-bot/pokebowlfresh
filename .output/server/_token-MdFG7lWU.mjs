import { _ as lazyRouteComponent, v as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_token-MdFG7lWU.js
/**
* Utilitaires de guidage GPS natif (Livreurs Poke N Bowl)
* Déclenche l'ouverture directe des applications mobiles natives (Google Maps, Waze, Apple Plans)
* au lieu d'ouvrir une page web dans le navigateur.
*/
function openGoogleMapsApp(address) {
	if (typeof window === "undefined" || !address) return;
	const trimmed = address.trim();
	if (!trimmed) return;
	const encoded = encodeURIComponent(trimmed);
	const ua = navigator.userAgent || "";
	const isAndroid = /Android/i.test(ua);
	const isIOS = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	if (isAndroid) {
		window.location.href = `intent://maps.google.com/maps?daddr=${encoded}#Intent;scheme=https;package=com.google.android.apps.maps;end`;
		setTimeout(() => {
			try {
				window.location.href = `google.navigation:q=${encoded}&mode=d`;
			} catch {}
		}, 400);
		return;
	}
	if (isIOS) {
		const start = Date.now();
		window.location.href = `comgooglemaps://?daddr=${encoded}&directionsmode=driving`;
		setTimeout(() => {
			if (Date.now() - start < 1500) window.location.href = `maps://?daddr=${encoded}&dirflg=d`;
		}, 500);
		return;
	}
	window.open(`https://www.google.com/maps/dir/?api=1&destination=${encoded}`, "_blank");
}
function openWazeApp(address) {
	if (typeof window === "undefined" || !address) return;
	const trimmed = address.trim();
	if (!trimmed) return;
	const encoded = encodeURIComponent(trimmed);
	const ua = navigator.userAgent || "";
	if (/Android|iPhone|iPad|iPod/i.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
		const start = Date.now();
		window.location.href = `waze://?q=${encoded}&navigate=yes`;
		setTimeout(() => {
			if (Date.now() - start < 1500) window.location.href = `https://waze.com/ul?q=${encoded}&navigate=yes`;
		}, 500);
		return;
	}
	window.open(`https://waze.com/ul?q=${encoded}&navigate=yes`, "_blank");
}
function openApplePlansApp(address) {
	if (typeof window === "undefined" || !address) return;
	const trimmed = address.trim();
	if (!trimmed) return;
	const encoded = encodeURIComponent(trimmed);
	window.location.href = `maps://?daddr=${encoded}&dirflg=d`;
}
var $$splitComponentImporter = () => import("./_token-DL1MJmE3.mjs");
var Route = createFileRoute("/track/$token")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
export { openWazeApp as i, openApplePlansApp as n, openGoogleMapsApp as r, Route as t };
