import React from "react";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";

const images: Record<string, string> = {
  "mighty-gyros": bowlCrousty,
  "sweet-chicken": bowlChicken,
  "scampis-royaux": bowlScampi,
  "saumon-wasabi": bowlScampi,
  "spicy-chicken": bowlChicken,
  "crousty-chicken-curry": bowlCrousty,
  "crousty-chicken-sauce-blanche": bowlChicken,
};

export function DishImage({
  dishId,
  alt,
  className = "",
}: {
  dishId: string;
  alt: string;
  className?: string;
}) {
  const src = images[dishId];

  if (!src) {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}>
        Photo produit
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full rounded-2xl object-cover ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
