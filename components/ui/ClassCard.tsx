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
    <div className="w-full max-w-[400px] p-[8px] rounded-lg transition-all duration-300 bg-transparent border border-transparent hover:bg-[#FEF6DF] flex flex-col gap-[32px] group cursor-pointer font-sans text-left">
      {/* Image Container */}
      <div className="w-full aspect-square relative bg-neutral-100 overflow-hidden rounded-md flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay factor from Figma linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%) */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        
        {/* Difficulty Badge */}
        <div className="absolute left-[18px] bottom-[18px] px-[9.96px] py-[8.95px] bg-black rounded-[24px] flex flex-col justify-start items-start">
          <span className="text-[#FED55F] text-[13.3px] font-bold uppercase tracking-wider font-sans leading-none">
            {tag}
          </span>
        </div>
      </div>

      {/* Info Content Section */}
      <div className="w-full max-w-[346px] flex flex-col gap-[8px] px-1 pb-2">
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
