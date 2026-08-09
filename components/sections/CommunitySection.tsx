import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CommunitySection() {
  return (
    <section 
      id="community" 
      className="w-full bg-black flex flex-col items-center justify-center px-padding-global py-8 sm:py-12 md:py-16 overflow-hidden"
    >
      {/* Framed Container (Bounded to 1600px / max-w-[100rem]) */}
      <div className="relative w-full max-w-[100rem] min-h-[24rem] sm:min-h-[30rem] md:min-h-[38rem] overflow-hidden flex flex-col justify-end p-5 sm:p-8 md:p-14 lg:p-16 mx-auto shadow-2xl">
        
        {/* Background Image (Protected at 1280px resolution) */}
        <Image
          src="/images/community-bg.png"
          alt="Beyond Fitness Community"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-[center_25%] z-0 transition-transform duration-700 hover:scale-105"
        />
        
        {/* Gradient Overlay for Text Legibility */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.7) 65%, rgba(0, 0, 0, 0.92) 100%)"
          }}
        />

        {/* Content Box */}
        <div className="relative z-20 w-full flex flex-col items-stretch">
          
          {/* Headings */}
          <div className="flex flex-col items-stretch w-full mb-3 sm:mb-6">
            <h3 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.2] tracking-[-0.01em] font-sans">
              MORE THAN A STUDIO.
            </h3>
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.01em] font-sans">
              A COMMUNITY.
            </h2>
          </div>

          {/* Bottom Row: Text & CTA */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-4 sm:gap-6 md:gap-8 pt-1 sm:pt-2">
            
            {/* Paragraph */}
            <div className="w-full lg:max-w-[38rem]">
              <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed font-sans">
                From fitness events and wellness experiences to community initiatives and partnerships, we&apos;re building something bigger than workouts: we&apos;re building a movement.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-row items-center w-full lg:w-auto">
              <Button variant="primary" theme="dark" href="/community" className="w-full sm:w-auto">
                See the community
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
