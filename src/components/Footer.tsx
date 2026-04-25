import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111110] border-t border-[#cf5230]/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              className="inline-block mb-6"
            >
              <img
                src="/Wajdan%20Logo%20light.png"
                alt="Wajdan Digital Alchemy"
                className="h-10 w-auto"
              />
            </motion.a>
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-md text-sm md:text-base">
              Client Acquisition Systems for Immigration & Education Consultants.
              We build the complete infrastructure that turns Meta traffic into qualified,
              pre-nurtured, showed-up consultation bookings.
            </p>
            <div className="flex items-center gap-1 text-[#cf5230] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-neutral-500 text-sm">
              Trusted by consultancies across Europe, UAE & beyond
            </p>
          </div>

          <div>
            <h4 className="text-[#fafaf8] font-black uppercase tracking-wider mb-6 text-sm">Platform</h4>
            <ul className="space-y-3 text-neutral-400 text-sm md:text-base">
              <li><a href="/#system" className="hover:text-[#cf5230] transition-colors">How It Works</a></li>
              <li><a href="/#results" className="hover:text-[#cf5230] transition-colors">Results</a></li>
              <li><a href="/#pricing" className="hover:text-[#cf5230] transition-colors">Pricing</a></li>
              <li><a href="/services" className="hover:text-[#cf5230] transition-colors">Services</a></li>
              <li><a href="/#contact" className="hover:text-[#cf5230] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fafaf8] font-black uppercase tracking-wider mb-6 text-sm">Ready to Scale?</h4>
            <p className="text-neutral-400 mb-6 text-sm">
              Stop relying on referrals and start building a predictable client acquisition system.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#cf5230] text-white font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#fafaf8] hover:shadow-none hover:translate-y-1 transition-all"
            >
              Book Free Audit
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Partner stamps — King Kong style row near footer end */}
        <div className="border-t border-neutral-800 mt-16 pt-10">
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] mb-5 text-center md:text-left">
            We work the platforms that pay
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 mb-10 opacity-80">
            {['Meta Ads', 'Google Ads', 'GoHighLevel', 'TikTok Ads', 'YouTube Ads', 'Conversions API'].map((p) => (
              <span
                key={p}
                className="text-neutral-400 hover:text-[#cf5230] transition-colors text-sm font-black uppercase tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-neutral-900">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Wajdan Digital Alchemy. Client acquisition systems for consultancies.
            </p>
            <p className="text-[#cf5230] font-black tracking-widest text-sm">
              WAJDAN.CO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
