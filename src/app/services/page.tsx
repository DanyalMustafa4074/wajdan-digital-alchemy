import type { Metadata } from "next";
import Services from "@/pages/Services";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/config/seo";

const SERVICES_TITLE = "Services — End-to-End Growth Systems";
const SERVICES_DESCRIPTION =
  "Explore Wajdan Digital Alchemy's complete service stack: high-converting offers, sales funnels, marketing automation, paid advertising, and analytics — built into one cohesive growth system.";
const SERVICES_URL = `${SITE_URL}/services`;

export const metadata: Metadata = {
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    url: SERVICES_URL,
    title: `${SERVICES_TITLE} | ${SITE_NAME}`,
    description: SERVICES_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${SERVICES_TITLE} | ${SITE_NAME}`,
    description: SERVICES_DESCRIPTION,
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SERVICES_URL}/#service`,
  name: "Complete Digital Growth System",
  description: SERVICES_DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  url: SERVICES_URL,
  areaServed: "Worldwide",
  serviceType: "Digital Marketing & Growth System",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wajdan Growth System Layers",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offer Strategy & Positioning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Funnel Design & Build" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Advertising Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Optimization" } },
    ],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: SERVICES_URL },
  ],
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SERVICES_URL}/#webpage`,
  url: SERVICES_URL,
  name: `${SERVICES_TITLE} | ${SITE_NAME}`,
  description: SERVICES_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "en-US",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <Services />
    </>
  );
}
