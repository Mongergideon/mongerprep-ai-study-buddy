import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import mongerPrepLogo from "@/assets/mongerprep-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348130398167', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:hello@mongergideontechnology.name.ng';
  };

  return (
    <footer className="bg-gradient-premium text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img 
                src={mongerPrepLogo} 
                alt="Mongerprep logo" 
                className="h-16 w-auto brightness-0 invert transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Nigerian students with AI-powered exam preparation. 
              Study offline, learn smarter, and achieve your academic goals.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={openEmail}
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-navy transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                className="border-white/20 text-white hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How it Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('download')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Download App
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} All rights reserved Monger Gideon Technology.
            </div>
            
            <div className="text-gray-300 text-sm text-center md:text-right">
              <p>Email: hello@mongergideontechnology.name.ng</p>
              <p>WhatsApp: +2348130398167</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;