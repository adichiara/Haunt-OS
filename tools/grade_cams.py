"""Grade the camera stills so the sixteen panes read as one camera system.

Notebook use
------------
    import sys; sys.path.insert(0, 'tools')
    from grade_cams import grade_all, contact_sheet, stats_table

    imgs = grade_all(haze=0.8, sat=34)       # {filename: PIL.Image}, nothing written
    contact_sheet(imgs)                       # one 4x4 image to eyeball
    stats_table(imgs)                         # the numbers, next to the reference

    grade_all(haze=0.8, sat=28, write=True)   # happy with it: write into media/

The dials
---------
    sat        overall colour level.  16 = current, 34 greyer-than-reference,
               54 = the original reference screenshot.  The big one.
    glow       how far down the brightness range colour survives.  1.0 =
               only the hottest cores, 2.0 = lamps and their halos keep
               colour.  Raise this if the reds and greens vanish as you
               drop `sat`.
    haze       sink the fog directly.  0 = leave it (dropping `sat` handles
               it better), 1.0 = max.  Higher flattens the shadows.
    exposure   overall brightness, mean luma.  32.7 = reference, 24 = murky.
    white      where the brightest 1% lands.  180 = reference.  Lower makes
               the lamps less blown out.
    lift       black level.  7 = reference, 2 = crushed, 12 = milky.
    contrast   1.0 = off.  1.3 separates lamps from fog without crushing.
    cast       strength of the blue-grey tint.  1.0 = reference, 0 = neutral
               grey, 1.6 = colder.
    grain      sensor noise, 0-6.  Also breaks up banding in flat greys,
               which heavy desaturation tends to produce.
    vignette   corner falloff, 0-0.5.  Cheap-lens character; it also helps
               the sixteen panes sit together.

Per-shot overrides, if one room really needs it:

    grade_all(0.8, 34, over={'vent7_cam.jpg':   dict(haze=1.0),
                             'armory1_cam.jpg': dict(sat=28)})

Overriding individual shots works against the point of the exercise — the
set reads as one camera because every still gets the same treatment — so
reach for the global dials first and override only what refuses to sit.

Every call rebuilds from the PNG originals, so running it repeatedly never
stacks one grade on top of another.
"""
from PIL import Image
import numpy as np
import os, glob, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MEDIA = os.path.join(HERE, 'media')

def _discover():
    """Every media/<name>_cam.jpg content.js asks for, paired with its source.

    Keeps itself in step with content.js, so a still added there is graded
    with the rest instead of quietly staying ungraded.
    """
    import re
    txt = open(os.path.join(HERE, 'content.js')).read()
    want, pairs, missing = [], [], []
    for m in re.finditer(r"media/([A-Za-z0-9_\-]+)_cam\.jpg", txt):
        if m.group(1) not in want:
            want.append(m.group(1))
    for stem in want:
        src = next((stem + e for e in ('.png', '.jpg', '.jpeg', '.webp')
                    if os.path.exists(os.path.join(MEDIA, stem + e))), None)
        (pairs.append((src, stem + '_cam.jpg')) if src
         else missing.append(stem + '.png'))
    return pairs, missing


PAIRS, MISSING = _discover()

# what the original reference screenshot measured, per pane
REF = dict(luma=32.7, p25=7.9, p50=20.1, p99=180.1, sat=53.9, rb=-15.9, gb=-7.3)

T_WHITE, T_MEAN, T_P25 = 180.0, 32.7, 7.0

# the look, as landed on. change these and everything follows.
SAT      = 34.0
GLOW     = 1.3
HAZE     = 0.0
EXPOSURE = 32.7
WHITE    = 150.0
CONTRAST = 1.1
LIFT     = 7.0
CAST     = 1.0
GRAIN    = 2.0
VIGNETTE = 0.35
T_RB, T_GB = REF['rb'], REF['gb']
OUT_W, OUT_H = 960, 540


def _luma(a):
    return .299 * a[..., 0] + .587 * a[..., 1] + .114 * a[..., 2]


def _sm(x, a, b):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


