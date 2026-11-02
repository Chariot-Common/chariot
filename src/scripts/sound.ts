// Small synthesized sounds, nothing to download. On by default; browsers only
// allow audio after the first click or key press, so the context unlocks then.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let on = true;
try { on = localStorage.getItem('chariot-sound') !== 'off' && !reduce; } catch {}

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;

function unlock() {
  if (!ctx) {
    ctx = new AudioContext();
    noise = ctx.createBuffer(1, ctx.sampleRate * 0.6, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === 'suspended') ctx.resume();
}
addEventListener('pointerdown', unlock, { capture: true });
addEventListener('keydown', unlock, { capture: true });

const ready = () => on && ctx && ctx.state === 'running';
const touch = () => matchMedia('(hover: none)').matches;

function env(g: GainNode, t: number, peak: number, attack: number, release: number) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
}

/** Soft tick for hovering things you can open. */
export function tick(freq = 1500) {
  if (!ready() || touch()) return;
  const t = ctx!.currentTime, o = ctx!.createOscillator(), g = ctx!.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(freq, t);
  o.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.05);
  env(g, t, 0.04, 0.004, 0.06);
  o.connect(g).connect(ctx!.destination);
  o.start(t); o.stop(t + 0.08);
}

/** Lower, rounder press for clicks. */
export function press() {
  if (!ready()) return;
  const t = ctx!.currentTime, o = ctx!.createOscillator(), g = ctx!.createGain();
  o.type = 'triangle';
  o.frequency.setValueAtTime(320, t);
  o.frequency.exponentialRampToValueAtTime(140, t + 0.09);
  env(g, t, 0.09, 0.003, 0.11);
  o.connect(g).connect(ctx!.destination);
  o.start(t); o.stop(t + 0.14);
}

function noiseBurst(type: BiquadFilterType, from: number, to: number, dur: number, peak: number) {
  if (!ready() || !noise) return;
  const t = ctx!.currentTime, src = ctx!.createBufferSource(), f = ctx!.createBiquadFilter(), g = ctx!.createGain();
  src.buffer = noise;
  f.type = type; f.Q.value = 0.9;
  f.frequency.setValueAtTime(from, t);
  f.frequency.exponentialRampToValueAtTime(to, t + dur);
  env(g, t, peak, dur * 0.35, dur * 0.65);
  src.connect(f).connect(g).connect(ctx!.destination);
  src.start(t); src.stop(t + dur + 0.02);
}

/** Air moving past: page changes. */
export const whoosh = () => noiseBurst('bandpass', 380, 2600, 0.42, 0.05);
/** A page being turned: editorial moments. */
export const paper = () => noiseBurst('highpass', 2400, 5200, 0.16, 0.035);

export const isOn = () => on;
export function toggle() {
  on = !on;
  try { localStorage.setItem('chariot-sound', on ? 'on' : 'off'); } catch {}
  unlock();
  if (on) press();
  return on;
}
