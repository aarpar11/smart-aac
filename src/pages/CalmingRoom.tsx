import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const CalmingRoom = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState("forest");
  const [soundVolume, setSoundVolume] = useState([60]);
  const [brightness, setBrightness] = useState([70]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const environments = [
    {
      id: "forest",
      name: "Peaceful Forest",
      description: "Gentle rustling leaves and distant bird songs",
      color: "from-green-400 to-green-600",
      sounds: ["birds", "wind", "leaves"],
      bgColor: "bg-gradient-to-b from-green-50 to-green-100"
    },
    {
      id: "ocean",
      name: "Calm Ocean",
      description: "Soft waves and gentle sea breeze",
      color: "from-blue-400 to-blue-600", 
      sounds: ["waves", "seagulls", "wind"],
      bgColor: "bg-gradient-to-b from-blue-50 to-blue-100"
    },
    {
      id: "rain",
      name: "Gentle Rain",
      description: "Light raindrops on leaves and soft thunder",
      color: "from-gray-400 to-gray-600",
      sounds: ["rain", "thunder", "droplets"],
      bgColor: "bg-gradient-to-b from-gray-50 to-gray-100"
    },
    {
      id: "meadow",
      name: "Spring Meadow", 
      description: "Warm breeze through grass and buzzing bees",
      color: "from-yellow-400 to-green-500",
      sounds: ["grass", "bees", "breeze"],
      bgColor: "bg-gradient-to-b from-yellow-50 to-green-50"
    },
    {
      id: "cave",
      name: "Crystal Cave",
      description: "Echoing water drops in a serene cavern",
      color: "from-purple-400 to-indigo-600",
      sounds: ["echo", "drops", "crystals"],
      bgColor: "bg-gradient-to-b from-purple-50 to-indigo-50"
    },
    {
      id: "space",
      name: "Cosmic Drift",
      description: "Gentle hum of distant stars and nebula",
      color: "from-indigo-900 to-purple-900",
      sounds: ["cosmic", "hum", "ambient"],
      bgColor: "bg-gradient-to-b from-indigo-900 to-purple-900"
    }
  ];

  const currentEnv = environments.find(env => env.id === selectedEnvironment);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Virtual Calming Room
          </h1>
          <p className="text-lg text-muted-foreground">
            Immersive peaceful environments for emotional regulation and sensory comfort
          </p>
        </div>

        {/* Environment Viewer */}
        <Card className="mb-8 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
          <div 
            className={`h-64 md:h-96 relative ${currentEnv?.bgColor} transition-all duration-1000 ease-gentle flex items-center justify-center`}
            style={{ filter: `brightness(${brightness[0]}%)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {currentEnv?.name}
              </h2>
              <p className="text-lg md:text-xl opacity-90 drop-shadow">
                {currentEnv?.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {currentEnv?.sounds.map((sound) => (
                  <Badge key={sound} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {sound}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Fullscreen Toggle */}
            <Button
              className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white border-white/20"
              variant="outline"
              size="sm"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Environment Selection */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Choose Environment</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {environments.map((env) => (
                <Card
                  key={env.id}
                  className={`cursor-pointer transition-gentle hover:shadow-gentle bg-card/50 backdrop-blur-sm border-border/50 ${
                    selectedEnvironment === env.id ? 'ring-2 ring-primary shadow-gentle' : ''
                  }`}
                  onClick={() => setSelectedEnvironment(env.id)}
                >
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${env.color} mx-auto mb-2 shadow-soft`}></div>
                    <CardTitle className="text-lg text-center">{env.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-sm">
                      {env.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Customize Experience</h3>
            
            <Card className="mb-6 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Audio Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Sound Volume</label>
                    <Badge variant="outline">{soundVolume[0]}%</Badge>
                  </div>
                  <Slider
                    value={soundVolume}
                    onValueChange={setSoundVolume}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Visual Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Brightness</label>
                    <Badge variant="outline">{brightness[0]}%</Badge>
                  </div>
                  <Slider
                    value={brightness}
                    onValueChange={setBrightness}
                    max={120}
                    min={20}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-calm border-border/30">
              <CardHeader>
                <CardTitle className="text-lg">Sensory Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• Adjust brightness to prevent visual overwhelm</p>
                <p>• Use headphones for immersive audio experience</p>
                <p>• Try different environments to find what soothes you</p>
                <p>• Combine with breathing exercises for deeper relaxation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalmingRoom;