"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission logic will connect here
  };

  return (
    <footer className="w-full bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center overflow-hidden font-sans">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-20">
        
        {/* Main Footer Contents */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-[128px] lg:gap-32">
          
          {/* Newsletter and Brand Section */}
          <div className="flex flex-col gap-6 max-w-[500px] w-full">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/icons/beyond_fitness_logo.svg"
                alt="Beyond Fitness Logo"
                width={55}
                height={55}
                className="h-[55px] w-[55px]"
              />
              <div className="flex flex-col justify-start items-start font-sans">
                <span className="text-white text-[24px] font-bold leading-[33.6px]">
                  BEYOND
                </span>
                <span className="text-white text-[14px] font-normal leading-[21px] tracking-wide">
                  FITNESS
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white text-[14px] font-normal leading-[21px]">
              Join our community for exclusive event access and training insights.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full sm:w-[264px] h-[40px] rounded-[30px] border border-white/30 bg-white/5 px-3 py-2 text-[16px] leading-[24px] text-white/60 placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-[105px] h-[46px] rounded-full bg-white text-black font-bold text-[14px] leading-[21px] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
              >
                JOIN
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-row flex-wrap justify-between gap-[40px] w-full">
            {/* CLASSES Column */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <h3 className="text-white text-[16px] font-semibold leading-[24px] tracking-wider">
                CLASSES
              </h3>
              <ul className="flex flex-col">
                {["Ride", "Lift", "Barre Pilates", "Sculpt", "HIIT Boxing"].map((link) => (
                  <li key={link} className="py-2">
                    <Link
                      href={`/classes/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/60 text-[14px] font-normal leading-[21px] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMUNITY Column */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <h3 className="text-white text-[16px] font-semibold leading-[24px] tracking-wider">
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
                      className="text-white/60 text-[14px] font-normal leading-[21px] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOLLOW US Column */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <h3 className="text-white text-[16px] font-semibold leading-[24px] tracking-wider">
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
                      className="flex items-center gap-3 text-white/60 text-[14px] font-normal leading-[21px] hover:text-white transition-colors"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-[24px] w-[24px]"
                      />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Decorative Typography */}
        <div className="w-full select-none text-center text-white font-bold text-[10vw] lg:text-[225px] leading-none lg:leading-[270px] tracking-[0.38em] lg:tracking-[85.5px] pl-[0.38em] lg:pl-[85.5px]">
          BEYOND
        </div>

        {/* Divider and Credits */}
        <div className="w-full flex flex-col gap-8 border-t border-white/15 pt-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-white/60 text-[14px] font-normal leading-[21px]">
              © 2026 Beyond Fitness. All rights reserved.
            </span>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((policy) => (
                <Link
                  key={policy}
                  href={`/${policy.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/50 text-[14px] font-normal leading-[21px] hover:text-white transition-colors underline"
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
