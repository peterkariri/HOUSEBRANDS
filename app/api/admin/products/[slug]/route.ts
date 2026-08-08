import { NextResponse } from "next/server";
import { updateProduct } from "@/lib/products-store";
import { requireAdmin } from "@/lib/admin-auth";

export async function PATCH(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  await requireAdmin();
  const { slug } = await params;
  const payload = await request.json().catch(() => null);
  if (!payload) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    const product = await updateProduct(slug, payload);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update product." },
      { status: 400 },
    );
  }
}
