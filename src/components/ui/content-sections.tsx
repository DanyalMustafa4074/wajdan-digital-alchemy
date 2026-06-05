import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { CheckCircle, AlertCircle, ShieldAlert, BadgeCheck } from 'lucide-react';

export const ProofSection = () => {
  return (
    <div className="py-10 md:py-14 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1110] mb-5 md:mb-6 uppercase tracking-tight md:tracking-tighter leading-[1.1]">
            Proof<span className="text-[#E54D2E]">!</span>
          </h2>
          <div className="mt-4 flex justify-center px-2">
            <p className="text-sm md:text-lg font-black text-white max-w-3xl px-4 sm:px-6 py-3 bg-[#E54D2E] md:-rotate-1 shadow-[0_6px_0_0_#111110] md:shadow-[0_8px_0_0_#111110] uppercase tracking-wider leading-snug">
              Consultancy funnels we've built — and what happened after.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 md:mt-16 w-full max-w-4xl mx-auto border-4 border-black rounded-lg overflow-hidden shadow-[12px_12px_0_0_#E54D2E]">
          <img 
            src="/Wajdan_Dashboards_blurred%20(1).png" 
            alt="Dashboard Proof of Results" 
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </div>
  );
};

export const WhoIsThisFor = () => {
  const fits = [
    'You run an education consultancy already getting leads — but far fewer qualified consultations than you\'re paying for',
    'You\'ve been burned by at least one agency that promised results and delivered Monday morning excuses',
    'You want to measure marketing by booked calls and show rates — not impressions, clicks, and CPL',
    'You\'re ready to invest in a complete system — not another month of hoping the ads improve on their own',
  ];

  const noFits = [
    'You\'re looking for the cheapest leads possible regardless of quality, intent, or wasted time chasing them',
    'You have no capacity to follow up with incoming enquiries — automated or otherwise',
    'You think the problem is the creatives and all you need is better-looking ads',
    'You\'re not willing to let a system do the work your staff has been forgetting to do',
  ];

  return (
    <section className="py-14 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1110] mb-6 uppercase tracking-tight leading-[1.1]">
            Who This Is <span className="text-[#E54D2E] border-b-6 border-[#E54D2E] pb-1">For</span>.
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Make sure to Read this so you dont waste our time.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border-2 border-neutral-200 p-8 h-full shadow-[8px_8px_0_0_#E54D2E]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#E54D2E]/10 rounded-full flex items-center justify-center border-2 border-[#E54D2E]/30">
                  <BadgeCheck className="w-6 h-6 text-[#E54D2E]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-[#1A1110] uppercase tracking-wider">Perfect Fit</h3>
              </div>
              <ul className="space-y-5">
                {fits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#E54D2E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#140E0E] border-2 border-[#111110] p-8 h-full shadow-[8px_8px_0_0_#E54D2E]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30">
                  <ShieldAlert className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Close This Tab If</h3>
              </div>
              <ul className="space-y-5">
                {noFits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-[#E54D2E] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-300 font-medium text-lg sm:text-xl leading-relaxed">{item}</span>
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
    <section className="relative py-14 md:py-20 bg-[#140E0E] overflow-hidden flex flex-col justify-center items-center px-4 md:px-6">

      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(229,77,46,0.12) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#fafaf8] uppercase tracking-tight leading-[1.35] sm:leading-[1.35] md:leading-[1.35] lg:leading-[1.35] mb-8 md:mb-12">
            I Guess What We're Trying To Say Is That You Should{' '}
            <span className="text-[#E54D2E]">Hit The Damn Button</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col items-center">
          <motion.a
            href="https://funnel.wajdan.co/booking-page-page"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block w-full sm:w-auto bg-[#E54D2E] text-white font-black uppercase text-sm sm:text-base md:text-lg tracking-wider py-4 md:py-5 px-8 sm:px-12 md:px-16 shadow-[0_6px_0_0_#B83521] hover:shadow-none hover:translate-y-[6px] transition-all"
          >
            HIT THE DAMN BUTTON
          </motion.a>
        </ScrollReveal>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
    </section>
  );
};
