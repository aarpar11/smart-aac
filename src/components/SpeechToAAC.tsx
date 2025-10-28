import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

import { useToast } from '@/hooks/use-toast';

interface SpeechToAACProps {
  onSuggestionsReceived: (words: string[]) => void;
}

export const SpeechToAAC = ({ onSuggestionsReceived }: SpeechToAACProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const {
    isListening,
    transcript,
    error: speechError,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  const handleStartListening = () => {
    resetTranscript();
    startListening();
  };

  const handleStopListening = async () => {
    stopListening();
    
    if (transcript) {
      setIsProcessing(true);
      try {
        const resp = await fetch('https://aatddzovqjfyzkfnrbkc.functions.supabase.co/functions/v1/aac-suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ spokenText: transcript })
        });

        if (!resp.ok) {
          if (resp.status === 429) {
            toast({ title: 'Rate limited', description: 'Please try again in a moment.', variant: 'destructive' });
            return;
          }
          if (resp.status === 402) {
            toast({ title: 'Out of credits', description: 'Please add credits to continue.', variant: 'destructive' });
            return;
          }
          throw new Error(`Function error: ${resp.status}`);
        }

        const data = await resp.json();

        if (data?.suggestedWords) {
          onSuggestionsReceived(data.suggestedWords);
          toast({
            title: 'AAC Suggestions Ready',
            description: `Found ${data.suggestedWords.length} relevant words for the response`,
          });
        }
      } catch (error) {
        console.error('Error getting AAC suggestions:', error);
        toast({
          title: 'Error',
          description: 'Failed to get AAC suggestions. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Voice Input Helper</h3>
            {isListening && (
              <div className="flex items-center gap-2 text-sm text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Listening...
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Someone can speak to help find the right words for the child to respond
          </p>

          {transcript && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Heard:</p>
              <p className="text-sm">{transcript}</p>
            </div>
          )}

          {speechError && (
            <p className="text-sm text-destructive">{speechError}</p>
          )}

          <div className="flex gap-2">
            {!isListening ? (
              <Button
                onClick={handleStartListening}
                disabled={isProcessing}
                className="flex-1"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4 mr-2" />
                    Start Listening
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={handleStopListening}
                variant="destructive"
                className="flex-1"
              >
                <MicOff className="w-4 h-4 mr-2" />
                Stop & Get Suggestions
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
