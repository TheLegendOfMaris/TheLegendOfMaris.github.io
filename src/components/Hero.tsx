import Clouds from '../assets/Clouds.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with pixel clouds */}
      <div className="absolute inset-0">
        <img 
          src={Clouds} 
          alt="Cloud Background" 
          className="w-full h-full object-contain [image-rendering:pixelated]"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-[#1a1a24] mb-6">
          Portfolio
        </h1>
        <p className="text-lg md:text-xl text-[#1a1a24] max-w-2xl mb-8">
          Hi, ich bin Marie – kreative Softwareentwicklerin mit Fokus auf sauberen Code und Liebe zum Detail.
        </p>
        <button className="bg-[#13131f] text-white hover:bg-[#232336] transition-colors px-9 py-4 rounded-md text-lg">
          Projekte ansehen
        </button>
      </div>
    </div>
  );
};

export default Hero;