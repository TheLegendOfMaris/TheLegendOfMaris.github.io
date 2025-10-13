export interface Project {
  title: string;
  description: string;
  //ggf hier noch der laptop wrapper?
  image: string;
  images?: string[]; // Array für Galerie-Bilder
  hasWebsite: boolean;
  hasSummary: boolean;
  screenPosition?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  isGallery?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Softwareprojekt',
    description:
      'Das Softwareprojekt war ein 2-semestrigen Pflichtmodul im Studium. In Gruppen haben wir eine Webanwendung zu entwickeln.',
    image: '/Softwareprojekt.png',
    hasWebsite: true,
    hasSummary: true,
    screenPosition: {
      top: '8%',
      left: '12%',
      width: '76%',
      height: '55%',
    },
  },
  {
    title: 'Digitales Bücherregal',
    description:
      'Eine kleine Website, die meine persönlichen Lieblingsbücher in einer Übersicht darstellt.',
    image: '/Bookshelf.png',
    hasWebsite: true,
    hasSummary: false,
    screenPosition: {
      top: '5.4%',
      left: '10%',
      width: '80%',
      height: '84%',
    },
  },
  {
    title: 'Ve aRe Sampler',
    description:
      'Ein Unity-VR-Projekt, indem ein Sampler in einer virtuellen Umgebung erstellen und bedienen kann. Die 3D-Modellierung wurde mit Blender modelliert und anschließend wurde mit Hilfe von der Logic programmiert und verknüpft.',
    image: '/VRSampler.png',
    hasWebsite: false,
    hasSummary: true,
  },
  {
    title: 'Tempel in Blender',
    description:
      'Im Rahmen des Moduls Computeranimation musste ich Gebäude komplett selbst 3D-modellieren und mit Texturen und Materialien versehen werden.',
    image: '/temple-blender.png',
    images: [
      '/temple-blender.png',
      '/temple-blender-2.png',
      '/temple-blender-3.png',
      '/temple-blender-4.png',
    ],
    hasWebsite: false,
    hasSummary: false,
    isGallery: true,
  },
  {
    title: 'Praktikum',
    description:
      '3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.',
    image: '/wbs-logo.png',
    hasWebsite: false,
    hasSummary: false,
  },
  {
    title: 'Bachelorarbeit',
    description:
      '3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.',
    image: '/wbs-logo.png',
    hasWebsite: true,
    hasSummary: true,
  },
];
