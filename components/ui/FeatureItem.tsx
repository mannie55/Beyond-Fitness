"use client";

import { useState } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-[265px] flex justify-start items-start gap-[16px] transition-all duration-300 ${
        isOpen ? "p-[8px] bg-[#FEF6DF]" : "p-0 bg-transparent"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex-1 flex flex-col justify-start items-start gap-[4px]">
        {/* Header row: title + arrow */}
        <div className="self-stretch h-[22px] border-b border-[color:var(--color-neutral,#868582)] flex justify-between items-start">
          <span className="text-[#171717] text-[14px] font-[550] leading-[21px] font-sans">
            {title}
          </span>
          {/* Arrow icon — points right by default, rotates 45° on hover */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={`flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <path
              d="M6 9H12M12 9L9 6M12 9L9 12"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Expandable description content */}
        <div
          className={`self-stretch overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[200px] opacity-100 pb-[1px]" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-[color:var(--color-neutral,#868582)] text-[14px] font-normal leading-[21px] font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
