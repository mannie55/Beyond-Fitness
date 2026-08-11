"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import FeatureItem from "@/components/ui/FeatureItem";
import ImageSlider from "@/components/ui/ImageSlider";
import TextReveal from "@/components/ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!featuresRef.current) return;
    
    // We select all feature items
    const items = gsap.utils.toArray(".feature-item", featuresRef.current);
    
    gsap.fromTo(
      items,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%", // trigger when the container enters the viewport
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: featuresRef });

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
    <section id="about" className="w-full lg:min-h-screen bg-[var(--color-neutral-lightest)] overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left Content Area */}
      <div className="flex-1 flex justify-center lg:justify-start items-center py-padding-section-large px-padding-global lg:pr-[4rem]">
        <div className="w-full max-w-[38rem] flex flex-col items-start gap-6 sm:gap-8 md:gap-[1.5rem]">
          
          <TextReveal 
            as="h2"
            text={"NOT JUST A WORKOUT. \nA CULTURAL SANCTUARY."}
            className="text-[#0D0B05] text-[1.65rem] sm:text-[2.1rem] md:text-[2.65rem] lg:text-[2.85rem] font-semibold uppercase leading-[1.2] tracking-tight whitespace-pre-line"
          />
          
          <div className="w-[3rem] h-[0.25rem] bg-[var(--color-dandelion)] rounded-full mt-2" />

          <p className="text-[var(--color-neutral-dark)] text-text-regular sm:text-text-medium md:text-[length:var(--text-text-large)] font-normal leading-[1.6] max-w-[95%]">
            We stripped away everything you dislike about traditional gyms and kept only what elevates you: sound-driven studios, world-class coaching, and an uncompromising atmosphere.
          </p>

        <div ref={featuresRef} className="w-full pt-4 sm:pt-6 md:pt-[2rem] flex flex-col gap-4 sm:gap-5 md:gap-[1rem]">
            {features.map((feature, index) => (
              <div key={index} className="feature-item opacity-0">
                <FeatureItem 
                  title={feature.title}
                  description={feature.description}
                  initialOpen={feature.initialOpen}
                  className="md:w-full"
                />
              </div>
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
