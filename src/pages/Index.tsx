
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star, Play, BarChart3, Palette, Video, Code, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-brand-dark/95 backdrop-blur-sm text-white py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-brand-green">Wajdan</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-brand-yellow transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-yellow transition-colors">About</a>
            <a href="#testimonials" className="hover:text-brand-yellow transition-colors">Results</a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a>
          </div>
          <Button className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-semibold">
            Free Strategy Call
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-brand-yellow/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Scaling Brands Smarter & Faster</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn Your Brand Into A 
                <span className="text-brand-yellow"> Growth Machine</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We don't just run ads—we architect digital ecosystems that convert strangers into customers and customers into advocates. Data-backed strategy meets creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-semibold text-lg px-8 py-6">
                  Get Your Free Growth Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold text-lg px-8 py-6">
                  <Play className="mr-2 w-5 h-5" />
                  See Our Work
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-brand-green/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-green/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-yellow">300%+</div>
                    <div className="text-sm text-gray-300">Average ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-yellow">$2M+</div>
                    <div className="text-sm text-gray-300">Ad Spend Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-yellow">150+</div>
                    <div className="text-sm text-gray-300">Brands Scaled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-yellow">24hr</div>
                    <div className="text-sm text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Your Complete Digital Growth Arsenal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service designed to work together, creating a unified growth engine that scales your business across all digital touchpoints.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-orange/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Megaphone className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Meta Ads That Convert</h3>
                <p className="text-gray-600 mb-4">
                  Strategic Facebook & Instagram campaigns that turn cold traffic into paying customers. Advanced targeting, creative testing, and conversion optimization.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Social Media Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Build communities that buy. Strategic content planning, engagement growth, and brand storytelling across all major platforms.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-yellow/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-brand-dark" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Content That Converts</h3>
                <p className="text-gray-600 mb-4">
                  Strategic content creation that educates, entertains, and converts. Blog posts, captions, emails, and landing page copy that drives action.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-blue/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Design That Sells</h3>
                <p className="text-gray-600 mb-4">
                  Visual identity and graphics that command attention and communicate value. From logos to ad creatives to complete brand systems.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-orange/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Video That Engages</h3>
                <p className="text-gray-600 mb-4">
                  Professional video editing that tells your brand story and drives engagement. Social clips, ads, testimonials, and promotional content.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-brand-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Websites That Work</h3>
                <p className="text-gray-600 mb-4">
                  High-converting Shopify & WordPress sites that turn visitors into customers. Optimized for speed, mobile, and conversions.
                </p>
                <div className="flex items-center text-brand-green font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We're Not Just Another Agency—
                <span className="text-brand-yellow">We're Your Growth Partners</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Born from the frustration of seeing businesses struggle with cookie-cutter marketing approaches, Wajdan was built on a simple philosophy: every brand deserves a custom-crafted growth strategy.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Instead, we dive deep into your business, understand your customers, and architect digital experiences that don't just look good—they perform exceptionally.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                  <span>Data-Driven Decisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                  <span>Creative Excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                  <span>Transparent Reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-green mr-3" />
                  <span>Scalable Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand-green/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-green/30">
                <h3 className="text-2xl font-bold text-brand-yellow mb-6">Our Proven Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-yellow text-brand-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Deep Dive Analysis</h4>
                      <p className="text-gray-300">Understand your business, audience, and competitive landscape</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-yellow text-brand-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Strategic Planning</h4>
                      <p className="text-gray-300">Craft custom growth strategies tailored to your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-brand-yellow text-brand-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Execute & Optimize</h4>
                      <p className="text-gray-300">Launch campaigns and continuously optimize for better results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">
              Real Results, Real Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See how we've helped businesses like yours achieve extraordinary growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Wajdan transformed our social media presence completely. Our engagement increased by 400% and our sales followed suit. They don't just manage accounts—they build communities."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-green font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Sarah Martinez</div>
                    <div className="text-sm text-gray-500">Founder, EcoLiving Co.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Our ROAS went from 2.1x to 5.8x in just 3 months. Their Meta ads strategy is phenomenal—every dollar we spend comes back multiplied. True growth partners."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-green font-bold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Michael Rodriguez</div>
                    <div className="text-sm text-gray-500">CEO, TechStart Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The website they built for us converts at 12%—triple our old site. Every element is optimized for our customers' journey. Exceptional work and ongoing support."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-brand-green font-bold">JL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">Jennifer Liu</div>
                    <div className="text-sm text-gray-500">Owner, Luxe Fashion Boutique</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-brand-green to-brand-blue rounded-2xl p-12 text-white text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Every great partnership starts with a conversation. Let's discuss how we can accelerate your growth.
            </p>
            <Button size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-semibold text-lg px-8 py-6">
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Stop Guessing. Start 
            <span className="text-brand-yellow"> Growing.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your competitors are already investing in their digital presence. Every day you wait is potential revenue walking out the door. 
            Let's change that—starting with a free, no-obligation strategy session.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-brand-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Growth Audit</h3>
              <p className="text-gray-300">Comprehensive analysis of your current digital presence</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Strategy</h3>
              <p className="text-gray-300">Tailored roadmap for your specific business goals</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Growth Forecast</h3>
              <p className="text-gray-300">Realistic projections for your digital transformation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-yellow/90 font-semibold text-xl px-12 py-8">
              Book Your Free Strategy Call Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold text-xl px-12 py-8">
              View Our Portfolio
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            No contracts. No pressure. Just actionable insights you can implement immediately.
          </p>
        </div>
      </section>

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
