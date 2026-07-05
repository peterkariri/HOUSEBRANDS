import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";
import { FurnitureVisual } from "@/components/furniture-visual";
import { Stars } from "@/components/stars";
import { ProductBuyBox } from "@/components/product-buybox";
import { ProductCard } from "@/components/product-card";
import { products, money } from "@/lib/data";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — ${money(product.price)}`,
    description: product.short,
    openGraph: { title: product.name, description: product.short },
  };
}

const reviews = [
  { name: "Grace W.", rating: 5, text: "Exactly as described and delivered on time. Very happy with the quality." },
  { name: "Peter K.", rating: 5, text: "Great value for money. The finish is beautiful and it feels sturdy." },
  { name: "Naomi C.", rating: 4, text: "Lovely piece. Setup was quick and the team was helpful on WhatsApp." },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.short,
    brand: { "@type": "Brand", name: site.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-black/5 bg-white">
        <nav aria-label="Breadcrumb" className="container-page py-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate">
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            <ChevronRight className="h-4 w-4 text-slate/50" />
            <li><Link href="/shop" className="hover:text-forest">Shop</Link></li>
            <ChevronRight className="h-4 w-4 text-slate/50" />
            <li className="font-medium text-ink">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <FurnitureVisual
              icon={product.icon}
              tone={product.tone}
              className="aspect-square w-full rounded-3xl shadow-[var(--shadow-soft)]"
              iconClass="h-40 w-40"
            />
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <FurnitureVisual
                  key={i}
                  icon={product.icon}
                  tone={product.tone}
                  className={`aspect-square rounded-xl ${i === 0 ? "ring-2 ring-forest" : "opacity-70"}`}
                  iconClass="h-8 w-8"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-forest-700">{product.category}</p>
            <h1 className="mt-1.5 font-heading text-3xl font-bold text-ink sm:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <Stars rating={product.rating} />
              <span className="text-sm text-slate">{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="font-heading text-3xl font-extrabold text-forest">{money(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-slate line-through">{money(product.oldPrice)}</span>
              )}
              {discount > 0 && (
                <span className="rounded-full bg-danger/10 px-2.5 py-1 text-sm font-bold text-danger">
                  Save {discount}%
                </span>
              )}
            </div>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
              <span className="h-2 w-2 rounded-full bg-success" />
              {product.inStock ? "In stock — ready to deliver" : "Currently out of stock"}
            </div>

            <p className="mt-5 leading-relaxed text-ink/75">{product.description}</p>

            <div className="mt-6 border-t border-black/8 pt-6">
              <ProductBuyBox product={product} />
            </div>

            {/* Delivery info */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, t: "Fast delivery", d: "Same-day in Eldoret" },
                { icon: ShieldCheck, t: "Warranty", d: product.specs.find((s) => s.label === "Warranty")?.value ?? "Quality assured" },
                { icon: RotateCcw, t: "Easy returns", d: "7-day policy" },
              ].map((d) => (
                <div key={d.t} className="rounded-xl border border-black/8 bg-white p-3 text-center">
                  <d.icon className="mx-auto h-5 w-5 text-forest" />
                  <p className="mt-1.5 text-sm font-semibold text-ink">{d.t}</p>
                  <p className="text-xs text-slate">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs + reviews */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-ink">Specifications</h2>
            <dl className="mt-4 overflow-hidden rounded-2xl border border-black/8">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex justify-between gap-4 px-5 py-3.5 text-sm ${i % 2 ? "bg-white" : "bg-beige/50"}`}
                >
                  <dt className="text-slate">{s.label}</dt>
                  <dd className="font-medium text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 rounded-2xl bg-beige p-5">
              <h3 className="font-heading font-semibold text-ink">What&apos;s included</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/75">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest" /> Free delivery within Eldoret CBD</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest" /> Assembly guidance on request</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest" /> Manufacturer warranty</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-ink">Customer reviews</h2>
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span className="font-heading text-lg font-bold text-ink">{product.rating}</span>
                <span className="text-sm text-slate">/ 5</span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-2xl border border-black/8 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-forest text-xs font-bold text-white">
                        {r.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span className="font-semibold text-ink">{r.name}</span>
                    </div>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-ink">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
