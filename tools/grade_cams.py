"""Grade the camera stills so the sixteen panes read as one camera system.

Notebook use
------------
    import sys; sys.path.insert(0, 'tools')
    from grade_cams import grade_all, contact_sheet, stats_table

    imgs = grade_all(haze=0.8, sat=34)       # {filename: PIL.Image}, nothing written
    contact_sheet(imgs)                       # one 4x4 image to eyeball
    stats_table(imgs)                         # the numbers, next to the reference

    grade_all(haze=0.8, sat=28, write=True)   # happy with it: write into media/

Two dials
---------
    haze  how hard to sink the fog.  0 = leave it, 0.8 = current, 1.0 = max.
          Higher flattens the shadows; that is the trade.
    sat   overall colour level.  28 greyer, 34 = current, 44 more colour,
          54 = the original reference screenshot.

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

# source -> published camera still
PAIRS = [
    ('cam1.jpg',         'cam1_cam.jpg'),
    ('corridor0.png',    'corridor0_cam.jpg'),
    ('corridor5.jpg',    'corridor5_cam.jpg'),
    ('external1.png',    'external1_cam.jpg'),
    ('lab_a1_1.png',     'lab_a1_1_cam.jpg'),
    ('lab_b1_1.png',     'lab_b1_1_cam.jpg'),
    ('specimen1.png',    'specimen1_cam.jpg'),
    ('corridor1.png',    'corridor1_cam.jpg'),
    ('containment1.png', 'containment1_cam.jpg'),
    ('containment2.png', 'containment2_cam.jpg'),
    ('armory1.png',      'armory1_cam.jpg'),
    ('cam3.jpg',         'cam3_cam.jpg'),
    ('vent7.png',        'vent7_cam.jpg'),
    ('storage2.png',     'storage2_cam.jpg'),
    ('corridor3.png',    'corridor3_cam.jpg'),
    ('storage3.png',     'storage3_cam.jpg'),
]

# what the original reference screenshot measured, per pane
REF = dict(luma=32.7, p25=7.9, p50=20.1, p99=180.1, sat=53.9, rb=-15.9, gb=-7.3)

T_WHITE, T_MEAN, T_P25 = 180.0, 32.7, 7.0
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


def grade_one(src, haze=0.8, sat=34.0):
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
    y = _luma(a); a = np.clip(a * (T_WHITE / max(np.percentile(y, 99), 1.)), 0, 255)
    a = _expose(a, T_MEAN)

    # fog is bright and colourless: pull it down, leave the blacks and lamps
    for _ in range(2):
        y = _luma(a)
        mx, mn = a.max(2), a.min(2)
        s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0)
        w_h = (_sm(y, 28., 80.) * (1.0 - _sm(y, 155., 220.))
               * (1.0 - _sm(s, 0.14, 0.44)))[..., None]
        a = np.clip(a * (1.0 - haze * w_h), 0, 255)

    # shadows lifted slightly, and blue, the way a cheap sensor does it
    y = _luma(a)
    sh = (1.0 - _sm(y, 10., 90.))[..., None]
    need = max(0., T_P25 - np.percentile(y, 25))
    a = np.clip(a + sh * np.array([0.2, 0.5, 1.0]) * need * 1.5, 0, 255)
    a = _expose(a, T_MEAN)

    # converge on the common cast
    for _ in range(6):
        R, G, B = a[..., 0].mean(), a[..., 1].mean(), a[..., 2].mean()
        dRB, dGB = (R - B) - T_RB, (G - B) - T_GB
        if abs(dRB) < 0.4 and abs(dGB) < 0.4:
            break
        a = _tint(a, [1 - 0.45 * dRB / max(R, 1), 1 - 0.45 * dGB / max(G, 1), 1.0])
        a = np.clip(a * (T_WHITE / max(np.percentile(_luma(a), 99), 1.)), 0, 255)
        a = _expose(a, T_MEAN)

    # overall colour level, highlights held out so the practicals carry
    mx, mn = a.max(2), a.min(2)
    cur = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1), 0).mean() * 100
    keep = _sm(_luma(a), 165., 240.)[..., None]
    k = float(np.clip(sat / max(cur, 1.), 0.25, 1.35))
    gy = _luma(a)[..., None]
    a = np.clip(gy + (a - gy) * (k + (1.0 - k) * keep), 0, 255)

    return Image.fromarray(a.astype(np.uint8))


def grade_all(haze=0.8, sat=34.0, over=None, write=False, outdir=None, pairs=None):
    """Grade every still. Returns {output filename: PIL.Image}.

    write=True   replaces the files in media/
    outdir='...' writes somewhere else instead, to compare before committing
    """
    over = over or {}
    out = {}
    for src, dst in (pairs or PAIRS):
        o = over.get(dst, {})
        out[dst] = grade_one(src, o.get('haze', haze), o.get('sat', sat))
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
    haze = float(sys.argv[1]) if len(sys.argv) > 1 else 0.8
    sat = float(sys.argv[2]) if len(sys.argv) > 2 else 34.0
    outdir = sys.argv[3] if len(sys.argv) > 3 else None
    grade_all(haze, sat, write=(outdir is None), outdir=outdir)
