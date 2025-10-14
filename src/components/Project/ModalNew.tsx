import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content?: string;
  htmlContent?: string;
  images?: string | string[];
}

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  htmlContent,
  images,
}: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-8 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
        onClick={onClose}
      />

      <div className="relative bg-[#1a1a24] rounded-lg shadow-xl max-w-[92vw] w-full mx-4 z-[9999] flex flex-col max-h-[85vh]">
        <div className="flex items-center justify-between p-6 border-b border-gray-600 flex-shrink-0">
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

        <div className="overflow-auto p-4 flex-1 min-h-0">
          {images ? (
            <div className="space-y-4">
              {Array.isArray(images) ? (
                images.map((imageSrc: string, index: number) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt={`${title} - Bild ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))
              ) : (
                <img
                  src={images}
                  alt={title}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          ) : (
            <div className="text-gray-300 whitespace-pre-wrap">
              {htmlContent ? (
                <div
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  className="prose prose-invert max-w-none [&_a]:text-blue-400 [&_a]:underline [&_a:hover]:text-blue-300"
                />
              ) : (
                content
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
