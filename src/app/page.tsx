import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CourtLines from "@/components/CourtLines";
import CtaBand from "@/components/CtaBand";
import HighlightVideo from "@/components/HighlightVideo";
import JsonLd from "@/components/JsonLd";
import { media } from "@/lib/media";
import { coach, courtRentalNote, developmentAreas, programs, site, skillsFocus } from "@/lib/site";
import { pageMeta, coachLd } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Youth Basketball Training in Los Angeles",
    description:
      "Youth basketball skills training in Los Angeles with former pro Coach Kido Cabrera. Group package: 4 two-hour sessions for 5–10 kids, $800 total. Or $50 per person per hour.",
    path: "/",
  }),
  title: { absolute: "Kido Hoops Academy | Youth Basketball Training in Los Angeles" },
};

const d = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

export default function Home() {
  const [group, hourly] = programs;
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <CourtLines />
        <div className="container hero__grid">
          <div>
            <p className="eyebrow hero-in" style={d(0)}>
              Youth basketball training · {site.city}, {site.regionCode}
            </p>
            <h1 id="hero-title" className="hero__title">
              <span className="line hero-in" style={d(0.08)}>Hard work</span>
              <span className="line hero-in accent" style={d(0.16)}>beats talent.</span>
            </h1>
            <p className="hero__lead hero-in" style={d(0.26)}>
              Skills training for young players led by former professional Coach Kido Cabrera — ball handling, footwork,
              shooting, passing and the basketball IQ to use them in a real game.
            </p>
            <div className="btn-row hero-in" style={d(0.34)}>
              <Link href="/register/" className="btn">
                Book training <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/programs/" className="btn btn--ghost">
                Programs &amp; pricing
              </Link>
            </div>
            <ul className="hero__meta hero-in" style={d(0.42)}>
              <li>Groups of 5–10 kids</li>
              <li>From $10 per child / hour</li>
              <li>Former MPBL pro</li>
            </ul>
          </div>

          <div className="hero__media hero-in" style={d(0.2)}>
            <div className="hero__slab" aria-hidden="true" />
            <div className="hero__frame">
              <Photo media={media.layup} priority sizes="(min-width: 1000px) 520px, 92vw" />
            </div>
            <p className="hero__caption" aria-hidden="true">Coach Kido · Pro career</p>
            <div className="hero__badge">
              <span>North Hollywood HS</span>
              <strong>2010 Player of the Year</strong>
            </div>
          </div>
        </div>
      </section>

      <Marquee words={[...skillsFocus, "Defense", "Basketball IQ"]} />

      {/* ---------- INTRO ---------- */}
      <section className="section" aria-labelledby="intro-title">
        <div className="container split split--wide-left">
          <Reveal>
            <p className="eyebrow">The academy</p>
            <h2 id="intro-title" className="h2 mt-6">
              Complete players are <span className="accent">built</span>, rep by rep.
            </h2>
            <p className="lead mt-6">
              Kido Hoops Academy is Coach Kido Cabrera&apos;s skills program for young hoopers in Los Angeles. Sessions are
              built on detailed fundamentals and game-like situations — the same habits that carried Kido from the last
              freshman picked at North Hollywood High to professional basketball overseas.
            </p>
            <div className="audience">
              <div className="audience__item">
                <h3>For players</h3>
                <p>Sharper handles, cleaner footwork, a more reliable shot and the confidence to make plays.</p>
              </div>
              <div className="audience__item">
                <h3>For parents</h3>
                <p>A former pro coaching your kids, clear flat pricing, and a group format that keeps it affordable.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="figure" style={{ aspectRatio: "4 / 5" }}>
              <Photo media={media.dribble} sizes="(min-width: 900px) 40vw, 100vw" style={{ objectPosition: "45% 40%" }} />
              <figcaption>Coach Kido on the attack</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROGRAMS ---------- */}
      <section className="section section--paper2" aria-labelledby="programs-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Programs &amp; pricing</p>
            <h2 id="programs-title" className="h2">
              Two ways to train.
            </h2>
            <p className="lead">Simple, flat pricing straight from the academy. No hidden fees — court rental is the only extra.</p>
          </Reveal>
          <div className="programs">
            <Reveal as="article" className="program program--featured">
              <p className="program__tag">Best value</p>
              <h3 className="program__name">{group.name}</h3>
              <div className="program__price">
                <strong>{group.price}</strong>
                <span>{group.priceUnit}</span>
              </div>
              <ul className="program__facts">
                <li>4 consecutive sessions · 2 hours each</li>
                <li>8 total training hours</li>
                <li>For groups of 5–10 kids</li>
                <li>With 10 kids: $80 each — just $10 per child per hour</li>
              </ul>
              <div className="program__actions">
                <Link href="/register/?program=group-training" className="btn btn--navy">
                  Book the package <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link href={`/programs/${group.slug}/`} className="btn btn--ghost">
                  Details
                </Link>
              </div>
            </Reveal>
            <Reveal as="article" className="program" delay={0.1}>
              <p className="program__tag">Flexible</p>
              <h3 className="program__name">{hourly.name}</h3>
              <div className="program__price">
                <strong>{hourly.price}</strong>
                <span>{hourly.priceUnit}</span>
              </div>
              <ul className="program__facts">
                <li>Book by the hour</li>
                <li>A 2-hour session is $100 per person</li>
                <li>Same skill focus: handles, footwork, shooting, passing</li>
              </ul>
              <div className="program__actions">
                <Link href="/register/?program=hourly-training" className="btn">
                  Book hourly <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link href={`/programs/${hourly.slug}/`} className="btn btn--ghost">
                  Details
                </Link>
              </div>
            </Reveal>
          </div>
          <p className="note">
            <span aria-hidden="true">ⓘ</span> {courtRentalNote} Prices shown are the coach fee.
          </p>
        </div>
      </section>

      {/* ---------- METHOD ---------- */}
      <section className="section section--navy" aria-labelledby="method-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What we train</p>
            <h2 id="method-title" className="h2">
              Every part of the <span className="accent">game.</span>
            </h2>
            <p className="lead">
              Coach Kido&apos;s sessions develop complete players — not just shooters or just ball handlers — through detailed skill
              work and game-like reps.
            </p>
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

      {/* ---------- COACH ---------- */}
      <section className="section" aria-labelledby="coach-title">
        <div className="container split">
          <Reveal>
            <figure className="figure" style={{ aspectRatio: "3 / 4", maxWidth: 520 }}>
              <Photo media={media.valenzuela} sizes="(min-width: 900px) 40vw, 100vw" style={{ objectPosition: "45% 60%" }} />
              <figcaption>Valenzuela Classic · MPBL</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Meet your coach</p>
            <h2 id="coach-title" className="h2 mt-6">
              Coach Kido <span className="accent">Cabrera</span>
            </h2>
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
              Full coach profile →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- QUOTE + VIDEO ---------- */}
      <section className="section section--deep" aria-labelledby="philosophy-title">
        <div className="container split">
          <Reveal>
            <h2 id="philosophy-title" className="sr-only">Coaching philosophy</h2>
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote" style={{ margin: 0 }}>
              Hard work beats talent when talent <span className="accent">fails to work hard.</span>
            </blockquote>
            <span className="quote-cite">— Coach Kido Cabrera</span>
            <p className="lead mt-6">{coach.belief}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <HighlightVideo label="Highlight clip of Kido Cabrera playing in a professional MPBL game" />
            <p className="mt-6" style={{ opacity: 0.7, fontSize: ".95rem" }}>
              From Coach Kido&apos;s professional career in the Maharlika Pilipinas Basketball League.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="section section--paper2" aria-labelledby="how-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How booking works</p>
            <h2 id="how-title" className="h2">From inquiry to the court.</h2>
          </Reveal>
          <ol className="steps">
            <Reveal as="li" className="step">
              <h3>Gather your group</h3>
              <p>Bring together 5–10 kids for the package — teammates, friends or siblings — or book by the hour.</p>
            </Reveal>
            <Reveal as="li" className="step" delay={0.08}>
              <h3>Send an inquiry</h3>
              <p>Tell us which option you want, how many players and what days generally work. Coach Kido follows up to confirm.</p>
            </Reveal>
            <Reveal as="li" className="step" delay={0.16}>
              <h3>Get on the court</h3>
              <p>Confirm your dates — court rental is additional and paid separately — then put in the work with Coach Kido.</p>
            </Reveal>
          </ol>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={coachLd} />
    </>
  );
}
