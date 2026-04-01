"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollReveal } from './scroll-reveal';
import { Target, Video, Zap, Megaphone, TrendingUp, Search, Users, FileText, MessageSquare, TestTube, ClipboardCheck, Palette, PenTool, FormInput, Calendar, Play, Mail, Clock, Bell, RefreshCw, BarChart3, Lightbulb, Layers, FlaskConical, Eye, UserPlus, LineChart, ArrowRight } from 'lucide-react';

interface LayerIcon {
  icon: React.ReactNode;
  label: string;
}

interface SystemLayer {
  number: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  icons: LayerIcon[];
  stat?: { value: string; label: string };
}

const systemLayers: SystemLayer[] = [
  {
    number: '01',
    title: 'Offer Creation',
    icon: <Target className="w-8 h-8" />,
    color: '#FF6B35',
    bgColor: 'rgba(255,107,53,0.1)',
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
    icon: <Video className="w-8 h-8" />,
    color: '#57A773',
    bgColor: 'rgba(87,167,115,0.1)',
    icons: [
      { icon: <Play className="w-5 h-5" />, label: 'VSL' },
      { icon: <Palette className="w-5 h-5" />, label: 'Design' },
      { icon: <PenTool className="w-5 h-5" />, label: 'Copy' },
      { icon: <FormInput className="w-5 h-5" />, label: 'Form' },
      { icon: <Calendar className="w-5 h-5" />, label: 'Booking' },
      { icon: <Video className="w-5 h-5" />, label: 'Thanks' },
    ],
    stat: { value: '3×', label: 'Booking Rate' },
  },
  {
    number: '03',
    title: 'GHL + Automation',
    icon: <Zap className="w-8 h-8" />,
    color: '#F6E27F',
    bgColor: 'rgba(246,226,127,0.1)',
    icons: [
      { icon: <Layers className="w-5 h-5" />, label: 'Pipeline' },
      { icon: <Mail className="w-5 h-5" />, label: 'Instant' },
      { icon: <Clock className="w-5 h-5" />, label: 'Nurture' },
      { icon: <Bell className="w-5 h-5" />, label: 'Reminders' },
      { icon: <RefreshCw className="w-5 h-5" />, label: 'Reactivate' },
      { icon: <BarChart3 className="w-5 h-5" />, label: 'Track' },
    ],
    stat: { value: '18s', label: 'Response' },
  },
  {
    number: '04',
    title: 'Meta Campaigns',
    icon: <Megaphone className="w-8 h-8" />,
    color: '#264653',
    bgColor: 'rgba(38,70,83,0.2)',
    icons: [
      { icon: <Lightbulb className="w-5 h-5" />, label: 'Strategy' },
      { icon: <Layers className="w-5 h-5" />, label: 'Architect' },
      { icon: <FlaskConical className="w-5 h-5" />, label: 'Test' },
      { icon: <Eye className="w-5 h-5" />, label: 'Optimize' },
      { icon: <Users className="w-5 h-5" />, label: 'Retarget' },
      { icon: <BarChart3 className="w-5 h-5" />, label: 'Report' },
    ],
    stat: { value: '40%', label: 'Cost Drop' },
  },
  {
    number: '05',
    title: 'Conversion Loop',
    icon: <TrendingUp className="w-8 h-8" />,
    color: '#FF6B35',
    bgColor: 'rgba(255,107,53,0.1)',
    icons: [
      { icon: <Zap className="w-5 h-5" />, label: 'API' },
      { icon: <Target className="w-5 h-5" />, label: 'Events' },
      { icon: <RefreshCw className="w-5 h-5" />, label: 'Loop' },
      { icon: <LineChart className="w-5 h-5" />, label: 'Attribute' },
      { icon: <UserPlus className="w-5 h-5" />, label: 'Lookalike' },
      { icon: <BarChart3 className="w-5 h-5" />, label: 'Review' },
    ],
    stat: { value: '84%', label: 'Show Rate' },
  },
];

const SystemTimeline: React.FC<{ className?: string }> = ({ className }) => {
  const [activeLayer, setActiveLayer] = useState<string>('01');

  return (
    <div className={cn('py-20', className)}>
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Five Layers. <span className="text-brand-orange">One System.</span>
        </h2>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto px-4">
        {/* Visual Layer Selector - Horizontal on Desktop */}
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar sm:justify-center items-center gap-3 mb-12 py-4 w-full -mx-4 px-4 sm:mx-0 sm:px-0 after:content-[''] after:w-px after:shrink-0 sm:after:hidden">
          {systemLayers.map((layer, index) => (
            <motion.button
              key={layer.number}
              onClick={() => setActiveLayer(layer.number)}
              className={cn(
                'relative flex shrink-0 items-center gap-3 px-5 py-3 rounded-full border transition-all',
                activeLayer === layer.number
                  ? 'border-transparent'
                  : 'border-white/10 bg-brand-dark/50 hover:border-white/20'
              )}
              style={{
                backgroundColor: activeLayer === layer.number ? layer.bgColor : undefined,
                borderColor: activeLayer === layer.number ? layer.color : undefined,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span 
                className="text-sm font-bold"
                style={{ color: activeLayer === layer.number ? layer.color : '#9CA3AF' }}
              >
                {layer.number}
              </span>
              <span className={cn(
                'font-medium',
                activeLayer === layer.number ? 'text-white' : 'text-gray-400'
              )}>
                {layer.title}
              </span>
              {activeLayer === layer.number && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: layer.color }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Layer Visual Display */}
        <AnimatePresence mode="wait">
          {systemLayers.filter(l => l.number === activeLayer).map(layer => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border p-8 md:p-12"
              style={{ 
                backgroundColor: layer.bgColor,
                borderColor: `${layer.color}40`,
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left: Main Icon + Title */}
                <div className="flex flex-col items-center text-center md:w-1/4">
                  <motion.div 
                    className="w-24 h-24 rounded-3xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: layer.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-white">{layer.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                  {layer.stat && (
                    <div className="mt-4">
                      <div className="text-4xl font-bold" style={{ color: layer.color }}>
                        {layer.stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{layer.stat.label}</div>
                    </div>
                  )}
                </div>

                {/* Right: Icon Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {layer.icons.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.15, y: -5 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
                      >
                        <div style={{ color: layer.color }}>{item.icon}</div>
                        <span className="text-xs text-gray-400">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Flow Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            {systemLayers.map((layer, idx) => (
              <React.Fragment key={layer.number}>
                <motion.div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all',
                    activeLayer === layer.number 
                      ? 'text-white' 
                      : 'bg-white/5 text-gray-500 hover:bg-white/10'
                  )}
                  style={{
                    backgroundColor: activeLayer === layer.number ? layer.color : undefined,
                  }}
                  onClick={() => setActiveLayer(layer.number)}
                  whileHover={{ scale: 1.2 }}
                >
                  {layer.number}
                </motion.div>
                {idx < systemLayers.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple 5-layer visual summary
const SystemLayersSummary: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('py-12', className)}>
      <ScrollReveal className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Five Layers. Zero Gaps.
        </h3>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto px-4">
        {systemLayers.map((layer, index) => (
          <React.Fragment key={layer.number}>
            <ScrollReveal delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.1, y: -8 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer border border-white/10"
                style={{ backgroundColor: layer.bgColor }}
              >
                <div style={{ color: layer.color }}>{layer.icon}</div>
                <span className="text-[10px] md:text-xs text-gray-400 text-center px-1">{layer.title.split(' + ')[0]}</span>
              </motion.div>
            </ScrollReveal>
            {index < systemLayers.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-orange"
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
