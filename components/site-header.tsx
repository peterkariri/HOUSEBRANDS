"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Search, ShoppingBag, Heart, MessageCircle } from "lucide-react";
import { Logo } from "./brand";
import { Button } from "./ui/button";
import { nav, site, waLink } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-forest-900 text-beige/90 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Free delivery in Eldoret on orders over KSh 30,000
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <span className="text-beige/50">|</span>
            <span>Mon–Sat, 8am–7pm · {site.city}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-black/5 bg-white/90 shadow-[var(--shadow-soft)] backdrop-blur"
            : "border-transparent bg-cream"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-forest" : "text-ink/70 hover:text-forest"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              aria-label="Search"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink/70 hover:bg-forest/5 hover:text-forest sm:grid"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/shop"
              aria-label="Wishlist"
              className="hidden h-10 w-10 place-items-center rounded-full text-ink/70 hover:bg-forest/5 hover:text-forest sm:grid"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              href="/shop"
              aria-label="Cart"
              className="relative grid h-10 w-10 place-items-center rounded-full text-ink/70 hover:bg-forest/5 hover:text-forest"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gold ring-2 ring-cream" />
            </Link>
            <Button href={waLink("Hello Titus Brands! I'd like to make an enquiry.")} variant="primary" size="sm" className="ml-1 hidden md:inline-flex">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-forest/5 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream p-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile"
        >
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full hover:bg-forest/5"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium ${
                    active ? "bg-forest text-white" : "text-ink hover:bg-forest/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-auto space-y-3 pt-6">
            <Button href={waLink("Hello Titus Brands! I'd like to make an enquiry.")} variant="primary" className="w-full">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Button>
            <Button href={site.phoneHref} variant="outline" className="w-full">
              <Phone className="h-4 w-4" /> {site.phone}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
