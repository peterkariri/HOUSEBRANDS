"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/data";

const sorts = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "rating", label: "Top Rated" },
] as const;

export function ShopGrid({ products }: { products: Product[] }) {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<(typeof sorts)[number]["key"]>("featured");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], [products]);
  const list = useMemo(() => {
    let l = products.filter((p) => (cat === "All" ? true : p.category === cat));
    if (query.trim()) {
      const q = query.toLowerCase();
      l = l.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    l = [...l];
    if (sort === "price-asc") l.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") l.sort((a, b) => b.price - a.price);
    else if (sort === "rating") l.sort((a, b) => b.rating - a.rating);
    return l;
  }, [cat, sort, query, products]);

  return (
    <div className="container-page py-12 lg:py-16">
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-forest"
            />
          </div>
          <label className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm">
            <SlidersHorizontal className="h-4 w-4 text-slate" />
            <span className="text-slate">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-transparent font-medium text-ink outline-none"
              aria-label="Sort products"
            >
              {sorts.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                cat === c
                  ? "bg-forest text-white shadow-sm"
                  : "border border-black/10 bg-white text-ink/70 hover:border-forest hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm text-slate">
        Showing <span className="font-semibold text-ink">{list.length}</span>{" "}
        {list.length === 1 ? "product" : "products"}
      </p>

      {list.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-black/15 bg-white py-16 text-center">
          <p className="font-heading text-lg font-semibold text-ink">No products found</p>
          <p className="mt-1 text-sm text-slate">Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
