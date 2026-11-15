import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { media } from "@/lib/media";
import { courtRentalNote, developmentAreas, programs, skillsFocus, SITE_URL } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({
    title: `${p.name} — ${p.price} ${p.priceUnit}`,
    description: `${p.summary} Youth basketball training in Los Angeles with Coach Kido Cabrera.`,
    path: `/programs/${p.slug}/`,
  });
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  const other = programs.find((x) => x.slug !== slug)!;
  const isGroup = p.slug === "group-training";

  return (
    <>
      <PageHero
        eyebrow={isGroup ? "Best value" : "Flexible"}
        title={p.name}
        lead={p.summary}
        crumbs={[{ href: "/programs/", label: "Programs" }, { label: p.short }]}
        image={isGroup ? media.bench : media.contested}
      >
        <div className="btn-row">
          <Link href={`/register/?program=${p.slug}`} className="btn">
            Book {isGroup ? "the package" : "hourly training"} <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="details-title">
        <div className="container detail-grid">
          <div>
            <Reveal>
              <p className="eyebrow">The details</p>
              <h2 id="details-title" className="h2 mt-6">What&apos;s included</h2>
              <table className="facts-table">
                <tbody>
                  {p.facts.map((f) => (
                    <tr key={f.label}>
                      <th scope="row">{f.label}</th>
                      <td>{f.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Court rental</th>
                    <td>Additional, paid separately</td>
                  </tr>
                  <tr>
                    <th scope="row">Skill focus</th>
                    <td>{skillsFocus.join(" · ")}</td>
                  </tr>
                </tbody>
              </table>
            </Reveal>

            {p.breakdown && (
              <Reveal className="mt-8">
                <h3 className="h3">Split across the group</h3>
                <div className="breakdown">
                  {p.breakdown.map((b) => (
                    <div key={b.label}>
                      <strong>{b.amount}</strong>
                      <span>{b.label}</span>
                    </div>
                  ))}
                </div>
                {p.breakdownNote && <p className="field__hint">{p.breakdownNote} (From the academy&apos;s official pricing.)</p>}
              </Reveal>
            )}

            <Reveal className="mt-8">
              <h3 className="h3">Best for</h3>
              <p className="lead mt-6">{p.bestFor}</p>
            </Reveal>

            <Reveal className="mt-8">
              <h3 className="h3">Development areas</h3>
              <div className="pillars mt-6">
                {developmentAreas.slice(0, 4).map((a) => (
                  <div key={a.title} className="pillar">
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="sticky-card" aria-label="Price summary">
            <div className="price-card">
              <p className="program__tag">{p.name}</p>
              <div className="program__price">
                <strong>{p.price}</strong>
                <span>{p.priceUnit}</span>
              </div>
              <p className="program__summary">Coach fee. {courtRentalNote}</p>
              <div className="program__actions">
                <Link href={`/register/?program=${p.slug}`} className="btn">
                  Book now <span className="arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="figure mt-6" style={{ aspectRatio: "4 / 3" }}>
              <Photo media={media.ready} sizes="(min-width: 1000px) 420px, 100vw" />
            </div>
            <p className="mt-6">
              Prefer the other option?{" "}
              <Link className="text-link" href={`/programs/${other.slug}/`}>
                {other.name} — {other.price}
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbLd([{ name: "Programs", path: "/programs/" }, { name: p.name, path: `/programs/${p.slug}/` }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.name,
          serviceType: "Youth basketball skills training",
          description: p.summary,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "City", name: "Los Angeles" },
          offers: { "@type": "Offer", price: p.price.replace("$", ""), priceCurrency: "USD", description: `${p.price} ${p.priceUnit}` },
        }}
      />
    </>
  );
}
