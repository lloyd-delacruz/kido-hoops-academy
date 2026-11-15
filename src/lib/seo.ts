import type { Metadata } from "next";
import { SITE_URL, site } from "./site";

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      locale: "en_US",
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: site.description,
  sport: "Basketball",
  email: site.contact.email ?? undefined,
  telephone: site.contact.phoneHref,
  slogan: site.philosophy,
  areaServed: { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
  founder: { "@id": `${SITE_URL}/coaches/#kido-cabrera` },
};

export const coachLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/coaches/#kido-cabrera`,
  name: "Kido Cabrera",
  jobTitle: "Basketball Skills Development Trainer",
  description: "Former professional basketball player and elite skills development trainer.",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  alumniOf: [
    { "@type": "HighSchool", name: "North Hollywood High School" },
    { "@type": "CollegeOrUniversity", name: "University of Cebu" },
  ],
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
