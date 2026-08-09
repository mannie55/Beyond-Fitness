"use client";

import Image from "next/image";
import Button from "./Button";

export default function AnnualCard() {
  const features = [
    "Everything in Membership",
    "Unlimited classes no cap",
    "2 non-consecutive freeze months",
    "Free Beyond merchandise welcome pack",
    "Priority booking for special guest coaches",
  ];

  return (
    <div className="relative w-full flex flex-col justify-between items-stretch p-5 sm:p-6 md:p-8 gap-5 sm:gap-6 md:gap-8 bg-[#1A1815] border border-[var(--color-dandelion-dark,#CBAA4C)]/40 rounded-none shadow-[0px_8px_30px_0px_rgba(0,0,0,0.35)] font-sans h-full transition-all hover:border-[var(--color-dandelion)]">
      
      {/* Top Details */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        
        {/* Header Container with Badge */}
        <div className="flex flex-row items-start justify-between gap-3 w-full">
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-xl sm:text-[length:var(--text-heading-4)] font-bold tracking-tight text-[#FEFAEF]">
              ANNUAL
            </h3>
            <p className="text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] text-[#FEFAEF]/70">
              Our best value for members who make fitness their lifestyle.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[var(--color-dandelion)] rounded-full">
              <span className="text-[#655526] text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider">
                BEST VALUE
              </span>
            </div>
          </div>
        </div>

        {/* Price Container */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[1.875rem] sm:text-[2.25rem] md:text-[length:var(--text-heading-2)] font-bold leading-[1.1] tracking-tight text-[#FEFAEF]">
              ₦3,360,000
            </span>
            <div className="flex items-center px-2 py-0.5 bg-[var(--color-dandelion)] rounded-full">
              <span className="text-[#655526] text-[0.65rem] sm:text-xs font-bold">
                -63%
              </span>
            </div>
          </div>
          <span className="text-xs sm:text-[length:var(--text-text-small)] font-normal text-white/70">
            unlimited ₦9,333/class billed annually
          </span>
        </div>

        {/* Action Button */}
        <Button variant="special" theme="dark" width="w-full">
          JOIN ANNUAL
        </Button>

        <hr className="w-full border-t border-white/15 my-0" />

        {/* Checklist */}
        <div className="flex flex-col gap-2.5 sm:gap-3.5 py-1">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-row items-center gap-2.5 sm:gap-3">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                <Image src="/icons/check-icon-white.svg" alt="Check" fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-[length:var(--text-text-medium)] font-normal text-white/90">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
