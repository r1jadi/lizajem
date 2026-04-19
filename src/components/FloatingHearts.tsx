import { useMemo } from "react";

interface FloatingHeartsProps {
  count?: number;
  variant?: "hearts" | "petals" | "stars";
}

const HEART = "♥";
const PETAL = "❀";
const STAR = "✦";

export function FloatingHearts({ count = 18, variant = "hearts" }: FloatingHeartsProps) {
  const items = useMemo(() => {
    const symbol = variant === "hearts" ? HEART : variant === "petals" ? PETAL : STAR;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol,
      left: Math.random() * 100,
      size: 12 + Math.random() * 22,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
      opacity: 0.25 + Math.random() * 0.45,
    }));
  }, [count, variant]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="absolute animate-float-up text-primary"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDuration: `${it.duration}s`,
            animationDelay: `${it.delay}s`,
            opacity: it.opacity,
            filter: "drop-shadow(0 0 8px oklch(0.78 0.12 12 / 0.6))",
          }}
        >
          {it.symbol}
        </span>
      ))}
    </div>
  );
}
