import { useEffect, useRef, useState } from 'react';
import * as H from '@vladmandic/human';

export type DetectedEmotion = 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised' | 'neutral';

export interface EmotionResult {
  emotion: DetectedEmotion;
  confidence: number;
}

export function useEmotionDetection() {
  const [isLoading, setIsLoading] = useState(true);
  const [emotion, setEmotion] = useState<EmotionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const humanRef = useRef<H.Human | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;

    const initHuman = async () => {
      try {
        const config: Partial<H.Config> = {
          backend: 'webgl',
          modelBasePath: 'https://cdn.jsdelivr.net/npm/@vladmandic/human/models',
          face: {
            enabled: true,
            emotion: { enabled: true },
            detector: { rotation: false },
            description: { enabled: false },
            iris: { enabled: false },
            liveness: { enabled: false },
          },
          body: { enabled: false },
          hand: { enabled: false },
          object: { enabled: false },
          gesture: { enabled: false },
        };

        const human = new H.Human(config);
        await human.load();
        await human.warmup();

        if (mounted) {
          humanRef.current = human;
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error initializing Human:', err);
        if (mounted) {
          setError('Failed to initialize emotion detection');
          setIsLoading(false);
        }
      }
    };

    initHuman();

    return () => {
      mounted = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const startDetection = async (videoElement: HTMLVideoElement) => {
    videoRef.current = videoElement;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 }
      });
      videoElement.srcObject = stream;
      await videoElement.play();

      detectEmotion();
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Failed to access camera');
    }
  };

  const detectEmotion = async () => {
    if (!humanRef.current || !videoRef.current) return;

    try {
      const result = await humanRef.current.detect(videoRef.current);

      if (result.face && result.face.length > 0) {
        const face = result.face[0];
        
        if (face.emotion && face.emotion.length > 0) {
          // Get the top emotion
          const topEmotion = face.emotion[0];
          
          // Map Human library emotion names to our emotion types
          const emotionMap: Record<string, DetectedEmotion> = {
            'happy': 'happy',
            'sad': 'sad',
            'angry': 'angry',
            'fearful': 'fearful',
            'fear': 'fearful',
            'disgusted': 'disgusted',
            'disgust': 'disgusted',
            'surprised': 'surprised',
            'surprise': 'surprised',
            'neutral': 'neutral'
          };

          const mappedEmotion = emotionMap[topEmotion.emotion.toLowerCase()] || 'neutral';
          
          setEmotion({
            emotion: mappedEmotion,
            confidence: topEmotion.score
          });
        }
      }
    } catch (err) {
      console.error('Error detecting emotion:', err);
    }

    animationFrameRef.current = requestAnimationFrame(detectEmotion);
  };

  const stopDetection = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return {
    isLoading,
    emotion,
    error,
    startDetection,
    stopDetection
  };
}
