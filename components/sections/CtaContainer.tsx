import Button from "@/components/ui/Button";

function NaturalUnderline() {
  return (
    <svg
      viewBox="0 0 300 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[4px] md:h-[6px] text-[var(--color-dandelion)] -mt-1 sm:-mt-2 overflow-visible select-none pointer-events-none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 2 3 L 298 3"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CtaContainer() {
  return (
    <div className="w-full max-w-[48rem] flex flex-col items-start gap-6 sm:gap-8">
      {/* Content Group (Figma: Gap 24px Desktop, 20px Mobile) */}
      <div className="flex flex-col items-start gap-5 sm:gap-6 w-full">
        {/* Editorial Headline (Figma: 50px Desktop, 700 bold, line-height 1.2, -0.01em letter-spacing) */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold leading-[1.2] tracking-[-0.01em] uppercase">
          <span>NOT JUST AN EXPERIENCE.</span>
          <br />
          <span className="inline-flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
            <span>A RETURN TO</span>
            <span className="relative inline-flex flex-col justify-center text-white">
              <span className="whitespace-nowrap relative z-10">WHO YOU ARE</span>
              <NaturalUnderline />
            </span>
          </span>
        </h2>

        {/* Value Proposition Subtext (Figma: 18px Desktop / 14px Mobile, line-height 1.5) */}
        <p className="text-white/90 text-sm sm:text-base md:text-[18px] font-normal leading-[1.5] max-w-[34rem]">
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

        <Button
          variant="secondary"
          theme="dark"
          href="/classes"
          className="w-full sm:w-auto"
        >
          EXPLORE SCHEDULE
        </Button>
      </div>
    </div>
  );
}
