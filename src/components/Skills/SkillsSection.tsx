const Skills = () => {
  const skillCategories = [
    {
      title: "Programmiersprachen",
      skills: ["C/C++", "Java", "JavaScript", "Python"]
    },
    {
      title: "Web- & Softwareentwicklung",
      skills: ["React", "Node.js", "Bootstrap", "HTML5", "MySQL", "MongoDB", "REST", "GraphQL"]
    },
    {
      title: "Tools & Sonstiges",
      skills: ["GitHub", "Figma", "Unity", "Blender", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-[#1a1a24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative">
              {index === 0 && (
                <div className="absolute -top-10 -left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-[#1a1a24] shadow-lg z-10">
                  <img 
                    src="/circle-image.jpg" 
                    alt="Decorative circle" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="bg-[#d8ddf0] p-6 rounded-md h-full">
                <h3 className="text-[#1a1a24] font-semibold mb-4">{category.title}</h3>
                <ul className="text-[#1a1a24] space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-gray-300 text-sm max-w-3xl">
          <p className="mb-4">
            Note: Just for your whole online or real. Web out in some cases to show how a text can look like.
          </p>
          <p>
            Exception without meaning, vision matter when rules carefully created these conceptualized pages can feel received the obvious Content. Age, optimization of tools that cut. Practical referencing, systematically space-traveler standard tools, 
            Photoshop, Illustrator, Sketch, Figma, Axure, Framer, Webflow, UXPin, Adobe XD, perfect balance between designing, and seamless coding, or further information 
            from developers. Others need to workplace doesn't need. Let's not always perfect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;