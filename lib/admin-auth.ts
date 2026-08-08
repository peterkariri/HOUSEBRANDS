import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Single-operator admin auth: one shared password from the environment,
 * exchanged for an HMAC-signed session cookie. No user table, no dependencies.
 */
export const SESSION_COOKIE = "tb_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function sessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing or too short. Set a random 32+ character value in .env.local.",
    );
  }
  return secret;
}

function adminPassword() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("ADMIN_PASSWORD is not set. Add it to .env.local.");
  }
  return password;
}

function adminUsername() {
  const username = process.env.ADMIN_USERNAME;
  if (!username) {
    throw new Error("ADMIN_USERNAME is not set. Add it to .env.local.");
  }
  return username;
}

function sign(payload: string) {
  return createHmac("sha256", sessionSecret()).update(payload).digest("hex");
}

/** Constant-time compare that tolerates differing lengths. */
function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    // Still burn a comparison so the timing does not leak the length.
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

export function checkCredentials(username: string, password: string) {
  // Check both before short-circuiting so a wrong username alone can't skip the password comparison timing.
  const usernameOk = safeEqual(username, adminUsername());
  const passwordOk = safeEqual(password, adminPassword());
  return usernameOk && passwordOk;
}

function createToken() {
  const payload = `${Date.now() + SESSION_MAX_AGE_SECONDS * 1000}.${randomUUID()}`;
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token: string | undefined) {
  if (!token) return false;
  const cut = token.lastIndexOf(".");
  if (cut === -1) return false;

  const payload = token.slice(0, cut);
  const signature = token.slice(cut + 1);
  if (!safeEqual(signature, sign(payload))) return false;

  const expiresAt = Number(payload.slice(0, payload.indexOf(".")));
  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}

/** Issues a fresh session cookie. Call only from a Server Action or Route Handler. */
export async function startSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, createToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function isSignedIn() {
  const store = await cookies();
  return verifyToken(store.get(SESSION_COOKIE)?.value);
}

/** Guard for admin pages and actions. Redirects to the login screen when signed out. */
export async function requireAdmin() {
  if (!(await isSignedIn())) redirect("/admin/login");
}
