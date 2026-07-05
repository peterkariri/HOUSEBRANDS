export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: "New" | "Best Seller" | "Sale" | "Low Stock";
  inStock: boolean;
  tone: string; // gradient classes for the visual
  icon: ProductIcon;
  short: string;
  description: string;
  specs: { label: string; value: string }[];
};

export type ProductIcon =
  | "sofa"
  | "bed"
  | "table"
  | "chair"
  | "wardrobe"
  | "lamp"
  | "shelf"
  | "kitchen"
  | "rug"
  | "curtain";

export const categories = [
  { slug: "living-room", name: "Living Room", icon: "sofa", blurb: "Sofas, TV stands & coffee tables" },
  { slug: "bedroom", name: "Bedroom", icon: "bed", blurb: "Beds, mattresses & wardrobes" },
  { slug: "dining", name: "Dining", icon: "table", blurb: "Dining sets & sideboards" },
  { slug: "office", name: "Office", icon: "chair", blurb: "Desks, chairs & bookshelves" },
  { slug: "kitchenware", name: "Kitchenware", icon: "kitchen", blurb: "Cookware & dinner sets" },
  { slug: "decor", name: "Decor & Lighting", icon: "lamp", blurb: "Lighting, mirrors & wall décor" },
  { slug: "curtains-carpets", name: "Curtains & Carpets", icon: "curtain", blurb: "Curtains, rugs & carpets" },
  { slug: "storage", name: "Storage", icon: "shelf", blurb: "Cabinets, shelves & organizers" },
] as const;

