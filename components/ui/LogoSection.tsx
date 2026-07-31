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
      {/* Content wrapper: 8px top/bottom padding (0.5rem) */}
      <div className="w-full flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center py-[0.5rem] gap-[1rem]">
        {logos.map((logo, index) => (
          <div
            key={index}
            // 133px width (8.3125rem), padding 16px (1rem) vertical, 19px (1.1875rem) horizontal
            className="w-[8.3125rem] flex flex-col justify-center items-center gap-[0.625rem] px-[1.1875rem] py-[1rem]"
          >
            <div className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
