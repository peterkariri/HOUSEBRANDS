import type { ProductIcon } from "@/lib/data";

/**
 * Hand-drawn, flat-style SVG illustrations of each furniture / product type,
 * rendered in the Titus Brands warm palette. Used as real image artwork inside
 * FurnitureVisual — lightweight, offline and infinitely scalable.
 */

const C = {
  wood: "#b6884d",
  woodDark: "#8a6334",
  woodLight: "#d8b779",
  beige: "#efe6d4",
  beigeShade: "#ddcdaa",
  cream: "#f7f1e4",
  green: "#3f6b4f",
  greenDark: "#2f5340",
  ink: "#2f3b33",
  gold: "#eab308",
  white: "#ffffff",
};

const shadow = <ellipse cx="160" cy="212" rx="126" ry="15" fill="#2f3b33" opacity="0.12" />;

const art: Record<ProductIcon, React.ReactNode> = {
  sofa: (
    <>
      {shadow}
      {/* legs */}
      <rect x="66" y="182" width="12" height="26" rx="4" fill={C.woodDark} />
      <rect x="242" y="182" width="12" height="26" rx="4" fill={C.woodDark} />
      {/* arms */}
      <rect x="46" y="118" width="42" height="74" rx="18" fill={C.beigeShade} />
      <rect x="232" y="118" width="42" height="74" rx="18" fill={C.beigeShade} />
      {/* backrest */}
      <rect x="74" y="74" width="172" height="78" rx="20" fill={C.beige} />
      <rect x="84" y="84" width="72" height="58" rx="14" fill={C.cream} />
      <rect x="164" y="84" width="72" height="58" rx="14" fill={C.cream} />
      {/* seat base */}
      <rect x="60" y="150" width="200" height="42" rx="14" fill={C.beigeShade} />
      {/* seat cushions */}
      <rect x="70" y="140" width="88" height="34" rx="12" fill={C.cream} />
      <rect x="162" y="140" width="88" height="34" rx="12" fill={C.cream} />
      {/* accent pillow */}
      <rect x="92" y="96" width="46" height="46" rx="12" fill={C.green} transform="rotate(-8 115 119)" />
      <rect x="188" y="98" width="42" height="42" rx="12" fill={C.gold} transform="rotate(7 209 119)" />
    </>
  ),
  bed: (
    <>
      {shadow}
      <rect x="60" y="188" width="12" height="22" rx="4" fill={C.woodDark} />
      <rect x="248" y="188" width="12" height="22" rx="4" fill={C.woodDark} />
      {/* headboard */}
      <rect x="54" y="70" width="40" height="126" rx="12" fill={C.beige} />
      <rect x="62" y="80" width="24" height="106" rx="8" fill={C.cream} />
      {/* mattress / base */}
      <rect x="90" y="150" width="176" height="46" rx="10" fill={C.beigeShade} />
      <rect x="90" y="132" width="176" height="26" rx="10" fill={C.cream} />
      {/* blanket */}
      <path d="M170 158 h96 v34 a10 10 0 0 1 -10 10 h-86 z" fill={C.green} />
      <rect x="170" y="150" width="96" height="14" rx="6" fill={C.greenDark} />
      {/* pillows */}
      <rect x="98" y="118" width="60" height="30" rx="12" fill={C.white} transform="rotate(-4 128 133)" />
      <rect x="104" y="128" width="52" height="26" rx="12" fill={C.cream} transform="rotate(-4 130 141)" />
    </>
  ),
  table: (
    <>
      {shadow}
      {/* legs */}
      <path d="M96 150 l-14 56 h10 l16 -56 z" fill={C.woodDark} />
      <path d="M224 150 l14 56 h-10 l-16 -56 z" fill={C.woodDark} />
      <rect x="150" y="150" width="20" height="56" fill={C.wood} />
      {/* top */}
      <ellipse cx="160" cy="150" rx="118" ry="26" fill={C.wood} />
      <ellipse cx="160" cy="144" rx="118" ry="26" fill={C.woodLight} />
      <ellipse cx="160" cy="144" rx="96" ry="18" fill={C.cream} opacity="0.35" />
      {/* vase + plant */}
      <path d="M150 96 q-4 30 6 44 h14 q10 -14 6 -44 z" fill={C.green} />
      <path d="M160 96 c-2 -22 -18 -30 -26 -34 8 14 12 26 22 34" fill={C.greenDark} />
      <path d="M160 96 c2 -26 18 -34 28 -38 -8 16 -14 28 -24 38" fill={C.green} />
      {/* book */}
      <rect x="112" y="128" width="44" height="12" rx="2" fill={C.gold} />
      <rect x="112" y="124" width="44" height="8" rx="2" fill={C.white} />
    </>
  ),
  chair: (
    <>
      {shadow}
      {/* legs */}
      <path d="M104 176 l-10 34 h9 l12 -34 z" fill={C.woodDark} />
      <path d="M216 176 l10 34 h-9 l-12 -34 z" fill={C.woodDark} />
      {/* backrest */}
      <path d="M96 80 q64 -24 128 0 v70 h-128 z" fill={C.green} />
      <path d="M110 92 q50 -16 100 0 v18 h-100 z" fill={C.greenDark} opacity="0.5" />
      {/* arms */}
      <rect x="86" y="120" width="24" height="60" rx="12" fill={C.greenDark} />
      <rect x="210" y="120" width="24" height="60" rx="12" fill={C.greenDark} />
      {/* seat */}
      <rect x="98" y="140" width="124" height="42" rx="14" fill={C.green} />
      <rect x="106" y="138" width="108" height="24" rx="12" fill="#4d7d5e" />
      {/* accent pillow */}
      <rect x="132" y="104" width="40" height="36" rx="10" fill={C.gold} />
    </>
  ),
  wardrobe: (
    <>
      {shadow}
      <rect x="86" y="192" width="12" height="18" rx="4" fill={C.woodDark} />
      <rect x="222" y="192" width="12" height="18" rx="4" fill={C.woodDark} />
      {/* body */}
      <rect x="80" y="56" width="160" height="140" rx="10" fill={C.wood} />
      <rect x="80" y="56" width="160" height="18" rx="8" fill={C.woodLight} />
      {/* doors */}
      <rect x="90" y="80" width="66" height="108" rx="6" fill={C.beige} />
      <rect x="164" y="80" width="66" height="108" rx="6" fill={C.beigeShade} />
      {/* mirror hint on right door */}
      <rect x="176" y="92" width="42" height="84" rx="4" fill={C.cream} opacity="0.55" />
      {/* handles */}
      <rect x="148" y="126" width="6" height="24" rx="3" fill={C.woodDark} />
      <rect x="166" y="126" width="6" height="24" rx="3" fill={C.woodDark} />
    </>
  ),
  lamp: (
    <>
      {shadow}
      {/* floor lamp base + pole */}
      <rect x="150" y="88" width="8" height="118" fill={C.woodDark} />
      <ellipse cx="154" cy="206" rx="34" ry="8" fill={C.ink} opacity="0.4" />
      {/* shade with glow */}
      <path d="M124 54 h60 l16 44 h-92 z" fill={C.gold} />
      <path d="M124 54 h60 l6 16 h-72 z" fill={C.woodLight} />
      <ellipse cx="154" cy="112" rx="40" ry="14" fill={C.gold} opacity="0.22" />
      {/* small plant beside */}
      <path d="M210 168 q-4 22 6 38 h20 q8 -16 4 -38 z" fill={C.beigeShade} />
      <path d="M224 168 c-2 -20 -14 -28 -22 -32 6 14 10 24 18 32" fill={C.green} />
      <path d="M224 168 c2 -22 16 -30 24 -34 -6 16 -12 26 -20 34" fill={C.greenDark} />
    </>
  ),
  shelf: (
    <>
      {shadow}
      {/* frame */}
      <rect x="86" y="56" width="148" height="150" rx="6" fill={C.wood} />
      <rect x="96" y="66" width="128" height="130" fill={C.cream} />
      {/* shelves */}
      <rect x="96" y="104" width="128" height="8" fill={C.woodLight} />
      <rect x="96" y="146" width="128" height="8" fill={C.woodLight} />
      {/* books top */}
      <rect x="104" y="76" width="9" height="28" fill={C.green} />
      <rect x="115" y="72" width="9" height="32" fill={C.gold} />
      <rect x="126" y="78" width="9" height="26" fill={C.greenDark} />
      <rect x="137" y="74" width="9" height="30" fill="#c15a3a" />
      {/* plant middle */}
      <path d="M196 88 q-4 12 4 16 h12 q6 -6 2 -16 z" fill={C.beigeShade} />
      <path d="M204 88 c0 -14 8 -20 14 -22 -4 12 -8 18 -14 22" fill={C.green} />
      {/* box + books lower */}
      <rect x="104" y="118" width="40" height="26" rx="3" fill={C.gold} />
      <rect x="176" y="160" width="9" height="28" fill={C.green} />
      <rect x="187" y="156" width="9" height="32" fill="#c15a3a" />
      <rect x="198" y="162" width="9" height="26" fill={C.greenDark} />
    </>
  ),
  kitchen: (
    <>
      {shadow}
      {/* big pot */}
      <rect x="96" y="120" width="88" height="70" rx="14" fill={C.green} />
      <rect x="96" y="120" width="88" height="16" rx="8" fill={C.greenDark} />
      <rect x="86" y="110" width="108" height="12" rx="6" fill={C.ink} />
      <ellipse cx="140" cy="110" rx="20" ry="6" fill={C.gold} />
      <rect x="78" y="146" width="16" height="10" rx="4" fill={C.ink} />
      <rect x="186" y="146" width="16" height="10" rx="4" fill={C.ink} />
      {/* pan behind */}
      <ellipse cx="214" cy="150" rx="34" ry="12" fill={C.beigeShade} />
      <ellipse cx="214" cy="146" rx="34" ry="12" fill={C.cream} />
      <rect x="244" y="142" width="46" height="9" rx="4" fill={C.woodDark} />
      {/* stacked plates */}
      <ellipse cx="150" cy="196" rx="70" ry="10" fill={C.cream} />
      <ellipse cx="150" cy="188" rx="60" ry="9" fill={C.white} />
    </>
  ),
  rug: (
    <>
      {shadow}
      {/* rug in perspective */}
      <path d="M70 132 L250 132 L288 200 L32 200 Z" fill={C.green} />
      <path d="M84 144 L236 144 L266 190 L54 190 Z" fill={C.cream} />
      {/* diamond pattern */}
      <path d="M160 150 l24 20 -24 20 -24 -20 z" fill={C.green} opacity="0.85" />
      <path d="M116 152 l16 14 -16 14 -16 -14 z" fill={C.gold} opacity="0.8" />
      <path d="M204 152 l16 14 -16 14 -16 -14 z" fill={C.gold} opacity="0.8" />
      {/* tassels */}
      <g fill={C.woodDark}>
        <rect x="40" y="200" width="4" height="12" />
        <rect x="90" y="200" width="4" height="12" />
        <rect x="150" y="200" width="4" height="12" />
        <rect x="210" y="200" width="4" height="12" />
        <rect x="272" y="200" width="4" height="12" />
      </g>
    </>
  ),
  curtain: (
    <>
      {shadow}
      {/* window frame */}
      <rect x="96" y="54" width="128" height="150" rx="6" fill={C.woodLight} />
      <rect x="108" y="66" width="104" height="126" fill="#cfe0e6" />
      <rect x="158" y="66" width="6" height="126" fill={C.woodLight} />
      <rect x="108" y="124" width="104" height="6" fill={C.woodLight} />
      {/* rod */}
      <rect x="80" y="48" width="160" height="8" rx="4" fill={C.woodDark} />
      {/* curtains */}
      <path d="M92 56 q10 70 -2 140 q22 8 34 0 q-6 -70 4 -140 z" fill={C.green} />
      <path d="M228 56 q-10 70 2 140 q-22 8 -34 0 q6 -70 -4 -140 z" fill={C.green} />
      {/* valance */}
      <path d="M84 56 q76 22 152 0 v18 q-76 20 -152 0 z" fill={C.greenDark} />
      {/* tiebacks */}
      <rect x="112" y="150" width="18" height="8" rx="4" fill={C.gold} />
      <rect x="190" y="150" width="18" height="8" rx="4" fill={C.gold} />
    </>
  ),
};

export function FurnitureArt({ icon, className = "" }: { icon: ProductIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="presentation"
    >
      {art[icon] ?? art.sofa}
    </svg>
  );
}
