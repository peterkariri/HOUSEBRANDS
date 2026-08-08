import { promises as fs } from "node:fs";
import path from "node:path";
import { categories as seedCategories, products as seedProducts, type Product, type ProductIcon } from "./data";

/**
 * Runtime product store.
 *
 * `lib/data.ts` stays the seed catalogue that ships with the repo. Anything the
 * admin edits is written to `data/products.json`, which becomes the source of
 * truth for that product from then on. Products the admin has never touched
 * fall straight through to the seed, so the site works on a clean checkout with
 * no store file present.
 */
export type StoredProduct = Product & {
  /** ISO timestamp of the last admin edit. Absent for untouched seed products. */
  updatedAt?: string;
};

export type Category = {
  slug: string;
  name: string;
  icon: ProductIcon;
  blurb: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "products.json");

type Store = { products: StoredProduct[] };

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 200);
}

function uniqueSlug(slug: string, existing: Set<string>) {
  let current = slug || "product";
  let suffix = 1;
  while (existing.has(current)) {
    current = `${slug}-${suffix}`;
    suffix += 1;
  }
  return current;
}

/**
 * A stored record wins wholesale over its seed twin so that clearing an
 * optional field (an old price, a badge) actually sticks. Non-optional fields
 * are still backfilled from the seed in case the catalogue gains a field after
 * a product was saved.
 */
function reconcile(seed: Product, stored: StoredProduct | undefined): StoredProduct {
  if (!stored) return { ...seed };
  return {
    ...seed,
    ...stored,
    // Optional fields: absent in the stored record means "deliberately cleared",
    // not "fall back to the seed".
    oldPrice: stored.oldPrice,
    badge: stored.badge,
    priceNegotiable: stored.priceNegotiable,
  };
}

async function readStore(): Promise<StoredProduct[]> {
  let parsed: Store | null = null;
  try {
    parsed = JSON.parse(await fs.readFile(STORE_FILE, "utf8")) as Store;
  } catch {
    // No store yet (or it is unreadable) — serve the seed catalogue.
  }

  const stored = Array.isArray(parsed?.products) ? parsed.products : [];
  const bySlug = new Map(stored.map((p) => [p.slug, p]));
  const merged = seedProducts.map((s) => reconcile(s, bySlug.get(s.slug)));

  // Keep anything the admin added that has no seed counterpart.
  const seedSlugs = new Set(seedProducts.map((p) => p.slug));
  for (const p of stored) if (!seedSlugs.has(p.slug)) merged.push(p);

  return merged;
}

async function writeStore(products: StoredProduct[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  // Write-then-rename so a crash mid-write can never leave a truncated file.
  const tmp = `${STORE_FILE}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify({ products }, null, 2), "utf8");
  await fs.rename(tmp, STORE_FILE);
}

/** Every product, in catalogue order. */
export async function getProducts(): Promise<StoredProduct[]> {
  return readStore();
}

export async function getProduct(slug: string): Promise<StoredProduct | undefined> {
  return (await readStore()).find((p) => p.slug === slug);
}

export async function getCategories(): Promise<Category[]> {
  const products = await readStore();
  const productCategories = Array.from(new Set(products.map((p) => p.category).filter(Boolean)));
  const existingNames = new Set<string>(seedCategories.map((c) => c.name));
  const extraCategories = productCategories
    .filter((name) => !existingNames.has(name))
    .map((name) => ({
      slug: slugify(name),
      name,
      icon: "bed" as ProductIcon,
      blurb: `Shop ${name}`,
    }));

  return [...seedCategories, ...extraCategories];
}

/**
 * Newest first: most recently edited products lead, then anything flagged
 * "New", then catalogue order. This is what drives the "Latest arrivals" row on
 * the home page — saving a product in the admin puts it in the first card.
 */
export function sortByLatest(products: StoredProduct[]): StoredProduct[] {
  return products
    .map((p, index) => ({ p, index }))
    .sort((a, b) => {
      const at = a.p.updatedAt ? Date.parse(a.p.updatedAt) : 0;
      const bt = b.p.updatedAt ? Date.parse(b.p.updatedAt) : 0;
      if (at !== bt) return bt - at;
      const an = a.p.badge === "New" ? 1 : 0;
      const bn = b.p.badge === "New" ? 1 : 0;
      if (an !== bn) return bn - an;
      return a.index - b.index;
    })
    .map(({ p }) => p);
}

export async function getLatestProducts(limit: number): Promise<StoredProduct[]> {
  return sortByLatest(await readStore()).slice(0, limit);
}

/** Fields the admin form is allowed to change. */
export type ProductPatch = Partial<
  Pick<
    Product,
    | "name"
    | "category"
    | "price"
    | "oldPrice"
    | "priceNegotiable"
    | "badge"
    | "inStock"
    | "image"
    | "short"
    | "description"
  >
>;

export type ProductCreate = Omit<Product, "slug"> & {
  slug?: string;
};

/** Applies a patch and stamps `updatedAt`. Returns the saved product. */
export async function updateProduct(
  slug: string,
  patch: ProductPatch,
): Promise<StoredProduct> {
  const products = await readStore();
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Unknown product: ${slug}`);

  const updated: StoredProduct = {
    ...products[index],
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  products[index] = updated;
  await writeStore(products);
  return updated;
}

export async function createProduct(payload: ProductCreate): Promise<StoredProduct> {
  const products = await readStore();
  const slug = uniqueSlug(slugify(payload.slug ?? payload.name), new Set(products.map((p) => p.slug)));
  const created: StoredProduct = {
    slug,
    name: payload.name,
    category: payload.category,
    price: payload.price,
    oldPrice: payload.oldPrice,
    priceNegotiable: payload.priceNegotiable,
    badge: payload.badge,
    inStock: payload.inStock ?? true,
    image: payload.image,
    short: payload.short ?? payload.name,
    description: payload.description ?? payload.name,
    rating: payload.rating ?? 4.5,
    reviews: payload.reviews ?? 0,
    tone: payload.tone ?? "from-[#e8ddc7] to-[#c9b48c]",
    icon: payload.icon ?? "bed",
    specs: payload.specs ?? [],
    updatedAt: new Date().toISOString(),
  };
  products.push(created);
  await writeStore(products);
  return created;
}
