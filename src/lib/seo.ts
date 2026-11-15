import type { Metadata } from "next";
import { SITE_URL, site, programs } from "./site";

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
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: `${site.name} logo`, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/twitter-image.jpg"],
    },
  };
}

const LA = {
  "@type": "City",
  name: "Los Angeles",
  containedInPlace: { "@type": "State", name: "California" },
};

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["SportsOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: site.name,
  alternateName: ["Kido Hoops", "Kido Hoops Academy LA"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description: site.description,
  sport: "Basketball",
  email: site.contact.email ?? undefined,
  telephone: site.contact.phoneHref,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Venmo, Zelle",
  slogan: site.philosophy,
  areaServed: LA,
  knowsAbout: [
    "Youth basketball training",
    "Kids basketball lessons",
    "Basketball skills development",
    "Ball handling",
    "Shooting technique",
    "Footwork",
    "Basketball IQ",
  ],
  founder: { "@id": `${SITE_URL}/coaches/#kido-cabrera` },
  employee: { "@id": `${SITE_URL}/coaches/#kido-cabrera` },
  makesOffer: programs.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/[$,]/g, ""),
    priceCurrency: "USD",
    url: `${SITE_URL}/programs/${p.slug}/`,
    itemOffered: {
      "@type": "Service",
      name: `${p.name} — youth basketball training in Los Angeles`,
      serviceType: "Youth basketball training",
      areaServed: LA,
    },
  })),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: site.name,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const coachLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/coaches/#kido-cabrera`,
  name: "Kido Cabrera",
  jobTitle: "Youth Basketball Skills Trainer",
  description:
    "Former professional basketball player (MPBL, FIBA 3x3) and youth basketball skills trainer in Los Angeles. North Hollywood High School 2010 Player of the Year.",
  url: `${SITE_URL}/coaches/`,
  image: `${SITE_URL}/assets/coaches/kido-cabrera-valenzuela-classic_IMG_1535-750.jpg`,
  homeLocation: LA,
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