export const products: Product[] = [
  {
    slug: "luna-3-seater-sofa",
    name: "Luna 3-Seater Fabric Sofa",
    category: "Living Room",
    price: 62000,
    oldPrice: 78000,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#e8ddc7] to-[#d8c7a6]",
    icon: "sofa",
    short: "Deep-seated comfort with a warm, timeless silhouette for the modern Kenyan living room.",
    description:
      "The Luna is our best-selling sofa for a reason. Sink into high-density foam cushions wrapped in a soft, stain-resistant weave, all supported by a solid hardwood frame built to last. Its clean lines and warm neutral tone make it the natural centrepiece of any living room.",
    specs: [
      { label: "Dimensions", value: "210 × 90 × 85 cm" },
      { label: "Frame", value: "Solid hardwood" },
      { label: "Upholstery", value: "Stain-resistant woven fabric" },
      { label: "Seats", value: "3 persons" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "nova-coffee-table",
    name: "Nova Round Coffee Table",
    category: "Living Room",
    price: 18500,
    rating: 4.7,
    reviews: 64,
    badge: "New",
    inStock: true,
    tone: "from-[#e3d3b6] to-[#c9b48c]",
    icon: "table",
    short: "A sculpted oak-finish table that anchors your seating area with quiet elegance.",
    description:
      "Crafted with a smooth oak veneer and a sturdy pedestal base, the Nova coffee table brings a soft, organic shape to your living space. Wide enough for your books, coffee and conversation.",
    specs: [
      { label: "Diameter", value: "90 cm" },
      { label: "Height", value: "42 cm" },
      { label: "Finish", value: "Natural oak veneer" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "elle-accent-chair",
    name: "Elle Accent Chair",
    category: "Living Room",
    price: 24900,
    oldPrice: 29900,
    rating: 4.8,
    reviews: 41,
    badge: "Sale",
    inStock: true,
    tone: "from-[#cdd9c4] to-[#a7bd97]",
    icon: "chair",
    short: "A statement armchair in forest-green velvet with solid wood legs.",
    description:
      "The Elle accent chair adds character to any corner. Upholstered in a rich forest-green velvet with tapered solid-wood legs, it is as comfortable as it is striking.",
    specs: [
      { label: "Dimensions", value: "72 × 78 × 84 cm" },
      { label: "Upholstery", value: "Premium velvet" },
      { label: "Legs", value: "Solid ash wood" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "haven-sideboard",
    name: "Haven Sideboard",
    category: "Living Room",
    price: 45000,
    rating: 4.6,
    reviews: 33,
    inStock: true,
    tone: "from-[#e7d9bd] to-[#cbb488]",
    icon: "shelf",
    short: "Generous storage with clean mid-century lines for your living or dining room.",
    description:
      "The Haven sideboard blends form and function — three soft-close cabinets and a spacious top surface for your décor, dinnerware or media console.",
    specs: [
      { label: "Dimensions", value: "160 × 45 × 75 cm" },
      { label: "Material", value: "Engineered wood, oak finish" },
      { label: "Storage", value: "3 cabinets, 2 shelves" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "serene-king-bed",
    name: "Serene Upholstered King Bed",
    category: "Bedroom",
    price: 58000,
    oldPrice: 69000,
    rating: 4.9,
    reviews: 87,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#e9dcc6] to-[#d3bd97]",
    icon: "bed",
    short: "A padded headboard and sturdy slatted base for restful, elevated nights.",
    description:
      "The Serene bed frame pairs a tall, padded headboard with a strong slatted base — no box spring needed. Its neutral upholstery works with any bedroom palette.",
    specs: [
      { label: "Size", value: "King (180 × 200 cm)" },
      { label: "Headboard", value: "Padded, 120 cm tall" },
      { label: "Base", value: "Reinforced wooden slats" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "cloud-pocket-mattress",
    name: "Cloud Pocket-Spring Mattress",
    category: "Bedroom",
    price: 34000,
    oldPrice: 42000,
    rating: 4.8,
    reviews: 152,
    badge: "Sale",
    inStock: true,
    tone: "from-[#f0e7d5] to-[#ddceb0]",
    icon: "bed",
    short: "Individually wrapped springs and a memory-foam top for undisturbed sleep.",
    description:
      "The Cloud mattress combines pocket springs with a plush memory-foam comfort layer, so movement on one side won't disturb the other. Breathable and supportive night after night.",
    specs: [
      { label: "Size", value: "King (180 × 200 cm)" },
      { label: "Height", value: "28 cm" },
      { label: "Springs", value: "Individually pocketed" },
      { label: "Warranty", value: "8 years" },
    ],
  },
  {
    slug: "aspen-wardrobe",
    name: "Aspen 3-Door Wardrobe",
    category: "Bedroom",
    price: 52000,
    rating: 4.5,
    reviews: 29,
    inStock: true,
    tone: "from-[#e5d6b9] to-[#c8b085]",
    icon: "wardrobe",
    short: "Spacious hanging, shelving and drawers behind smooth sliding doors.",
    description:
      "The Aspen wardrobe keeps your bedroom tidy with a full-height hanging section, adjustable shelves and soft-close drawers, all behind elegant sliding doors with a mirror panel.",
    specs: [
      { label: "Dimensions", value: "180 × 60 × 210 cm" },
      { label: "Doors", value: "3 sliding (1 mirror)" },
      { label: "Storage", value: "Hanging rail, 6 shelves, 2 drawers" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "meridian-dining-set",
    name: "Meridian 6-Seater Dining Set",
    category: "Dining",
    price: 74000,
    oldPrice: 89000,
    rating: 4.7,
    reviews: 58,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#e6d7bb] to-[#cbb389]",
    icon: "table",
    short: "A solid wood table with six cushioned chairs — made for long family meals.",
    description:
      "Gather everyone around the Meridian. A robust solid-wood table paired with six comfortably cushioned chairs, finished in a warm natural tone that suits every dining room.",
    specs: [
      { label: "Table", value: "160 × 90 cm" },
      { label: "Seats", value: "6 cushioned chairs" },
      { label: "Material", value: "Solid wood & upholstered seats" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "atlas-office-desk",
    name: "Atlas Executive Office Desk",
    category: "Office",
    price: 39000,
    rating: 4.6,
    reviews: 37,
    badge: "New",
    inStock: true,
    tone: "from-[#e4d5b8] to-[#c7af84]",
    icon: "table",
    short: "A wide, cable-managed work surface with built-in drawers for the home office.",
    description:
      "The Atlas desk gives you room to work. A broad surface, integrated cable management and lockable drawers make it ideal for the home office or a professional workspace.",
    specs: [
      { label: "Dimensions", value: "140 × 70 × 76 cm" },
      { label: "Storage", value: "3 lockable drawers" },
      { label: "Finish", value: "Scratch-resistant laminate" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "orbit-ergonomic-chair",
    name: "Orbit Ergonomic Office Chair",
    category: "Office",
    price: 21500,
    oldPrice: 26000,
    rating: 4.8,
    reviews: 96,
    badge: "Sale",
    inStock: true,
    tone: "from-[#d7ddcf] to-[#aebfa1]",
    icon: "chair",
    short: "Breathable mesh, lumbar support and full adjustability for all-day comfort.",
    description:
      "Sit better for longer with the Orbit. A breathable mesh back, adjustable lumbar support, armrests and tilt tension keep you comfortable through the whole working day.",
    specs: [
      { label: "Back", value: "Breathable mesh" },
      { label: "Adjustable", value: "Height, tilt, armrests, lumbar" },
      { label: "Max load", value: "130 kg" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "woven-pendant-light",
    name: "Woven Rattan Pendant Light",
    category: "Decor & Lighting",
    price: 8900,
    rating: 4.7,
    reviews: 44,
    badge: "New",
    inStock: true,
    tone: "from-[#f0e6d2] to-[#dccbaa]",
    icon: "lamp",
    short: "A hand-woven shade that casts a warm, textured glow over any room.",
    description:
      "Bring natural warmth overhead with this hand-woven rattan pendant. It throws a soft, patterned light that feels instantly cosy above a dining table or reading nook.",
    specs: [
      { label: "Diameter", value: "40 cm" },
      { label: "Material", value: "Natural rattan" },
      { label: "Fitting", value: "E27, bulb not included" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "sahara-area-rug",
    name: "Sahara Hand-Tufted Area Rug",
    category: "Curtains & Carpets",
    price: 14500,
    oldPrice: 18000,
    rating: 4.6,
    reviews: 51,
    badge: "Low Stock",
    inStock: true,
    tone: "from-[#ead9bd] to-[#d0b98e]",
    icon: "rug",
    short: "A soft, low-pile rug in warm neutral tones that grounds any space.",
    description:
      "The Sahara rug adds softness underfoot and a subtle geometric pattern in warm, earthy tones. Durable, easy to clean and perfectly sized for living and dining areas.",
    specs: [
      { label: "Size", value: "200 × 290 cm" },
      { label: "Pile", value: "Low, hand-tufted" },
      { label: "Material", value: "Polypropylene blend" },
      { label: "Care", value: "Vacuum & spot clean" },
    ],
  },
  {
    slug: "linen-blackout-curtains",
    name: "Linen-Look Blackout Curtains",
    category: "Curtains & Carpets",
    price: 6500,
    rating: 4.5,
    reviews: 39,
    inStock: true,
    tone: "from-[#efe6d3] to-[#dccdae]",
    icon: "curtain",
    short: "Room-darkening panels with a soft linen texture — a pair per pack.",
    description:
      "These blackout curtains block light and reduce noise while keeping a soft, linen-like drape. Sold as a pair, ready to hang on rings or a rod pocket.",
    specs: [
      { label: "Size", value: "140 × 240 cm (pair)" },
      { label: "Feature", value: "Blackout & thermal" },
      { label: "Header", value: "Eyelet + rod pocket" },
      { label: "Care", value: "Machine washable" },
    ],
  },
  {
    slug: "chef-cookware-set",
    name: "Chef 12-Piece Cookware Set",
    category: "Kitchenware",
    price: 12900,
    oldPrice: 15900,
    rating: 4.8,
    reviews: 73,
    badge: "Sale",
    inStock: true,
    tone: "from-[#e6d8bd] to-[#ccb489]",
    icon: "kitchen",
    short: "Non-stick pots and pans that heat evenly and clean up in seconds.",
    description:
      "A complete kitchen starter — pots, pans and lids with a durable non-stick coating and stay-cool handles. Even heating, easy cleaning, everyday value.",
    specs: [
      { label: "Pieces", value: "12 (pots, pans, lids)" },
      { label: "Coating", value: "Non-stick, PFOA-free" },
      { label: "Compatible", value: "Gas & electric" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    slug: "terra-dinner-set",
    name: "Terra 24-Piece Dinner Set",
    category: "Kitchenware",
    price: 7800,
    rating: 4.7,
    reviews: 61,
    badge: "New",
    inStock: true,
    tone: "from-[#f1e8d6] to-[#ded0b1]",
    icon: "kitchen",
    short: "Stoneware plates and bowls for six, in a warm matte glaze.",
    description:
      "Set the table with the Terra collection — durable stoneware in a warm matte finish. A full 24-piece service for six, dishwasher and microwave safe.",
    specs: [
      { label: "Pieces", value: "24 (service for 6)" },
      { label: "Material", value: "Glazed stoneware" },
      { label: "Safe for", value: "Dishwasher & microwave" },
      { label: "Care", value: "Chip-resistant" },
    ],
  },
  {
    slug: "vertex-bookshelf",
    name: "Vertex 5-Tier Bookshelf",
    category: "Storage",
    price: 16500,
    rating: 4.5,
    reviews: 28,
    inStock: true,
    tone: "from-[#e5d6b9] to-[#c9b186]",
    icon: "shelf",
    short: "An open, five-tier shelf that stores and displays in equal measure.",
    description:
      "The Vertex bookshelf offers five open tiers for books, plants and treasures. A slim footprint with a warm wood finish that fits any room.",
    specs: [
      { label: "Dimensions", value: "80 × 30 × 180 cm" },
      { label: "Tiers", value: "5 open shelves" },
      { label: "Finish", value: "Warm oak" },
      { label: "Warranty", value: "1 year" },
    ],
  },
];

export function money(n: number) {
  return "KSh " + n.toLocaleString("en-KE");
}

/* ---------------- Cleaning services ---------------- */
export type Service = {
  slug: string;
  name: string;
  from: number;
  unit: string;
  blurb: string;
  points: string[];
};

export const cleaningServices: Service[] = [
  { slug: "residential-cleaning", name: "Residential Cleaning", from: 2500, unit: "per visit", blurb: "Regular home cleaning that keeps every room fresh and welcoming.", points: ["Living areas & bedrooms", "Kitchen & bathrooms", "Dusting, mopping & bins", "Weekly, bi-weekly or monthly"] },
  { slug: "deep-cleaning", name: "Deep Cleaning", from: 6000, unit: "per home", blurb: "A top-to-bottom reset for homes that need extra attention.", points: ["Inside cabinets & appliances", "Grout, tiles & skirting", "Windows & sills", "Detailed sanitising"] },
  { slug: "sofa-cleaning", name: "Sofa Cleaning", from: 800, unit: "per seat", blurb: "Deep upholstery extraction that lifts stains, dust and odours.", points: ["Fabric & leather sofas", "Stain & odour removal", "Fast-dry extraction", "Fabric-safe products"] },
  { slug: "mattress-cleaning", name: "Mattress Cleaning", from: 1500, unit: "per mattress", blurb: "Remove dust mites and allergens for healthier sleep.", points: ["Deep vacuum & extraction", "Stain treatment", "Anti-allergen sanitising", "All sizes"] },
  { slug: "carpet-cleaning", name: "Carpet Cleaning", from: 20, unit: "per sq. ft", blurb: "Restore the colour and softness of carpets and rugs.", points: ["Hot-water extraction", "Spot & traffic-lane treatment", "Deodorising", "Rugs & wall-to-wall"] },
  { slug: "curtain-cleaning", name: "Curtain Cleaning", from: 500, unit: "per panel", blurb: "Fresh, dust-free curtains without taking them off your rods for days.", points: ["On-site or pickup", "Fabric-safe care", "Dust & allergen removal", "Pressed & re-hung"] },
  { slug: "office-cleaning", name: "Office Cleaning", from: 5000, unit: "per office", blurb: "Reliable commercial cleaning that keeps your workplace sharp.", points: ["Desks & workstations", "Washrooms & kitchenettes", "Floors & waste", "Flexible schedules"] },
  { slug: "move-in-out-cleaning", name: "Move-In / Move-Out Cleaning", from: 6500, unit: "per home", blurb: "Hand over — or move into — a spotless, ready home.", points: ["Full property clean", "Cabinets & appliances", "Deposit-friendly finish", "Same-day options"] },
  { slug: "post-construction-cleaning", name: "Post-Construction Cleaning", from: 9000, unit: "per site", blurb: "Clear the dust and debris after building or renovation.", points: ["Fine-dust removal", "Paint & adhesive spots", "Window & fixture clean", "Site-ready finish"] },
  { slug: "window-cleaning", name: "Window Cleaning", from: 150, unit: "per window", blurb: "Streak-free glass, inside and out, for a brighter home or office.", points: ["Interior & exterior", "Frames & sills", "Streak-free finish", "Ground-floor & reachable upper"] },
  { slug: "pressure-washing", name: "Pressure Washing", from: 30, unit: "per sq. ft", blurb: "Blast away grime from driveways, walls and paving.", points: ["Driveways & compounds", "Walls & fences", "Paving & patios", "Powerful, safe cleaning"] },
  { slug: "sanitization", name: "Sanitisation Services", from: 4000, unit: "per space", blurb: "Professional disinfection for homes, offices and premises.", points: ["Surface disinfection", "Fogging available", "Safe, certified products", "Homes & businesses"] },
];

/* ---------------- Moving services ---------------- */
export const movingServices: Service[] = [
  { slug: "house-moving", name: "House Moving", from: 8000, unit: "from", blurb: "Careful, on-time home moves across Eldoret and beyond.", points: ["Trained handling crew", "Protective wrapping", "Loading & offloading", "Flexible truck sizes"] },
  { slug: "office-relocation", name: "Office Relocation", from: 15000, unit: "from", blurb: "Move your business with minimal downtime and zero stress.", points: ["Weekend & after-hours moves", "IT & furniture handling", "Labelled, organised packing", "Fast reassembly"] },
  { slug: "packing-services", name: "Packing Services", from: 3500, unit: "from", blurb: "Professional packing that protects everything you own.", points: ["Quality boxes & wrap", "Fragile-item care", "Room-by-room labelling", "Unpacking on request"] },
  { slug: "furniture-assembly", name: "Assembly & Disassembly", from: 2000, unit: "from", blurb: "We take apart and rebuild your furniture at the new place.", points: ["Beds, wardrobes & desks", "Tools & expertise included", "No missing screws", "Ready-to-use setup"] },
  { slug: "storage-services", name: "Storage Services", from: 4000, unit: "per month", blurb: "Secure short- or long-term storage for your belongings.", points: ["Clean, secure units", "Flexible durations", "Inventory tracking", "Easy access"] },
  { slug: "long-distance-moving", name: "Long-Distance Moving", from: 25000, unit: "from", blurb: "Reliable moves from Eldoret to any town across Kenya.", points: ["Nationwide coverage", "Tracked transit", "Full insurance options", "Door-to-door service"] },
];

/* ---------------- Testimonials ---------------- */
export const testimonials = [
  { name: "Mercy Chebet", area: "Elgon View, Eldoret", text: "I furnished my whole living room from Titus Brands and the delivery was same-day. The Luna sofa is even better in person. Truly one-stop.", rating: 5, initials: "MC" },
  { name: "Brian Kiptoo", area: "Annex, Eldoret", text: "Booked their deep cleaning before moving into my new apartment. The team was punctual, professional and left the place spotless. Highly recommend.", rating: 5, initials: "BK" },
  { name: "Achieng' Otieno", area: "Kapsoya, Eldoret", text: "Titus Brands moved my office over a weekend with zero downtime. They wrapped everything, labelled the boxes and reassembled my desks. Stress-free.", rating: 5, initials: "AO" },
  { name: "Samuel Mwangi", area: "Kimumu, Eldoret", text: "Great prices on the mattress and dining set, and the M-Pesa checkout was simple. Customer care answered every question on WhatsApp instantly.", rating: 5, initials: "SM" },
  { name: "Faith Jerop", area: "Langas, Eldoret", text: "Their sofa cleaning brought my old couch back to life. Fair pricing per seat and it dried quickly. I'll be a repeat customer for sure.", rating: 5, initials: "FJ" },
  { name: "Dennis Wanjala", area: "Pioneer, Eldoret", text: "One call and I had furniture delivered and the movers booked for the same week. Titus Brands really is everything a home needs in one place.", rating: 5, initials: "DW" },
];

/* ---------------- Stats ---------------- */
export const stats = [
  { value: 5000, suffix: "+", label: "Happy homes served" },
  { value: 1200, suffix: "+", label: "Cleaning & moving jobs" },
  { value: 15, suffix: "", label: "Areas covered in Eldoret" },
  { value: 4.9, suffix: "/5", label: "Average customer rating", decimals: 1 },
];

/* ---------------- FAQ ---------------- */
export const faqs = [
  { q: "Do you deliver furniture in Eldoret?", a: "Yes. We offer fast delivery across Eldoret CBD, Annex, Elgon View, Kapsoya, Langas, Pioneer, Kimumu and the wider North Rift. Same-day delivery is available within Eldoret for in-stock items." },
  { q: "How do I pay?", a: "We accept M-Pesa, Visa and Mastercard, bank transfer, and cash on delivery within Eldoret. Just choose your preferred option at checkout or when you confirm your order on WhatsApp." },
  { q: "Can I book cleaning and moving online?", a: "Absolutely. Use the booking form on our Cleaning or Moving pages, or message us on WhatsApp. We'll confirm your date, time and a clear quote before we start." },
  { q: "What areas do you serve?", a: "We serve all of Eldoret and Uasin Gishu County — including CBD, Junction, Sogomo, Angaza, Langas, Pioneer, Annex, Racecourse, Kapsoya, Elgon View, Kimumu, Huruma, Maili Nne, Cheplaskei and Kipkaren — plus long-distance moving across Kenya." },
  { q: "Do your products come with a warranty?", a: "Yes. Most of our furniture carries a 1–2 year warranty, and mattresses come with up to 8 years. Warranty details are listed on each product page." },
  { q: "How quickly can you send a cleaning or moving team?", a: "For many jobs we offer same-day or next-day service within Eldoret, subject to availability. Book early in the day or on WhatsApp for the fastest slot." },
];

/* ---------------- Blog ---------------- */
export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  tone: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "small-living-room-eldoret",
    title: "7 Ways to Make a Small Living Room Feel Bigger",
    category: "Interior Design",
    excerpt: "Smart layout, light colours and the right sofa can transform even the most compact Eldoret apartment. Here's how.",
    date: "2026-06-18",
    readTime: "5 min read",
    tone: "from-[#e8ddc7] to-[#d3bd97]",
    body: [
      "A small living room doesn't have to feel cramped. With a few deliberate choices, you can create a space that feels open, calm and welcoming — even in a compact apartment.",
      "Start with your sofa. A raised-leg design, like our Luna 3-Seater, lets light travel underneath and makes the floor feel larger. Choose warm neutral tones over dark, heavy fabrics to keep the room airy.",
      "Use a round coffee table to improve flow and avoid sharp corners in tight spaces. Mirrors bounce light around the room, and a single tall shelf draws the eye upward, making ceilings feel higher.",
      "Finally, keep clutter off the floor with smart storage — a sideboard or a slim bookshelf does the job beautifully. Fewer, better pieces always beat many small ones.",
    ],
  },
  {
    slug: "how-often-clean-sofa",
    title: "How Often Should You Deep-Clean Your Sofa?",
    category: "Cleaning Tips",
    excerpt: "Your sofa hides more dust and allergens than you think. Here's a simple schedule to keep it fresh and healthy.",
    date: "2026-06-05",
    readTime: "4 min read",
    tone: "from-[#cdd9c4] to-[#a7bd97]",
    body: [
      "Sofas absorb dust, skin cells, food crumbs and moisture every single day. Even if it looks clean, your couch can hold allergens that affect the air in your home.",
      "As a rule of thumb, vacuum your sofa weekly, spot-clean spills immediately, and book a professional deep clean every 6 to 12 months. Homes with children, pets or allergies benefit from more frequent cleaning.",
      "Professional extraction reaches deep into the fabric where a vacuum can't, removing embedded dirt and odours and extending the life of your upholstery.",
      "Titus Brands offers sofa cleaning from KSh 800 per seat across Eldoret, using fabric-safe products and fast-dry extraction. Book online or on WhatsApp.",
    ],
  },
  {
    slug: "stress-free-house-move-eldoret",
    title: "Your Stress-Free House Moving Checklist",
    category: "Moving Tips",
    excerpt: "Moving house in Eldoret? This week-by-week checklist keeps everything on track from packing to unpacking.",
    date: "2026-05-22",
    readTime: "6 min read",
    tone: "from-[#e6d7bb] to-[#cbb389]",
    body: [
      "A smooth move starts with a plan. Two weeks out, declutter and decide what to keep, donate or discard. The less you move, the less you pay.",
      "One week before, gather quality boxes, bubble wrap and labels — or let our packing team handle it. Pack room by room and label every box clearly with its contents and destination room.",
      "On moving day, keep an essentials bag with documents, chargers, medication and a change of clothes. Confirm your movers' arrival time the night before.",
      "Booking a professional crew like Titus Brands means loading, transport, offloading and even furniture reassembly are handled for you — so you can settle in faster.",
    ],
  },
  {
    slug: "choosing-right-mattress",
    title: "How to Choose the Right Mattress for Better Sleep",
    category: "Buying Guides",
    excerpt: "Firmness, size and materials all matter. A quick guide to picking a mattress you'll love for years.",
    date: "2026-05-08",
    readTime: "5 min read",
    tone: "from-[#f0e7d5] to-[#ddceb0]",
    body: [
      "A good mattress is an investment in your health. The right one supports your spine, regulates temperature and lets you wake up refreshed.",
      "Consider your sleeping position: side sleepers usually prefer a softer surface, while back and stomach sleepers benefit from firmer support. Pocket-spring designs isolate movement, so a restless partner won't disturb you.",
      "Always match your mattress to your bed size and check the height — a taller mattress often means better comfort layers. Look for breathable materials to stay cool through warm nights.",
      "Our Cloud Pocket-Spring Mattress combines individually wrapped springs with memory foam, backed by an 8-year warranty. Try before you buy at our Eldoret showroom.",
    ],
  },
  {
    slug: "home-organization-hacks",
    title: "10 Home Organization Hacks That Actually Work",
    category: "Home Organization",
    excerpt: "Simple storage ideas to reclaim space and keep every room tidy without a big renovation.",
    date: "2026-04-24",
    readTime: "4 min read",
    tone: "from-[#ead9bd] to-[#d0b98e]",
    body: [
      "Organisation isn't about owning less — it's about giving everything a home. Start with the spots that cause the most clutter: entryways, kitchens and bedrooms.",
      "Use vertical space with tall shelves and over-door racks. Storage boxes and baskets corral small items, while a shoe rack near the door stops the daily pile-up.",
      "In the kitchen, drawer dividers and stackable containers make a huge difference. In the bedroom, under-bed storage and a wardrobe with drawers keep clothes in order.",
      "Titus Brands stocks a full range of storage and organisation products — shelves, cabinets, boxes and racks — to help every room work harder for you.",
    ],
  },
  {
    slug: "furniture-care-guide",
    title: "Furniture Care 101: Make Your Pieces Last Longer",
    category: "Furniture Care",
    excerpt: "A little maintenance goes a long way. Keep your wood, fabric and leather looking new for years.",
    date: "2026-04-10",
    readTime: "5 min read",
    tone: "from-[#e5d6b9] to-[#c9b186]",
    body: [
      "Quality furniture can last decades with the right care. The good news: most maintenance takes only minutes.",
      "For wood, dust regularly with a soft cloth and keep pieces out of direct sunlight to prevent fading. Wipe spills immediately and use coasters to protect surfaces.",
      "Fabric sofas benefit from weekly vacuuming and a professional clean once or twice a year. Leather should be wiped with a slightly damp cloth and conditioned occasionally.",
      "Rotate mattress and sofa cushions to spread wear evenly. And when a deep clean is due, our team is a WhatsApp message away.",
    ],
  },
];

export const paymentMethods = ["M-Pesa", "Visa", "Mastercard", "Cash on Delivery", "Bank Transfer"];
