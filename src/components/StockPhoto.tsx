"use client";

import { useState } from "react";
import type { StockImage } from "@/lib/stock";
import type { Media } from "@/lib/media";

/**
 * Free Unsplash photo loaded from Unsplash's image CDN (hotlinking is how the
 * Unsplash License expects images to be served). If the CDN image fails to load,
 * it falls back to a client photo so the layout never shows a broken image.
 */
export default function StockPhoto({
  image,
  fallback,
  sizes = "100vw",
  className,
  style,
  priority = false,
}: {
  image: StockImage;
  fallback: Media;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const url = (w: number) => `${image.src}?auto=format&fit=crop&w=${w}&q=72`;
  const widths = [640, 960, 1400, 2000];
  if (failed) {
    return (
      <img
        src={`${fallback.base}-${fallback.widths[Math.min(1, fallback.widths.length - 1)]}.jpg`}
        srcSet={fallback.widths.map((w) => `${fallback.base}-${w}.jpg ${w}w`).join(", ")}
        sizes={sizes}
        alt={fallback.alt}
        data-fallback=""
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }
  return (
    <img
      src={url(1400)}
      srcSet={widths.map((w) => `${url(w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={image.alt}
      className={className}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
