export default function Ball({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <g fill="none" stroke={color} strokeWidth="2.4">
        <circle cx="16" cy="16" r="13.5" />
        <path d="M2.5 16h27M16 2.5v27M6.5 6.5c4.5 4 4.5 15 0 19M25.5 6.5c-4.5 4-4.5 15 0 19" />
      </g>
    </svg>
  );
}
