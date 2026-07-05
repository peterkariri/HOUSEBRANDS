import type { Metadata } from "next";
import {
  Home,
  Building2,
  Sofa,
  BedDouble,
  Grid2x2,
  Blinds,
  Sparkles,
  DoorOpen,
  Construction,
  AppWindow,
  Droplets,
  ShieldCheck,
  Clock,
  BadgeCheck,
  Leaf,
  ArrowRight,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { FurnitureVisual } from "@/components/furniture-visual";
import { Stars } from "@/components/stars";
import { cleaningServices } from "@/lib/data";
import { site, serviceAreas, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Services in Eldoret | Home, Office, Sofa & Carpet",
  description:
    "Professional cleaning services in Eldoret — residential, office, deep, sofa, mattress, carpet and post-construction cleaning. Trained teams, safe products, fast booking.",
};

const iconMap: Record<string, LucideIcon> = {
  "residential-cleaning": Home,
  "deep-cleaning": Sparkles,
  "sofa-cleaning": Sofa,
  "mattress-cleaning": BedDouble,
  "carpet-cleaning": Grid2x2,
  "curtain-cleaning": Blinds,
  "office-cleaning": Building2,
  "move-in-out-cleaning": DoorOpen,
  "post-construction-cleaning": Construction,
  "window-cleaning": AppWindow,
  "pressure-washing": Droplets,
  sanitization: ShieldCheck,
};

const benefits = [
  { icon: BadgeCheck, t: "Trained professionals", d: "Vetted, uniformed teams who respect your space." },
  { icon: Leaf, t: "Safe products", d: "Effective, family- and pet-friendly cleaning agents." },
  { icon: Clock, t: "Punctual & fast", d: "Same-day and next-day slots across Eldoret." },
  { icon: ShieldCheck, t: "Satisfaction guaranteed", d: "Not happy? We'll make it right." },
];

const cleaningFaqs = [
  { q: "How much does cleaning cost?", a: "Prices start from KSh 800 per sofa seat, KSh 2,500 per visit for residential cleaning and KSh 6,000 for a full deep clean. Final quotes depend on the size and condition of the space — we'll confirm before we start." },
  { q: "Do I need to provide cleaning equipment?", a: "No. Our teams arrive fully equipped with professional-grade machines and safe cleaning products. You don't need to provide anything." },
  { q: "How long does a cleaning take?", a: "A standard home clean takes 2–4 hours, a deep clean 4–8 hours, and sofa or mattress cleaning about 30–60 minutes per item, depending on size and condition." },
  { q: "Are your products safe for children and pets?", a: "Yes. We use effective yet safe, low-odour products. Surfaces are ready to use once dry, and we can use fragrance-free options on request." },
  { q: "Which areas do you cover?", a: "All of Eldoret and Uasin Gishu — including CBD, Annex, Elgon View, Kapsoya, Langas, Pioneer, Kimumu and surrounding areas." },
];

export default function CleaningPage() {
  return (
    <>
      <PageHero
        eyebrow="Cleaning Services"
        title="Professional cleaning for a fresh, healthy home & office"
        subtitle="From weekly home cleaning to deep sofa, carpet and mattress care — our trained teams leave every space spotless. Serving all of Eldoret and the North Rift."
        crumbs={[{ label: "Home", href: "/" }, { label: "Cleaning" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#book" variant="gold" size="lg">Get a free quote <ArrowRight className="h-5 w-5" /></Button>
          <Button href={site.phoneHref} variant="white" size="lg"><Phone className="h-5 w-5" /> {site.phone}</Button>
        </div>
      </PageHero>

      {/* Benefits */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.t} className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest/8 text-forest">
                <b.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{b.t}</p>
                <p className="text-xs text-slate">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="Our Services" title="Cleaning for every need" subtitle="Choose from our full range of professional cleaning services — each with clear, upfront pricing." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cleaningServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <ServiceCard service={s} icon={iconMap[s.slug] ?? Sparkles} kind="cleaning" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Before & After" title="See the difference a deep clean makes" subtitle="Our extraction and detailing bring tired sofas, carpets and rooms back to life." />
            <ul className="mt-6 space-y-3 text-[15px] text-ink/75">
              {["Lifts embedded dirt, stains and odours", "Removes dust mites and allergens", "Restores colour and softness", "Fast-dry, ready to use the same day"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-white">
                    <BadgeCheck className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FurnitureVisual icon="sofa" tone="from-[#d8cbb0] to-[#b7a37c]" className="aspect-square rounded-2xl grayscale" />
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-slate">Before</p>
            </div>
            <div>
              <FurnitureVisual icon="sofa" tone="from-[#cdd9c4] to-[#a7bd97]" className="aspect-square rounded-2xl shadow-[var(--shadow-lift)]" />
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-forest">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking + info */}
      <section id="book" className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm kind="Cleaning" serviceOptions={cleaningServices.map((s) => s.name)} />
          <div>
            <SectionHeading eyebrow="Why Book With Us" title="Cleaning you can count on" />
            <div className="mt-6 space-y-4">
              {[
                { t: "Free, no-obligation quotes", d: "Tell us what you need and we'll give you a clear price up front." },
                { t: "Flexible scheduling", d: "One-off, weekly, bi-weekly or monthly — you choose." },
                { t: "Insured & careful", d: "We treat your home and belongings with the utmost care." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border border-black/8 bg-white p-5">
                  <p className="font-heading font-semibold text-ink">{f.t}</p>
                  <p className="mt-1 text-sm text-slate">{f.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-forest p-6 text-white">
              <Stars rating={5} />
              <p className="mt-3 text-[15px] leading-relaxed text-beige/90">
                &ldquo;Booked their deep cleaning before moving in. Punctual, professional and
                spotless. Highly recommend.&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold">Brian K. · Annex, Eldoret</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-white py-14">
        <div className="container-page text-center">
          <h2 className="font-heading text-2xl font-bold text-ink">We clean across Eldoret &amp; the North Rift</h2>
          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {serviceAreas.map((a) => (
              <span key={a} className="rounded-full bg-beige px-4 py-2 text-sm font-medium text-ink">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="FAQ" title="Cleaning questions, answered" className="mb-10" />
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={cleaningFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-forest px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready for a spotless space?</h2>
          <p className="mt-3 text-beige/80">Book your cleaning today — fast, friendly and affordable.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="#book" variant="gold" size="lg">Book Cleaning</Button>
            <Button href={waLink("Hello Titus Brands! I'd like to book a cleaning service.")} variant="white" size="lg" external>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
