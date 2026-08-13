export default function StudioIntroCenterpiece() {
  return (
    <div data-animate="centerpiece-root" className="flex flex-col items-center gap-4 sm:gap-6 md:gap-[1rem] w-full">
      {/* Inner Row/Col */}
      <div data-animate="inner-row" className="relative flex flex-col justify-center items-center w-full gap-3 sm:gap-4 md:gap-0">
        
        <div data-animate="text-left-wrapper" className="relative md:absolute md:right-[50%] md:mr-[clamp(6.5rem,calc(7.5vw+2.5rem),11.5rem)] flex justify-center overflow-hidden">
          <h2 
            data-animate="text-left"
            className="text-white text-[clamp(2.75rem,8vw,9.5rem)] font-bold leading-tight md:leading-[1.2] uppercase whitespace-nowrap md:mt-[1.5rem] md:opacity-0 md:scale-95"
          >
            THIS IS
          </h2>
        </div>
        
        {/* Video Wrapper */}
        <div 
          data-animate="video-wrapper"
          className="relative z-20 w-full max-w-[20rem] sm:max-w-[24rem] aspect-[16/10] sm:aspect-video rounded-lg md:w-full md:h-[100vh] md:aspect-auto md:max-w-none md:rounded-none overflow-hidden flex justify-center items-center bg-black/20 flex-shrink-0 shadow-xl"
        >
          <video
            src="/videos/showcase-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Optional Play Button Overlay */}
          <div data-animate="play-icon" className="relative z-10 w-[clamp(2rem,4vw,3.4375rem)] h-[clamp(2rem,4vw,3.4375rem)] bg-white/70 rounded-[0.3125rem] flex justify-center items-center backdrop-blur-sm shadow-sm opacity-0 md:transition-opacity">
            <div className="w-0 h-0 border-t-[0.4rem] border-t-transparent border-l-[0.6rem] border-l-black border-b-[0.4rem] border-b-transparent ml-1 md:border-t-[0.6rem] md:border-l-[1rem] md:border-b-[0.6rem]" />
          </div>
        </div>

        <div data-animate="text-right-wrapper" className="relative md:absolute md:left-[50%] md:ml-[clamp(6.5rem,calc(7.5vw+2.5rem),11.5rem)] flex justify-center overflow-hidden">
          <h2 
            data-animate="text-right"
            className="text-white text-[clamp(2.75rem,8vw,9.5rem)] font-bold leading-tight md:leading-[1.2] uppercase whitespace-nowrap md:mt-[1.5rem] md:opacity-0 md:scale-95"
          >
            BEYOND
          </h2>
        </div>

      </div>

    </div>
  );
}
