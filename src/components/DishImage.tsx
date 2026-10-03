import React from "react";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import heroPoke from "@/assets/hero-poke.jpg";

const images: Record<string, string> = {
  "mighty-gyros": heroPoke,
  "sweet-chicken": bowlChicken,
  "scampis-royaux": bowlScampi,
  "saumon-wasabi": heroPoke,
  "spicy-chicken": heroPoke,
  "crousty-chicken-curry": bowlCrousty,
  "crousty-chicken-sauce-blanche": bowlCrousty,
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
  const src = images[dishId] ?? heroPoke;

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
