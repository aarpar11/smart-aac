import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Meditation = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes default
  const [totalTime, setTotalTime] = useState(300);
  const [selectedSession, setSelectedSession] = useState("breathing");

  const sessions = [
    {
      id: "breathing",
      name: "Breathing Focus",
      description: "Simple breath awareness meditation",
      duration: 300,
      instructions: "Focus on your natural breathing rhythm. Notice the sensation of air entering and leaving your body."
    },
    {
      id: "body-scan",
      name: "Body Scan",
      description: "Progressive relaxation technique",
      duration: 600,
      instructions: "Starting from your toes, slowly bring attention to each part of your body, noticing any sensations without judgment."
    },
    {
      id: "sensory-calm",
      name: "Sensory Calming",
      description: "Designed for sensory sensitivity",
      duration: 180,
      instructions: "Find a comfortable position. Notice five things you can see, four you can hear, three you can touch, two you can smell, and one you can taste."
    },
    {
      id: "emotion-regulation",
      name: "Emotion Regulation",
      description: "Techniques for managing overwhelming feelings",
      duration: 480,
      instructions: "Acknowledge your current emotions without trying to change them. Breathe steadily and remind yourself that feelings are temporary."
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleSessionChange = (sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId);
    if (session) {
      setSelectedSession(sessionId);
      setTimeLeft(session.duration);
      setTotalTime(session.duration);
      setIsActive(false);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(totalTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSession = sessions.find(s => s.id === selectedSession);
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="min-h-screen bg-gradient-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Silent Meditation
          </h1>
          <p className="text-lg text-muted-foreground">
            Mindfulness practices designed for sensory sensitivity and emotional wellbeing
          </p>
        </div>

        {/* Session Selection */}
        <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Choose Your Session</CardTitle>
            <CardDescription className="text-center">
              Select a meditation practice that feels right for you today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedSession} onValueChange={handleSessionChange}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select a meditation session" />
              </SelectTrigger>
              <SelectContent>
                {sessions.map((session) => (
                  <SelectItem key={session.id} value={session.id}>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{session.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.floor(session.duration / 60)} minutes - {session.description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Timer Interface */}
        {currentSession && (
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{currentSession.name}</CardTitle>
              <CardDescription>{currentSession.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Timer Display */}
              <div className="text-center">
                <div className="text-6xl font-mono font-bold text-primary mb-4">
                  {formatTime(timeLeft)}
                </div>
                <Progress value={progress} className="w-full max-w-md mx-auto mb-6" />
              </div>

              {/* Controls */}
              <div className="flex justify-center space-x-4">
                <Button
                  size="lg"
                  onClick={toggleTimer}
                  className="bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle"
                >
                  {isActive ? "Pause" : "Start"} Meditation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetTimer}
                  className="border-primary/30 hover:bg-primary/10"
                >
                  Reset
                </Button>
              </div>

              {/* Instructions */}
              <Card className="bg-gradient-calm border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentSession.instructions}
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        )}

        {/* Tips for Autism-Friendly Meditation */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Sensory Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• Find a quiet, comfortable space free from unexpected sounds</p>
              <p>• Adjust lighting to your preference - dim or natural light often works best</p>
              <p>• Use familiar textures like a favorite blanket or weighted pad</p>
              <p>• Consider noise-canceling headphones if environmental sounds are distracting</p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-secondary">Gentle Reminders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• There's no "wrong" way to meditate - any effort is valuable</p>
              <p>• It's normal for your mind to wander - gently return focus when you notice</p>
              <p>• Start with shorter sessions and gradually increase duration</p>
              <p>• Stop anytime you feel overwhelmed - this is about self-care</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Meditation;