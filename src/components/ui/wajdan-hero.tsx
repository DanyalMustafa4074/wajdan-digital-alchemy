import { ArrowRight, PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UrgencyPopover } from "@/components/ui/urgency-popover";

export const WajdanHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-16">
      {/* Absolute Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle grid pattern for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Niche Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-[#cf5230] uppercase bg-orange-50 border border-[#cf5230]/30 shadow-sm animate-fade-in">
          For Immigration & Education Consultancies
        </div>

        {/* Main Headline - Maximum Impact King Kong Style */}
        <h1 className="vt-hero-headline text-4xl md:text-6xl lg:text-7xl font-black text-foreground max-w-5xl tracking-tighter leading-[1.05] mb-6 animate-slide-up animation-delay-100 uppercase">
          We Build The Most <span className="text-[#cf5230]">Ruthless & Effective System</span> for Rapid Scaling of Consultation Firms on Planet Earth <span className="text-gray-400 line-through decoration-red-600">— In 60 Days.</span>
        </h1>

        {/* Subheadline - Contrast value prop */}
        <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mb-12 animate-slide-up animation-delay-200 leading-relaxed">
          While every other agency sells you leads and disappears — we build the complete infrastructure that turns Meta traffic into qualified, pre-nurtured, showed-up consultation bookings. <br/><span className="font-bold px-2 py-1 bg-yellow-200/50 mt-2 inline-block -rotate-1">Or we work for free.</span>
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-2xl mb-16 animate-slide-up animation-delay-300">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-foreground bg-white border-2 border-slate-200 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none hover:border-brand-orange transition-all">
                <PlayCircle className="w-6 h-6 text-[#cf5230]" />
                <span>Watch: How The Wajdan System Works</span>
                <span className="text-sm font-medium text-slate-500">— 3 min</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none shadow-none">
              <div className="aspect-video w-full bg-[#111110] overflow-hidden shadow-2xl relative">
                {/* Dummy looping placeholder video — swap src for the real VSL when available */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/placeholder.svg"
                  src="https://cdn.coverr.co/videos/coverr-typing-on-the-laptop-2330/1080p.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 pointer-events-none">
                  <div>
                    <p className="text-[#cf5230] text-xs font-black uppercase tracking-[0.2em] mb-1">
                      Wajdan System Walkthrough
                    </p>
                    <p className="text-white text-sm md:text-base font-bold">
                      How we build the complete acquisition machine — in 3 minutes.
                    </p>
                  </div>
                  <span className="bg-[#cf5230] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5">
                    Demo
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a
            href="#contact"
            className="vt-cta group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white bg-[#111110] shadow-[0_4px_0_0_#cf5230] hover:bg-[#cf5230] hover:shadow-none hover:translate-y-1 transition-all uppercase tracking-wide"
          >
            <span>Show Me What's Broken — Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Native popover urgency notice */}
        <div className="mb-12 -mt-4 animate-slide-up animation-delay-300">
          <UrgencyPopover />
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-4 pt-10 border-t-2 border-gray-200/60 w-full max-w-5xl animate-slide-up animation-delay-400">
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">60-day booking quality commitment</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">No long-term contracts</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">Based in Europe</span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="w-8 h-1 bg-brand-orange mb-1"></span>
            <span className="text-sm md:text-base font-bold text-foreground text-center uppercase tracking-tight">Built for consultation firms only</span>
          </div>
        </div>

      </div>
    </section>
  );
};
