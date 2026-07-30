import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

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
                <div className="flex flex-col gap-1 md:max-w-[300px] w-full">
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
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Primary</span>
                  <Button variant="primary" theme="dark">View Membership</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Secondary</span>
                  <Button variant="secondary" theme="dark">Events</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-white/50">Special</span>
                  <Button variant="special" theme="dark">Join Annual</Button>
                </div>
              </div>
            </div>

            {/* Light Background Variant Wrapper */}
            <div className="bg-white border border-black/10 rounded-xl p-8 flex flex-col gap-6 text-black">
              <span className="text-text-small text-black/40 uppercase tracking-widest block border-b border-black/5 pb-2">
                Light Background Mode
              </span>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-black/50">Primary</span>
                  <Button variant="primary" theme="light">Register</Button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-text-tiny text-black/50">Secondary</span>
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

      </section>

      {/* 3. Footer Showcase */}
      <section className="w-full mt-12 border-t border-white/10 pt-12">
        <div className="px-padding-global max-w-container-large mx-auto mb-6">
          <h2 className="text-heading-4 font-bold text-white uppercase tracking-wider">
            Footer Section
          </h2>
        </div>
        <Footer />
      </section>

    </main>
  );
}
