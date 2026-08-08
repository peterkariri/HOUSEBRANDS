import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { writeUpload, uploadUrl } from "@/lib/storage";

export async function POST(request: Request) {
  await requireAdmin();
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ error: "Unable to parse form data." }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || !(file instanceof Blob) || !file.name) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  // Prefix with a short random id so two uploads of the same filename never collide.
  const key = `${randomUUID().slice(0, 8)}-${safeName}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  await writeUpload(key, buffer);

  return NextResponse.json({ url: uploadUrl(key) });
}
