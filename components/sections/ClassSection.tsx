"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import ClassCard from "@/components/ui/ClassCard";
import Button from "@/components/ui/Button";

export default function ClassSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      }
    }
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.75; // Scroll most of the screen width to snap to next
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const classes = [
    {
      title: "RIDE",
      description: "A dark room, a heavy beat, a hill that never ends.",
      tag: "high",
      imageSrc: "/images/class-rides.jpg"
    },
    {
      title: "LIFT (Strength)",
      description: "Compound movements. Find out what you're made of.",
      tag: "high",
      imageSrc: "/images/class-lift_strength.jpg"
    },
    {
      title: "BARRE PILATES",
      description: "Small movements, intense burn, real control.",
      tag: "moderate",
      imageSrc: "/images/class-pilates.jpg"
    },
    {
      title: "SCULPT",
      description: "High-rep resistance training. You versus the mirror.",
      tag: "moderate",
      imageSrc: "/images/class-sculpts.jpg"
    },
    {
      title: "HIIT BOXING",
      description: "Fast hands, faster heart rate. Hit until the bell.",
      tag: "high",
      imageSrc: "/images/class-hiit_boxing.jpg"
    },
    {
      title: "STRETCH & MOBILITY",
      description: "Slow it down. Recover the range you trained for.",
      tag: "low",
      imageSrc: "/images/class-stretch.jpg"
    }
  ];

  return (
    <section className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-start px-padding-global py-16 md:py-24 overflow-hidden relative">
      <div className="w-full max-w-[80rem] flex flex-col items-center gap-[5rem]">
        
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-8">
          <div className="flex flex-col items-start text-left gap-[1.5rem] max-w-[40rem]">
            <h2 className="text-[#0D0B05] text-[length:var(--text-heading-2)] font-bold uppercase leading-[1.2]">
              CLASSES THAT MATCH YOUR LIFESTYLE
            </h2>
            {/* Reused yellow accent line idea for UI consistency */}
            <div className="w-[3rem] h-[4px] bg-[var(--color-dandelion)] rounded-full" />
            <p className="text-[var(--color-neutral-dark)] text-[length:var(--text-text-large)] font-normal leading-[1.5]">
              Whether you're building strength, finding your flow, <br className="hidden lg:block" /> 
              there's a class designed to meet you where you are.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[1rem]">
            <Button variant="primary" theme="dark">
              CLASSES
            </Button>
            <Button variant="secondary" theme="light">
              VIEW SCHEDULE
            </Button>
          </div>
        </div>

        {/* Classes Grid - Horizontal scroll on mobile, flex wrap on desktop */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-[100vw] xl:w-full ml-[calc(-50vw+50%)] xl:ml-0 px-padding-global xl:px-0 flex flex-nowrap xl:flex-wrap xl:justify-center gap-[1.5rem] xl:gap-[2rem] overflow-x-auto xl:overflow-x-visible snap-x snap-mandatory [scroll-padding-left:var(--spacing-padding-global)] xl:[scroll-padding-left:0] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-0 xl:pb-[3rem]"
        >
          {classes.map((cls, index) => (
            <ClassCard 
              key={index}
              title={cls.title}
              description={cls.description}
              tag={cls.tag}
              imageSrc={cls.imageSrc}
              href="/classes"
              className={(index === 1 || index === 4) ? "xl:translate-y-[3rem] transition-transform duration-500" : "transition-transform duration-500"}
            />
          ))}
          {/* Spacer to preserve right-side padding on mobile scroll */}
          <div className="w-[1px] flex-shrink-0 xl:hidden" aria-hidden="true" />
        </div>

        {/* Mobile/Tablet Slider Controls */}
        <div className="w-full flex flex-col xl:hidden gap-3 mt-0">
          <div className="w-full h-[1px] bg-black/10" />
          <div className="w-full flex justify-between items-center">
            
            {/* Progress Indicator (Left) */}
            <div className="w-[120px] h-[4px] bg-black/10 relative rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-black rounded-full"
                style={{ 
                  width: '40px', 
                  transform: `translateX(${scrollProgress * 80}px)` 
                }}
              />
            </div>

            {/* Arrow Controls (Right) */}
            {/* Arrow Controls (Right) */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleArrowClick('left')}
                className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-black/10 flex items-center justify-center bg-transparent transition-all hover:bg-black/5 active:scale-95"
                aria-label="Previous class"
              >
                <Image src="/icons/class-slider_arrow_left.svg" alt="Left Arrow" width={20} height={20} className="opacity-80" />
              </button>
              <button 
                onClick={() => handleArrowClick('right')}
                className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-black/10 flex items-center justify-center bg-transparent transition-all hover:bg-black/5 active:scale-95"
                aria-label="Next class"
              >
                <Image src="/icons/class-slider_arrow_right.svg" alt="Right Arrow" width={20} height={20} className="opacity-80" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
