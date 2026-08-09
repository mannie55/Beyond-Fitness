import FeatureItem from "@/components/ui/FeatureItem";
import ImageSlider from "@/components/ui/ImageSlider";

export default function AboutSection() {
  const features = [
    {
      title: "IMMERSIVE BOUTIQUE SPACES",
      description: "Acoustically tuned dark rooms, state-of-the-art equipment, and sensory lighting crafted to bring out your personal best.",
      initialOpen: true,
    },
    {
      title: "MASTER COACHING & FORM",
      description: "Guided by elite trainers who do not just count reps: they calibrate your technique, ignite your energy, and elevate your standard.",
      initialOpen: false,
    },
    {
      title: "A DRIVEN COMMUNITY",
      description: "Surround yourself with innovators, creators, and leaders who show up, cheer each other on, and elevate together.",
      initialOpen: false,
    },
    {
      title: "RECOVERY & SUSTAINED WELLNESS",
      description: "Training is only half the equation. We integrate functional mobility, breathwork, and recovery for lifelong vitality.",
      initialOpen: false,
    },
  ];

  return (
    <section className="w-full lg:min-h-screen bg-[var(--color-neutral-lightest)] overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left Content Area */}
      <div className="flex-1 flex justify-center lg:justify-start items-center py-10 sm:py-12 lg:py-[6rem] px-padding-global lg:pr-[4rem]">
        <div className="w-full max-w-[38rem] flex flex-col items-start gap-4 sm:gap-5 md:gap-[1.5rem]">
          
          <h2 className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight">
            NOT JUST A WORKOUT. <br />
            A CULTURAL SANCTUARY.
          </h2>
          
          <div className="w-[3rem] h-[4px] bg-[var(--color-dandelion)] rounded-full" />

          <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-[1.6] max-w-[95%]">
            We stripped away everything you dislike about traditional gyms and kept only what elevates you: sound-driven studios, world-class coaching, and an uncompromising atmosphere.
          </p>

          <div className="w-full pt-2 sm:pt-4 md:pt-[2rem] flex flex-col gap-2 sm:gap-3 md:gap-[1rem]">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                title={feature.title}
                description={feature.description}
                initialOpen={feature.initialOpen}
                className="md:w-full"
              />
            ))}
          </div>

        </div>
      </div>

      {/* Bottom/Right Slider Area */}
      <div className="w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/10] md:h-[70vh] lg:h-auto lg:aspect-auto relative flex-shrink-0">
        <ImageSlider 
          images={[
            "/images/movements-about.jpg",
            "/images/stretch-about.jpg",
            "/images/wellness-about.jpg",
            "/images/workout-about.jpg",
          ]}
          interval={5000}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
