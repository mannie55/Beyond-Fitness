"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  triggerSelector?: string;
}

export default function TextReveal({ text, as: Component = "div", className = "", delay = 0, triggerSelector }: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // We split into lines
    const split = new SplitType(textRef.current, { types: "lines" });

    // Wrap each line in a mask container for the "reveal" effect
    if (split.lines) {
      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.style.overflow = "hidden";
        // Preserve vertical metrics
        wrapper.style.paddingTop = "0.1em"; 
        wrapper.style.paddingBottom = "0.1em";
        wrapper.style.marginTop = "-0.1em";
        wrapper.style.marginBottom = "-0.1em";
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });
    }

    const ctx = gsap.context(() => {
      gsap.from(split.lines, {
        y: "115%",
        rotate: 3,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: triggerSelector ? triggerSelector : textRef.current,
          start: triggerSelector ? "top bottom" : "top 85%",
          toggleActions: "play none none reverse", // Rewinds if scrolled back up past it!
        },
      });
    }, textRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [text, delay]);

  return (
    <Component ref={textRef} className={className}>
      {text}
    </Component>
  );
}
