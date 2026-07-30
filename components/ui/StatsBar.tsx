"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: StatItem[];
  /** Animation duration in milliseconds */
  duration?: number;
}

const defaultStats: StatItem[] = [
  { value: "15K+", label: "Classes delivered" },
  { value: "500+", label: "Active members" },
  { value: "5+", label: "Years running" },
];

/**
 * Parses a stat value string like "15K+" into its numeric target and suffix.
 * Supports K (×1000) multiplier. Examples:
 *   "15K+" → { target: 15, suffix: "K+" }
 *   "500+" → { target: 500, suffix: "+" }
 *   "5+"   → { target: 5, suffix: "+" }
 *   "42"   → { target: 42, suffix: "" }
 */
function parseStatValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseFloat(match[1]), suffix: match[2] };
}

/** Ease-out cubic for a natural deceleration feel. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatsBar({
  stats = defaultStats,
  duration = 1800,
}: StatsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState<string[]>(
    stats.map(() => "0")
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const parsed = stats.map((s) => parseStatValue(s.value));
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            setDisplayValues(
              parsed.map(({ target, suffix }) => {
                const current = Math.round(eased * target);
                return `${current}${suffix}`;
              })
            );

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stats, duration, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-start gap-[16px]"
    >
      <div className="w-full max-w-[601px] flex justify-start items-center gap-[8px]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex-1 self-stretch p-[32px] inline-flex flex-col justify-center items-center gap-[8px]"
          >
            <span className="text-[color:var(--color-black,#000)] text-[40px] font-[550] leading-[48px] font-sans tabular-nums">
              {displayValues[i]}
            </span>
            <span className="text-[color:var(--color-neutral-darker,#25231E)] text-[16px] font-normal leading-[24px] font-sans">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
