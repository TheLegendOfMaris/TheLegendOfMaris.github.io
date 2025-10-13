import { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

const ImgGallery = ({ images, title, className = '' }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        previous();
      } else if (event.key === 'ArrowRight') {
        forward();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]);

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-md ${className}`}
      style={{ width: '30rem' }}
    >
      {/* Counter */}
      <div className="absolute right-2 top-2 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
        <span>{currentIndex}</span>/<span>{images.length}</span>
      </div>

      {/* Previous Button */}
      <button
        onClick={previous}
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition-colors"
        aria-label="Vorheriges Bild"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={forward}
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition-colors"
        aria-label="Nächstes Bild"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative h-80 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 transition-opacity duration-300 ${
              currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Bild ${index + 1}`}
              className="rounded-sm w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
