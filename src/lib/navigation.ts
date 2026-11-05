/**
 * Utilitaires de guidage GPS natif (Livreurs Poke N Bowl)
 * Déclenche l'ouverture directe des applications mobiles natives (Google Maps, Waze, Apple Plans)
 * au lieu d'ouvrir une page web dans le navigateur.
 */

export function openGoogleMapsApp(address: string) {
  if (typeof window === "undefined" || !address) return;
  const trimmed = address.trim();
  if (!trimmed) return;
  const encoded = encodeURIComponent(trimmed);
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAndroid) {
    // 1. Android: Utilise l'Intent Android officiel pour lancer l'application Google Maps native
    // sans ouvrir d'onglet dans le navigateur web Chrome
    window.location.href = `intent://maps.google.com/maps?daddr=${encoded}#Intent;scheme=https;package=com.google.android.apps.maps;end`;
    setTimeout(() => {
      // Fallback intent de guidage direct si nécessaire
      try {
        window.location.href = `google.navigation:q=${encoded}&mode=d`;
      } catch {}
    }, 400);
    return;
  }

  if (isIOS) {
    // 2. iOS: Schéma d'URL natif pour l'application Google Maps
    const start = Date.now();
    window.location.href = `comgooglemaps://?daddr=${encoded}&directionsmode=driving`;

    // Si Google Maps n'est pas installé sur l'iPhone, bascule automatiquement sur Apple Plans natif
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.location.href = `maps://?daddr=${encoded}&dirflg=d`;
      }
    }, 500);
    return;
  }

  // 3. Desktop / Autre: Ouvre Google Maps dans un nouvel onglet
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${encoded}`, "_blank");
}

export function openWazeApp(address: string) {
  if (typeof window === "undefined" || !address) return;
  const trimmed = address.trim();
  if (!trimmed) return;
  const encoded = encodeURIComponent(trimmed);
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isMobile) {
    const start = Date.now();
    // Lance l'application Waze native
    window.location.href = `waze://?q=${encoded}&navigate=yes`;
    setTimeout(() => {
      // Fallback web si l'app Waze n'est pas installée
      if (Date.now() - start < 1500) {
        window.location.href = `https://waze.com/ul?q=${encoded}&navigate=yes`;
      }
    }, 500);
    return;
  }

  window.open(`https://waze.com/ul?q=${encoded}&navigate=yes`, "_blank");
}

export function openApplePlansApp(address: string) {
  if (typeof window === "undefined" || !address) return;
  const trimmed = address.trim();
  if (!trimmed) return;
  const encoded = encodeURIComponent(trimmed);
  // Ouvre directement l'application native Apple Plans (toujours installée sur iPhone / iPad / Mac)
  window.location.href = `maps://?daddr=${encoded}&dirflg=d`;
}
