//#region node_modules/.nitro/vite/services/ssr/assets/opening-hours-DNvuttI_.js
/**
* Service officiel des horaires d'ouverture et de livraison Poke N Bowl Visé.
* Fuseau horaire garanti : Europe/Brussels (Visé, Belgique).
*
* RÈGLES STRICTES :
* - Prise de commandes : ouverture à 17h40.
* - Livraisons à domicile : de 18h00 à 20h30.
* - Fin de service : 20h30.
* - Aucune livraison le midi.
*/
var OFFICIAL_HOURS = {
	ORDER_OPEN_HOUR: 17,
	ORDER_OPEN_MINUTE: 40,
	DELIVERY_START_HOUR: 18,
	DELIVERY_START_MINUTE: 0,
	SERVICE_END_HOUR: 20,
	SERVICE_END_MINUTE: 30,
	TIMEZONE: "Europe/Brussels"
};
/**
* Récupère l'heure courante exacte dans le fuseau Europe/Brussels.
*/
function getBrusselsNow(nowInput = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: OFFICIAL_HOURS.TIMEZONE,
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false
	}).formatToParts(nowInput);
	const getPart = (type) => {
		const p = parts.find((pt) => pt.type === type);
		return p ? parseInt(p.value, 10) : 0;
	};
	const year = getPart("year");
	const month = getPart("month");
	const day = getPart("day");
	let hours = getPart("hour");
	if (hours === 24) hours = 0;
	const minutes = getPart("minute");
	const seconds = getPart("second");
	const totalMinutes = hours * 60 + minutes;
	const pad = (n) => n < 10 ? `0${n}` : `${n}`;
	const formatted = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
	const todayTarget = (targetHour, targetMinute, targetSec = 0) => {
		const currentMs = (hours * 3600 + minutes * 60 + seconds) * 1e3;
		const diffMs = (targetHour * 3600 + targetMinute * 60 + targetSec) * 1e3 - currentMs;
		return new Date(nowInput.getTime() + diffMs);
	};
	return {
		year,
		month,
		day,
		hours,
		minutes,
		seconds,
		totalMinutes,
		formatted,
		todayTarget
	};
}
/**
* Calcule l'état dynamique complet des horaires et prépare les messages marketing.
*/
function getServiceSchedule(nowDate = /* @__PURE__ */ new Date()) {
	const brussels = getBrusselsNow(nowDate);
	const currentTotalSeconds = brussels.hours * 3600 + brussels.minutes * 60 + brussels.seconds;
	const orderOpenSeconds = OFFICIAL_HOURS.ORDER_OPEN_HOUR * 3600 + OFFICIAL_HOURS.ORDER_OPEN_MINUTE * 60;
	const deliveryStartSeconds = OFFICIAL_HOURS.DELIVERY_START_HOUR * 3600 + OFFICIAL_HOURS.DELIVERY_START_MINUTE * 60;
	const serviceEndSeconds = OFFICIAL_HOURS.SERVICE_END_HOUR * 3600 + OFFICIAL_HOURS.SERVICE_END_MINUTE * 60;
	let status = "before_opening";
	let isOrderOpen = false;
	let isDeliveryOpen = false;
	let secondsUntilOrderOpen = 0;
	let secondsUntilDeliveryStart = 0;
	let secondsUntilServiceEnd = 0;
	if (currentTotalSeconds < orderOpenSeconds) {
		status = "before_opening";
		isOrderOpen = false;
		isDeliveryOpen = false;
		secondsUntilOrderOpen = orderOpenSeconds - currentTotalSeconds;
		secondsUntilDeliveryStart = deliveryStartSeconds - currentTotalSeconds;
		secondsUntilServiceEnd = serviceEndSeconds - currentTotalSeconds;
	} else if (currentTotalSeconds >= orderOpenSeconds && currentTotalSeconds <= serviceEndSeconds) {
		status = "open";
		isOrderOpen = true;
		isDeliveryOpen = currentTotalSeconds >= deliveryStartSeconds;
		secondsUntilOrderOpen = 0;
		secondsUntilDeliveryStart = Math.max(0, deliveryStartSeconds - currentTotalSeconds);
		secondsUntilServiceEnd = serviceEndSeconds - currentTotalSeconds;
	} else {
		status = "closed_for_day";
		isOrderOpen = false;
		isDeliveryOpen = false;
		const secondsUntilMidnight = 86400 - currentTotalSeconds;
		secondsUntilOrderOpen = secondsUntilMidnight + orderOpenSeconds;
		secondsUntilDeliveryStart = secondsUntilMidnight + deliveryStartSeconds;
		secondsUntilServiceEnd = 0;
	}
	const messages = {
		before_opening: {
			fr: "Ce soir, c'est PokeNBowl ! Les commandes ouvrent à 17h40. Prépare ton bowl !",
			en: "Tonight is PokeNBowl night! Orders open at 5:40 PM. Prepare your bowl!",
			nl: "Vanavond is het PokeNBowl-tijd! Bestellingen openen om 17:40. Stel je bowl samen!"
		},
		open: {
			fr: "C'est parti ! Les commandes sont ouvertes. Fais-toi plaisir !",
			en: "It's on! Orders are open. Treat yourself!",
			nl: "Het is zover! Bestellingen zijn geopend. Geniet ervan!"
		},
		closed_for_day: {
			fr: "Les commandes du jour sont terminées. On se retrouve demain !",
			en: "Orders for today are closed. See you tomorrow!",
			nl: "De bestellingen voor vandaag zijn gesloten. Tot morgen!"
		}
	}[status];
	const subMessages = {
		before_opening: {
			fr: "Prises de commandes dès 17h40 · Début des livraisons à 18h00 · Aucune livraison le midi.",
			en: "Orders start at 5:40 PM · Deliveries start at 6:00 PM · No lunch deliveries.",
			nl: "Bestellingen vanaf 17:40 · Leveringen vanaf 18:00 · Geen levering 's middags."
		},
		open: {
			fr: isDeliveryOpen ? "Commandes et livraisons en cours jusqu'à 20h30 · À emporter & livraison à domicile." : "Commandes ouvertes ! Vos livraisons débutent à 18h00 précises jusqu'à 20h30.",
			en: isDeliveryOpen ? "Orders and deliveries ongoing until 8:30 PM · Takeaway & home delivery." : "Orders open! Deliveries start at 6:00 PM sharp until 8:30 PM.",
			nl: isDeliveryOpen ? "Bestellingen en leveringen lopen tot 20:30 · Afhalen & thuislevering." : "Bestellingen geopend! Leveringen starten stipt om 18:00 tot 20:30."
		},
		closed_for_day: {
			fr: "Service terminé pour aujourd'hui. Réouverture des commandes demain dès 17h40 !",
			en: "Service finished for today. Reopening tomorrow from 5:40 PM!",
			nl: "Dienst voor vandaag afgelopen. Heropening morgen vanaf 17:40!"
		}
	}[status];
	return {
		status,
		isOrderOpen,
		isDeliveryOpen,
		currentBrusselsTime: {
			hours: brussels.hours,
			minutes: brussels.minutes,
			seconds: brussels.seconds,
			formatted: brussels.formatted
		},
		secondsUntilOrderOpen,
		secondsUntilDeliveryStart,
		secondsUntilServiceEnd,
		messages,
		subMessages,
		deliveryNotice: {
			fr: "🛵 Livraisons 7j/7 de 18h00 à 20h30 · Pas de livraison le midi",
			en: "🛵 Deliveries 7/7 from 6:00 PM to 8:30 PM · No lunch deliveries",
			nl: "🛵 Leveringen 7/7 van 18:00 tot 20:30 · Geen middaglevering"
		}
	};
}
/**
* Formatage d'un nombre de secondes en "HH:MM:SS" ou "MM:SS".
*/
function formatCountdown(totalSeconds) {
	if (totalSeconds <= 0) return "00:00";
	const h = Math.floor(totalSeconds / 3600);
	const m = Math.floor(totalSeconds % 3600 / 60);
	const s = totalSeconds % 60;
	const pad = (v) => v < 10 ? `0${v}` : `${v}`;
	if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
	return `${pad(m)}:${pad(s)}`;
}
//#endregion
export { getServiceSchedule as n, formatCountdown as t };
