"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Shield, ArrowRight, Star, AlertTriangle, X } from 'lucide-react';

interface GuaranteeSectionProps {
  className?: string;
}

const noPayingFor = [
  "No paying for 'the algorithm needs more time'",
  'No paying for leads that never answer',
  'No paying for dashboards that look good but produce nothing',
  'No paying for effort without outcomes',
  "No paying for 'we just need a couple more weeks' — ever again",
  'No paying for a system that was never actually built',
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ className }) => {
  return (
    <div className={cn('py-16 md:py-24 relative overflow-hidden bg-[#111110]', className)}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#cf5230]/60 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#cf5230]/10 border-2 border-[#cf5230]/40 mb-6 md:mb-8"
          >
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#cf5230]" strokeWidth={2.5} />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-5 md:mb-6 uppercase tracking-tight leading-[1.05]">
            How the Hell Can We <br />
            <span className="text-[#cf5230]">Guarantee Results?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#1a1a18] border-2 border-[#cf5230]/50 p-6 sm:p-8 md:p-12 mt-8 mb-10 md:mb-12 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 bg-[#cf5230] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
              The 60-Day Commitment
            </div>

            <blockquote className="text-lg sm:text-xl md:text-3xl text-white font-black leading-snug md:leading-tight mt-6 mb-2 tracking-tight">
              "If we don't improve the quality of your consultation bookings within the first 60 days — we continue optimising your system at <span className="text-[#cf5230]">no management fee</span> until we do."
            </blockquote>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-xl md:text-3xl font-black text-white tracking-tight mb-12 flex flex-col gap-2 uppercase">
            <span>The offer's rotting for 4 years Cuz We Always delivered</span>
            <span className="text-[#cf5230] mt-4">Five Layers. Zero Gaps.</span>
            <div className="flex flex-col text-lg md:text-xl text-neutral-400 mt-2 space-y-1">
              <span>Offer Creation</span>
              <span>Funnel</span>
              <span>GHL</span>
              <span>Meta Campaigns</span>
              <span>Conversion Loop</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <motion.div
            className="bg-[#1a1a18] border-l-4 border-[#cf5230] p-6 md:p-8 mb-10 md:mb-12 relative overflow-hidden flex flex-col md:flex-row items-start text-left gap-4 md:gap-6"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#cf5230]/10 flex items-center justify-center flex-shrink-0 border border-[#cf5230]/30">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[#cf5230]" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-white font-black text-lg md:text-xl mb-2 uppercase tracking-wide">
                Strict Limit: 6 Clients Per Month
              </h3>
              <p className="text-neutral-400 font-medium text-sm md:text-base leading-loose">
                We refuse to spread our team thin. High-performance funnels require focus. When the 6 spots are filled, you go on the waitlist. No exceptions.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="flex flex-col items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-6 sm:px-8 md:px-12 py-5 md:py-6 bg-[#cf5230] text-white font-black uppercase tracking-wider text-base md:text-xl transition-all w-full sm:w-auto shadow-[0_6px_0_0_#fafaf8] hover:shadow-none hover:translate-y-[6px]"
          >
            <span className="relative z-10">Claim Your Free Strategy Session</span>
            <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </motion.a>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#cf5230] text-[#cf5230]" />
              ))}
            </div>
            <p className="text-neutral-500 font-bold text-xs md:text-sm uppercase tracking-widest">
              Trusted by consultancies across Europe, UAE & beyond
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { GuaranteeSection };
