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

// Measure everything visible inside `target` (the box that holds what you see of the object).
function reach(target: HTMLElement) {
  let l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;
  target.querySelectorAll<HTMLElement>('*').forEach((n) => {
    const seen = (n as any).checkVisibility ? (n as any).checkVisibility({ opacityProperty: true, visibilityProperty: true }) : true;
    if (!seen) return;
    // a screen clips its long page: only the frame counts
    if (n.parentElement?.closest('.screen')) return;
    // light and atmosphere behind an object is not part of its size
    if (n.closest('[data-nofit]')) return;
    const q = n.getBoundingClientRect();
    if (q.width < 1 || q.height < 1) return;
    l = Math.min(l, q.left); t = Math.min(t, q.top); r = Math.max(r, q.right); b = Math.max(b, q.bottom);
  });
  return isFinite(l) ? { l, t, r, b } : null;
}

// A project on the homepage: object and name always fit in one screen.
// --stage-h: the stage's height (the screen, less the top bar and the caption).
// --rest:    the object's scale at rest, so it fits its stage and its column.
// --open:    an extra scale while opened, so the opened object fits the screen's height and
//            its own bounds (its half of the page when it is paired, the screen when it is alone).
// --shift:   a sideways nudge while opened, to keep it inside those bounds.
export function fitProject(proj: HTMLElement, obj: HTMLElement, setOpen: (on: boolean) => void, paired: boolean) {
  const root = document.documentElement;
  const cap = proj.querySelector<HTMLElement>('.cap');
  const capH = cap ? cap.getBoundingClientRect().height : 0;
  const stageH = Math.max(320, innerHeight - TOP - capH - 22 - 28);
  proj.style.setProperty('--stage-h', `${Math.round(stageH)}px`);
  ['--rest', '--open'].forEach((k) => obj.style.setProperty(k, '1'));
  obj.style.setProperty('--shift', '0px');
  obj.style.setProperty('--lift', '0px');

  root.classList.add('fit-measuring');
  setOpen(false); void obj.offsetHeight;
  const rest = reach(obj);
  setOpen(true); void obj.offsetHeight;
  const open = reach(obj);
  setOpen(false); void obj.offsetHeight;
  root.classList.remove('fit-measuring');
  if (!rest || !open) return;

  const box = proj.getBoundingClientRect();
  const colW = box.width;
  const restS = Math.min(1, (stageH * 0.94) / (rest.b - rest.t), (colW * 0.96) / (rest.r - rest.l));
  // bounds for the opened object: its own half (with a little of the gap) or the screen
  const bl = paired ? Math.max(EDGE, box.left - 12) : EDGE;
  const br = paired ? Math.min(innerWidth - EDGE, box.right + 12) : innerWidth - EDGE;
  const oh = (open.b - open.t) * restS, ow = (open.r - open.l) * restS;
  // opened, it stays above its own name: between a little above the stage and the stage's foot
  const stage = proj.querySelector<HTMLElement>('.stage')?.getBoundingClientRect();
  const head = Math.min(90, innerHeight * 0.08);
  const roomH = stage ? stage.height + head : innerHeight - TOP - 24;
  const openS = Math.min(1, roomH / oh, (br - bl) / ow);
  const s = restS * openS;
  const o = obj.getBoundingClientRect();
  const cx = o.left + o.width / 2;
  const nl = cx + (open.l - cx) * s, nr = cx + (open.r - cx) * s;
  let dx = 0;
  if (nl < bl) dx = bl - nl; else if (nr > br) dx = br - nr;
  let dy = 0;
  if (stage) {
    const cy = o.top + o.height / 2;
    const nt = cy + (open.t - cy) * s, nb = cy + (open.b - cy) * s;
    if (nb > stage.bottom) dy = stage.bottom - nb; else if (nt < stage.top - head) dy = stage.top - head - nt;
  }
  obj.style.setProperty('--lift', `${Math.round(dy)}px`);
  obj.style.setProperty('--rest', restS.toFixed(3));
  obj.style.setProperty('--open', openS.toFixed(3));
  obj.style.setProperty('--shift', `${Math.round(dx)}px`);
}
