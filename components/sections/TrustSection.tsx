import StatsBar from "@/components/ui/StatsBar";
import LogoSection from "@/components/sections/LogoSection";

export default function TrustSection() {
  return (
    <section className="w-full bg-[var(--color-background)] px-padding-global py-[var(--spacing-padding-section-large)] flex flex-col justify-start items-center gap-12 lg:gap-16 overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-[90rem] mx-auto flex flex-col justify-start items-center gap-6">
        <h2 className="text-[#0D0B05] text-[1.5rem] md:text-[length:var(--text-heading-5)] font-normal text-center max-w-2xl leading-[1.4]">
          Trusted across Africa&apos;s fitness and wellness scene.
        </h2>
      </div>

      {/* Stats Bar Component */}
      <div className="w-full max-w-[90rem] mx-auto">
        <StatsBar />
      </div>

      {/* Logos */}
      <div className="w-full max-w-[90rem] mx-auto mt-4 md:mt-8">
        <LogoSection />
      </div>
      
    </section>
  );
}
