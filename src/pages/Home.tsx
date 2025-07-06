import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Headphones, Book, Brain, Video, Users } from "lucide-react";
import heroImage from "@/assets/hero-calm.jpg";

const Home = () => {
  const features = [
    {
      title: "Binaural Beats",
      description: "Customizable sound frequencies to promote relaxation and focus",
      icon: Headphones,
      path: "/binaural-beats",
      color: "bg-gradient-primary"
    },
    {
      title: "Research Blog", 
      description: "AI-curated latest findings in autism research and therapies",
      icon: Book,
      path: "/blog",
      color: "bg-gradient-secondary"
    },
    {
      title: "Silent Meditation",
      description: "Guided meditation sessions designed for sensory sensitivity",
      icon: Brain,
      path: "/meditation", 
      color: "bg-accent"
    },
    {
      title: "Virtual Calming Room",
      description: "Immersive peaceful environments for emotional regulation",
      icon: Video,
      path: "/calming-room",
      color: "bg-gradient-primary"
    },
    {
      title: "ABA Therapy Course",
      description: "Comprehensive resources for parents including do's, don'ts, and FAQs",
      icon: Users,
      path: "/aba-therapy",
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Find Your <span className="text-primary">Calm</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A peaceful space designed specifically for autistic individuals and their families
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle">
            <NavLink to="/binaural-beats" className="flex items-center space-x-2">
              <Headphones className="w-5 h-5" />
              <span>Start Your Journey</span>
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Therapeutic Tools & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based approaches combined with compassionate design for your wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group hover:shadow-gentle transition-gentle cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
                  <NavLink to={feature.path}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-gentle shadow-soft`}>
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </NavLink>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;