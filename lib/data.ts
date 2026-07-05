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
  tone: string; // gradient classes for the fallback visual
  icon: ProductIcon;
  image: string; // real product photo
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
  { slug: "upholstered-beds", name: "Upholstered Beds", icon: "bed", blurb: "Soft, tufted comfort" },
  { slug: "wooden-beds", name: "Wooden Beds", icon: "bed", blurb: "Solid hardwood frames" },
  { slug: "luxury-beds", name: "Luxury Beds", icon: "bed", blurb: "Statement centrepieces" },
  { slug: "modern-beds", name: "Modern Beds", icon: "bed", blurb: "Sleek, contemporary styles" },
  { slug: "metal-beds", name: "Metal Beds", icon: "bed", blurb: "Strong, durable frames" },
  { slug: "bedroom-sets", name: "Bedroom Sets", icon: "wardrobe", blurb: "Beds, wardrobes & dressers" },
] as const;

const PHOTO = "/photostitus";

export const products: Product[] = [
  {
    slug: "amani-classic-tufted-bed",
    name: "Amani Classic Tufted Bed",
    category: "Wooden Beds",
    price: 42000,
    rating: 4.8,
    reviews: 64,
    inStock: true,
    tone: "from-[#e8ddc7] to-[#c9b48c]",
    icon: "bed",
    image: `${PHOTO}/amani-classic-tufted-bed.jpeg`,
    short: "A timeless espresso-wood frame with a soft cream tufted headboard and footboard.",
    description:
      "The Amani pairs a rich dark hardwood frame with a deep-buttoned cream headboard and matching footboard for a look that never dates. Solid, sturdy and beautifully finished — a warm, classic centrepiece for any bedroom.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Frame", value: "Solid hardwood, espresso finish" },
      { label: "Headboard", value: "Padded & button-tufted" },
      { label: "Base", value: "Reinforced wooden slats" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "pearl-white-tufted-bed",
    name: "Pearl White Tufted Bed",
    category: "Upholstered Beds",
    price: 38000,
    rating: 4.7,
    reviews: 51,
    inStock: true,
    tone: "from-[#f1ece1] to-[#ddceb0]",
    icon: "bed",
    image: `${PHOTO}/pearl-white-tufted-bed.jpeg`,
    short: "Clean, bright and elegant — a crisp white frame with a button-tufted headboard.",
    description:
      "The Pearl brings a fresh, airy feel to the bedroom with its all-white wooden frame and softly padded, button-tufted headboard. It lifts any space and pairs effortlessly with light or bold bedding.",
    specs: [
      { label: "Size", value: "5 × 6 ft (Queen)" },
      { label: "Frame", value: "Wood, white matte finish" },
      { label: "Headboard", value: "Upholstered & tufted" },
      { label: "Base", value: "Slatted, no box spring needed" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "regal-carved-poster-bed",
    name: "Regal Carved Poster Bed",
    category: "Luxury Beds",
    price: 68000,
    rating: 4.9,
    reviews: 38,
    badge: "Low Stock",
    inStock: true,
    tone: "from-[#d8cbb0] to-[#b09873]",
    icon: "bed",
    image: `${PHOTO}/regal-carved-poster-bed.jpeg`,
    short: "Hand-carved black hardwood with tall turned posts and cream leather tufting.",
    description:
      "A true statement piece. The Regal features ornately hand-carved black hardwood, tall turned bedposts and a plush cream leather-look tufted headboard. Old-world grandeur, built by skilled local craftsmen.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Frame", value: "Hand-carved hardwood" },
      { label: "Headboard", value: "Deep-buttoned leather-look" },
      { label: "Detail", value: "Turned posts, glossy finish" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "mahogany-deluxe-bed",
    name: "Mahogany Deluxe Bed",
    category: "Wooden Beds",
    price: 46000,
    oldPrice: 55000,
    rating: 4.6,
    reviews: 42,
    badge: "Sale",
    inStock: true,
    tone: "from-[#e0c3a8] to-[#a9704a]",
    icon: "bed",
    image: `${PHOTO}/mahogany-deluxe-bed.jpeg`,
    short: "Rich mahogany finish with padded grey panels for understated warmth.",
    description:
      "The Mahogany Deluxe combines a warm reddish-brown hardwood frame with softly padded grey panels on the headboard and footboard. Solid, substantial and welcoming — a dependable classic at a great price.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Frame", value: "Solid wood, mahogany finish" },
      { label: "Panels", value: "Padded grey upholstery" },
      { label: "Base", value: "Reinforced slats" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "emerald-artdeco-bed",
    name: "Emerald Art-Deco Bed",
    category: "Modern Beds",
    price: 58000,
    rating: 4.9,
    reviews: 73,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#bcd3c2] to-[#2f6b4f]",
    icon: "bed",
    image: `${PHOTO}/emerald-artdeco-bed.jpeg`,
    short: "Bold emerald velvet with gold accent strips in a striking stepped design.",
    description:
      "Make a statement with the Emerald. Deep green velvet is offset by gleaming gold accent strips and a bold, stepped art-deco silhouette. Luxurious, on-trend and unmistakably premium.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Upholstery", value: "Emerald velvet" },
      { label: "Accents", value: "Gold-finish trim" },
      { label: "Base", value: "Slatted platform" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "cloud-grey-storage-bed",
    name: "Cloud Grey Storage Bed",
    category: "Upholstered Beds",
    price: 52000,
    rating: 4.8,
    reviews: 66,
    badge: "New",
    inStock: true,
    tone: "from-[#d9dade] to-[#9a9ca3]",
    icon: "bed",
    image: `${PHOTO}/cloud-grey-storage-bed.jpeg`,
    short: "Plush grey velvet with diamond tufting and a practical storage base.",
    description:
      "The Cloud wraps you in soft grey velvet with elegant diamond tufting, while its raised base adds valuable hidden storage underneath. Comfort and clever function in one contemporary design.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Upholstery", value: "Grey velvet, diamond-tufted" },
      { label: "Storage", value: "Under-bed storage base" },
      { label: "Base", value: "Slatted platform" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "savannah-panel-bed",
    name: "Savannah Panel Bed",
    category: "Wooden Beds",
    price: 40000,
    rating: 4.6,
    reviews: 34,
    inStock: true,
    tone: "from-[#f0ece3] to-[#cdc3b2]",
    icon: "bed",
    image: `${PHOTO}/savannah-panel-bed.jpeg`,
    short: "A crisp white raised-panel frame with clean, tailored lines.",
    description:
      "The Savannah keeps things simple and sophisticated with a bright white wooden frame and detailed raised panels on the headboard and footboard. Sturdy, versatile and endlessly easy to style.",
    specs: [
      { label: "Size", value: "5 × 6 ft (Queen)" },
      { label: "Frame", value: "Wood, white finish" },
      { label: "Detail", value: "Raised panel headboard & footboard" },
      { label: "Base", value: "Slatted" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "oakline-channel-bed",
    name: "Oakline Channel Bed",
    category: "Modern Beds",
    price: 44000,
    rating: 4.7,
    reviews: 29,
    badge: "New",
    inStock: true,
    tone: "from-[#e7d8bd] to-[#3a4a63]",
    icon: "bed",
    image: `${PHOTO}/oakline-channel-bed.jpeg`,
    short: "Light oak framing with deep navy channel-tufted upholstery.",
    description:
      "The Oakline blends natural light-oak tones with rich navy channel-tufted panels for a fresh, Scandinavian-meets-luxe look. A calm, contemporary choice for the modern bedroom.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Frame", value: "Light oak finish" },
      { label: "Upholstery", value: "Navy channel tufting" },
      { label: "Base", value: "Slatted platform" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "noir-gold-luxe-bed",
    name: "Noir Gold Luxe Bed",
    category: "Luxury Beds",
    price: 72000,
    rating: 4.9,
    reviews: 58,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#4a4a4a] to-[#111111]",
    icon: "bed",
    image: `${PHOTO}/noir-gold-luxe-bed.jpeg`,
    short: "Black diamond-tufted leather with gold Greek-key accents and nightstands.",
    description:
      "Pure drama. The Noir Gold features black diamond-tufted upholstery with striking gold Greek-key detailing on the headboard, complete with matching bedside nightstands. Bold, glamorous and built to impress.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Upholstery", value: "Black leather-look, tufted" },
      { label: "Includes", value: "2 matching nightstands" },
      { label: "Accents", value: "Gold Greek-key trim" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "royale-classic-bedroom-set",
    name: "Royale Classic Bedroom Set",
    category: "Bedroom Sets",
    price: 95000,
    rating: 4.9,
    reviews: 47,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#e6d3b0] to-[#b98a4e]",
    icon: "wardrobe",
    image: `${PHOTO}/royale-classic-bedroom-set.jpeg`,
    short: "A complete gold-trimmed classic set: bed, two nightstands and a dresser.",
    description:
      "Furnish the whole bedroom in one go. The Royale set brings together a richly tufted brown-and-gold bed, two elegant nightstands and a matching dresser — coordinated craftsmanship for a truly luxurious retreat.",
    specs: [
      { label: "Bed size", value: "6 × 6 ft (King)" },
      { label: "Includes", value: "Bed, 2 nightstands, dresser" },
      { label: "Finish", value: "White & gold, tufted panels" },
      { label: "Style", value: "Classic / royal" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "velvet-wingback-bed",
    name: "Velvet Wingback Bed",
    category: "Upholstered Beds",
    price: 50000,
    oldPrice: 60000,
    rating: 4.8,
    reviews: 55,
    badge: "Sale",
    inStock: true,
    tone: "from-[#d8c6c2] to-[#7d6a66]",
    icon: "bed",
    image: `${PHOTO}/velvet-wingback-bed.jpeg`,
    short: "A cocooning wingback headboard in soft mauve velvet with channel tufting.",
    description:
      "The Velvet Wingback wraps its tall, winged headboard around you for a cosy, enveloping feel. Vertical channel tufting in soft mauve velvet and a sturdy storage base make it as practical as it is plush.",
    specs: [
      { label: "Size", value: "5 × 6 ft (Queen)" },
      { label: "Upholstery", value: "Mauve velvet, channel-tufted" },
      { label: "Headboard", value: "Tall wingback" },
      { label: "Base", value: "Storage platform" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "aurora-white-bedroom-set",
    name: "Aurora White Bedroom Set",
    category: "Bedroom Sets",
    price: 110000,
    rating: 5.0,
    reviews: 39,
    badge: "Best Seller",
    inStock: true,
    tone: "from-[#f2ede3] to-[#cbb488]",
    icon: "wardrobe",
    image: `${PHOTO}/aurora-white-bedroom-set.jpeg`,
    short: "White-and-gold suite: bed, dressing table with mirror and two nightstands.",
    description:
      "The Aurora is our flagship suite — a tufted white-and-gold bed paired with a full dressing table and mirror plus two matching nightstands. Everything you need for an elegant, coordinated master bedroom.",
    specs: [
      { label: "Bed size", value: "6 × 6 ft (King)" },
      { label: "Includes", value: "Bed, dresser + mirror, 2 nightstands" },
      { label: "Finish", value: "White with gold trim" },
      { label: "Headboard", value: "Button-tufted" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "onyx-metal-tufted-bed",
    name: "Onyx Metal Tufted Bed",
    category: "Metal Beds",
    price: 34000,
    oldPrice: 40000,
    rating: 4.6,
    reviews: 61,
    badge: "Sale",
    inStock: true,
    tone: "from-[#5b5b5b] to-[#1c1c1c]",
    icon: "bed",
    image: `${PHOTO}/onyx-metal-tufted-bed.jpeg`,
    short: "A strong powder-coated metal frame dressed with black tufted panels.",
    description:
      "The Onyx combines the strength of a powder-coated steel frame with the comfort of black diamond-tufted panels. Exceptionally durable, easy to move and a great-value modern choice.",
    specs: [
      { label: "Size", value: "5 × 6 ft (Queen)" },
      { label: "Frame", value: "Powder-coated steel" },
      { label: "Panels", value: "Black tufted upholstery" },
      { label: "Strength", value: "Heavy-duty, rust-resistant" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "diamond-white-luxe-bed",
    name: "Diamond White Luxe Bed",
    category: "Luxury Beds",
    price: 66000,
    rating: 4.9,
    reviews: 44,
    badge: "New",
    inStock: true,
    tone: "from-[#f3efe6] to-[#d8b779]",
    icon: "bed",
    image: `${PHOTO}/diamond-white-luxe-bed.jpeg`,
    short: "White leather-look upholstery with a dazzling gold diamond geometric pattern.",
    description:
      "The Diamond White turns heads with its crisp white upholstery and bold gold diamond geometric tufting across the extended headboard. A luxurious, modern showpiece for the statement bedroom.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Upholstery", value: "White leather-look" },
      { label: "Pattern", value: "Gold diamond geometric" },
      { label: "Headboard", value: "Extended with side panels" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "frost-grey-tufted-bed",
    name: "Frost Grey Tufted Bed",
    category: "Upholstered Beds",
    price: 39000,
    oldPrice: 46000,
    rating: 4.7,
    reviews: 48,
    badge: "Sale",
    inStock: true,
    tone: "from-[#eef0f1] to-[#a9b0b5]",
    icon: "bed",
    image: `${PHOTO}/frost-grey-tufted-bed.jpeg`,
    short: "A white frame with soft grey square-tufted panels — calm and contemporary.",
    description:
      "The Frost pairs a clean white frame with gentle grey square-tufted panels for a soft, soothing look. Understated and versatile, it settles quietly into any colour scheme.",
    specs: [
      { label: "Size", value: "5 × 6 ft (Queen)" },
      { label: "Frame", value: "White finish wood" },
      { label: "Panels", value: "Grey square tufting" },
      { label: "Base", value: "Slatted" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "heritage-wood-tufted-bed",
    name: "Heritage Wood Tufted Bed",
    category: "Wooden Beds",
    price: 43000,
    rating: 4.7,
    reviews: 37,
    inStock: true,
    tone: "from-[#e3d0b6] to-[#a98a63]",
    icon: "bed",
    image: `${PHOTO}/heritage-wood-tufted-bed.jpeg`,
    short: "Warm hardwood framing around soft grey diamond-tufted panels.",
    description:
      "The Heritage marries natural warm-wood framing with plush grey diamond-tufted panels. It's the best of both worlds — the solidity of real wood with the comfort of a padded headboard.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Frame", value: "Solid wood, natural finish" },
      { label: "Panels", value: "Grey diamond tufting" },
      { label: "Base", value: "Reinforced slats" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "bloom-bed-wardrobe-set",
    name: "Bloom Bed & Wardrobe Set",
    category: "Bedroom Sets",
    price: 88000,
    rating: 4.8,
    reviews: 31,
    badge: "New",
    inStock: true,
    tone: "from-[#eae6ee] to-[#9d94ad]",
    icon: "wardrobe",
    image: `${PHOTO}/bloom-bed-wardrobe-set.jpeg`,
    short: "A floral-upholstered metal bed with a matching 4-door wardrobe.",
    description:
      "The Bloom set pairs a sturdy white metal bed dressed in soft floral fabric with a spacious matching four-door wardrobe. Coordinated storage and sleeping in one value-packed package.",
    specs: [
      { label: "Bed size", value: "5 × 6 ft (Queen)" },
      { label: "Includes", value: "Metal bed + 4-door wardrobe" },
      { label: "Upholstery", value: "Floral fabric panels" },
      { label: "Wardrobe", value: "Hanging + shelved storage" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    slug: "slate-gold-storage-bed",
    name: "Slate Gold Storage Bed",
    category: "Modern Beds",
    price: 54000,
    oldPrice: 63000,
    rating: 4.8,
    reviews: 52,
    badge: "Sale",
    inStock: true,
    tone: "from-[#cfd3d6] to-[#5a616a]",
    icon: "bed",
    image: `${PHOTO}/slate-gold-storage-bed.jpeg`,
    short: "Slate-grey tufting finished with gold trim over a handy storage base.",
    description:
      "The Slate Gold brings quiet luxury with deep slate-grey tufting, a slim gold-trim border and a practical raised storage base. Modern, refined and endlessly easy to live with.",
    specs: [
      { label: "Size", value: "6 × 6 ft (King)" },
      { label: "Upholstery", value: "Slate-grey, tufted" },
      { label: "Accents", value: "Gold trim border" },
      { label: "Storage", value: "Under-bed storage base" },
      { label: "Warranty", value: "2 years" },
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
  { name: "Mercy Chebet", area: "Elgon View, Eldoret", text: "I bought the Emerald bed and it's even more stunning in person. Delivery to Elgon View was same-day and the finish is flawless. Truly premium.", rating: 5, initials: "MC" },
  { name: "Brian Kiptoo", area: "Annex, Eldoret", text: "Booked their deep cleaning before moving into my new apartment. The team was punctual, professional and left the place spotless. Highly recommend.", rating: 5, initials: "BK" },
  { name: "Achieng' Otieno", area: "Kapsoya, Eldoret", text: "Titus Brands moved my office over a weekend with zero downtime. They wrapped everything, labelled the boxes and reassembled my desks. Stress-free.", rating: 5, initials: "AO" },
  { name: "Samuel Mwangi", area: "Kimumu, Eldoret", text: "Great price on the Royale bedroom set and the M-Pesa checkout was simple. Customer care answered every question on WhatsApp instantly.", rating: 5, initials: "SM" },
  { name: "Faith Jerop", area: "Langas, Eldoret", text: "The Aurora set transformed our master bedroom. Quality craftsmanship, delivered and assembled on time. I'll be a repeat customer for sure.", rating: 5, initials: "FJ" },
  { name: "Dennis Wanjala", area: "Pioneer, Eldoret", text: "One call and I had a bed delivered and the movers booked for the same week. Titus Brands really is everything a home needs in one place.", rating: 5, initials: "DW" },
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
  { q: "Do you deliver beds in Eldoret?", a: "Yes. We offer fast delivery across Eldoret CBD, Annex, Elgon View, Kapsoya, Langas, Pioneer, Kimumu and the wider North Rift. Same-day delivery is available within Eldoret for in-stock items, and we assemble on arrival." },
  { q: "How do I pay?", a: "We accept M-Pesa, Visa and Mastercard, bank transfer, and cash on delivery within Eldoret. Just choose your preferred option when you confirm your order on WhatsApp." },
  { q: "Can I book cleaning and moving online?", a: "Absolutely. Use the booking form on our Cleaning or Moving pages, or message us on WhatsApp. We'll confirm your date, time and a clear quote before we start." },
  { q: "What areas do you serve?", a: "We serve all of Eldoret and Uasin Gishu County — including CBD, Junction, Sogomo, Angaza, Langas, Pioneer, Annex, Racecourse, Kapsoya, Elgon View, Kimumu, Huruma, Maili Nne, Cheplaskei and Kipkaren — plus long-distance moving across Kenya." },
  { q: "Do your beds come with a warranty?", a: "Yes. All of our beds and bedroom sets carry a 2-year warranty on the frame and workmanship. Full details are listed on each product page." },
  { q: "Can you make a custom size or colour?", a: "Many of our beds can be made to order in your preferred size (4×6, 5×6 or 6×6) and upholstery colour. Message us on WhatsApp with what you have in mind and we'll advise on price and timeline." },
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
  icon: ProductIcon;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "choose-right-bed-eldoret",
    title: "How to Choose the Right Bed for Your Bedroom",
    category: "Buying Guides",
    excerpt: "Size, style and upholstery all matter. A simple guide to picking a bed you'll love for years.",
    date: "2026-06-18",
    readTime: "5 min read",
    tone: "from-[#e8ddc7] to-[#d3bd97]",
    icon: "bed",
    body: [
      "Your bed is the heart of the bedroom — the piece you see first and use most. Choosing well means balancing size, style, comfort and durability.",
      "Start with size. Measure your room and leave at least 60cm of walking space around the bed. In Kenya the common sizes are 4×6, 5×6 (queen) and 6×6 (king) feet — go as large as your room comfortably allows.",
      "Next, think about the frame. Solid wooden beds like our Amani and Heritage are hard-wearing and timeless, upholstered beds such as the Cloud Grey add softness and warmth, and metal frames like the Onyx offer strength at a great price.",
      "Finally, consider storage and style. A storage base reclaims space in smaller rooms, while a statement piece like the Emerald or Noir Gold becomes the focal point. Whatever you choose, every Titus Brands bed is built to last and backed by a 2-year warranty.",
    ],
  },
  {
    slug: "how-often-clean-mattress",
    title: "How Often Should You Deep-Clean Your Mattress?",
    category: "Cleaning Tips",
    excerpt: "Your mattress hides more dust and allergens than you think. Here's a simple schedule to keep it fresh.",
    date: "2026-06-05",
    readTime: "4 min read",
    tone: "from-[#cdd9c4] to-[#a7bd97]",
    icon: "bed",
    body: [
      "Mattresses absorb sweat, skin cells and dust every single night. Even if it looks clean, your mattress can hold allergens that affect the air you breathe as you sleep.",
      "As a rule of thumb, vacuum your mattress monthly, rotate it every three months, and book a professional deep clean every 6 to 12 months. Homes with children, pets or allergies benefit from more frequent cleaning.",
      "Professional extraction reaches deep into the layers where a vacuum can't, removing embedded dirt, dust mites and odours — and extending the life of your mattress.",
      "Titus Brands offers mattress cleaning from KSh 1,500 across Eldoret, using anti-allergen, fabric-safe products. Book online or on WhatsApp.",
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
    icon: "wardrobe",
    body: [
      "A smooth move starts with a plan. Two weeks out, declutter and decide what to keep, donate or discard. The less you move, the less you pay.",
      "One week before, gather quality boxes, bubble wrap and labels — or let our packing team handle it. Pack room by room and label every box clearly with its contents and destination room.",
      "On moving day, keep an essentials bag with documents, chargers, medication and a change of clothes. Confirm your movers' arrival time the night before.",
      "Booking a professional crew like Titus Brands means loading, transport, offloading and even bed and wardrobe reassembly are handled for you — so you can settle in faster.",
    ],
  },
  {
    slug: "upholstered-vs-wooden-beds",
    title: "Upholstered vs Wooden Beds: Which Is Right for You?",
    category: "Buying Guides",
    excerpt: "Both are beautiful and built to last — here's how to decide between a padded or solid-wood bed.",
    date: "2026-05-08",
    readTime: "5 min read",
    tone: "from-[#f0e7d5] to-[#ddceb0]",
    icon: "bed",
    body: [
      "Two of the most popular choices in any bedroom are upholstered and wooden beds. Both look wonderful — the right pick comes down to comfort, maintenance and style.",
      "Upholstered beds, like our Cloud Grey and Velvet Wingback, offer a soft headboard that's perfect for sitting up to read. They add warmth and a luxurious feel, and come in a range of colours to match your décor.",
      "Wooden beds, such as the Amani and Savannah, are prized for their strength and timeless appeal. They're easy to wipe clean and tend to handle knocks and heavy use especially well.",
      "Can't decide? Our Heritage bed gives you both — a warm wooden frame with soft tufted panels. Visit our Eldoret showroom to feel the difference in person.",
    ],
  },
  {
    slug: "bedroom-organization-hacks",
    title: "10 Bedroom Organization Hacks That Actually Work",
    category: "Home Organization",
    excerpt: "Simple storage ideas to reclaim space and keep your bedroom calm and tidy.",
    date: "2026-04-24",
    readTime: "4 min read",
    tone: "from-[#ead9bd] to-[#d0b98e]",
    icon: "wardrobe",
    body: [
      "A tidy bedroom is a restful bedroom. Organisation isn't about owning less — it's about giving everything a home.",
      "Start under the bed. A storage bed like our Cloud Grey or Slate Gold turns unused space into a home for spare bedding and off-season clothes.",
      "Use your wardrobe well with drawer dividers and shelf organisers, and keep bedside clutter in check with a nightstand drawer. A dressing table with a mirror keeps your daily essentials in one tidy spot.",
      "Titus Brands stocks complete bedroom sets with coordinated wardrobes and dressers, so every item has a place — visit us to see the full range.",
    ],
  },
  {
    slug: "bed-care-guide",
    title: "Bed Care 101: Make Your Bed Last for Years",
    category: "Furniture Care",
    excerpt: "A little maintenance goes a long way. Keep your frame, upholstery and finish looking new.",
    date: "2026-04-10",
    readTime: "5 min read",
    tone: "from-[#e5d6b9] to-[#c9b186]",
    icon: "bed",
    body: [
      "A quality bed can last for decades with the right care — and most maintenance takes only minutes.",
      "For wooden frames, dust regularly with a soft cloth and keep the bed out of direct sunlight to prevent fading. Tighten any bolts once or twice a year so the frame stays solid and quiet.",
      "Upholstered headboards benefit from a weekly vacuum and a professional clean once a year. Wipe spills immediately with a slightly damp cloth to avoid staining.",
      "Rotate and flip your mattress every few months to spread wear evenly. And when a deep clean is due, our team is just a WhatsApp message away.",
    ],
  },
];

export const paymentMethods = ["M-Pesa", "Visa", "Mastercard", "Cash on Delivery", "Bank Transfer"];
