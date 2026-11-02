import Lenis from 'lenis';
import { navigate } from 'astro:transitions/client';
import { tick, press, whoosh, paper, toggle, isOn } from './sound';
import { collect, update } from './scroll';

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- smooth scroll ---------- */
const lenis = reduce ? null : new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
if (lenis) {
  lenis.on('scroll', update);
  const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

/* ---------- sound ---------- */
function paintSound() {
  document.querySelectorAll<HTMLButtonElement>('[data-sound]').forEach((b) => {
    b.setAttribute('aria-pressed', String(isOn()));
    const label = b.querySelector('span');
    if (label) label.textContent = isOn() ? 'Sound on' : 'Sound off';
  });
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.closest('[data-sound]')) { toggle(); paintSound(); return; }
  if (target.closest('a[href], button')) press();
});

let lastTick: Element | null = null;
document.addEventListener('pointerover', (e) => {
  const el = (e.target as HTMLElement).closest('[data-tick]');
  if (el && el !== lastTick) tick();
  lastTick = el;
});

/* ---------- cursor label: name, then a muted second line ---------- */
const label = document.querySelector<HTMLElement>('.cursor-label');
let lx = 0, ly = 0, tx = 0, ty = 0, labelRaf = 0;
function moveLabel() {
  lx += (tx - lx) * 0.22; ly += (ty - ly) * 0.22;
  if (label) label.style.transform = `translate(${lx + 16}px, ${ly + 16}px)`;
  labelRaf = Math.abs(tx - lx) + Math.abs(ty - ly) > 0.3 ? requestAnimationFrame(moveLabel) : 0;
}
document.addEventListener('pointermove', (e) => {
  tx = e.clientX; ty = e.clientY;
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
  if (label) {
    if (el) {
      const [name, sub] = (el.dataset.cursor || '').split('|');
      const html = `${name}${sub ? `<em>${sub}</em>` : ''}`;
      if (label.innerHTML !== html) label.innerHTML = html;
      if (!label.classList.contains('on')) { lx = tx; ly = ty; }
      label.classList.add('on');
    } else label.classList.remove('on');
  }
  if (!labelRaf) labelRaf = requestAnimationFrame(moveLabel);
});

/* ---------- dock: icons swell around the pointer, like the macOS Dock ---------- */
document.addEventListener('pointermove', (e) => {
  const dock = (e.target as HTMLElement).closest<HTMLElement>('.dock-items');
  document.querySelectorAll<HTMLElement>('.dock-items').forEach((d) => {
    d.querySelectorAll<HTMLElement>('.dock-item').forEach((item) => {
      if (d !== dock || reduce) { item.style.transform = ''; return; }
      const r = item.getBoundingClientRect();
      const dist = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = 1 + 0.6 * Math.max(0, 1 - dist / 90);
      item.style.transform = `translateY(${-(s - 1) * 9}px) scale(${s.toFixed(3)})`;
    });
  });
});

/* ---------- rolling mark: turns with scroll speed, settles back ---------- */
let angle = 0, vel = 0, lastY = scrollY, rollRaf = 0;
function roll() {
  vel *= 0.9; angle += vel; angle *= 0.95;
  document.querySelectorAll<SVGElement>('[data-roll]').forEach((s) => (s.style.transform = `rotate(${angle.toFixed(2)}deg)`));
  rollRaf = Math.abs(angle) + Math.abs(vel) > 0.05 ? requestAnimationFrame(roll) : 0;
}
addEventListener('scroll', () => {
  if (reduce) return;
  vel += (scrollY - lastY) * 0.12; lastY = scrollY;
  if (!rollRaf) rollRaf = requestAnimationFrame(roll);
}, { passive: true });

/* ---------- media focus-in, videos that only play on screen, page-turn moments ---------- */
let io: IntersectionObserver | null = null;
let vio: IntersectionObserver | null = null;
function arm() {
  io?.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      if ((en.target as HTMLElement).dataset.paper !== undefined) paper();
      io?.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('[data-reveal]:not(.in), [data-paper]').forEach((el) => io!.observe(el));

  vio?.disconnect();
  vio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const v = en.target as HTMLVideoElement;
      if (en.isIntersecting) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('video[data-inview]').forEach((v) => vio!.observe(v));
}

/* ---------- arrow keys move between projects ---------- */
document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey || (e.target as HTMLElement).closest('input, textarea')) return;
  const dir = e.key === 'ArrowRight' ? 'next' : e.key === 'ArrowLeft' ? 'prev' : null;
  const link = dir && document.querySelector<HTMLAnchorElement>(`[data-${dir}]`);
  if (link) navigate(link.href);
});

/* ---------- page transitions ---------- */
// The swap replaces <html> attributes, so the mode is kept here and put back after it.
const isWork = (u: URL) => u.pathname.startsWith('/work/');
let vt = '';
document.addEventListener('astro:before-preparation', (e) => {
  const ev = e as unknown as { from: URL; to: URL };
  vt = isWork(ev.from) && isWork(ev.to) ? 'sheet' : 'page';
  root.dataset.vt = vt;
  whoosh();
});
document.addEventListener('astro:after-swap', () => {
  root.classList.add('js');
  if (lenis) { root.classList.add('lenis', 'lenis-smooth'); lenis.scrollTo(0, { immediate: true }); }
  if (vt) root.dataset.vt = vt;
});
document.addEventListener('astro:page-load', () => {
  paintSound();
  arm();
  collect();
  lenis?.resize();
  label?.classList.remove('on');
  setTimeout(() => { delete root.dataset.vt; }, 1400);
});
