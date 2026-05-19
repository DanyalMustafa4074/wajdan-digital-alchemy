import type { Metadata } from "next";
import Index from "@/pages/Index";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/config/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const homePageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Wajdan Digital Alchemy do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build complete client acquisition systems for education consultancies. Not just ads — the full 5-layer system: offer creation, funnel + VSL, GHL automation, Meta ad campaigns, and conversion tracking. End to end, built before traffic goes live.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a typical Meta ads agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agencies sell traffic and leads. We build the full machine: the offer, the funnel that qualifies before the call, the automated nurture that gets prospects to actually show up, the ads that book — not just click, and the conversion tracking that feeds Meta real client data. Remove any layer and the whole thing leaks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 60-day commitment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Within 60 days of go-live we commit to measurable improvement in booked consultation quality and show rate. If we don't deliver, we keep working for free until we do. No long-term contracts — earned every month.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Education and visa consultancies already running paid traffic but seeing low show rates and unqualified bookings. You need capacity to follow up on leads, willingness to invest in a complete system, and you measure marketing by booked calls — not impressions and CPL.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly do leads get a response?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Average lead response time after system build is 18 seconds. SMS, email, and CRM automation trigger the moment a form is submitted — humans aren't in the critical path.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work outside Europe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are based in Europe but actively serve consultancies across the UK, UAE, and 12+ countries.",
      },
    },
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${SITE_NAME} — Client Acquisition System`,
  url: SITE_URL,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Place", name: "United Kingdom" },
    { "@type": "Place", name: "United Arab Emirates" },
    { "@type": "Place", name: "Europe" },
  ],
  serviceType: "Client Acquisition System for Education Consultancies",
  description: SITE_DESCRIPTION,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The 5-Layer System",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offer Creation", description: "Market research, positioning, and offer architecture before any ad spend." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Funnel + VSL", description: "Custom landing pages, VSL scripts, and qualification forms built around your offer." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GHL Automation", description: "GoHighLevel workspace, SMS/email nurture, missed-call text-back, and reminder sequences." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ad Campaigns", description: "Direct-response Meta campaigns engineered for booked consultations, not clicks." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Tracking", description: "Server-side CAPI, custom events, and a closed feedback loop to Meta from real client outcomes." } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Index />
    </>
  );
}
