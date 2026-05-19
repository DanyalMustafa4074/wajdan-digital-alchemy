import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const SalesStory: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-8 md:py-14 bg-background overflow-x-hidden', className)}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 prose-lg">

        <ScrollReveal delay={0.1}>
          <p className="text-lg sm:text-xl md:text-2xl leading-loose font-bold mb-6 md:mb-8 text-foreground uppercase tracking-tight">
            You.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-loose text-foreground mx-auto mb-6 font-medium">
            Yeah you are the consultancy owner who wants to stop watching money leave your ad account every week while your calendar sits half empty. The one who wants a system where qualified, pre-nurtured, ready-to-buy prospects actually show up to your consultations.
          </p>
          <div className="my-8 md:my-10 text-center">
            <p className="text-base sm:text-lg md:text-xl leading-snug text-foreground mx-auto font-black bg-[#E54D2E] text-white p-3 inline-block md:-rotate-1 shadow-[4px_4px_0_0_#000]">
              Then I promise you: this is the most important f*cking page you will read this year.
            </p>
          </div>
          <p className="text-sm md:text-lg leading-loose text-neutral-500 mx-auto mb-12 md:mb-16 italic text-center w-full">
            (And no — we haven't lost the plot. Keep reading.)
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mt-4 mb-4 tracking-tight md:tracking-tighter uppercase leading-[1.3]">
            You've probably already<br/><span className="text-red-600 underline decoration-red-200">tried the ads thing.</span>
          </h2>
          <div className="w-20 h-2 bg-brand-orange mb-10" />

          <p className="text-base md:text-lg leading-loose text-foreground mb-5 md:mb-6">
            You hired someone. An agency. A freelancer who "specialised in Meta." Maybe your own internal person who watched a YouTube course and felt confident.
          </p>
          <p className="text-base md:text-lg leading-loose text-foreground mb-5 md:mb-6">
            You gave them budget. You gave them access. You gave them time.
          </p>
          <p className="text-base md:text-lg leading-loose text-foreground mb-5 md:mb-6">
            Leads started coming in. The dashboard showed numbers. CPL looking decent. The report landed in your inbox every Monday morning.
          </p>
          <p className="text-base md:text-lg leading-loose font-bold text-foreground mb-8 p-5 md:p-6 bg-gray-50 border-l-4 border-gray-800 uppercase tracking-wide">
            The numbers looked fine.
          </p>
          <p className="text-base md:text-lg leading-loose text-foreground mb-6 font-medium">
            And then you looked at your actual booked consultations.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-black leading-snug text-[#E54D2E] my-8 md:my-10 text-center uppercase tracking-tight">
            And those two numbers? Pure Instagram vs reality.
          </p>

          <p className="text-lg sm:text-xl font-black leading-snug text-foreground mb-8 text-center uppercase tracking-tight">
            AND MEANWHILE? YOUR MONEY'S ON F*CKING FIRE.<br/><span className="text-[#E54D2E]">EVERY. SINGLE. WEEK.</span>
          </p>

          <ul className="space-y-5 md:space-y-6 mb-12 md:mb-16 pl-2 md:pl-8">
            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-6 h-6 md:w-8 md:h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-base md:text-lg font-bold text-gray-800">Paying for leads who don't even pick up the phone.</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-6 h-6 md:w-8 md:h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-base md:text-lg font-bold text-gray-800">Paying for "booked" calls that ghost you before the day arrives.</span>
            </li>
            <li className="flex items-start gap-3 md:gap-4">
              <X className="w-6 h-6 md:w-8 md:h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-base md:text-lg font-bold text-gray-800 leading-snug">Paying for a Monday morning PDF that tells you everything — except whether any of it ever turns into a paying client.</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-[#140E0E] text-[#fafaf8] p-8 sm:p-10 md:p-14 text-center border-b-[8px] md:border-b-[12px] border-[#E54D2E] mb-12 md:mb-16 md:rotate-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 md:mb-6 uppercase tracking-tight md:tracking-tighter leading-[1.3]">
              Why is none of this<br/><span className="text-[#E54D2E]">turning into actual clients?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-300 font-medium max-w-2xl mx-auto leading-[1.7]">
              Here's the answer. And it's going to make you furious. Not at yourself. At every agency that ripped you off without telling you this:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
             <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4">🤡</div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6 uppercase tracking-tight text-center leading-[1.15]">
              Getting leads is the <span className="text-[#E54D2E] underline decoration-orange-200">easy part.</span>
             </h2>
          </div>

          <p className="text-base md:text-lg font-medium leading-[1.7] text-foreground mb-8 text-center max-w-2xl mx-auto">
            Any agency can fill a form. Any agency can lower your cost per click. Any agency can produce a dashboard that looks like progress.
          </p>
          <div className="p-6 sm:p-8 md:p-10 bg-red-50 border-4 border-red-600 font-black text-base sm:text-lg md:text-xl mb-8 text-center leading-snug uppercase tracking-tight shadow-[6px_6px_0_0_#dc2626] md:shadow-[8px_8px_0_0_#dc2626] md:-rotate-1">
            <span className="text-red-700 bg-yellow-300 px-1 md:px-2 py-0.5 md:py-1">from the moment they click your ad and never let go until they are sitting ...</span>
          </div>
          <p className="text-sm md:text-lg font-bold leading-loose text-neutral-500 italic mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            (That gap — between form submission and a qualified, pre-nurtured, showed-up consultation? That's where your money goes. Every. Single. Time.)
          </p>

          <div className="text-center mb-12 md:mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-red-50 blur-3xl rounded-full opacity-50 -z-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight md:tracking-tighter leading-[1.3] mb-6 relative z-10">
              That's not bad targeting.<br/>
              <span className="text-red-600 block mt-2">That's your worst fear.</span>
            </h2>
          </div>

          <div className="p-6 sm:p-8 md:p-12 border-4 border-black bg-white shadow-[8px_8px_0_0_#E54D2E] md:shadow-[12px_12px_0_0_#E54D2E] mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E54D2E]/10 transform rotate-45 translate-x-16 -translate-y-16 hidden md:block"></div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3 md:mb-4 tracking-tight md:tracking-tighter text-gray-400 line-through">We don't start with your ads.</h3>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E54D2E] uppercase mb-6 md:mb-8 tracking-tight md:tracking-tighter leading-[1.1]">We start with your offer.</h3>
            <p className="text-base md:text-lg font-medium text-gray-800 leading-[1.7] max-w-2xl mx-auto mb-8 md:mb-10">
              The offer your ideal education client is desperately searching for — that nobody in your market is actually giving them. We find that gap. We craft the offer that fills it. Then — and only then — do we build everything else around it.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block w-full sm:w-auto bg-[#140E0E] text-white font-black text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 md:py-5 uppercase tracking-wider hover:bg-[#E54D2E] transition-colors shadow-[0_6px_0_0_#E54D2E] hover:shadow-none hover:translate-y-[6px]"
            >
              See Exactly What's Leaking — Free Audit
            </motion.a>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};
