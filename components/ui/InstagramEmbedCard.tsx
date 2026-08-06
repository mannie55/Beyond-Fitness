"use client";

interface InstagramEmbedCardProps {
  url?: string;
}

export default function InstagramEmbedCard({ 
  url = "https://www.instagram.com/reel/DbQO668M7ou/" // Real Beyond Fitness Reel provided by user
}: InstagramEmbedCardProps) {
  // Ensure the URL ends with /embed for the iframe
  const embedUrl = url.endsWith("/") ? `${url}embed` : `${url}/embed`;
  
  return (
    <div className="w-full md:max-w-[26rem] mx-auto bg-white p-2 rounded-lg shadow-xl font-sans">
      {/* 
        This is the Official Way: 
        Using an iframe directly calls Instagram's embed endpoint.
        Notice how it brings in the Instagram header, comments, likes, and styling.
      */}
      <div className="w-full rounded-md overflow-hidden bg-gray-50 flex justify-center items-center">
        <iframe 
          src={embedUrl}
          className="w-full min-h-[580px] border-none"
          scrolling="no" 
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
