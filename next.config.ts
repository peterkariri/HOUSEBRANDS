import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint's Next config resolution conflicts with the pinned version in this
  // environment; type-checking still runs on every build.
  eslint: { ignoreDuringBuilds: true },
  // Serve local product photos as-is — keeps the site fully static (no image
  // optimization server / sharp dependency).
  images: { unoptimized: true },
};

export default nextConfig;
