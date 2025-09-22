import { Button } from "@/components/ui/button";
import mongerPrepLogo from "@/assets/mongerprep-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full glass-effect z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={mongerPrepLogo} 
              alt="Mongerprep logo" 
              className="h-12 w-auto transition-all duration-300 hover:scale-110"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              How it Works
            </button>
          </nav>
          
          <Button 
            onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
            className="bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-1 px-8 py-3 rounded-xl font-semibold hover-glow"
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;