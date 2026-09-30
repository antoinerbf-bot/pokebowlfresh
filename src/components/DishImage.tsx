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
    <img
      src={image}
      alt={alt}
      width={800}
      height={540}
      loading="eager"
      decoding="async"
      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
      className={className}
    />
  );
}
