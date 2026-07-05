import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Sparkles,
  Truck,
  Award,
  HandHeart,
  Leaf,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { FurnitureVisual } from "@/components/furniture-visual";
import { StatCounter } from "@/components/stat-counter";
import { stats, testimonials } from "@/lib/data";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Titus Brands — Eldoret's complete home lifestyle company for furniture, household essentials, cleaning and moving services.",
};

const values = [
  { icon: Heart, t: "Customer First", d: "Your satisfaction guides every decision we make." },
  { icon: ShieldCheck, t: "Integrity", d: "Honest pricing and honest advice, always." },
  { icon: Award, t: "Quality", d: "Products and services built to last." },
  { icon: Sparkles, t: "Professionalism", d: "Trained, respectful, reliable teams." },
  { icon: Truck, t: "Reliability", d: "We show up on time and deliver on our word." },
  { icon: Users, t: "Community", d: "Rooted in Eldoret, growing with the North Rift." },
];

const promises = [
  "Fair, transparent pricing with no hidden costs",
  "Quality products backed by real warranties",
  "Punctual delivery and on-time service teams",
  "Friendly support on WhatsApp and by phone",
  "Safe handling of your home and belongings",
  "A genuine one-stop experience for your home",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Titus Brands"
        title="Transforming houses into homes across Eldoret"
        subtitle="We're a modern home lifestyle company that brings furniture, household essentials, cleaning and moving together — under one trusted, local brand."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <Button href="/shop" variant="gold" size="lg">
          Explore our products <ArrowRight className="h-5 w-5" />
        </Button>
      </PageHero>

      {/* Story */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <FurnitureVisual icon="sofa" tone="from-[#e8ddc7] to-[#c9b48c]" className="aspect-[4/5] rounded-3xl shadow-[var(--shadow-soft)]" />
                <FurnitureVisual icon="table" tone="from-[#e6d7bb] to-[#cbb389]" className="mt-10 aspect-[4/5] rounded-3xl shadow-[var(--shadow-soft)]" />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-[var(--shadow-lift)]">
                <p className="font-heading text-2xl font-extrabold text-forest">One roof</p>
                <p className="text-xs text-slate">Retail + home services</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our Story" title="Everything your home needs, from people who care" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75">
              <p>
                Titus Brands began with a simple observation: furnishing and caring for a home in
                Eldoret meant dealing with too many different sellers and service providers — one
                shop for furniture, another for household items, someone else entirely for cleaning
                or moving. It was slow, stressful and inconsistent.
              </p>
              <p>
                So we built something better. Titus Brands combines a premium home store with
                professional cleaning and moving services under one trusted roof. Whether you&apos;re
                furnishing a first apartment, upgrading the family living room, or relocating an
                entire office, we make it simple.
              </p>
              <p>
                Today we proudly serve thousands of homes and businesses across Eldoret, Uasin Gishu
                and the wider North Rift — and we&apos;re just getting started on our journey to become
                Kenya&apos;s most trusted home lifestyle company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-forest p-8 text-white lg:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-beige/85">
                To simplify modern living by providing quality furniture, household essentials,
                professional cleaning and reliable moving services — through exceptional customer
                experiences at every step.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-beige p-8 lg:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/10 text-forest">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-ink">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                To become Kenya&apos;s most trusted home lifestyle company — the first name families and
                businesses think of when they want to furnish, maintain, clean or move their home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="Our Core Values" title="What we stand for" subtitle="The principles that shape how we serve every customer, every day." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest/8 text-forest">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-slate">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-900 py-14 text-white">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-gold sm:text-5xl">
                <StatCounter value={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm text-beige/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Promise" title="A better home experience, guaranteed" subtitle="When you choose Titus Brands, here's what you can always count on." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <div className="rounded-3xl bg-beige p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white">
                  <HandHeart className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-lg font-bold text-ink">Community Impact</p>
                  <p className="text-sm text-slate">Growing with the North Rift</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-ink/75">
                We&apos;re proud to be locally owned and operated. By creating jobs, training young
                professionals and supporting our neighbours, Titus Brands invests in the community
                that has made us who we are.
              </p>
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white p-4">
                <Leaf className="h-6 w-6 text-forest" />
                <p className="text-sm text-ink/80">
                  Committed to responsible growth and lasting local partnerships.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="In Their Words" title="Why customers choose us" />
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-beige p-8 text-center lg:p-12">
            <p className="font-heading text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
            <p className="mt-6 font-semibold text-forest">{testimonials[0].name}</p>
            <p className="text-sm text-slate">{testimonials[0].area}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-forest px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s make your home better together</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/shop" variant="gold" size="lg">Shop Now</Button>
            <Button href={waLink("Hello Titus Brands! I'd like to learn more.")} variant="white" size="lg" external>
              Talk to us
            </Button>
          </div>
          <p className="mt-4 text-sm text-beige/70">Call {site.phone} · {site.city}, Kenya</p>
        </div>
      </section>
    </>
  );
}
