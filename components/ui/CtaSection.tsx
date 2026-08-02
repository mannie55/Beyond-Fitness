import Image from "next/image";
import CtaContainer from "./CtaContainer";

export default function CtaSection() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[711px] py-[var(--spacing-padding-section-medium)] md:pt-[5rem] md:pb-[7rem] px-padding-global flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image 
        src="/images/cta-bg.jpeg" 
        alt="CTA Background" 
        fill 
        priority
        className="object-cover object-center md:object-[center_20%] z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 md:bg-[linear-gradient(105deg,rgba(16,15,10,0.75)_16%,rgba(59,58,56,0.67)_37%,rgba(102,102,102,0)_58%)]"></div>

      {/* Reusable Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto flex flex-col justify-center h-full">
        <CtaContainer />
      </div>

    </section>
  );
}
