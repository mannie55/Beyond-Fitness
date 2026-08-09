"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function MembershipCard() {
  const [selectedPlan, setSelectedPlan] = useState<"8x" | "12x" | "20x" | "24x">("8x");

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
    "20x": {
      price: "₦900,000",
      discount: "-40%",
      details: "20 classes/month | billed quarterly | ₦15,000/class",
      features: [
        "3 guest passes/month",
        "15% off merchandise",
        "Monthly 1-on-1 coach session",
        "VIP Beyond event passes",
        "Unlimited swimming & recovery lounge",
      ],
    },
    "24x": {
      price: "₦1,008,000",
      discount: "-44%",
      details: "24 classes/month | billed quarterly | ₦14,000/class",
      features: [
        "4 guest passes/month",
        "20% off merchandise",
        "Bi-weekly coach performance review",
        "VIP Beyond event passes",
        "Full studio & recovery lounge access",
      ],
    },
  };

  const current = plans[selectedPlan];

  return (
    <div className="relative w-full flex flex-col justify-between items-stretch p-5 sm:p-6 md:p-8 pt-7 sm:pt-8 md:pt-10 gap-5 sm:gap-6 md:gap-8 bg-white rounded-none shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] border-2 border-[var(--color-dandelion)] font-sans h-full transition-all hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.09)]">
      
      {/* MOST POPULAR Floating Badge */}
      <div className="absolute top-[-0.85rem] left-1/2 -translate-x-1/2 flex justify-center items-center px-3.5 py-0.5 sm:px-4 sm:py-1 bg-[var(--color-dandelion)] rounded-full shadow-sm z-10">
        <span className="text-[#655526] text-[0.65rem] sm:text-xs font-bold tracking-wider uppercase">
          MOST POPULAR
        </span>
      </div>

      {/* Top Details */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        
        {/* Header Container */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl sm:text-[length:var(--text-heading-4)] font-bold tracking-tight text-[#0D0B05]">
            MEMBERSHIP
          </h3>
          <p className="text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
            Stay consistent with coached classes and community support.
          </p>
        </div>

        {/* Plan Selectors (8x, 12x, 20x, 24x) */}
        <div className="flex flex-row items-center gap-1 p-1 bg-black/5 rounded-lg w-full">
          {(["8x", "12x", "20x", "24x"] as const).map((plan) => (
            <button
              key={plan}
              type="button"
              onClick={() => setSelectedPlan(plan)}
              className={`flex-1 py-1.5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm transition-all text-center ${
                selectedPlan === plan
                  ? "bg-black text-white shadow-sm"
                  : "text-black/60 hover:text-black"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Price Container */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-[1.875rem] sm:text-[2.25rem] md:text-[length:var(--text-heading-2)] font-bold leading-[1.1] tracking-tight text-[#0D0B05]">
              {current.price}
            </span>
            <div className="flex items-center px-2 py-0.5 bg-[var(--color-dandelion)] rounded-full">
              <span className="text-[#655526] text-[0.65rem] sm:text-xs font-bold">
                {current.discount}
              </span>
            </div>
          </div>
          <span className="text-xs sm:text-[length:var(--text-text-small)] font-normal text-[var(--color-neutral-dark,#555450)]">
            {current.details}
          </span>
        </div>

        {/* Action Button */}
        <Button variant="secondary" theme="light" width="w-full">
          BECOME A MEMBER
        </Button>

        <hr className="w-full border-t border-black/10 my-0" />

        {/* Checklist */}
        <div className="flex flex-col gap-2.5 sm:gap-3.5 py-1">
          {current.features.map((feature, idx) => (
            <div key={idx} className="flex flex-row items-center gap-2.5 sm:gap-3">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                <Image src="/icons/check-icon.svg" alt="Check" fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-[length:var(--text-text-medium)] font-normal text-[#0D0B05]/75">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
