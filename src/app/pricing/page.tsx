import type { Metadata } from "next";
import { PricingCards } from "@/components/ui/pricing-cards";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/config/seo";

const PRICING_TITLE = "Pricing — Wajdan Digital Alchemy";
const PRICING_DESCRIPTION =
  "Transparent pricing for the complete 5-layer client acquisition system. One-time system build plus monthly management — no hidden fees, no long-term contracts.";
const PRICING_URL = `${SITE_URL}/pricing`;

export const metadata: Metadata = {
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: PRICING_URL,
    title: `${PRICING_TITLE} | ${SITE_NAME}`,
    description: PRICING_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${PRICING_TITLE} | ${SITE_NAME}`,
    description: PRICING_DESCRIPTION,
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: PRICING_URL },
  ],
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PRICING_URL}/#webpage`,
  url: PRICING_URL,
  name: `${PRICING_TITLE} | ${SITE_NAME}`,
  description: PRICING_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "en-US",
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${PRICING_URL}/#product`,
  name: "Wajdan 5-Layer Client Acquisition System",
  description: "Complete done-for-you client acquisition system for immigration and education consultancies. Includes offer strategy, landing page + VSL, GHL automation, Meta ads, and conversion tracking.",
  brand: { "@id": `${SITE_URL}/#organization` },
  url: PRICING_URL,
  image: DEFAULT_OG_IMAGE,
  offers: [
    {
      "@type": "Offer",
      "@id": `${PRICING_URL}/#offer-build`,
      name: "System Build",
      description: "One-time build of the complete 5-layer client acquisition system — offer strategy, funnel, automation, ads setup, and conversion tracking.",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "1000",
        maxPrice: "1500",
        priceCurrency: "USD",
      },
      availability: "https://schema.org/InStock",
      url: PRICING_URL,
      seller: { "@id": `${SITE_URL}/#organization` },
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      "@id": `${PRICING_URL}/#offer-management`,
      name: "Monthly Management",
      description: "Ongoing management of all 5 system layers — ad campaigns, automation tuning, reporting, and continuous optimisation. No long-term contract.",
      priceCurrency: "USD",
      price: "2000",
      availability: "https://schema.org/InStock",
      url: PRICING_URL,
      seller: { "@id": `${SITE_URL}/#organization` },
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      "@id": `${PRICING_URL}/#offer-content`,
      name: "Content Support Add-on",
      description: "Video editing, ad creatives, VSL production, and design assets as a monthly add-on to the management plan.",
      priceCurrency: "USD",
      price: "500",
      availability: "https://schema.org/InStock",
      url: PRICING_URL,
      seller: { "@id": `${SITE_URL}/#organization` },
      priceValidUntil: "2026-12-31",
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <WajdanNavbar />
      <div className="pt-24">
        <PricingCards />
      </div>
      <Footer />
    </div>
  );
}
