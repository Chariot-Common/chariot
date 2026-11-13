"""Cut the six Charioteer paintings out of their parchment, keeping a paper edge round each
figure (as if cut from the manuscript with scissors). Writes webp with alpha."""
import sys, glob, os
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

src_dir, out_dir = sys.argv[1], sys.argv[2]
os.makedirs(out_dir, exist_ok=True)

for f in sorted(glob.glob(os.path.join(src_dir, '*.webp'))):
    im = Image.open(f).convert('RGB')
    a = np.asarray(im).astype(np.float32)
    h, w, _ = a.shape
    # background varies slowly: estimate it with a heavy median of a downscaled copy
    small = im.resize((w // 8, h // 8))
    bg = np.asarray(small.filter(ImageFilter.MedianFilter(31)).resize((w, h), Image.BILINEAR)).astype(np.float32)
    d = np.sqrt(((a - bg) ** 2).sum(-1))
    # saturation/darkness cue: parchment is light and warm
    lum = a.mean(-1)
    fg = (d > 34) | (lum < 150)
    fg = ndi.binary_closing(fg, iterations=3)
    # an enclosed gap is filled only if it is not the parchment showing through
    holes = ndi.binary_fill_holes(fg) & ~fg
    hl, hn = ndi.label(holes)
    hd = ndi.mean(d, hl, range(1, hn + 1)) if hn else []
    hs = ndi.sum(holes, hl, range(1, hn + 1)) if hn else []
    fill_h = np.zeros(hn + 1, bool)
    if hn: fill_h[1:] = (np.asarray(hd) > 22) | (np.asarray(hs) < 0.003 * h * w)
    fg = fg | fill_h[hl]
    # keep large components only (drop specks of paper texture)
    lab, n = ndi.label(fg)
    sizes = ndi.sum(fg, lab, range(1, n + 1))
    keep = np.zeros(n + 1, bool); keep[1:] = sizes > 0.002 * h * w
    fg = keep[lab]
    fg = ndi.binary_opening(fg, iterations=2)
    # paper edge: grow the figure, smooth the outline like a scissor cut
    edge = ndi.binary_dilation(fg, iterations=1)

    soft = Image.fromarray((edge * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
    alpha = np.asarray(soft).astype(np.float32)
    alpha = np.clip((alpha - 90) * 2.2, 0, 255).astype(np.uint8)
    alpha = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.5))
    out = im.convert('RGBA'); out.putalpha(alpha)
    bb = out.getbbox(); out = out.crop(bb)
    name = os.path.basename(f)
    out.save(os.path.join(out_dir, name), 'WEBP', quality=88, method=6)
    print(name, out.size, f'{os.path.getsize(os.path.join(out_dir, name)) // 1024}KB')
