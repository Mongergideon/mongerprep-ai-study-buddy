import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="download" className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-foreground/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-primary-foreground/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary-foreground/20 rounded-full animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to Study Smarter?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of Nigerian students who are already using AI to ace their exams. 
          Download Mongerprep today and start your 3-day free trial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-8">
          {/* App Download Button */}
          <Button 
            onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg min-w-[180px] md:min-w-[200px] card-3d gpu-accelerated"
          >
            <Smartphone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            Download App
          </Button>
          
          {/* Alternative CTA */}
          <Button 
            onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-soft hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg min-w-[180px] md:min-w-[200px] card-3d gpu-accelerated"
          >
            <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            Start Free Trial
          </Button>
        </div>
        
        <div className="text-primary-foreground/80 text-sm space-y-2">
          <p>✓ 3-day free trial on all paid plans</p>
          <p>✓ No credit card required to start</p>
          <p>✓ Works offline after download</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;