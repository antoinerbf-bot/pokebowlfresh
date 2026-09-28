import dishSprite from "@/assets/dish-sprite.webp";

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

export function DishImage({
  dishId,
  alt,
  className = "",
}: {
  dishId: string;
  alt: string;
  className?: string;
}) {
  const position = positions[dishId] ?? "0% 0%";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`overflow-hidden bg-[#081612] bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${dishSprite})`,
        backgroundSize: "300% 300%",
        backgroundPosition: position,
      }}
    />
  );
}
