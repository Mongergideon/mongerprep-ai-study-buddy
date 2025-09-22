import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-vanilla rounded-full animate-particle-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-wine rounded-full animate-particle-float delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-vanilla rounded-full animate-particle-float delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-wine rounded-full animate-particle-float delay-500" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Mongerprep — Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI-Powered Study Partner
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl">
              Study offline. Learn with AI. Prepare for JAMB, WAEC & Post-UTME—anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button 
                size="lg"
                onClick={() => scrollToSection('download')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
              >
                Download App
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('features')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
              >
                See Features
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              3-day free trial on all paid plans • Secure offline PIN login
            </p>
          </div>
          
          {/* Phone Mockup Column */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <img 
                src={phoneMockup}
                alt="Mongerprep app dashboard showing AI study features"
                className="max-w-sm w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;