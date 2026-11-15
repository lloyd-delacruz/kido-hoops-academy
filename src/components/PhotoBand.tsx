import type { StockImage } from "@/lib/stock";
import type { Media } from "@/lib/media";
import StockPhoto from "./StockPhoto";

export default function PhotoBand({ image, fallback, title, sub }: { image: StockImage; fallback: Media; title: string; sub?: string }) {
  return (
    <section className="photo-band" aria-label={title}>
      <div className="photo-band__img" data-parallax="0.25">
        <StockPhoto image={image} fallback={fallback} sizes="100vw" />
      </div>
      <div className="container">
        <p className="photo-band__text" data-slide-x="right">{title}</p>
        {sub && <p className="photo-band__sub">{sub}</p>}
      </div>
      <p className="photo-credit">
        Photo: <a href={image.page} target="_blank" rel="noopener noreferrer">{image.credit} / Unsplash</a>
      </p>
    </section>
  );
}
