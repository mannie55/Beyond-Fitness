"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StudioIntroCenterpiece from "./StudioIntroCenterpiece";

gsap.registerPlugin(ScrollTrigger);

export default function StudioIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions as { isDesktop: boolean };

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

      // 2. Scale the video container to fill the viewport
      // On desktop: fill entire screen (100vh). On mobile: maintain 16:9 aspect ratio (56.25vw).
      tl.to('[data-animate="video-wrapper"]', {
        width: "100vw",
        height: isDesktop ? "100vh" : "56.25vw",
        borderRadius: "0px",
        duration: 1.5,
        ease: "power3.inOut"
      }, 0.2); // Start scaling slightly after the text begins fading

      // 3. Shrink the text wrappers height on mobile (desktop is unaffected as they are absolute)
      tl.to('[data-animate="text-left-wrapper"], [data-animate="text-right-wrapper"]', {
        height: 0,
        duration: 1.5,
        ease: "power3.inOut"
      }, 0.2);

      // 4. Shrink the button's height to 0 and the parent gap to 0 so the video fills vertically
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
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[100vh] bg-black overflow-hidden flex justify-center items-center"
    >
      {/* Background with 69% dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/studio-background.jpg"
          alt="Studio Background"
          fill
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Scattered background images - Collage style (Vivid & above overlay) */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* TOP ROW (4 images, horizontally distributed, slightly staggered vertically) */}
          <div className="absolute top-[3%] left-[2%] w-[17vw]">
            <img src="/images/studio-image-1.jpg" alt="Studio 1" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute top-[6%] left-[22%] w-[20vw]">
            <img src="/images/studio-image-2.jpg" alt="Studio 2" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute top-[2%] left-[52%] w-[20vw]">
            <img src="/images/studio-image-3.jpg" alt="Studio 3" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute top-[4%] left-[78%] w-[17vw]">
            <img src="/images/studio-image-4.jpg" alt="Studio 4" className="w-full h-auto shadow-2xl" />
          </div>

          {/* BOTTOM ROW (4 images, horizontally distributed, slightly staggered vertically) */}
          <div className="absolute bottom-[2%] left-[-2%] w-[23vw]">
            <img src="/images/studio-image-5.jpg" alt="Studio 5" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute bottom-[-6%] left-[30%] w-[19vw]">
            <img src="/images/studio-image-6.jpg" alt="Studio 6" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute bottom-[8%] left-[55%] w-[17vw]">
            <img src="/images/studio-image-7.jpg" alt="Studio 7" className="w-full h-auto shadow-2xl" />
          </div>
          <div className="absolute bottom-[5%] left-[80%] w-[17vw]">
            <img src="/images/studio-image-8.jpg" alt="Studio 8" className="w-full h-auto shadow-2xl" />
          </div>
        </div>
      </div>

      {/* The Reusable Centerpiece Component */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <StudioIntroCenterpiece />
      </div>
    </section>
  );
}
