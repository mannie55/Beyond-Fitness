interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "15K+", label: "Classes delivered" },
  { value: "500+", label: "Active members" },
  { value: "5+", label: "Years running" },
];

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  return (
    <div className="w-full flex justify-center items-start gap-[16px]">
      <div className="w-full max-w-[601px] flex justify-start items-center gap-[8px]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 self-stretch p-[32px] inline-flex flex-col justify-center items-center gap-[8px]"
          >
            <span className="text-[color:var(--color-black,#000)] text-[40px] font-[550] leading-[48px] font-sans">
              {stat.value}
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
