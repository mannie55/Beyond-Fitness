"use client";

interface BannerProps {
  speed?: "slow" | "medium" | "fast";
  pauseOnHover?: boolean;
}

export default function Banner({ speed = "medium", pauseOnHover = true }: BannerProps) {
  // 40 repeated segments to ensure width spans screen on all viewports (including 4K/ultra-wide)
  const segments = Array(40).fill({ text1: "BEYOND", text2: "GO BEYOND" });

  const speedClasses = {
    slow: "animate-[marquee_90s_linear_infinite]",
    medium: "animate-[marquee_60s_linear_infinite]",
    fast: "animate-[marquee_30s_linear_infinite]",
  };

  return (
    <div className="w-full overflow-hidden bg-black py-[3px] flex items-center select-none border-y border-white/5">
      <div className={`flex whitespace-nowrap ${speedClasses[speed]} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}>
        
        {/* First marquee list copy */}
        <div className="flex items-center flex-shrink-0">
          {segments.map((item, idx) => (
            <div key={`first-${idx}`} className="flex items-center gap-[4px] mr-[8px] flex-shrink-0 font-sans">
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
        <div className="flex items-center flex-shrink-0" aria-hidden="true">
          {segments.map((item, idx) => (
            <div key={`second-${idx}`} className="flex items-center gap-[4px] mr-[8px] flex-shrink-0 font-sans">
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
