"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "special";
  theme?: "dark" | "light";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  // Exact Figma layout controls
  width?: string;
  paddingLeft?: string;
  textWidth?: string;
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.0015 4.93387L19.0725 12.005L12.0015 19.0761"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.93044 12.0049H19.0726"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  children,
  variant = "primary",
  theme = "dark",
  href,
  onClick,
  className = "",
  type = "button",
  width = "w-fit",
  paddingLeft = "pl-[1.5rem]",
  textWidth = "w-auto",
}: ButtonProps) {
  const baseClasses = `group h-[3.25rem] rounded-full inline-flex items-center justify-between gap-[1rem] pr-[0.25rem] py-[0.25rem] text-text-small font-sans tracking-wider uppercase transition-all select-none cursor-pointer duration-300 ${width} ${paddingLeft}`;

  const themeVariants = {
    dark: {
      primary: "bg-white text-black hover:bg-neutral-lightest",
      secondary: "bg-transparent text-white border border-white hover:bg-white/10",
      special: "bg-dandelion text-black hover:bg-dandelion-light",
    },
    light: {
      primary: "bg-black text-white hover:bg-neutral-darker",
      secondary: "bg-transparent text-black border border-black hover:bg-black/5",
      special: "bg-dandelion text-black hover:bg-dandelion-light",
    },
  };

  const themeArrowCircles = {
    dark: {
      primary: "w-[2.75rem] h-[2.75rem] bg-black text-white rounded-full flex items-center justify-center flex-shrink-0",
      secondary: "w-[2.75rem] h-[2.75rem] border border-white text-white rounded-full flex items-center justify-center flex-shrink-0",
      special: "w-[2.75rem] h-[2.75rem] bg-black text-dandelion rounded-full flex items-center justify-center flex-shrink-0",
    },
    light: {
      primary: "w-[2.75rem] h-[2.75rem] bg-neutral-lightest text-black rounded-full flex items-center justify-center flex-shrink-0",
      secondary: "w-[2.75rem] h-[2.75rem] border border-black text-black rounded-full flex items-center justify-center flex-shrink-0",
      special: "w-[2.75rem] h-[2.75rem] bg-black text-dandelion rounded-full flex items-center justify-center flex-shrink-0",
    },
  };

  const themeWeights = {
    dark: {
      primary: "font-medium",
      secondary: "font-semibold",
      special: "font-bold",
    },
    light: {
      primary: "font-normal",
      secondary: "font-bold",
      special: "font-bold",
    },
  };

  const variantClasses = themeVariants[theme][variant];
  const arrowCircleClasses = themeArrowCircles[theme][variant];
  const weightClass = themeWeights[theme][variant];

  const innerContent = (
    <>
      <span className={`text-center whitespace-nowrap flex-grow flex-shrink-0 ${textWidth} ${weightClass}`}>{children}</span>
      <div className={`${arrowCircleClasses} flex-shrink-0`}>
        <ArrowIcon className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {innerContent}
    </button>
  );
}
