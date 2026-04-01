"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Check, X, ArrowRight, TrendingUp, Calendar, Users, Zap, Building, AlertCircle, Rocket } from 'lucide-react';

// More Visual Who Is This For Section
const WhoIsThisFor: React.FC<{ className?: string }> = ({ className }) => {
  const forYouIcons = [
    { icon: <Building className="w-6 h-6" />, label: 'Running Consultancy' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Want More Bookings' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Ready to Invest' },
    { icon: <Zap className="w-6 h-6" />, label: 'Want Complete System' },
    { icon: <Users className="w-6 h-6" />, label: 'Have Capacity' },
  ];

  const notForYouIcons = [
    { icon: <X className="w-6 h-6" />, label: 'Cheapest Leads Only' },
    { icon: <X className="w-6 h-6" />, label: 'No Follow-up Capacity' },
    { icon: <X className="w-6 h-6" />, label: 'Think Ads Are Problem' },
    { icon: <X className="w-6 h-6" />, label: 'Will Pause System' },
  ];

  return (
    <div className={cn('py-20', className)}>
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Is This <span className="text-brand-orange">For You</span>?
        </h2>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* For You - Icon Grid */}
        <ScrollReveal delay={0.1}>
          <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-8 h-full">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Perfect Fit</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {forYouIcons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-black/20 border border-brand-orange/10 hover:border-brand-orange/30 transition-all"
                >
                  <div className="text-brand-orange">{item.icon}</div>
                  <span className="text-sm text-gray-300 text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Not For You - Icon Grid */}
        <ScrollReveal delay={0.2}>
          <div className="bg-red-950/10 border border-red-500/20 rounded-2xl p-8 h-full">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400">Not For You</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {notForYouIcons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/10 hover:border-red-500/20 transition-all"
                >
                  <div className="text-red-400">{item.icon}</div>
                  <span className="text-sm text-gray-500 text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

// Visual Proof Section with big numbers
const ProofSection: React.FC<{ className?: string }> = ({ className }) => {
  const stats = [
    { value: '3×', label: 'Bookings', subtext: 'Same budget', color: '#FF6B35' },
    { value: '84%', label: 'Show Rate', subtext: 'vs 28% before', color: '#F6E27F' },
    { value: '40%', label: 'Cost Drop', subtext: 'Per booking', color: '#FF6B35' },
    { value: '18', label: 'In 30 Days', subtext: 'vs 4 before', color: '#57A773' },
  ];

  return (
    <div className={cn('py-20', className)}>
      <ScrollReveal className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-semibold mb-6">
          <TrendingUp className="w-4 h-4" />
          Real Results
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Proof.
        </h2>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.08, y: -10 }}
                className="bg-brand-dark/50 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `radial-gradient(circle at center, ${stat.color}15, transparent)` }}
                />
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2 relative z-10"
                  style={{ color: stat.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white font-medium text-sm mb-1 relative z-10">{stat.label}</div>
                <div className="text-gray-500 text-xs relative z-10">{stat.subtext}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

// Visual Final CTA
const FinalCTA: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-20 relative overflow-hidden', className)}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-orange/5 to-brand-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.15),transparent_60%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-brand-orange/20 flex items-center justify-center"
          >
            <Rocket className="w-12 h-12 text-brand-orange" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-brand-orange">Build the System</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(255,107,53,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-full sm:w-auto sm:inline-flex gap-3 px-8 py-5 min-h-[64px] bg-brand-orange text-white font-bold rounded-xl text-lg sm:text-xl transition-all shadow-2xl shadow-brand-orange/25"
          >
            Book Free Audit
            <ArrowRight className="w-6 h-6 flex-shrink-0" />
          </motion.a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 text-sm text-gray-500">
            {['30 minutes', 'No commitment', 'Specific to you'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-orange" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

// Visual Requirements Section
const RequirementsSection: React.FC<{ className?: string }> = ({ className }) => {
  const requirements = [
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Running Meta Ads' },
    { icon: <Building className="w-6 h-6" />, label: 'Real Service' },
    { icon: <Check className="w-6 h-6" />, label: 'Legit Business' },
  ];

  return (
    <div className={cn('py-16', className)}>
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <div className="bg-brand-dark/80 border border-brand-orange/20 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertCircle className="w-6 h-6 text-brand-orange" />
              <h3 className="text-xl font-bold text-white">Requirements</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {requirements.map((req, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-brand-orange/10 border border-brand-orange/20"
                >
                  <div className="text-brand-orange">{req.icon}</div>
                  <span className="text-white font-medium">{req.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export { WhoIsThisFor, ProofSection, FinalCTA, RequirementsSection };
