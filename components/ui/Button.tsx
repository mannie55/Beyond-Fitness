"use client";

import Link from "next/link";
import { ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "special";
  theme?: "dark" | "light";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  paddingLeft?: string;
  textWidth?: string;
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
}: ButtonProps) {
  
  // Map themes and variants to the CSS variables required by the animation
  const getThemeVars = () => {
    if (theme === "dark" && variant === "primary") {
      return {
        "--pill-color": "white",
        "--label-color": "black",
        "--disc-color": "black",
        "--arrow-color": "white",
      };
    }
    if (theme === "dark" && variant === "secondary") {
      return {
        "--pill-color": "transparent",
        "--pill-border": "1px solid white",
        "--label-color": "white",
        "--disc-color": "transparent",
        "--disc-border": "1px solid white",
        "--arrow-color": "white",
      };
    }
    if (theme === "dark" && variant === "special") {
      return {
        "--pill-color": "var(--color-dandelion)",
        "--label-color": "black",
        "--disc-color": "black",
        "--arrow-color": "var(--color-dandelion)",
      };
    }
    if (theme === "light" && variant === "primary") {
      return {
        "--pill-color": "black",
        "--label-color": "white",
        "--disc-color": "var(--color-neutral-lightest)",
        "--arrow-color": "black",
      };
    }
    if (theme === "light" && variant === "secondary") {
      return {
        "--pill-color": "transparent",
        "--pill-border": "1px solid black",
        "--label-color": "black",
        "--disc-color": "transparent",
        "--disc-border": "1px solid black",
        "--arrow-color": "black",
      };
    }
    if (theme === "light" && variant === "special") {
      return {
        "--pill-color": "var(--color-dandelion)",
        "--label-color": "black",
        "--disc-color": "black",
        "--arrow-color": "var(--color-dandelion)",
      };
    }
    return {};
  };

  const themeWeights = {
    dark: { primary: "font-medium", secondary: "font-semibold", special: "font-bold" },
    light: { primary: "font-normal", secondary: "font-bold", special: "font-bold" },
  };

  const weightClass = themeWeights[theme][variant];

  const buttonWidthVar = width === "w-full" ? "100%" : "fit-content";
  const customStyle = {
    ...getThemeVars(),
    "--button-width": buttonWidthVar,
  } as any;

  const innerContent = (
    <span className={styles["disc-swallow-button__frame"]}>
      <span className={`${styles["disc-swallow-button__ghost"]} ${weightClass} uppercase tracking-wider`} aria-hidden="true">
        {children}
      </span>
      <span className={styles["disc-swallow-button__surface"]}>
        <span className={`${styles["disc-swallow-button__label"]} ${weightClass} uppercase tracking-wider`}>
          {children}
        </span>
        <span className={styles["disc-swallow-button__disc"]} aria-hidden="true">
          <svg className={styles["disc-swallow-button__arrow"]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${styles["disc-swallow-button"]} ${className} group`}
        style={customStyle}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles["disc-swallow-button"]} ${className} group cursor-pointer border-none bg-transparent p-0`}
      style={customStyle}
    >
      {innerContent}
    </button>
  );
}
