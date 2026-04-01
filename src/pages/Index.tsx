import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { WajdanHero, VideoSection, LetterIntro } from "@/components/ui/wajdan-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { SystemTimeline, SystemLayersSummary } from "@/components/ui/system-timeline";
import { ProofSection, WhoIsThisFor, FinalCTA, RequirementsSection } from "@/components/ui/content-sections";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { PricingCards } from "@/components/ui/pricing-cards";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SystemTabsBar, SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brand-dark">
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
      <section className="bg-brand-dark">
        <ProblemSection />
      </section>

      {/* Comparison Table - Before/After */}
      <section className="bg-gradient-to-b from-brand-dark to-black">
        <div className="max-w-7xl mx-auto px-4">
          <ComparisonTable />
        </div>
      </section>

      {/* The Bricks vs House Story - Visual Version */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bricks ≠ House
            </h2>
          </ScrollReveal>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <motion.div 
                className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 text-center h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-6xl mb-4">🧱</div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">What You Got</h3>
                <div className="flex flex-wrap justify-center gap-2">
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
                className="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-8 text-center h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold text-brand-orange mb-2">What You Need</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Offer', 'Funnel', 'CRM', 'Automation', 'Ads'].map((item, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Solution */}
          <ScrollReveal delay={0.3} className="text-center">
            <motion.div 
              className="bg-brand-dark/50 border border-brand-orange/20 rounded-2xl p-8"
              whileHover={{ borderColor: 'rgba(255,107,53,0.5)' }}
            >
              <p className="text-xl text-gray-400 mb-2">Wajdan builds</p>
              <motion.p 
                className="text-3xl text-brand-orange font-bold mb-4"
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
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* System Tabs Navigation */}
      <SystemTabsBar />

      {/* System Timeline - 5 Layers */}
      <section id="system" className="bg-gradient-to-b from-black to-brand-dark">
        <div id="layer-1">
          <SystemTimeline />
        </div>
        <SystemLayersSummary className="pb-20" />
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

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-orange/20 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <motion.a 
                href="/"
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-6"
              >
                <img 
                  src="/Wajdan Logo light.png" 
                  alt="Wajdan" 
                  className="h-10"
                />
              </motion.a>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Client Acquisition Systems for Immigration & Education Consultants. 
                We build the complete infrastructure that turns Meta traffic into qualified, 
                pre-nurtured, showed-up consultation bookings.
              </p>
              <div className="flex items-center gap-1 text-brand-orange mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                Trusted by consultancies across Europe, UAE & beyond
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">The System</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Offer Creation</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Landing Page + VSL</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">GHL Automation</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Meta Campaigns</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Conversion Tracking</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Free Funnel Audit</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">How It Works</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-brand-orange transition-colors cursor-pointer">Results</li>
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg text-sm shadow-lg shadow-brand-orange/25"
              >
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          <div className="border-t border-brand-orange/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Wajdan. All rights reserved. Built for growth, designed for results.
              </p>
              <p className="text-gray-600 text-sm">
                wajdan.co
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
