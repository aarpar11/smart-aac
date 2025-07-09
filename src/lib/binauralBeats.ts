export class BinauralBeats {
  private audioContext: AudioContext | null = null;
  private leftOscillator: OscillatorNode | null = null;
  private rightOscillator: OscillatorNode | null = null;
  private leftGainNode: GainNode | null = null;
  private rightGainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  constructor() {
    this.initAudioContext();
  }

  private initAudioContext(): void {
    if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  async createBinauralBeat(
    leftFrequency: number, 
    rightFrequency: number, 
    volume: number = 0.1
  ): Promise<void> {
    if (!this.audioContext) {
      throw new Error('Audio context not available');
    }

    // Resume audio context if suspended (required for user interaction)
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    // Stop any existing beats
    this.stop();

    // Create oscillators
    this.leftOscillator = this.audioContext.createOscillator();
    this.rightOscillator = this.audioContext.createOscillator();

    // Create gain nodes for volume control
    this.leftGainNode = this.audioContext.createGain();
    this.rightGainNode = this.audioContext.createGain();

    // Set frequencies
    this.leftOscillator.frequency.setValueAtTime(leftFrequency, this.audioContext.currentTime);
    this.rightOscillator.frequency.setValueAtTime(rightFrequency, this.audioContext.currentTime);

    // Set wave type (sine wave for pure tones)
    this.leftOscillator.type = 'sine';
    this.rightOscillator.type = 'sine';

    // Set volume
    this.leftGainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    this.rightGainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);

    // Create stereo panner or merger for proper left/right channel separation
    const merger = this.audioContext.createChannelMerger(2);
    
    // Connect left oscillator to left channel
    this.leftOscillator.connect(this.leftGainNode);
    this.leftGainNode.connect(merger, 0, 0);

    // Connect right oscillator to right channel  
    this.rightOscillator.connect(this.rightGainNode);
    this.rightGainNode.connect(merger, 0, 1);

    // Connect to destination
    merger.connect(this.audioContext.destination);

    // Start oscillators
    this.leftOscillator.start();
    this.rightOscillator.start();

    this.isPlaying = true;
  }

  setVolume(volume: number): void {
    if (this.leftGainNode && this.rightGainNode && this.audioContext) {
      const clampedVolume = Math.max(0, Math.min(1, volume / 100));
      this.leftGainNode.gain.setValueAtTime(clampedVolume, this.audioContext.currentTime);
      this.rightGainNode.gain.setValueAtTime(clampedVolume, this.audioContext.currentTime);
    }
  }

  updateFrequencies(leftFrequency: number, rightFrequency: number): void {
    if (this.leftOscillator && this.rightOscillator && this.audioContext) {
      this.leftOscillator.frequency.setValueAtTime(leftFrequency, this.audioContext.currentTime);
      this.rightOscillator.frequency.setValueAtTime(rightFrequency, this.audioContext.currentTime);
    }
  }

  stop(): void {
    if (this.leftOscillator) {
      this.leftOscillator.stop();
      this.leftOscillator.disconnect();
      this.leftOscillator = null;
    }
    if (this.rightOscillator) {
      this.rightOscillator.stop();
      this.rightOscillator.disconnect();
      this.rightOscillator = null;
    }
    if (this.leftGainNode) {
      this.leftGainNode.disconnect();
      this.leftGainNode = null;
    }
    if (this.rightGainNode) {
      this.rightGainNode.disconnect();
      this.rightGainNode = null;
    }
    this.isPlaying = false;
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Calculate the binaural beat frequency (difference between left and right)
  static getBeatFrequency(leftFreq: number, rightFreq: number): number {
    return Math.abs(leftFreq - rightFreq);
  }

  // Generate frequencies for a given beat frequency and base frequency
  static getFrequenciesForBeat(beatFrequency: number, baseFrequency: number = 200): [number, number] {
    const leftFreq = baseFrequency;
    const rightFreq = baseFrequency + beatFrequency;
    return [leftFreq, rightFreq];
  }
}