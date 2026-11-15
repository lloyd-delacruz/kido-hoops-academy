# Kido Hoops Academy — Website

Multi-page marketing site for **Kido Hoops Academy**, youth basketball skills training in Los Angeles with former pro Coach Kido Cabrera.

**Stack:** Next.js 15 (App Router, static export) · React 19 · TypeScript · plain CSS design tokens · self-hosted fonts (@fontsource).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000 (hot reload)
# or production build:
npm run build      # outputs static site to ./out
npm start          # serves ./out on http://localhost:3000
```
Checks: `npm run typecheck` · `npm run lint`

## Configuration
Copy `.env.example` → `.env.local`:
- `NEXT_PUBLIC_SITE_URL`: production URL (canonical tags, sitemap, Open Graph).

## Favicon & link previews
Generated from the official logo by `scripts/make_icons.py` into `src/app/` (`favicon.ico`, `icon.png`, `apple-icon.png`, `opengraph-image.jpg`, `twitter-image.jpg`). Next.js adds the tags automatically, with cache-busting hashes.
Link previews (iMessage, WhatsApp, Facebook, etc.) only work on the **live public site**, not localhost. Messaging apps fetch the image from your domain, so `NEXT_PUBLIC_SITE_URL` must be your real domain (automatic on Vercel).

## Inquiries & payment
- **Forms** need no backend. On submit they validate, then open the visitor's email app with a pre-written message to the coach (`mailto:`). The visitor presses Send. The confirmation screen also offers "Copy the message" in case no mail app is set up.
- **Payment** is Venmo or Zelle to the coach's phone number (`site.payment` in `src/lib/site.ts`). Set `venmoUsername` to add a one-tap "Pay with Venmo" button. Zelle has no web link, so the site shows copy-able instructions.

## Editing content
All business facts (pricing, programs, coach bio, contact, socials) live in **`src/lib/site.ts`**. Fields that are `null` (email, phone, socials) stay hidden until filled in. Image metadata and alt text live in `src/lib/media.ts`.

## Assets
`public/assets/` is generated from the client's Google Drive originals by `scripts/process_assets.py` (crops phone-screenshot letterboxing; outputs 480/960/1179px WebP + JPG). Re-run with `RAW_DIR=/path/to/originals npm run assets`.

## Docs
- `docs/content-inventory.md`: source files, verified content, missing info
- `docs/brand-guidelines.md`: colours, type, components derived from the logo
- `docs/sitemap.md`: pages and conversion paths
- `docs/qa-report.md`: build + browser test results and deployment blockers

## Deploy
The `out/` folder is a static site: deploy to Vercel, Netlify, Cloudflare Pages, S3, etc. (On Vercel, the default Next.js preset works.)
