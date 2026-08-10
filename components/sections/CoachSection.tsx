"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ClassCard from "@/components/ui/ClassCard";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";

export interface Coach {
  id: string;
  name: string;
  role: string;
  tag: string;
  imageSrc: string;
  href?: string;
}

export const DEFAULT_COACHES: Coach[] = [
  {
    id: "1",
    name: "TOLU ADEYEMI",
    role: "Head Strength & Conditioning",
    tag: "HEAD COACH",
    imageSrc: "/images/coach-1.jpg",
  },
  {
    id: "2",
    name: "CHIDI NWACHUKWU",
    role: "Lead Cycling & Rhythm Instructor",
    tag: "RIDE & CYCLE",
    imageSrc: "/images/coach-2.jpg",
  },
  {
    id: "3",
    name: "AMARA EZE",
    role: "Senior Barre & Pilates Specialist",
    tag: "PILATES",
    imageSrc: "/images/coach-3.jpg",
  },
  {
    id: "4",
    name: "EMMANUEL OBI",
    role: "HIIT Boxing & Athletic Performance",
    tag: "HIIT & BOXING",
    imageSrc: "/images/coach-4.jpg",
  },
];

interface CoachSectionProps {
  coaches?: Coach[];
  title?: string;
  subtitle?: string;
}

export default function CoachSection({
  coaches = DEFAULT_COACHES,
  title = "THE MINDS BEHIND THE SWEAT",
  subtitle = "Passionate athletes, master motivators, and certified specialists dedicated to bringing out your absolute strongest self.",
}: CoachSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
      }
    }
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="coaches" className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-start px-padding-global py-10 sm:py-14 md:py-24 overflow-hidden relative font-sans">
      <div className="w-full max-w-[100rem] flex flex-col items-start gap-6 sm:gap-8 md:gap-[3.5rem]">
        
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-[1.5rem] max-w-[42rem]">
            <TextReveal 
              as="h2"
              text={title}
              className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight"
            />
            <div className="w-[3rem] h-[0.25rem] bg-[var(--color-dandelion)] rounded-full" />
            <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-[1.5]">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[1rem] w-full sm:w-auto">
            <Button variant="secondary" theme="light" className="w-full sm:w-auto">
              ALL COACHES
            </Button>
          </div>
        </div>

        {/* Coaches Grid - Horizontal scroll on mobile & desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-[100vw] lg:w-full ml-[calc(-50vw+50%)] lg:ml-0 px-padding-global lg:px-0 flex flex-nowrap gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory [scroll-padding-left:var(--spacing-padding-global)] lg:[scroll-padding-left:0] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
        >
          {coaches.map((coach) => (
            <ClassCard
              key={coach.id}
              title={coach.name}
              description={coach.role}
              tag={coach.tag}
              imageSrc={coach.imageSrc}
              href={coach.href}
              className="shrink-0 snap-start"
            />
          ))}
          {/* Spacer to preserve right-side padding on scroll */}
          <div className="w-[0.0625rem] flex-shrink-0" aria-hidden="true" />
        </div>

        {/* Mobile/Tablet/Desktop Slider Controls */}
        <div className="w-full flex flex-col gap-3 mt-1 sm:mt-0">
          <div className="w-full h-[0.0625rem] bg-black/10" />
          <div className="w-full flex justify-between items-center">
            
            {/* Progress Indicator */}
            <div className="w-[7.5rem] sm:w-[10rem] h-[0.125rem] bg-black/10 relative rounded-full overflow-hidden">
              <div
                className="absolute top-0 h-full bg-black rounded-full transition-all duration-150"
                style={{
                  width: "35%",
                  left: `${scrollProgress * 65}%`,
                }}
              />
            </div>

            {/* Navigation Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleArrowClick("left")}
                className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-black/10 flex items-center justify-center bg-transparent transition-all hover:bg-black/5 active:scale-95 text-black"
                aria-label="Previous coach"
              >
                <Image
                  src="/icons/class-slider_arrow_left.svg"
                  alt="Previous"
                  width={20}
                  height={20}
                  className="opacity-80"
                />
              </button>
              <button
                onClick={() => handleArrowClick("right")}
                className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-black/10 flex items-center justify-center bg-transparent transition-all hover:bg-black/5 active:scale-95 text-black"
                aria-label="Next coach"
              >
                <Image
                  src="/icons/class-slider_arrow_right.svg"
                  alt="Next"
                  width={20}
                  height={20}
                  className="opacity-80"
                />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
