"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import type { StoredProduct } from "@/lib/products-store";

const initialFormState = {
  slug: undefined as string | undefined,
  name: "",
  category: "",
  price: "",
  oldPrice: "",
  priceNegotiable: false,
  badge: "",
  inStock: true,
  image: "",
  short: "",
  description: "",
};

type ProductFormState = typeof initialFormState;

function sanitizeUrl(url: string) {
  if (!url) return "";
  return url.startsWith("/") ? url : `/${url}`;
}

export default function AdminDashboard() {
  const [products, setProducts] = useState<StoredProduct[]>([]);
  const [form, setForm] = useState<ProductFormState>(initialFormState);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category).filter(Boolean))),
    [products],
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/products");
      if (!response.ok) {
        throw new Error("Unable to load products.");
      }
      setProducts(await response.json());
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    } finally {
      setLoading(false);
    }
  }

  function setField<Key extends keyof ProductFormState>(key: Key, value: ProductFormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function selectProduct(product: StoredProduct) {
    setForm({
      slug: product.slug,
      name: product.name,
      category: product.category,
      price: product.price ? String(product.price) : "",
      oldPrice: product.oldPrice ? String(product.oldPrice) : "",
      priceNegotiable: product.priceNegotiable ?? false,
      badge: product.badge ?? "",
      inStock: product.inStock,
      image: product.image,
      short: product.short,
      description: product.description,
    });
    setMessage(null);
    setError(null);
  }

  function resetForm() {
    setForm(initialFormState);
    setMessage(null);
    setError(null);
  }

  async function handleUpload(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/uploads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed.");
      }

      const body = await response.json();
      setField("image", sanitizeUrl(body.url ?? ""));
      setMessage("Image uploaded successfully.");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    } finally {
      setUploading(false);
    }
  }

  async function saveProduct() {
    setSaving(true);
    setError(null);
    setMessage(null);

    try {
      if (!form.name || !form.category || !form.image || (!form.priceNegotiable && !form.price)) {
        throw new Error("Name, category, image, and a price (or mark it negotiable) are required.");
      }

      const payload = {
        name: form.name,
        category: form.category,
        price: form.price ? Number(form.price) : 0,
        oldPrice: form.oldPrice ? Number(form.oldPrice) : null,
        priceNegotiable: form.priceNegotiable,
        badge: form.badge || null,
        inStock: form.inStock,
        image: sanitizeUrl(form.image),
        short: form.short || form.name,
        description: form.description || form.short || form.name,
        rating: 4.5,
        reviews: 0,
        tone: "from-[#e8ddc7] to-[#c9b48c]",
        icon: "bed",
      };

      const url = form.slug ? `/api/admin/products/${form.slug}` : "/api/admin/products";
      const method = form.slug ? "PATCH" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Unable to save product.");
      }

      const saved = await response.json();
      setMessage(form.slug ? "Product updated." : "Product created.");
      setForm({
        slug: saved.slug,
        name: saved.name,
        category: saved.category,
        price: saved.price ? String(saved.price) : "",
        oldPrice: saved.oldPrice ? String(saved.oldPrice) : "",
        priceNegotiable: saved.priceNegotiable ?? false,
        badge: saved.badge ?? "",
        inStock: saved.inStock,
        image: saved.image,
        short: saved.short,
        description: saved.description,
      });
      await fetchProducts();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-10 text-ink">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_520px]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-black/10 bg-white p-6 shadow-[var(--shadow-soft)]">
            <div>
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-slate">Manage products, categories and upload commodity images directly from the browser.</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>Log out</Button>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Product list</h2>
                <p className="mt-1 text-sm text-slate">Select an item to edit or create a new commodity entry.</p>
              </div>
              <Button variant="gold" onClick={resetForm}>New product</Button>
            </div>

            {loading ? (
              <p className="mt-6 text-sm text-slate">Loading products…</p>
            ) : error ? (
              <p className="mt-6 rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger">{error}</p>
            ) : (
              <div className="mt-6 grid gap-4">
                {products.map((product) => (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={() => selectProduct(product)}
                    className="group flex items-center gap-4 rounded-3xl border border-black/10 bg-beige/60 p-4 text-left transition hover:border-forest/40 hover:bg-white"
                  >
                    <img src={product.image} alt={product.name} className="h-16 w-16 rounded-2xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{product.name}</p>
                      <p className="truncate text-sm text-slate">
                        {product.category} · {product.priceNegotiable ? "Negotiable" : `KSh ${product.price}`}
                      </p>
                    </div>
                    <span className="text-sm text-forest">Edit</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Product editor</h2>
                <p className="mt-1 text-sm text-slate">Update a selected product or add a new commodity entry.</p>
              </div>
              <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                {form.slug ? "Editing" : "New"}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Product name
                  <input
                    value={form.name}
                    onChange={(event) => setField("name", event.target.value)}
                    className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                  />
                </label>

                <label className="block text-sm font-medium text-ink">
                  Category
                  <input
                    list="category-options"
                    value={form.category}
                    onChange={(event) => setField("category", event.target.value)}
                    className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                  />
                  <datalist id="category-options">
                    {categories.map((category) => (
                      <option key={category} value={category} />
                    ))}
                  </datalist>
                </label>
              </div>

              <label className="flex items-center gap-3 rounded-2xl border border-black/10 bg-beige/60 px-4 py-3 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={form.priceNegotiable}
                  onChange={(event) => setField("priceNegotiable", event.target.checked)}
                  className="h-4 w-4 rounded border-black/10 text-forest focus:ring-forest"
                />
                Price negotiable — hide the price and ask buyers to order for a quote
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink">
                  Price (KES){form.priceNegotiable && " — optional"}
                  <input
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={(event) => setField("price", event.target.value)}
                    className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                  />
                </label>

                <label className="block text-sm font-medium text-ink">
                  Old price
                  <input
                    type="number"
                    min="0"
                    value={form.oldPrice}
                    onChange={(event) => setField("oldPrice", event.target.value)}
                    className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-ink">
                Short description
                <input
                  value={form.short}
                  onChange={(event) => setField("short", event.target.value)}
                  className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </label>

              <label className="block text-sm font-medium text-ink">
                Full description
                <textarea
                  value={form.description}
                  onChange={(event) => setField("description", event.target.value)}
                  rows={4}
                  className="mt-2 block w-full rounded-3xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </label>

              <label className="block text-sm font-medium text-ink">
                Product photo URL or upload
                <input
                  value={form.image}
                  onChange={(event) => setField("image", event.target.value)}
                  placeholder="/uploads/your-image.jpg"
                  className="mt-2 block w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
                />
              </label>

              <label className="block text-sm font-medium text-ink">
                Upload image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleUpload(event.target.files?.[0] ?? null)}
                  className="mt-2 block w-full text-sm text-slate"
                />
              </label>

              {form.image && (
                <div className="rounded-3xl border border-black/10 bg-beige p-4">
                  <p className="text-sm font-semibold text-ink">Preview</p>
                  <img src={form.image} alt="Preview" className="mt-3 w-full rounded-3xl object-cover" />
                </div>
              )}

              <label className="flex items-center gap-3 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={form.inStock}
                  onChange={(event) => setField("inStock", event.target.checked)}
                  className="h-4 w-4 rounded border-black/10 text-forest focus:ring-forest"
                />
                Keep product in stock
              </label>

              {message && <p className="rounded-2xl bg-forest/10 px-4 py-3 text-sm text-forest">{message}</p>}
              {error && <p className="rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger">{error}</p>}

              <div className="flex flex-wrap gap-3">
                <Button onClick={saveProduct} disabled={saving || uploading}>
                  {saving ? "Saving…" : form.slug ? "Update product" : "Create product"}
                </Button>
                <Button variant="outline" onClick={resetForm}>Clear form</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
