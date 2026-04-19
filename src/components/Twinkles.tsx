import { useMemo } from "react";

export function Twinkles({ count = 30 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-primary animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px oklch(0.85 0.1 12 / 0.8)",
          }}
        />
      ))}
    </div>
  );
}
