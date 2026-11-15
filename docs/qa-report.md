# QA & Build Verification Report — 15 Nov 2026

## Build
| Check | Result |
|---|---|
| `npm run typecheck` (tsc --noEmit) | ✅ 0 errors |
| `npm run lint` (next/core-web-vitals + typescript) | ✅ 0 warnings/errors |
| `npm run build` (Next.js 15.5 static export) | ✅ 16 routes prerendered to `out/` |
| First-load JS | ~103–110 kB per page |

## Browser testing (Playwright, Chromium)
Viewports: desktop 1440×900, tablet 820×1180, mobile 390×844. Pages: all 10 routes + a 404 probe.

| Check | Result |
|---|---|
| HTTP status | ✅ 200 on all pages; 404 page served for unknown routes |
| Horizontal overflow | ✅ none at any viewport |
| Console errors / page errors / failed requests | ✅ none (except the expected 404 probe) |
| Broken images | ✅ none |
| Internal links (14 unique) | ✅ all return 200 |
| Mobile menu | ✅ opens, `aria-expanded` updates, closes on navigation/Escape, restores scroll |
| FAQ accordions | ✅ native `<details>`, keyboard accessible |
| Register `?program=hourly-training` preselect | ✅ |
| Form validation | ✅ inline errors, `aria-invalid`/`aria-describedby`, focus moves to first invalid field; group size enforced to 5–10; guardian confirmation required |
| Form submit without backend | ✅ shows a clear "not switched on — nothing has been sent" notice (no fake success) |
| Gallery lightbox | ✅ opens, arrow-key navigation, Escape closes, focus returns |
| sitemap.xml / robots.txt / manifest / OG image / favicon | ✅ 200 |

## Accessibility notes
Skip link, semantic landmarks, single H1 per page, labelled forms, visible gold focus ring, 44px+ touch targets, reduced-motion support, descriptive alt text on every content image (decorative hero backgrounds use `alt=""`).

## Content accuracy
Every price, program detail and coach claim is centralised in `src/lib/site.ts` and traced to source files in `docs/content-inventory.md`. Nothing about locations, schedules, ages, testimonials or contact details was invented; those are hidden until supplied.

## Remaining deployment blockers
1. ~~Contact email/phone~~: added 15 Nov 2026.
2. ~~Form backend~~: forms now hand off to the visitor's email app.
3. Production domain (`NEXT_PUBLIC_SITE_URL`). Canonicals and the sitemap currently fall back to `http://localhost:3000`.
4. Client sign-off on the coach bio (a ChatGPT draft) and on rights to the MPBL photos and broadcast clip.
5. Training locations and schedule (for the Schedule & Locations page and Google Maps).

## Update: motion, photos and responsiveness (15 Nov 2026)
- Re-tested all 9 content pages at **320, 375, 768, 1024, 1280, 1920 and 2560px wide, plus an 844×390 landscape phone**, with animations running and every page scrolled end to end.
- Result: no horizontal overflow, no content left hidden after animations, no broken images, no console errors.
- Hero verified visually at every width: the headline, copy and CTA stay layered on the photo; nothing separates or drops below the image.
- Reduced-motion mode: the hero renders fully with no transforms.
- Unsplash images couldn't load in the test environment (network-restricted), so the client-photo fallback was exercised; they load normally on the open web.

## Update: typography & spacing audit (15 Nov 2026)
Measured every page at 320 / 390 / 820 / 1440px (line counts per heading, single-word last lines, section heights, overflow).

**Headline wrapping**
- Removed the 16ch cap on page titles that forced breaks like "Train together. Pay / less." and "Group Training / Package". They now fit on one line on desktop.
- Phrase-level no-break spans keep mobile breaks at natural points ("Train together." / "Pay less.", "Coach Kido" / "Cabrera").
- `text-wrap: balance` on headings and `pretty` on body text, to avoid single words on a last line.

**Spacing tightened**
| Element | Before | After |
|---|---|---|
| Section padding (1440px) | 134px | ~94px |
| Section padding (mobile) | 72px | 56px |
| Page-hero height | 465px | 403px |
| Column gaps | 96px | 64–72px |
| Photo bands | 620px | 500px |
| CTA band, footer and section-head margins | — | reduced |

**Layout**
- FAQ: two columns on desktop (sticky group title on the left, questions on the right) instead of a 900px column with an empty right side.
- CTA headline: two balanced lines instead of three.
- "Per person, per hour" fits on two lines instead of three.
- Coach photo is larger, and the stats row has a divider.
- Mobile: timeline labels stack above each item (the 110px label column is gone); skill cards show the number beside the title in a compact row and go two-up from 560px; program-card buttons sit side by side when they fit.

**Result:** no horizontal overflow at 320, 360, 390, 820 or 1440px; lint, typecheck and build all clean.

## Update: email inquiries + Venmo/Zelle (15 Nov 2026)
- Booking and contact forms validate, then open the visitor's mail app with subject and body pre-filled to cabrerakido@gmail.com. Generated email verified, including program, group size, contact details and court-rental acknowledgement.
- Fallbacks: "Try again" link and "Copy the message" (clipboard verified), plus the direct email and phone number.
- Payment cards: Venmo and Zelle with copy-number buttons (clipboard verified); no overflow at 320 / 390 / 1440px.
