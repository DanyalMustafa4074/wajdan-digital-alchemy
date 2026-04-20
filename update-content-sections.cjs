const fs = require('fs');

const contentSectionsPath = 'src/components/ui/content-sections.tsx';

const newContentSectionsContent = `
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { ArrowRight, Trophy, Target, TrendingUp, Users, CheckCircle, Star, AlertCircle, Zap, ShieldAlert, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RocketIcon } from './lottie-icons';

export const ProofSection = () => {
  return (
    <div className="py-24 bg-[#111110] relative overflow-hidden">
      {/* Background grit */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-20 text-balance">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none inline-block drop-shadow-xl">
            Proof<span className="text-brand-orange">!</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <p className="text-lg md:text-xl font-bold text-black max-w-3xl px-6 py-3 bg-brand-orange rotate-[-2deg] shadow-[0_10px_30px_rgba(255,107,53,0.3)] uppercase tracking-wider">
              We exclusively build funnels for Immigration & Education Consultancies. Here is what happens.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Example Metric 1 */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#1A1A1A] border-2 border-neutral-800 p-10 rounded-2xl shadow-[8px_8px_0_0_#FF6B35] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-7xl font-black text-brand-orange uppercase tracking-tighter drop-shadow-md">3×</h3>
                <Trophy className="w-12 h-12 text-neutral-700 group-hover:text-brand-orange transition-colors" strokeWidth={1.5} />
              </div>
              
              <p className="text-2xl font-black text-white mb-6 uppercase tracking-tight">More Qualified Bookings</p>
              <div className="h-1 w-16 bg-brand-orange mb-6"></div>
              
              <p className="text-neutral-400 font-medium text-lg italic leading-relaxed">
                "Within 60 days of the new offer and VSL going live, our sales team's closing rate jumped because the objections were handled before the call even started."
              </p>
            </div>
          </ScrollReveal>

          {/* Example Metric 2 */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[#1A1A1A] border-2 border-neutral-800 p-10 rounded-2xl shadow-[8px_8px_0_0_#FF6B35] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/5 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-7xl font-black text-brand-orange uppercase tracking-tighter drop-shadow-md">70%</h3>
                <Target className="w-12 h-12 text-neutral-700 group-hover:text-brand-orange transition-colors" strokeWidth={1.5} />
              </div>
              
              <p className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Avg. Show-Up Rate</p>
              <div className="h-1 w-16 bg-brand-orange mb-6"></div>
              
              <p className="text-neutral-400 font-medium text-lg italic leading-relaxed">
                "The automated SMS and email nurture sequence completely eliminated the 'ghosting' problem we had with our previous generic marketing agency."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export const WhoIsThisFor = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background grit */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Who This Is <span className="text-brand-orange border-b-4 border-brand-orange pb-2">For</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-[#111110] border border-neutral-800 p-8 rounded-3xl h-full shadow-[0_0_30px_rgba(0,255,0,0.05)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                  <BadgeCheck className="w-6 h-6 text-green-500" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Perfect Fit:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Immigration & Education consultants processing high volumes.",
                  "Founders sick of generic 'marketing agencies' that don't know your specific market.",
                  "Teams with capacity to handle 20-50+ new highly-qualified calls per month.",
                  "Consultancies ready to scale, but bottle-necked by unpredictable lead flow."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-300 font-medium text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#111110] border border-neutral-800 p-8 rounded-3xl h-full shadow-[0_0_30px_rgba(255,0,0,0.05)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                  <ShieldAlert className="w-6 h-6 text-red-500" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Do Not Apply If:</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "You are just starting out with zero proof of concept or reviews.",
                  "You expect magical results in 48 hours without putting in work.",
                  "You don't have a dedicated closer or the bandwidth to take sales calls.",
                  "You are looking for cheap 'leads' over high-intent booked appointments."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-400 font-medium text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export const RequirementsSection = () => {
  return null;
};

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-brand-orange relative overflow-hidden">
      {/* Background grit */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Heavy shadow gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
            Stop Bleeding <br />
            <span className="text-black">Cash On Ads.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-2xl md:text-3xl text-white/90 font-bold mb-12 max-w-2xl mx-auto leading-tight drop-shadow-md">
            Deploy the 5-Layer Wajdan System and dominate your market.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-4 px-10 md:px-16 py-6 lg:py-8 bg-black text-white font-black uppercase tracking-widest rounded-2xl text-xl lg:text-2xl transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full sm:w-auto"
          >
            <span className="relative z-10">Book Strategy Session Now</span>
            <ArrowRight className="relative z-10 w-8 h-8 group-hover:translate-x-3 transition-transform" strokeWidth={4} />
          </motion.a>
          
          <p className="text-black font-black uppercase tracking-widest mt-8 text-sm opacity-80">
            Warning: We only accept 6 new partners per month.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
`;

fs.writeFileSync(contentSectionsPath, newContentSectionsContent);
console.log('ContentSections successfully updated to aggressive high-converting style!');
