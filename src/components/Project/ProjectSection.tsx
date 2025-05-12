const Projects = () => {
  const projects = [
    {
      title: "Softwareprojekt",
      description: "Das Softwareprojekt war ein 2-semestrigen Pflichtmodul im Studium. In Gruppen haben wir eine Webanwendung zu entwickeln.",
      image: "/laptop-mockup.png",
      hasWebsite: true,
      hasSummary: true
    },
    {
      title: "Digitales Bücherregal",
      description: "Eine kleine Website, die meine persönlichen Lieblingsbücher in einer Übersicht darstellt.",
      image: "/bookshelf-mockup.png",
      hasWebsite: true,
      hasSummary: false
    },
    {
      title: "Ve aRe Sampler",
      description: "Ein Unity-VR-Projekt, indem ein Sampler in einer virtuellen Umgebung erstellen und bedienen kann. Die 3D-Modellierung wurde mit Blender modelliert und anschließend wurde mit Hilfe von der Logic programmiert und verknüpft.",
      image: "/vr-sampler.png",
      hasWebsite: false,
      hasSummary: true
    },
    {
      title: "Tempel in Blender",
      description: "Im Rahmen des Moduls Computeranimation musste ich Gebäude komplett selbst 3D-modellieren und mit Texturen und Materialien versehen werden.",
      image: "/temple-blender.png",
      hasWebsite: false,
      hasSummary: false
    },
    {
      title: "Praktikum",
      description: "3-Monatiges Praktikum bei der IT-Service Firma WBS in Leipzig. Hauptsächlich war die Entwicklung eines personalisierten PDF-Exports meine Aufgabe.",
      image: "/wbs-logo.png",
      hasWebsite: false,
      hasSummary: false
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-[#1a1a24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projekte</h2>
        
        <div className="space-y-16">
          {/* First project with larger display */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{projects[0].title}</h3>
              <p className="text-gray-300">{projects[0].description}</p>
              <div className="flex gap-3 pt-2">
                {projects[0].hasSummary && (
                  <button className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm">
                    Zusammenfassung
                  </button>
                )}
                {projects[0].hasWebsite && (
                  <button className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm">
                    Website
                  </button>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-16 h-16 rounded-full overflow-hidden border-4 border-[#1a1a24] shadow-lg z-10">
                <img 
                  src="/circle-image.jpg" 
                  alt="Decorative circle" 
                  className="w-full h-full object-cover"
                />
              </div>
              <img 
                src={projects[0].image || "/placeholder.svg"} 
                alt={projects[0].title} 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
          
          {/* Second project */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={projects[1].image || "/placeholder.svg"} 
                alt={projects[1].title} 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-semibold">{projects[1].title}</h3>
              <p className="text-gray-300">{projects[1].description}</p>
              {projects[1].hasWebsite && (
                <button className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm">
                  Zur Website
                </button>
              )}
            </div>
          </div>
          
          {/* Third project */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{projects[2].title}</h3>
              <p className="text-gray-300">{projects[2].description}</p>
              {projects[2].hasSummary && (
                <button className="bg-[#13131f] hover:bg-[#232336] transition-colors px-4 py-2 rounded-md text-sm">
                  Zusammenfassung
                </button>
              )}
            </div>
            <div>
              <img 
                src={projects[2].image || "/placeholder.svg"} 
                alt={projects[2].title} 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
          
          {/* Fourth project */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={projects[3].image || "/placeholder.svg"} 
                alt={projects[3].title} 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-semibold">{projects[3].title}</h3>
              <p className="text-gray-300">{projects[3].description}</p>
            </div>
          </div>
          
          {/* Fifth project */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{projects[4].title}</h3>
              <p className="text-gray-300">{projects[4].description}</p>
            </div>
            <div className="flex justify-center">
              <img 
                src={projects[4].image || "/placeholder.svg"} 
                alt={projects[4].title} 
                className="w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;