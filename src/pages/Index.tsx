import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import WajdanNavbar from "@/components/WajdanNavbar";
import { Footer } from "@/components/Footer";
import { WajdanHero } from "@/components/ui/wajdan-hero";
import { ProblemSection } from "@/components/ui/problem-section";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { SystemTimeline, SystemLayersSummary } from "@/components/ui/system-timeline";
import { ProofSection, WhoIsThisFor, FinalCTA, RequirementsSection } from "@/components/ui/content-sections";
import { GuaranteeSection } from "@/components/ui/guarantee-section";
import { PricingCards } from "@/components/ui/pricing-cards";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SalesStory } from "@/components/ui/sales-story";
import { SystemProgressIndicator, FloatingSystemNav } from "@/components/ui/system-tabs";
import { AnimatedHeroIcons, TargetAnimation, FunnelAnimation, ZapAnimation, MegaphoneAnimation, ChartAnimation, RocketAnimation, SuccessAnimation } from "@/components/ui/animated-icons";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { GrowthChart } from "@/components/ui/growth-chart";

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

      {/* Comparison Table - Before/After */}
      <ComparisonTable />

      {/* The Bricks vs House Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#cf5230] mb-4 font-bold tracking-[0.2em] uppercase text-sm">The Complete System</p>
            <h2 className="text-4xl md:text-6xl font-black text-[#111110] mb-6 uppercase tracking-tight">
              Bricks <span className="text-[#cf5230]">≠</span> House
            </h2>
            <div className="flex items-center justify-center gap-4 text-[#111110] text-lg font-black uppercase tracking-tight">
              <span>5 layers</span>
              <Star className="w-4 h-4 text-[#cf5230] fill-[#cf5230]" />
              <span>1 system</span>
              <Star className="w-4 h-4 text-[#cf5230] fill-[#cf5230]" />
              <span>0 gaps</span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#fafaf8] border-2 border-neutral-200 p-8 text-center h-full shadow-[8px_8px_0_0_#111110]"
              >
                <div className="text-6xl mb-4">🧱</div>
                <h3 className="text-2xl font-black text-[#111110] mb-4 uppercase tracking-tight">What You Got</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Traffic', 'Leads', 'Reports'].map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-white border border-neutral-300 text-neutral-600 text-sm font-bold"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#111110] text-white p-8 text-center h-full shadow-[8px_8px_0_0_#cf5230]"
              >
                <div className="flex items-center justify-center">
                  <RocketAnimation size={96} className="mx-auto mb-4" />
                </div>
                <h3 className="text-2xl font-black text-[#cf5230] mb-4 uppercase tracking-tight">What You Need</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Offer', 'Funnel', 'CRM', 'Automation', 'Ads'].map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-[#cf5230]/15 text-[#cf5230] text-sm font-bold border border-[#cf5230]/40"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} className="mb-12">
            <AnimatedHeroIcons className="py-8" />
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="text-center">
            <motion.div
              className="bg-[#fafaf8] border-2 border-neutral-200 p-8 shadow-[8px_8px_0_0_#cf5230]"
            >
              <div className="flex items-center justify-center">
                <SuccessAnimation size={80} className="mx-auto mb-4" />
              </div>
              <p className="text-xl text-neutral-600 mb-2 font-bold uppercase tracking-wide">Wajdan builds</p>
              <motion.p
                className="text-3xl md:text-4xl text-[#cf5230] font-black mb-4 uppercase tracking-tight"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                The Complete System
              </motion.p>
              <div className="flex items-center justify-center gap-4 text-[#111110] text-lg font-black uppercase tracking-tight">
                <span>5 layers</span>
                <Star className="w-4 h-4 text-[#cf5230] fill-[#cf5230]" />
                <span>1 system</span>
                <Star className="w-4 h-4 text-[#cf5230] fill-[#cf5230]" />
                <span>0 gaps</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* System Timeline - 5 Layers */}
      <section id="system" className="bg-gradient-to-b from-background to-background">
        <div id="layer-1">
          <SystemTimeline />
        </div>
        <SystemLayersSummary className="pb-20" />
      </section>

      {/* Services Discovery */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <ScrollReveal>
            <p className="text-neutral-700 text-lg mb-6 font-medium">
              Want to see how each layer works in detail?
            </p>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111110] text-white font-black uppercase tracking-wider shadow-[0_4px_0_0_#cf5230] hover:shadow-none hover:translate-y-1 transition-all"
            >
              Explore the System Layers
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      {/* Growth Chart — visual proof curve */}
      <GrowthChart />

      {/* Proof Section */}
      <section id="results" className="bg-background">
        <ProofSection />
      </section>

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


