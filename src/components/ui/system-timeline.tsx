"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import {
  Search, Users, FileText, MessageSquare, TestTube, ClipboardCheck,
  Palette, PenTool, FormInput, Calendar, Play, Mail, Clock, Bell,
  RefreshCw, BarChart3, Lightbulb, Layers, FlaskConical, Eye,
  UserPlus, LineChart, ArrowRight, Target, Megaphone, Zap,
} from 'lucide-react';
import { TargetAnimation, FunnelAnimation, ZapAnimation, MegaphoneAnimation, ChartAnimation } from './animated-icons';

interface LayerIcon {
  icon: React.ReactNode;
  label: string;
}

interface SystemLayer {
  number: string;
  title: string;
  summaryIcon: React.ReactNode;
  animationType: 'target' | 'funnel' | 'zap' | 'megaphone' | 'chart';
  icons: LayerIcon[];
  stat?: { value: string; label: string };
}

// Single accent color across all layers — neutrals + brand rust.
const ACCENT = '#cf5230';
const ACCENT_BG = 'rgba(207, 82, 48, 0.08)';

const systemLayers: SystemLayer[] = [
  {
    number: '01',
    title: 'Offer Creation',
    summaryIcon: <Target className="w-6 h-6" />,
    animationType: 'target',
    icons: [
      { icon: <Search className="w-5 h-5" />, label: 'Research' },
      { icon: <Users className="w-5 h-5" />, label: 'Competitor' },
      { icon: <FileText className="w-5 h-5" />, label: 'Position' },
      { icon: <MessageSquare className="w-5 h-5" />, label: 'Message' },
      { icon: <TestTube className="w-5 h-5" />, label: 'Validate' },
      { icon: <ClipboardCheck className="w-5 h-5" />, label: 'Brief' },
    ],
    stat: { value: '100%', label: 'Foundation' },
  },
  {
    number: '02',
    title: 'Funnel + VSL',
    summaryIcon: <Play className="w-6 h-6" />,
    animationType: 'funnel',
    icons: [
      { icon: <Play className="w-5 h-5" />, label: 'VSL' },
      { icon: <Palette className="w-5 h-5" />, label: 'Design' },
      { icon: <PenTool className="w-5 h-5" />, label: 'Copy' },
      { icon: <FormInput className="w-5 h-5" />, label: 'Form' },
      { icon: <Calendar className="w-5 h-5" />, label: 'Booking' },
    ],
    stat: { value: '3×', label: 'Booking Rate' },
  },
  {
    number: '03',
    title: 'GHL + Automation',
    summaryIcon: <Zap className="w-6 h-6" />,
    animationType: 'zap',
    icons: [
      { icon: <Layers className="w-5 h-5" />, label: 'Pipeline' },
      { icon: <Mail className="w-5 h-5" />, label: 'Instant' },
      { icon: <Clock className="w-5 h-5" />, label: 'Nurture' },
      { icon: <Bell className="w-5 h-5" />, label: 'Reminders' },
      { icon: <RefreshCw className="w-5 h-5" />, label: 'Reactivate' },
    ],
    stat: { value: '18s', label: 'Response' },
  },
  {
    number: '04',
    title: 'Meta Campaigns',
    summaryIcon: <Megaphone className="w-6 h-6" />,
    animationType: 'megaphone',
    icons: [
      { icon: <Lightbulb className="w-5 h-5" />, label: 'Strategy' },
      { icon: <Layers className="w-5 h-5" />, label: 'Architect' },
      { icon: <FlaskConical className="w-5 h-5" />, label: 'Test' },
      { icon: <Eye className="w-5 h-5" />, label: 'Optimize' },
      { icon: <BarChart3 className="w-5 h-5" />, label: 'Report' },
    ],
    stat: { value: '40%', label: 'Cost Drop' },
  },
  {
    number: '05',
    title: 'Conversion Loop',
    summaryIcon: <LineChart className="w-6 h-6" />,
    animationType: 'chart',
    icons: [
      { icon: <RefreshCw className="w-5 h-5" />, label: 'Loop' },
      { icon: <LineChart className="w-5 h-5" />, label: 'Attribute' },
      { icon: <UserPlus className="w-5 h-5" />, label: 'Lookalike' },
      { icon: <BarChart3 className="w-5 h-5" />, label: 'Review' },
    ],
    stat: { value: '84%', label: 'Show Rate' },
  },
];

const AnimationComponents = {
  target: TargetAnimation,
  funnel: FunnelAnimation,
  zap: ZapAnimation,
  megaphone: MegaphoneAnimation,
  chart: ChartAnimation,
};

