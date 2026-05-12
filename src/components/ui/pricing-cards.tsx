"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Check, ArrowRight, Zap, Target, Flame } from 'lucide-react';
import { TiltCard } from './tilt-card';

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
    priceSubtext: 'One-time investment',
    description:
      'Offer creation, landing page, VSL script, GHL build, automation setup, conversion tracking. Everything before traffic goes live.',
    features: [
      'Full offer research and architecture',
      'Custom landing page + copywriting',
      'VSL script — word for word',
      'Complete GHL pipeline build',
      'All automation sequences',
      'Conversions API integration',
    ],
    cta: 'Claim Your Build',
    icon: <Target className="w-7 h-7 text-[#cf5230]" />,
  },
  {
    name: 'Monthly Management',
    price: '$2,000/month',
    priceSubtext: 'Ad spend separate. No long-term contract.',
    description:
      'After the system is built. We run the campaigns, optimise weekly, and earn the retainer every single month.',
    features: [
      'Meta campaign management',
      'Weekly creative optimisation',
      'Retargeting sequences',
      'GHL maintenance + updates',
      'Conversion data reporting',
      'Weekly performance review',
      'No long-term contract — ever',
    ],
    cta: 'Apply For Partnership',
    popular: true,
    badge: 'Most Popular',
    icon: <Flame className="w-7 h-7 text-white" />,
  },
  {
    name: 'Content Support',
    price: 'From $500/mo',
    priceSubtext: 'Optional add-on',
    description:
      'Video editors and graphic designers — on demand. No agency markup. Just your dedicated person, working your hours.',
    features: [
      'Full-time editor — $900/month',
      'Part-time editor — $500/month',
      'Graphic designer available',
      'Ad creative production',
      'Only pay for what you use',
      'Managed through your project manager',
    ],
    cta: 'Add Talent',
    badge: 'Add-on',
    icon: <Zap className="w-7 h-7 text-[#cf5230]" />,
  },
];

const PricingCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-24 bg-[#fafaf8] relative overflow-hidden', className)}>
      <ScrollReveal className="text-center mb-16 relative z-10 px-4">
        <p className="text-[#cf5230] text-sm font-bold uppercase tracking-[0.2em] mb-4">Pricing</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#111110] mb-6 uppercase tracking-tight">
          Simple Pricing. <span className="text-[#cf5230]">No Surprises.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
          We build the whole system. You run your consultancy. Here's what that looks like.
        </p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 relative z-10">
        {pricingTiers.map((tier, index) => (
          <ScrollReveal key={tier.name} delay={index * 0.1} className="flex">
            <TiltCard
              intensity={tier.popular ? 5 : 4}
              lift={tier.popular ? 24 : 12}
              gloss={tier.popular}
              className={cn('w-full flex', tier.popular && 'lg:-translate-y-4')}
            >
            <motion.div
              className={cn(
                'relative w-full p-8 md:p-10 flex flex-col transition-all duration-300 h-full',
                tier.popular
                  ? 'bg-[#111110] border-2 border-[#cf5230] shadow-[8px_8px_0_0_#cf5230]'
                  : 'bg-white border-2 border-neutral-200'
              )}
            >
              {tier.badge && (
                <div
                  className={cn(
                    'absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 text-xs font-black tracking-widest uppercase whitespace-nowrap',
                    tier.popular
                      ? 'bg-[#cf5230] text-white'
                      : 'bg-[#111110] text-white'
                  )}
                >
                  {tier.badge}
                </div>
              )}

              <div className="mb-8 relative">
                <div
                  className={cn(
                    'w-14 h-14 flex items-center justify-center mb-6',
                    tier.popular ? 'bg-[#cf5230]/15 border border-[#cf5230]/40' : 'bg-[#fafaf8] border border-neutral-200'
                  )}
                >
                  {tier.icon}
                </div>
                <h3
                  className={cn(
                    'text-2xl font-black mb-3 uppercase tracking-tight',
                    tier.popular ? 'text-white' : 'text-[#111110]'
                  )}
                >
                  {tier.name}
                </h3>
                <div
                  className={cn(
                    'text-3xl lg:text-4xl font-black mb-2 tracking-tighter',
                    tier.popular ? 'text-[#cf5230]' : 'text-[#111110]'
                  )}
                >
                  {tier.price}
                </div>
                {tier.priceSubtext && (
                  <p
                    className={cn(
                      'text-sm font-semibold',
                      tier.popular ? 'text-neutral-400' : 'text-neutral-500'
                    )}
                  >
                    {tier.priceSubtext}
                  </p>
                )}
              </div>

              <p
                className={cn(
                  'text-base mb-8 leading-loose font-medium',
                  tier.popular ? 'text-neutral-300' : 'text-neutral-600'
                )}
              >
                {tier.description}
              </p>

              <div className="flex-1">
                <ul className="space-y-3 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={cn(
                          'mt-1 p-1 rounded-full flex-shrink-0',
                          tier.popular ? 'bg-[#cf5230]/20' : 'bg-[#cf5230]/10'
                        )}
                      >
                        <Check className="w-3.5 h-3.5 text-[#cf5230]" strokeWidth={3} />
                      </div>
                      <span
                        className={cn(
                          'font-medium text-sm md:text-base',
                          tier.popular ? 'text-neutral-200' : 'text-neutral-700'
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center justify-center w-full py-4 px-6 font-black uppercase tracking-wider transition-all text-sm md:text-base',
                  tier.popular
                    ? 'bg-[#cf5230] text-white shadow-[0_4px_0_0_#fafaf8] hover:shadow-none hover:translate-y-1'
                    : 'bg-[#111110] text-white shadow-[0_4px_0_0_#cf5230] hover:shadow-none hover:translate-y-1'
                )}
              >
                {tier.cta}
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={3} />
              </motion.a>
            </motion.div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} className="text-center mt-16 relative z-10 px-4">
        <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto font-medium italic">
          Exact pricing depends on your current setup, market, and ad spend level. The audit call is where we figure out the right structure — free, no commitment.
        </p>
      </ScrollReveal>
    </div>
  );
};

export { PricingCards };
