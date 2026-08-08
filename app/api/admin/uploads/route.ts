import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { requireAdmin } from "@/lib/admin-auth";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

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
  const filePath = path.join(UPLOAD_DIR, safeName);
  const buffer = Buffer.from(await file.arrayBuffer());

  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(filePath, buffer);

  return NextResponse.json({ url: `/uploads/${safeName}` });
}
