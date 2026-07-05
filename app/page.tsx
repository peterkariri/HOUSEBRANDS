import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  Award,
  Headphones,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Quote,
  ShoppingBag,
  ClipboardList,
  CalendarCheck,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Eyebrow } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { FurnitureVisual } from "@/components/furniture-visual";
import { Stars } from "@/components/stars";
import { StatCounter } from "@/components/stat-counter";
import { FaqAccordion } from "@/components/faq-accordion";
import { site, serviceAreas, waLink } from "@/lib/site";
import {
  products,
  categories,
  testimonials,
  stats,
  faqs,
  posts,
  cleaningServices,
  movingServices,
} from "@/lib/data";

const trust = [
  { icon: Truck, title: "Fast Delivery", text: "Same-day across Eldoret" },
  { icon: ShieldCheck, title: "Secure Payment", text: "M-Pesa, card & COD" },
  { icon: Award, title: "Premium Quality", text: "Built to last, warrantied" },
  { icon: Headphones, title: "Always Here", text: "WhatsApp & phone support" },
];

const catIconTone: Record<string, string> = {
  "upholstered-beds": "from-[#e9dcc6] to-[#d3bd97]",
  "wooden-beds": "from-[#e8ddc7] to-[#c9b48c]",
  "luxury-beds": "from-[#d8cbb0] to-[#b09873]",
  "modern-beds": "from-[#cdd9c4] to-[#a7bd97]",
  "metal-beds": "from-[#d9dcdf] to-[#9a9ca3]",
  "bedroom-sets": "from-[#e6d3b0] to-[#cbb488]",
};

