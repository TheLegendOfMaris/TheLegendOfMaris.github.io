import { useState } from 'react';
import Modal from './Project/Modal';
import { impressumContent, datenschutzContentHtml } from './LegalContent';

const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);
  return (
    <footer className="py-8 px-6 bg-[#F7F7F7]/[0.05] text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Marie Schwabe</div>

        <div className="text-xs text-gray-400 text-center">
          Zuletzt aktualisiert: 14.10.2025
        </div>

        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => setIsImpressumOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Impressum
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsDatenschutzOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
            </li>
            <li>
              <a
                href="https://github.com/TheLegendOfMaris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marie-schwabe-006075368/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
        title="Impressum"
        content={impressumContent}
      />

      <Modal
        isOpen={isDatenschutzOpen}
        onClose={() => setIsDatenschutzOpen(false)}
        title="Datenschutzerklärung"
        htmlContent={datenschutzContentHtml}
      />
    </footer>
  );
};

export default Footer;
