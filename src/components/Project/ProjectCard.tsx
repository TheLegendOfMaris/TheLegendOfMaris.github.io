import { useState } from 'react';
import { Project } from './ProjectInfo';
import LaptopFrame from '/laptopblank.png';
import ImgGallery from './ImgGallery';
import Modal from './Modal';

// Funktion um die richtige Bildgröße zu bestimmen
const getImageSizeClass = (imageSize?: string) => {
  switch (imageSize) {
    case 'small':
      return 'w-48 h-auto mx-auto';
    case 'medium':
      return 'w-80 h-auto mx-auto';
    case 'large':
      return 'w-full h-auto';
    default:
      return 'w-full h-auto';
  }
};

export const CardLeft = ({ project }: { project: Project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-lg font-medium text-gray-400">{project.year}</p>
          </div>
          <p className="text-gray-300 whitespace-pre-wrap">
            {project.description}
          </p>
          <div className="flex gap-3 pt-2">
            {project.hasSummary && (
              <button
                className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {project.buttontext ? project.buttontext : 'Mehr Informationen'}
              </button>
            )}
            {project.hasWebsite && (
              <button
                className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm cursor-pointer"
                onClick={() => window.open(project.website)}
              >
                Website
              </button>
            )}
          </div>
        </div>
        <div className="relative">
          {project.hasWebsite ? (
            <div className="relative">
              <img
                src={LaptopFrame}
                alt="Laptop Frame"
                className="w-full h-auto"
              />
              <div
                className="absolute overflow-hidden rounded-sm"
                style={{
                  top: project.screenPosition?.top || '8%',
                  left: project.screenPosition?.left || '12%',
                  width: project.screenPosition?.width || '76%',
                  height: project.screenPosition?.height || '55%',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          ) : project.isGallery && project.images ? (
            <ImgGallery
              images={project.images}
              title={project.title}
              className="w-full"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className={`${getImageSizeClass(project.imageSize)} rounded-md shadow-lg`}
            />
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${project.title}`}
        content={project.summaryContent}
        images={project.summaryPdf}
      />
    </>
  );
};

export const CardRight = ({ project }: { project: Project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          {project.hasWebsite ? (
            <div className="relative">
              <img
                src={LaptopFrame}
                alt="Laptop Frame"
                className="w-full h-auto"
              />
              <div
                className="absolute overflow-hidden rounded-sm"
                style={{
                  top: project.screenPosition?.top || '8%',
                  left: project.screenPosition?.left || '12%',
                  width: project.screenPosition?.width || '76%',
                  height: project.screenPosition?.height || '55%',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          ) : project.isGallery && project.images ? (
            <ImgGallery
              images={project.images}
              title={project.title}
              className="w-full"
            />
          ) : (
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className={`${getImageSizeClass(project.imageSize)} rounded-md shadow-lg`}
            />
          )}
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-lg font-medium text-gray-400">{project.year}</p>
          </div>
          <p className="text-gray-300 whitespace-pre-wrap">
            {project.description}
          </p>
          <div className="flex gap-3 pt-2">
            {project.hasSummary && (
              <button
                className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                {project.buttontext ? project.buttontext : 'Mehr Informationen'}
              </button>
            )}
            {project.hasWebsite && (
              <button
                className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm cursor-pointer"
                onClick={() => window.open(project.website)}
              >
                Website
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${project.title}`}
        content={project.summaryContent}
        images={project.summaryPdf}
      />
    </>
  );
};
