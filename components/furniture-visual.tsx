import type { ProductIcon } from "@/lib/data";
import { FurnitureArt } from "./furniture-art";

export function FurnitureVisual({
  icon,
  tone,
  className = "",
  iconClass = "",
}: {
  icon: ProductIcon;
  tone: string;
  className?: string;
  /** @deprecated kept for backwards compatibility; artwork now scales to fit */
  iconClass?: string;
}) {
  void iconClass;
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
      aria-hidden="true"
    >
      {/* soft decorative lighting */}
      <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-forest/10 blur-2xl" />
      {/* generated furniture artwork */}
      <FurnitureArt icon={icon} className="absolute inset-[6%] h-[88%] w-[88%] drop-shadow-sm" />
    </div>
  );
}
