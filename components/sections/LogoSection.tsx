import Image from "next/image";

export default function LogoSection() {
  const logos = [
    { src: "/images/logos/adidas.svg", alt: "Adidas", width: 70, height: 47 },
    { src: "/images/logos/swan.svg", alt: "Swan", width: 61, height: 43 },
    { src: "/images/logos/la-roche-posay.svg", alt: "La Roche-Posay", width: 91, height: 23 },
    { src: "/images/logos/zap.svg", alt: "Zap by Paystack", width: 84, height: 50 },
    { src: "/images/logos/byd.svg", alt: "BYD", width: 90, height: 18 },
    { src: "/images/logos/glowhealth.png", alt: "Glow Health", width: 80, height: 45 },
  ];

  return (
    <section className="w-full flex flex-col justify-between items-stretch">
      {/* Content wrapper: 3x2 balanced grid on mobile, flex-between on desktop */}
      <div className="w-full grid grid-cols-3 md:flex md:flex-row md:flex-nowrap justify-center md:justify-between items-center py-1 sm:py-2 md:py-[0.5rem] gap-2 sm:gap-4 md:gap-[1rem]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full md:w-[8.3125rem] flex flex-col justify-center items-center px-2 py-2 sm:px-3 sm:py-2.5 md:px-[1.1875rem] md:py-[1rem]"
          >
            <div className="flex justify-center items-center h-8 sm:h-9 md:h-auto">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300 max-h-[24px] sm:max-h-[30px] md:max-h-none w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
