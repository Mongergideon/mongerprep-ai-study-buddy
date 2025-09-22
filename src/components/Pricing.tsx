import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      price: "₦0",
      yearlyPrice: "₦0",
      credits: "50 Credits / Day",
      description: "Perfect for getting started",
      features: [
        "50 daily credits (reset at midnight)",
        "Basic past questions access",
        "Limited AI interactions",
        "Offline study mode"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Daily Credits Plan",
      price: "₦3,200",
      yearlyPrice: "₦32,000",
      credits: "400 Credits / Day",
      description: "For regular study sessions",
      features: [
        "400 daily credits",
        "Full past questions library",
        "Unlimited AI chat",
        "Essay grading",
        "Progress tracking"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Booster Pack",
      price: "₦5,000",
      yearlyPrice: "₦50,000",
      credits: "+790 Credits / Day",
      description: "Boost your preparation",
      features: [
        "790 additional daily credits",
        "Custom question generation",
        "Advanced analytics",
        "Priority AI responses",
        "Admission guidance"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Pro Pack",
      price: "₦10,000",
      yearlyPrice: "₦100,000",
      credits: "+1,200 Credits / Day",
      description: "Ultimate exam preparation",
      features: [
        "1,200 additional daily credits",
        "All premium features",
        "Personal study coach AI",
        "School recommendation engine",
        "PDF learning assistant",
        "Priority support"
      ],
      popular: true,
      cta: "Start Free Trial"
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Study Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing that grows with your exam preparation needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-border rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className={`absolute top-1 w-6 h-6 bg-primary rounded-full transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Yearly <Badge variant="secondary" className="ml-1">2 months free</Badge>
            </span>
          </div>
          
          <Badge variant="outline" className="text-sm px-4 py-2">
            3-day free trial on all paid plans
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-primary shadow-soft scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {isYearly && plan.yearlyPrice !== plan.price ? plan.yearlyPrice : plan.price}
                  </span>
                  {plan.price !== "₦0" && (
                    <span className="text-muted-foreground ml-1">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-primary mb-2">
                  {plan.credits}
                </p>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover' 
                      : 'bg-card hover:bg-muted border border-border'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;