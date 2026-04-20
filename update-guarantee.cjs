const fs = require('fs');

const guaranteePath = 'src/components/ui/guarantee-section.tsx';
const newGuaranteeContent = `
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Shield, ArrowRight, Star, AlertTriangle } from 'lucide-react';
import { SuccessIcon, RocketIcon } from './lottie-icons';

interface GuaranteeSectionProps {
  className?: string;
}

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ className }) => {
  return (
    <div className={cn('py-24 relative overflow-hidden bg-[#0A0A0A]', className)}>
      {/* Heavy textured background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      
      {/* Dark aggressive gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-red-500/10 border border-red-500/30 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
          >
            <Shield className="w-12 h-12 text-red-500" strokeWidth={2.5} />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-[1.1]">
            How The Hell Can We Guarantee <span className="text-red-500 italic block mt-2">Results?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 font-medium">
            Because we don't guess. We engineer certainty.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#111110] border-2 border-red-500/50 rounded-3xl p-8 md:p-12 mb-12 relative shadow-[0_0_50px_rgba(239,68,68,0.1)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-red-500 text-white text-sm font-black uppercase tracking-widest rounded-full shadow-lg">
              THE KING KONG GAUNTLET
            </div>
            
            <blockquote className="text-2xl md:text-4xl text-white font-black leading-tight mt-6 mb-2 tracking-tight uppercase">
              "If we don't <span className="text-red-500">double</span> your qualified consultation bookings in 60 days, we work for <span className="text-red-500">free</span> until we do."
            </blockquote>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-2 gap-4 mb-16 text-left max-w-3xl mx-auto">
            {[
              "No paying for 'the algorithm is learning'",
              "No paying for ghosted leads",
              "No paying for pretty dashboards with zero ROI",
              "No paying for effort without outcomes",
              "No 'give us one more month' excuses",
              "No paying for a system that isn't working",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-center gap-4 bg-[#151515] p-4 rounded-xl border border-neutral-800"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                  <X className="text-red-500 w-5 h-5" strokeWidth={3} />
                </div>
                <span className="text-neutral-300 font-semibold text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <motion.div 
            className="bg-[#1A1A1A] border-l-4 border-brand-orange rounded-r-2xl p-8 mb-12 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start text-left gap-6 shadow-xl"
          >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-brand-orange" strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-white font-black text-xl mb-2 uppercase tracking-wide">
                Strict Limit: 6 Clients Per Month
              </h3>
              <p className="text-neutral-400 font-medium">
                We refuse to spread our team thin. High-performance funnels require intense focus. When our 6 spots are filled, you go on the waitlist. No exceptions.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.8} className="flex flex-col items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-4 px-8 md:px-12 py-6 bg-brand-orange text-white font-black uppercase tracking-wider rounded-2xl text-lg md:text-xl transition-all w-full sm:w-auto overflow-hidden shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_60px_rgba(255,107,53,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Claim Your Free Strategy Session</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </motion.a>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-orange text-brand-orange" />
              ))}
            </div>
            <p className="text-neutral-500 font-bold text-sm uppercase tracking-widest">
              Trusted by 40+ Immigration & Education Consultancies
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { GuaranteeSection };
`;

fs.writeFileSync(guaranteePath, newGuaranteeContent);
console.log('GuaranteeSection updated successfully');
