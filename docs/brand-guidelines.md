# Brand Guidelines — Kido Hoops Academy

Derived from the official logo (`IMG_7531.PNG` → `public/assets/logo/`). Tokens are implemented as CSS custom properties in `src/app/globals.css`.

## Logo
- A Belgian Malinois-style dog lies over a basketball inside an orange/gold ring, with arched white "KidoHoopsAcademy" varsity lettering.
- **Use on navy only.** The supplied file has a navy background. The transparent cut-out (`kido-hoops-academy-logo*.png/webp`) was made automatically and loses the dog's dark fur on light backgrounds. A vector or transparent master from the client is still needed.
- Minimum size on screen: 44 px wide. Keep clear space of at least ¼ of the logo width.
- Don't recolour, stretch, crop the ring, or put it on photography.

## Colour
| Token | Hex | Role |
|---|---|---|
| `--navy-900` | `#00164A` | Logo field. Primary brand surface: header, heroes |
| `--navy-950` | `#000C2E` | Deep sections, footer |
| `--navy-800` / `-700` | `#082563` / `#12327C` | Cards on navy, hover |
| `--orange-500` | `#FD5A00` | Logo ring. Primary CTA, accents, highlight words |
| `--orange-600` | `#D94C00` | Orange text on light backgrounds (better contrast) |
| `--gold-400` | `#F2B33D` | Logo trim. Eyebrows on navy, focus ring, small details |
| `--paper` / `--paper-2` | `#F5F2EB` / `#ECE6DA` | Warm light sections |
| `--ink` / `--ink-2` | `#0A1230` / `#3B4361` | Body text on light |

Contrast: white on navy-900 ≈ 17:1; orange-500 on navy-900 ≈ 5.6:1 (fine for large display type); ink on paper ≈ 16:1. Use `--orange-600` for small orange text on light backgrounds.

Ratio guide: ~60% navy/paper, ~25% white, ~10% orange, ~5% gold. Orange is for emphasis, not big fields, except the "featured" program card and the CTA band.

## Typography
- **Display: Big Shoulders Display 800/900**, uppercase, tight leading (0.84–0.92). Echoes the condensed varsity lettering in the logo.
- **Labels: Barlow Condensed 600/700**, uppercase, letter-spacing 0.08–0.22em. Eyebrows, buttons, nav, stats.
- **Body: Barlow 400/500/600**, 17px base, 1.6 line height.
- Self-hosted through `@fontsource` (no third-party font requests).
- Scale (fluid `clamp`): hero 54→140px · h1 45→96 · h2 35→68 · h3 23→34 · lead 18→22.

## Spacing & layout
- 8-pt scale: `--s-1` 4px … `--s-10` 128px. Section padding `--section-y` 72→144px.
- Max content width 1280px; gutters 20→48px.
- Breakpoints: 640 (sm), 900 (md), 1000/1100 (lg — desktop nav from 1100).

## Components
- **Buttons**: pill, 52px minimum height, condensed uppercase label. Variants: primary (orange), navy, light, ghost (outline). Hover lifts 2px; the arrow slides.
- **Cards**: 22px radius, no border on navy; 1px `--line-light` border on paper. Program cards carry a faint court-circle motif.
- **Eyebrow**: 28px rule + spaced uppercase label above every section title.
- **Motifs**: court lines (circles, key) as thin navy-on-navy line art; basketball glyph as the separator in the skills marquee.
- **Photography**: rounded frames, slight rotation and an orange offset slab in the hero; bottom gradient fades for caption legibility.

## Motion
Built with **GSAP + ScrollTrigger** (free, standard license) in `src/components/Motion.tsx`, driven by data attributes:
- Hero: the photo slowly zooms in on load and drifts on scroll (parallax); the headline lines slide up out of a mask, then the chip, copy and buttons fade up in sequence.
- `data-clip`: photos wipe up into view with a slight zoom-out.
- `data-parallax`: full-bleed photo bands drift against the scroll; the band headline slides sideways (`data-slide-x`).
- `data-count`: coach stats count up (2010, 2×, #2).
- `data-stagger`: step cards and stats rise in sequence.
- Also: content fades up on scroll, the skills marquee runs, cards lift on hover.
- Everything respects `prefers-reduced-motion`: animation is off and the video doesn't autoplay. If scripts fail, a CSS safety net reveals the hero text after 2.5s.

## Hero composition
Photo and headline form one locked composition at every size:
- **Phones (< 700px):** the photo fills the top ~70% of the hero; the text sits over a navy fade that rises from the bottom.
- **Tablets (700–999px):** same, with a taller photo.
- **Landscape phones:** the photo moves right and the text left, side by side.
- **Desktop (≥ 1000px):** the photo bleeds off the right edge and fades into navy behind the headline.

## Voice
Confident, direct, work-ethic driven. Short declarative headlines ("Hard work beats talent.", "Two ways to train."). Speak to players (skills, confidence) and parents (former pro coach, clear pricing). Never invent stats, testimonials or claims.
