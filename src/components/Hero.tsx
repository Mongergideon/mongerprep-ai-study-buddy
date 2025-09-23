import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Trophy, Zap } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup-updated.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-gradient-accent rounded-full opacity-15 blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-premium rounded-full opacity-10 blur-3xl animate-gradient-shift"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-particle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-particle-float delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-particle-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent/35 rounded-full animate-particle-float delay-1500"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 shadow-glass animate-scale-in">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Nigeria's #1 AI Study Platform</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gradient animate-fade-in gpu-accelerated">Mongerprep</span>
                <span className="block text-foreground/90 animate-fade-in delay-200 gpu-accelerated">Your AI-Powered</span>
                <span className="block text-foreground/90 animate-fade-in delay-400 gpu-accelerated">Study Partner</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in delay-600 gpu-accelerated">
                Study offline. Learn with AI. Prepare for <span className="text-primary font-semibold">JAMB</span>, <span className="text-primary font-semibold">WAEC</span> & <span className="text-primary font-semibold">Post-UTME</span>—anytime, anywhere.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start animate-fade-in delay-800">
              <Button 
                size="lg"
                onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
                className="group bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-premium hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 text-base md:text-lg px-8 md:px-10 py-4 md:py-6 rounded-2xl font-bold hover-glow card-3d gpu-accelerated"
              >
                Download App
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2 group-hover:translate-x-1 transition-transform gpu-accelerated" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('features')}
                className="group glass-effect border-white/30 text-foreground hover:text-primary hover:border-primary/50 shadow-glass hover:shadow-premium transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 text-base md:text-lg px-8 md:px-10 py-4 md:py-6 rounded-2xl font-semibold card-3d gpu-accelerated"
              >
                <Play className="w-4 md:w-5 h-4 md:h-5 mr-2 group-hover:scale-110 transition-transform gpu-accelerated" />
                See Features
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 text-muted-foreground/80 animate-fade-in delay-1000">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">50,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>

            {/* Micro-copy */}
            <div className="text-sm text-muted-foreground space-y-1 animate-fade-in delay-1200">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                3-day free trial on all paid plans
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></span>
                Secure offline PIN login
              </p>
            </div>
          </div>

          {/* Phone Mockup Column */}
          <div className="relative flex justify-center animate-slide-in-right mt-8 lg:mt-0">
            {/* Phone Container with Premium Effects */}
            <div className="relative">
              {/* Glow Effect Behind Phone */}
              <div className="absolute inset-0 bg-gradient-hero rounded-[2rem] md:rounded-[3rem] opacity-15 blur-xl md:blur-2xl scale-110 animate-glow-pulse gpu-accelerated"></div>
              
              {/* Premium Frame */}
              <div className="relative premium-card rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 animate-float-3d card-3d">
                <img 
                  src={phoneMockup} 
                  alt="Mongerprep app dashboard showing personalized study interface" 
                  className="w-full max-w-xs md:max-w-sm mx-auto rounded-[1.5rem] md:rounded-[2.5rem] shadow-premium gpu-accelerated"
                />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -top-8 -left-8 glass-effect p-4 rounded-2xl shadow-glass animate-float delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">AI Tutor</p>
                    <p className="text-xs text-muted-foreground">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 glass-effect p-4 rounded-2xl shadow-glass animate-float delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Offline Mode</p>
                    <p className="text-xs text-muted-foreground">Study Anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;