import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import HighlightVideo from "@/components/HighlightVideo";
import JsonLd from "@/components/JsonLd";
import { gallery } from "@/lib/media";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gallery: Coach Kido Cabrera on the Court",
  description: "Photos and highlights from Coach Kido Cabrera's professional basketball career in the Philippines' MPBL.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>On the <span className="accent">court.</span></>}
        lead="Moments from Coach Kido's professional career. Academy training photos are coming soon."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="section" aria-labelledby="photos-title">
        <div className="container">
          <h2 id="photos-title" className="sr-only">Photos</h2>
          <Gallery items={gallery} />
        </div>
      </section>
      <section className="section section--deep" aria-labelledby="video-title">
        <div className="container" style={{ maxWidth: 1000 }}>
          <p className="eyebrow">Highlights</p>
          <h2 id="video-title" className="h2 mt-6" style={{ marginBottom: "2rem" }}>Game footage</h2>
          <HighlightVideo label="Highlight clip of Kido Cabrera in an MPBL game" />
        </div>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbLd([{ name: "Gallery", path: "/gallery/" }])} />
    </>
  );
}