export default function Home() {
  const bestSellers = products
    .filter((p) => p.badge === "Best Seller" || p.badge === "Sale")
    .slice(0, 4);
  const arrivals = products
    .filter((p) => p.badge === "New")
    .concat(products)
    .slice(0, 4);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-beige">
        <div className="texture-grain absolute inset-0 opacity-60" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-forest/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Eldoret · North Rift · Kenya
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-forest-900 sm:text-5xl lg:text-6xl">
                Everything Your Home Needs.
                <span className="relative mt-2 block text-forest">
                  All in One Place.
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-56"
                    viewBox="0 0 220 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 9C50 3 160 2 218 8" stroke="#EAB308" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Buy quality furniture and household essentials, book professional cleaning, and
                hire reliable movers — all from one trusted brand, right here in Eldoret.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/shop" size="lg">
                  <ShoppingBag className="h-5 w-5" /> Shop Furniture
                </Button>
                <Button href="/cleaning" size="lg" variant="outline">
                  Book a Service <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {testimonials.slice(0, 4).map((t) => (
                      <span
                        key={t.name}
                        className="grid h-8 w-8 place-items-center rounded-full border-2 border-beige bg-forest text-[10px] font-bold text-white"
                      >
                        {t.initials}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm">
                    <Stars rating={5} className="mb-0.5" />
                    <p className="font-medium text-ink/70">5,000+ happy homes</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual collage */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-4">
              <div className="space-y-4">
                <FurnitureVisual
                  icon="bed"
                  tone="from-[#e8ddc7] to-[#c9b48c]"
                  className="float-slow aspect-[4/5] rounded-3xl shadow-[var(--shadow-lift)]"
                  iconClass="h-28 w-28"
                />
                <FurnitureVisual
                  icon="lamp"
                  tone="from-[#cdd9c4] to-[#a7bd97]"
                  className="aspect-square rounded-3xl shadow-[var(--shadow-soft)]"
                />
              </div>
              <div className="space-y-4 pt-8">
                <FurnitureVisual
                  icon="wardrobe"
                  tone="from-[#e3d3b6] to-[#c9b48c]"
                  className="aspect-square rounded-3xl shadow-[var(--shadow-soft)]"
                />
                <FurnitureVisual
                  icon="bed"
                  tone="from-[#e9dcc6] to-[#d3bd97]"
                  className="float-slow aspect-[4/5] rounded-3xl shadow-[var(--shadow-lift)]"
                  iconClass="h-28 w-28"
                />
              </div>
              <div className="absolute -left-4 top-1/3 rounded-2xl bg-white/95 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur">
                <p className="text-xs text-slate">Starting from</p>
                <p className="font-heading text-lg font-bold text-forest">KSh 6,500</p>
              </div>
              <div className="absolute -right-3 bottom-8 flex items-center gap-2 rounded-2xl bg-forest px-4 py-3 text-white shadow-[var(--shadow-lift)]">
                <Sparkles className="h-5 w-5 text-gold" />
                <p className="text-sm font-semibold">Cleaning from KSh 800</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust bar */}
        <div className="relative border-t border-black/5 bg-cream/70">
          <div className="container-page grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.title}</p>
                  <p className="text-xs text-slate">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CATEGORIES ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Shop by Category"
            title="Furnish every corner of your home"
            subtitle="From the living room to the kitchen, find quality pieces and essentials at prices that make sense."
          />
          <Button href="/shop" variant="ghost" className="shrink-0">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                href="/shop"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <FurnitureVisual icon={c.icon} tone={catIconTone[c.slug]} className="aspect-[5/4] w-full" />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-heading text-base font-semibold text-ink group-hover:text-forest">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{c.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest">
                    Shop now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- PROMO BANNER ---------------- */}
      <section className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-12 text-white sm:px-12 lg:py-16">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-forest-700/40 blur-2xl" />
            <div className="absolute -bottom-20 right-24 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Eyebrow light>Season Sale</Eyebrow>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Up to <span className="text-gold">30% Off</span> selected collections
                </h2>
                <p className="mt-4 max-w-md text-beige/80">
                  Refresh your home for less. Save on sofas, mattresses, dining sets and more —
                  for a limited time across our Eldoret showroom and online.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/shop" variant="gold" size="lg">
                    Shop the Sale <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href={waLink("Hi Titus Brands! Tell me about the current offers.")} variant="white" size="lg" external>
                    Ask on WhatsApp
                  </Button>
                </div>
              </div>
              <div className="relative hidden justify-self-end lg:block">
                <FurnitureVisual
                  icon="bed"
                  tone="from-[#cdd9c4] to-[#a7bd97]"
                  className="float-slow h-64 w-64 rounded-full shadow-2xl"
                  iconClass="h-32 w-32"
                />
                <span className="absolute -left-4 top-6 grid h-20 w-20 place-items-center rounded-full bg-gold text-center text-sm font-bold text-forest-900 shadow-lg">
                  -30%
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- BEST SELLERS ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading eyebrow="Best Sellers" title="Loved by homes across Eldoret" />
          <Button href="/shop" variant="ghost" className="shrink-0">
            Shop all products <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {bestSellers.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- SERVICES OVERVIEW ---------------- */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="More Than Furniture"
            title="Professional services to match"
            subtitle="Titus Brands isn't just a store — we help you clean, move and maintain your home with trusted, trained teams."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceOverviewCard
              tone="from-[#cdd9c4] to-[#a7bd97]"
              icon="lamp"
              eyebrow="Cleaning Services"
              title="Sparkling clean, every time"
              text="Homes, offices, sofas, carpets and mattresses — deep cleaned by professionals using safe, effective products."
              price="From KSh 800"
              items={cleaningServices.slice(0, 6).map((s) => s.name)}
              href="/cleaning"
              cta="Book Cleaning"
            />
            <ServiceOverviewCard
              tone="from-[#e6d7bb] to-[#cbb389]"
              icon="table"
              eyebrow="Moving Services"
              title="Move without the stress"
              text="Careful, on-time house and office moves with packing, loading, assembly and storage handled for you."
              price="From KSh 8,000"
              items={movingServices.slice(0, 6).map((s) => s.name)}
              href="/moving"
              cta="Book Movers"
            />
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <FurnitureVisual icon="bed" tone="from-[#e8ddc7] to-[#c9b48c]" className="aspect-square rounded-3xl shadow-[var(--shadow-soft)]" />
                <FurnitureVisual icon="wardrobe" tone="from-[#e6d8bd] to-[#ccb489]" className="mt-8 aspect-square rounded-3xl shadow-[var(--shadow-soft)]" />
                <FurnitureVisual icon="bed" tone="from-[#e9dcc6] to-[#d3bd97]" className="aspect-square rounded-3xl shadow-[var(--shadow-soft)]" />
                <FurnitureVisual icon="lamp" tone="from-[#cdd9c4] to-[#a7bd97]" className="mt-8 aspect-square rounded-3xl shadow-[var(--shadow-soft)]" />
              </div>
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-forest px-6 py-4 text-center text-white shadow-[var(--shadow-lift)]">
                <span className="font-heading text-3xl font-extrabold text-gold">4.9★</span>
                <span className="text-xs text-beige/80">Customer rating</span>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why Titus Brands"
              title="One trusted brand for your whole home"
              subtitle="We bring retail and home services together so you never have to juggle multiple providers again."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: HomeIcon, t: "Truly one-stop", d: "Furniture, essentials, cleaning and moving under one roof." },
                { icon: ShieldCheck, t: "Quality guaranteed", d: "Durable products backed by real warranties." },
                { icon: Truck, t: "Fast local delivery", d: "Same-day dispatch across Eldoret and the North Rift." },
                { icon: Sparkles, t: "Trained professionals", d: "Vetted, friendly teams who respect your home." },
                { icon: ShoppingBag, t: "Flexible payments", d: "M-Pesa, card, bank transfer or cash on delivery." },
                { icon: Headphones, t: "Real support", d: "Reach us on WhatsApp or phone, any working day." },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 60}>
                  <div className="flex gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-[var(--shadow-soft)]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading font-semibold text-ink">{f.t}</p>
                      <p className="mt-1 text-sm text-slate">{f.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="How It Works" title="From browse to delivered in 4 simple steps" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: ShoppingBag, t: "Browse & choose", d: "Shop products or pick a service online." },
              { icon: ClipboardList, t: "Request a quote", d: "Order online or confirm on WhatsApp." },
              { icon: CalendarCheck, t: "We schedule", d: "We confirm your delivery or booking time." },
              { icon: CheckCircle2, t: "Enjoy your home", d: "Delivered, cleaned or moved — hassle-free." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="relative h-full rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-soft)]">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forest px-3 py-0.5 text-xs font-bold text-white">
                    Step {i + 1}
                  </span>
                  <span className="mx-auto mt-3 grid h-14 w-14 place-items-center rounded-2xl bg-forest/8 text-forest">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading font-semibold text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
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

      {/* ---------------- LATEST ARRIVALS ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading eyebrow="Just Landed" title="Latest arrivals" />
          <Button href="/shop" variant="ghost" className="shrink-0">
            See what&apos;s new <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {arrivals.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Customer Stories"
            title="Trusted by families & businesses"
            subtitle="Real reviews from real customers across Eldoret and the North Rift."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-cream p-6 shadow-[var(--shadow-soft)]">
                  <Quote className="h-8 w-8 text-gold/70" />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/80">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <Stars rating={t.rating} className="mt-4" />
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-slate">{t.area}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICE AREAS ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 rounded-3xl bg-beige p-8 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <SectionHeading
              eyebrow="Service Areas"
              title="Proudly serving Eldoret & the North Rift"
              subtitle="Wherever you are in Uasin Gishu, our delivery, cleaning and moving teams have you covered."
            />
            <Button href="/contact" size="lg" className="mt-8">
              <MapPin className="h-5 w-5" /> Check your area
            </Button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {serviceAreas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-forest" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BLOG PREVIEW ---------------- */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading eyebrow="From the Blog" title="Home tips & buying guides" />
            <Button href="/blog" variant="ghost" className="shrink-0">
              Read the blog <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <FurnitureVisual icon={p.icon} tone={p.tone} className="aspect-[16/10] w-full" />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-forest-700">{p.category}</span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-ink group-hover:text-forest">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate">{p.excerpt}</p>
                    <span className="mt-4 text-xs text-slate">{p.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions? We've got answers"
              subtitle="Everything you need to know about shopping and booking with Titus Brands."
            />
            <div className="mt-8 rounded-2xl bg-forest p-6 text-white">
              <p className="font-heading text-lg font-semibold">Still need help?</p>
              <p className="mt-1 text-sm text-beige/80">Our team is a message away.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={waLink("Hello Titus Brands! I have a question.")} variant="gold" external>
                  Chat on WhatsApp
                </Button>
                <Button href={site.phoneHref} variant="white">Call us</Button>
              </div>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="container-page pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-forest-900 px-6 py-14 text-center text-white sm:px-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Ready to transform your house into a home?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-beige/80">
              Shop premium furniture, book a spotless clean or plan your next move — all with one
              trusted team in Eldoret.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/shop" variant="gold" size="lg">Start Shopping</Button>
              <Button href={waLink("Hello Titus Brands! I'd like a free quote.")} variant="white" size="lg" external>
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ServiceOverviewCard({
  tone,
  icon,
  eyebrow,
  title,
  text,
  price,
  items,
  href,
  cta,
}: {
  tone: string;
  icon: "lamp" | "table";
  eyebrow: string;
  title: string;
  text: string;
  price: string;
  items: string[];
  href: string;
  cta: string;
}) {
  return (
    <Reveal>
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-cream shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-lift)] sm:flex-row">
        <FurnitureVisual icon={icon} tone={tone} className="aspect-video w-full sm:aspect-auto sm:w-2/5" />
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-forest-700">{eyebrow}</span>
          <h3 className="mt-1.5 font-heading text-xl font-bold text-ink">{title}</h3>
          <p className="mt-2 text-sm text-slate">{text}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-1.5 text-sm text-ink/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" /> {it}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-heading font-bold text-forest">{price}</span>
            <Button href={href} size="sm">
              {cta} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
