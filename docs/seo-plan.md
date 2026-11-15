# SEO Plan — Kido Hoops Academy (kidohoopsacademy.com)

Target searches: "kids basketball training Los Angeles", "youth basketball training Los Angeles",
"kids basketball lessons LA", "basketball trainer for kids Los Angeles", "youth basketball group training LA".

No one can guarantee a #1 ranking. For local searches, Google's ranking depends most on the **Google Business Profile**, **reviews**, and **relevance and consistency** across the web, then on the website itself. The website side is done (below); the off-site steps are what move rankings most.

## Done on the website (15 Nov 2026)
- Official domain `https://kidohoopsacademy.com` used for every canonical URL, the sitemap, robots.txt, structured data and link previews.
- Search-intent titles (≤ ~60 chars) and descriptions (≤ 160) on every page, e.g. "Kids Basketball Training in Los Angeles | Kido Hoops Academy".
- New landing page `/kids-basketball-training-los-angeles/`: training focus, format and prices, coach credentials, "choosing a trainer" guide, and a 5-question FAQ (FAQPage schema). Linked from the home page and footer.
- Structured data:
  - `SportsOrganization` + `LocalBusiness`: area served Los Angeles, phone, email, price range, payment methods, offers.
  - Also `WebSite`, `Person` (coach), `Service`, `OfferCatalog`, `FAQPage` and `BreadcrumbList`.
- `sitemap.xml` with all 12 pages; `robots.txt` allows everything.
- Google Search Console verification hook: set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel.
- Already in place: semantic headings, descriptive alt text, a fast static site, mobile-first layout, and HTTPS on Vercel.

## To do — highest impact first
1. **Connect the domain in Vercel** (Project → Settings → Domains): add `kidohoopsacademy.com` and `www.kidohoopsacademy.com`, set the apex as primary (www redirects to it), and add the DNS records in GoDaddy. Until this is live, link previews point at a domain that doesn't resolve yet.
2. **Google Business Profile** (business.google.com) — the #1 local ranking factor.
   - Category: "Basketball club" or "Sports school"; secondary: "Athletic coach" (pick the closest available).
   - Set it up as a **service-area business** (hide the home address) serving Los Angeles and nearby areas Kido actually covers.
   - Add the website, phone (818) 284-5801, hours, the $1,200 package and hourly option as Services/Products, and photos (logo, coaching, training).
   - Post updates (new groups, camps) every 1–2 weeks.
3. **Reviews:** ask every family after a package to leave a Google review. Reply to each one. Real reviews also give the website testimonials to use (with permission).
4. **Google Search Console** (search.google.com/search-console): add the domain property, verify (DNS TXT record in GoDaddy, or the HTML tag via the env var above), submit `https://kidohoopsacademy.com/sitemap.xml`, and request indexing for the home page and the LA landing page. Do the same in Bing Webmaster Tools.
5. **Consistent listings (NAP):** use the exact same name, phone and website on Yelp, Nextdoor, Apple Maps (Business Connect), Bing Places, Facebook and Instagram. Add the website link to Instagram/TikTok bios.
6. **Local links:** youth leagues, school PE/athletic pages, community centers, the North Hollywood High alumni network, local parenting blogs or directories. Even a few relevant local links help.
7. **Content (monthly):** short pages or posts answering parents' questions, e.g. ball-handling drills to do at home, how to choose a youth basketball trainer in LA, or summer basketball training in LA. Add real academy training photos and kid-friendly testimonials as soon as they exist.
8. **Missing info that would help rankings:**
  - Neighborhoods and gyms where sessions happen (a Locations page with a map).
  - Age groups and skill levels.
  - Social media links (`site.social`).
  - Training photos with kids (with parent consent).
