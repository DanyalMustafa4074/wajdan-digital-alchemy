const fs = require('fs');
const code = `import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';

export const SalesStory: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="max-w-3xl mx-auto px-4 md:px-8 prose-lg">
        
        <ScrollReveal>
          <div className="border-4 border-red-600 bg-red-50 p-6 md:p-8 mb-16 text-center shadow-[6px_6px_0px_#dc2626] rounded-sm relative -rotate-1">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full font-bold uppercase tracking-widest text-sm shadow-md flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              URGENT WARNING
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-red-600 mb-3 uppercase tracking-tighter shadow-sm mt-4">
              Most immigration consultancies running Meta ads are paying for a half-built system.
            </h2>
            <p className="text-red-950 font-bold m-0 text-lg">
              Here's the other half — and why it's costing you more than the retainer itself.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-xl md:text-2xl leading-relaxed font-bold mb-8 text-foreground uppercase tracking-tight">
            Dear Immigration & Education Consultancy Owner,
          </p>
          <p className="text-xl leading-relaxed text-foreground mx-auto mb-6 font-medium">
            If you want to stop watching money leave your ad account every week while your calendar sits half empty — and finally build a system where qualified, pre-nurtured, ready-to-buy prospects actually show up to your consultations —
          </p>
          <p className="text-xl leading-relaxed text-foreground mx-auto mb-10 font-bold bg-brand-yellow/30 p-2 inline-block -rotate-1">
            Then I promise you: this is the most important page you will read this year.
          </p>
          <p className="text-xl leading-relaxed text-foreground mx-auto mb-6 text-muted-foreground italic text-center w-full">
            (And no — we haven't lost the plot. Keep reading.)
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-16 mb-8 tracking-tighter uppercase leading-[1.1]">
            You've probably already<br/><span className="text-red-600">tried the ads thing.</span>
          </h2>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            You hired someone. An agency. A freelancer who "specialised in Meta." Maybe your own internal person who watched a YouTube course and felt confident.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            You gave them budget. You gave them access. You gave them time.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            Leads started coming in. The dashboard showed numbers. CPL looking decent. The report landed in your inbox every Monday morning.
          </p>
          <p className="text-lg leading-relaxed font-bold text-foreground mb-6">
            The numbers looked fine.
          </p>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            And then you looked at your actual booked consultations.
          </p>
          <p className="text-lg leading-relaxed font-bold text-foreground mb-8 p-4 bg-gray-100 border-l-4 border-gray-400">
            And the two sets of numbers had almost nothing to do with each other.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10 text-center">
            <div className="bg-red-50 p-4 border border-red-100 rounded-lg text-red-800 text-sm font-medium italic">
              "The leads need more time to warm up."
            </div>
            <div className="bg-red-50 p-4 border border-red-100 rounded-lg text-red-800 text-sm font-medium italic">
              "We just need to let the algorithm learn."
            </div>
            <div className="bg-red-50 p-4 border border-red-100 rounded-lg text-red-800 text-sm font-medium italic">
              "Can we get a slightly bigger budget for next month?"
            </div>
          </div>
          
          <p className="text-xl font-bold leading-relaxed text-foreground mb-6">
            Meanwhile you're watching money leave your account. Every. Single. Week.
          </p>
          
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-lg font-medium">Paying for leads that never answer the phone.</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-lg font-medium">Paying for bookings that don't show up.</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-lg font-medium">Paying for a Monday morning report that tells you everything except the one thing you actually need to know:</span>
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-black text-white p-8 md:p-12 text-center rounded-xl shadow-2xl mb-16 transform rotate-1">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-tight">
              Why is none of this<br/><span className="text-brand-orange">turning into actual clients?</span>
            </h2>
            <p className="text-xl text-gray-300 font-medium">
              Here's the answer. And it's going to make you furious. Not at yourself. At every agency that ripped you off without telling you this:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tight">
            Getting leads is the <span className="text-brand-orange">easy part.</span>
          </h2>
          <p className="text-lg leading-relaxed text-foreground mb-6">
            Any agency can fill a form. Any agency can lower your cost per click. Any agency can produce a dashboard that looks like progress.
          </p>
          <div className="p-6 bg-orange-50 border-l-4 border-brand-orange font-bold text-xl mb-6 shadow-sm">
            What almost no agency ever builds — what nobody built for you — is the <span className="text-brand-orange">system</span> that takes that lead from the moment they submit a form and never lets go until they're sitting in front of you.
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground italic mb-12 text-center">
            (That gap — between form submission and a qualified, pre-nurtured, showed-up consultation? That's where your money goes. Every. Single. Time.)
          </p>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none mb-4">
              That's not bad targeting.<br/>
              <span className="text-red-600">That's your worst fear.</span>
            </h2>
            <p className="text-xl font-medium mt-6">
              And it is precisely, exactly, specifically what we were built to fix.
            </p>
          </div>
          
          <div className="p-8 border-4 border-black bg-white shadow-[8px_8px_0px_#f97316] mb-12 text-center">
            <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">We don't start with your ads.</h3>
            <h3 className="text-4xl font-black text-brand-orange uppercase mb-6 tracking-tighter">We start with your offer.</h3>
            <p className="text-lg font-medium text-gray-700 leading-relaxed max-w-2xl mx-auto">
              The offer your ideal immigration or education client is desperately searching for — that nobody in your market is actually giving them. We find that gap. We craft the offer that fills it. Then — and only then — do we build everything else around it.
            </p>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block bg-black text-white font-bold text-xl px-10 py-5 rounded-md uppercase tracking-wide hover:bg-brand-orange transition-colors"
            >
              See Exactly What's Leaking — Free Audit
            </motion.a>
          </div>
          
        </ScrollReveal>
      </div>
    </section>
  );
};
`;
fs.writeFileSync('src/components/ui/sales-story.tsx', code);
