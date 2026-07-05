import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { FurnitureVisual } from "@/components/furniture-visual";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/data";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-black/5 bg-white">
        <nav aria-label="Breadcrumb" className="container-page py-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate">
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            <ChevronRight className="h-4 w-4 text-slate/50" />
            <li><Link href="/blog" className="hover:text-forest">Blog</Link></li>
            <ChevronRight className="h-4 w-4 text-slate/50" />
            <li className="font-medium text-ink line-clamp-1">{post.title}</li>
          </ol>
        </nav>
      </div>

      <article className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-forest-900">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate">
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>

        <FurnitureVisual
          icon={post.icon}
          tone={post.tone}
          className="mx-auto mt-8 aspect-[16/8] w-full max-w-4xl rounded-3xl shadow-[var(--shadow-soft)]"
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-lg font-medium leading-relaxed text-ink">{post.body[0]}</p>
          <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-ink/80">
            {post.body.slice(1).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-10 rounded-3xl bg-beige p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-ink">Need a hand with your home?</h3>
            <p className="mt-2 text-slate">
              From furniture to cleaning and moving, Titus Brands has you covered across Eldoret.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/shop">Shop products</Button>
              <Button href={waLink("Hello Titus Brands! I read your blog and have a question.")} variant="outline" external>
                Ask us anything
              </Button>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/blog" variant="ghost">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Button>
          </div>
        </div>
      </article>

      {/* More posts */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-bold text-ink">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <FurnitureVisual icon={p.icon} tone={p.tone} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-forest-700">{p.category}</span>
                  <h3 className="mt-2 font-heading text-base font-semibold text-ink group-hover:text-forest">{p.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
