#!/usr/bin/env python3
"""Favicons, app icons and the social share (Open Graph) image — all from the official logo."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

ROOT = Path(__file__).resolve().parent.parent
logo = Image.open(ROOT / "public/assets/logo/kido-hoops-academy-logo-navy.png").convert("RGB")
NAVY = (0, 22, 74)
APP = ROOT / "src/app"

def square(size, pad=0.04):
    c = Image.new("RGB", (size, size), NAVY)
    lg = logo.copy()
    lg.thumbnail((int(size * (1 - 2 * pad)), int(size * (1 - 2 * pad))), Image.LANCZOS)
    c.paste(lg, ((size - lg.width) // 2, (size - lg.height) // 2))
    return c

# Next.js file conventions -> auto <link> tags with cache-busting hashes
square(512).quantize(256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG).save(APP / "icon.png", optimize=True)
square(180, pad=0.06).save(APP / "apple-icon.png", optimize=True)
fav = square(256, pad=0.02)
fav.save(APP / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
# PWA icons
square(192).save(ROOT / "public/icon-192.png", optimize=True)
square(512).save(ROOT / "public/icon-512.png", optimize=True)
for old in ("favicon.ico", "apple-touch-icon.png"):
    p = ROOT / "public" / old
    if p.exists():
        p.unlink()

# ---- Share preview: logo front and centre (1200x630, <300 KB for WhatsApp)
W, H = 1200, 630
og = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(og)
glow = Image.new("RGB", (W, H), NAVY)
gd = ImageDraw.Draw(glow)
gd.ellipse((W / 2 - 330, H / 2 - 330, W / 2 + 330, H / 2 + 330), fill=(20, 52, 130))
glow = glow.filter(ImageFilter.GaussianBlur(90))
d = ImageDraw.Draw(og)
for r in (420, 540):
    d.ellipse((W / 2 - r, H / 2 - r, W / 2 + r, H / 2 + r), outline=(18, 50, 124), width=3)
d.rectangle((0, H - 14, W, H), fill=(253, 90, 0))
lg = logo.copy()
lg.thumbnail((560, 560), Image.LANCZOS)
# soften logo's square navy edge into the background
mask = Image.new("L", lg.size, 0)
ImageDraw.Draw(mask).rounded_rectangle((4, 4, lg.width - 4, lg.height - 4), radius=60, fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(4))
og.paste(lg, ((W - lg.width) // 2, (H - 14 - lg.height) // 2), mask)
og.save(APP / "opengraph-image.jpg", quality=86, optimize=True, progressive=True)
og.save(APP / "twitter-image.jpg", quality=86, optimize=True, progressive=True)
(ROOT / "public/og-image.jpg").unlink(missing_ok=True)
for f in ("icon.png", "apple-icon.png", "favicon.ico", "opengraph-image.jpg"):
    print(f, os.path.getsize(APP / f) // 1024, "KB")
