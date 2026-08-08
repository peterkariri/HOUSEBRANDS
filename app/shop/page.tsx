import type { Metadata } from "next";
import { Truck, ShieldCheck, CreditCard, RotateCcw } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ShopGrid } from "@/components/shop-grid";
import { getProducts } from "@/lib/products-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shop Beds & Bedroom Furniture in Eldoret",
  description:
    "Shop quality beds and bedroom furniture in Eldoret — upholstered, wooden, luxury, modern and metal beds plus complete bedroom sets. Fast delivery, M-Pesa & card, 2-year warranty.",
};

const perks = [
  { icon: Truck, t: "Free Eldoret delivery", d: "On orders over KSh 30,000" },
  { icon: ShieldCheck, t: "Quality warranty", d: "1–8 years on select items" },
  { icon: CreditCard, t: "Flexible payment", d: "M-Pesa, card, COD" },
  { icon: RotateCcw, t: "Easy returns", d: "7-day return policy" },
];

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Beds & bedroom furniture for every home"
        subtitle="Browse our curated collection of upholstered, wooden, luxury, modern and metal beds — plus complete bedroom sets — delivered and assembled across Eldoret and the North Rift."
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <section className="border-b border-black/5 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-6 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.t} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{p.t}</p>
                <p className="text-xs text-slate">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ShopGrid products={products} />
    </>
  );
}
