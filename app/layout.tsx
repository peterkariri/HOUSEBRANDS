import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Furniture, Cleaning & Moving in Eldoret`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "furniture Eldoret",
    "household items Eldoret",
    "cleaning services Eldoret",
    "movers Eldoret",
    "sofa cleaning Eldoret",
    "carpet cleaning Eldoret",
    "mattresses Eldoret",
    "office furniture Eldoret",
    "home decor Eldoret",
    "Titus Brands",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Everything Your Home Needs`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Everything Your Home Needs`,
    description: site.description,
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14532d",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: site.url + "/og.png",
  "@id": site.url,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oginga Odinga Street",
    addressLocality: "Eldoret",
    addressRegion: "Uasin Gishu",
    addressCountry: "KE",
  },
  areaServed: "Eldoret, Uasin Gishu, North Rift, Kenya",
  priceRange: "KSh",
  openingHours: "Mo-Sa 08:00-19:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-forest focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
