

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a24] px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
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
        <button className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md">
          Kontakt aufnehmen
        </button>
      </div>
      
      <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;