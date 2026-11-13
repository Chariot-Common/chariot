// Keep an object's opened (hovered) state inside the screen.
// The object is opened for an instant with every transition switched off, everything visible in it
// is measured, and it is closed again. Then it gets a scale (--fit, never above 1) and a sideways
// shift (--shift) so that, opened, it sits below the top bar and inside the screen's edges.
// The page applies them with: transform: translateX(var(--shift, 0px)) scale(var(--fit, 1)).

const TOP = 84; // the top bar
const EDGE = 16; // room at each side

export function fitOpen(target: HTMLElement, setOpen: (on: boolean) => void, room = { top: TOP, bottom: TOP }) {
  target.style.setProperty('--fit', '1');
  target.style.setProperty('--shift', '0px');
  const root = document.documentElement;
  root.classList.add('fit-measuring');
  setOpen(true);
  void target.offsetHeight; // apply the opened styles now
  let l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;
  target.querySelectorAll<HTMLElement>('*').forEach((n) => {
    const seen = (n as any).checkVisibility ? (n as any).checkVisibility({ opacityProperty: true, visibilityProperty: true }) : true;
    if (!seen) return;
    const q = n.getBoundingClientRect();
    if (q.width < 1 || q.height < 1) return;
    l = Math.min(l, q.left); t = Math.min(t, q.top); r = Math.max(r, q.right); b = Math.max(b, q.bottom);
  });
  setOpen(false);
  void target.offsetHeight;
  root.classList.remove('fit-measuring');
  if (!isFinite(l)) return;

  const box = target.getBoundingClientRect();
  const cx = box.left + box.width / 2;
  const availH = innerHeight - room.top - room.bottom;
  const availW = innerWidth - 2 * EDGE;
  const s = Math.min(1, availH / (b - t), availW / (r - l));
  // after scaling round the centre, nudge sideways if an edge still sticks out
  const nl = cx + (l - cx) * s, nr = cx + (r - cx) * s;
  let dx = 0;
  if (nl < EDGE) dx = EDGE - nl;
  else if (nr > innerWidth - EDGE) dx = innerWidth - EDGE - nr;
  target.style.setProperty('--fit', s.toFixed(3));
  target.style.setProperty('--shift', `${Math.round(dx)}px`);
}

// run a fitting function now, once everything has loaded, and again after a resize
export function keepFitted(run: () => void, signal?: AbortSignal) {
  run();
  if (document.readyState !== 'complete') addEventListener('load', run, { once: true, signal });
  let raf = 0;
  addEventListener('resize', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(run); }, { signal });
}
