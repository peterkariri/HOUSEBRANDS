"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setBusy(false);

    if (response.ok) {
      router.push("/admin");
      return;
    }

    const body = await response.json().catch(() => null);
    setError(body?.error || "Unable to sign in. Check the password and try again.");
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-12 text-ink">
      <div className="mx-auto max-w-md rounded-3xl border border-black/10 bg-white p-8 shadow-[var(--shadow-soft)]">
        <h1 className="text-2xl font-semibold">Admin login</h1>
        <p className="mt-2 text-sm text-slate">
          Enter your admin username and password to manage products and uploads.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-ink">
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
              autoComplete="username"
              required
            />
          </label>

          <label className="block text-sm font-medium text-ink">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-beige px-4 py-3 text-sm outline-none focus:border-forest"
              autoComplete="current-password"
              required
            />
          </label>

          {error && <p className="rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger">{error}</p>}

          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
}
