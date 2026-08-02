import Button from "./Button";

export default function StudioIntroCenterpiece() {
  return (
    <div data-animate="centerpiece-root" className="flex flex-col items-center gap-[1rem] w-full">
      {/* Inner Row/Col */}
      <div data-animate="inner-row" className="flex flex-col md:flex-row justify-center items-center w-full gap-[0.5rem] md:gap-0">
        
        <div data-animate="text-left-wrapper" className="flex-1 flex justify-center md:justify-end md:pr-[0.25rem] overflow-hidden">
          <h2 
            data-animate="text-left"
            className="text-white text-[3rem] md:text-[7.5rem] font-bold leading-[1.2] tracking-[-0.01em] uppercase whitespace-nowrap"
          >
            THIS IS
          </h2>
        </div>
        
        {/* Video Wrapper */}
        <div 
          data-animate="video-wrapper"
          className="relative w-[13.375rem] h-[6.4375rem] rounded-[0.5rem] overflow-hidden flex justify-center items-center bg-black/20 flex-shrink-0"
        >
          <video
            src="/videos/studio-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Optional Play Button Overlay */}
          <div data-animate="play-icon" className="relative z-10 w-[3.4375rem] h-[3.4375rem] bg-white/70 rounded-[0.3125rem] flex justify-center items-center backdrop-blur-sm shadow-sm opacity-0 transition-opacity">
            <div className="w-0 h-0 border-t-[0.6rem] border-t-transparent border-l-[1rem] border-l-black border-b-[0.6rem] border-b-transparent ml-1" />
          </div>
        </div>

        <div data-animate="text-right-wrapper" className="flex-1 flex justify-center md:justify-start md:pl-[0.25rem] overflow-hidden">
          <h2 
            data-animate="text-right"
            className="text-white text-[3rem] md:text-[7.5rem] font-bold leading-[1.2] tracking-[-0.01em] uppercase whitespace-nowrap"
          >
            BEYOND
          </h2>
        </div>

      </div>

      {/* Button */}
      <div data-animate="button-wrapper" className="overflow-hidden">
        <div data-animate="button">
          <Button variant="primary" theme="dark">
            EXPLORE
          </Button>
        </div>
      </div>

    </div>
  );
}
