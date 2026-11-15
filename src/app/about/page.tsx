import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import StockPhoto from "@/components/StockPhoto";
import PhotoBand from "@/components/PhotoBand";
import { stock } from "@/lib/stock";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About the Academy",
  description:
    "Kido Hoops Academy is a youth basketball skills program in Los Angeles founded on one belief: hard work beats talent when talent fails to work hard.",
  path: "/about/",
});

const values = [
  { title: "Discipline", body: "Showing up, doing the details right, and holding a high standard every rep." },
  { title: "Consistency", body: "Progress comes from repeating the right habits session after session." },
  { title: "Obsession with getting better", body: "Always one more thing to sharpen — on both ends of the floor." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Built on <span className="accent">work.</span></>}
        lead="Kido Hoops Academy is Coach Kido Cabrera's basketball skills program for young players in Los Angeles."
        crumbs={[{ label: "About" }]}
        image={media.transition}
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container split split--wide-left">
          <Reveal className="prose">
            <p className="eyebrow">Our story</p>
            <h2 id="story-title" className="h2 mt-6">A pro&apos;s path, passed on.</h2>
            <p className="lead mt-6">
              Coach Kido&apos;s own path started at North Hollywood High School as the last freshman selected. Through discipline
              and relentless work he became a back-to-back MVP, played college basketball at the University of Cebu and went on
              to compete professionally overseas.
            </p>
            <p>
              Kido Hoops Academy exists to pass that experience on. Today Kido brings what he learned as a professional player
              to the next generation, focusing on detailed skill work, shooting mechanics, ball handling, footwork, offensive
              creativity, basketball IQ and game-like situations.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="duo">
              <figure className="figure" data-clip>
                <Photo media={media.bench} sizes="(min-width: 900px) 20vw, 50vw" />
                <figcaption>Team first</figcaption>
              </figure>
              <figure className="figure" data-clip>
                <StockPhoto image={stock.boyBallOverhead} fallback={media.ready} sizes="(min-width: 900px) 20vw, 50vw" />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="mission-title">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="eyebrow">Mission</p>
              <h2 id="mission-title" className="h2 mt-6"><span className="nowrap">Confident. Skilled.</span> <span className="accent">Complete.</span></h2>
              <p className="lead mt-6">{site.mission}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Philosophy</p>
              <p className="quote mt-6" style={{ fontSize: "clamp(2rem, 1.2rem + 3vw, 3.6rem)" }}>
                &ldquo;{site.philosophy}&rdquo;
              </p>
            </Reveal>
          </div>
          <div className="pillars mt-8">
            {values.map((v, i) => (
              <Reveal key={v.title} className="pillar" delay={i * 0.08}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand
        image={stock.underHoop}
        fallback={media.transition}
        title="Next generation."
        sub="Passing on what it takes — on and off the court."
      />

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why Kido Hoops</p>
            <h2 id="why-title" className="h2">Why families choose us</h2>
          </Reveal>
          <ol className="steps" data-stagger>
            <li className="step">
              <h3>Coached by a former pro</h3>
              <p>Lessons from high school MVP seasons, college ball in the Philippines and professional competition in the MPBL and FIBA 3x3.</p>
            </li>
            <li className="step">
              <h3>Complete-player focus</h3>
              <p>Handles, footwork, shooting, passing, defense and IQ — skills that carry into real games.</p>
            </li>
            <li className="step">
              <h3>Clear, fair pricing</h3>
              <p>A flat $1,200 group package for 5–10 players ($120 each with a full group), or $50 per person per hour. Court rental is the only extra.</p>
            </li>
          </ol>
          <div className="btn-row mt-8">
            <Link href="/programs/" className="btn">See programs <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/coaches/" className="btn btn--ghost">Meet Coach Kido</Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbLd([{ name: "About", path: "/about/" }])} />
    </>
  );
}
