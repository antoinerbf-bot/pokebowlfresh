import React from "react";

// Photos produits — le fichier crousty-chicken-original.jpeg est l’image originale fournie.
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlScampis      from "@/assets/bowl-scampis.jpg";
import bowlSaumon       from "@/assets/bowl-saumon.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import bowlCroustyCurry from "@/assets/crousty-chicken-original.jpeg";

const images: Record<string, string> = {
  "sweet-chicken":                 bowlSweetChicken,
  "scampis-royaux":                bowlScampis,
  "saumon-wasabi":                 bowlSaumon,
  "spicy-chicken":                 bowlSpicyChicken,
  "crousty-chicken-curry":         bowlCroustyCurry,
  "crousty-chicken-sauce-blanche": bowlCroustyCurry,
  "sur-mesure":                    bowlSaumon,
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

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-[#eee8dc] text-[10px] font-bold uppercase tracking-[0.12em] text-[#7d8b83] ${className}`}
      >
        Photo produit
      </div>
    );
  }

  const isCrousty = dishId === "crousty-chicken-curry" || dishId === "crousty-chicken-sauce-blanche";

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${isCrousty ? "object-contain bg-white" : "object-cover"} ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
