import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      <div className="texture-grain absolute inset-0 opacity-[0.15]" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-700/40 blur-3xl" />
      <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-page relative py-12 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-beige/70">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold">{c.label}</Link>
                ) : (
                  <span className="text-beige">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-4 w-4 text-beige/40" />}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-beige/80 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
