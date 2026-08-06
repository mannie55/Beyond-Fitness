"use client";

import Image from "next/image";
import { useState } from "react";

interface FeatureItemProps {
  title: string;
  description: string;
  initialOpen?: boolean;
  className?: string;
}

export default function FeatureItem({ title, description, initialOpen = false, className = "" }: FeatureItemProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div 
      className={`group w-full md:w-[var(--component-feature-width,16.5625rem)] flex flex-col justify-start items-start p-[var(--component-feature-padding,0.5rem)] rounded-[4px] transition-all duration-300 bg-transparent hover:bg-[var(--color-dandelion-lighter,#FEF6DF)] cursor-pointer ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      
      {/* Header row: title + arrow */}
      <div className="self-stretch border-b-[0.5px] border-[var(--color-neutral,#868582)] pb-3 flex justify-between items-start gap-4">
        <span className="text-[#171717] text-[length:var(--component-feature-title-size,0.875rem)] font-[550] leading-[1.3] font-sans">
          {title}
        </span>
        {/* Arrow icon */}
        <div className={`relative w-[18px] h-[18px] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:rotate-45'}`}>
          <Image 
            src="/icons/arrow-right.svg" 
            alt="Expand feature" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* Expandable description content - Dynamic height with CSS Grid */}
      <div 
        className={`grid transition-all duration-300 ease-in-out w-full ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-[var(--component-feature-gap,0.75rem)]" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[var(--color-neutral,#868582)] text-[length:var(--component-feature-desc-size,0.875rem)] font-normal leading-[1.5] font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
