import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Target, Plus, Smartphone, Zap } from 'lucide-react';

const FloatingLogo = ({
  icon: Icon,
  color,
  top,
  left,
  delay,
  duration,
}: {
  icon: React.ElementType;
  color: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="absolute hidden md:flex items-center justify-center p-3 rounded-2xl bg-[#1a1a18] border border-neutral-800 shadow-2xl opacity-60 hover:opacity-100 transition-opacity z-0"
    style={{ top, left }}
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15] }}
    transition={{
      repeat: Infinity,
      duration,
      delay,
      ease: "easeInOut"
    }}
  >
    <Icon className={`w-8 h-8 ${color}`} />
  </motion.div>
);

export const FinalCTA = () => {
  return (
    <section className="relative py-32 bg-[#111110] overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 border-b border-neutral-800">
      
      {/* Logos Floating in Background */}
      <FloatingLogo icon={Facebook} color="text-blue-500" top="15%" left="10%" delay={0} duration={4.5} />
      <FloatingLogo icon={Instagram} color="text-pink-500" top="20%" left="45%" delay={1} duration={5} />
      <FloatingLogo icon={Target} color="text-red-500" top="10%" left="80%" delay={0.5} duration={4} />
      <FloatingLogo icon={Youtube} color="text-red-600" top="70%" left="85%" delay={1.5} duration={5.5} />
      <FloatingLogo icon={Zap} color="text-yellow-500" top="80%" left="30%" delay={0.8} duration={4.8} />
      <FloatingLogo icon={Smartphone} color="text-[#cf5230]" top="60%" left="12%" delay={2} duration={6} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#fafaf8] uppercase tracking-tighter leading-[0.9] mb-8"
        >
          I Guess What We're <br/>
          Trying To Say Is That You <br/>
          Should <span className="text-white">Hit The Damn</span>
          <br/> Button
        </motion.h2>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          className="inline-block mt-4 bg-[#8cc63f] hover:bg-[#7ebd34] text-black font-black uppercase text-xl md:text-3xl tracking-tight py-6 px-12 md:px-16 rounded shadow-[0_0_40px_rgba(140,198,63,0.3)] transition-all"
        >
          HIT THE DAMN BUTTON
        </motion.a>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
    </section>
  );
};
