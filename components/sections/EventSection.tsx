"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

type EventTab = "on-tour" | "pink-walk";

interface EventData {
  id: EventTab;
  tabLabel: string;
  badgeLabel: string;
  badgeLogo: string;
  accentColor: string;
  activeTabColor: string;
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const EVENTS: Record<EventTab, EventData> = {
  "on-tour": {
    id: "on-tour",
    tabLabel: "ON TOUR",
    badgeLabel: "BEYOND ON TOUR",
    badgeLogo: "/icons/beyond_fitness_logo.svg",
    accentColor: "bg-[var(--color-dandelion)]",
    activeTabColor: "border-[var(--color-dandelion-dark,#CBAA4C)] text-[var(--color-dandelion-dark,#CBAA4C)]",
    headline: "WELLNESS BEYOND FOUR WALLS",
    description:
      "Beyond On Tour takes the Beyond experience beyond the studio. From weekend hikes to wellness retreats and outdoor pop-ups, we create experiences that bring members together long after class ends.",
    buttonText: "REGISTER",
    buttonHref: "/community/on-tour",
    images: [
      { src: "/images/on-tour-wellness.jpg", alt: "Beyond On Tour Wellness Session" },
      { src: "/images/on-tour-ride.jpg", alt: "Beyond On Tour Ride & Cycling" },
      { src: "/images/on-tour-education.jpg", alt: "Beyond On Tour Community Education & Gathering" },
    ],
  },
  "pink-walk": {
    id: "pink-walk",
    tabLabel: "PINK WALK",
    badgeLabel: "BEYOND PINK WALK",
    badgeLogo: "/images/logos/beyond-pink-walk-logo.svg",
    accentColor: "bg-[#EE88B0]",
    activeTabColor: "border-[#D591AD] text-[#D591AD]",
    headline: "WE WALK SO NO ONE WALKS ALONE.",
    description:
      "The Pink Walk is more than an event. It's our community coming together to support breast cancer awareness, honor survivors, and stand beside those still fighting.",
    buttonText: "JOIN THE PINK WALK",
    buttonHref: "/community/pink-walk",
    images: [
      { src: "/images/pink-walk-movement.jpg", alt: "Beyond Pink Walk Movement" },
      { src: "/images/pink-walk-group_photo.jpg", alt: "Beyond Pink Walk Community Group" },
      { src: "/images/pink-walk-education.jpg", alt: "Beyond Pink Walk Education & Awareness" },
    ],
  },
};

export default function EventSection() {
  const [activeTab, setActiveTab] = useState<EventTab>("on-tour");
  const current = EVENTS[activeTab];

  return (
    <section 
      id="events" 
      className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-start px-padding-global py-10 sm:py-14 md:py-24 overflow-hidden relative font-sans"
    >
      <div className="w-full max-w-[100rem] flex flex-col items-center gap-6 sm:gap-10 md:gap-14">
        
        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 max-w-[48rem]">

          <h2 className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight">
            EVENTS THAT BRING US TOGETHER
          </h2>

          <div className="w-[3rem] h-[4px] bg-[var(--color-dandelion)] rounded-full" />

          <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-relaxed">
            From multi-city wellness tours to community initiatives, discover how we move together beyond our four walls.
          </p>
        </div>

        {/* Tab Switcher */}
        <div 
          role="tablist" 
          aria-label="Event categories" 
          className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 border-b border-[var(--color-dandelion-light,#FEE18F)] w-full max-w-[28rem] pb-0"
        >
          {(["on-tour", "pink-walk"] as const).map((tabKey) => {
            const isActive = activeTab === tabKey;
            const tabData = EVENTS[tabKey];
            return (
              <button
                key={tabKey}
                role="tab"
                id={`tab-${tabKey}`}
                aria-selected={isActive}
                aria-controls={`panel-${tabKey}`}
                onClick={() => setActiveTab(tabKey)}
                className={`py-2 sm:py-3 px-2 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-200 border-b-2 relative -mb-[1px] cursor-pointer ${
                  isActive
                    ? tabData.activeTabColor
                    : "border-transparent text-[#0D0B05]/60 hover:text-[#0D0B05]"
                }`}
              >
                {tabData.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center transition-opacity duration-300"
        >
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 sm:gap-6 md:gap-8">
            
            {/* Brand Pill / Eyebrow */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                {current.id === "on-tour" ? (
                  <svg
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#0D0B05]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.6661 14.3535C17.8723 14.4363 17.9781 14.5911 17.986 14.8127C17.8909 15.3467 17.8644 15.8807 17.9067 16.4174C18.0257 16.7084 18.1923 16.962 18.4118 17.1756C17.9332 17.504 17.7216 17.9632 17.7772 18.5559C17.7798 23.9839 17.7798 29.4144 17.7798 34.8424C17.7348 35.2909 18.2478 35.953 17.5815 36.1025C17.4466 35.5125 17.3832 34.9144 17.3884 34.3084C17.399 28.0768 17.3937 21.8479 17.3699 15.6164C17.3435 15.1625 17.4413 14.7407 17.6661 14.3535Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5816 36.102C18.2479 35.9524 17.7349 35.2903 17.7799 34.8418C17.7799 29.4138 17.7799 23.9833 17.7772 18.5553C17.7217 17.9626 17.9332 17.5034 18.4119 17.175C18.1924 16.9614 18.0258 16.7078 17.9068 16.4168C17.8645 15.8801 17.8909 15.3461 17.9861 14.8121C17.9782 14.5905 17.8724 14.4357 17.6662 14.3529C18.4198 13.4612 22.4602 14.1206 23.6739 13.9151C23.8378 13.9231 23.9674 13.8617 24.0679 13.7335C24.1445 10.9808 24.1736 8.22549 24.1498 5.46747C24.1869 5.20048 24.1075 4.98422 23.9171 4.81335C22.9494 4.93349 21.9948 5.12306 21.0482 5.37937C4.26785 10.2199 -1.85619 30.8529 9.89214 44.077C26.3181 61.9039 54.9763 47.0646 50.4309 23.4039C48.3869 13.5386 40.0893 5.76116 30.147 4.66917C28.3965 4.61845 28.3039 2.30097 30.2765 2.34102C44.997 3.92961 55.7167 18.51 52.689 33.2532C46.4513 61.2898 7.83228 60.9694 1.96473 32.9194C-0.740319 17.6956 10.0719 3.64126 25.2551 2.33301C26.1647 2.43179 26.5878 2.94442 26.5217 3.87087C26.5164 7.07209 26.5138 10.2733 26.5138 13.4745C26.49 13.616 26.527 13.7388 26.6275 13.8376C28.0633 13.9177 29.5018 13.9684 30.9455 13.9925C35.5095 14.5265 38.5715 18.5687 37.1171 23.1476C36.8263 23.791 36.5698 24.4478 36.3477 25.118C35.8506 25.7347 35.3191 26.3168 34.7558 26.8587C34.7347 27.1151 36.1732 27.7104 36.3477 28.0308C39.9518 32.0864 40.5441 36.0486 36.3609 40.0347C35.097 41.0733 29.9301 42.8114 28.9465 41.1481C28.3145 39.2685 30.422 39.4847 31.5563 39.4153C40.1263 38.1177 37.7174 27.9908 30.0227 28.2364C28.7957 28.1029 28.333 26.8027 29.4198 26.0711C31.6436 25.5825 33.0397 25.6493 34.5734 23.5881C36.7417 20.16 34.272 16.5983 30.5436 16.2993C29.396 16.2833 28.2458 16.2752 27.0982 16.2752C26.7518 16.2245 26.5587 16.366 26.5164 16.6998C26.5085 24.616 26.5164 32.5323 26.5402 40.4512C26.5534 40.8811 26.4979 41.2976 26.3736 41.7034C22.8224 42.4029 18.5599 39.5915 17.5816 36.102ZM19.7631 35.2262C19.9799 36.1901 20.4347 37.0257 21.1222 37.7306C21.9128 38.4915 22.8409 38.9828 23.9092 39.2017C24.0652 39.1483 24.1498 39.0362 24.1683 38.868C24.2027 31.3789 24.1842 23.8925 24.1155 16.4061C24.0044 16.2672 23.8616 16.2058 23.6845 16.2245C22.5289 16.2459 21.376 16.2539 20.2205 16.2459C19.9852 16.2192 19.8001 16.2993 19.6652 16.4835C19.6573 22.2478 19.6494 28.0121 19.6441 33.7738C19.6361 34.2624 19.6758 34.7483 19.7631 35.2262Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <Image
                    src={current.badgeLogo}
                    alt="Pink Walk Ribbon"
                    width={20}
                    height={30}
                    className="object-contain"
                  />
                )}
              </div>
              <span className="text-[#0D0B05]/30 font-semibold text-xs sm:text-sm">|</span>
              <span className="text-[#0D0B05] font-bold text-xs sm:text-sm tracking-wider uppercase">
                {current.badgeLabel}
              </span>
            </div>

            {/* Title & Accent */}
            <div className="flex flex-col items-start gap-2.5 sm:gap-3">
              <h3 className="text-[#0D0B05] text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold uppercase leading-[1.15] tracking-tight">
                {current.headline}
              </h3>
              <div className={`w-12 h-1 ${current.accentColor} rounded-full`} />
            </div>

            {/* Paragraph */}
            <p className="text-[var(--color-neutral-dark,#555450)] text-sm sm:text-base md:text-lg font-normal leading-relaxed">
              {current.description}
            </p>

            {/* CTA Button */}
            <div className="pt-1 sm:pt-2 w-full sm:w-auto">
              <Button variant="primary" theme="light" href={current.buttonHref} className="w-full sm:w-auto">
                {current.buttonText}
              </Button>
            </div>

          </div>

          {/* Right Column: Photo Mosaic */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 w-full h-[20rem] sm:h-[26rem] md:h-[32rem]">
              
              {/* Stacked Left Images (7 Cols) */}
              <div className="col-span-7 flex flex-col gap-3 sm:gap-4 md:gap-5 h-full">
                {/* Top Image (183px height ratio) */}
                <div className="relative flex-[2] overflow-hidden group rounded-none">
                  <Image
                    src={current.images[0].src}
                    alt={current.images[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                {/* Bottom Image (274px height ratio) */}
                <div className="relative flex-[3] overflow-hidden group rounded-none">
                  <Image
                    src={current.images[1].src}
                    alt={current.images[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
              </div>

              {/* Tall Right Portrait Image (5 Cols) */}
              <div className="col-span-5 h-full">
                <div className="relative w-full h-full overflow-hidden group rounded-none">
                  <Image
                    src={current.images[2].src}
                    alt={current.images[2].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
