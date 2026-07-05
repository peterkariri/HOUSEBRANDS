import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FurnitureVisual } from "@/components/furniture-visual";
import { Newsletter } from "@/components/newsletter";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Home Tips, Cleaning & Moving Guides",
  description:
    "Practical home tips from Titus Brands — interior design ideas, furniture care, cleaning tips, home organization and moving guides for Eldoret homes.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-KE", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Home tips, guides & inspiration"
        subtitle="Advice on furnishing, cleaning, organizing and moving your home — from the Titus Brands team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      {/* Featured */}
      <section className="container-page py-12 lg:py-16">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-lift)] lg:grid-cols-2"
          >
            <FurnitureVisual icon="sofa" tone={featured.tone} className="aspect-[16/10] w-full lg:aspect-auto lg:h-full" iconClass="h-28 w-28" />
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-flex w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-forest-900">
                Featured · {featured.category}
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-ink group-hover:text-forest sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-slate">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-slate">
                <span>{formatDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {featured.readTime}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-forest">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-page pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <FurnitureVisual icon="shelf" tone={p.tone} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-forest-700">{p.category}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-ink group-hover:text-forest">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate">
                    <span>{formatDate(p.date)}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl bg-forest-900 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Get home tips in your inbox</h2>
          <p className="mx-auto mt-3 max-w-md text-beige/75">
            Join our newsletter for seasonal offers, buying guides and care tips.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
