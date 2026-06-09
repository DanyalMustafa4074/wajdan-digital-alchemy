import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything, block only private paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Major search engines — explicitly allow all
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: "/",
      },
      // Social media crawlers
      {
        userAgent: ["Twitterbot", "facebookexternalhit", "LinkedInBot", "WhatsApp"],
        allow: "/",
      },
      // AI Crawlers — Allow for GEO (Generative Engine Optimisation)
      // These help the site appear in ChatGPT, Perplexity, Google AI Overviews, etc.
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // SEO tools — allow for audit access
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot"],
        allow: "/",
      },
      // Low-value scrapers — block
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
