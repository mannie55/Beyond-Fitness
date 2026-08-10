"use client";

import FirstTimersCard from "@/components/ui/FirstTimersCard";
import MembershipCard from "@/components/ui/MembershipCard";
import AnnualCard from "@/components/ui/AnnualCard";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
}

export default function PricingSection({
  title = "INVEST IN YOUR HIGHEST SELF",
  subtitle = "Flexible passes for travelers, unlimited access for the devoted. Choose how you step into the studio.",
}: PricingSectionProps) {
  return (
    <section 
      id="pricing" 
      className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-start px-padding-global py-10 sm:py-14 md:py-24 overflow-hidden relative font-sans"
    >
      <div className="w-full max-w-[100rem] flex flex-col items-start gap-6 sm:gap-8 md:gap-[3.5rem]">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-[1.5rem] max-w-[48rem]">
          <TextReveal 
            as="h2"
            text={title}
            className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight"
          />
          <div className="w-[3rem] h-[4px] bg-[var(--color-dandelion)] rounded-full" />
          <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-[1.5]">
            {subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-1 min-w-[18rem] basis-[24rem] xl:basis-[20rem] max-w-[28rem] xl:max-w-none h-auto">
            <FirstTimersCard />
          </div>
          <div className="flex flex-1 min-w-[18rem] basis-[24rem] xl:basis-[20rem] max-w-[28rem] xl:max-w-none h-auto">
            <MembershipCard />
          </div>
          <div className="flex flex-1 min-w-[18rem] basis-[24rem] xl:basis-[20rem] max-w-[28rem] xl:max-w-none h-auto">
            <AnnualCard />
          </div>
        </div>

        {/* Bottom Flexible Membership Banner */}
        <div className="w-full bg-[#0D0B05] rounded-none p-5 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6 mt-2 sm:mt-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              Looking for bespoke corporate wellness or private sessions?
            </h3>
            <p className="text-[var(--color-neutral-lighter,#DADAD9)] text-sm sm:text-base md:text-lg font-normal">
              Elevate your team with customized corporate partnerships and private studio takeovers.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Button variant="primary" theme="dark" href="/pricing" className="w-full md:w-auto">
              VIEW ALL MEMBERSHIPS
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
