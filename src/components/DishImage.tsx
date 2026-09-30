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
  const image = images[dishId] ?? images["sweet-chicken"];

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
