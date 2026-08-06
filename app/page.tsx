import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import StudioIntroSection from "@/components/sections/StudioIntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ClassSection from "@/components/sections/ClassSection";
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
    </main>
  );
}
