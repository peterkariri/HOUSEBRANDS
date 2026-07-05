import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { money, type Service } from "@/lib/data";
import { waLink } from "@/lib/site";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  service,
  icon: Icon,
  kind,
}: {
  service: Service;
  icon: LucideIcon;
  kind: "cleaning" | "moving";
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/8 text-forest transition group-hover:bg-forest group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-forest-900">
          {money(service.from)} <span className="font-medium text-forest/70">{service.unit}</span>
        </span>
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 text-sm text-slate">{service.blurb}</p>
      <ul className="mt-4 space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-ink/75">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {p}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-2 pt-4">
        <Button
          href={waLink(`Hello Titus Brands! I'd like to book: ${service.name}.`)}
          size="sm"
          external
          className="flex-1"
        >
          Book now <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
