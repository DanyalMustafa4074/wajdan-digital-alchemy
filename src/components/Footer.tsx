"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#140E0E] border-t border-[#E54D2E]/30 py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              className="inline-block mb-6"
            >
              <Image
                src="/wajdan-logo-light.webp"
                alt="Wajdan Digital Alchemy"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </motion.a>
            <p className="text-neutral-400 mb-6 leading-loose max-w-md text-sm md:text-base">
              Client Acquisition Systems for Education Consultancies.
              We build the complete infrastructure that turns Meta traffic into qualified,
              pre-nurtured, showed-up consultation bookings.
            </p>
            <div className="flex items-center gap-1 text-[#E54D2E] mb-2">
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
              <li><a href="/#system" className="hover:text-[#E54D2E] transition-colors">How It Works</a></li>
              <li><a href="/#results" className="hover:text-[#E54D2E] transition-colors">Results</a></li>
              <li><a href="/pricing" className="hover:text-[#E54D2E] transition-colors">Pricing</a></li>
              <li><a href="/services" className="hover:text-[#E54D2E] transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-[#E54D2E] transition-colors">About</a></li>
              <li><a href="/#contact" className="hover:text-[#E54D2E] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#fafaf8] font-black uppercase tracking-wider mb-6 text-sm">Ready to Scale?</h4>
            <p className="text-neutral-400 mb-6 text-sm">
              Stop relying on referrals and start building a predictable client acquisition system.
            </p>
            <motion.a
              href="https://funnel.wajdan.co/booking-page-page"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E54D2E] text-white font-black uppercase tracking-wider text-sm shadow-[0_4px_0_0_#fafaf8] hover:shadow-none hover:translate-y-1 transition-all"
            >
              Book Free Audit
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-neutral-800 mt-8 md:mt-16 pt-6 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Wajdan Digital Alchemy. Client acquisition systems for consultancies.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/share/1bhtmDksoi/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#E54D2E] transition-colors" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/wajdan-growth-marketing-agency/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#E54D2E] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wajdandigital" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#E54D2E] transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/36709495643" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#E54D2E] transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
