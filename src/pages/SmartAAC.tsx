import { SmartAAC as SmartAACComponent } from '@/components/SmartAAC';
import logo from '@/assets/smart-aac-logo.jpg';

const SmartAAC = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src={logo} alt="Smart AAC Logo" className="w-16 h-16 object-contain" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Smart AAC Device
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An emotion-aware Augmentative and Alternative Communication device that helps non-verbal individuals 
              communicate more effectively by sorting words based on detected facial emotions.
            </p>
          </div>

          <SmartAACComponent />

          <div className="mt-8 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <h2 className="text-xl font-semibold mb-3">How It Works</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Click "Start Camera" to begin emotion detection</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>The system analyzes your facial expression in real-time</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Words are automatically sorted by relevance to your detected emotion</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Tap words to build a sentence, then click "Speak" to hear it aloud</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAAC;
