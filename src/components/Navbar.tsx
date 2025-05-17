import Mond from '../assets/Mond.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a24]/80 backdrop-blur-sm px-6 py-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={Mond} alt="Mond-Logo" className="w-8 h-8" />
        <span className="font-medium">Marie Schwabe</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="hover:text-gray-300 transition-colors">
          Über mich
        </a>
        <a href="#skills" className="hover:text-gray-300 transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-gray-300 transition-colors">
          Projekte
        </a>
        <a href="#contact" className="bg-[#000000] hover:bg-[#08071B] transition-colors px-4 py-2 rounded-md">
          Kontakt aufnehmen
        </a>
      </div>
    </nav>
  );
};

export default Navbar;