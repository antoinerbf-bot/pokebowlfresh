import bowlCrousty from "@/assets/bowl-crousty.jpg";
import bowlScampi from "@/assets/bowl-scampi.jpg";

const images: Record<string, string> = {
  // Only assign a photo when the repository contains a matching dish photo.
  "scampis-royaux": bowlScampi,
  "crousty-chicken-curry": bowlCrousty,
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
  const image = images[dishId];

  return (
    <div
      role="img"
      aria-label={alt}
      className="relative h-full w-full overflow-hidden bg-[#ece8dc]"
    >
      {image ? (
        <>
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
        </>
      ) : (
        <div className="flex h-full min-h-[220px] items-center justify-center bg-[#f1eee5] px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#758079]">
            Photo produit à venir
          </span>
        </div>
      )}
    </div>
  );
}
