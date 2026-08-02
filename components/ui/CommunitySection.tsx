import Image from "next/image";
import Button from "./Button";

export default function CommunitySection() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] flex flex-col justify-end items-center py-[var(--spacing-padding-section-large)] px-padding-global overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/community-bg.png"
        alt="Community Background"
        fill
        priority
        className="object-cover object-[center_25%] z-0"
      />
      
      {/* Complex Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 20%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.8) 78%, rgba(0, 0, 0, 0.92) 100%)"
        }}
      ></div>

      {/* Content Container (max-width: 1280px) */}
      <div className="relative z-20 w-full max-w-[90rem] flex flex-col items-stretch mx-auto">
        
        {/* Eyebrow */}
        <div className="flex flex-row items-center gap-[0.75rem] w-full">
          <div className="w-[1.5rem] h-[1px] bg-white/35"></div>
          <span className="text-white/45 text-[length:var(--text-text-tiny)] md:text-[0.6875rem] font-[550] leading-[1.5] tracking-[0.22em] uppercase font-sans">
            Community
          </span>
        </div>

        {/* Headings */}
        <div className="flex flex-col items-stretch w-full mt-[1rem] mb-[1.5rem] md:my-0">
          <h3 className="text-white text-[length:var(--text-heading-4)] font-normal leading-[1.2em] tracking-[-0.01em] font-sans">
            MORE THAN A STUDIO.
          </h3>
          <h2 className="text-white text-[length:var(--text-heading-3)] font-bold leading-[1.1em] tracking-[-0.01em] font-sans">
            A COMMUNITY.
          </h2>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-end w-full pt-[0.5rem] gap-[1.5rem] md:gap-[2rem]">
          {/* Paragraph */}
          <div className="w-full lg:max-w-[40rem] flex flex-col">
            <p className="text-white/55 text-[length:var(--text-text-medium)] font-normal leading-[1.7] font-sans">
              From fitness events and wellness experiences to community initiatives and partnerships, we're building something bigger than workouts — we're building a movement.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-row flex-wrap md:flex-nowrap items-center gap-[1rem] w-full lg:w-auto">
            <Button variant="primary" theme="dark" className="flex-1 md:flex-none">
              See the community
            </Button>
            <Button variant="secondary" theme="dark" className="flex-1 md:flex-none">
              Events
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
