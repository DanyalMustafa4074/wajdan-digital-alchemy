import type { Metadata } from "next";
import About from "@/pages/About";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/config/seo";

const ABOUT_TITLE = "About — Wajdan Digital Alchemy";
const ABOUT_DESCRIPTION =
  "Learn who's behind Wajdan Digital Alchemy — the team building end-to-end client acquisition systems for education consultancies across the UK, UAE, and Europe.";
const ABOUT_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    url: ABOUT_URL,
    title: `${ABOUT_TITLE} | ${SITE_NAME}`,
    description: ABOUT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${ABOUT_TITLE} | ${SITE_NAME}`,
    description: ABOUT_DESCRIPTION,
  },
};

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${ABOUT_URL}/#about`,
  name: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  url: ABOUT_URL,
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: ABOUT_URL },
    ],
  },
};

const teamLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Wajdan Digital Alchemy Team",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-wajahat`,
        name: "Wajahat",
        jobTitle: "Chief Executive Officer",
        description: "Drives vision and growth strategy for every client engagement. Wajahat ensures the full 5-layer system is built and delivering before results are ever promised.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Wajahat.webp`, description: "Wajahat — CEO, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-danyal`,
        name: "Danyal",
        jobTitle: "Chief Operating Officer",
        description: "Keeps operations tight across every client project — from onboarding to delivery, every milestone lands on time and nothing slips through the cracks.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Danyal.webp`, description: "Danyal — COO, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-rafay`,
        name: "Rafay",
        jobTitle: "GHL Automation Expert",
        description: "Architects the GoHighLevel infrastructure: CRM pipelines, automation flows, missed-call text-back, and nurture sequences engineered to run 24/7.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Rafay.png`, description: "Rafay — GHL Expert, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
        knowsAbout: ["GoHighLevel", "CRM Automation", "SMS Marketing", "Email Marketing"],
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-umar`,
        name: "Umar",
        jobTitle: "Project Manager",
        description: "Coordinates every moving part across client builds — timelines, deliverables, and internal execution stay synchronized from day one to go-live.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Umar.webp`, description: "Umar — Project Manager, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-aiden`,
        name: "Aiden",
        jobTitle: "Marketing Specialist",
        description: "Researches markets and manages Meta ad campaigns engineered to book qualified consultations — not just generate clicks and impressions.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Aiden.webp`, description: "Aiden — Marketing Specialist, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
        knowsAbout: ["Meta Ads", "Paid Social Advertising", "Market Research", "Lead Generation"],
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-xian`,
        name: "Xian",
        jobTitle: "Creative Director",
        description: "Leads creative direction across all assets — landing pages, VSL scripts, and ad creatives built with one goal: conversion.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Xuan.webp`, description: "Xian — Creative Director, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
        knowsAbout: ["Landing Page Design", "Video Sales Letters", "Ad Creative", "Conversion Design"],
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Person",
        "@id": `${SITE_URL}/#person-ahmad`,
        name: "Ahmad",
        jobTitle: "Video Editor",
        description: "Produces the video assets that make offers undeniable — VSL edits, ad creatives, and scroll-stopping content that carries the brand.",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        image: { "@type": "ImageObject", url: `${SITE_URL}/team/Ahmad.webp`, description: "Ahmad — Video Editor, Wajdan Digital Alchemy" },
        url: ABOUT_URL,
        knowsAbout: ["Video Editing", "Video Sales Letters", "Ad Creative Production"],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamLd) }} />
      <About />
    </>
  );
}
