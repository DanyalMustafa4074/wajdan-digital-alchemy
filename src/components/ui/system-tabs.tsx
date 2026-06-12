"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Layers, Play, BarChart3, ShieldCheck, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  OfferIcon,
  FunnelIcon,
  AutomationIcon,
  AdsIcon,
  AnalyticsIcon,
  PulsingDot,
} from './system-layer-icons';

interface SystemTab {
  id: string;
  num: string;
  label: string;
  sectionId: string;
  IconComponent: React.FC<{ size?: number; className?: string }>;
  color: string;
}

const systemTabs: SystemTab[] = [
  { 
    id: 'offer', 
    num: '01', 
    label: 'Offer', 
    sectionId: 'layer-1',
    IconComponent: OfferIcon,
    color: 'brand-orange'
  },
  { 
    id: 'funnel', 
    num: '02', 
    label: 'Funnel + VSL', 
    sectionId: 'layer-2',
    IconComponent: FunnelIcon,
    color: 'brand-orange'
  },
  {
    id: 'automation',
    num: '03',
    label: 'Automation',
    sectionId: 'layer-3',
    IconComponent: AutomationIcon,
    color: 'brand-orange'
  },
  { 
    id: 'campaigns', 
    num: '04', 
    label: 'Meta Ads', 
    sectionId: 'layer-4',
    IconComponent: AdsIcon,
    color: 'brand-orange'
  },
  { 
    id: 'tracking', 
    num: '05', 
    label: 'Tracking', 
    sectionId: 'layer-5',
    IconComponent: AnalyticsIcon,
    color: 'brand-orange'
  },
];

interface SystemTabsBarProps {
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export const SystemTabsBar: React.FC<SystemTabsBarProps> = ({ className, onTabChange }) => {
  const [activeTab, setActiveTab] = useState('offer');
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to highlight active section and handle sticky state
  useEffect(() => {
    const handleScroll = () => {
      // Provide smooth transition when sticking
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Sticky if container reaches near the navbar (64px offset)
        setIsSticky(rect.top <= 64);
      }

      // Determine which section is in view
      const sections = systemTabs.map(tab => ({
        id: tab.id,
        element: document.getElementById(tab.sectionId)
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky header
      // scroll to precise location natively
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="w-full relative min-h-[88px] h-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "py-4 transition-all duration-300 z-[45]",
          isSticky
            ? "fixed top-[64px] left-0 right-0 bg-[#fafaf8]/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm"
            : "absolute top-0 left-0 right-0 bg-transparent border-y border-neutral-200",
          className
        )}
      >
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="flex flex-wrap items-center justify-start lg:justify-center gap-2 md:gap-3 py-2 px-4 w-full">
            {systemTabs.map((tab, index) => {
              const IconComponent = tab.IconComponent;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.sectionId, tab.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative flex shrink-0 items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 z-10 lg:px-2 lg:py-2 lg:gap-1 lg:text-[12px]",
                    activeTab === tab.id
                      ? "bg-[#E54D2E] text-white shadow-[0_4px_0_0_#111110]"
                      : "bg-white text-neutral-600 hover:text-[#1A1110] border border-neutral-200 hover:border-[#E54D2E]/40 shadow-sm"
                  )}
                >
                  {/* Active indicator */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#E54D2E] rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    {/* Lottie Icon */}
                    <span className="hidden md:block flex-shrink-0">
                      <IconComponent size={20} />
                    </span>
                    <span className={cn(
                      "font-black flex-shrink-0",
                      activeTab === tab.id ? "text-white" : "text-[#E54D2E]"
                    )}>
                      {tab.num}
                    </span>
                    <span className="hidden sm:inline flex-shrink-0">—</span>
                    <span className="hidden sm:inline flex-shrink-0">{tab.label}</span>
                  </span>

                  {/* Pulsing dot for active */}
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 z-50"
                    >
                      <PulsingDot color="bg-white" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Progress indicator showing which layer you're on
export const SystemProgressIndicator: React.FC<{ className?: string }> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Sits above the navbar so it never collides with the sticky tab bar.
  return (
    <motion.div
      className={cn("fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none", className)}
    >
      <motion.div
        style={{ width }}
        className="h-full bg-[#E54D2E] origin-left"
      />
    </motion.div>
  );
};

export interface FloatingNavItem {
  id: string;
  num: string;
  label: string;
  sectionId: string;
  Icon: React.FC<{ className?: string }>;
}

// Default nav items for the homepage
export const homeNavItems: FloatingNavItem[] = [
  { id: 'system',       num: '01', label: 'The System',   sectionId: 'system',       Icon: Layers       },
  { id: 'testimonials', num: '02', label: 'Testimonials', sectionId: 'testimonials', Icon: Play         },
  { id: 'results',      num: '03', label: 'Results',      sectionId: 'results',      Icon: BarChart3    },
  { id: 'guarantee',    num: '04', label: 'Guarantee',    sectionId: 'guarantee',    Icon: ShieldCheck  },
  { id: 'contact',      num: '05', label: 'Book a Call',  sectionId: 'contact',      Icon: CalendarCheck},
];

// Floating action button for quick navigation — accepts per-page navItems
export const FloatingSystemNav: React.FC<{ navItems?: FloatingNavItem[] }> = ({ navItems = homeNavItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white border border-neutral-200 shadow-xl min-w-[220px]"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item.sectionId)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-neutral-700 hover:bg-[#fafaf8] border-b border-neutral-100 last:border-0 transition-colors"
              >
                <item.Icon className="w-4 h-4 text-[#E54D2E] flex-shrink-0" />
                <span className="text-[#E54D2E] font-black text-sm mr-1">{item.num}</span>
                <span className="text-sm font-semibold text-[#1A1110]">{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#E54D2E] text-white rounded-full shadow-[0_6px_0_0_#111110] flex items-center justify-center"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl font-bold"
        >
          +
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default SystemTabsBar;
