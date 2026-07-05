import Image from "next/image";
import type { ProductIcon } from "@/lib/data";
import { FurnitureArt } from "./furniture-art";

export function FurnitureVisual({
  icon,
  tone,
  src,
  alt = "",
  priority = false,
  sizes = "(max-width: 768px) 50vw, 25vw",
  className = "",
  iconClass = "",
}: {
  icon: ProductIcon;
  tone: string;
  /** Real product photo. When set, it renders instead of the SVG artwork. */
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** @deprecated kept for backwards compatibility */
  iconClass?: string;
}) {
  void iconClass;
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <>
          {/* soft decorative lighting */}
          <div aria-hidden className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
          <div aria-hidden className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-forest/10 blur-2xl" />
          {/* generated furniture artwork */}
          <FurnitureArt icon={icon} className="absolute inset-[6%] h-[88%] w-[88%] drop-shadow-sm" />
        </>
      )}
    </div>
  );
}
