import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap, Sparkles } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: "₦0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "50 Credits per day",
        "Basic practice tests",
        "Limited AI assistance",
        "Standard sync",
        "Community support"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline" as const,
      popular: false,
      icon: Star,
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Daily Credits",
      price: isYearly ? "₦2,670" : "₦3,200",
      period: "month",
      originalPrice: isYearly ? "₦3,200" : null,
      description: "Great for regular learners",
      features: [
        "400 Credits per day",
        "Full practice test library",
        "Priority AI tutor access",
        "Advanced analytics",
        "Email support",
        "Offline study packs"
      ],
      buttonText: "Choose Plan",
      buttonVariant: "default" as const,
      popular: false,
      icon: Zap,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Booster Pack",
      price: isYearly ? "₦4,170" : "₦5,000",
      period: "month", 
      originalPrice: isYearly ? "₦5,000" : null,
      description: "Ideal for intensive preparation",
      features: [
        "790 Credits per day",
        "All Daily Credits features",
        "Premium AI essay grading",
        "Custom question generation",
        "Priority support",
        "Advanced study insights"
      ],
      buttonText: "Get Booster",
      buttonVariant: "default" as const,
      popular: false,
      icon: Sparkles,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      name: "Pro Pack",
      price: isYearly ? "₦8,340" : "₦10,000",
      period: "month",
      originalPrice: isYearly ? "₦10,000" : null,
      description: "Ultimate exam preparation",
      features: [
        "1,200 Credits per day",
        "All Booster Pack features", 
        "Unlimited AI assistance",
        "Personal study coach",
        "White-glove onboarding",
        "Custom study plans",
        "24/7 priority support"
      ],
      buttonText: "Go Pro",
      buttonVariant: "default" as const,
      popular: true,
      icon: Crown,
      gradient: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 shadow-glass mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Flexible Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Choose Your
            <span className="block text-gradient">Success Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Start free, then scale with plans designed for every level of ambition. 
            All paid plans include a 3-day free trial.
          </p>

          <div className="flex items-center justify-center gap-4 glass-effect p-2 rounded-2xl w-fit mx-auto">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-gradient-hero rounded-full transition-colors"
            >
              <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs bg-gradient-hero text-primary-foreground px-2 py-1 rounded-full font-semibold">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div 
                key={index}
                className={`group relative premium-card p-6 md:p-8 rounded-3xl transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 animate-fade-in card-3d gpu-accelerated ${
                  isPopular 
                    ? 'ring-2 ring-primary shadow-glow scale-105' 
                    : 'hover:shadow-glow'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-hero text-primary-foreground px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-premium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <div className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft gpu-accelerated`}>
                    <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl md:text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-sm md:text-base text-muted-foreground">
                        /{plan.period}
                      </span>
                    </div>
                    
                    {plan.originalPrice && isYearly && (
                      <div className="text-xs md:text-sm text-muted-foreground">
                        <span className="line-through">{plan.originalPrice}</span>
                        <span className="text-green-600 ml-2 font-semibold">17% off</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 md:gap-3">
                      <Check className="w-4 md:w-5 h-4 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
                  className={`w-full py-4 md:py-6 rounded-2xl font-semibold transition-all duration-300 hover:transform hover:scale-105 card-3d gpu-accelerated ${
                    isPopular
                      ? 'bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-premium hover:shadow-glow hover-glow'
                      : plan.buttonVariant === 'outline'
                      ? 'glass-effect border-white/30 text-foreground hover:text-primary hover:border-primary/50'
                      : 'bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-soft hover:shadow-hover'
                  }`}
                >
                  {plan.buttonText}
                </Button>

                {plan.name !== "Free Plan" && (
                  <p className="text-xs text-muted-foreground text-center mt-3 md:mt-4">
                    3-day free trial included
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;