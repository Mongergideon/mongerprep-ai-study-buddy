import { 
  Download, 
  BookOpen, 
  RefreshCw, 
  BarChart3, 
  MessageCircle, 
  PenTool, 
  Sparkles, 
  MapPin, 
  Upload,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Download,
      title: "Offline Exam Practice",
      description: "Download full past papers and practice without internet connection. Study anywhere, anytime.",
      gradient: "from-blue-400 to-blue-600",
      delay: "delay-0"
    },
    {
      icon: BookOpen,
      title: "Personal Library",
      description: "Build your offline library with saved exam packs and study materials.",
      gradient: "from-purple-400 to-purple-600",
      delay: "delay-100"
    },
    {
      icon: RefreshCw,
      title: "Smart Sync",
      description: "Automatic sync when online. Your offline progress queues and uploads seamlessly.",
      gradient: "from-green-400 to-green-600",
      delay: "delay-200"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visual KPIs track your performance: average scores, tests taken, improvement trends.",
      gradient: "from-orange-400 to-orange-600",
      delay: "delay-300"
    },
    {
      icon: MessageCircle,
      title: "AI Study Tutor",
      description: "24/7 AI chatbot answers concept questions and provides personalized homework help.",
      gradient: "from-pink-400 to-pink-600",
      delay: "delay-400"
    },
    {
      icon: PenTool,
      title: "AI Essay Grader",
      description: "Instant feedback on grammar, structure, and scoring with detailed improvement suggestions.",
      gradient: "from-indigo-400 to-indigo-600",
      delay: "delay-500"
    },
    {
      icon: Sparkles,
      title: "Question Generator",
      description: "Unlimited AI-generated practice tests tailored to your weak areas and exam patterns.",
      gradient: "from-yellow-400 to-yellow-600",
      delay: "delay-600"
    },
    {
      icon: MapPin,
      title: "Admissions Finder",
      description: "Personalized university and course recommendations based on your performance.",
      gradient: "from-teal-400 to-teal-600",
      delay: "delay-700"
    },
    {
      icon: Upload,
      title: "Learn with AI",
      description: "Upload PDFs and notes. Get AI summaries and generate practice questions from your materials.",
      gradient: "from-red-400 to-red-600",
      delay: "delay-800"
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-glass backdrop-blur-md rounded-full border border-white/20 shadow-glass mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-gradient">Excel in Your Exams</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our comprehensive AI-powered platform combines offline accessibility with intelligent tutoring 
            to give you the ultimate exam preparation experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`group premium-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in ${feature.delay}`}
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-hero rounded-full mt-6 group-hover:w-12 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="glass-effect p-12 rounded-3xl border border-white/20 shadow-premium max-w-4xl mx-auto animate-scale-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <Smartphone className="w-8 h-8 text-accent" />
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Study Experience?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who've already discovered the power of AI-driven exam preparation.
            </p>
            
            <Button
              size="lg"
              onClick={() => window.open('https://app.cbtmanager.mongergideontechnology.name.ng/', '_blank')}
              className="group bg-gradient-hero hover:bg-gradient-premium text-primary-foreground shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 text-lg px-12 py-6 rounded-2xl font-bold hover-glow"
            >
              Start Your Free Trial
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 3-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;