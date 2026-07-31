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
    <div className="inline-flex flex-col justify-start items-start gap-4 p-4 bg-transparent hover:bg-[#FEF6DF] transition-colors duration-300 group cursor-pointer font-sans text-left">
      {/* Image wrapper — alignSelf: stretch from Figma */}
      <div className="self-stretch flex justify-start items-center gap-2.5">
        {/* Image container — 400×400, no border-radius, dark overlay */}
        <div className="w-[25rem] h-[25rem] relative overflow-hidden bg-neutral-100">
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
          <div className="absolute left-[1.125rem] bottom-[2.25rem] px-2.5 pt-2 pb-2.5 bg-black rounded-[1.5rem] inline-flex flex-col justify-start items-start">
            <span className="text-[#FED55F] text-text-regular font-bold uppercase leading-[1.3] font-sans">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* Text content section */}
      <div className="w-[21.625rem] flex flex-col justify-start items-start gap-2">
        <h3 className="text-[#0D0B05] text-heading-4 font-bold leading-[1.2] font-sans">
          {title}
        </h3>
        <p className="text-[#25231E] text-text-medium font-normal leading-[1.5] font-sans">
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
