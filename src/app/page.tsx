import type { Metadata } from "next";
import Index from "@/pages/Index";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  ORG_LOGO,
} from "@/config/seo";

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
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "AdministrativeArea", name: "Europe" },
  ],
  serviceType: "Client Acquisition System for Immigration and Education Consultancies",
  description: SITE_DESCRIPTION,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "The 5-Layer System",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offer Creation", description: "Market research, competitor audit, offer architecture, messaging framework, and offer validation — the foundation every other layer is built on." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Funnel + VSL", description: "Custom landing pages, VSL scripts, and qualification forms that filter time-wasters before they reach your calendar." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "GHL Automation", description: "GoHighLevel workspace, SMS/email nurture, missed-call text-back, and reminder sequences. Average lead response time: 18 seconds." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ad Campaigns", description: "Direct-response Meta campaigns engineered for booked consultations, not clicks. Retargeting sequences keep warm leads moving." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conversion Tracking", description: "Server-side CAPI, custom events, and a closed feedback loop to Meta from real client outcomes — campaigns that compound over time." } },
    ],
  },
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Wajdan Digital Alchemy Builds a Complete Client Acquisition System",
  description: "The 5-layer system that fills consultation calendars with qualified, showed-up clients — built in 60 days.",
  totalTime: "P60D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    minValue: "1000",
    maxValue: "1500",
  },
  tool: [
    { "@type": "HowToTool", name: "GoHighLevel CRM" },
    { "@type": "HowToTool", name: "Meta Ads Manager" },
    { "@type": "HowToTool", name: "Meta Conversions API" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Offer Strategy & Positioning",
      text: "We research your market, audit competitors, architect an irresistible offer, and build the messaging framework — before any ad spend.",
      url: `${SITE_URL}/services`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Landing Page + Video Sales Letter",
      text: "We build a custom high-converting landing page with a VSL and qualification form that filters out time-wasters before they reach your calendar.",
      url: `${SITE_URL}/services`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "GHL Marketing Automation",
      text: "We configure your GoHighLevel workspace with SMS and email nurture, missed-call text-back, appointment reminders, and CRM pipelines. Average lead response: 18 seconds.",
      url: `${SITE_URL}/services`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Meta Ad Campaigns & Retargeting",
      text: "We launch direct-response Meta campaigns engineered for booked consultations — not impressions. Retargeting moves warm leads to the calendar.",
      url: `${SITE_URL}/services`,
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Conversion Tracking & Compounding Optimisation",
      text: "Server-side CAPI integration, custom conversion events, and a closed feedback loop that feeds real client outcome data back to Meta — campaigns that improve every week.",
      url: `${SITE_URL}/services`,
    },
  ],
};

const videoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "How Wajdan Digital Alchemy Fills Your Consultation Calendar — Full System Overview",
  description: "Watch how the complete 5-layer client acquisition system turns paid traffic into showed-up, qualified consultations for immigration and education consultancies.",
  thumbnailUrl: ORG_LOGO,
  uploadDate: "2024-01-01T00:00:00Z",
  duration: "PT8M",
  contentUrl: `${SITE_URL}/vsl-video-compressed.mp4`,
  embedUrl: `${SITE_URL}/vsl-video-compressed.mp4`,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
  author: { "@id": `${SITE_URL}/#organization` },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <Index />
    </>
  );
}
