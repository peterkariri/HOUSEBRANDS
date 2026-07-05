"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/8 overflow-hidden rounded-2xl border border-black/8 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-semibold text-ink">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                  isOpen ? "rotate-45 bg-forest text-white" : "bg-forest/8 text-forest"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
