"use client";

import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission logic will connect here
  };

  return (
    <footer className="w-full bg-black text-white px-padding-global py-10 sm:py-14 md:py-[var(--spacing-padding-section-medium)] flex flex-col items-center overflow-hidden font-sans">
      <div className="w-full max-w-[100rem] flex flex-col items-center gap-10 sm:gap-14 md:gap-[5rem]">
        
        {/* Main Footer Contents */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-16 lg:gap-32">
          
          {/* Newsletter and Brand Section */}
          <div className="flex flex-col gap-4 sm:gap-6 max-w-[31.25rem] w-full">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/icons/beyond_fitness_logo.svg"
                alt="Beyond Fitness Logo"
                width={55}
                height={55}
                className="h-[2.75rem] w-[2.75rem] sm:h-[3.4375rem] sm:w-[3.4375rem]"
              />
              <div className="flex flex-col justify-start items-start font-sans">
                <span className="text-white text-xl sm:text-[length:var(--text-heading-4)] font-bold leading-[1.2] sm:leading-[1.4]">
                  BEYOND
                </span>
                <span className="text-white text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.3] sm:leading-[1.5] tracking-wide">
                  FITNESS
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5]">
              Join our community for exclusive event access and training insights.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-row items-center gap-2.5 sm:gap-4 w-full max-w-[24.0625rem]">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 min-w-0 h-[2rem] sm:h-[2.75rem] rounded-none border border-white/30 bg-white/5 px-3 py-1.5 text-xs sm:text-[length:var(--text-text-medium)] leading-[1.5] text-white/60 placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-[5.5rem] sm:w-[6.5625rem] h-[2rem] sm:h-[2.75rem] rounded-none bg-white text-black font-bold text-xs sm:text-[length:var(--text-text-regular)] leading-[1.5] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
              >
                JOIN
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-row flex-wrap justify-between gap-8 sm:gap-10 w-full">
            {/* CLASSES Column */}
            <div className="flex flex-col gap-3 sm:gap-4 min-w-[7.5rem] sm:min-w-[8.75rem]">
              <h3 className="text-white text-xs sm:text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
                CLASSES
              </h3>
              <ul className="flex flex-col">
                {["Ride", "Lift", "Barre Pilates", "Sculpt", "HIIT Boxing"].map((link) => (
                  <li key={link} className="py-1.5 sm:py-2">
                    <Link
                      href={`/classes/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/60 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMUNITY Column */}
            <div className="flex flex-col gap-3 sm:gap-4 min-w-[7.5rem] sm:min-w-[8.75rem]">
              <h3 className="text-white text-xs sm:text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
                COMMUNITY
              </h3>
              <ul className="flex flex-col">
                {[
                  "Member Stories",
                  "On Tour",
                  "Pink Walk",
                  "Corporate Wellness",
                  "About",
                ].map((link) => (
                  <li key={link} className="py-1.5 sm:py-2">
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/60 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOLLOW US Column */}
            <div className="flex flex-col gap-3 sm:gap-4 min-w-[7.5rem] sm:min-w-[8.75rem]">
              <h3 className="text-white text-xs sm:text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
                FOLLOW US
              </h3>
              <ul className="flex flex-col">
                {[
                  { name: "Facebook", icon: "/icons/facebook.svg" },
                  { name: "Instagram", icon: "/icons/instagram.svg" },
                  { name: "LinkedIn", icon: "/icons/linkedin.svg" },
                  { name: "Youtube", icon: "/icons/youtube.svg" },
                  { name: "X", icon: "/icons/x.svg" },
                ].map((item) => (
                  <li key={item.name} className="py-1.5 sm:py-2">
                    <Link
                      href={`https://${item.name.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 sm:gap-3 text-white/60 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-[1.25rem] w-[1.25rem] sm:h-[1.5rem] sm:w-[1.5rem]"
                      />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Typography and Credits */}
        <div className="w-full flex flex-col w-full">
          
          {/* Massive Decorative Typography */}
          <div className="w-full flex justify-center overflow-visible relative z-10">
            <TextReveal 
              as="div"
              text="BEYOND"
              className="select-none text-center text-white font-bold text-[20vw] text-[clamp(4.5rem,18vw,20rem)] leading-[0.8] tracking-[0.08em] tracking-[clamp(0.4rem,3vw,5.34rem)] indent-[0.08em] lg:indent-[5.34rem] whitespace-nowrap"
              triggerSelector="#footer-ghost"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 border-t border-white/15 pt-4 sm:pt-6 md:pt-8 mt-1 md:mt-2">
            <span className="text-white/60 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] text-center md:text-left">
              © 2026 Beyond Fitness. All rights reserved.
            </span>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((policy) => (
                <Link
                  key={policy}
                  href={`/${policy.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/50 text-xs sm:text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                >
                  {policy}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
