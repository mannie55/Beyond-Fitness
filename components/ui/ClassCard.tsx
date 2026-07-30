"use client";

import Image from "next/image";
import Link from "next/link";

interface ClassCardProps {
  title: string;
  description: string;
  tag: string;
  imageSrc?: string;
  href?: string;
}

export default function ClassCard({
  title,
  description,
  tag,
  imageSrc = "/images/class_ride.png",
  href,
}: ClassCardProps) {
  const cardContent = (
    <div className="inline-flex flex-col justify-start items-start gap-[32px] p-0 bg-transparent hover:p-[8px] hover:bg-[#FEF6DF] transition-all duration-300 group cursor-pointer font-sans text-left">
      {/* Image wrapper — alignSelf: stretch from Figma */}
      <div className="self-stretch flex justify-start items-center gap-[10px]">
        {/* Image container — 400×400, no border-radius, dark overlay */}
        <div className="w-[400px] h-[400px] relative overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="400px"
            className="object-cover"
          />
          {/* Figma: linear-gradient(0deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%) */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          {/* Difficulty badge — positioned bottom-left inside image */}
          <div className="absolute left-[18px] bottom-[36px] px-[9.96px] pt-[8.95px] pb-[10.46px] bg-black rounded-[24px] inline-flex flex-col justify-start items-start">
            <span className="text-[#FED55F] text-[13.3px] font-bold uppercase leading-[17.51px] font-sans">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* Text content section */}
      <div className="w-[346px] flex flex-col justify-start items-start gap-[8px]">
        <h3 className="text-[#0D0B05] text-[24px] font-bold leading-[28.8px] font-sans">
          {title}
        </h3>
        <p className="text-[#25231E] text-[16px] font-normal leading-[24px] font-sans">
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
