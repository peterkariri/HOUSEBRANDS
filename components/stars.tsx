import { Star } from "lucide-react";

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <Star
            key={i}
            className={`h-4 w-4 ${filled ? "fill-gold text-gold" : "text-slate/30"}`}
            strokeWidth={1.5}
          />
        );
      })}
    </span>
  );
}
