import React from "react";
import menuCollage from "@/assets/poke-menu-collage.jpg";

const positions: Record<string, string> = {
  "mighty-gyros": "0% 0%",
  "sweet-chicken": "50% 0%",
  "scampis-royaux": "100% 0%",
  "saumon-wasabi": "0% 100%",
  "spicy-chicken": "33.333% 100%",
  "crousty-chicken-curry": "66.666% 100%",
  "crousty-chicken-sauce-blanche": "100% 100%",
};

const bottomIds = new Set([
  "saumon-wasabi",
  "spicy-chicken",
  "crousty-chicken-curry",
  "crousty-chicken-sauce-blanche",
]);

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

  if (!position) {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}>
        Photo produit
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden rounded-2xl bg-[#eee8dc] ${className}`}
    >
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${menuCollage})`,
          backgroundPosition: position,
          backgroundSize: `${bottomIds.has(dishId) ? "400%" : "300%"} 200%`,
        }}
      />
    </div>
  );
}
