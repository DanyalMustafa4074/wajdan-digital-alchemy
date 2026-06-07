import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        // Long-lived cache for all static assets in _next/static
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Images, fonts, videos in /public
        source: "/:path*.(webp|png|jpg|jpeg|svg|ico|woff|woff2|ttf|otf|mp4|webm)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, stale-while-revalidate=86400" },
        ],
      },
      {
        // Security + performance headers on all routes
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
