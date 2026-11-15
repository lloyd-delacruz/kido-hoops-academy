import Link from "next/link";
import type { Media } from "@/lib/media";
import Photo from "./Photo";
import CourtLines from "./CourtLines";

type Crumb = { href?: string; label: string };

export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs: Crumb[];
  image?: Media;
  children?: React.ReactNode;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero--image" : ""}`}>
      {image ? (
        <div className="page-hero__bg">
          <Photo media={image} sizes="100vw" priority alt="" />
        </div>
      ) : (
        <CourtLines />
      )}
      <div className="container">
        <nav className="breadcrumb hero-in" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={i}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow hero-in" style={{ "--delay": ".05s" } as React.CSSProperties}>{eyebrow}</p>
        <h1 className="h1 hero-in" style={{ "--delay": ".1s" } as React.CSSProperties}>{title}</h1>
        {lead && <p className="lead hero-in" style={{ "--delay": ".18s" } as React.CSSProperties}>{lead}</p>}
        {children && <div className="hero-in" style={{ "--delay": ".25s", marginTop: "2rem" } as React.CSSProperties}>{children}</div>}
      </div>
    </section>
  );
}
