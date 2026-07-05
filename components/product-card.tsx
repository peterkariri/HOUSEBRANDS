import Link from "next/link";
import { Heart } from "lucide-react";
import { FurnitureVisual } from "./furniture-visual";
import { Stars } from "./stars";
import { money, type Product } from "@/lib/data";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  "Best Seller": "bg-forest text-white",
  New: "bg-gold text-forest-900",
  Sale: "bg-danger text-white",
  "Low Stock": "bg-ink text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <Link href={`/shop/${product.slug}`} className="relative block">
        <FurnitureVisual
          icon={product.icon}
          tone={product.tone}
          src={product.image}
          alt={product.name}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeStyles[product.badge]}`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-danger">
              -{discount}%
            </span>
          )}
        </div>
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-slate opacity-0 shadow-sm backdrop-blur transition-all hover:text-danger group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-forest-700">{product.category}</p>
        <h3 className="mt-1 line-clamp-2 font-heading text-[15px] font-semibold text-ink">
          <Link href={`/shop/${product.slug}`} className="hover:text-forest">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5">
          <Stars rating={product.rating} />
          <span className="text-xs text-slate">({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <p className="font-heading text-lg font-bold text-forest">{money(product.price)}</p>
            {product.oldPrice && (
              <p className="text-xs text-slate line-through">{money(product.oldPrice)}</p>
            )}
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
              product.inStock ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
            }`}
          >
            {product.inStock ? "In stock" : "Sold out"}
          </span>
        </div>
      </div>
    </article>
  );
}
