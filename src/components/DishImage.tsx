import React from "react";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";
import heroPoke from "@/assets/hero-poke.jpg";

const images: Record<string, string> = {
  "mighty-gyros": bowlChicken,
  "sweet-chicken": bowlChicken,
  "scampis-royaux": bowlScampi,
  "saumon-wasabi": heroPoke,
  "spicy-chicken": bowlChicken,
  "crousty-chicken-curry": bowlCrousty,
  "crousty-chicken-sauce-blanche": bowlCrousty,
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
    <div className={`h-full w-full bg-[#f3f3ee] p-2 sm:p-2.5 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-[18px] object-cover shadow-[0_18px_38px_-22px_rgba(23,35,31,.35)]"
      />
    </div>
  );
}
