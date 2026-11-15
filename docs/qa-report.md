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
1. Contact email/phone (`site.contact`).
2. Form backend endpoint (`NEXT_PUBLIC_FORM_ENDPOINT`).
3. Production domain (`NEXT_PUBLIC_SITE_URL`). Canonicals and the sitemap currently fall back to `http://localhost:3000`.
4. Client sign-off on the coach bio (a ChatGPT draft) and on rights to the MPBL photos and broadcast clip.
5. Training locations and schedule (for the Schedule & Locations page and Google Maps).
