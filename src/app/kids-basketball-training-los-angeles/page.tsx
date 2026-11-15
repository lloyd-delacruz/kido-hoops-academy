import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { media } from "@/lib/media";
import { coach, courtRentalNote, programs, site, trainingFocus, SITE_URL } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

const PATH = "/kids-basketball-training-los-angeles/";

export const metadata = pageMeta({
  title: "Kids Basketball Lessons in Los Angeles",
  description:
    "Kids basketball training in Los Angeles: small-group youth basketball lessons with former pro Coach Kido Cabrera. Ball handling, shooting, footwork and game IQ.",
  path: PATH,
});

const [group, hourly] = programs;

/** Every answer uses only verified academy facts (see docs/content-inventory.md). */
const faqs = [
  {
    q: "How much does kids basketball training cost at Kido Hoops Academy?",
    a: `The Group Training Package is ${group.price} for the whole group: four consecutive 2-hour sessions for 5–10 players. That's $120 per player with 10 players, or $240 per player with 5. Hourly training is ${hourly.price} per person, per hour. ${courtRentalNote}`,
  },
  {
    q: "What will my child work on?",
    a: `Every session focuses on ${trainingFocus.slice(0, 4).join(", ").toLowerCase()}, plus ${trainingFocus[4].toLowerCase()}.`,
  },
  {
    q: "Who coaches the sessions?",
    a: "Coach Kido Cabrera, a former professional basketball player. He was North Hollywood High School's 2010 Player of the Year and the University of Cebu's second-leading scorer, and he played professionally in the Philippines' MPBL and in FIBA 3x3.",
  },
  {
    q: "How big are the training groups?",
    a: "The group package is built for small groups of 5 to 10 players, so every player gets real reps and attention from the coach.",
  },
  {
    q: "How do I book and pay?",
    a: `Send an inquiry through the Book Training page, email ${site.contact.email}, or call/text ${site.contact.phone}. Once Coach Kido confirms your booking, you pay by Venmo or Zelle.`,
  },
];

export default function KidsBasketballLA() {
  return (
    <>
      <PageHero
        eyebrow="Los Angeles, CA"
        title={<>Kids basketball training <span className="accent nowrap">in Los Angeles</span></>}
        lead="Small-group youth basketball lessons with a former professional player. Built to make young players more skilled, more confident and more complete."
        crumbs={[{ label: "Kids basketball training in LA" }]}
        image={media.dribble}
      >
        <div className="btn-row">
          <Link href="/register/" className="btn">
            Book training <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/programs/" className="btn btn--ghost">
            See prices
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="why-title">
        <div className="container split split--wide-left">
          <Reveal className="prose">
            <p className="eyebrow">Youth basketball lessons</p>
            <h2 id="why-title" className="h2 mt-6">Skills that carry into real games.</h2>
            <p className="lead mt-6">
              Kido Hoops Academy is a youth basketball training program in Los Angeles led by {coach.name}. Sessions focus on
              the fundamentals that separate good young players from great ones, taught through detailed skill work and
              game-like situations.
            </p>
            <p>
              Whether your child is just getting serious about basketball or already plays on a team, focused skills
              training helps them handle the ball with confidence, shoot with better form, move with better footwork and
              make smarter decisions on the court.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="figure" style={{ aspectRatio: "4 / 5" }} data-clip>
              <Photo media={media.jumper} sizes="(min-width: 900px) 40vw, 100vw" />
              <figcaption>Coach Kido Cabrera</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="focus-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What kids work on</p>
            <h2 id="focus-title" className="h2">Training focus</h2>
          </Reveal>
          <div className="pillars">
            {trainingFocus.map((t, i) => (
              <Reveal key={t} className="pillar" delay={(i % 3) * 0.08}>
                <h3>{t}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="format-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Format &amp; prices</p>
            <h2 id="format-title" className="h2">Small groups. Clear pricing.</h2>
            <p className="lead">
              Gather a team, a group of friends or siblings. The group package is one flat price shared across 5–10 players,
              so the more who join, the less each pays.
            </p>
          </Reveal>
          <div className="breakdown">
            <div><strong>{group.price}</strong><span>group package: 4 × 2-hour sessions</span></div>
            <div><strong>$120</strong><span>per player with 10 players</span></div>
            <div><strong>{hourly.price}</strong><span>per person, per hour (hourly option)</span></div>
          </div>
          <p className="note"><span aria-hidden="true">ⓘ</span> {courtRentalNote}</p>
          <div className="btn-row mt-6">
            <Link href={`/programs/${group.slug}/`} className="btn btn--navy">
              Group package details <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <Link href={`/programs/${hourly.slug}/`} className="btn btn--ghost">
              Hourly training
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="coach-title">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Your coach</p>
            <h2 id="coach-title" className="h2 mt-6">Coached by a former pro.</h2>
            <p className="lead mt-6">{coach.intro}</p>
            <ol className="timeline mt-7">
              {coach.timeline.slice(0, 3).map((t) => (
                <li key={t.stage}>
                  <span className="timeline__stage">{t.stage}</span>
                  <div>
                    <h3>{t.place}</h3>
                    <p>{t.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/coaches/" className="text-link mt-6" style={{ display: "inline-block" }}>
              Meet Coach Kido →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h3">Choosing a youth basketball trainer in LA</h2>
            <ul className="pay-notes" style={{ marginTop: "1.25rem" }}>
              <li><strong>Playing experience:</strong> has the coach played at a high level and can they demonstrate the skills?</li>
              <li><strong>Small groups:</strong> fewer players means more reps and more feedback for your child.</li>
              <li><strong>Fundamentals first:</strong> look for ball handling, footwork and shooting form, not just scrimmages.</li>
              <li><strong>Clear pricing:</strong> know exactly what a package includes and what&apos;s extra (like court rental).</li>
              <li><strong>Game IQ:</strong> good training teaches players when and why, not only how.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="faq-title">
        <div className="container">
          <div className="faq-group">
            <h2 id="faq-title">Questions from LA parents</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="faq__answer">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbLd([{ name: "Kids basketball training in Los Angeles", path: PATH }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kids basketball training in Los Angeles",
          serviceType: "Youth basketball training",
          url: `${SITE_URL}${PATH}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Los Angeles" },
          audience: { "@type": "PeopleAudience", audienceType: "Youth basketball players" },
          offers: programs.map((p) => ({ "@type": "Offer", name: p.name, price: p.price.replace(/[$,]/g, ""), priceCurrency: "USD" })),
        }}
      />
    </>
  );
}
