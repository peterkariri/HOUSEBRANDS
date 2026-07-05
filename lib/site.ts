export const site = {
  name: "Titus Brands",
  tagline: "Everything Your Home Needs. All in One Place.",
  altTagline: "Transforming Houses into Homes",
  description:
    "Titus Brands is a modern home lifestyle company in Eldoret, Kenya. Buy furniture and household essentials, book professional cleaning, and hire reliable movers — all under one trusted roof.",
  url: "https://titusbrands.co.ke",
  city: "Eldoret",
  region: "North Rift",
  county: "Uasin Gishu",
  phone: "+254 712 000 000",
  phoneHref: "tel:+254712000000",
  whatsapp: "254712000000",
  email: "hello@titusbrands.co.ke",
  address: "Titus Brands Home Centre, Oginga Odinga Street, Eldoret CBD, Uasin Gishu, Kenya",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],
  socials: {
    facebook: "https://facebook.com/titusbrands",
    instagram: "https://instagram.com/titusbrands",
    tiktok: "https://tiktok.com/@titusbrands",
    x: "https://x.com/titusbrands",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const serviceAreas = [
  "Eldoret CBD",
  "Junction",
  "Sogomo",
  "Angaza",
  "Langas",
  "Pioneer",
  "Annex",
  "Racecourse",
  "Kapsoya",
  "Elgon View",
  "Kimumu",
  "Huruma",
  "Maili Nne",
  "Cheplaskei",
  "Kipkaren",
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Cleaning", href: "/cleaning" },
  { label: "Moving", href: "/moving" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
