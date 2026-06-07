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
};

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <WajdanNavbar />
      <div className="pt-24">
        <PricingCards />
      </div>
      <Footer />
    </div>
  );
}
