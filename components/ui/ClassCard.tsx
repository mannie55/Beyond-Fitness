"use client";

import Image from "next/image";
import Link from "next/link";

interface ClassCardProps {
  title: string;
  description: string;
  tag: string;
  imageSrc?: string;
  href?: string;
  className?: string;
}

export default function ClassCard({
  title,
  description,
  tag,
  imageSrc = "/images/class-rides.jpg",
  href,
  className = "",
}: ClassCardProps) {
  const cardContent = (
    <div className={`inline-flex flex-col justify-start items-start gap-4 bg-transparent group cursor-pointer font-sans text-left w-[var(--component-classcard-width)] snap-start flex-shrink-0 ${className}`}>
      {/* Image wrapper */}
      <div className="self-stretch flex justify-start items-center gap-2.5 w-full">
        {/* Image container — explicit aspect-square ensures a perfect 1:1 ratio */}
        <div className="w-full aspect-square relative overflow-hidden bg-neutral-100 rounded-[2px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dynamic hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />

          {/* Difficulty badge */}
          <div className="absolute left-[1rem] bottom-[1rem] px-3 py-1.5 md:px-4 md:py-2 bg-black rounded-full inline-flex justify-center items-center z-10 shadow-sm transition-transform duration-500 group-hover:scale-105">
            <span className="text-white text-[length:var(--text-text-tiny)] md:text-[length:var(--text-text-small)] font-bold uppercase tracking-widest leading-[1.3] font-sans">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* Text content section */}
      <div className="w-full flex flex-col justify-start items-start gap-1.5 mt-2">
        <h3 className="text-[#0D0B05] text-[length:var(--text-heading-5)] md:text-heading-4 font-bold leading-[1.2] font-sans transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[var(--color-neutral)] text-text-medium font-normal leading-[1.5] font-sans">
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
