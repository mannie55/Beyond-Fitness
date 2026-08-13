"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "./ui/Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Only animate on desktop
      mm.add("(min-width: 64rem)", () => {
        gsap.to(navContainerRef.current, {
          width: "65vw",
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: 500,
            scrub: 1.5, // Adds a very natural, smooth 1.5s lag to the scrub so it doesn't snap to wheel ticks
          }
        });
      });

      // Smart Auto-Hide Navbar (Desktop/Tablet only, >= 768px)
      mm.add("(min-width: 48rem)", () => {
        let isHidden = false;
        let lastScroll = 0;
        
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const scrollY = self.scroll();
            const scrollDiff = scrollY - lastScroll;
            
            // Require at least 250px of scroll before hiding, giving space for the desktop animation
            if (scrollY > 250) {
              if (scrollDiff > 12 && !isHidden) {
                // Scrolled down past threshold -> hide
                isHidden = true;
                gsap.to(headerRef.current, { yPercent: -150, duration: 0.4, ease: "power3.inOut", overwrite: "auto" });
                lastScroll = scrollY;
              } else if (scrollDiff < -12 && isHidden) {
                // Scrolled up past threshold -> show
                isHidden = false;
                gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
                lastScroll = scrollY;
              } else if ((scrollDiff > 0 && isHidden) || (scrollDiff < 0 && !isHidden)) {
                // Reset the anchor if moving further into the current state
                lastScroll = scrollY;
              }
            } else {
              // Always show at the top of the page
              if (isHidden) {
                isHidden = false;
                gsap.to(headerRef.current, { yPercent: 0, duration: 0.4, ease: "power3.out", overwrite: "auto" });
              }
              lastScroll = scrollY;
            }
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { name: "CLASSES", href: "/classes" },
    { name: "SCHEDULE", href: "/schedule" },
    { name: "PRICING", href: "/pricing" },
  ];

  const communityColumn = [
    { name: "STORIES", href: "/community/member-stories", desc: "Real member transformations from the studio floor" },
    { name: "BEYOND ON TOUR", href: "/community/on-tour", desc: "Our signature event series across the city" },
    { name: "BEYOND PINK WALK", href: "/community/pink-walk", desc: "Join the movement for breast cancer awareness" },
    { name: "EVENTS", href: "/community", desc: "All upcoming community gatherings and workshops" },
  ];

  const aboutColumn = [
    { name: "CORPORATE", href: "/corporate-wellness", desc: "Wellness programs for high-performance teams" },
    { name: "ABOUT", href: "/about", desc: "The story behind the studio and our mission" },
    { name: "CONTACT", href: "/contact", desc: "Find us in Victoria Island, Lagos" },
  ];

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95, transformOrigin: "top" },
    show: {
      opacity: 1, 
      y: 0,
      scaleY: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05, 
        delayChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0, 
      y: -5,
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      {/* Spacer to preserve document flow since the header is now fixed */}
      <div className="w-full h-[3.75rem] md:h-[4.5rem] pointer-events-none" />

      {/* Fixed Sticky Header */}
      <header ref={headerRef} className="fixed top-0 left-0 right-0 w-full pt-2 sm:pt-3 md:pt-4 px-3 sm:px-4 md:px-[2rem] h-auto flex flex-col z-[100] pointer-events-none font-sans text-[#0D0B05]">
        {/* Sharp Navbar Body Card */}
        <div 
          ref={navContainerRef}
          className="w-full max-w-[100rem] mx-auto h-[3.75rem] md:h-[4.5rem] px-3 sm:px-4 md:px-6 bg-white border border-black/10 rounded-none flex justify-between items-center gap-4 lg:gap-8 lg:min-w-max relative shadow-[0_4px_20px_rgba(0,0,0,0.05)] z-[110] pointer-events-auto"
        >
          {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 select-none group">
          <div className="w-[2.625rem] h-[2.625rem] max-[400px]:w-[2.125rem] max-[400px]:h-[2.125rem] md:w-[3.4375rem] md:h-[3.4375rem] relative overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g clipPath="url(#clip_nav_logo)">
                {/* Outer circular and structural paths */}
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M17.5816 36.102C18.2479 35.9524 17.7349 35.2903 17.7799 34.8418C17.7799 29.4138 17.7799 23.9833 17.7772 18.5553C17.7217 17.9626 17.9332 17.5034 18.4119 17.175C18.1924 16.9614 18.0258 16.7078 17.9068 16.4168C17.8645 15.8801 17.8909 15.3461 17.9861 14.8121C17.9782 14.5905 17.8724 14.4357 17.6662 14.3529C18.4198 13.4612 22.4602 14.1206 23.6739 13.9151C23.8378 13.9231 23.9674 13.8617 24.0679 13.7335C24.1445 10.9808 24.1736 8.22549 24.1498 5.46747C24.1869 5.20048 24.1075 4.98422 23.9171 4.81335C22.9494 4.93349 21.9948 5.12306 21.0482 5.37937C4.26785 10.2199 -1.85619 30.8529 9.89214 44.077C26.3181 61.9039 54.9763 47.0646 50.4309 23.4039C48.3869 13.5386 40.0893 5.76116 30.147 4.66917C28.3965 4.61845 28.3039 2.30097 30.2765 2.34102C44.997 3.92961 55.7167 18.51 52.689 33.2532C46.4513 61.2898 7.83228 60.9694 1.96473 32.9194C-0.740319 17.6956 10.0719 3.64126 25.2551 2.33301C26.1647 2.43179 26.5878 2.94442 26.5217 3.87087C26.5164 7.07209 26.5138 10.2733 26.5138 13.4745C26.49 13.616 26.527 13.7388 26.6275 13.8376C28.0633 13.9177 29.5018 13.9684 30.9455 13.9925C35.5095 14.5265 38.5715 18.5687 37.1171 23.1476C36.8263 23.791 36.5698 24.4478 36.3477 25.118C35.8506 25.7347 35.3191 26.3168 34.7558 26.8587C34.7347 27.1151 36.1732 27.7104 36.3477 28.0308C39.9518 32.0864 40.5441 36.0486 36.3609 40.0347C35.097 41.0733 29.9301 42.8114 28.9465 41.1481C28.3145 39.2685 30.422 39.4847 31.5563 39.4153C40.1263 38.1177 37.7174 27.9908 30.0227 28.2364C28.7957 28.1029 28.333 26.8027 29.4198 26.0711C31.6436 25.5825 33.0397 25.6493 34.5734 23.5881C36.7417 20.16 34.272 16.5983 30.5436 16.2993C29.396 16.2833 28.2458 16.2752 27.0982 16.2752C26.7518 16.2245 26.5587 16.366 26.5164 16.6998C26.5085 24.616 26.5164 32.5323 26.5402 40.4512C26.5534 40.8811 26.4979 41.2976 26.3736 41.7034C22.8224 42.4029 18.5599 39.5915 17.5816 36.102ZM19.7631 35.2262C19.9799 36.1901 20.4347 37.0257 21.1222 37.7306C21.9128 38.4915 22.8409 38.9828 23.9092 39.2017C24.0652 39.1483 24.1498 39.0362 24.1683 38.868C24.2027 31.3789 24.1842 23.8925 24.1155 16.4061C24.0044 16.2672 23.8616 16.2058 23.6845 16.2245C22.5289 16.2459 21.376 16.2539 20.2205 16.2459C19.9852 16.2192 19.8001 16.2993 19.6652 16.4835C19.6573 22.2478 19.6494 28.0121 19.6441 33.7738C19.6361 34.2624 19.6758 34.7483 19.7631 35.2262ZM24.2582 36.3209C24.2768 37.1672 24.2873 38.0136 24.2873 38.86C24.3006 39.0015 24.3614 39.1109 24.4777 39.1857C24.6073 39.0121 24.6549 38.8119 24.6205 38.585C24.5729 31.3736 24.5703 24.1595 24.6126 16.9481C24.6443 16.7291 24.602 16.5289 24.4857 16.3553C24.2292 16.5636 24.3746 17.45 24.2926 17.7757C24.3561 23.9592 24.3455 30.1401 24.2582 36.3209Z" 
                  className="fill-[#CBAA4C] group-hover:fill-black stroke-[#FED55F] group-hover:stroke-black transition-colors duration-300"
                  strokeWidth="0.5"
                />
                {/* Vertical letter-bar components */}
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M17.6661 14.3535C17.8723 14.4363 17.9781 14.5911 17.986 14.8127C17.8909 15.3467 17.8644 15.8807 17.9067 16.4174C18.0257 16.7078 18.1923 16.962 18.4118 17.175C17.9332 17.504 17.7216 17.9632 17.7772 18.5559C17.7798 23.9839 17.7798 29.4144 17.7798 34.8424C17.7348 35.2909 18.2478 35.953 17.5815 36.1025C17.4466 35.5125 17.3832 34.9144 17.3884 34.3084C17.399 28.0768 17.3937 21.8479 17.3699 15.6164C17.3435 15.1625 17.4413 14.7407 17.6661 14.3535Z" 
                  className="fill-[#CBAA4C] group-hover:fill-black transition-colors duration-300"
                />
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M24.2581 36.321C24.3453 30.1402 24.3559 23.9594 24.2924 17.7759C24.3744 17.4501 24.229 16.5637 24.4855 16.3555C24.6018 16.529 24.6441 16.7293 24.6124 16.9482C24.5701 24.1596 24.5727 31.3737 24.6203 38.5851C24.6547 38.812 24.6071 39.0123 24.4775 39.1858C24.3612 39.111 24.3004 39.0016 24.2871 38.8601C24.2871 38.0137 24.2766 37.1674 24.2581 36.321Z" 
                  className="fill-[#CBAA4C] group-hover:fill-black transition-colors duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip_nav_logo">
                  <rect width="55" height="55" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-start items-start font-sans">
            <span className="text-black text-sm max-[400px]:text-xs sm:text-base md:text-heading-4 font-bold leading-[1.2]">
              BEYOND
            </span>
            <span className="text-black text-[0.65rem] max-[400px]:text-[0.55rem] sm:text-xs md:text-text-regular font-normal leading-[1.3] tracking-wide">
              FITNESS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-regular font-medium leading-[1.5] transition-colors duration-300 text-[#0D0B05] hover:text-[#CBAA4C]"
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown Community Link Trigger (Fills height to align bottom with header) */}
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setIsCommunityDropdownOpen(true)}
            onMouseLeave={() => setIsCommunityDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-text-regular font-medium leading-[1.5] cursor-pointer transition-colors duration-300 text-[#0D0B05] hover:text-[#CBAA4C] py-2">
              <span>COMMUNITY</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className={`transition-transform duration-200 ${isCommunityDropdownOpen ? "rotate-180" : ""}`}
              >
                <path 
                  d="M5.7 8.7L12 15L18.3 8.7" 
                  stroke="currentColor" 
                  strokeWidth="1.99" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Community Mega Menu Dropdown (Centered relative to the header) */}
            {isCommunityDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[49.625rem] pt-3 z-50">
                <div className="w-full bg-white border border-black/10 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div className="w-full px-16 py-8 flex justify-center items-start gap-4 font-sans">
                    {/* Column 1: OUR COMMUNITY */}
                    <div className="flex-1 max-w-[16.75rem] flex flex-col gap-4">
                      <span className="text-[#0D0B05] text-text-small font-semibold tracking-widest uppercase">
                        OUR COMMUNITY
                      </span>
                      <div className="flex flex-col gap-2">
                        {communityColumn.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsCommunityDropdownOpen(false)}
                            className="group p-2 rounded-[0.25rem] transition-all duration-300 flex flex-col gap-3 hover:bg-[#FEF6DF]"
                          >
                            <span className="text-[#0D0B05] text-text-regular font-[550] leading-[1.5] uppercase">
                              {item.name}
                            </span>
                            <span className="text-dandelion-darkest text-text-regular leading-[1.5]">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: ABOUT US */}
                    <div className="flex-1 max-w-[19.125rem] flex flex-col gap-4">
                      <span className="text-[#0D0B05] text-text-small font-semibold tracking-widest uppercase">
                        ABOUT US
                      </span>
                      <div className="flex flex-col gap-2">
                        {aboutColumn.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsCommunityDropdownOpen(false)}
                            className="group p-2 rounded-[0.25rem] transition-all duration-300 flex flex-col gap-3 hover:bg-[#FEF6DF]"
                          >
                            <span className="text-[#0D0B05] text-text-regular font-[550] leading-[1.5] uppercase">
                              {item.name}
                            </span>
                            <span className="text-dandelion-darkest text-text-regular leading-[1.5]">
                              {item.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Action CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              theme="light"
              href="/schedule"
            >
              VIEW SCHEDULE
            </Button>
          </div>

          {/* Mobile Action CTA Button */}
          <div className="block lg:hidden">
            <Button
              variant="primary"
              theme="light"
              href="/schedule"
              textWidth="w-auto !text-[0.65rem] max-[400px]:!text-[0.55rem] sm:!text-xs"
            >
              VIEW SCHEDULE
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setOpenAccordion(null);
            }}
            className="block lg:hidden focus:outline-none cursor-pointer text-black hover:text-[#CBAA4C] relative z-[120] w-7 h-7 max-[400px]:w-6 max-[400px]:h-6 flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <span className={`absolute h-[2px] w-6 max-[400px]:w-5 bg-current transform transition-transform duration-500 ease-in-out rounded-sm ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-[2px] w-6 max-[400px]:w-5 bg-current transform transition-transform duration-500 ease-in-out rounded-sm ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>

        {/* Mobile Dropdown Extension */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-[calc(100%+0.5rem)] left-[-0.0625rem] right-[-0.0625rem] bg-white border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-[100] flex flex-col p-5 sm:p-6 lg:hidden overflow-y-auto max-h-[calc(100dvh-6rem)]"
            >
            <div className="flex flex-col gap-4 w-full">
              <nav className="flex flex-col gap-1 w-full">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg tracking-tight font-bold leading-[1.2] py-2.5 border-b hover:text-[#CBAA4C] transition-colors duration-300 border-black/10 uppercase"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* COMMUNITY ACCORDION */}
                <motion.div variants={menuItemVariants} className="flex flex-col border-b border-black/10">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'community' ? null : 'community')}
                    className="flex items-center justify-between text-lg tracking-tight font-bold leading-[1.2] py-2.5 hover:text-[#CBAA4C] transition-colors duration-300 w-full text-left cursor-pointer uppercase"
                  >
                    COMMUNITY
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${openAccordion === 'community' ? 'rotate-180' : ''}`}>
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out w-full ${openAccordion === 'community' ? 'grid-rows-[1fr] opacity-100 pb-3' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden flex flex-col gap-2 pt-1 pl-2 border-l-2 border-[#CBAA4C]/20 ml-2">
                      {communityColumn.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group transition-all duration-300 flex flex-col py-1"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#CBAA4C] text-xs font-bold italic opacity-80">0{index + 1}</span>
                            <span className="text-[#0D0B05] text-sm font-bold tracking-wide uppercase group-hover:text-[#CBAA4C] transition-colors">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* ABOUT US ACCORDION */}
                <motion.div variants={menuItemVariants} className="flex flex-col border-b border-black/10">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'about' ? null : 'about')}
                    className="flex items-center justify-between text-lg tracking-tight font-bold leading-[1.2] py-2.5 hover:text-[#CBAA4C] transition-colors duration-300 w-full text-left cursor-pointer uppercase"
                  >
                    ABOUT US
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={`transition-transform duration-300 ${openAccordion === 'about' ? 'rotate-180' : ''}`}>
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out w-full ${openAccordion === 'about' ? 'grid-rows-[1fr] opacity-100 pb-3' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden flex flex-col gap-2 pt-1 pl-2 border-l-2 border-[#CBAA4C]/20 ml-2">
                      {aboutColumn.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group transition-all duration-300 flex flex-col py-1"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[#CBAA4C] text-xs font-bold italic opacity-80">0{index + 1}</span>
                            <span className="text-[#0D0B05] text-sm font-bold tracking-wide uppercase group-hover:text-[#CBAA4C] transition-colors">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </nav>

              {/* Mobile CTA */}
              <motion.div variants={menuItemVariants} className="flex justify-center mt-2 w-full pt-4">
                <Button 
                  variant="primary" 
                  theme="light" 
                  href="/schedule" 
                  width="w-full"
                  className="flex justify-center"
                >
                  BOOK YOUR FIRST CLASS
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
}
