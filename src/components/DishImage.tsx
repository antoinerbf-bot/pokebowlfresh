import React from "react";
import mightyGyrosB64 from "@/assets/dishes/mighty-gyros.webp.b64?raw";
import sweetChickenB64 from "@/assets/dishes/sweet-chicken.webp.b64?raw";
import scampisRoyauxB64 from "@/assets/dishes/scampis-royaux.webp.b64?raw";
import saumonWasabiB64 from "@/assets/dishes/saumon-wasabi.webp.b64?raw";
import spicyChickenB64 from "@/assets/dishes/spicy-chicken.webp.b64?raw";
import croustyChickenCurryB64 from "@/assets/dishes/crousty-chicken-curry.webp.b64?raw";
import croustyChickenSauceBlancheB64 from "@/assets/dishes/crousty-chicken-sauce-blanche.webp.b64?raw";

const toDataUrl = (value: string) => `data:image/webp;base64,${value.replace(/\s+/g, "")}`;

const images: Record<string, string> = {
  "mighty-gyros": toDataUrl(mightyGyrosB64),
  "sweet-chicken": toDataUrl(sweetChickenB64),
  "scampis-royaux": toDataUrl(scampisRoyauxB64),
  "saumon-wasabi": toDataUrl(saumonWasabiB64),
  "spicy-chicken": toDataUrl(spicyChickenB64),
  "crousty-chicken-curry": toDataUrl(croustyChickenCurryB64),
  "crousty-chicken-sauce-blanche": toDataUrl(croustyChickenSauceBlancheB64),
};

export function DishImage({
  dishId,
  alt,
  className = "",
  priority = false,
}: {
  dishId: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const src = images[dishId];

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#eee8dc] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.02),transparent_42%,rgba(0,0,0,.06))]" />
    </div>
  );
}
