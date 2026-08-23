"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function StudioCursor({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const coreRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!coreRef.current || !followerRef.current || !containerRef.current) return;

    // Initialize centering
    gsap.set([coreRef.current, followerRef.current], { xPercent: -50, yPercent: -50 });

    // Core dot moves almost instantly
    const coreX = gsap.quickTo(coreRef.current, "x", { duration: 0.15, ease: "power2.out" });
    const coreY = gsap.quickTo(coreRef.current, "y", { duration: 0.15, ease: "power2.out" });
    
    // Follower droplet lags significantly with an elastic/spring feel
    const followerX = gsap.quickTo(followerRef.current, "x", { duration: 0.8, ease: "elastic.out(1, 0.7)" });
    const followerY = gsap.quickTo(followerRef.current, "y", { duration: 0.8, ease: "elastic.out(1, 0.7)" });

    let isInside = false;

    const onPointerMove = (e: PointerEvent) => {
      if (!isInside) return;
      
      const { clientX, clientY } = e;
      
      coreX(clientX);
      coreY(clientY);
      followerX(clientX);
      followerY(clientY);
    };

    const onPointerEnter = (e: PointerEvent) => {
      isInside = true;
      setIsVisible(true);
      
      // Snap to initial position immediately so it doesn't fly in from corner
      gsap.set([coreRef.current, followerRef.current], { x: e.clientX, y: e.clientY });
      gsap.set(containerRef.current, { cursor: "none" });
      
      // Animate the bubbles in
      gsap.to([coreRef.current, followerRef.current], {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)"
      });
    };

    const onPointerLeave = () => {
      isInside = false;
      setIsVisible(false);
      
      gsap.set(containerRef.current, { cursor: "auto" });
      
      gsap.to([coreRef.current, followerRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    };

    const container = containerRef.current;
    
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      gsap.set(container, { cursor: "auto" });
    };
  }, [containerRef]);

  return (
    <>
      {/* Heavy Follower Droplet */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 bg-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          opacity: 0,
          transform: "scale(0)",
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      />
      {/* Fast Core Droplet */}
      <div
        ref={coreRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          opacity: 0,
          transform: "scale(0)",
          transformOrigin: "center center",
          willChange: "transform, opacity",
        }}
      />
    </>
  );
}
