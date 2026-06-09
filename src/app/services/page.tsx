import type { Metadata } from "next";
import Services from "@/pages/Services";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/config/seo";

const SERVICES_TITLE = "Services — End-to-End Client Acquisition System";
const SERVICES_DESCRIPTION =
  "The complete 5-layer client acquisition system for immigration and education consultancies: offer creation, high-converting funnel + VSL, GHL marketing automation, Meta ad campaigns, and server-side conversion tracking. Built end-to-end before traffic goes live.";
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

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SERVICES_URL}/#webpage`,
  url: SERVICES_URL,
  name: `${SERVICES_TITLE} | ${SITE_NAME}`,
  description: SERVICES_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: SERVICES_URL },
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SERVICES_URL}/#service`,
  name: "Complete 5-Layer Client Acquisition System",
  description: SERVICES_DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  url: SERVICES_URL,
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "AdministrativeArea", name: "Europe" },
    { "@type": "Place", name: "Worldwide" },
  ],
  serviceType: "Client Acquisition System for Immigration and Education Consultancies",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wajdan 5-Layer Growth System",
    itemListElement: [
      {
        "@type": "Offer",
        position: 1,
        itemOffered: {
          "@type": "Service",
          name: "Offer Strategy & Positioning",
          description: "Market research, competitor audit, offer architecture, messaging framework, and offer validation — the foundation every other layer is built on.",
        },
      },
      {
        "@type": "Offer",
        position: 2,
        itemOffered: {
          "@type": "Service",
          name: "Landing Page + Video Sales Letter",
          description: "Custom high-converting funnel, VSL script and production, qualification forms — filters time-wasters before they reach your calendar.",
        },
      },
      {
        "@type": "Offer",
        position: 3,
        itemOffered: {
          "@type": "Service",
          name: "GHL Marketing Automation",
          description: "GoHighLevel CRM pipelines, SMS + email nurture sequences, missed-call text-back, appointment reminders. Average lead response: 18 seconds.",
        },
      },
      {
        "@type": "Offer",
        position: 4,
        itemOffered: {
          "@type": "Service",
          name: "Meta Ads & Retargeting",
          description: "Direct-response Meta ad campaigns engineered for booked consultations — not impressions. Retargeting sequences move warm leads to the calendar.",
        },
      },
      {
        "@type": "Offer",
        position: 5,
        itemOffered: {
          "@type": "Service",
          name: "Conversion Tracking & Meta CAPI",
          description: "Server-side Meta Conversions API, custom events, and a closed feedback loop that feeds real client outcome data back to Meta — campaigns that compound.",
        },
      },
    ],
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The 5-Layer Client Acquisition System",
  description: "Each layer of the Wajdan complete system for immigration and education consultancies.",
  numberOfItems: 5,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Offer Strategy & Positioning", url: SERVICES_URL },
    { "@type": "ListItem", position: 2, name: "Landing Page + Video Sales Letter", url: SERVICES_URL },
    { "@type": "ListItem", position: 3, name: "GHL Marketing Automation", url: SERVICES_URL },
    { "@type": "ListItem", position: 4, name: "Meta Ads & Retargeting", url: SERVICES_URL },
    { "@type": "ListItem", position: 5, name: "Conversion Tracking & Meta CAPI", url: SERVICES_URL },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Services />
    </>
  );
}
