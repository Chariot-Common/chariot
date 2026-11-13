"""Charioteers for a dark ground, with GrabCut: the tight figure shape seeds it, the parchment
colour model decides the edge; parchment left in the soft edge is unmixed. args: src fig_dir out"""
import sys, glob, os
import numpy as np, cv2
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
src, figd, out = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(out, exist_ok=True)
for f in sorted(glob.glob(os.path.join(src, '*.webp'))):
    name = os.path.basename(f)
    rgb = np.asarray(Image.open(f).convert('RGB')); h, w, _ = rgb.shape
    sc = 0.5; small = cv2.resize(rgb, (int(w * sc), int(h * sc)), interpolation=cv2.INTER_AREA)
    bgr = cv2.cvtColor(small, cv2.COLOR_RGB2BGR); H, W = small.shape[:2]
    a = small.astype(np.float32)
    bg = cv2.resize(cv2.medianBlur(cv2.resize(small, (W // 4, H // 4)), 31), (W, H)).astype(np.float32)
    d = np.sqrt(((a - bg) ** 2).sum(-1)); lum = a.mean(-1)
    loose = (d > 30) | (lum < 150)
    raw = ndi.binary_closing(loose, iterations=3)
    loose = ndi.binary_fill_holes(raw)
    lab, n = ndi.label(loose); sz = ndi.sum(loose, lab, range(1, n + 1)); keep = np.zeros(n + 1, bool); keep[1:] = sz > .002 * H * W; loose = keep[lab]
    strict = ndi.binary_erosion(loose, iterations=6) & ((d > 60) | (lum < 110))
    m = np.full((H, W), cv2.GC_BGD, np.uint8)
    m[ndi.binary_dilation(loose, iterations=8)] = cv2.GC_PR_BGD
    m[loose] = cv2.GC_PR_FGD
    m[ndi.binary_erosion(loose, iterations=10)] = cv2.GC_PR_FGD
    m[strict] = cv2.GC_FGD
    b1, f1 = np.zeros((1, 65)), np.zeros((1, 65))
    cv2.grabCut(bgr, m, None, b1, f1, 6, cv2.GC_INIT_WITH_MASK)
    fg = (m == 1) | (m == 3)
    # holes: open only those that look like parchment and are not tiny
    holes = ndi.binary_fill_holes(fg) & ~fg
    hl, hn = ndi.label(holes)
    if hn:
        hd = np.asarray(ndi.mean(d, hl, range(1, hn + 1))); hs = np.asarray(ndi.sum(holes, hl, range(1, hn + 1)))
        fill = np.zeros(hn + 1, bool); fill[1:] = (hd > 24) | (hs < .002 * H * W); fg |= fill[hl]
    lab, n = ndi.label(fg); sz = ndi.sum(fg, lab, range(1, n + 1)); keep = np.zeros(n + 1, bool); keep[1:] = sz > .002 * H * W; fg = keep[lab]
    # parchment showing inside the figure (between legs, under an arm): sizeable areas of plain parchment come out
    fg = ndi.binary_opening(fg, iterations=1)
    al = cv2.resize(fg.astype(np.float32), (w, h), interpolation=cv2.INTER_LINEAR)
    al = cv2.GaussianBlur(al, (0, 0), 1.0); al = np.clip((al - .35) / .5, 0, 1)
    A = np.clip(al, 1e-3, 1)[..., None]
    bgf = cv2.resize(bg, (w, h)).astype(np.float32); af = rgb.astype(np.float32)
    col = np.where(al[..., None] < .97, np.clip((af - (1 - A) * bgf) / A, 0, 255), af)
    im = Image.fromarray(np.dstack([col, al * 255]).astype(np.uint8)); im = im.crop(im.getbbox())
    im.save(os.path.join(out, name), 'WEBP', quality=86, method=6); print(name, im.size)
