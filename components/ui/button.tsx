import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "white" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-white shadow-[var(--shadow-soft)] hover:bg-forest hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
  gold: "bg-gold text-forest-900 shadow-[var(--shadow-soft)] hover:brightness-105 hover:-translate-y-0.5",
  outline:
    "border border-forest/30 text-forest hover:bg-forest hover:text-white hover:border-forest",
  ghost: "text-forest hover:bg-forest/5",
  white: "bg-white text-forest shadow-[var(--shadow-soft)] hover:bg-beige hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-black hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  external,
  ...rest
}: CommonProps & {
  href?: string;
  external?: boolean;
} & Partial<ComponentProps<"a">>) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cls}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
