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
      <section className="py-32 bg-[#fafaf8] relative overflow-hidden border-y-2 border-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
          
          <ScrollReveal className="text-center mb-16">
            <p className="text-[#cf5230] font-bold tracking-[0.2em] uppercase text-sm mb-4">The Complete System</p>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-[#111110] uppercase tracking-tighter leading-[0.85] mb-8">
              Bricks <span className="text-[#cf5230]">≠</span> House
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#111110] text-lg md:text-2xl font-black uppercase tracking-tight py-6 border-y-2 border-neutral-200 max-w-3xl mx-auto">
              <span>5 layers</span>
              <Star className="w-6 h-6 text-[#cf5230] fill-[#cf5230]" />
              <span>1 system</span>
              <Star className="w-6 h-6 text-[#cf5230] fill-[#cf5230]" />
              <span>0 gaps</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* The Problem Narrative */}
            <ScrollReveal delay={0.1}>
               <h3 className="text-4xl md:text-5xl font-black text-[#cf5230] uppercase tracking-tighter leading-[0.9] mb-8">
                 You paid for bricks.<br/>
                 <span className="text-[#111110]">You needed a house.</span>
               </h3>
               
               <div className="space-y-6 text-lg font-medium text-neutral-600 leading-relaxed">
                 <p className="text-2xl font-bold text-[#111110] leading-tight">
                   Here's something nobody in this industry wants to say out loud.
                 </p>
                 
                 <p>Most agencies sell you services the exact same way a builder sells you bricks.</p>
                 
                 <p className="italic">
                   "Here are your Facebook ads. Here is your SEO. Here is a landing page. Good luck with the house."
                 </p>
                 
                 <p>
                   The leads come in, but nothing was built to catch them, qualify them, follow them up, pre-nurture them, or guarantee they show up ready to buy.
                 </p>
                 
                 <p className="text-[#111110] font-bold text-xl uppercase tracking-tight">
                   The problem isn't the bricks. <br/> <span className="text-[#cf5230]">It's that nobody built the house.</span>
                 </p>
                 
                 <div className="p-6 bg-[#111110] text-white border-l-4 border-[#cf5230] mt-8 shadow-[6px_6px_0_0_#cf5230]">
                   <p className="text-base font-semibold italic text-neutral-300">
                     "The leads are coming in. Why isn't anyone booking?"
                   </p>
                   <p className="mt-3 text-lg font-black uppercase tracking-wide text-[#cf5230]">
                     Because the system that converts them was never actually built.
                   </p>
                 </div>
               </div>
            </ScrollReveal>

            {/* The Solution Architecture */}
            <ScrollReveal delay={0.2}>
               <div className="relative group">
                  <div className="absolute inset-0 bg-[#cf5230] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  <div className="relative bg-white border-2 border-neutral-200 p-8 md:p-12 z-10 flex flex-col items-center text-center">
                     
                     <div className="bg-[#fafaf8] p-6 rounded-full border-2 border-neutral-100 mb-8 shadow-sm">
                       <TargetAnimation size={100} />
                     </div>
                     
                     <h4 className="text-4xl font-black text-[#111110] uppercase tracking-tighter mb-4 leading-none">
                       Wajdan Builds<br/>The System
                     </h4>
                     
                     <p className="text-neutral-600 font-medium mb-10 text-base">
                       We don't sell disconnected services. We build a single, ruthless growth architecture that runs from the first ad impression to the final closed deal. Remove one layer, and the whole thing leaks.
                     </p>
                     
                     <div className="w-full space-y-3">
                       {[
                         { title: 'The Offer', text: 'Filter time-wasters immediately', Anim: TargetAnimation },
                         { title: 'The Funnel', text: 'Capture and segment intent', Anim: FunnelAnimation },
                         { title: 'The Automation', text: 'Trigger instant SMS/Email follow-up', Anim: ZapAnimation },
                         { title: 'The Sales VSL', text: 'Pre-nurture trust before the call', Anim: MegaphoneAnimation },
                         { title: 'The Traffic', text: 'Feed data back into Meta algorithm', Anim: ChartAnimation }
                       ].map((layer, idx) => (
                         <div key={idx} className="flex flex-col items-start p-4 bg-[#fafaf8] border-2 border-neutral-200 group-hover:border-[#cf5230]/40 transition-colors relative overflow-hidden shadow-[4px_4px_0_0_transparent] hover:shadow-[4px_4px_0_0_#cf5230] hover:-translate-y-1 duration-200 cursor-default">
                           <div className="flex items-center gap-4 w-full relative z-10">
                             <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-neutral-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                               <layer.Anim size={44} loop={true} autoplay={true} />
                             </div>
                             <div className="text-left">
                               <span className="block font-black text-[#111110] uppercase tracking-wide text-sm md:text-base leading-tight">
                                 {layer.title}
                               </span>
                               <span className="block text-[#cf5230] text-xs font-bold uppercase tracking-wider mt-1">
                                 {layer.text}
                               </span>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                     
                  </div>
               </div>
            </ScrollReveal>
          </div>
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


