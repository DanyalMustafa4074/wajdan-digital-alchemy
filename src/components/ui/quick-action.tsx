import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Phone, MessageSquare, Mail } from 'lucide-react';

export const QuickAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 left-0 mb-4 flex flex-col gap-3"
          >
            <a href="tel:+123456789" className="flex items-center gap-3 bg-[#111110] text-white py-2 px-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors">
              <span className="text-sm font-bold">Call Us</span>
              <Phone className="w-4 h-4 text-[#cf5230]" />
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 bg-[#111110] text-white py-2 px-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors">
              <span className="text-sm font-bold">Message</span>
              <MessageSquare className="w-4 h-4 text-[#cf5230]" />
            </a>
            <a href="mailto:hello@wajdan.co" className="flex items-center gap-3 bg-[#111110] text-white py-2 px-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors">
              <span className="text-sm font-bold">Email</span>
              <Mail className="w-4 h-4 text-[#cf5230]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#cf5230] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#b04324] transition-all hover:scale-105 active:scale-95"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-6 h-6" strokeWidth={3} />
        </motion.div>
      </button>
    </div>
  );
};
