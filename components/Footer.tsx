"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission logic will connect here
  };

  return (
    <footer className="w-full bg-black text-white px-padding-global py-[var(--spacing-padding-section-medium)] flex flex-col items-center overflow-hidden font-sans">
      <div className="w-full max-w-[80rem] flex flex-col items-center gap-[5rem]">
        
        {/* Main Footer Contents */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-32">
          
          {/* Newsletter and Brand Section */}
          <div className="flex flex-col gap-6 max-w-[31.25rem] w-full">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/beyond_fitness_logo.svg"
                alt="Beyond Fitness Logo"
                width={55}
                height={55}
                className="h-[3.4375rem] w-[3.4375rem]"
              />
              <div className="flex flex-col justify-start items-start font-sans">
                <span className="text-white text-[length:var(--text-heading-4)] font-bold leading-[1.4]">
                  BEYOND
                </span>
                <span className="text-white text-[length:var(--text-text-regular)] font-normal leading-[1.5] tracking-wide">
                  FITNESS
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white text-[length:var(--text-text-regular)] font-normal leading-[1.5]">
              Join our community for exclusive event access and training insights.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-row items-center gap-4 w-full max-w-[24.0625rem]">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 min-w-0 h-[2.875rem] rounded-[1.875rem] border border-white/30 bg-white/5 px-3 py-2 text-[length:var(--text-text-medium)] leading-[1.5] text-white/60 placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-[6.5625rem] h-[2.875rem] rounded-full bg-white text-black font-bold text-[length:var(--text-text-regular)] leading-[1.5] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
              >
                JOIN
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-row flex-wrap justify-between gap-10 w-full">
            {/* CLASSES Column */}
            <div className="flex flex-col gap-4 min-w-[8.75rem]">
              <h3 className="text-white text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
                CLASSES
              </h3>
              <ul className="flex flex-col">
                {["Ride", "Lift", "Barre Pilates", "Sculpt", "HIIT Boxing"].map((link) => (
                  <li key={link} className="py-2">
                    <Link
                      href={`/classes/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/60 text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMUNITY Column */}
            <div className="flex flex-col gap-4 min-w-[8.75rem]">
              <h3 className="text-white text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
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
                  <li key={link} className="py-2">
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/60 text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOLLOW US Column */}
            <div className="flex flex-col gap-4 min-w-[8.75rem]">
              <h3 className="text-white text-[length:var(--text-text-medium)] font-semibold leading-[1.5] tracking-wider">
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
                  <li key={item.name} className="py-2">
                    <Link
                      href={`https://${item.name.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/60 text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-[1.5rem] w-[1.5rem]"
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
            <div className="select-none text-center text-white font-bold text-[20vw] text-[clamp(5rem,18vw,20rem)] leading-[0.8] tracking-[0.08em] tracking-[clamp(0.5rem,3vw,5.34rem)] indent-[0.08em] lg:indent-[5.34rem] whitespace-nowrap">
              BEYOND
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/15 pt-6 mt-1 md:pt-8 md:mt-2">
            <span className="text-white/60 text-[length:var(--text-text-regular)] font-normal leading-[1.5]">
              © 2026 Beyond Fitness. All rights reserved.
            </span>
            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((policy) => (
                <Link
                  key={policy}
                  href={`/${policy.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/50 text-[length:var(--text-text-regular)] font-normal leading-[1.5] hover:text-white transition-colors"
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
