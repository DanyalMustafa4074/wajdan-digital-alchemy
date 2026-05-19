import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { Target, MonitorPlay, MousePointerClick, MessageSquare, BarChart } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "The Offer",
    description: "We craft an irresistible, no-brainer offer that makes your prospects feel stupid saying no. This is the foundation of the entire system.",
    icon: Target,
    imagePlaceholder: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "02",
    title: "Landing Page & VSL",
    description: "A high-converting landing page paired with a compelling Video Sales Letter that educates, builds trust, and drives action.",
    icon: MonitorPlay,
    imagePlaceholder: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "03",
    title: "Targeted Meta Ads",
    description: "We deploy aggressive, highly-targeted Meta campaigns that find your exact ideal buyers and forcefully grab their attention.",
    icon: MousePointerClick,
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "04",
    title: "Relentless Retargeting",
    description: "We stay top-of-mind with omnipresent retargeting campaigns, bringing back the 95% of traffic that didn't convert on the first visit.",
    icon: MessageSquare,
    imagePlaceholder: "https://images.unsplash.com/photo-1533750349088-cd071a92f512?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "05",
    title: "Data & Optimization",
    description: "We ruthlessly track every metric and continuously optimize the funnel to drop your CPA and maximize your ROAS.",
    icon: BarChart,
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  }
];

export const FiveStepSystem = () => {
  return (
    <section className="py-24 bg-[#140E0E] text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-[#E54D2E] tracking-tighter mb-6">
              Our 5-Step Alchemy System
            </h2>
            <p className="text-xl text-gray-400">
              This isn't theory. This is the exact battle-tested sequence we use to turn cold traffic into paying clients on repeat.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto space-y-24 flex flex-col">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <ScrollReveal key={step.id}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : ''}`}>
                  
                  {/* Text Content */}
                  <div className={`space-y-6 ${isEven ? 'md:order-2' : ''}`}>
                     <div className="flex items-center gap-4">
                       <span className="text-5xl font-black text-[#E54D2E]/20">{step.id}</span>
                       <h3 className="text-3xl font-bold">{step.title}</h3>
                     </div>
                     <p className="text-xl text-gray-400 leading-loose border-l-2 border-[#E54D2E] pl-6">
                       {step.description}
                     </p>
                  </div>
                  
                  {/* Image/Mockup Placeholder */}
                  <div className={`relative ${isEven ? 'md:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black">
                       <div className="aspect-[4/3] relative">
                         <img src={step.imagePlaceholder} className="w-full h-full object-cover opacity-80" alt={step.title} />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <step.icon className="w-12 h-12 text-[#E54D2E] mb-4" />
                         </div>
                       </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
