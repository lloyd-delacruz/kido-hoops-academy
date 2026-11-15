/**
 * Single source of truth for published business content.
 * Every fact here is traceable to a client file in the Google Drive folder —
 * see docs/content-inventory.md for the source of each item.
 *
 * Values set to `null` are NOT yet supplied by the client. Components hide
 * anything that is null rather than showing invented details.
 */

// Public URL used for canonical links and link-preview images. On Vercel the production
// domain is picked up automatically; elsewhere set NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export const site = {
  name: "Kido Hoops Academy",
  shortName: "Kido Hoops",
  // Source: project brief (location). Specific gyms not yet supplied.
  city: "Los Angeles",
  region: "California",
  regionCode: "CA",
  tagline: "Youth basketball skills training in Los Angeles",
  description:
    "Kido Hoops Academy offers youth basketball skills training in Los Angeles with former professional player Coach Kido Cabrera — ball handling, footwork, shooting, passing and basketball IQ.",
  // Source: IMG_7615.JPG (coach bio)
  philosophy: "Hard work beats talent when talent fails to work hard.",
  // Source: IMG_7615.JPG
  mission:
    "To develop confident, skilled and complete players who are prepared to compete at the highest level.",
  // Source: supplied directly by the client (15 Nov 2026)
  contact: {
    email: "cabrerakido@gmail.com" as string | null,
    phone: "(818) 284-5801" as string | null,
    phoneHref: "+18182845801",
  },
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
    youtube: null as string | null,
  },
} as const;

/** Source: IMG_7662.PNG (official pricing flyer) */
export const skillsFocus = ["Handles", "Footwork", "Shooting", "Passing"] as const;

/** Source: IMG_7613.JPG / IMG_7614.JPG / IMG_7615.JPG (coach bio) */
export const developmentAreas = [
  { title: "Ball handling", body: "Control, change of pace and the confidence to handle pressure with either hand." },
  { title: "Footwork", body: "Balance, pivots, and efficient movement — the foundation of every move and every shot." },
  { title: "Shooting mechanics", body: "Repeatable form and detailed shot work, from close range out." },
  { title: "Passing", body: "Seeing the floor and delivering the ball on time and on target." },
  { title: "Defensive fundamentals", body: "Stance, positioning and effort — taking pride in guarding the other team's best." },
  { title: "Basketball IQ", body: "Reading the game, making the right decision and carrying skills into game-like situations." },
] as const;

export type Program = {
  slug: string;
  name: string;
  short: string;
  price: string;
  priceUnit: string;
  summary: string;
  facts: { label: string; value: string }[];
  breakdown?: { amount: string; label: string }[];
  breakdownNote?: string;
  bestFor: string;
};

/** Source: IMG_7662.PNG (official pricing flyer) — figures copied exactly */
export const programs: Program[] = [
  {
    slug: "group-training",
    name: "Group Training Package",
    short: "Group Package",
    price: "$800",
    priceUnit: "total for the group",
    summary:
      "Four consecutive two-hour sessions for a group of 5–10 kids — eight total hours of skill work with Coach Kido. One flat coach fee covers all four sessions, split however your group chooses.",
    facts: [
      { label: "Sessions", value: "4 consecutive sessions" },
      { label: "Session length", value: "2 hours each" },
      { label: "Total training", value: "8 hours" },
      { label: "Group size", value: "5–10 kids" },
      { label: "Price", value: "$800 for the group — coach fee only" },
    ],
    breakdown: [
      { amount: "$80", label: "per child for the entire 4-session package" },
      { amount: "$20", label: "per child, per 2-hour session" },
      { amount: "$10", label: "per child, per hour" },
    ],
    breakdownNote: "Example: 10 kids join — $800 ÷ 10 kids = $80 per child.",
    bestFor: "Teammates, friends and families who want to train together at the best value.",
  },
  {
    slug: "hourly-training",
    name: "Hourly Training",
    short: "Hourly",
    price: "$50",
    priceUnit: "per person, per hour",
    summary:
      "Book training by the hour when a full package doesn't fit. Charged per person, per hour — a two-hour session is $100 per person.",
    facts: [
      { label: "Rate", value: "$50 per person, per hour" },
      { label: "Example", value: "2-hour session = $100 per person" },
    ],
    bestFor: "Players who want flexible, focused sessions on their own schedule.",
  },
];

/** Source: IMG_7662.PNG */
export const courtRentalNote = "Court rental is additional and paid separately.";

/** Source: IMG_7613.JPG / IMG_7614.JPG / IMG_7615.JPG */
export const coach = {
  name: "Kido Cabrera",
  role: "Former Professional Basketball Player · Elite Skills Development Trainer",
  intro:
    "Kido Cabrera is a former professional basketball player with a background in high-level competition, international playing experience and player development.",
  timeline: [
    {
      stage: "High school",
      place: "North Hollywood High School",
      detail:
        "Went from the last freshman selected to back-to-back MVP honors, First Team All-League recognition and Player of the Year in 2010.",
    },
    {
      stage: "College",
      place: "University of Cebu, Philippines",
      detail: "One of the team's leading offensive players, finishing as the second-leading scorer and competing internationally.",
    },
    {
      stage: "Professional",
      place: "MPBL & FIBA 3x3",
      detail:
        "Competed overseas, including with the Valenzuela Classic in the Philippines' Maharlika Pilipinas Basketball League (MPBL), and in FIBA 3x3 professional leagues.",
    },
    {
      stage: "Today",
      place: "Kido Hoops Academy",
      detail:
        "Brings his professional experience to the next generation — specializing in skill work, shooting, ball handling, footwork, defensive fundamentals and basketball IQ.",
    },
  ],
  playingStyle:
    "Known for impacting both ends of the floor, Kido took pride in defending the opposition's best players while developing into a versatile offensive threat.",
  belief:
    "Kido believes greatness is built through discipline, consistency and an obsession with getting better.",
} as const;

export const nav = [
  { href: "/programs/", label: "Programs" },
  { href: "/coaches/", label: "Coach" },
  { href: "/about/", label: "About" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;
