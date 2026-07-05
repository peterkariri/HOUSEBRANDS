"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
      className={compact ? "" : "w-full"}
    >
      <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "" : "max-w-md"}`}>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder:text-beige/60 outline-none focus:border-gold"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-900 transition hover:brightness-105"
        >
          {done ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      {done && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold-soft">
          <Check className="h-4 w-4" /> Thanks! You&apos;re on the list for offers &amp; home tips.
        </p>
      )}
    </form>
  );
}
