import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Corp",
    result: "$100k+ in 30 Days",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "TechFlow",
    result: "Triple ROI on Ad Spend",
    thumbnail: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "GrowthX",
    result: "Scaled to 7 Figures",
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Sarah Williams",
    company: "Elevate",
    result: "500+ Qualified Leads",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  }
];

export const VideoTestimonials = () => {
  return (
    <section className="py-14 bg-[#140E0E] relative text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] mb-6 text-[#E54D2E]">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              See what happens when you plug our system into your business. Real results from real people.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 0.1}>
              <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-black border border-white/10 aspect-[9/16]">
                <img 
                  src={t.thumbnail} 
                  alt={t.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#E54D2E] rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(229,77,46,0.5)]">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Details */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-black text-[#E54D2E] uppercase mb-1">{t.result}</h3>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
