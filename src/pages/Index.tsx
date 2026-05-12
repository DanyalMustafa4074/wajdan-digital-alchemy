"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from 'next/link';
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { WajdanHero } from "@/components/ui/wajdan-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { SystemTimeline, SystemLayersSummary } from "@/components/ui/system-timeline";
import { VideoTestimonials } from "@/components/ui/video-testimonials";
import { ProofSection, WhoIsThisFor, FinalCTA, RequirementsSection } from "@/components/ui/content-sections";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { PricingCards } from "@/components/ui/pricing-cards";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SalesStory } from "@/components/ui/sales-story";
import { SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";
import { AnimatedHeroIcons, RocketAnimation, SuccessAnimation } from "@/components/ui/animated-icons";
import {
  OfferIcon as TargetAnimation,
  FunnelIcon as FunnelAnimation,
  AutomationIcon as ZapAnimation,
  AdsIcon as MegaphoneAnimation,
  AnalyticsIcon as ChartAnimation,
} from "@/components/ui/system-layer-icons";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { GrowthChart } from "@/components/ui/growth-chart";
import { PipelineFlow } from "@/components/ui/pipeline-flow";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background snap-container">
      {/* Navigation */}
      <WajdanNavbar />
      
      {/* Progress Indicator */}
      <SystemProgressIndicator />

      {/* Hero Section */}
      <WajdanHero />

      {/* Trusted-by logo marquee — King Kong-style 2-row infinite scroll */}
      <LogoMarquee />

      {/* Extreme Sales Story replacing old Video/Letter */}
      <SalesStory />

      {/* Problem Section */}
      <section className="bg-background py-12 md:py-20">
        <ProblemSection />
      </section>

      {/* Lead lifecycle — Form → SMS → Email → Reminder → Show */}
      <PipelineFlow />

      {/* System Timeline - 5 Layers */}
      <section id="system" className="bg-gradient-to-b from-background to-background">
        <div id="layer-1">
          <SystemTimeline />
        </div>
      </section>

      {/* Services Discovery */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <ScrollReveal>
            <p className="text-neutral-700 text-lg mb-6 font-medium">
              Want to see how each layer works in detail?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111110] text-white font-black uppercase tracking-wider shadow-[0_4px_0_0_#cf5230] hover:shadow-none hover:translate-y-1 transition-all"
            >
              Explore the System Layers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Proof Section */}
      <section id="results" className="bg-background">
        <ProofSection />
      </section>

      {/* Comparison Table - Before/After */}
      <ComparisonTable />

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-background to-muted">
        <PricingCards />
      </section>

      {/* Guarantee Section */}
      <section className="bg-muted">
        <GuaranteeSection />
      </section>

      {/* Who Is This For */}
      <section className="bg-gradient-to-b from-background to-background">
        <WhoIsThisFor />
      </section>

      {/* Requirements Section */}
      <section className="bg-background">
        <RequirementsSection />
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-background">
        <FinalCTA />
      </section>

      {/* Floating Navigation */}
      <FloatingSystemNav />

      <Footer />
    </div>
  );
};

export default Index;


