import Link from "next/link";
import { nav, site, programs } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => !!url) as [string, string][];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo width={120} />
            <p>
              Youth basketball skills training in {site.city}, {site.regionCode} with former professional player Coach
              Kido Cabrera.
            </p>
            <p className="gold" style={{ fontWeight: 600 }}>&ldquo;{site.philosophy}&rdquo;</p>
          </div>
          <div>
            <p className="footer-title">Explore</p>
            <ul className="footer-list">
              <li><Link href="/">Home</Link></li>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">Train</p>
            <ul className="footer-list">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`/programs/${p.slug}/`}>{p.name} — {p.price}</Link>
                </li>
              ))}
              <li><Link href="/register/">Book training</Link></li>
            </ul>
            <p className="footer-title" style={{ marginTop: "2rem" }}>Based in</p>
            <p>{site.city}, {site.region}</p>
            {site.contact.email && <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>}
            {site.contact.phone && <p><a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a></p>}
            {socials.length > 0 && (
              <ul className="footer-list" style={{ marginTop: "1rem" }}>
                {socials.map(([k, url]) => (
                  <li key={k}><a href={url} rel="noopener noreferrer" target="_blank">{k}</a></li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">Kido Hoops</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Some photos courtesy of <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>. Gather your group. Train with Coach Kido.</span>
        </div>
      </div>
    </footer>
  );
}
