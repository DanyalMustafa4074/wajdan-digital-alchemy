import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
              Client Acquisition Systems for Education Consultancies.
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
              <li><a href="/about" className="hover:text-[#cf5230] transition-colors">About</a></li>
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

        {/* Social Links & Copyright */}
        <div className="border-t border-neutral-800 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Wajdan Digital Alchemy. Client acquisition systems for consultancies.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#cf5230] transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#cf5230] transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#cf5230] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#cf5230] transition-colors" aria-label="YouTube">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
