import Image from "next/image";
import Button from "./Button";

export default function FirstTimersCard() {
  return (
    <div className="w-full md:max-w-[26rem] md:mx-auto flex flex-col justify-start items-stretch p-[var(--component-pricing-padding)] gap-[var(--component-pricing-gap)] bg-white rounded-[0.5rem] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] font-sans">
      
      {/* Header Container */}
      <div className="flex flex-col items-stretch gap-[0.25rem]">
        <h2 className="text-[length:var(--component-pricing-title-size)] font-[550] leading-[var(--component-pricing-title-line-height)] tracking-[-0.01em] text-black">
          FIRST TIMERS
        </h2>
        <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
          The perfect introduction to the community
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-row items-stretch gap-[0.75rem] w-full">
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-black rounded-[0.25rem] cursor-pointer">
          <span className="text-white text-[length:var(--component-pricing-subtitle-size)] font-[550] leading-[1.5]">
            First Timer
          </span>
        </div>
        <div className="flex-1 flex justify-center items-center h-[2.3125rem] bg-[#0D0B05]/10 rounded-[0.25rem] cursor-pointer">
          <span className="text-[#0D0B05]/60 text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5]">
            Drop-In
          </span>
        </div>
      </div>

      {/* Price Container */}
      <div className="flex flex-col items-stretch gap-[0.25rem]">
        <h3 className="text-[length:var(--component-pricing-price-size)] font-bold leading-[var(--component-pricing-price-line-height)] tracking-[-0.01em] text-black">
          ₦40,000
        </h3>
        <p className="text-[length:var(--component-pricing-subtitle-size)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
          2 classes | ₦20,000/class | valid 2 weeks
        </p>
      </div>

      {/* Button Component */}
      <Button variant="secondary" theme="light" width="w-full">
        GET STARTED
      </Button>

      {/* Divider */}
      <hr className="w-full border-t border-black/10 m-0" />

      {/* Checklist */}
      <div className="flex flex-col gap-[1rem] py-[0.5rem]">
        {/* Item 1 */}
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            First-time visitors only
          </span>
        </div>
        {/* Item 2 */}
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            Full studio access
          </span>
        </div>
        {/* Item 3 */}
        <div className="flex flex-row items-start gap-[1rem]">
          <div className="relative w-[1.5rem] h-[1.5rem] flex-shrink-0">
            <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
          </div>
          <span className="text-[length:var(--component-pricing-feature-size)] font-normal leading-[1.5] text-[#0D0B05]/60">
            Upgrade: 2wk Unlimited, ₦80,000
          </span>
        </div>
      </div>

    </div>
  );
}
