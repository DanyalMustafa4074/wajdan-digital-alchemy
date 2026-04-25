import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { ArrowRight, Trophy, Target, CheckCircle, AlertCircle, ShieldAlert, BadgeCheck, Facebook, Instagram, Youtube, Plus, Smartphone, Zap, Monitor, Globe, BarChart3, Database } from 'lucide-react';

export const ProofSection = () => {
  const metrics = [
    {
      value: '3×',
      title: 'More Qualified Bookings',
      icon: <Trophy className="w-12 h-12" strokeWidth={1.5} />,
      quote:
        '"Within 60 days of the new offer and VSL going live, our sales team\'s closing rate jumped because the objections were handled before the call even started."',
    },
    {
      value: '70%',
      title: 'Avg. Show-Up Rate',
      icon: <Target className="w-12 h-12" strokeWidth={1.5} />,
      quote:
        '"The automated SMS and email nurture sequence completely eliminated the \'ghosting\' problem we had with our previous generic agency."',
    },
  ];

  return (
    <div className="py-24 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-[#111110] mb-6 uppercase tracking-tighter leading-none">
            Proof<span className="text-[#cf5230]">!</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <p className="text-base md:text-lg font-black text-white max-w-3xl px-6 py-3 bg-[#cf5230] -rotate-1 shadow-[0_8px_0_0_#111110] uppercase tracking-wider">
              Immigration & Education consultancy funnels we've built — and what happened after.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.value} delay={0.1 * (i + 1)}>
              <div className="bg-white border-2 border-neutral-200 p-10 shadow-[8px_8px_0_0_#cf5230] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-7xl font-black text-[#cf5230] uppercase tracking-tighter">{m.value}</h3>
                  <div className="text-neutral-300 group-hover:text-[#cf5230] transition-colors">{m.icon}</div>
                </div>

                <p className="text-2xl font-black text-[#111110] mb-6 uppercase tracking-tight">{m.title}</p>
                <div className="h-1 w-16 bg-[#cf5230] mb-6" />

                <p className="text-neutral-600 font-medium text-lg italic leading-relaxed">{m.quote}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhoIsThisFor = () => {
  const fits = [
    'You run an immigration or education consultancy already getting leads — but far fewer qualified consultations than you\'re paying for',
    'You\'ve been burned by at least one agency that promised results and delivered Monday morning excuses',
    'You want to measure marketing by booked calls and show rates — not impressions, clicks, and CPL',
    'You\'re ready to invest in a complete system — not another month of hoping the ads improve on their own',
  ];

  const noFits = [
    'You\'re looking for the cheapest leads possible regardless of quality, intent, or wasted time chasing them',
    'You have no capacity to follow up with incoming enquiries — automated or otherwise',
    'You think the problem is the creatives and all you need is better-looking ads',
    'You\'re not willing to let a system do the work your staff has been forgetting to do',
  ];

  return (
    <section className="py-24 bg-[#fafaf8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#111110] mb-6 uppercase tracking-tight">
            Who This Is <span className="text-[#cf5230] border-b-4 border-[#cf5230] pb-1">For</span>.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
            And who should probably close this tab right now.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white border-2 border-neutral-200 p-8 h-full shadow-[8px_8px_0_0_#cf5230]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#cf5230]/10 rounded-full flex items-center justify-center border-2 border-[#cf5230]/30">
                  <BadgeCheck className="w-6 h-6 text-[#cf5230]" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-[#111110] uppercase tracking-wider">Perfect Fit</h3>
              </div>
              <ul className="space-y-5">
                {fits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#cf5230] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-700 font-medium text-base md:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#111110] border-2 border-[#111110] p-8 h-full shadow-[8px_8px_0_0_#cf5230]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30">
                  <ShieldAlert className="w-6 h-6 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Close This Tab If</h3>
              </div>
              <ul className="space-y-5">
                {noFits.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-[#cf5230] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-neutral-300 font-medium text-base md:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export const RequirementsSection = () => {
  return null;
};

// Note: Lucide icons for background animation
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
    className="absolute hidden md:flex items-center justify-center w-16 h-16 rounded-3xl bg-[#1a1a18] border border-neutral-800 shadow-2xl opacity-60 hover:opacity-100 transition-opacity z-0"
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
    <Icon className={`w-8 h-8 ${color}`} strokeWidth={2} />
  </motion.div>
);

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#111110] overflow-hidden flex flex-col justify-center items-center px-4 md:px-6">
      
      {/* Logos Floating in Background */}
      <FloatingLogo icon={Facebook} color="text-blue-500" top="15%" left="10%" delay={0} duration={4.5} />
      <FloatingLogo icon={Instagram} color="text-pink-500" top="20%" left="45%" delay={1} duration={5} />
      <FloatingLogo icon={Target} color="text-red-500" top="10%" left="80%" delay={0.5} duration={4} />
      <FloatingLogo icon={Youtube} color="text-red-600" top="70%" left="85%" delay={1.5} duration={5.5} />
      <FloatingLogo icon={Database} color="text-yellow-500" top="80%" left="30%" delay={0.8} duration={4.8} />
      <FloatingLogo icon={Monitor} color="text-[#cf5230]" top="60%" left="12%" delay={2} duration={6} />
      <FloatingLogo icon={Globe} color="text-teal-500" top="35%" left="85%" delay={0.3} duration={4.1} />
      <FloatingLogo icon={BarChart3} color="text-orange-500" top="85%" left="60%" delay={1.2} duration={5.2} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-[#fafaf8] uppercase tracking-tighter leading-[0.9] mb-12">
            I Guess What We're <br/>
            Trying To Say Is That You <br/>
            Should Hit The Damn<br/>
            Button
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="flex flex-col items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#8cc63f] hover:bg-[#7ebd34] text-black font-black uppercase text-xl md:text-3xl tracking-tight py-6 px-12 md:px-16 rounded shadow-[0_0_40px_rgba(140,198,63,0.3)] transition-all"
          >
            HIT THE DAMN BUTTON
          </motion.a>
        </ScrollReveal>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
    </section>
  );
};
