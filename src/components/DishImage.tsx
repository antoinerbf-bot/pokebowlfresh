import React from "react";
import pokeProducts from "@/assets/poke-products.webp";

const positions: Record<string, string> = {
  "mighty-gyros": "0% 0%",
  "sweet-chicken": "50% 0%",
  "scampis-royaux": "100% 0%",
  "saumon-wasabi": "0% 50%",
  "spicy-chicken": "50% 50%",
  "crousty-chicken-curry": "100% 50%",
  "crousty-chicken-sauce-blanche": "0% 100%",
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

  if (!position) {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}>
        Photo produit
      </div>
    );
  }

  return (
    <div className={`h-full w-full bg-[#f3f3ee] p-2 sm:p-2.5 ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className="h-full w-full overflow-hidden rounded-[18px] bg-[#eef0eb] bg-no-repeat shadow-[0_18px_38px_-22px_rgba(23,35,31,.35)]"
        style={{
          backgroundImage: `url(${pokeProducts})`,
          backgroundSize: "300% 300%",
          backgroundPosition: position,
        }}
      />
    </div>
  );
}
