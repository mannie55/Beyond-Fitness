import Image from "next/image";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex flex-col justify-between pt-[16px] overflow-hidden bg-black text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder image, replace with video or actual Figma asset */}
        <Image 
          src="/images/Hero-image.jpeg" 
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Figma Exact Gradient Overlay: rgba(0, 0, 0, 0.40) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Header / Navbar */}
      <div className="relative z-50 w-full mx-auto">
        <Navbar />
      </div>

      {/* Bottom Massive Text (Top on Mobile, Bottom Absolute on Desktop) */}
      <div className="relative md:absolute z-20 md:bottom-[2vh] md:left-1/2 md:-translate-x-1/2 w-full max-w-[100vw] flex justify-center items-center px-padding-global md:pointer-events-none mt-auto md:mt-0">
        <h1 className="text-white font-[800] text-[clamp(2.5rem,14vw,20rem)] leading-[1] text-center mix-blend-difference uppercase tracking-[clamp(0rem,1vw,2.5rem)] whitespace-nowrap w-full select-none">
          GO BEYOND
        </h1>
      </div>

      {/* Hero Middle Content (Bottom on Mobile, Middle on Desktop) */}
      <div className="relative z-20 w-full max-w-[100rem] mx-auto flex flex-col justify-center items-center md:justify-start md:items-start gap-6 md:gap-8 px-padding-global text-center md:text-left mt-8 mb-auto md:mt-0 md:mb-0">
        <p className="text-white text-[1rem] md:text-[1.5rem] font-[400] leading-[1.5em] max-w-[500px]">
          Train with expert coaches, push your limits, and build a healthier life that keeps up with you.
        </p>
        <Button variant="secondary" theme="dark">
          VIEW SCHEDULE
        </Button>
      </div>
      
      {/* Invisible spacer to maintain flex layout structure for the middle content on desktop */}
      <div className="h-[15vh] w-full hidden md:block pointer-events-none"></div>
    </section>
  );
}
