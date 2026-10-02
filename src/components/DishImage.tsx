import React from "react";
import dishSprite from "@/assets/dish-sprite.webp";
import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";

const positions: Record<string, string> = {
  "beef-teriyaki": "0% 0%",
  "crousty-chicken": "50% 0%",
  "sweet-chicken": "100% 0%",
  "saumon-wasabi": "0% 50%",
  "scampis-royaux": "50% 50%",
  "spicy-chicken": "100% 50%",
  "aloha-classic": "0% 100%",
  "vegan-tofu": "50% 100%",
  "shrimp-mango": "100% 100%",
};

const fallbackImages: Record<string, string> = {
  "mighty-gyros": bowlCrousty,
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
  const position = positions[dishId];
  const fallback = fallbackImages[dishId];

  if (position) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`overflow-hidden rounded-2xl bg-[#081612] bg-no-repeat ${className}`}
        style={{
          backgroundImage: `url(${dishSprite})`,
          backgroundSize: "300% 300%",
          backgroundPosition: position,
        }}
      />
    );
  }

  if (fallback) {
    return (
      <img
        src={fallback}
        alt={alt}
        className={`h-full w-full rounded-2xl object-cover ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}>
      Photo produit
    </div>
  );
}
