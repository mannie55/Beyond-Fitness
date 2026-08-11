import Image from "next/image";
import CtaContainer from "./CtaContainer";

export default function CtaSection() {
  return (
    <section 
      id="cta" 
      className="w-full bg-[var(--color-neutral-lightest)] flex flex-col items-center justify-center px-padding-global py-padding-section-large overflow-hidden font-sans"
    >
      {/* Container Card (Figma: Desktop 64px padding, Mobile 32px padding, rgba(0,0,0,0.4) overlay) */}
      <div className="relative w-full max-w-[100rem] min-h-[23.75rem] sm:min-h-[27.5rem] md:min-h-[31.25rem] mx-auto rounded-none overflow-hidden flex flex-col justify-center items-start p-8 sm:p-10 md:p-14 lg:p-16 border border-[#0D0B05]/15 shadow-[0_20px_50px_-15px_rgba(13,11,5,0.15)]">
        
        {/* Background Image */}
        <Image 
          src="/images/cta-bg.jpeg" 
          alt="Beyond Fitness Experience" 
          fill 
          priority
          sizes="(max-width: 1600px) 100vw, 1600px"
          className="object-cover object-center z-0"
        />
        
        {/* Overlay: dark gradient only on the side where text is */}
        <div 
          className="absolute inset-y-0 left-0 z-10 w-full md:w-3/4 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        />

        {/* Content Wrapper */}
        <div className="relative z-20 w-full flex flex-col items-start">
          <CtaContainer />
        </div>

      </div>
    </section>
  );
}
