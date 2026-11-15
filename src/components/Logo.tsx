import { logo } from "@/lib/media";

export default function Logo({ width = 52, className }: { width?: number; className?: string }) {
  return (
    <picture>
      <source type="image/webp" srcSet={logo.src} />
      <img
        src={logo.png}
        width={width}
        height={Math.round((width * logo.h) / logo.w)}
        alt="Kido Hoops Academy logo"
        className={className}
      />
    </picture>
  );
}
