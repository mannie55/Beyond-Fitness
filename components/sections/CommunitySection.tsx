import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";

export default function CommunitySection() {
  return (
    <section 
      id="community" 
      className="w-full bg-[#0B0A06] flex flex-col items-center justify-center px-padding-global py-padding-section-large overflow-hidden font-sans border-t border-b border-white/10"
    >
      <div className="w-full max-w-[100rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-[5rem] items-start">
        
        {/* Left Column: Heading */}
        <div className="flex flex-col flex-1 gap-6 sm:gap-8 lg:max-w-[45%]">
          {/* Main Heading */}
          <TextReveal 
            as="h2"
            text={"MORE THAN A STUDIO.\nA COMMUNITY."}
            className="text-white text-[2.5rem] sm:text-[3rem] md:text-[3.125rem] font-bold leading-[1.1] tracking-[-0.01em] uppercase whitespace-pre-line"
          />
        </div>

        {/* Right Column: Content & Actions */}
        <div className="flex flex-col flex-1 gap-10 sm:gap-12 pt-2 lg:pt-8 w-full">
          
          <div className="flex flex-col gap-8 sm:gap-10">
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal max-w-[38rem]">
              From fitness events and wellness experiences to community initiatives and partnerships, we&apos;re building something bigger than workouts: we&apos;re building a movement.
            </p>

            {/* List Items */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-dandelion)] mt-[0.1875rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80 text-base leading-relaxed">
                  Immersive fitness events and wellness experiences.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-dandelion)] mt-[0.1875rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80 text-base leading-relaxed">
                  Local partnerships and community-driven initiatives.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-dandelion)] mt-[0.1875rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80 text-base leading-relaxed">
                  A collective movement bigger than just workouts.
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-2">
            <Button variant="primary" theme="dark" href="/community" className="w-full sm:w-auto">
              SEE THE COMMUNITY
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
