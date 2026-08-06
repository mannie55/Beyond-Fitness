"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function ImageSlider({ images, interval = 5000, className = "" }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // If there are multiple images, clone the first and last to create an infinite loop illusion
  const slides = images?.length > 1 ? [images[images.length - 1], ...images, images[0]] : images;

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [images?.length, interval]);

  const nextSlide = () => {
    if (currentIndex >= slides.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      // Snapped to the cloned last slide (at the beginning), jump to the real last slide
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    } else if (currentIndex === slides.length - 1) {
      // Snapped to the cloned first slide (at the end), jump to the real first slide
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full overflow-hidden group ${className}`}>
      {/* Slides Container */}
      <div 
        className={`flex w-full h-full ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-full h-full relative">
            <Image 
              src={img} 
              alt={`Slide ${i}`} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
              priority={i === 1}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-[1.5rem] top-1/2 -translate-y-1/2 w-[3rem] h-[3rem] flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <img src="/icons/slider_arrow_left.svg" alt="Previous" className="w-[1.5rem] h-[1.5rem]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[1.5rem] top-1/2 -translate-y-1/2 w-[3rem] h-[3rem] flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <img src="/icons/slider_arrow_right.svg" alt="Next" className="w-[1.5rem] h-[1.5rem]" />
          </button>
        </>
      )}
      
      {/* Optional Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-[1.5rem] left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(i + 1);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                (currentIndex === 0 && i === images.length - 1) || 
                (currentIndex === slides.length - 1 && i === 0) || 
                (currentIndex === i + 1) 
                  ? "bg-white w-4" 
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
