import { NextResponse } from "next/server";
import { getProducts, createProduct } from "@/lib/products-store";
import { requireAdmin } from "@/lib/admin-auth";

export async function GET() {
  await requireAdmin();
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  await requireAdmin();
  const payload = await request.json().catch(() => null);
  const hasPrice = payload?.priceNegotiable || payload?.price;
  if (!payload?.name || !payload?.category || !hasPrice || !payload?.image) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const product = await createProduct(payload);
  return NextResponse.json(product);
}
