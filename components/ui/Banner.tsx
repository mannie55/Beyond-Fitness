"use client";

interface BannerProps {
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
}

export default function Banner({ speed = "medium", pauseOnHover = true }: BannerProps) {
  // 12 repeated segments to ensure width spans screen on desktop
  const segments = Array(12).fill({ text1: "BEYOND", text2: "GO BEYOND" });

  const speedClasses = {
    slow: "animate-[marquee_45s_linear_infinite]",
    medium: "animate-[marquee_30s_linear_infinite]",
    fast: "animate-[marquee_15s_linear_infinite]",
  };

  return (
    <div className="w-full overflow-hidden bg-black py-[3px] flex items-center select-none border-y border-white/5">
      <div className={`flex whitespace-nowrap gap-[8px] ${speedClasses[speed]} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}>
        
        {/* First marquee list copy */}
        <div className="flex items-center gap-[8px] flex-shrink-0">
          {segments.map((item, idx) => (
            <div key={`first-${idx}`} className="flex items-center gap-[4px] flex-shrink-0 font-sans">
              <span className="text-[#FFFEFE] text-[12px] font-bold leading-[18px]">
                {item.text1}
              </span>
              <div className="w-[5px] h-[5px] bg-white rounded-full flex-shrink-0" />
              <span className="text-[#FFFEFE] text-[12px] font-bold leading-[18px]">
                {item.text2}
              </span>
            </div>
          ))}
        </div>

        {/* Second marquee list copy for seamless infinite loop */}
        <div className="flex items-center gap-[8px] flex-shrink-0" aria-hidden="true">
          {segments.map((item, idx) => (
            <div key={`second-${idx}`} className="flex items-center gap-[4px] flex-shrink-0 font-sans">
              <span className="text-[#FFFEFE] text-[12px] font-bold leading-[18px]">
                {item.text1}
              </span>
              <div className="w-[5px] h-[5px] bg-white rounded-full flex-shrink-0" />
              <span className="text-[#FFFEFE] text-[12px] font-bold leading-[18px]">
                {item.text2}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
