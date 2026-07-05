"use client";

import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { money } from "@/lib/data";
import { site } from "@/lib/site";

const homeSizes = [
  { key: "bedsitter", label: "Bedsitter / Studio", base: 8000 },
  { key: "1br", label: "1 Bedroom", base: 12000 },
  { key: "2br", label: "2 Bedroom", base: 18000 },
  { key: "3br", label: "3 Bedroom", base: 26000 },
  { key: "office", label: "Office", base: 20000 },
];

const distances = [
  { key: "within", label: "Within Eldoret", mult: 1 },
  { key: "nearby", label: "Nearby town (< 100km)", mult: 1.6 },
  { key: "long", label: "Long distance (100km+)", mult: 2.6 },
];

const extras = [
  { key: "packing", label: "Packing service", cost: 3500 },
  { key: "assembly", label: "Assembly / disassembly", cost: 2500 },
  { key: "storage", label: "Storage (1 month)", cost: 4000 },
];

export function MovingEstimator() {
  const [size, setSize] = useState(homeSizes[2].key);
  const [dist, setDist] = useState(distances[0].key);
  const [chosen, setChosen] = useState<string[]>([]);

  const estimate = useMemo(() => {
    const base = homeSizes.find((h) => h.key === size)!.base;
    const mult = distances.find((d) => d.key === dist)!.mult;
    const extraSum = extras.filter((e) => chosen.includes(e.key)).reduce((s, e) => s + e.cost, 0);
    const total = Math.round(base * mult + extraSum);
    return { low: Math.round(total * 0.9), high: Math.round(total * 1.15) };
  }, [size, dist, chosen]);

  const toggle = (k: string) =>
    setChosen((c) => (c.includes(k) ? c.filter((x) => x !== k) : [...c, k]));

  const msg =
    `Hello ${site.name}! I'd like a moving quote.%0A%0A` +
    `*Home size:* ${homeSizes.find((h) => h.key === size)!.label}%0A` +
    `*Distance:* ${distances.find((d) => d.key === dist)!.label}%0A` +
    `*Extras:* ${chosen.length ? extras.filter((e) => chosen.includes(e.key)).map((e) => e.label).join(", ") : "none"}%0A` +
    `*Estimated:* ${money(estimate.low)} – ${money(estimate.high)}`;
  const href = `https://wa.me/${site.whatsapp}?text=${msg}`;

  const field = "w-full rounded-xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-forest focus:bg-white";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate";

  return (
    <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-white">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-bold text-ink">Instant estimate calculator</h3>
          <p className="text-sm text-slate">A quick guide price — no commitment.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="me-size">Home size</label>
          <select id="me-size" className={field} value={size} onChange={(e) => setSize(e.target.value)}>
            {homeSizes.map((h) => (
              <option key={h.key} value={h.key}>{h.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="me-dist">Distance</label>
          <select id="me-dist" className={field} value={dist} onChange={(e) => setDist(e.target.value)}>
            {distances.map((d) => (
              <option key={d.key} value={d.key}>{d.label}</option>
            ))}
          </select>
        </div>
      </div>

      <p className={`${label} mt-4`}>Add-on services</p>
      <div className="flex flex-wrap gap-2">
        {extras.map((e) => {
          const on = chosen.includes(e.key);
          return (
            <button
              key={e.key}
              type="button"
              onClick={() => toggle(e.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                on ? "border-forest bg-forest text-white" : "border-black/12 text-ink/70 hover:border-forest"
              }`}
            >
              {e.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-beige p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">Estimated cost</p>
        <p className="mt-1 font-heading text-3xl font-extrabold text-forest">
          {money(estimate.low)} – {money(estimate.high)}
        </p>
        <p className="mt-1 text-xs text-slate">Final quote confirmed after a quick survey.</p>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-105"
      >
        <MessageCircle className="h-5 w-5" /> Get this quote on WhatsApp
      </a>
    </div>
  );
}
