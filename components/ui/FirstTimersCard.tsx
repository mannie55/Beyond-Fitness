"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function FirstTimersCard() {
  const [activeTab, setActiveTab] = useState<"firstTimer" | "dropIn">("firstTimer");

  const pricingData = {
    firstTimer: {
      price: "₦40,000",
      details: "2 classes | ₦20,000/class | valid 2 weeks",
      features: [
        "First-time visitors only",
        "Full studio access",
        "Upgrade: 2wk Unlimited, ₦80,000",
      ],
    },
    dropIn: {
      price: "₦25,000",
      details: "Single class pass | valid 1 month",
      features: [
        "Single class session",
        "Full studio & shower access",
        "All class formats included",
      ],
    },
  };

  const current = pricingData[activeTab];

  return (
    <div className="w-full flex flex-col justify-between items-stretch p-5 sm:p-6 md:p-8 gap-5 sm:gap-6 md:gap-8 bg-white rounded-none shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)] border border-black/5 font-sans h-full transition-all hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.09)]">
      
      {/* Top Details */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        
        {/* Header Container */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-xl sm:text-[length:var(--text-heading-4)] font-bold tracking-tight text-[#0D0B05]">
            FIRST TIMERS
          </h3>
          <p className="text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] text-[var(--color-neutral-dark,#555450)]">
            The perfect introduction to the community
          </p>
        </div>

        {/* Toggle Buttons (Brutalist Editorial) */}
        <div className="flex flex-row items-center w-full border border-black">
          <button
            type="button"
            onClick={() => setActiveTab("firstTimer")}
            className={`flex-1 py-1.5 sm:py-2 font-bold text-xs sm:text-sm transition-all text-center uppercase tracking-wider ${
              activeTab === "firstTimer"
                ? "bg-black text-white"
                : "bg-transparent text-black hover:bg-black/5"
            }`}
          >
            First Timer
          </button>
          <div className="w-[0.0625rem] h-full bg-black self-stretch" />
          <button
            type="button"
            onClick={() => setActiveTab("dropIn")}
            className={`flex-1 py-1.5 sm:py-2 font-bold text-xs sm:text-sm transition-all text-center uppercase tracking-wider ${
              activeTab === "dropIn"
                ? "bg-black text-white"
                : "bg-transparent text-black hover:bg-black/5"
            }`}
          >
            Drop-In
          </button>
        </div>

        {/* Price Container */}
        <div className="flex flex-col items-start gap-1">
          <span className="text-[clamp(1.875rem,5vw,2.75rem)] xl:text-[3.125rem] font-bold leading-[1.1] tracking-tight text-[#0D0B05] whitespace-nowrap">
            {current.price}
          </span>
          <span className="text-xs sm:text-[length:var(--text-text-small)] font-normal text-[var(--color-neutral-dark,#555450)]">
            {current.details}
          </span>
        </div>

        {/* Action Button */}
        <Button variant="secondary" theme="light" width="w-full">
          GET STARTED
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
