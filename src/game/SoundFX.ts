// Web Audio Synthesizer for high-fidelity retro game audio
class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled = true;

  constructor() {
    // Audio Context is initialized lazily on first user interaction to bypass browser autoplay rules
  }

  private initCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  public isEnabled() {
    return this.soundEnabled;
  }

  // Play a simple synthesized note sequence
  public playSlash() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;
    
    // Low pass filtered noise + sharp tone for whoosh swoosh sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);
    
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  }

  public playJump() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  }

  public playHurt() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  }

  public playDefeatEnemy() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;

    // Two rapid double-beeps going up
    const time = ctx.currentTime;
    
    const playNote = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration - 0.01);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };

    playNote(220, time, 0.08);
    playNote(330, time + 0.08, 0.08);
    playNote(440, time + 0.16, 0.12);
  }

  public playTrapTrigger() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  }

  public playVictory() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;
    const time = ctx.currentTime;

    const playFanfareNote = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      
      gain.gain.setValueAtTime(0.06, start);
      gain.gain.linearRampToValueAtTime(0.05, start + duration * 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };

    // Major medieval chord fanfare
    playFanfareNote(261.63, time, 0.15); // C4
    playFanfareNote(329.63, time + 0.15, 0.15); // E4
    playFanfareNote(392.00, time + 0.30, 0.15); // G4
    playFanfareNote(523.25, time + 0.45, 0.35); // C5
    playFanfareNote(392.00, time + 0.80, 0.15); // G4
    playFanfareNote(523.25, time + 0.95, 0.60); // C5 (held)
  }

  public playGameOver() {
    if (!this.soundEnabled) return;
    this.initCtx();
    const ctx = this.ctx!;
    const time = ctx.currentTime;

    const playDroneNote = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, start);
      osc.frequency.linearRampToValueAtTime(freq - 15, start + duration); // pitch drop
      
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.linearRampToValueAtTime(0.001, start + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };

    // Low, sad minor cascade
    playDroneNote(196.00, time, 0.4); // G3
    playDroneNote(185.00, time + 0.4, 0.4); // F#3
    playDroneNote(174.61, time + 0.8, 0.4); // F3
    playDroneNote(130.81, time + 1.2, 1.2); // C3 sad epic drone
  }
}

export const soundFX = new SoundManager();
