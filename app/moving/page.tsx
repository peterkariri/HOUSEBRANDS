import type { Metadata } from "next";
import {
  Home,
  Building2,
  Package,
  Wrench,
  Warehouse,
  MapPin,
  Truck,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
  Phone,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { MovingEstimator } from "@/components/moving-estimator";
import { FaqAccordion } from "@/components/faq-accordion";
import { Stars } from "@/components/stars";
import { movingServices } from "@/lib/data";
import { site, serviceAreas, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Movers in Eldoret | House & Office Moving Services",
  description:
    "Reliable movers in Eldoret for house moving, office relocation, packing, loading, assembly, storage and long-distance moves across Kenya. Get a fast, free estimate.",
};

const iconMap: Record<string, LucideIcon> = {
  "house-moving": Home,
  "office-relocation": Building2,
  "packing-services": Package,
  "furniture-assembly": Wrench,
  "storage-services": Warehouse,
  "long-distance-moving": MapPin,
};

const perks = [
  { icon: Users, t: "Trained crew", d: "Careful, experienced handlers." },
  { icon: ShieldCheck, t: "Damage-free", d: "Protective wrapping on everything." },
  { icon: Clock, t: "On time", d: "We arrive and finish on schedule." },
  { icon: Truck, t: "Right-sized trucks", d: "From pickups to full lorries." },
];

const steps = [
  { t: "Get your estimate", d: "Use the calculator or send us your details for a fast quote." },
  { t: "We plan & pack", d: "Our team wraps, packs and labels everything with care." },
  { t: "Safe transport", d: "We load, move and track your belongings to the new place." },
  { t: "Unload & assemble", d: "We offload and reassemble your furniture, ready to use." },
];

const movingFaqs = [
  { q: "How much does moving cost?", a: "House moves within Eldoret start from around KSh 8,000 depending on your home size and items. Office relocations start from KSh 15,000, and long-distance moves from KSh 25,000. Use our calculator for an instant guide, then we confirm after a quick survey." },
  { q: "Do you provide packing materials?", a: "Yes. Our packing service includes quality boxes, bubble wrap, tape and labels. You can also book packing as an add-on to any move." },
  { q: "Will you assemble my furniture at the new place?", a: "Absolutely. Disassembly and reassembly of beds, wardrobes, desks and more is available — our crew brings the tools and expertise." },
  { q: "Can you move long distance from Eldoret?", a: "Yes. We handle long-distance and nationwide moves across Kenya with tracked transit and door-to-door service." },
  { q: "How far in advance should I book?", a: "We recommend booking 2–3 days ahead for local moves and about a week for long-distance or office relocations. Same-day moves are sometimes possible — just ask." },
];

export default function MovingPage() {
  return (
    <>
      <PageHero
        eyebrow="Moving Services"
        title="Reliable movers who make relocation easy"
        subtitle="House moving, office relocation, packing, assembly and storage — handled by a careful, professional crew. Local to Eldoret and long-distance across Kenya."
        crumbs={[{ label: "Home", href: "/" }, { label: "Moving" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#estimate" variant="gold" size="lg">Get free estimate <ArrowRight className="h-5 w-5" /></Button>
          <Button href={site.phoneHref} variant="white" size="lg"><Phone className="h-5 w-5" /> {site.phone}</Button>
        </div>
      </PageHero>

      {/* Perks */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {perks.map((b) => (
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

      {/* Services */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="Our Services" title="Everything you need to move" subtitle="Pick individual services or a complete, door-to-door move — all with clear pricing." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movingServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <ServiceCard service={s} icon={iconMap[s.slug] ?? Boxes} kind="moving" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading center eyebrow="How It Works" title="Your move in four easy steps" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="relative h-full rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)]">
                  <span className="font-heading text-3xl font-extrabold text-gold">0{i + 1}</span>
                  <h3 className="mt-2 font-heading font-semibold text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator + booking */}
      <section id="estimate" className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="Plan Your Move" title="Estimate & book in minutes" subtitle="Get a guide price instantly, then book your preferred date." className="mb-12" />
        <div className="grid gap-8 lg:grid-cols-2">
          <MovingEstimator />
          <BookingForm kind="Moving" serviceOptions={movingServices.map((s) => s.name)} />
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-14">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl bg-forest p-8 text-center text-white lg:p-12">
            <Stars rating={5} className="justify-center" />
            <p className="mt-4 font-heading text-xl font-medium leading-relaxed sm:text-2xl">
              &ldquo;Titus Brands moved my office over a weekend with zero downtime. They wrapped
              everything, labelled the boxes and reassembled my desks. Completely stress-free.&rdquo;
            </p>
            <p className="mt-5 font-semibold text-gold">Achieng&apos; O.</p>
            <p className="text-sm text-beige/70">Kapsoya, Eldoret</p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="container-page py-14 text-center">
        <h2 className="font-heading text-2xl font-bold text-ink">We move across Eldoret &amp; beyond</h2>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {serviceAreas.map((a) => (
            <span key={a} className="rounded-full bg-beige px-4 py-2 text-sm font-medium text-ink">{a}</span>
          ))}
          <span className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-white">+ Nationwide</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 lg:py-24">
        <SectionHeading center eyebrow="FAQ" title="Moving questions, answered" className="mb-10" />
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={movingFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-forest px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Moving soon? Let&apos;s make it effortless.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="#estimate" variant="gold" size="lg">Get Free Estimate</Button>
            <Button href={waLink("Hello Titus Brands! I'd like to book a move.")} variant="white" size="lg" external>
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
