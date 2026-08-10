import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import StudioIntroSection from "@/components/sections/StudioIntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ClassSection from "@/components/sections/ClassSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CoachSection from "@/components/sections/CoachSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PricingSection from "@/components/sections/PricingSection";
import EventSection from "@/components/sections/EventSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import Banner from "@/components/ui/Banner";
import FooterReveal from "@/components/ui/FooterReveal";

export default function Home() {
  return (
    <main className="w-full min-h-screen font-sans relative flex flex-col">
      {/* 
        This relative wrapper physically sits above the z-[-1] fixed footer.
        As the user scrolls, this solid black container moves UP, 
        smoothly "unmasking" the fixed footer underneath.
      */}
      <div className="relative z-10 w-full bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <HeroSection />
        <TrustSection />
        <StudioIntroSection />
        <Banner speed="very-slow" />
        <AboutSection />
        <ClassSection />
        <CoachSection />
        
        {/* Slide-Over Wrapper: Pricing sticks to the bottom, Testimonial slides UP over it */}
        <div className="relative w-full">
          <div className="sticky bottom-0 z-0 h-fit w-full">
            <PricingSection />
          </div>
          <div className="relative z-10 w-full bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <TestimonialSection />
          </div>
        </div>

        <CommunitySection />
        <EventSection />
        <CtaSection />
        <Banner speed="very-slow" />
      </div>

      <FooterReveal>
        <Footer />
      </FooterReveal>
    </main>
  );
}
