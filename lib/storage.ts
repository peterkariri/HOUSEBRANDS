import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * File-based storage for the product catalogue and uploaded photos — disk
 * locally and on any host with a persistent, writable filesystem.
 *
 * NOTE: Netlify (and Vercel) run this app's routes as serverless functions
 * with a read-only filesystem in production, so writes here won't persist
 * once deployed there. Swapping this module for Netlify Blobs is the planned
 * next step (see the note left for future work) — it was not completed
 * because the `@netlify/blobs` package could not be installed in this
 * environment (npm hung indefinitely). Run `npm install @netlify/blobs`
 * yourself, or ask again, before deploying this site to Netlify.
 */
const DATA_DIR = path.join(process.cwd(), "data");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export async function readText(key: string): Promise<string | null> {
  try {
    return await fs.readFile(path.join(DATA_DIR, key), "utf8");
  } catch {
    return null;
  }
}

export async function writeText(key: string, value: string): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, key);
  // Write-then-rename so a crash mid-write can never leave a truncated file.
  const tmp = `${filePath}.${process.pid}.tmp`;
  await fs.writeFile(tmp, value, "utf8");
  await fs.rename(tmp, filePath);
}

export async function writeUpload(key: string, data: Buffer): Promise<void> {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOAD_DIR, key), data);
}

export function uploadUrl(key: string): string {
  return `/uploads/${key}`;
}
