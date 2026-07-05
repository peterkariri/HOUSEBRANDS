import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "bg-white/10 text-gold-soft" : "bg-forest/8 text-forest"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-bold sm:text-4xl md:text-[2.6rem] md:leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-beige/80" : "text-slate"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
