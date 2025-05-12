const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[#13131f] text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          © {new Date().getFullYear()} Marie Schwabe
        </div>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Impressum
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;