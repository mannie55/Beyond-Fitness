import LogoSection from "@/components/sections/LogoSection";

export default function TrustSection() {
  return (
    <section className="w-full bg-[#000000] border-t border-white/10 px-padding-global py-8 sm:py-10 md:py-16 flex flex-col justify-start items-center gap-5 sm:gap-6 lg:gap-10 overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-[90rem] mx-auto flex flex-col justify-start items-center px-2 sm:px-0">
        <h2 className="text-white/80 text-[0.9375rem] sm:text-[1.125rem] md:text-[length:var(--text-heading-5)] font-medium text-center max-w-2xl leading-[1.45] tracking-normal sm:tracking-tight">
          Shaping modern fitness culture across Africa, trusted by leading brands, athletes, and industry pioneers.
        </h2>
      </div>

      {/* Logos */}
      <div className="w-full max-w-[90rem] mx-auto">
        <LogoSection />
      </div>
      
    </section>
  );
}
