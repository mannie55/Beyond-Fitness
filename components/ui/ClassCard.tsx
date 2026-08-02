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
    <div className="inline-flex flex-col justify-start items-start gap-4 p-4 bg-transparent hover:bg-[#FEF6DF] transition-colors duration-300 group cursor-pointer font-sans text-left w-[var(--component-classcard-width)] snap-start flex-shrink-0">
      {/* Image wrapper */}
      <div className="self-stretch flex justify-start items-center gap-2.5 w-full">
        {/* Image container — explicit width and height variables ensure perfect square cross-browser, avoiding iOS min-height/aspect-ratio bugs */}
        <div className="w-full h-[var(--component-classcard-width)] relative overflow-hidden bg-neutral-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          {/* Difficulty badge */}
          <div className="absolute left-[0.75rem] bottom-[0.75rem] md:left-[1.125rem] md:bottom-[1.125rem] px-2 py-1 md:px-2.5 md:pt-2 md:pb-2.5 bg-black rounded-[1.5rem] inline-flex flex-col justify-start items-start z-10">
            <span className="text-[#FED55F] text-[length:var(--text-text-tiny)] md:text-[length:var(--text-text-regular)] font-bold uppercase leading-[1.3] font-sans">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* Text content section */}
      <div className="w-full flex flex-col justify-start items-start gap-2">
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
