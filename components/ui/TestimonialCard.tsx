"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface TestimonialCardProps {
  quote?: string;
  name?: string;
  role?: string;
  videoSrc?: string;
}

export default function TestimonialCard({
  quote = "\u201CA place that demands my best, without shouting.\u201D",
  name = "TOLU ADEYEMI",
  role = "Co-founder, Foundr",
  videoSrc = "/videos/showcase-video.mp4",
}: TestimonialCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full md:max-w-[26rem] mx-auto p-[8px] rounded-none bg-transparent transition-all duration-300 hover:bg-[#FEE18F] hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] font-sans group">
      <div className="w-full bg-[#FFFFFF] flex flex-col items-stretch transition-transform duration-300">
        
        {/* Lightbox / Video */}
        <div 
          className="relative w-full aspect-square bg-[#0D0B05] cursor-pointer" 
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            playsInline
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors">
              <Image 
                src="/icons/play-button.svg"
                alt="Play"
                width={64}
                height={64}
                className="w-[4rem] h-[4rem]"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col items-stretch pt-[1.25rem] px-[1.25rem] pb-[1.5rem] md:pt-[1.5rem] md:px-[2rem] md:pb-[2rem] gap-[1rem] md:gap-[1.5rem] overflow-hidden">
          
          {/* Quote Icon (bxs:quote-alt-right) */}
          <div className="absolute left-[0] top-[-1rem] md:top-[-1.3rem] pointer-events-none z-0">
            <Image 
              src="/icons/quote-icon.svg"
              alt="Quote"
              width={113}
              height={113}
              className="w-[5rem] h-[5rem] md:w-[7.0625rem] md:h-[7.0625rem]"
            />
          </div>

          {/* Beyond Fitness Background Logo */}
          <div className="absolute top-[5rem] md:top-[6.825rem] right-[-1rem] md:right-[-1.8125rem] pointer-events-none z-0">
            <Image 
              src="/icons/beyond-fitness-background.svg" 
              alt="Background Logo" 
              width={109}
              height={109}
              className="w-[5rem] h-[5rem] md:w-[6.8125rem] md:h-[6.8125rem]"
            />
          </div>

          {/* Quote Text */}
          <p className="text-[length:var(--text-heading-4)] font-semibold leading-[1.4] text-[#0D0B05] tracking-[-0.01em] relative z-10 font-sans">
            {quote}
          </p>

          {/* Avatar Section */}
          <div className="flex flex-row items-center gap-[0.75rem] md:gap-[1rem] relative z-10 mt-1 md:mt-0">
            <div className="flex flex-col items-start font-sans">
              <span className="text-[length:var(--text-text-regular)] font-semibold text-[#0D0B05] uppercase">
                {name}
              </span>
              <span className="text-[length:var(--text-text-regular)] font-normal text-[#0D0B05]/50">
                {role}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