def _tint(a, gain):
    """Push the ambient; bright sources keep their own colour."""
    keep = _sm(_luma(a), 150., 235.)[..., None]
    return np.clip(a * (1.0 + (np.asarray(gain) - 1.0) * (1.0 - keep)), 0, 255)


def _expose(a, target):
    m = max(_luma(a).mean(), 1.)
    g = np.clip(np.log(target / 255.) / np.log(m / 255.), 0.5, 1.9)
    return np.clip(255. * np.power(np.clip(a, 0, 255) / 255., g), 0, 255)


def grade_one(src, haze=HAZE, sat=SAT, exposure=EXPOSURE, white=WHITE,
              lift=LIFT, contrast=CONTRAST, cast=CAST, glow=GLOW, grain=GRAIN,
              vignette=VIGNETTE):
    """Grade one source image. Returns a PIL.Image, writes nothing."""
    im = Image.open(os.path.join(MEDIA, src)).convert('RGB')
    w, h = im.size
    tr = OUT_W / OUT_H
    if w / h > tr:                                  # cover-crop to 16:9
        nw = int(h * tr); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / tr); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    a = np.asarray(im.resize((OUT_W, OUT_H), Image.LANCZOS), dtype=np.float32)

    # one black point, one white point, one exposure for the whole set
    y = _luma(a); a = np.clip(a - np.percentile(y, 0.5), 0, None)
    y = _luma(a); a = np.clip(a * (white / max(np.percentile(y, 99), 1.)), 0, 255)
    a = _expose(a, exposure)

    # fog is bright and colourless: pull it down, leave the blacks and lamps
    for _ in range(2):
        y = _luma(a)
        mx, mn = a.max(2), a.min(2)
        s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
        w_h = (_sm(y, 28., 80.) * (1.0 - _sm(y, 155., 220.))
               * (1.0 - _sm(s, 0.14, 0.44)))[..., None]
        a = np.clip(a * (1.0 - haze * w_h), 0, 255)

    # contrast, pivoted above the haze so fog sinks and lamps lift
    if contrast != 1.0:
        a = np.clip(0.36 + (a / 255.0 - 0.36) * contrast, 0, 1) * 255.0
        a = np.clip(a * (white / max(np.percentile(_luma(a), 99), 1.)), 0, 255)

    # shadows lifted slightly, and blue, the way a cheap sensor does it
    y = _luma(a)
    sh = (1.0 - _sm(y, 10., 90.))[..., None]
    need = max(0., lift - np.percentile(y, 25))
    a = np.clip(a + sh * np.array([0.2, 0.5, 1.0]) * need * 1.5, 0, 255)
    a = _expose(a, exposure)

    # converge on the common cast
    t_rb, t_gb = T_RB * cast, T_GB * cast
    for _ in range(6):
        R, G, B = a[..., 0].mean(), a[..., 1].mean(), a[..., 2].mean()
        dRB, dGB = (R - B) - t_rb, (G - B) - t_gb
        if abs(dRB) < 0.4 and abs(dGB) < 0.4:
            break
        a = _tint(a, [1 - 0.45 * dRB / max(R, 1), 1 - 0.45 * dGB / max(G, 1), 1.0])
        a = np.clip(a * (white / max(np.percentile(_luma(a), 99), 1.)), 0, 255)
        a = _expose(a, exposure)

    # overall colour level, highlights held out so the practicals carry
    mx, mn = a.max(2), a.min(2)
    cur = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0).mean() * 100
    keep = _sm(_luma(a), 210. - 45. * glow, 255. - 15. * glow)[..., None]
    k = float(np.clip(sat / max(cur, 1.), 0.03, 1.35))
    gy = _luma(a)[..., None]
    a = np.clip(gy + (a - gy) * (k + (1.0 - k) * keep), 0, 255)

    if grain:                       # sensor noise; also breaks up flat greys
        rng = np.random.default_rng(abs(hash(src)) % (2 ** 32))
        a = np.clip(a + rng.normal(0, grain, a.shape[:2])[..., None], 0, 255)

    if vignette:                    # lens falloff at the corners
        yy, xx = np.mgrid[0:OUT_H, 0:OUT_W]
        d = np.hypot((xx / OUT_W - .5) * 2, (yy / OUT_H - .5) * 2) / 1.414
        a = np.clip(a * (1.0 - vignette * d[..., None] ** 2), 0, 255)

    return Image.fromarray(a.astype(np.uint8))


