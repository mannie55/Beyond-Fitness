import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Banner from "@/components/ui/Banner";
import Navbar from "@/components/Navbar";
import ClassCard from "@/components/ui/ClassCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import InstagramEmbedCard from "@/components/ui/InstagramEmbedCard";

import StatsBar from "@/components/ui/StatsBar";
import FeatureItem from "@/components/ui/FeatureItem";
import LogoSection from "@/components/sections/LogoSection";
import FirstTimersCard from "@/components/ui/FirstTimersCard";
import MembershipCard from "@/components/ui/MembershipCard";
import CommunitySection from "@/components/sections/CommunitySection";
import AnnualCard from "@/components/ui/AnnualCard";
import StudioIntroSection from "@/components/sections/StudioIntroSection";
import CtaSection from "@/components/sections/CtaSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CoachSection from "@/components/sections/CoachSection";
import PricingSection from "@/components/sections/PricingSection";
import EventSection from "@/components/sections/EventSection";
import ImageSlider from "@/components/ui/ImageSlider";

export default function DesignSystemPage() {
  const primitiveColors = [
    { name: "White", varName: "--color-white", value: "#FFFFFF" },
    { name: "Neutral Lightest", varName: "--color-neutral-lightest", value: "#F2F2F2" },
    { name: "Neutral Lighter", varName: "--color-neutral-lighter", value: "#DADAD9" },
    { name: "Neutral Light", varName: "--color-neutral-light", value: "#B6B5B4" },
    { name: "Neutral", varName: "--color-neutral", value: "#868582" },
    { name: "Neutral Dark", varName: "--color-neutral-dark", value: "#555450" },
    { name: "Neutral Darker", varName: "--color-neutral-darker", value: "#25231E" },
    { name: "Neutral Darkest", varName: "--color-neutral-darkest", value: "#0D0B05" },
    { name: "Dandelion Lightest", varName: "--color-dandelion-lightest", value: "#FEFAEF" },
    { name: "Dandelion Lighter", varName: "--color-dandelion-lighter", value: "#FEF6DF" },
    { name: "Dandelion Light", varName: "--color-dandelion-light", value: "#FEE18F" },
    { name: "Dandelion", varName: "--color-dandelion", value: "#FED55F" },
    { name: "Dandelion Dark", varName: "--color-dandelion-dark", value: "#CBAA4C" },
    { name: "Dandelion Darker", varName: "--color-dandelion-darker", value: "#655526" },
    { name: "Dandelion Darkest", varName: "--color-dandelion-darkest", value: "#4C3F1C" },
    { name: "Black", varName: "--color-black", value: "#000000" },
  ];

  const typographyScales = [
    { name: "Heading 1", class: "text-heading-1 font-bold", desc: "Hero displays (scaled responsively: 2.5rem to 14.06rem)" },
    { name: "Heading 2", class: "text-heading-2 font-bold", desc: "Section headings (scaled responsively: 2.25rem to 3.75rem)" },
    { name: "Heading 3", class: "text-heading-3 font-semibold", desc: "Subsection titles (scaled: 2rem to 2.5rem)" },
    { name: "Heading 4", class: "text-heading-4 font-semibold", desc: "Block headings (scaled: 1.5rem to 2rem)" },
    { name: "Heading 5", class: "text-heading-5 font-semibold", desc: "Cards and small blocks (scaled: 1.25rem to 1.5rem)" },
    { name: "Heading 6", class: "text-heading-6 font-semibold", desc: "Label headings (scaled: 1.125rem to 1.25rem)" },
    { name: "Text Large", class: "text-text-large", desc: "Lead body text (scaled: 1.125rem to 1.25rem)" },
    { name: "Text Medium", class: "text-text-medium", desc: "Standard text medium (scaled: 1rem to 1.125rem)" },
    { name: "Text Regular", class: "text-text-regular", desc: "Default body text (scaled: 0.875rem to 1rem)" },
    { name: "Text Small", class: "text-text-small", desc: "Captions and footnotes (scaled: 0.75rem to 0.875rem)" },
    { name: "Text Tiny", class: "text-text-tiny", desc: "Micro labels (scaled: 0.625rem to 0.75rem)" },
  ];

  const communityColumn = [
    { name: "STORIES", href: "/community/member-stories", desc: "Real member transformations from the studio floor" },
    { name: "BEYOND ON TOUR", href: "/community/on-tour", desc: "Our signature event series across the city" },
    { name: "BEYOND PINK WALK", href: "/community/pink-walk", desc: "Join the movement for breast cancer awareness" },
    { name: "EVENTS", href: "/community", desc: "All upcoming community gatherings and workshops" },
  ];

  const aboutColumn = [
    { name: "CORPORATE", href: "/corporate-wellness", desc: "Wellness programs for high-performance teams" },
    { name: "ABOUT", href: "/about", desc: "The story behind the studio and our mission" },
    { name: "CONTACT", href: "/contact", desc: "Find us in Victoria Island, Lagos" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0F0E0D] text-white font-sans">
      
      {/* Design System Header */}
      <section className="border-b border-white/10 px-padding-global py-12 max-w-container-large mx-auto">
        <h1 className="text-heading-2 font-bold tracking-tight text-white mb-2">
          Design System & Pattern Library
        </h1>
        <p className="text-text-large text-white/60">
          Visual tokens and live components configured for the Beyond Fitness platform.
        </p>
      </section>

      {/* 1. Design Tokens Section */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-12">
        
        {/* Colors Grid */}
        <div>
          <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
            Color Primitives
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {primitiveColors.map((color) => (
              <div
                key={color.name}
                className="bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col gap-3"
              >
                <div
                  className="w-full h-16 rounded-lg border border-white/10"
                  style={{ backgroundColor: `var(${color.varName})` }}
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-text-regular">{color.name}</span>
                  <code className="text-text-tiny text-white/40 select-all">{color.varName}</code>
                  <span className="text-text-small text-white/60">{color.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Scale */}
        <div>
          <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
            Typography Scale
          </h2>
          <div className="flex flex-col gap-8 bg-white/5 rounded-xl border border-white/10 p-6">
            {typographyScales.map((type) => (
              <div key={type.name} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1 md:max-w-[18.75rem] w-full">
                  <span className="font-bold text-text-regular text-white">{type.name}</span>
                  <span className="text-text-small text-white/40">{type.desc}</span>
                </div>
                <div className="flex-1">
                  <p className={type.class}>
                    Beyond Fitness
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 2. Interactive Components Section */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-12">
        
        {/* Buttons Showcase */}
        <div>
          <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
            Button Component
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Dark Background Variant Wrapper */}
            <div className="bg-black border border-white/10 rounded-xl p-8 flex flex-col gap-6">
              <span className="text-text-small text-white/40 uppercase tracking-widest block border-b border-white/5 pb-2">
                Dark Background Mode (default)
              </span>
              <div className="flex flex-wrap gap-6 items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Primary</span>
                  <Button variant="primary" theme="dark">View Membership</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Secondary</span>
                  <Button variant="secondary" theme="dark">Events</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Special (Hugging)</span>
                  <Button variant="special" theme="dark">Join Annual</Button>
                </div>

              </div>
            </div>

            {/* Light Background Variant Wrapper */}
            <div className="bg-white border border-black/10 rounded-xl p-8 flex flex-col gap-6 text-black">
              <span className="text-text-small text-black/40 uppercase tracking-widest block border-b border-black/5 pb-2">
                Light Background Mode
              </span>
              <div className="flex flex-wrap gap-6 items-start">
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-black/50">Primary</span>
                  <Button variant="primary" theme="light">Register</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-black/50">Secondary (Hugging)</span>
                  <Button variant="secondary" theme="light">Get Started</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-black/50">Special</span>
                  <Button variant="special" theme="light">Join Annual</Button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Image Slider Showcase */}
        <div>
          <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
            Image Slider Component
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center">
            <span className="text-text-small text-white/40 uppercase tracking-widest block border-b border-white/5 pb-2 mb-6 w-full">
              Slider Demo (50% Desktop Width / Full Height)
            </span>
            <div className="w-full h-[18.75rem] md:h-[25rem] flex justify-center bg-black/50 border border-white/10 rounded-xl overflow-hidden">
              <ImageSlider 
                images={[
                  "/images/slider-image-1.jpg",
                  "/images/studio-image-1.jpg",
                  "/images/studio-image-2.jpg",
                  "/images/studio-image-3.jpg",
                ]} 
              />
            </div>
          </div>
        </div>

      </section>

      {/* 3. Navbar Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Header Navbar Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Light Theme Navbar (Figma Spec)</span>
            <div className="rounded-lg border border-black/10">
              <Navbar />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Community Dropdown Menu Content (794px Figma Spec)</span>
            <div className="flex justify-center">
              <div className="w-[49.625rem] bg-white border border-black/10 rounded-lg shadow-xl overflow-hidden">
                <div className="w-full px-[4rem] py-[2rem] flex justify-center items-start gap-[1rem] font-sans">
                  {/* Column 1: OUR COMMUNITY */}
                  <div className="flex-1 max-w-[16.75rem] flex flex-col gap-[1rem]">
                    <span className="text-[#0D0B05] text-[0.75rem] font-semibold tracking-widest uppercase">
                      OUR COMMUNITY
                    </span>
                    <div className="flex flex-col gap-[0.5rem]">
                      {communityColumn.map((item, idx) => (
                        <div
                          key={item.name}
                          className={`p-[0.5rem] rounded-lg flex flex-col gap-0.5 ${idx === 0 ? "bg-[#FEF6DF]" : ""}`}
                        >
                          <span className="text-[#0D0B05] text-[0.875rem] font-bold tracking-wide uppercase">
                            {item.name}
                          </span>
                          <span className="text-dandelion-darkest text-text-regular leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: ABOUT US */}
                  <div className="flex-1 max-w-[19.125rem] flex flex-col gap-[1rem]">
                    <span className="text-[#0D0B05] text-[0.75rem] font-semibold tracking-widest uppercase">
                      ABOUT US
                    </span>
                    <div className="flex flex-col gap-[0.5rem]">
                      {aboutColumn.map((item) => (
                        <div
                          key={item.name}
                          className="p-[0.5rem] rounded-lg flex flex-col gap-0.5"
                        >
                          <span className="text-[#0D0B05] text-[0.875rem] font-bold tracking-wide uppercase">
                            {item.name}
                          </span>
                          <span className="text-dandelion-darkest text-text-regular leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Banner Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Infinite Marquee Banner
        </h2>
        <div className="flex flex-col gap-6 bg-white/5 rounded-xl border border-white/10 p-6 overflow-hidden">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Medium Speed (default, pause-on-hover)</span>
            <Banner />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Fast Speed</span>
            <Banner speed="fast" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Slow Speed</span>
            <Banner speed="slow" />
          </div>
        </div>
      </section>

      {/* 5. ClassCard Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Class Card Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Interactive Class Card (Hover to view background highlight)</span>
            <div className="flex flex-row gap-4 md:gap-8 justify-start md:justify-center p-4 md:p-6 bg-white rounded-lg border border-black/10 overflow-x-auto snap-x snap-mandatory w-full scroll-smooth">
              <ClassCard 
                title="Class Ride" 
                description="Our signature 45-minute rhythm cycling class. Get ready to sweat, ride to the beat, and transform your mind and body." 
                tag="high"
                imageSrc="/images/class-rides.jpg"
              />
              <ClassCard
                title="LIFT (Strength)"
                description="Compound movements. Find out what you're made of."
                tag="high"
                imageSrc="/images/class-lift_strength.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. StatsBar Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Stats Bar Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Default Stats (light background context)</span>
            <div className="bg-white rounded-lg border border-black/10 p-6">
              <StatsBar />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FeatureItem Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Feature Item Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Hover to expand (light background context)</span>
            <div className="bg-white rounded-lg border border-black/10 p-[2rem] flex gap-[2rem] flex-wrap">
              <FeatureItem
                title="BOUTIQUE PREMIUM EXPERIENCE"
                description="Curated classes, immersive spaces and intentional design — every detail is considered."
                initialOpen={true}
              />
              <FeatureItem
                title="HIGH-PERFORMING COMMUNITY"
                description="A network of driven individuals pushing each other toward their best."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Logo Section Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Logo Section Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Logos Ticker Context</span>
            <div className="bg-[#E5E7EB] rounded-lg border border-black/10 py-[1rem]">
              <LogoSection />
            </div>
          </div>
        </div>
      </section>

      {/* 9. First Timers Card Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          First Timers Card Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Pricing Card Context</span>
            <div className="bg-[#E5E7EB] rounded-lg border border-black/10 py-[2rem] px-[2rem] flex justify-center">
              <FirstTimersCard />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Membership Card Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Membership Card Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Pricing Card Context</span>
            <div className="bg-[#E5E7EB] rounded-lg border border-black/10 py-[4rem] px-[2rem] flex justify-center">
              <MembershipCard />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Annual Card Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Annual Card Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Pricing Card Context</span>
            <div className="bg-[#E5E7EB] rounded-lg border border-black/10 py-[4rem] px-[2rem] flex justify-center">
              <AnnualCard />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Community Section Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Community Section Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Hero Banner Context</span>
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <CommunitySection />
            </div>
          </div>
        </div>
      </section>

      {/* 12. Studio Intro Animated Section Showcase */}
      <section className="w-full flex flex-col gap-6 mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6 w-full">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Studio Intro Section (Scroll Driven)
          </h2>
          <span className="text-text-small text-white/50">Keep scrolling to see the GSAP pinning animation</span>
        </div>
        <div className="w-full">
          <StudioIntroSection />
        </div>
      </section>

      {/* 13. CTA Section Showcase */}
      <section className="w-full flex flex-col gap-6 mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6 w-full">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            CTA Section Component
          </h2>
        </div>
        <div className="w-full">
          <CtaSection />
        </div>
      </section>


      {/* 8. Footer Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Footer Section
          </h2>
        </div>
        <Footer />
      </section>

      {/* 14. Testimonial Card Showcase */}
      <section className="px-padding-global py-12 max-w-container-large mx-auto flex flex-col gap-6">
        <h2 className="text-heading-4 font-bold border-b border-white/10 pb-3 mb-6 text-white uppercase tracking-wider">
          Testimonial Card Component
        </h2>
        <div className="bg-white/5 rounded-xl border border-white/10 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-text-small text-white/50 font-semibold">Comparison: Custom UI vs Official Instagram Embed</span>
            <div className="bg-[#E5E7EB] rounded-lg border border-black/10 py-[4rem] px-[2rem] flex flex-col md:flex-row gap-8 justify-center items-start">
              
              <div className="flex flex-col gap-4 items-center w-full max-w-[26rem]">
                <span className="text-[#0D0B05] font-bold uppercase tracking-wider text-sm bg-white px-4 py-2 rounded shadow">The Premium Way (Custom UI)</span>
                <TestimonialCard />
              </div>

              <div className="flex flex-col gap-4 items-center w-full max-w-[26rem]">
                <span className="text-[#0D0B05] font-bold uppercase tracking-wider text-sm bg-white px-4 py-2 rounded shadow">The Official Way (iFrame)</span>
                <InstagramEmbedCard />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 15. Full Testimonial Stories Section Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Testimonial Stories Section (Figma Spec)
          </h2>
          <span className="text-text-small text-white/50">
            Interactive horizontal snap-rail with Instagram embeds, progress bar, and arrow controls
          </span>
        </div>
        <div className="w-full">
          <TestimonialSection />
        </div>
      </section>

      {/* 16. Coaches Section Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Coaches Section (Figma Spec)
          </h2>
          <span className="text-text-small text-white/50">
            Interactive horizontal snap-rail with ClassCard coaches presentation, progress bar, and arrow controls
          </span>
        </div>
        <div className="w-full">
          <CoachSection />
        </div>
      </section>

      {/* 17. Pricing & Membership Section Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Pricing Section (Figma Spec)
          </h2>
          <span className="text-text-small text-white/50">
            Full responsive pricing grid with interactive toggle cards and flexible membership banner
          </span>
        </div>
        <div className="w-full">
          <PricingSection />
        </div>
      </section>

      {/* 18. Event Section Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Event Section (Figma Spec)
          </h2>
          <span className="text-text-small text-white/50">
            Interactive tab switcher (On Tour / Pink Walk) with photo mosaic layout and responsive typography
          </span>
        </div>
        <div className="w-full">
          <EventSection />
        </div>
      </section>

    </main>
  );
}
