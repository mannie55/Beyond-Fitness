"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import StatsBar from "@/components/ui/StatsBar";

export interface MemberStory {
  id: string;
  name: string;
  role: string;
  discipline: string;
  tenure: string;
  classesCount: string;
  quote: string;
  breakthrough: string;
  avatarSrc: string;
  reelCoverSrc: string;
  reelUrl: string;
  hook: string;
}

export const STORIES: MemberStory[] = [
  {
    id: "1",
    name: "Kemi Adeleke",
    role: "Head of Operations",
    discipline: "RIDE & SCULPT",
    tenure: "Member since Jan 2024",
    classesCount: "190+ Classes",
    quote:
      "Beyond didn't just rebuild my physical strength after extreme burnout — it became the sanctuary that keeps me grounded. The collective breath and electric energy in that dark room at 6 AM is unlike anything else in the city.",
    breakthrough: "Rediscovered daily mental clarity & 12kg fat loss",
    avatarSrc: "/images/smile.jpg",
    reelCoverSrc: "/images/smile.jpg",
    reelUrl: "https://www.instagram.com/reel/DbQO668M7ou/",
    hook: "“From total burnout to 6 AM rhythm warrior.”",
  },
  {
    id: "2",
    name: "Tunde Bakare",
    role: "Tech Founder",
    discipline: "LIFT & STRENGTH",
    tenure: "Member since Aug 2023",
    classesCount: "240+ Classes",
    quote:
      "I used to train alone at commercial gyms and hit a plateau for three years. Coach Tolu and the team here pushed me past mental ceilings I didn't know I had. At 38, I am in the strongest athletic shape of my life.",
    breakthrough: "+40kg deadlift PR & unbreakable consistency",
    avatarSrc: "/images/coach-1.jpg",
    reelCoverSrc: "/images/class-lift_strength.jpg",
    reelUrl: "https://www.instagram.com/reel/DbQO668M7ou/",
    hook: "“Pushed past plateaus I held for three years.”",
  },
  {
    id: "3",
    name: "Dr. Nneka Okafor",
    role: "Cardiologist",
    discipline: "BARRE & PILATES",
    tenure: "Member since Feb 2024",
    classesCount: "140+ Classes",
    quote:
      "As a physician, I evaluate movement through the lens of cardiovascular health and joint longevity. Beyond's instructors teach with deep anatomical precision, intentional tempo, and breathwork. It’s clinical rigor wrapped in contagious joy.",
    breakthrough: "Eliminated chronic back pain & elevated stamina",
    avatarSrc: "/images/pink-walk-education.jpg",
    reelCoverSrc: "/images/class-pilates.jpg",
    reelUrl: "https://www.instagram.com/reel/DbQO668M7ou/",
    hook: "“Clinical precision wrapped in contagious joy.”",
  },
  {
    id: "4",
    name: "David Alabi",
    role: "Creative Director",
    discipline: "HIIT & BOXING",
    tenure: "Member since Nov 2023",
    classesCount: "160+ Classes",
    quote:
      "The sweat is relentless, but the authentic human brotherhood is what keeps you showing up. The Beyond community proved to me that fitness can be a real brotherhood, not just an isolated workout routine.",
    breakthrough: "Conquered 15km mountain trek & gained a family",
    avatarSrc: "/images/on-tour-ride.jpg",
    reelCoverSrc: "/images/class-hit_boxing.jpg",
    reelUrl: "https://www.instagram.com/reel/DbQO668M7ou/",
    hook: "“A genuine brotherhood, not just a workout space.”",
  },
];

