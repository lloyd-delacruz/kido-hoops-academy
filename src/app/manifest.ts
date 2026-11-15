import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kido Hoops Academy",
    short_name: "Kido Hoops",
    start_url: "/",
    display: "standalone",
    background_color: "#00164a",
    theme_color: "#00164a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
