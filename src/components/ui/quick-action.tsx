import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Target, MonitorPlay, Zap, Megaphone, BarChart } from 'lucide-react';

const menuItems = [
  { id: "01", label: "Offer", icon: Target, href: "#offer" },
  { id: "02", label: "Funnel + VSL", icon: MonitorPlay, href: "#funnel" },
  { id: "03", label: "Automation", icon: Zap, href: "#automation" },
  { id: "04", label: "Meta Ads", icon: Megaphone, href: "#meta-ads" },
  { id: "05", label: "Tracking", icon: BarChart, href: "#tracking" },
];

export const QuickAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-4 flex flex-col gap-3"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 bg-white text-black py-3 px-5 rounded-2xl shadow-lg hover:bg-gray-100 transition-colors min-w-[180px]"
              >
                <item.icon className="w-5 h-5 text-[#E54D2E]" />
                <span className="font-bold text-sm">{item.id}</span>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#E54D2E] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#b04324] transition-all hover:scale-105 active:scale-95"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" strokeWidth={3} />
          ) : (
            <Plus className="w-6 h-6" strokeWidth={3} />
          )}
        </motion.div>
      </button>
    </div>
  );
};
