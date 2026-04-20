"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  OfferIcon,
  FunnelIcon,
  AutomationIcon,
  AdsIcon,
  AnalyticsIcon,
  PulsingDot 
} from './lottie-icons';

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
    label: 'Offer Creation', 
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
    label: 'GHL + Automation', 
    sectionId: 'layer-3',
    IconComponent: AutomationIcon,
    color: 'brand-yellow'
  },
  { 
    id: 'campaigns', 
    num: '04', 
    label: 'Meta Campaigns', 
    sectionId: 'layer-4',
    IconComponent: AdsIcon,
    color: 'brand-orange'
  },
  { 
    id: 'tracking', 
    num: '05', 
    label: 'Conversion Tracking', 
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
  const barRef = useRef<HTMLDivElement>(null);
  const originalTop = useRef<number>(0);

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if bar should be sticky
      if (barRef.current) {
        const rect = barRef.current.getBoundingClientRect();
        if (originalTop.current === 0 && rect.top > 0) {
          originalTop.current = rect.top + window.scrollY;
        }
        setIsSticky(window.scrollY > originalTop.current - 80);
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
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "py-4 transition-all duration-300 z-40",
        isSticky 
          ? "fixed top-[72px] left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-brand-orange/20 shadow-xl" 
          : "relative bg-black/50 border-y border-black/10",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar sm:justify-center items-center gap-2 md:gap-3 py-4 scroll-smooth px-4 w-full after:content-[''] after:w-4 after:shrink-0 sm:after:hidden">
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
                  "relative flex shrink-0 items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                    : "bg-black/5 text-muted-foreground hover:bg-black/10 hover:text-white border border-black/10"
                )}
              >
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-brand-orange rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {/* Lottie Icon */}
                  <span className="hidden md:block">
                    <IconComponent size={24} />
                  </span>
                  <span className={cn(
                    "font-bold",
                    activeTab === tab.id ? "text-white" : "text-brand-orange"
                  )}>
                    {tab.num}
                  </span>
                  <span className="hidden sm:inline">—</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>

                {/* Pulsing dot for active */}
                {activeTab === tab.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1"
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
  );
};

// Progress indicator showing which layer you're on
export const SystemProgressIndicator: React.FC<{ className?: string }> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div 
      className={cn("fixed top-[72px] left-0 right-0 h-1 bg-brand-dark z-50", className)}
    >
      <motion.div
        style={{ width }}
        className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange"
      />
    </motion.div>
  );
};

// Floating action button for quick navigation
export const FloatingSystemNav: React.FC = () => {
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            className="absolute bottom-16 right-0 bg-brand-dark border border-brand-orange/30 rounded-xl p-2 shadow-xl min-w-[220px]"
          >
            {systemTabs.map((tab, index) => {
              const IconComponent = tab.IconComponent;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(tab.sectionId)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-muted-foreground hover:text-white hover:bg-black/5 rounded-lg transition-colors group"
                >
                  <IconComponent size={28} />
                  <div>
                    <span className="text-brand-orange font-bold mr-2">{tab.num}</span>
                    <span className="text-sm">{tab.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-orange text-white rounded-full shadow-lg shadow-brand-orange/30 flex items-center justify-center"
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
