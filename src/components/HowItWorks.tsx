import { UserPlus, Download, PlayCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Download & Create Account",
      description: "Get started with our secure offline PIN system after first login"
    },
    {
      icon: Download,
      title: "Download Past Questions",
      description: "Access full question banks or upload your own study notes"
    },
    {
      icon: PlayCircle,
      title: "Practice & Sync",
      description: "Study offline anywhere, results automatically sync when online"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and transform your exam preparation
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-7 md:w-8 h-7 md:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs md:text-sm font-bold z-10 gpu-accelerated">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mx-auto w-16 md:w-20 h-16 md:h-20 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 card-3d gpu-accelerated">
                  <step.icon className="w-8 md:w-10 h-8 md:h-10 text-accent-foreground" />
                </div>
                
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border" />
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;