def grade_all(haze=HAZE, sat=SAT, over=None, write=False, outdir=None,
              pairs=None, **kw):
    """Grade every still. Returns {output filename: PIL.Image}.

    write=True   replaces the files in media/
    outdir='...' writes somewhere else instead, to compare before committing
    """
    over = over or {}
    out = {}
    for src, dst in (pairs or PAIRS):
        o = dict(kw); o.update(over.get(dst, {}))
        out[dst] = grade_one(src, o.pop('haze', haze), o.pop('sat', sat), **o)
    target = MEDIA if write else outdir
    if target:
        os.makedirs(target, exist_ok=True)
        for dst, im in out.items():
            im.save(os.path.join(target, dst), quality=88, optimize=True)
        print(f'wrote {len(out)} files to {target}')
    return out


def contact_sheet(imgs, cols=4, tile_w=330, pad=3):
    """Lay the set out as one image, in camera order."""
    items = list(imgs.values()) if isinstance(imgs, dict) else list(imgs)
    tw, th = tile_w, int(tile_w * OUT_H / OUT_W)
    rows = (len(items) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * (tw + pad) + pad, rows * (th + pad) + pad), (16, 16, 16))
    for i, im in enumerate(items):
        x = pad + (i % cols) * (tw + pad)
        y = pad + (i // cols) * (th + pad)
        sheet.paste(im.resize((tw, th), Image.LANCZOS), (x, y))
    return sheet


def stats_table(imgs=None):
    """Print the set's measurements next to the reference screenshot's."""
    if imgs is None:
        imgs = {os.path.basename(f): Image.open(f).convert('RGB')
                for f in sorted(glob.glob(os.path.join(MEDIA, '*_cam.jpg')))}
    rows = []
    for name, im in imgs.items():
        a = np.asarray(im.convert('RGB'), dtype=np.float32)
        r, g, b = a[..., 0], a[..., 1], a[..., 2]
        y = _luma(a)
        mx, mn = a.max(2), a.min(2)
        s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
        rows.append([y.mean(), np.percentile(y, 25), np.percentile(y, 50),
                     np.percentile(y, 99), s.mean() * 100,
                     r.mean() - b.mean(), g.mean() - b.mean()])
    A = np.array(rows)
    hdr = ['luma', 'p25', 'p50', 'p99', 'sat', 'R-B', 'G-B']
    print(''.join(f'{h:>9}' for h in hdr))
    print(''.join(f'{v:9.1f}' for v in A.mean(0)), ' <- this set (mean)')
    print(''.join(f'{REF[k]:9.1f}' for k in
                  ['luma', 'p25', 'p50', 'p99', 'sat', 'rb', 'gb']), ' <- reference')
    print(f'\nspread   luma {A[:,0].min():.1f}-{A[:,0].max():.1f}'
          f'   R-B {A[:,5].min():.1f} to {A[:,5].max():.1f}')
    return A


def missing_sources():
    """Any PNG/JPG in media/ that no camera still is built from."""
    known = {s for s, _ in PAIRS} | {d for _, d in PAIRS}
    found = []
    for f in sorted(glob.glob(os.path.join(MEDIA, '*.png')) +
                    glob.glob(os.path.join(MEDIA, '*.jpg'))):
        n = os.path.basename(f)
        if n not in known and not n.endswith('_cam.jpg'):
            found.append(n)
    return found


if __name__ == '__main__':
    haze = float(sys.argv[1]) if len(sys.argv) > 1 else HAZE
    sat = float(sys.argv[2]) if len(sys.argv) > 2 else SAT
    outdir = sys.argv[3] if len(sys.argv) > 3 else None
    grade_all(haze, sat, write=(outdir is None), outdir=outdir)
