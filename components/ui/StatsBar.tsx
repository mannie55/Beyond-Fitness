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
  theme?: "default" | "dandelion" | "dark";
  className?: string;
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
  theme = "default",
  className = "",
}: StatsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [displayValues, setDisplayValues] = useState<string[]>(
    stats.map(() => "0")
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node || hasAnimated) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasAnimated(true);
      setDisplayValues(stats.map((s) => s.value));
      return;
    }

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
      { threshold: 0, rootMargin: "150px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stats, duration, hasAnimated]);

  const valueColorClass =
    theme === "dandelion"
      ? "text-[var(--color-dandelion-darkest)]"
      : theme === "dark"
      ? "text-[#FED55F]"
      : "text-[color:var(--color-black,#000)]";

  const labelColorClass =
    theme === "dandelion"
      ? "text-[var(--color-dandelion-darker)] opacity-80 font-medium"
      : theme === "dark"
      ? "text-white/60 font-medium"
      : "text-[color:var(--color-neutral-darker,#25231E)]";

  const dividerClass =
    theme === "dandelion"
      ? "border-r border-[var(--color-dandelion-dark)]/25 last:border-r-0"
      : theme === "dark"
      ? "border-r border-white/10 last:border-r-0"
      : "";

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center items-start ${className}`}
    >
      <div className="w-full max-w-[60rem] flex flex-row justify-between md:justify-center items-start md:items-center gap-1 sm:gap-2 md:gap-3">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex-1 w-auto py-1 sm:py-[0.5rem] md:py-[var(--component-stats-padding-y)] px-1 sm:px-[0.5rem] md:px-[var(--component-stats-padding-x)] flex flex-col justify-center items-center gap-0.5 sm:gap-1 md:gap-[0.35rem] ${dividerClass}`}
          >
            <span className={`${valueColorClass} text-[1.2rem] sm:text-[1.5rem] md:text-[length:var(--component-stats-value-size)] font-[700] leading-[1.2] md:leading-[var(--component-stats-value-line-height)] font-sans tabular-nums whitespace-nowrap`}>
              {displayValues[i]}
            </span>
            <span className={`${labelColorClass} text-[0.65rem] sm:text-[0.75rem] md:text-[length:var(--component-stats-label-size)] leading-[1.2] md:leading-[1.5] font-sans text-center max-w-[8.75rem]`}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
