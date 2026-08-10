"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function MembershipCard() {
  const [selectedPlan, setSelectedPlan] = useState<"8x" | "12x" | "UNLIMITED">("8x");

  const plans = {
    "8x": {
      price: "₦408,000",
      discount: "-32%",
      details: "8 classes/month | billed quarterly | ₦17,000/class",
      features: [
        "1 guest pass/month",
        "10% off merchandise",
        "Quarterly coach consult",
        "Special pricing & access to Beyond events",
        "Access to swimming sessions",
      ],
    },
    "12x": {
      price: "₦576,000",
      discount: "-36%",
      details: "12 classes/month | billed quarterly | ₦16,000/class",
      features: [
        "2 guest passes/month",
        "15% off merchandise",
        "Monthly coach consult & body scan",
        "Priority access to Beyond events",
        "Access to swimming sessions",
      ],
    },
    "UNLIMITED": {
      price: "₦1,008,000",
      discount: "-44%",
      details: "Unlimited classes | billed quarterly",
      features: [
        "4 guest passes/month",
        "20% off merchandise",
        "Monthly 1-on-1 coach session & scan",
        "VIP Beyond event passes",
        "Unlimited swimming & recovery lounge",
      ],
    },
  };

  const current = plans[selectedPlan];

  return (
    <div className="relative w-full flex flex-col justify-between items-stretch p-5 sm:p-6 md:p-8 pt-7 sm:pt-8 md:pt-10 gap-5 sm:gap-6 md:gap-8 bg-[#0D0B05] rounded-none shadow-[0px_8px_30px_0px_rgba(0,0,0,0.4)] font-sans h-full transition-all hover:shadow-[0px_12px_40px_0px_rgba(0,0,0,0.5)]">
      
      {/* MOST POPULAR Floating Badge (Brutalist) */}
      <div className="absolute top-[-0.85rem] left-1/2 -translate-x-1/2 flex justify-center items-center px-3.5 py-0.5 sm:px-4 sm:py-1 bg-[var(--color-dandelion)] border border-[#0D0B05] z-10">
        <span className="text-[#0D0B05] text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase">
          MOST POPULAR
        </span>
      </div>

      {/* Top Details */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        
        {/* Header Container */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl sm:text-[length:var(--text-heading-4)] font-bold tracking-tight text-white">
            MEMBERSHIP
          </h3>
          <p className="text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] text-white/70">
            Stay consistent with coached classes and community support.
          </p>
        </div>

        {/* Plan Selectors (Brutalist Editorial - Dark Mode) */}
        <div className="flex flex-row items-center w-full border border-white/20">
          {(["8x", "12x", "UNLIMITED"] as const).map((plan, index) => (
            <button
              key={plan}
              type="button"
              onClick={() => setSelectedPlan(plan)}
              className={`flex-1 py-1.5 sm:py-2 font-bold text-xs sm:text-sm transition-all text-center uppercase ${
                index !== 2 ? "border-r border-white/20" : ""
              } ${
                selectedPlan === plan
                  ? "bg-[var(--color-dandelion)] text-[#0D0B05]"
                  : "bg-transparent text-white/60 hover:bg-white/5"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Price Container */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[clamp(1.875rem,5vw,2.75rem)] xl:text-[3.125rem] font-bold leading-[1.1] tracking-tight text-[var(--color-dandelion)] whitespace-nowrap">
              {current.price}
            </span>
            <div className="flex items-center px-2 py-0.5 bg-[var(--color-dandelion)] border border-[#0D0B05]">
              <span className="text-[#0D0B05] text-[0.65rem] sm:text-xs font-bold">
                {current.discount}
              </span>
            </div>
          </div>
          <span className="text-xs sm:text-[length:var(--text-text-small)] font-normal text-white/60">
            {current.details}
          </span>
        </div>

        {/* Action Button */}
        <Button variant="primary" theme="dark" width="w-full">
          BECOME A MEMBER
        </Button>

        <hr className="w-full border-t border-white/10 my-0" />

        {/* Checklist */}
        <div className="flex flex-col gap-2.5 sm:gap-3.5 py-1">
          {current.features.map((feature, idx) => (
            <div key={idx} className="flex flex-row items-center gap-2.5 sm:gap-3">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                <Image src="/icons/check-icon-white.svg" alt="Check" fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-[length:var(--text-text-medium)] font-normal text-white/80">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
