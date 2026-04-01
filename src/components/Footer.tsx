import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-orange/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <img 
                src="/Wajdan Logo light.png" 
                alt="Wajdan Digital Alchemy" 
                className="h-10"
              />
            </motion.a>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md text-sm md:text-base">
              Client Acquisition Systems for Immigration & Education Consultants. 
              We build the complete infrastructure that turns Meta traffic into qualified, 
              pre-nurtured, showed-up consultation bookings.
            </p>
            <div className="flex items-center gap-1 text-brand-orange mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Trusted by consultancies across Europe, UAE & beyond
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li>
                <a href="/#system" className="hover:text-brand-orange transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#results" className="hover:text-brand-orange transition-colors">
                  Results & Case Studies
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-brand-orange transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand-orange transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ready to Scale?</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Stop relying on referrals and start building a predictable client acquisition system.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg text-sm shadow-lg shadow-brand-orange/25 hover:bg-brand-orange/90 transition-colors"
            >
              Book Free Audit
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-brand-orange/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Wajdan Digital Alchemy. All rights reserved. Built for growth, designed for results.
            </p>
            <p className="text-brand-orange/70 font-medium tracking-wide text-sm">
              WAJDAN.CO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
