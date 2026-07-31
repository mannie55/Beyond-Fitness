import Image from "next/image";

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="group w-[16.5625rem] flex flex-col justify-start items-start gap-[0.75rem] p-[0.5rem] transition-colors duration-300 bg-transparent hover:bg-[var(--color-dandelion-lighter,#FEF6DF)]">
      
      {/* Header row: title + arrow */}
      <div className="self-stretch h-[1.375rem] border-b-[0.5px] border-[var(--color-neutral,#868582)] flex justify-between items-start">
        <span className="text-[#171717] text-[0.875rem] font-[550] leading-[1.3125rem] font-sans">
          {title}
        </span>
        {/* Arrow icon */}
        <div className="relative w-[18px] h-[18px] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
          <Image 
            src="/icons/arrow-right.svg" 
            alt="Expand feature" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* Expandable description content - Space is reserved, only opacity changes */}
      <div className="self-stretch opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-[var(--color-neutral,#868582)] text-[0.875rem] font-normal leading-[1.3125rem] font-sans">
          {description}
        </p>
      </div>
    </div>
  );
}