const SystemTimeline: React.FC<{ className?: string }> = ({ className }) => {
  const [activeLayer, setActiveLayer] = useState<string>('01');

  return (
    <div className={cn('py-20 bg-[#fafaf8]', className)}>
      <ScrollReveal className="text-center mb-12 px-4">
        <p className="text-[#cf5230] text-sm font-bold uppercase tracking-[0.2em] mb-4">The Wajdan System</p>
        <h2 className="text-4xl md:text-6xl font-black text-[#111110] uppercase tracking-tighter leading-none">
          Five Layers. <span className="text-[#cf5230]">One System.</span>
        </h2>
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
          Remove any one layer and the whole thing leaks. This is the complete sequence — built in this exact order, before traffic goes live.
        </p>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar sm:justify-center items-center gap-3 mb-12 py-4 px-4 w-full after:content-[''] after:w-4 after:shrink-0 sm:after:hidden">
          {systemLayers.map((layer) => {
            const isActive = activeLayer === layer.number;
            return (
              <motion.button
                key={layer.number}
                onClick={() => setActiveLayer(layer.number)}
                className={cn(
                  'relative flex shrink-0 items-center gap-3 px-5 py-3 rounded-full border-2 transition-all',
                  isActive
                    ? 'bg-[#cf5230] border-[#cf5230] text-white shadow-[0_4px_0_0_#111110]'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:border-[#cf5230]/40'
                )}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-black tracking-wider">{layer.number}</span>
                <span className="font-bold uppercase tracking-tight text-sm">{layer.title}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="px-4">
          <AnimatePresence mode="wait">
            {systemLayers.filter((l) => l.number === activeLayer).map((layer) => (
              <motion.div
                key={layer.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border-2 border-neutral-200 bg-white p-8 md:p-12 shadow-[0_8px_30px_rgba(17,17,16,0.06)]"
                style={{ backgroundImage: `radial-gradient(circle at 20% 0%, ${ACCENT_BG}, transparent 60%)` }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex flex-col items-center text-center md:w-1/4">
                    <motion.div
                      className="w-28 h-28 rounded-3xl flex items-center justify-center mb-4 bg-[#fafaf8] border border-neutral-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {(() => {
                        const AnimComponent = AnimationComponents[layer.animationType];
                        return <AnimComponent size={90} />;
                      })()}
                    </motion.div>
                    <span className="text-xs font-bold tracking-widest text-[#cf5230] uppercase mb-1">Layer {layer.number}</span>
                    <h3 className="text-2xl font-black text-[#111110] uppercase tracking-tight">{layer.title}</h3>
                    {layer.stat && (
                      <div className="mt-4">
                        <div className="text-4xl font-black text-[#cf5230]">{layer.stat.value}</div>
                        <div className="text-sm text-neutral-500 font-bold uppercase tracking-wider">{layer.stat.label}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                      {layer.icons.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08 }}
                          whileHover={{ scale: 1.08, y: -4 }}
                          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#fafaf8] border border-neutral-200 hover:border-[#cf5230]/40 transition-colors cursor-pointer"
                        >
                          <div style={{ color: ACCENT }}>{item.icon}</div>
                          <span className="text-xs text-neutral-600 font-semibold">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-2 text-neutral-500 text-sm">
              {systemLayers.map((layer, idx) => (
                <React.Fragment key={layer.number}>
                  <motion.button
                    type="button"
                    aria-label={`Go to layer ${layer.number}: ${layer.title}`}
                    onClick={() => setActiveLayer(layer.number)}
                    whileHover={{ scale: 1.15 }}
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center text-xs font-black cursor-pointer transition-all border-2',
                      activeLayer === layer.number
                        ? 'bg-[#cf5230] border-[#cf5230] text-white'
                        : 'bg-white border-neutral-200 text-neutral-500 hover:border-[#cf5230]/40'
                    )}
                  >
                    {layer.number}
                  </motion.button>
                  {idx < systemLayers.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SystemLayersSummary: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-12 bg-[#fafaf8]', className)}>
      <ScrollReveal className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-[#111110] uppercase tracking-tight">
          Five Layers. <span className="text-[#cf5230]">Zero Gaps.</span>
        </h3>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto px-4">
        {systemLayers.map((layer, index) => (
          <React.Fragment key={layer.number}>
            <ScrollReveal delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.08, y: -6 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer bg-white border-2 border-neutral-200 hover:border-[#cf5230]/40 transition-colors"
              >
                <div className="text-[#cf5230]">{layer.summaryIcon}</div>
                <span className="text-[10px] md:text-xs text-neutral-600 font-bold text-center px-1">
                  {layer.title.split(' + ')[0]}
                </span>
              </motion.div>
            </ScrollReveal>
            {index < systemLayers.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#cf5230]"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { SystemTimeline, SystemLayersSummary };
