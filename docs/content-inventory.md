# Content Inventory — Kido Hoops Academy

Source: client Google Drive folder `1oh9NCNrR75N85XbNtVL2zM1fYHjvcC7G` (owner: client account), reviewed 15 Nov 2026.

The folder holds **32 files**, all at the top level (no subfolders): 28 images and 4 videos. Ten of the images are exact duplicate copies (same name and size) of IMG_0404, 0405, 0408, 0409, 0411, 0412, 0413, 0414, IMG_1139.JPG and 6CCDBD46…jpg, which leaves **18 unique images + 4 videos**. **There are no PDFs, documents, brochures, registration forms or schedules.**

All published business facts live in `src/lib/site.ts`. Each one traces back to a file below.

## 1. Files reviewed

| File | Type | What it is | Used? | Where |
|---|---|---|---|---|
| IMG_7531.PNG | Logo | **Official logo**: Belgian Malinois-style dog with a basketball, ringed "KidoHoopsAcademy" lettering, navy/orange/gold/white | ✅ | Header, footer, favicon, app icons, OG image (`public/assets/logo/`) |
| IMG_7662.PNG | Flyer | **Official pricing flyer** for the Group Training Package and hourly rate | ✅ | Programs (thumbnail, full-size link); all pricing copy |
| IMG_7613.JPG | Photo of a screen | Coach bio, part 1 (ChatGPT draft shown on a laptop) | Source text only | Coach, About, Home |
| IMG_7614.JPG | Photo of a screen | Coach bio, "KIDO CABRERA — Former Professional Basketball Player" | Source text only | Coach, About, Home |
| IMG_7615.JPG | Photo of a screen | Coach bio, part 2: philosophy quote and mission | Source text only | Coach, About, Home, Footer |
| IMG_0404 / 0405 / 0408 / 0409 / 0410 / 0411 / 0412 / 0413 / 0414 .PNG | Phone screenshots of game photos | Coach Kido playing professionally (MPBL; "Imus Agimat" jerseys, MPBL and sponsor watermarks) | ✅ cropped | Hero, Home, Programs, Coach, About, Gallery |
| IMG_1535.PNG | Photo | Kido in a Valenzuela #24 jersey at an MPBL game | ✅ | Home coach section, Coach page, Gallery |
| IMG_1139.JPG | Graphic | Valenzuela Classic MPBL Datu Cup player card ("Kido Cabrera, Guard, 24") | ✅ | Coach page, Gallery |
| 6CCDBD46-…jpg | Photo (screenshot) | Kido on the ball during an MPBL game | ✅ | Gallery |
| IMG_7616.PNG | Graphic | 2019 MPBL Datu Cup game announcement (Valenzuela vs Bulacan) | ❌ | Not used: low resolution, third-party promo |
| IMG_2761.TRIM.MOV | Video (17 s) | MPBL TV broadcast clip (scorebug) | ✅ muted loop | Home, Coach, Gallery (`public/assets/video/`) |
| IMG_4686 / 4689 / 4867 .TRIM.MOV | Video | Valenzuela Classic broadcast intro and game clips | ❌ | Kept out to keep the site light. Available if wanted. |

## 2. Verified content (published)

**Pricing and programs** (IMG_7662)
- Group Training Package: 4 consecutive sessions, 2 hours each, 8 total hours, for groups of 5–10 kids, **$800 total for the group**. Covers all 4 sessions; coach fee only.
- Example: 10 kids → $80 per child for the package = $20 per child per 2-hour session = $10 per child per hour.
- Another option: **$50 per person, per hour**. A 2-hour session = $100 per person.
- Skill focus: Handles · Footwork · Shooting · Passing.
- "Court rental is additional and paid separately."
- Tagline: "Gather your group. Train with Coach Kido."

**Coach Kido Cabrera** (IMG_7613–7615)
- Former Professional Basketball Player | Elite Skills Development Trainer.
- North Hollywood High School: went from the last freshman selected to back-to-back MVP, First Team All-League, and Player of the Year in 2010.
- University of Cebu (Philippines): one of the leading offensive players; second-leading scorer; competed internationally.
- Professional: competed overseas, including the Valenzuela Classic in the MPBL, and FIBA 3x3 professional leagues.
- Known for impacting both ends of the floor and defending the opposition's best players.
- Specialties: skill work, shooting mechanics, ball handling, footwork, defensive fundamentals, offensive creativity, basketball IQ, game-like situations.
- Philosophy: "Hard work beats talent when talent fails to work hard."
- Mission: develop confident, skilled and complete players prepared to compete at the highest level.

**Contact** (supplied directly by the client, 15 Nov 2026): cabrerakido@gmail.com · (818) 284-5801.

**Location**: Los Angeles, California. This comes from the project brief only; no Drive file states it.

## 3. Missing information (content requirements)

These are needed before launch. The UI hides each one until it is filled in `src/lib/site.ts`.

| # | Missing | Impact | Where it goes |
|---|---|---|---|
| 1 | ~~Contact email and phone~~ ✅ supplied 15 Nov 2026 | — | `site.contact` → footer, Contact page, JSON-LD |
| 2 | **Form backend** (Formspree, Netlify Forms, email service…) | Inquiry forms validate but do not send | `NEXT_PUBLIC_FORM_ENDPOINT` |
| 3 | **Training locations / gyms** (address, parking) | No Schedule & Locations page, no Google Map, no local-business address schema | New `/locations/` page |
| 4 | **Schedule** (days, times, start dates) | Schedule page not published | `/locations/` or `/programs/` |
| 5 | **Age groups and skill levels** | Copy says "kids/young players" only | Programs |
| 6 | **Social media handles** | No social links | `site.social` |
| 7 | **Cancellation / refund policy and payment methods** | Left out of the FAQ | FAQ, Register |
| 8 | **Academy training photos** (kids training) | All photos are from the coach's pro career | Hero, Gallery |
| 9 | **Testimonials, partnerships, academy achievements** | None published | Home |
| 10 | **Production domain** | Canonical URLs, sitemap and OG use `NEXT_PUBLIC_SITE_URL` | `.env` |
| 11 | **Vector logo** (SVG/AI or transparent PNG) | The navy-background logo was cut out automatically; it only looks right on navy | `public/assets/logo/` |
| 12 | Waiver / registration form requirements | No child data is collected until a secure solution is approved | Register |

## 4. Items for the client to confirm

- **The coach bio is a ChatGPT draft photographed from a screen** (IMG_7613–7615). It was used close to verbatim, but the client should approve the final wording and facts.
- **Team name**: the bio names the Valenzuela Classic, but most game photos show "Imus Agimat" MPBL jerseys. The site only names the Valenzuela Classic, which appears in both the bio and the photos. Confirm whether Imus Agimat should be added.
- **Photo and video rights**: the game photos carry MPBL, team and sponsor watermarks and a photographer handle (`@cdubalob` on IMG_0413). The video is TV broadcast footage. Confirm permission, or replace with academy-owned media.
- The pricing flyer image looks AI-generated. The figures are used exactly as shown; confirm they are current.
