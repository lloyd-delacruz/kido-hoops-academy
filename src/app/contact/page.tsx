import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description: "Get in touch with Kido Hoops Academy, youth basketball skills training in Los Angeles, California.",
  path: "/contact/",
});

const Pin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" />
  </svg>
);
const Mail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
);
const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s <span className="accent">talk hoops.</span></>}
        lead="Questions about training, groups or pricing? Call, email or send a message and Coach Kido will get back to you."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section">
        <div className="container form-wrap">
          <Reveal>
            <p className="eyebrow">Reach us</p>
            <h2 className="h2 mt-6">Kido Hoops Academy</h2>
            <ul className="info-list">
              <li>
                <span className="ico"><Pin /></span>
                <div><strong>Based in</strong>{site.city}, {site.region}</div>
              </li>
              {site.contact.email && (
                <li>
                  <span className="ico"><Mail /></span>
                  <div><strong>Email</strong><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></div>
                </li>
              )}
              {site.contact.phone && (
                <li>
                  <span className="ico"><Phone /></span>
                  <div><strong>Phone</strong><a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a></div>
                </li>
              )}
            </ul>
            <p className="mt-6" style={{ color: "var(--ink-2)", maxWidth: "44ch" }}>
              Ready to book? The <Link className="text-link" href="/register/">training inquiry form</Link> lets you choose a
              program and group size.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="form-card">
              <h2 className="h3" style={{ marginBottom: "1.5rem" }}>Send a message</h2>
              <InquiryForm mode="contact" />
            </div>
          </Reveal>
        </div>
      </section>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact/" }])} />
    </>
  );
}
