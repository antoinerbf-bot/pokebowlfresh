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
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center rounded-[22px] bg-[#eee8dc] text-[10px] font-black uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}
      >
        Photo produit
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#efe9dd] ${className}`}>
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${pokeProducts})`,
          backgroundPosition: position,
          backgroundSize: "300% 300%",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.03),transparent_35%,rgba(0,0,0,.05))]" />
    </div>
  );
}
