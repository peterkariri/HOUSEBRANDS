import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Titus Brands Eldoret",
  description:
    "Get in touch with Titus Brands in Eldoret. Call, WhatsApp or email us for furniture, household items, cleaning and moving services across Uasin Gishu and the North Rift.",
};

const cards = [
  { icon: Phone, title: "Call us", value: site.phone, href: site.phoneHref, note: "Mon–Sat, 8am–7pm" },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat instantly", href: waLink("Hello Titus Brands!"), note: "Fastest response", external: true },
  { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}`, note: "We reply within a day" },
  { icon: MapPin, title: "Visit us", value: "Eldoret CBD", href: "#map", note: "Oginga Odinga Street" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Questions about a product, or ready to book a cleaning or move? Reach out — our friendly Eldoret team is here to help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("Hello Titus Brands!")} variant="gold" size="lg" external>
            <MessageCircle className="h-5 w-5" /> WhatsApp us
          </Button>
          <Button href={site.phoneHref} variant="white" size="lg">
            <Phone className="h-5 w-5" /> {site.phone}
          </Button>
        </div>
      </PageHero>

      {/* Contact cards */}
      <section className="container-page -mt-8 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest/8 text-forest transition group-hover:bg-forest group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-ink">{c.title}</p>
              <p className="font-heading font-bold text-forest">{c.value}</p>
              <p className="mt-0.5 text-xs text-slate">{c.note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-3xl bg-beige p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-ink">Visit our showroom</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span className="text-ink/80">{site.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-forest" />
                  <a href={site.phoneHref} className="text-ink/80 hover:text-forest">{site.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-forest" />
                  <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-forest">{site.email}</a>
                </li>
              </ul>

              <div className="mt-6 border-t border-black/10 pt-6">
                <p className="flex items-center gap-2 font-heading font-semibold text-ink">
                  <Clock className="h-5 w-5 text-forest" /> Business hours
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-ink/75">
                      <span>{h.day}</span>
                      <span className="font-medium text-ink">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                <SocialIcon href={site.socials.facebook} label="Facebook"><FacebookIcon className="h-4 w-4" /></SocialIcon>
                <SocialIcon href={site.socials.instagram} label="Instagram"><InstagramIcon className="h-4 w-4" /></SocialIcon>
                <SocialIcon href={site.socials.x} label="X"><XIcon className="h-4 w-4" /></SocialIcon>
              </div>
            </div>

            <div className="rounded-3xl bg-forest p-6 text-white sm:p-8">
              <p className="font-heading text-lg font-bold">Emergency / urgent request?</p>
              <p className="mt-2 text-sm text-beige/80">
                Need same-day delivery, cleaning or moving? Call or WhatsApp us directly and we&apos;ll
                do our best to help right away.
              </p>
              <Button href={waLink("Hello Titus Brands! I have an urgent request.")} variant="gold" className="mt-4" external>
                <MessageCircle className="h-4 w-4" /> Message us now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl border border-black/8 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-4 bg-white px-6 py-4">
            <div className="flex items-center gap-2">
              <Navigation className="h-5 w-5 text-forest" />
              <p className="font-heading font-semibold text-ink">Find us in Eldoret</p>
            </div>
            <Button
              href="https://www.google.com/maps/search/?api=1&query=Eldoret+CBD+Kenya"
              variant="ghost"
              size="sm"
              external
            >
              Open in Maps
            </Button>
          </div>
          <iframe
            title="Titus Brands location in Eldoret"
            src="https://www.google.com/maps?q=Eldoret,Kenya&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest shadow-sm transition hover:bg-forest hover:text-white"
    >
      {children}
    </a>
  );
}
