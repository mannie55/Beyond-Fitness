"use client";

interface InstagramEmbedCardProps {
  url?: string;
  className?: string;
}

export default function InstagramEmbedCard({ 
  url = "https://www.instagram.com/reel/DbQO668M7ou/", // Real Beyond Fitness Reel provided by user
  className = "",
}: InstagramEmbedCardProps) {
  // Ensure the URL ends with /embed for the iframe
  const embedUrl = url.endsWith("/") ? `${url}embed` : `${url}/embed`;
  
  return (
    <div className={`w-full md:max-w-[26rem] mx-auto bg-white border border-[var(--color-dandelion-dark)]/20 p-2 sm:p-2.5 shadow-[0_4px_20px_-4px_rgba(76,63,28,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(76,63,28,0.12)] hover:border-[var(--color-dandelion-dark)]/50 transition-all duration-300 font-sans ${className}`}>
      {/* 
        This is the Official Way: 
        Using an iframe directly calls Instagram's embed endpoint.
        Notice how it brings in the Instagram header, comments, likes, and styling.
      */}
      <div className="w-full overflow-hidden bg-[var(--color-dandelion-lightest)] flex justify-center items-center">
        <iframe 
          src={embedUrl}
          className="w-full min-h-[480px] sm:min-h-[580px] border-none"
          scrolling="no" 
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
