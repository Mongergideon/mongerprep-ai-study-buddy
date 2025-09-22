import { 
  Download, 
  BookOpen, 
  RefreshCw, 
  BarChart3, 
  MessageCircle, 
  PenTool, 
  Shuffle, 
  MapPin, 
  FileText 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Download,
      title: "Offline Exam Practice",
      description: "Download full past papers; practice without data."
    },
    {
      icon: BookOpen,
      title: "Offline Library",
      description: "Personal device library for saved exam packs."
    },
    {
      icon: RefreshCw,
      title: "Automatic Sync & Outbox",
      description: "Offline results queue that syncs on reconnect."
    },
    {
      icon: BarChart3,
      title: "Dashboard & Progress Tracking",
      description: "Visual KPIs: avg score, tests taken."
    },
    {
      icon: MessageCircle,
      title: "AI Chatbot",
      description: "24/7 tutor that answers concepts & homework."
    },
    {
      icon: PenTool,
      title: "AI Essay Grader",
      description: "Instant feedback on grammar, structure, score."
    },
    {
      icon: Shuffle,
      title: "AI Question Generator",
      description: "Unlimited custom practice tests."
    },
    {
      icon: MapPin,
      title: "AI Admissions Finder",
      description: "Personalized school & course guidance."
    },
    {
      icon: FileText,
      title: "Learn with AI",
      description: "Upload PDFs; get summaries & practice from your notes."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Exam Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to ace your JAMB, WAEC, and Post-UTME exams, powered by AI and available offline.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;