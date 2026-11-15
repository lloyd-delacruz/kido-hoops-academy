import Ball from "./Ball";

export default function Marquee({ words }: { words: readonly string[] }) {
  const group = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {[...words, ...words].map((w, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span>{w}</span>
          <Ball size={26} />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="region" aria-label={`Training focus: ${words.join(", ")}`}>
      <div className="marquee__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
