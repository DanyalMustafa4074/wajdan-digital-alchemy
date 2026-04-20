import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

export const SalesStory: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 prose-lg">
        
        <ScrollReveal>
          <div className="border-4 border-red-600 bg-red-50 p-6 md:p-8 mb-20 text-center shadow-[8px_8px_0_0_#dc2626] rounded-sm relative -rotate-1">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 font-bold uppercase tracking-widest text-sm shadow-md flex items-center gap-2 border-2 border-red-800">
              <AlertTriangle className="w-4 h-4" />
              URGENT WARNING
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600 mb-4 uppercase tracking-tighter mt-4 leading-tight">
              Most immigration consultancies running Meta ads are paying for a half-built system.
            </h2>
            <p className="text-red-950 font-bold m-0 text-lg md:text-xl">
              Here's the other half — and why it's costing you more than the retainer itself.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl leading-relaxed font-bold mb-8 text-foreground uppercase tracking-tight">
            Dear Immigration & Education Consultancy Owner,
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground mx-auto mb-6 font-medium">
            If you want to stop watching money leave your ad account every week while your calendar sits half empty — and finally build a system where qualified, pre-nurtured, ready-to-buy prospects actually show up to your consultations —
          </p>
          <div className="my-10 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground mx-auto font-black bg-[#cf5230] text-white p-3 inline-block -rotate-1 shadow-[4px_4px_0_0_#000]">
              Then I promise you: this is the most important page you will read this year.
            </p>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-foreground mx-auto mb-16 text-muted-foreground italic text-center w-full">
            (And no — we haven't lost the plot. Keep reading.)
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mt-4 mb-4 tracking-tighter uppercase leading-[1.05]">
            You've probably already<br/><span className="text-red-600 underline decoration-red-200">tried the ads thing.</span>
          </h2>
          <div className="w-20 h-2 bg-brand-orange mb-10" />

          <p className="text-lg leading-relaxed text-foreground mb-6">
            You hired someone. An agency. A freelancer who "specialised in Meta." Maybe your own internal person who watched a YouTube course and felt confident.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            You gave them budget. You gave them access. You gave them time.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            Leads started coming in. The dashboard showed numbers. CPL looking decent. The report landed in your inbox every Monday morning.
          </p>
          <p className="text-lg leading-relaxed font-bold text-foreground mb-8 p-6 bg-gray-50 border-l-4 border-gray-800 uppercase tracking-wide">
            The numbers looked fine.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6 font-medium">
            And then you looked at your actual booked consultations.
          </p>
          
          <div className="bg-red-500 text-white p-6 my-10 font-bold text-xl md:text-2xl text-center shadow-inner">
            And the two sets of numbers had almost nothing to do with each other.
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10 text-center">
            <div className="bg-white p-6 border-2 border-gray-200 shadow-sm text-gray-800 text-sm font-bold italic relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-4xl text-gray-300">"</span>
              The leads need more time to warm up.
            </div>
            <div className="bg-white p-6 border-2 border-gray-200 shadow-sm text-gray-800 text-sm font-bold italic relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-4xl text-gray-300">"</span>
              We just need to let the algorithm learn.
            </div>
            <div className="bg-white p-6 border-2 border-gray-200 shadow-sm text-gray-800 text-sm font-bold italic relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-4xl text-gray-300">"</span>
              Can we get a slightly bigger budget for next month?
            </div>
          </div>
          
          <p className="text-2xl font-black leading-relaxed text-foreground mb-8 text-center uppercase tracking-tight">
            Meanwhile you're watching money leave your account.<br/><span className="text-[#cf5230]">Every. Single. Week.</span>
          </p>
          
          <ul className="space-y-6 mb-16 pl-4 md:pl-8">
            <li className="flex items-start gap-4">
              <X className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-xl font-bold text-gray-800">Paying for leads that never answer the phone.</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-xl font-bold text-gray-800">Paying for bookings that don't show up.</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
              <span className="text-xl font-bold text-gray-800 leading-tight">Paying for a Monday morning report that tells you everything except the one thing you actually need to know:</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-[#111110] text-[#fafaf8] p-10 md:p-14 text-center border-b-[12px] border-[#cf5230] mb-16 rotate-1">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              Why is none of this<br/><span className="text-[#cf5230]">turning into actual clients?</span>
            </h2>
            <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
              Here's the answer. And it's going to make you furious. Not at yourself. At every agency that ripped you off without telling you this:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col items-center justify-center mb-10">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl mb-4">🤡</div>
             <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight text-center">
              Getting leads is the <span className="text-[#cf5230] underline decoration-orange-200">easy part.</span>
             </h2>
          </div>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-8 text-center max-w-2xl mx-auto">
            Any agency can fill a form. Any agency can lower your cost per click. Any agency can produce a dashboard that looks like progress.
          </p>
          <div className="p-8 md:p-10 bg-red-50 border-4 border-red-600 font-black text-xl md:text-2xl mb-8 text-center leading-tight uppercase tracking-tight shadow-[8px_8px_0_0_#dc2626] -rotate-1">
            What almost no agency ever builds — what nobody built for you — is the <span className="text-red-700 bg-yellow-300 px-2 py-1">system</span> that takes that lead from the moment they submit a form and never lets go until they're sitting in front of you.
          </div>
          <p className="text-base md:text-lg font-bold leading-relaxed text-muted-foreground italic mb-16 text-center max-w-2xl mx-auto">
            (That gap — between form submission and a qualified, pre-nurtured, showed-up consultation? That's where your money goes. Every. Single. Time.)
          </p>
          
          <div className="text-center mb-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-red-50 blur-3xl rounded-full opacity-50 -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none mb-6 relative z-10">
              That's not bad targeting.<br/>
              <span className="text-red-600 block mt-2">That's your worst fear.</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold mt-8 uppercase tracking-wide text-gray-500">
              And it is precisely, exactly, specifically what we were built to fix.
            </p>
          </div>
          
          <div className="p-8 md:p-12 border-4 border-black bg-white shadow-[12px_12px_0_0_#cf5230] mb-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter text-gray-400 line-through">We don't start with your ads.</h3>
            <h3 className="text-4xl md:text-6xl font-black text-[#cf5230] uppercase mb-8 tracking-tighter leading-none">We start with your offer.</h3>
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed max-w-2xl mx-auto mb-10">
              The offer your ideal immigration or education client is desperately searching for — that nobody in your market is actually giving them. We find that gap. We craft the offer that fills it. Then — and only then — do we build everything else around it.
            </p>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#111110] text-white font-black text-xl md:text-2xl px-10 py-6 uppercase tracking-wider hover:bg-[#cf5230] transition-colors shadow-[0_6px_0_0_#cf5230] hover:shadow-none hover:translate-y-[6px]"
            >
              See Exactly What's Leaking — Free Audit
            </motion.a>
          </div>
          
        </ScrollReveal>
      </div>
    </section>
  );
};
