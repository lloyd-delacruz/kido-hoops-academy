/** Decorative half-court line art used behind navy heroes. */
export default function CourtLines({ className = "hero__court" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g fill="none" stroke="#1d3b8a" strokeWidth="3">
        <circle cx="1400" cy="400" r="330" />
        <circle cx="1400" cy="400" r="120" />
        <rect x="1080" y="250" width="320" height="300" />
        <path d="M1400 30 A 370 370 0 0 0 1400 770" strokeDasharray="0" />
        <line x1="0" y1="400" x2="140" y2="400" stroke="#f2b33d" strokeOpacity=".25" />
        <circle cx="0" cy="400" r="160" />
      </g>
    </svg>
  );
}
