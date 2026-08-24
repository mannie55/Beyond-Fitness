"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";

export default function HeroSection() {

  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[35rem] md:min-h-[37.5rem] flex flex-col justify-between pt-2 sm:pt-3 md:pt-4 pb-3 md:pb-0 overflow-hidden bg-black text-white">
      {/* Background Media */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        {/* Placeholder image, replace with video or actual Figma asset */}
        <Image 
          src="/images/Hero-image.jpeg" 
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Figma Exact Gradient Overlay: rgba(0, 0, 0, 0.40) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </motion.div>

      {/* Header / Navbar */}
      <div className="relative z-50 w-full mx-auto">
        <Navbar />
      </div>

      {/* Massive Brand Headline (Top-center on Mobile, Bottom Absolute on Desktop) */}
      <div className="relative md:absolute z-20 md:bottom-0 md:left-1/2 md:-translate-x-1/2 w-full max-w-full flex justify-center items-end px-3 sm:px-padding-global md:pointer-events-none mt-auto md:mt-0 overflow-visible">
        <div className="overflow-hidden w-full text-center translate-y-[12%] md:translate-y-[14%] pt-4 pb-4 -mt-4 -mb-4">
          <TextReveal 
            as="h1"
            text="GO BEYOND"
            className="text-white font-[800] text-[clamp(2.5rem,14.5vw,16rem)] leading-none text-center uppercase tracking-[clamp(0.05rem,1.2vw,2.5rem)] whitespace-nowrap w-full select-none"
            delay={0.2}
          />
        </div>
      </div>

      {/* Hero Middle Content (Bottom on Mobile, Middle on Desktop) */}
      <div className="relative z-20 w-full max-w-[100rem] mx-auto flex flex-col justify-center items-center md:justify-start md:items-start gap-6 sm:gap-8 md:gap-8 px-4 sm:px-padding-global text-center md:text-left mt-4 sm:mt-6 mb-auto md:mt-0 md:mb-0">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-[0.9375rem] sm:text-[1rem] md:text-[1.5rem] font-[400] leading-[1.5] max-w-[33.75rem]"
        >
          Where rhythm meets high performance. Immersive boutique classes, master coaching, and an electric community built for the driven.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="primary" theme="dark" href="/schedule">
            BOOK YOUR FIRST CLASS
          </Button>
        </motion.div>
      </div>
      
      {/* Invisible spacer to maintain flex layout structure for the middle content on desktop */}
      <div className="h-[15vh] w-full hidden md:block pointer-events-none"></div>
    </section>
  );
}
