"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

export interface ClassProgram {
  id: string;
  number: string;
  name: string;
  tag: string;
  headline: string;
  description: string;
  duration: string;
  intensity: string;
  focus: string;
  imageSrc: string;
  href: string;
}

export const CLASS_PROGRAMS: ClassProgram[] = [
  {
    id: "ride",
    number: "01",
    name: "RIDE",
    tag: "High Intensity Cardio",
    headline: "Beat-Driven Rhythm Cycling",
    description:
      "Step into our darkened arena powered by heavy bass and kinetic lighting. Master cadence sprints, resistance climbs, and synchronize your breath with the collective momentum of the pack.",
    duration: "45 Mins",
    intensity: "High Cadence",
    focus: "Cardio & Endurance",
    imageSrc: "/images/class-rides.jpg",
    href: "/classes",
  },
  {
    id: "lift",
    number: "02",
    name: "LIFT (Strength)",
    tag: "Strength & Hypertrophy",
    headline: "Progressive Barbell & Functional Power",
    description:
      "Barbells, dumbbells, and progressive overload principles. Master fundamental compound lifts under certified coach guidance to build dense, functional strength and athletic resilience.",
    duration: "50 Mins",
    intensity: "High Load",
    focus: "Raw Strength & Power",
    imageSrc: "/images/class-lift_strength.jpg",
    href: "/classes",
  },
  {
    id: "barre",
    number: "03",
    name: "BARRE PILATES",
    tag: "Precision & Core",
    headline: "Isometric Precision & Posture Control",
    description:
      "High-intensity micro-movements, deep core stabilization, and postural alignment. Build long, lean muscular definition while protecting your spine and joint longevity.",
    duration: "50 Mins",
    intensity: "Moderate Intensity",
    focus: "Core & Posture",
    imageSrc: "/images/class-pilates.jpg",
    href: "/classes",
  },
  {
    id: "boxing",
    number: "04",
    name: "HIIT BOXING",
    tag: "Combat Conditioning",
    headline: "Explosive Rounds & Bag Conditioning",
    description:
      "Dynamic combinations, fast footwork, and aqua bag drills. Relentless sweat rounds with boxing-inspired conditioning that sharpen reflexes, accelerate stamina, and melt stress.",
    duration: "45 Mins",
    intensity: "Maximum Heart Rate",
    focus: "Agility & Explosiveness",
    imageSrc: "/images/class-hit_boxing.jpg",
    href: "/classes",
  },
  {
    id: "sculpt",
    number: "05",
    name: "SCULPT",
    tag: "Conditioning & Flow",
    headline: "Total Body Tone & Active Recovery",
    description:
      "High-rep resistance band sequencing combined with myofascial release and joint mobility flows. Keep your athletic engine primed and resilient for every session.",
    duration: "45 Mins",
    intensity: "Moderate Flow",
    focus: "Toning & Mobility",
    imageSrc: "/images/class-sculpts.jpg",
    href: "/classes",
  },
];

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  },
  exit: { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

interface ClassSectionProps {
  programs?: ClassProgram[];
  title?: string;
  subtitle?: string;
}

export default function ClassSection({
  programs = CLASS_PROGRAMS,
  title = "PROGRAMS ENGINEERED FOR IMPACT",
  subtitle = "From high-cadence rhythm cycling to raw barbell strength and sculpting barre, find the discipline that sets you on fire.",
}: ClassSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % programs.length;
      setActiveTab(nextIndex);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + programs.length) % programs.length;
      setActiveTab(prevIndex);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveTab(programs.length - 1);
    }
  };

  return (
    <section 
      id="classes"
      aria-label="Fitness Classes and Programs"
      className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-start px-padding-global py-padding-section-large overflow-hidden relative font-sans"
    >
      <div className="w-full max-w-[100rem] flex flex-col items-start gap-8 sm:gap-10 md:gap-[3.5rem] relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-8 lg:gap-8">
          <div className="flex flex-col items-start text-left gap-5 sm:gap-6 md:gap-[1.5rem] max-w-[46rem]">
            <TextReveal 
              as="h2" 
              text={title} 
              className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight"
            />

            {/* Brand Accent Bar */}
            <div className="w-[3rem] h-[0.25rem] bg-[var(--color-dandelion)] rounded-full" />

            <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button variant="secondary" theme="light" href="/classes" className="w-full sm:w-auto">
              VIEW SCHEDULE
            </Button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP ACCORDION STRIP (lg and up) - Layout 351                           */}
        {/* ========================================================================= */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Class Discipline Selection"
          className="hidden lg:flex w-full min-h-[36.25rem] xl:min-h-[40rem] bg-[#F2F2F2] border border-[#0D0B05]/15 overflow-hidden"
        >
          {programs.map((program, index) => {
            const isSelected = activeTab === index;

            return (
              <div
                key={program.id}
                role="tab"
                id={`tab-${program.id}`}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${program.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`group transition-all duration-500 ease-in-out flex flex-row overflow-hidden select-none cursor-pointer border-r border-[#0D0B05]/15 last:border-r-0 ${
                  isSelected
                    ? "flex-1 bg-white"
                    : "w-[5.25rem] xl:w-[6.25rem] shrink-0 bg-[#F2F2F2] hover:bg-black/[0.04]"
                }`}
              >
                {/* Feature Tab Vertical Strip */}
                <div
                  className={`w-[5.25rem] xl:w-[6.25rem] shrink-0 py-8 px-3 xl:px-4 flex flex-col justify-between items-center transition-colors duration-300 ${
                    isSelected
                      ? "border-r border-[#0D0B05]/10 bg-white"
                      : "bg-[#F2F2F2]"
                  }`}
                >
                  {/* Clean Editorial Number */}
                  <div className="flex flex-col items-center pt-1">
                    <span
                      className={`text-3xl lg:text-[2.1rem] xl:text-[2.65rem] font-black tracking-tighter leading-none transition-all duration-300 font-sans tabular-nums ${
                        isSelected 
                          ? "text-[#0D0B05] scale-105" 
                          : "text-[#0D0B05]/30 group-hover:text-[#0D0B05]/75 group-hover:scale-105"
                      }`}
                    >
                      {program.number}
                    </span>
                  </div>

                  {/* Vertical Discipline Name */}
                  <span
                    className={`[writing-mode:vertical-rl] rotate-180 text-xs sm:text-sm xl:text-base font-bold tracking-[0.22em] uppercase transition-colors whitespace-nowrap py-6 ${
                      isSelected 
                        ? "text-[#0D0B05]" 
                        : "text-[#0D0B05]/50 group-hover:text-[#0D0B05]/90"
                    }`}
                  >
                    {program.name}
                  </span>

                  {/* Bottom Indicator Dash */}
                  <div 
                    className={`w-4 h-[0.125rem] rounded-full transition-colors duration-300 ${
                      isSelected ? "bg-[#0D0B05]" : "bg-[#0D0B05]/15 group-hover:bg-[#0D0B05]/40"
                    }`}
                  />
                </div>

                {/* Expanded Content Panel */}
                <AnimatePresence mode="wait">
                  {isSelected && (
                    <motion.div
                      key={`tabpanel-${program.id}`}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      id={`tabpanel-${program.id}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${program.id}`}
                      className="flex-1 p-8 lg:p-10 xl:p-14 flex flex-col justify-between gap-8 bg-white min-w-0 relative overflow-hidden"
                    >
                      {/* Subtle Background Watermark Number */}
                    <span 
                      aria-hidden="true"
                      className="absolute top-4 right-8 text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-black text-[#0D0B05]/[0.035] tracking-tighter leading-none select-none pointer-events-none font-sans"
                    >
                      {program.number}
                    </span>

                    <motion.div 
                      variants={contentVariants} 
                      initial="hidden" 
                      animate="show" 
                      exit="exit" 
                      className="grid grid-cols-12 gap-8 xl:gap-12 items-center h-full relative z-10"
                    >
                      
                      {/* Left: Text, Tags, Specs & CTA (7 Cols) */}
                      <div className="col-span-7 flex flex-col justify-center items-start gap-5 xl:gap-6">
                        
                        {/* Clean Tag without pill container or dot */}
                        <motion.span variants={itemVariants} className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0D0B05]/60">
                          {program.tag}
                        </motion.span>

                        {/* Program Headline */}
                        <motion.h3 variants={itemVariants} className="text-[#0D0B05] text-2xl sm:text-3xl xl:text-[2.25rem] font-semibold uppercase leading-[1.2] tracking-tight">
                          {program.headline}
                        </motion.h3>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-[var(--color-neutral-dark)] text-sm sm:text-base leading-relaxed max-w-[34rem]">
                          {program.description}
                        </motion.p>

                        {/* Specs Strip */}
                        <motion.div variants={itemVariants} className="w-full flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-2 border-t border-b border-[#0D0B05]/10">
                          <div className="flex flex-col">
                            <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                              Duration
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0D0B05]">
                              {program.duration}
                            </span>
                          </div>

                          <div className="w-[0.0625rem] h-6 bg-[#0D0B05]/15" />

                          <div className="flex flex-col">
                            <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                              Intensity
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0D0B05]">
                              {program.intensity}
                            </span>
                          </div>

                          <div className="w-[0.0625rem] h-6 bg-[#0D0B05]/15" />

                          <div className="flex flex-col">
                            <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                              Focus
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0D0B05]">
                              {program.focus}
                            </span>
                          </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                          <Button variant="primary" theme="light" href={program.href}>
                            BOOK CLASS
                          </Button>
                          <Button variant="secondary" theme="light" href="/classes">
                            EXPLORE DETAILS
                          </Button>
                        </motion.div>

                      </div>

                      {/* Right: High-Res Image (5 Cols) */}
                      <motion.div variants={itemVariants} className="col-span-5 relative w-full h-[20rem] xl:h-[23.75rem] overflow-hidden bg-black/5 border border-[#0D0B05]/10">
                        <ParallaxImage
                          src={program.imageSrc}
                          alt={`${program.name} class session`}
                          className="w-full h-full"
                          imageClassName="transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1280px) 40vw, 480px"
                          priority={index === 0}
                          parallaxOffset={10}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET ACCORDION (< lg)                                          */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col w-full bg-[#F2F2F2] border border-[#0D0B05]/15 divide-y divide-[#0D0B05]/15">
          {programs.map((program, index) => {
            const isSelected = activeTab === index;

            return (
              <div key={program.id} className="flex flex-col bg-white">
                
                {/* Accordion Row Header */}
                <button
                  onClick={() => setActiveTab(isSelected ? -1 : index)}
                  aria-expanded={isSelected}
                  aria-controls={`mobile-pane-${program.id}`}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 transition-colors text-left cursor-pointer ${
                    isSelected ? "bg-white" : "bg-[#F2F2F2] hover:bg-black/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Clean Mobile Number */}
                    <span className={`text-xl sm:text-2xl font-black font-sans tracking-tight tabular-nums transition-colors ${
                      isSelected ? "text-[#0D0B05]" : "text-[#0D0B05]/40"
                    }`}>
                      {program.number}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0D0B05] uppercase tracking-wider">
                      {program.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-semibold text-[#0D0B05]/60 uppercase tracking-wider">
                      {program.tag}
                    </span>
                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-bold text-sm transition-colors ${
                      isSelected 
                        ? "border-[#0D0B05] bg-[#0D0B05] text-white" 
                        : "border-[#0D0B05]/20 bg-transparent text-[#0D0B05]"
                    }`}>
                      {isSelected ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div 
                      key={`mobile-pane-${program.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      id={`mobile-pane-${program.id}`}
                      className="border-t border-[#0D0B05]/10 bg-white overflow-hidden"
                    >
                      <motion.div 
                        variants={contentVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="p-5 sm:p-6 flex flex-col gap-5"
                      >
                        {/* Image */}
                    <motion.div variants={itemVariants} className="relative w-full aspect-[16/10] overflow-hidden bg-black/5 border border-[#0D0B05]/10">
                      <ParallaxImage
                        src={program.imageSrc}
                        alt={`${program.name} class`}
                        className="w-full h-full"
                        sizes="100vw"
                        parallaxOffset={8}
                      />
                    </motion.div>

                    <div className="flex flex-col gap-3">
                      {/* Clean Tag without pill container or dot */}
                      <motion.span variants={itemVariants} className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0D0B05]/60">
                        {program.tag}
                      </motion.span>

                      <motion.h3 variants={itemVariants} className="text-[#0D0B05] text-xl sm:text-2xl font-semibold uppercase leading-snug tracking-tight">
                        {program.headline}
                      </motion.h3>

                      <motion.p variants={itemVariants} className="text-[var(--color-neutral-dark)] text-xs sm:text-sm leading-relaxed">
                        {program.description}
                      </motion.p>
                    </div>

                    {/* Specs */}
                    <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#0D0B05]/10 text-center">
                      <div className="flex flex-col">
                        <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                          Duration
                        </span>
                        <span className="text-xs font-bold text-[#0D0B05]">
                          {program.duration}
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-r border-[#0D0B05]/10">
                        <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                          Intensity
                        </span>
                        <span className="text-xs font-bold text-[#0D0B05]">
                          {program.intensity}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.65rem] uppercase tracking-wider text-[#0D0B05]/50 font-semibold">
                          Focus
                        </span>
                        <span className="text-xs font-bold text-[#0D0B05]">
                          {program.focus}
                        </span>
                      </div>
                    </motion.div>

                      {/* Button */}
                      <motion.div variants={itemVariants}>
                        <Button variant="primary" theme="light" href={program.href} className="w-full">
                          BOOK THIS CLASS
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
