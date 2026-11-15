import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PhotoBand from "@/components/PhotoBand";
import { stock } from "@/lib/stock";
import { media } from "@/lib/media";
import { courtRentalNote, developmentAreas, programs, skillsFocus, SITE_URL } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Basketball Training Programs & Pricing",
  description:
    "Kido Hoops Academy programs: Group Training Package — 4 consecutive 2-hour sessions for 5–10 kids, $800 total — or Hourly Training at $50 per person per hour. Los Angeles, CA.",
  path: "/programs/",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & pricing"
        title={<><span className="nowrap">Train together.</span> <span className="accent nowrap">Pay less.</span></>}
        lead="Two straightforward options for young players in Los Angeles. Both cover the same core skills — handles, footwork, shooting and passing."
        crumbs={[{ label: "Programs" }]}
        image={media.jumper}
      />

      <section className="section" aria-labelledby="options-title">
        <div className="container">
          <h2 id="options-title" className="sr-only">Training options</h2>
          <div className="programs">
            {programs.map((p, i) => (
              <Reveal as="article" key={p.slug} className={`program ${i === 0 ? "program--featured" : ""}`} delay={i * 0.1}>
                <p className="program__tag">{i === 0 ? "Best value" : "Flexible"}</p>
                <h3 className="program__name">{p.name}</h3>
                <div className="program__price">
                  <strong>{p.price}</strong>
                  <span>{p.priceUnit}</span>
                </div>
                <p className="program__summary">{p.summary}</p>
                <ul className="program__facts">
                  {p.facts.map((f) => (
                    <li key={f.label}>
                      <span><strong>{f.label}:</strong> {f.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="program__actions">
                  <Link href={`/register/?program=${p.slug}`} className={`btn ${i === 0 ? "btn--navy" : ""}`}>
                    Book now <span className="arrow" aria-hidden="true">→</span>
                  </Link>
                  <Link href={`/programs/${p.slug}/`} className="btn btn--ghost">
                    Full details
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="note"><span aria-hidden="true">ⓘ</span> {courtRentalNote}</p>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="compare-title">
        <div className="container split split--wide-left">
          <Reveal>
            <p className="eyebrow">The math</p>
            <h2 id="compare-title" className="h2 mt-6"><span className="nowrap">The more who join,</span> <span className="nowrap">the less each pays.</span></h2>
            <p className="lead mt-6">
              The group package is one flat $800 coach fee for all four sessions, shared across the group. With a full group of
              10, that&apos;s $80 per child for eight hours of training.
            </p>
            <div className="breakdown">
              <div><strong>$80</strong><span>per child, full package (10 kids)</span></div>
              <div><strong>$20</strong><span>per child, per 2-hour session</span></div>
              <div><strong>$10</strong><span>per child, per hour</span></div>
            </div>
            <p className="mt-6" style={{ color: "var(--ink-2)" }}>
              Compared with hourly training at $50 per person, per hour. Figures from the academy&apos;s official pricing.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="flyer-thumb" href={`${media.flyer.base}-1179.jpg`} target="_blank" rel="noopener" style={{ display: "block" }}>
              <Photo media={media.flyer} sizes="340px" />
              <span className="sr-only">(opens the full-size pricing flyer in a new tab)</span>
            </a>
            <p className="field__hint">Official pricing flyer — tap to view full size.</p>
          </Reveal>
        </div>
      </section>

      <PhotoBand image={stock.threeBalls} fallback={media.baseline} title="Handles. Footwork." sub="Shooting and passing too — every session, every player." />

      <section className="section section--navy" aria-labelledby="focus-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Every session</p>
            <h2 id="focus-title" className="h2">What players work on</h2>
            <ul className="chips" aria-label="Core skills">
              {skillsFocus.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
          <div className="pillars">
            {developmentAreas.map((a, i) => (
              <Reveal key={a.title} className="pillar" delay={(i % 3) * 0.08}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbLd([{ name: "Programs", path: "/programs/" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Kido Hoops Academy training programs",
          url: `${SITE_URL}/programs/`,
          itemListElement: programs.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.summary,
            price: p.price.replace("$", ""),
            priceCurrency: "USD",
            url: `${SITE_URL}/programs/${p.slug}/`,
            seller: { "@id": `${SITE_URL}/#organization` },
          })),
        }}
      />
    </>
  );
}
