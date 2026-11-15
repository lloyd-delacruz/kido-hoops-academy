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
- `NEXT_PUBLIC_FORM_ENDPOINT`: JSON POST endpoint for the inquiry/contact forms (e.g. Formspree). Without it, forms validate and then clearly say submissions aren't connected.

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
