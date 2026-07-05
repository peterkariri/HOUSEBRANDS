import Link from "next/link";

/**
 * Titus Brands logo: a minimal house silhouette whose roof grows a leaf,
 * paired with modern wordmark. Scalable inline SVG, flat design.
 */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const word = variant === "light" ? "text-white" : "text-forest";
  const sub = variant === "light" ? "text-beige/80" : "text-slate";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Titus Brands home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          {/* house */}
          <path
            d="M4 11.5 12 5l8 6.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 10.5V19h13v-8.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* door */}
          <path d="M10 19v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          {/* growth leaf on the roof */}
          <path
            d="M16.4 6.1c1.7-.2 3 .9 3.1 2.6-1.7.2-3-.9-3.1-2.6Z"
            fill="#EAB308"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-lg font-bold tracking-tight ${word}`}>
          Titus <span className="text-gold">Brands</span>
        </span>
        <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Home Lifestyle
        </span>
      </span>
    </Link>
  );
}
