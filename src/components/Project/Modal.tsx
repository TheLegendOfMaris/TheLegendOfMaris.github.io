import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content?: string;
  pdfUrl?: string;
}

const Modal = ({ isOpen, onClose, title, content, pdfUrl }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#1a1a24] rounded-lg shadow-xl max-w-[92vw] max-h-[98vh] w-full mx-4 overflow-hidden z-[9999]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Modal schließen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto max-h-[calc(98vh-80px)] p-4">
          {pdfUrl ? (
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full border-0"
              style={{
                height: 'calc(98vh - 100px)',
                minHeight: '1500px',
                zoom: '0.4',
              }}
            >
              <p>
                Ihr Browser unterstützt keine PDF-Anzeige.{' '}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  PDF herunterladen
                </a>
              </p>
            </object>
          ) : (
            <div className="p-6 text-gray-300 whitespace-pre-wrap overflow-y-auto max-h-[calc(95vh-80px)]">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
