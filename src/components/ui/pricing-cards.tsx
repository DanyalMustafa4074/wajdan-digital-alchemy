"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal, StaggerContainer, StaggerItem } from './scroll-reveal';
import { Check, ArrowRight } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  priceSubtext?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'System Build',
    price: '$1,000 – $1,500',
    priceSubtext: 'One-time investment',
    description: 'Offer creation, landing page, VSL script, GHL build, automation setup, conversion tracking. Everything before the traffic goes live.',
    features: [
      'Full offer research and architecture',
      'Custom landing page + copywriting',
      'VSL script — word for word',
      'Complete GHL pipeline build',
      'All automation sequences',
      'Conversions API integration',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Monthly Management',
    price: '$1,500/month',
    priceSubtext: 'After the system is built',
    description: 'Ad spend is separate. No long-term contract. Earned every single month.',
    features: [
      'Meta campaign management',
      'Weekly creative optimisation',
      'Retargeting sequences',
      'GHL maintenance + updates',
      'Conversion data reporting',
      'Weekly performance review',
      'No long-term contract — ever',
    ],
    cta: 'Book a Call',
    popular: true,
    badge: 'Most popular',
  },
  {
    name: 'Content Support',
    price: 'From $500/month',
    priceSubtext: 'Optional add-on',
    description: 'Video editors and graphic designers — on demand. No agency markup. Just your dedicated person, working your hours.',
    features: [
      'Full-time editor — $900/month',
      'Part-time editor — $500/month',
      'Graphic designer available',
      'Ad creative production',
      'Only pay for what you use',
      'Managed through your project manager',
    ],
    cta: 'Learn More',
    badge: '👥 Like hiring your own team',
  },
];

const PricingCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-20', className)}>
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Simple Pricing. No Surprises.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We build the whole system. You run your consultancy. Here's what that looks like.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {pricingTiers.map((tier, index) => (
          <ScrollReveal key={tier.name} delay={index * 0.1}>
            <motion.div
              className={cn(
                'relative h-full rounded-2xl p-8 glass-card hover-lift transition-all duration-300',  
                tier.popular
                  ? 'border-2 border-brand-green/80 shadow-[0_0_20px_rgba(87,167,115,0.15)] bg-gradient-to-b from-brand-green/5 to-transparent'
                  : 'bg-brand-dark/50 border border-white/10 hover:border-white/20'
              )}
            >
              {tier.badge && (
                <div className={cn(
                  'absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold',
                  tier.popular
                    ? 'bg-brand-green text-white'
                    : 'bg-brand-yellow/20 text-brand-yellow'
                )}>
                  {tier.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-1">
                  {tier.price}
                </div>
                {tier.priceSubtext && (
                  <p className="text-sm text-gray-500">{tier.priceSubtext}</p>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold transition-all min-h-[56px] text-base shadow-lg',
                  tier.popular
                    ? 'bg-brand-green text-white hover:bg-brand-green/90 shadow-brand-green/20'
                    : 'bg-white/10 text-white hover:bg-white/20'
                )}
                aria-label={`${tier.cta} for ${tier.name}`}
              >
                {tier.cta}
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} className="text-center mt-8">
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Exact pricing depends on your current setup, market, and ad spend level. 
          The audit call is where we figure out the right structure — free, no commitment.
        </p>
      </ScrollReveal>
    </div>
  );
};

export { PricingCards };
