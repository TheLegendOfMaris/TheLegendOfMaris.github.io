const Hero = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background with pixel clouds */}
      <div 
        className="absolute inset-0 bg-[#a8b5e0]"
        style={{
          backgroundImage: `url('/Clouds.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* This would be replaced with your actual cloud background image */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-[#1a1a24] mb-6">
          Portfolio
        </h1>
        <p className="text-lg md:text-xl text-[#1a1a24] max-w-2xl mb-8">
          Hi, ich bin Marie – kreative Softwareentwicklerin mit Fokus auf sauberen Code und Liebe zum Detail.
        </p>
        <button className="bg-[#13131f] text-white hover:bg-[#232336] transition-colors px-6 py-3 rounded-md">
          Projekte ansehen
        </button>
      </div>
      
      {/* Bottom clouds overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[150px]"
        style={{
          backgroundImage: `url('/bottom-clouds.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      >
        {/* This would be replaced with your actual bottom clouds image */}
      </div>
    </div>
  );
};

export default Hero;