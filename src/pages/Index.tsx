import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { WajdanHero, VideoSection, LetterIntro } from "@/components/ui/wajdan-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { SystemTimeline, SystemLayersSummary } from "@/components/ui/system-timeline";
import { ProofSection, WhoIsThisFor, FinalCTA, RequirementsSection } from "@/components/ui/content-sections";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { PricingCards } from "@/components/ui/pricing-cards";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";
import { AnimatedHeroIcons, TargetAnimation, FunnelAnimation, ZapAnimation, MegaphoneAnimation, ChartAnimation, RocketAnimation, SuccessAnimation } from "@/components/ui/animated-icons";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brand-dark snap-container">
      {/* Navigation */}
      <WajdanNavbar />
      
      {/* Progress Indicator */}
      <SystemProgressIndicator />

      {/* Hero Section */}
      <WajdanHero />

      {/* Video Section */}
      <VideoSection />

      {/* Letter Introduction */}
      <LetterIntro />

      {/* Problem Section */}
      <section className="bg-brand-dark py-12 md:py-20">
        <ProblemSection />
      </section>

      {/* Comparison Table - Before/After */}
      <section className="bg-gradient-to-b from-brand-dark to-black py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      {/* The Bricks vs House Story - Visual Version */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-orange mb-4 font-semibold tracking-wider uppercase"
            >
              The Complete System
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bricks ≠ House
            </h2>
            <div className="flex items-center justify-center gap-4 text-white text-lg font-medium">
              <span>5 layers</span>
              <Star className="w-4 h-4 text-brand-orange" />
              <span>1 system</span>
              <Star className="w-4 h-4 text-brand-orange" />
              <span>0 gaps</span>
            </div>
          </ScrollReveal>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <motion.div
                className="glass-card border-red-500/20 hover-lift rounded-2xl p-8 text-center h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-red-950/10 pointer-events-none" />
                <div className="relative z-10 text-6xl mb-4">🧱</div>
                <h3 className="relative z-10 text-2xl font-bold text-red-400 mb-2 text-glow">What You Got</h3>
                <div className="relative z-10 flex flex-wrap justify-center gap-2">
                  {['Traffic', 'Leads', 'Reports'].map((item, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div 
                className="glass-card hover-lift border-brand-orange/30 rounded-2xl p-8 text-center h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-orange/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <RocketAnimation size={96} className="mx-auto mb-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-orange mb-2 text-glow">What You Need</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Offer', 'Funnel', 'CRM', 'Automation', 'Ads'].map((item, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold border border-brand-orange/20"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* 5 Layer Animated Icons */}
          <ScrollReveal delay={0.25} className="mb-12">
            <AnimatedHeroIcons className="py-8" />
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal delay={0.3} className="text-center">
            <motion.div 
              className="glass-card hover-lift border-brand-orange/20 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-center">
                  <SuccessAnimation size={80} className="mx-auto mb-4" />
                </div>
                <p className="text-xl text-gray-300 mb-2 font-medium tracking-wide">Wajdan builds</p>
                <motion.p 
                  className="text-4xl text-brand-orange font-bold mb-4 text-glow"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
              >
                The Complete System
              </motion.p>
              <div className="flex items-center justify-center gap-4 text-white text-lg font-medium">
                <span>5 layers</span>
                <Star className="w-4 h-4 text-brand-orange" />
                <span>1 system</span>
                <Star className="w-4 h-4 text-brand-orange" />
                <span>0 gaps</span>
              </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* System Timeline - 5 Layers */}
      <section id="system" className="bg-gradient-to-b from-black to-brand-dark">
        <div id="layer-1">
          <SystemTimeline />
        </div>
        <SystemLayersSummary className="pb-20" />
      </section>

      {/* Services Discovery */}
      <section className="bg-black/50 border-y border-brand-orange/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <ScrollReveal>
            <p className="text-gray-400 text-lg mb-6">
              Want to see how each layer works in detail?
            </p>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange/10 border border-brand-orange/40 text-brand-orange font-semibold rounded-lg hover:bg-brand-orange/20 transition-all"
            >
              Explore the System Layers
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Proof Section */}
      <section id="results" className="bg-brand-dark">
        <ProofSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-brand-dark to-black">
        <PricingCards />
      </section>

      {/* Guarantee Section */}
      <section className="bg-black">
        <GuaranteeSection />
      </section>

      {/* Who Is This For */}
      <section className="bg-gradient-to-b from-black to-brand-dark">
        <WhoIsThisFor />
      </section>

      {/* Requirements Section */}
      <section className="bg-brand-dark">
        <RequirementsSection />
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-brand-dark">
        <FinalCTA />
      </section>

      {/* Floating Navigation */}
      <FloatingSystemNav />

      <Footer />
    </div>
  );
};

export default Index;


