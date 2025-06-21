
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star, Play, BarChart3, Palette, Video, Code, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/ui/hero-section-dark";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ShuffleCards } from "@/components/ui/testimonial-cards";
import { PremiumContact } from "@/components/ui/premium-contact";
import WajdanNavbar from "@/components/WajdanNavbar";

const Index = () => {
  // Services data for BentoGrid
  const servicesData = [
    {
      title: "Meta Ads That Convert",
      meta: "5.8x ROAS",
      description: "Strategic Facebook & Instagram campaigns with advanced targeting and conversion optimization.",
      icon: <Megaphone className="w-4 h-4 text-brand-orange" />,
      status: "Live",
      tags: ["Meta", "ROI", "Growth"],
      colSpan: 2,
      hasPersistentHover: true,
    },
    {
      title: "Social Media Mastery", 
      meta: "400% Growth",
      description: "Build communities that buy with strategic content and engagement growth.",
      icon: <Users className="w-4 h-4 text-brand-green" />,
      status: "Active",
      tags: ["Community", "Content"],
    },
    {
      title: "Content That Converts",
      meta: "12% CTR",
      description: "Strategic copy that educates, entertains, and drives action across all platforms.",
      icon: <Zap className="w-4 h-4 text-brand-yellow" />,
      tags: ["Copy", "Strategy"],
      colSpan: 2,
    },
    {
      title: "Design That Sells",
      meta: "Brand Systems",
      description: "Visual identity that commands attention and communicates value effectively.",
      icon: <Palette className="w-4 h-4 text-brand-blue" />,
      status: "Creative",
      tags: ["Design", "Brand"],
    },
    {
      title: "Video That Engages",
      meta: "Pro Editing",
      description: "Professional video content that tells your story and drives engagement.",
      icon: <Video className="w-4 h-4 text-brand-orange" />,
      tags: ["Video", "Story"],
    },
    {
      title: "Websites That Work",
      meta: "Conversion+",
      description: "High-converting sites optimized for speed, mobile, and user experience.",
      icon: <Code className="w-4 h-4 text-brand-green" />,
      status: "Dev",
      tags: ["Web", "UX"],
    },
  ];

  // Testimonials data
  const testimonialsData = [
    {
      id: 1,
      testimonial: "Wajdan transformed our social media presence completely. Our engagement increased by 400% and sales followed suit.",
      author: "Sarah Martinez - Founder, EcoLiving Co."
    },
    {
      id: 2,
      testimonial: "Our ROAS went from 2.1x to 5.8x in just 3 months. Their Meta ads strategy is phenomenal—every dollar multiplied.", 
      author: "Michael Rodriguez - CEO, TechStart Solutions"
    },
    {
      id: 3,
      testimonial: "The website they built converts at 12%—triple our old site. Every element optimized for our customers' journey.",
      author: "Jennifer Liu - Owner, Luxe Fashion Boutique"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <WajdanNavbar />

      {/* Hero Section */}
      <HeroSection
        title="Scaling Brands Smarter & Faster"
        subtitle={{
          regular: "Turn Your Brand Into A ",
          gradient: "Growth Machine"
        }}
        description="We don't just run ads—we architect digital ecosystems that convert strangers into customers and customers into advocates. Data-backed strategy meets creative excellence."
        ctaText="Get Your Free Growth Audit"
        ctaHref="#contact"
        bottomImage={{
          light: "https://farmui.vercel.app/dashboard-light.png",
          dark: "https://farmui.vercel.app/dashboard.png"
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 60,
          lightLineColor: "#57A773",
          darkLineColor: "#264653"
        }}
        className="pt-20"
      />

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Your Complete Digital Growth Arsenal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service designed to work together, creating a unified growth engine that scales your business.
            </p>
          </div>
          
          <BentoGrid items={servicesData} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              We're Not Just Another Agency—
              <span className="text-brand-yellow">We're Your Growth Partners</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              Born from the frustration of seeing businesses struggle with cookie-cutter marketing approaches, Wajdan was built on a simple philosophy: every brand deserves a custom-crafted growth strategy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                <span>Data-Driven Decisions</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                <span>Creative Excellence</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                <span>Scalable Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Results, Real Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Don't just take our word for it. See how we've helped businesses achieve extraordinary growth.
            </p>
          </div>

          <ShuffleCards testimonials={testimonialsData} />
        </div>
      </section>

      {/* Contact Section */}
      <PremiumContact />

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-brand-green/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-brand-green mb-4">Wajdan</div>
              <p className="text-gray-400 mb-4">
                Your strategic partner for digital growth and modern marketing excellence.
              </p>
              <div className="text-brand-yellow font-semibold">hello@wajdandigital.com</div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Meta Advertising</li>
                <li>Social Media Marketing</li>
                <li>Content Creation</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Video Editing</li>
                <li>Website Development</li>
                <li>Brand Strategy</li>
                <li>Growth Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Free Strategy Call</li>
                <li>Portfolio</li>
                <li>Case Studies</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-green/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wajdan Digital Agency. All rights reserved. Built for growth, designed for results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
