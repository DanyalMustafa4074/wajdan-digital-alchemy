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
    <div className={cn('py-10 md:py-14 relative overflow-hidden bg-[#140E0E]', className)}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E54D2E]/60 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#E54D2E]/10 border-2 border-[#E54D2E]/40 mb-6 md:mb-8"
          >
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-[#E54D2E]" strokeWidth={2.5} />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 md:mb-6 uppercase tracking-tight leading-[1.35] sm:leading-[1.35] md:leading-[1.35]">
            How the Hell Can We <br />
            <span className="text-[#E54D2E]">Guarantee Results?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#1F1513] border-2 border-[#E54D2E]/50 p-4 sm:p-6 md:p-10 mt-8 mb-10 md:mb-12 relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 bg-[#E54D2E] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
              The 60-Day Commitment
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl text-white font-black leading-snug md:leading-tight mt-6 mb-2 tracking-tight">
              "If we don't improve the quality of your consultation bookings within the first 60 days — we continue optimising your system at <span className="text-[#E54D2E]">no management fee</span> until we do."
            </blockquote>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight mb-12 flex flex-col gap-2 uppercase">
            <span>The offer's rotting for 4 years Cuz We Always delivered</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <motion.div
            className="bg-[#1F1513] border-l-4 border-[#E54D2E] p-6 md:p-8 mb-10 md:mb-12 relative overflow-hidden flex flex-col md:flex-row items-start text-left gap-4 md:gap-6"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E54D2E]/10 flex items-center justify-center flex-shrink-0 border border-[#E54D2E]/30">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-[#E54D2E]" strokeWidth={3} />
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
            href="https://funnel.wajdan.co/booking-page-page"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-6 sm:px-8 md:px-12 py-5 md:py-6 bg-[#E54D2E] text-white font-black uppercase tracking-wider text-base md:text-xl transition-all w-full sm:w-auto shadow-[0_6px_0_0_#fafaf8] hover:shadow-none hover:translate-y-[6px]"
          >
            <span className="relative z-10">Claim Your Free Strategy Session</span>
            <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </motion.a>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E54D2E] text-[#E54D2E]" />
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
