export default function PulseLogo({ size = 28, animated = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill="var(--color-navy)" />
      <path
        d="M4 25 H14 L18 12 L24 36 L28 20 L31 25 H44"
        stroke="var(--color-coral)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={animated ? "pulse-line-path" : ""}
      />
    </svg>
  );
}
