import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const aspira = localFont({
  src: [
    { path: "./fonts/aspira/Aspira-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/aspira/Aspira-ThinIt.woff2", weight: "100", style: "italic" },
    { path: "./fonts/aspira/Aspira-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/aspira/Aspira-LightIt.woff2", weight: "300", style: "italic" },
    { path: "./fonts/aspira/Aspira-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/aspira/Aspira-It.woff2", weight: "400", style: "italic" },
    { path: "./fonts/aspira/Aspira-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/aspira/Aspira-MediumIt.woff2", weight: "500", style: "italic" },
    { path: "./fonts/aspira/Aspira-Demi.woff2", weight: "600", style: "normal" },
    { path: "./fonts/aspira/Aspira-DemiIt.woff2", weight: "600", style: "italic" },
    { path: "./fonts/aspira/Aspira-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/aspira/Aspira-BoldIt.woff2", weight: "700", style: "italic" },
    { path: "./fonts/aspira/Aspira-Heavy.woff2", weight: "800", style: "normal" },
    { path: "./fonts/aspira/Aspira-HeavyIt.woff2", weight: "800", style: "italic" },
    { path: "./fonts/aspira/Aspira-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/aspira/Aspira-BlackIt.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-aspira",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyond Fitness",
  description: "Boutique fitness studio, Victoria Island",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${aspira.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
