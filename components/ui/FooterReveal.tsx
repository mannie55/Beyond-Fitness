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

    if (!containerRef.current || !footerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // The footer is fixed in the background (z-index -1) only on desktop.
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
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* 1. Ghost Spacer: Renders invisibly to create exact scrollable height ONLY on Desktop */}
      <div 
        id="footer-ghost"
        ref={containerRef} 
        className="relative w-full hidden md:block opacity-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {children}
      </div>
      
      {/* 2. Footer Container: Fixed behind content on Desktop, Normal flow on Mobile */}
      <div className="md:fixed bottom-0 left-0 w-full h-auto z-[-1] overflow-hidden bg-black relative">
        <div ref={footerRef} className="w-full h-full will-change-transform">
          {children}
        </div>
      </div>
    </>
  );
}
