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

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black font-sans">
      <HeroSection />
      <TrustSection />
      <StudioIntroSection />
      <Banner speed="very-slow" />
      <AboutSection />
      <ClassSection />
      <CoachSection />
      <PricingSection />
      <TestimonialSection />
      <CommunitySection />
      <EventSection />
      <CtaSection />
      <Banner speed="very-slow" />
      <Footer />
    </main>
  );
}
