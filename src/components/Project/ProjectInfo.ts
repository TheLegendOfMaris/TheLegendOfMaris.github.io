export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  hasWebsite: boolean;
  website?: string;
  hasSummary: boolean;
  summaryContent?: string;
  summaryPdf?: string;
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
    title: 'Digitales Bücherregal',
    year: '2023',
    description:
      'Im Rahmen eines Hochschulmoduls entwickelte ich eine kleine Website, die meine persönlichen Lieblingsbücher in einer übersichtlichen Galerie darstellt. Das Projekt diente als Übung zur Webentwicklung und bot mir die Gelegenheit, erste praktische Erfahrungen mit Bootstrap zu sammeln und den Umgang mit responsivem Design zu vertiefen.',
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
    title: 'DCNM-Stellenbörse',
    year: '2024-2025',
    description:
      'Die DCNM-Stellenbörse ist eine zentrale Plattform zur Veröffentlichung wissenschaftlicher Stellenangebote im mitteldeutschen Raum. Sie wurde in Kooperation mit dem Leipzig Science Network entwickelt, um die Sichtbarkeit und Zugänglichkeit wissenschaftlicher Karrieremöglichkeiten zu verbessern. Das Projekt entstand im Rahmen eines studentischen Softwareentwicklungsprojekts, bei dem wir in einem interdisziplinären Team nach dem Scrum-Framework arbeiteten. Mein Fokus lag auf der Entwicklung und Integration der Backend-Services und der Validierung der KI-Ergebnisse.',
    image: '/Softwareprojekt.png',
    hasWebsite: true,
    website: 'https://dcnm-stellen.imn.htwk-leipzig.de/',
    summaryPdf: '/L2-Poster.png',
    hasSummary: true,
    screenPosition: {
      top: '5.5%',
      left: '10.5%',
      width: '79%',
      height: '83%',
    },
  },

  {
    title: 'Ve aRe Sampler',
    year: '2025',
    description:
      'Ein Unity-VR-Projekt, indem ein Sampler in einer virtuellen Umgebung erstellen und bedienen kann. Die 3D-Modellierung wurde mit Blender modelliert und anschließend wurde mit Hilfe von der Logic programmiert und verknüpft.',
    image: '/VRSampler.png',
    hasWebsite: false,
    hasSummary: true,
  },
  {
    title: 'Tempel in Blender',
    year: '2025',
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
    year: '2025',
    description:
      '3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.',
    image: '/WBS.png',
    hasWebsite: false,
    hasSummary: true,
    imageSize: 'small',
  },
  {
    title: 'Bachelorarbeit',
    year: '2025',
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
