export default function Hero() {
  return (
    <div className="home-hero z-20 overflow-hidden">
      <div className="relative w-full h-screen px-6 flex flex-col justify-center overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-[70%] md:h-auto">
          <h1 className="text-[#0057FF] text-2xl md:text-3xl lg:text-4xl w-full md:w-4/12 text-center md:text-left mb-8 md:mb-0 leading-tight">
            [ Brand Experience Studio ]
          </h1>
          <h2 className="text-[#0057FF] text-lg md:text-xl lg:text-2xl w-full md:w-5/12 text-center md:text-right leading-relaxed">
            [ We craft world-class strategy, design, and technology to build ambitious brands that captivate and inspire globally. Behold the power of brands ]
          </h2>
        </div>
        <div className="w-full flex justify-center md:justify-start mt-16 md:mt-28">
          <div className="md:w-3/12"></div>
          <div className="button-wrapper">
            <a 
              href="/about" 
              className="inline-flex items-center px-8 py-3 bg-[#0057FF] text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}