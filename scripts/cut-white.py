"""Cut the v3 Charioteer paintings (public/media/people/new/*-rest|power.webp) off their plain white
background. Background = near-white pixels connected to the edge, plus enclosed pure-white gaps;
the soft shadow at the feet stays, as a translucent grey. Keeps the full 2:3 canvas so each rest
and power pair lines up for the hover. Writes webp with alpha to the output folder."""
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
    lum = a.mean(-1)
    sat = a.max(-1) - a.min(-1)
    light = (lum > 236) & (sat < 22)
    # near-white connected to the border is background
    lab, n = ndi.label(light)
    border = set(np.unique(np.r_[lab[0], lab[-1], lab[:, 0], lab[:, -1]])) - {0}
    bg = np.isin(lab, list(border))
    # enclosed pure-white gaps of some size are background too (between arm and body etc.)
    for k in range(1, n + 1):
        if k in border: continue
        m = lab == k
        if m.sum() > 0.0015 * h * w and lum[m].mean() > 246: bg |= m
    # alpha: figure solid; background pixels by how dark they are (keeps the soft foot shadow)
    alpha = np.where(bg, np.clip((250 - lum) * 7, 0, 255), 255).astype(np.float32)
    # soften the cut edge by a hair
    alpha = np.asarray(Image.fromarray(alpha.astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32)
    alpha = np.where(bg, alpha, np.maximum(alpha, 255 * (~bg)))
    rgba = np.dstack([a, alpha]).astype(np.uint8)
    out = os.path.join(out_dir, os.path.basename(f))
    Image.fromarray(rgba, 'RGBA').save(out, 'WEBP', quality=90, method=6)
    print(os.path.basename(f), f'{(alpha > 10).mean():.2f} opaque')
