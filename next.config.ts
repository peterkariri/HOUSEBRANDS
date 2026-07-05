import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint's Next config resolution conflicts with the pinned version in this
  // environment; type-checking still runs on every build.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
