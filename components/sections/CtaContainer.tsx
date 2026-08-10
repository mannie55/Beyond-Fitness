import Button from "@/components/ui/Button";

export default function CtaContainer() {
  return (
    <div className="w-full max-w-[48rem] flex flex-col items-start gap-6 sm:gap-8">
      {/* Content Group (Figma: Gap 24px Desktop, 20px Mobile) */}
      <div className="flex flex-col items-start gap-5 sm:gap-6 w-full">
        {/* Editorial Headline (Figma: 50px Desktop, 700 bold, line-height 1.2, -0.01em letter-spacing) */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[3.125rem] font-bold leading-[1.2] tracking-[-0.01em] uppercase">
          <span>NOT JUST AN EXPERIENCE.</span>
          <br />
          <span className="inline-flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
            <span>A RETURN TO</span>
            <span>WHO YOU ARE</span>
          </span>
        </h2>

        {/* Value Proposition Subtext (Figma: 18px Desktop / 14px Mobile, line-height 1.5) */}
        <p className="text-white/90 text-sm sm:text-base md:text-[1.125rem] font-normal leading-[1.5] max-w-[34rem]">
          Come see what Beyond feels like. Your first session is complimentary — no commitment, no contract.
        </p>
      </div>

      {/* Actions (Figma: Gap 16px, Flex-row on Desktop, Stacked on Mobile) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
        <Button 
          variant="primary" 
          theme="dark" 
          href="/pricing/first-timers" 
          className="w-full sm:w-auto"
        >
          BOOK YOUR FIRST CLASS
        </Button>
      </div>
    </div>
  );
}
