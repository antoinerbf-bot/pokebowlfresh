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
  "crousty-chicken-sauce-blanche": bowlChicken,
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
      className="relative h-full w-full overflow-hidden bg-[#ece8dc]"
    >
      <div
        className={`h-full w-full bg-cover bg-center bg-no-repeat transition-[filter] duration-500 ${className}`}
        style={{
          backgroundImage: `url("${image}")`,
          minHeight: "100%",
          filter: "saturate(.92) contrast(.98)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,248,230,.08),transparent_45%,rgba(12,31,24,.08))]"
      />
    </div>
  );
}
