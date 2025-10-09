import { useState } from 'react';
import Mond from '../assets/Mond.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a
          href="#contact"
          className="bg-[#000000] hover:bg-[#08071B] transition-colors px-4 py-2 rounded-md"
        >
          Kontakt aufnehmen
        </a>
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a1a24] md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              Über mich
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300 transition-colors"
            >
              Projekte
            </a>
            <a
              href="#contact"
              className="bg-[#000000] hover:bg-[#08071B] transition-colors px-4 py-2 rounded-md"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
