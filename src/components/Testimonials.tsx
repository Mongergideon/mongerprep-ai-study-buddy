import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adunni Ogundimu",
      city: "Lagos",
      exam: "JAMB 2024",
      rating: 5,
      quote: "Mongerprep's AI tutor helped me understand complex chemistry concepts. I scored 289 in JAMB!",
      avatar: "AO"
    },
    {
      name: "Ibrahim Yusuf",
      city: "Kano",
      exam: "WAEC 2024",
      rating: 5,
      quote: "The offline feature was perfect for studying without internet. Got excellent grades in all 9 subjects.",
      avatar: "IY"
    },
    {
      name: "Chioma Nwankwo",
      city: "Enugu",
      exam: "Post-UTME",
      rating: 5,
      quote: "The AI essay grader improved my writing so much. I got admission to study Medicine at UNN!",
      avatar: "CN"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories from{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Real Students
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Nigerian students who have achieved their academic goals with Mongerprep
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.city} • {testimonial.exam}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;