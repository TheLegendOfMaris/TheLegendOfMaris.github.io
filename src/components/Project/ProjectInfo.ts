export interface Project {
  title: string;
  description: string;
  image: string;
  hasWebsite: boolean;
  website?: string;
  hasSummary: boolean;
  isGallery?: boolean;
  images?: string[];
  //Positioning and Sizing
  screenPosition?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  imageSize?: 'small' | 'medium' | 'large' | 'auto';
}

export const projects: Project[] = [
  {
    title: 'Softwareprojekt',
    description:
      'Das Softwareprojekt war ein 2-semestrigen Pflichtmodul im Studium. In Gruppen haben wir eine Webanwendung zu entwickeln.',
    image: '/Softwareprojekt.png',
    hasWebsite: true,
    website: 'https://dcnm-stellen.imn.htwk-leipzig.de/',
    hasSummary: true,
    screenPosition: {
      top: '5.5%',
      left: '10.5%',
      width: '79%',
      height: '83%',
    },
  },
  {
    title: 'Digitales Bücherregal',
    description:
      'Eine kleine Website, die meine persönlichen Lieblingsbücher in einer Übersicht darstellt.',
    image: '/Bookshelf.png',
    hasWebsite: true,
    website: 'https://www.imn.htwk-leipzig.de/~mschwabe/',
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
    image: '/RenderDämmerung.png',
    images: [
      '/RenderDämmerung.png',
      '/RenderTagsüber.png',
      '/RenderDetail.png',
      '/RenderDetailWand.png',
      '/RenderMorgens.png',
    ],
    hasWebsite: false,
    hasSummary: false,
    isGallery: true,
  },
  {
    title: 'Praktikum',
    description:
      '3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.',
    image: '/WBS.png',
    hasWebsite: false,
    hasSummary: true,
    imageSize: 'small',
  },
  {
    title: 'Bachelorarbeit',
    description:
      '3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.',
    image: '/Wissensquell.png',
    hasWebsite: true,
    website: 'http://wissensquell.imn.htwk-leipzig.de/',
    hasSummary: true,
    screenPosition: {
      top: '5.5%',
      left: '10.3%',
      width: '79.5%',
      height: '83.5%',
    },
  },
];
