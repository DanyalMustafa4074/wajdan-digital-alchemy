const fs = require('fs');

const heroContent = `import { ArrowRight, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const WajdanHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-16">
      {/* Absolute Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle grid pattern for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Niche Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-[#cf5230] uppercase bg-orange-50 border border-[#cf5230]/30 shadow-sm animate-fade-in">
          For Immigration & Education Consultancies
        </div>

        {/* Main Headline - Maximum Impact King Kong Style */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground max-w-5xl tracking-tighter leading-[1.05] mb-6 animate-slide-up animation-delay-100 uppercase">
          We Build The Most <span className="text-[#cf5230]">Ruthless & Effective System</span> for Rapid Scaling of Consultation Firms on Planet Earth <span className="text-gray-400 line-through decoration-red-600">— In 60 Days.</span>
        </h1>

        {/* Subheadline - Contrast value prop */}
        <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mb-12 animate-slide-up animation-delay-200 leading-relaxed">
          While every other agency sells you leads and disappears — we build the complete infrastructure that turns Meta traffic into qualified, pre-nurtured, showed-up consultation bookings. <br/><span className="font-bold px-2 py-1 bg-yellow-200/50 mt-2 inline-block -rotate-1">Or we work for free.</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-2xl mb-16 animate-slide-up animation-delay-300">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-foreground bg-white border-2 border-slate-200 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none hover:border-brand-orange transition-all">
                <PlayCircle className="w-6 h-6 text-[#cf5230]" />
                <span>Watch: How The Wajdan System Works</span>
                <span className="text-sm font-medium text-slate-500">— 3 min</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none shadow-none">
              <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>VSL Video Integration Placeholder</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a 
            href="#contact" 
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white bg-[#111110] shadow-[0_4px_0_0_#cf5230] hover:bg-[#cf5230] hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-wide"
          >
            <span>Show Me What's Broken — Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-4 pt-10 border-t-2 border-gray-200/60 w-full max-w-5xl animate-slide-up animation-delay-400">
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">60-day booking quality commitment</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">No long-term contracts</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">Based in Europe</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">Built for consultation firms only</span>
          </div>
        </div>

      </div>
    </section>
  );
};
`;

const problemContent = `"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { ArrowDown, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-24 bg-[#fafaf8]', className)}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none inline-block pb-2 border-b-8 border-[#cf5230]">
              We Call It The Half-Service Trap.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="prose-lg mx-auto text-center md:text-left">
            <p className="text-xl md:text-3xl font-medium text-foreground leading-relaxed mb-10">
              You pay for a complete marketing service. You receive the top half — <span className="font-black bg-gray-200 px-2 py-1">traffic and leads.</span>
            </p>
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-12">
              The bottom half — <span className="font-bold underline decoration-red-500 underline-offset-4">offer creation, qualification, CRM infrastructure, automation, follow-up sequences, no-show reduction</span> — was never built.
            </p>
            
            <div className="bg-red-50 border-x-8 border-red-600 p-8 md:p-12 my-16 rotate-1 shadow-lg">
              <p className="text-2xl md:text-3xl font-black text-red-900 leading-tight uppercase tracking-tight text-center">
                The agency hit their deliverable. The leads were real.<br/>
                <span className="text-[#cf5230] block mt-4">The failure was invisible.</span>
              </p>
            </div>
            
            <p className="text-lg md:text-2xl font-bold text-foreground leading-relaxed text-center max-w-3xl mx-auto mb-20 italic bg-white p-6 border-2 border-gray-100 shadow-sm relative">
               <AlertCircle className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-[#cf5230] bg-white rounded-full p-1" />
              And it costs you more every month than their retainer ever did.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium mb-12 text-center md:text-left">
              The profession of digital marketing has more incompetence per capita than almost any other industry on earth. Harsh? Yes. True? <span className="font-black text-foreground bg-yellow-200/50 px-2">Ask your Monday morning calendar.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-24 p-10 md:p-16 bg-[#111110] text-[#fafaf8] text-center border-t-8 border-[#cf5230] -rotate-1 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#cf5230] opacity-20 transform rotate-45 translate-x-10 -translate-y-10"></div>
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter leading-tight relative z-10">
              So how do you fix something the entire industry pretends isn't broken?
            </h3>
            <h3 className="text-5xl md:text-7xl font-black uppercase text-[#cf5230] tracking-tighter relative z-10 mb-8">
              You build the other half.
            </h3>
            
            <p className="text-lg md:text-xl font-bold text-gray-400 italic mb-12 relative z-10">
              (Can you hear that? That's the sound of every agency you've ever fired wishing they'd thought of this.)
            </p>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-[#111110] font-black text-xl md:text-2xl px-10 py-6 uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-[0_6px_0_0_#cf5230] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#cf5230] relative z-10"
            >
              Order A Free Funnel Audit
              <ArrowDown className="w-6 h-6 ml-3 transform -rotate-90" />
            </motion.a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
`;

try {
  fs.writeFileSync('src/components/ui/wajdan-hero.tsx', heroContent);
  fs.writeFileSync('src/components/ui/problem-section.tsx', problemContent);
  console.log("Files updated successfully.");
} catch (err) {
  console.error(err);
}
