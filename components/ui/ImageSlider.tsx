"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageSlider({
  images = [],
  interval = 5000,
  className = "",
}: ImageSliderProps) {
  const isMultiple = Boolean(images && images.length > 1);
  const slides = isMultiple
    ? [images[images.length - 1], ...images, images[0]]
    : images || [];

  const [currentIndex, setCurrentIndex] = useState(isMultiple ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Touch gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset index when images array changes
  useEffect(() => {
    setCurrentIndex(isMultiple ? 1 : 0);
    setIsTransitioning(false);
  }, [images?.length, isMultiple]);

  // Forward Navigation
  const nextSlide = useCallback(() => {
    if (!isMultiple) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev >= slides.length - 1) return prev;
      return prev + 1;
    });
  }, [isMultiple, slides.length]);

  // Backward Navigation
  const prevSlide = useCallback(() => {
    if (!isMultiple) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }, [isMultiple]);

  // Jump to specific slide index
  const goToSlide = useCallback(
    (slideIdx: number) => {
      if (!isMultiple) return;
      setIsTransitioning(true);
      setCurrentIndex(slideIdx + 1);
    },
    [isMultiple]
  );

  // Autoplay Timer with Pause & Visibility Management
  useEffect(() => {
    if (!isMultiple || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    // Check system prefers-reduced-motion safely for SSR/JSDOM
    if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery?.matches) return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMultiple, isPaused, interval, currentIndex, nextSlide]);

  // Pause when browser tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Handle seamless infinite loop jump
  const handleTransitionEnd = () => {
    if (!isMultiple) return;

    if (currentIndex === 0) {
      // Snapped to cloned last slide at index 0 -> jump to real last slide
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    } else if (currentIndex === slides.length - 1) {
      // Snapped to cloned first slide at end -> jump to real first slide
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45; // Minimum px distance to trigger slide

    if (diffX > minSwipeDistance) {
      // Swiped left -> next
      nextSlide();
    } else if (diffX < -minSwipeDistance) {
      // Swiped right -> prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative w-full h-full overflow-hidden group select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Studio gallery carousel"
    >
      <style>{`
        @keyframes slider-fill-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      {/* Slides Track */}
      <div
        className={`flex w-full h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full relative bg-neutral-900"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i} of ${slides.length}`}
          >
            <Image
              src={img}
              alt={`Slide ${i + 1} - Beyond Fitness Studio`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_25%]"
              priority={i === 1}
              loading={i === 1 ? undefined : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Desktop / Tablet) */}
      {isMultiple && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FED55F] transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <img
              src="/icons/slider_arrow_left.svg"
              alt="Previous"
              className="w-5 h-5 filter invert"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex justify-center items-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FED55F] transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next image"
          >
            <img
              src="/icons/slider_arrow_right.svg"
              alt="Next"
              className="w-5 h-5 filter invert"
            />
          </button>
        </>
      )}

      {/* Indicators with accessible touch targets */}
      {isMultiple && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20"
          role="tablist"
          aria-label="Carousel navigation dots"
        >
          {images.map((_, i) => {
            const isActive =
              (currentIndex === 0 && i === images.length - 1) ||
              (currentIndex === slides.length - 1 && i === 0) ||
              currentIndex === i + 1;

            return (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className="p-1 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FED55F] rounded-full cursor-pointer"
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={isActive}
                role="tab"
              >
                <span
                  className={`block h-1.5 sm:h-2 rounded-full overflow-hidden transition-all duration-300 relative ${
                    isActive ? "bg-white/30 w-8 sm:w-10" : "bg-white/50 hover:bg-white/80 w-1.5 sm:w-2"
                  }`}
                >
                  {isActive && (
                    <span 
                      className="absolute top-0 left-0 h-full bg-white"
                      style={{
                        animation: isPaused ? "none" : `slider-fill-progress ${interval}ms linear forwards`
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
