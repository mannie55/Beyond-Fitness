import FeatureItem from "@/components/ui/FeatureItem";
import ImageSlider from "@/components/ui/ImageSlider";

export default function AboutSection() {
  const features = [
    {
      title: "BOUTIQUE PREMIUM EXPERIENCE",
      description: "Curated classes, immersive spaces and intentional design every detail is considered.",
      initialOpen: true,
    },
    {
      title: "HIGH-PERFORMING COMMUNITY",
      description: "Join a network of driven individuals pushing each other to achieve more in every session.",
      initialOpen: false,
    },
    {
      title: "EXPERT-LED COACHING",
      description: "Our certified coaches provide personalized guidance to maximize your performance and minimize injury.",
      initialOpen: false,
    },
    {
      title: "HOLISTIC WELLNESS",
      description: "Beyond the physical workout, we focus on recovery, nutrition, and mental resilience for complete well-being.",
      initialOpen: false,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left Content Area */}
      <div className="flex-1 flex justify-center lg:justify-start items-center py-16 lg:py-[7rem] px-padding-global lg:pr-[4rem]">
        <div className="w-full max-w-[38rem] flex flex-col items-start gap-[1.5rem]">
          
          <h2 className="text-[#0D0B05] text-[length:var(--text-heading-2)] font-bold leading-[1.2] uppercase">
            NOT A GYM. <br />
            A PERFORMANCE STUDIO
          </h2>
          
          <div className="w-full flex flex-col items-start gap-[3rem] mt-[1.5rem]">
            <div className="flex flex-col items-start gap-[1.25rem]">
              <div className="w-[3rem] h-[4px] bg-[var(--color-dandelion)] rounded-full" />
              <p className="text-[var(--color-neutral-dark)] text-[length:var(--text-text-large)] font-normal leading-[1.6] max-w-[95%]">
                Experience expert-led coaching, a welcoming community, and a holistic approach to wellness all in a boutique studio designed to help you perform at your best.
              </p>
            </div>
          </div>

          <div className="w-full bg-white pt-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1rem] w-full">
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
      </div>

      {/* Bottom/Right Slider Area */}
      <div className="w-full lg:w-1/2 h-[60vh] md:h-[70vh] lg:h-auto relative flex-shrink-0">
        <ImageSlider 
          images={[
            "/images/slider-image-1.jpg",
            "/images/studio-image-2.jpg",
            "/images/studio-image-3.jpg",
            "/images/studio-image-4.jpg",
          ]}
          interval={5000}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
