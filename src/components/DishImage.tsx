import bowlChicken from "@/assets/bowl-chicken.jpg";
import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";

const images: Record<string, string> = {
  "mighty-gyros": bowlCrousty,
  "sweet-chicken": bowlChicken,
  "scampis-royaux": bowlScampi,
  "saumon-wasabi": bowlScampi,
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
  const image = images[dishId] ?? bowlChicken;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url("${image}")`,
        minHeight: "100%",
      }}
    />
  );
}
