import { Button } from "@/components/ui/button";
import mongerPrepLogo from "@/assets/mongerprep-logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 120; // Account for larger header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 gpu-accelerated transform-gpu backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={mongerPrepLogo} 
              alt="Mongerprep logo" 
              className="h-20 md:h-24 lg:h-28 w-auto transition-transform hover:scale-105 gpu-accelerated"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-all font-medium text-sm lg:text-base hover:transform hover:scale-105"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-all font-medium text-sm lg:text-base hover:transform hover:scale-105"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-all font-medium text-sm lg:text-base hover:transform hover:scale-105"
            >
              How it Works
            </button>
          </nav>
          
          <Button 
            onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
            className="bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-200 hover:transform hover:scale-105 hover:-translate-y-1 font-semibold px-4 md:px-6 py-2 rounded-xl text-sm md:text-base gpu-accelerated"
          >
            <span className="hidden sm:inline">Download </span>App
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;