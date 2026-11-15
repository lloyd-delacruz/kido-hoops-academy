import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import HighlightVideo from "@/components/HighlightVideo";
import JsonLd from "@/components/JsonLd";
import { media } from "@/lib/media";
import { coach, developmentAreas, site } from "@/lib/site";
import { breadcrumbLd, coachLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Coach Kido Cabrera — Former Pro Basketball Player & Skills Trainer",
  description:
    "Meet Coach Kido Cabrera: North Hollywood High 2010 Player of the Year, University of Cebu standout, and former professional player in the Philippines' MPBL and FIBA 3x3 — now training young players in Los Angeles.",
  path: "/coaches/",
});

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching team"
        title={<>Coach Kido <span className="accent">Cabrera</span></>}
        lead={coach.role}
        crumbs={[{ label: "Coach" }]}
      />

      <section className="section" aria-labelledby="bio-title">
        <div className="container split">
          <Reveal>
            <div className="coach-hero-img" data-clip>
              <Photo media={media.valenzuela} priority sizes="(min-width: 900px) 460px, 100vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <p className="eyebrow">The journey</p>
            <h2 id="bio-title" className="h2 mt-6">From last pick to <span className="accent">pro.</span></h2>
            <p className="lead mt-6">{coach.intro}</p>
            <p className="mt-6">
              His basketball journey began at North Hollywood High School, where he went from being the last freshman selected
              to earning back-to-back MVP honors, First Team All-League recognition and Player of the Year in 2010. He
              continued his career at the University of Cebu in the Philippines, finishing as the team&apos;s second-leading
              scorer and competing internationally.
            </p>
            <p>{coach.playingStyle}</p>
          </Reveal>
        </div>
        <div className="container">
          <div className="stat-row" data-stagger>
            <div className="stat"><strong data-count>2010</strong><span>Player of the Year · North Hollywood HS</span></div>
            <div className="stat"><strong data-count>2×</strong><span>Back-to-back MVP</span></div>
            <div className="stat"><strong data-count>#2</strong><span>Scorer · University of Cebu</span></div>
            <div className="stat"><strong>Pro</strong><span>MPBL &amp; FIBA 3x3</span></div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="career-title">
        <div className="container split split--wide-left">
          <Reveal>
            <p className="eyebrow">Career</p>
            <h2 id="career-title" className="h2 mt-6">Every level of the game.</h2>
            <ol className="timeline mt-7">
              {coach.timeline.map((t) => (
                <li key={t.stage}>
                  <span className="timeline__stage">{t.stage}</span>
                  <div>
                    <h3>{t.place}</h3>
                    <p>{t.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="figure" style={{ maxWidth: 300, margin: "0 auto", background: "transparent" }}>
              <Photo media={media.card} sizes="300px" />
            </figure>
            <p className="field__hint center">Valenzuela Classic player card, MPBL Datu Cup.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep" aria-labelledby="coaching-title">
        <div className="container split">
          <Reveal>
            <p className="eyebrow">Coaching philosophy</p>
            <h2 id="coaching-title" className="h2 mt-6">{site.philosophy}</h2>
            <p className="lead mt-6">{coach.belief}</p>
            <p className="lead mt-6">His mission: {site.mission.charAt(0).toLowerCase() + site.mission.slice(1)}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <HighlightVideo label="Highlight clip of Kido Cabrera playing professionally in the MPBL" />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="specialties-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Specialties</p>
            <h2 id="specialties-title" className="h2">What Coach Kido teaches</h2>
          </Reveal>
          <div className="pillars">
            {developmentAreas.map((a, i) => (
              <Reveal key={a.title} className="pillar" delay={(i % 3) * 0.08}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="btn-row mt-8">
            <Link href="/register/" className="btn">Train with Coach Kido <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/gallery/" className="btn btn--ghost">See the gallery</Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={coachLd} />
      <JsonLd data={breadcrumbLd([{ name: "Coach", path: "/coaches/" }])} />
    </>
  );
}
