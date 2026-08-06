import Button from "@/components/ui/Button";

export default function CtaContainer() {
  return (
    <div className="flex flex-col items-stretch gap-[40px] md:gap-[80px] w-full">
      
      {/* Content wrapper */}
      <div className="flex flex-col items-stretch gap-[24px] md:gap-[32px] w-full">
        
        {/* Text Group */}
        <div className="flex flex-col items-stretch gap-[16px] md:gap-[24px]">
          
          {/* Heading */}
          <div className="flex flex-col items-start">
            <span className="text-[length:var(--text-heading-3)] md:text-[clamp(4rem,6vw,5.5rem)] font-normal md:font-bold leading-[1.2em] tracking-[-0.01em] text-white w-full max-w-[768px]">
              Not just an 
            </span>
            <span className="text-[length:var(--text-heading-3)] md:text-[clamp(4rem,6vw,5.5rem)] font-normal md:font-bold leading-[1.2em] tracking-[-0.01em] text-[#FED55F] w-full max-w-[768px]">
              experience.
            </span>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-[10px]">
              <span className="text-[length:var(--text-heading-3)] md:text-[clamp(4rem,6vw,5.5rem)] font-normal md:font-bold leading-[1.2em] tracking-[-0.01em] text-white">
                a return to  
              </span>
              <div className="flex flex-col justify-center -space-y-[0.35rem] md:-space-y-[9px]">
                <span className="text-[length:var(--text-heading-3)] md:text-[clamp(4rem,6vw,5.5rem)] font-normal md:font-bold leading-[1.2em] tracking-[-0.01em] text-white whitespace-nowrap">
                  who you are
                </span>
                <img 
                  src="/icons/underline-yellow.svg" 
                  alt="underline" 
                  className="w-[12rem] md:w-[clamp(24rem,30vw,28rem)] h-auto md:h-[6.93px] object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Subtext */}
          <p className="text-[length:var(--text-text-medium)] md:text-[1rem] font-[550] leading-[1.5em] text-white w-full max-w-[340px] pt-4 md:pt-0">
            Come see what Beyond feels like. Your first session is on us to try.
          </p>
          
        </div>

        {/* Actions */}
        <div className="flex flex-row gap-[16px] w-full md:max-w-[356px]">
          <Button variant="special" theme="dark" width="w-full">
            BOOK NOW
          </Button>
        </div>

      </div>

    </div>
  );
}
