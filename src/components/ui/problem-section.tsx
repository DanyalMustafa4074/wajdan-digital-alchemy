"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { ArrowDown, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-16 md:py-24 bg-[#fafaf8]', className)}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">

        <ScrollReveal>
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 uppercase tracking-tight md:tracking-tighter leading-[1.05] inline-block pb-2 border-b-4 md:border-b-8 border-[#cf5230]">
              We Call It The Half-Service Trap.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose-lg mx-auto text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 md:mb-10">
              You pay for a complete marketing service. You receive the top half — <span className="font-black bg-gray-200 px-2 py-1">traffic and leads.</span>
            </p>
            <p className="text-base sm:text-lg md:text-2xl font-medium text-foreground leading-relaxed mb-10 md:mb-12">
              The bottom half — <span className="font-bold underline decoration-red-500 underline-offset-4">offer creation, qualification, CRM infrastructure, automation, follow-up sequences, no-show reduction</span> — was never built.
            </p>

            <div className="bg-red-50 border-l-4 md:border-l-0 md:border-x-8 border-red-600 p-6 md:p-12 my-12 md:my-16 md:rotate-1 shadow-lg">
              <p className="text-xl md:text-3xl font-black text-red-900 leading-tight uppercase tracking-tight text-center">
                The agency hit their deliverable. The leads were real.<br/>
                <span className="text-[#cf5230] block mt-3 md:mt-4">The failure was invisible.</span>
              </p>
            </div>

            <p className="text-base md:text-2xl font-bold text-foreground leading-relaxed text-center max-w-3xl mx-auto mb-16 md:mb-20 italic bg-white p-6 md:p-8 pt-10 md:pt-8 border-2 border-gray-100 shadow-sm relative">
               <AlertCircle className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 text-[#cf5230] bg-white rounded-full p-1" />
              And it costs you more every month than their retainer ever did.
            </p>

            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-neutral-600 font-medium mb-12 text-center md:text-left">
              The profession of digital marketing has more incompetence per capita than almost any other industry on earth. Harsh? Yes. True? <span className="font-black text-foreground bg-yellow-200/50 px-2">Ask your Monday morning calendar.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 md:mt-24 p-8 md:p-16 bg-[#111110] text-[#fafaf8] text-center border-t-4 md:border-t-8 border-[#cf5230] md:-rotate-1 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf5230] opacity-20 transform rotate-45 translate-x-10 -translate-y-10 hidden md:block"></div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 md:mb-8 tracking-tight md:tracking-tighter leading-snug md:leading-tight relative z-10">
              So how do you fix something the entire industry pretends isn't broken?
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase text-[#cf5230] tracking-tight md:tracking-tighter relative z-10 mb-6 md:mb-8 leading-[1.05]">
              You build the other half.
            </h3>

            <p className="text-sm md:text-xl font-bold text-gray-400 italic mb-8 md:mb-12 relative z-10 px-2">
              (Can you hear that? That's the sound of every agency you've ever fired wishing they'd thought of this.)
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex w-full sm:w-auto items-center justify-center bg-white text-[#111110] font-black text-base md:text-2xl px-6 sm:px-10 py-4 md:py-6 uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-[0_6px_0_0_#cf5230] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#cf5230] relative z-10"
            >
              Order A Free Funnel Audit
              <ArrowDown className="w-5 h-5 md:w-6 md:h-6 ml-3 transform -rotate-90" />
            </motion.a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
