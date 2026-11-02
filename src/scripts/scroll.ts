// Scroll-linked progress for sections. Each [data-progress] element gets --p (0..1),
// which CSS turns into motion, so every animation shares one smooth source.
//   data-progress="pin"     a tall section with a sticky child: 0 at its top, 1 when it lets go
//   data-progress="through" 0 when it enters at the bottom, 1 when it leaves at the top
//   data-progress="enter"   0 when it enters, 1 when its top reaches the middle of the screen
const clamp = (v: number) => Math.min(1, Math.max(0, v));
let els: HTMLElement[] = [];
let queued = false;

function measure() {
  queued = false;
  const vh = innerHeight;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -vh || r.top > vh * 2) continue;
    const mode = el.dataset.progress;
    const p = mode === 'pin' ? clamp(-r.top / Math.max(1, r.height - vh))
      : mode === 'enter' ? clamp((vh - r.top) / (vh * 0.5))
      : clamp((vh - r.top) / (vh + r.height));
    el.style.setProperty('--p', p.toFixed(4));
    if (p > 0 && !el.dataset.seen) { el.dataset.seen = '1'; el.dispatchEvent(new CustomEvent('progress:enter')); }
  }
}

export function update() { if (!queued) { queued = true; requestAnimationFrame(measure); } }

export function collect() {
  els = [...document.querySelectorAll<HTMLElement>('[data-progress]')];
  measure();
}

addEventListener('scroll', update, { passive: true });
addEventListener('resize', update);
