"use client";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Register ScrollTrigger if not already registered
    gsap.registerPlugin(ScrollTrigger);

    // Sync GSAP's ticker with Lenis
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(update);

    // Handle Anchor Links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        
        // Update URL without native jumping
        if (window.history.pushState) {
          window.history.pushState(null, "", href);
        }

        lenisRef.current?.lenis?.scrollTo(href, { offset: -100 }); // Offset for navbar
      }
    };

    // Use capture phase to intercept the click before Next.js Link component does
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      gsap.ticker.remove(update);
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, []);

  return (
    // `root` tells Lenis to take over the main window scroll
    // `autoRaf={false}` stops Lenis from running its own internal requestAnimationFrame,
    // so we can manually drive it via GSAP's ticker above.
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
