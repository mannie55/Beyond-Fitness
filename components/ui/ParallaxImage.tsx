"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Applied to the outer container
  imageClassName?: string; // Applied to the next/image
  priority?: boolean;
  sizes?: string;
  parallaxOffset?: number; // percentage of height to offset, e.g. 15 for 15%
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
  parallaxOffset = 15,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      // Calculate exact yPercent based on element's scaled height to prevent background exposure
      const yPercentValue = (parallaxOffset / (100 + parallaxOffset * 2)) * 100;

      gsap.fromTo(
        imageRef.current,
        { yPercent: -yPercentValue },
        {
          yPercent: yPercentValue,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [parallaxOffset]);

  // The wrapper scales height up so there is room to translate without clipping
  const wrapperHeight = 100 + parallaxOffset * 2;
  const wrapperTop = -parallaxOffset;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={imageRef}
        className="absolute left-0 w-full will-change-transform"
        style={{
          height: `${wrapperHeight}%`,
          top: `${wrapperTop}%`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </div>
    </div>
  );
}
