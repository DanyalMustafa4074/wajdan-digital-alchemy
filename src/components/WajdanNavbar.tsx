
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function WajdanNavbar({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', url: '#system' },
    { name: 'Results', url: '#results' },
    { name: 'Pricing', url: '#pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-card border-x-0 border-t-0 border-b border-white/10 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-6",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo - Using actual image */}
            <a href="/" className="flex items-center gap-2 group" aria-label="Home">
              <motion.img
                src="/Wajdan Logo light.png"
                alt="Wajdan"
                className="h-8 md:h-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
                </a>
              ))}
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-foreground text-sm font-semibold rounded-lg hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25"
              >
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 -mr-2 text-foreground hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center min-w-[48px] min-h-[48px]"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-background/98 backdrop-blur-lg border-b border-brand-orange/20 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-white/5 transition-colors text-lg font-medium py-3 px-4 rounded-lg flex items-center disabled:opacity-50 min-h-[48px]"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange/90 text-foreground font-semibold rounded-xl mt-6 shadow-lg shadow-brand-orange/20 transition-all min-h-[56px] text-lg"
              >
                Book Free Audit
                <ArrowRight className="w-5 h-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default WajdanNavbar;
