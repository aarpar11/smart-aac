import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, Book, Brain, Video, Users } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Binaural Beats", path: "/binaural-beats", icon: Headphones },
    { name: "Research Blog", path: "/blog", icon: Book },
    { name: "Meditation", path: "/meditation", icon: Brain },
    { name: "Calming Room", path: "/calming-room", icon: Video },
    { name: "ABA Therapy", path: "/aba-therapy", icon: Users },
  ];

  return (
    <nav className="bg-gradient-calm backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-xl font-semibold text-foreground">CalmSpace</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button key={item.path} variant="ghost" asChild className="text-foreground hover:bg-primary/10">
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center space-x-2 px-4 py-2 rounded-lg transition-gentle ${
                        isActive ? 'bg-primary/20 text-primary' : ''
                      }`
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </NavLink>
                </Button>
              );
            })}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
                <div className="w-full h-0.5 bg-foreground"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;