interface TestimonialSectionProps {
  stories?: MemberStory[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialSection({
  stories = STORIES,
  title = "WHERE DEDICATION MEETS TRANSFORMATION",
  subtitle = "Raw sweat, genuine breakthrough moments, and unfiltered voices from the people who live and breathe Beyond every single week.",
}: TestimonialSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const activeStory = stories[activeIndex] || stories[0];

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

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
      }
    };
    if (activeVideoModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeVideoModal]);

  // Auto-play effect
  useEffect(() => {
    if (activeVideoModal) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % stories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [stories.length, activeVideoModal]);

  return (
    <section 
      id="testimonials"
      aria-label="Member Stories and Community Voices"
      className="w-full bg-[#0B0A06] text-white flex flex-col items-center justify-start px-padding-global py-10 sm:py-14 md:py-24 xl:py-28 overflow-hidden relative font-sans border-t border-b border-white/10"
    >
      <style>{`
        @keyframes fill-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="w-full max-w-[100rem] flex flex-col items-start gap-6 sm:gap-8 md:gap-[3.5rem] relative z-10">
        
        {/* Section Header: Headline on Left, Minimal Stats on Right */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 sm:gap-6 lg:gap-8 pb-4 border-b border-white/10">
          
          {/* Eyebrow & Title */}
          <div className="flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-[1.5rem] max-w-[46rem]">
            <h2 className="text-white text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight">
              {title}
            </h2>

            <p className="text-white/70 text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-[1.5]">
              {subtitle}
            </p>
          </div>

          {/* Minimalist Stats Integration */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end shrink-0 pt-2 lg:pt-0">
            <StatsBar theme="dark" className="w-full lg:w-auto" />
          </div>

        </div>

        {/* Stories & Movement 2-Column Split Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: Spotlight Story Card (5 Cols) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center py-6 sm:py-8 md:py-10 relative overflow-hidden pr-0 lg:pr-10">
            
            <div key={activeStory.id} className="flex flex-col justify-center gap-10 sm:gap-14 animate-[slide-up_0.4s_ease-out_forwards]">

              {/* Editorial Quote */}
              <blockquote className="text-white text-[clamp(1.5rem,3vw,2.75rem)] font-extralight leading-[1.25] tracking-tight relative z-10">
                &ldquo;{activeStory.quote}&rdquo;
              </blockquote>

              {/* Member Profile */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/20">
                  <Image 
                    src={activeStory.avatarSrc} 
                    alt={activeStory.name}
                    fill
                    className="object-cover grayscale opacity-80"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-medium text-sm md:text-base tracking-widest uppercase">
                    {activeStory.name}
                  </span>
                  <span className="text-white/50 text-xs tracking-widest uppercase">
                    {activeStory.role}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Video Reels Track (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* Reel Cards Track */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="w-[100vw] lg:w-full ml-[calc(-50vw+50%)] lg:ml-0 px-padding-global lg:px-0 flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory [scroll-padding-left:var(--spacing-padding-global)] lg:[scroll-padding-left:0] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2"
            >
              {stories.map((story, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <div
                    key={story.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative w-[16.5rem] sm:w-[18.5rem] md:w-[19.5rem] aspect-[9/13.5] sm:aspect-[9/14] shrink-0 snap-start bg-[#14120B] border overflow-hidden cursor-pointer transition-all duration-300 rounded-none ${
                      isSelected 
                        ? "border-white/60" 
                        : "border-transparent"
                    }`}
                  >
                    {/* Background Image */}
                    <Image
                      src={story.reelCoverSrc}
                      alt={`${story.name} reel cover`}
                      fill
                      sizes="(max-width: 768px) 80vw, 320px"
                      className="object-cover object-center transition-all duration-700 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                    {/* Center Play Button Overlay */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(idx);
                        setActiveVideoModal(story.reelUrl);
                      }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                  </div>
                );
              })}

              {/* Spacer to preserve right-side padding on mobile scroll */}
              <div className="w-[1px] flex-shrink-0" aria-hidden="true" />
            </div>

            {/* Slider Navigation Controls & Progress Track */}
            <div className="w-full flex justify-between items-center gap-6 pt-2">
              
              {/* Progress Indicator Track */}
              <div className="w-[7.5rem] sm:w-[10rem] h-[2px] bg-white/10 relative rounded-full overflow-hidden">
                <div
                  className="absolute top-0 h-full bg-white/60 rounded-full transition-all duration-150"
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
                  className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-white/20 flex items-center justify-center bg-transparent transition-all hover:bg-white/10 active:scale-95 text-white cursor-pointer"
                  aria-label="Previous reel"
                >
                  <Image
                    src="/icons/class-slider_arrow_left.svg"
                    alt="Previous"
                    width={20}
                    height={20}
                    className="opacity-80 brightness-0 invert"
                  />
                </button>
                <button
                  onClick={() => handleArrowClick("right")}
                  className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] rounded-full border border-white/20 flex items-center justify-center bg-transparent transition-all hover:bg-white/10 active:scale-95 text-white cursor-pointer"
                  aria-label="Next reel"
                >
                  <Image
                    src="/icons/class-slider_arrow_right.svg"
                    alt="Next"
                    width={20}
                    height={20}
                    className="opacity-80 brightness-0 invert"
                  />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Cinematic Video Lightbox Modal */}
      {activeVideoModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Member Story Video Reel Player"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto"
          onClick={() => {
            setActiveVideoModal(null);
            setIframeLoaded(false);
          }}
        >
          <div 
            className="relative w-full max-w-[24rem] mx-auto my-auto bg-[#14120B] border border-white/20 p-4 sm:p-5 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white font-medium text-xs sm:text-sm uppercase tracking-wider">
                Beyond Community Story
              </span>
              <button
                onClick={() => {
                  setActiveVideoModal(null);
                  setIframeLoaded(false);
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Video Player"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Embedded Instagram Reel Frame */}
            <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex justify-center items-center">
              
              {/* Loading Skeleton */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#14120B]">
                  {activeStory?.reelCoverSrc && (
                    <Image 
                      src={activeStory.reelCoverSrc} 
                      alt="Loading..."
                      fill
                      className="object-cover opacity-30 blur-sm transition-opacity duration-500" 
                    />
                  )}
                  <div className="absolute w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}

              <iframe
                src={activeVideoModal.endsWith("/") ? `${activeVideoModal}embed` : `${activeVideoModal}/embed`}
                className={`w-full h-full border-none transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                scrolling="no"
                allow="encrypted-media; autoplay"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

            {/* Modal Footer Note */}
            <p className="text-white/50 text-[0.7rem] text-center uppercase tracking-wider">
              Tap video for audio &bull; Powered by Beyond Community
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
