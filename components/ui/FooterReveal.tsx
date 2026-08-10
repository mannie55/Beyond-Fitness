"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FooterRevealProps {
  children: React.ReactNode;
}

export default function FooterReveal({ children }: FooterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !footerRef.current) return;
      
      // The footer is fixed in the background (z-index -1). 
      // As the user scrolls through the ghost spacer, the black page content 
      // above scrolls up, physically unmasking this fixed footer.
      // We add a subtle parallax slide-up effect here for a premium feel.
      gsap.fromTo(
        footerRef.current,
        { yPercent: -30, scale: 0.95 },
        {
          yPercent: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", 
            end: "bottom bottom", 
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 1. Ghost Spacer: Renders invisibly in normal document flow to create exact scrollable height */}
      <div 
        id="footer-ghost"
        ref={containerRef} 
        className="relative w-full opacity-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {children}
      </div>
      
      {/* 2. Fixed Footer: Stays pinned to the bottom, behind the rest of the page */}
      <div className="fixed bottom-0 left-0 w-full h-auto z-[-1] overflow-hidden bg-black">
        <div ref={footerRef} className="w-full h-full will-change-transform">
          {children}
        </div>
      </div>
    </>
  );
}
