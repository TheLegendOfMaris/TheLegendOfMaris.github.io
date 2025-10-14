export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  hasWebsite: boolean;
  website?: string;
  hasSummary: boolean;
  summaryContent?: string;
  summaryPdf?: string | string[];
  isGallery?: boolean;
  buttontext?: string;
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
      'Ein Unity-VR-Projekt, in dem ein virtueller Sampler entworfen und bedienbar gemacht wurde. Die 3D-Modelle entstanden in Blender und wurden anschließend in Unity mit interaktiver C#-Logik verbunden. Das Projekt wurde im Team realisiert, meine Hauptaufgaben lagen in der Organisation, im Design der virtuellen Umgebung sowie in Teilen der Logikentwicklung.',
    image: '/VRSampler.png',
    hasWebsite: false,
    hasSummary: false,
  },
  {
    title: 'Tempel in Blender',
    year: '2025',
    description:
      'Im Rahmen des Moduls Computeranimation modellierte ich einen Tempel komplett in 3D, inklusive Texturen, Materialien und Rendering. Ziel war es, realistische Architektur umzusetzen und Erfahrungen mit Animationen und Rendering in Blender zu sammeln.',
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
      'Drei-Monatiges Praktikum bei der WBS IT-Service GmbH in Leipzig mit Fokus auf die Entwicklung eines PDF-Exports. Das Praktikum bot mir die Gelegenheit, praxisnah an realen Kundenprojekten zu arbeiten, meine im Studium erworbenen Kenntnisse in Webentwicklung und Projektarbeit anzuwenden und erste berufliche Erfahrungen zu sammeln. Besonders wertvoll waren Einblicke in Unternehmensprozesse, die Arbeit mit modernen Webtechnologien sowie die eigenständige Umsetzung eines Teilprojekts.',
    image: '/WBS.png',
    hasWebsite: false,
    hasSummary: true,
    buttontext: 'Praktikumszeugnis',
    summaryPdf: ['/Praktikumszeugnis1.png', '/Praktikumszeugnis2.png'],
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
