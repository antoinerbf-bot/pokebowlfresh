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
  const position = positions[dishId];
  const fallback = fallbackImages[dishId];

  if (position) {
    return (
      <div className={`h-full w-full bg-[#f3f3ee] p-2 sm:p-2.5 ${className}`}>
        <div
          role="img"
          aria-label={alt}
          className="h-full w-full overflow-hidden rounded-[18px] bg-[#eef0eb] bg-no-repeat shadow-[0_18px_38px_-22px_rgba(23,35,31,.35)]"
          style={{
            backgroundImage: `url(${dishSprite})`,
            backgroundSize: "300% 300%",
            backgroundPosition: position,
          }}
        />
      </div>
    );
  }

  if (fallback) {
    return (
      <div className={`h-full w-full bg-[#f3f3ee] p-2 sm:p-2.5 ${className}`}>
        <img
          src={fallback}
          alt={alt}
          className="h-full w-full rounded-[18px] object-cover shadow-[0_16px_30px_-18px_rgba(55,32,12,.55)]"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}>
      Photo produit
    </div>
  );
}
