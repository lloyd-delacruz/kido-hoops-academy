import type { MetadataRoute } from "next";
import { SITE_URL, programs } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/programs/", ...programs.map((p) => `/programs/${p.slug}/`), "/coaches/", "/about/", "/register/", "/gallery/", "/faq/", "/contact/", "/kids-basketball-training-los-angeles/"];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-11-15"),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/programs") || p === "/register/" || p.startsWith("/kids-") ? 0.9 : 0.7,
  }));
}
