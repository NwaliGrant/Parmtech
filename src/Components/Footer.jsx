import { Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-semibold italic">Logo</span>
            </div>
            <p className="text-white/80 mb-6">
              Stay updated on the latest technology trends and Spider UX insights
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-2.5 text-white/50 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>
              <button className="bg-white text-[#0F172A] px-5 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white/60 mt-3">
              By clicking 'Signup' you agree to our{" "}
              <a href="#" className="underline hover:text-white">
                privacy policy
              </a>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {["About us", "Careers", "News", "Contact", "Services"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Case studies", "Pricing", "Downloads", "Follow us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Socials */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white underline transition-colors">
                Terms of service
              </a>
              <a href="#" className="hover:text-white underline transition-colors">
                Cookies settings
              </a>
              <a href="#" className="hover:text-white underline transition-colors">
                Cookies for Love
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-sm text-white/60">
            <a href="#" className="hover:text-white underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
