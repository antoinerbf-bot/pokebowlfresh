import React from "react";

// Photos produits haute définition — chaque recette Crousty dispose de son visuel dédié.
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlScampis      from "@/assets/bowl-scampis.jpg";
import bowlSaumon       from "@/assets/hero-saumon-clean-wide.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
import bowlCroustyBlanche from "@/assets/bowl-crousty-blanche.jpg";

const images: Record<string, string> = {
  "sweet-chicken":                 bowlSweetChicken,
  "scampis-royaux":                bowlScampis,
  "saumon-wasabi":                 bowlSaumon,
  "spicy-chicken":                 bowlSpicyChicken,
  "crousty-chicken-curry":         bowlCroustyCurry,
  "crousty-chicken-sauce-blanche": bowlCroustyBlanche,
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

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover object-center ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
