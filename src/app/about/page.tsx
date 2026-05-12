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
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: ABOUT_URL },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <About />
    </>
  );
}
