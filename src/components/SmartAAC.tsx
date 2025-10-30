import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Camera, CameraOff, Volume2, Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useEmotionDetection, DetectedEmotion } from '@/hooks/useEmotionDetection';
import { aacWords, sortWordsByEmotion, EmotionType, AACWord } from '@/data/aacWords';
import { getCategoryColor } from '@/data/categoryColors';

export const SmartAAC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [sortedWords, setSortedWords] = useState<{ category: string; words: AACWord[] }[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { isLoading, emotion, error, startDetection, stopDetection } = useEmotionDetection();

  // Define critical words that should always appear at the top of their categories
  const criticalWords = ['I', 'my', 'your', 'want', 'need', 'help', 'yes', 'no'];
  
  // Define category order following grammar structure (Subject-Verb-Object)
  const categoryOrder = [
    'pronouns',      // Subject
    'verbs',         // Verb
    'actions',       // Verb
    'requests',      // Verb/Need
    'objects',       // Object/Noun
    'people',        // Object/Noun
    'places',        // Object/Noun
    'descriptors',   // Adjectives
    'emotions',      // Emotional states
    'adverbs',       // Modifiers
    'prepositions',  // Position
    'temporal',      // Time
    'articles',      // Grammar
    'conjunctions',  // Connectors
    'questions',     // Questions
    'responses',     // Social
  ];

  useEffect(() => {
    // Group words by category
    const categorizedWords = categoryOrder.map(category => {
      let categoryWords = aacWords.filter(word => word.category === category);
      
      // Sort by emotion if available
      if (emotion) {
        categoryWords = sortWordsByEmotion(categoryWords, emotion.emotion as EmotionType);
      }
      
      // Prioritize critical words within each category
      const critical = categoryWords.filter(word => criticalWords.includes(word.word));
      const nonCritical = categoryWords.filter(word => !criticalWords.includes(word.word));
      categoryWords = [...critical, ...nonCritical];
      
      return { category, words: categoryWords };
    }).filter(cat => cat.words.length > 0);
    
    setSortedWords(categorizedWords as any);
  }, [emotion]);

  const handleToggleVideo = async () => {
    if (!isVideoActive && videoRef.current) {
      await startDetection(videoRef.current);
      setIsVideoActive(true);
    } else {
      stopDetection();
      setIsVideoActive(false);
    }
  };

  const handleWordClick = (word: string) => {
    setSelectedWords([...selectedWords, word]);
    speakWord(word);
  };

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak = () => {
    const sentence = selectedWords.join(' ');
    if (sentence) {
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClear = () => {
    setSelectedWords([]);
  };

  const getEmotionColor = (emotion: DetectedEmotion) => {
    const colors: Record<DetectedEmotion, string> = {
      happy: 'bg-yellow-500',
      sad: 'bg-blue-500',
      angry: 'bg-red-500',
      fearful: 'bg-purple-500',
      disgusted: 'bg-green-500',
      surprised: 'bg-orange-500',
      neutral: 'bg-gray-500',
    };
    return colors[emotion];
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Smart AAC - Emotion-Aware Communication
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Words sorted by emotion detection
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Video Feed */}
            <div className="space-y-2">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
                {!isVideoActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Camera off</p>
                  </div>
                )}
              </div>
              <Button
                onClick={handleToggleVideo}
                disabled={isLoading}
                className="w-full"
                variant={isVideoActive ? 'destructive' : 'default'}
              >
                {isVideoActive ? (
                  <>
                    <CameraOff className="w-4 h-4 mr-2" />
                    Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4 mr-2" />
                    Start Camera
                  </>
                )}
              </Button>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>

            {/* Emotion Display */}
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Detected Emotion</h3>
                {emotion ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${getEmotionColor(emotion.emotion)}`} />
                      <span className="text-lg font-bold capitalize">{emotion.emotion}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Confidence: {(emotion.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No emotion detected</p>
                )}
              </div>

              {/* Selected Words */}
              <div className="p-4 bg-muted rounded-lg min-h-[120px]">
                <h3 className="font-semibold mb-2">Selected Words</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedWords.map((word, index) => (
                    <Badge key={index} variant="secondary" className="text-base">
                      {word}
                    </Badge>
                  ))}
                  {selectedWords.length === 0 && (
                    <p className="text-sm text-muted-foreground">Tap words below to build a sentence</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleSpeak}
                    disabled={selectedWords.length === 0}
                    className="flex-1"
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Speak
                  </Button>
                  <Button
                    onClick={handleClear}
                    disabled={selectedWords.length === 0}
                    variant="outline"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Word Grid by Category */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Communication Words</h3>
              <div className="text-sm text-muted-foreground text-right">
                {emotion && (
                  <p>
                    Sorted by: <span className="font-semibold capitalize">{emotion.emotion}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="w-full overflow-x-auto">
              <div className="flex gap-3 pb-4 min-w-max">
                {sortedWords.map(({ category, words }) => (
                  <div key={category} className="flex-shrink-0 w-[140px] space-y-2">
                    <h4 className="text-xs font-semibold uppercase text-muted-foreground text-center sticky top-0 bg-background py-2">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {words.map((word) => {
                        // Get the Lucide icon component dynamically
                        const IconComponent = word.icon 
                          ? (LucideIcons as any)[word.icon] 
                          : null;
                        
                        const colorClass = getCategoryColor(word.category);

                        return (
                          <Button
                            key={word.id}
                            onClick={() => handleWordClick(word.word)}
                            variant="outline"
                            className={`w-full h-auto py-3 px-2 text-sm transition-colors border-2 ${colorClass}`}
                          >
                            <div className="flex flex-col items-center gap-1.5">
                              {IconComponent && (
                                <IconComponent className="w-7 h-7" />
                              )}
                              <span className="font-medium text-center text-foreground text-xs leading-tight">
                                {word.word}
                              </span>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
