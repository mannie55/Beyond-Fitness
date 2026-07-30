import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission logic will connect here
  };

  return (
    <footer className="w-full bg-black text-white px-padding-global py-padding-section-large flex flex-col items-center">
      <div className="w-full max-w-container-large flex flex-col items-center gap-[4rem] md:gap-[5rem]">
        
        {/* Main Footer Contents */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-[8rem]">
          
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
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-medium text-[1.5rem] tracking-tight">
                  BEYOND
                </span>
                <span className="text-text-small font-light tracking-[0.2em] text-white/60">
                  FITNESS
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-small text-white/60 leading-relaxed">
              Join our community for exclusive event access and training insights.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 max-w-[264px] rounded-[30px] border border-white/30 bg-white/5 px-[12px] py-[8px] text-text-regular text-white placeholder-white/60 focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-[105px] h-[46px] rounded-[100px] bg-white text-black font-sans font-bold text-text-small transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                JOIN
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* CLASSES Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-regular font-semibold tracking-wider text-white">
                CLASSES
              </h3>
              <ul className="flex flex-col gap-2">
                {["Ride", "Lift", "Barre Pilates", "Sculpt", "HIIT Boxing"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/classes/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-text-small text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMMUNITY Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-text-regular font-semibold tracking-wider text-white">
                COMMUNITY
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  "Member Stories",
                  "On Tour",
                  "Pink Walk",
                  "Corporate Wellness",
                  "About",
                ].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-text-small text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOLLOW US Column */}
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h3 className="text-text-regular font-semibold tracking-wider text-white">
                FOLLOW US
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "Facebook", icon: "/icons/facebook.svg" },
                  { name: "Instagram", icon: "/icons/instagram.svg" },
                  { name: "LinkedIn", icon: "/icons/linkedin.svg" },
                  { name: "Youtube", icon: "/icons/youtube.svg" },
                  { name: "X", icon: "/icons/x.svg" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`https://${item.name.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-small text-white/60 hover:text-white transition-colors"
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
        <div className="w-full select-none text-center font-sans font-bold text-white tracking-[0.38em] text-heading-1 leading-none mt-[2rem]">
          BEYOND
        </div>

        {/* Divider and Credits */}
        <div className="w-full flex flex-col gap-[2rem] border-t border-white/10 pt-[2rem]">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-text-small text-white/60">
            <span>© 2026 Beyond Fitness. All rights reserved.</span>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((policy) => (
                <Link
                  key={policy}
                  href={`/${policy.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white transition-colors underline"
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
