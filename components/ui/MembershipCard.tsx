import Image from "next/image";
import Button from "./Button";

export default function MembershipCard() {
  return (
    <div className="relative w-full md:max-w-[26rem] md:mx-auto flex flex-col justify-start items-stretch px-[var(--component-pricing-padding)] pb-[var(--component-pricing-padding)] pt-[calc(var(--component-pricing-padding)+0.5rem)] gap-[var(--component-pricing-gap)] bg-white rounded-[0.5rem] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] font-sans">
      
      {/* MOST POPULAR Badge */}
      <div className="absolute top-[-0.85rem] left-1/2 -translate-x-1/2 flex justify-center items-center px-[0.75rem] py-[0.1875rem] bg-[#FED55F] rounded-full">
        <span className="text-[#655526] text-[length:var(--component-pricing-feature-size)] font-semibold leading-[1.3125rem]">
          MOST POPULAR
        </span>
      </div>

      {/* Header Container */}
      <div className="flex flex-col items-stretch gap-[0.25rem]">
        <h2 className="text-[length:var(--component-pricing-title-size)] font-[550] leading-[var(--component-pricing-title-line-height)] tracking-[-0.01em] text-black">
          MEMBERSHIP
        </h2>
        <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
          Stay consistent with coached classes and community support.
        </p>
      </div>

      {/* Toggle Buttons (8x, 12x, 20x, 24x) */}
      <div className="flex flex-row items-stretch gap-[0.75rem] w-full">
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-black rounded-[0.25rem] cursor-pointer">
          <span className="text-white text-[length:var(--component-pricing-subtitle-size)] font-[550] leading-[1.5]">
            8x
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-[#0D0B05]/10 rounded-[0.25rem] cursor-pointer">
          <span className="text-[#0D0B05]/60 text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5]">
            12x
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-[#0D0B05]/10 rounded-[0.25rem] cursor-pointer">
          <span className="text-[#0D0B05]/60 text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5]">
            20x
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-[#0D0B05]/10 rounded-[0.25rem] cursor-pointer">
          <span className="text-[#0D0B05]/60 text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5]">
            24x
          </span>
        </div>
      </div>

      {/* Price Container */}
      <div className="flex flex-col items-stretch gap-[0.25rem]">
        <div className="flex flex-row items-start gap-[0.5rem]">
          <h3 className="text-[length:var(--component-pricing-price-size)] font-bold leading-[1.1] tracking-[-0.01em] text-black">
            ₦408,000
          </h3>
          <div className="flex justify-center items-center px-[0.75rem] py-[0.1875rem] bg-[#FED55F] rounded-full relative -top-1">
            <span className="text-[#655526] text-[length:var(--component-pricing-feature-size)] font-semibold leading-[1.3125rem]">
              -32%
            </span>
          </div>
        </div>
        <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
          8 classes/month | billed quarterly | ₦17,000/class
        </p>
      </div>

      {/* Button Component */}
      <Button variant="secondary" theme="light" width="w-full">
        BECOME A MEMBER
      </Button>

      {/* Divider */}
      <hr className="w-full border-t border-black/10 m-0" />

      {/* Checklist */}
      <div className="flex flex-col gap-[1rem] py-[0.5rem]">
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            1 guest pass/month
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            10% off merchandise
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            Quarterly coach consult
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            Special pricing & access to Beyond events
          </span>
        </div>
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[1rem] font-normal leading-[1.5rem] text-[#0D0B05]/60">
            Access to swimming sessions
          </span>
        </div>
      </div>

    </div>
  );
}
