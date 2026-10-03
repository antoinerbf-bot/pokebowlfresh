import React from "react";

// ─── Nouvelles photos culinaires professionnelles ──────────────────────────────
import bowlGyros        from "@/assets/bowl-gyros.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlScampis      from "@/assets/bowl-scampis.jpg";
import bowlSaumon       from "@/assets/bowl-saumon.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";
import bowlCroustyCurry from "@/assets/bowl-crousty-curry.jpg";
// Pour crousty-blanche : on utilise crousty-curry (même style) en attendant regen
import bowlCroustyBlanche from "@/assets/bowl-crousty.jpg";

const images: Record<string, string> = {
  "mighty-gyros":                  bowlGyros,
  "sweet-chicken":                 bowlSweetChicken,
  "scampis-royaux":                bowlScampis,
  "saumon-wasabi":                 bowlSaumon,
  "spicy-chicken":                 bowlSpicyChicken,
  "crousty-chicken-curry":         bowlCroustyCurry,
  "crousty-chicken-sauce-blanche": bowlCroustyBlanche,
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
      className={`h-full w-full object-cover ${className}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
