"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StudioIntroCenterpiece from "./StudioIntroCenterpiece";

gsap.registerPlugin(ScrollTrigger);

export default function StudioIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Create the pinned scroll animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center", // Pin when the section reaches the middle of the viewport
        end: "+=200%", // Keep pinned for 2x the viewport height
        pin: true,
        scrub: 1, // Smooth scrubbing
        anticipatePin: 1,
      }
    });

    // 1. Fade out the text and button almost immediately
    tl.to('[data-animate="text-left"], [data-animate="text-right"], [data-animate="button"]', {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.out",
    }, 0);

    // 2. Scale the video container to fill the entire viewport
    // Animating width and height to cover the screen
    tl.to('[data-animate="video-wrapper"]', {
      width: "100vw",
      height: "100vh",
      borderRadius: "0px",
      duration: 1.5,
      ease: "power3.inOut"
    }, 0.2); // Start scaling slightly after the text begins fading

    // 3. Simultaneously shrink the text wrappers to 0 so the video can truly center in the viewport
    tl.to('[data-animate="text-left-wrapper"], [data-animate="text-right-wrapper"]', {
      flex: "0 0 0px",
      padding: 0,
      duration: 1.5,
      ease: "power3.inOut"
    }, 0.2);

    // 4. Shrink the button's height to 0 and the parent gap to 0 so the video fills exactly 100vh vertically
    tl.to('[data-animate="button-wrapper"]', {
      height: 0,
      duration: 1.5,
      ease: "power3.inOut"
    }, 0.2);

    tl.to('[data-animate="centerpiece-root"], [data-animate="inner-row"]', {
      gap: 0,
      duration: 1.5,
      ease: "power3.inOut"
    }, 0.2);

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[100vh] bg-black overflow-hidden flex justify-center items-center"
    >
      {/* 
        This is where the scattered background imagery from Figma (10400:961) 
        would be placed. They are separate from the centerpiece. 
      */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[#111] mix-blend-overlay"></div>

      {/* The Reusable Centerpiece Component */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <StudioIntroCenterpiece />
      </div>
    </section>
  );
}
