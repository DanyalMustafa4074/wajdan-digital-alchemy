"use client";

import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const testimonials = [
  {
    id: 1,
    name: "Call Review",
    label: "Client Call",
    src: "https://assets.cdn.filesafe.space/tO3gTsDSPj1E3pHcRoWR/media/6a2467c26a06f03d44888ab6.webm",
  },
  {
    id: 2,
    name: "Zohaib",
    label: "Testimonial",
    src: "https://assets.cdn.filesafe.space/tO3gTsDSPj1E3pHcRoWR/media/6a2467c2f607d4002ba8c37c.webm",
  },
  {
    id: 3,
    name: "Nam",
    label: "Testimonial",
    src: "https://assets.cdn.filesafe.space/tO3gTsDSPj1E3pHcRoWR/media/6a2467c2fc95b245499e7b2e.webm",
  },
  {
    id: 4,
    name: "HCSG",
    label: "Testimonial",
    src: "https://assets.cdn.filesafe.space/tO3gTsDSPj1E3pHcRoWR/media/6a2467c2f607d4002ba8c37e.webm",
  },
];

const TestimonialVideo = ({ t }: { t: (typeof testimonials)[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const handleMetadata = () => {
    const v = videoRef.current;
    if (v && !playing) v.currentTime = 0.001;
  };

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl bg-black border border-white/10 aspect-[9/16]"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={t.src}
        className="w-full h-full object-cover"
        preload="metadata"
        playsInline
        onLoadedMetadata={handleMetadata}
        onEnded={() => setPlaying(false)}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        <div className="w-16 h-16 bg-[#E54D2E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(229,77,46,0.5)]">
          {playing ? (
            <Pause className="w-7 h-7 text-white fill-white" />
          ) : (
            <Play className="w-8 h-8 text-white fill-white pl-1" />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <p className="text-[#E54D2E] text-xs font-black uppercase tracking-widest mb-1">{t.label}</p>
        <p className="text-white font-bold">{t.name}</p>
      </div>
    </div>
  );
};

export const VideoTestimonials = () => {
  return (
    <section className="py-14 bg-[#140E0E] relative text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-6 text-[#E54D2E]">
              Don't Just Take Our Word For It
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
              See what happens when you plug our system into your business. Real results from real people.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 0.1}>
              <TestimonialVideo t={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
