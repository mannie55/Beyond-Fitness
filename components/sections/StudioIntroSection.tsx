"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StudioIntroCenterpiece from "./StudioIntroCenterpiece";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function StudioIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions as { isDesktop: boolean };

      if (!isDesktop) return; // Disable GSAP scroll animation completely on mobile

      // Pre-apply hardware acceleration hints to expensive animated elements
      gsap.set('[data-animate="video-wrapper"]', { willChange: "width, height, transform, border-radius" });
      gsap.set('[data-animate="desktop-cta-container"]', { willChange: "bottom, left, transform" });

      // Create the pinned scroll animation timeline ONLY for desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", 
          end: "+=200%", 
          pin: true,
          // Use true (or very small number like 0.1) instead of 1 to ensure 1:1 physical attachment 
          // to native smooth scrolling on iPads/Trackpads, eliminating the "lagging behind" feel
          scrub: true, 
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Removed fastScrollEnd to prevent the violent "catching up/snapping" effect on fast scrolls
          // Removed hardcoded pinType: "fixed" to let GSAP auto-detect the best method for iOS Safari
        }
      });

      // 1. Fade out the editorial overlay almost immediately
      tl.to('[data-animate="desktop-post-zoom"]', {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, 0);

      // 2. Shrink the video container to its final "pill" state
      tl.to('[data-animate="video-wrapper"]', {
        width: "clamp(8rem,15vw,18rem)",
        height: "clamp(4rem,7vw,9rem)",
        borderRadius: "0.5rem", // 8px (rounded-lg)
        duration: 1.5,
        ease: "power3.inOut"
      }, 0.2);

      // 3. Fade in the "THIS IS" and "BEYOND" centerpiece text
      tl.to('[data-animate="text-left"], [data-animate="text-right"]', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, 1.0); // Start fading in as the video is finishing its shrink

      // 4. Travel the CTA from bottom-left to the center of the Studio section
      tl.to('[data-animate="desktop-cta-container"]', {
        bottom: "32vh",
        left: "50%",
        xPercent: -50,
        duration: 1.5,
        ease: "power3.inOut"
      }, 0.2); // Sync with video shrink

    });

  }, { scope: sectionRef });

  return (
    <section id="studio" 
      ref={sectionRef} 
      className="relative w-full min-h-[100vh] md:min-h-0 md:h-[100vh] bg-black overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black">
        {/* Desktop Static Background */}
        <div className="hidden md:block w-full h-full relative">
          <Image 
            src="/images/studio-background.jpg"
            alt="Studio Background"
            fill
            className="object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        {/* Mobile Full-Screen Video Background */}
        <div className="block md:hidden w-full h-full relative">
          <video
            src="/videos/showcase-video.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scattered background images - Collage style (Visible on Desktop for GSAP timeline) */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden pointer-events-none hidden md:block">
        <div className="relative w-full h-full">
          {/* TOP ROW */}
          <div className="absolute md:top-[3%] md:left-[2%] md:w-[17vw]">
            <img src="/images/studio-image-1.jpg" alt="Studio 1" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:top-[6%] md:left-[22%] md:w-[20vw] md:z-auto">
            <img src="/images/studio-image-2.jpg" alt="Studio 2" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:top-[2%] md:left-[52%] md:right-auto md:w-[20vw]">
            <img src="/images/studio-image-3.jpg" alt="Studio 3" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:top-[4%] md:left-[78%] md:right-auto md:w-[17vw] md:z-auto">
            <img src="/images/studio-image-4.jpg" alt="Studio 4" className="w-full h-auto shadow-2xl" />
          </div>

          {/* BOTTOM ROW */}
          <div className="absolute md:bottom-[2%] md:left-[-2%] md:w-[23vw]">
            <img src="/images/studio-image-5.jpg" alt="Studio 5" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:bottom-[-6%] md:left-[30%] md:w-[19vw] md:z-auto">
            <img src="/images/studio-image-6.jpg" alt="Studio 6" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:bottom-[8%] md:left-[55%] md:right-auto md:w-[17vw]">
            <img src="/images/studio-image-7.jpg" alt="Studio 7" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute md:bottom-[5%] md:left-[80%] md:right-auto md:w-[17vw] md:z-auto">
            <img src="/images/studio-image-8.jpg" alt="Studio 8" className="w-full h-auto shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Mobile Filmstrips + Centerpiece Layout */}
      <div className="flex flex-col justify-between items-center w-full flex-1 md:hidden">
        {/* Top Moodboard Ticker */}
        <div className="w-full overflow-hidden select-none opacity-80 mt-0">
          <div className="flex gap-2.5 animate-[marquee_25s_linear_infinite] whitespace-nowrap w-max">
            {["/images/studio-image-1.jpg", "/images/studio-image-2.jpg", "/images/studio-image-3.jpg", "/images/studio-image-4.jpg", "/images/studio-image-1.jpg", "/images/studio-image-2.jpg", "/images/studio-image-3.jpg", "/images/studio-image-4.jpg"].map((src, idx) => (
              <div key={`top-${idx}`} className="w-[8.5rem] h-[5.3rem] overflow-hidden flex-shrink-0 border border-white/15 shadow-md">
                <img src={src} alt="Studio atmosphere" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Editorial Text & Mute Toggle (Bottom Left) */}
        <div className="w-full px-4 sm:px-6 pb-6 pt-16 flex flex-col justify-end items-start flex-1 relative pointer-events-auto">
          <div className="flex flex-col gap-2">
            <h2 className="text-white mix-blend-difference text-[2.25rem] font-bold leading-[1.1] uppercase">
              THIS IS
            </h2>
            <div className="mt-1">
              <Button variant="primary" theme="dark" href="/classes" className="mix-blend-difference">
                DISCOVER THE STUDIO
              </Button>
            </div>

            {/* Massive Decorative Typography (Cloned from Footer) */}
            <div className="w-full flex justify-start overflow-visible mt-2 sm:mt-4">
              <div className="select-none text-left text-white mix-blend-difference font-bold text-[18vw] text-[clamp(4rem,16vw,18rem)] leading-[0.8] tracking-[0.08em] whitespace-nowrap">
                BEYOND
              </div>
            </div>
          </div>
          
          {/* Mute Toggle Button */}
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-6 right-4 sm:right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex justify-center items-center text-white cursor-pointer hover:bg-white/30 transition-colors z-30"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Moodboard Ticker (Reverse) */}
        <div className="w-full overflow-hidden select-none opacity-80">
          <div className="flex gap-2.5 animate-[marquee-reverse_25s_linear_infinite] whitespace-nowrap w-max">
            {["/images/studio-image-5.jpg", "/images/studio-image-6.jpg", "/images/studio-image-7.jpg", "/images/studio-image-8.jpg", "/images/studio-image-5.jpg", "/images/studio-image-6.jpg", "/images/studio-image-7.jpg", "/images/studio-image-8.jpg"].map((src, idx) => (
              <div key={`bot-${idx}`} className="w-[8.5rem] h-[5.3rem] overflow-hidden flex-shrink-0 border border-white/15 shadow-md">
                <img src={src} alt="Studio atmosphere" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Centered Container */}
      <div className="relative z-10 hidden md:flex justify-center items-center w-full h-full">
        <StudioIntroCenterpiece />
        
        {/* Desktop Post-Zoom Overlay */}
        <div 
          data-animate="desktop-post-zoom" 
          className="absolute inset-0 z-50 pointer-events-none flex flex-col justify-between p-12 lg:p-[4rem] items-start mix-blend-difference"
        >
            <div className="w-full flex justify-end items-start pt-8 lg:pt-12">
               <h2 className="text-white text-[3.5vw] lg:text-[2.5rem] font-bold leading-[1.1] uppercase max-w-[40vw] text-right">
                 Where rhythm meets high performance.
               </h2>
            </div>
            
            <div className="flex flex-col gap-6 w-full relative z-20 pb-8 lg:pb-12">
              {/* CTA moved to independent absolute container for travel animation */}
            </div>
        </div>
        
        {/* Independently traveling CTA */}
        <div 
          data-animate="desktop-cta-container" 
          className="absolute z-50 pointer-events-auto mix-blend-difference hidden md:block bottom-12 left-12 lg:bottom-[4rem] lg:left-[4rem]"
        >
          <Button variant="primary" theme="dark" href="/classes">
            DISCOVER THE STUDIO
          </Button>
        </div>
      </div>
    </section>
  );
}
