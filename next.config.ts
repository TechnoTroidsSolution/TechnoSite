import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Performance optimizations
  compress: true, // Enable gzip compression

  // Optimize CSS loading
  experimental: {
    optimizeCss: true, // Enable CSS optimization (requires critters package)
  },
};

export default nextConfig;
