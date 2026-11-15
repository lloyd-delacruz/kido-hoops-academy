/**
 * Free stock photography from Unsplash (Unsplash License: free for commercial use,
 * no permission needed; attribution appreciated). These are illustrative only —
 * they are NOT academy players. Replace with real academy photos when available.
 * See docs/content-inventory.md → "Stock photography".
 */
export type StockImage = { src: string; alt: string; credit: string; page: string };

export const stock = {
  girlWithBall: {
    src: "https://images.unsplash.com/photo-1682486519702-73ef62b7d042",
    alt: "A young girl holding a basketball on an outdoor court",
    credit: "Shrikant Ambawale",
    page: "https://unsplash.com/photos/a-young-girl-holding-a-basketball-on-a-basketball-court-E5wiUpxYcAM",
  },
  boyBallOverhead: {
    src: "https://images.unsplash.com/photo-1682486519525-a2c2d1c65b8b",
    alt: "A young boy holding a basketball over his head on a court",
    credit: "Shrikant Ambawale",
    page: "https://unsplash.com/photos/a-young-boy-holding-a-basketball-over-his-head-CmCGabaesec",
  },
  ballUnderRing: {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    alt: "A basketball resting beneath a hoop on an outdoor court",
    credit: "Markus Spiske",
    page: "https://unsplash.com/photos/ball-under-basketball-ring-BfphcCvhl6E",
  },
  underHoop: {
    src: "https://images.unsplash.com/photo-1533773652712-76b0f283e0cc",
    alt: "Players standing under a basketball hoop",
    credit: "Damon Lam",
    page: "https://unsplash.com/photos/people-standing-under-basketball-hoop-gl-KCAEc7mo",
  },
  threeBalls: {
    src: "https://images.unsplash.com/photo-1653712746236-1e921698ea05",
    alt: "Three basketballs on a court",
    credit: "ANTIPOLYGON YOUTUBE",
    page: "https://unsplash.com/photos/three-basketballs-sitting-on-top-of-a-basketball-court-m319Fgwr7Ls",
  },
} satisfies Record<string, StockImage>;
