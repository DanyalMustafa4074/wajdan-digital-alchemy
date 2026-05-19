"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/ui/transition-link";

function WajdanNavbar({ className, theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "What you're missing?", url: '/services' },
    { name: 'About', url: '/about' },
    { name: 'Results', url: '/#results' },
    { name: 'Pricing', url: '/#pricing' },
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
            ? "bg-[#fafaf8]/90 backdrop-blur-lg border-b border-neutral-200 py-3 shadow-sm"
            : "bg-transparent py-5",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <TransitionLink to="/" className="flex items-center gap-2 group vt-logo" aria-label="Home">
              <motion.img
                src={theme === "dark" && !isScrolled ? "/Wajdan%20Logo%20light.png" : "/Wajdan%20Logo%20dark.png"}
                alt="Wajdan"
                className="h-8 md:h-10 w-auto"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
            </TransitionLink>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.name}
                  to={item.url}
                  className={cn(
                    "transition-colors text-sm font-bold relative group uppercase tracking-wide",
                    theme === "dark" && !isScrolled ? "text-neutral-200 hover:text-white" : "text-neutral-700 hover:text-[#1A1110]"
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E54D2E] transition-all group-hover:w-full" />
                </TransitionLink>
              ))}

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "vt-cta inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black uppercase tracking-wider shadow-[0_4px_0_0_#E54D2E] hover:shadow-none hover:translate-y-1 transition-all",
                  theme === "dark" && !isScrolled ? "bg-[#fafaf8] text-[#1A1110]" : "bg-[#140E0E] text-[#fafaf8]"
                )}
              >
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-3 -mr-2 rounded-lg transition-colors flex items-center justify-center min-w-[48px] min-h-[48px]",
                theme === "dark" && !isScrolled ? "text-white hover:bg-neutral-800" : "text-[#1A1110] hover:bg-neutral-100"
              )}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed inset-x-0 z-40 bg-[#fafaf8]/98 backdrop-blur-lg border-b border-neutral-200 md:hidden",
              isScrolled ? "top-[56px]" : "top-[72px]"
            )}
          >
            <nav className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.name}
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:bg-white transition-colors text-base leading-loose font-bold uppercase tracking-wide py-3 px-4 rounded-lg text-[#1A1110] min-h-[48px] flex items-center"
                >
                  {item.name}
                </TransitionLink>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[#140E0E] text-white font-black uppercase tracking-wider mt-4 shadow-[0_4px_0_0_#E54D2E] min-h-[56px] text-base"
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
