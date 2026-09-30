const images: Record<string, string> = {
  "mighty-gyros": "/assets/bowl-crousty-DhSdFdMk.jpg",
  "sweet-chicken": "/assets/bowl-chicken-DVKFm73l.jpg",
  "scampis-royaux": "/assets/bowl-scampi-CKbANxtN.jpg",
  "saumon-wasabi": "/assets/bowl-scampi-CKbANxtN.jpg",
  "spicy-chicken": "/assets/bowl-chicken-DVKFm73l.jpg",
  "crousty-chicken-curry": "/assets/bowl-crousty-DhSdFdMk.jpg",
  "crousty-chicken-sauce-blanche": "/assets/bowl-crousty-DhSdFdMk.jpg",
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
  const image = images[dishId] ?? "/assets/bowl-chicken-DVKFm73l.jpg";

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
