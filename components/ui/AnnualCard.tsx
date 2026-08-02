import Image from "next/image";
import Button from "./Button";

export default function AnnualCard() {
  return (
    <div className="relative w-full md:max-w-[26rem] md:mx-auto flex flex-col justify-start items-stretch p-[var(--component-pricing-padding)] gap-[var(--component-pricing-gap)] bg-[#25231E] border border-[#FEF6DF] rounded-[0.5rem] font-sans">
      
      {/* Header Container */}
      <div className="flex flex-row items-start justify-between gap-[0.75rem] w-full">
        <div className="flex flex-col items-stretch gap-[0.25rem] flex-1">
          <h2 className="text-[length:var(--component-pricing-title-size)] font-[550] leading-[var(--component-pricing-title-line-height)] tracking-[-0.01em] text-[#FEFAEF]">
            ANNUAL
          </h2>
          <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-[#FEFAEF]/70 max-w-[14.25rem]">
            Our best value for members who know this is part of their lifestyle.
          </p>
        </div>
        
        {/* BEST VALUE Badge */}
        <div className="pt-[0.25rem] flex-shrink-0">
          <div className="flex justify-center items-center px-[0.75rem] py-[0.1875rem] bg-[#FED55F] rounded-full">
            <span className="text-[#655526] text-[length:var(--component-pricing-feature-size)] font-semibold leading-[1.3125rem]">
              BEST VALUE
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-white/20 m-0" />

      {/* Price Container */}
      <div className="flex flex-col items-stretch gap-[0.25rem]">
        <div className="flex flex-row items-start gap-[0.5rem]">
          <h3 className="text-[length:var(--component-pricing-price-size)] font-bold leading-[1.1] tracking-[-0.01em] text-[#FEFAEF]">
            ₦3,360,000
          </h3>
          <div className="flex justify-center items-center px-[0.75rem] py-[0.1875rem] bg-[#FED55F] rounded-full relative -top-1">
            <span className="text-[#655526] text-[length:var(--component-pricing-feature-size)] font-semibold leading-[1.3125rem]">
              -63%
            </span>
          </div>
        </div>
        <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-white">
          unlimited ₦9,333/class billed annually
        </p>
      </div>

      {/* Button Component */}
      <Button variant="special" theme="dark" width="w-full">
        JOIN ANNUAL
      </Button>

      {/* Divider */}
      <hr className="w-full border-t border-white/20 m-0" />

      {/* Checklist */}
      <div className="flex flex-col gap-[1rem] py-[0.5rem]">
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon-white.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-white">
            Everything in Membership
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon-white.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-white">
            Unlimited classes no cap
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon-white.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-white">
            2 non-consecutive freeze months
          </span>
        </div>
      </div>

    </div>
  );
}
