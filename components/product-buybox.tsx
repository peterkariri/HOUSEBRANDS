"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, MessageCircle, Heart, Check } from "lucide-react";
import { money, type Product } from "@/lib/data";
import { site } from "@/lib/site";

export function ProductBuyBox({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wish, setWish] = useState(false);

  const orderMsg = product.priceNegotiable
    ? `Hello ${site.name}! I'd like to order:%0A%0A` +
      `*${product.name}*%0A` +
      `Quantity: ${qty}%0A` +
      `Price: Negotiable%0A%0A` +
      `Please send me a quote and confirm availability and delivery.`
    : `Hello ${site.name}! I'd like to order:%0A%0A` +
      `*${product.name}*%0A` +
      `Quantity: ${qty}%0A` +
      `Price: ${money(product.price)} each%0A` +
      `Total: ${money(product.price * qty)}%0A%0A` +
      `Please confirm availability and delivery.`;
  const orderHref = `https://wa.me/${site.whatsapp}?text=${orderMsg}`;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-black/12 bg-white">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-forest/5"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-semibold">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-forest/5"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-slate">
          {product.priceNegotiable ? (
            <span className="font-heading text-lg font-bold text-forest">Price negotiable — ask on order</span>
          ) : (
            <>
              Total: <span className="font-heading text-lg font-bold text-forest">{money(product.price * qty)}</span>
            </>
          )}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
          }}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-forest hover:-translate-y-0.5"
        >
          {added ? <Check className="h-5 w-5" /> : <ShoppingBag className="h-5 w-5" />}
          {added ? "Added to cart" : "Add to Cart"}
        </button>
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-soft)] transition hover:brightness-105 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" /> Order on WhatsApp
        </a>
      </div>

      <button
        onClick={() => setWish((w) => !w)}
        className={`mt-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
          wish ? "border-danger/30 bg-danger/5 text-danger" : "border-black/12 text-ink/70 hover:border-forest hover:text-forest"
        }`}
      >
        <Heart className={`h-4 w-4 ${wish ? "fill-danger" : ""}`} />
        {wish ? "Saved to wishlist" : "Add to wishlist"}
      </button>
    </div>
  );
}
