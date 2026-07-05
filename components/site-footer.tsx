import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon, XIcon } from "./social-icons";
import { Logo } from "./brand";
import { Newsletter } from "./newsletter";
import { site, serviceAreas } from "@/lib/site";
import { paymentMethods } from "@/lib/data";

const shopLinks = [
  { label: "Upholstered Beds", href: "/shop" },
  { label: "Wooden Beds", href: "/shop" },
  { label: "Luxury Beds", href: "/shop" },
  { label: "Modern Beds", href: "/shop" },
  { label: "Metal Beds", href: "/shop" },
  { label: "Bedroom Sets", href: "/shop" },
];

const serviceLinks = [
  { label: "Residential Cleaning", href: "/cleaning" },
  { label: "Sofa & Carpet Cleaning", href: "/cleaning" },
  { label: "Deep Cleaning", href: "/cleaning" },
  { label: "House Moving", href: "/moving" },
  { label: "Office Relocation", href: "/moving" },
  { label: "Packing & Storage", href: "/moving" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Shop All", href: "/shop" },
];

export function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-beige/80">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="container-page grid gap-6 py-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Join the Titus Brands family
            </h3>
            <p className="mt-2 max-w-md text-sm text-beige/70">
              Get exclusive offers, new arrivals and home care tips delivered to your inbox.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige/70">
            {site.tagline} Furniture, household essentials, professional cleaning and reliable
            moving — all under one trusted roof in {site.city}.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Mon–Sat: 8am–7pm · Sun: 10am–4pm</span>
            </li>
          </ul>
        </div>

        <FooterCol title="Shop" links={shopLinks} />
        <FooterCol title="Services" links={serviceLinks} />
        <FooterCol title="Company" links={companyLinks} />

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Service Areas
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-beige/70">
            {serviceAreas.slice(0, 10).join(" · ")} &amp; across Uasin Gishu.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={site.socials.facebook} label="Facebook"><FacebookIcon className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={site.socials.instagram} label="Instagram"><InstagramIcon className="h-4 w-4" /></SocialIcon>
            <SocialIcon href={site.socials.x} label="X"><XIcon className="h-4 w-4" /></SocialIcon>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-beige/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. Eldoret, Kenya.</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1">We accept:</span>
            {paymentMethods.map((p) => (
              <span key={p} className="rounded-md bg-white/10 px-2 py-1 font-medium text-beige/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-beige/70 transition hover:text-gold">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-beige transition hover:bg-gold hover:text-forest-900"
    >
      {children}
    </a>
  );
}
