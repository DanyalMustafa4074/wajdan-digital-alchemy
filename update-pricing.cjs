const fs = require('fs');

const pricingPath = 'src/components/ui/pricing-cards.tsx';

const newPricingContent = `
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Check, ArrowRight, Zap, Target, Flame } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  badge?: string;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'System Build',
    price: '$1,000 – $1,500',
    priceSubtext: 'One-time setup investment',
    description: 'We build the entire machine before a single dollar of traffic is spent. Offer, funnel, VSL, CRM, tracking.',
    features: [
      'Irresistible Mafia Offer Creation',
      'High-Converting Landing Page Design',
      'Word-for-Word VSL Scripting',
      'Complete GoHighLevel Sales Pipeline',
      'Automated Email & SMS Sequences',
      'Enterprise-Grade Conversion Tracking',
    ],
    cta: 'Claim Your Build',
    icon: <Target className="w-8 h-8 text-white" />,
  },
  {
    name: 'Growth Partner',
    price: '$1,500/month',
    priceSubtext: 'Plus ad spend (No long-term contracts)',
    description: 'We run the ads, optimize the funnel, and force-feed qualified appointments onto your calendar. Earned every month.',
    features: [
      'Meta & Google Ads Management',
      'Relentless Weekly Creative Testing',
      'Aggressive Retargeting Sequences',
      'Daily Pipeline Optimization',
      'Crystal-Clear ROI Reporting',
      'Weekly Strategy War Room',
      'Zero Handcuffs. Cancel Anytime.',
    ],
    cta: 'Apply For Partnership',
    popular: true,
    badge: 'MOST POPULAR',
    icon: <Flame className="w-8 h-8 text-brand-orange" />,
  },
  {
    name: 'Creative Arsenal',
    price: 'From $500/mo',
    priceSubtext: 'Dedicated talent add-on',
    description: 'Direct access to elite, pre-vetted video editors and designers. No agency markup, just raw output.',
    features: [
      'Full-Time Video Editor ($900/mo)',
      'Part-Time Video Editor ($500/mo)',
      'Direct Slack Communication',
      'Unlimited Ad Creative Variations',
      'Pay Exactly What The Talent Costs',
      'Managed By Your Devoted PM',
    ],
    cta: 'Unlock Talent',
    badge: 'SECRET WEAPON',
    icon: <Zap className="w-8 h-8 text-neutral-400" />,
  },
];

const PricingCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-24 bg-brand-dark relative overflow-hidden', className)}>
      {/* Background grit */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
      
      <ScrollReveal className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Simple Pricing.<br className="md:hidden" /> <span className="text-brand-orange">Zero Bullshit.</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium">
          We build the machine. We drive the traffic. You close the deals. No hidden fees. No long-term handcuffs.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 relative z-10">
        {pricingTiers.map((tier, index) => (
          <ScrollReveal key={tier.name} delay={index * 0.1} className="flex">
            <motion.div
              className={cn(
                'relative w-full rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-300',
                tier.popular
                  ? 'bg-[#1A1A1A] border-2 border-brand-orange shadow-[0_0_40px_rgba(255,107,53,0.15)] transform lg:-translate-y-4'
                  : 'bg-[#151515] border border-neutral-800 hover:border-neutral-600'
              )}
            >
              {tier.badge && (
                <div className={cn(
                  'absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg whitespace-nowrap',
                  tier.popular
                    ? 'bg-brand-orange text-white'
                    : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                )}>
                  {tier.badge}
                </div>
              )}

              <div className="mb-8 relative">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                  tier.popular ? "bg-brand-orange/10" : "bg-neutral-800/50"
                )}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">{tier.name}</h3>
                <div className={cn(
                  "text-4xl lg:text-5xl font-black mb-2 tracking-tighter",
                  tier.popular ? "text-brand-orange" : "text-white"
                )}>
                  {tier.price}
                </div>
                {tier.priceSubtext && (
                  <p className="text-sm text-neutral-500 font-semibold">{tier.priceSubtext}</p>
                )}
              </div>

              <p className="text-neutral-400 text-base mb-8 leading-relaxed font-medium">
                {tier.description}
              </p>

              <div className="flex-1">
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className={cn(
                        "mt-1 p-1 rounded-full",
                        tier.popular ? "bg-brand-orange/20" : "bg-neutral-800"
                      )}>
                        <Check className={cn(
                          "w-4 h-4",
                          tier.popular ? "text-brand-orange" : "text-neutral-400"
                        )} strokeWidth={3} />
                      </div>
                      <span className="text-neutral-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center justify-center w-full py-5 px-6 rounded-xl font-black uppercase tracking-wider transition-all text-base shadow-lg',
                  tier.popular
                    ? 'bg-brand-orange text-white hover:bg-[#E55A2B] shadow-[0_0_20px_rgba(255,107,53,0.4)]'
                    : 'bg-white text-black hover:bg-neutral-200'
                )}
              >
                {tier.cta}
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={3} />
              </motion.a>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} className="text-center mt-16 relative z-10 px-4">
        <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto font-medium">
          * Exact pricing depends on your current infrastructure and desired scale. 
          Book a free strategy session to map out your custom action plan.
        </p>
      </ScrollReveal>
    </div>
  );
};

export { PricingCards };
`;

fs.writeFileSync(pricingPath, newPricingContent);
console.log('PricingCards updated to high-conversion dark UX theme');
