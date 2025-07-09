import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { BinauralBeats } from "@/lib/binauralBeats";

const BinauralBeatsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState([40]);
  const [volume, setVolume] = useState([50]);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const binauralBeatsRef = useRef<BinauralBeats | null>(null);

  useEffect(() => {
    binauralBeatsRef.current = new BinauralBeats();
    
    return () => {
      if (binauralBeatsRef.current) {
        binauralBeatsRef.current.stop();
      }
    };
  }, []);

  const presets = [
    { name: "Deep Focus", frequency: 40, description: "Gamma waves for concentration", color: "bg-gradient-primary" },
    { name: "Relaxation", frequency: 10, description: "Alpha waves for calm", color: "bg-gradient-secondary" },
    { name: "Sleep", frequency: 4, description: "Delta waves for rest", color: "bg-accent" },
    { name: "Meditation", frequency: 8, description: "Theta waves for mindfulness", color: "bg-gradient-primary" },
  ];

  const handlePresetClick = (preset: typeof presets[0]) => {
    setFrequency([preset.frequency]);
    setSelectedPreset(preset.name);
    
    if (isPlaying && binauralBeatsRef.current) {
      const [leftFreq, rightFreq] = BinauralBeats.getFrequenciesForBeat(preset.frequency);
      binauralBeatsRef.current.updateFrequencies(leftFreq, rightFreq);
    }
  };

  const handlePlayToggle = async () => {
    if (!binauralBeatsRef.current) return;

    if (isPlaying) {
      binauralBeatsRef.current.stop();
      setIsPlaying(false);
    } else {
      try {
        const [leftFreq, rightFreq] = BinauralBeats.getFrequenciesForBeat(frequency[0]);
        await binauralBeatsRef.current.createBinauralBeat(leftFreq, rightFreq, volume[0] / 100);
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing binaural beats:', error);
      }
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (binauralBeatsRef.current) {
      binauralBeatsRef.current.setVolume(newVolume[0]);
    }
  };

  const handleFrequencyChange = (newFrequency: number[]) => {
    setFrequency(newFrequency);
    if (isPlaying && binauralBeatsRef.current) {
      const [leftFreq, rightFreq] = BinauralBeats.getFrequenciesForBeat(newFrequency[0]);
      binauralBeatsRef.current.updateFrequencies(leftFreq, rightFreq);
    }
  };

  const getFrequencyInfo = (freq: number) => {
    if (freq <= 4) return { type: "Delta", benefit: "Deep sleep & healing" };
    if (freq <= 8) return { type: "Theta", benefit: "Meditation & creativity" };
    if (freq <= 13) return { type: "Alpha", benefit: "Relaxation & focus" };
    if (freq <= 30) return { type: "Beta", benefit: "Active concentration" };
    return { type: "Gamma", benefit: "High-level cognitive processing" };
  };

  const freqInfo = getFrequencyInfo(frequency[0]);

  return (
    <div className="min-h-screen bg-gradient-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Binaural Beats Therapy
          </h1>
          <p className="text-lg text-muted-foreground">
            Personalized sound frequencies to promote relaxation and focus
          </p>
        </div>

        {/* Main Player Card */}
        <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sound Therapy Player</CardTitle>
            <CardDescription>
              Adjust frequency and volume to find your perfect calming sound
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Frequency Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Frequency</label>
                <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                  {frequency[0]} Hz - {freqInfo.type}
                </Badge>
              </div>
              <Slider
                value={frequency}
                onValueChange={handleFrequencyChange}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                {freqInfo.benefit}
              </p>
            </div>

            {/* Volume Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Volume</label>
                <Badge variant="outline">{volume[0]}%</Badge>
              </div>
              <Slider
                value={volume}
                onValueChange={handleVolumeChange}
                max={100}
                min={0}
                step={5}
                className="w-full"
              />
            </div>

            {/* Play Controls */}
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                onClick={handlePlayToggle}
                className="bg-gradient-primary hover:opacity-90 transition-gentle shadow-gentle"
              >
                {isPlaying ? "Pause" : "Play"} Binaural Beats
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preset Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Quick Presets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {presets.map((preset) => (
              <Card
                key={preset.name}
                className={`cursor-pointer transition-gentle hover:shadow-gentle bg-card/50 backdrop-blur-sm border-border/50 ${
                  selectedPreset === preset.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handlePresetClick(preset)}
              >
                <CardHeader className="text-center pb-3">
                  <div className={`w-12 h-12 mx-auto rounded-full ${preset.color} flex items-center justify-center mb-2 shadow-soft`}>
                    <span className="text-primary-foreground font-semibold">{preset.frequency}</span>
                  </div>
                  <CardTitle className="text-lg">{preset.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm">
                    {preset.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information */}
        <Card className="bg-card/30 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-xl">How Binaural Beats Work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Binaural beats occur when two slightly different frequencies are played in each ear. 
              Your brain perceives a third tone - the mathematical difference between the two frequencies.
            </p>
            <p>
              This phenomenon can help synchronize brainwaves, potentially promoting relaxation, 
              focus, or sleep depending on the frequency used.
            </p>
            <p className="text-sm">
              <strong>Note:</strong> Use headphones for the best binaural beats experience. 
              Start with lower volumes and gradually adjust to your comfort level.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BinauralBeatsPage;