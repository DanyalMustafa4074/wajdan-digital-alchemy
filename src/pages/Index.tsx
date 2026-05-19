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

      {/* Bricks ≠ House */}
      <section className="bg-[#140E0E] py-12 md:py-20 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(229,77,46,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-[#E54D2E] text-xs font-bold uppercase tracking-[0.25em] mb-4 text-center">The Real Problem</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf8] uppercase tracking-tighter leading-[1.35] text-center mb-6">
              Bricks <span className="text-[#E54D2E]">≠</span> House.
            </h2>
            <p className="text-base md:text-lg text-neutral-400 font-medium text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              You have been sold individual components. Not a system.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <AnimatedHeroIcons className="mb-16" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* What you've been sold */}
              <div className="bg-[#1F1513] border border-[#3A2520] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-xl font-black">✕</span>
                  </div>
                  <h3 className="text-xl font-black text-[#fafaf8] uppercase tracking-tight">What You've Been Sold</h3>
                </div>
                <ul className="space-y-4">
                  {['An ad account that "looks good" on paper', 'Leads that ghost you before the call', 'A Monday morning PDF no one reads', 'A freelancer who handles one piece', 'Dashboards. Not booked consultations.'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-red-500 font-black mt-0.5 flex-shrink-0">✕</span>
                      <span className="text-[#D8CBC7] text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you actually need */}
              <div className="bg-[#E54D2E] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <RocketAnimation size={40} />
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">What You Actually Need</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  {['An offer so good, they feel foolish saying no', 'A funnel that qualifies before they call', 'Automated nurture that shows up even when you sleep', 'Ads engineered to book — not just click', 'One system. End to end. Accountable.'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <SuccessAnimation size={20} />
                      <span className="text-white/90 text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="mt-12 text-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block bg-[#fafaf8] text-[#140E0E] font-black text-lg uppercase tracking-widest px-10 py-5 shadow-[0_6px_0_0_#E54D2E] hover:shadow-none hover:translate-y-[6px] transition-all"
              >
                Build The Full System →
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-background py-8 md:py-12">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#140E0E] text-white font-black uppercase tracking-wider shadow-[0_4px_0_0_#E54D2E] hover:shadow-none hover:translate-y-1 transition-all"
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


