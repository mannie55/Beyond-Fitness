import LogoSection from "@/components/sections/LogoSection";
import TextReveal from "@/components/ui/TextReveal";

export default function TrustSection() {
  return (
    <section id="numbers" className="w-full bg-[#000000] border-t border-white/10 px-padding-global py-padding-section-small flex flex-col justify-start items-center gap-8 sm:gap-10 lg:gap-10 overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-[90rem] mx-auto flex flex-col justify-start items-center px-2 sm:px-0">
        <TextReveal
          as="h2"
          text="Shaping modern fitness culture across Africa, trusted by leading brands, athletes, and industry pioneers."
          className="text-white/80 text-[0.9375rem] sm:text-[1.125rem] md:text-[length:var(--text-heading-5)] font-medium text-center max-w-2xl leading-[1.45] tracking-normal sm:tracking-tight"
        />
      </div>

      {/* Logos */}
      <div className="w-full max-w-[90rem] mx-auto">
        <LogoSection />
      </div>
      
    </section>
  );
}
